/**
 * Configuración general de Amanadu.
 * Desde aquí se cambian textos globales, rutas de logos y del manual de marca,
 * y enlaces externos sin tocar los componentes.
 */

export const site = {
  nombre: 'Amanadu',
  // El eslogan oficial debe mantenerse exactamente así.
  eslogan: '«Hay que jugar, hay que crear y hay que divertirse».',
  descripcion:
    'Amanadu invita a recuperar el juego, la risa, el tiempo libre y la conexión con los demás. Descubra juegos tradicionales colombianos, de mesa, de cartas, de palabras y más.',
  idioma: 'es-CO',

  /**
   * Logos oficiales en /public/brand/. Para reemplazarlos, sobrescriba los archivos
   * manteniendo el nombre. `medidas` es el ancho y alto del archivo en píxeles.
   */
  logo: {
    alt: 'Amanadu',
    // Mascota encima de la palabra
    principal: {
      claro: '/brand/logo-principal.png',
      color: '/brand/logo-principal-sobre-color.png',
      negro: '/brand/logo-principal-negro.png',
      blanco: '/brand/logo-principal-blanco.png',
      medidas: [640, 519],
    },
    // Horizontal: mascota a la izquierda de la palabra
    secundario: {
      claro: '/brand/logo-secundario.png',
      color: '/brand/logo-secundario-sobre-color.png',
      negro: '/brand/logo-secundario-negro.png',
      blanco: '/brand/logo-secundario-blanco.png',
      medidas: [900, 185],
    },
  },

  /** Manual de marca. Reemplace el archivo en /public/manual/ manteniendo el nombre. */
  manual: {
    pdf: '/manual/manual-de-marca-amanadu.pdf',
    nombreDescarga: 'Manual-de-marca-Amanadu.pdf',
    /** Imagen de la primera página del manual, usada como portada en la web. */
    portada: '/manual/portada.jpg',
  },

  /**
   * Redes y contacto. Déjelos vacíos hasta tener los datos reales:
   * los enlaces vacíos no se muestran en la página.
   * Iconos disponibles: 'instagram', 'mail', 'globe'.
   */
  redes: [
    { nombre: 'Instagram @amanadu.ludo', url: 'https://www.instagram.com/amanadu.ludo/', icono: 'instagram' },
  ] as { nombre: string; url: string; icono: 'instagram' | 'mail' | 'globe' }[],
  correo: '',
} as const;

export const navegacion = [
  { etiqueta: 'Inicio', href: '/' },
  { etiqueta: 'Biblioteca de juegos', href: '/biblioteca/' },
  { etiqueta: 'Conoce y aprende', href: '/conoce-y-aprende/' },
  { etiqueta: 'Sobre Amanadu', href: '/sobre-amanadu/' },
] as const;

export const subnavSobre = [
  { etiqueta: 'Nosotras', href: '/sobre-amanadu/' },
  { etiqueta: 'Manual de marca', href: '/sobre-amanadu/manual-de-marca/' },
] as const;
