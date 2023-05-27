const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const form = document.getElementById('contact-form');

form.addEventListener('input', () => {
  const contactFormData = {
    fullName: userName.value,
    email: userEmail.value,
    message: userMessage.value,
  };
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
});

// Load saved data from localStorage on page load
window.addEventListener('load', () => {
  const storedContactData = localStorage.getItem('contactFormData');

  if (storedContactData) {
    const contactData = JSON.parse(storedContactData);
    userName.value = contactData.fullName;
    userEmail.value = contactData.email;
    userMessage.value = contactData.message;
  }
});
