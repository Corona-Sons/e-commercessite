const product = require('../models/Products');
const user = require('../models/Users');

let rand = require('random-seed').create;

default_product = new product({
    //check if id's are the same
    _id: product._id,
    seller_id: user._id,
    title: product.title,
    seller: product.seller,
    description: product.description,
    rating: product.rating,
    img: product.img
});

updated_product = new product({
    _id: product._id,
    seller_id: user._id,
    title: 'Germ-Y',
    seller: 'E-Bay',
    description: 'Keeps your hands clean',
    rating: 10,
    img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
});

default_product_01 = new product ({
    _id: product._id,
    seller_id: user._id,
    title: 'Sanitizer',
    seller: 'Nu',
    description: 'Kills 99% of Germs',
    rating: 5,
    img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
});

module.exports = {
    default_product_01,
}