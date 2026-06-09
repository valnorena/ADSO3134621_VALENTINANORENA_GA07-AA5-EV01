// models/Usuario.js
// Definicion del esquema (modelo) de la entidad Usuario.

const mongoose = require('mongoose');

/**
 * Esquema de Usuario.
 * Representa a la persona que se registra e inicia sesion en el sistema.
 * - correo: identificador unico de acceso.
 * - password: se almacena cifrada (nunca en texto plano).
 */
const usuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: [true, 'El nombre es obligatorio'],
            trim: true
        },
        correo: {
            type: String,
            required: [true, 'El correo es obligatorio'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, 'La contrasena es obligatoria']
        }
    },
    {
        // Agrega automaticamente las fechas de creacion y actualizacion
        timestamps: true
    }
);

module.exports = mongoose.model('Usuario', usuarioSchema);
