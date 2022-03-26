//Aqui sabemos la preferencia del usuario y la almacenamos en el localStorage
const agregar20DC = document.getElementById("agregar20DC");
const agregar40DC = document.getElementById("agregar40DC");
const agregar40HC = document.getElementById("agregar40HC");
const vaciarCarro = document.getElementById("vaciarCarro");
const verPreferencia = document.getElementById("verPreferencia");

let productosCarrito = []
agregar20DC.onclick = () => {
    localStorage.setItem("productoDeseado", "Contenedor 20DC");
    productosCarrito.push({...listaProductos[0]});
    console.log(productosCarrito);
};
agregar40DC.onclick = () => {
    localStorage.setItem("productoDeseado", "Contenedor 40DC");
    productosCarrito.push({...listaProductos[1]});
    console.log(productosCarrito);
};

agregar40HC.onclick = () => {
    localStorage.setItem("productoDeseado", "Contenedor 40HC");
    productosCarrito.push({...listaProductos[2]});
    console.log(productosCarrito);
}; 
vaciarCarro.onclick = () => localStorage.clear(); 

verPreferencia.onclick = () => {
    localStorage.getItem("productoDeseado") === null ? deseoUsuario("error", noPreferenciaUsuario) : deseoUsuario("success", siPreferenciaUsuario);
}

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    }


console.log(productosCarrito);

//Aqui pasamos el objecto de productos a JSON segun lo pedido en el desafio
const productosStringify = JSON.stringify(productosCarrito)
const productosEnJson = localStorage.setItem('ListadoProductosJson', productosStringify);



