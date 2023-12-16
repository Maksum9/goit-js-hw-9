document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    feedbackForm.email.value = savedState.email || '';
    feedbackForm.message.value = savedState.message || '';

    feedbackForm.addEventListener('input', (event) => {
        const { name, value } = event.target;
        const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
        localStorage.setItem('feedback-form-state', JSON.stringify({ ...currentState, [name]: value.trim() }));
    });

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
        localStorage.removeItem('feedback-form-state');
        console.log({ email: currentState.email, message: currentState.message });
        feedbackForm.email.value = '';
        feedbackForm.message.value = '';
    });
});
