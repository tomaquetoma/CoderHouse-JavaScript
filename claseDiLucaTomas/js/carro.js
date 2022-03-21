//Aqui sabemos la preferencia del usuario y la almacenamos en el localStorage
const agregar20DC = document.getElementById("agregar20DC");
const agregar40DC = document.getElementById("agregar40DC");
const agregar40HC = document.getElementById("agregar40HC");
const vaciarCarro = document.getElementById("vaciarCarro");

agregar20DC.onclick = () => localStorage.setItem("productoDeseado", "Contenedor 20DC");
agregar40DC.onclick = () => localStorage.setItem("productoDeseado", "Contenedor 40DC");
agregar40HC.onclick = () => localStorage.setItem("productoDeseado", "Contenedor 40HC"); 
vaciarCarro.onclick = () => localStorage.clear(); 

if (localStorage.getItem("productoDeseado") === null) {
    alert("Todavia el usario no ha puesto que desea")
} else {
    alert(`Mensaje para la empresa: El usuario actual desea:${localStorage.getItem("productoDeseado")}`)
}    

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
    }

//Aqui pasamos el objecto de productos a JSON segun lo pedido en el desafio
const productosStringify = JSON.stringify(listaProductos)
const productosEnJson = localStorage.setItem('ListadoProductosJson', productosStringify);



