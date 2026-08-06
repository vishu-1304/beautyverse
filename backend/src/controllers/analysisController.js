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
    const { quiz, image } = req.body;

    // Check if body parameter properties are present
    if (quiz === undefined || image === undefined) {
      return res.status(400).json({
        error: "Bad Request",
        message: "Invalid JSON format. Expected properties: 'quiz' and 'image'"
      });
    }

    const report = await analysisService.processAnalysis(quiz, image);
    return res.status(200).json(report);
  } catch (error) {
    return next(error);
  }
}

export default {
  checkHealth,
  analyze
};
