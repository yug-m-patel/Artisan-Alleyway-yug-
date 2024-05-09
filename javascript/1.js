const loginFrm = document.getElementById("login")
loginFrm.addEventListener("submit",(e)=>{
    console.log("login");
    e.preventDefault();
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    if (password == "" && username == "") {
        alert("Please fill out all fields");
        frm1.username.focus();
        return false;
    }
    else if(username == ""){
        alert("Please fill out username field");
        frm1.username.focus();
        return false;
    }
    else if(password == ""){
        alert("Please fill out password field");
        frm1.password.focus();
        return false;
    }
    else{
        alert("Thank you for login the form "+username);

    }
})
function showpassword(){
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}