/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina 
la cantidad de grasa de una persona. El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string 
con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/


                    // 70kg 1.75 
           function bmi(peso,altura){
            //        70kg     1.75  22.85714285714...  
            let imc = peso / (altura ** 2);// asi se eleva un numero a la potencia por 2
        // 22.85 es menor que 18.5 no seguimos al siguiente condicional
            if(imc < 18.5){
                console.log('Bajo de peso')
        // 22.85 es mayor a 18.6 y menor que 24.9, SI ingreamos al else if        
            } else if(imc > 18.6 && imc < 24.9){
                // nos imprime lo que esta dentro
                console.log('Esta Normal')
            } else if(imc > 25 && imc < 29.9){
                console.log('Esta con sobrepeso')
            } else if(imc > 30){
                console.log('Esta obeso')
            }
            // Devuelve su masa corporal del resultado de la variable imc
            return 'Su indice de masa corporal es: ' + imc;
        }
        
        console.log(bmi(90,1.75))


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
 //                   [2,5,6,8,2,1]     2     4
function sumarArreglo(arregloNumeros,inicio,final){
 // va a guardar la suma de los elementos dentro del rango
    let suma = 0;
          // i = 4       4      4      
    for (let i = inicio; i <= final; i++) {
    //   16                    2                6 + 8 + 2
        suma += arregloNumeros[i];
    }//     16
    return suma;

}

console.log(sumarArreglo([2,5,6,8,2,1], 2, 4)); // 10 6 +2

/*
Escribir una función llamada imprimirMatriz que reciba una matriz 
(una matriz es arreglo de arreglos) y me devuela la suma total 
de todos los elementos

// código de prueba
console.log(imprimirMatriz([
  [1, 2, 3],
  [5, 2, 6],
  [1, 3, 4]
])) // 27
*/

const matrizCompleta = [  [1, 2, 3], [5, 2 ,6], [1, 3, 4] ]
  // matrizCompleta poscion [1] = [5, 2 ,6]
  // matrizCompleta poscion [1][2] = 6

  let recuperarValor = matrizCompleta[1][2]

  console.log('ejemplo matriz: ' + recuperarValor)

  ////////////////////////////////////////////////7/////////////////////

function imprimirMatriz(matriz) {
    // Inciamos una variable en 0
    let sumaTotal = 0;
//                  2           3
    for (let i = 0; i < matriz.length; i++) {
    //                      [1,2,3]   
    //                      [5,2,6]
    //                2     [1,3,4]
      for (let j = 2; j < matriz[i].length; j++) {
    // el ciclo se detendrá cuando j ya no sea menor que la longitud de la fila actual.    
        console.log('J vale: ' + j)
        console.log('matriz i vale: ' + matriz[i])
    //     27               2  2   =   4   
        sumaTotal += matriz[i][j];
        console.log('suma total vale: ' + sumaTotal + ' y matriz[i][j] vale: ' + matriz[i][j])
      }

    }
  
    return sumaTotal;
  }
//     i = 0 y j = 0 traen la poscision 0 0 de la matriz = 1
//     i = 0 y j = 1 traen la poscision 0 1 de la matriz = 2
//     i = 0 y j = 2 traen la poscision 0 2 de la matriz = 3
  console.log(imprimirMatriz(  [  [1, 2, 3], [5, 2 ,6], [1, 3, 4] ] )); // 27

/////////////////////////////////////////////////////////////////////////////////////////  

 const objeto = {
    nombre: 'David',
    id: [['banano', 'fresa', 'mandarina']],
    mayorDeEdad: true, 
 }

 const listaDePersonas = [
    {
        nombre: 'John',
        edad: 30
    },

    {
        nombre: 'Brayan',
        edad: 29
    }
 ]
 // valor es 0   lista de personas es = array de objetos
 //            array con dos poscisiones
 //               [0] es la poscision que le estoy pidiendo que me traiga de ese array
 /*       [0] = { nombre: 'John', edad: 30 }*/             
 let nombre1 = listaDePersonas[0].nombre

 console.log(nombre1)

 const lista = [1,2,3,4]

  [[]]
  // Código de prueba

/////////////////////////////////////////////////////////////

const numeros = [3, 7, 2, 9, 12, 6, 15, 8];
//                   3   
let maximo = numeros[0];

//              7              8
for (let i = 1; i < numeros.length; i++) {
//              8      15
    if (numeros[i] > maximo) {
//         15           15
        maximo = numeros[i];
    }
}

console.log("El número máximo es:", maximo);

//////////////////////////////////////////////////////////////

/*Tienes un objeto que representa un estudiante con sus calificaciones 
en diferentes materias. Debes calcular el promedio de las 
calificaciones y mostrarlo en la consola.*/

const estudiante = {
    nombre: "Juan",
    matematicas: 85,
    historia: 90,
    ciencia: 78,
    ingles: 92,
    arte: 88
};

let notas = estudiante.matematicas + estudiante.historia + estudiante.ciencia +
estudiante.ingles + estudiante.arte

let notaFinal = notas / 5

console.log('Promedio de Juan es: ' + notaFinal)


