var express = require('express');
var router = express.Router();
var Listas = require('../store/Listas');
/* */
const status = 'N';
/* */
/* GET home page. */
router.get('/:usrname', async function(req, res) {
    Listas.getLA(status) 
    .then(await function(listas) {      
      res.render('index_Listas_Pagina', { listas });
    })
});

module.exports = router;
