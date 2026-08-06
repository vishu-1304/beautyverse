import { Router } from 'express';
import analysisController from '../controllers/analysisController.js';
import upload from '../middlewares/upload.js';

const router = Router();

// Route mappings
router.get('/health', analysisController.checkHealth);
router.post('/analyze', upload.single('image'), analysisController.analyze);
router.get('/history', analysisController.getHistory);


export default router;

