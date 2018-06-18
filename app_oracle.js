// var express = require('express');
// var app = express();
var oracledb =  require('oracledb');
oracledb.getConnection(
    {
        user : 'jiwoo',
        password : 'jiwoo',
        connectString : 'localhost/orcl'
    },(err,connection)=>{
        if (err) { console.error(err); return; }
        connection.execute(
          "SELECT 1 "
        + "FROM dual ",
          function(err, result)
          {
            if (err) { console.error(err); return; }
            console.log(result.rows);
          });
    })



// app.listen(3000,(req,res)=>{
//     console.log('Connected, 3000 port!')
// }) 

//create user jiwoo identified by jiwoo;
//grant all privileges to jiwoo;