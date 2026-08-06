import mongoose from 'mongoose';

/**
 * Connects to MongoDB database using MONGODB_URI.
 */
export async function connectDB() {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MONGODB_URI environment variable is not defined in env configuration.');
    }

    const conn = await mongoose.connect(mongoURI);
    console.log(`[Database] MongoDB Connected successfully: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`[Database] MongoDB Connection Error: ${error.message}`);
    throw error;
  }
}

export default connectDB;
