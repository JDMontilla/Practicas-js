/* Tienes un arreglo de números, y necesitas encontrar el 
numero mínimo (el menor) en el arreglo. Usa un ciclo for para 
recorrer el arreglo y determinar el valor mínimo.*/

const numeros = [3, 7, 2, 9, 12, 6, 15, 8];

let array = numeros[0];
//              4              8
for (let i = 1; i < numeros.length; i++) {
//            9      2
  if (numeros[i] < array) {
//    2             2
    array = numeros[i];
  }
}

console.log('El numero minimo del array es: ' + array)


/*
1) Programa una función que cuente el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

function contador(numeroCaracteres){
// Se crea una variable a la cual se le asigna el valor    
    let totalPalabras = 0;
//                 3                       10
    for(let i = 1; i <= numeroCaracteres.length; i++){
//           3         3 
       totalPalabras = i
    }
//  devuelve el string             +                10
    return numeroCaracteres + ' contiene: ' + totalPalabras + ' cadenas de texto'
}

console.log(contador('Hola mundo'))