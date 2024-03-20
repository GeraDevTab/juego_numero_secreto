/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero secreto";
*/

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = "Ingresa un numero del 1 al 10";
*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log("secreto",numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    console.log(numeroSecreto===numeroDeUsuario)
    console.log("secreto",numeroSecreto);
    
    if(numeroSecreto === numeroDeUsuario){
        
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {

    
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';

    /* otra forma de hacer la operacion es
    document.querySelector('#valorUsuario').value = '';
    */
    
}
function funcionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //dejar el boton de nuevo juego deshabilitado
    //inicializar el numero de intentos
    limpiarCaja();
    funcionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

    
}

funcionesIniciales();