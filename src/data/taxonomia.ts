/**
 * Vocabulario compartido por la Biblioteca de juegos, sus filtros y la
 * herramienta «¿A qué jugamos hoy?». Si agrega una categoría o un plan aquí,
 * quedará disponible en los filtros y en las fichas automáticamente.
 */

export const categorias = {
  tradicionales: { etiqueta: 'Juegos tradicionales colombianos', corta: 'Tradicionales', icono: 'flag' },
  'mesa-estrategia': { etiqueta: 'Juegos de mesa y estrategia', corta: 'Mesa y estrategia', icono: 'crown' },
  cartas: { etiqueta: 'Juegos de cartas', corta: 'Cartas', icono: 'spade' },
  palabras: { etiqueta: 'Juegos de palabras', corta: 'Palabras', icono: 'message-circle' },
  'logica-numeros': { etiqueta: 'Juegos de lógica y números', corta: 'Lógica y números', icono: 'grid' },
  individuales: { etiqueta: 'Pasatiempos individuales', corta: 'Individuales', icono: 'user' },
  'dos-personas': { etiqueta: 'Juegos para dos personas', corta: 'Para dos', icono: 'users' },
  grupos: { etiqueta: 'Juegos para grupos', corta: 'Grupos', icono: 'party' },
  rapidos: { etiqueta: 'Juegos rápidos', corta: 'Rápidos', icono: 'timer' },
  reuniones: { etiqueta: 'Juegos para reuniones y encuentros', corta: 'Reuniones', icono: 'coffee' },
} as const;

export type Categoria = keyof typeof categorias;
export const categoriaIds = Object.keys(categorias) as [Categoria, ...Categoria[]];

/** Dónde se puede jugar. «cualquier-lugar» = no necesita espacio ni montaje especial. */
export const lugares = {
  casa: { etiqueta: 'En casa', icono: 'home' },
  'aire-libre': { etiqueta: 'Al aire libre', icono: 'sun' },
  'cualquier-lugar': { etiqueta: 'En cualquier lugar', icono: 'map-pin' },
} as const;

export type Lugar = keyof typeof lugares;
export const lugarIds = Object.keys(lugares) as [Lugar, ...Lugar[]];

/** Respuestas a «¿Qué le provoca hacer?». */
export const planes = {
  tranquilo: { etiqueta: 'Algo tranquilo', frase: 'es un plan tranquilo, sin afán', icono: 'leaf' },
  compartir: { etiqueta: 'Compartir con otras personas', frase: 'es ideal para compartir y conversar', icono: 'users' },
  estrategia: { etiqueta: 'Pensar y usar la estrategia', frase: 'le pone a pensar y a planear jugadas', icono: 'brain' },
  palabras: { etiqueta: 'Jugar con palabras', frase: 'gira alrededor de las palabras', icono: 'message-circle' },
  suerte: { etiqueta: 'Probar suerte', frase: 'tiene su buena dosis de azar', icono: 'dices' },
  crear: { etiqueta: 'Crear', frase: 'deja espacio para imaginar y crear', icono: 'palette' },
} as const;

export type Plan = keyof typeof planes;
export const planIds = Object.keys(planes) as [Plan, ...Plan[]];

export const complejidades = {
  baja: 'Sencillo',
  media: 'Intermedio',
  alta: 'Retador',
} as const;

export type Complejidad = keyof typeof complejidades;

/** Opciones de la herramienta y de los filtros de participantes y duración. */
export const opcionesParticipantes = {
  '1': 'Una persona',
  '2': 'Dos personas',
  '3-5': 'De tres a cinco personas',
  '6+': 'Seis o más',
} as const;

export const opcionesDuracion = {
  'menos-15': 'Menos de 15 minutos',
  '15-30': 'Entre 15 y 30 minutos',
  'mas-30': 'Más de 30 minutos',
} as const;

export const opcionesModalidad = {
  individual: 'Individual',
  grupal: 'Grupal',
} as const;

/** Líneas temáticas de «Conoce y aprende». */
export const lineas = {
  'el-juego-y-nosotros': {
    etiqueta: 'El juego y nosotros',
    descripcion: 'Interacción, vínculos, socialización y experiencias compartidas.',
    color: 'naranja',
  },
  'crear-para-explorar': {
    etiqueta: 'Crear para explorar',
    descripcion: 'Creatividad, imaginación y nuevas maneras de jugar.',
    color: 'coral',
  },
  'el-valor-de-hacer-una-pausa': {
    etiqueta: 'El valor de hacer una pausa',
    descripcion: 'Bienestar, descanso, tiempo libre y la presión de estar siempre produciendo.',
    color: 'verde',
  },
  'juegos-cultura-y-tradicion': {
    etiqueta: 'Juegos, cultura y tradición',
    descripcion: 'Historia de los juegos, juegos tradicionales colombianos y otras expresiones culturales.',
    color: 'azul',
  },
} as const;

export type Linea = keyof typeof lineas;
export const lineaIds = Object.keys(lineas) as [Linea, ...Linea[]];
