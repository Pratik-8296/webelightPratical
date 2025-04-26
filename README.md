# Express TypeScript API with MongoDB

A RESTful API built with Express.js, TypeScript, and MongoDB, featuring authentication, role-based access control, and comprehensive CRUD operations.

## Features

- 🔐 Bearer Token Authentication
- 👥 Role-Based Access Control (Admin/User)
- 📝 CRUD Operations
- 🔍 Advanced Filtering (category, price band, name, etc.)
- 📄 Pagination
- 📚 Swagger Documentation
- 🗄️ MongoDB Integration
- ✨ TypeScript Support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd express-ts-api
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a .env file in the root directory:
\`\`\`
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

## API Documentation

Once the server is running, you can access the Swagger documentation at:
\`http://localhost:3000/api-docs\`

## Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm start\`: Start production server
- \`npm run lint\`: Run ESLint
- \`npm test\`: Run tests

## Project Structure

\`\`\`
src/
├── config/         # Configuration files
├── controllers/    # Request handlers
├── middleware/     # Custom middleware
├── models/        # Mongoose models
├── routes/        # Route definitions
├── services/      # Business logic
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── index.ts       # Application entry point
\`\`\`

## API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Users
- GET /api/users (Admin only)
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id (Admin only)

### Products
- GET /api/products
- POST /api/products (Admin only)
- GET /api/products/:id
- PUT /api/products/:id (Admin only)
- DELETE /api/products/:id (Admin only)

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT 