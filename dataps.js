const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');
const form = document.getElementById('contact-form');
const contactFormData = {
  fullName: '',
  email: '',
  message: '',
};

form.addEventListener('input', () => {
  contactFormData.fullName = userName.value;
  contactFormData.email = userEmail.value;
  contactFormData.message = userMessage.value;
  localStorage.setItem('contactFormData', JSON.stringify(contactFormData));
});

window.onload = () => {
  const contactData = JSON.parse(localStorage.getItem('contactFormData'));

  if (contactData) {
    userName.value = contactData.fullName;
    userEmail.value = contactData.email;
    userMessage.value = contactData.message;
  }
};
