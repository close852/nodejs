var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path =require('path');
var userRouter = require(path.join(__dirname,'router','user','login'));

const pug = require('pug');
//가독성
app.locals.pretty = true;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);

app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 