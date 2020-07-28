var express = require('express');
var router = express.Router();
//
const { GarantirAcessoAutenticado } = require ('../configs/GarantirAcessoAutenticado');
//
//
/* GET home page. */
router.get('/', GarantirAcessoAutenticado, function(req, res, next) {
      var UsrNome = req.user.username;
      var NomeUser = req.user.displayName;
      var ProvedorAut = req.user.provider;
      var DadosUser = NomeUser.concat(' - ');
//
      DadosUser = DadosUser.concat(ProvedorAut);
      DadosUser = DadosUser.concat(' - ');
      DadosUser = DadosUser.concat(UsrNome);
//
      res.render('admin', { title: 'Portal Lista ToDo', user: NomeUser, usrname: UsrNome});

});
//
module.exports = router;