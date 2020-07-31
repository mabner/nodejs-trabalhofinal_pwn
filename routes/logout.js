var express = require('express');
var router = express.Router();
//
const {
	GarantirAcessoAutenticado,
} = require('../configs/GarantirAcessoAutenticado');
//
/* GET home page. */
//
router.get('/', GarantirAcessoAutenticado, (req, res, next) => {
	//
	req.logout();
	res.redirect('/login');
	//
});

module.exports = router;
