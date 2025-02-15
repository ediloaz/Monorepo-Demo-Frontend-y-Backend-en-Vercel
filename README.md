# 🚀 Monorepo Demo: Frontend & Backend en Vercel

Este repositorio contiene un proyecto de prueba que integra un **frontend** en React (configurado con Vite) y un **backend** en Express, gestionados en un monorepo. El objetivo es demostrar la funcionalidad de despliegue y la comunicación entre ambos a través de Vercel.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Estructura-del-Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts-Disponibles](#-scripts-disponibles)
- [Configuración-de-Variables-de-Entorno](#-configuración-de-variables-de-entorno)
- [Despliegue-en-Vercel](#-despliegue-en-vercel)
- [Tecnologías-Utilizadas](#-tecnologías-utilizadas)
- [Contacto](#-contacto)

## 🔍 Características

- **Frontend en React con Vite:** Desarrollo rápido y eficiente con una experiencia de desarrollo moderna.
- **Backend en Express:** API REST que devuelve el timestamp, la IP y la región de la petición.
- **Monorepo:** Gestión centralizada del código para facilitar la integración y el despliegue.
- **Despliegue en Vercel:** Automatización del build y despliegue en una plataforma escalable.
- **Configuración Personalizable:** Uso de variables de entorno para definir la URL del backend y otros parámetros.

## 🗂️ Estructura del Proyecto

```plaintext
mi-proyecto
├── frontend        # Aplicación React (Vite)
├── backend         # API Express
└── .gitignore

## 💻 Instalación

### Requisitos

- Node.js (>= 14.x)
- npm o yarn

### Pasos para instalar

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tuusuario/mi-proyecto.git
   cd mi-proyecto

2. **Instala las dependencias del Frontend:**

bash
Copy
cd frontend
npm install


3. **Instala las dependencias del Backend:**

bash
Copy
cd ../backend
npm install
🚀 Scripts Dispo

## 🚀 Scripts Disponibles

### Frontend

Desde la carpeta `frontend`, puedes ejecutar:

- **`npm run dev`**: Inicia el servidor de desarrollo.
- **`npm run build`**: Compila la aplicación para producción.
- **`npm run lint`**: Ejecuta ESLint para revisar el código.
- **`npm run preview`**: Previsualiza la build de producción localmente.

### Backend

Desde la carpeta `backend`, ejecuta:

- **`node index.js`** o **`npm start`**: Inicia el servidor Express.

## 🔧 Configuración de Variables de Entorno

### Frontend

Crea un archivo `.env` en la carpeta `frontend` y define la URL del backend:

```env
VITE_BACKEND_URL=http://localhost:3000/api
Nota: Las variables de entorno deben tener el prefijo VITE_ para ser accesibles en el código de Vite

### Backend
Si es necesario, crea un archivo `.env` en la carpeta backend para configurar otras variables. Importante: No subas estos archivos al repositorio; asegúrate de que estén incluidos en el .gitignore.

## 🌐 Despliegue en Vercel

Para desplegar este proyecto en Vercel, sigue estos pasos:

1. **Conecta el repositorio a Vercel:**  
   Ingresa al dashboard de Vercel y conecta tu repositorio de GitHub.

2. **Configura las variables de entorno:**  
   Define las variables (por ejemplo, `VITE_BACKEND_URL`) en el panel de Vercel, ya que los archivos `.env` no se subirán.

3. **Configura el Monorepo (opcional):**  
   Si usas un `vercel.json` en la raíz, asegúrate de que indique cómo construir y enrutar cada parte. Un ejemplo básico podría ser:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "frontend/package.json",
         "use": "@vercel/static-build",
         "config": { "distDir": "dist" }
       },
       {
         "src": "backend/index.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       { "src": "/api/(.*)", "dest": "backend/index.js" },
       { "src": "/(.*)", "dest": "frontend/dist/$1" }
     ]
   }

4. **Realiza un commit y push:**
Una vez configurado, sube tus cambios a GitHub para que Vercel inicie el proceso de despliegue automáticamente.


## 🛠️ Tecnologías Utilizadas
**Frontend**: React, Vite, JavaScript (ESM)
**Backend**: Node.js, Express, Helmet, CORS, geoip-lite
**Despliegue**: Vercel