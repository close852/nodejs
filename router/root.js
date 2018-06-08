var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
    res.send('Hello World!');
})

router.get('/route',(req,res)=>{
    res.send('Hello Router, <img src="/img/route.png">')
})
module.exports = router;