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
const fermeture = document.querySelectorAll(".close");
const modalConfirmation = document.querySelector(".formConfirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// //fermeture de formulaire d'inscription

fermeture.forEach((close) => close.addEventListener("click", closek));

function closek() {
  modalbg.style.display = "none";
}
//formulaire d'inscription

//Declaration des variables
const prenom = document.getElementById("first");
const errorPrenom = document.querySelector(".error_first");

const nom = document.getElementById("last");
const errorNom = document.querySelector(".error_last");

const email = document.getElementById("email");
const errorEmail = document.querySelector(".error_email");

const birthday = document.getElementById("birthdate");
const errorBirthday = document.querySelector(".error_birthday");

const tournoi = document.getElementById("quantity");
const errorTournoi = document.querySelector(".error_number");

const checkLocation = document.querySelectorAll("[name=location]");
const errorCheckLocation = document.querySelector(".error_location");

const checkboxCondition = document.querySelector("#checkbox1");
const errorCheckboxCondition = document.querySelector(".error_condition");
//click sur submt envoie du formulaire


const form = document.getElementById("inscription");

/*function pour envoi du formulaire si toute les conditions de la fonction submit sont remplis le formulaire
est envoyer est un message de validation apparait */

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (submitEvent()) {
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  }
});



/*fonction pour les checkbox de la loaclisation ici une case doit etre cocher sinon message d'erreur  */
function checkbox() {
  console.log(checkLocation);
  for (let i = 0; i < checkLocation.length; i++) {
    if (checkLocation[i].checked) {
      errorCheckLocation.innerHTML = "";
      return true;
    }
  }
  errorCheckLocation.innerHTML = "Au moins une case doit être cochez";
  return false;
}


/*fonction pour la checkbox des conditions general la cose doit être obligatoirement cocher  */
function validCondition(){
    const checkboxCondition = document.querySelector("#checkbox1");
    console.log(checkboxCondition)
  if(checkboxCondition.checked){
    errorCheckboxCondition.innerHTML="";
    return true
  }else{
    errorCheckboxCondition.innerHTML="les conditions générales doivent être cochés";
    return false;
  }
}

/*declaration des regex pour que les champs ne contiennent pas d'erreur */
const regexName = new RegExp("^[A-Za-z.\\-\\_]{2,20}$");
const regexEmail = new RegExp(
  "^[A-Za-z0-9.\\_]+[@]{1}[A-Za-z0-9.\\-\\_]+[.]{1}[a-z]{2,10}$"
);
const regexNumber = new RegExp("^[0-9]{1,2}$");

/*function submitEvent qui va permettre de verifier si les conditions sont respecter sinon elle renvoie un 
message d'erreur au moment de l'envoie du formulaire  */
function submitEvent(){
  /**on commence par declarer tout les input et les div qui contiendront des messages d'erreur */
  const fields = document.querySelectorAll(".text-control");
  const fieldsError = document.querySelectorAll("error");
  /*on declare formvalid qu'on intialise a true pour que si les condition sont valide tu m'envoie le formulaire */
  let formValid = true;
  /*on fait un tableau pour que comme le form valid est a true on initialise aucun message
  d'erreur car on dit que de base il y a pas d'erreur donc aucun message
  d'erreur ne s'affiche  */
  Array.from(fieldsError).forEach((errorNode) =>{
    errorNode.innerHTML="";
  });

  /*on recupere tout les champs input on va les recupere grace a 
  leur id et on venir recuperer le parent des  input  */
  Array.from(fields).forEach((nodeElement) =>{
    const type = nodeElement.getAttribute("id");
    const parent = nodeElement.parentNode;
    const errorNode = parent.querySelector(".error");
    switch (type) {
      case "first":
        /*On utilisera test() dès qu'on souhaite savoir si une partie d'une chaîne de caractères correspond à une expression rationnelle elle renvoie true ou false */
        if (!regexName.test(nodeElement.value)) {
          errorNode.innerHTML = "Le prenom est incorrect";
          formValid = false;
        }
        break;
      case "last":
        if (!regexName.test(nodeElement.value)) {
          errorNode.innerHTML = "Le nom est incorrect";
          formValid = false;
        }
        break;
      case "email":
        if (!regexEmail.test(nodeElement.value)) {
          errorNode.innerHTML = "l'email est incorrect";
          formValid = false;
        }
        break;
      case "quantity":
        if (!regexNumber.test(nodeElement.value)) {
          errorNode.innerHTML = "Nombre de tournoi invalide";
          formValid = false;
        }
        break;
      case "birthdate":
        if (!nodeElement.value) {
          errorNode.innerHTML = "Date de naissace invalide";
          formValid = false;
        }
        break;
    }
  });

  /*si les case sont cocher form valid = true  */
  formValid = checkbox();
  formValid = validCondition();

  return formValid;
}

/*function initEvent qui va permettre de verifier si les conditions du champs sont respecter sans envoyer 
le formulaire elle renvoie un message d'erreur au moment de changer et de passer au champs suivant 
*/
function initEvent() {
  const fields = document.querySelectorAll(".text-control");
  const fieldsError = document.querySelectorAll(".error");
  let formValid = true;

  Array.from(fieldsError).forEach((errorNode) => {
    errorNode.innerHTML = "";
  });
  Array.from(fields).forEach((nodeElement) => {
    const type = nodeElement.getAttribute("id");
    const parent = nodeElement.parentNode;
    const errorNode = parent.querySelector(".error");
    switch (type) {
      case "first":
        nodeElement.addEventListener("change", function (event) {
          if (!regexName.test(nodeElement.value)) {
            errorNode.innerHTML = "Le prenom est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "last":
        nodeElement.addEventListener("change", function (event) {
          if (!regexName.test(nodeElement.value)) {
            errorNode.innerHTML = "Le nom est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "email":
        nodeElement.addEventListener("change", function (event) {
          if (!regexEmail.test(nodeElement.value)) {
            errorNode.innerHTML = "L'email est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "quantity":
        nodeElement.addEventListener("change", function (event) {
          if (!regexNumber.test(nodeElement.value)) {
            errorNode.innerHTML = "Le nombre de tournoi est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
      case "birthdate":
        nodeElement.addEventListener("change", function (event) {
          if (!nodeElement.value) {
            errorNode.innerHTML = "L'annee d'anniverssaire est incorrect";
          } else {
            errorNode.innerHTML = "";
          }
        });
        break;
    }
  });
  //test les champs radio
  formValid = checkbox();
  formValid = validCondition();

  return formValid;
}

initEvent();
