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
    console.log('---before update---')
    if(err){
        console.error("error in executng query",err);
        //connnection.end();
        return;
    }
    console.log('table data:');
    results.forEach((row)=>{
        console.log(row);
    });
    //close connection
   // connnection.end();
});
// data to be updated

const data = {department:'Cyber Security'}

connnection.query('update employee Set ? where id = ? ',[data,106],(err,result)=>{
    if(err){
        console.error('error updating data',err);
        return;
    }
    console.log('data updated successfully');
    console.log('rows affected:',result.affectedRows);

});

connnection.query('select * from employee', (err,result)=> {
   console.log('-----afetr update----')

    console.log('table data : ');
    result.forEach((row) => {
        console.log(row);
    });

    connnection.end();
})
