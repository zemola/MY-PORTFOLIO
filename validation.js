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

  // Object to be stored on the LocalStorage

  const userData = {
    name: document.querySelector('.user-name').value,
    email: document.querySelector('.user-email').value,
    message: document.querySelector('.user-message').value,
  };

  if (email) {
    messsageText.remove();
    form.submit();

    // Storing to the localstorage
    localStorage.setItem('userData', JSON.stringify(userData));

    form.reset();
  } else {
    showMessage(message, false);
  }
});
