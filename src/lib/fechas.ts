const formato = new Intl.DateTimeFormat('es-CO', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function fechaLarga(fecha: Date): string {
  return formato.format(fecha);
}

/** Minutos de lectura aproximados a 200 palabras por minuto. */
export function minutosLectura(texto: string): number {
  const palabras = texto.trim().split(/\s+/).length;
  return Math.max(1, Math.round(palabras / 200));
}
