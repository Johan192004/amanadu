/**
 * Contenido de «Nosotras». Los textos de propósito, misión, visión y origen
 * vienen del manual de marca de Amanadu. Los campos vacíos no se muestran en
 * el sitio publicado; mientras se desarrolla aparece un aviso para completarlos.
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
    alt: 'Dos integrantes de Amanadu sentadas en un puf, abrazadas y sonriendo, con camisetas blancas con el logo de Amanadu, frente a una biblioteca roja.',
  },

  /** Quiénes somos. */
  identidad: [
    'Amanadu es una invitación a recuperar el juego, la diversión, el tiempo libre y la conexión con los demás en medio de la rutina.',
    'Reunimos juegos tradicionales colombianos, juegos de mesa, de cartas, de palabras y pasatiempos para que cualquier persona encuentre una excusa para jugar, reír y compartir.',
  ],

  /** Propósito (manual de marca, p. 5). */
  proposito: {
    enPocasPalabras: 'Traer felicidad de forma lúdica a esas personas que llevan años sin jugar.',
    loQueNosLlamoLaAtencion:
      'Normalmente, el niño o adolescente, a medida que llega a la adultez, pierde el interés en el juego, lo deja de lado y da prioridad a las responsabilidades que conlleva la vida adulta, dejando la idea de que el juego es algo familiar y poco a poco lo olvidan junto con sus beneficios.',
    proponemos:
      'Crear espacios donde se dé importancia al bienestar mental y social de las personas adultas a través del juego y de distintas actividades manuales, lúdicas y deportivas, utilizando juegos y referencias de la rica variedad existente en Colombia, para dar visibilidad y mantener viva la memoria de la tradición.',
  },

  /** Misión y visión (manual de marca, p. 6). */
  mision:
    'Ampliaremos nuestro rango en Medellín, llevando Amanadu a diferentes contextos y lugares para que cada adulto pueda disfrutar de nuestros espacios y servicios a partir de actividades de esparcimiento y memoria a los juegos típicos y tradicionales de nuestra Colombia.',
  vision:
    'Nos vemos a futuro como una marca que destaca entre las demás por alegre y cálida con nuestros usuarios, con un excelente servicio y una energía muy única trayendo felicidad a los adultos de la ciudad, contando con espacios amplios y amenos.',

  /** Origen del nombre y de la mascota (manual de marca, pp. 9 y 10). */
  origen: {
    nombre: {
      palabra: 'Amañado',
      marca: 'Del col.',
      definicion: 'Sentirse a gusto, cómodo, contento y adaptado en un lugar ameno.',
      ejemplo: 'Estar amañado en un espacio de tradición y juego colombiano.',
    },
    mascota: {
      nombre: 'Du',
      texto: [
        'Du nació a partir de una lluvia de ideas acerca de ciertos animales colombianos. Es una mezcla de una zarigüeya, un ratón de campo y un hámster.',
        'Los tres comparten un detalle: su manada es sumamente social, y Du guarda eso en su esencia.',
      ],
    },
  },

  /** Integrantes del equipo. PENDIENTE. */
  equipo: [] as Integrante[],
};
