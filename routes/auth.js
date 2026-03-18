const express = require('express');
const router = express.Router();
const Usuario = require('../models/User');

// 🔐 REGISTRO
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existe = await Usuario.findOne({ email });

        if (existe) {
            return res.send("El usuario ya existe");
        }

        const nuevoUsuario = new Usuario({ name, email, password });
        // console.log("ANTES DE GUARDAR");
        await nuevoUsuario.save();
        // console.log("DESPUÉS DE GUARDAR");

        res.send("Usuario registrado correctamente");

    } catch (error) {
        console.log(error);
        res.send("Error en el registro");
    }
});

// 🔐 LOGIN
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email, password });

        if (!usuario) {
            return res.send("Credenciales incorrectas");
        }

        res.redirect('/dashboard');

    } catch (error) {
        console.log(error);
        res.send("Error en el login");
    }
});

module.exports = router;