const personajes = {
  juez: { nombre: "Juez", lugar: "juez" },
  secretaria: { nombre: "Secretaria", lugar: "secretaria" },
  abogado: { nombre: "Abogado", lugar: "abogado" },
  gestante: { nombre: "Gestante", lugar: "gestante" },
  pareja: { nombre: "Pareja", lugar: "pareja" },
  publico: { nombre: "Público", lugar: "publico" },
  cristian: { nombre: "Cristian Ramírez", lugar: "cristian" },
  tomas: { nombre: "Tomás Ramírez", lugar: "tomas" },
  sophie: { nombre: "Sophie Rodríguez", lugar: "sophie" },
  maria: { nombre: "María Santos", lugar: "maria" },
  evelin: { nombre: "Evelin Sánchez", lugar: "evelin" }
};

const audios = [
  { nombre: "Tomás Ramírez", archivo: "recursos/Audio Tomas.ogg" },
  { nombre: "Sophie Rodríguez", archivo: "recursos/Audio Sophie.ogg" },
  { nombre: "Evelin Sánchez", archivo: "recursos/Audio Evelyn.mp4" },
  { nombre: "Cristian Ramírez", archivo: "recursos/Audio Cristian.ogg" },
  { nombre: "María Santos", archivo: "recursos/Audio Maria.ogg" }
];

const etapas = [
  {
    titulo: "Etapa 1 de 3 · Artículo 558",
    intro: [
      { quien: "secretaria", texto: "Señoría, el expediente está en la mesa. Una pareja y una mujer gestante piden tres vínculos filiales para el niño." },
      { quien: "gestante", texto: "Las tres personas queremos estar. Por eso llegamos hasta esta sala." },
      { quien: "pareja", texto: "No pedimos un favor. Pedimos que la ley mire lo que ya estamos cuidando." },
      { quien: "juez", texto: "El deseo se escucha. La filiación, en cambio, la regula el Código Civil y Comercial. Empecemos por el artículo 558." }
    ],
    pregunta: "¿Qué dice el artículo 558?",
    opciones: [
      { tipo: "correcta", texto: "La filiación puede surgir por naturaleza, reproducción asistida o adopción; nadie puede tener más de dos vínculos filiales." },
      { tipo: "incorrecta", texto: "El Código permite tres vínculos si todas las personas están de acuerdo." },
      { tipo: "graciosa", texto: "Se agrega un progenitor extra como expansión descargable." }
    ],
    correcciones: {
      incorrecta: {
        kicker: "Respuesta incorrecta",
        titulo: "El acuerdo no crea el tercer vínculo",
        lineas: [
          { quien: "secretaria", texto: "Si bastara con estar de acuerdo, el artículo sería una planilla de firmas." },
          { quien: "juez", texto: "El Código no autoriza tres vínculos aunque todas las personas consientan. El límite no depende del consenso. Volvé a leer qué fuentes de filiación reconoce el 558 y cuántos vínculos admite." }
        ]
      },
      graciosa: {
        kicker: "Respuesta muy incorrecta",
        titulo: "Esa expansión no está en el Código",
        lineas: [
          { quien: "publico", texto: "¿Progenitor descargable? Yo vine con el expediente, no con la consola." },
          { quien: "abogado", texto: "Me temo que no hay un progenitor extra para instalar. El 558 no tiene tienda de contenidos." },
          { quien: "juez", texto: "Buena ocurrencia y mala norma. Elegí de nuevo: naturaleza, reproducción asistida o adopción, y nunca más de dos vínculos." }
        ]
      }
    },
    acierto: [
      { quien: "juez", texto: "Correcto. La filiación puede surgir por naturaleza, por técnicas de reproducción asistida o por adopción. Nadie puede tener más de dos vínculos filiales." },
      { quien: "secretaria", texto: "Queda asentado: este fue el artículo central de la decisión." }
    ]
  },
  {
    titulo: "Etapa 2 de 3 · Artículo 562",
    intro: [
      { quien: "abogado", texto: "El expediente no se queda en el 558. Acá se discutió una técnica de reproducción asistida." },
      { quien: "gestante", texto: "Por eso importa cómo se anotan los vínculos cuando hay una técnica de por medio." },
      { quien: "juez", texto: "Entonces miremos el artículo 562." }
    ],
    pregunta: "¿Qué regula el artículo 562?",
    opciones: [
      { tipo: "correcta", texto: "En reproducción asistida, la filiación se determina por quien dio a luz y quien prestó el consentimiento previo, informado y libre, sin importar quién aportó los gametos." },
      { tipo: "incorrecta", texto: "La filiación se determina únicamente por quién aportó los gametos." },
      { tipo: "graciosa", texto: "El laboratorio elige a los progenitores tirando una moneda." }
    ],
    correcciones: {
      incorrecta: {
        kicker: "Respuesta incorrecta",
        titulo: "Los gametos no deciden solos",
        lineas: [
          { quien: "pareja", texto: "Yo también creía que todo dependía de quién aportó los gametos." },
          { quien: "juez", texto: "Es una confusión frecuente, y el artículo la corrige. En la reproducción asistida mandan quien dio a luz y quien prestó el consentimiento previo, informado y libre. El aporte de gametos no determina la filiación. Mirá otra vez las opciones." }
        ]
      },
      graciosa: {
        kicker: "Respuesta muy incorrecta",
        titulo: "Acá no se sortea la filiación",
        lineas: [
          { quien: "publico", texto: "Si el laboratorio tira una moneda, yo pido estar en la tribuna de un casino, no en un juzgado." },
          { quien: "secretaria", texto: "Queda asentado: nadie elige progenitores al azar." },
          { quien: "juez", texto: "El artículo 562 no delega la filiación en una moneda. La clave es el parto y el consentimiento previo, informado y libre. Dale, otra oportunidad." }
        ]
      }
    },
    acierto: [
      { quien: "juez", texto: "Así se lee el 562. En la reproducción asistida, la filiación se determina por quien dio a luz y por quien prestó el consentimiento previo, informado y libre, sin importar quién aportó los gametos." },
      { quien: "abogado", texto: "En el caso se discutió la inscripción de los vínculos surgidos de una técnica de reproducción asistida." }
    ]
  },
  {
    titulo: "Etapa 3 de 3 · Artículo 639",
    intro: [
      { quien: "juez", texto: "Queda un principio que no podemos dejar afuera cuando hay un niño en el centro del expediente." },
      { quien: "gestante", texto: "Queremos que también se lo tenga en cuenta a él, no solo a los adultos." }
    ],
    pregunta: "¿Qué principio orienta las decisiones sobre niñas, niños y adolescentes?",
    opciones: [
      { tipo: "correcta", texto: "El artículo 639 incluye el interés superior del niño, su autonomía progresiva y el derecho a ser oído." },
      { tipo: "incorrecta", texto: "La opinión del niño nunca debe ser considerada." },
      { tipo: "graciosa", texto: "Decide el personaje con más puntos de experiencia." }
    ],
    correcciones: {
      incorrecta: {
        kicker: "Respuesta incorrecta",
        titulo: "La voz del niño entra en el expediente",
        lineas: [
          { quien: "publico", texto: "Callarlo siempre sería darle la espalda a quien está en el centro del caso." },
          { quien: "juez", texto: "La opinión del niño no se descarta. El artículo 639 incluye el interés superior, la autonomía progresiva y el derecho a ser oído. Según su edad y madurez, su voz forma parte de la decisión. Probá de nuevo." }
        ]
      },
      graciosa: {
        kicker: "Respuesta muy incorrecta",
        titulo: "En esta sala no se sube de nivel",
        lineas: [
          { quien: "abogado", texto: "Si ganara quien tiene más experiencia, yo reclamo el nivel máximo y cerramos hoy." },
          { quien: "publico", texto: "Yo puse puntos en objeción dramática. ¿Eso cuenta?" },
          { quien: "juez", texto: "Los puntos de experiencia no son fuente del derecho. Orienta el artículo 639: interés superior, autonomía progresiva y derecho a ser oído. Elegí otra vez." }
        ]
      }
    },
    acierto: [
      { quien: "juez", texto: "Exacto. El artículo 639 incluye el interés superior del niño, su autonomía progresiva y el derecho a ser oído." },
      { quien: "secretaria", texto: "Sirve para sumar la perspectiva de derechos del niño. No elimina, por sí solo, el límite específico del artículo 558." }
    ]
  }
];

const cierre = [
  { quien: "juez", texto: "La Corte revocó la autorización de triple filiación y devolvió el expediente para un nuevo pronunciamiento." },
  { quien: "secretaria", texto: "La resolución judicial aplicó el límite vigente de dos vínculos." },
  { quien: "gestante", texto: "Me queda la claridad: se escucha al niño, y aun así el artículo 558 pone un tope de dos." },
  { quien: "juez", texto: "Antes de la conclusión del grupo, escucho a la audiencia." },
  { quien: "cristian", texto: "Aun cuando surgieron dudas a nivel grupal de cuál sería la mejor noticia, logramos acordar que abarcaba un abanico de opciones para este trabajo." },
  { quien: "tomas", texto: "Esta noticia fue ideal para poder explicar algunos cambios en leyes y si bien tuvimos dudas, logramos ponernos de acuerdo." },
  { quien: "sophie", texto: "Al ver la noticia consideramos que esta podría ser la que mejor aborda los cambios de la ley." },
  { quien: "maria", texto: "Estoy de acuerdo con la noticia. Me pareció muy importante cada punto del mismo." },
  { quien: "evelin", texto: "Como grupo, elegimos esta noticia porque consideramos que se relaciona directamente con los cambios de paradigma introducidos por la Ley 26.994 y con la forma en que el Derecho Civil y Comercial se adapta a las nuevas realidades sociales." }
];

const globo = document.querySelector("#globo");
const globoNombre = document.querySelector("#globo-nombre");
const globoTexto = document.querySelector("#globo-texto");
const opciones = document.querySelector("#opciones");
const pregunta = document.querySelector("#pregunta");
const lista = document.querySelector("#lista-opciones");
const etapaLabel = document.querySelector("#etapa-label");
const modalInicio = document.querySelector("#modal-inicio");
const modalCorreccion = document.querySelector("#modal-correccion");
const correccionKicker = document.querySelector("#correccion-kicker");
const correccionTitulo = document.querySelector("#correccion-titulo");
const correccionLineas = document.querySelector("#correccion-lineas");
const siguiente = document.querySelector("#siguiente");
const cerrarRecurso = document.querySelector("#cerrar-recurso");
const presentacion = document.querySelector("#presentacion");
const panelConclusion = document.querySelector("#panel-conclusion");
const panelImagen = document.querySelector("#panel-imagen");
const listaRecursos = document.querySelector("#lista-recursos");
const listaAudios = document.querySelector("#lista-audios");
const reproductor = new Audio();

let cola = [];
let alTerminar = null;
let indiceEtapa = 0;
let modo = "presentacion";
let recursoAbierto = null;

function pulsarClase(elemento, clase) {
  elemento.classList.remove(clase);
  void elemento.offsetWidth;
  elemento.classList.add(clase);
}

function actualizarSiguiente() {
  const hayDialogo = document.querySelector("dialog[open]");
  const mostrar = !hayDialogo && (modo === "presentacion" || modo === "dialogo" || modo === "conclusion" || modo === "imagen");
  const estabaOculto = siguiente.classList.contains("oculto");
  siguiente.classList.toggle("oculto", !mostrar);
  if (mostrar && estabaOculto) pulsarClase(siguiente, "entra");
  cerrarRecurso.classList.toggle("oculto", modo !== "recurso");
}

function mezclar(items) {
  const copia = items.slice();
  for (let i = copia.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function mostrarLinea(linea) {
  const personaje = personajes[linea.quien];
  globo.dataset.lugar = personaje.lugar;
  globoNombre.textContent = personaje.nombre;
  globoTexto.textContent = linea.texto;
  globo.classList.toggle("largo", linea.texto.length > 180);
  globo.classList.remove("oculto");
  pulsarClase(globo, "entra");
}

function avanzar() {
  if (cola.length === 0) {
    const continuar = alTerminar;
    alTerminar = null;
    if (continuar) continuar();
    return;
  }
  mostrarLinea(cola.shift());
}

function decir(lineas, despues) {
  modo = "dialogo";
  cola = lineas.slice();
  alTerminar = despues || null;
  actualizarSiguiente();
  avanzar();
}

function mostrarOpciones(etapa) {
  modo = "opciones";
  mostrarLinea({ quien: "juez", texto: etapa.pregunta });
  actualizarSiguiente();
  pregunta.textContent = etapa.pregunta;
  lista.replaceChildren();
  mezclar(etapa.opciones).forEach((opcion) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = opcion.texto;
    boton.addEventListener("click", () => resolver(etapa, opcion.tipo));
    lista.appendChild(boton);
  });
  opciones.classList.remove("oculto");
  pulsarClase(opciones, "entra");
}

function abrirCorreccion(correccion) {
  correccionKicker.textContent = correccion.kicker;
  correccionTitulo.textContent = correccion.titulo;
  correccionLineas.replaceChildren();
  correccion.lineas.forEach((linea) => {
    const parrafo = document.createElement("p");
    parrafo.className = "linea-modal";
    const nombre = document.createElement("strong");
    nombre.textContent = personajes[linea.quien].nombre + ": ";
    parrafo.append(nombre, document.createTextNode(linea.texto));
    correccionLineas.appendChild(parrafo);
  });
  modo = "correccion";
  actualizarSiguiente();
  modalCorreccion.showModal();
}

function resolver(etapa, tipo) {
  if (tipo !== "correcta") {
    abrirCorreccion(etapa.correcciones[tipo]);
    return;
  }
  opciones.classList.add("oculto");
  decir(etapa.acierto, () => {
    indiceEtapa += 1;
    if (indiceEtapa < etapas.length) {
      comenzarEtapa();
      return;
    }
    etapaLabel.textContent = "Cierre del caso";
    decir(cierre, mostrarConclusion);
  });
}

function mostrarConclusion() {
  modo = "conclusion";
  globo.classList.add("oculto");
  panelImagen.classList.add("oculto");
  panelConclusion.classList.remove("oculto");
  etapaLabel.textContent = "Conclusión del grupo";
  pulsarClase(etapaLabel, "cambia");
  actualizarSiguiente();
}

function mostrarImagen() {
  modo = "imagen";
  panelConclusion.classList.add("oculto");
  panelImagen.classList.remove("oculto");
  etapaLabel.textContent = "Imagen representativa";
  pulsarClase(etapaLabel, "cambia");
  actualizarSiguiente();
}

function terminarRecorrido() {
  modo = "final";
  panelConclusion.classList.add("oculto");
  panelImagen.classList.add("oculto");
  listaRecursos.classList.remove("oculto");
  etapaLabel.textContent = "Recursos del grupo";
  actualizarSiguiente();
}

function abrirRecurso(tipo) {
  recursoAbierto = tipo;
  modo = "recurso";
  presentacion.classList.toggle("oculto", tipo !== "logo");
  panelConclusion.classList.toggle("oculto", tipo !== "conclusion");
  panelImagen.classList.toggle("oculto", tipo !== "imagen");
  actualizarSiguiente();
}

function cerrarVistaRecurso() {
  presentacion.classList.add("oculto");
  panelConclusion.classList.add("oculto");
  panelImagen.classList.add("oculto");
  recursoAbierto = null;
  modo = "final";
  actualizarSiguiente();
}

function pulsarSiguiente() {
  if (siguiente.classList.contains("oculto")) return;
  if (modo === "presentacion") {
    presentacion.classList.add("oculto");
    modo = "esperaInicio";
    actualizarSiguiente();
    modalInicio.showModal();
    return;
  }
  if (modo === "dialogo") {
    avanzar();
    return;
  }
  if (modo === "conclusion") {
    mostrarImagen();
    return;
  }
  if (modo === "imagen") terminarRecorrido();
}

function comenzarEtapa() {
  const etapa = etapas[indiceEtapa];
  etapaLabel.textContent = etapa.titulo;
  pulsarClase(etapaLabel, "cambia");
  pulsarClase(document.querySelector("#escena"), "cambia");
  decir(etapa.intro, () => mostrarOpciones(etapa));
}

function reiniciar() {
  reproductor.pause();
  indiceEtapa = 0;
  cola = [];
  alTerminar = null;
  recursoAbierto = null;
  opciones.classList.add("oculto");
  globo.classList.add("oculto");
  listaRecursos.classList.add("oculto");
  panelConclusion.classList.add("oculto");
  panelImagen.classList.add("oculto");
  presentacion.classList.remove("oculto");
  if (modalInicio.open) modalInicio.close();
  if (modalCorreccion.open) modalCorreccion.close();
  document.querySelectorAll(".nota-voz").forEach((nota) => {
    nota.setAttribute("aria-pressed", "false");
    nota.querySelector(".nota-play").setAttribute("aria-label", "Reproducir " + nota.dataset.nombre);
    actualizarNota(nota, 0, Number(nota.dataset.duracion) || 0);
  });
  etapaLabel.textContent = "Antes de la audiencia";
  modo = "presentacion";
  actualizarSiguiente();
}

const cantidadBarras = 26;

function formatoTiempo(segundos) {
  if (!Number.isFinite(segundos) || segundos < 0) return "0:00";
  const total = Math.floor(segundos);
  return Math.floor(total / 60) + ":" + String(total % 60).padStart(2, "0");
}

function ondaEstable(archivo) {
  let semilla = 0;
  for (let i = 0; i < archivo.length; i += 1) semilla = (semilla * 33 + archivo.charCodeAt(i)) % 997;
  return Array.from({ length: cantidadBarras }, (_, indice) => {
    semilla = (semilla * 17 + indice * 13) % 997;
    return 0.28 + (semilla % 70) / 100;
  });
}

function pintarOnda(onda, picos) {
  const punto = document.createElement("span");
  punto.className = "nota-punto";
  onda.replaceChildren();
  picos.forEach((pico) => {
    const barra = document.createElement("span");
    barra.className = "nota-barra";
    barra.style.setProperty("--alto", Math.round(pico * 100) + "%");
    onda.appendChild(barra);
  });
  onda.appendChild(punto);
}

function notaActiva() {
  const archivo = reproductor.dataset.archivo;
  if (!archivo) return null;
  return document.querySelector(".nota-voz[data-audio=\"" + CSS.escape(archivo) + "\"]");
}

function actualizarNota(nota, segundos, duracion) {
  const onda = nota.querySelector(".nota-onda");
  const barras = onda.querySelectorAll(".nota-barra");
  const ratio = duracion ? Math.min(1, Math.max(0, segundos / duracion)) : 0;
  const oidas = Math.round(ratio * barras.length);
  barras.forEach((barra, indice) => barra.classList.toggle("oida", indice < oidas));
  onda.style.setProperty("--avance", (ratio * 100) + "%");
  onda.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
  const enCurso = nota.getAttribute("aria-pressed") === "true" || segundos > 0.25;
  nota.querySelector(".nota-tiempo").textContent = formatoTiempo(enCurso ? segundos : (duracion || 0));
}

async function obtenerPicos(archivo) {
  const respuesta = await fetch(archivo);
  const crudo = await respuesta.arrayBuffer();
  const contexto = new AudioContext();
  const buffer = await contexto.decodeAudioData(crudo.slice(0));
  await contexto.close();
  const canal = buffer.getChannelData(0);
  const bloque = Math.max(1, Math.floor(canal.length / cantidadBarras));
  const picos = [];
  for (let i = 0; i < cantidadBarras; i += 1) {
    let maximo = 0;
    const inicio = i * bloque;
    const paso = Math.max(1, Math.floor(bloque / 80));
    for (let j = 0; j < bloque; j += paso) {
      const valor = Math.abs(canal[inicio + j] || 0);
      if (valor > maximo) maximo = valor;
    }
    picos.push(maximo);
  }
  const techo = Math.max(...picos, 0.01);
  return {
    picos: picos.map((pico) => Math.max(0.18, pico / techo)),
    duracion: buffer.duration
  };
}

function prepararAudios() {
  audios.forEach((audio) => {
    const nota = document.createElement("article");
    nota.className = "nota-voz boton-barra";
    nota.dataset.audio = audio.archivo;
    nota.dataset.nombre = audio.nombre;
    nota.setAttribute("aria-pressed", "false");

    const nombre = document.createElement("p");
    nombre.className = "nota-nombre";
    nombre.textContent = audio.nombre;

    const fila = document.createElement("div");
    fila.className = "nota-fila";

    const play = document.createElement("button");
    play.type = "button";
    play.className = "nota-play";
    play.setAttribute("aria-label", "Reproducir " + audio.nombre);
    const icono = document.createElement("span");
    icono.className = "icono-play";
    icono.setAttribute("aria-hidden", "true");
    play.appendChild(icono);

    const onda = document.createElement("div");
    onda.className = "nota-onda";
    onda.tabIndex = 0;
    onda.setAttribute("role", "slider");
    onda.setAttribute("aria-valuemin", "0");
    onda.setAttribute("aria-valuemax", "100");
    onda.setAttribute("aria-valuenow", "0");
    onda.setAttribute("aria-label", "Avance del audio de " + audio.nombre);
    pintarOnda(onda, ondaEstable(audio.archivo));

    const tiempo = document.createElement("span");
    tiempo.className = "nota-tiempo";
    tiempo.textContent = "0:00";

    fila.append(play, onda, tiempo);
    nota.append(nombre, fila);
    listaAudios.appendChild(nota);

    play.addEventListener("click", () => reproducir(nota));
    onda.addEventListener("click", (evento) => buscarEnOnda(nota, evento));
    onda.addEventListener("keydown", (evento) => {
      if (evento.key !== "ArrowRight" && evento.key !== "ArrowLeft") return;
      evento.preventDefault();
      evento.stopPropagation();
      if (reproductor.dataset.archivo !== audio.archivo || !reproductor.duration) return;
      const delta = evento.key === "ArrowRight" ? 2 : -2;
      reproductor.currentTime = Math.min(reproductor.duration, Math.max(0, reproductor.currentTime + delta));
    });

    obtenerPicos(audio.archivo).then((resultado) => {
      nota.dataset.duracion = String(resultado.duracion);
      pintarOnda(onda, resultado.picos);
      const activo = reproductor.dataset.archivo === audio.archivo;
      actualizarNota(nota, activo ? reproductor.currentTime : 0, resultado.duracion);
    }).catch(() => {
      actualizarNota(nota, 0, 0);
    });
  });
}

function marcarReproduccion(nota, activo) {
  nota.setAttribute("aria-pressed", activo ? "true" : "false");
  nota.querySelector(".nota-play").setAttribute("aria-label", (activo ? "Pausar " : "Reproducir ") + nota.dataset.nombre);
}

function reproducir(nota) {
  const archivo = nota.dataset.audio;
  const mismo = reproductor.dataset.archivo === archivo;
  if (mismo && !reproductor.paused) {
    reproductor.pause();
    marcarReproduccion(nota, false);
    return;
  }
  document.querySelectorAll(".nota-voz").forEach((otra) => {
    if (otra !== nota) {
      marcarReproduccion(otra, false);
      actualizarNota(otra, 0, Number(otra.dataset.duracion) || 0);
    }
  });
  if (!mismo) {
    reproductor.src = archivo;
    reproductor.dataset.archivo = archivo;
  }
  marcarReproduccion(nota, true);
  reproductor.play();
}

function buscarEnOnda(nota, evento) {
  const rect = evento.currentTarget.getBoundingClientRect();
  const ratio = Math.min(1, Math.max(0, (evento.clientX - rect.left) / rect.width));
  const archivo = nota.dataset.audio;
  const aplicar = () => {
    if (!reproductor.duration) return;
    reproductor.currentTime = ratio * reproductor.duration;
    actualizarNota(nota, reproductor.currentTime, reproductor.duration);
  };
  document.querySelectorAll(".nota-voz").forEach((otra) => {
    if (otra !== nota) marcarReproduccion(otra, false);
  });
  marcarReproduccion(nota, true);
  if (reproductor.dataset.archivo !== archivo) {
    reproductor.src = archivo;
    reproductor.dataset.archivo = archivo;
    reproductor.addEventListener("loadedmetadata", function alCargar() {
      reproductor.removeEventListener("loadedmetadata", alCargar);
      aplicar();
    });
  } else {
    aplicar();
  }
  reproductor.play();
}

reproductor.addEventListener("timeupdate", () => {
  const nota = notaActiva();
  if (!nota) return;
  actualizarNota(nota, reproductor.currentTime, reproductor.duration);
});

reproductor.addEventListener("loadedmetadata", () => {
  const nota = notaActiva();
  if (!nota || !reproductor.duration) return;
  nota.dataset.duracion = String(reproductor.duration);
});

reproductor.addEventListener("ended", () => {
  const nota = notaActiva();
  document.querySelectorAll(".nota-voz").forEach((otra) => marcarReproduccion(otra, false));
  if (nota) actualizarNota(nota, 0, Number(nota.dataset.duracion) || 0);
});

globo.addEventListener("click", () => {
  if (modo === "dialogo") avanzar();
});

siguiente.addEventListener("click", pulsarSiguiente);
cerrarRecurso.addEventListener("click", cerrarVistaRecurso);

document.querySelector("#comenzar").addEventListener("click", () => {
  modalInicio.close();
  comenzarEtapa();
});

document.querySelector("#elegir-de-nuevo").addEventListener("click", () => {
  modalCorreccion.close();
  modo = "opciones";
  actualizarSiguiente();
});

document.querySelector("#reiniciar").addEventListener("click", reiniciar);

document.querySelectorAll("[data-recurso]").forEach((boton) => {
  boton.addEventListener("click", () => abrirRecurso(boton.dataset.recurso));
});

document.addEventListener("keydown", (evento) => {
  if (evento.code !== "Space" || evento.repeat) return;
  if (evento.target.closest(".nota-voz")) return;
  if (document.querySelector("dialog[open]")) return;
  if (modo === "recurso") return;
  if (siguiente.classList.contains("oculto")) return;
  evento.preventDefault();
  pulsarSiguiente();
});

prepararAudios();
actualizarSiguiente();
