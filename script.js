const btns = document.querySelectorAll(".btns");
const evalV = document.querySelector(".eval");
const plus = document.querySelector(".plus");
const divid = document.querySelector(".divide");
const mult = document.querySelector(".mult");
const percnt = document.querySelector(".percnt");
const minus = document.querySelector(".minus");

const inputE = document.querySelector("input");

Array.from(btns).forEach((e) => {
    e.addEventListener("click", (f) => {
        inputE.value += e.innerText;
    });
});

plus.addEventListener("click", (f) => {
    if(inputE.value.length < 1){
        return null;
    }
    else{
        inputE.value += " + ";
        return plus.innerText;
    }
});

minus.addEventListener("click", (f) => {
    if(inputE.value.length < 1){
        return null;
    }
    else{
        inputE.value += " - ";
        return minus.innerText;
    }
});

divid.addEventListener("click", (f) => {
    if(inputE.value.length < 1){
        return null;
    }
    else{
        inputE.value += " ÷ ";
        return divid.innerText;
    }
});

percnt.addEventListener("click", (f) => {
    if(inputE.value.length < 1){
        return null;
    }
    else{
        inputE.value += " % ";
        return percnt.innerText;
    }
});

mult.addEventListener("click", (f) => {
    if(inputE.value.length < 1){
        return null;
    }
    else{
        inputE.value += " × ";
        return mult.innerText;
    }
});

evalV.addEventListener("click", (e) => {
    let stringI = inputE.value.toString();
    if (stringI.includes('+')) {
        inputE.value = parseInt(stringI.split("+")[0]) + parseInt(stringI.split('+')[1]);
    }
    if (stringI.includes('-')) {
        inputE.value = parseInt(stringI.split("-")[0]) - parseInt(stringI.split('-')[1]);
    }
    if (stringI.includes('÷')) {
        inputE.value = parseInt(stringI.split("/")[0]) / parseInt(stringI.split('÷')[1]);
    }
    if (stringI.includes('×')) {
        inputE.value = parseInt(stringI.split("*")[0]) * parseInt(stringI.split('×')[1]);
    }
    if (stringI.includes('%')) {
        inputE.value = parseInt(stringI.split("%")[0]) % parseInt(stringI.split('%')[1]);
    }
});