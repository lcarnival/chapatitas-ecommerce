function setElementOnKeyUp (id,pressKey) {

    const inputModelo = document.getElementById (id);
    inputModelo.onkeyup = pressKey
       
}

function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

const datos = () => {

    const campoMail = document.getElementById('mail')

    if ((!campoMail.value.includes('@')) || (!campoMail.value.includes('.'))) {
        alert('Ingrese un mail valido');
    } else {
        alert('mail correcto');
        window.location.href = './index.html'

    }

}

const cancelar = () => {

    window.location.href = './index.html' 

}

setElementOnClick('ingresar',datos);

setElementOnClick('cancelar',cancelar);
