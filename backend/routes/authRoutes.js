// routes/authRoutes.js
// Definicion de las rutas (endpoints) del servicio de autenticacion.

const express = require('express');
const router = express.Router();

const { registrar, iniciarSesion } = require('../controllers/authController');
const { validarRegistro, validarLogin } = require('../middlewares/validaciones');

// POST /api/auth/registro -> crea un nuevo usuario
router.post('/registro', validarRegistro, registrar);

// POST /api/auth/login -> autentica un usuario existente
router.post('/login', validarLogin, iniciarSesion);

module.exports = router;
