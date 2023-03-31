// Import required libraries
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const productsRouter = require('./routes/products');

// Define Swagger options
const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'BC Province Web Applications API',
        version: '1.0.0',
        description: 'API documentation for BC Province Web Applications.',
      },
    },
    apis: ['./routes/*.js'],
  };
  

// Generate Swagger documentation
const specs = swaggerJsdoc(options);
  
//Serve Swagger UI and documenation at /api/api-docs
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  
//Enable cross-origin resourse sharing (CORS) for the API
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse incoming URL-encoded requests
app.use(express.urlencoded({ extended: false }));
  
// Set up the root endpoint
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });

// Set up the health endpoint for checking the server status
app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running properly!' });
  });

//Use the products router for handling of the API requests
app.use('/api', productsRouter);


