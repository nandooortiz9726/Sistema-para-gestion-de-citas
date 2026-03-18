const mongoose = require("mongoose");
require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔥 Conexión a MongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/citas_medicas")
  .then(() => console.log("✅ Mongo conectado"))
  .catch(err => console.log(err));

// 🔥 Middlewares (SOLO UNA VEZ)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 🔥 Archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// 🔥 Ruta principal (HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

app.get('/auth', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/authenticacion.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/dashboard.html'));
});

// 🔥 Rutas separadas (BUENA PRÁCTICA)
const authRoutes = require("../routes/auth");
app.use("/api", authRoutes);

// 🔥 Servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

const citasRoutes = require("../routes/citas");
app.use("/api", citasRoutes);