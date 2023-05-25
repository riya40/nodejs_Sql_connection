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

const query = 'select * from employee';
connnection.query(query,(err,results)=>{
    if(err){
        console.error("error in executng query",err);
        connnection.end();
        return;
    }

    console.log('table data:');
    results.forEach((row)=>{
        console.log(row);
    });

    //close connection

    connnection.end();
});