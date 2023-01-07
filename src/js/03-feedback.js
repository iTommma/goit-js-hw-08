// localStorage.clear();

// // знаходим форму
const feedbackForm = document.querySelector('.feedback-form');

// // перезаписуэмо зн. форми з localStorage
try{
    const myLocalStorage = JSON.parse( localStorage.getItem("feedback-form-state") );
    // console.dir(myLocalStorage);
    feedbackForm.elements.email.value = myLocalStorage.email;
    feedbackForm.elements.message.value = myLocalStorage.message;
} catch (arr) {
    console.error(arr);
}

// // при події записуємо зн. форми в localStorage:
const onFeedbackFormInput = (event) => {
    const feedbackFormState = {
        email: event.currentTarget.elements.email.value,
        message: event.currentTarget.elements.message.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}
feedbackForm.addEventListener("input", onFeedbackFormInput);
