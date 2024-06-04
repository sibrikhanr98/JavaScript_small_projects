const password_el = document.querySelector('#password');
const length_el = document.querySelector('#length');
const uppercase_el = document.querySelector('#uppercase');
const lowercase_el = document.querySelector('#lowercase');
const number_el = document.querySelector('#numbers');
const symbol_el = document.querySelector('#symbols');

const generator_btn = document.querySelector("#generator");
generator_btn.addEventListener('click',generatePassword);
const copy_btn = document.querySelector("#copy");
copy_btn.addEventListener('click', CopyPassword);

const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const symbols_chars = "!@#$%^&*()";
const numbers_chars = "0123456789";


function generatePassword(){
    let password = "";
    let length = length_el.value;
    let chars = "";

    chars +=uppercase_el.checked ? uppercase_chars : "";
    chars +=lowercase_el.checked ? lowercase_chars : "";
    chars +=number_el.checked ? numbers_chars : "";
    chars +=symbol_el.checked ? symbols_chars : "";

    for (let i = 0; i <=length; i++){
        let rand = Math.floor(Math.random()*chars.length);
        password += chars.substring(rand,rand + 1); 
    }

    password_el.value = password;
    console.log(password)
}

function CopyPassword(){
    if (navigator.clipboard) {
		navigator.clipboard.writeText(password_el.value);

		alert("Password copied to clipboard");
	}
}