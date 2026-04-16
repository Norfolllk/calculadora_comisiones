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

function setError(input, message) {
    const error = document.getElementById("error_" + input.id);
    error.textContent = message;
    input.classList.toggle("input-error", Boolean(message));
}

function validarInput(input) {
    const valor = input.value.trim();
    let esValido = true;

    if (valor === "") {
        setError(input, "Campo obligatorio.");
        return false;
    }

    if (input.id === "txtVentas") {
        if (!/^\d+$/.test(valor)) {
            setError(input, "Ingrese un número entero válido.");
            return false;
        }

        const numero = parseInt(valor, 10);
        if (numero < 0) {
            setError(input, "El número de ventas no puede ser negativo.");
            return false;
        }
        if (numero > 9999) {
            setError(input, "Máximo 9999 ventas.");
            return false;
        }
        setError(input, "");
        return true;
    }

    if (!/^\d+(?:\.\d{1,2})?$/.test(valor)) {
        setError(input, "Ingrese un monto numérico válido (máx. 2 decimales). ");
        return false;
    }

    const cantidad = parseFloat(valor);
    if (cantidad <= 0) {
        setError(input, "El valor debe ser mayor que cero.");
        return false;
    }

    if (input.id === "txtSueldoBase") {
        if (cantidad < 1) {
            setError(input, "Salario mínimo: 1.");
            return false;
        }
        if (cantidad > 99999.99) {
            setError(input, "Salario máximo: 99,999.99.");
            return false;
        }
    }

    if (input.id === "txtPrecio") {
        if (cantidad < 0.5) {
            setError(input, "Precio mínimo: 0.50.");
            return false;
        }
        if (cantidad > 99999.99) {
            setError(input, "Precio máximo: 99,999.99.");
            return false;
        }
    }

    setError(input, "");
    return esValido;
}

function validarFormulario() {
    const campos = [
        document.getElementById("txtSueldoBase"),
        document.getElementById("txtVentas"),
        document.getElementById("txtPrecio"),
    ];
    let todoBien = true;

    campos.forEach(campo => {
        const valido = validarInput(campo);
        if (!valido) {
            todoBien = false;
        }
    });

    return todoBien;
}

function calcular() {
    if (!validarFormulario()) {
        return;
    }

    const sueldoBase = parseFloat(document.getElementById("txtSueldoBase").value.trim());
    const numeroVentas = parseInt(document.getElementById("txtVentas").value.trim(), 10);
    const PrecioProducto = parseFloat(document.getElementById("txtPrecio").value.trim());

    const comision = calcularComision(numeroVentas, PrecioProducto);
    const total = sueldoBase + comision;

    document.getElementById("spSueldoBase").textContent = sueldoBase.toFixed(2);
    document.getElementById("spComision").textContent = comision.toFixed(2);
    document.getElementById("spTotal").textContent = total.toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    const inputs = [
        document.getElementById("txtSueldoBase"),
        document.getElementById("txtVentas"),
        document.getElementById("txtPrecio"),
    ];

    inputs.forEach(input => {
        if (input) {
            input.addEventListener("blur", function () {
                validarInput(this);
            });
        }
    });
});