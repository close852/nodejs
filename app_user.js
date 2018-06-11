var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var path =require('path');
var userRouter = require(path.join(__dirname,'router','user','user_router'));

const pug = require('pug');
//가독성
app.locals.pretty = true;

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

//좀더 살펴 볼 것!
app.use('/jquery',express.static(path.join(__dirname,'node_modules','jquery','dist')));
app.use(session({
    secret :'asdjha!@#@#$dd', //추후
    resave:false,
    saveUninitialized:true
}))
// app.use(methodOverride('_method'))
// app.use(methodOverride('X-HTTP-Method'))          // Microsoft
// app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
// app.use(methodOverride('X-Method-Override'))      // IBM
//bodyParser 먼저 선언하고 내용 수정하면 쓸 수 있음.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride((req, res)=> {
    if (req.body && typeof req.body === 'object' && req.body._method) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        console.log('method :: ',method);
        delete req.body._method
        return method
    }
}))
//라우터를 아래로 보내시게
app.use(userRouter);

app.get('/',(req,res)=>{
    res.redirect('/user/welcome');
})
app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 