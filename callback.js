// funciones -> declaracion, invocacion funcion
// funciones -> declarando -> recibir parametros o no

//             integer  integer  
//             string
//             boolean
//             array
//             objeto
function suma(numero1, numero2){
    console.log(`Voy a sumar el numero ${numero1} mas el numero ${numero2}`);
    return numero1 + numero2;
}



let resultado = suma(2,5); // 7

if(resultado > 3) {
    console.log('el resultado es mayor a 3')
}


console.log(resultado); 

// Crear una funcion que reciba como parametro un objeto y me imprima por consola el nombre

const user = {
    nombre : 'brayan',
    edad : 29
}

//{
   // nombre : 'brayan',
 //   edad : 29
//}

function imprimirNombre(usuario){
    return usuario.nombre; //'brayan'
}

imprimirNombre(user)


//             integer  integer  
//             string
//             boolean
//             array
//             objeto
//             function

function cocinarArroz(fnCallback){
    console.log('Cocinando Arroz...')
    fnCallback();
}

function finalizarArroz(){
    console.log('Arroz terminado')
}

function empezarArroz(){
    console.log('Iniciando arroz')
}


cocinarArroz(empezarArroz);



// Una funcion cuando se invoca puede recibir la invocacion de otra funcion

//                        18               8
function sumarValores(numeroMultiplicado,valor2){
    return numeroMultiplicado + valor2;
}

function multiplicarValores(numero1,num2){
    return numero1 * num2;
}

//      26                               18  
let resultadoSuma = sumarValores(multiplicarValores(3,6),8);

console.log(resultadoSuma);



///////////////////////////////////

// inscripcion de materias en Callbacks


function inscribirMaterias(materia1,materia2,callbackModulo,materia3){
    materia1 = 'ingles'
    materia2 = 'Español'
    materia3 = 'Historia'

    return materia1 + materia2 + materia3 + callbackModulo()
}

function modulo1(){
    let materia4 = 'ingles'
    let materia5 = 'Español'
    let materia6 = 'Historia'

    return materia4 + materia5 + materia6
}

let totalMaterias = inscribirMaterias('materia1 ', 'materia2 ', modulo1, 'materia3 ')

console.log(totalMaterias)









