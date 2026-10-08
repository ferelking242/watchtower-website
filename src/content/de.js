// German prose overlay. Code blocks and markers come from en.js.
const de = {
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
