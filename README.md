# Amanadu · sitio web

**«Hay que jugar, hay que reír y hay que divertirse».**

Sitio de Amanadu construido con [Astro](https://astro.build): genera páginas estáticas, rápidas y fáciles de desplegar en Vercel, Netlify o cualquier hosting estático.

## Puesta en marcha

Requisitos: Node.js 22 o superior.

```bash
npm install       # instala dependencias
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # genera el sitio en /dist
npm run preview   # sirve /dist para revisarlo antes de publicar
npx astro check   # revisa errores de tipos y de contenido
```

## Despliegue en Vercel

1. Suba este repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel: **Add New → Project**, importe el repositorio.
3. Vercel detecta Astro automáticamente (comando `npm run build`, carpeta `dist`). Pulse **Deploy**.
4. Cuando tenga el dominio definitivo, descomente `site` en `astro.config.mjs` para generar URLs canónicas y vistas previas para redes sociales.

Cada `git push` a la rama principal publica una nueva versión.

## Estructura

```
src/
  config/site.ts          Nombre, eslogan, rutas de logos y manual, redes, navegación
  data/taxonomia.ts       Categorías, lugares, planes y líneas temáticas
  data/pilares.ts         Pilares de la marca (Inicio y Nosotras)
  data/nosotras.ts        Textos, historia y equipo de «Nosotras»
  content/juegos/*.md     Una ficha por juego (29)
  content/articulos/*.md  Un artículo por archivo (7)
  components/             Componentes reutilizables (Foto, TarjetaJuego, Logo…)
  pages/                  Páginas del sitio
  scripts/biblioteca.ts   Filtros y herramienta «¿A qué jugamos hoy?»
  lib/coincidencias.ts    Reglas para decidir si un juego encaja con una búsqueda
  styles/global.css       Colores, tipografías, grano fotográfico y estilos base
public/
  images/                 Fotografías (ver docs/fotografias.md)
  brand/                  Logos oficiales
  manual/                 Manual de marca en PDF
docs/
  fotografias.md          Lista de fotos con prompts para Nano Banana
  recursos-de-marca.md    Cómo reemplazar logos, tipografías y el manual
```

## Editar contenido

### Agregar o cambiar un juego

Cree o edite un archivo en `src/content/juegos/`. El nombre del archivo es la dirección de la ficha: `canicas.md` → `/biblioteca/canicas/`. Copie una ficha existente como plantilla. Los campos se validan al compilar: si falta uno o tiene un valor no permitido, `npm run build` indica cuál.

| Campo | Valores |
| --- | --- |
| `categorias` | `tradicionales`, `mesa-estrategia`, `cartas`, `palabras`, `logica-numeros`, `individuales`, `dos-personas`, `grupos`, `rapidos`, `reuniones` |
| `lugares` | `casa`, `aire-libre`, `cualquier-lugar` (portátil, sin montaje) |
| `planes` | `tranquilo`, `compartir`, `estrategia`, `palabras`, `suerte`, `crear`. El primero se considera el principal. |
| `jugadores` / `duracion` | `min` y `max`. Use `max: 99` si no hay límite de participantes. Duración en minutos. |
| `complejidad` | `baja`, `media`, `alta` |
| `destacado` | `true` para mostrarlo en Inicio (se muestran hasta 6) |

El texto debajo del segundo `---` (opcional) aparece como «Un poco de historia».

El catálogo, los filtros y «¿A qué jugamos hoy?» usan estas mismas fichas: no hay que actualizar nada más.

### Agregar un artículo

Cree un archivo en `src/content/articulos/`. Use `linea` con uno de estos valores: `el-juego-y-nosotros`, `crear-para-explorar`, `el-valor-de-hacer-una-pausa`, `juegos-cultura-y-tradicion`. Los destacados se escriben como cita en Markdown (`> texto`). En `juegosRelacionados` ponga los nombres de archivo de los juegos, sin `.md`.

**Antes de publicar, verifique las fuentes de cada artículo.** Los textos actuales citan obras y documentos reales, pero conviene que una persona del equipo los revise.

### Completar «Nosotras»

Edite `src/data/nosotras.ts`. La historia y el equipo están vacíos a propósito para no inventar información. Mientras están vacíos, en `npm run dev` aparece un aviso de «Contenido pendiente», y en el sitio publicado esas secciones no se muestran.

### Redes y correo

En `src/config/site.ts`, complete `redes` y `correo`. Los enlaces vacíos no se muestran.

## Fotografías

Todas las fotos se reemplazan subiendo un archivo a `public/images/` con el nombre indicado en `docs/fotografias.md`. El blanco y negro, el contraste y el grano se aplican por CSS (`.foto` en `src/styles/global.css`), así que funcionan con cualquier foto nueva. Mientras una foto no existe, se muestra un bloque gráfico de la marca.

## Pendientes antes de publicar

- [ ] Logos oficiales en `public/brand/` (hoy se ve un logotipo tipográfico provisional).
- [ ] Manual de marca en `public/manual/manual-de-marca-amanadu.pdf`.
- [ ] Fotografías (ver `docs/fotografias.md`).
- [ ] Historia y equipo en `src/data/nosotras.ts`.
- [ ] Redes y correo en `src/config/site.ts`.
- [ ] Revisión editorial de las fuentes de los artículos.
- [ ] Dominio definitivo en `astro.config.mjs`.
