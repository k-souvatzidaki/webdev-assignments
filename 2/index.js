const express = require('express')
const path = require('path')
const app = express()

app.listen(8080)

//static content in directory "public", accessible under path "/static"
app.use('/static', express.static(__dirname + '/public'))
//index.html is the root page of this app
app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname, 'public')
    }
    res.sendFile('index.html', options, function(err){
        console.log(err)
    })
})