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

/**
 * Simulates an AI request to analyze a beauty profile based on an uploaded image and quiz answers.
 * Returns mock analysis data after a 2-second delay.
 * 
 * @param image The selected image file or preview URL
 * @param answers The answers retrieved from the user's quiz
 */
export async function analyzeBeautyProfile(
  image: File | string | null,
  answers: QuizAnswers
): Promise<AnalysisResult> {
  // Use parameters to personalize the mock return data and avoid unused-vars compilation errors
  const imageLabel = image instanceof File ? `File:${image.name}` : (image ? 'URL' : 'None');
  console.log(`[AI Core] Running dermal mapping using image source (${imageLabel})`);
  console.log('[AI Core] Injecting consultation responses:', answers);

  const derivedSkinType = answers.skinType
    ? (answers.skinType.charAt(0).toUpperCase() + answers.skinType.slice(1))
    : "Combination";

  const derivedRecommendation = answers.preference === 'natural'
    ? "Natural Dewy Radiance"
    : answers.preference === 'glam'
      ? "Golden Hour Glam"
      : "Bespoke Rosewood Glam";

  return new Promise<AnalysisResult>((resolve) => {
    setTimeout(() => {
      resolve({
        faceShape: "Oval",
        skinTone: "Warm Golden",
        skinType: derivedSkinType,
        confidence: 98,
        hydration: 91,
        symmetry: 96,
        recommendation: derivedRecommendation
      });
    }, 2000);
  });
}
