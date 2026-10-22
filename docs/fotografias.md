# Fotografías de Amanadu: lista y prompts

El sitio ya funciona sin fotos: mientras una imagen no existe se muestra un bloque gráfico de la marca. Cuando suba cada archivo a la ruta indicada, aparecerá automáticamente en todas las páginas donde se usa.

## Cómo usar esta lista

1. Copie el prompt de cada ficha y péguelo en Nano Banana. Todos comparten la misma base de estilo para que las fotos se vean como una sola serie; solo cambia la escena.

2. Exporte la imagen a unos **1600 px** de ancho, en `.jpg` o `.webp`, idealmente por debajo de **300 KB**.
3. Guárdela con el nombre y la carpeta exactos indicados. Puede usar `.jpg`, `.jpeg`, `.png` o `.webp`: el sitio encuentra el archivo con cualquiera de esas extensiones.
4. No hace falta que la foto venga en blanco y negro ni con grano: el sitio aplica ese tratamiento por CSS. Aun así, pedirlo en el prompt da mejores resultados.

## Recomendaciones

- **Fotos de «Nosotras» y del equipo:** use fotografías reales de Amanadu, no imágenes generadas.
- Revise que las imágenes generadas no tengan manos deformes, textos inventados ni logos de marcas (UNO, Jenga, etc.).
- Si cambia lo que se ve en una foto, actualice también su texto alternativo (`alt`) en el archivo `.md` correspondiente.

## Inicio

### Portada de Inicio

- **Archivo:** `public/images/inicio/portada.jpg`
- **Proporción:** 4:5
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Grupo de amigos riendo alrededor de una mesa mientras juegan parqués en un patio. Formato 4:5.
```

### Bloque «Un espacio para hacer una pausa»

- **Archivo:** `public/images/inicio/pausa.jpg`
- **Proporción:** 4:5
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona recostada en el pasto con los ojos cerrados y un libro abierto a su lado. Formato 4:5.
```


### Nosotras

- **Archivo:** `public/images/sobre/nosotras.jpg`
- **Proporción:** 4:5
- **Recomendado:** fotografía real del equipo de Amanadu jugando o conversando. Ajuste el texto alternativo en `src/data/nosotras.ts`.

## Biblioteca de juegos (29 fotos)

La tarjeta usa la foto en 4:3 y la ficha la recorta en 1:1: mantenga al sujeto principal centrado.

### Adivinanzas

- **Archivo:** `public/images/juegos/adivinanzas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Grupo conversando en un andén, una persona con gesto pensativo y otra sonriendo. Formato 4:3.
```

### Ajedrez

- **Archivo:** `public/images/juegos/ajedrez.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Dos personas frente a un tablero de ajedrez en un parque, una de ellas moviendo un caballo. Formato 4:3.
```

### Batalla naval

- **Archivo:** `public/images/juegos/batalla-naval.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Dos hojas cuadriculadas con barcos dibujados a lápiz y marcas de disparos. Formato 4:3.
```

### Canicas

- **Archivo:** `public/images/juegos/canicas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Mano en el suelo preparando un tiro de canica dentro de un círculo dibujado con tiza. Formato 4:3.
```

### Crucigramas

- **Archivo:** `public/images/juegos/crucigramas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Crucigrama de periódico a medio resolver con un lápiz y una taza al lado. Formato 4:3.
```

### Conecta 4

- **Archivo:** `public/images/juegos/cuatro-en-linea.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Tablero vertical de Conecta 4 con fichas de dos colores y una mano dejando caer una ficha. Formato 4:3.
```

### Damas

- **Archivo:** `public/images/juegos/damas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Tablero de damas con fichas claras y oscuras a mitad de partida, y una mano a punto de saltar una ficha. Formato 4:3.
```

### Pictionary (dibujar y adivinar)

- **Archivo:** `public/images/juegos/dibujar-y-adivinar.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona dibujando con marcador en una hoja grande mientras otras señalan y ríen. Formato 4:3.
```

### Dominó

- **Archivo:** `public/images/juegos/domino.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Fichas de dominó formando una línea sobre una mesa, con manos de varias personas alrededor. Formato 4:3.
```

### Kakuro

- **Archivo:** `public/images/juegos/kakuro.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Kakuro impreso con casillas negras divididas en diagonal y números escritos a lápiz. Formato 4:3.
```

### Laberintos

- **Archivo:** `public/images/juegos/laberintos.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Laberinto dibujado a mano en una libreta con un lápiz trazando el camino. Formato 4:3.
```

### Ludo

- **Archivo:** `public/images/juegos/ludo.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Tablero de ludo con fichas de colores y un dado en el aire sobre la mesa. Formato 4:3.
```

### Mímica

- **Archivo:** `public/images/juegos/mimica.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona haciendo gestos exagerados frente a un grupo que se ríe sentado en la sala. Formato 4:3.
```

### Nonogramas

- **Archivo:** `public/images/juegos/nonogramas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Cuadrícula de nonograma a medio resolver con casillas rellenas a lápiz formando una figura. Formato 4:3.
```

### Parqués

- **Archivo:** `public/images/juegos/parques.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Manos lanzando dos dados sobre un tablero de parqués de madera, con fichas de colores en la mesa. Formato 4:3.
```

### Póquer

- **Archivo:** `public/images/juegos/poquer.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Mesa con cartas boca arriba y pilas de fichas, iluminada desde arriba en blanco y negro. Formato 4:3.
```

### Rana

- **Archivo:** `public/images/juegos/rana.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Mesa de rana de madera con una rana metálica en el centro y argollas sobre la superficie. Formato 4:3.
```

### Rompecabezas

- **Archivo:** `public/images/juegos/rompecabezas.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Mesa con un rompecabezas a medio armar y varias manos buscando piezas. Formato 4:3.
```

### Rummy

- **Archivo:** `public/images/juegos/rummy.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Manos ordenando cartas en abanico, con tríos y escaleras ya bajados sobre la mesa. Formato 4:3.
```

### Solitario

- **Archivo:** `public/images/juegos/solitario.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Cartas de solitario dispuestas en columnas sobre una mesa de madera junto a una ventana. Formato 4:3.
```

### Stop o Basta

- **Archivo:** `public/images/juegos/stop-basta.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Hojas con columnas escritas a mano y lápices sobre una mesa, con personas inclinadas escribiendo. Formato 4:3.
```

### Sudoku

- **Archivo:** `public/images/juegos/sudoku.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Sudoku impreso con números escritos a lápiz y pequeñas anotaciones en las esquinas de las casillas. Formato 4:3.
```

### Tangram

- **Archivo:** `public/images/juegos/tangram.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Piezas de tangram de madera sobre una mesa formando la silueta de un gato. Formato 4:3.
```

### Tejo

- **Archivo:** `public/images/juegos/tejo.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona a punto de lanzar un tejo en una cancha, con el tablero de greda al fondo. Formato 4:3.
```

### Jenga (torre de bloques)

- **Archivo:** `public/images/juegos/torre-de-bloques.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Torre de bloques de madera tambaleándose mientras una mano saca una pieza con cuidado. Formato 4:3.
```

### Trompo

- **Archivo:** `public/images/juegos/trompo.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Trompo de madera girando sobre un piso de cemento junto a una cuerda enrollada. Formato 4:3.
```

### UNO

- **Archivo:** `public/images/juegos/uno.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Cartas de UNO esparcidas sobre una mesa y varias manos sosteniendo cartas. Formato 4:3.
```

### Veo veo

- **Archivo:** `public/images/juegos/veo-veo.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Dos personas sentadas en la ventana de un bus mirando hacia afuera y señalando algo. Formato 4:3.
```

### Yermis

- **Archivo:** `public/images/juegos/yermis.jpg`
- **Proporción:** 4:3
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Grupo de personas corriendo y riendo en una calle alrededor de una torre de tapas en el suelo. Formato 4:3.
```


## Conoce y aprende (10 fotos)

### Cambiar las reglas también es jugar (portada)

- **Archivo:** `public/images/articulos/cambiar-las-reglas-tambien-es-jugar.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Manos dibujando un tablero de juego con marcador sobre una hoja grande de papel. Formato 16:9.
```

### Del pachisi al parqués: un viaje de casillas (portada)

- **Archivo:** `public/images/articulos/del-pachisi-al-parques.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Tablero de parqués antiguo y desgastado, con fichas y dados de madera. Formato 16:9.
```

### Historias de papel: crucigramas y sudokus (portada)

- **Archivo:** `public/images/articulos/historias-de-papel.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Página de periódico doblada con un crucigrama y un sudoku, y un lápiz encima. Formato 16:9.
```

### Lo que pasa alrededor de una mesa de juego (portada)

- **Archivo:** `public/images/articulos/lo-que-pasa-alrededor-de-una-mesa.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Varias personas alrededor de una mesa de comedor jugando cartas y riéndose. Formato 16:9.
```

### Lo que pasa alrededor de una mesa de juego (foto interior)

- **Archivo:** `public/images/articulos/lo-que-pasa-alrededor-de-una-mesa-2.jpg`
- **Proporción:** 3:2
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Primer plano de manos moviendo fichas de dominó sobre una mesa con tazas de café. Formato 3:2.
```

### No todo tiene que ser productivo (portada)

- **Archivo:** `public/images/articulos/no-todo-tiene-que-ser-productivo.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona recostada en una hamaca con un libro abierto sobre el pecho, mirando al cielo. Formato 16:9.
```

### No todo tiene que ser productivo (foto interior)

- **Archivo:** `public/images/articulos/no-todo-tiene-que-ser-productivo-2.jpg`
- **Proporción:** 3:2
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Dos personas sentadas en un andén conversando y riendo, con un juego de cartas entre ellas. Formato 3:2.
```

### Pausas pequeñas para días llenos (portada)

- **Archivo:** `public/images/articulos/pausas-pequenas-para-dias-llenos.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Persona sentada en una banca de parque resolviendo un pasatiempo en una libreta. Formato 16:9.
```

### Tejo: una tradición que revienta (portada)

- **Archivo:** `public/images/articulos/tejo-tradicion-que-revienta.jpg`
- **Proporción:** 16:9
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Cancha de tejo con el tablero de greda en primer plano y personas conversando al fondo. Formato 16:9.
```

### Tejo: una tradición que revienta (foto interior)

- **Archivo:** `public/images/articulos/tejo-tradicion-que-revienta-2.jpg`
- **Proporción:** 3:2
- **Prompt:**

```text
Fotografía editorial documental en blanco y negro, grano analógico de película visible (estilo Kodak Tri-X 400 forzada), contraste alto con negros profundos y blancos limpios, luz natural, encuadre espontáneo y ligeramente imperfecto, personas reales colombianas de entre 20 y 45 años con gestos genuinos, ambiente cotidiano en Colombia. Sin texto, sin logotipos ni marcas comerciales visibles, sin marcas de agua, sin estética de foto de stock ni de publicidad corporativa. Escena: Primer plano de un tejo metálico en una mano, con el bocín y las mechas desenfocados al fondo. Formato 3:2.
```

