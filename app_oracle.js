var express = require('express');
var app = express();
var oracledb =  require('oracledb');
oracledb.getConnection(
    {
        user : 'nodejs',
        password : 'nodejs_dba',
        connectString : 'localhost/XE'
    },(err,connection)=>{
        if (err) { console.error(err); return; }
        connection.execute(
          "SELECT department_id, department_name "
        + "FROM departments "
        + "WHERE department_id < 70 "
        + "ORDER BY department_id",
          function(err, result)
          {
            if (err) { console.error(err); return; }
            console.log(result.rows);
          });
    })



app.listen(3000,(req,res)=>{
    console.log('Connected, 3000 port!')
}) 