document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const result = document.getElementById('contactResult');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'sendEmail.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status === 200) {
            result.textContent = 'Повідомлення успішно відправлено!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Сталася помилка. Будь ласка, спробуйте ще раз.';
            result.style.color = 'red';
        }
    };

    xhr.send(`name=${name}&email=${email}&message=${message}`);
});
