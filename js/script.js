const cardHolder = document.querySelector("#card-holder");
const cardNumber = document.querySelector("#card-number");
const expiryMonth = document.querySelector(".month");
const expiryYear = document.querySelector(".year");
const cvcCode = document.querySelector("#CVC-number");

const holderNameInput = document.getElementById("name");
const holderNumberInput = document.getElementById("number");
const expiryMonthInput = document.getElementById("month");
const expiryYearInput = document.getElementById("year");
const cvcCodeInput = document.getElementById("code");

const form = document.querySelector(".background-form");
const confirmed = document.querySelector(".confirmed");
const continued = document.querySelector(".btn-continue");


const nameError = document.querySelector(".name-error");
let validName = false;
const numberError = document.querySelector(".number-error");
let validNumber = false;
const monthError = document.querySelector(".month-error");
let validMonth = false;
const yearError = document.querySelector(".year-error");
let validYear = false;
const cvcError = document.querySelector(".cvc-error");
let validCVC = false;

form.addEventListener("submit", (e) => {
    // validation
    if (validName && validNumber && validMonth && validYear && validCVC) {
        form.classList.add("display-none");
        confirmed.classList.remove("display-none");
        e.preventDefault();
    }
});

holderNameInput.onkeyup = function() {
    cardHolder.textContent = holderNameInput.value.toUpperCase();
}

holderNameInput.onchange = function() {
    if ((holderNameInput.value.match("[0-9]+"))) {
        holderNameInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        nameError.classList.remove("display-none");
        nameError.textContent = "Please enter a valid name";
        e.preventDefault();
    } else {
        holderNameInput.style.cssText = ("border: 2px solid hsl(145, 63%, 49%)");
        nameError.classList.add("display-none");
        validName = true;
    }
    
}

holderNumberInput.onkeyup = function() {
    cardNumber.textContent = holderNumberInput.value;
}

holderNumberInput.onchange = function() {
    if (holderNumberInput.value.match("[a-zA-Z]+")) {
        holderNumberInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%");
        numberError.classList.remove("display-none");
        numberError.textContent = "Wrong format, numbers only";
        e.preventDefault();
    } else if (holderNumberInput.value.length != 19){
        holderNumberInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        numberError.classList.remove("display-none");
        if (holderNumberInput.value.length < 19) {
            numberError.textContent = "Too few characters, check spaces.";
        } else {
            numberError.textContent = "Too many characters";
        }
        e.preventDefault();
    } else {
        holderNumberInput.style.cssText = ("border: 2px solid hsl(145, 63%, 49%");
        numberError.classList.add("display-none");
        validNumber = true;
    }
}

expiryMonthInput.onkeyup = function() {
    expiryMonth.textContent = expiryMonthInput.value;
}

expiryMonthInput.onchange = function() {
    if (expiryMonthInput.value.match("[a-zA-Z]+")) {
        expiryMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        monthError.classList.remove("display-none");
        monthError.textContent = "Wrong format, numbers only";
        e.preventDefault();
    } else if (expiryMonthInput.value.length != 2) {
        expiryMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        monthError.classList.remove("display-none");
        monthError.textContent = "Too few/many characters";
        e.preventDefault();
    } else if (expiryMonthInput.value > 12) {
        expiryMonthInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        monthError.classList.remove("display-none");
        monthError.textContent = "Invalid month number";
        e.preventDefault();
    } else {
        expiryMonthInput.style.cssText = ("border: 2px solid hsl(145, 63%, 49%)");
        monthError.classList.add("display-none");
        validMonth = true;
    } 
}

expiryYearInput.onkeyup = function() {
    expiryYear.textContent = expiryYearInput.value;
}

expiryYearInput.onchange = function() {
    if (expiryYearInput.value.match("[a-zA-Z]+")) {
        expiryYearInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        yearError.classList.remove("display-none");
        yearError.textContent = "Wrong format, numbers only";
        e.preventDefault();
    } else {
        expiryYearInput.style.cssText = ("border: 2px solid hsl(145, 63%, 49%)");
        yearError.classList.add("display-none");
        validYear = true;
    }
}

cvcCodeInput.onkeyup = function() {
    cvcCode.textContent = cvcCodeInput.value;
}

cvcCodeInput.onchange = function() {
    if (cvcCodeInput.value.match("[a-zA-Z]+")) {
        cvcCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        cvcError.classList.remove("display-none");
        cvcError.textContent = "Wrong format, numbers only";
        e.preventDefault();
    } else if (cvcCodeInput.value.length != 3) {
        cvcCodeInput.style.cssText = ("border: 2px solid hsl(0, 100%, 66%)");
        cvcError.classList.remove("display-none");
        if (cvcCodeInput.value.length < 3) {
            cvcError.textContent = "Too few characters";
        } else {
            cvcError.textContent = "Too many characters";
        }
        e.preventDefault();
    } else {
        cvcCodeInput.style.cssText = ("border: 2px solid hsl(145, 63%, 49%");
        cvcError.classList.add("display-none");
        validCVC = true;
    }
}

continued.addEventListener('click', () => {
    alert("Thank you for testing my website!");
    document.location.reload()
})