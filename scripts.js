// Навигация
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const btnText = btn.textContent.trim();
        if (btnText === 'Главная') {
            window.location.href = 'index.html';
        }
        if (btnText === 'Участники') {
            alert('Раздел «Участники» — в разработке 🚧');
        }
    });
});
// Переход на страницу входа
const loginBtn = document.querySelector('.btn-login');
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}
// Кнопка регистрации
const registerBtn = document.getElementById('openRegisterModal');
if (registerBtn) {
    registerBtn.addEventListener('click', () => {
        window.location.href = 'register.html';
    });
}
// Форма входа
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const loginData = {
            email,
            password
        };
        try {
            // Здесь позже будет запрос на сервер
            /*
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Ошибка входа');
            }
            */
            alert(`Вход выполнен бы успешно!\nEmail: ${email}`);
        } catch (error) {
            alert('Ошибка при входе: ' + error.message);
        }
    });
}