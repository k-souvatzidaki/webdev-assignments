const express = require('express')
const path = require('path')
const app = express()

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
    console.log(req.body)
    //TODO add new favorite to db
})