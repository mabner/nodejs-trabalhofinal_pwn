var express = require('express');
var router = express.Router();
//
var Listas = require('../store/Listas');
//
const status = 'N';
//
const {
	GarantirAcessoAutenticado,
} = require('../configs/GarantirAcessoAutenticado');
//
//
/* GET home page. */
router.get('/', GarantirAcessoAutenticado, async function (req, res, next) {
	const UsrNome = req.user.username;
	const NomeUser = req.user.displayName;
	//
	//      Listas.getLA(status)
	Listas.getLAT(UsrNome, status).then(
		await function (listas) {
			res.render('index_Listas_Pagina', {
				listas,
				user: UsrNome,
				usrname: NomeUser,
			});
		}
	);
});
//
module.exports = router;
