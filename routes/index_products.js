var express = require('express');
var router = express.Router();
var Products = require('../store/Products');

/* GET home page. */
router.get('/', function(_, res) {
  Products.get()
    .then(function(products) {      
      res.render('index', { products });
    })
});

module.exports = router;
