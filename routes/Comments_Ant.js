const express = require('express');
const router = express.Router();
const Comment  = require('../store/Comment');
// const Usuario = user;
/*
Rota GET.
*/
router.get('/CommList', (req, res, next) => {
    res.render ('listaToDo', {
        commentaries: Comment.findById(req.query.Autor)
    });
});
/*
Rota Post.
*/
router.post('/CommList', (req, res, next) => {
    Comment.create({
        author: req.query.Autor,
        comment: req.query.Comment,
        datecomm: req.query.datecomm,
		emailAut: req.query.emailAut
    });
    res.render ('listaToDo', {
        commentaries: Comment.findById(req.query.emailAut)
//        commentaries: Comment.find( {listaToDo: req.query.emailAut} )
    });    
});
/*
*/
module.exports = router;
