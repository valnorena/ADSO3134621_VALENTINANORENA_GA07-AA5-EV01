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
devuelve un token `JWT`. El proyecto incluye un frontend en **React** que consume la API.

## Tecnologías

- Node.js + Express (servidor y rutas)
- MongoDB + Mongoose (persistencia)
- bcryptjs (cifrado de contraseñas)
- jsonwebtoken (token de sesión)
- React (frontend)

## Requisitos previos

- Node.js instalado (`node -v`)
- MongoDB Community Server en ejecución
- Tener dos terminales disponibles (una para backend, otra para frontend)

## Instalación y ejecución

### Backend

```bash
cd backend
npm install            # instala las dependencias
cp .env.example .env   # crea el archivo de configuración
npm start              # inicia el servidor en http://localhost:4000
```

### Frontend

```bash
cd frontend
npm install            # instala las dependencias
npm start              # abre la app en http://localhost:3000
```

## Endpoints

| Método | Ruta                  | Descripción                   |
|--------|-----------------------|-------------------------------|
| POST   | `/api/auth/registro`  | Registra un nuevo usuario     |
| POST   | `/api/auth/login`     | Inicia sesión y entrega token |

### Ejemplo de body (registro)

```json
{
  "nombre": "Valentina Noreña",
  "correo": "valentina@correo.com",
  "password": "123456"
}
```

## Versionamiento (Git)

```bash
git init
git add .
git commit -m "Servicio de registro e inicio de sesion AA5-EV01"
git remote add origin https://github.com/valnorena/ADSO3134621_VALENTINANORENA_GA07-AA5-EV01
git branch -M main
git push -u origin main
```