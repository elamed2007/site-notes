(function () {
  // Switches between pages with a slide animation
  function switchPage(current_page, next_page) {
    document.getElementById(current_page).classList.remove("page-in");
    document.getElementById(current_page).classList.add("page-out");
    document.getElementById(next_page).classList.remove("page-out");
    document.getElementById(next_page).classList.add("page-in");
  }

  // Closes the error popup
  document.getElementById("btn_ok").onclick = function () {
    document.getElementById("error").style.display = "none";
  };

  let inputUsername = document.getElementById("input_username");
  let inputPassword = document.getElementById("input_password");

  // Shows the error popup with a message
  function showError(message) {
    document.getElementById("error_message").textContent = message;
    document.getElementById("error").style.display = "flex";
  }

  // Checks if the username and password fields are empty
  function check_empty_inputs() {
    let username = inputUsername.value;
    let password = inputPassword.value;
    if (username == "" || password == "") {
      showError("Please fill in all fields");
      return true;
    }
    return false;
  }

  // Validates credentials and redirects to the dashboard if correct
  function check_login() {
    if (check_empty_inputs()) return false;
    if (inputUsername.value == "stagaire" && inputPassword.value == "stagaire123") {
      navigate("/dashboard.html");
    } else {
      showError("Incorrect username or password");
    }
    return false;
  }

  // Login can be submitted with the button or the Enter key; both go through validation
  document.querySelector("#page_login form").addEventListener("submit", function (e) {
    e.preventDefault();
    check_login();
  });

  // The forgot-password form must not navigate away (its action is a bare "#")
  document.querySelector("#page_forgot_password form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (document.getElementById("input_email_forgot").value == "") {
      showError("Please fill in all fields");
    }
  });

  // Updates the password field icon (lock / eye-slash) while typing
  function updatePasswordIcon(id) {
    inputPassword = document.getElementById(id);
    let iconPassword = inputPassword.parentElement.querySelector("i");
    if (inputPassword.value == "") iconPassword.setAttribute("class", "fa-solid fa-lock");
    else iconPassword.setAttribute("class", "fa-solid fa-eye-slash");
  }

  // Toggles the password visibility (text / password)
  function togglePasswordVisibility(id) {
    let iconPassword = document.getElementById(id);
    if (iconPassword.className == "fa-solid fa-eye-slash") {
      inputPassword.type = "text";
      iconPassword.setAttribute("class", "fa-solid fa-eye");
    } else if (iconPassword.className == "fa-solid fa-eye") {
      inputPassword.type = "password";
      iconPassword.setAttribute("class", "fa-solid fa-eye-slash");
    }
  }

  // Exposed globally for the inline onclick / oninput attributes in login.html
  window.switchPage = switchPage;
  window.updatePasswordIcon = updatePasswordIcon;
  window.togglePasswordVisibility = togglePasswordVisibility;
})();
