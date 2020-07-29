const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const passport = require("passport");
// const http = require('http'); // adicionado ao Original.
const path = require("path");
//
// Rota Criando a Tabela Listas
//

//
const indexRouter = require("./routes/index");
//
const CommentsRouter = require("./routes/Comments");
const ListaToDoRouter = require("./routes/ListatodoComment");
//
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const IndexListRouter = require("./routes/index_Listas");
//
// Rota de Retorno Login Sucesso.
//
const adminRouter = require("./routes/Admin");

//
const app = express();
require("./configs/github.strategy");
//
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
//
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
//
// Set passport configs
//
// npm install express-session
//
app.use(
    require("express-session")({
        secret: "shhhh...",
        resave: true,
        saveUninitialized: true,
    })
);
//
app.use(passport.initialize());
app.use(passport.session());
//
app.use("/", indexRouter);
//
app.use("/Comments", CommentsRouter);
app.use("/ListatodoComment", ListaToDoRouter);
//
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/index_Listas", IndexListRouter);
//
//
// Rota de Criar tabela Listas
//

//
// Rota de Retorno Login Sucesso.
//
app.use("/admin", adminRouter);
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
    res.locals.error = req.app.get("env") === "development" ? err : {};
    //
    // render the error page
    //
    res.status(err.status || 500);
    res.render("error");
});
//
module.exports = app;
