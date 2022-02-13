
function codeGenerate() {
    const code = Math.round(Math.random() * 10000);
    const codeString = code + '';
    console.log(code);
    if (codeString.length == 4) {
        return code;

    } else {
        return codeGenerate();
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

    if(isNaN(number)){
        if(number == "C"){
            calcNumber.value = '';
        }
    }else{
        calcNumber.value = calcNumber.value + number;
    }

})

//  submit seciton 

document.getElementById('submit').addEventListener('click', function(){
    const generateRandomCode = document.getElementById('generate-code').value;
    const inputCodeByUser = document.getElementById('calc-code').value;
    

    if(generateRandomCode!='' && generateRandomCode == inputCodeByUser){
        document.getElementById('notify-ok').style.display = 'block';
        document.getElementById('notify-not-ok').style.display = 'none';
    }else{
        document.getElementById('notify-ok').style.display = 'none';
        document.getElementById('notify-not-ok').style.display = 'block';
    }
})