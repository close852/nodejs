
var db = require('./class/Database').Database;


var sql = 'select * from topic where id = ?';
var args=[1];
let tmp ;
db.query(sql,args)
.then(rows => {
    console.log(rows) 
    tmp = rows
    return db.query(sql,args);
})
.then(rows=>db.close())
.then(()=>{
    console.log('qqq')
    console.log('tmp',tmp);
})
.catch(err=>console.log(err));
