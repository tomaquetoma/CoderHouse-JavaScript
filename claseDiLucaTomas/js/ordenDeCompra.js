//Funcion generadora del numero de Orden de Compra
function generarNumeroOrden() {
  return Math.round(Math.random() * 100000);
}

// Funcion generadora de la Orden de Compra segun datos ingresados por el cliente
function ordenDeCompra(params) {
  const generarOrden = [];

  let tipoContenedor = prompt(
    "Por favor confirme que tipo de contenedor quiere comprar en Montevideo. 20DC, 40DC o 40HC"
  ).toUpperCase();

  if (
    tipoContenedor === producto1.tipo || 
    tipoContenedor === producto4.tipo || 
    tipoContenedor === producto7.tipo
  ) {
    generarOrden.push(tipoContenedor);
    let cantidadDeseada = parseInt(prompt("¿Cuantas unidades desea?"));
    if (
      tipoContenedor === producto1.tipo &&
      cantidadDeseada > producto1.cantidad
    ) {
      console.log(
        "Actualmente no disponemos de " +
          cantidadDeseada +
          " unidades " +
          producto1.tipo +
          " en stock"
      );
      generarOrden.splice(0, generarOrden.length);
    } else if (
      tipoContenedor === producto4.tipo &&
      cantidadDeseada > producto4.cantidad
    ) {
      console.log(
        "Actualmente no disponemos de " +
          cantidadDeseada +
          " unidades " +
          producto4.tipo +
          " en stock"
      );
      generarOrden.splice(0, generarOrden.length);
    } else if (
      tipoContenedor === producto7.tipo &&
      cantidadDeseada > producto7.cantidad
    ) {
      console.log(
        "Actualmente no disponemos de " +
          cantidadDeseada +
          " unidades " +
          producto7.tipo +
          " en stock"
      );
      generarOrden.splice(0, generarOrden.length);
    } else {
      generarOrden.push(cantidadDeseada);
      let correoContacto = prompt(
        "Ingrese su correo electronico para que puedamos contactarlo y enviarle su orden de compra"
      );
      generarOrden.push(correoContacto);
      generarOrden.push(generarNumeroOrden());
      console.log("Su numero de orden de compra es " + generarOrden[3]);
    }
  } else {
    console.log("El tipo de contenedor ingresado no es 20DC, 40DC o 40HC");
  }

  return console.log(generarOrden);
}

ordenDeCompra();
