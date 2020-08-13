const { product } = require('../models/Products');

export class product_user extends Products{

    number = 0;

    constructor(product){
        this.product = product;
    }

    default_product_test = new product({
        _id: number++,
        seller_id: (number++) + 1,
        title: 'Delete Test',
        seller: 'Corona and Sons',
        description: 'Im useless, please delete me.',
        rating: 0,
        img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
    });

    default_product = new product({
        //check if id's are the same
        _id: product._id,
        seller_id: product.seller_id,
        title: product.title,
        seller: product.seller,
        description: product.description,
        rating: product.rating,
        img: product.img
    });

    updated_product = new product({
        _id: number++,
        seller_id: (this.number++) + 1,
        title: 'Germ-Y',
        seller: 'E-Bay',
        description: 'Keeps your hands clean',
        rating: 10,
        img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
    });

    default_product_01 = new product({
        _id: number++,
        seller_id: (this.number++) + 1,
        title: 'Sanitizer',
        seller: 'Nu',
        description: 'Kills 99% of Germs',
        rating: 5,
        img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
    });
}