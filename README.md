# Servicio web de registro e inicio de sesión

**Evidencia:** GA7-220501096-AA5-EV01 — Diseño y desarrollo de servicios web (caso)
**Aprendiz:** Valentina Noreña Gómez
**Programa:** Análisis y Desarrollo de Software (3134621) — SENA

## Descripción

Servicio web (API REST) que expone dos operaciones de autenticación:

- **Registro** de un usuario (nombre, correo y contraseña).
- **Inicio de sesión**: recibe un usuario (correo) y una contraseña. Si la
  autenticación es correcta devuelve un mensaje de **autenticación satisfactoria**;
  en caso contrario, devuelve **error en la autenticación**.

Las contraseñas se almacenan cifradas con `bcryptjs` y el inicio de sesión
devuelve un token `JWT`.

## Tecnologías

- Node.js + Express (servidor y rutas)
- MongoDB + Mongoose (persistencia)
- bcryptjs (cifrado de contraseñas)
- jsonwebtoken (token de sesión)

## Requisitos previos

- Node.js instalado (`node -v`)
- MongoDB Community Server en ejecución (`mongod`)

El servidor queda disponible en: `http://localhost:4000`

## Endpoints

| Método | Ruta                  | Descripción                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/auth/registro`  | Registra un nuevo usuario    |
| POST   | `/api/auth/login`     | Inicia sesión y entrega token|

### Ejemplo de body (registro / login)

```json
{
  "nombre": "Valentina Noreña",
  "correo": "valentina@correo.com",
  "password": "123456"
}
```

## Instalación y ejecución

### Backend
cd backend
npm install            # instala las dependencias
cp .env.example .env   # crea el archivo de configuración
npm start              # inicia el servidor en http://localhost:4000

### Frontend
cd frontend
npm install            # instala las dependencias
npm start              # abre la app en http://localhost:3000