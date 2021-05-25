const constants = require('./constants.js')
const mysql = require('mysql')

console.log(constants.aws.pass)
var connection = mysql.createConnection({
    host: constants.aws.host,
    port: constants.aws.port,
    user: constants.aws.user,
    password: constants.aws.pass,
    database: constants.aws.database
})

connection.connect(function(err) {
    if(err) throw err;
    console.log("Connected!")
    //create new database
    let query = "CREATE DATABASE webdev2";
    connection.query(query, function (err, result) {
        if (err) throw err;
        console.log("Database created!");
    })

    //create table Work
    query = "CREATE TABLE Work (author VARCHAR(255), title VARCHAR(255), workid INT PRIMARY KEY)"
    connection.query(query, function (err, result) {
        if (err) throw err;
        console.log("Table Work created!");
    })
})