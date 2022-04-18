const agregar20DC = document.getElementById("agregar20DC");
const agregar40DC = document.getElementById("agregar40DC");
const agregar40HC = document.getElementById("agregar40HC");
const vaciarCarro = document.getElementById("vaciarCarro");
const carritoButton = document.getElementById("carritoButton");
const carrito = document.getElementById("carrito");
const muestraCarrito = document.getElementsByClassName('muestraCarrito')


let productosCarrito = [];

agregar20DC.onclick = () => {
    productosCarrito.push({tipo:"20DC", precio: 1200});
    deseoUsuario("success", productoAgregado);
 
};

agregar40DC.onclick = () => {
    productosCarrito.push({tipo:"40DC", precio: 2450});
    deseoUsuario("success", productoAgregado);
};

agregar40HC.onclick = () => {
    productosCarrito.push({tipo:"40HC", precio: 3600});
    deseoUsuario("success", productoAgregado);
}; 


vaciarCarro.onclick = () => {
    productosCarrito = [];
    deseoUsuario("success", vaciarCarrito);

};

carritoButton.onclick = () => {
    mostrarProdcutosCarrito();
};

// // Esta funcion le muestra al cliente los productos agregados al carrito
const mostrarProdcutosCarrito = () => {
    
    if (productosCarrito.length === 0) {
        deseoUsuario("error", carritoVacio)
        
    } else {
        for (let i = 0; i < productosCarrito.length; i++) {
        //Desestructuracion
        const {tipo, precio} = productosCarrito[i];

        let infoCarrito = document.createElement("tr");
        infoCarrito.innerHTML += `
                                <td>${tipo}</td>
                                <td>${precio}</td>`

        carrito.append(infoCarrito);
        }; 
    }  
};
