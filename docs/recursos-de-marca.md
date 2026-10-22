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

Guarde el archivo como `public/manual/manual-de-marca-amanadu.pdf`. Para reemplazarlo, sobrescriba el archivo con el mismo nombre. Con el PDF en su lugar aparecen el visor integrado y los botones «Descargar» y «Abrir» en la página del manual y el enlace de descarga en el pie de página. Sin el PDF, la página muestra un mensaje de «disponible muy pronto».
