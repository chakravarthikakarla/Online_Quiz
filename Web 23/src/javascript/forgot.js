document.getElementById('sendButton').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    if (email) {
        alert('Reset link sent successfully to ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
});
