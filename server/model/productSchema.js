const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String,required: true}, 
  coverImage: { type: String, required: true },
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;
