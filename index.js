const email = document.querySelector("#mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Enter an email address!");
  } else {
    email.setCustomValidity("");
  }
});
