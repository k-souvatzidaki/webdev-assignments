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
        response.json()
    })
    .then(obj => {
        console.log('Received',obj)
    })
    .catch(error => {
        console.log(error)
    })
}