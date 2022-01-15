const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
const jobDrop = document.getElementById("occupation");
const stateDrop = document.getElementById("state");
const myForm = document.querySelector("form");

let isValid = false;
let passWordMatch = false;

const fetchData = async () => {
  const response = await axios.get(
    "https://frontend-take-home.fetchrewards.com/form"
  );

  function getOccupation() {
    for (let jobs of response.data.occupations) {
      const option = document.createElement("option");
      jobDrop.appendChild(option);
      option.textContent = jobs;
    }
  }
  // requesting the data to select the state
  function getState() {
    //console.log(response.data.states);
    for (let state of response.data.states) {
      const option = document.createElement("option");
      stateDrop.appendChild(option);
      option.textContent = state.name;
    }
  }
  getOccupation();
  getState();
};
fetchData();

function validateForm(params) {
  // api constriant
  isValid = form.checkValidity();

  //   changed message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
  // check if passwords match
  if (password1El.value === password2El.value) {
    passWordMatch = true;
    password1El.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passWordMatch = false;
    message.textContent = "Make sure passwords match. ";
    message.style.color = "red";

    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
  }
  // if form is vaild and passwords match
  if (isValid && passWordMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
  }
}
function storeForm() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    occupation: form.occupation.value,
    state: form.state.value,
    password: form.password.value,
  };
  console.log(user);
  const formData = new FormData(myForm);
  const formDataEn = Object.fromEntries(formData);
  console.log(formDataEn);

  const postData = async () => {
    try {
      const response = await fetch(
        "https://frontend-take-home.fetchrewards.com/form",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //const json = await response.json();
      console.log(response);
    } catch (e) {
      console.error(e);
      console.log("there was an error");
    }
  };
  postData();
}

function processFormData(e) {
  e.preventDefault();

  //   Validate form
  validateForm();
  // submit if valid
  if (isValid && passWordMatch) {
    // sendData();
    storeForm();
  }
}

form.addEventListener("submit", processFormData);
