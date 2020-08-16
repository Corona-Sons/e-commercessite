const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

<<<<<<< HEAD
const product_schema = new mongoose.Schema({
    //Why do i need an id hen theres a built in object number generator
    id: {
=======
const product_schema = new Schema({
    _id: {
>>>>>>> 039c0b9d936ae9ce5d50a84a565a091e39e7a46c
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
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('product', product_schema);

module.exports = Product;