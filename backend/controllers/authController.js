// controllers/authController.js
// Logica de negocio de los servicios de registro e inicio de sesion.

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

/**
 * Servicio de REGISTRO.
 * Recibe nombre, correo y password. Verifica que el correo no exista,
 * cifra la contrasena y guarda el usuario en la base de datos.
 *
 * Ruta: POST /api/auth/registro
 */
const registrar = async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        // Verifica que el correo no este registrado previamente
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
            return res.status(409).json({
                ok: false,
                mensaje: 'El correo ya se encuentra registrado'
            });
        }

        // Cifra la contrasena antes de guardarla (nunca en texto plano)
        const salt = await bcrypt.genSalt(10);
        const passwordCifrada = await bcrypt.hash(password, salt);

        // Crea y guarda el nuevo usuario
        const nuevoUsuario = new Usuario({
            nombre,
            correo,
            password: passwordCifrada
        });
        await nuevoUsuario.save();

        return res.status(201).json({
            ok: true,
            mensaje: 'Usuario registrado satisfactoriamente',
            usuario: {
                id: nuevoUsuario._id,
                nombre: nuevoUsuario.nombre,
                correo: nuevoUsuario.correo
            }
        });
    } catch (error) {
        // Manejo de errores: evita la finalizacion abrupta del programa
        console.error('Error en el registro:', error.message);
        return res.status(500).json({
            ok: false,
            mensaje: 'Error interno del servidor'
        });
    }
};

/**
 * Servicio de INICIO DE SESION.
 * Recibe correo y password. Si la autenticacion es correcta devuelve un
 * mensaje satisfactorio y un token; en caso contrario, devuelve error.
 *
 * Ruta: POST /api/auth/login
 */
const iniciarSesion = async (req, res) => {
    try {
        const { correo, password } = req.body;

        // Busca el usuario por correo
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Error en la autenticacion: credenciales incorrectas'
            });
        }

        // Compara la contrasena enviada con la almacenada (cifrada)
        const passwordValida = await bcrypt.compare(password, usuario.password);
        if (!passwordValida) {
            return res.status(401).json({
                ok: false,
                mensaje: 'Error en la autenticacion: credenciales incorrectas'
            });
        }

        // Genera un token JWT valido por 1 hora
        const token = jwt.sign(
            { id: usuario._id, correo: usuario.correo },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            ok: true,
            mensaje: 'Autenticacion satisfactoria',
            token,
            usuario: {
                id: usuario._id,
                nombre: usuario.nombre,
                correo: usuario.correo
            }
        });
    } catch (error) {
        console.error('Error en el inicio de sesion:', error.message);
        return res.status(500).json({
            ok: false,
            mensaje: 'Error interno del servidor'
        });
    }
};

module.exports = { registrar, iniciarSesion };
