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
const modalConfirmation = document.querySelector(".formConfirmation");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const formulaire = {
  firsName: {
    element: document.querySelector("#first"),
    error: document.querySelector(".error_first"),
  },
  lastName: {
    element: document.querySelector("#last"),
    error: document.querySelector(".error_last"),
  },
  emailName: {
    element: document.querySelector("#email"),
    error: document.querySelector(".error_email"),
  },
  birthdayName: {
    element: document.querySelector("#birthdate"),
    error: document.querySelector(".error_birthday"),
  },
  numberName: {
    element: document.querySelector("#quantity"),
    error: document.querySelector(".error_number"),
  },
  checkboxLocation: {
    element: document.getElementsByName("location"),
    error: document.querySelector(".error_location"),
  },
};

const form = document.querySelector("#inscription");

form.addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
  if (
    init() &&
    nom() &&
    email() &&
    birthday() &&
    number() &&
    validLocation()
  ) {
    modalConfirmation.style.display = "block";
  } else {
    alert("Merci de remplir correctement votre inscription.");
    modalConfirmation.style.display = "none";
  }
});
function controleText(toto) {
  const regex = new RegExp("^[A-Za-z.\\-\\_]{2,20}$");
  return regex.test(toto);
}
/*function controleText(valNom){
  const regex= new RegExp('^[A-Za-z.-_]{2,20}$');
  return regex.test(valNom)
}*/
function controleEmail(valEmail) {
  const regexEmail = new RegExp(
    "^[a-zA-Z0-9.\\_]+[@]{1}[a-zA-Z0-9.\\-\\_]+[.]{1}[a-z]){2,10}$"
  );
  return regexEmail.test(valEmail);
}
function controleBirthday(valBirthday) {
  const regexBirthday = new RegExp(
    "^d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$"
  );
  return regexBirthday.test(valBirthday);
}
function controleNumber(valNumber) {
  const numbersValue = new RegExp("^[0-9]{1,2}$");
  return numbersValue.test(valNumber);
}

function checkboxLocationControl() {
  const checkboxLocation = formulaire.checkboxLocation.element;
  let check = false;
console.log(checkboxLocation);
checkboxLocation.forEach(checkbox=>{
  checkbox.addEventListener("change", (event)=>{
    if (event.target.checked) {
      check = true;
    
    }
  })

})

return check;
 /* for(let i = 0; i < checkboxLocation.length; i++) {
    checkboxLocation[i].addEventListener("click", function (event) {
      if (checkboxLocation[i].checked) {
        formulaire.checkboxLocation.error.innerHTML = "";
        return true;
      } else {
        formulaire.checkboxLocation.error.innerHTML =
          "Vous devez choisir une option.";
        return false;
      }
    });
  }*/
}
function validLocation(){
  console.log("bmm");
  if(!checkboxLocationControl() ){
        formulaire.checkboxLocation.error.innerHTML ="Vous devez choisir une option.";
  }else{
        formulaire.checkboxLocation.error.innerHTML = "";
  }
}
/*function checkbox(){

  for(let i = 0; i < checkboxLocation.length; i++) {
    checkboxLocation.addEventListener("change", function(event) {

     if(checkboxLocation[i].checked.value) {
      formulaire.checkboxLocation.error.innerHTML=''
      return true;
    }else{
      formulaire.checkboxLocation.error.innerHTML='Le prénom est incorrect !'
      return false;
    }
  });
  }


}

checkbox();*/

function init() {
  const valPrenom = formulaire.firsName.element;

  valPrenom.addEventListener("blur", function (event) {
    if (!controleText(valPrenom.value)) {
      formulaire.firsName.error.innerHTML = "Le prénom est incorrect !";
    } else {
      formulaire.firsName.error.innerHTML = "";
    }
    /* const text = event.target.value
  if(!controleText(text)){
    formulaire.firsName.error.innerHTML='Le prénom est incorrect !'
  }else{
    formulaire.firsName.error.innerHTML=''

  }*/
  });
}
init();

function nom() {
  const valNom = formulaire.lastName.element;

  valNom.addEventListener("blur", function (event) {
    if (!controleText(valNom.value)) {
      formulaire.lastName.error.innerHTML = "Le nom est incorrect !";
    } else {
      formulaire.lastName.error.innerHTML = "";
    }
  });
}
nom();

function email() {
  const valEmail = formulaire.emailName.element;

  valEmail.addEventListener("blur", function (event) {
    if (!controleEmail(valEmail.value)) {
      formulaire.emailName.error.innerHTML = "Le mail est incorrect !";
    } else {
      formulaire.emailName.error.innerHTML = "";
    }
  });
}
email();

function birthday() {
  const valBirthday = formulaire.birthdayName.element;
  valBirthday.addEventListener("blur", function (event) {
    if (!controleBirthday(valBirthday.value)) {
      formulaire.birthdayName.error.innerHTML =
        "La date d'anniversaire est incorrect !";
    } else {
      formulaire.birthdayName.error.innerHTML = "";
    }
  });
}
birthday();

function number() {
  const valNumber = formulaire.numberName.element;
  valNumber.addEventListener("blur", function (event) {
    if (!controleNumber(valNumber.value)) {
      formulaire.numberName.error.innerHTML = "Le nombre est incorrect !";
    } else {
      formulaire.numberName.error.innerHTML = "";
    }
  });
}
number();

/* faire apparaitre l'erreur sans faire entrer 
brancher sur chaque element un evenement change(e)
e.target.value -fonction init

evenement blur 

*/

modalBtnClose.addEventListener("click", function () {
  modalbg.style.display = "none";
});
