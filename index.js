
function codeGenerate() {
    let code = Math.round(Math.random() * 10000);
    const newCode = code + '';
    if (newCode.length == 4) {
        return code;
    } else {
        codeGenerate();
    }
}

//  code generate section 
document.getElementById('generate-btn').addEventListener('click', function () {
    document.getElementById('generate-code').value = codeGenerate();
})

