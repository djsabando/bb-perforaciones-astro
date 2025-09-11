# B&B Perforaciones — Landing (Astro + Tailwind)

Landing page rápida y responsive para **B&B Perforaciones**, construida con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).  
Optimizada para SEO básico, buen performance (Core Web Vitals) y mantenimiento sencillo.

![preview](./public/og-cover.jpg)

<p align="left">
  <a href="https://astro.build">Astro</a> ·
  <a href="https://tailwindcss.com">Tailwind CSS</a> ·
  <a href="#deploy">Deploy estático</a>
</p>

---

## Tabla de contenidos
- [Características](#características)
- [Stack](#stack)
- [Requisitos](#requisitos)
- [Desarrollo local](#desarrollo-local)
- [Build de producción](#build-de-producción)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Deploy](#deploy)
  - [cPanel / hosting compartido](#cpanel--hosting-compartido)
  - [Vercel / Netlify](#vercel--netlify)
- [SEO & Performance (checklist)](#seo--performance-checklist)
- [Contribuir / mantenimiento](#contribuir--mantenimiento)
- [Licencia](#licencia)

---

## Características
- ⚡ **Estático puro** (sin servidor Node en producción).
- 🧱 **Islands**: Astro solo hidrata cuando es necesario (sin JS extra).
- 🎨 **Tailwind** para utilidades y theme.
- 🖼️ **Imágenes optimizadas** (WebP/JPG; SVGs puros para íconos).
- 🔒 Configurable para HTTPS y cache vía `.htaccess` (hosting Apache).

---

## Stack
- **Astro** (output estático)
- **Tailwind CSS**
- **SVG Icons** (sin dependencias)
- **Imágenes estáticas** servidas desde `public/`

---

## Requisitos
- **Node 18+** y **npm**

---

## Desarrollo local
```bash
# Instalar dependencias
npm install

# Entorno de desarrollo
npm run dev

# Previsualizar el build
npm run preview

---

## Build de Producción
npm run build

---


## Estructura

```text
.
├── public/
│   ├── img/
│   │   ├── galeria/          # imágenes de la galería
│   │   └── clientes/         # logos de clientes (PNG/SVG)
│   ├── favicon.svg           # ícono principal
│   └── og-cover.jpg          # imagen OG para redes
├── src/
│   ├── components/           # Header, Hero, Servicios, Clientes, Galeria, WhatsAppFloat
│   ├── layouts/              # Layout.astro
│   ├── pages/                # index.astro
│   └── styles/               # globals.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md


## Deploy 

- npm run build → genera dist/

- Comprimir el contenido de dist/ en dist.zip

- Subir a cPanel en public_html/, extraer y asegurar permisos (carpetas 755, archivos 644)

- Opcional: .htaccess para forzar HTTPS y cache estática
  En Vercel/Netlify funciona directo con:

- Build Command: npm run build

- Output Directory: dist