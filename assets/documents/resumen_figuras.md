## calculando datos del cuadrado de manera manual----------------------------------------

console.group("cuadrado");

    const lado = 5;
    console.log("Los lados miden " + lado + "cm");

    const perimetro = lado * 4;
    console.log("El perimetro mide " + perimetro + "cm");

    const area = lado * lado;
    console.log("El area mide " + area + "cm2");

console.groupEnd();

## calculando datos del triangulode manera manual----------------------------------------

console.group("triangulo");

    const lado1 = 6;
    const lado2 = 6;
    const base = 5;
    const altura = 5.5;

    console.log("datos del triangulo" +
    " Lado1 = " + lado1 + "cm" +
    " Lado2 = " + lado2 + "cm" +
    " Altura = " + altura + "cm" +
    " base = " + base + "cm");

    const perimetroTriangulo = lado1 + lado2 + base;
    console.log("El perimetro mide " + perimetro + "cm")

    const areaTriangulo = (base * altura)/2;
    console.log("El area mide " + area + "cm2")

console.groupEnd();

## calculando datos del circulo de manera manual----------------------------------------

console.group("Circulo");

    //lo que necesitamos
    const radioCirculo = 5;

    //diametro
    const diametroCirculo = radioCirculo * 2;
    const pi = Math.PI

    //circunferencia
    const circunferencia = diametroCirculo * pi;
    console.log("La circunferencia mide " + circunferencia + "cm")

    //area
    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log("El area mide " + areaCirculo + "cm2")

console.groupEnd();

## encapsulando en una funcion.---------------------------------------------------------

console.group("funcion calcular");

    function calcular(figura, dato){

        if(figura == 1){
            console.log("datos cuadrado ");
            console.log("El lado del cuadrado es " + dato[0]);
            ladof = dato[0];

            //perimetro cuadrado
            const perimetrof = ladof * 4;
            console.log("El perimetro del cuadrado mide " + perimetrof + "cm");

            //area cuadrado
            const areaf = ladof * ladof;
            console.log("El area del cuadrado mide " + areaf + "cm2");
        }else if(figura == 2){

            //haciendo el analisis de las formas mas inteligible.
            const lado1f = dato[0];
            const lado2f = dato[1];
            const basef = dato[2];
            const alturaf = dato[3];

            //triangulo
            console.log("datos del triangulo"
            + " Lado1 = " + lado1f + "cm"
            + " Lado2 = " + lado2f + "cm"
            + " base = " + basef + "cm"
            + " Altura = " + alturaf + "cm");

            //calculando la perimetro.
            const perimetroTriangulof = lado1f + lado2f + basef;
            console.log("El perimetro del triangulo mide " + perimetroTriangulof + "cm")

            //calculando el area.
            const areaTriangulof = (basef * alturaf)/2;
            console.log("El area del triangulo mide " + areaTriangulof + "cm2")
        }else if(figura == 3){
            //datos conocidos del circulo
            console.log("datos circulo ");
            console.log("El radio del circulo es " + dato[0]);

            radiof = dato[0]

            //diametro
            const diametroCirculof = radiof * 2;
            const pi = Math.PI

            //circunferencia
            const circunferenciaf = diametroCirculof * pi;
            console.log("La circunferencia mide " + circunferenciaf + "cm")

            //area
            const areaCirculof = (radiof * radiof) * pi;
            console.log("El area mide " + areaCirculof + "cm2")
        }
    }
    // formato para ejecutar la funcion
    console.log("elegir la figura como primer dato, 1 cuadrado, 2 triangulo, 3 circulo")
    console.log("en un array pasar los datos requeridos por la figura")
    calcular(2,[5, 8, 6, 4]);

console.groupEnd();

## encapsulando en una funcion por figura.--------------------------------------------------------

console.group("funcion por fugura");

    //funcion cudrado
    function cuadrado(ladoC){

        console.log("datos cuadrado ");
        console.log("El lado del cuadrado es " + ladoC);

        //perimetro cuadrado
        const perimetroC = ladoC * 4;
        console.log("El perimetro del cuadrado mide " + perimetroC + "cm");

        //area cuadrado
        const areaC = ladoC * ladoC;
        console.log("El area del cuadrado mide " + areaC + "cm2");

    }

    cuadrado(26);

    //funcion triangulo
    function triangulo(lado1T, lado2T, baseT, alturaT){

        //triangulo
        console.log("datos del triangulo"
        + " Lado1 = " + lado1T + "cm"
        + " Lado2 = " + lado2T + "cm"
        + " base = " + baseT + "cm"
        + " Altura = " + alturaT + "cm");

        //calculando la perimetro.
        const perimetroTrianguloT = lado1T + lado2T + baseT;
        console.log("El perimetro del triangulo mide " + perimetroTrianguloT + "cm")

        //calculando el area.
        const areaTrianguloT = (baseT * alturaT)/2;
        console.log("El area del triangulo mide " + areaTrianguloT + "cm2")
    }


    triangulo(20, 20, 40, 25);

    //funcion circulo
    function circulo(radioC){
        //datos conocidos del circulo
        console.log("datos circulo ");
        console.log("El radio del circulo es " + radioC);

        //diametro
        const diametroCirculoC = radioC * 2;
        const pi = Math.PI

        //circunferencia
        const circunferenciaC = diametroCirculoC * pi;
        console.log("La circunferencia mide " + circunferenciaC + "cm");

        //area
        const areaCirculoC = (radioC * radioC) * pi;
        console.log("El area mide " + areaCirculoC + "cm2");
    }

    circulo(50);

console.groupEnd();
