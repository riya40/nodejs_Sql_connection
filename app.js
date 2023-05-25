const mysql = require('mysql2');

//create mysql connection

const connnection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'Mysql#12345',
    database:'company'
});

connnection.connect((err)=>{
    if(err){
        console.log('Error connecting to mysql database',err);
        return;
    }
    console.log('connected to mysql')
});
