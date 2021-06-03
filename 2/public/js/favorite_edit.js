//Add event listener to add functionality to button when the website is loaded
window.addEventListener('load',function() {
    let edit_fave = document.querySelector(".submit_edit")
    edit_fave.addEventListener('click',edit)
})

//click listener for "edit favorite" button
function edit() {
    //edit favorites in the list by sending a POST message to the server
    //get values of textfields and make a json object
    let url = "http://localhost:8080/edit_favorite"
        let h = new Headers()
        h.append('Content-Type','application/json')
        //get workid, author and name, to create a new JSON object
        let obj = {
            "workid": this.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML ,
            "title": this.parentNode.childNodes[3].value,
            "author": this.parentNode.childNodes[7].value,
            "comment": this.parentNode.childNodes[11].value
        }
        //set headers
        let init = {
            method: 'POST',
            headers: h,
            body: JSON.stringify(obj),
        }
        //POST favorite edit
        fetch(url,init)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

        alert("Οι αλλαγές αποθηκεύτηκαν επιτυχώς!")
}