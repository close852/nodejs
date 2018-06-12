var express = require('express');
var router = express.Router();
var path = require('path');

var userList = require('./userList').userList;

router.route('/user/delete')
.get((req,res)=>{
    res.render(path.join('.','user','delete'),{user : req.session.user});
})
.delete((req,res)=>{
    var temp ={
        username : req.body.username,
        password : req.body.password,
        displayname : req.body.displayname
    }
    for(var i=0;i<userList.length;i++){
        var user = userList[i];
        console.log(user,temp);
        if(user.username===temp.username){
            userList.splice(i,1);
            console.log(userList,'이거냐');
            delete req.session.displayname;
            delete req.session.user;
            return req.session.save(()=>{
                res.redirect('/user/welcome');
            })
        }
    }
    res.redirect('/user/welcome')
})

module.exports = router;