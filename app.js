var express = require('express');
var app = express();
var path =require('path');
var root = require(path.join(__dirname,'router','root'));

app.use(express.static('public'));
app.use(root);

app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 