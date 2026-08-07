---
title: "Portfolio Personal & Docente"
description: "Plataforma web desarrollada con Astro para mostrar proyectos de software, publicaciones técnicas y recursos didácticos con una arquitectura modular y accesible."
techStack: ["Astro", "HTML5", "CSS3", "JavaScript", "GitHub Pages"]
featured: true
githubUrl: "https://github.com/RafaelJNR/portfolio"
liveUrl: "https://rafaeljnr.github.io/portfolio/"
images: [
  "/images/portfolio/1.png",
  "/images/portfolio/2.png",
  "/images/portfolio/3.png"
]
---

## Sobre el proyecto

**Portfolio Personal & Docente** es una plataforma web desarrollada desde cero para consolidar mi perfil como **Desarrollador Full Stack** e **Instructor de Informática**. El objetivo principal es ofrecer una experiencia de usuario fluida, rápida y accesible, sirviendo tanto de escaparate profesional como de hub educativo donde comparto contenido técnico y proyectos de software.

Está construido sobre **Astro 7.0**, aprovechando su arquitectura basada en islas (Island Architecture) para ofrecer un rendimiento óptimo con cero JavaScript innecesario en el lado del cliente, combinando un diseño limpio y adaptativo.

## Características principales

* **Arquitectura Ultra Rápida (Zero JS por defecto):** Carga prácticamente instantánea gracias a la generación de sitios estáticos (SSG) de Astro.
* **Sistema de Tema Claro/Oscuro:** Preferencia visual persistente mediante `localStorage` y variables CSS nativas sin desprendimiento de parpadeo (FOUC).
* **Colecciones de Contenido (Content Collections):** Gestión tipada y estructurada para las publicaciones del blog y la lista de proyectos con validación de esquemas en build-time.
* **Buscador Dinámico e Interactivo:** Script ligero para filtrado en tiempo real de artículos e ítems por título o tecnología sin dependencias pesadas.
* **Componente Carrusel & Lightbox:** Visualizador de imágenes adaptativo e interactivo para examinar las capturas de pantalla de los proyectos en detalle.
* **Despliegue Multi-Ruta Robusto:** Arquitectura configurada dinámicamente con `import.meta.env.BASE_URL` para garantizar la compatibilidad perfecta tanto en entornos locales como en despliegues en subcarpetas de GitHub Pages.