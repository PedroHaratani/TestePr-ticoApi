const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.NAME
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`Conectado ao banco de dados ${process.env.NAME}`);
});

module.exports = connection;