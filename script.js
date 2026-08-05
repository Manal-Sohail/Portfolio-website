const moon = document.getElementById("mode");
const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email")
const msg = document.getElementById("message");
moon.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
});
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Name Validation
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Email Validation
    if (email === "") {
        alert("Please enter your email address.");
        return;

    }

    // Simple Email Format Check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;

    }

    // Message Validation
    if (message === "") {
        alert("Please enter your message.");
        return;

    }

    // Success Message
    alert("Your message has been sent successfully!");
        return;


    // Clear the form
    form.reset();

});