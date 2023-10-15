/* El proyecto tratara de un ecommerce sobre la comercializacion de chapitas para mascotas */


function crearCards(productos) {
    let obtenerCards = document.getElementById('cartas');
    obtenerCards.innerHTML = '';
    for (const producto of productos) {
        obtenerCards.innerHTML += `
            <div class="card" style="width: 18rem;">
    <img src="${producto.Foto}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${producto.Tipo}</h5>
        <p class="card-text">${producto.Talle}.</p>
        <p class="card-text">${producto.Precio}.</p>
        <button onclick="orden.agregarAlCarrito('${producto.Tipo}','${producto.Talle[0]}', ${producto.Precio}, '${producto.Foto}')" class="btn btn-primary">Agregar al carrito</button>
        <button onclick="orden.buyNow('${producto.Tipo}','${producto.Talle[0]}', ${producto.Precio}, '${producto.Foto}')" class="btn btn-primary">Comprar</button>
    </div
    </div>
        
        `;

    }
}

function filtrarPorNombre(nombre, losProductos) {
    const chapatitasResultado = losProductos.filter((producto) => producto.Tipo === nombre);
    return chapatitasResultado;
}

function getProducts() {
    return fetch("./productos.json")
        .then((res) => {
            return res.json();
        })
}

class OrdenDeCompra {
    constructor(nombreDeUsuario) {
        this.nombreDeUsuario = nombreDeUsuario;
        this.envioADomicilio = false;
        this.direccionUsuario = '';
        this.tipoDePago = '';
        this.carritoDeCompra = [];
    }

    agregarAlCarrito(tipo, talle, precio, foto) {

        let producto = {
            tipo: tipo,
            talle: talle,
            precio: precio,
            foto: foto
        }

        this.carritoDeCompra.push(producto);
        const badgeCart = document.getElementById('cargaProductos');
        badgeCart.innerHTML = this.carritoDeCompra.length;
        localStorage.setItem('tuCarrito', JSON.stringify(this.carritoDeCompra));
    }

    buyNow(tipo, talle, precio, foto) {
        this.agregarAlCarrito(tipo, talle, precio, foto)
        window.location.href = './flujoCompra.html';
    }

    recuperarCarrito() {

        let tuCarrito = JSON.parse(localStorage.getItem('tuCarrito'));
        let usuario = localStorage.getItem('usuario');

        if (usuario != null && usuario != undefined) {
            this.nombreDeUsuario = usuario
            let loginButton = document.getElementById('loginAvatar');
            loginButton.style.display = 'none';
            let nombreUsuarioAvatar = document.getElementById('nombreUsuario');
            nombreUsuarioAvatar.style.display = 'block';
            nombreUsuarioAvatar.innerHTML = usuario;
            let logOutButton = document.getElementById('logOut');
            logOutButton.style.display = 'block';
        }

        if (tuCarrito != null) {
            this.carritoDeCompra = tuCarrito
            const badgeCart = document.getElementById('cargaProductos');
            badgeCart.innerHTML = this.carritoDeCompra.length;
        }
    }

    getCostoChapatita() {
        let total = 0;
        //debugger;
        for (let i = 0; i < this.carritoDeCompra.length; i++) {
            total = total + this.carritoDeCompra[i].precio;
        }
        return total;
    }

    vaciarCarrito() {
        this.carritoDeCompra = [];
        const badgeCart = document.getElementById('cargaProductos');
        badgeCart.innerHTML = this.carritoDeCompra.length;
        localStorage.setItem('tuCarrito', JSON.stringify(this.carritoDeCompra));
    }
}



const orden = new OrdenDeCompra('');

orden.recuperarCarrito();

const botonCarrito = document.getElementById('carrito');
botonCarrito.onclick = () => alert(orden.getCostoChapatita(),
    window.location.href = './flujoCompra.html');




let carritoVacio = document.getElementById('vaciarCarrito');
carritoVacio.onclick = () => {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Se eliminaran todos tus productos del carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            orden.vaciarCarrito()
            Swal.fire(
                'Eliminado!',
                'Tus productos fueron eliminados',
                'success'
            )
        }
    })

}


function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

setElementOnClick('login', () => {
    window.location.href = './login.html'
});


setElementOnClick('search', () => alert('hiciste click'));

setElementOnClick('logOut', () => {
    localStorage.removeItem('usuario');
    window.location.reload();
})

setElementOnClick('finalizePurchase', () => {
        window.location.href = './flujoCompra.html'
    }

)

function setElementOnKeyUp(id, pressKey) {

    const inputModelo = document.getElementById(id);
    inputModelo.onkeyup = pressKey

}

const write = () => {

    const modelo = document.getElementById('categoria')

    if (modelo.value.length < 3) {
        console.log('No existe un modelo que tenga 3 letras');
        modelo.style.color = 'red';
    } else {
        modelo.style.color = 'black';
    }


}

setElementOnKeyUp('categoria', write);





const datos = () => {

    const campoMail = document.getElementById('mail')

    if ((!campoMail.value.includes('@')) || (!campoMail.value.includes('.'))) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese un mail valido!',

        })
    } else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Mail correcto',
            showConfirmButton: false,
            timer: 1500
        })

    }

}





let boton = document.getElementById('search');
boton.onmouseover = () => boton.style.background = '#FF8166';
boton.onmouseout = () => boton.style.background = '';
const searchOnClick = () => {
    const input = document.getElementById('categoria');

    getProducts().then(productos => {
        if (input.value === null || input.value === '' || input.value === undefined) {
            crearCards(productos)

        } else {
            const resultadoBusqueda = filtrarPorNombre(input.value, productos);
            crearCards(resultadoBusqueda);
        }

    })

}


setElementOnClick('search', searchOnClick);


let titulo = document.getElementById('mainTitle');
titulo.style.color = 'black';

let obtenerCards = document.getElementById('cartas');
obtenerCards.classList.add('container-fluid');
obtenerCards.classList.add('gap-3');

getProducts().then(productos => {
    crearCards(productos);
})