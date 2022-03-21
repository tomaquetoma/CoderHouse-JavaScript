// Generacion e Ingreso de contenedores a stock 
let listaProductos = [
 {id: 1 , tipo: "20DC", precio: 1200, stock: 15, img: "/images/contenedor_20DC.jfif"  },
 {id: 2 , tipo: "40DC", precio: 2450, stock: 18, img: "/images/contenedor_40DC.jfif"  },
 {id: 3 , tipo: "40HC", precio: 3600, stock: 35, img: "/images/contenedor_40HC.jfif"  },

];

let contenedores = document.getElementById("contenedores");

// // Esta funcion le muestra al cliente los productos en stock, precios de venta y ciudad de origen
function mostrarProdcutos() {
  listaProductos.forEach((element) => {
    let infoContenedores = document.createElement("div");

    infoContenedores.innerHTML = `
                                  <div class="card p-2" style="width: 18rem;">
                                  <img src="${element.img}" alt="foto contenedor">
                                  <h2> ${element.tipo}</h2>
                                  <p> Precio USD ${element.precio}</p>
                                  <p>Stock: ${element.stock}</p>
                                  <p>ID: ${element.id}</p>
                                  </div>`;

    infoContenedores.className = "col p-2 m-3";
    contenedores.append(infoContenedores);
  });
}

mostrarProdcutos();


