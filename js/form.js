'use strict'

const form = document.querySelector(".form");
const requiredInputs = form.querySelectorAll(".required");

//add validation for every required input on blur
requiredInputs.forEach(input => {
    input.addEventListener("blur", (e) => {
        const currentInput = e.currentTarget;
        const inputValue = currentInput.value.trim();
        //if the input is empty
        if (inputValue === '') {
            setError(currentInput, 'Required')
        }
        //else if current input type is email, compare value with pattern
        else if (currentInput.type === "email") {
            const reg = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
            if (!reg.test(inputValue)) {
                setError(currentInput, 'Provide a valid email address')
            } else {
                clearError(currentInput);
            }
        }
        //else if current input type is telephone, compare value with pattern
        else if (currentInput.type === "tel") {
            const reg = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
            if (!reg.test(inputValue)) {
                setError(currentInput, 'Provide a valid phone number')
            } else {
                clearError(currentInput);
            }
        }
        //else if current input type is password, compare value with pattern
        else if (currentInput.type === "password") {
            const reg = /^[\w\d\s/.-]{8,20}$/
            if (!reg.test(inputValue)) {
                setError(currentInput, 'Password must contain between 8 and 20 characters')
            } else {
                clearError(currentInput);
            }
        } else {
            clearError(currentInput);
        }
    });
});

//set error to invalidated input
function setError(input, message) {
    const parent = input.parentElement;
    parent.classList.add("error");
    parent.querySelector(".errorMessage").innerHTML = message;
}

//clear validated input from error
function clearError(input) {
    const parent = input.parentElement;
    parent.classList.remove("error");
    parent.querySelector(".errorMessage").innerHTML = '';
}

//on submit write form's data on console
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = new URLSearchParams(formData);

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        body: data
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});