const lista = document.querySelector('#listado')
fetch('/data.json')
  .then( (res) => res.json())
  .then( (data) => {
    data.forEach((producto) => {
      const divFetch = document.createElement('div')
      divFetch.innerHTML = `
                            <div class="card p-2" style="width: 18rem;">
                            <h4>${producto.tipo} - ${producto.ciudad}</h4>
                            <img src="${producto.img}" alt="foto contenedor">
                            <h5>USD ${producto.precio}</h5>
                            </div>`
      divFetch.className = "col p-2 m-3";
      lista.append(divFetch)
    })
})

