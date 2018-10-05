
//Pop add
function saluda(){
    alert("Hola soy belle")
}

function agregarComentario() {
console.log("Agregar Comentario"); 

//obteniendo lo ingresado
var textNuevoComentario = document.getElementById("Nuevo-Comentario");
console.log(textNuevoComentario);

var comentarioIngresado = textNuevoComentario.value;
console.log(comentarioIngresado);

//creando comentario
var comentario = document.createElement ("p");
comentario.textContent  = comentarioIngresado;
console.log(comentario);

//Mostrando comentario en el sitio
var seccionComentarios = document.getElementById(id="seccion-comentarios");
console.log(seccionComentarios);

seccionComentarios.appendChild(comentario);

textNuevoComentario.value = "";
}
