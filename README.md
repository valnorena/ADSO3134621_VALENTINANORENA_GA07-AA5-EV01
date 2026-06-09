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

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo .env a partir del ejemplo
copy .env.example .env      # Windows
# cp .env.example .env      # Linux / Mac

# 3. Iniciar el servidor
npm start
```

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

## Versionamiento (Git)

```bash
git init
git add .
git commit -m "Servicio de registro e inicio de sesion AA5-EV01"
git remote add origin <URL_DEL_REPOSITORIO>
git push origin main
```

> Recuerda reemplazar `<URL_DEL_REPOSITORIO>` por el enlace de tu repositorio
> en GitHub y añadir el enlace en la carpeta de entrega.
