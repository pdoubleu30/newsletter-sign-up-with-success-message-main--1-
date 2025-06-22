const form = document.getElementById('form');
const eAddress = document.getElementById('email');
const userInput = document.getElementById('userInput');
const dButton = document.getElementById('dButton');
const newsTwo = document.getElementById('newsTwo');

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
    //below code takes input content and displays it on the email on the success page
    userInput.textContent = email.value;

const formData = new FormData(e.target);
const data = Object.fromEntries(formData);

console.log(data);

};

const closingSubmit = (e) => {

  
  document.getElementById('success').style.display = "none";
  if (window.innerWidth > 670) {
    document.getElementById('mainPage').style.display = "flex";
    document.getElementById('newsTwo').style.display = "flex";
  } else {
    document.getElementById('mainPage').style.display = "block";
  }

  /*
  

if (window.innerWidth < 670 ) {
  document.getElementById('newsTwo').style.display = "none";
} else {
  document.get
}
  */

form.reset();

document.getElementById('emailError').style.display = "none";
eAddress.classList.remove("custom-email");

};

const handleResize = () => {
  if (document.getElementById('success').style.display === "block") {
    newsTwo.style.display = 'none';
    document.getElementById('mainPage').style.display = "none";
  } else if (window.innerWidth < 670) {
    newsTwo.style.display = "none";
      document.getElementById('mainPage').style.display = "block";

  } else if (window.innerWidth > 670) {
    newsTwo.style.display = "block";
    document.getElementById('mainPage').style.display = "flex";

  }
};



form.addEventListener('submit', handleSubmit);
dButton.addEventListener('click', closingSubmit);
window.addEventListener('resize', handleResize);

//checks the page when it initially is opened
handleResize();
