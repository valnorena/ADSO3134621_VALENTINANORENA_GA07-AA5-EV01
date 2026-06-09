// middlewares/validaciones.js
// Middlewares que verifican los datos enviados por el cliente ANTES de
// llegar a la logica de negocio. Cumplen el indicador "Realiza las
// validaciones de verificacion correctamente" de la lista de chequeo.

/**
 * Expresion regular sencilla para validar el formato de un correo
 * electronico (texto@texto.dominio).
 */
const FORMATO_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida los datos del registro: nombre, correo y contrasena.
 * Si algun dato es invalido responde con codigo 400 (Bad Request).
 */
const validarRegistro = (req, res, next) => {
    const { nombre, correo, password } = req.body;

    // Verifica que los campos existan y no esten vacios
    if (!nombre || !correo || !password) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Los campos nombre, correo y password son obligatorios'
        });
    }

    // Verifica el formato del correo
    if (!FORMATO_CORREO.test(correo)) {
        return res.status(400).json({
            ok: false,
            mensaje: 'El formato del correo no es valido'
        });
    }

    // Verifica la longitud minima de la contrasena
    if (password.length < 6) {
        return res.status(400).json({
            ok: false,
            mensaje: 'La contrasena debe tener al menos 6 caracteres'
        });
    }

    // Si todo es correcto, continua hacia el controlador
    next();
};

/**
 * Valida los datos del inicio de sesion: correo y contrasena.
 */
const validarLogin = (req, res, next) => {
    const { correo, password } = req.body;

    if (!correo || !password) {
        return res.status(400).json({
            ok: false,
            mensaje: 'Debe enviar el correo y la contrasena'
        });
    }

    next();
};

module.exports = { validarRegistro, validarLogin };
