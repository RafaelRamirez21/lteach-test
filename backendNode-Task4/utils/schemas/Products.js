const joi = require("joi");


const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productReferenceSchema = joi.string().max(80);
const productUnitSchema = joi.number().min(0).max(1000);
const productDescriptionSchema = joi.string().max(300);
const productSalePriceSchema = joi.number().min(0).max(300);


const createProductSchema = {
  name: productReferenceSchema.required(),
  unit: productUnitSchema.required(),
  description: productDescriptionSchema.required(),
  salePrice: productSalePriceSchema.required(),


}


module.exports = {
  productIdSchema: productIdSchema,
  createProductSchema,

}
