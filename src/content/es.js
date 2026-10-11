// es prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const es = {
  "getting-started": {
    title: "Watchtower en diez minutos.",
    body: "Watchtower es una aplicación para anime, series, manga, novelas y música. Se envía vacío a propósito: tú eliges las fuentes y todo lo que miras o lees permanece en tu dispositivo.",
    subsections: [
      ["lo que necesitas", "Un teléfono o tableta con Android 8.0 o posterior para la aplicación completa. Cualquier máquina Linux, macOS o Windows puede ejecutar la línea de comandos sin cabeza, sin sesión gráfica. Una cosa no es opcional: una URL del repositorio fuente, porque Watchtower no contiene contenido propio."],
      ["Añade tu primera fuente", "Abra Más, luego Extensiones, luego Repositorios. Pegue una URL del repositorio que termine en index.min.json y confirme. La lista de extensiones se completa tan pronto como se carga el índice."],
      ["Instalar extensiones", "Cada extensión enseña a Watchtower un sitio web. Toque instalar junto a los que desee, permita la instalación desde fuentes desconocidas si Android lo solicita y las fuentes aparecerán en Explorar."],
      ["Construye tu biblioteca", "Abra una fuente, busque una serie y toque Agregar a la biblioteca. A partir de ese momento, Watchtower rastrea su progreso, busca nuevos capítulos y mantiene la entrada en un solo lugar."],
      ["Elija sus tipos de medios", "Watchtower maneja manga, anime, novelas y música uno al lado del otro. Cada tipo se abre en su propio lector o reproductor, elegido automáticamente entre lo que declara la extensión."],
      ["Sorpresas comunes en la primera ejecución", "Una pantalla de exploración vacía significa que aún no hay ninguna extensión instalada, ni una aplicación defectuosa. Un repositorio que no se carga suele ser una URL obsoleta o un portal de red cautivo."],
      ["Si la primera pantalla parece vacía", "Una lista de exploración vacía significa que aún no hay ninguna extensión instalada, ni una aplicación defectuosa. Si un repositorio no se carga, verifique que su dirección termine en index.min.json, luego intente nuevamente en otra red antes de asumir que ya no está."],
    ],
    facts: [
      "Watchtower se envía sin contenido. Las fuentes son tuyas para elegir.",
      "Las extensiones son JavaScript normal que se ejecuta en un entorno limitado.",
      "Su biblioteca reside en su dispositivo, no en un servidor Watchtower.",
      "Android 8.0+ es el piso para la aplicación móvil.",
      "Una lista de exploración vacía significa que no hay ninguna extensión instalada, no un error.",
    ]
  },
  installation: {
    title: "Instale la compilación que coincida con su dispositivo.",
    body: "Hay tres formas de ejecutar Watchtower: la aplicación de Android, una versión de escritorio o una línea de comandos de Linux para servidores. Comparten un motor, por lo que una fuente que funciona en uno funciona en todos.",
    subsections: [
      ["Androide", "El objetivo principal y la única compilación que obtiene todas las funciones primero. Descargue el APK de lanzamiento o un APK de vista previa si desea probar el próximo trabajo. Habilite la instalación desde fuentes desconocidas cuando Android lo solicite, porque Watchtower no se distribuye a través de una tienda."],
      ["De oficina", "Existen versiones de Windows, Linux y macOS para mirar en una pantalla más grande. Compírelos desde el código fuente con Flutter, ya que los artefactos de lanzamiento se publican primero para Android y la CLI de Linux."],
      ["Línea de comando de Linux", "Un único binario sin ventana. Ejecuta el mismo motor de extensión, por lo que puede recuperar, buscar y descargar en un servidor o a través de SSH. El script del instalador lo copia junto con sus archivos de ejecución en un prefijo que usted elija."],
      ["Estable o vista previa", "Las compilaciones de vista previa rastrean el código más nuevo y se rompen con más frecuencia. Mantenga activadas las copias de seguridad automáticas si ejecuta una y espere reinstalar la versión de lanzamiento si algo sale mal."],
      ["Construyendo desde la fuente", "Necesita Flutter 3.38 o posterior, Dart 3.10 o posterior y una cadena de herramientas Rust. Solo se necesita Go 1.21 o posterior si desea reconstruir el servidor de torrent usted mismo."],
      ["Mantenlo actualizado", "Watchtower le avisa cuando existe una nueva versión y la instala de la misma manera que la primera vez. Su biblioteca y configuración se mantienen intactas."],
      ["Si la instalación falla", "Los mensajes comunes del instalador se explican en la página de errores. Una discrepancia de firma significa que ya está instalada una copia firmada de manera diferente y que debe eliminarse primero, una descarga dañada debe recuperarse nuevamente y una discrepancia en la arquitectura del procesador significa que se descargó la compilación incorrecta."],
    ],
    facts: [
      "Android es la única plataforma con versiones publicadas.",
      "El binario sin cabeza está diseñado para Linux x86_64.",
      "Se requiere Rust para construir desde la fuente; Ir es opcional.",
      "La vista previa y las instalaciones estables comparten los mismos datos, por lo que al cambiar se conserva tu biblioteca.",
      "Elimine una instalación conflictiva antes de reemplazarla con una compilación firmada de manera diferente.",
    ]
  },
  "adding-sources": {
    title: "De dónde proviene tu contenido.",
    body: "Watchtower tiene dos tipos de fuentes. Las fuentes en línea llegan como extensiones de un repositorio que usted agrega. Las fuentes sin conexión son carpetas en su propio dispositivo. La mayoría de la gente usa ambos.",
    subsections: [
      ["Agregar un repositorio", "Vaya a Más, luego Extensiones, luego Repositorios y pegue la URL del repositorio. La aplicación recupera el índice y enumera todas las extensiones que contiene. Puedes agregar varios repositorios a la vez."],
      ["Instala lo que necesitas", "Actualice la lista, luego toque instalar junto a una extensión. Es posible que Android solicite permiso para instalar aplicaciones desconocidas la primera vez. Las extensiones instaladas aparecen inmediatamente en Explorar."],
      ["Mantenga las fuentes actualizadas", "Actualice un repositorio cada vez que desee versiones de extensión más nuevas. Una actualización reemplaza la extensión vigente y mantiene su configuración, por lo que no hay nada que reconfigurar."],
      ["Usa tus propios archivos", "Apunte Watchtower a una carpeta de manga o anime que ya posee y se convertirá en una fuente normal. Sin repositorio, sin red, sin cuenta."],
      ["Sólo confía en lo que sabes", "Un repositorio puede servir cualquier cosa y una extensión se ejecuta con el mismo acceso que la aplicación. Trate un repositorio desconocido de la misma manera que trataría a un instalador desconocido."],
      ["Cuando un repositorio falla", "Una URL que no se carga suele estar caducada, bloqueada o copiada sin su ruta de índice. Verifique que la dirección termine en index.min.json antes de asumir que el repositorio ya no existe."],
      ["Cuando un repositorio se niega a cargar", "Un repositorio que no se carga suele ser una dirección caducada, una ruta que no termina en index.min.json o una red que la bloquea. Confirme la dirección, luego pruebe con una red diferente antes de eliminarla."],
    ],
    facts: [
      "Un repositorio es sólo un archivo JSON alojado en un servidor web.",
      "Las actualizaciones mantienen sus preferencias de fuente.",
      "Las carpetas locales funcionan sin ninguna red.",
      "Watchtower no verifica ni aprueba repositorios de terceros.",
      "Un repositorio que no se carga suele ser una dirección incorrecta o caducada.",
    ]
  },
  library: {
    title: "Todo lo que sigues, en un solo lugar.",
    body: "La biblioteca es el hogar de todo lo que guardas. Recuerda dónde te detuviste, agrupa las series en estantes y es el punto de partida para actualizaciones y descargas.",
    subsections: [
      ["Agregar y quitar", "Abra cualquier serie y toque Agregar a la biblioteca. Elimínalo del mismo lugar y la serie dejará de actualizarse sin perder tu historial de lectura."],
      ["Categorías", "Las categorías son los estantes de tu biblioteca. Una serie puede incluir varias a la vez, así es como separas lo que sigues semanalmente de lo que podrías llegar algún día."],
      ["Progreso", "Watchtower recuerda el episodio o capítulo exacto al que llegó, por entrada, y carga ese progreso en un rastreador cuando tiene uno conectado."],
      ["Filtros y clasificación", "Oculta lo que has terminado, muestra solo lo que se descarga u ordena por cuándo se lanzó una serie por última vez. Los filtros son solo de visualización y nunca eliminan nada."],
      ["Varios dispositivos", "No hay sincronización integrada entre dispositivos. Mueva su biblioteca con un archivo de respaldo y mantenga las descargas separadas, ya que no forman parte de una copia de seguridad."],
      ["Cuando una entrada se rompe", "Si una serie se abre vacía o pierde su portada, su fuente cambió debajo de ella. Actualice la entrada y migrela a otra fuente si el problema persiste."],
      ["Cuando una entrada no se actualiza o no se abre", "Si una serie no se abre, su fuente cambió debajo de ella. Primero actualice la entrada y migrela a otra fuente si el problema persiste. Una actualización que no devuelve nada significa que la extensión está desactualizada y no la aplicación."],
    ],
    facts: [
      "Las series completadas no reciben actualizaciones en segundo plano.",
      "Una serie puede pertenecer a más de una categoría.",
      "El progreso se rastrea por capítulo o episodio, no por serie.",
      "Eliminar una serie de la biblioteca no elimina su historial.",
      "La actualización corrige la mayoría de las entradas rotas; la migración arregla el resto.",
    ]
  },
  browse: {
    title: "Encontrar algo para mirar o leer.",
    body: "Navegar es donde exploras lo que ofrece una fuente y buscas en todas ellas a la vez. Es la forma más rápida de responder a la pregunta de quién tiene este título.",
    subsections: [
      ["Navegando una fuente", "Abra una fuente para ver sus listados populares y más recientes. La mayoría de las fuentes también exponen filtros por género, año o estado, que aparecen en la parte superior de la lista."],
      ["buscando por todas partes", "La acción de búsqueda consulta todas las fuentes habilitadas en paralelo y agrupa los resultados por fuente, para que pueda ver de un vistazo quién tiene el título y quién no."],
      ["Cuando un título no aparece", "Las fuentes suelen indexar el título en el idioma original en lugar del inglés. Pruebe con el nombre nativo, una ortografía romanizada o un fragmento más corto del mismo."],
      ["Moverse entre fuentes", "Si una fuente se ralentiza o deja de funcionar, migre la entrada en lugar de volver a agregarla. Watchtower coincide con la serie en la nueva fuente y transmite su progreso y categorías."],
      ["Filtrar por idioma", "Las extensiones están etiquetadas con el idioma al que sirven. Oculte los que no pueda leer para que los resultados de búsqueda y los listados sigan siendo relevantes."],
      ["¿Por qué los resultados difieren?", "Cada fuente indexa su propio catálogo, por lo que un título puede ser completo en una y parcial en otra. Comparar dos fuentes antes de comprometerse es normal."],
      ["Cuando la búsqueda no arroja nada", "Una búsqueda vacía suele deberse a que el título no coincide y no a una fuente rota. Pruebe con el nombre en el idioma original, una ortografía romanizada o un fragmento más corto, y recuerde que una fuente que no responde no detiene a las demás."],
    ],
    facts: [
      "Busque fans en todas las fuentes habilitadas a la vez.",
      "Las fuentes sin una lista popular todavía funcionan mediante búsqueda.",
      "La migración mueve su progreso, no sus archivos descargados.",
      "Las etiquetas de idioma de extensión controlan el filtro de idioma.",
      "Una búsqueda vacía suele ser una falta de coincidencia del título, no una fuente muerta.",
    ]
  },
  extensions: {
    title: "Las extensiones son la forma en que Watchtower llega a la web.",
    body: "Una extensión es un pequeño programa que le enseña a Watchtower un sitio web: cómo enumerarlo, buscarlo, leerlo y reproducirlo. Todo lo que navegas llega a través de una extensión.",
    subsections: [
      ["que es una extensión", "Es JavaScript, no un complemento que usted compila. Sabe cómo preguntarle a un sitio web sus listados, sus resultados de búsqueda, sus capítulos y sus transmisiones de video, y responde en la forma que Watchtower entiende."],
      ["como te llegan", "Las extensiones se agrupan en repositorios. Agrega un repositorio una vez y cada extensión que contiene se puede instalar desde la pantalla de extensiones."],
      ["Tipos de contenido", "Una extensión declara para qué sirve: manga, anime, novela, música o juego. Esa declaración decide qué lector o reproductor se abre cuando tocas un resultado."],
      ["Actualizaciones y eliminación", "Las extensiones se actualizan y mantienen su configuración. Desinstalar uno elimina solo la extensión; las entradas de su biblioteca sobreviven y simplemente esperan a que una fuente las entregue nuevamente."],
      ["¿Por qué debería importarte quién lo hizo?", "Una extensión se ejecuta dentro de Watchtower pero puede llegar a la red y leer lo que usted le proporciona. Instálelo desde repositorios en los que confíe y tenga cuidado con cualquier cosa que no le resulte familiar."],
      ["Cuando una extensión deja de funcionar", "Los sitios web cambian y una fuente rompe con ellos. Por lo general, se trata de una extensión defectuosa, no de una aplicación defectuosa, y la solución llega como una actualización."],
      ["Cuando falla una instalación o actualización", "Una instalación fallida casi siempre se debe a que Android bloquea aplicaciones desconocidas, y una actualización fallida es una descarga que se detuvo parcialmente. Permita las instalaciones desde su administrador de archivos o navegador, luego vuelva a intentarlo y reinstálelo desde cero si el archivo se truncó."],
    ],
    facts: [
      "Las extensiones son JavaScript y se ejecutan en una zona de pruebas dentro de la aplicación.",
      "Una extensión cubre un sitio web.",
      "La instalación y actualización nunca toca su biblioteca.",
      "Una fuente que falla repentinamente suele ser un cambio de sitio web.",
      "Una instalación fallida suele ser Android, no la extensión.",
    ]
  },
  "extensions-catalogue": {
    title: "Elegir y mantener sus fuentes.",
    body: "La pantalla de extensiones es tu catálogo: qué está instalado, qué está disponible y qué está desactualizado. Aquí es donde mantiene saludable su lista de fuentes.",
    subsections: [
      ["Instalado y disponible", "Las extensiones instaladas funcionan inmediatamente. Los disponibles provienen de un repositorio que usted ha agregado: actualice la lista y luego instale los que desee con un solo toque."],
      ["Actualizar una extensión", "Cuando existe una versión más nueva, aparece en Actualizaciones. Instalarlo reemplaza la copia anterior y mantiene sus preferencias, por lo que una solución no le cuesta nada."],
      ["Quitar una extensión", "Desinstálalo desde la misma pantalla. Las entradas de su biblioteca permanecen quietas y simplemente se muestran como no disponibles hasta que otra fuente, o una reinstalación, pueda servirlas."],
      ["Mantener la lista legible", "Las extensiones están agrupadas por idioma. Filtre los idiomas que no lee para que la lista muestre solo las fuentes que realmente le resulten útiles."],
      ["Cuando no se instala nada", "Una instalación fallida casi siempre se debe a que Android bloquea aplicaciones desconocidas, no la extensión. Permita las instalaciones desde su administrador de archivos o navegador, luego inténtelo nuevamente."],
      ["Mantener el catálogo actualizado", "Actualiza tus repositorios de vez en cuando. Aparecen nuevas extensiones y las rotas se reparan, pero no llega nada hasta que lo solicitas."],
      ["Cuando una extensión desaparece", "Una extensión instalada puede desaparecer si Android la eliminó o si está oculta por el filtro de idioma o la palanca de contenido para adultos. Primero verifique los filtros y luego reinstálelos desde el repositorio si realmente ya no está."],
    ],
    facts: [
      "Las actualizaciones conservan la configuración que estableciste en una fuente.",
      "Desinstalar una extensión mantiene las entradas de su biblioteca.",
      "Las extensiones están agrupadas por idioma, no por repositorio.",
      "Actualizar un repositorio es la forma de ver las extensiones nuevas y actualizadas.",
      "Una extensión faltante generalmente se oculta mediante un filtro, no se desinstala.",
    ]
  },
  "extensions-devkit": {
    title: "Construyendo tu propia fuente.",
    body: "Si desea agregar un sitio web que nadie ha cubierto todavía, puede escribir una extensión usted mismo. Necesita un archivo que describa el sitio y un archivo que implemente las llamadas.",
    subsections: [
      ["lo que necesitas escribir", "Dos archivos: un manifiesto que nombra la extensión y declara su idioma y tipo de contenido, y un archivo de entrada con las llamadas que recuperan listados, búsquedas, detalles, capítulos y páginas."],
      ["Comenzar desde una fuente existente", "La ruta más rápida es copiar una extensión que funcione para un sitio similar y cambiar las URL y el análisis. La forma de las llamadas sigue siendo la misma."],
      ["Prueba sin la aplicación", "La línea de comando puede ejecutar una sola llamada e imprimir exactamente lo que devolvió. Esto es mucho más rápido que instalar la extensión en un dispositivo cada vez que cambias de línea."],
      ["Qué puede usar tu código", "Solicitudes, un analizador HTML y un analizador JSON. No hay acceso a archivos, bases de datos ni forma de acceder a las pantallas de la aplicación."],
      ["Cuando la salida parece incorrecta", "Si un campo está vacío, el analizador casi siempre es la causa y no el tiempo de ejecución. Compare lo que devuelve con lo que espera el contrato fuente."],
      ["Antes de publicar", "Ejecute la extensión en el sitio en vivo, verifique la búsqueda, el listado y las llamadas de página, y confirme que el tipo de contenido sea correcto para que se abra en el lector o reproductor correcto."],
      ["Cuando una llamada no devuelve nada", "Un resultado vacío casi siempre es un selector que ya no coincide con el sitio y no un error de tiempo de ejecución. Busque la página, compare sus selectores con el marcado actual y pruebe la llamada única desde la línea de comando antes de reconstruir la aplicación."],
    ],
    facts: [
      "Una fuente funcional sólo necesita un manifiesto y un archivo de entrada.",
      "La línea de comando puede probar una llamada de forma aislada.",
      "Las extensiones pueden llegar a la red y analizar páginas, nada más.",
      "El tipo de contenido que declaras decide qué lector o reproductor se abre.",
      "Un resultado vacío suele ser un selector que ya no coincide.",
    ]
  },
  "extensions-publishing": {
    title: "Compartir una fuente con otras personas.",
    body: "Una vez que su extensión funcione, publicarla significa colocarla en un repositorio que otros puedan agregar. Un repositorio es un pequeño archivo JSON más los paquetes de extensión que enumera.",
    subsections: [
      ["Que es un repositorio", "Una carpeta de paquetes de extensión y un índice JSON que los enumera. Aloje la carpeta en cualquier lugar que sirva HTTPS y proporcione a las personas la dirección del archivo de índice."],
      ["Publicar una actualización", "Aumente el número de versión, reconstruya el paquete y actualice la versión en el índice. Watchtower compara ese número, por lo que una versión sin cambios es una actualización que nadie recibe."],
      ["Mantener el nombre estable", "El nombre del paquete es la identidad de la extensión. Cámbielo y los usuarios obtendrán una segunda extensión separada en lugar de una actualización de la primera."],
      ["Sea claro acerca de la confianza", "Las personas que instalan desde su repositorio ejecutan su código con el acceso de la aplicación. Di quién eres y mantén el repositorio en algún lugar que controles."],
      ["Mantener una fuente", "Los sitios web cambian sin previo aviso, así que espere volver a publicarlos. Esté atento a los informes de que una fuente dejó de funcionar y corríjalo antes de que los usuarios se alejen."],
      ["La dirección del índice importa", "La dirección que entregue debe apuntar a index.min.json. Cualquier otro camino deja a la gente mirando un repositorio que se niega a cargar."],
      ["Cuando los usuarios no reciben su actualización", "La causa habitual es un número de versión en el índice que no cambió o una dirección del repositorio que apunta a otro lugar que no sea el archivo de índice. Aumente la versión, confirme la dirección y verifique que se pueda acceder al archivo a través de HTTPS."],
    ],
    facts: [
      "Un repositorio es una carpeta HTTPS más un índice JSON.",
      "La versión en el índice es lo que indica a los usuarios que existe una actualización.",
      "Un nombre de paquete estable es lo que hace que una actualización sea una actualización.",
      "Espere volver a publicar cada vez que cambie el sitio web de destino.",
      "Una actualización que nadie recibe suele ser un número de versión sin cambios.",
    ]
  },
  "local-source": {
    title: "Leer y reproducir tus propios archivos.",
    body: "Watchtower puede tratar una carpeta en su dispositivo como una fuente normal. Su propia colección se comporta exactamente como una colección en línea, con seguimiento del progreso.",
    subsections: [
      ["Mangas y novelas", "Coloque una carpeta por serie dentro de la carpeta local y un archivo por capítulo dentro de ella. Los capítulos pueden ser archivos CBZ o carpetas de imágenes simples, y el nombre de la carpeta se convierte en el título de la serie."],
      ["animado", "Coloque una carpeta por serie dentro de la carpeta de anime local y un archivo de video por episodio dentro de ella. Los episodios están ordenados por nombre de archivo, así que numérelos."],
      ["Portadas y detalles", "Una imagen de portada en la carpeta de la serie se convierte en miniatura. Un archivo de detalles al lado puede agregar autor, artista, descripción y géneros cuando el nombre de la carpeta no es suficiente."],
      ["Agregar nuevos archivos", "Mueva archivos desde fuera de la aplicación, luego actualice la fuente local para que Watchtower vuelva a escanear la carpeta. Los archivos agregados mientras la aplicación está cerrada no se notan hasta que usted lo hace."],
      ["Leyendo sin conexión", "Las fuentes locales nunca tocan la red, por lo que funcionan en modo avión y no se pueden bloquear ni limitar la velocidad. Las descargas y los archivos locales se comportan de la misma manera una vez en el disco."],
      ["Ocultar archivos de la galería", "Coloca un archivo .nomedia en la carpeta para que las portadas y los episodios no aparezcan en la aplicación de fotos de tu teléfono."],
      ["Cuando las portadas están en blanco o faltan archivos", "Una portada en blanco o una serie que no se abre casi siempre significa que la estructura de la carpeta es incorrecta. Verifique que haya una carpeta por serie y un archivo por capítulo o episodio, luego elimine la entrada, borre la base de datos en busca de elementos fuera de la biblioteca y deje que la fuente local vuelva a escanear la carpeta."],
    ],
    facts: [
      "Tanto los archivos CBZ como las carpetas de imágenes simples se leen como capítulos.",
      "El orden de los episodios sigue el nombre del archivo, así que numere sus archivos.",
      "Un archivo .nomedia mantiene los medios locales fuera de la galería del sistema.",
      "Las fuentes locales funcionan sin ninguna conexión de red.",
      "Una estructura de carpetas incorrecta es la causa habitual de una portada en blanco.",
    ]
  },
  "video-player": {
    title: "Viendo un episodio.",
    body: "El reproductor cubre el vídeo con gestos y hojas, para que nada salga de la pantalla mientras lo miras. Calidad, audio, subtítulos y velocidad, todo en vivo con un solo toque.",
    subsections: [
      ["Controles básicos", "Toca una vez para que aparezcan los controles, toca dos veces un lado para saltar hacia adelante o hacia atrás y mantén presionado para acelerar. Pellizca para hacer zoom cuando el video tenga espacio de sobra."],
      ["Calidad y audio", "Las fuentes que ofrecen varias resoluciones o pistas de audio las exponen en hojas que se deslizan hacia arriba sin interrumpir la reproducción. Tu elección es recordada por la serie."],
      ["Subtítulos", "Las pistas de subtítulos provienen de la fuente o de un archivo que usted proporcione. Se eligen y ajustan desde la hoja de subtítulos y su apariencia se establece una vez en la configuración."],
      ["Episodios y estadísticas", "Un panel lateral enumera cada episodio para que puedas saltar, y otro muestra lo que el jugador está haciendo realmente con la transmisión cuando algo parece estar mal."],
      ["Cuando el jugador interno lucha", "Se puede pasar un códec raro o una transmisión interrumpida a un reproductor externo como mpv o VLC. Esa es la alternativa confiable, no una señal de que el episodio no se pueda utilizar."],
      ["Guardando tu lugar", "El progreso se escribe continuamente mientras miras, por lo que cerrar la aplicación o perder energía no pierde tu posición."],
      ["Cuando un vídeo no se reproduce", "Una transmisión que se niega a iniciarse suele ser un códec que el reproductor interno no puede manejar o un enlace que ha caducado. Primero cambie a un reproductor externo como mpv o VLC, luego actualice la extensión si todos los episodios de esa fuente fallan."],
    ],
    facts: [
      "La reproducción utiliza un decodificador acelerado por hardware de forma predeterminada.",
      "Los gestos manejan el brillo, el volumen y la búsqueda.",
      "El progreso se guarda continuamente, no sólo cuando sales.",
      "Un reproductor externo es la alternativa para los códecs no compatibles.",
      "Entregar un flujo obstinado a un jugador externo es el recurso confiable.",
    ]
  },
  "player-settings": {
    title: "Dar forma al jugador según tus hábitos.",
    body: "La configuración del reproductor decide cómo se decodifica el video, qué hacen los gestos y qué botones se encuentran en el reproductor. Cámbielos una vez y seguirá cada episodio.",
    subsections: [
      ["Descodificación", "La decodificación por hardware es más rápida, consume menos batería y se adapta a casi todo. Cambie al software cuando un archivo en particular se reproduzca mal, ya que la decodificación del software tolera mejor los códecs inusuales."],
      ["gestos", "Decide qué deslizamiento hace qué: vertical para brillo y volumen, horizontal para buscar. Cada dirección se puede invertir si te parece al revés."],
      ["Botones personalizados", "Añade las acciones que más utilizas, como saltarte una introducción o tomar una captura de pantalla, directamente en la superficie del reproductor para que dejen de quedar enterradas en los menús."],
      ["Reproducción avanzada", "El tamaño del búfer, la relación de aspecto forzada y la imagen en imagen están aquí para el raro caso en que el comportamiento automático no sea lo que desea. La mayoría de la gente nunca necesita tocarlos."],
      ["Excepciones por serie", "Casi todas las configuraciones del reproductor se pueden anular para una sola serie sin cambiar los valores predeterminados para todo lo demás. Útil para un programa con audio extraño."],
      ["Después de una copia de seguridad de la configuración", "Los botones personalizados y las preferencias del reproductor viajan en su archivo de respaldo, por lo que la restauración en un nuevo dispositivo trae consigo el diseño del reproductor."],
    ],
    facts: [
      "La decodificación de hardware es la predeterminada y se adapta a la mayoría de los archivos.",
      "La dirección de cada gesto se puede invertir o desactivar.",
      "La configuración se puede anular para una sola serie.",
      "Las preferencias del jugador se incluyen en una copia de seguridad.",
    ]
  },
  subtitles: {
    title: "Hacer que los subtítulos sean legibles.",
    body: "Los subtítulos provienen de tres lugares: la transmisión, un archivo en su dispositivo o una fuente que los recupera. Esta página cubre la elección de una pista, la fijación de su sincronización y el estilo de las que dibuja Watchtower.",
    subsections: [
      ["Elegir una pista", "Cuando un episodio lleva varias pistas de subtítulos, éstas se enumeran en la hoja de subtítulos. Tu elección se recuerda para esa serie, por lo que solo eliges una vez."],
      ["Arreglando el tiempo", "Una pista que va delante o detrás del audio se puede empujar en pequeños pasos hasta que se alinee. Se recuerda el desplazamiento, por lo que la solución persiste al reiniciar la aplicación."],
      ["Estilo", "La fuente, el tamaño, el color, el contorno y el fondo se aplican a los subtítulos de texto. Estas configuraciones no afectan el video y es seguro experimentar con ellas a mitad del episodio."],
      ["Tus propios archivos", "Coloque un archivo de subtítulos junto a un episodio local con un nombre coincidente y el reproductor lo cargará automáticamente, sin necesidad de cambiar ninguna configuración."],
      ["Subtítulos integrados en la imagen.", "Algunos subtítulos son imágenes en lugar de texto. No se les puede cambiar el estilo, sólo reposicionarlos o cambiar su tamaño, porque el estilo es parte de la imagen misma."],
      ["Cuando no aparecen los subtítulos", "Primero verifique la hoja de subtítulos: es posible que la fuente no ofrezca ninguno o que el nombre del archivo no coincida lo suficiente con el episodio como para emparejarlo."],
    ],
    facts: [
      "Se puede cambiar el estilo de los subtítulos de texto; los subtítulos de las imágenes no.",
      "Las compensaciones de tiempo se guardan y sobreviven a un reinicio.",
      "Un archivo coincidente junto a un episodio local se carga solo.",
      "Las opciones de subtítulos se recuerdan por serie.",
    ]
  },
  reader: {
    title: "Lectura de manga, webtoons y novelas.",
    body: "El lector maneja manga paginado, webtoons verticales y novelas de texto. Usted establece un valor predeterminado una vez y lo anula para las series que necesitan algo diferente.",
    subsections: [
      ["Elegir un modo de lectura", "El modo paginado se adapta al manga impreso y la tira larga se adapta a los webtoons que se dibujaron como una imagen alta. Establezca un valor predeterminado y cámbielo por serie cuando un título se lea mejor al revés."],
      ["Pasando páginas", "Toque los bordes para avanzar o retroceder, deslice el dedo para desplazarse en una franja larga y pellizca para hacer zoom. Al tocar el centro se abre el menú sin salir de la página."],
      ["Continuando donde lo dejaste", "Watchtower recuerda la página a la que llegó en cada capítulo, por lo que al reabrir una serie lo llevará exactamente donde se detuvo en lugar de al principio."],
      ["Páginas anchas y pliegos", "Los pliegos de dos páginas y los escaneos inusualmente anchos se pueden dividir, rotar o escalar para que no sean ilegibles en un teléfono."],
      ["Capítulos descargados", "Los capítulos que descargaste se abren instantáneamente y se marcan en la lista de capítulos, lo que hace que la lectura sin conexión sea práctica."],
      ["Novelas", "Las novelas de texto utilizan la misma entrada en su biblioteca, pero se abren en un lector de texto en lugar de en un visor de imágenes, elegido automáticamente entre el tipo de contenido de la extensión."],
      ["Cuando una página no se carga", "En ocasiones, la aplicación no reconoce una imagen de un capítulo. Salir del lector y volver a abrir el capítulo generalmente lo resuelve y, si persiste, la imagen en sí falta en la fuente y no en la aplicación."],
      ["Dos páginas a la vez", "No está disponible un lector de dos páginas porque los escaneos rara vez coinciden en dónde cae un salto de página. Leer una página a la vez o utilizar tiras largas para webtoons es el comportamiento actual."],
    ],
    facts: [
      "La tira larga se adapta a los webtoons verticales e ignora el ancho de la página.",
      "El lector recuerda la página a la que llegó por capítulo.",
      "El zoom está apagado en una franja larga hasta que lo enciendes.",
      "Las novelas se abren en un lector de texto, no en un lector de imágenes.",
      "Al reabrir un capítulo se corrige una página que no se pudo cargar.",
    ]
  },
  "reader-settings": {
    title: "Configura la lectura como más te guste.",
    body: "La configuración del lector cubre la dirección de lectura, cómo se escalan y recortan las páginas y qué partes de la pantalla pasan de página.",
    subsections: [
      ["Lectura", "Establezca el modo predeterminado, si las páginas se animan a medida que pasan y qué capítulos omitir. Los capítulos omitidos siguen ahí, simplemente no te interrumpen."],
      ["Mostrar", "El bloqueo de rotación, el color de fondo y la pantalla completa conviven aquí. Un fondo oscuro favorece la lectura nocturna y reduce el brillo entre las páginas."],
      ["paginas", "Elija cómo una página llena la pantalla: ajuste el ancho, la altura, toda la pantalla o muéstrela en su tamaño original. El recorte de bordes recorta los márgenes de escaneo automáticamente."],
      ["Toque zonas", "Elija dónde al tocar la página avanza, retrocede y abre el menú. Todo el diseño se puede reflejar para leer con la mano izquierda."],
      ["tira larga", "El acolchado lateral y las zonas táctiles separadas hacen que los webtoons altos sean cómodos en una pantalla ancha, donde de otro modo una imagen de ancho completo sería demasiado pequeña."],
      ["Excepciones por serie", "Cualquiera de estos puede anularse para una serie, lo cual resulta útil para un título que se escaneó de manera inusual o se lee en la otra dirección."],
    ],
    facts: [
      "Las opciones de escala incluyen ancho de ajuste, altura de ajuste, pantalla de ajuste y tamaño original.",
      "El recorte de bordes elimina los márgenes de escaneo.",
      "Las zonas de toque se pueden reflejar para la lectura de zurdos.",
      "Las reglas de omisión se pueden anular por serie.",
    ]
  },
  updates: {
    title: "Mantener su biblioteca actualizada.",
    body: "Actualizaciones consulte sus fuentes para ver nuevos capítulos y episodios. Bien hecho, te mantienen actualizado. Hecho descuidadamente, martillan una fuente hasta que bloquea a todos.",
    subsections: [
      ["Actualización global", "Se ejecuta en toda su biblioteca e informa sobre las novedades. Restrinjalo a las categorías que realmente sigue para que las series lentas no se revisen todos los días en vano."],
      ["lo que se omite", "Las series que haya terminado, las series que no haya iniciado y las series sin lanzamientos esperados se omitirán automáticamente. Eso es lo que evita que una biblioteca grande genere una avalancha de solicitudes."],
      ["Notificaciones", "Los nuevos capítulos y episodios generan una notificación, que puede limitar a una categoría o silenciar por completo sin desactivar las actualizaciones."],
      ["Refrescante una serie", "Abra el menú de la serie y actualícelo cuando desee verificarlo inmediatamente, sin ejecutar una actualización sobre todo lo demás."],
      ["Por qué esto importa", "Una fuente que recibe demasiadas solicitudes puede bloquear toda la aplicación con protección anti-bot. Limitar las actualizaciones a lo que sigues protege las fuentes de las que todos dependen."],
      ["Si las actualizaciones parecen detenerse", "La optimización de la batería de Android puede suspender el trabajo en segundo plano. Exime a Watchtower de las restricciones de batería si las actualizaciones solo llegan cuando abre la aplicación."],
      ["Cuando una actualización informa un error", "Una actualización que falla en una serie suele ser esa fuente y no la aplicación. Actualice la serie manualmente, actualice la extensión y recuerde que la limitación de velocidad después de una ejecución de actualización grande se soluciona sola con el tiempo en lugar de con reintentos."],
    ],
    facts: [
      "Las actualizaciones pueden limitarse a las categorías que elija.",
      "Las series completadas se omiten de forma predeterminada.",
      "El tráfico intenso de actualizaciones puede hacer que una fuente bloquee la aplicación.",
      "La optimización de la batería puede retrasar las actualizaciones en segundo plano.",
      "Una actualización fallida en una serie apunta a esa fuente, no a la aplicación.",
    ]
  },
  downloads: {
    title: "Desconectar tu biblioteca.",
    body: "Las descargas guardan episodios y capítulos en su dispositivo para que pueda verlos o leerlos sin conexión. Viven en una cola con límites claros.",
    subsections: [
      ["Iniciando una descarga", "Agrega capítulos o episodios de una serie y se unirán a la cola de descargas. Desde la cola puedes reordenar lo que viene a continuación o cancelar algo que ya no quieras."],
      ["¿Por qué uno a la vez?", "Watchtower descarga una serie a la vez desde cualquier fuente. Activar muchas solicitudes en un sitio es exactamente lo que activa la protección anti-bot que bloquea las fuentes."],
      ["Modo solo descargas", "Active esto para ocultar todo lo que no haya guardado. Luego, la aplicación muestra solo lo que hay en su dispositivo, lo cual es útil en un viaje o una conexión medida."],
      ["Donde se almacenan los archivos", "Las descargas se ubican en una carpeta que lleva el nombre de la fuente y luego la serie. Cambiar el nombre de cualquiera de las carpetas interrumpe la detección, así que déjelas en paz."],
      ["Cuando las descargas desaparecen", "Si el contenido guardado deja de mostrarse, es probable que la carpeta de almacenamiento se haya movido o se haya vuelto ilegible. Verifique la ubicación de almacenamiento y reconstruya el índice de descargas."],
      ["Lo que no cubre una copia de seguridad", "Los archivos de respaldo llevan su biblioteca y configuración, nunca sus medios descargados. Estos deben trasladarse por separado."],
      ["Cuando una descarga falla a mitad de camino", "Una descarga detenida suele ser una conexión interrumpida o una fuente que dejó de responder. Vuelva a intentarlo desde la cola, ya que se conservan archivos parciales, y cambie a Wi-Fi si la causa es la red. Las respuestas 403 o 429 persistentes significan que la fuente lo rechaza, no que el archivo ya no esté."],
    ],
    facts: [
      "Solo se descarga una serie por fuente a la vez, a propósito.",
      "Los medios descargados no se incluyen en una copia de seguridad.",
      "El almacenamiento interno es más rápido y confiable que una tarjeta SD.",
      "Cambiar el nombre de la carpeta de descargas interrumpe la detección.",
      "Una descarga detenida conserva sus archivos parciales, por lo que al volver a intentarla se reanuda.",
    ]
  },
  categories: {
    title: "Convertir una larga biblioteca en unas pocas estanterías.",
    body: "Las categorías agrupan su biblioteca por estado o gusto y sirven como control de lo que se actualiza y descarga automáticamente.",
    subsections: [
      ["Creando categorías", "Nómbrelos como tenga sentido para usted y ordénelos como desee. La mayoría de las personas terminan con un puñado según la frecuencia con la que siguen algo."],
      ["Poniéndoles series", "Mantenga presionada una serie, elija la opción de categoría y marque todo lo que corresponda. Una serie puede colocarse en varios estantes a la vez."],
      ["Utilizándolos para actualizaciones", "Señale actualización global y descargas automáticas en categorías específicas. Sólo las series que sigues activamente generan tráfico."],
      ["sacando una serie", "Deselecciona una categoría en el mismo lugar donde la agregaste. La serie se queda en tu biblioteca, simplemente sale de ese estante."],
      ["Un nombre que perdure", "Nombra las categorías según tus hábitos en lugar de según tus fuentes. Luego, al migrar una serie entre fuentes nunca se reorganiza su biblioteca."],
      ["Manteniéndolo simple", "Las categorías funcionan mejor cuando hay pocas. Si no puede recordar para qué sirve una categoría, probablemente le esté haciendo más daño que bien."],
    ],
    facts: [
      "Una serie puede pertenecer a varias categorías a la vez.",
      "La actualización global puede apuntar a una sola categoría.",
      "Las descargas automáticas se pueden limitar a las categorías elegidas.",
      "Nombrar categorías según las fuentes envejece mal.",
    ]
  },
  tracking: {
    title: "Grabando lo que ves, automáticamente.",
    body: "El seguimiento conecta Watchtower con los servicios que mantienen su historial. Inicia sesión una vez y el progreso se registra sobre la marcha en lugar de escribirlo a mano.",
    subsections: [
      ["¿Qué servicios son compatibles?", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori y Bangumi. Todos se configuran desde la configuración de seguimiento y puedes conectar más de uno."],
      ["Iniciar sesión", "Abra la configuración de seguimiento y toque un servicio para iniciar sesión. Kitsu es el que te pide tu dirección de correo electrónico en lugar de un nombre de usuario, lo que sorprende a la gente."],
      ["Conectando una serie", "Abra una serie, vaya a seguimiento y agregue el servicio. Watchtower busca el título por usted y puede editar los términos de búsqueda cuando coinciden con la entrada incorrecta."],
      ["cuanto cuenta como visto", "Un umbral porcentual decide cuándo un episodio se marca como visto. Configúrelo lo suficientemente alto como para que detenerse a mitad de camino no grabe un episodio completo."],
      ["una sola dirección", "El progreso va desde Watchtower hasta el servicio. Editar su lista en el sitio web no cambia nada en la aplicación, así que elija un lugar para administrarla."],
      ["Ver sin conexión", "El progreso que realice sin conexión se pondrá en cola y se cargará la próxima vez que esté en línea, para que un vuelo no pierda su historial."],
      ["Cuando falla un inicio de sesión o una sincronización", "Un servicio que se niega a iniciar sesión suele ser una sesión caducada o un captcha en el sitio del servicio, así que inicie sesión una vez a través del sitio web del servicio e inténtelo nuevamente. El progreso que no se sincroniza normalmente se pone en cola en lugar de perderse y se vuelve a intentar cuando se restablece la conexión."],
      ["Coincidir con el título incorrecto", "La coincidencia automática puede seleccionar la entrada incorrecta cuando un título es ambiguo. Edite los términos de búsqueda para esa serie en la sección de seguimiento y seleccione el resultado correcto, luego confirme que el progreso que transmite es el que desea."],
    ],
    facts: [
      "El seguimiento se configura por serie, no para toda la biblioteca.",
      "El progreso sólo fluye hacia afuera, nunca hacia adentro.",
      "Un umbral decide cuándo un episodio cuenta como visto.",
      "Cargas de progreso sin conexión cuando te vuelves a conectar.",
      "Un inicio de sesión fallido suele ser una sesión caducada en el propio servicio.",
    ]
  },
  backups: {
    title: "Protegiendo su biblioteca antes de que algo salga mal.",
    body: "Una copia de seguridad es un archivo que contiene su biblioteca, su progreso y su configuración. También es la única forma de mover una biblioteca entre dispositivos.",
    subsections: [
      ["haciendo uno", "Abra la configuración de datos y almacenamiento, elija crear una copia de seguridad y guárdela en algún lugar al que pueda acceder desde otro dispositivo. Haga esto antes de cualquier actualización de la que no esté seguro."],
      ["que hay dentro", "Cada serie que sigues, las categorías en las que se encuentran, hasta dónde llegaste, tus enlaces de seguimiento, tu historial, tus extensiones y todas tus configuraciones."],
      ["lo que queda fuera", "Archivos descargados, portadas personalizadas y el historial de series que nunca se agregaron a la biblioteca. Estos no se pueden recuperar de una copia de seguridad."],
      ["Restaurandolo", "Importe el archivo en el nuevo dispositivo, luego vuelva a iniciar sesión en sus rastreadores y reinstale sus extensiones para que todo se pueda volver a vincular limpiamente."],
      ["Copias de seguridad automáticas", "Establezca una frecuencia para que siempre exista una copia de seguridad reciente sin que usted lo recuerde. Esta es la mejor protección contra una mala actualización."],
      ["Pasar a un nuevo dispositivo", "Haga una copia de seguridad, instálelo en el nuevo dispositivo, restaure, luego inicie sesión en los rastreadores y reinstale las extensiones. Las descargas deben copiarse por separado."],
      ["Cuando falla una restauración", "Una restauración que se detiene parcialmente suele ser un archivo de copia de seguridad truncado u obsoleto, o una discrepancia de versión entre la copia de seguridad y la aplicación. Vuelva a crear la copia de seguridad desde el dispositivo de origen, confirme que el archivo se copió por completo y restaure en una aplicación que sea al menos tan nueva como la que la creó."],
    ],
    facts: [
      "Una copia de seguridad es la única forma de mover una biblioteca entre dispositivos.",
      "Los medios descargados deben moverse por separado.",
      "Las portadas personalizadas no forman parte de una copia de seguridad.",
      "Las copias de seguridad automáticas son la defensa más segura contra una mala actualización.",
      "Una restauración fallida suele ser un archivo de copia de seguridad truncado u obsoleto.",
    ]
  },
  storage: {
    title: "Dónde guarda Watchtower sus archivos.",
    body: "Las copias de seguridad, las descargas y las fuentes locales se encuentran en una única ubicación de almacenamiento. Elegirlo deliberadamente es lo que evita que las descargas desaparezcan más adelante.",
    subsections: [
      ["El diseño de la carpeta", "Todo se encuentra en una carpeta que usted elige: copias de seguridad automáticas, capítulos y episodios descargados, su manga local, su anime local y configuración para reproductores externos. Conocer el diseño es lo que hace que un archivo perdido sea fácil de colocar."],
      ["Elegir una ubicación", "Elija una carpeta a la que aún pueda acceder dentro de un año. Evite la raíz misma de un volumen de almacenamiento y evite mover archivos desde debajo de la aplicación posteriormente."],
      ["permisos de Android", "El Android moderno mantiene las aplicaciones dentro de sus propios directorios. Otorgue a Watchtower acceso a la carpeta de almacenamiento que elija, o las descargas y las fuentes locales fallarán silenciosamente."],
      ["Después de mover archivos en", "Mueva archivos desde fuera de la aplicación y luego actualice, para que Watchtower vuelva a escanear las carpetas. De lo contrario, el nuevo contenido permanece invisible hasta que algo más activa un análisis."],
      ["Mantener limpia la galería", "Un archivo .nomedia en la carpeta de descargas mantiene las portadas y los episodios fuera de la galería de fotos de tu teléfono."],
      ["Por qué el almacenamiento interno es mejor", "Las descargas en el almacenamiento interno son más rápidas y es mucho menos probable que se vuelvan ilegibles que en una tarjeta extraíble, que puede desmontarse o dañarse."],
      ["Cuando la aplicación no puede acceder a la carpeta", "Los errores de permiso y las descargas que desaparecen se deben a que la carpeta de almacenamiento se mueve o se vuelve ilegible. Confirme que la aplicación todavía tiene acceso, verifique el espacio libre y prefiera el almacenamiento interno a una tarjeta extraíble que se pueda desmontar."],
    ],
    facts: [
      "Las copias de seguridad, las descargas y las fuentes locales comparten una ubicación de almacenamiento.",
      "Android necesita permiso explícito para esa carpeta.",
      "Un archivo .nomedia oculta los medios descargados de la galería.",
      "El almacenamiento interno es más confiable que una tarjeta SD.",
      "Una carpeta de almacenamiento movida o ilegible oculta descargas y copias de seguridad.",
    ]
  },
  settings: {
    title: "Las configuraciones que cambian el comportamiento de la aplicación.",
    body: "Más allá de las opciones propias de cada función, un puñado de configuraciones de toda la aplicación afectan las actualizaciones, la privacidad, la instalación y cómo te recuperas cuando algo sale mal.",
    subsections: [
      ["General", "Tema, idioma de la interfaz y cómo se comporta la biblioteca de forma predeterminada. Estos se aplican en todas partes a la vez, por lo que son el primer lugar donde buscar cuando la aplicación no parece suya."],
      ["Privacidad", "Ocultar la pantalla en el selector de aplicaciones mantiene tu biblioteca fuera de las miniaturas y el modo incógnito detiene la grabación del historial mientras navegas. La incógnito oculta lo que miraste, no hasta dónde llegaste."],
      ["Red", "El DNS cifrado puede superar algunos bloqueos básicos y vale la pena intentarlo cuando una fuente no se carga en una red pero funciona en otra. Un proxy hace el mismo trabajo para toda una red."],
      ["Instalación de extensiones", "Android normalmente bloquea las instalaciones desde fuera de una tienda. Otorgar ese permiso es lo que permite instalar extensiones, y Shizuku es una alternativa para dispositivos que lo hacen incómodo."],
      ["Diagnóstico", "Los registros de fallos, una captura de logcat y la reconstrucción de índices se encuentran aquí. Aquí es donde acudes cuando algo se porta mal y quieres pruebas en lugar de conjeturas."],
      ["Antes de informar un problema", "Tenga en cuenta la versión de su aplicación, la fuente que falló y lo que mostró la pantalla. Eso convierte un informe vago en algo que realmente se puede arreglar."],
      ["Restablecer un estado estancado", "Limpiar el caché, borrar las cookies y los datos web y reconstruir los índices soluciona una clase diferente de problema. La caché borra los datos de la página obsoleta, las cookies borran una verificación bloqueada y una reconstrucción del índice vuelve a escanear la carpeta de almacenamiento. Al borrar la base de datos se eliminan las series que no están en su biblioteca, que es la solución habitual para una portada local en blanco."],
      ["Un último recurso que conserva tus datos", "Si nada más funciona, realice una copia de seguridad nueva, luego reinstale la aplicación y restáurela. Eso mantiene su biblioteca y configuración mientras reemplaza cualquier cosa dañada en la instalación."],
    ],
    facts: [
      "La configuración de privacidad del cambio de aplicaciones debe estar desactivada para tomar capturas de pantalla.",
      "Incognito detiene la grabación del historial, no el progreso.",
      "Los registros de fallos permanecen en su dispositivo y nunca se envían automáticamente.",
      "El DNS cifrado a menudo repara una fuente que falla en una sola red.",
      "La caché, las cookies y los índices solucionan cada uno una clase diferente de problema.",
      "Haga una copia de seguridad antes de reinstalar, luego restaure para conservar su biblioteca.",
    ]
  },
  "extension-runtime": {
    title: "Cómo se ejecutan las extensiones y con qué seguridad.",
    body: "Las extensiones son JavaScript y Watchtower las ejecuta en un entorno limitado que les proporciona la red y nada más. Esta página explica lo que eso significa para usted.",
    subsections: [
      ["¿Qué ejecuta tus extensiones?", "Watchtower utiliza un pequeño motor JavaScript integrado en la aplicación. Es el mismo motor en todas las plataformas, razón por la cual una fuente se comporta de manera idéntica en un teléfono y en un servidor."],
      ["Qué puede hacer una extensión", "Puede realizar solicitudes web, analizar las páginas que recibe y conservar algunas de sus propias configuraciones. Esa es toda la caja de herramientas."],
      ["De qué se mantiene alejado", "Tus archivos, tu biblioteca, tus cuentas y las pantallas propias de la aplicación. Todo lo que produce una extensión se devuelve como datos simples para que la aplicación los procese."],
      ["Por qué una fuente lenta se arrastra", "Una fuente que responde lentamente hace que sus propias pantallas se vuelvan lentas, porque la aplicación lo espera. Otras fuentes no se ven afectadas, por lo que la lentitud es una señal de una fuente incorrecta, no de una aplicación pesada."],
      ["Qué significa esto para la confianza", "La zona de pruebas limita lo que una extensión puede romper, pero no juzga la intención. Todavía puede ver todo lo que escribas y todo lo que obtenga. Instálelo con personas de su confianza."],
      ["Mismo motor en todas partes", "Debido a que la aplicación y la línea de comandos de Linux comparten este tiempo de ejecución, una extensión que funciona en su teléfono también funciona en un servidor, sin cambios."],
    ],
    facts: [
      "Las extensiones obtienen acceso a la red y análisis de páginas, nada más.",
      "No pueden leer sus archivos ni su biblioteca directamente.",
      "Una fuente lenta sólo ralentiza sus propias pantallas.",
      "El mismo entorno de pruebas se ejecuta en dispositivos móviles, computadoras de escritorio y la línea de comandos.",
    ]
  },
  "extension-contract": {
    title: "Lo que una fuente tiene para ofrecer.",
    body: "Para que una extensión funcione, debe responder a un conjunto fijo de preguntas: qué es popular, qué es nuevo, qué devuelve una búsqueda, qué contiene una serie y dónde están sus páginas y transmisiones.",
    subsections: [
      ["Listado y búsqueda", "Estas llamadas devuelven las listas navegables: qué es popular, qué se publicó recientemente y qué aparece al buscar un término. Son el mínimo para que una fuente sea utilizable."],
      ["Series y capítulos", "Una llamada completa los detalles de una serie y otra devuelve sus capítulos o episodios ordenados. Sin estos, se puede buscar una fuente pero no abrirla."],
      ["Paginas y video", "Para lectura, una llamada devuelve las direcciones de imágenes de un capítulo. Para video, una llamada devuelve las transmisiones disponibles junto con la calidad y los encabezados que necesitan."],
      ["Extras opcionales", "Los filtros, las configuraciones específicas de la fuente y el manejo personalizado de imágenes son opcionales. Una fuente sin ellos todavía funciona; simplemente ofrece menos para configurar."],
      ["Por qué es importante el tipo de contenido", "El tipo que declara una extensión decide si un resultado se abre en el lector de manga, el reproductor de vídeo o el lector de novelas. Hacerlo mal envía el contenido a la pantalla equivocada."],
      ["lo que no se requiere", "Todo más allá del listado y la búsqueda es una ventaja. Una fuente mínima que solo enumera y busca es una fuente perfectamente buena."],
    ],
    facts: [
      "El listado y la búsqueda por sí solos constituyen una fuente navegable.",
      "Los detalles y las llamadas a los capítulos son los que permiten abrir una serie.",
      "Los filtros y la configuración de fuente son opcionales.",
      "El tipo de contenido decide qué lector o reproductor se abre.",
    ]
  },
  "ui-schema": {
    title: "Permitir que una fuente diseñe su propia pantalla de inicio.",
    body: "Algunas fuentes presentan una portada rica: pancartas, filas de portadas, un bloque destacado. En lugar de escribir el código de la aplicación para cada uno, una extensión puede describir ese diseño en sí.",
    subsections: [
      ["para que es", "Una fuente puede describir su pantalla de inicio como datos: filas, tarjetas y pancartas, cada una de las cuales apunta al contenido que proporciona la fuente. La aplicación lo dibuja con sus widgets normales."],
      ["Por qué es una buena idea", "Significa que un nuevo sitio web puede tener una página principal personalizada sin el lanzamiento de una nueva aplicación, y la página aún parece nativa en lugar de una página web en un cuadro."],
      ["¿Qué se puede describir?", "Listas, filas, tarjetas, pancartas y bloques de texto son los componentes básicos. En la práctica, esto cubre el diseño de casi todas las pantallas de inicio de fuentes."],
      ["Cuando una fuente no tiene ninguna", "Si una extensión no describe un diseño, Watchtower crea uno a partir de los listados de la fuente. Nada se rompe; la página es simplemente más sencilla."],
      ["lo que no puede hacer", "La descripción son datos, no código. No puede ejecutar lógica, acceder a sus archivos ni cambiar el comportamiento de la aplicación, razón por la cual es seguro aceptarla."],
      ["Para personas que escriben fuentes", "Piense en ello como un archivo de diseño en lugar de un programa. Le estás diciendo a la aplicación qué mostrar, no cómo dibujarlo."],
    ],
    facts: [
      "Una fuente puede describir su propia pantalla de inicio como datos.",
      "Los bloques de construcción desconocidos se ignoran en lugar de dividir la página.",
      "Se utiliza un diseño predeterminado cuando una fuente no proporciona ninguno.",
      "La descripción no puede ejecutar código ni acceder a sus archivos.",
    ]
  },
  api: {
    title: "Conduciendo Watchtower desde otro programa.",
    body: "La aplicación puede abrir un pequeño servidor web en su propia máquina, lo que permite que los scripts, reproductores externos y otros dispositivos utilicen las mismas fuentes que la aplicación.",
    subsections: [
      ["que es", "Un pequeño servidor web integrado en la aplicación. Utiliza las mismas extensiones y la misma biblioteca que la interfaz, por lo que todo lo que devuelve coincide con lo que ves en la pantalla."],
      ["Encendiéndolo", "Está apagado hasta que lo habilites, deliberadamente. Enciéndalo en la configuración avanzada y anote el puerto, luego apunte su herramienta a esa dirección."],
      ["¿Qué puedes preguntar?", "Sus fuentes instaladas, las entradas de su biblioteca, una búsqueda en cualquier fuente y una transmisión de video resuelta. Eso es suficiente para manejar un centro multimedia o un reproductor externo."],
      ["¿Por qué podrías quererlo?", "Automatización, una interfaz diferente o permitir que otro dispositivo en su red use las fuentes que su teléfono ya ha configurado."],
      ["Mantenlo en tu propia red", "El servidor no tiene contraseña y está destinado a una red local confiable. No lo exponga a Internet, donde cualquiera podría leer su biblioteca."],
      ["Cómo se relaciona con la línea de comando", "La línea de comando de Linux expone el mismo servidor, por lo que un script escrito en la aplicación funciona en una máquina sin cabeza sin cambios."],
    ],
    facts: [
      "El servidor está apagado hasta que lo habilites en la configuración.",
      "Escucha en el puerto 4567 de forma predeterminada.",
      "Utiliza las mismas fuentes y biblioteca que la interfaz.",
      "Está destinado a una red local confiable, no a Internet.",
    ]
  },
  cli: {
    title: "Ejecutando Watchtower sin pantalla.",
    body: "La línea de comandos de Linux ejecuta el mismo motor que la aplicación, por lo que un servidor o un trabajo programado puede recuperar, buscar y descargar sin que nadie esté mirando.",
    subsections: [
      ["para que es", "Servidores, sesiones SSH y trabajos automatizados. Es el mismo motor de extensión que la aplicación con una interfaz de texto en lugar de pantallas, por lo que no necesita sesión gráfica."],
      ["Orientarse", "Comience con el comando de ayuda, luego ejecute el comando doctor para confirmar que el tiempo de ejecución puede cargarse y alcanzar todo lo que necesita antes de confiarle un trabajo."],
      ["Trabajar con extensiones", "Enumere lo que ofrece un repositorio, valídelo y pruebe una fuente con el sitio activo. La prueba se ejecuta en etapas, desde simplemente cargar la fuente hasta ejercitar su búsqueda y llamadas detalladas."],
      ["Llamar a una fuente directamente", "Puede invocar una única operación, como una búsqueda, y recuperar JSON. Eso es lo que hace que la línea de comando sea útil para crear scripts y depurar una fuente."],
      ["Sirviendo a través de la red", "Puede iniciar el mismo servidor web que expone la aplicación, que es la forma en que un cliente remoto habla con una máquina sin cabeza."],
      ["Lo que no hace todavía", "Los comandos de biblioteca, historial y cola de descargas no están disponibles sin cabeza porque la línea de comandos no abre las bases de datos locales de la aplicación. Esos todavía necesitan la aplicación."],
    ],
    facts: [
      "La línea de comando reutiliza el motor de extensión de la aplicación.",
      "El comando doctor verifica el tiempo de ejecución antes de confiar en él.",
      "Una fuente se puede probar en etapas, desde la carga hasta la búsqueda.",
      "Los comandos de biblioteca y descarga aún requieren la aplicación.",
    ]
  },
  deployment: {
    title: "Ejecutando Watchtower en su propio servidor.",
    body: "Para un servidor doméstico o un grupo pequeño, la línea de comandos de Linux puede ejecutarse continuamente y servir las mismas fuentes a todos los clientes de su red.",
    subsections: [
      ["lo que obtienes", "Una única carpeta que contiene la línea de comando y los archivos de ejecución que necesita. El script del instalador lo copia en un prefijo que usted elija y lo configura para ejecutarse."],
      ["Instalarlo", "Ejecute el instalador con la carpeta que descomprimió y el prefijo que desee. Usar un prefijo en su directorio de inicio evita necesitar root para todo después."],
      ["Ejecutarlo como un servicio", "Debido a que puede funcionar a través de HTTP, puede mantenerlo ejecutándose en segundo plano y permitir que otros dispositivos en su red usen las fuentes que ha configurado."],
      ["para que sirve", "Un centro multimedia, un descargador programado o una máquina que contenga las fuentes para que las demás no tengan que hacerlo. Es el mismo motor, por lo que las fuentes se comportan de manera idéntica."],
      ["Manteniéndolo actualizado", "Actualícelo descomprimiendo una versión más nueva y ejecutando el instalador nuevamente. Su configuración reside en el prefijo y no se sobrescribe con una actualización."],
      ["Si algo no funciona", "El comando médico existe exactamente para esto. Ejecútelo primero y le dirá si el problema es el tiempo de ejecución, la red o una fuente."],
    ],
    facts: [
      "La compilación sin cabeza es una carpeta independiente más un instalador.",
      "La instalación en su directorio de inicio evita la necesidad de root.",
      "Puede servir a través de HTTP a otros dispositivos en su red.",
      "El comando médico diagnostica la mayoría de las fallas de inicio.",
    ]
  },
  troubleshooting: {
    title: "Cuando algo no funciona.",
    body: "Casi todos los problemas se deben a una de varias cosas: una fuente que cambió, un bloqueo de un sitio web, un permiso faltante o una extensión que necesita actualización. Trabaje en ese orden.",
    subsections: [
      ["Empiece por reducirlo", "Antes de tocar cualquier configuración, decida si el problema es la fuente, su red o su dispositivo. Una fuente que falla mientras otras funcionan apuntan a esa fuente; Todo lo que falla apunta a la aplicación o la conexión."],
      ["Actualiza todo primero", "Actualice sus repositorios e instale las actualizaciones de extensión, luego busque una actualización de la aplicación. Una gran parte de las averías repentinas se deben a un sitio web que cambió y una extensión que ya se solucionó pero aún no se instaló."],
      ["Una fuente dejó de funcionar", "Este es el problema más común y normalmente el menos grave. El sitio web cambió, la extensión necesita una actualización y actualizar su repositorio es la solución. Si aún no existe ninguna actualización, el autor de la extensión no se ha puesto al día."],
      ["No carga nada", "Si todas las fuentes fallan, mire la red. Pruebe con datos móviles, otra red Wi-Fi y DNS cifrado en la configuración. Una causa frecuente es una única red que lo bloquea todo o un portal cautivo en el que no se ha iniciado sesión."],
      ["Abrir un sitio para pasar un control", "Algunos sitios realizan una verificación antes de responder. Abra la fuente desde Explorar y use el navegador integrado para cargar la propia página del sitio, complete cualquier verificación a mano, luego ciérrela y regrese a la aplicación. Hacer esto una vez a menudo elimina el bloqueo de esa fuente."],
      ["Cloudflare y recarga interminable", "Un sitio detrás de Cloudflare puede seguir recargando su cheque en lugar de dejarte pasar. Intente abrir el sitio en el navegador integrado nuevamente, cambiar su agente de usuario en la configuración avanzada o esperar a que el sitio reduzca su protección. Algunas fuentes son deliberadamente difíciles de usar desde una aplicación."],
      ["Borrar cookies y datos web", "Esto restablece el estado de navegación almacenado de la aplicación, incluidos los inicios de sesión. Es la solución correcta para una verificación bloqueada y vale la pena hacerlo antes de decidir que una fuente está muerta. Deberá iniciar sesión nuevamente después si la fuente necesita una cuenta."],
      ["Cambiando tu agente de usuario", "El agente de usuario es la cadena que identifica su dispositivo en un sitio web y algunos sitios lo tratan como una señal de bot. Reemplazar el valor predeterminado con una cadena de navegador común y luego reiniciar la aplicación a veces supera una verificación que, de lo contrario, se repite."],
      ["Una extensión no se instalará", "Android bloquea las instalaciones desde fuera de una tienda de forma predeterminada. Permítalo para su administrador de archivos o navegador, y si falta esa opción, use Shizuku como ruta alternativa. Una descarga que se detuvo parcialmente produce un mensaje diferente, así que vuelva a instalarla desde cero."],
      ["El contenido se abre en el lugar equivocado", "Si se abre un manga en el reproductor de vídeo o un episodio en el lector, la extensión declara el tipo de contenido incorrecto. Se trata de un fallo de la extensión, no de la configuración, así que infórmalo en lugar de intentar solucionarlo localmente."],
      ["Obtener registros de fallos y más detalles", "La configuración avanzada puede volcar registros de fallas y una captura de logcat desde su dispositivo muestra lo que estaba haciendo la aplicación con mayor profundidad. Vale la pena adjuntar ambos cuando informe un problema, ya que convierten una descripción vaga en algo que se puede rastrear."],
      ["Almacenamiento y lectura lenta o retrasada", "La carga lenta suele ser el sitio, su conexión o un límite de velocidad en lugar de la aplicación. La lectura lenta proviene de imágenes de gran tamaño en un capítulo. Cambiar de fuente, liberar memoria o esperar a que se cumpla un límite de velocidad son las soluciones prácticas."],
      ["Cuando no eres solo tú", "Si otras personas ven el mismo error, es la extensión o la aplicación y no su configuración. Consulte el rastreador de problemas del proyecto para conocer la fuente antes de abrir un nuevo informe e incluya la versión de su aplicación y el texto exacto del error."],
    ],
    facts: [
      "Una fuente rota casi siempre es la fuente, no la aplicación.",
      "Una extensión obsoleta es la causa más común de rotura repentina.",
      "Si todas las fuentes fallan, sospeche de la red antes que de la aplicación.",
      "Abrir un sitio en el navegador integrado elimina muchas comprobaciones de verificación.",
      "Al borrar las cookies y los datos web se restablece una verificación bloqueada y cualquier inicio de sesión.",
      "Los registros de fallos y logcat hacen que se pueda rastrear un informe de error.",
    ]
  },
  errors: {
    title: "Cada mensaje de error y lo que significa.",
    body: "Watchtower muestra el error sin formato en lugar de ocultarlo, por lo que el mensaje en sí es la pista más rápida que tiene. Encuentre el suyo a continuación y pruebe la primera solución antes de cambiar cualquier otra cosa.",
    subsections: [
      ["403 Prohibido", "El sitio web ha decidido que su solicitud parece automatizada y la rechaza. En la práctica, se trata de protección anti-bots. Primero actualice la extensión, luego abra la fuente en el navegador integrado una vez para borrar cualquier verificación que tenga el sitio. Si aún se niega, es posible que la fuente haya elevado su protección o haya bloqueado su dirección."],
      ["404 No encontrado", "La página que esperaba la extensión se ha movido o eliminado. Esta es una extensión obsoleta casi siempre, así que actualice su repositorio y actualícelo. Si aún no hay ninguna actualización, el autor de la extensión no se ha puesto al día con el sitio."],
      ["429 Demasiadas solicitudes", "Se le ha limitado la tarifa por realizar solicitudes demasiado rápido. Esperar es la solución real, y reducir la frecuencia con la que se ejecutan las actualizaciones y descargas es lo que evita que se repita. Reintentar inmediatamente solo extiende el bloqueo."],
      ["Errores 500, 502 y otros 5xx", "El sitio web en sí está fallando. No hay nada que arreglar en su dispositivo y lo correcto es esperar y volver a intentarlo más tarde. Verificar el sitio en un navegador confirma si está inactivo para todos."],
      ["1006 y 1020, los códigos del firewall", "1006 generalmente significa una prohibición temporal de IP y 1020 significa una regla de firewall establecida por el propietario del sitio, a menudo para bloquear visitantes de fuera de su país. Cambiar de red puede ayudar con 1006; Por lo general, 1020 no se puede solucionar."],
      ["No se pudo omitir Cloudflare", "El sitio está protegido por Cloudflare y la verificación automática no se borró. Abra la página de la fuente en el navegador integrado y complete cualquier verificación manualmente, luego regrese a la aplicación. Si la página se recarga sin cesar, consulte la página de solución de problemas."],
      ["No se puede resolver el host, la conexión falló, se agotó el tiempo de espera", "Estos son problemas de red más que fallas en la fuente. Verifique que el dispositivo tenga acceso a Internet, pruebe con otra red o datos móviles y habilite DNS cifrado en la configuración. Un portal de Wi-Fi cautivo es una causa común."],
      ["La validación del certificado falló", "No se pudo validar el certificado de seguridad del sitio. Verifique que la fecha y hora del dispositivo sean correctas, borre el caché y las cookies de la aplicación y pruebe con una red diferente. Un certificado caducado en el sitio no es algo que pueda solucionar."],
      ["Errores de almacenamiento y tarjeta SD", "Los mensajes sobre una tarjeta, una ruta o una carpeta no disponible significan que la ubicación de descarga se ha movido o se ha vuelto ilegible. Verifique el espacio libre, confirme que la aplicación aún tiene permiso para esa carpeta y vuelva al almacenamiento interno si la tarjeta sigue fallando."],
      ["La aplicación o extensión no se instala", "Un APK firmado por otra persona, una descarga truncada y una arquitectura de procesador incorrecta producen cada uno un mensaje de instalación diferente. Elimine la copia conflictiva y descargue el archivo nuevamente, y asegúrese de que Android pueda instalar aplicaciones desconocidas."],
      ["Cuando el error no aparece aquí", "Copie el mensaje exacto en lugar de parafrasearlo. El nombre de la operación y la URL que contiene generalmente apuntan directamente al paso fallido, y la página de solución de problemas lo restringe."],
    ],
    facts: [
      "403 y 429 significan que el sitio lo rechaza, por diferentes motivos.",
      "Un 404 es casi siempre una extensión que necesita actualización.",
      "Un error 5xx es culpa del sitio web, no de su dispositivo.",
      "1006 es una prohibición temporal; 1020 es una regla de firewall que no puedes eludir.",
      "Copie el mensaje exacto: la URL que contiene nombra el paso fallido.",
      "Las discrepancias de firma significan que se instala una copia firmada de manera diferente.",
    ]
  },
  faq: {
    title: "Preguntas que surgen con frecuencia.",
    body: "Respuestas breves a las preguntas de la gente antes y después de instalar Watchtower, agrupadas por la parte de la aplicación que tocan.",
    subsections: [
      ["¿Por qué no está en una tienda de aplicaciones?", "Porque Watchtower instala extensiones en tiempo de ejecución, lo que las políticas de tienda no permiten. Es también por eso que cada instalación proviene de un APK en el que eliges confiar."],
      ["¿Existe una versión para iOS?", "El código subyacente es multiplataforma, pero el envío en iOS está limitado por las reglas de la plataforma y no se promete. Android es la plataforma que obtiene todo primero."],
      ["¿Funciona sin internet?", "Todo lo que hayas descargado, además de los archivos locales, funciona completamente sin conexión. La exploración de fuentes y la búsqueda no lo hacen, porque necesitan los propios sitios web."],
      ["¿Puedo sincronizar entre dispositivos?", "No hay sincronización automática. Mueve su biblioteca con un archivo de respaldo y los medios descargados deben copiarse por separado."],
      ["¿Es legal y es gratis?", "Watchtower es gratuito y de código abierto, y no contiene ningún contenido propio. Lo que agregues a través de extensiones es tu responsabilidad, por lo que la aplicación tiene cuidado de decir que no las examina."],
      ["¿Por qué no puedo ver una fuente instalada?", "Dos filtros ocultan fuentes sin eliminarlas. Si la extensión ofrece un idioma distinto al de su dispositivo, active ese idioma en el filtro de la lista de fuentes. Si es una fuente para adultos, habilite la opción que muestra fuentes NSFW en la lista."],
      ["¿Cómo desinstalo una extensión?", "Desinstálalo desde la pantalla de extensiones o como cualquier otra aplicación en la configuración de Android. Las entradas de su biblioteca permanecen y simplemente se muestran como no disponibles hasta que otra fuente pueda publicarlas."],
      ["¿Por qué no se muestran mis descargas?", "Las descargas se detectan por carpeta. Si se movió la ubicación de almacenamiento, se quitó la tarjeta SD o se cambió el nombre de la fuente o serie en el sitio, la aplicación no puede coincidir con la carpeta. Corrija la ubicación o cambie el nombre de la carpeta para que coincida, luego reconstruya el índice de descargas."],
      ["¿Por qué mi galería de fotos muestra portadas y episodios?", "La aplicación normalmente oculta sus medios de la galería del sistema con un archivo .nomedia. Si no fue así, cree uno usted mismo y colóquelo en la carpeta de descargas, o en la carpeta de origen local si eso es lo que se filtró."],
      ["¿Por qué la lectura o la carga son lentas?", "La carga lenta es el sitio, su conexión o un límite de velocidad, no que la aplicación sea pesada. La lectura lenta proviene de imágenes de gran tamaño en un capítulo, así que libere memoria o elija una fuente con escaneos más pequeños."],
      ["¿Por qué no se muestran algunos episodios?", "Aparte de los problemas de red, la aplicación ocasionalmente puede pasar por alto que existe un video. Salir del reproductor y abrir el episodio nuevamente generalmente lo registra."],
      ["¿Por qué una actualización de la biblioteca se salta entradas?", "Las entradas con contenido no visto o no leído, las entradas que no has iniciado, las entradas marcadas como completadas y las entradas sin publicaciones esperadas se omiten intencionalmente. Eso evita que una gran biblioteca ataque las fuentes y bloquee la aplicación."],
      ["¿Por qué las actualizaciones de la biblioteca se detienen en segundo plano?", "Algunas versiones de Android ahorran batería de forma agresiva y suspenden el trabajo en segundo plano. Exime a Watchtower de la optimización de la batería si las actualizaciones solo llegan cuando abre la aplicación."],
      ["¿Por qué se bloquea la captura de pantalla?", "La configuración de privacidad que oculta la aplicación en el selector de tareas también bloquea las capturas de pantalla. Desactive esa configuración si desea capturar la pantalla."],
      ["Algo está roto, ¿y ahora qué?", "Actualice sus extensiones primero, ya que eso soluciona la mayoría de las roturas. Si persiste, consulte la página de errores para ver el mensaje exacto que está viendo y luego la página de solución de problemas, antes de asumir que la aplicación tiene la culpa."],
    ],
    facts: [
      "Watchtower no se distribuye a través de tiendas de aplicaciones.",
      "El contenido descargado y los archivos locales funcionan completamente sin conexión.",
      "No hay sincronización automática entre dispositivos.",
      "Una fuente oculta suele ser el filtro de idioma o la palanca NSFW.",
      "Las descargas coinciden por nombre de carpeta, por lo que cambiar el nombre de una la oculta.",
      "La actualización de extensiones soluciona las roturas más repentinas.",
    ]
  },
  contribute: {
    title: "Ayudando a mejorar Watchtower.",
    body: "La aplicación, las extensiones y esta documentación están todos abiertos. Hay trabajos útiles para personas que escriben código y para personas que no.",
    subsections: [
      ["Maneras de ayudar", "Informa errores con el mensaje exacto que viste, mejora una fuente, escribe una extensión para un sitio que nadie ha cubierto o traduce este sitio a otro idioma."],
      ["Trabajando en la aplicación", "Clona el repositorio, instala las cadenas de herramientas Flutter y Rust y ejecuta el analizador antes de abrir una solicitud de extracción. Ir solo es necesario si estás cambiando el servidor de torrent."],
      ["Trabajando en la documentacion", "El sitio es su propio repositorio. Agregar un idioma significa agregar un archivo de traducción; el diseño y la navegación ya se encargan del resto."],
      ["Traductorio", "Tanto la aplicación como este sitio ofrecen muchos idiomas y uno nuevo es aditivo. Nunca tendrás que tocar el diseño para agregar tu propio idioma."],
      ["Informar de un buen error", "Incluye la versión de tu aplicación, la fuente que estabas usando, el texto exacto del error y si otras fuentes aún funcionan. Esto suele ser suficiente para localizar la avería."],
      ["Antes de un gran cambio", "Primero abra una edición o pregunte en Discord. Le ahorra construir algo que no se ajusta al rumbo del proyecto."],
    ],
    facts: [
      "La documentación es un repositorio separado de la aplicación.",
      "Agregar un idioma significa agregar un archivo, no cambiar el diseño.",
      "Informar el texto de error exacto ahorra la mayor parte del tiempo.",
      "Se necesita óxido para que la aplicación funcione; Elija solo el servidor torrent.",
    ]
  },

  history: {
    title: "Todo lo que ya has abierto.",
    body: "El historial registra lo que viste y leíste, por lo que puedes volver a algo que no terminaste sin volver a buscarlo.",
    subsections: [
      ["lo que registra", "Al abrir un episodio o capítulo se agrega una entrada con el tiempo y hasta dónde llegaste. El historial es un registro de actividad, no una segunda biblioteca, por lo que se llena solo a medida que usas la aplicación."],
      ["Filtrar y ordenar", "Limite la lista a hoy, esta semana o este mes, cambie entre una lista y una cuadrícula y ordene por fecha o título. Estos cambian lo que se muestra y nada más."],
      ["Volviendo a una serie", "Toca una entrada para volver a abrir la serie donde la dejaste. La historia es la ruta más rápida para volver a algo que probaste una vez y dejaste a un lado."],
      ["Incógnito y privacidad", "Mientras el modo incógnito está activado, no se registra nada nuevo, por lo que nada de lo que abres aparece en el historial. Al apagarlo se reanuda la grabación desde ese punto."],
      ["Borrar historial", "Puedes borrar el historial sin tocar tu biblioteca o tu progreso guardado. Borrarlo solo elimina el registro de lo que abriste."],
      ["Cuando la historia parece equivocada", "Una entrada que se muestra como no vista generalmente significa que la fuente cambió la dirección del episodio, por lo que la aplicación lo trata como nuevo. Quitar la entrada perdida y actualizar la serie la pone en orden."],
    ],
    facts: [
      "El historial registra la actividad, no reemplaza tu biblioteca.",
      "Los filtros reducen la vista sin eliminar nada.",
      "El modo incógnito impide que se escriba un nuevo historial.",
      "Borrar el historial deja tu progreso intacto.",
    ]
  },

  calendar: {
    title: "Qué se lanza y cuándo.",
    body: "El calendario muestra los próximos capítulos y episodios de su biblioteca, para que pueda ver de un vistazo lo que vence hoy y lo que vendrá más adelante.",
    subsections: [
      ["La vista del mes", "Los días con lanzamientos están marcados y al tocar un día se salta a la lista de esa fecha. Responde a lo que sale esta semana sin abrir una sola serie."],
      ["el horario semanal", "El cronograma presenta una semana con la portada de cada próximo lanzamiento, que se lee mejor que una densa cuadrícula mensual en un teléfono."],
      ["Filtrar por estado", "Muestra solo los estados que te interesan, de modo que las series completadas y en pausa no saturan la vista que utilizas para planificar la semana."],
      ["que significan las fechas", "Una fecha es la última vez que la fuente dijo que se esperaba algo, no una promesa. Las fuentes que no publican fechas simplemente no aparecen."],
      ["Indicando entradas vistas", "Una opción marca lo que ya has visto en el programa, por lo que una vista semanal también funciona como una lista de verificación."],
      ["Cuando el calendario está vacío", "Un calendario vacío generalmente significa que las fuentes que sigues no publican fechas de lanzamiento. Ese es un límite de la fuente, no un fallo de la aplicación."],
    ],
    facts: [
      "Las fechas de lanzamiento provienen de las fuentes, no de la aplicación.",
      "La programación se puede filtrar por estado de serie.",
      "Una opción marca las entradas que ya has visto.",
      "Una fuente sin fechas no aparecerá en absoluto.",
    ]
  },

  "mass-migration": {
    title: "Moviendo muchas series a la vez.",
    body: "Cuando una fuente muere, la migración masiva mueve un grupo completo de entradas de la biblioteca a una fuente funcional de una sola vez, en lugar de editarlas una por una.",
    subsections: [
      ["Cuando usarlo", "Una fuente que ha dejado de funcionar, o de la que se quiere alejarse, es el caso de la migración masiva. La migración mantiene su progreso y sus categorías."],
      ["Elegir origen y destino", "Elija el grupo de entradas para mover y la fuente a la que moverlas. La aplicación busca por sí sola el destino de cada título."],
      ["Revisando los partidos", "Cada partido se muestra antes de que cambie algo, por lo que puedes aceptar los buenos y omitir los incorrectos. Hacer coincidir por título nunca es perfecto."],
      ["Aplicando el cambio", "La aplicación reescribe cada entrada para señalar la nueva fuente y transmite su progreso. Las series sin coincidencias quedan intactas."],
      ["leyendo el resumen", "La carrera termina con un recuento de lo que se movió, lo que se omitió y lo que falló. Un artículo fallido suele ser un título que el destino no lleva."],
      ["cuando nada coincide", "Si la mayoría de los títulos no coinciden, el destino no encaja bien y una fuente diferente es la mejor respuesta. No se pierde nada con detenerse, porque los cambios sólo ocurren cuando lo aplicas."],
    ],
    facts: [
      "La migración masiva mueve un grupo de entradas en una sola pasada.",
      "Cada partido se revisa antes de cambiar algo.",
      "Su progreso y categorías se transmiten.",
      "Nada cambia hasta que aplicas los resultados.",
    ]
  },

  statistics: {
    title: "Tu biblioteca en números.",
    body: "Las estadísticas resumen lo que has visto y leído: totales, tiempo invertido, desglose del estado y los géneros a los que vuelves con más frecuencia.",
    subsections: [
      ["que se cuenta", "Totales por tipo de medio, número de capítulos o episodios, tiempo invertido y cómo se divide su biblioteca en estados."],
      ["Tiempo y actividad", "La tarjeta de tiempo estima cuánto tiempo ha pasado mirando y leyendo, y el gráfico de actividad muestra cómo se distribuye en las últimas semanas."],
      ["Géneros principales", "Los géneros en los que realmente dedicas tu tiempo, que a menudo no son los que imaginas. Es una buena forma de encontrar una nueva serie en una línea que ya te gusta."],
      ["Por tipo de medio", "Las estadísticas se dividen por tipo de medio, por lo que los totales de anime y manga nunca se mezclan."],
      ["De dónde vienen los números", "Todo se calcula a partir de su propia biblioteca e historial en el dispositivo. No se sube nada a ningún lado."],
      ["Cuando dice que no hay datos", "Una nueva instalación aún no tiene nada que resumir. Las figuras aparecen una vez que has visto o leído algo y se ha grabado."],
    ],
    facts: [
      "Las estadísticas se calculan en el dispositivo, a partir de sus propios datos.",
      "Los totales se mantienen separados para cada tipo de medio.",
      "El cuadro de actividades muestra cómo la lectura y la observación se distribuyen a lo largo del tiempo.",
      "Una nueva instalación no muestra datos hasta que se registra algo.",
    ]
  },

  anime: {
    title: "Ver anime, con introducción saltada.",
    body: "El anime se abre en el reproductor de video con un extra: introducción y final saltados, impulsado por AniSkip cuando se puede combinar un título.",
    subsections: [
      ["el jugador de anime", "Los episodios se reproducen en el mismo reproductor que todo lo demás, con calidad, audio, subtítulos y velocidad en las hojas habituales."],
      ["Saltarse introducciones y finales", "Al saltar la introducción, un botón hace una cuenta regresiva durante la apertura y la pasa, y el final se maneja de la misma manera. Es una configuración, por lo que se puede desactivar."],
      ["Por qué no se puede igualar un título", "Saltar necesita identificar la serie y el episodio. Un título que no se puede identificar simplemente se reproduce sin el botón, en lugar de fallar."],
      ["El tiempo de espera de salto", "Una breve cuenta regresiva te da tiempo para cancelar antes de que ocurra el salto. Su longitud es configurable si el valor predeterminado parece apresurado."],
      ["Descubriendo el anime", "Una pantalla de descubrimiento ofrece listas recomendadas, populares, próximas, actualizadas recientemente y mejor calificadas, además de filas de géneros, para que pueda encontrar algo sin una fuente abierta."],
      ["Cuando el descubrimiento muestra un error", "Las filas de descubrimiento provienen de un servicio externo y no de sus fuentes. Cuando no se puede acceder a ese servicio, el resto de la aplicación no se ve afectado y una fuente sigue funcionando normalmente."],
    ],
    facts: [
      "Para omitir la introducción es necesario identificar la serie y el episodio.",
      "Saltar es una configuración y se puede desactivar.",
      "La duración de la cuenta regresiva de salto es configurable.",
      "Discovery utiliza un servicio externo; Las fuentes funcionan independientemente.",
    ]
  },

  music: {
    title: "Música, con tu propia biblioteca.",
    body: "Watchtower reproduce música desde extensiones de música y desde tu propia colección, con álbumes, artistas, letras y scrobbling en un solo lugar.",
    subsections: [
      ["De donde viene la musica", "Las extensiones de música proporcionan pistas y colecciones, y una biblioteca local cubre los archivos que ya posee. Ambos se comportan como fuentes normales."],
      ["Álbumes y artistas", "La música se busca por álbum y artista, así como por pista, que es lo que hace que una biblioteca de música sea utilizable en lugar de una larga lista de archivos."],
      ["el jugador", "Una cola con reproducción aleatoria y repetición, una hoja que se reproduce ahora y una portada. La reproducción continúa mientras te mueves por la aplicación."],
      ["Lírica", "Las pistas que contienen letras las muestran en una hoja y las letras sincronizadas siguen la posición de la pista donde la fuente proporciona la sincronización."],
      ["scrobbling", "Al conectar Last.fm se registra lo que reproduces en tu perfil, de la misma manera que el seguimiento registra lo que miras."],
      ["Cuando una pista no se reproduce", "Una fuente de música que ha dejado de funcionar se comporta como cualquier otra fuente averiada. Actualice la extensión y espere que una fuente basada en servicio no esté disponible mientras ese servicio esté inactivo."],
    ],
    facts: [
      "La música proviene de extensiones o de archivos que ya posee.",
      "Los álbumes y los artistas son de primera clase, no sólo las pistas.",
      "La exploración de Last.fm está disponible cuando lo conectas.",
      "Las letras siguen la pista cuando la fuente proporciona el tiempo.",
    ]
  },

  novels: {
    title: "Leer novelas y que te las lean.",
    body: "Las novelas se abren en un lector de texto en lugar de en un lector de imágenes, con temas, progreso y una lectura en voz alta opcional.",
    subsections: [
      ["Como se abren las novelas", "Una fuente que declara contenido novedoso se abre automáticamente en el lector de texto, por lo que nunca tendrá que elegir el lector adecuado a mano."],
      ["Comodidad de lectura", "El tamaño de fuente, el interlineado y el tema son ajustables, porque una pared de texto no es la misma experiencia de lectura que una página de imágenes."],
      ["Recordando tu lugar", "El lector de novelas rastrea tu posición en cada capítulo y te regresa a él, de la misma manera que lo hace el lector de imágenes."],
      ["Leer en voz alta", "Texto a voz puede leer un capítulo en voz alta usando las voces instaladas en su dispositivo, lo cual es útil en un viaje diario o mientras hace otra cosa."],
      ["Cuando un capítulo está vacío", "Un capítulo de novela que comienza en blanco generalmente proviene de una fuente que devolvió el texto en una forma que el lector no puede mostrar. Actualizar la extensión es lo primero que debe intentar."],
      ["Novelas versus manga", "Una novela es texto y un manga son imágenes, por lo que una fuente debe declarar el tipo correcto para que el contenido se abra correctamente. Un tipo incorrecto lo envía al lector equivocado."],
    ],
    facts: [
      "Las novelas se abren en un lector de texto, elegido por tipo de contenido.",
      "La fuente, el espaciado y el tema son ajustables.",
      "La lectura en voz alta utiliza las voces instaladas en su dispositivo.",
      "Un capítulo en blanco generalmente significa que la fuente devolvió texto inutilizable.",
    ]
  },

  games: {
    title: "Los juegos como otro tipo de fuente.",
    body: "Watchtower puede enumerar juegos a través de extensiones y plataformas de juegos, utilizando la misma navegación y búsqueda que ya conoce.",
    subsections: [
      ["¿Qué es una fuente de juego?", "Una extensión de juego enumera los títulos de la misma manera que una extensión de manga enumera las series y abre las mismas pantallas de exploración y búsqueda."],
      ["Plataformas", "Los juegos se agrupan por plataforma, lo que mantiene un catálogo navegable cuando una fuente cubre muchos sistemas."],
      ["Navegando y buscando", "Busque fanáticos en las fuentes de juegos habilitadas exactamente como lo hace con los otros tipos de medios, de modo que una consulta los cubra todos."],
      ["Instalación de extensiones de juegos", "Se instalan desde los mismos repositorios que todo lo demás y aparecen en los juegos una vez instalados."],
      ["Cuando no aparece nada en la lista", "Una pantalla de juegos vacía significa que no hay ninguna extensión de juego instalada. Agregue un repositorio que proporcione uno y luego actualice."],
      ["Manteniéndolo separado", "Las entradas de juegos no se combinan con la lectura y la visualización, por lo que un gran catálogo de juegos nunca satura tu biblioteca."],
    ],
    facts: [
      "Las fuentes del juego se instalan desde los mismos repositorios que todo lo demás.",
      "Los juegos están agrupados por plataforma.",
      "La búsqueda cubre todas las fuentes de juegos habilitadas a la vez.",
      "Las entradas de juegos permanecen separadas de tu biblioteca.",
    ]
  },
};

export default es;
