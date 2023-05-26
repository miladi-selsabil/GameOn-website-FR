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

const checkLocation = document.querySelectorAll("location");
const errorCheckLocation = document.querySelector(".error_location");

const checkboxCondition = document.querySelectorAll("#checkbox1");
const errorCheckboxCondition = document.querySelector(".error_condition");
//click sur submt envoie du formulaire
const form = document.getElementById("inscription");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    conditionPrenom() &&
    conditionEmail() &&
    conditionEmail() &&
    conditionTournoi() &&
    conditionBirthday() &&
    checkbox() &&
    validCondition()
  ) {
    modalConfirmation.style.display = "block";
    form.style.display = "none";
  } else {
    modalConfirmation.style.display = "none";
  }
});

function conditionPrenom() {
  const regex = new RegExp("^[A-Za-z.\\-\\_]{2,20}$");
  prenom.addEventListener("blur", function (event) {
    if (!regex.test(prenom.value)) {
      errorPrenom.innerHTML = "le prenom n'est pas valide ";
    } else {
      errorPrenom.innerHTML = "";
    }
  });
}
conditionPrenom();

function conditionNom() {
  const regex = new RegExp("^[A-Za-z.\\-\\_]{2,20}$");
  nom.addEventListener("blur", function (event) {
    if (!regex.test(nom.value)) {
      errorNom.innerHTML = "le nom n'est pas valide ";
    } else {
      errorNom.innerHTML = "";
    }
  });
}
conditionNom();

function conditionEmail() {
  const regexEmail = new RegExp(
    "^[A-Za-z0-9.\\_]+[@]{1}[A-Za-z0-9.\\-\\_]+[.]{1}[a-z]{2,10}$"
  );
  email.addEventListener("blur", function (event) {
    if (!regexEmail.test(email.value)) {
      errorEmail.innerHTML = "le mail est incorrect ";
    } else {
      errorEmail.innerHTML = "";
    }
  });
}
conditionEmail();

function conditionBirthday() {
  birthday.addEventListener("blur", function (event) {
    if (!birthday.value) {
      errorBirthday.innerHTML = "le date d'anniverssaire est incorrect ";
    } else {
      errorBirthday.innerHTML = "";
    }
  });
}
conditionBirthday();

function conditionTournoi() {
  const numbersValue = new RegExp("^[0-9]{1,2}$");
  tournoi.addEventListener("blur", function (event) {
    if (!numbersValue.test(tournoi.value)) {
      errorTournoi.innerHTML = "le Nombre est incorrect ";
    } else {
      errorTournoi.innerHTML = "";
    }
  });
}
conditionTournoi();

function checkbox() {
  for (let i = 0; i < checkLocation.length; i++) {
    checkLocation.addEventListener("change", function (event) {
      if (checkLocation[i].checked.value) {
        errorCheckLocation.innerHTML = "";
        return true;
      } else {
        errorCheckLocation.innerHTML = "Au moins une case doit être cochez";
        return false;
      }
    });
  }
}
checkbox();

function checkConditionControl() {
  const checkboxCondition = document.querySelectorAll("#checkbox1");
  let coche = false;
  console.log(checkboxCondition);
  checkboxCondition.forEach((label) => {
    label.addEventListener("change", (event) => {
      if (event.target.checked) {
        coche = true;
      }
    });
  });
  return coche;
}

function validCondition() {
  console.log("condition");
  if (!checkConditionControl()) {
    errorCheckboxCondition.innerHTML =
      "les conditions génerales doivent être cocher";
  } else {
    errorCheckboxCondition.innerHTML = "";
  }
}
