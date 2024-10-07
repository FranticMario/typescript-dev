const registeredEmails: string[] = ["test@example.com", "user@domain.de", "info@website.com"];

// Получаем кнопку и поле ввода, корректно указывая их типы
const input = document.getElementById("checkButton") as HTMLButtonElement;
const emailInputElement = document.getElementById("emailInput") as HTMLInputElement;

if (input && emailInputElement) {
    input.addEventListener("click", function () {
        const emailInput = emailInputElement.value;

        if (registeredEmails.includes(emailInput)) {
            console.log("Welcome Back");
        } else {
            console.log("Du musst dich registrieren");
        }
    });
}