var mysql =require('mysql');


class Database {
  constructor (config){
    this.connection = mysql.createConnection(config);
  }

  query(sql,args){
    return new Promise((resolve,reject)=>{
      this.connection.query(sql,args,(err,rows)=>{
        if(err){
          return reject(err);
        } 
          resolve(rows);
        })
    })
  }
  close(){
    return new Promise((resolve,reject)=>{
      this.connection.end(err=>{
        if(err) return reject(err);
        resolve();
      })
    })
  }
}

var config ={
  host :'localhost',
  user : 'cjhm',
  password : '1234',
  database :'o2'
};

var db = new Database(config);

var sql = 'SELECT * FROM topic';
db.query(sql)
.then(rows => console.log(rows));



