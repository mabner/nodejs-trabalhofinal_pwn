var express = require('express');
var router = express.Router();
//
const { GarantirAcessoAutenticado } = require ('../configs/GarantirAcessoAutenticado');
//
//
/* GET home page. */
router.get('/', GarantirAcessoAutenticado, function(req, res, next) {
//     res.render('Admin', { title: 'Luciano Lima' });
      var NomeUser = req.user.displayName;
      var ProvedorAut = req.user.provider;
      var DadosUser = NomeUser.concat(' - ');
      DadosUser = DadosUser.concat(ProvedorAut);
      res.render('Admin', { title: 'Luciano Lima', user: DadosUser});
});

//
module.exports = router;