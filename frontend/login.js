const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
    loginMessage.textContent = data.message;

    if (data.message.includes('başarılı')) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    }
})
    .catch(error => {
        console.error('Giriş sırasında hata oluştu:', error);
        loginMessage.textContent = 'Giriş sırasında hata oluştu.';
    });
});