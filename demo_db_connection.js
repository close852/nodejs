var mysql =require('mysql');
var config ={
  host :'localhost',
  user : 'cjhm',
  password : '1234',
  database :'o2'
};
var conn = mysql.createConnection(config);

conn.connect((err)=>{
    if(err) throw err;
    console.log('Connected!');
});


var sql = 'SELECT * FROM topic';
conn.query(sql, function(err, rows, fields){
  if(err){
    console.log(err);
  } else {
    for(var i=0; i<rows.length; i++){
      console.log(rows[i].author);
    }
  }
});
