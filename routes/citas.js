const express = require('express');
const router = express.Router();

const Cita = require('../models/cita');
const Profesional = require('../models/Profesional');

// Endpoint para procesar la creación de una nueva cita
router.post('/citas', async (req, res) => {
    const { usuario, profesional, fecha } = req.body;

    // Crear instancia del modelo y persistir los datos en la base de datos
    const nuevaCita = new Cita({ usuario, profesional, fecha });
    await nuevaCita.save();

    // Redirección al panel principal tras el registro exitoso
    res.redirect('/dashboard');
});

// Obtener el listado completo de citas registradas
router.get('/citas', async (req, res) => {
    // Consulta a la colección de citas y retorno en formato JSON
    const citas = await Cita.find();
    res.json(citas);
});

// Obtener la lista de profesionales disponibles
router.get('/profesionales', async (req, res) => {
    // Recuperar todos los registros de la colección de profesionales
    const profesionales = await Profesional.find();
    res.json(profesionales);
});

module.exports = router;