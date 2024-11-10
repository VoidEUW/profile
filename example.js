// app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginSubmit = document.getElementById('loginSubmit');
    const passwordInput = document.getElementById('passwordInput');

    const correctPassword = '123';  // <--- Passwort hier festlegen

    function toggleLoginState(isLoggedIn) {
        loginButton.style.display = isLoggedIn ? 'none' : 'inline';
        logoutButton.style.display = isLoggedIn ? 'inline' : 'none';
        document.getElementById('welcome').innerHTML = isLoggedIn 
            ? "<h2>Willkommen zurück!</h2><p>Schön, dass Sie wieder da sind!</p>" 
            : "<h2>Willkommen!</h2><p>Bitte loggen Sie sich ein, um Ihr Tagebuch zu erstellen und zu verwalten.</p>";
    }

    // Event Listeners
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    loginSubmit.addEventListener('click', () => {
        if (passwordInput.value === correctPassword) {
            toggleLoginState(true);
            localStorage.setItem('isLoggedIn', 'true');
            loginModal.style.display = 'none';
            passwordInput.value = '';
        } else {
            alert('Falsches Passwort!');
        }
    });

    logoutButton.addEventListener('click', () => {
        toggleLoginState(false);
        localStorage.removeItem('isLoggedIn');
    });

    // Initial Login State
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    toggleLoginState(isLoggedIn);
});
