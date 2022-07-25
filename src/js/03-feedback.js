const _ = require('lodash');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

const throttledOnSaveInLocalStorage = _.throttle(saveInLocalStorage, 500);

form.addEventListener('input', throttledOnSaveInLocalStorage);
form.addEventListener('submit', onSubmitClick);

const object = {
  email: '',
  message: '',
};

function saveInLocalStorage(e) {
  object.email = form.elements.email.value;
  object.message = form.elements.message.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(object));
}

updateEmailAndMessageValue();

function updateEmailAndMessageValue() {
  const saveLocalStorageValues = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedLocalStorageValues = JSON.parse(saveLocalStorageValues);

  try {
    email.value = parsedLocalStorageValues.email;
  } catch (error) {}

  try {
    message.value = parsedLocalStorageValues.message;
  } catch (error) {}
}

function onSubmitClick(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.clear();
  form.reset();
}
