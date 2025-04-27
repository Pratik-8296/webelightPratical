import { User, UserRole } from '../models/user.model';
import { connectDB } from '../config/database';

const seedSuperAdmin = async () => {
  try {
    // Connect to database
    await connectDB();

    // Create super admin
    const superAdmin = new User({
      email: 'admin@yopmail.com',
      password: 'superadmin123',
      firstName: 'Super',
      lastName: 'Admin',
      role: UserRole.ADMIN
    });

    await superAdmin.save();
    console.log('Super admin created');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedSuperAdmin(); 