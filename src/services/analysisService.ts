export interface QuizAnswers {
  fullName?: string;
  age?: number | string;
  gender?: string;
  skinType?: string;
  concerns?: string[];
  preference?: string;
}

export interface AnalysisResult {
  faceShape: string;
  skinTone: string;
  skinType: string;
  confidence: number;
  hydration: number;
  symmetry: number;
  recommendation: string;
}

export interface HistoryRecord {
  _id: string;
  faceShape: string;
  skinTone: string;
  skinType: string;
  beautyScore: number;
  recommendation: string;
  createdAt: string;
  updatedAt?: string;
}

/**
 * Helper to handle standard API errors, including backend offline and request timeouts.
 */
function handleApiError(error: any): never {
  if (error.name === 'AbortError') {
    throw new Error('Analysis request timed out. Please try again.');
  }
  if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
    throw new Error('Dermal analysis server is unreachable. Please ensure the Express backend is running on http://localhost:5000.');
  }
  throw error;
}

/**
 * Uploads an image file to the Express backend.
 * 
 * @param file The selected image file
 * @returns Parsed JSON response from the server
 */
export async function uploadImage(file: File): Promise<any> {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('quiz', JSON.stringify({})); // Pass empty quiz fallback

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout

  try {
    const response = await fetch('http://localhost:5000/api/analyze', {
      method: 'POST',
      body: formData,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Upload failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error: any) {
    clearTimeout(timeoutId);
    handleApiError(error);
  }
}

/**
 * Uploads the image and performs AI Dermal Analysis combining quiz answers.
 * 
 * @param file The selected image file
 * @returns Map of the returned AI analysis report matching frontend format
 */
export async function analyzeFace(file: File): Promise<AnalysisResult> {
  const savedAnswers = localStorage.getItem('beautyverse_quiz_answers');
  const quiz = savedAnswers ? JSON.parse(savedAnswers) : {};

  const formData = new FormData();
  formData.append('image', file);
  formData.append('quiz', JSON.stringify(quiz));

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15-second timeout

  try {
    const response = await fetch('http://localhost:5000/api/analyze', {
      method: 'POST',
      body: formData,
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Analysis failed: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    
    // Support either Day 13 flat fields or Day 14 nested analysis fields
    const result = data.analysis || data;
    
    return {
      faceShape: result.faceShape || 'Oval',
      skinTone: result.skinTone || 'Warm Golden',
      skinType: result.skinType || 'Combination',
      confidence: result.confidence || result.beautyScore || 95,
      hydration: data.hydration || 88,
      symmetry: data.symmetry || 92,
      recommendation: result.recommendation || 'Golden Hour Glam'
    };
  } catch (error: any) {
    clearTimeout(timeoutId);
    handleApiError(error);
  }
}

/**
 * Fetches the latest 10 analyses from the backend database history.
 * 
 * @returns List of history record objects
 */
export async function fetchAnalysisHistory(): Promise<HistoryRecord[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

  try {
    const response = await fetch('http://localhost:5000/api/history', {
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    const data = await response.json();
    if (!response.ok || !data.success) {
      throw new Error(data.message || 'Failed to fetch history');
    }

    return data.history || [];
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('History request timed out.');
    }
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Database server is offline or unreachable.');
    }
    throw error;
  }
}

/**
 * Backward compatibility wrapper for older simulations.
 */
export async function analyzeBeautyProfile(
  image: File | string | null,
  answers: QuizAnswers
): Promise<AnalysisResult> {
  if (image instanceof File) {
    return analyzeFace(image);
  }
  
  // Return fallback simulation if no file is provided
  return {
    faceShape: 'Oval',
    skinTone: 'Warm Golden',
    skinType: answers.skinType || 'Combination',
    confidence: 98,
    hydration: 91,
    symmetry: 96,
    recommendation: 'Golden Hour Glam'
  };
}
