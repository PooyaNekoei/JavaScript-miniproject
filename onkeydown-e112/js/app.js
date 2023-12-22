let userNameInput = document.querySelector(".username");

let passwordInput = document.querySelector(".password");

let usernameValidation = document.querySelector(".username-validation");

let passwordValidation = document.querySelector(".password-validation");

function checkUsername() {
  if (userNameInput.value.length < 12) {
    usernameValidation.style.color = "red";
    usernameValidation.innerHTML = "Must Contain 12 Character (Min)";
  } else {
    usernameValidation.style.color = "green";
    usernameValidation.innerHTML = "Correct Username Value";
  }
}

function checkPassword() {
  if (passwordInput.value.length < 8) {
    passwordValidation.style.color = "red";
    passwordValidation.innerHTML = "Must Contain 8 Character (Min)";
  } else {
    passwordValidation.style.color = "green";
    passwordValidation.innerHTML = "Correct Password Value";
  }
}
