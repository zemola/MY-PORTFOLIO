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

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const messsageText = document.querySelector('.email-submission-error');
  const emailInput = form.elements[1];
  const email = validateEmail(emailInput.value);
  if (email) {
    messsageText.remove();
    form.submit();
    form.reset();
  } else {
    showMessage(message, false);
  }
});
