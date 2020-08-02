const express = require('express');
const router = express.Router();
const Comment  = require('../store/Comment');
//
const { GarantirAcessoAutenticado } = require ('../configs/GarantirAcessoAutenticado');
//
/*
Rota GET.
*/
router.get('/CommList', GarantirAcessoAutenticado, async (req, res, next) => {
    res.render ('listaToDo', {
       commentaries: await Comment.find({})
    });
});
/*
Rota Post.
*/
router.post('/CommList', GarantirAcessoAutenticado, async (req, res, next) => {
    await Comment.create({
        author: req.query.Autor,
        comment: req.query.Comment,
        datecomm: req.query.datecomm,
		emailAut: req.query.emailAut
    });
    res.render ('listaToDo', {
       commentaries: await Comment.find({})
     });    
});
/*
*/
module.exports = router;
