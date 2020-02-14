
function validarNombre(nombre) {
  if (nombre.length === 0) {
    return 'Este campo debe tener al menos 1 caracter';
  }
  if (nombre.length > 50) {
    return 'Este campo debe tener menos de 50 caracteres';
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return 'El campo nombre solo acepta letras' //Expresion regular utilizada para validar nombres, que contenga solo letras tanto minusculas como mayusc.
  }
  return '';
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'Debe seleccionar una provincia para continuar';
  }
  return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return 'Debe brindar una minima descripcion acerca de su regalo';
  }
  else if (descripcionRegalo.length >= 100) {
    return 'Este campo debe contener menos de 100 caracteres';
  }
  else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return 'El campo descripcion solo puede tener numeros y letras'; // Aca verificamos que el nombre tenga solo letras (mayus y minusc) y tambien numeros
  }
  return '';
}

function redireccionarAWishlist() {
  setTimeout(function () { window.location.href = "wishlist.html" }
    , 5000)
}
/*
function limpiarErrores() {
  if (cantidadErrores > 0) {
    const errores = document.querySelector('#errores').querySelectorAll('li');
    errores.forEach(error => {
      error.parentNode.removeChild(error);
    });
  }
}
*/
function validarFormulario(event) {
  const $form = document.querySelector('#carta-a-santa');

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo
  }

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = 'oculto'
    document.querySelector('#exito').className = '';
    redireccionarAWishlist() // Aca agregamos la funcion para redirrecionar al wishlist con el timer de 5 segundos
  }
  event.preventDefault();
}

function manejarErrores(errores) {
  const nombreInputs = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  limpiarErrores();

  let cantidadErrores = 0;
  nombreInputs.forEach(function (nombreInput) {
    const error = errores[nombreInput];
    if (error) {
      cantidadErrores++;
      $form[nombreInput].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      $form[nombreInput].className = "";
    }
  });
  return cantidadErrores;
}

function limpiarErrores() {
  const errores = document.querySelector("#errores").querySelectorAll("li");
  errores.forEach(error => {
    error.parentNode.removeChild(error);
  });
}


const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario

// errorNombre = errores.nombre; //nombre
// errorCiudada = errores.ciudad; //ciudad
// errorDescripcionRegalo = errores.descripcionRegalo; //descripcion

// if (errorNombre) {
//   $form.nombre.className = 'error';
// }
// else {
//   $form.nombre.className = '';
// }
// if (errorCiudad) {
//   $form.ciudad.className = 'error';
// }
// else {
//   $form.ciudad.className = '';
// }
// if (errorDescripcionRegalo) {
//   $form["descripcion-regalo"].className = 'error';
// }
// else {
//   $form["descripcion-regalo"].className = '';
// }
// // EN TODAS LAS FUNCIONES LLAMA A LOS DISTINTOS ERRORES, SI ESTOS SON DISTINTOS A UN STRING VACIO (A CERO EN CUANTO A LENGTH) ES PORQUE  TENEMOS UN   ERROR Y POR ESO LE CAMBIA EL CLASSNAME A "ERROR", PARA QUE CON EL CSS SE PINTE DE ROJO. ESA ES LA LOGICA PARA TODO EL TEMA DE MANEJAR ERRORES
