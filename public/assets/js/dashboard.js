const contenedor = document.getElementById('contenido');

// Obtener y mostrar la lista de doctores desde el backend
async function mostrarProfesionales() {
    // Petición a la API y conversión de la respuesta a JSON
    const res = await fetch('/api/profesionales');
    const data = await res.json();

    // Reiniciar el contenedor principal con el título
    contenedor.innerHTML = "<h2>Profesionales</h2>";

    // Recorrer los datos para insertar el HTML de cada card
    data.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <h3>${p.nombre}</h3>
                <p>${p.especialidad}</p>
            </div>
        `;
    });
}

// Cargar el historial de citas del usuario
async function mostrarCitas() {
    const res = await fetch('/api/citas');
    const data = await res.json();

    contenedor.innerHTML = "<h2>Mis citas</h2>";

    // Generar la visualización de las citas y su estado actual
    data.forEach(c => {
        contenedor.innerHTML += `
            <div class="card">
                <p>${c.profesional}</p>
                <p>${c.fecha}</p>
                <p>${c.estado}</p>
            </div>
        `;
    });
}

// Renderizar el formulario de agendamiento de forma dinámica
async function mostrarFormulario() {
    // Necesito traer los profesionales para llenar el selector
    const res = await fetch('/api/profesionales');
    const profesionales = await res.json();

    // Construir los options del select a partir de los datos recibidos
    let opciones = "";
    profesionales.forEach(p => {
        opciones += `<option value="${p.nombre}">${p.nombre}</option>`;
    });

    // Insertar el formulario completo con las opciones cargadas
    contenedor.innerHTML = `
        <h2>Agendar cita</h2>

        <form action="/api/citas" method="POST">
            <input type="text" name="usuario" placeholder="Tu nombre" required>

            <select name="profesional">
                ${opciones}
            </select>

            <input type="date" name="fecha" required>

            <button type="submit">Agendar</button>
        </form>
    `;
}