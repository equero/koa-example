const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true},
    brand: { type: String, required: false }
});

module.exports = mongoose.model('Product', Product);