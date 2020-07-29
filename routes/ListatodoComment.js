const express = require('express');
const router = express.Router();
var Usuario = 'lromerosl@yahoo.com.br';
// const Usuario = user;
/*
Rota GET.
*/
router.get('/', function (req, res, next) {
    res.render('indexToDoComm', {Usuario});
});
/*
Rota Post.
*/
router.post('/', (req, res, next) => {
    res.render('indexToDoComm', {Usuario});
});
/* */
module.exports = router;
