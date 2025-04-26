export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: UserRole;
  name: string;
  createdAt: Date;
  updatedAt: Date;
} 