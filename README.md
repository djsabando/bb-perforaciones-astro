B&B Perforaciones — Landing (Astro + Tailwind)

Landing page rápida y responsive para B&B Perforaciones, construida con Astro
 y Tailwind CSS.
Optimizada para SEO básico, buenas métricas Core Web Vitals y mantenimiento sencillo por un único responsable.



🧱 Stack

Astro (Island architecture, sin JS innecesario)

Tailwind CSS (utilidades de diseño y theme)

Iconos SVG puros (sin dependencias)

Imágenes estáticas (sirve todo desde public/)



▶️ Desarrollo local

Requisitos: Node 18+ y npm

# instalar deps
npm i

# entorno de desarrollo
npm run dev

# build de producción
npm run build

# previsualizar el build
npm run preview



🗂️ Estructura del proyecto
.
├── public/
│   ├── img/
│   │   ├── galeria/            # imágenes de la galería
│   │   └── clientes/           # logos de clientes (PNG/SVG)
│   ├── favicon.svg             # ícono principal
│   └── og-cover.jpg            # imagen OG para redes
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Servicios.astro
│   │   ├── Clientes.astro
│   │   ├── Galeria.astro
│   │   └── WhatsAppFloat.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md


🚀 Deploy

Funciona out-of-the-box en Vercel, Netlify o cualquier hosting estático.

Build: npm run build

Output: carpeta dist/

Adaptador: estático por defecto (no se necesita servidor Node).



🧩 Contribuir / mantenimiento

Crea rama: feat/xxx o fix/xxx.

npm run dev y prueba en desktop + móvil.

Asegúrate de no romper el encuadre del Hero ni el comportamiento de los CTAs.

Sube imágenes optimizadas (WebP/JPG progresivo, PNG transparente si necesitas fondo).


