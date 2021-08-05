// calcula valor del decuento a aplicar y retorna precio final-----------------
function precioF(precio, descuento){

    var precioFinal = (precio * (100-descuento))/100;
    return precioFinal;

}

// captura valor del precio y el decuento a aplicar----------------------------
function descuentoP(){

    var precio = document.getElementById("precio");
    var descuento = document.getElementById("descuento");
    var Pdescuento = document.getElementById("precioF");

    var vPrecio = precio.value;
    var vDescuento = descuento.value;
    var precioFinal = precioF(vPrecio, vDescuento);

    Pdescuento.innerText = "El descuento es: " + precioFinal;

}

// captura valor del precio y el decuento a aplicar con cupon--------------------
function Dcupon(p, cupon){
    var vf = (p*(100-cupon))/100
    return vf;
}
function sDescuento(){
    var cupones = {
        v: 70,
        g: 50,
        s: 30
    }
    //obtengo el precio desde el input
    var pPrecio = document.getElementById("precioC");
    //almaceno el valor del precio obtenido desde el input
    var precioF = pPrecio.value;
    //obtengo el valor de la llave del objeto cupones desde el input
    var cuponD = document.getElementById("cuponC");
    //almaceno el valor del input
    var eleccion = cuponD.value;
    //llamo al valor del descuento que se encuentra en el objeto cupones
    var cuponL = cupones[eleccion];
    // llamo y paso los dos valores precio final y cupon de descuento a la funcion
    // Pdescuento
    var Pdescuento = Dcupon(precioF, cuponL);
    //accedo al input en el cual voy a mostrar el valor del producto despues del descuento
    var totalPago = document.getElementById("aPagar");
    //asigno el valor del producto despues del descuento al input
    aPagar.innerText = "el decuento es: " + Pdescuento;
}