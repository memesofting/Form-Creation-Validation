document.addEventListener('DOMContentLoaded', function()
{
    console.log('DOM loaded successfully');

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    let isValid = true;
    const messages = [];

    form.addEventListener('submit', function(event)
    {
        event.preventDefault();

        // username input
        const usernameInput = document.getElementById('username');
        const username = usernameInput.value.trim();
        // email input
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        // password input
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value.trim();

        // username validation
        if (username.length < 3)
        {
            isValid = false;
            console.log('invalid name input');
            messages.push('Username should be 3 or more characters');
        }
        // email validation
        else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email))
        {
            isValid = false;
            messages.push('Email should have the format "michael@good.com"');
        }
        // password validation
        else if (password.length < 8)
        {
            isValid = false;
            messages.push('password should 8 or more characters');
        }
        else
        {
            isValid = true;
        }

        feedbackDiv.style.display = 'block';
        if (isValid)
        {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = '#28a745';
        }
        else
        {
            let errorMessages = messages.join("<br>");
            feedbackDiv.innerHTML = errorMessages;
            feedbackDiv.style.color = "#dc3545";
        }
    });
});