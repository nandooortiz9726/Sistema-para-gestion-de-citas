const mongoose = require("mongoose");
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos local
mongoose.connect("mongodb://127.0.0.1:27017/citas_medicas")
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch(err => console.log("Error de conexión:", err));

// Middlewares para el parseo de datos en el body de las peticiones
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos (CSS, JS, Imágenes) desde la carpeta public
app.use(express.static(path.join(__dirname, '../public')));

// Definición de rutas para servir las vistas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/authenticacion.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/dashboard.html'));
});

// Importación e inyección de rutas de autenticación
const authRoutes = require("../routes/auth");
app.use("/api", authRoutes);

// Importación e inyección de rutas para la gestión de citas
const citasRoutes = require("../routes/citas");
app.use("/api", citasRoutes);

// Inicialización del servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto: ${PORT}`);
});