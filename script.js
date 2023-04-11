const submitButton = document.querySelector('#submit-button');
const form = document.querySelector('.main-form');


const zipcode = document.querySelector('#zipcode');
zipcode.addEventListener('input',()=>{
    regex = /^\d{5}$/;
    isValid = regex.test(zipcode.value);
    if (isValid){
        zipcode.setCustomValidity('');
    } else {
        zipcode.setCustomValidity('Type in a five digit number.');
    }
})

const country = document.querySelector('#country');
country.addEventListener('input',()=>{
    regex = /^[a-zA-Z ]+$/;
    isValid = regex.test(country.value);
    if (isValid){
        country.setCustomValidity('');
    } else {
        country.setCustomValidity('Type in your country. Numbers and symbols are not allowed.');
    }
})

const password = document.querySelector('#pass');
password.addEventListener('input',()=>{
    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    isValid = regex.test(password.value);
    if (isValid){
        password.setCustomValidity('');
    } else {
        password.setCustomValidity('Select a password with minimum 8 characters, at least one number and one letter.');
    }
})

const confirmPassword = document.querySelector('#confirm-pass');
confirmPassword.addEventListener('input',()=>{
    isValid = confirmPassword.value === password.value ? true : false;
    if (isValid){
        confirmPassword.setCustomValidity('');
    } else {
        confirmPassword.setCustomValidity('Passwords do not match.');
    }
})