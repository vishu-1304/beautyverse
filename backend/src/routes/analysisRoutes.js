import { Router } from 'express';
import analysisController from '../controllers/analysisController.js';

const router = Router();

// Route mappings
router.get('/health', analysisController.checkHealth);
router.post('/analyze', analysisController.analyze);

export default router;
