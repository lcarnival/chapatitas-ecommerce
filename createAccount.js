function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

const createAccountClick = () => {

    const campoMail = document.getElementById('mail')
    const campoName = document.getElementById('nombreYApellido')
    const campoPassword = document.getElementById('contraseña')
    const confirmPassword = document.getElementById('confirmaContraseña')

    if ((!campoMail.value.includes('@')) || (!campoMail.value.includes('.'))) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un mail valido!',

        })
    } else if (!campoName.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un nombre correcto',

        })

    } else if (!campoPassword.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese una contraseña',

        })

    } else if (confirmPassword.value !== campoPassword.value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Sus contraseñas no coinciden',

        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Creaste tu cuenta',
            showConfirmButton: true,
            timer: 80000
          })
        let users = getItemStorage('users');
        if (!users) {
            users = []
        }
        const newUser = {
            nombre: campoName.value,
            mail: campoMail.value,
            password: campoPassword.value
        }
        if (users.some(user => user.mail === newUser.mail)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El usuario ya existe',
    
            }) 
        } else {
            users.push(newUser);
            saveItemStorage('users', users);
            window.location.href = './index.html';
        }
    }

}



const cancelar = () => {

    window.location.href = './index.html'

}



setElementOnClick('newAccount', createAccountClick);

setElementOnClick('cancelar', cancelar);