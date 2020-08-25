var express = require('express');
var router = express.Router();
//var User = require('./models/Users.js');
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

  /* GET login page. */
  router.get('/login', async function(req, res, next) {
    const product = await featuredProduct();
    res.render('login', { product, title: 'Member Login' });
  });

  // Kat's signup stuff //
  /* GET sign up page. */
  router.get('/signup', async function(req, res, next) {
    const product = await featuredProduct();
    res.render('signup', { product, title: 'New Member Sign Up' });
  });

  // post /signup
//router.post("/signup", function(req, res, next) {
  //if (
    //req.body.first_name &&
    //req.body.middle_name &&
    //req.body.last_name &&
    //req.body.email &&
    //req.body.user_name &&
    //req.body.password &&
    //req.body.confirmPassword
  //) {

  // confirm passwords match
  //if (req.body.password !== req.body.confirmPassword) {
  //var err = new Error("Passwords do not match.");
    //err.status = 400;
    //return next(err);
 // }

  //create object with form input
  //var userData = {
   // first_name: req.body.first_name,
    //middle_name: req.body.middle_name,
   // last_name: req.body.last_name,
   // email: req.body.email,
   // user_name: req.body.user_name,
   // password: req.body.password
  //};

  //});

  
//}
//});

/////end of Kat's stuff/////



  

    /* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

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
