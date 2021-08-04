//encapsulando en una funcion por figura.

//funcion cudrado
function cuadradoP(ladoC){

    //perimetro cuadrado
    const perimetroC = ladoC * 4;
    return perimetroC
}

function cuadradoA(ladoC){

    //area cuadrado
    const areaC = ladoC * ladoC;
    return areaC

}

//funcion triangulo
function trianguloA(baseT, alturaT){

    //calculando el area.
    const areaTrianguloT = (baseT * alturaT)/2;
    return areaTrianguloT;

}


function trianguloP(lado1T, lado2T, baseT){

    //calculando la perimetro.
    const perimetroTrianguloT = lado1T + lado2T + baseT;
    return perimetroTrianguloT;

}

//funcion circulo
function circuloD(radioC){

    //diametro
    const diametroCirculoC = radioC * 2;
    return diametroCirculoC;

}

function circuloC(diametroCirculoC){
    const pi = Math.PI

    //circunferencia
    const circunferenciaC = diametroCirculoC * pi;
    return circunferenciaC;

}

function circuloA(radioC){

    const pi = Math.PI

    //area
    const areaCirculoC = (radioC * radioC) * pi;
    return areaCirculoC;

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

function circuloArea(){

    const input = document.getElementById("radio");
    value = input.value;

    const area = circuloA(value)
    alert("el valor del area es " + area);
}

function circuloCircunferencia(){

    const input = document.getElementById("radio");
    value = input.value;

    const circunferencia = circuloC(value)
    alert("el valor de la circunferencia es " + circunferencia);
}

function circuloDiametro(){

    const input = document.getElementById("radio");
    value = input.value;

    const diametro = circuloD(value)
    alert("el valor de la circunferencia es " + diametro);
}

function trianguloArea(){

    var input = document.getElementById("baseA");
    base = input.value;

    var input = document.getElementById("altura");
    altura = input.value;

    var areaT = trianguloA(base, altura)
    alert("el valor del area es " + areaT);

}


function trianguloPerimetro(){

    var input = document.getElementById("base");
    base = input.value;

    var input = document.getElementById("lado1");
    lado1 = input.value;

    var input = document.getElementById("lado2");
    lado2 = input.value;

    const perimetroT = trianguloA(base, lado1, lado2)
    alert("el valor del area es " + perimetroT);

}
