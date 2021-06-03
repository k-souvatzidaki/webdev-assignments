//Add event listeners to add functionality to buttons when the website is loaded
window.addEventListener('load',function() {
    let add_to_faves = document.querySelectorAll(".favorite")
    for(var i=0; i < add_to_faves.length;i++ ) {
        add_to_faves[i].addEventListener('click',favorite)
    }

    /*
    let edit_buttons = document.querySelectorAll(".edit")
    for(var i=0; i < edit_buttons.length;i++ ) {
        edit_buttons[i].addEventListener('click',edit)
    }*/
})