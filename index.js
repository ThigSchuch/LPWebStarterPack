var display = document.getElementById('display');

console.log(display)


for (let number of document.querySelectorAll(".number")) {
    number.addEventListener('click', function(e) {
        console.log(this.value);
        console.log(display.value);
        console.log(display.innerHTML);
        display.value += `${this.value}`;
    });
}

// clean
document.querySelector("input[name='clean']").onclick = function() {
    display.value = '0';
}

// func deus
document.querySelector("input[name='=']").onclick = function() {
    var numbers = document.getElementById('display');
    
}