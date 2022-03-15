let formularioUsuario = document.getElementById("formularioUsuario");

formularioUsuario.addEventListener("submit", validarFormulario);

function validarFormulario (e){


    e.preventDefault ();
    formularioUsuario = e.target

    let nombreUsuario = formularioUsuario.children[0].value; 
    let apellidoUsuario = formularioUsuario.children[1].value;
    let correoUsuario = formularioUsuario.children[2].value; 
    let ciudadUsuario = formularioUsuario.children[3].value;

if (nombreUsuario == "" || apellidoUsuario == "" || apellidoUsuario == "" || correoUsuario == "") {
    return (alert("For favor complete todos los datos"))
}

else {
    return (alert(`Hola ${nombreUsuario} ${apellidoUsuario}, le confimamos que hemos recibido sus datos y le enviaremos nuestro stock de contenedores en ${ciudadUsuario} a su correo electronico: ${correoUsuario} en breves. Que tenga un buen dia`))
}
   }
   

