const form = document.querySelector('#contactform');
const message = 'Email address must not have uppercase letters';

const showMessage = (message) => {
  const msg = document.querySelector('.email-submission-error');
  msg.innerHTML = `<small class="email-error">${message}</small>`;
};

const validateEmail = (value) => {
  const email = value.toLowerCase();
  if (email.localeCompare(value) === 0) {
    return true;
  }
  return false;
};
