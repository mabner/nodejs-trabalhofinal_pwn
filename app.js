const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const express = require('express');

const app = express();
const httpchat = require('http').createServer(app);
const logger = require('morgan');
const passport = require('passport');

const io = require('socket.io')(httpchat);

// const http = require('http'); // adicionado ao Original.
const path = require('path');
//
// Rota Criando a Tabela Listas
//

//
const indexRouter = require('./routes/index');
//
const CommentsRouter = require('./routes/Comments');
const ListaToDoRouter = require('./routes/ListatodoComment');
//
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
// const IndexListRouter = require('./routes/index_Listas');
//
// Rota de Retorno Login Sucesso.
//
const adminRouter = require('./routes/admin');
require('./configs/github.strategy');
//

//models
const TodoTask = require('./models/TodoTask');

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

/*********************************************************
 * Chat
 */

//
// Fazendo um Handshake (HTTP Atualização) na conexão (servidor) http criado anteriormente.
// Ou seja, promovendo-a para uma Websockets/wss.
//

var usuarios = 0;
//
io.on('connection', (socket) => {
	//
	// Contando Clientes Conectados.
	//
	usuarios++;
	//
	socket.broadcast.emit('usuarioConetado', {
		quantidade: 'Um Usuário se Conectou. Total de Conectados: ' + usuarios,
	});
	//
	socket.on('disconnect', function () {
		usuarios--;
		socket.broadcast.emit('usuarioConetado', {
			quantidade:
				'Um Usuário se Desconectou. Total de Conectados: ' + usuarios,
		});
		console.log(`Um Usuário Desconectado. Total de Conectados: ${usuarios}.`);
	});
	//
	//  Avisando a Console do Servidor quantos usuários conectados.
	//
	console.log(`Um Usuário Conectado. Total de Conectados: ${usuarios}.`);
	//
	// Identificando o Usuário com o ID da Sessão.
	//
	console.log(`Usuário Conectado com o Socket ID: ${socket.id}`);
	//
	// Emitindo mensagem do Servidor (String).
	//
	socket.emit('mensagemDoServidor', 'Bem-vindo ao Chatbot da SM Solutions');
	//
	// Recebendo a Mensagem do Cliente (String).
	//
	socket.on('mensagemDoCliente', (content) => {
		console.log(`Mensagem do Cliente: ${content}`);
	});
	//
	// Recebendo a Mensagem do Cliente (Objeto).
	//
	socket.on('mensagemDoClienteObj', (content) => {
		console.log(`Mensagem do Cliente: ${JSON.stringify(content)}`);
	});
	//
	// Recebendo e Enviando em Broadcast mensagem recebida de um cliente
	//
	socket.on('MSGCliente', (content) => {
		socket.broadcast.emit('grupoMSG', content);
	});
});
//
app.get('/faleConosco', (_, res) => {
	res.render('faleConosco');
});
//
app.post('/faleConosco', (_, res) => {
	res.render('faleConosco');
});

/*** Fim código do chat
 * ******************************************************
 */

//puxa o css da pasta "public"
app.use('/public', express.static('public'));

//extrai data de um form
app.use(express.urlencoded({ extended: true }));

//puxa o ejs (hbs?) da pasta "view"
app.set('view engine', 'ejs');

// GET METHOD
app.get('/tasks', (req, res) => {
	TodoTask.find({}, (err, tasks) => {
		res.render('todo.ejs', { todoTasks: tasks });
	});
});

//POST METHOD
app.post('/', async (req, res) => {
	const todoTask = new TodoTask({
		content: req.body.content,
	});
	try {
		await todoTask.save();
		res.redirect('/tasks');
	} catch (err) {
		res.redirect('/tasks');
	}
});

//UPDATE
app.route('/edit/:id')
	.get((req, res) => {
		const id = req.params.id;
		TodoTask.find({}, (err, tasks) => {
			res.render('todoEdit.ejs', {
				todoTasks: tasks,
				idTask: id,
			});
		});
	})
	.post((req, res) => {
		const id = req.params.id;
		TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
			if (err) return res.status(500).send(err);
			res.redirect('/tasks');
		});
	});

//DELETE
app.route('/remove/:id').get((req, res) => {
	const id = req.params.id;
	TodoTask.findByIdAndRemove(id, (err) => {
		if (err) return res.status(500).send(err);
		res.redirect('/tasks');
	});
});
//
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
// Set passport configs
//
// npm install express-session
//
app.use(
	require('express-session')({
		secret: 'shhhh...',
		resave: true,
		saveUninitialized: true,
	})
);
//
app.use(passport.initialize());
app.use(passport.session());
//
app.use('/', indexRouter);
//
app.use('/Comments', CommentsRouter);
app.use('/ListatodoComment', ListaToDoRouter);
//
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// app.use('/index_Listas', IndexListRouter);
//
//
// Rota de Criar tabela Listas
//

//
// Rota de Retorno Login Sucesso.
//
app.use('/admin', adminRouter);
//
// catch 404 and forward to error handler
//
app.use(function (req, res, next) {
	next(createError(404));
});
//
// error handler
//
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	//
	// render the error page
	//
	res.status(err.status || 500);
	res.render('error');
});

httpchat.listen(3001, () => {
	console.log('Listening on port 3001');
});

//
module.exports = app;
