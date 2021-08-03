## Variables y operaciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una variable y para qué sirve?

    Es un espacio en memoria, el cual nos permite almacenar un dato que cambia conforme
    el codigo de nuestro programa avanaza.

        ¿Cuál es la diferencia entre declarar e inicializar una variable?

    al declarar una variable se está apratando el nnombre por decirlo de alguna manera,
    al inicializarla se esta dandole un valor en cncreto para el inicio del programa.

    ¿Cuál es la diferencia entre sumar números y concatenar strings?

    la suma de numeros es una operacion matematica y concatenar strings es "colocar" uno
    seguido del otro los strings que se tienen.

    ¿Cuál operador me permite sumar o concatenar?

    el operador de concatenacion es el "+".

2️⃣-3️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información
y Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    Nombre: var nombre = "nombre" tipo: string
    Apellido: var apellido = "apellido" tipo: string
    Nombre de usuario en Platzi: var userName: "oscar123" tipo: string
    Edad: var edad = 39 tipo: number
    Correo electrónico: var email:"oj@loquesea.com" tipo: string
    Mayor de edad: var mayorEdad = var edad > 18 tipo: bolean
    Dinero ahorrado: var ahorro = 2000000 tipo:number
    Deudas: var deudas = {enero: 1200, febrero: 500, marzo: 1500} tipo: object

4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

    Nombre completo (nombre y apellido)

        console.log (nombre + " " + apellido)

    Dinero real (dinero ahorrado menos deudas)

        onsole.log = ahorro - (deudas.enero + deudas+febrero + deudas.marzo)

## Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios.

    ¿Qué es una función?

        Bloque de codigo que nos permite abstraer varias lineas de nuestro programa y nos ayuda
        ha no repetirlas, obteniendo con ello un codigo mas entendible y legible.

    ¿Cuándo me sirve usar una función en mi código?

        Cuando se tienen bloques que se repitan constantemente en el programa.

    ¿Cuál es la diferencia entre parámetros y argumentos de una función?

        Argumento es el valor asignado al parametro de la funcion y el parametro es el nombre
        de la variable que se le asigna a la hora de escribir nuestar funcion.

            funtion(parametros){
                lo que se va a realizar
            }

            parametros="aqui el valor a enviar a la funcion" (argumentos)

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables
constantes por parámetros y argumentos en una función.

        const name = "Juan David";
        const lastname = "Castro Gallego";
        const completeName = name + lastname;
        const nickname = "juandc";

        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

    solucion:

        function datosUser(name, lastname, nickname){
        var completeName = name + " " + lastname
            console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
        }

        datosUser("Juan David", "castro Gallego", "juandc")

## Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es una condicional?

        Es un codigo que nos permite evaluar una o mas condiciones y con el resultado, ya sea verdadero o
        falso, tomar una decision.

    ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

        if: nos permite evaluar una condicion y decidir con base a si es verdadero o falso el resultado de la
        condicion

        switch: nos permite evaluar multiples casos de una condicion en caso que la evaluacion sea  verdadera
        genera un resultado y rompe el ciclo de evalucion, pero sino no coincide con ningun caso ejecuta el
        generando una respuesta general.

    ¿Puedo combinar funciones y condicionales?

        Si es posible combinarlos y en los casos mas complejos es recomendado hacerlo y se considera una buena
        practica a la hora de escribir codigo claro e intuitivo.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

    const tipoDeSuscripcion = "Basic";

    switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
    }

    solucion:

    const tipoDeSuscripcion = "Basic";

        if(tipoDeSuscripcion == "Free"){
            console.log("Solo puedes tomar los cursos gratis");
        }
        else if(tipoDeSuscripcion == "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        }
        else if(tipoDeSuscripcion == "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        }
        else(tipoDeSuscripcion == "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }

    reto un solo if y usando arrays:

        //convierto las posibles elecciones en un solo array.

            suscripciones = ["Free", "Basic", "Expert", "ExpertPlus"];

        //convierto los posibles mensajes de salida a un solo array.

            mensajes = ["Solo puedes tomar los cursos gratis",
            "Puedes tomar casi todos los cursos de Platzi durante un mes",
            "Puedes tomar casi todos los cursos de Platzi durante un año",
            "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
            ]

        var suscripcion = 0;

        //evaluo si la introducida por el usuario corresponde al rango de los indices del array
        //de suscripciones que va del 0 al 3

        if(suscripcion >= 0 && suscripcion <= 3){

            //tomo el valor de la suscripcion que corresponde al indicie tomado por el ususario
                var suscripcion = suscripciones[suscripcion];
            //uso el valor anterior para elejir el mensaje adecuado
                var mensaje = mensajes[suscripciones.indexOf(suscripcion)];
            //genero una salida con base a las elecciones anterioes
                console.log("tu suscripcion es " + suscripcion + " entonces " + mensaje);
        }else{
            console.log("elije una de nuestras suscripciones y nunca pares de aprender :)");
        }

## Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un ciclo?

        trozo de codigo que se repite sucecivamente hasta que se cumple una condicion de parada

    ¿Qué tipos de ciclos existen en JavaScript?

        for, while, some

    ¿Qué es un ciclo infinito y por qué es un problema?

        un ciclo cuya condicion de parada no ha sido definida o no se ha deficnido de manera correcta
        y su principal problema es que bloquea los recursos de maquina y ocasiona un crash en el programa.

    ¿Puedo mezclar ciclos y condicionales?

        si es posible mezclar ciclos y condicionales.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

    for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
    }

    for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
    }

    solucion:

        while(i < 5){
            console.log("El valor de i es: " + i);
            i = i + 1;
        }

        var i = 10
        while(i >= 2){
            console.log("El valor de i es: " + i);
            i = i - 1;
        }

3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

    var respuesta = prompt("cuanto es 2 + 2");

    if(respuesta == "4"){
        console.log("Respuesta correcta, flicitaciones.")
    }else{
        console.log("un repaso te caeria bn, intentalo de nuevo mas tarde")
    }

## Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

    ¿Qué es un array?

        conjunto de valores que ce encuentran encapsulados en una misma variable y responden
        a un indice que permite ubicarlos.

    ¿Qué es un objeto?

        conjunto de valores cuya estructura corresponde a la configuracion llve: valor y estan encapsulados en
        la misma variable.

    ¿Cuándo es mejor usar objetos o arrays?

        los arrays es mejor usarlos cuando tenemos datos aleatorios y los objetos cuando los valores
        deben ser distinguidos de alguna manera, en este caso por su llave.

    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

        Es posible tener arrays que contengan objetos.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

    array = ["a", 2, "c", 3];
    function imprimir(array){
        primerElemento = array[0]
        console.log("este es el primer elemento " + primerElemento)
    }

    imprimir(array);

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por
uno (no se vale imprimir el array completo).

    array = ["a", 2, "c", 3];
    function listar(array){
        array.forEach(function(elemento, indice, array) {
        console.log(elemento);
    });
    }

    listar(array);

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por
uno (no se vale imprimir el objeto completo).

    obj =  {primero:"Amarillo",segundo:"Naranja",tercero:"Rojo",cuarto:"Blanco"};
    function listarObj(colores){

        for(var clave in obj){

            console.log(obj[clave]);

        }

    }

    listarObj(obj)
