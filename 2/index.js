const express = require('express')
const path = require('path')
const app = express()
const dao = require('./models/favorites_dao.js')
const exp_hb = require('express-handlebars')

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
//initialize express handlebars
app.engine('handlebars',exp_hb())
app.set('view engine','handlebars')


/** REQUESTS */
//POST a new favorite
app.post('/add_favorite',function(req,res){
    console.log("New POST request to add a favorite")
    //add new favorite to list
    let added = dao.add(req.body)
    console.log(added)
    //TODO inform client if the work is already saved as a favorite
    res.send(added)
})

//POST remove favorite
app.post('/remove_favorite',function(req,res){
    console.log("New POST request to remove a favorite")
    //add new favorite to list
    let removed = dao.remove(req.body.workid)
    console.log(removed)
    //TODO inform client if the work is already saved as a favorite
    res.send(removed)
})

//GET page with list of favorites 
app.get('/favorites',function(req,res) {
    console.log("New GET request to get a page with the favorites")

    res.render('favorites_list', {
        favorites : dao.show()
    })
})

//GET edit page for a favorite work
app.get('/:workid',function(req,res) {
    console.log("New GET request to get an edit page for a favorite")

    work = dao.get(req.params.workid)
    res.render('favorite_edit',{
        workid: req.params.workid,
        title: work.title,
        author: work.author,
        critic: work.comment
    })
})

//POST remove favorite
app.post('/edit_favorite',function(req,res){
    console.log("New POST request to edit a favorite")
    //edit favorite in  list
    dao.edit(req.body)
})