var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Luciano Lima' });
});
/* 
Passo 06 - Rota de Autenticação PassPort - Gihhub.
*/
router.get('/auth/github', passport.authenticate('github'));
//
router.get('/auth/github/callback', passport.authenticate('github',
           {failureRedirect: '/login'}), // Falha no Login.
           function(req, res, next) {    // Sucesso no Login.
               res.redirect('/admin');
           }
);
//
module.exports = router;