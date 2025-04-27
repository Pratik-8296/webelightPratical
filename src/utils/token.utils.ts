import jwt from 'jsonwebtoken';
import { UserRole } from '../models/user.model';
import { credentials } from '../config/credentials';

interface TokenPayload {
  userId: string;
  role: UserRole;
}

/**
 * Generate a JWT token for a user
 * @param userId - The user's ID
 * @param role - The user's role
 * @returns The generated JWT token
 */
export const generateToken = (userId: string, role: UserRole): string => {
  const payload: TokenPayload = {
    userId,
    role
  };

  return jwt.sign(payload, credentials.JWT_SECRET as jwt.Secret, { expiresIn: '24h' });
};

/**
 * Verify a JWT token
 * @param token - The JWT token to verify
 * @returns The decoded token payload if valid, null if invalid
 */
export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, credentials.JWT_SECRET as jwt.Secret) as TokenPayload;
  } catch (error) {
    return null;
  }
};

/**
 * Extract token from authorization header
 * @param authHeader - The authorization header
 * @returns The token if present, null if not
 */
export const extractTokenFromHeader = (authHeader: string | undefined): string | null => {
  if (!authHeader) {
    return null;
  }

  const [type, token] = authHeader.split(' ');
  return type === 'Bearer' ? token : null;
}; 