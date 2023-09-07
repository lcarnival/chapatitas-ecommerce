/* El proyecto tratara de un ecommerce sobre la comercializacion de chapitas para mascotas */


function printMenu() {
    console.log('chapita Mickey presiona la opcion 1');
    console.log('chapita Minnie presiona la opcion 2');
    console.log('chapita Capian America presiona la opcion 3');
    console.log('chapita Mora presiona la opcion 4');
    console.log('chapita Stich presiona la opcion 5');
    console.log('chapita Donut presiona la opcion 6');
}

function startMenu() {
    let selectedOption = prompt('Ingrese opcion de chapita o 0 para salir');

    while (selectedOption != '0') {

        switch (selectedOption) {
            case '1':
                alert('Chapita Mickey 3500');
                break;
            case '2':
                alert('chapita Minnie 3500');
                break;
            case '3':
                alert('chapita Arnold 4000');
                break;
            case '4':
                alert('chapita capital Mora 3000');
                break;
            case '5':
                alert('chapita Stich 5000');
                break;
            case '6':
                alert('chapita Donut 3500');
                break;
            default:
                alert('La opcion no existe');
                break;
                        
        }
    
        selectedOption = prompt('Ingrese opcion de chapita o 0 para salir');
    
    }
}

function shippingType (ordenCompra) {
    let envio = ''

    do {

        envio = prompt ('desea envio a domicilio? 1-SI 2-NO')
    
        if (envio == '1') {
            ordenCompra.envioADomicilio = true;
            ordenCompra.direccionUsuario = prompt ('Ingrese su direccion'); 
            
        } else if (envio == '2') {
            ordenCompra.envioADomicilio = false;
        }  else {
            alert ('La opcion es inexistente');
        }
    
        } while (envio != '1' && envio != '2');
        
        console.log(ordenCompra);
        
}

function filtrarPorPrecioMax (precioMaximo) {
    const filtrados = productos.filter ((producto)=> producto.Precio < precioMaximo);
    console.log (filtrados);
    
    }


class OrdenDeCompra {
    constructor (nombreDeUsuario){
        this.nombreDeUsuario = nombreDeUsuario;
        this.envioADomicilio = false;
        this.direccionUsuario = '';
        this.tipoDePago = '';
        this.carritoDeCompra = [];
    }
}



let nombre = prompt('Ingresa tu nombre');

const orden = new OrdenDeCompra(nombre);

let saludo = 'Hola ' + nombre;
alert(saludo);

alert('Aqui encontraras las opciones de chapitas para que elijas la que mas te guste:')

printMenu();

startMenu();

shippingType(orden);

filtrarPorPrecioMax ('');


let precioUsuario = parseFloat (prompt ('Cuanto es el precio que usted esta dispuesto a pagar por las chapatitas')); 

filtrarPorPrecioMax (precioUsuario);

console.log = (precioUsuario);

/*
const baratos = producto.filter (producto => productos.precio < 3000);
console.log (baratos);

*/

/*
const existe = productos.some (productos => productos.tipo === 'minnie');
console.log (existe);
*/







 /*
    console.log ('En 10 dias habiles le llegara su pedido al domicilio indicado, gracias por su compra')


    /*

    class Chapatita {
    constructor (modelo, tamaño, precio) {
        this.modelo = modelo;
        this.tamaño = tamaño;
        this.precio = precio;
    }
}

const chapita1 = new Chapatita ('Minnie','M','3500');
const chapita2 = new Chapatita ('Mickey','L', '3500');
const chapita3 = new Chapatita ('Arnold','S','4000');
const chapita4 = new Chapatita ('Mora','XL','3000');
const chapita5 = new Chapatita ('Stich','XL','5000');
const chapita6 = new Chapatita ('Donut','S','2500');

*/




