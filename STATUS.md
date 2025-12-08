# Estado actual de la versión estática

## Qué funciona
- Navegación entre Inicio, Portafolio, ChatBot, CV y CPanel con títulos dinámicos y modo claro/oscuro, todo gestionado desde el script embebido en `index.html`.
- Portafolio con filtros por categoría, banner de acceso al CV interactivo y modales de proyecto, además de sección “Fraguas de ideas” y cargas iniciales guardadas en `localStorage`.
- Panel de Control protegido con contraseña que permite crear/editar proyectos, subir archivos locales como base64 (png/jpg, video o pdf), programar publicaciones y añadir secciones (texto, brief, flowchart, plan de medios, media y anexos).

## Pendientes / Limitaciones
- La vista “ChatBot” sigue mostrando solo un placeholder; no existe lógica de conversación ni conexión a servicio externo en la versión estática actual.
- Las cargas de archivos y proyectos se guardan en `localStorage`, por lo que no persisten si se borra la caché del navegador ni se sincronizan entre dispositivos.
- La programación de publicaciones depende de que la página permanezca abierta (el cron usa `setInterval` en el cliente) y no ejecuta tareas en segundo plano si se cierra el navegador.
