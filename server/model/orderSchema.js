const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  products: [{
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    
  },
  
});



const Order = mongoose.model('order', orderSchema);
module.exports = Order;
