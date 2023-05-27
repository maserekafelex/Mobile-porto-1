const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const form = document.getElementById('contact-form');

form.addEventListener('input', () => {
  localStorage.setItem('fullName', userName.value);
  localStorage.setItem('email', userEmail.value);
  localStorage.setItem('message', userMessage.value);
});

window.addEventListener('load', () => {
  const storedFullName = localStorage.getItem('fullName');
  const storedEmail = localStorage.getItem('email');
  const storedMessage = localStorage.getItem('message');

  if (storedFullName) {
    userName.value = storedFullName;
  }
  if (storedEmail) {
    userEmail.value = storedEmail;
  }
  if (storedMessage) {
    userMessage.value = storedMessage;
  }
});