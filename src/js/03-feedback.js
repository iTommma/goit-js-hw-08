// localStorage.clear();

import throttle from 'lodash.throttle';
const Form = document.querySelector('.feedback-form');
const feedbackFormState = {
  email: '',
  message: '',
};

// // дістаємо зн. з localStorage, перезаписуємо поля форми і об'ект
try {
  const myLocalStorage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  // console.dir(myLocalStorage);
  Form.elements.email.value = myLocalStorage.email;
  Form.elements.message.value = myLocalStorage.message;

  feedbackFormState.email = myLocalStorage.email;
  feedbackFormState.message = myLocalStorage.message;
} catch (arr) {
  console.error(arr);
}

// // ловим подію input тоді записуємо зн. форми в об'єкт а об'єкт у форматі JSON в localStorage
const onFeedbackFormInput = event => {
  feedbackFormState.email = event.currentTarget.elements.email.value;
  feedbackFormState.message = event.currentTarget.elements.message.value;

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
  // console.log(feedbackFormState);
};
Form.addEventListener('input', throttle(onFeedbackFormInput, 500));

// // при події сабміт очищуємо сховище і поля форми. Виводимо у консоль об'єкт з полями email, message
const onFeedbackFormSubmit = event => {
  event.preventDefault();
  console.log(feedbackFormState);
  localStorage.clear();
  Form.elements.email.value = '';
  Form.elements.message.value = '';
};
Form.addEventListener('submit', onFeedbackFormSubmit);

