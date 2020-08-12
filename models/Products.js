const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const product_schema = new Schema({
    _id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    seller: {
        type: String,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('products', product_schema);

module.exports = Product;