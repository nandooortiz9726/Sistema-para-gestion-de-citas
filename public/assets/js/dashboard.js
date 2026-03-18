const contenedor = document.getElementById('contenido');

// 👨‍⚕️ MOSTRAR DOCTORES
async function mostrarProfesionales() {
    const res = await fetch('/api/profesionales');
    const data = await res.json();

    contenedor.innerHTML = "<h2>Profesionales</h2>";

    data.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <h3>${p.nombre}</h3>
                <p>${p.especialidad}</p>
            </div>
        `;
    });
}

// 📅 MOSTRAR CITAS
async function mostrarCitas() {
    const res = await fetch('/api/citas');
    const data = await res.json();

    contenedor.innerHTML = "<h2>Mis citas</h2>";

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

// 📝 FORMULARIO DE CITA
async function mostrarFormulario() {
    const res = await fetch('/api/profesionales');
    const profesionales = await res.json();

    let opciones = "";
    profesionales.forEach(p => {
        opciones += `<option value="${p.nombre}">${p.nombre}</option>`;
    });

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