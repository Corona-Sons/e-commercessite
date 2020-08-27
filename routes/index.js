var express = require('express');
var router = express.Router();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;

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
  // const userProducts = function(seller_id) {
  //   const collection = db.collection('products');
  //   return collection.find({seller_id}).toArray();
  // }
    // use when login is built ^

  /* GET home page. */
  router.get('/', async function(req, res, next) {
    const product = await featuredProduct();
    res.render('home', { product, title: 'Corona & Sons: One Stop COVID-19 Shop' });
  });

  /*GET About Us page */
  router.get('/about', async function(req, res, next) {
      res.render('about', { title: 'Corona & Sons: Your One Stop COVID-19 Shop' });
  });

  /* GET catalog page. */
 router.get('/catalog', async function(req, res, next) {
  const products = await findProducts();
  res.render('catalog', { products, title: 'Corona & Sons: One Stop COVID-19 Shop' });
});

  /* GET profile page */
  router.get('/profile', async function(req, res, next) {
  const products = await findProducts();
     //const userId = req.query.id;
     //const products = await userProducts(userId);
       //Once login is set up switch to this ^
   res.render('profile', {products});
  })

});

module.exports = router;
