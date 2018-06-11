var express = require('express');
var router = express.Router();
var path = require('path');

var userList = require('./userList').userList;

router.route('/user/register')
.get((req,res)=>{
    res.render(path.join('.','user','register'));
})
.post((req,res)=>{
    //사용자 변수 만들기
    var temp ={
        username : req.body.username,
        password : req.body.password,
        displayname : req.body.displayname
    }
    //중복 사용자 없도록 하기위한 사용자 존재하는지 확인
    var user = userList.find((item)=>{
        return item.username===temp.username;
    });

    if(user){
        return res.send('<script>alert("대박.."); location.href="/user/register";</script>')
    }

    userList.push(temp);
    req.session.displayname=temp.displayname;
    return req.session.save(()=>{
        return res.redirect('/user/welcome');
    })
})

module.exports = router;