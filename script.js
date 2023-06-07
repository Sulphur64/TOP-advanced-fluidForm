const pass = document.querySelector("#pwd");
const passConfirm = document.querySelector("#pwd2");
const passWarning = document.querySelector(".warning")

function passwordConfirm(){

    if (pass.value == passConfirm.value) {
        pass.classList.remove("error");
        passConfirm.classList.remove("error");

        pass.setAttribute("style","border: 1px solid green");
        passConfirm.setAttribute("style","border: 1px solid green");

        passWarning.textContent = "";
        
    } else {
        pass.removeAttribute("style","border: 1px solid green");
        passConfirm.removeAttribute("style","border: 1px solid green");
        pass.classList.add("error");
        passConfirm.classList.add("error");

        passWarning.textContent = "* Passwords do not match";
    }
};



pass.addEventListener("input",()=>passwordConfirm());
passConfirm.addEventListener("input",()=>passwordConfirm())
