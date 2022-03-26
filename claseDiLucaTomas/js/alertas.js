const noPreferenciaUsuario = "Todavia el usuario no ha puesto que desea";
const siPreferenciaUsuario = `Mensaje para la empresa: El usuario actual desea: ${localStorage.getItem("productoDeseado")}`
const contadorMinimo = "El stock seleccionado debe ser mayor a 0";
const contadorMaximo = "El limite maximo de compra es de 10";
const faltanDatosFormulario = "Por favor complete todos los datos";

function deseoUsuario(icon, text){

    Swal.fire({
        icon: icon,
        text: text,
        confirmButtonText: 'Volver a Incio'
        })
}