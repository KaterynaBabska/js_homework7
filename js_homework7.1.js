var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки "довірених" email-адрес
const trustedEmailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

// Створюємо масив гідних довіри email-адрес
const trustedEmails = arr
    .map(user => user.email)
    .filter(email => trustedEmailRegex.test(email));

console.log(trustedEmails);
