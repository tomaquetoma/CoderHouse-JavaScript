class Productos {
  constructor(tipo, cantidad, precioCompra, ciudad) {
    this.tipo = tipo;
    this.cantidad = cantidad;
    this.precioCompra = precioCompra;
    this.ciudad = ciudad;
  }
  precioVenta() {
    let precioVenta = this.precioCompra * 1.52;

    return precioVenta;
  }
}

// Generacion e Ingreso de contenedores a stock
let listaProductos = [];

const producto1 = new Productos("20DC", 15, 1000, "Montevideo");
const producto2 = new Productos("20DC", 8, 800, "Buenos Aires");
const producto3 = new Productos("20DC", 5, 1200, "Santiago de Chile");
const producto4 = new Productos("40DC", 13, 2000, "Montevideo");
const producto5 = new Productos("40DC", 20, 2100, "Buenos Aires");
const producto6 = new Productos("40DC", 3, 2500, "Santiago de Chile");
const producto7 = new Productos("40HC", 20, 3000, "Montevideo");
const producto8 = new Productos("40HC", 41, 2700, "Buenos Aires");
const producto9 = new Productos("40HC", 11, 3500, "Santiago de Chile");

listaProductos.push(
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9
);

let contenedores = document.getElementById("contenedores");

// // Esta funcion le muestra al cliente los productos en stock, precios de venta y ciudad de origen
function mostrarProdcutos() {
  listaProductos.forEach((element) => {
    let infoContenedores = document.createElement("div");

    infoContenedores.innerHTML = `
                                  <div class="card" style="width: 18rem;">
                                  <h2> ${element.tipo}</h2>
                                  <p> Precio USD ${element.precioVenta()}</p>
                                  <p>Ciudad: ${element.ciudad}</p>
                                  <p>Stock: ${element.cantidad}</p>
                                  <a href="#" class="btn btn-primary">Ver Información</a>
                                  </div>`;

    infoContenedores.className = "col p-2 m-3";
    contenedores.append(infoContenedores);
  });
}

mostrarProdcutos();
