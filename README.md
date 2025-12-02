<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Resumen en español

 Este proyecto se transformó en una página estática (HTML + Tailwind + JavaScript) que mantiene todas las secciones principales: inicio, portafolio con filtros, aviso del chatbot separado y un panel de control protegido por contraseña para agregar proyectos. Se mejoró la navegación con desplazamiento al inicio al cambiar de vista, se dejó activo el filtro "Todos" para mostrar proyectos desde el arranque y los modales ahora se pueden cerrar con clic en el fondo o con la tecla Escape para una mejor usabilidad.

## Cómo ver la página

1. Abre el archivo `index.html` directamente en tu navegador (doble clic o arrastrándolo a la ventana del navegador).
2. Si prefieres un servidor local, desde la raíz del proyecto ejecuta:
   ```bash
   python -m http.server 8000
   ```
   Luego visita http://localhost:8000/index.html en tu navegador.
