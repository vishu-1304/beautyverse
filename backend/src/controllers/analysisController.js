import mongoose from 'mongoose';
import analysisService from '../services/analysisService.js';
import { Analysis } from '../models/Analysis.js';

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
 * Handles face analysis requests and saves report to MongoDB.
 */
export async function analyze(req, res, next) {
  try {
    // Check if database is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database unavailable"
      });
    }

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
    
    // Save record to MongoDB database
    const imageLabel = file 
      ? file.originalname 
      : (typeof image === 'string' ? image.substring(0, 100) : 'Base64/Url');

    const savedAnalysis = await Analysis.create({
      image: imageLabel,
      faceShape: report.faceShape || "Oval",
      skinTone: report.skinTone || "Warm Golden",
      skinType: report.skinType || "Combination",
      beautyScore: report.beautyScore || 95,
      recommendation: report.recommendation || "Golden Hour Glam"
    });
    
    // Map response to the format expected by both older Day 13 and new Day 14 specifications
    return res.status(200).json({
      success: true,
      faceShape: savedAnalysis.faceShape,
      skinTone: savedAnalysis.skinTone,
      skinType: savedAnalysis.skinType,
      confidence: savedAnalysis.beautyScore,
      hydration: report.hydration || 88,
      symmetry: report.symmetry || 92,
      recommendation: savedAnalysis.recommendation,
      analysis: savedAnalysis
    });
  } catch (error) {
    return next(error);
  }
}

/**
 * Returns latest 10 analyses, newest first.
 */
export async function getHistory(req, res, next) {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        message: "Database unavailable"
      });
    }

    const history = await Analysis.find().sort({ createdAt: -1 }).limit(10);
    return res.status(200).json({
      success: true,
      history
    });
  } catch (error) {
    return next(error);
  }
}

export default {
  checkHealth,
  analyze,
  getHistory
};
