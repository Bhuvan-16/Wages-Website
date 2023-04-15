let userlink = document.getElementById('linkeduser');
let signoutlink = document.getElementById('signout');
let Navbar = document.getElementById('navbar');
let page = document.getElementById('redirect_to_login');
var currentUser = null;


function getUsername(){

    currentUser = JSON.parse(sessionStorage.getItem('user'));
    return currentUser;
    
}

function Signout(){
    sessionStorage.removeItem('user');
    window.location = 'index.html';
}

window.onload = function(){
    getUsername();
    if(currentUser == null){
        Navbar.style.display = "none";
    }
    else{
        
        userlink.innerText= "Hello " + currentUser.Username +" 😁";
        userlink.classList.replace("btn", "nav-link");
        userlink.classList.remove("btn-primary");
        userlink.href = "#";

        signoutlink.innerText = "Sign Out";
        signoutlink.classList.replace("btn", "nav-link");
        signoutlink.classList.remove("btn-success");
        signoutlink.href = "index.html";

        // page.style.display = "none";
    }
    $("div#content #name").html(currentUser.Username);
    $("div#content #email").html(currentUser.Email);
    $("div#content #balance").html(currentUser.Wages);

}