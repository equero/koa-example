const mongoose = require('mongoose');

const Cart = new mongoose.Schema({
    userId: { type: String, required: false },
    productList: { type: String, required: false },
    genre: { type: String, required: false },
});

module.exports = mongoose.model('Cart', Cart);