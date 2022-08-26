const loginForm = document.querySelector(`#login_form`);
const loginInput = document.querySelector(`#login_form input`);
const greeting = document.querySelector(`#greeting`);

const hidden_class = `hidden`;
const login_name = `loginName`;

function loginSubmit(event) {
  loginForm.addEventListener(`submit`, loginSubmit);
  event.preventDefault();
  loginForm.classList.add(hidden_class);
  const loginName = loginInput.value;
  localStorage.setItem(login_name, loginName);
}


loginForm.addEventListener(`submit`, loginSubmit);
// if (localName === null) {
//   loginForm.classList.remove(hidden_class);
//   loginForm.addEventListener(`submit`, loginSubmit);
// } else {
//   loginForm.classList.remove(hidden_class);
//   loginForm.addEventListener(`submit`, loginSubmit);

// }

link = 'main.html';

function hrefLink() {
  location.href = link;
}

