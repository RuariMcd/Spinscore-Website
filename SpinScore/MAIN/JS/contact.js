// Allows the fields to be cleared by a page refresh
window.onload = function () {
    clearFields();
};

// Clears each field
function clearFields() {
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('comment').value = '';
}

// Marks the fields as invalid by displaying an error message
function setFieldError(field, error, message) {
    field.classList.add('error');
    error.classList.add('visible');
    error.textContent = message;
}

// Removes the error message once validation is passed
function clearFieldError(field, error) {
    field.classList.remove('error');
    error.classList.remove('visible');
}

// Checks if the 'name' field is empty. If so, it returns an error
function validateName() {
    const field = document.getElementById('name');
    const error = document.getElementById('name-error');

    if (!field.value.trim()) {
        setFieldError(field, error, 'Please enter your full name.');
        return false;
    }

    clearFieldError(field, error);
    return true;
}

// Checks if the 'email' field is not empty, and that it contains an '@' character. If not, it returns an error
function validateEmail() {
    const field = document.getElementById('email');
    const error = document.getElementById('email-error');
    const value = field.value.trim();

    if (!value) {
        setFieldError(field, error, 'Please enter your email address.');
        return false;
    }

    if (!value.includes('@')) {
        setFieldError(field, error, "Email must contain '@'.");
        return false;
    }

    clearFieldError(field, error);
    return true;
}

// Checks if the 'comment' field is empty. If so, it returns an error
function validateComment() {
    const field = document.getElementById('comment');
    const error = document.getElementById('comment-error');

    if (!field.value.trim()) {
        setFieldError(field, error, 'Please enter a message.');
        return false;
    }

    clearFieldError(field, error);
    return true;
}

// Runs all the validators and returns 'true' if all are valid
function validateForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const commentValid = validateComment();

    return nameValid && emailValid && commentValid;
}

// Updates the UI when the 'send message' button has been pressed
function showSuccess(btn) {
    btn.textContent = 'Sent';
    btn.disabled = true;
    document.getElementById('success-msg').style.display = 'block';
}

// Clears the field and shows the submission if it is valid
function handleSubmit(btn) {
    if (!validateForm()) return;

    clearFields();
    showSuccess(btn);
}
