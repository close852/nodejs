var express = require('express');
var app = express();
var path =require('path');
var rootRouter = require(path.join(__dirname,'router','root'));
var pugRouter = require(path.join(__dirname,'router','pugs','pug'));

const pug = require('pug');
const comFn = pug.compileFile(path.join(__dirname,'views','temp.pug'));
//가독성
app.locals.pretty = true;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));
app.use(rootRouter);
app.use(pugRouter);


app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 