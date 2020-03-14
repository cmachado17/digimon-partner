let contenido = document.querySelector("#contenido");
let boton = document.querySelector("#boton");
let contador = 0;
let array = [];
let numero = 0;
let bandera = false;

// Funciones

// Funcion principal
const capturar = () => {

  //Validaciones
  if (contador < 100) {
    fetch("https://digimon-api.herokuapp.com/api/digimon")
      .then(res => res.json())
      .then(data => {
        let numero = Math.floor(Math.random() * (100 - 1) + 1);
        if (bandera == false) {
          array.push(numero);
          bandera = true;
          console.log(array);
          console.log(array.length);
        } else if (bandera == true) {
          numero = Math.floor(Math.random() * (100 - 1) + 1);
          console.log(array.includes(numero));
          while (array.includes(numero) == true) {
            numero = Math.floor(Math.random() * (100 - 1) + 1);
          }

          array.push(numero);
        }
        console.log(array);

//Contenido a mostrar en pantalla
        contenido.innerHTML += `<tr id="${numero}"><td scope="row">${data[numero].name}</th><td>${data[numero].level}</td><td><a id="imagen" data-toggle="modal"
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
  </div></td><td><button class="btn btn-danger btn-eliminar" id="boton${data[numero].id}" onclick="eliminar()"><i class="fas fa-trash-alt"></i></td></tr>`;
        contador++;
        console.log(contador);
      });
  } else {
    alert("No hay mas digimons por capturar!");
  }
};

//Funcion eliminar

const eliminar = () => {
  $(document).on("click", ".btn-eliminar", function() {
    let row = $(this)
      .parent()
      .parent();
    let id = parseInt(
      $(this)
        .parent()
        .parent()
        .attr("id")
    );
    let index = array.indexOf(id);
    console.log(index);
    array.splice(index, 1);
    console.log(array);
    $(row).addClass("hidden");
    contador--;
    console.log(contador);
  });
};

//Capturar eventos

boton.addEventListener("click", capturar);
