import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    info: {
      title: 'Webelight API',
      version: '1.0.0',
    },
    servers: [
      {
        name: 'Local',
        url: 'http://localhost:3000',
        description: 'Swagger API',
      },
    ],
    components: {
      securitySchemes: {
        Auth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT token for authentication'
        },
        adminToken: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Admin JWT token for authentication'
        }
      }
    },
    security: [
      {
        Auth: []
      }
    ]
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

export const swaggerSpec = swaggerJsdoc(options); 