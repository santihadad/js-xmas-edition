function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no valido que no debe haber un string vacio')

    console.assert(
        validarNombre('skadasdasdaljasdjasdkasjdkasldjasldkjasldkjasdljaslkdjaslkdjaslkdjaslkdjaksldjaskldjkalsjdk') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no funciono con un string de +50 caracteres')
}

// Hacer funcion para validar ciudad y que no sea vacio. Aca colocar la prueba de la validacion para ambas funciones 
// Hacer funcion para validar regalo y que no sea vacio. Aca colocar la prueba de la validacion para ambas funciones

//Si no tenemos mas tareas, escribimos pruebas para las tareas de las clases 5 y 6

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una provincia para continuar', 'Validar provincia no verifico que se seleccione una provincia'
    )
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Debe brindar una minima descripcion acerca de su regalo', 'Valida regalo no verifico que no debe haber string vacio'
    )
    console.assert(
        validarDescripcionRegalo('asjdnasjdasdjalsjdlaskdjaskldjasdklajsdkalsdjaskldjaskldjasdlkasdjaskldjaslkdajsdklasjdaksldjaskdaskdljasdklasjdaklsdjalwidiawd') === 'Este campo debe contener menos de 100 caracteres', 'Validar regalo no verifico que no debe haber un string de +100 caracteres'
    )
}

//SUPER IMPORTANTE LLAMAR A LAS FUNCIONES UNA VEZ DEFINIDAS
probarValidarCiudad();
probarValidarDescripcionRegalo();
probarValidarNombre();