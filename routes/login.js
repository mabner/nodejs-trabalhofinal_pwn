
var express = require('express');
var router = express.Router();
var passport = require('passport');

const { GarantirAcessoAutenticado } = require ('../configs/GarantirAcessoAutenticado');

/* GET home page. */
router.get('/', GarantirAcessoAutenticado, function(req, res, next) {
     res.render('Admin', { title: 'Luciano Lima' });
});

//
module.exports = router;