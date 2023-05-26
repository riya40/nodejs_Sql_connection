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

// data to be inserted

const data = {id:105,name:'molly',department:'fsd'}

connnection.query('insert into employee set ?',data,(err,result)=>{
    if(err){
        console.error('error insertind data',err);
        connnection.end()
        return;
    }
    console.log('data inserted successfully');
    console.log('inserted ID:',result.insertId);
});

connnection.query('select * from employee', (err,result)=> {
    //process the result of the query 

    console.log('table data : ');
    result.forEach((row) => {
        console.log(row);
    });

    connnection.end();
})
