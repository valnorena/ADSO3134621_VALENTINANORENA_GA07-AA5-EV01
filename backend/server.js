// server.js
// Punto de entrada de la aplicacion. Configura Express, los middlewares
// globales, la conexion a la base de datos y monta las rutas.

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const conectarDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

// Inicializa la aplicacion de Express
const app = express();

// Conecta con la base de datos MongoDB
conectarDB();

// Middlewares globales
app.use(cors());            // Permite peticiones desde el frontend
app.use(express.json());    // Permite leer JSON en el body de las peticiones

// Ruta de prueba para verificar que el servidor esta activo
app.get('/', (req, res) => {
    res.json({ ok: true, mensaje: 'Servicio de autenticacion en linea' });
});

// Monta las rutas de autenticacion bajo el prefijo /api/auth
app.use('/api/auth', authRoutes);

// Levanta el servidor en el puerto configurado
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PORT}`);
});
