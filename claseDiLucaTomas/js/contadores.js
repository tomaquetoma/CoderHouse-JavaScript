let contador = 0;

const contadorSuma = document.getElementById("contadorSuma");
const contadorResta = document.getElementById("contadorResta");
const muestraContador = document.getElementById("muestraContador");

//Ver que no deje seguir sumando igualmente

contadorSuma.onclick = () =>{
    contador++;
    contador <= 10 ? muestraContador.innerHTML = contador : deseoUsuario("error", contadorMaximo);
};

contadorResta.onclick = () =>{
    contador--;
    contador > 0 ? muestraContador.innerHTML = contador : deseoUsuario("error", contadorMinimo);
};

console.log("primera prueba");
setTimeout(()=> {
    console.log("Tomas es un genio asincronico")

},2000);

console.log("prueba final");
