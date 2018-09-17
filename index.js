var express = require('express');
var router = express.Router();
var fs = require('fs');
var Cart = require('cart');
var products = JSON.parse(fs.readFile('products.json', 'utf8'));

router.get(function (req, res, next) {
  res.render('index', 
  { 
    title: 'NodeJS Shopping Cart',
    products: products
  }
  );
});
