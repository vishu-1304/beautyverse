import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import env from './src/config/env.js';
import connectDB from './src/config/db.js';
import analysisRoutes from './src/routes/analysisRoutes.js';
import errorHandler from './src/middlewares/errorHandler.js';

const app = express();
const PORT = env.port || 5000;

// Security Middlewares
app.use(helmet());
app.use(cors());

// Body Parsing Middlewares
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Logging Middleware
app.use(morgan('dev'));

// Mount API Routes
app.use('/api', analysisRoutes);

// Global Error Handler
app.use(errorHandler);

// Connect to database on startup
connectDB()
  .catch((err) => {
    console.error('[Server] Database initialization failed. Check your connection settings.', err.message);
  });

// Start server listening
app.listen(PORT, () => {
  console.log(`[Server] BeautyVerse AI Backend running on port ${PORT} in ${env.nodeEnv || 'development'} mode`);
});

