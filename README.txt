# B&B Perforaciones — Astro + Tailwind Starter (Brand Ready)

Este paquete contiene **src/**, **public/**, y configuraciones mínimas para tailwind/astro con tu color de marca **#25864b** y WhatsApp **+593981894763**.

## Pasos recomendados
1) Crear un proyecto base Astro mínimo y agregar Tailwind:
   ```bash
   npm create astro@latest bb-perforaciones-astro -- --template minimal
   cd bb-perforaciones-astro
   npx astro add tailwind
   npm install
   ```
2) Copiar desde este starter a tu nuevo proyecto (acepta reemplazar si pregunta):
   - Carpeta **src/** (completa)
   - Carpeta **public/** (completa)
   - Archivo **tailwind.config.mjs** (opcional para colores de marca)
   - Archivo **astro.config.mjs** (opcional para `site` y meta OG)
3) Ejecutar y revisar:
   ```bash
   npm run dev
   ```

## Dónde editar
- `src/components/*` → secciones (Hero/Servicios/Galería/Testimonios/CTA/Footer).
- `src/layouts/BaseLayout.astro` → SEO global, `lang`, OG.
- `public/logo.svg` y `public/img/*` → logo/imagenes (reemplaza por las reales).
- `tailwind.config.mjs` → colores de marca.

## Notas
- Por defecto, **0 KB de JS**. Si agregas un slider o mapa embebido, hazlo luego como isla o con `<iframe>` responsivo.
- Testimonios y galería son placeholders: cámbialos cuando tengas contenido final.
