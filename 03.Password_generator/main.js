const password_el = document.getElementById('password');
const length_el = document.getElementById('length');
const uppercase_el = document.getElementById('uppercase');
const lowercase_el = document.getElementById('lowercase');
const number_el = document.getElementById('numbers');
const symbol_el = document.getElementById('symbols');

const generator_btn = document.getElementById("generator");
generator_btn.addEventListener('click',generatePassword);
const copy_btn = document.getElementById("copy");
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
}

async function CopyPassword() {
    try {
        await navigator.clipboard.writeText(password_el.value);
        alert("Password copied to clipboard");
    } catch (error) {
        console.error("Failed to copy password: ", error);
        // Fallback: display a message or provide alternative method for copying
        alert("Failed to copy password. Please try again or use manual copy.");
    }
}
