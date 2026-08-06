import analysisService from '../services/analysisService.js';

/**
 * Handles server health check requests.
 */
export function checkHealth(req, res) {
  return res.status(200).json({
    status: "ok",
    message: "BeautyVerse Backend Running"
  });
}

/**
 * Handles face analysis requests.
 */
export async function analyze(req, res, next) {
  try {
    const file = req.file;
    const bodyImage = req.body.image;
    const quizData = req.body.quiz;

    const image = file || bodyImage;

    let quiz = quizData;
    if (typeof quizData === 'string') {
      try {
        quiz = JSON.parse(quizData);
      } catch (e) {
        // use as-is
      }
    }

    // Check if body parameter properties are present
    if (quiz === undefined || image === undefined) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Invalid format. Expected 'quiz' and 'image' data."
      });
    }

    const report = await analysisService.processAnalysis(quiz, image);
    
    // Map response to the format expected by the frontend
    return res.status(200).json({
      faceShape: report.faceShape || "Oval",
      skinTone: report.skinTone || "Warm Golden",
      skinType: report.skinType || "Combination",
      confidence: report.beautyScore || 95,
      hydration: report.hydration || 88,
      symmetry: report.symmetry || 92,
      recommendation: report.recommendation || "Golden Hour Glam"
    });
  } catch (error) {
    return next(error);
  }
}


export default {
  checkHealth,
  analyze
};
