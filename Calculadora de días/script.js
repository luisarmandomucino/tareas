function calcularDia() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);

    const fecha = new Date(anio, mes - 1, dia);
    const diaSemana = fecha.getDay(); 
    let resultado = '';

    switch (diaSemana) {
        case 0:
            resultado = 'Domingo (No laboral)';
            break;
        case 1:
            resultado = 'Lunes (Día laboral)';
            break;
        case 2:
            resultado = 'Martes (Día laboral)';
            break;
        case 3:
            resultado = 'Miércoles (Día laboral)';
            break;
        case 4:
            resultado = 'Jueves (Día laboral)';
            break;
        case 5:
            resultado = 'Viernes (Día laboral)';
            break;
        case 6:
            resultado = 'Sábado (No laboral)';
            break;
        default:
            resultado = 'Fecha inválida';
            break;
    }
    

    document.getElementById('resultado').textContent = resultado;
}

document.getElementById('calcular').addEventListener('click', calcularDia);
