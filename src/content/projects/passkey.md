---
title: "PassKey"
description: "PassKey es una aplicación de escritorio multiplataforma enfocada en la gestión segura y local de contraseñas. Diseñada bajo un enfoque de seguridad Zero-Knowledge, la aplicación garantiza que la información sensible del usuario almacenándose de forma persistente y cifrada localmente en el equipo del usuario."
techStack: ['React', 'CSS3', 'TypeScript', 'Electron', 'Node.js', 'SQLite']
featured: true
images: [
  "/images/passkey/1.png",
  "/images/passkey/2.png",
  "/images/passkey/3.webp"
]
---

## Sobre el proyecto

* 🔒 **Arquitectura Zero-Knowledge:** La contraseña maestra nunca se almacena en disco ni se envía a ningún lugar.
* 🛡️ **Cifrado Fuerte de Extremo a Extremo:** Credenciales protegidas mediante estándares criptográficos de nivel bancario.
* 💾 **Almacenamiento Local Autónomo:** Base de datos SQLite integrada vía WebAssembly, sin dependencia de servicios de terceros.
* 🎨 **Interfaz Moderna e Intuitiva:** Desarrollada con React 19 y optimizada para la productividad en escritorio.
* ⚡ **Rendimiento Nativo:** Compilada y empaquetada como ejecutable nativo para Windows (`.exe`).

## Características principales

La arquitectura criptográfica de PassKey combina funciones de derivación de claves de última generación con cifrado simétrico autenticado:

### 1. Derivación de Clave Maestra (KDF): Argon2id
* **Función:** Procesa la contraseña maestra ingresada por el usuario para generar la clave criptográfica derivada.
* **Justificación Técnica:** Argon2id es el algoritmo ganador de la *Password Hashing Competition*. Es altamente resistente tanto a ataques de fuerza bruta por CPU/GPU como a ataques basados en hardware dedicado (ASICs y FPGAs), al exigir un consumo configurable de memoria y tiempo para computar el hash.

### 2. Cifrado de Credenciales: AES-256-GCM
* **Algoritmo:** *Advanced Encryption Standard* con clave de 256 bits.
* **Modo de Operación:** *Galois/Counter Mode* (GCM).
* **Seguridad Autenticada:** Aporta cifrado autenticado (*Authenticated Encryption with Associated Data* - AEAD). No solo garantiza la confidencialidad de los registros, sino también la integridad de los datos (detecta de inmediato si la base de datos o un registro ha sido alterado o manipulado).
* **Vector de Inicialización (IV):** Generación aleatoria única por registro mediante `crypto.randomBytes()`.

## 🛠️ Stack Tecnológico (*Tech Stack*)

| Capa / Módulo | Tecnología | Descripción y Función |
| :--- | :--- | :--- |
| **Runtime & Shell** | **Electron** | Entorno de ejecución para construir la aplicación de escritorio nativa. |
| **Frontend Framework** | **React 19** | Biblioteca para la creación de la interfaz de usuario modular, reactiva y fluida. |
| **Lenguaje** | **TypeScript** | Tipado estático estricto en todos los procesos (Main, Preload y Renderer) para prevenir errores en tiempo de ejecución. |
| **Build Tool & Bundler** | **Vite** | Empaquetador ultra rápido para el servidor de desarrollo y la compilación optimizada de producción. |
| **Base de Datos** | **SQL.js (SQLite + WASM)** | Motor relacional ligero en memoria/local, persistido localmente como archivo de base de datos. |
| **Criptografía** | **hash-wasm + Node.js Crypto** | `hash-wasm` para ejecutar Argon2id compilado a WebAssembly con alto rendimiento, y `node:crypto` nativo para AES-256-GCM. |
| **Empaquetado** | **electron-builder** | Generación de instaladores nativos para Windows (`.exe` vía NSIS). |