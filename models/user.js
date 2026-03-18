const mongoose = require("mongoose");

// Defino el esquema de usuarios del sistema
const userSchema = new mongoose.Schema({

  // Nombre del usuario
  name: String,

  // Correo electrónico (debe ser único, no se pueden repetir)
  email: { type: String, unique: true },

  // Contraseña del usuario (por ahora sin encriptar)
  password: String,

  // Rol del usuario dentro del sistema
  // Puede ser paciente o doctor
  role: {
    type: String,
    enum: ["patient", "doctor"], // solo permite estos valores
    default: "patient" // por defecto todos se registran como paciente
  }
});

// Exporto el modelo para usarlo en login, registro, etc.
module.exports = mongoose.model("User", userSchema);