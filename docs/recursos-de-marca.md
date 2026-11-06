# Recursos de marca: cómo reemplazarlos

## Logos

Copie los archivos oficiales en `public/brand/`:

| Archivo | Uso |
| --- | --- |
| `logo-amanadu.svg` | Versión para fondos claros (hueso). Encabezado y manual. |
| `logo-amanadu-claro.svg` | Versión para fondos oscuros (azul, verde). Pie de página, menú móvil y portada del manual. |

Puede usar `.svg` (recomendado), `.png` o `.webp`. Si prefiere otros nombres, cámbielos en `src/config/site.ts` → `logo`. Si solo existe la versión principal, también se usará sobre fondos oscuros.

Mientras no existan, el sitio muestra la palabra «amanadu» en Erica One como logotipo provisional.

La altura del logo se controla con la variable CSS `--logo-alto` (encabezado: `2.4rem`; pie: `3rem`). Ajústela si el logo oficial necesita más área de seguridad.

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
