import mongoose, { set } from 'mongoose';
import { credentials } from './credentials';

export const connectDB = async (): Promise<void> => {
  try {
    if (!credentials.MONGODB_URI) {
      throw new Error('MongoDB URI is not defined');
    }
    await mongoose.connect(credentials.MONGODB_URI);
    mongoose.set('debug', true);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}; 