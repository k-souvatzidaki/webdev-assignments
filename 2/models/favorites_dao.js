const e = require("express")

//DAO object to manage works in the favorites list
let favorite_works_ids = []
let favorite_works = []

//add a new favorite to list of works
function add_favorite(work) {
    if(favorite_works_ids.includes(work.workid)) {
        console.log("Already Exists")
        return false
    }else {
        console.log("Added work to list")
        favorite_works.push(new Work(work.author,work.title,work.workid))
        favorite_works_ids.push(work.workid)
        return true
    }
}

//remove a favorite from list of works
function remove_favorite(workid) {
    if(favorite_works_ids.includes(workid)) {
        console.log("Removing work from list")
        //remove workid from lists
        var index = favorite_works_ids.indexOf(workid)
        favorite_works_ids.splice(index,1)
        favorite_works.splice(index,1)
        return true
    }else {
        return false
    }
}

//return all favorites list
function show_favorites() {
    return favorite_works
}

//return a favorite based on workid
function get_favorite(workid) {
    var index = favorite_works_ids.indexOf(workid)
    return favorite_works[index]
}

//change the values of a favorite
function edit_favorite(work) {
    var index = favorite_works_ids.indexOf(work.workid)
    var w = favorite_works[index]
    w.author = work.author
    w.title = work.title
    w.add_comment(work.comment)
    console.log(favorite_works[index].comment)
}

class Work {
    constructor(author, title, workid) {
        this.author = author
        this.title = title
        this.workid = workid
    }
    add_comment(comment) {
        this.comment = comment
    }
}

//EXPORTS
module.exports = {
    add: add_favorite,
    remove: remove_favorite,
    show: show_favorites,
    get: get_favorite,
    edit: edit_favorite
}