//encapsulando en una funcion por figura.

//funcion cudrado
function cuadradoP(ladoC){

    // console.log("datos cuadrado ");
    // console.log("El lado del cuadrado es " + ladoC);

    //perimetro cuadrado
    const perimetroC = ladoC * 4;
    return perimetroC
    // console.log("El perimetro del cuadrado mide " + perimetroC + "cm");
}

function cuadradoA(ladoC){

    // console.log("datos cuadrado ");
    // console.log("El lado del cuadrado es " + ladoC);

    //area cuadrado
    const areaC = ladoC * ladoC;
    return areaC
    // console.log("El area del cuadrado mide " + areaC + "cm2");

}

//funcion triangulo
function trianguloA(baseT, alturaT){

    //triangulo
    console.log("datos del triangulo"
    + " base = " + baseT + "cm"
    + " Altura = " + alturaT + "cm");

    //calculando el area.
    const areaTrianguloT = (baseT * alturaT)/2;
    console.log("El area del triangulo mide " + areaTrianguloT + "cm2")
}


function trianguloP(lado1T, lado2T, baseT){

    //triangulo
    console.log("datos del triangulo"
    + " Lado1 = " + lado1T + "cm"
    + " Lado2 = " + lado2T + "cm"
    + " base = " + baseT + "cm");

    //calculando la perimetro.
    const perimetroTrianguloT = lado1T + lado2T + baseT;
    console.log("El perimetro del triangulo mide " + perimetroTrianguloT + "cm")
}

//funcion circulo
function circuloD(radioC){
    //datos conocidos del circulo
    console.log("datos circulo ");
    console.log("El radio del circulo es " + radioC);

    //diametro
    const diametroCirculoC = radioC * 2;
}

function circuloC(diametroCirculoC){
    //datos conocidos del circulo
    console.log("datos circulo ");
    console.log("El diametro del circulo es " + diametroCirculoC);

    const pi = Math.PI

    //circunferencia
    const circunferenciaC = diametroCirculoC * pi;
    console.log("La circunferencia mide " + circunferenciaC + "cm");
}

function circuloA(radioC){
    //datos conocidos del circulo
    console.log("datos circulo ");
    console.log("El radio del circulo es " + radioC);

    const pi = Math.PI

    //area
    const areaCirculoC = (radioC * radioC) * pi;
    console.log("El area mide " + areaCirculoC + "cm2");
}


//captura valor desde el form en html de los inputs-----------

function cuadradoPerimetro(){

    const input = document.getElementById("lado");
    value = input.value;

    const perimetro = cuadradoP(value)
    alert(perimetro);
}

function cuadradoArea(){

    const input = document.getElementById("lado");
    value = input.value;

    const area = cuadradoA(value)
    alert("el valor del area es " + area);
}