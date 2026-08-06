import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Determine root directory to locate the .env file in ES modules environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.resolve(__dirname, '../../');

dotenv.config({ path: path.join(rootPath, '.env') });

export const env = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development'
};

export default env;
