/**
 * Contenido de «Nosotras». Los campos vacíos no se muestran en el sitio
 * publicado; mientras se desarrolla aparece un aviso para completarlos.
 * No invente datos: use solo información real de Amanadu.
 */

export interface Integrante {
  nombre: string;
  rol: string;
  /** Ruta dentro de /public, por ejemplo /images/sobre/equipo-nombre.jpg */
  foto?: string;
  bio?: string;
}

export const nosotras = {
  fotoPrincipal: {
    src: '/images/sobre/nosotras.jpg',
    alt: 'Integrantes de Amanadu jugando y riendo alrededor de una mesa.',
  },

  /** Quiénes somos. Texto basado en la identidad de la marca; ajústelo con sus palabras. */
  identidad: [
    'Amanadu es una invitación a recuperar el juego, la diversión, el tiempo libre y la conexión con los demás en medio de la rutina.',
    'Reunimos juegos tradicionales colombianos, juegos de mesa, de cartas, de palabras y pasatiempos para que cualquier persona encuentre una excusa para jugar, reír y compartir.',
  ],

  /** Propósito y postura frente al bienestar. */
  proposito: [
    'Muchas veces sentimos que debemos estar ocupados, producir constantemente y aprovechar cada minuto. Esa presión nos lleva a dejar de lado el descanso, nuestros intereses y el tiempo para compartir con otras personas.',
    'Amanadu quiere cuestionar esa dinámica: invitar a hacer una pausa, a recuperar el tiempo propio y a reconocer el valor de jugar, descansar, reír y socializar por el simple placer de hacerlo.',
  ],

  /** Historia de Amanadu: un párrafo por elemento. PENDIENTE. */
  historia: [] as string[],

  /** Integrantes del equipo. PENDIENTE. */
  equipo: [] as Integrante[],
};
