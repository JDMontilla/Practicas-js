const empleados = [
  { nombre: "Ana", salarioBase: 3000, experiencia: 6, metasCumplidas: true },
  { nombre: "Luis", salarioBase: 2500, experiencia: 4, metasCumplidas: false },
  { nombre: "Pedro", salarioBase: 2000, experiencia: 2, metasCumplidas: true },
];

function calcularSalarioNetoDeEmpleados(listaDeEmpleados){

  let nuevaLista = [];

  for(let i = 0; i < listaDeEmpleados.length; i++){

      // En esta variable tengo la deduccion por cada empleado
      let deduccionFija = listaDeEmpleados[i].salarioBase * 0.12;
      
      // En esta variable voy a tener la bonificacion total que va tener cada empleado
      let bonificacionTotalPorEmpleado = 0;

      // Esta parte del codigo me valida la bonificacion del empleado segun su experiencia
      if(listaDeEmpleados[i].experiencia > 5){

          //                                              3300                                                                   
          bonificacionTotalPorEmpleado += listaDeEmpleados[i].salarioBase * 0.10;

      }else if(listaDeEmpleados[i].experiencia >= 3 && listaDeEmpleados[i].experiencia <= 5){

          bonificacionTotalPorEmpleado += listaDeEmpleados[i].salarioBase * 0.05;
      }

      if(listaDeEmpleados[i].metasCumplidas === true){

          //                                                3300
          bonificacionTotalPorEmpleado +=  listaDeEmpleados[i].salarioBase * 0.05;
      }

      let nombreEmpleado = listaDeEmpleados[i].nombre;
      let salarioNeto = listaDeEmpleados[i].salarioBase + bonificacionTotalPorEmpleado - deduccionFija;
      
      
      let nuevoObjetoEmpleado = {"nombre": nombreEmpleado, "salarioNeto" : salarioNeto}
      nuevaLista.push(nuevoObjetoEmpleado);
  }
  return nuevaLista;
}

// Invoca o ejecuta la funcion
const resultadoTotal = calcularSalarioNetoDeEmpleados(empleados);

console.log(resultadoTotal);

//////////////////////////////////////////////////////////


/*function calcularSalarioNetoDeEmpleados(listaDeEmpleados){
    
  return listaDeEmpleados.map(empleado => {
      let bonificacionTotalPorEmpleado = 0;
      let salarioBase = empleado.salarioBase;
      let experiencia = empleado.experiencia;
      let metas = empleado.metasCumplidas;
      let nombreEmpleado = empleado.nombre;
      let deduccionFija = salarioBase * 0.12;
      bonificacionTotalPorEmpleado =+ verificarExperiencia(experiencia, salarioBase, bonificacionTotalPorEmpleado);
      bonificacionTotalPorEmpleado =+ verificarSiCumplioMetas(metas,salarioBase,bonificacionTotalPorEmpleado);
      
      let salarioNeto = salarioBase + bonificacionTotalPorEmpleado - deduccionFija;
      return {"nombre": nombreEmpleado, "salarioNeto" : salarioNeto}
  })
}*/