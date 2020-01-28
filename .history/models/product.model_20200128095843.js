const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    userId: { type: String, required: false },
    productList: { type: Array, required: false },    
});

module.exports = mongoose.model('Product', Product);