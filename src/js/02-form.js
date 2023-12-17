document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    
    feedbackForm.addEventListener('input', (event) => {
        const { name, value } = event.target;
        const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
        localStorage.setItem('feedback-form-state', JSON.stringify({ ...currentState, [name]: value.trim() }));
    });

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = feedbackForm.querySelector('.input-name');
        const messageInput = feedbackForm.querySelector('.textarea');

        const valueEmail = emailInput.value.trim();
        const valueMessage = messageInput.value.trim();

        if (!valueEmail || !valueMessage) {
            alert('Будь ласка, заповніть всі поля форми.');
        } else {
            const currentState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
            localStorage.removeItem('feedback-form-state');
            console.log({ email: currentState.email, message: currentState.message });
            emailInput.value = '';
            messageInput.value = '';
            alert('Дані відправлені успішно!');
        }
    });

    const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
    feedbackForm.email.value = savedState.email || '';
    feedbackForm.message.value = savedState.message || '';
});
