//Add event listeners to add functionality to buttons when the website is loaded
window.addEventListener('load',function() {
    let add_to_faves = document.querySelectorAll(".favorite")
    for(var i=0; i < add_to_faves.length;i++ ) {
        add_to_faves[i].addEventListener('click',favorite)
    }

    let filterbar = document.querySelector("#filterbar")
    filterbar.addEventListener('keyup',filter)
})

//click listener for "add to favorites" button
function favorite() {
    //add to favorites list by sending a POST message to the server
    if(this.value==="+ Αγαπημένα") {
        let url = "http://localhost:8080/add_favorite"
        let h = new Headers()
        h.append('Content-Type','application/json')
        //get workid, author and name, to create a new JSON object
        let ulist = this.parentNode.parentNode.childNodes[1]
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
        let ulist = this.parentNode.parentNode.childNodes[1]
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

function filter() {
    setTimeout(function(){
        console.log(".5 second has passed")
        let filter = document.querySelector("#filterbar").value.toUpperCase()
        //get all list items to search if they match with the filter
        let lists = document.querySelectorAll("ul")
        for(var i=0; i < lists.length; i++ ) {
            let items = lists[i].childNodes
            let exists = false;
            for(var j = 0; j < items.length; j++) {
                if(items[j].tagName === 'LI') {
                    let text = items[j].innerHTML
                    console.log(text)
                    if(text.toUpperCase().indexOf(filter) > -1) {
                        console.log("AAAAAAAAAAAAAAAA")
                        exists = true;
                    }
                    if(exists) {
                        items[j].parentNode.parentNode.style.display = "";
                    }else {
                        items[j].parentNode.parentNode.style.display = "none";
                    }
                }
                
            }
            
        }
    },500)
}