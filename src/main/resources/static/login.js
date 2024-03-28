document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.querySelector('.form-container sign-up form');
    const loginForm = document.querySelector('.form-container log-in form');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const password = this.querySelector('input[name="password"]').value;
        const confirmPassword = this.querySelector('input[name="confirmPassword"]').value;

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (!isValidPassword(password)) {
                alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.");
                return;
            }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
    });
    function isValidPassword(password) {
        // Password must be at least 8 characters long
        if (password.length < 8) {
            return false;
        }

        // Password must contain at least one uppercase letter
        if (!password.match(/[A-Z]/)) {
            return false;
        }

        // Password must contain at least one lowercase letter
        if (!password.match(/[a-z]/)) {
            return false;
        }

        // Password must contain at least one digit
        if (!password.match(/\d/)) {
            return false;
        }

        // Password must contain at least one special character
        if (!password.match(/[!@#$%^&*()-+=\[\]{}|<>/?~]/)) {
            return false;
        }

        return true;
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form data
        const email = this.querySelector('input[name="email"]').value;
        const password = this.querySelector('input[name="password"]').value;

        // Basic validation
        if (!email || !password) {
            alert("Please enter your email and password.");
            return;
        }

    });
});
