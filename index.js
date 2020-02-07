var display = document.getElementById('display');
var output = document.getElementById('output');


for (let number of document.querySelectorAll(".teclado input")) {
    if ( number.value !== '=' ) {
        number.addEventListener('click', function() {
            display.value += `${this.value}`;
        });
    }
}

// clean
function cleanDisplay() {
    display.value = '';
    output
}
document.querySelector("input[name='clean']").onclick = cleanDisplay;

// func deus
document.querySelector("input[name='=']").onclick = function() {
    var numbers = document.getElementById('display');
    var result = new Function("return "+numbers.value);
    output.value = result();
}
