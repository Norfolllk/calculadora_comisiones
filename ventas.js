const VENTAS_BASE = 5;

// Función para calcular la comisión
function calcularComision(numeroVentas, PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtra = numeroVentas - VENTAS_BASE;
        comision = ventasExtra * (PrecioProducto * 0.1);
    }

    return comision;
}

function calcular() {

    //Recuperar propiedad de la caja de texto
    let componentesueldoBase = document.getElementById("txtSueldoBase");
    let componenteventas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    //Recuperar el valor de la caja de texto
    let sueldoBaseStr = componenteSueldoBase.value;
    let numeroVentasStr = componenteventas.value;
    let PrecioProductostr = componentePrecio.value;

    //Convertir el texto a números
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas = parseInt(numeroVentasStr);
    let PrecioProducto = parseFloat(PrecioProductostr);

    //Mostrar texto en pantalla
    let comision = calcularComision(numeroVentas, PrecioProducto);
    
    let total = sueldoBase + comision;
    
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}