window.addEventListener("load", function(){
    let submit_button = document.querySelector("[type=submit]")
    submit_button.addEventListener("click",function() {
        //add asterisk and required message to labels of uncompleted required fields
        let required = document.querySelectorAll("[required]")
        for(var i=0; i < required.length;i++ ) {
            let label = required[i].previousElementSibling
            if(!required[i].checkValidity()) {
                label.classList.add("required")
                console.log("validity = false")
            }else {
                label.classList.remove("required")
                console.log("validity = true")
            }
        }

        //RULES
        //1) check if the two passwords are matching
        let password = document.querySelector("#password")
        let password_repeat = document.querySelector("#password_repeat")
        if(password.value != password_repeat.value) {
            password_repeat.setCustomValidity("Οι δύο κωδικοί δεν ταιριάζουν!")
        }else {
            password_repeat.setCustomValidity("")
        }

        //2) check if the user is above 18 years old
        let birthdate = document.querySelector("#birthdate")
        let year_today = new Date().getFullYear()
        let year_birth = new Date(birthdate.value).getFullYear()
        if(year_today-year_birth < 18) {
            birthdate.setCustomValidity("Πρέπει να είστε άνω των 18 ετών!")
        }else {
            birthdate.setCustomValidity("")
        }

    
        //3) check if at least 7 out of 11 questions have been answered
        let checkquestions = document.querySelectorAll(".checkquestion")
        let radioquestions = document.querySelectorAll(".radioquestion")
        let total_answered = 0
        for(var k=0; k < checkquestions.length;k++ ) { //find total checkbox questions answered
            let children = checkquestions[k].childNodes
            let selected_exists = false
            for(var j=0; j < children.length;j++ ) {
                if(children[j].tagName==='DIV') {
                    let checkie = children[j].childNodes[1]
                    if (checkie.checked) {
                        console.log("found a selected checkie")
                        selected_exists = true
            }}}
            if(selected_exists === true)  {
                total_answered = total_answered +1
        }}
        for(var m=0; m < radioquestions.length;m++ ) { //find total radiobutton questions answered
            let children = radioquestions[m].childNodes
            let selected_exists = false
            for(var n=0; n < children.length;n++ ) {
                if(children[n].tagName==='DIV') {
                    let radio = children[n].childNodes[1]
                    if (radio.checked) {
                        console.log("found a selected radio")
                        selected_exists = true
            }}}
            if(selected_exists === true)  {
                total_answered = total_answered +1
        }}
        console.log("Total answered = "+total_answered)
        if(total_answered < 7) {
            this.setCustomValidity("Απαντήστε σε τουλάχιστον 7 από τις 11 ερωτήσεις!") //add custom validity message to the submit button
        }else {
            this.setCustomValidity("")
        }
    })
    
    //add "show password" checkbox functionality
    let checkbox = document.querySelector("#show_pass")
    checkbox.addEventListener("change",function(){
        console.log("check")
        let pass = document.querySelector("#password")
        let pass2 = document.querySelector("#password_repeat")
        if (this.checked) {
            pass.type="text"
            pass2.type="text"
        } else {
            pass.type="password"
            pass2.type="password"
        }
    })
})