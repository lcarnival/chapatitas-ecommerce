/* El proyecto tratara de un ecommerce sobre la comercializacion de chapitas para mascotas */

let nombre = prompt('Ingresa tu nombre');

let saludo = 'Hola ' + nombre;
alert(saludo);


alert('Aqui encontraras las opciones de chapitas para que elijas la que mas te guste:')
printMenu('hola putita');

let opcionChapatita = prompt('Ingrese opcion de chapita o 0 para salir');

while (opcionChapatita != '0') {

    switch (opcionChapatita) {
        case '1':
            alert('Chapita Mickey 3500');
            break;
        case '2':
            alert('chapita Minnie 3500');
            break;
        case '3':
            alert('chapita capital america 4000');
            break;
        case '4':
            alert('chapita capital Mora 3000');
            break;
        case '5':
            alert('chapita Stich 5000');
            break;
        case '6':
            alert('chapita Donut 3500');
        default:
            alert('La opcion no existe');
            break;
                    
    }

    opcionChapatita = prompt('Ingrese opcion de chapita o 0 para salir');

}

function printMenu(miTextito) {
    console.log(miTextito);
    console.log('chapita Mickey presiona la opcion 1');
    console.log('chapita Minnie presiona la opcion 2');
    console.log('chapita Capian America presiona la opcion 3');
    console.log('chapita Mora presiona la opcion 4');
    console.log('chapita Stich presiona la opcion 5');
    console.log('chapita Donut presiona la opcion 6');
}

function startMenu(selectedOption) {
    while (selectedOption != '0') {

        switch (selectedOption) {
            case '1':
                alert('Chapita Mickey 3500');
                break;
            case '2':
                alert('chapita Minnie 3500');
                break;
            case '3':
                alert('chapita capital america 4000');
                break;
            case '4':
                alert('chapita capital Mora 3000');
                break;
            case '5':
                alert('chapita Stich 5000');
                break;
            case '6':
                alert('chapita Donut 3500');
            default:
                alert('La opcion no existe');
                break;
                        
        }
    
        selectedOption = prompt('Ingrese opcion de chapita o 0 para salir');
    
    }
}

let envio = prompt ('desea envio a domicilio? 1-SI 2-NO')
let necesitaEnvio;

if (envio == '1') {
    necesitaEnvio = true;
} else if (envio == '2') {
    necesitaEnvio = false;
}else {
    alert ('error');
}






/* class Perro {
    constructor(nombre, raza, edad, color, tama) {

    }
} */