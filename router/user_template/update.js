var express = require('express');
var router = express.Router();
var path = require('path');

var userList = require('./userList').userList;

router.route('/user/update')
.get((req,res)=>{
    res.render(path.join('.','user','update'),{user : req.session.user});
})
.put((req,res)=>{
    var temp ={
        username : req.body.username,
        password : req.body.password,
        displayname : req.body.displayname
    }
    for(var i=0;i<userList.length;i++){
        var user = userList[i];
        console.log(user,temp);
        if(user.username===temp.username){
            if(temp.password){
                user.password = temp.password;
            }
            if(temp.displayname){
                user.displayname = temp.displayname;
            }
            req.session.displayname = temp.displayname;
            req.session.user = user;
            return req.session.save(()=>{
                res.redirect('/user/welcome');
            })
        }
    }
    res.redirect('/user/welcome')
})

module.exports = router;