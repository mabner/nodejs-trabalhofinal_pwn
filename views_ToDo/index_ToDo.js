//
// Dependências da APP.
//
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
//
// Renderiza os Arquivos CSS.
//
app.use(express.static('public'));
//
// Espaços reservados para tarefa adicionada
//
var task = [];
//
// Espaços reservados para tarefa completada
//
var complete = [];
//
// Adicona uma nova tarefa via Rota POST.
//
app.post('/addtask', function (req, res) {
	var newTask = req.body.newtask;
	//
	task.push(newTask);
	res.redirect('/');
});
//
// Executa a tarefa POST de remoção das Tarefas.
//
app.post('/removetask', function (req, res) {
	var completeTask = req.body.check;
	//
	// Verifica o "typeof" das diferentes tarefas concluídas e, em seguida,
	// adiciona na área de tarefa completa.
	//
	if (typeof completeTask === 'string') {
		complete.push(completeTask);
		//
		// Verifica se a tarefa foi concluída, assinalada pelo usuário,
		// e em seguida, se SIM, coloca na Lista de Tarefas Completadas.
		//
		task.splice(task.indexOf(completeTask), 1);
		//
	} else if (typeof completeTask === 'object') {
		//
		for (var i = 0; i < completeTask.length; i++) {
			complete.push(completeTask[i]);
			task.splice(task.indexOf(completeTask[i]), 1);
			//
		}
	}
	//
	res.redirect('/');
	//
});
//
// Randeriza usando os recursos do framework EJS ejs e Mostra as Tarefas Adiconadas.
//
app.get('/', function (req, res) {
	res.render('index', {
		title: 'Portal de Listas ToDo',
		task: task,
		complete: complete,
	});
});
//
//Seta APP para escutar a Porta 3000.
//
app.listen(3000, function () {
	console.log('Servidor Node.JS executando em Port 3000.');
});
