//funcion media aritmetica-------------------------------------------------------

function promedio(lista){

    var sumatoria = 0;

    for(var i = 0; i < lista.length; i++){
        var sumatoria = sumatoria + lista[i];
    }

    var promedioL = sumatoria / lista.length;

    return promedioL;
}

//funcion media------------------------------------------------------------------

//determina si la media es para para o impar
function par(numbers){

    if(numbers.length % 2 === 0){
        return true;
    }else{
        return false;
    }

}

//calcula la media
function calcularMedia(numbers){

    if(par(numbers)){

        var mediaP = (numbers.length/2) - 1;
        var val1 = numbers[mediaP];
        var val2 = numbers.reverse()[mediaP];
        promedioP = (val1 + val2)/2;
        return promedioP;

    }else{
        var mediaI = parseInt(numbers.length/2);
        promedioI = numbers[mediaI];
        return promedioI;
    }
}

//recibe y formate la cadena que viene del html

function stringToArray(){

    // obtiene la dadena del input
    var cadena = document.getElementById("arreglo");
    // extrae el valor de lo enviado desde html
    var cadenaInput = cadena.value;
    // separador determinado
    var separador = ",";
    //convierte la cadena en un array
    var numbersT = cadenaInput.split(separador);
    //establece el tipo de variable en un array.
    var numbers = [];
    // convierte cada valor del array de string a numeros
    numbersT.forEach( function(valor, indice, array) {

        var dato = parseInt(valor);
        numbers.push(dato);

    });

    //envia el array de numeros a la funcion que debe calcular la media
    totalPromedio = calcularMedia(numbers);

    //muestra el valor del promedio en un p en html
    var promedioHTML = document.getElementById("promedio");
    promedio.innerText = "el promedio es: " + totalPromedio;

}

