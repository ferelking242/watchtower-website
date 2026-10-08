// Spanish prose overlay. Code blocks and markers are inherited from en.js.
const es = {
  overview: {
    title: "Un mapa completo de la aplicación Watchtower.",
    body: "Watchtower reúne un cliente Flutter, bibliotecas locales, extensiones JavaScript, bindings nativos y un servidor headless opcional en un único runtime autoalojable.",
    subsections: [
      ["Qué es Watchtower", "Un centro multimedia multiplataforma para anime, manga, series, música, novelas y juegos. Indexa archivos locales, sigue el progreso, descarga contenido y ejecuta fuentes comunitarias mediante un runtime JavaScript extensible."],
      ["Dos runtimes, un contrato", "La app instalada expone un servidor HTTP embebido en el puerto 4567. La CLI headless reutiliza el mismo motor Flutter y QuickJS para ejecutar fuentes en CI, servidores y SSH sin sesión gráfica."],
      ["Para quién es esta guía", "Para autores de fuentes que escriben extensiones, autoalojadores que ejecutan el servidor headless y contribuidores del cliente Flutter. Cada sección indica qué es obligatorio y qué es opcional."]
    ],
    facts: [
      "Cliente Flutter multiplataforma para anime, manga, música, novelas, juegos y reproducción.",
      "Indexador local, biblioteca, historial, favoritos, calendario y seguimiento de progreso.",
      "Extensiones QuickJS, descargas, anti-bot, bindings Rust y el servidor torrent en Go."
    ]
  },
  "app-map": {
    title: "Una aplicación hecha de superficies componibles.",
    body: "El repositorio separa pantallas de funciones, servicios de datos y runtimes de ejecución. Este mapa sigue el contenido desde una fuente hasta la reproducción y la biblioteca local.",
    subsections: [
      ["Flujo del contenido", "Una extensión devuelve modelos compartidos. Los providers de Riverpod los paginan, las pantallas los convierten en tarjetas e Isar guarda historial, favoritos y archivos indexados."],
      ["Enrutado", "GoRouter conecta onboarding, inicio, búsqueda, detalles, reproducción, bibliotecas, ajustes y módulos especializados sin acoplar los contratos de fuente."],
      ["Runtimes", "Flutter controla la interfaz, QuickJS/Dart ejecuta las fuentes, Rust y Go aportan capacidades nativas y la CLI headless replica el runtime en el servidor."],
      ["Estado y almacenamiento", "Riverpod impulsa la app principal, Isar es la base de datos principal y Hive guarda preferencias. Los módulos de música y explorador de archivos mantienen sus pilas heredadas, aisladas de los contratos de fuente."]
    ],
    facts: [
      "Los módulos de interfaz se agrupan por dominio multimedia, no por proveedor.",
      "Los servicios transversales gestionan caché, descargas, anti-bot, sincronización y diagnóstico.",
      "Las pantallas funcionan con una fuente remota, un archivo local o el servidor headless."
    ]
  },
  "content-types": {
    title: "Manga, watch, música: un modelo compartido.",
    body: "ItemType clasifica las familias de fuentes; el contenido concreto vive en los modelos de manga, capítulo, página, vídeo y pista. Una extensión watch puede cubrir anime, películas o series sin un nuevo renderer nativo.",
    subsections: [
      ["Manga", "Los capítulos usan getPageList(url) para producir las páginas del lector. Los metadatos comparten nombre, imagen, descripción, autor, artista y géneros."],
      ["Watch: anime, película, serie", "Los episodios usan getVideoList(url). Los vídeos llevan URL, calidad, URL original, cabeceras, subtítulos y pistas de audio. Película/serie/anime son metadatos de contenido, no runtimes separados."],
      ["Música y novela", "La música reutiliza las superficies de búsqueda y detalle con pistas, álbumes, artistas y listas; las novelas usan detalle, capítulos y un lector HTML/texto."],
      ["Juegos y plugins", "Game ofrece una superficie de descubrimiento propia. Plugin representa extensiones de utilidad o descarga que usan el manifiesto y el esquema de UI nativa."]
    ],
    facts: [
      "La compatibilidad viene de contratos de datos, no de una pantalla codificada por sitio.",
      "Filtros, preferencias, comentarios, recomendaciones y listas personalizadas son opcionales.",
      "El campo itemType se guarda en Source y elige biblioteca, reproductor e historial."
    ]
  },
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
  "extension-types": {
    title: "Cada familia de extensión tiene su superficie.",
    body: "El tipo de fuente elige las pantallas y acciones disponibles. El mismo motor JS se comparte, pero los resultados se renderizan en el lector de manga, el reproductor watch, el audio, la novela, el juego o el plugin.",
    subsections: [
      ["Manga", "Fuentes de capítulos y páginas con filtros de catálogo, historial de lectura e importación local."],
      ["Watch", "Fuentes de vídeo para anime, películas y series: detalles, episodios, calidad, subtítulos, pistas de audio y extractores de reproductores."],
      ["Música", "Fuentes de catálogo de audio y extensiones de metadatos: álbumes, artistas, pistas, búsqueda, listas y estadísticas."],
      ["Novela, juego, plugin", "Las novelas reutilizan el lector de texto/HTML; los juegos tienen pantallas de descubrimiento; los plugins de utilidad siguen manifest.json y ui/schema.json."]
    ],
    facts: [
      "Watch es una familia de uso: su itemType puede ser anime u otra fuente de vídeo compatible.",
      "El renderer genérico usa las mismas tarjetas, paginación y layouts para fuentes compatibles.",
      "Las capacidades opcionales evitan mostrar una acción que la fuente no implementa."
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
  layouts: {
    title: "ui-layouts.json controla el orden y la forma.",
    body: "Una extensión puede publicar un layout declarativo. Watchtower lo descarga de watchtower-extensions, lo interpreta como UiLayout, lo cachea por fuente y deja que Flutter mapee componentes a widgets nativos.",
    subsections: [
      ["Raíz y caché", "schemaVersion y home.sections son el mínimo útil. browse, detail y player son opcionales. LayoutDownloader lee Source.uiLayout desde raw.githubusercontent.com y LayoutRegistry guarda layouts/<source.id>.json."],
      ["Secciones de inicio", "id identifica getCustomList(id, page). component acepta spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed y masonry, más las presentaciones curadas del registro de componentes."],
      ["Parámetros visuales", "title, icon y accent dan forma a la cabecera. columns, rows, cardStyle, gridOrder y scrollDirection son pistas de render. seeAll abre la página completa, paginated activa la carga por páginas y requiresAuth protege una sección con sesión."],
      ["Browse, detail, player", "Browse describe popular/latest/search con component, columns, cardStyle, results y filters. Detail acepta hero, episodeList y showRecommendations. Player acepta standard o feed."],
      ["Layouts inválidos", "Un componente desconocido cae al renderer de rejilla y se registra. Un archivo mal formado deja la fuente en su inicio estándar Popular/Latest/Search en vez de romper toda la pantalla."]
    ],
    facts: [
      "Sin layout, la fuente vuelve al inicio estándar Popular/Latest/Search.",
      "El bridge toLegacyMap mantiene compatibles las pantallas de inicio existentes.",
      "Un layout se recarga al instalar o actualizar una extensión y se borra al desinstalarla."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen es una superficie controlable.",
    body: "La página Watch compone hero, historial, categorías, filas y catálogo desde la fuente actual. Los layouts JSON pueden reemplazar las listas estándar manteniendo las interacciones nativas.",
    subsections: [
      ["Orden y hero", "El hero usa los cinco primeros elementos banner (con popular como respaldo), rota cada 7 segundos y apunta a un ratio apaisado ancho × 0,62. Reproducir abre el detalle, Info abre la hoja inferior y Mi lista alterna el favorito de Isar."],
      ["Historial", "Continuar viendo lee el historial Isar de la fuente, deduplica por manga, limita a 12 tarjetas y muestra miniatura, episodio/capítulo y progreso."],
      ["Catálogo y búsqueda", "La rejilla de catálogo pagina Popular o una lista personalizada. La búsqueda usa un debounce de 250 ms, sugerencias flotantes, acciones de micro/X y solo confirma resultados al enviar."],
      ["Rendimiento", "La barra observa el scroll con ValueNotifier; el hero vive dentro del CustomScrollView, así el contenido no lo tapa y el scroll evita un setState completo."],
      ["Estados vacíos y de error", "Una sección vacía se oculta. Una sección fallida muestra una tarjeta de reintento con el error bruto, y un bloqueo de Cloudflare lleva al panel de bypass en vez de a un callejón sin salida."]
    ],
    facts: [
      "Las categorías son tarjetas de 132×72 con imagen, degradado y borde.",
      "Las secciones se ocultan cuando sus datos están vacíos.",
      "Las acciones de fuente son coherentes entre manga, anime, películas y series."
    ]
  },
  "home-widgets": {
    title: "Los widgets son adaptadores de datos.",
    body: "WatchtowerHomeScreen es el inicio global de la app. Combina los feeds de AniList y TMDB con la biblioteca local y controla sus filas mediante pestañas de medios.",
    subsections: [
      ["Inicio multimedia", "Las pestañas Todo, Película, Serie, Música, Anime, Asia, Infantil, Occidental, África, TV corta, Fútbol y Juegos eligen las secciones y el hero visibles."],
      ["Tarjetas", "DiscoveryCard tiene variantes standard, ranked, landscape, featured, saga y spotlight. EpisodeCard añade miniatura, título del episodio, duración y barra de progreso para reanudar."],
      ["Datos", "AniList alimenta anime y contenido editorial; TMDB alimenta películas y series; la biblioteca y los providers locales completan las listas de usuario."],
      ["Watch frente al inicio global", "WatchtowerHomeScreen es el inicio global; WatchHomeScreen es el inicio de una fuente/extensión. El primero agrega catálogos, el segundo renderiza el contrato de una fuente."]
    ],
    facts: [
      "Los widgets no conocen las URLs de cada proveedor: consumen modelos normalizados.",
      "Los estados skeleton, vacío, carga y error forman parte de la superficie de inicio.",
      "Los layouts de extensión apuntan sobre todo a WatchHomeScreen y a browse/detail/player."
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
  trackers: {
    title: "El progreso se sincroniza con servicios externos.",
    body: "Watchtower se conecta a AniList, Kitsu, MyAnimeList, Simkl y Trakt para mantener el progreso de visionado y lectura sincronizado entre dispositivos.",
    subsections: [
      ["Trackers compatibles", "AniList, Kitsu, MyAnimeList, Simkl y Trakt. Cada uno tiene su flujo de login y su modelo de estado, normalizados a un modelo Track común."],
      ["Vinculación y sincronización", "Una entrada de biblioteca puede vincularse a una entrada de tracker. Progreso, estado y nota se envían al actualizar, y las actualizaciones inteligentes pueden traer el siguiente episodio o capítulo."],
      ["Errores de tracker", "Un token caducado, una app revocada o un límite de peticiones producen mensajes distintos. Vuelve a autenticarte en Ajustes › Seguimiento; una entrada incorrecta se puede desvincular y revincular."],
      ["Migración", "El flujo de migración masiva mueve entradas de biblioteca entre fuentes conservando los vínculos de tracker, para no perder progreso si una fuente muere."]
    ],
    facts: [
      "Las integraciones de tracker están en lib/services/trackers.",
      "Gestiona los trackers en Ajustes › Seguimiento.",
      "La migración masiva conserva los vínculos de tracker al cambiar de fuente."
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
  cloudflare: {
    title: "Cloudflare y anti-bot",
    body: "Algunas fuentes están tras Cloudflare. Watchtower solo informa un challenge cuando la respuesta trae evidencia real, y ofrece una WebView de bypass que abre la URL exacta que falla.",
    subsections: [
      ["Qué cuenta como challenge", "Un 403/503 simple, un timeout o la palabra challenge no son Cloudflare. Watchtower exige marcadores CDN, una página de challenge interactiva o una página de bloqueo antes de mostrar la interfaz anti-bot."],
      ["Evitar un challenge", "La WebView de bypass abre la URL exacta que falló, nunca la raíz del sitio. Resuelve el CAPTCHA una vez y reintenta la fuente."],
      ["Cambiar el user agent", "El user agent influye en la detección de bots. Cambia el valor por defecto en Ajustes avanzados, reinicia la app y reintenta. Prueba varios navegadores y sistemas."],
      ["Cookies y caché", "Borrar cookies reinicia un login o un estado de challenge. Borrar los datos de WebView deja todo limpio. Ambos están en Ajustes avanzados."],
      ["Si aún falla", "La fuente puede haber subido su protección. Espera, o cambia a otra fuente para el mismo contenido."]
    ],
    facts: [
      "Cloudflare solo se informa cuando hay evidencia real en la respuesta.",
      "La WebView de bypass abre la URL que falla, no la raíz del sitio.",
      "Un fallo personal suele ser un bloqueo o un límite de peticiones, no un bug."
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
