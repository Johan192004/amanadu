/** Expresiones de Du, la mascota. Archivos en /public/brand/emojis/du-<expresion>.webp */
export const expresiones = [
  'aburrido',
  'apenado',
  'asombro',
  'bravo',
  'carcajada',
  'curioso',
  'dudoso',
  'emocionado',
  'enamorado',
  'feliz',
  'impactado',
  'llorando',
  'mareado',
  'ojos-en-blanco',
  'sorprendido',
] as const;

export type Expresion = (typeof expresiones)[number];

export const rutaDu = (expresion: Expresion) => `/brand/emojis/du-${expresion}.webp`;
