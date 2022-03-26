let formularioUsuario = document.getElementById("formularioUsuario");

formularioUsuario.addEventListener("submit", validarFormulario);

function validarFormulario (e){

    e.preventDefault ();
    formularioUsuario = e.target

    let nombreUsuario = formularioUsuario.children[0].value; 
    let apellidoUsuario = formularioUsuario.children[1].value;
    let correoUsuario = formularioUsuario.children[2].value;

    const datosCompletosFormulario = `Hola ${nombreUsuario} ${apellidoUsuario}, le confimamos que hemos recibido sus datos y le enviaremos nuestro stock de contenedores a su correo electronico: ${correoUsuario} en breves.`

if (nombreUsuario == "" || apellidoUsuario == "" || correoUsuario == "") {
    return (
        deseoUsuario("error", faltanDatosFormulario)
        )
}
else {
    return (
        deseoUsuario("success", datosCompletosFormulario)
    )}
   }
   
