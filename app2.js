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

const data = [{id:107,name:'pavan',department:'security'},
{id:108,name:'madhavi',department:'it'}

];
connnection.query('insert into employee values ?',[data.map(Object.values)],(err,result)=>{
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

