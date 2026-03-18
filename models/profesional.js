const mongoose = require('mongoose');

// Defino el esquema de los profesionales (doctores)
const profesionalSchema = new mongoose.Schema({

    // Nombre del profesional
    nombre: String,

    // Especialidad médica (ej: odontología, cardiología, etc.)
    especialidad: String,

    // Indica si el profesional está disponible para citas
    // true = disponible, false = no disponible
    disponible: Boolean
});

// Exporto el modelo para poder usarlo en las rutas
// (listar profesionales, crear, etc.)
module.exports = mongoose.model('Profesional', profesionalSchema);