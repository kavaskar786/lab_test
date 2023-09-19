const feedbackForm = document.getElementById('feedback-form');
const successMessage = document.getElementById('success-message');

feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const commentInput = document.getElementById('comment');

    if (validateInputs(nameInput, emailInput, commentInput)) {
        // Simulate form submission (you can replace this with an actual submission logic)
        setTimeout(() => {
            feedbackForm.reset();
            successMessage.style.display = 'block';
        }, 1000);
    }
});

function validateInputs(nameInput, emailInput, commentInput) {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comment = commentInput.value.trim();

    if (name === '' || email === '' || comment === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
