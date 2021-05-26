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

//return all favorites from list
function show_favorites() {
    
}

class Work {
    constructor(author, title, workid) {
        this.author = author
        this.title = title
        this.workid = workid
    }
}

//EXPORTS
module.exports = {
    add: add_favorite,
    show: show_favorites
}