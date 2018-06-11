var express = require('express');
var router = express.Router();


// const comFn = pug.compileFile(path.join(__dirname,'views','temp.pug'));
// console.log(pug.renderFile(path.join(__dirname,'views','temp.pug'),{name:'Timothy'}))
// console.log(comFn({name :'Forbes'}));


router.get('/pug',(req,res)=>{
    res.render('hello');
})


router.get('/compile',(req,res)=>{
    res.send(comFn({name:'Hi!'}));
})
router.get('/compile2',(req,res)=>{
    res.send(comFn({name:'Hi!'}));
})
router.get('/compile3',(req,res)=>{
    res.render('temp',{name:'cjw'});
})


module.exports = router;