/**
 * Interacciones de la Biblioteca de juegos:
 * 1. «¿A qué jugamos hoy?»: recomienda juegos según cuatro preguntas.
 * 2. Catálogo: búsqueda por nombre y filtros.
 * Ambas partes leen los datos de las mismas tarjetas del catálogo,
 * así que todo sale de una única base de datos (src/content/juegos).
 */
import {
  aceptaParticipantes,
  cabeEnTiempo,
  sirveEnLugar,
  tieneModalidad,
  normalizar,
  type JuegoIndexado,
  type Participantes,
  type Duracion,
  type Lugar,
  type Modalidad,
} from '../lib/coincidencias';

interface Tarjeta extends JuegoIndexado {
  el: HTMLElement;
  nombreNormalizado: string;
}

const rango = (texto = '') => {
  const [min, max] = texto.split('-').map(Number);
  return { min, max };
};

const tarjetas: Tarjeta[] = [...document.querySelectorAll<HTMLElement>('[data-catalogo] [data-juego]')].map((el) => ({
  el,
  slug: el.dataset.juego!,
  nombre: el.dataset.nombre!,
  nombreNormalizado: normalizar(el.dataset.nombre!),
  jugadores: rango(el.dataset.jugadores),
  duracion: rango(el.dataset.duracion),
  lugares: el.dataset.lugares!.split(' '),
  planes: el.dataset.planes!.split(' '),
  categorias: el.dataset.categorias!.split(' '),
}));

/** Actualiza solo las claves indicadas en la URL, sin recargar la página. */
function actualizarUrl(valores: Record<string, string | null>) {
  const url = new URL(window.location.href);
  for (const [clave, valor] of Object.entries(valores)) {
    if (valor) url.searchParams.set(clave, valor);
    else url.searchParams.delete(clave);
  }
  history.replaceState(null, '', url);
}

/* ------------------------------------------------------------------ */
/* ¿A qué jugamos hoy?                                                 */
/* ------------------------------------------------------------------ */

const herramienta = document.querySelector<HTMLElement>('[data-herramienta]');

if (herramienta) {
  const formulario = herramienta.querySelector<HTMLFormElement>('form')!;
  const zona = herramienta.querySelector<HTMLElement>('[data-resultados]')!;
  const cargando = herramienta.querySelector<HTMLElement>('[data-cargando]')!;
  const encabezado = herramienta.querySelector<HTMLElement>('[data-resultados-titulo]')!;
  const resumen = herramienta.querySelector<HTMLElement>('[data-resultados-resumen]')!;
  const grilla = herramienta.querySelector<HTMLElement>('[data-resultados-grilla]')!;
  const vacio = herramienta.querySelector<HTMLElement>('[data-resultados-vacio]')!;
  const casi = herramienta.querySelector<HTMLElement>('[data-resultados-casi]')!;
  const grillaCasi = herramienta.querySelector<HTMLElement>('[data-resultados-casi-grilla]')!;
  const aviso = herramienta.querySelector<HTMLElement>('[data-aviso]')!;
  const frasesPlan: Record<string, string> = JSON.parse(
    document.getElementById('frases-planes')?.textContent ?? '{}',
  );

  const claves = ['con', 'tiempo', 'donde', 'plan'] as const;
  type Clave = (typeof claves)[number];
  type Respuestas = Partial<Record<Clave, string>>;

  const porQue: Record<Clave, Record<string, string>> = {
    con: {
      '1': 'se disfruta a solas',
      '2': 'funciona muy bien entre dos',
      '3-5': 'va bien para un grupo pequeño',
      '6+': 'aguanta grupos grandes',
    },
    tiempo: {
      'menos-15': 'cabe en menos de 15 minutos',
      '15-30': 'se acomoda a una media hora',
      'mas-30': 'da para una sesión larga',
    },
    donde: {
      casa: 'se puede jugar en casa',
      'aire-libre': 'es para disfrutar al aire libre',
      'cualquier-lugar': 'se lleva a cualquier parte',
    },
    plan: frasesPlan,
  };

  const noEncaja: Record<Clave, string> = {
    con: 'pide otro número de personas',
    tiempo: 'suele tomar otro tiempo',
    donde: 'se juega en otro lugar',
    plan: 'es otro tipo de plan',
  };

  const cumple = (j: Tarjeta, clave: Clave, valor: string): boolean => {
    switch (clave) {
      case 'con':
        return aceptaParticipantes(j, valor as Participantes);
      case 'tiempo':
        return cabeEnTiempo(j, valor as Duracion);
      case 'donde':
        return sirveEnLugar(j, valor as Lugar);
      case 'plan':
        return j.planes.includes(valor);
    }
  };

  const unir = (partes: string[]) =>
    partes.length <= 1 ? partes.join('') : `${partes.slice(0, -1).join(', ')} y ${partes[partes.length - 1]}`;

  const leerRespuestas = (): Respuestas => {
    const datos = new FormData(formulario);
    const r: Respuestas = {};
    for (const c of claves) {
      const v = datos.get(c);
      if (typeof v === 'string' && v) r[c] = v;
    }
    return r;
  };

  const pintarTarjeta = (j: Tarjeta, texto: string) => {
    const copia = j.el.cloneNode(true) as HTMLElement;
    const parrafo = copia.querySelector<HTMLElement>('[data-porque]');
    if (parrafo) {
      parrafo.textContent = texto;
      parrafo.hidden = false;
    }
    // Las copias no participan en los filtros del catálogo.
    copia.removeAttribute('data-juego');
    copia.hidden = false;
    return copia;
  };

  const buscar = (respuestas: Respuestas, desplazar = true) => {
    const elegidas = claves.filter((c) => respuestas[c]);
    aviso.hidden = true;

    if (elegidas.length === 0) {
      aviso.hidden = false;
      aviso.focus();
      return;
    }

    zona.hidden = false;
    cargando.hidden = false;
    encabezado.hidden = true;
    resumen.hidden = true;
    grilla.replaceChildren();
    grillaCasi.replaceChildren();
    vacio.hidden = true;
    casi.hidden = true;
    zona.setAttribute('aria-busy', 'true');
    if (desplazar) zona.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const coinciden = tarjetas.filter((j) => elegidas.every((c) => cumple(j, c, respuestas[c]!)));

    // Primero los juegos cuyo plan principal es el que se pidió.
    if (respuestas.plan) {
      coinciden.sort((a, b) => Number(b.planes[0] === respuestas.plan) - Number(a.planes[0] === respuestas.plan));
    }

    window.setTimeout(() => {
      cargando.hidden = true;
      zona.removeAttribute('aria-busy');
      encabezado.hidden = false;

      if (coinciden.length > 0) {
        encabezado.textContent =
          coinciden.length === 1 ? 'Encontramos un juego para usted' : `Encontramos ${coinciden.length} juegos para usted`;
        resumen.hidden = false;
        for (const j of coinciden) {
          const razones = elegidas.map((c) => porQue[c][respuestas[c]!]).filter(Boolean);
          grilla.append(pintarTarjeta(j, `Se lo recomendamos porque ${unir(razones)}.`));
        }
      } else {
        encabezado.textContent = 'Esta vez no hay un juego que encaje en todo';
        vacio.hidden = false;

        if (elegidas.length > 1) {
          const cercanos = tarjetas
            .map((j) => ({ j, fallan: elegidas.filter((c) => !cumple(j, c, respuestas[c]!)) }))
            .filter((x) => x.fallan.length === 1)
            .slice(0, 6);

          if (cercanos.length > 0) {
            casi.hidden = false;
            for (const { j, fallan } of cercanos) {
              const razones = elegidas.filter((c) => c !== fallan[0]).map((c) => porQue[c][respuestas[c]!]);
              grillaCasi.append(pintarTarjeta(j, `Casi: ${unir(razones)}, aunque ${noEncaja[fallan[0]]}.`));
            }
          }
        }
      }
      encabezado.focus({ preventScroll: true });
    }, 450);

    actualizarUrl(Object.fromEntries(claves.map((c) => [c, respuestas[c] ?? null])));
  };

  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    buscar(leerRespuestas());
  });

  herramienta.querySelector('[data-cambiar]')?.addEventListener('click', () => {
    formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
    formulario.querySelector<HTMLInputElement>('input:checked, input')?.focus({ preventScroll: true });
  });

  herramienta.querySelectorAll('[data-reiniciar]').forEach((boton) =>
    boton.addEventListener('click', () => {
      formulario.reset();
      zona.hidden = true;
      aviso.hidden = true;
      actualizarUrl({ con: null, tiempo: null, donde: null, plan: null });
      formulario.scrollIntoView({ behavior: 'smooth', block: 'start' });
      formulario.querySelector<HTMLInputElement>('input')?.focus({ preventScroll: true });
    }),
  );

  // Respuestas que llegan desde Inicio o desde un enlace compartido.
  const params = new URLSearchParams(window.location.search);
  const iniciales: Respuestas = {};
  for (const c of claves) {
    const v = params.get(c);
    const opcion = v ? formulario.querySelector<HTMLInputElement>(`input[name="${c}"][value="${CSS.escape(v)}"]`) : null;
    if (opcion) {
      opcion.checked = true;
      iniciales[c] = v!;
    }
  }
  if (Object.keys(iniciales).length > 0) buscar(iniciales, true);
}

/* ------------------------------------------------------------------ */
/* Catálogo con búsqueda y filtros                                     */
/* ------------------------------------------------------------------ */

const filtros = document.querySelector<HTMLFormElement>('[data-filtros]');

if (filtros) {
  const contador = document.querySelector<HTMLElement>('[data-contador]')!;
  const vacio = document.querySelector<HTMLElement>('[data-catalogo-vacio]')!;
  const limpiar = document.querySelectorAll<HTMLButtonElement>('[data-limpiar]');
  const campos = ['buscar', 'categoria', 'participantes', 'duracion', 'modalidad', 'lugar'] as const;

  const valor = (nombre: string) =>
    (filtros.elements.namedItem(nombre) as HTMLInputElement | HTMLSelectElement | null)?.value.trim() ?? '';

  const aplicar = () => {
    const f = Object.fromEntries(campos.map((c) => [c, valor(c)])) as Record<(typeof campos)[number], string>;
    const texto = normalizar(f.buscar);
    let visibles = 0;

    for (const j of tarjetas) {
      const ok =
        (!texto || j.nombreNormalizado.includes(texto)) &&
        (!f.categoria || j.categorias.includes(f.categoria)) &&
        (!f.participantes || aceptaParticipantes(j, f.participantes as Participantes)) &&
        (!f.duracion || cabeEnTiempo(j, f.duracion as Duracion)) &&
        (!f.modalidad || tieneModalidad(j, f.modalidad as Modalidad)) &&
        (!f.lugar || sirveEnLugar(j, f.lugar as Lugar));
      j.el.hidden = !ok;
      if (ok) visibles++;
    }

    const activos = campos.some((c) => f[c]);
    contador.textContent =
      visibles === tarjetas.length
        ? `${visibles} juegos`
        : visibles === 1
          ? `1 juego de ${tarjetas.length}`
          : `${visibles} juegos de ${tarjetas.length}`;
    vacio.hidden = visibles > 0;
    limpiar.forEach((b) => (b.hidden = !activos));
    actualizarUrl(Object.fromEntries(campos.map((c) => [c, f[c] || null])));
  };

  // Filtros que llegan en la URL (por ejemplo, desde el pie de página).
  const params = new URLSearchParams(window.location.search);
  for (const c of campos) {
    const v = params.get(c);
    const campo = filtros.elements.namedItem(c) as HTMLInputElement | HTMLSelectElement | null;
    if (v && campo) {
      campo.value = v;
      // Si el valor no existe entre las opciones, el select queda vacío.
      if (campo.value !== v) campo.value = '';
    }
  }

  filtros.addEventListener('input', aplicar);
  filtros.addEventListener('submit', (e) => e.preventDefault());
  limpiar.forEach((b) =>
    b.addEventListener('click', () => {
      filtros.reset();
      aplicar();
      filtros.querySelector<HTMLInputElement>('input')?.focus();
    }),
  );
  aplicar();
}
