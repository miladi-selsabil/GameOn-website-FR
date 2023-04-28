

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




const formulaire={
  firsName: {
      element: document.querySelector("#first"),
      error: document.querySelector(".error_first")
  },
  lastName: {
      element: document.querySelector("#last"),
      error: document.querySelector(".error_last")
  },
  emailName: {
    element: document.querySelector("#email"),
    error: document.querySelector(".error_email")
  },
  birthdayName: {
    element: document.querySelector("#birthdate"),
    error: document.querySelector(".error_birthday")
  },
   numberName: {
    element: document.querySelector("#quantity"),
    error: document.querySelector(".error_number")
  }
}

const form = document.querySelector('#inscription');

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('Je valide le formulaire')
  console.log('First '+formulaire.firsName.element.value)
  console.log('Last '+formulaire.lastName.element.value)
  const valPrenom = formulaire.firsName.element.value;
  const valNom = formulaire.lastName.element.value;
  const valEmail = formulaire.emailName.element.value;
  const valBirthday = formulaire.birthdayName.element.value;
  const valNumber = formulaire.numberName.element.value;


  if(!controleText(valPrenom)){
    formulaire.firsName.error.innerHTML='Le prénom est incorrect !'
}else{
    formulaire.firsName.error.innerHTML=''
}
if(!controleText(valNom)){
    formulaire.lastName.error.innerHTML='Le nom est incorrect !'
}else{
    formulaire.lastName.error.innerHTML=''
}
if(!controleEmail(valEmail)){
  formulaire.emailName.error.innerHTML='Le mail est incorrect !'
}else{
  formulaire.emailName.error.innerHTML=''
}
if(!controleBirthday(valBirthday)){
  formulaire.birthdayName.error.innerHTML='La date d\'anniversaire est incorrect !'
}else{
  formulaire.birthdayName.error.innerHTML=''
}
if(!controleNumber(valNumber)){
  formulaire.numberName.error.innerHTML='Le nombre est incorrect !'
}else{
  formulaire.numberName.error.innerHTML=''
}

});
function controleText(toto){
  const regex= new RegExp('^[A-Za-z.-_]{2,20}$');
  return regex.test(toto)
}
/*function controleText(valNom){
  const regex= new RegExp('^[A-Za-z.-_]{2,20}$');
  return regex.test(valNom)
}*/
function controleEmail(valEmail){
  const regexEmail = new RegExp('^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
  return regexEmail.test(valEmail)
}
function controleBirthday(valBirthday){
  const regexBirthday = new RegExp('^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$') 
  return regexBirthday.test(valBirthday)

}
function controleNumber(valNumber){
  const numbersValue = ('/[0-9]/');
  return numbersValue.test(valNumber)

}
modalBtnClose.addEventListener("click", function() {          
  modalbg.style.display = "none";                             
});