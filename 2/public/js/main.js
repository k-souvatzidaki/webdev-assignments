//The Handlebars template to view works
var templates = {}
templates.workDetails = Handlebars.compile(`
{{#each work}}
    <section>
        <p>{{authorweb}} {{titleweb}}</p>
        <input type="button" class="favorite" value="+ Αγαπημένα">
    </section>
{{/each}}
`)

//Add event listener when the website is loaded
window.addEventListener('load',function() {
    let submit_button = document.querySelector("[type=button]")
    submit_button.addEventListener('click',fetch_url)
})

//fetch a list of all works given a search term
//and view them to the website with a Handlebars template
function fetch_url() {
    let searchbox = document.querySelector("[type=text]")
    let input = searchbox.value
    let url = "https://reststop.randomhouse.com/resources/works/?start=0&max=0&expandLevel=1&search="+input
    console.log(url)

    let h = new Headers()
    h.append('Accept','application/json')
    let init = {
        method: 'GET',
        headers: h
    }

    fetch(url,init)
    .then(response => {
        if(response.ok) {
            return response.json()
        }
    })
    .then(obj => {
        console.log('Received',obj) //TODO remove

        //view json objects content in webpage with Handlebars
        let results = document.querySelector("article")
        let content =  templates.workDetails(obj)
        results.innerHTML = content
        //add event listener to new buttons
        let add_to_faves = document.querySelectorAll(".favorite")
        for(var i=0; i < add_to_faves.length;i++ ) {
            add_to_faves[i].addEventListener('click',favorite)
        }
    })
    .catch(error => {
        console.log(error)
    })
}

//click listener for add to favorites button
function favorite() {
    console.log("Click!")
}