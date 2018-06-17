
var mysql = require('mysql');
class Database {
    constructor (config){
      this.connection = mysql.createConnection(config);
      console.log('Database constrator!');
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
  var config = require('../config/mysqlConfig').config;
  exports.Database = new Database(config);