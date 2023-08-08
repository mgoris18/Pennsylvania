let email = document.querySelector('#email');
let veremail = document.querySelector('#veremail');
let result = document.querySelector('p');
let button = document.querySelector('button');

function checkEmail() {
    result.innerText = email.value == veremail.value ? 'Valid email' : 'Email does not match';
}

button.addEventListener("click", () => {
    if (veremail.value.length != 0) checkEmail();
})

veremail.addEventListener("click", checkEmail);