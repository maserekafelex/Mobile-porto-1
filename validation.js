const form = document.querySelector('.contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const email = emailInput.value;
  if (email.trim() === '') {
    errorMessage.textContent = 'Please type your email on the provided space.';
  } else if (email !== email.toLowerCase()) {
    errorMessage.textContent = 'Email must be in lowercase.';
  } else {
    errorMessage.textContent = '';
    form.submit();
  }
});
