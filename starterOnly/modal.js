function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


document.getElementById("inscription").addEventListener("submit", function(e){
  e.preventDefault();
var email = document.getElementById("email").value;
var birthdate = document.getElementById("birthdate").value;
var quantity = document.getElementById("quantity").value;
var erreur;

function controlePrenom(){
  const first = document.getElementById("first").value;

  if(/^[A-Za-z]{2,20}$/.test(first)){
    return true
  }else
    var erreur ="veuillez rentre un prenom valide"
}
function controlenom(){
  const last = document.getElementById("last").value;

  if(/^[A-Za-z]{2,20}$/.test(last)){
    return true
  }else
    var erreur ="veuillez rentre un nom valide"
}
})


modalBtnClose.addEventListener("click", function() {          
  modalbg.style.display = "none";                             
});