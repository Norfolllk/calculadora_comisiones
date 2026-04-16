function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente) {
    let valortexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valortexto);
    return valorFloat;
}