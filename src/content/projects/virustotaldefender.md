---
title: "Virus Total Defender"
description: "Virus Total Defender es una aplicación de escritorio multiplataforma que aprovecha la API de VirusTotal para analizar archivos y hashes locales en busca de malware y amenazas en tiempo real."
techStack: ['React', 'CSS3', 'JavaScript', 'Electron', 'Node.js', 'Vite']
featured: true
githubUrl: "https://github.com/RafaelJNR/VirusTotalDesktop"
images: [
  "/images/vtd/1.png",
  "/images/vtd/2.png",
  "/images/vtd/3.png"
]
---

## Sobre el proyecto

* 🛡️ **Análisis Local por Hashes (SHA-256):** Calcula la firma digital criptográfica de los archivos directamente en la máquina del usuario antes de consultar VirusTotal, optimizando cuota y ancho de banda.
* 📊 **Inspector de Motores Antivirus:** Desglose visual detallado de los veredictos emitidos por decenas de motores de ciberseguridad líderes (Microsoft, Kaspersky, Avast, etc.).
* 🔑 **Gestión Descentralizada de API Key:** Cada usuario configura su propia clave de API de VirusTotal, almacenada de forma local y privada en su entorno.
* 🎨 **Interfaz Reactiva y Moderna:** Diseñada con React y CSS3 nativo para ofrecer una experiencia de escritorio fluida, minimalista y libre de fricciones.
* ⚡ **Arquitectura Segura y Rendimiento:** Separación de procesos mediante `preload.js` y `contextBridge` de Electron, empaquetada como ejecutable nativo para Windows (`.exe`).

## Características principales

La arquitectura de TotalDefender combina la seguridad del cálculo criptográfico local con el consumo seguro de servicios externos:

### 1. Hash Criptográfico en Proceso Principal (SHA-256)
* **Función:** Generación de la huella digital única de cualquier archivo seleccionado mediante streams de lectura directa en Node.js.
* **Justificación Técnica:** Permite realizar consultas previas a la base de datos de VirusTotal únicamente enviando la cadena hash. Esto evita subir archivos completos innecesariamente a la red, protege la privacidad del archivo y reduce a cero el consumo de ancho de banda innecesario.

### 2. Aislamiento de Contexto y Puente IPC
* **Mecanismo:** Comunicación asíncrona mediante `ipcRenderer` y `ipcMain` mediada por `contextBridge`.
* **Seguridad:** El proceso de renderizado (React) no tiene acceso directo a Node.js ni al sistema de archivos del sistema operativo, blindando la aplicación contra inyecciones de código malicioso y cumpliendo las directrices oficiales de seguridad de Electron.

## 🛠️ Stack Tecnológico (*Tech Stack*)

| Capa / Módulo | Tecnología | Descripción y Función |
| :--- | :--- | :--- |
| **Runtime & Shell** | **Electron** | Entorno para compilar y ejecutar la aplicación de escritorio nativa con acceso controlado al sistema. |
| **Frontend Framework** | **React** | Construcción de una interfaz declarativa, modular y basada en componentes para la visualización del estado del análisis. |
| **Lenguaje** | **JavaScript (ES Modules)** | Desarrollo integral del backend de Electron y del frontend reactivo con sintaxis moderna. |
| **Build Tool & Bundler** | **Vite** | Entorno de desarrollo ultrarrápido y empaquetado optimizado del código cliente. |
| **Servicio de Ciberseguridad** | **VirusTotal API v3** | Integración REST para la consulta automatizada de reportes de detección de malware y análisis heurístico. |
| **Estilos** | **CSS3 Nativo** | Maquetación responsiva, tarjetas de métricas visuales y diseño personalizado. |
| **Empaquetado** | **electron-builder** | Generación y distribución de ejecutables nativos para Windows (Instalador NSIS y versión portable `.exe`). |