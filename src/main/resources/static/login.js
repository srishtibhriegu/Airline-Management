document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.querySelector('.sign-up form');
    const loginForm = document.querySelector('.log-in form');

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

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Perform your signup/authentication logic here
        // For example, you can make an AJAX request to a server endpoint
        // to register the user and handle the response accordingly
    });

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

        // Perform your login/authentication logic here
        // For example, you can make an AJAX request to a server endpoint
        // to authenticate the user and handle the response accordingly
    });
});
