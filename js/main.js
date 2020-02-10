const $form = document.querySelector('#carta-a-santa');
const nombre = $form.nombre.value; // es igual a nombre = document.querySelector("#nombre").value // o tambien a nombre = document.querySelector("[name=nombre]").value
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value; // esta es otra forma de escribir cuando tenemos el "-" de por medio y tiene que ver con objetos
console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length > 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  return '';
}

function validarCiudad(ciudad) {
  if (ciudad === "") {
    return 'Debe seleccionar una provincia para continuar'
  }
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return 'Debe brindar una minima descripcion acerca de su regalo'
  }
  if (descripcionRegalo.length > 100) {
    return 'Este campo debe contener menos de 100 caracteres'
  }
}