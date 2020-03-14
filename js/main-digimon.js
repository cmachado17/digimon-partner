let contenido = document.querySelector("#contenido");
let boton = document.querySelector('#boton');

const capturar = ()=>{
  fetch("https://digimon-api.herokuapp.com/api/digimon")
  .then(res => res.json())
  .then( data =>{
    let numero = Math.floor(Math.random()*(100-1)+1);
    contenido.innerHTML += `<tr><th scope="row">${data[numero].name}</th><td>${data[numero].level}</td><td><a id="imagen" data-toggle="modal"
    data-target="#exampleModal${data[numero].id}"><img src="${data[numero].img}" widht="100px" height="100px" class="rounded-circle"> <div
    class="modal fade"
    id="exampleModal${data[numero].id}"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog text-body" role="document" >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${data[numero].name}</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="${data[numero].img}" class="rounded-circle">
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div></td></tr>`;
  });
}

boton.addEventListener("click", capturar);


