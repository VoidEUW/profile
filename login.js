/*
    @Author: voideuw
    @Title: Login-Script
    @Description: This script is used to handle the login functionality of the website.
*/
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    const closePopup = document.getElementById("closePopup");
    // const logoutButton = document.getElementById('logoutButton');

    // Popup anzeigen, wenn "Sign in" geklickt wird
    loginButton.addEventListener("click", () => {
        loginPopup.style.display = "flex";
    });

    /*
    logoutButton.addEventListener("click", () => {
        alert("Erfolgreich ausgeloggt!");
    });
    */

    // Popup schließen, wenn das X geklickt wird
    closePopup.addEventListener("click", () => {
        loginPopup.style.display = "none";
    });

    // Popup schließen, wenn außerhalb des Popups geklickt wird
    window.addEventListener("click", (event) => {
        if (event.target === loginPopup) {
            loginPopup.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            loginPopup.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            loginSubmitButton.click();
        }
    });

    // Login-Button Klick-Event (kann später angepasst werden)
    loginSubmitButton.addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username && password) {
            if (username !== "" || password !== "") {
                alert("Falscher Benutzername oder Passwort!");
                return;
            }
            alert("Erfolgreich eingeloggt!");
            loginPopup.style.display = "none";  // Popup schließen
        } else {
            alert("Bitte füllen Sie beide Felder aus.");
        }
    });
});
