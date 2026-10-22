/**
 * Reglas de coincidencia usadas por los filtros de la Biblioteca y por
 * «¿A qué jugamos hoy?». Se ejecutan en el navegador y en el servidor,
 * así que no deben depender de nada específico de Astro.
 */

export interface JuegoIndexado {
  slug: string;
  nombre: string;
  jugadores: { min: number; max: number };
  duracion: { min: number; max: number };
  lugares: string[];
  planes: string[];
  categorias: string[];
}

export type Participantes = '1' | '2' | '3-5' | '6+';
export type Duracion = 'menos-15' | '15-30' | 'mas-30';
export type Lugar = 'casa' | 'aire-libre' | 'cualquier-lugar';
export type Modalidad = 'individual' | 'grupal';

export function aceptaParticipantes(j: JuegoIndexado, p: Participantes): boolean {
  const { min, max } = j.jugadores;
  switch (p) {
    case '1':
      return min <= 1;
    case '2':
      return min <= 2 && max >= 2;
    case '3-5':
      return min <= 5 && max >= 3;
    case '6+':
      return max >= 6;
  }
}

export function cabeEnTiempo(j: JuegoIndexado, d: Duracion): boolean {
  const { min, max } = j.duracion;
  switch (d) {
    case 'menos-15':
      return min < 15;
    case '15-30':
      return min <= 30 && max >= 15;
    case 'mas-30':
      return max > 30;
  }
}

/**
 * «En casa» y «al aire libre» también aceptan juegos que se pueden jugar en
 * cualquier lugar; «en cualquier lugar» solo acepta juegos portátiles.
 */
export function sirveEnLugar(j: JuegoIndexado, l: Lugar): boolean {
  return j.lugares.includes(l) || (l !== 'cualquier-lugar' && j.lugares.includes('cualquier-lugar'));
}

export function tieneModalidad(j: JuegoIndexado, m: Modalidad): boolean {
  return m === 'individual' ? j.jugadores.min <= 1 : j.jugadores.max >= 2;
}

/** Quita tildes y mayúsculas para que «parques» encuentre «Parqués». */
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim();
}

export function rangoTexto({ min, max }: { min: number; max: number }, unidad: string, plural = unidad + 's'): string {
  if (max >= 99) return `${min} o más ${plural}`;
  if (min === max) return `${min} ${min === 1 ? unidad : plural}`;
  return `${min} a ${max} ${plural}`;
}

export function duracionTexto({ min, max }: { min: number; max: number }): string {
  if (min === max) return `${min} min`;
  return `${min}–${max} min`;
}
