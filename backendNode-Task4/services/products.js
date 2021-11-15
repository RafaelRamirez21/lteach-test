const MongoLib = require('../lib/mongo');
class ProductService {


  constructor() {
    this.collection = 'product';
    this.mongoDB = new MongoLib();
  }
  async getProduct({ status }) {

    const query = { status: status }
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }
  async createProduct({ product }) {
    const createdProdductId = this.mongoDB.create(this.collection, product);
    return createdProdductId;
  }



}
module.exports = ProductService;