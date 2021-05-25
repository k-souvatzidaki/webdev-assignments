//DAO object to manage works in the favorites list
const constants = require('./constants.js')
const mysql = require('mysql')

//connect to aws database
function connect_to_aws() {
    let connection = mysql.createConnection({
        host: constants.aws.host,
        port: constants.aws.port,
        user: constants.aws.user,
        password: constants.aws.pass,
        database: constants.aws.database
    })
    return connection
}

//add a new favorite to database
function add_favorite(work) {
    let connection = connect_to_aws()
    let query = "INSERT INTO Work(author,title,workid) VALUES ('"+work.author+"','"+work.title+"',"+work.workid+")"
    connection.query(query, function (err, result) {
        if (err) {
            console.log("Already exists!")
        }else {
            console.log("Inserted Work with id = "+work.workid)
        }
    })
}

//return all favorites from database
function show_favorites() {
    let connection = connect_to_aws()
    let query = "SELECT * FROM Work"
    connection.query(query, function (err, result) {
        if (err) throw err
        console.log(result)
    })
}


//EXPORTS
module.exports = {
    add: add_favorite,
    show: show_favorites
}