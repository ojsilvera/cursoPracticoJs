// calculando parametros del cuadrado
console.group("cuadrado");
    const lado = 5;
    console.log("Los lados miden " + lado + "cm");

    const perimetro = lado * 4;
    console.log("El perimetro mide " + perimetro + "cm");

    const area = lado * lado;
    console.log("El area mide " + area + "cm2");
console.groupEnd();

// calculando parametros del triangulo
console.group("triangulo");
    const lado1 = 6;
    const lado2 = 6;
    const base = 5;
    const altura = 5.5;
    console.log("Parametros del triangulo"
    + " Lado1 = " + lado1 + "cm"
    + " Lado2 = " + lado2 + "cm"
    + " Altura = " + altura + "cm"
    + " base = " + base + "cm");

    const perimetroTriangulo = lado1 + lado2 + base;
    console.log("El perimetro mide " + perimetro + "cm")

    const areaTriangulo = (base * altura)/2;
    console.log("El area mide " + area + "cm2")
console.groupEnd();

// calculando parametros del circulo
console.group("Circulo");

    //lo que necesitamos
    const radioCirculo = 5;
    const diametroCirculo = radioCirculo * 2;
    const pi = Math.PI

    //circunferencia
    const circunferencia = diametroCirculo * pi;
    console.log("La circunferencia mide " + circunferencia + "cm")

    //area
    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log("El area mide " + areaCirculo + "cm2")


console.groupEnd();

