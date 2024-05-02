

let name = document.getElementById('name');
let age = document.getElementById('age');
let Mobile_No = document.getElementById('Mobile_No');
let email = document.getElementById('email');
let password = document.getElementById('password');

let emailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

let passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

const checkValidate = () => {

    if (name.value.length === 0) {
        alert('please enter name')
    }

    else if (!email.value.match(emailValid)) {
        alert('enter valid email')
    }

    else if (age.value < 18) {
        alert('age should be greater than 18')
    }

    else if (Mobile_No.value.length < 10 || Mobile_No.value.length > 10) {
        alert('please enter 10 digit mobile no')
    }

    else if (!password.value.match(passwordValid)) {
        alert('enter valid password')
    }

}
