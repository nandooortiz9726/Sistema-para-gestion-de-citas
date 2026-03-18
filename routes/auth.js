const express = require('express');
const router = express.Router();
const Usuario = require('../models/User');

// Endpoint para el registro de nuevos usuarios
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Verificar si el correo ya está en la base de datos para evitar duplicados
        const existe = await Usuario.findOne({ email });

        if (existe) {
            return res.send("El usuario ya existe");
        }

        // Instanciar el nuevo modelo con los datos del request
        const nuevoUsuario = new Usuario({ name, email, password });
        
        // Persistir el usuario en la base de datos
        await nuevoUsuario.save();

        res.send("Usuario registrado correctamente");

    } catch (error) {
        // Log del error para debugging y respuesta genérica al cliente
        console.log(error);
        res.send("Error en el registro");
    }
});

// Endpoint para autenticación de usuarios existentes
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar coincidencia exacta de credenciales
        const usuario = await Usuario.findOne({ email, password });

        if (!usuario) {
            return res.send("Credenciales incorrectas");
        }

        // Si los datos son correctos, redirigir al panel principal
        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        res.send("Error en el login");
    }
});

module.exports = router;