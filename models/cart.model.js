const mongoose = require('mongoose');

const Cart = new mongoose.Schema({    
    productList: { type: Array, required: false },    
});

module.exports = mongoose.model('Cart', Cart);