import dotenv from 'dotenv';

dotenv.config();

export const credentials = {
  // Database
  MONGODB_URI: process.env.MONGODB_URI,

  // JWT
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '24h',

  // Server
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV,
}; 