/**
 * Configuración general de Amanadu.
 * Desde aquí se cambian textos globales, rutas de logos y del manual de marca,
 * y enlaces externos sin tocar los componentes.
 */

export const site = {
  nombre: 'Amanadu',
  // El eslogan oficial debe mantenerse exactamente así.
  eslogan: '«Hay que jugar, hay que reír y hay que divertirse».',
  descripcion:
    'Amanadu invita a recuperar el juego, la risa, el tiempo libre y la conexión con los demás. Descubra juegos tradicionales colombianos, de mesa, de cartas, de palabras y más.',
  idioma: 'es-CO',

  /**
   * Logos oficiales. Copie los archivos en /public/brand/ con estos nombres
   * (o cambie las rutas). Mientras no existan, se muestra un logotipo tipográfico provisional.
   */
  logo: {
    // Versión para fondos claros (hueso)
    principal: '/brand/logo-amanadu.svg',
    // Versión para fondos oscuros (azul, verde)
    claro: '/brand/logo-amanadu-claro.svg',
    alt: 'Amanadu',
  },

  /** Manual de marca. Reemplace el archivo en /public/manual/ manteniendo el nombre. */
  manual: {
    pdf: '/manual/manual-de-marca-amanadu.pdf',
    nombreDescarga: 'Manual-de-marca-Amanadu.pdf',
  },

  /**
   * Redes y contacto. Déjelos vacíos hasta tener los datos reales:
   * los enlaces vacíos no se muestran en la página.
   * Iconos disponibles: 'instagram', 'mail', 'globe'.
   */
  redes: [
    // { nombre: 'Instagram', url: 'https://instagram.com/...', icono: 'instagram' },
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
