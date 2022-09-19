const form = document.querySelector(".login-form");
const emailInput = form.elements[0];
const passwordInput = form.elements[1];

form.addEventListener("submit", formEvent);

function formEvent(event) {
  event.preventDefault();

  if (!emailInput.value || !passwordInput.value) {
    alert("все поля должны быть заполнены");
  } else {
    const submitResult = {
      [emailInput.name]: emailInput.value,
      [passwordInput.name]: passwordInput.value,
    };

    console.log(submitResult);
    form.reset();
  }
}
