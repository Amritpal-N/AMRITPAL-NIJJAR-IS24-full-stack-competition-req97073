const express = require('express');
const router = express.Router();

// Array containg product objects 
const products = [
    {
    id: 1,
    productName: 'Web App 1',
    productOwner: 'Product Owner A',
    developers: ['Developer 1', 'Developer 2', 'Developer 3'],
    scrumMaster: 'Scrum Master A',
    startDate: '2022-01-01',
    methodology: 'Agile'
    },
    {
    id: 2,
    productName: 'Web App 2',
    productOwner: 'Product Owner B',
    developers: ['Developer 1', 'Developer 4', 'Developer 5'],
    scrumMaster: 'Scrum Master B',
    startDate: '2022-02-15',
    methodology: 'Waterfall'
    },
    {
    id: 3,
    productName: 'Web App 3',
    productOwner: 'Product Owner C',
    developers: ['Developer 6', 'Developer 7'],
    scrumMaster: 'Scrum Master C',
    startDate: '2022-03-01',
    methodology: 'Agile'
    },
    {
    id: 182, 
    productName: 'Web App 182', 
    productOwner: 'Product Owner J', 
    developers: ['Developer 1', 'Developer 2', 'Developer 3'], 
    scrumMaster: 'Scrum Master L', 
    startDate: '2022-04-28', 
    methodology: 'Waterfall'
    },
    {
    id: 81,
    productName: 'Web App 81',
    productOwner: 'Wendy',
    developers: ['Stanley', 'Ross', 'Monica', 'Joey'],
    scrumMaster: 'Dwight',
    startDate: '2002-08-08',
    methodology: 'Waterfall'
    },
    {
    id: 63,
    productName: 'Web App 63',
    productOwner: 'Megan',
    developers: ['Monica', 'Phoebe', 'Chandler'],
    scrumMaster: 'Buster',
    startDate: '2002-05-05',
    methodology: 'Agile'
    },
    {
        id: 48,
        productName: 'Web App 48',
        productOwner: 'Wendy',
        developers: ['Buster'],
        scrumMaster: 'Wendy',
        startDate: '2002-01-11',
        methodology: 'Waterfall'
    },
    {
        id: 21, 
        productName: 'Web App 21',
        productOwner: 'Megan',
        developers: ['Pam', 'Wendy', 'Dwight'],
        scrumMaster: 'Stanley',
        startDate: '2002-04-20',
        methodology: 'Waterfall'
    },
    {
        id: 89,
        productName: 'Web App 89',
        productOwner: 'Megan',
        developers: ['Buster', 'Kelly', 'Monica'],
        scrumMaster: 'Oscar',
        startDate: '2002-06-18',
        methodology: 'Agile'
    },
    {
        id: 37,
        productName: 'Web App 37',
        productOwner: 'Megan',
        developers: ['Pam', 'Michael', 'Chandler', 'Buster'],
        scrumMaster: 'Dwight',
        startDate: '2002-06-05',
        methodology: 'Agile'
    },
    {
        id: 74,
        productName: 'Web App 74',
        productOwner: 'Ross',
        developers: ['Dwight'],
        scrumMaster: 'Joey',
        startDate: '2002-02-22',
        methodology: 'Agile'
    },
    {
        id: 1001,
        productName: 'Web App 1001',
        productOwner: 'Michael',
        developers: ['Dwight', 'Phoebe', 'Michael', 'Phoebe', 'Megan'],
        scrumMaster: 'Stanley',
        startDate: '2002-04-08',
        methodology: 'Agile'
    },
    {
        id: 17,
        productName: 'Web App 17',
        productOwner: 'Oscar',
        developers: ['Dwight', 'Pam'],
        scrumMaster: 'Phoebe',
        startDate: '2002-06-08',
        methodology: 'Waterfall'
    },
    {
        id: 3075,
        productName: 'Web App 3075',
        productOwner: 'Michael',
        developers: ['Monica'],
        scrumMaster: 'Sandy',
        startDate: '2002-01-12',
        methodology: 'Waterfall'
    },
    {
        id: 100,
        productName: 'Web App 100',
        productOwner: 'Rachel',
        developers: ['Rachel'],
        scrumMaster: 'Stanley',
        startDate: '2002-03-15',
        methodology: 'Waterfall'
    },
    {
        id: 175,
        productName: 'Web App 175',
        productOwner: 'Rachel',
        developers: ['Ryan', 'Rachel', 'Dwight'],
        scrumMaster: 'Jim',
        startDate: '2002-08-18',
        methodology: 'Waterfall'
    },
    {
        id: 80,
        productName: 'Web App 80',
        productOwner: 'Rachel',
        developers: ['Arthur', 'Megan', 'Buster'],
        scrumMaster: 'Rachel',
        startDate: '2002-10-14',
        methodology: 'Waterfall'
    },
    {
        id: 33,
        productName: 'Web App 33',
        productOwner: 'Joey',
        developers: ['Ross', 'Jim'],
        scrumMaster: 'Phoebe',
        startDate: '2002-05-22',
        methodology: 'Agile'
    },
    {
        id: 83,
        productName: 'Web App 83',
        productOwner: 'Dwight',
        developers: ['Buster'],
        scrumMaster: 'Creed',
        startDate: '2002-08-23',
        methodology: 'Agile'
    },
    {
        id: 75,
        productName: 'Web App 75',
        productOwner: 'Jim',
        developers: ['Ryan'],
        scrumMaster: 'Monica',
        startDate: '2002-07-24',
        methodology: 'Agile'
    },
    {
        id: 93,
        productName: 'Web App 93',
        productOwner: 'Jim',
        developers: ['Sandy', 'Chandler', 'Creed'],
        scrumMaster: 'Megan',
        startDate: '2002-09-30',
        methodology: 'Agile'
    },
    {
        id: 45,
        productName: 'Web App 45',
        productOwner: 'Kelly',
        developers: ['Ross', 'Ryan', 'Oscar', 'Megan'],
        scrumMaster: 'Oscar',
        startDate: '2002-11-16',
        methodology: 'Waterfall'
    },
    {
        id: 4,
        productName: 'Web App 4',
        productOwner: 'Kelly',
        developers: ['Monica', 'Rachel', 'Sandy', 'Rachel'],
        scrumMaster: 'Buster',
        startDate: '2002-09-21',
        methodology: 'Waterfall'
    },
    {
        id: 44,
        productName: 'Web App 44',
        productOwner: 'Sandy',
        developers: ['Sandy', 'Creed', 'Megan'],
        scrumMaster: 'Phoebe',
        startDate: '2002-06-19',
        methodology: 'Agile'
    },
    {
        id: 7,
        productName: 'Web App 7',
        productOwner: 'Megan',
        developers: ['Sandy', 'Wendy', 'Michael'],
        scrumMaster: 'Dwight',
        startDate: '2002-07-24',
        methodology: 'Agile'
    },
    {
        id: 64,
        productName: 'Web App 64',
        productOwner: 'Chandler',
        developers: ['Kelly'],
        scrumMaster: 'Creed',
        startDate: '2002-11-24',
        methodology: 'Waterfall'
    },
    {
        id: 67,
        productName: 'Web App 67',
        productOwner: 'Buster',
        developers: ['Jim', 'Ryan', 'Pam', 'Joey', 'Arthur'],
        scrumMaster: 'Megan',
        startDate: '2002-09-09',
        methodology: 'Agile'
    },
    {
        id: 43,
        productName: 'Web App 43',
        productOwner: 'Monica',
        developers: ['Rachel', 'Jim', 'Chandler', 'Arthur'],
        scrumMaster: 'Pam',
        startDate: '2002-08-16',
        methodology: 'Agile'
    },
    {
        id: 95,
        productName: 'Web App 95',
        productOwner: 'Sandy',
        developers: ['Buster'],
        scrumMaster: 'Joey',
        startDate: '2002-05-09',
        methodology: 'Agile'
    },
    {
        id: 82,
        productName: 'Web App 82',
        productOwner: 'Ross',
        developers: ['Megan'],
        scrumMaster: 'Dwight',
        startDate: '2002-06-26',
        methodology: 'Agile'
    },
    {
        id: 70,
        productName: 'Web App 70',
        productOwner: 'Sandy',
        developers: ['Joey', 'Jim', 'Phoebe', 'Rachel'],
        scrumMaster: 'Oscar',
        startDate: '2002-04-17',
        methodology: 'Agile'
    },
    {
        id: 28,
        productName: 'Web App 28',
        productOwner: 'Michael',
        developers: ['Sandy'],
        scrumMaster: 'Ryan',
        startDate: '2002-08-01',
        methodology: 'Waterfall'
    },
    {
        id: 4575,
        productName: 'Web App 4575',
        productOwner: 'Buster',
        developers: ['Oscar', 'Oscar'],
        scrumMaster: 'Monica',
        startDate: '2002-09-20',
        methodology: 'Agile'
    },
    {
        id: 4775,
        productName: 'Web App 4775',
        productOwner: 'Monica',
        developers: ['Pam', 'Phoebe', 'Megan'],
        scrumMaster: 'Chandler',
        startDate: '2002-09-24',
        methodology: 'Waterfall'
    },
    {
        id: 280,
        productName: 'Web App 280',
        productOwner: 'Buster',
        developers: ['Oscar', 'Joey', 'Dwight', 'Ryan'],
        scrumMaster: 'Jim',
        startDate: '2002-11-21',
        methodology: 'Agile'
    },
    {
        id: 237,
        productName: 'Web App 237',
        productOwner: 'Joey',
        developers: ['Stanley', 'Pam', 'Oscar', 'Ross', 'Oscar'],
        scrumMaster: 'Chandler',
        startDate: '2002-08-28',
        methodology: 'Waterfall'
    },
    {
        id: 10,
        productName: 'Web App 10',
        productOwner: 'Monica',
        developers: ['Ryan', 'Ryan', 'Wendy', 'Phoebe', 'Ryan'],
        scrumMaster: 'Oscar',
        startDate: '2002-03-06',
        methodology: 'Agile'
    },
    {
        id: 41,
        productName: 'Web App 41',
        productOwner: 'Arthur',
        developers: ['Stanley', 'Rachel', 'Arthur'],
        scrumMaster: 'Rachel',
        startDate: '2002-06-06',
        methodology: 'Waterfall'
    },
    {
        id: 62,
        productName: 'Web App 62',
        productOwner: 'Monica',
        developers: ['Sandy', 'Oscar', 'Joey'],
        scrumMaster: 'Megan',
        startDate: '2002-06-03',
        methodology: 'Waterfall'
    },
    {
        id: 38,
        productName: 'Web App 38',
        productOwner: 'Kelly',
        developers: ['Monica', 'Dwight', 'Chandler', 'Ross', 'Ryan'],
        scrumMaster: 'Monica',
        startDate: '2002-12-19',
        methodology: 'Agile'
    },
  ];

// Middleware to parse the product ID parameter
router.param('id', (req, res, next, id) => {
    id = parseInt(id);
    if (isNaN(id)) {
      res.status(400).json({ error: 'Invalid product id' });
    } else {
      req.id = id;
      next();
    }
});

//Swagger API documentation
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The product ID
 *         productName:
 *           type: string
 *           description: The product name
 *         scrumMaster:
 *           type: string
 *           description: The scrum master's name
 *         productOwner:
 *           type: string
 *           description: The product owner's name
 *         developers:
 *           type: array
 *           items:
 *             type: string
 *           description: The list of developer names
 *         startDate:
 *           type: string
 *           format: date
 *           description: The project start date
 *         methodology:
 *           type: string
 *           description: The project methodology (Agile or Waterfall)
 *       required:
 *         - id
 *         - productName
 *         - scrumMaster
 *         - productOwner
 *         - developers
 *         - startDate
 *         - methodology
 */

// Route: GET / - Display a welcome message
router.get('/', (req, res) => {
    res.send('Welcome to the BC Province Web Applications API!');
  });

// Route: GET /api/products - Retrieve a list of products
/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */  


router.get('/products', (req, res) => {
  res.json(products);
});

// Route: GET /api/product/{productId} - Retrieve a product by its ID
/**
 * @swagger
 * /api/product/{productId}:
 *   get:
 *     summary: Retrieve a product by its ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       200:
 *         description: The requested product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 */


router.get('/product/:productId', (req, res) => {
  const id = parseInt(req.params.productId);

  console.log('Searching for product with ID:', id); 
  const product = products.find((p) => p.id === id);

  if (!product) {
    console.log('Product not found:', id); 
    res.status(404).json({ error: 'Product not found' });
  } else {
    console.log('Product found:', product); 
    res.json(product);
  }
});

// Route: POST /api/products - Create a new product
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: The created product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Invalid product data
 */



router.post('/products', (req, res) => {
    const newProduct = req.body;
      // Add a validation check for the developers array
    if (newProduct.developers && newProduct.developers.length > 5) {
    res.status(400).json({ error: 'A product can have a maximum of 5 developers' });
    return;
    }

    newProduct.id = Math.floor(Math.random() * 1000000);
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Route: PUT /api/products/{productId} - Update a product by its ID
/**
 * @swagger
 * /api/products/{productId}:
 *   put:
 *     summary: Update a product by its ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The updated product
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       400:
 *         description: Invalid product data
 */



router.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex((p) => p.id === id);

    if (productIndex === -1) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      const updatedProduct = req.body;
      console.log('Request data:', req.body);

      if (
        !updatedProduct.id ||
        !updatedProduct.productName ||
        !updatedProduct.scrumMaster ||
        !updatedProduct.productOwner ||
        !updatedProduct.developers ||
        !updatedProduct.startDate ||
        !updatedProduct.methodology
      ) {
        res.status(400).json({ error: 'Invalid product data' });
        return;
      }

    // Add a validation check for the developers array
    if (updatedProduct.developers && updatedProduct.developers.length > 5) {
        res.status(400).json({ error: 'A product can have a maximum of 5 developers' });
    return;
      }

      products[productIndex] = updatedProduct;
      res.json(updatedProduct);
    }
});

// Route: DELETE /api/products/{productId} - Delete a product by its ID
/**
 * @swagger
 * /api/products/{productId}:
 *   delete:
 *     summary: Delete a product by its ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: integer
 *         description: The product ID
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 */


router.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products.splice(productIndex, 1);
    res.status(204).json({ message: 'Product deleted successfully' });
  }
});

//Export the router
module.exports = router;
