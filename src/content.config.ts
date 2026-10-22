import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoriaIds, lugarIds, planIds, lineaIds } from './data/taxonomia';

const imagen = z.object({
  /** Ruta dentro de /public, por ejemplo /images/juegos/parques.jpg */
  src: z.string(),
  /** Texto alternativo: describa lo que se ve en la foto. */
  alt: z.string(),
});

const fuente = z.object({
  titulo: z.string(),
  url: z.url().optional(),
});

/**
 * Juegos: un archivo .md por juego en src/content/juegos/.
 * El nombre del archivo es la dirección de la ficha (parques.md → /biblioteca/parques/).
 * El cuerpo del archivo (opcional) aparece como «Un poco de historia».
 */
const juegos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/juegos' }),
  schema: z.object({
    nombre: z.string(),
    gancho: z.string(),
    descripcion: z.string(),
    imagen,
    categorias: z.array(z.enum(categoriaIds)).min(1),
    jugadores: z.object({
      min: z.number().int().min(1),
      // Use 99 cuando no haya un límite práctico.
      max: z.number().int().min(1),
    }),
    duracion: z.object({
      min: z.number().int().min(1),
      max: z.number().int().min(1),
    }),
    complejidad: z.enum(['baja', 'media', 'alta']),
    lugares: z.array(z.enum(lugarIds)).min(1),
    planes: z.array(z.enum(planIds)).min(1),
    materiales: z.array(z.string()),
    pasos: z.array(z.string()).min(1),
    variantes: z.array(z.object({ nombre: z.string(), descripcion: z.string() })).default([]),
    fuentes: z.array(fuente).default([]),
    destacado: z.boolean().default(false),
  }),
});

/** Artículos de «Conoce y aprende»: un archivo .md por artículo en src/content/articulos/. */
const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    entradilla: z.string(),
    linea: z.enum(lineaIds),
    fecha: z.coerce.date(),
    imagen,
    imagenSecundaria: imagen.extend({ pie: z.string().optional() }).optional(),
    fuentes: z.array(fuente).default([]),
    juegosRelacionados: z.array(z.string()).default([]),
    destacado: z.boolean().default(false),
  }),
});

export const collections = { juegos, articulos };
