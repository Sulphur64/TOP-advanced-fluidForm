const pass= document.querySelector("#pwd");
const passConfirm= document.querySelector("#pwd2");

function passwordConfirm(){

    if (pass.value == passConfirm.value) {
        pass.classList.remove("error");
        passConfirm.classList.remove("error");

        pass.setAttribute("style","border: 1px solid green");
        passConfirm.setAttribute("style","border: 1px solid green");
        console.log("pass is matching",pass.value,passConfirm.value)
    } else {
        pass.removeAttribute("style","border: 1px solid green");
        passConfirm.removeAttribute("style","border: 1px solid green");
        pass.classList.add("error");
        passConfirm.classList.add("error");
        console.log("pass is not matching",pass.value,passConfirm.value)
    }
};



pass.addEventListener("input",()=>passwordConfirm());
passConfirm.addEventListener("input",()=>passwordConfirm())
