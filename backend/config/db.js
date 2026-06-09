// config/db.js
// Modulo encargado de establecer la conexion con la base de datos MongoDB.

const mongoose = require('mongoose');

/**
 * Establece la conexion con MongoDB usando la cadena definida en las
 * variables de entorno. Si la conexion falla, se detiene la aplicacion
 * para evitar que el servidor opere sin acceso a los datos.
 *
 * @returns {Promise<void>}
 */
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar con MongoDB:', error.message);
        // Finaliza el proceso con codigo de error (1)
        process.exit(1);
    }
};

module.exports = conectarDB;
