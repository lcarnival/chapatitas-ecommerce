function setElementOnKeyUp(id, pressKey) {

    const inputModelo = document.getElementById(id);
    inputModelo.onkeyup = pressKey

}

function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

const datos = () => {

    const campoMail = document.getElementById('mail')
    const campoPassword = document.getElementById('contraseña')

    if ((!campoMail.value.includes('@')) || (!campoMail.value.includes('.'))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un mail valido!',

        })
    } else if (!campoPassword.value) {

        alert('Ingrese una contraseña')
    } else {
        let users = getItemStorage('users');
        if (!users) {
            users = [];
        }
        const validUser = users.some(user =>
            user.mail === campoMail.value && user.password === campoPassword.value
        )
        if (validUser) {
            localStorage.setItem('usuario', campoMail.value);
            window.location.href = './index.html'
        } else {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El usuario o contraseña son incorrectos!',
    
            })
            
        }

    }

}

const create = () => {
    window.location.href = './createAccount.html'
}


setElementOnClick('createAccount', create);

const cancelar = () => {

    window.location.href = './index.html'

}

setElementOnClick('ingresar', datos);

setElementOnClick('cancelar', cancelar);