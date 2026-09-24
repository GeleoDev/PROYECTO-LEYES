const personajes = {
  juez: { nombre: "Juez", lugar: "juez" },
  secretaria: { nombre: "Secretaria", lugar: "secretaria" },
  abogado: { nombre: "Abogado", lugar: "abogado" },
  gestante: { nombre: "Gestante", lugar: "gestante" },
  pareja: { nombre: "Pareja", lugar: "pareja" },
  publico: { nombre: "Público", lugar: "publico" }
};

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
  { quien: "juez", texto: "Ahora el grupo comparte su opinión. Los escucho." },
  { quien: "pareja", texto: "Queríamos tres vínculos porque somos tres cuidando. Entiendo que la ley, hoy, no los autoriza." },
  { quien: "gestante", texto: "Me queda la claridad: se escucha al niño, y aun así el artículo 558 pone un tope de dos." },
  { quien: "abogado", texto: "El expediente vuelve. Habrá un nuevo pronunciamiento, dentro de esa regla." },
  { quien: "publico", texto: "Al final no era un parche ni una moneda. Era leer el Código hasta el final." }
];

const globo = document.querySelector("#globo");
const globoNombre = document.querySelector("#globo-nombre");
const globoTexto = document.querySelector("#globo-texto");
const globoSeguir = document.querySelector("#globo-seguir");
const opciones = document.querySelector("#opciones");
const pregunta = document.querySelector("#pregunta");
const lista = document.querySelector("#lista-opciones");
const etapaLabel = document.querySelector("#etapa-label");
const modalInicio = document.querySelector("#modal-inicio");
const modalCorreccion = document.querySelector("#modal-correccion");
const modalCierre = document.querySelector("#modal-cierre");
const correccionKicker = document.querySelector("#correccion-kicker");
const correccionTitulo = document.querySelector("#correccion-titulo");
const correccionLineas = document.querySelector("#correccion-lineas");

let cola = [];
let alTerminar = null;
let indiceEtapa = 0;

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
  globo.classList.remove("oculto");
  globoSeguir.classList.toggle("oculto", cola.length === 0 && !alTerminar);
}

function avanzar() {
  if (cola.length === 0) {
    const continuar = alTerminar;
    alTerminar = null;
    if (continuar) continuar();
    return;
  }
  mostrarLinea(cola.shift());
  globoSeguir.classList.toggle("oculto", cola.length === 0 && !alTerminar);
}

function decir(lineas, despues) {
  cola = lineas.slice();
  alTerminar = despues || null;
  globoSeguir.classList.remove("oculto");
  avanzar();
}

function mostrarOpciones(etapa) {
  mostrarLinea({ quien: "juez", texto: etapa.pregunta });
  globoSeguir.classList.add("oculto");
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
    decir(cierre, () => {
      globo.classList.add("oculto");
      modalCierre.showModal();
    });
  });
}

function comenzarEtapa() {
  const etapa = etapas[indiceEtapa];
  etapaLabel.textContent = etapa.titulo;
  decir(etapa.intro, () => mostrarOpciones(etapa));
}

function reiniciar() {
  indiceEtapa = 0;
  opciones.classList.add("oculto");
  globo.classList.add("oculto");
  cola = [];
  alTerminar = null;
  if (modalCierre.open) modalCierre.close();
  etapaLabel.textContent = "Antes de la audiencia";
  modalInicio.showModal();
}

globoSeguir.addEventListener("click", avanzar);
globo.addEventListener("click", (evento) => {
  if (evento.target === globoSeguir) return;
  avanzar();
});

document.querySelector("#comenzar").addEventListener("click", () => {
  modalInicio.close();
  comenzarEtapa();
});

document.querySelector("#elegir-de-nuevo").addEventListener("click", () => {
  modalCorreccion.close();
});

document.querySelector("#reiniciar").addEventListener("click", reiniciar);

modalInicio.showModal();
