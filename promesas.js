/*const ordenComida = new Promise((resolve, reject) =>{
    if(comidaDisponible){
        resolve('Comida lista');
    } else {
        reject('Comida no disponible')
    }
})*/

function conectarBaseDeDatos() {
    return new Promise((resolve, reject) => {
        // Simulamos un tiempo de espera para la conexión
        setTimeout(() => {
            const exito = true; // Cambia a false para simular un fallo en la conexión

            if (exito) {
                resolve('Conexión exitosa a la base de datos');
            } else {
                reject('Error al conectar con la base de datos');
            }
        }, 2000); // 2 segundos de espera
    });
}


const juegosPs4 = [{

    nombre: 'The last of us',
    precio: 70000,
    calificacion: 8.5
},
    
{
    nombre: 'Tom Raider',
    precio: 55000,
    calificacion: 7
},

{
    nombre: 'Residen Evil 7',
    precio: 90000,
    calificacion: 8.9
}

];

function traerJuegos(){

    return new Promise((resolve, reject) =>{
        console.log('Cargando Productos...');

        setTimeout(() => {
            const exito1 = true;

            if(exito1){
                resolve(juegosPs4)
            }else{
                reject(console.log('NO hay juegos registrados'))
            }
        }, 3000);
    });
}

async function conseguirJuegos(){

    let mis_juegos = await traerJuegos();

    console.log(mis_juegos);
}

conseguirJuegos();