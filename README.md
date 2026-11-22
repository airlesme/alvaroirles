# alvaroirles.com

Página personal de Álvaro Irles. React + Vite, publicada en GitHub Pages con dominio propio.

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run build    # genera dist/ (incluye 404.html para las rutas)
```

## Publicación

Cada push a `main` construye el sitio y lo publica con `.github/workflows/deploy.yml`.
El dominio está en `public/CNAME` (`alvaroirles.com`).

Pendiente de contenido: retrato (`src/pages/Inicio.jsx`), contacto (`src/Layout.jsx`) y el contenido de cada sección.
