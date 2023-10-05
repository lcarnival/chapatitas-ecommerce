function resumenCompra(carritoDeCompra) {
    let tableRow = document.getElementById('tableProducts');
    const tableBody = tableRow.getElementsByTagName('tbody')[0];
    carritoDeCompra.forEach((producto, index) => {
        tableBody.innerHTML +=
            `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${producto.tipo}</td>
            <td>${producto.talle}</td>
            <td>${producto.precio}</td>
            </tr>
        `;
    })



}

let carrito = getItemStorage('tuCarrito');



function setElementOnClick(id, clickear) {

    let boton = document.getElementById(id);
    boton.onclick = clickear

}

resumenCompra(carrito);

let envioADomicilio = document.getElementById('personalInformation');


setElementOnClick('correoArgentino', () => {
    let envioADomicilio = document.getElementById('personalInformation');
    envioADomicilio.style.display = 'block';
})



setElementOnClick('express', () => {
    let envioADomicilio = document.getElementById('personalInformation');
    envioADomicilio.style.display = 'block';
})

setElementOnClick('shop', () => {
    let envioADomicilio = document.getElementById('personalInformation');
    envioADomicilio.style.display = 'none';
})

function totalCompra(carritoCompra) {

    let total = 0;
    for (let i = 0; i < carritoCompra.length; i++) {
        total = total + carritoCompra[i].precio;
    }
    return total;

}

let compra = totalCompra(carrito);
let totalComponente = document.getElementById('importeTotal');
totalComponente.innerHTML += compra;

let creditCard = document.getElementById ('number');


const confirmacionCompra = () => {


    let timerInterval
    Swal.fire({
        title: 'Su compra esta siendo procesada',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu compra fue procesada con exito. Muchas gracias por elegirnos!!!!',
                showConfirmButton: false,
                timer: 1500
            }).then((result) => {
                saveItemStorage ('tuCarrito', [])
                window.location.href = './index.html'

            })
        }

    })
}



setElementOnClick('buy', confirmacionCompra);


const cancelar = () => {
   
    window.location.href = './index.html'


}

setElementOnClick('cancell', cancelar);