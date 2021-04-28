//event #1 : change theme on button click by enabling a stylesheet that changes colours
window.addEventListener('load',function(){
    let btn = document.querySelector("#change_theme")
    btn.onclick = function() {
        let cyantheme = document.querySelector("#cyan_theme")
        let pinktheme = document.querySelector("#pink_theme")
        let btn = document.querySelector("#change_theme")
        let text = document.querySelector("#text-of-the-day") //fix colour based on theme (wasn't changing correctly)
        if(pinktheme.disabled) {
            pinktheme.disabled = false //change css styling
            btn.innerHTML = "Ροζ Εμφάνιση" //change html content
            text.style.background = pick_colour_based_on_theme()
        } else {
            pinktheme.disabled = true //change css styling
            btn.innerHTML = "Cyan Εμφάνιση" //change html content
            text.style.background = pick_colour_based_on_theme()
        }
    }
})

//event #2 : show hidden text on button click
window.addEventListener('load',function(){
    let btn = document.querySelector("#showhiddentext")
    let text = document.querySelector("#hiddentext")
    btn.addEventListener("click", function() {
        if(text.style.display==="block") {
            text.style.display="none" //change css property
        } else {
            text.style.display="block" //change css property
        }
    })
})


//DATE: add a different text, plus a different color onmouseover, per day of the week
window.addEventListener('load',function() {
    let text = document.querySelector("#text-of-the-day")
    var d = new Date();
    var day = d.getDay();
    var color1;
    if(day===1) {
        text.innerHTML = "Σήμερα είναι Δευτέρα. Καλή εβδομάδα!"
        color1 = "#1f11ee"
    }
    else if(day===2) {
        text.innerHTML = "Σήμερα είναι Τρίτη, καλή μέρα για να ασχοληθείς με μια εργασία."
        color1 = "#e73232"
    }
    else if(day===3) {
        text.innerHTML = "Σήμερα είναι Τετάρτη, φτάσαμε στη μέση της εβδομάδας."
        color1 = "#fe5780"
    }
    else if(day===4) {
        text.innerHTML = "Σήμερα είναι Πέμπτη, λίγες μέρες ακόμα για το Σαββατοκύριακο. "
        color1 = "#7f72eb"
    }
    else if(day===5) {
        text.innerHTML = "Αύριο είναι Σάββατο και αυτό είναι που μετράει πιό πολύ."
        color1 = "#e729b6"
    }
    else if(day===6) {
        text.innerHTML = "Σήμερα είναι Σάββατο!! Καλή μέρα για να κοιμηθείς λίγο περισσότερο."
        color1 = "#86c705"
    }
    else if(day===0) {
        text.innerHTML = "Σήμερα είναι Κυριακή. Αύριο ξεκινάει μια νέα εβδομάδα. "
        color1 = "#f0fe36"
    }
    
    text.addEventListener("mouseover", function(){
        this.style.background = color1
    })
    //change color back to normal onmouseout based on the theme (check if the pink theme is enabled)
    text.addEventListener("mouseout", function(){
        this.style.background = pick_colour_based_on_theme()
    })
})

function pick_colour_based_on_theme() {
    let pinktheme = document.querySelector("#pink_theme")
    if(pinktheme.disabled) {
        console.log("pink theme is disabled")
        return "#c6e6c7"
    } else {
        console.log("pink theme is enabled")
        return "#ffebe4"
    }
}