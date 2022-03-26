let contador = 0;

const contadorSuma = document.getElementById("contadorSuma");
const contadorResta = document.getElementById("contadorResta");
const muestraContador = document.getElementById("muestraContador");


contadorSuma.onclick = () =>{
    contador++;
    contador <= 10 ? muestraContador.innerHTML = contador : deseoUsuario("error", contadorMaximo);
};

contadorResta.onclick = () =>{
    contador--;
    contador > 0 ? muestraContador.innerHTML = contador : deseoUsuario("error", contadorMinimo);
};