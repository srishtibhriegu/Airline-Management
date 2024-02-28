function submitForm(){
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

       if (!username || !password) {
              alert("Please enter both username and password");
              return;
          }

         const formData = {
                username: username,
                password: password,
            };

       if (username === "user" && password === "password") {
               alert("Login successful!");
           } else {
               alert("Invalid username or password. Please try again.");
           }
}