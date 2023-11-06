var login = document.getElementById("login-box")
var overlay = document.getElementById("overlay")
function closelogin(){
    login.style.visibility = "hidden"
    overlay.style.visibility = "hidden"
}
function openlogin(){
    login.style.visibility = "visible"
    overlay.style.visibility = "visible"
}