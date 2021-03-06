const express = require('express');
const router = express.Router();
var Usuario = 'lromerosl@yahoo.com.br'; // Usuário Administrador do Sistema de Comentários.
//
const {
	GarantirAcessoAutenticado,
} = require('../configs/GarantirAcessoAutenticado');
//
/*
Rota GET.
*/
router.get('/', GarantirAcessoAutenticado, function (req, res, next) {
	res.render('indexToDoComm', { title: 'Portal de Listas ToDo', Usuario });
});
/*
Rota Post.
*/
router.post('/', GarantirAcessoAutenticado, (req, res, next) => {
	res.render('indexToDoComm', { title: 'Portal de Listas ToDo', Usuario });
});
/* */
module.exports = router;
