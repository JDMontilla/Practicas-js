console.log('Hola Mundo')

                      //[5,2,3,4]
function sumarArreglo(arrayNumeros){
    let total = 0;
                    // 4 < 4  false           4
    for (let i = 0; i < arrayNumeros.length; i++) {
       // 10       4     
       total += arrayNumeros[i]
       // 14
    }
    return total;
}

console.log(sumarArreglo([5,2,3,4])) // total = 14
console.log(sumarArreglo([5,6,10,5,18,19]))
console.log(sumarArreglo([5,123]))

/*Escribir una función llamada sumarArreglo que reciba un arreglo de 
números y retorne la suma de todos los elementos.*/

function saludar(nombre){
    return 'Hola ' + nombre
}

console.log(saludar('David'));

/*
Escribir una funcion que reciba como parametro un nombre y 
me retorne la concatencion del nombre mas un saludo por ejemplo : Hola Brayan
*/

                   // [2,4,5,0,29,0]
function removerCeros(numeroArray){

    let nuevoArreglo = [];
    //             6 < 6 false               6
    for(let i = 0; i < numeroArray.length; i++){
           // 0 !== 0 false
        if(numeroArray[i] !== 0){
            //                    29
            nuevoArreglo.push(numeroArray[i])
            // [2,4,5,29]
        }
    }
    return nuevoArreglo // [2,4,5,29]
}

let rArray = [2,4,5,0,29,0]
let resultado = removerCeros(rArray) // [2,4,5,29]
console.log(resultado)


/*
Escribir una función llamada removerCeros que reciba 
un arreglo de números y retorne un nuevo arreglo 
excluyendo los ceros (0).
*/

/* Hacer el mismo ejercicio pero con un foreach*/

/*
Escribir una función llamada contrasenaValida que reciba 
un string y retorne true si el string es igual a 
"2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe 
retornar false.
*/
                       // 'eoZiugBf&g9'
function contrasenaValida(password){
// 'eoZiugBf&g9' ==='2Fj(jjbFsuj' o 'eoZiugBf&g9' === 'eoZiugBf&g9'
   if(password === '2Fj(jjbFsuj' || password === 'eoZiugBf&g9'){
                       //false                       true
        return true;
    } else{
        return false;
    }
}

console.log(contrasenaValida('eoZiugBf&g9'))


estudiante = true
profesor = false
visitante = true

if(estudiante || profesor){
    console.log('Permitir entrada')
} else if(visitante){
    console.log('entrada visitante')
}else{
    console.log('No ingresa nada')
}



x

/*
Ejercicio 2
Sumar arreglo entre el rango

Escribir una función llamada sumarArreglo que reciba tres argumentos: 
un arreglo de números, la posición inicial y la posición final. La 
función debe retornar la suma de todos los números dentro del rango 
(la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a 
la posición final, y que están dentro de los límites del arreglo.

// escribe tu respuesta acá

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0

*/
//                     1,2,3           1        2
function sumarArreglo(arregloNumeros,inicio, final){
    // incio obtiene la poscicion 
    inicio = arregloNumeros[0]
    // final = obtiene la ultima poscision del arreglo
    final = arregloNumeros[arregloNumeros -1]
    let suma = inicio + final

    return suma

}

console.log(sumarArreglo([1, 2, 3])) // 5