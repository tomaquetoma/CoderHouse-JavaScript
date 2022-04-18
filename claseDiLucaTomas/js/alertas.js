const productoAgregado = "Se ha agregado el producto correctamente al carrito";
const vaciarCarrito = "El carrito se ha vaciado";
const carritoVacio = "El carrito esta vacio, por favor agregar productos"
const faltanDatosFormulario = "Por favor complete todos los datos";

function deseoUsuario(icon, text){

    Swal.fire({
        icon: icon,
        text: text,
        confirmButtonText: 'Volver a Incio'
        })
}