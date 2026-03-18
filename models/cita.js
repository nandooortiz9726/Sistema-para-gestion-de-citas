const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
    usuario: String, // luego lo mejoramos con ID
    profesional: String,
    fecha: String,
    estado: {
        type: String,
        default: "pendiente"
    }
});

module.exports = mongoose.model('Cita', citaSchema);