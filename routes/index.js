var express = require('express');
var router = express.Router();
var Listas = require('../store/Listas');

/* GET home page. */
router.get('/', function(_, res) {
    Listas.getL() 
    .then(function(listas) {      
      res.render('index', { listas });
    })
});

module.exports = router;
