const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');
const passport = require('passport');
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
const app = express();

//models
const TodoTask = require('./models/TodoTask');
//conecta com o .env
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

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
		res.redirect('/');
	} catch (err) {
		res.redirect('/');
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
		TodoTask.findByIdAndUpdate(
			id,
			{ content: req.body.content },
			(err) => {
				if (err) return res.send(500, err);
				res.redirect('/');
			}
		);
	});

//DELETE
app.route('/remove/:id').get((req, res) => {
	const id = req.params.id;
	TodoTask.findByIdAndRemove(id, (err) => {
		if (err) return res.send(500, err);
		res.redirect('/');
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
app.use(require('express-session')({ secret: 'shhhh...', resave: true, saveUninitialized: true }));
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
app.use(function(req, res, next) {
  next(createError(404));
});
//
// error handler
//
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  //
  // render the error page
  //
  res.status(err.status || 500);
  res.render('error');
});
//
module.exports = app;