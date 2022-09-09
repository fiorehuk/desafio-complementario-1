let nombre = prompt('Ingrese su nombre: ');
let idioma = prompt('Seleccione su idioma: ');
while(idioma != 'ESC'){
    switch(idioma){
        case 'English':
            alert('Welcome '+nombre);
            break;
        case 'Español':
            alert('Bienvenido '+nombre);
            break;
        default:
            alert('Por favor, ingrese su idioma')
            break;
        }
        idioma = prompt('Seleccione su idioma: ');
    }