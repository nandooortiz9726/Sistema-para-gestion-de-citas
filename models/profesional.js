const mongoose = require('mongoose');

const profesionalSchema = new mongoose.Schema({
    nombre: String,
    especialidad: String,
    disponible: Boolean
});

module.exports = mongoose.model('Profesional', profesionalSchema);