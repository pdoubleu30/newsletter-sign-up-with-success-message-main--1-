const form = document.getElementById('form');
const eAddress = document.getElementById('email');
const userInput = document.getElementById('userInput');
const dButton = document.getElementById('dButton');

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const handleSubmit = (e) => {
  e.preventDefault();

     if (eAddress.value.length === 0 || !emailRegExp.test(eAddress.value)){
    eAddress.classList.add("custom-email");
    document.getElementById('emailError').style.display = "block";
    return;
    } else {
    document.getElementById('success').style.display = "block";
    document.getElementById('mainPage').style.display = "none";
    document.getElementById('newsTwo').style.display = "none";
    };
    //below code taks input content and displays it on the email on the success page
    userInput.textContent = email.value;

const formData = new FormData(e.target);
const data = Object.fromEntries(formData);

console.log(data);

};

const closingSubmit = (e) => {
document.getElementById('success').style.display = "none";
document.getElementById('mainPage').style.display = "block";
document.getElementById('newsTwo').style.display = "block";

if (window.innerWidth < 670 ) {
  document.getElementById('newsTwo').style.display = "none";
}

form.reset();

document.getElementById('emailError').style.display = "none";
eAddress.classList.remove("custom-email");

}



form.addEventListener('submit', handleSubmit);
dButton.addEventListener('click', closingSubmit);
