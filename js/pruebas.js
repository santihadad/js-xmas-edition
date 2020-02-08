function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no funciono con un string vacio')

    console.assert(
        validarNombre('skadasdasdaljasdjasdkasjdkasldjasldkjasldkjasdljaslkdjaslkdjaslkdjaslkdjaksldjaskldjkalsjdk') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no funciono con un string de +50 caracteres')
}

// Hacer funcion para validar ciudad y que no sea vacio. Aca colocar la prueba de la validacion para ambas funciones 
// Hacer funcion para validar regalo y que no sea vacio. Aca colocar la prueba de la validacion para ambas funciones

//Si no tenemos mas tareas, escribimos pruebas para las tareas de las clases 5 y 6