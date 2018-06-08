var express = require('express');
var app = express();
var path =require('path');
var root = require(path.join(__dirname,'router','root'));
const pug = require('pug');
const comFn = pug.compileFile(path.join(__dirname,'views','temp.pug'));
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('public'));
app.use(root);

app.get('/pug',(req,res)=>{
    res.render('hello');
})
app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 