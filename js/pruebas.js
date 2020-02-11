function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no valido con un campo vacio');

    console.assert(
        validarNombre('skadasdasdaljasdjasdkasjdkasldjasldkjasldkjasdljaslkdjaslkdjaslkdjaslkdjaksldjaskldjkalsjdk') === 'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no funciono con un string de +50 caracteres');
    console.assert(
        validarNombre('Santiago') === '', 'La funcion validar nombre, fallo de forma positiva con un nombre valido'
    );
    console.assert(
        validarNombre('asdbasbd123455') === 'El campo nombre solo acepta letras', 'Validar nombre no valido que el nombre solo tenga letras' // Esta funcion valida que el nombre tenga solo letras
    )
}


function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Debe seleccionar una provincia para continuar', 'Validar provincia no verifico que se seleccione una provincia'
    );
    console.assert(
        validarCiudad('Buenos Aires') === '', 'Validar ciudad no funciona con una provincia que es incorrecta'
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Debe brindar una minima descripcion acerca de su regalo', 'Valida regalo no verifico que no debe haber string vacio'
    );

    console.assert(
        validarDescripcionRegalo('asjdnasjdasdjalsjdlaskdjaskldjasdklajsdkalsdjaskldjaskldjasdlkasdjaskldjaslkdajsdklasjdaksldjaskdaskdljasdklasjdaklsdjalwidiawd') === 'Este campo debe contener menos de 100 caracteres', 'Validar regalo no verifico que no debe haber un campo de +100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo('Regalo') === '', 'La funcion validar regalo no funciona con una descripcion correcta'
    );

    console.assert(
        validarDescripcionRegalo('..,,..,.,.,__') === 'El campo descripcion solo puede tener numeros y letras', 'La funcion validar descripcion regalo no valido que sean solo numeros y letras'   // Esta funcion valida que la descripcion regalo tenga solo letras y numeros
    )
}

//SUPER IMPORTANTE LLAMAR A LAS FUNCIONES UNA VEZ DEFINIDAS
probarValidarCiudad();
probarValidarDescripcionRegalo();
probarValidarNombre();