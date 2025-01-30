document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const passwordInput = document.getElementById("password");
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("name");

    // Password visibility toggle function
    window.togglePasswordVisibility = function () {
        const passwordInput = document.getElementById("password");
        const toggleIcon = document.getElementById("toggle-password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.textContent = "🙈"; // Change to hide icon
        } else {
            passwordInput.type = "password";
            toggleIcon.textContent = "👁️"; // Change to show icon
        }
    };

    // Form validation before submission
    form.addEventListener("submit", function(event) {
        let isValid = true;

        // Reset error messages
        document.getElementById("email-error").textContent = '';
        document.getElementById("password-error").textContent = '';
        document.getElementById("username-error").textContent = '';

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(emailInput.value)) {
            document.getElementById("email-error").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Validate password
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
        if (!passwordPattern.test(passwordInput.value)) {
            document.getElementById("password-error").textContent = "Password must be at least 8 characters long and contain at least one letter and one number.";
            isValid = false;
        }

        // Validate username
        if (usernameInput.value.trim().length < 3) {
            document.getElementById("username-error").textContent = "Username must be at least 3 characters long.";
            isValid = false;
        }

        // If any validation fails, prevent form submission
        if (!isValid) {
            event.preventDefault();
        }
    });
});
