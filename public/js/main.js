// const bcrypt = require('bcrypt');

var loginTemplate = Handlebars.compile(document.getElementById("login-template").innerHTML);
document.getElementById("login-container").innerHTML = loginTemplate();

/* const plainTextPassword = req.body.password;
const saltRounds = 10; // adjust the number of salt rounds to your liking
bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(plainTextPassword, salt, (err, hashedPassword) => {
        if (err) {
            console.log(err);
        } else {
            // Save the hashed password to the database
            const newUser = {
                username: req.body.username,
                password: hashedPassword
            };
            // ...
        }
    });
});

const hashedPasswordFromDb = '...'; // get the hashed password from the database
bcrypt.compare(plainTextPassword, hashedPasswordFromDb, (err, isMatch) => {
    if (err) {
        console.log(err);
    } else if (isMatch) {
        // passwords match
        // ...
    } else {
        // passwords do not match
        // ...
    }
}); */

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const username = document.querySelector("#username").value;
      const password = document.querySelector("#password").value;
  
      if (username === "admin" && password === "password") {
        // Redirect to main.html
        window.location.href = "main.html";
      } else {
        alert("Incorrect username or password");
      }
    });
  });
  
  