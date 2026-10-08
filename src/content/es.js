// Spanish prose overlay. Code blocks and markers are inherited from en.js.
const es = {
  "extension-runtime": {
    title: "JavaScript se ejecuta en un runtime controlado.",
    body: "DartExtensionService carga el código fuente, inyecta MProvider y lo ejecuta en QuickJS. Los bridges exponen red, DOM, extractores, preferencias y modelos Flutter sin exponer la app nativa.",
    subsections: [
      ["Carga", "SourceCodeLanguage distingue Dart, JavaScript y Mihon. El loader también instala o elimina extensiones privadas de Android por el canal nativo."],
      ["Seguridad y aislamiento", "Las llamadas de fuente pasan por bridges controlados. El servidor headless añade registro, caché, autenticación y limitación de peticiones antes de ejecutar."],
      ["Ciclo de vida", "Una fuente se descubre en el catálogo, se instala o activa, se ejecuta bajo demanda y sus preferencias, cookies, caché y layout se pueden restablecer desde sus ajustes."],
      ["Manejo de errores", "Una llamada de bridge fallida devuelve un error tipado a Dart en vez de tumbar el isolate. Los fallos se registran con la operación y la URL culpable para que el diagnóstico señale el paso exacto."]
    ],
    facts: [
      "QuickJS devuelve objetos serializados a los modelos Dart.",
      "El código de extensión puede definir cabeceras, filtros, preferencias y listas personalizadas.",
      "La compatibilidad Mihon permite reutilizar extensiones de manga existentes."
    ]
  },
  "extension-contract": {
    title: "El contrato JS, método a método.",
    body: "ExtensionService define el mínimo compartido. Los métodos opcionales enriquecen la experiencia sin romper una fuente que no los implementa.",
    subsections: [
      ["Navegación del catálogo", "getPopular, getLatestUpdates y search devuelven MPages con list y hasNextPage. Los filtros vienen de getFilterList y las preferencias se guardan por fuente."],
      ["Detalle y reproducción", "getDetail devuelve MManga. Una fuente de manga expone getPageList; una fuente watch expone getVideoList y puede dar calidad, cabeceras, subtítulos y audio."],
      ["Extensiones del contrato", "getCustomList habilita secciones de inicio declaradas por id; recomendaciones, comentarios, sugerencias, cuenta, favoritos y suscripción siguen siendo opcionales con valores vacíos seguros."],
      ["Semántica de fallo", "Devuelve un MPages vacío en vez de lanzar una excepción cuando una página no tiene elementos. Cuando una petición falla de verdad, deja que el error suba para que la interfaz muestre reintento y el diagnóstico registre la causa."]
    ],
    facts: [
      "Las URLs siguen siendo identificadores de navegación entre catálogo, detalle y reproducción.",
      "Las cabeceras y baseUrl los aporta la fuente y se pueden personalizar.",
      "Los errores se registran en Dart y en el runtime headless para diagnóstico."
    ]
  },
  "ui-schema": {
    title: "El manifiesto describe el contrato.",
    body: "Para extensiones de UI y scripts ZeusDL, manifest.json declara identidad, permisos y runtime. El esquema describe campos, acciones y salida renderizados de forma nativa por Flutter.",
    subsections: [
      ["Campos del manifiesto", "manifest.json lleva identidad, versión, autor, permisos de red y requisitos binarios. El id es una cadena reverse-DNS como en.example-tool."],
      ["Contrato de UI nativa", "El contrato de UI renderiza campos URL/texto, selectores, toggles y acciones sin WebView: carga más rápida y funcionamiento sin conexión."],
      ["Protocolo de salida ZeusDL", "Los scripts se comunican por stdout con líneas PROGRESS, STATUS, DONE y ERROR. Watchtower las transmite al registro en tiempo real."],
      ["Errores de validación", "Un manifiesto que falla la validación de esquema se rechaza antes de instalar. El marketplace muestra el campo exacto que falló en lugar de un mensaje genérico."]
    ],
    facts: [
      "manifest.json lleva identidad, versión, autor, permisos de red y requisitos binarios.",
      "El contrato de UI renderiza campos URL/texto, selectores, toggles y acciones sin WebView.",
      "Los scripts ZeusDL se comunican por stdout con PROGRESS, STATUS, DONE y ERROR."
    ]
  },
  api: {
    title: "Dos runtimes, una API.",
    body: "El servidor embebido Dart/shelf escucha en 4567 dentro de la app. La CLI headless reutiliza las mismas operaciones para CI, Docker, Railway o Render.",
    subsections: [
      ["Endpoints", "Ping, descubrimiento de fuentes, catálogo, detalle, vídeo, páginas y filtros reflejan el contrato ExtensionService. Las rutas library, history y proxy sirven la base local y los medios."],
      ["Autenticación", "GET /api/ping sigue siendo público y devuelve la versión del servidor. Las demás rutas pasan por autenticación, limitación de peticiones y el registro de extensiones."],
      ["Respuestas de error", "Un fallo devuelve un cuerpo JSON con la operación y el mensaje en vez de un 500 vacío. Un error de fuente conserva su estado HTTP, lo que distingue un bloqueo de un bug."],
      ["Filtrado NSFW", "Las fuentes NSFW se filtran de los listados y se bloquean con 403 en acceso directo."]
    ],
    facts: [
      "GET /api/ping es público y devuelve la versión del servidor.",
      "Las demás rutas pasan por autenticación, limitación de peticiones y el registro de extensiones.",
      "Las fuentes NSFW se filtran de los listados y se bloquean con 403 en acceso directo."
    ]
  },
  downloads: {
    title: "Las descargas usan motores seleccionables.",
    body: "Watch, manga y novela tienen su propia pestaña de descargas. Un motor por medio, la concurrencia y las reglas de Wi-Fi controlan la cola, y cada tarjeta expone acciones rápidas.",
    subsections: [
      ["Elección de motor", "HYDRA es el motor HLS interno, ZEUS es ZeusDL, ARES es Aria2 y Externe pasa el enlace a ADM o IDM. Elegir el motor equivocado para un stream protegido es un fallo común."],
      ["Concurrencia", "Cada pestaña ajusta conexiones simultáneas (1–20) y elementos simultáneos en cola (1–10). Valores altos aceleran pero consumen más ancho de banda y pueden activar límites de la fuente."],
      ["Archivo y limpieza", "Los capítulos de manga se archivan como carpeta, CBZ, CBR, CB7 o ZIP. El borrado automático tras leer elimina un capítulo marcado como leído, opcionalmente incluyendo los marcados."],
      ["Errores de descarga", "Una descarga fallida conserva sus archivos parciales y ofrece Reintentar. 403/429 suelen ser límite de peticiones o bloqueo anti-bot; 5xx apunta a la fuente. Verifica el enlace en un navegador antes de cambiar ajustes."]
    ],
    facts: [
      "Las reglas de solo Wi-Fi pueden bloquear una descarga hasta que haya red Wi-Fi.",
      "Las actualizaciones inteligentes añaden nuevos episodios o capítulos automáticamente.",
      "La cola de descargas muestra hasta cinco botones de acción rápida por tarjeta."
    ]
  },
  "getting-started": {
    title: "Compilar la app Flutter",
    body: "Instala las toolchains, obtén los paquetes Dart y lanza el cliente multiplataforma.",
    subsections: [
      ["Requisitos", "Flutter 3.38+ / Dart 3.10+, Rust para los bindings flutter_rust_bridge, Java 17 para Android y Go 1.21+ si reconstruyes el cliente torrent."],
      ["Plataformas", "Windows, Linux, macOS, iOS, Android y Web son objetivos del proyecto. Algunas funciones nativas se degradan con elegancia en Web."],
      ["Verificar la instalación", "Ejecuta el analizador antes de tu primer cambio: dart format --output=none --set-exit-if-changed lib y flutter analyze --no-pub. El comando CLI doctor indica si el motor nativo y QuickJS están disponibles."],
      ["Errores de compilación comunes", "Una toolchain Rust ausente rompe el paso de bindings. Un SDK Flutter antiguo rompe la resolución de pub. Un Java 17 ausente rompe la compilación de Android. Arregla la toolchain antes de tocar el código."]
    ],
    facts: [
      "Requisitos: Flutter 3.38+, Dart 3.10+, Rust y Java 17 para Android.",
      "El proyecto apunta a Windows, Linux, macOS, iOS, Android y Web.",
      "La CLI headless se publica desde el workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Embebido o headless.",
    body: "La CLI headless funciona con o sin Docker. Las rutas privadas usan X-Api-Key o Authorization Bearer cuando API_KEY está activa, mientras la app conserva su modo embebido.",
    subsections: [
      ["Docker", "Docker Compose es la vía recomendada para un servidor reproducible. La imagen publicada está en GHCR."],
      ["Otros hosts", "Railway, Render, un VPS y Docker puro están documentados en el repositorio. El servidor mantiene el mismo contrato de fuente que la app."],
      ["Variables de entorno", "API_KEY protege las rutas privadas. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR y RATE_MAX_TOKENS controlan caché, persistencia y limitación de peticiones."],
      ["Errores de despliegue", "Un contenedor que sale de inmediato suele indicar falta de API_KEY o un conflicto de puerto. Revisa los logs, confirma que el puerto está libre y verifica la ruta del repo de extensiones antes de reiniciar."]
    ],
    facts: [
      "Docker Compose es la vía recomendada para un servidor reproducible; la imagen está en GHCR.",
      "Los despliegues en Railway, Render, VPS y Docker están documentados en el repositorio.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR y RATE_MAX_TOKENS controlan el servidor."
    ]
  },
  troubleshooting: {
    title: "Solución de problemas",
    body: "¿Un problema de fuente o de app? Sigue la lista, lee el error exacto y ejecuta un diagnóstico antes de cambiar ajustes.",
    subsections: [
      ["Diagnóstico primario", "Actualiza extensiones y app, refresca el elemento que falla, prueba otro elemento de la misma fuente, abre el sitio en un navegador, cambia de red, borra caché y cookies y reinicia la app. Si un paso lo arregla, la causa es local."],
      ["Leer el error", "Watchtower muestra el error bruto, no un mensaje genérico. Cópialo: el nombre de la operación y la URL que falla señalan el paso exacto. El diagnóstico de extensión registra por separado popular, latest, detail y media."],
      ["Errores HTTP", "403 Forbidden: anti-bot o bloqueo de IP. 404 Not Found: contenido retirado o fuente muerta. 429 Too Many Requests: límite temporal. 5xx: el servidor de la fuente está caído. 1006/1020: bloqueo de IP o regla de firewall."],
      ["Personal o generalizado", "Si solo te afecta a ti, sospecha de Cloudflare, un bloqueo de IP o un límite de peticiones, y reduce las descargas de esa fuente. Si afecta a todos, revisa los trackers de issues de la extensión y la app."],
      ["Problemas de instalación", "Una extensión que no se instala suele fallar la validación de esquema o descargar un archivo corrupto. Vuelve a descargarla y verifica el id y la versión del manifiesto."]
    ],
    facts: [
      "Actualiza las extensiones primero: la mayoría de las roturas se arreglan con una actualización.",
      "La pantalla de diagnóstico separa los pasos popular, latest, detail y media.",
      "Sin ETA para arreglos de extensión; una fuente rota puede necesitar paciencia."
    ]
  },
  cli: {
    title: "CLI headless",
    body: "La compilación de Linux contiene el mismo runtime de extensiones que la app de escritorio y funciona sin X11 ni Wayland, para CI, servidores y SSH.",
    subsections: [
      ["Comandos", "doctor sondea el motor nativo y QuickJS. extensions list y test cargan un repo local. source ejecuta una operación de ExtensionService. plugins validate inspecciona el catálogo de plugins."],
      ["Modos de prueba", "load comprueba que una fuente carga y expone filtros, preferencias y cabeceras. smoke además llama a popular, latest, search, sugerencias, detalles y la operación de medios. deep añade la página dos y sondas HTTP."],
      ["Filtrado", "Filtra por idioma, NSFW/SFW, motor, tag, consulta, ids o tipo. Un directorio de idioma como src/watch/fr prevalece sobre un campo lang obsoleto en el índice."],
      ["Códigos de salida y errores", "0 es éxito, 1 es un chequeo de salud, prueba o validación fallido, y 2 es uso inválido o error de operación no gestionado. Los informes y stdout ocultan credenciales y parámetros de URL firmados."],
      ["Límites conocidos", "Los comandos library, history, progress, cola de descargas y tracker aún no están disponibles: el punto de entrada headless no abre los almacenes Isar/Hive."]
    ],
    facts: [
      "doctor --json informa si el motor nativo y QuickJS están disponibles.",
      "smoke ejecuta popular, latest, search, detalles y la operación de medios.",
      "La salida oculta credenciales comunes y parámetros de URL firmados."
    ]
  }
};

export default es;
