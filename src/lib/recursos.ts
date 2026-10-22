import { existsSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Busca un archivo dentro de /public en tiempo de compilación.
 * Si no existe con la extensión indicada, prueba las demás extensiones de imagen,
 * así una foto puede subirse como .jpg, .jpeg, .png o .webp sin editar el contenido.
 * Devuelve la ruta pública encontrada o null.
 */
const extensiones = ['.webp', '.jpg', '.jpeg', '.png', '.avif', '.svg'];

export function resolverPublico(ruta: string | undefined | null): string | null {
  if (!ruta) return null;
  if (/^https?:\/\//.test(ruta)) return ruta;

  const publico = join(process.cwd(), 'public');
  if (existsSync(join(publico, ruta))) return ruta;

  const base = ruta.replace(/\.[a-z0-9]+$/i, '');
  for (const ext of extensiones) {
    if (existsSync(join(publico, base + ext))) return base + ext;
  }
  return null;
}
