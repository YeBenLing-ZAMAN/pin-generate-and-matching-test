
function codeGenerate() {
    const code = Math.round(Math.random() * 10000);
    const codeString = code + '';
    if (codeString.length == 4) {
        return code;
    } else {
        codeGenerate();
    }
}

//  code generate section 
document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('generate-code').value = codeGenerate();
})


// self-write section 

document.getElementById('calcInput').addEventListener('click', function (event) { //buble hobe tai eikhane event ta use kora hoyche .
    const number = event.target.innerText;

    // calc input code section 
    const calcNumber = document.getElementById('calc-code');
    calcNumber.value = calcNumber.value + number;

})