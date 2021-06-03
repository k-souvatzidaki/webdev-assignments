//Add event listener to add functionality to button when the website is loaded
window.addEventListener('load',function() {
    let edit_fave = document.querySelector(".submit_edit")
    edit_fave.addEventListener('click',edit)
})

function edit() {
    alert("o")
}