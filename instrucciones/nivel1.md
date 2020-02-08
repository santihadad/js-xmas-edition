Introducción a JavaScript intermedio.
Nivel 0 - Servidores y HTTPS
==============
#Para entrar a google por ejemplo, vamos a ver que nos comunicamos con una computadora que tienen ellos como empresa, la cual tiene un nombre o numero (Remote adress o IP), esta computadora tiene un programa corriendo que es el servidor web

#Los servidores web escuchan ciertos puntos llamados puertos y tenemos un total 65535 puertos por los que podemos escuchar

#Google y otras paginas utilizan el HTTPS, que es mas seguro y nadie puede snifear o robar datos de nuestra conexion porque estan todos encriptados 

#Las direcciones web estan conformadas por: dominio + puerto ===> www.google.com:443 (el numero es el puerto de google por defecto). En algunas ocasiones no es necesario colocar el puerto ya que el navegador ya sabes cual es el asignado y tampoco podemos cambiarlo debido a medidas de seguridad.

#Un servidor esta escuchando un puerto en una maquina y lo que escucha son conexiones entrantes. Al ir a una pagina siempre se repite el mismo patron: 
      REQUEST (peticion) ===> PROCESAMIENTO ===> RESPONSE (devolucion)
Nosotros le pedimos al servidor que nos de alguna pagina web, este lo procesa y nos devuelve algun resultado. 

#Si nosotros tenemos un servidor que brinda las respuestas, tambien debe haber una parte que realice peticiones e interprete las respuestas, llamado "cliente". En el caso de una pagina, el cliente es el navegador (Chrome, Firefox, etc).

#DATO: Cuando vemos el codigo en la consola, este va a estar feo y mal escrito, debido a que pasan el codigo por un algoritmo el cual lo torna mas ilegible para proteger el mismo codigo y por seguridad. Este proceso se llama "ofuscacion" (https://es.wikipedia.org/wiki/Ofuscaci%C3%B3n). De todas formas es solo una medida de seguridad pequenia ya que tenemos varias y puede haber forma de tornar el codigo legible. 

#Todo el tema servidor y seguridad es lo que hace el backend, ya que el navegador puede ser controlado por el usuario, por lo que debe estar todo protegido de punta a punta. 

Nivel 1 - Capturando información del usuario mediante un formulario
==============

Cómo funciona un formulario?
=========================
1. Un visitante entra a una página web que contiene un formulario.
2. El navegador muestra el formulario HTML.
3. El visitante llena el formulario y lo envía (submit)
4. El navegador envía esa información a un servidor web.
5. En el backend (si existe), se procesa el formulario.
    Por ejemplo, con un backend, se puede:
      - Enviar los datos del formulario por e-mail
      - Guardar los datos del formulario en una base de datos o un archivo.
6. Se envía una respuesta del servidor al cliente.


Validación de un formulario
=================
* Validación del lado del cliente:

Las validaciones de los inputs son esenciales para cualquier formulario web
ya que ayuda a que el visitante envíe los datos correctos.
Sirven tanto por una cuestión de seguridad como una cuestión de usabilidad.

Las validaciones de los formularios del lado del cliente se escriben en JavaScript. 

Validar un formulario con javascript nos ahorra muchas llamadas 
innecesarias al servidor.

También podemos validar formularios directamente con HTML, que es una
funcionalidad relativamente nueva.

Más info sobre el tema en: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation

* Validación del lado del servidor:

Con validar del lado del cliente no alcanza, también hay que validar del lado
del servidor. Esto es porque javascript se puede deshabilitar, o incluso
pueden hacer una llamada HTTP a su servidor sin usar un navegador. 

Para validar nuestro formulario, vamos a tener  que hacer lo siguiente:
1. Obtener cada valor del formulario
2. Hacer validaciones individuales, por ejemplo:
    - no vacío
    - al menos 2 caracteres
    - máximo de 250 caracteres
    - sólo letras
    - sólo números
    - letras y números

3. Validar el formulario cuando lo queramos  mandar
4. CSS:
    - Mostrar un estilo de error en los campos que tengan problemas
    - Mostrar un mensaje de error en los campos que tengan problemas

#DATO: la validacion siempre es necesario hacerla en los dos puntos, tanto del lado del usuario como del lado del servidor.

1.Obtener el valor de un formulario
=========================
    Además de `document.querySelector()`, también se puede usar el nombre
    del formulario para acceder a sus campos.

    **
   `const name = document.formulario.nombre.value;`

   TODO: Ahora crear lo mismo para las variables:
   - ciudad
   - comportamiento
   - descripcionRegalo
   
   
2.Validar que el nombre sea válido y escribir una prueba
================================
    
  Agregar algunas validaciones al nombre.
  - Si `nombre` está vacío, imprimir el error: '
  Este campo debe tener al menos 1 caracter'
  - Si `nombre` es mayor a 50 caracteres, imprimir 
  el error: 'Este campo debe tener menos de 50 caracteres'

  ES CLAVE HACER UN ARCHIVO DE PRUEBAS.JS PARA IR PROBANDO TODAS LAS FUNCIONES Y COMPROBAR QUE DEN EL RESULTADO ESPERADO, Y ASI NOS EVITAMOS TENER QUE IR UNA A UNA EN LA CONSOLA Y PERDER TIENPO. Se hace con el console.assert()

  Estas pruebas unitarias con claves ya que estamos escribiend codigo para probar codigo. Estas pruebas nos sirven para nuestros companeros y tambien para nosotros mismos a futuro porque nos indica que es lo que deberia estar haciendo el programa. Si alguien viene y rompe el programa, modificando el funcionamiento de algo y no teniamos pruebas automatizadas, vamos a estar horas y horas haciendo debbug y viendo como solucionarlo

  Ahora vamos a hacer una validación más interesante.
  Queremos que nuestro nombre contenga sólo letras.
  Pero cómo podemos validar esto? Con una herramienta que se llama
  Regular Expressions (Expresiones Regulares), abreviado RegEx o RegExp.
  
  Una expresión regular es un objeto que describe un patrón de caracteres.
  
  Se usan para encontrar texto, y buscar & reemplazar porciones de texto.
  
  
  Las expresiones regulares se pueden volver muy complicadas, pero hoy 
  vamos a aprender los conceptos más simples.
  
  Más info de regular expressions en `regular-expressions.txt` (falta traducir)

  Vamos a ver los métodos `test` y `match`

  ```
  console.log(/abc/.test("abcde"));
    // → true
  console.log(/abc/.test("abxde"));
    // → false
  ```

  Para validar que sólo tenga letras, podemos hacer:

  `const contieneSoloLetras = /^[A-z]+$/.test(valor);`

  Esto va a retornar un booleano. True si sólo contiene letras o false
  si no contiene sólo letras.

  TODO: Agregar la validación para que sólo tenga letras.  
  TODO: Escribir una prueba

3.Enviando (submit) el formulario
=====================
  
  Ahora que tenemos la validación del nombre lista, vamos a ver cómo
  funciona cuando mandamos un form.
 
  // Ejemplo con atributo onsubmit, onclick y
  // directamente en JS
  
  TODO:
  1. Creemos una función llamada `validarForm` que no tome argumentos.
  2. Preguntemos por el valor de `nombre` y validémoslo llamando a la  función
  ya existente. 
  3. Ahora hagamos un `console.log` del resultado de la ejecución de
   nuestra función para `validarNombre`

Si lo probás, vas a ver que no pasa nada. La razón de eso  es el
comportamiento por default del botón submit.
  
  
4.Eventos. Botón submit
=======================

El comportamiento por default del formulario cuando se envía,
es que se  mandara todo al servidor, cuando no existía
toda la movida de JS que existe hoy, entonces nos ahorraba tiempo.

Hoy en día, tenemos que hacer unos pasos extra para evitar ese
comportamiento por default. Por qué no se cambia? Por algo llamado
backwards compatibility, o compatibilidad con versiones anteriores.

TODO original:
1. In `index.html` add `event` as an argument for the
`validateForm` function.
2. In your javascript file add `event` as an argument to
the `validateForm` function.
3. Inside of the `validateForm` function call:
`event.preventDefault();`

TODO posta:

1. Agregar `event` como parámetro de la función onsubmit,
2. y hacer `event.preventDefault()`.


Y ahora debería funcionar.
  

5.Éxito o Errores
===================
    
  Creemos un manejador de errores que se encargue de mostrar los errores
  del formulario, o nos muestre un mensaje de éxito. 
  
  TODO:
  1. Crear una función `manejarErrores ` que tome 1 argumento `errores`.
  2. Agregar un chequeo en esta función que diga que si no tenemos errores,
  imprima `console.log('éxito')` y si no, que haga un `console.log` de los errores.
  3. Reemplazar el console.log de validarNombre y en vez de eso,
  llamar a la función `manejarErrores` con un array de errores.


// Acá hacemos un parate y vemos una intro a objetos.

6.Hacer validación para otros campos (con sus pruebas)
================================

  TODO:
  1. Obtener el valor de `ciudad` y validar que no sea vacío.
  2. Obtener el valor de `descripcion-regalo` y validar que:
  - tenga menos de 100 caracteres
  - que no esté vacío.
  - sólo tenga letras y números

  If you remember from before, you used the syntax:

  Se puede usar `[A-z0-9]` para validar que sólo haya letras y números.
  
  3. En `validarForm` vamos a crear un objeto que represente los errores
  de nuestro formulario por cada  campo.
  
  ```
  const errores = {
    name: validarNombre(nombre)
  };
  ```

  4. Ahoral o mismo para `ciudad` y `descripcion-regalo`

Atención: No se olviden de la `,` para separar múltiples valores.

  ```
  const errores = {
    nombre: validarNombre(nombre),
    ciudad: validarCiudad(ciudad)
  };
  ```
   
  Ahora para ver si tenemos algún error en `handleErrors`,
  vamos a chequear si hay errores de manera diferente.
  tenemos que iterar por cada par de llave-valor (key-value pair) del objeto
  de errores.
  
  5. Verificamos si hay errores con un acumulador.
  
  ```
  let cuentaErrores = 0;
  ```
  
  6. Verificamos si hay un error en `nombr`e
  
  ```
  if (errores.nombre) {
    console.log(errores.nombre);
    cuentaErrores += 1;
    // ó cuentaErrores++;
    // ó cuentaErrores = cuentaErrores + 1;
  }
  ```
  
  7. Al final de la verificación, si `cuentaErrores` sigue siendo 0,
  no hay errores. Si es mayor a 0, hay errores.
   
  8. TODO: Hacer lo mismo con `ciudad` y `descripcion-regalo`.
  
  
7.Objeto, forEach, funciones de callback.
===========================

Como vemos, es insostenible tener que agregar un chequeo por cada
campo nuevo. Imagínense un formulario con 100 campos.

Ahora que ya está funcionando nuestro código, vamos a hacerle un refactor.
Refactor significa dejar todo funcionando como está, pero cambiando el código
que corre por detrás.

El método `forEach` lo podemos ver [en MDN directamente](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).
  
  TODO:
  //Explicar por qué un array no estaría tan bueno en este caso
  1. Los objetos tienen llaves (keys). Uno puede iterar por esas llaves  
  usando forEach:
  
  ```
  Object.keys(errores).forEach(function (key) {
       console.log(errores[key]); 
       cuentaErrores = cuentaErrores + errors[key].length;
    });
  ```
  
  Ahora el código está más limpio y es más escalable y mantenible.


8.Interacción con los errores
================================

  Ahora agreguemos un poco de interactividad a nuestra interfaz de usuario
  porque al momento sólo sabemos de los errores por lo que podemos ver 
  en la consola.

  Vamos a hacer los campos que tienen errores que queden en rojo,
  agregándole la clase `error` que existe en `index.css`. Hace que el
  borde sea rojo.  
   
  TODO:
  1. Vamos a usar querySelector para agarrar al elemento que tenga
  el mismo nombre que cada llave del objeto que tenga errores.

  ```
  document.querySelector(`[name="${key}"]`)
  ```
  
  2. Le vamos a agregar la clase error usando `className` o `classList`
  
  3. Cada vez que haya un error, vamos a limpiar el valor del texto.
    
  4. Cuando no haya error, vamos a limpiar los errores.
  
  5. Finalmente, vamos a agregar los errores dentro del contendor `#errores`
  creando un <li> por cada uno.
  
  6. Podemos borrar los `console.log` que haya porque ya tenemos la funcionalidad
  hecha como debe ser.
  
  P.D.: Siempre es bueno limpiar los console.log del código.


9.Interactuando cuando el envío es exitoso
~~===================================~~

  Ahora, qué pasa si todo fue bien?
   
  1. Vamos a esconder el formulario
  2. Vamos a mostrar el elemento con id `#exito` //explicar esta técnica
  
TAREA:
  3. En 5 segundos vamos redireccionar al usuario a `wishlist.html`,
  usando `setTimeout` y `window.location.href`.


//////////////////////////////////////////////////////////////////////////////////

  Felicitaciones! Terminaste la parte 1 del taller intermedio!

//////////////////////////////////////////////////////////////////////////////////
