let userNameInput = document.querySelector(".username");

let passwordInput = document.querySelector(".password");

let modal = document.querySelector(".modal");

function dataValidation() {
  let usernameValue = userNameInput.value;
  let passwordValue = passwordInput.value;

  if (usernameValue.length < 12) {
    modal.style.display = "inline";
    modal.innerHTML = "نام کاربری را درست وارد کنید";
  } else if (passwordValue.length < 8) {
    modal.style.display = "inline";
    modal.innerHTML = "رمز کاربری را درست وارد کنید";
  } else {
    modal.style.display = "inline";
    modal.style.backgroundColor = " #4CAF50";
    modal.innerHTML = "ورود موفقیت آمیز بود";
  }

  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}
