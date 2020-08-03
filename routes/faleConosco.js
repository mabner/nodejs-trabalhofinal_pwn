const express = require('express');
const router = express.Router();

router.get('/faleConosco', (_, res, next) => {
	res.render('faleConosco');
});

router.post('/faleConosco', (_, res, next) => {
	res.render('faleConosco');
});
