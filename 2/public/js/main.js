window.addEventListener('load',function() {
    let submit_button = document.querySelector("[type=button]")
    submit_button.addEventListener('click',fetch_url)
})

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
        //view json objects content in webpage here with handlebars
        console.log('Received',obj)
        //document.body.innerHTML = obj.work[0].authorweb; //gets the name of the author for first work returned
    })
    .catch(error => {
        console.log(error)
    })
}