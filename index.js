// set event on all buttons
for (let number of document.querySelectorAll(".teclado input")) {
    if ( number.value !== "=" ) {
        number.addEventListener('click', function() {
            let display = document.getElementById('display');

            let [...list] = display.value;
            let pointExists = list.filter( value => value === '.' ).length > 0;

            if ( !(this.value === '.' && pointExists) ) {
                display.value += this.value;
            }
        });
    }
}

// clean display
document.querySelector("input[name='clean']").onclick = function () {
    let display = document.getElementById('display');
    display.value = '';

    let output = document.getElementById('output');
    output.value = '';
};

// func deus
document.querySelector("input[name='=']").onclick = function() {
    let display = document.getElementById('display');
    let output = document.getElementById('output');

    if (display.value) {
        try {
            let result = new Function("return "+display.value);
            output.value = result();
        } catch (error) {
            output.value = 'NÃO SUPORTADO';
            console.error(error);
        }
        return;
    }

    output.value = 'Entrada inválida.';
}