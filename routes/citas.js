const express = require('express');
const router = express.Router();

const Cita = require('../models/cita');
const Profesional = require('../models/Profesional');


// 📅 CREAR CITA
router.post('/citas', async (req, res) => {
    const { usuario, profesional, fecha } = req.body;

    const nuevaCita = new Cita({ usuario, profesional, fecha });
    await nuevaCita.save();

    res.redirect('/dashboard');
});


// 📋 VER CITAS
router.get('/citas', async (req, res) => {
    const citas = await Cita.find();
    res.json(citas);
});


// 👨‍⚕️ VER PROFESIONALES
router.get('/profesionales', async (req, res) => {
    const profesionales = await Profesional.find();
    res.json(profesionales);
});

module.exports = router;