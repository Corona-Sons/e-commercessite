var express = require('express');
var router = express.Router();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const { ensureAuthenticated } = require('../config/auth');

// Connection URL
const url = 'mongodb+srv://Corona:Password.2020@cluster0.7dopu.mongodb.net/E-Commerce?retryWrites=true&w=majority';

// Database Name
const dbName = 'E-Commerce';
let db;

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  db = client.db(dbName);

  // Find all Products
  const findProducts = function() {
    const collection = db.collection('products');
    return collection.find().toArray();
  }

  // Find Featured Product
  const featuredProduct = function() {
    const collection = db.collection('products');
    return collection.find({ '_id': '4' }).toArray();
  }

  // Find User Specific Products
  const userProducts = function(seller_id) {
    const collection = db.collection('products');
    return collection.find({seller_id}).toArray();
  }

  // Search bar set-up
  //db.products.createIndex( { title: 'text' } );
   //db.products.find(
   // { $text: { $search: "masks gloves sanitizer" } },
    //{ score: { $meta: "textScore" } }
 //).sort( { score: { $meta: "textScore" } } );
 


  /* GET home page. */
  router.get('/', async function(req, res, next) {
    const product = await featuredProduct();
    res.render('home', { product, title: 'Corona & Sons: One Stop COVID-19 Shop'});
  });

  /*GET About Us page */
  router.get('/about', async function(req, res, next) {
      res.render('about', { title: 'Corona & Sons: Your One Stop COVID-19 Shop' });
  });

  /* GET catalog page. */
  router.get('/catalog', async function(req, res, next) {
    const products = await findProducts();
    res.render('catalog', { products, title: 'Corona & Sons: One Stop COVID-19 Shop'});
  });

  /* GET profile page */
  router.get('/profile', ensureAuthenticated, async function(req, res, next) {
     const userId = req.user._id;
     const products = await userProducts(userId);
   res.render('profile', {products, name: req.user.last_name + ', ' + req.user.first_name});
  })

  /*GET createProduct page */
  router.get('/createProduct', ensureAuthenticated, async function(req, res, next) {
    const products = await findProducts();
    res.render('createProduct', { products, title: 'Create New Product'});
  });



});

module.exports = router;
