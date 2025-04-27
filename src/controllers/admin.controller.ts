import { Request, Response } from 'express';
import { User, UserRole } from '../models/user.model';
import { generateToken } from '../utils/token.utils';
import { Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email, role: UserRole.ADMIN });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    // Create new admin
    const admin = new User({
      email,
      password,
      firstName,
      lastName,
      role: UserRole.ADMIN
    });

    await admin.save();

    // Generate JWT token
    const token = generateToken((admin as Document & { _id: string })._id.toString(), admin.role);

    res.status(201).json({
      message: 'Admin registered successfully',
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering admin', error });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find admin by email
    const admin = await User.findOne({ email, role: UserRole.ADMIN });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken((admin as Document & { _id: string })._id.toString(), admin.role);

    res.json({
      message: 'Admin login successful',
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        firstName: admin.firstName,
        lastName: admin.lastName,
        role: admin.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in admin', error });
  }
}; 