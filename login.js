/**
    @Author: Void (c) 2024
    @Title: Login-Script
    @Description: This script is used to handle the login functionality of the website.
    @Since: 1.0.0
*/
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    const closePopup = document.getElementById("closePopup");
    // const logoutButton = document.getElementById('logoutButton');

    function toggleLoginState(isLoggedIn) {
        loginButton.style.display = isLoggedIn ? 'none' : 'inline';
        // logoutButton.style.display = isLoggedIn ? 'inline' : 'none';
    }

    loginButton.addEventListener("click", () => {
        loginPopup.style.display = "flex";
    });

    closePopup.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
            usernameInput.value = "";
            passwordInput.value = "";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            loginPopup.style.display = "none";
            usernameInput.value = "";
            passwordInput.value = "";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            loginSubmitButton.click();
        }
    });

    loginSubmitButton.addEventListener("click", () => {
        if (usernameInput.value && passwordInput.value) {
            if (usernameInput.value !== "" || passwordInput.value !== "") {
                alert("Falscher Benutzername oder Passwort!");
                return;
            }
            alert("Erfolgreich eingeloggt!");
            loginPopup.style.display = "none";  // Popup schließen
        } else {
            alert("Bitte füllen Sie beide Felder aus.");
        }
    });

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    // console.log(isLoggedIn);
    toggleLoginState(isLoggedIn);
});
