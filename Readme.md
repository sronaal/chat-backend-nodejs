# 🧠 Backend Chat - Node.js

Este proyecto es el backend de una aplicación de chat en tiempo real, construido con **Node.js**, **Express** y **Socket.IO**, utilizando **MongoDB** como base de datos y soporte para autenticación JWT, subida de imágenes a Cloudinary y cifrado de contraseñas.

---

## 🚀 Características principales

- Autenticación de usuarios con JWT.
- Comunicación en tiempo real con Socket.IO.
- Subida de imágenes mediante Cloudinary.
- Hashing seguro de contraseñas con Bcrypt.
- Gestión de archivos multimedia con Multer.
- Conexión a base de datos MongoDB usando Mongoose.
- Middleware para logging de peticiones con Morgan.
- CORS habilitado para desarrollo frontend-backend desacoplado.

---

## 🛠 Tecnologías y librerías utilizadas

| Herramienta      | Propósito                                     |
|------------------|-----------------------------------------------|
| **Node.js**      | Entorno de ejecución JavaScript               |
| **Express**      | Framework web para la API REST                |
| **Socket.IO**    | Comunicación en tiempo real (WebSocket)       |
| **MongoDB**      | Base de datos NoSQL                           |
| **Mongoose**     | ODM para MongoDB                              |
| **JWT**          | Autenticación segura                          |
| **Bcrypt**       | Hashing de contraseñas                        |
| **Cloudinary**   | Almacenamiento de imágenes                    |
| **Multer**       | Manejo de archivos en peticiones              |
| **dotenv**       | Variables de entorno                          |
| **cors**         | Política de acceso cross-origin               |
| **morgan**       | Logging de peticiones HTTP                    |

---

PORT=3000
MONGO_URI=mongodb://localhost:27017/chatdb
JWT_SECRET=tu_clave_secreta
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret


---