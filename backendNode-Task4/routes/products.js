const express = require('express');
const ProductService = require('../services/products');
const validationHandler = require('../utils/middleware/validationHandler');
const { createProductSchema } = require('../utils/schemas/Products');

//recive a app express for become a dinamyc router and control of what application is going to consume our app
function productApi(app) {
  const router = express.Router();
  app.use('/api/product', router);


  const productService = new ProductService();
  router.get('/', async function (req, res, next) {
    const { status } = req.query;

    try {

      const products = await productService.getProduct({ status });

      res.status(200).json({
        data: products,
        message: 'product listed'
      })
    } catch (error) {
      next(error)
    }
  });

  router.post('/', validationHandler(createProductSchema), async function (req, res, next) {
    const { body: product } = req;
    try {
      const createProductId = await productService.createProduct({ product })
      res.status(201).json({
        data: createProductId,
        message: 'product created'
      })
    } catch (error) {
      next(error)
    }
  });

};

module.exports = productApi;
