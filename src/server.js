require('dotenv').config();
const express = require('express');
const path = require('path');

// 1. Inicializamos la aplicación de Express
const app = express();

// 2. Definimos el puerto en el que correrá nuestro servidor
const PORT = process.env.PORT || 3000;

// 3. Middlewares: Configurar Express para entender archivos estáticos (CSS, JS, imágenes)
// Todos los archivos de la carpeta "public" estarán disponibles directamente.
// Así, el HTML puede usar href="/assets/css/...".
app.use(express.static(path.join(__dirname, '../public')));

// 4. Rutas: ¿Qué pasa cuando entran a la página principal?
app.get('/', (req, res) => {
    // Cuando el usuario entra a la raíz ("/") le enviamos el archivo de login.
    res.sendFile(path.join(__dirname, '../public/views/authenticacion.html'));
});

// 5. Encendemos el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
