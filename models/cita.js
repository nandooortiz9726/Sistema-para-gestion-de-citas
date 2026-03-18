const mongoose = require('mongoose');

// Defino el esquema de las citas que voy a guardar en Mongo
const citaSchema = new mongoose.Schema({

    // Nombre del usuario que agenda la cita
    // (más adelante la idea es usar un ID en vez de string)
    usuario: String,

    // Nombre del profesional con el que se agenda la cita
    profesional: String,

    // Fecha de la cita (por ahora como texto, luego se puede mejorar a tipo Date)
    fecha: String,

    // Estado de la cita
    // Por defecto siempre se crea como "pendiente"
    estado: {
        type: String,
        default: "pendiente"
    }
});

// Exporto el modelo para poder usarlo en las rutas (crear, listar, etc.)
module.exports = mongoose.model('Cita', citaSchema);