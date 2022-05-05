window.addEventListener('load', ()=> {
    const botones = document.getElementsByClassName('boton');
    const display = document.querySelector('.display');


    const botonesArray = Array.from(botones);

    botonesArray.forEach((button) => {

        button.addEventListener('click', () =>{
            calculadora(button, display);
        });
    });
});


function calculadora(button, display) {

    switch(button.innerHTML){
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    if ( display == 0 ){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    if (display.innerHTML != 0){
        display.innerHTML = 0
    }
}


document.getElementById('copy1').addEventListener('click', xd);
document.getElementById('copy2').addEventListener('click', xd);

function xd() {
    alert('creado por Toledo xd')
}