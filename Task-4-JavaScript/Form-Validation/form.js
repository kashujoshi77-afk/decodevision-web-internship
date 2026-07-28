let contactForm = document.getElementById("contactForm");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let messageInput = document.getElementById("message");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let phoneError = document.getElementById("phoneError");
let messageError = document.getElementById("messageError");

let successMessage = document.getElementById("successMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Clear previous messages
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    messageError.innerText = "";
    successMessage.innerText = "";

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let message = messageInput.value.trim();

    let isValid = true;


    // Name Validation
    if (name === "") {

        nameError.innerText = "Please enter your name.";
        isValid = false;

    } else if (!/^[A-Za-z ]+$/.test(name)) {

        nameError.innerText = "Name should contain only letters.";
        isValid = false;

    }


    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.innerText = "Please enter your email.";
        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerText = "Please enter a valid email address.";
        isValid = false;

    }


    // Phone Validation
    if (phone === "") {

        phoneError.innerText = "Please enter your phone number.";
        isValid = false;

    } else if (!/^[0-9]{10}$/.test(phone)) {

        phoneError.innerText = "Phone number must contain exactly 10 digits.";
        isValid = false;

    }


    // Message Validation
    if (message === "") {

        messageError.innerText = "Please enter your message.";
        isValid = false;

    } else if (message.length < 10) {

        messageError.innerText =
            "Message must contain at least 10 characters.";

        isValid = false;

    }


    // Success
    if (isValid) {

        successMessage.innerText =
            "✅ Form submitted successfully!";

        contactForm.reset();

    }

});