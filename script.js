document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("loginMessage");
    const logoutButton = document.getElementById("logoutButton");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulate login logic (replace with actual login logic)
        if (username === "user" && password === "password") {
            loginMessage.textContent = "";
            window.location.href = "dashboard.html";
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const loginForm = document.getElementById("login-form");
  
//     loginForm.addEventListener("submit", function (event) {
//       event.preventDefault();
//       // Simulate successful login and redirect to the dashboard
//       window.location.href = "dashboard.html";
//     });
//   });
  
