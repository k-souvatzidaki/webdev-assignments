const express = require('express')
const path = require('path')
const app = express()
const dao = require('./models/favorites.js')

app.listen(8080)

//static content in directory "public", accessible under path "/static"
app.use('/static', express.static(__dirname + '/public'))
//parse json data 
app.use(express.json())
//index.html is the root page of this app
app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname, 'public')
    }
    res.sendFile('index.html', options, function(err){
        console.log(err)
    })
})


/** REQUESTS */

//POST a new favorite
app.post('/favorites',function(req,res){
    console.log("New POST request to add a favorite")
    //add new favorite to db
    let added = dao.add(req.body)
    console.log(added)
    //TODO inform client if the work is already saved as a favorite
    if(added) {
        console.log("Added to array")
    }
    
})