//click listener for "add to favorites" button
function favorite() {
    console.log("click!")
    console.log(this.value)
    //add to favorites list by sending a POST message to the server
    if(this.value==="+ Αγαπημένα") {
        let url = "http://localhost:8080/add_favorite"
        let h = new Headers()
        h.append('Content-Type','application/json')
        //get workid, author and name, to create a new JSON object
        let ulist = this.parentNode.childNodes[1]
        let obj = {
            "author": ulist.childNodes[1].innerHTML,
            "title": ulist.childNodes[3].innerHTML,
            "workid": ulist.childNodes[5].innerHTML
        }
        //set headers
        let init = {
            method: 'POST',
            headers: h,
            body: JSON.stringify(obj),
        }
        //POST new favorite
        fetch(url,init)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            if(result == "true") {
                alert("Το έργο προτέθηκε επιτυχώς στα αγαπημένα!")
                this.value = "- Αγαπημένα"
            }else {
                alert("Αυτό το έργο υπάρχει ήδη στα αγαπημένα!")
                this.value = "- Αγαπημένα"
            }
        })
        .catch(error => {
            console.log(error)
        })

    //remove from favorites list
    }else {
        let url = "http://localhost:8080/remove_favorite"
        let h = new Headers()
        h.append('Content-Type','application/json')
        //get workid, author and name, to create a new JSON object
        let ulist = this.parentNode.childNodes[1]
        let obj = {
            "workid": ulist.childNodes[5].innerHTML
        }
        //set headers
        let init = {
            method: 'POST',
            headers: h,
            body: JSON.stringify(obj),
        }
        //POST remove favorite
        fetch(url,init)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            if(result == "true") {
                alert("Το έργο αφαιρέθηκε επιτυχώς από τα αγαπημένα!")
                this.value = "+ Αγαπημένα"
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}