document.getElementById("formulario-busqueda").addEventListener("submit", function(event) {
    event.preventDefault();
    buscarEstudiante(document.getElementById("id-estudiante").value);
});

function buscarEstudiante(id) {
    let tablaResultados = document.getElementById("tabla-resultados").querySelector("tbody");
    let tablaPromedio = document.getElementById("tabla-promedio").querySelector("tbody");
    tablaResultados.innerHTML = ""; 
    tablaPromedio.innerHTML = ""; 

    let i = 0;
    let encontrado = false;

    if (datos.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'No hay datos',
            text: 'La lista está vacía.',
            confirmButtonText: 'Aceptar'
        });
        return;
    }

    while (i < datos.length) {
        if (datos[i][0] == id) {
            let fila = datos[i];
            let promedio = (parseFloat(fila[4]) + parseFloat(fila[5]) + parseFloat(fila[6]) + parseFloat(fila[7])) / 4;
            
            // Mostrar datos en la tabla de resultados
            tablaResultados.innerHTML = `<tr>${fila.map(campo => `<td>${campo}</td>`).join('')}<td>${promedio.toFixed(2)}</td></tr>`;
            
            // Mostrar promedio en la tabla de promedio
            tablaPromedio.innerHTML = `<tr><td>El promedio del estudiante con ID ${id} es ${promedio.toFixed(2)}</td></tr>`;

            encontrado = true;
            break;
        }
        i++;
    }
    
    if (!encontrado) {
        Swal.fire({
            icon: 'error',
            title: 'Estudiante no encontrado',
            text: `No se encontró ningún estudiante con el ID: ${id}`,
            confirmButtonText: 'Aceptar'
        });
    }
}
