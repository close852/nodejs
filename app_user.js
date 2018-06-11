var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path =require('path');
var userRouter = require(path.join(__dirname,'router','user','user_router'));

const pug = require('pug');
//가독성
app.locals.pretty = true;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//좀더 살펴 볼 것!
app.use(session({
    secret :'asdjha!@#@#$dd', //추후
    resave:false,
    saveUninitialized:true
}))
app.use('/jquery',express.static(path.join(__dirname,'node_modules','jquery','dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(userRouter);

app.get('/',(req,res)=>{
    res.redirect('/user/welcome');
})
app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 