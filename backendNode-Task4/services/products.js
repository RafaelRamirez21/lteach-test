const MongoLib = require('../lib/mongo');
class ProductService {


  constructor() {
    this.collection = 'product';
    this.mongoDB = new MongoLib();
  }
  async getProduct({ tags }) {
    const query = tags && { tags: { $in: tags } }
    const products = await this.mongoDB.getAll(this.collection, query);
    return products || [];
  }



}
module.exports = ProductService;