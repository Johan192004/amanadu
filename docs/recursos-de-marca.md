# Recursos de marca: cómo reemplazarlos

## Logos

Los logos oficiales están en `public/brand/` (PNG con fondo transparente, ya recortados y reducidos para la web):

| Archivo | Uso en el sitio |
| --- | --- |
| `logo-secundario.png` | Horizontal. Encabezado de todas las páginas. |
| `logo-secundario-sobre-color.png` | Encabezado con el menú móvil abierto (fondo azul). |
| `logo-principal.png` | Du sobre la palabra. Página del manual. |
| `logo-principal-sobre-color.png` | Pie de página azul. |
| `*-negro.png` y `*-blanco.png` | Versiones negativo y positivo, mostradas en el manual. |

Para cambiarlos, sobrescriba el archivo con el mismo nombre. Las rutas están en `src/config/site.ts` → `logo`. Los originales en alta resolución quedaron en `originales/`, fuera de git.

El favicon (`public/favicon-48.png`, `favicon-512.png` y `apple-touch-icon.png`) es la cara de Du, recortada del logo principal.

## Emojis de Du

Las 15 expresiones de Du están en `public/brand/emojis/du-<expresión>.webp`, con el fondo blanco eliminado. Se usan con el componente `Du` (`src/components/Du.astro`), por ejemplo `<Du expresion="feliz" />`.

Expresiones disponibles: aburrido, apenado, asombro, bravo, carcajada, curioso, dudoso, emocionado, enamorado, feliz, impactado, llorando, mareado, ojos-en-blanco y sorprendido.

Dónde aparece Du hoy:

- **Inicio:** riéndose junto a la foto de portada y tranquilo en el bloque de pausa.
- **Biblioteca y Conoce y aprende:** en la cabecera, con figuras de la marca.
- **«¿A qué jugamos hoy?»:** mareado mientras busca, feliz cuando hay resultados y llorando cuando no hay coincidencias.
- **Página 404:** mareado.

## Tipografías

El sitio usa tres familias, cargadas desde paquetes de Fontsource (autoalojadas, sin depender de Google Fonts):

| Familia | Uso | Variable CSS |
| --- | --- | --- |
| Erica One | Títulos | `--f-titulo` |
| Elms Sans | Texto general | `--f-texto` |
| Mynerve | Textos llamativos y notas | `--f-nota` |

Nota sobre Erica One: en esta tipografía el acento de la «í» ocupa el lugar del punto, así que a gran tamaño puede leerse como «i». Es un rasgo del diseño de la fuente. Las comillas « » del eslogan se dibujan en Mynerve para que no se vean como «<<».

### Usar los archivos oficiales de la marca

Si la marca tiene archivos propios (por ejemplo, una versión con licencia distinta):

1. Copie los archivos `.woff2` en `public/fonts/`.
2. En `src/styles/global.css`, reemplace las líneas `@import '@fontsource/…'` por reglas `@font-face`:

```css
@font-face {
  font-family: 'Erica One';
  src: url('/fonts/EricaOne-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

3. Si el nombre de la familia cambia, actualice `--f-titulo`, `--f-texto` o `--f-nota` en `:root`.

## Colores

Están definidos una sola vez en `src/styles/global.css` (`:root`): `--naranja`, `--azul`, `--coral`, `--hueso`, `--verde`. La página del manual los muestra con el código para copiar.

## Manual de marca (PDF)

El sitio usa `public/manual/manual-de-marca-amanadu.pdf`. Con el PDF en su lugar aparecen el visor integrado, los botones «Descargar» y «Abrir» y el enlace de descarga en el pie de página. Sin el PDF, la página muestra un mensaje de «disponible muy pronto».

La imagen de la cabecera de la página es `public/manual/portada.jpg`: la primera página del manual exportada como JPG (unos 1500 px de ancho). Si cambia la portada del manual, reemplace también esta imagen. Si la borra, se muestra una tapa gráfica provisional.

### Mantener el PDF liviano

El manual original pesaba 87,5 MB. Casi todo ese peso era la copia editable que Illustrator guarda dentro del PDF y que no se ve en pantalla. La versión web pesa unos 5 MB y se ve igual. El original quedó en `originales/`, una carpeta que git ignora.

Para que el próximo PDF salga liviano desde Illustrator:

1. **Archivo → Guardar como → Adobe PDF**.
2. Desmarque **«Conservar las capacidades de edición de Illustrator»**.
3. En **Compresión**, reduzca las imágenes a unos **150 ppp**.

Procure que el archivo final pese menos de 10 MB: el visor lo descarga completo cada vez que alguien abre la página.
