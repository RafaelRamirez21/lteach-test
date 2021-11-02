const express = require('express');
const ProductService = require('../services/products');


//recive a app express for become a dinamyc router and control of what application is going to consume our app
function productApi(app) {
  const router = express.Router();
  app.use('/api/product', router);
  const productService = new ProductService();
  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {

      const products = await productService.getProducts({ tags });

      res.status(200).json({
        data: products,
        message: 'product listed'
      })
    } catch (error) {
      next(error)
    }
  });

};

module.exports = productApi;
