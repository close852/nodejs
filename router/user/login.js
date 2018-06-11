var express = require('express');
var router = express.Router();
var path = require('path');

var userList = require('./userList').userList;
router.get('/user/welcome',(req,res)=>{
    console.log('displayname ',req.session.displayname)
    res.render(path.join('.','user','welcome'),{dispname : req.session.displayname});
})

router.route('/user/login')
.get((req,res)=>{
    res.render(path.join('.','user','login'));
})
.post((req,res)=>{
    var uname = req.body.username;
    var passwd = req.body.password;
    var user = userList.find((u)=>{
        return (u.username===uname && u.password ===passwd);
    })
    if(user){
        console.log(user,user.displayname);
        req.session.user=user;
        req.session.displayname=user.displayname;
        return req.session.save(()=>{
            res.redirect('/user/welcome');
        })
    }
    res.redirect('/user/login');
})

router.route('/user/logout')
.get((req,res)=>{
    delete req.session.displayname;
    return req.session.save(()=>{
        return res.redirect('/user/welcome');
    })
})
module.exports = router;