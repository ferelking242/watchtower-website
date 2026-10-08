// German prose overlay. Code blocks and markers come from en.js.
const de = {
  overview: {
    title: "Eine vollständige Karte der Watchtower-App.",
    body: "Watchtower vereint einen Flutter-Client, lokale Bibliotheken, JavaScript-Erweiterungen, native Bindings und einen optionalen Headless-Server in einer selbst hostbaren Runtime.",
    subsections: [
      ["Was Watchtower ist", "Ein plattformübergreifender Media-Hub für Anime, Manga, Serien, Musik, Romane und Spiele. Er indexiert lokale Dateien, verfolgt den Fortschritt, lädt Inhalte herunter und führt Community-Quellen über eine erweiterbare JavaScript-Runtime aus."],
      ["Zwei Runtimes, ein Vertrag", "Die installierte App bietet einen eingebetteten HTTP-Server auf Port 4567. Die Headless-CLI nutzt dieselbe Flutter- und QuickJS-Engine, sodass CI, Server und SSH-Sitzungen Quellen ohne grafische Sitzung ausführen können."],
      ["Für wen dieser Leitfaden ist", "Für Quellen-Autoren, die Erweiterungen schreiben, Selbsthoster, die den Headless-Server betreiben, und Mitwirkende am Flutter-Client. Jeder Abschnitt nennt, was Pflicht und was optional ist."]
    ],
    facts: [
      "Plattformübergreifender Flutter-Client für Anime, Manga, Musik, Romane, Spiele und Wiedergabe.",
      "Lokaler Indexer, Bibliothek, Verlauf, Favoriten, Kalender und Fortschrittsverfolgung.",
      "QuickJS-Erweiterungen, Downloads, Anti-Bot, Rust-Bindings und der Go-Torrent-Server."
    ]
  },
  "app-map": {
    title: "Eine App aus kombinierbaren Oberflächen.",
    body: "Das Repository trennt Feature-Screens, Datendienste und Ausführungs-Runtimes. Diese Karte folgt Inhalten von einer Quelle bis zur Wiedergabe und zur lokalen Bibliothek.",
    subsections: [
      ["Datenfluss", "Eine Erweiterung liefert gemeinsame Modelle. Riverpod-Provider paginieren sie, Screens machen daraus Karten, und Isar speichert Verlauf, Favoriten und indexierte Dateien."],
      ["Routing", "GoRouter verbindet Onboarding, Start, Suche, Details, Wiedergabe, Bibliotheken, Einstellungen und Spezialmodule, ohne Quellen-Verträge zu koppeln."],
      ["Runtimes", "Flutter besitzt die UI, QuickJS/Dart führt Quellen aus, Rust und Go liefern native Fähigkeiten, und die Headless-CLI spiegelt die Runtime serverseitig."],
      ["Zustand und Speicher", "Riverpod steuert die Haupt-App, Isar ist die primäre Datenbank und Hive speichert Einstellungen. Musik- und Dateibrowser-Module behalten ihre eigenen Alt-Stacks, isoliert von Quellen-Verträgen."]
    ],
    facts: [
      "UI-Module sind nach Mediendomäne gruppiert, nicht nach Anbieter.",
      "Querschnittsdienste übernehmen Cache, Downloads, Anti-Bot, Sync und Diagnose.",
      "Screens arbeiten mit einer Remote-Quelle, einer lokalen Datei oder dem Headless-Server."
    ]
  },
  "content-types": {
    title: "Manga, Watch, Musik: ein gemeinsames Modell.",
    body: "ItemType klassifiziert Quellenfamilien; die konkrete Nutzlast bleibt in Manga-, Kapitel-, Seiten-, Video- und Track-Modellen. Eine Watch-Erweiterung deckt so Anime, Filme oder Serien ohne neuen nativen Renderer ab.",
    subsections: [
      ["Manga", "Kapitel nutzen getPageList(url), um Reader-Seiten zu erzeugen. Metadaten teilen Name, Bild, Beschreibung, Autor, Künstler und Genres."],
      ["Watch: Anime, Film, Serie", "Episoden nutzen getVideoList(url). Videos tragen URL, Qualität, Original-URL, Header, Untertitel und Audiospuren. Film/Serie/Anime sind Inhaltsmetadaten, keine getrennten Runtimes."],
      ["Musik und Roman", "Musik nutzt die Such- und Detailoberflächen mit Tracks, Alben, Künstlern und Playlists; Romane nutzen Detail, Kapitel und einen HTML/Text-Reader."],
      ["Spiele und Plugins", "Game bietet eine eigene Discovery-Oberfläche. Plugin steht für Utility- oder Downloader-Erweiterungen mit Manifest und nativer UI-Schema."]
    ],
    facts: [
      "Kompatibilität kommt aus Datenverträgen, nicht aus einem Screen pro Website.",
      "Filter, Einstellungen, Kommentare, Empfehlungen und eigene Listen sind optional.",
      "Das Feld itemType liegt auf Source und wählt Bibliothek, Player und Verlauf."
    ]
  },
  "extension-runtime": {
    title: "JavaScript läuft in einer kontrollierten Runtime.",
    body: "DartExtensionService lädt den Quellcode, injiziert MProvider und führt ihn in QuickJS aus. Bridges bieten Netzwerk, DOM, Extraktoren, Einstellungen und Flutter-Modelle, ohne die native App offenzulegen.",
    subsections: [
      ["Laden", "SourceCodeLanguage unterscheidet Dart, JavaScript und Mihon. Der Loader installiert oder entfernt auch private Android-Erweiterungen über den nativen Kanal."],
      ["Sicherheit und Isolation", "Quellenaufrufe laufen über kontrollierte Bridges. Der Headless-Server ergänzt Registry, Cache, Authentifizierung und Rate-Limiting vor der Ausführung."],
      ["Lebenszyklus", "Eine Quelle wird im Katalog entdeckt, installiert oder aktiviert, bei Bedarf ausgeführt, und ihre Einstellungen, Cookies, Cache und Layout lassen sich in den Erweiterungseinstellungen zurücksetzen."],
      ["Fehlerbehandlung", "Ein fehlgeschlagener Bridge-Aufruf liefert einen typisierten Fehler an Dart, statt das Isolate zu beenden. Fehler werden mit Operation und fehlerhafter URL protokolliert, damit ein Diagnoselauf den genauen Schritt zeigt."]
    ],
    facts: [
      "QuickJS liefert serialisierte Objekte an Dart-Modelle.",
      "Erweiterungscode kann Header, Filter, Einstellungen und eigene Listen definieren.",
      "Mihon-Kompatibilität erlaubt die Wiederverwendung bestehender Manga-Erweiterungen."
    ]
  },
  "extension-types": {
    title: "Jede Erweiterungsfamilie hat ihre Oberfläche.",
    body: "Der Quellentyp wählt die verfügbaren Screens und Aktionen. Dieselbe JS-Engine wird geteilt, während Ergebnisse im Manga-Reader, Watch-Player, Audio-, Roman-, Spiel- oder Plugin-Bereich gerendert werden.",
    subsections: [
      ["Manga", "Kapitel- und Seitenquellen mit Katalogfiltern, Leseverlauf und lokalem Import."],
      ["Watch", "Videoquellen für Anime, Filme und Serien: Details, Episoden, Qualität, Untertitel, Audiospuren und Player-Extraktoren."],
      ["Musik", "Audio-Katalog- und Metadaten-Erweiterungen: Alben, Künstler, Tracks, Suche, Playlists und Statistiken."],
      ["Roman, Spiel, Plugin", "Romane nutzen den Text/HTML-Reader; Spiele haben Discovery-Screens; Utility-Plugins folgen manifest.json und ui/schema.json."]
    ],
    facts: [
      "Watch ist eine Nutzungsfamilie: itemType kann Anime oder eine andere kompatible Videoquelle sein.",
      "Der generische Renderer nutzt dieselben Karten, Paginierung und Layouts für kompatible Quellen.",
      "Optionale Fähigkeiten verhindern das Anzeigen einer Aktion, die die Quelle nicht implementiert."
    ]
  },
  "extension-contract": {
    title: "Der JS-Vertrag, Methode für Methode.",
    body: "ExtensionService definiert das gemeinsame Minimum. Optionale Methoden bereichern die Erfahrung, ohne eine Quelle zu brechen, die sie nicht implementiert.",
    subsections: [
      ["Katalognavigation", "getPopular, getLatestUpdates und search liefern MPages mit list und hasNextPage. Filter kommen aus getFilterList, Einstellungen werden pro Quelle gespeichert."],
      ["Detail und Wiedergabe", "getDetail liefert MManga. Eine Manga-Quelle bietet getPageList; eine Watch-Quelle bietet getVideoList und kann Qualität, Header, Untertitel und Audio liefern."],
      ["Vertragserweiterungen", "getCustomList aktiviert per id deklarierte Startabschnitte; Empfehlungen, Kommentare, Vorschläge, Konto, Favoriten und Abo bleiben optional mit sicheren leeren Standardwerten."],
      ["Fehlersemantik", "Gib ein leeres MPages zurück statt zu werfen, wenn eine Seite keine Einträge hat. Wenn eine Anfrage wirklich fehlschlägt, lass den Fehler durch, damit die UI einen Retry zeigt und die Diagnose die Ursache erfasst."]
    ],
    facts: [
      "URLs bleiben Navigations-IDs zwischen Katalog, Detail und Wiedergabe.",
      "Header und baseUrl kommen von der Quelle und sind anpassbar.",
      "Fehler werden in Dart und in der Headless-Runtime für die Diagnose protokolliert."
    ]
  },
  "ui-schema": {
    title: "Das Manifest beschreibt den Vertrag.",
    body: "Für UI-Erweiterungen und ZeusDL-Skripte deklariert manifest.json Identität, Berechtigungen und Runtime. Das Schema beschreibt Felder, Aktionen und Ausgabe, die Flutter nativ rendert.",
    subsections: [
      ["Manifest-Felder", "manifest.json trägt Identität, Version, Autor, Netzwerkberechtigungen und Binäranforderungen. Die id ist ein Reverse-DNS-String wie en.example-tool."],
      ["Nativer UI-Vertrag", "Der UI-Vertrag rendert URL-/Textfelder, Auswahlfelder, Toggles und Aktionen ohne WebView: schnelle Ladezeiten und Offline-Funktion."],
      ["ZeusDL-Ausgabeprotokoll", "Skripte kommunizieren über stdout mit PROGRESS-, STATUS-, DONE- und ERROR-Zeilen. Watchtower streamt sie in Echtzeit ins Ausgabelog."],
      ["Validierungsfehler", "Ein Manifest, das die Schema-Validierung nicht besteht, wird vor der Installation abgelehnt. Der Marktplatz zeigt das genaue fehlerhafte Feld statt einer generischen Meldung."]
    ],
    facts: [
      "manifest.json trägt Identität, Version, Autor, Netzwerkberechtigungen und Binäranforderungen.",
      "Der UI-Vertrag rendert URL-/Textfelder, Auswahlfelder, Toggles und Aktionen ohne WebView.",
      "ZeusDL-Skripte kommunizieren über stdout mit PROGRESS, STATUS, DONE und ERROR."
    ]
  },
  layouts: {
    title: "ui-layouts.json steuert Reihenfolge und Form.",
    body: "Eine Erweiterung kann ein deklaratives Layout veröffentlichen. Watchtower lädt es aus watchtower-extensions, parst es als UiLayout, cached es pro Quelle und lässt Flutter Komponenten auf native Widgets abbilden.",
    subsections: [
      ["Wurzel und Cache", "schemaVersion und home.sections sind das nützliche Minimum. browse, detail und player sind optional. LayoutDownloader liest Source.uiLayout von raw.githubusercontent.com, dann speichert LayoutRegistry layouts/<source.id>.json."],
      ["Startabschnitte", "id identifiziert getCustomList(id, page). component akzeptiert spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed und masonry sowie die kuratierten Präsentationen der Komponentenregistry."],
      ["Visuelle Parameter", "title, icon und accent formen den Kopfbereich. columns, rows, cardStyle, gridOrder und scrollDirection sind Rendering-Hinweise. seeAll öffnet die volle Seite, paginated aktiviert Seitenladen und requiresAuth schützt einen Abschnitt für Angemeldete."],
      ["Browse, detail, player", "Browse beschreibt popular/latest/search mit component, columns, cardStyle, results und filters. Detail akzeptiert hero, episodeList und showRecommendations. Player akzeptiert standard oder feed."],
      ["Ungültige Layouts", "Eine unbekannte Komponente fällt auf den Grid-Renderer zurück und wird protokolliert. Eine fehlerhafte Datei lässt die Quelle auf ihrem Standard-Start Popular/Latest/Search, statt den ganzen Screen zu brechen."]
    ],
    facts: [
      "Ohne Layout fällt die Quelle auf den Standard-Start Popular/Latest/Search zurück.",
      "Die toLegacyMap-Bridge hält bestehende Start-Screens kompatibel.",
      "Ein Layout wird nach Installation oder Update neu geladen und beim Deinstallieren entfernt."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen ist eine steuerbare Oberfläche.",
    body: "Die Watch-Seite kombiniert Hero, Verlauf, Kategorien, Reihen und Katalog aus der aktuellen Quelle. JSON-Layouts können Standardlisten ersetzen und behalten native Interaktionen.",
    subsections: [
      ["Reihenfolge und Hero", "Der Hero nutzt die ersten fünf Banner-Einträge (mit Popular als Fallback), rotiert alle 7 Sekunden und zielt auf ein Querformat-Verhältnis Breite × 0,62. Abspielen öffnet das Detail, Info das Bottom-Sheet und Meine Liste schaltet den Isar-Favoriten um."],
      ["Verlauf", "Weiterschauen liest den Isar-Verlauf der Quelle, dedupliziert nach Manga, begrenzt auf 12 Karten und zeigt Thumbnail, Episode/Kapitel und Fortschritt."],
      ["Katalog und Suche", "Das Kataloggitter paginiert Popular oder eine eigene Liste. Die Suche nutzt 250 ms Debounce, schwebende Vorschläge, Mikrofon/X-Aktionen und bestätigt Ergebnisse erst beim Absenden."],
      ["Performance", "Die App-Bar beobachtet den Scroll mit ValueNotifier; der Hero liegt im CustomScrollView, sodass Inhalte ihn nicht überlagern und der Scroll ein volles setState vermeidet."],
      ["Leere und Fehlerzustände", "Ein leerer Abschnitt wird ausgeblendet. Ein fehlerhafter Abschnitt zeigt eine Retry-Karte mit dem rohen Fehler, und ein Cloudflare-Block führt zum Bypass-Panel statt in eine Sackgasse."]
    ],
    facts: [
      "Kategorien sind 132×72-Karten mit Bild, Verlauf und Rahmen.",
      "Abschnitte werden ausgeblendet, wenn ihre Daten leer sind.",
      "Quellenaktionen bleiben über Manga, Anime, Filme und Serien konsistent."
    ]
  },
  "home-widgets": {
    title: "Widgets sind Datenadapter.",
    body: "WatchtowerHomeScreen ist der globale App-Start. Er kombiniert AniList- und TMDB-Feeds mit der lokalen Bibliothek und steuert Reihen über Medien-Tabs.",
    subsections: [
      ["Medien-Start", "Die Tabs Alle, Film, Serie, Musik, Anime, Asia, Kinder, Westlich, Afrika, Kurz-TV, Fußball und Spiele wählen sichtbare Abschnitte und Hero-Daten."],
      ["Karten", "DiscoveryCard hat Standard-, Ranked-, Landscape-, Featured-, Saga- und Spotlight-Varianten. EpisodeCard ergänzt Thumbnail, Episodentitel, Dauer und Fortschrittsbalken zum Fortsetzen."],
      ["Daten", "AniList liefert Anime und redaktionelle Inhalte; TMDB liefert Filme und Serien; lokale Bibliothek und Provider vervollständigen Nutzerlisten."],
      ["Watch versus globaler Start", "WatchtowerHomeScreen ist der globale Start; WatchHomeScreen ist der Start einer Quelle/Erweiterung. Ersterer aggregiert Kataloge, letzterer rendert einen Quellenvertrag."]
    ],
    facts: [
      "Widgets kennen die URLs der Anbieter nicht: sie konsumieren normalisierte Modelle.",
      "Skeleton-, Leer-, Lade- und Fehlerzustände gehören zur Startoberfläche.",
      "Erweiterungslayouts zielen vor allem auf WatchHomeScreen und browse/detail/player."
    ]
  },
  api: {
    title: "Zwei Runtimes, eine API.",
    body: "Der eingebettete Dart/shelf-Server lauscht in der App auf 4567. Die Headless-CLI nutzt dieselben Operationen für CI, Docker, Railway oder Render.",
    subsections: [
      ["Endpunkte", "Ping, Quellenerkennung, Katalog, Detail, Video, Seiten und Filter spiegeln den ExtensionService-Vertrag. library-, history- und proxy-Routen bedienen die lokale Datenbank und Medien."],
      ["Authentifizierung", "GET /api/ping bleibt öffentlich und liefert die Serverversion. Andere Routen durchlaufen Authentifizierung, Rate-Limiting und die Erweiterungsregistry."],
      ["Fehlerantworten", "Ein Fehler liefert einen JSON-Body mit Operation und Meldung statt eines leeren 500. Ein Quellenfehler behält seinen HTTP-Status, sodass der Client Block von Bug unterscheiden kann."],
      ["NSFW-Filter", "NSFW-Quellen werden aus Listen gefiltert und bei direktem Zugriff mit 403 blockiert."]
    ],
    facts: [
      "GET /api/ping ist öffentlich und liefert die Serverversion.",
      "Andere Routen durchlaufen Authentifizierung, Rate-Limiting und die Erweiterungsregistry.",
      "NSFW-Quellen werden aus Listen gefiltert und bei direktem Zugriff mit 403 blockiert."
    ]
  },
  downloads: {
    title: "Downloads laufen über wählbare Engines.",
    body: "Watch, Manga und Roman haben je einen Download-Tab. Eine Engine pro Medium, Nebenläufigkeit und WLAN-Regeln steuern die Warteschlange, und jede Karte bietet Schnellaktionen.",
    subsections: [
      ["Engine-Auswahl", "HYDRA ist die interne HLS-Engine, ZEUS ist ZeusDL, ARES ist Aria2 und Externe übergibt den Link an ADM oder IDM. Die falsche Engine für einen geschützten Stream ist ein häufiger Fehler."],
      ["Nebenläufigkeit", "Jeder Tab setzt gleichzeitige Verbindungen (1–20) und gleichzeitige Warteschlangeneinträge (1–10). Höhere Werte beschleunigen, verbrauchen aber mehr Bandbreite und können Quellenlimits auslösen."],
      ["Archiv und Aufräumen", "Manga-Kapitel lassen sich als Ordner, CBZ, CBR, CB7 oder ZIP archivieren. Auto-Löschen nach dem Lesen entfernt ein Kapitel nach dem Markieren, optional auch mit Lesezeichen."],
      ["Downloadfehler", "Ein fehlgeschlagener Download behält Teil-Dateien und bietet Wiederholen. 403/429 deuten meist auf Rate-Limit oder Anti-Bot-Block; 5xx zeigt auf die Quelle. Prüfe den Link im Browser, bevor du Einstellungen änderst."]
    ],
    facts: [
      "Nur-WLAN-Regeln können einen Download blockieren, bis ein WLAN verfügbar ist.",
      "Smart-Updates fügen neue Episoden oder Kapitel automatisch hinzu.",
      "Die Download-Warteschlange zeigt bis zu fünf Schnellaktions-Buttons pro Karte."
    ]
  },
  trackers: {
    title: "Der Fortschritt synchronisiert mit externen Diensten.",
    body: "Watchtower verbindet AniList, Kitsu, MyAnimeList, Simkl und Trakt, damit Seh- und Lesefortschritt geräteübergreifend synchron bleibt.",
    subsections: [
      ["Unterstützte Tracker", "AniList, Kitsu, MyAnimeList, Simkl und Trakt. Jeder hat seinen Login und sein Statusmodell, normalisiert auf ein gemeinsames Track-Modell."],
      ["Verknüpfen und Synchronisieren", "Ein Bibliothekseintrag kann mit einem Tracker-Eintrag verknüpft werden. Fortschritt, Status und Bewertung werden beim Update gesendet, Smart-Updates können die nächste Episode oder das nächste Kapitel holen."],
      ["Tracker-Fehler", "Ein abgelaufenes Token, eine widerrufene App oder ein Rate-Limit erzeugen je eine eigene Meldung. Melde dich unter Einstellungen › Tracking neu an; ein falscher Eintrag lässt sich entkoppeln und neu verknüpfen."],
      ["Migration", "Der Massenmigrations-Flow verschiebt Bibliothekseinträge zwischen Quellen und erhält Tracker-Verknüpfungen, damit kein Fortschritt verloren geht, wenn eine Quelle stirbt."]
    ],
    facts: [
      "Tracker-Integrationen liegen unter lib/services/trackers.",
      "Tracker verwaltest du unter Einstellungen › Tracking.",
      "Die Massenmigration erhält Tracker-Verknüpfungen beim Quellenwechsel."
    ]
  },
  "getting-started": {
    title: "Die Flutter-App bauen",
    body: "Installiere die Toolchains, hole die Dart-Pakete und starte den plattformübergreifenden Client.",
    subsections: [
      ["Voraussetzungen", "Flutter 3.38+ / Dart 3.10+, Rust für die flutter_rust_bridge-Bindings, Java 17 für Android und Go 1.21+, wenn du den Torrent-Client neu baust."],
      ["Plattformen", "Windows, Linux, macOS, iOS, Android und Web sind Ziele des Projekts. Einige native Funktionen degradieren im Web sauber."],
      ["Installation prüfen", "Führe den Analyzer vor der ersten Änderung aus: dart format --output=none --set-exit-if-changed lib und flutter analyze --no-pub. Der CLI-Befehl doctor meldet, ob die native Engine und QuickJS verfügbar sind."],
      ["Häufige Build-Fehler", "Eine fehlende Rust-Toolchain bricht die Bindings. Ein altes Flutter-SDK bricht die pub-Auflösung. Ein fehlendes Java 17 bricht den Android-Build. Repariere die Toolchain vor Codeänderungen."]
    ],
    facts: [
      "Voraussetzungen: Flutter 3.38+, Dart 3.10+, Rust und Java 17 für Android.",
      "Das Projekt zielt auf Windows, Linux, macOS, iOS, Android und Web.",
      "Die Headless-CLI kommt aus dem Workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Eingebettet oder headless.",
    body: "Die Headless-CLI läuft mit oder ohne Docker. Private Routen nutzen X-Api-Key oder Authorization Bearer, wenn API_KEY aktiv ist, während die App ihren eingebetteten Modus behält.",
    subsections: [
      ["Docker", "Docker Compose ist der empfohlene Weg für einen reproduzierbaren Server. Das veröffentlichte Image liegt auf GHCR."],
      ["Andere Hosts", "Railway, Render, ein VPS und reines Docker sind im Repository dokumentiert. Der Server behält denselben Quellenvertrag wie die App."],
      ["Umgebungsvariablen", "API_KEY schützt private Routen. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR und RATE_MAX_TOKENS steuern Cache, Persistenz und Rate-Limiting."],
      ["Deployment-Fehler", "Ein Container, der sofort beendet wird, hat meist einen fehlenden API_KEY oder einen Portkonflikt. Prüfe die Logs, ob der Port frei ist und den Pfad zum Erweiterungs-Repo, bevor du neu startest."]
    ],
    facts: [
      "Docker Compose ist der empfohlene Weg für einen reproduzierbaren Server; das Image liegt auf GHCR.",
      "Deployments auf Railway, Render, VPS und Docker sind im Repository dokumentiert.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR und RATE_MAX_TOKENS steuern das Serververhalten."
    ]
  },
  troubleshooting: {
    title: "Fehlerbehebung",
    body: "Problem mit einer Quelle oder der App? Arbeite die Checkliste durch, lies den genauen Fehler und führe eine Diagnose aus, bevor du Einstellungen änderst.",
    subsections: [
      ["Primärdiagnose", "Aktualisiere Erweiterungen und App, lade das fehlerhafte Element neu, teste ein anderes Element derselben Quelle, öffne die Seite im Browser, wechsle das Netzwerk, leere Cache und Cookies und starte die App neu. Hilft ein Schritt, ist die Ursache lokal."],
      ["Den Fehler lesen", "Watchtower zeigt den rohen Fehler, keine generische Meldung. Kopiere ihn: Operationsname und fehlerhafte URL zeigen den genauen Schritt. Die Erweiterungsdiagnose erfasst popular, latest, detail und media getrennt."],
      ["HTTP-Fehler", "403 Forbidden: Anti-Bot oder IP-Sperre. 404 Not Found: entfernte Inhalte oder tote Quelle. 429 Too Many Requests: temporäres Rate-Limit. 5xx: der Quellenserver ist down. 1006/1020: IP-Sperre oder Firewall-Regel."],
      ["Persönlich oder verbreitet", "Betrifft es nur dich, sind Cloudflare, IP-Sperre oder Rate-Limit wahrscheinlich; reduziere Downloads von dieser Quelle. Betrifft es alle, prüfe die Issue-Tracker von Erweiterung und App."],
      ["Installationsprobleme", "Eine Erweiterung, die nicht installiert, scheitert meist an der Schema-Validierung oder lädt eine beschädigte Datei. Lade sie neu und prüfe id und Version im Manifest."]
    ],
    facts: [
      "Aktualisiere zuerst die Erweiterungen: die meisten Brüche behebt ein Update.",
      "Der Diagnose-Screen trennt die Schritte popular, latest, detail und media.",
      "Kein ETA für Erweiterungsfixes; eine tote Quelle braucht manchmal Geduld."
    ]
  },
  cloudflare: {
    title: "Cloudflare & Anti-Bot",
    body: "Manche Quellen liegen hinter Cloudflare. Watchtower meldet einen Challenge nur bei echten Belegen und bietet eine Bypass-WebView, die die exakte fehlerhafte URL öffnet.",
    subsections: [
      ["Was als Challenge zählt", "Ein reines 403/503, ein Timeout oder das Wort challenge ist kein Cloudflare. Watchtower verlangt CDN-Marker, eine interaktive Challenge-Seite oder eine Blockseite, bevor die Anti-Bot-UI erscheint."],
      ["Challenge umgehen", "Die Bypass-WebView öffnet die exakte fehlerhafte URL, nie die Seitenwurzel. Löse das CAPTCHA einmal und versuche die Quelle erneut."],
      ["User-Agent ändern", "Der User-Agent beeinflusst die Bot-Erkennung. Ändere den Standard in den erweiterten Einstellungen, starte die App neu und versuche es erneut. Teste mehrere Browser und Systeme."],
      ["Cookies und Cache", "Cookies löschen setzt Login- oder Challenge-Zustand zurück. WebView-Daten löschen schafft eine reine Basis. Beides liegt in den erweiterten Einstellungen."],
      ["Wenn es weiter scheitert", "Die Quelle hat ihren Schutz vielleicht erhöht. Warte oder wechsle zu einer anderen Quelle für denselben Inhalt."]
    ],
    facts: [
      "Cloudflare wird nur bei echten Belegen in der Antwort gemeldet.",
      "Die Bypass-WebView öffnet die fehlerhafte URL, nicht die Seitenwurzel.",
      "Ein persönlicher Fehler ist meist ein Block oder Rate-Limit, kein Bug."
    ]
  },
  cli: {
    title: "Headless-CLI",
    body: "Der Linux-Build enthält dieselbe Erweiterungs-Runtime wie die Desktop-App und läuft ohne X11 oder Wayland, für CI, Server und SSH.",
    subsections: [
      ["Befehle", "doctor prüft native Engine und QuickJS. extensions list und test laden ein lokales Repo. source führt eine ExtensionService-Operation aus. plugins validate prüft den Plugin-Katalog."],
      ["Testmodi", "load prüft, dass eine Quelle lädt und Filter, Einstellungen und Header liefert. smoke ruft zusätzlich popular, latest, search, Vorschläge, Details und die Medienoperation auf. deep ergänzt Seite zwei und HTTP-Probes."],
      ["Filtern", "Filtere nach Sprache, NSFW/SFW, Engine, Tag, Query, IDs oder Typ. Ein Sprachverzeichnis wie src/watch/fr hat Vorrang vor einem veralteten lang-Feld im Index."],
      ["Exit-Codes und Fehler", "0 ist Erfolg, 1 ein fehlgeschlagener Health-, Test- oder Validierungscheck und 2 ungültige Nutzung oder ein unbehandelter Operationsfehler. Berichte und stdout maskieren Zugangsdaten und signierte URL-Parameter."],
      ["Bekannte Grenzen", "Befehle für library, history, progress, Download-Warteschlange und Tracker sind noch nicht verfügbar: der Headless-Einstieg öffnet die Isar/Hive-Stores nicht."]
    ],
    facts: [
      "doctor --json meldet, ob native Engine und QuickJS verfügbar sind.",
      "smoke führt popular, latest, search, Details und die Medienoperation aus.",
      "Die Ausgabe maskiert gängige Zugangsdaten und signierte URL-Parameter."
    ]
  }
};

export default de;
