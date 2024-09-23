const form = document.getElementById("form");
const input = document.querySelector(".inputField"); // Assuming the class is used for input
const errorMessage = document.querySelector(".errorMessage");

function isValidEmail(email){
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = input.value.trim();

  if (email === "") {
    errorMessage.textContent = "Whoops! It looks like you forgot to add your email";
    errorMessage.style.color = "var(--Light_Red)";
    input.style.borderColor = "var(--Light_Red)";
    errorMessage.classList.add('show');
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = "Please provide a valid email address";
    errorMessage.style.color = "var(--Light_Red)";
    input.style.borderColor = "var(--Light_Red)";
    errorMessage.classList.add('show');
  } else {
    errorMessage.textContent = "Email has been registered";
    errorMessage.style.color = "var(--Blue)";
    input.style.borderColor = "var(--Blue)";
    errorMessage.classList.add('show');

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
});
