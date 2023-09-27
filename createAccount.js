function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

const datos = () => {

    const campoMail = document.getElementById('mail')

    if ((!campoMail.value.includes('@')) || (!campoMail.value.includes('.'))) {
        alert('Ingrese un mail valido');
    } else {
        alert('Mail correcto');
        window.location.href = './index.html'

    }

}

const cancelar = () => {

    window.location.href = './index.html' 

}



setElementOnClick('newAccount',datos);

setElementOnClick('cancelar',cancelar);

