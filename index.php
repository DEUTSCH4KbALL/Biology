<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "denispahomov01@gmail.com"; // Введіть сюди свою електронну адресу
    $subject = "Нове повідомлення з сайту";
    $body = "Ім'я: $name\nEmail: $email\nПовідомлення:\n$message";

    // Журналювання введених даних
    error_log("Name: $name, Email: $email, Message: $message");

    // Відправка електронного листа
    if (mail($to, $subject, $body)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Сталася помилка при відправці повідомлення.";
    }
} else {
    echo "Некоректний метод запиту.";
}
?>
