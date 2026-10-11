// de prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const de = {
  "getting-started": {
    title: "Watchtower in zehn Minuten.",
    body: "Watchtower ist eine App für Anime, Serien, Manga, Romane und Musik. Es wird absichtlich leer ausgeliefert: Sie wählen die Quellen aus und alles, was Sie sehen oder lesen, bleibt auf Ihrem Gerät.",
    subsections: [
      ["Was Sie brauchen", "Ein Telefon oder Tablet mit Android 8.0 oder neuer für die vollständige App. Stattdessen kann jeder Linux-, macOS- oder Windows-Computer die Headless-Befehlszeile ohne grafische Sitzung ausführen. Eines ist nicht optional: eine Quell-Repository-URL, denn Watchtower enthält keinen eigenen Inhalt."],
      ["Fügen Sie Ihre erste Quelle hinzu", "Öffnen Sie „Mehr“, dann „Erweiterungen“ und dann „Repositorys“. Fügen Sie eine Repository-URL ein, die auf index.min.json endet, und bestätigen Sie. Die Erweiterungsliste wird ausgefüllt, sobald der Index geladen wird."],
      ["Installieren Sie Erweiterungen", "Jede Erweiterung lehrt Watchtower eine Website. Tippen Sie neben den gewünschten Quellen auf „Installieren“, erlauben Sie die Installation aus unbekannten Quellen, wenn Android Sie dazu auffordert, und die Quellen werden in „Durchsuchen“ angezeigt."],
      ["Bauen Sie Ihre Bibliothek auf", "Öffnen Sie eine Quelle, suchen Sie eine Serie und tippen Sie auf Zur Bibliothek hinzufügen. Von da an verfolgt Watchtower Ihren Fortschritt, sucht nach neuen Kapiteln und speichert den Eintrag an einem Ort."],
      ["Wählen Sie Ihre Medientypen aus", "Watchtower befasst sich nebeneinander mit Manga, Anime, Romanen und Musik. Jeder Typ wird in einem eigenen Reader oder Player geöffnet, der automatisch aus den Deklarationen der Erweiterung ausgewählt wird."],
      ["Häufige Überraschungen beim ersten Lauf", "Ein leerer Durchsuchen-Bildschirm bedeutet, dass noch keine Erweiterung installiert ist und es sich nicht um eine defekte App handelt. Ein Repository, das nicht geladen werden kann, ist normalerweise eine veraltete URL oder ein Captive-Netzwerkportal."],
      ["Wenn der erste Bildschirm leer aussieht", "Eine leere Suchliste bedeutet, dass noch keine Erweiterung installiert ist und es sich nicht um eine defekte App handelt. Wenn ein Repository nicht geladen werden kann, überprüfen Sie, ob seine Adresse auf index.min.json endet, und versuchen Sie es dann erneut in einem anderen Netzwerk, bevor Sie davon ausgehen, dass es nicht mehr verfügbar ist."],
    ],
    facts: [
      "Watchtower wird ohne Inhalt geliefert. Die Auswahl der Quellen liegt bei Ihnen.",
      "Erweiterungen sind gewöhnliches JavaScript, das in einer Sandbox ausgeführt wird.",
      "Ihre Bibliothek befindet sich auf Ihrem Gerät, nicht auf einem Watchtower-Server.",
      "Android 8.0+ ist die Basis für die mobile App.",
      "Eine leere Suchliste bedeutet, dass keine Erweiterung installiert ist und kein Fehler vorliegt.",
    ]
  },
  installation: {
    title: "Installieren Sie den Build, der zu Ihrem Gerät passt.",
    body: "Es gibt drei Möglichkeiten, Watchtower auszuführen: die Android-App, ein Desktop-Build oder eine Linux-Befehlszeile für Server. Sie teilen sich eine Engine, sodass eine Quelle, die in einer funktioniert, in allen funktioniert.",
    subsections: [
      ["Android", "Das Hauptziel und der einzige Build, der alle Funktionen zuerst erhält. Laden Sie die Release-APK oder eine Vorschau-APK herunter, wenn Sie kommende Arbeiten testen möchten. Aktivieren Sie die Installation aus unbekannten Quellen, wenn Android Sie dazu auffordert, da Watchtower nicht über einen Store vertrieben wird."],
      ["Desktop", "Für die Betrachtung auf einem größeren Bildschirm gibt es Windows-, Linux- und macOS-Builds. Erstellen Sie sie mit Flutter aus dem Quellcode, da Release-Artefakte zuerst für Android und die Linux-CLI veröffentlicht werden."],
      ["Linux-Befehlszeile", "Eine einzelne Binärdatei ohne Fenster. Es führt die gleiche Erweiterungs-Engine aus und kann daher auf einem Server oder über SSH abrufen, suchen und herunterladen. Das Installationsskript kopiert es und seine Laufzeitdateien in ein von Ihnen gewähltes Präfix."],
      ["Stabil oder Vorschau", "Vorschau-Builds verfolgen den neuesten Code und brechen häufiger ab. Behalten Sie die automatische Sicherung bei, wenn Sie eine solche ausführen, und gehen Sie davon aus, dass Sie den Release-Build neu installieren, wenn etwas schief geht."],
      ["Bauen aus der Quelle", "Sie benötigen Flutter 3.38 oder neuer, Dart 3.10 oder neuer und eine Rust-Toolchain. Go 1.21 oder neuer wird nur benötigt, wenn Sie den Torrent-Server selbst neu erstellen möchten."],
      ["Halten Sie es auf dem neuesten Stand", "Watchtower informiert Sie, wenn eine neue Version vorhanden ist, und Sie installieren sie auf die gleiche Weise wie beim ersten Mal. Ihre Bibliothek und Einstellungen bleiben unberührt."],
      ["Wenn die Installation fehlschlägt", "Die häufigsten Meldungen des Installationsprogramms werden jeweils auf der Fehlerseite erläutert. Eine nicht übereinstimmende Signatur bedeutet, dass bereits eine anders signierte Kopie installiert ist und zuerst entfernt werden muss, ein beschädigter Download erneut abgerufen werden muss und eine nicht übereinstimmende Prozessorarchitektur bedeutet, dass der falsche Build heruntergeladen wurde."],
    ],
    facts: [
      "Android ist die einzige Plattform mit veröffentlichten Release-Builds.",
      "Die Headless-Binärdatei wurde für Linux x86_64 erstellt.",
      "Zum Erstellen aus dem Quellcode ist Rust erforderlich. Go ist optional.",
      "Vorschau- und stabile Installationen nutzen dieselben Daten, sodass beim Wechsel Ihre Bibliothek erhalten bleibt.",
      "Entfernen Sie eine widersprüchliche Installation, bevor Sie sie durch einen anders signierten Build ersetzen.",
    ]
  },
  "adding-sources": {
    title: "Woher Ihr Inhalt kommt.",
    body: "Watchtower hat zwei Arten von Quellen. Online-Quellen kommen als Erweiterungen aus einem von Ihnen hinzugefügten Repository an. Offline-Quellen sind Ordner auf Ihrem eigenen Gerät. Die meisten Leute benutzen beides.",
    subsections: [
      ["Fügen Sie ein Repository hinzu", "Gehen Sie zu Mehr, dann zu Erweiterungen, dann zu Repositorys und fügen Sie die Repository-URL ein. Die App ruft den Index ab und listet alle darin enthaltenen Erweiterungen auf. Sie können mehrere Repositorys gleichzeitig hinzufügen."],
      ["Installieren Sie, was Sie brauchen", "Aktualisieren Sie die Liste und tippen Sie dann neben einer Erweiterung auf „Installieren“. Android bittet möglicherweise beim ersten Mal um Erlaubnis, unbekannte Apps zu installieren. Installierte Erweiterungen werden sofort in „Durchsuchen“ angezeigt."],
      ["Halten Sie die Quellen aktuell", "Aktualisieren Sie ein Repository, wann immer Sie neuere Erweiterungsversionen benötigen. Ein Update ersetzt die vorhandene Erweiterung und behält ihre Einstellungen bei, sodass nichts neu konfiguriert werden muss."],
      ["Verwenden Sie Ihre eigenen Dateien", "Zeigen Sie Watchtower auf einen Manga- oder Anime-Ordner, den Sie bereits besitzen, und er wird zu einer normalen Quelle. Kein Repository, kein Netzwerk, kein Konto."],
      ["Vertraue nur dem, was du weißt", "Ein Repository kann alles bereitstellen und eine Erweiterung wird mit demselben Zugriff wie die App ausgeführt. Behandeln Sie ein unbekanntes Repository so, wie Sie ein unbekanntes Installationsprogramm behandeln würden."],
      ["Wenn ein Repository ausfällt", "Eine URL, die nicht geladen werden kann, ist normalerweise abgelaufen, blockiert oder wird ohne Indexpfad kopiert. Überprüfen Sie, ob die Adresse auf index.min.json endet, bevor Sie davon ausgehen, dass das Repository nicht mehr vorhanden ist."],
      ["Wenn ein Repository das Laden verweigert", "Ein Repository, das nicht geladen werden kann, ist normalerweise eine abgelaufene Adresse, ein Pfad, der nicht mit index.min.json endet, oder ein Netzwerk, das ihn blockiert. Bestätigen Sie die Adresse und versuchen Sie es dann mit einem anderen Netzwerk, bevor Sie sie entfernen."],
    ],
    facts: [
      "Ein Repository ist lediglich eine JSON-Datei, die auf einem Webserver gehostet wird.",
      "Bei Updates bleiben Ihre Quelleinstellungen erhalten.",
      "Lokale Ordner funktionieren auch ohne Netzwerk.",
      "Watchtower prüft oder genehmigt keine Repositorys von Drittanbietern.",
      "Ein Repository, das nicht geladen werden kann, ist normalerweise eine falsche oder abgelaufene Adresse.",
    ]
  },
  library: {
    title: "Alles, was Sie verfolgen, an einem Ort.",
    body: "In der Bibliothek befindet sich alles, was Sie aufbewahren. Es merkt sich, wo Sie aufgehört haben, gruppiert Serien in Regalen und ist der Ausgangspunkt für Updates und Downloads.",
    subsections: [
      ["Hinzufügen und Entfernen", "Öffnen Sie eine beliebige Serie und tippen Sie auf Zur Bibliothek hinzufügen. Entfernen Sie es von derselben Stelle und die Serie wird nicht mehr aktualisiert, ohne dass Ihr Leseverlauf verloren geht."],
      ["Kategorien", "Kategorien sind die Regale Ihrer Bibliothek. Eine Serie kann mehrere gleichzeitig umfassen. Auf diese Weise trennen Sie das, was Sie wöchentlich verfolgen, von dem, was Sie eines Tages möglicherweise sehen."],
      ["Fortschritt", "Watchtower merkt sich pro Eintrag genau die Episode oder das Kapitel, die Sie erreicht haben, und lädt den Fortschritt auf einen Tracker hoch, wenn Sie einen angeschlossen haben."],
      ["Filter und Sortierung", "Verstecken Sie, was Sie fertiggestellt haben, zeigen Sie nur, was heruntergeladen wurde, oder sortieren Sie nach dem letzten Erscheinungsdatum einer Serie. Filter dienen nur der Anzeige und löschen niemals etwas."],
      ["Mehrere Geräte", "Es gibt keine integrierte Synchronisierung zwischen Geräten. Verschieben Sie Ihre Bibliothek mit einer Sicherungsdatei und halten Sie die Downloads getrennt, da sie nicht Teil einer Sicherung sind."],
      ["Wenn ein Eintrag kaputt geht", "Wenn eine Serie leer beginnt oder ihr Cover verliert, hat sich die darunter liegende Quelle geändert. Aktualisieren Sie den Eintrag und migrieren Sie ihn auf eine andere Quelle, wenn das Problem weiterhin besteht."],
      ["Wenn ein Eintrag nicht aktualisiert oder geöffnet wird", "Wenn eine Serie nicht geöffnet werden kann, hat sich die darunter liegende Quelle geändert. Aktualisieren Sie zunächst den Eintrag und migrieren Sie ihn auf eine andere Quelle, wenn das Problem weiterhin besteht. Eine Aktualisierung, die nichts zurückgibt, bedeutet, dass die Erweiterung veraltet ist und nicht die App."],
    ],
    facts: [
      "Abgeschlossene Serien werden durch Hintergrundaktualisierungen in Ruhe gelassen.",
      "Eine Serie kann zu mehr als einer Kategorie gehören.",
      "Der Fortschritt wird pro Kapitel oder Episode verfolgt, nicht pro Serie.",
      "Durch das Entfernen einer Serie aus der Bibliothek wird Ihr Verlauf nicht gelöscht.",
      "Durch die Aktualisierung werden die meisten fehlerhaften Einträge behoben. Die Migration behebt den Rest.",
    ]
  },
  browse: {
    title: "Etwas zum Ansehen oder Lesen finden.",
    body: "Beim Durchsuchen erkunden Sie, was eine Quelle bietet, und durchsuchen alle Quellen gleichzeitig. Es ist der schnellste Weg, die Frage zu beantworten, wer diesen Titel trägt.",
    subsections: [
      ["Durchsuchen einer Quelle", "Öffnen Sie eine Quelle, um deren beliebte und neueste Einträge anzuzeigen. Die meisten Quellen stellen auch Filter für Genre, Jahr oder Status bereit, die oben in der Liste angezeigt werden."],
      ["Überall suchen", "Die Suchaktion fragt alle aktivierten Quellen parallel ab und gruppiert die Ergebnisse nach Quellen, sodass Sie auf einen Blick sehen können, wer den Titel hat und wer nicht."],
      ["Wenn ein Titel nicht angezeigt wird", "In Quellen wird häufig der Titel in der Originalsprache und nicht der englische Titel angegeben. Versuchen Sie es mit dem einheimischen Namen, einer romanisierten Schreibweise oder einem kürzeren Fragment davon."],
      ["Zwischen Quellen wechseln", "Wenn eine Quelle langsamer wird oder nicht mehr funktioniert, migrieren Sie den Eintrag, anstatt ihn erneut hinzuzufügen. Watchtower ordnet die Serie der neuen Quelle zu und überträgt Ihren Fortschritt und Ihre Kategorien."],
      ["Nach Sprache filtern", "Erweiterungen sind mit der Sprache gekennzeichnet, die sie bedienen. Blenden Sie diejenigen aus, die Sie nicht lesen können, damit Suchergebnisse und Einträge relevant bleiben."],
      ["Warum die Ergebnisse unterschiedlich sind", "Jede Quelle indiziert ihren eigenen Katalog, sodass ein Titel in einer Quelle vollständig und in einer anderen unvollständig sein kann. Der Vergleich zweier Quellen vor dem Festschreiben ist normal."],
      ["Wenn die Suche nichts zurückgibt", "Bei einer leeren Suche handelt es sich in der Regel eher um eine Nichtübereinstimmung des Titels als um eine fehlerhafte Quelle. Versuchen Sie es mit dem Namen in der Originalsprache, einer romanisierten Schreibweise oder einem kürzeren Fragment und denken Sie daran, dass die fehlende Antwort einer Quelle die anderen nicht aufhält."],
    ],
    facts: [
      "Durchsuchen Sie alle aktivierten Quellen gleichzeitig nach Fans.",
      "Quellen ohne beliebte Liste funktionieren weiterhin über die Suche.",
      "Durch die Migration wird Ihr Fortschritt verschoben, nicht Ihre heruntergeladenen Dateien.",
      "Erweiterungssprachtags steuern den Sprachfilter.",
      "Bei einer leeren Suche handelt es sich in der Regel um eine Nichtübereinstimmung des Titels und nicht um eine tote Quelle.",
    ]
  },
  extensions: {
    title: "Durch Erweiterungen erreicht Watchtower das Web.",
    body: "Eine Erweiterung ist ein kleines Programm, das einer Website beibringt: wie man sie auflistet, durchsucht, liest und abspielt. Alles, was Sie durchsuchen, erfolgt über eine Erweiterung.",
    subsections: [
      ["Was für eine Erweiterung ist", "Es ist JavaScript, kein Plugin, das Sie kompilieren. Es weiß, wie man eine Website nach ihren Einträgen, ihren Suchergebnissen, ihren Kapiteln und ihren Videostreams fragt, und sie antwortet in der Form, die Watchtower versteht."],
      ["Wie sie Sie erreichen", "Erweiterungen werden in Repositorys gruppiert. Sie fügen ein Repository einmal hinzu und jede darin enthaltene Erweiterung kann über den Erweiterungsbildschirm installiert werden."],
      ["Arten von Inhalten", "Eine Erweiterung gibt an, wozu sie dient: Manga, Anime, Roman, Musik oder Spiel. Diese Deklaration entscheidet darüber, welcher Reader oder Player geöffnet wird, wenn Sie auf ein Ergebnis tippen."],
      ["Updates und Entfernung", "Erweiterungen werden aktualisiert und behalten ihre Einstellungen bei. Durch die Deinstallation wird nur die Erweiterung entfernt. Ihre Bibliothekseinträge bleiben bestehen und warten einfach darauf, dass eine Quelle sie erneut bereitstellt."],
      ["Warum es dich interessieren sollte, wer es gemacht hat", "Eine Erweiterung läuft in Watchtower, kann aber das Netzwerk erreichen und lesen, was Sie ihr geben. Installieren Sie aus vertrauenswürdigen Repositories und seien Sie bei unbekannten Dingen vorsichtig."],
      ["Wenn eine Erweiterung nicht mehr funktioniert", "Websites ändern sich und eine Quelle bricht mit ihnen. Dabei handelt es sich in der Regel um eine defekte Erweiterung, nicht um eine defekte App, und der Fix kommt als Update."],
      ["Wenn eine Installation oder Aktualisierung fehlschlägt", "Eine fehlgeschlagene Installation liegt fast immer daran, dass Android unbekannte Apps blockiert, und ein fehlgeschlagenes Update ist ein Download, der teilweise abgebrochen wurde. Lassen Sie Installationen über Ihren Dateimanager oder Browser zu, versuchen Sie es dann erneut und installieren Sie es von Grund auf neu, wenn die Datei abgeschnitten wurde."],
    ],
    facts: [
      "Erweiterungen sind JavaScript und werden in einer Sandbox innerhalb der App ausgeführt.",
      "Eine Erweiterung deckt eine Website ab.",
      "Durch die Installation und Aktualisierung wird Ihre Bibliothek niemals berührt.",
      "Eine Quelle, die plötzlich ausfällt, ist normalerweise eine Website-Änderung.",
      "Eine fehlgeschlagene Installation ist normalerweise Android, nicht die Erweiterung.",
    ]
  },
  "extensions-catalogue": {
    title: "Auswahl und Pflege Ihrer Quellen.",
    body: "Der Erweiterungsbildschirm ist Ihr Katalog: Was ist installiert, was ist verfügbar und was ist veraltet. Hier sorgen Sie dafür, dass Ihre Quellenliste gesund bleibt.",
    subsections: [
      ["Installiert und verfügbar", "Installierte Erweiterungen funktionieren sofort. Die verfügbaren stammen aus einem Repository, das Sie hinzugefügt haben: Aktualisieren Sie die Liste und installieren Sie dann die gewünschten mit einem einzigen Tastendruck."],
      ["Aktualisieren einer Erweiterung", "Wenn eine neuere Version vorhanden ist, wird sie unter „Updates“ angezeigt. Durch die Installation wird die alte Kopie ersetzt und ihre Einstellungen bleiben erhalten, sodass eine Reparatur für Sie nichts kostet."],
      ["Entfernen einer Erweiterung", "Deinstallieren Sie es auf demselben Bildschirm. Ihre Bibliothekseinträge bleiben erhalten und werden einfach als nicht verfügbar angezeigt, bis eine andere Quelle oder eine Neuinstallation sie bereitstellen kann."],
      ["Halten Sie die Liste lesbar", "Erweiterungen sind nach Sprache gruppiert. Filtern Sie die Sprachen heraus, die Sie nicht lesen, sodass in der Liste nur Quellen angezeigt werden, die für Sie tatsächlich nützlich sind."],
      ["Wenn nichts installiert wird", "Eine fehlgeschlagene Installation liegt fast immer daran, dass Android unbekannte Apps blockiert, nicht an der Erweiterung. Erlauben Sie Installationen über Ihren Dateimanager oder Browser und versuchen Sie es dann erneut."],
      ["Halten Sie den Katalog aktuell", "Aktualisieren Sie Ihre Repositorys von Zeit zu Zeit. Neue Erweiterungen erscheinen und defekte Erweiterungen werden repariert, aber es kommt nichts an, bis Sie danach fragen."],
      ["Wenn eine Erweiterung verschwindet", "Eine installierte Erweiterung kann verschwinden, wenn Android sie entfernt hat oder wenn sie durch den Sprachfilter oder den Schalter für Inhalte für Erwachsene ausgeblendet wird. Überprüfen Sie zuerst die Filter und installieren Sie sie dann erneut aus dem Repository, wenn sie wirklich verschwunden sind."],
    ],
    facts: [
      "Bei Updates bleiben die Einstellungen erhalten, die Sie für eine Quelle festgelegt haben.",
      "Durch die Deinstallation einer Erweiterung bleiben Ihre Bibliothekseinträge erhalten.",
      "Erweiterungen werden nach Sprache und nicht nach Repository gruppiert.",
      "Durch das Aktualisieren eines Repositorys werden Ihnen neue und aktualisierte Erweiterungen angezeigt.",
      "Eine fehlende Erweiterung wird normalerweise durch einen Filter ausgeblendet und nicht deinstalliert.",
    ]
  },
  "extensions-devkit": {
    title: "Erstellen Sie Ihre eigene Quelle.",
    body: "Wenn Sie eine Website hinzufügen möchten, die noch niemand abgedeckt hat, können Sie selbst eine Erweiterung schreiben. Es benötigt eine Datei, die die Site beschreibt, und eine Datei, die die Aufrufe implementiert.",
    subsections: [
      ["Was Sie schreiben müssen", "Zwei Dateien: ein Manifest, das die Erweiterung benennt und deren Sprache und Inhaltstyp angibt, und eine Eintragsdatei mit den Aufrufen zum Abrufen von Auflistungen, Suchen, Details, Kapiteln und Seiten."],
      ["Beginnen Sie mit einer vorhandenen Quelle", "Der schnellste Weg besteht darin, eine funktionierende Erweiterung für eine ähnliche Site zu kopieren und die URLs und die Analyse zu ändern. Die Form der Rufe bleibt gleich."],
      ["Testen ohne App", "Die Befehlszeile kann einen einzelnen Aufruf ausführen und genau das ausgeben, was zurückgegeben wurde. Das ist viel schneller, als die Erweiterung bei jedem Zeilenwechsel auf einem Gerät zu installieren."],
      ["Was Ihr Code verwenden kann", "Anfragen, ein HTML-Parser und ein JSON-Parser. Es gibt keinen Dateizugriff, keine Datenbank und keine Möglichkeit, auf die eigenen Bildschirme der App zuzugreifen."],
      ["Wenn die Ausgabe falsch aussieht", "Wenn ein Feld leer ist, ist fast immer der Parser und nicht die Laufzeit die Ursache. Vergleichen Sie Ihre Rückgabe mit den Erwartungen des Quellvertrags."],
      ["Bevor Sie veröffentlichen", "Führen Sie die Erweiterung auf der Live-Site aus, überprüfen Sie die Suche, Auflistung und Seitenaufrufe und stellen Sie sicher, dass der Inhaltstyp korrekt ist, damit er im richtigen Reader oder Player geöffnet wird."],
      ["Wenn ein Anruf nichts zurückgibt", "Ein leeres Ergebnis ist fast immer ein Selektor, der nicht mehr mit der Site übereinstimmt, und kein Laufzeitfehler. Rufen Sie die Seite ab, vergleichen Sie Ihre Selektoren mit dem aktuellen Markup und testen Sie den einzelnen Aufruf über die Befehlszeile, bevor Sie die App neu erstellen."],
    ],
    facts: [
      "Eine funktionierende Quelle benötigt lediglich ein Manifest und eine Eintragsdatei.",
      "Die Befehlszeile kann einen Aufruf isoliert testen.",
      "Erweiterungen können das Netzwerk erreichen und Seiten analysieren, mehr nicht.",
      "Der von Ihnen deklarierte Inhaltstyp entscheidet darüber, welcher Reader oder Player geöffnet wird.",
      "Ein leeres Ergebnis ist normalerweise ein Selektor, der nicht mehr übereinstimmt.",
    ]
  },
  "extensions-publishing": {
    title: "Eine Quelle mit anderen Personen teilen.",
    body: "Sobald Ihre Erweiterung funktioniert, müssen Sie sie veröffentlichen, indem Sie sie in einem Repository ablegen, das andere hinzufügen können. Ein Repository ist eine kleine JSON-Datei und die darin aufgeführten Erweiterungspakete.",
    subsections: [
      ["Was für ein Repository ist", "Ein Ordner mit Erweiterungspaketen und ein JSON-Index, der sie auflistet. Hosten Sie den Ordner an einem beliebigen Ort, an dem HTTPS bereitgestellt wird, und geben Sie den Benutzern die Adresse der Indexdatei."],
      ["Veröffentlichung eines Updates", "Erhöhen Sie die Versionsnummer, erstellen Sie das Paket neu und aktualisieren Sie die Version im Index. Watchtower vergleicht diese Zahl, sodass eine unveränderte Version ein Update ist, das niemand erhält."],
      ["Den Namen stabil halten", "Der Paketname ist die Identität der Erweiterung. Wenn Sie es ändern, erhalten Benutzer eine zweite, separate Erweiterung anstelle eines Updates der ersten."],
      ["Seien Sie sich über Vertrauen im Klaren", "Personen, die aus Ihrem Repository installieren, führen Ihren Code mit dem Zugriff der App aus. Sagen Sie, wer Sie sind, und bewahren Sie das Repository an einem Ort auf, den Sie kontrollieren."],
      ["Eine Quelle pflegen", "Websites ändern sich ohne Vorwarnung, Sie müssen also mit einer Neuveröffentlichung rechnen. Achten Sie auf Berichte, dass eine Quelle nicht mehr funktioniert, und beheben Sie das Problem, bevor Benutzer abwandern."],
      ["Die Indexadresse ist wichtig", "Die von Ihnen angegebene Adresse muss auf index.min.json verweisen. Jeder andere Weg führt dazu, dass die Leute auf ein Repository starren, das nicht geladen werden kann."],
      ["Wenn Benutzer Ihr Update nicht erhalten", "Die übliche Ursache ist eine Versionsnummer im Index, die sich nicht geändert hat, oder eine Repository-Adresse, die auf eine andere Stelle als die Indexdatei verweist. Erhöhen Sie die Version, bestätigen Sie die Adresse und prüfen Sie, ob die Datei über HTTPS erreichbar ist."],
    ],
    facts: [
      "Ein Repository ist ein HTTPS-Ordner plus ein JSON-Index.",
      "Anhand der Version im Index erfahren Benutzer, dass ein Update vorhanden ist.",
      "Ein stabiler Paketname macht ein Update zu einem Update.",
      "Erwarten Sie eine erneute Veröffentlichung, wenn sich die Zielwebsite ändert.",
      "Ein Update, das niemand erhält, ist normalerweise eine unveränderte Versionsnummer.",
    ]
  },
  "local-source": {
    title: "Eigene Dateien lesen und abspielen.",
    body: "Watchtower kann einen Ordner auf Ihrem Gerät als normale Quelle behandeln. Ihre eigene Sammlung verhält sich dann genauso wie eine Online-Sammlung, einschließlich Fortschrittsverfolgung.",
    subsections: [
      ["Manga und Romane", "Legen Sie einen Ordner pro Serie im lokalen Ordner und eine Datei pro Kapitel darin ab. Kapitel können CBZ-Archive oder einfache Bildordner sein, und der Ordnername wird zum Serientitel."],
      ["Anime", "Legen Sie einen Ordner pro Serie im lokalen Anime-Ordner und eine Videodatei pro Episode darin ab. Episoden werden nach Dateinamen sortiert, also nummerieren Sie sie."],
      ["Cover und Details", "Ein Titelbild im Serienordner wird zum Miniaturbild. In einer Detaildatei daneben können Autor, Interpret, Beschreibung und Genres hinzugefügt werden, wenn der Ordnername nicht ausreicht."],
      ["Neue Dateien hinzufügen", "Verschieben Sie Dateien von außerhalb der App und aktualisieren Sie dann die lokale Quelle, damit Watchtower den Ordner erneut scannt. Dateien, die hinzugefügt werden, während die App geschlossen ist, werden erst bemerkt, wenn Sie dies tun."],
      ["Offline lesen", "Lokale Quellen berühren nie das Netzwerk, arbeiten also im Flugmodus und können nicht blockiert oder ratenbegrenzt werden. Downloads und lokale Dateien verhalten sich auf der Festplatte gleich."],
      ["Dateien aus der Galerie ausblenden", "Legen Sie eine .nomedia-Datei im Ordner ab, damit Cover und Episoden nicht in der Foto-App Ihres Telefons angezeigt werden."],
      ["Wenn die Umschläge leer sind oder Dateien fehlen", "Ein leeres Cover oder eine Serie, die sich nicht öffnen lässt, bedeutet fast immer, dass die Ordnerstruktur falsch ist. Überprüfen Sie, ob es einen Ordner pro Serie und eine Datei pro Kapitel oder Episode gibt, entfernen Sie dann den Eintrag, löschen Sie die Datenbank auf Elemente außerhalb der Bibliothek und lassen Sie den Ordner von der lokalen Quelle erneut scannen."],
    ],
    facts: [
      "Sowohl CBZ-Archive als auch einfache Bildordner werden als Kapitel gelesen.",
      "Die Reihenfolge der Episoden richtet sich nach dem Dateinamen. Nummerieren Sie Ihre Dateien daher.",
      "Eine .nomedia-Datei hält lokale Medien von der Systemgalerie fern.",
      "Lokale Quellen funktionieren auch ohne Netzwerkverbindung.",
      "Eine falsche Ordnerstruktur ist die häufigste Ursache für ein leeres Cover.",
    ]
  },
  "video-player": {
    title: "Eine Folge ansehen.",
    body: "Der Player verdeckt das Video mit Gesten und Blättern, sodass nichts den Bildschirm verlässt, während Sie es ansehen. Qualität, Audio, Untertitel und Geschwindigkeit sind alle nur einen Fingertipp entfernt.",
    subsections: [
      ["Grundlegende Steuerelemente", "Tippen Sie einmal, um die Steuerelemente aufzurufen, tippen Sie zweimal auf eine Seite, um vorwärts oder rückwärts zu springen, und drücken Sie lange, um schneller zu werden. Drücken Sie zum Zoomen, wenn das Video noch Platz hat."],
      ["Qualität und Audio", "Quellen, die mehrere Auflösungen oder Audiospuren bieten, stellen diese in Blättern dar, die nach oben geschoben werden können, ohne die Wiedergabe zu unterbrechen. Ihre Wahl wird für die Serie gespeichert."],
      ["Untertitel", "Untertitelspuren stammen von der Quelle oder einer von Ihnen bereitgestellten Datei. Sie werden auf dem Untertitelblatt ausgewählt und angepasst und ihr Erscheinungsbild wird einmalig in den Einstellungen festgelegt."],
      ["Episoden und Statistiken", "Ein Seitenbereich listet jede Episode auf, sodass Sie herumspringen können, und ein anderer zeigt, was der Player tatsächlich mit dem Stream macht, wenn etwas nicht stimmt."],
      ["Wenn der innere Spieler Probleme hat", "Ein seltener Codec oder ein defekter Stream kann an einen externen Player wie MPV oder VLC weitergegeben werden. Das ist der verlässliche Fallback und kein Zeichen dafür, dass die Episode unbrauchbar ist."],
      ["Sichern Sie sich Ihren Platz", "Der Fortschritt wird kontinuierlich aufgezeichnet, während Sie zuschauen, sodass Sie Ihre Position nicht verlieren, wenn Sie die App schließen oder die Stromversorgung verlieren."],
      ["Wenn ein Video nicht abgespielt werden kann", "Ein Stream, der sich weigert, zu starten, ist oft ein Codec, mit dem der interne Player nicht umgehen kann, oder ein Link, der abgelaufen ist. Wechseln Sie zuerst zu einem externen Player wie MPV oder VLC und aktualisieren Sie dann die Erweiterung, wenn jede Episode von dieser Quelle fehlschlägt."],
    ],
    facts: [
      "Die Wiedergabe verwendet standardmäßig einen hardwarebeschleunigten Decoder.",
      "Gesten steuern Helligkeit, Lautstärke und Suche.",
      "Der Fortschritt wird kontinuierlich gespeichert, nicht nur beim Beenden.",
      "Ein externer Player ist die Ausweichlösung für nicht unterstützte Codecs.",
      "Die Übergabe eines hartnäckigen Streams an einen externen Player ist der zuverlässige Ausweg.",
    ]
  },
  "player-settings": {
    title: "Passen Sie den Player an Ihre Gewohnheiten an.",
    body: "Die Player-Einstellungen legen fest, wie Videos dekodiert werden, was die Gesten bewirken und welche Tasten sich auf dem Player befinden. Ändern Sie sie einmal und jede Episode folgt.",
    subsections: [
      ["Dekodierung", "Die Hardware-Dekodierung ist schneller, schont den Akku und eignet sich für fast alles. Wechseln Sie zu Software, wenn eine bestimmte Datei schlecht abgespielt wird, da die Software-Dekodierung ungewöhnliche Codecs besser verzeiht."],
      ["Gesten", "Entscheiden Sie, welches Wischen was bewirkt: vertikal für Helligkeit und Lautstärke, horizontal für die Suche. Jede Richtung kann umgekehrt werden, wenn sie sich für Sie rückwärts anfühlt."],
      ["Benutzerdefinierte Schaltflächen", "Fügen Sie die Aktionen, die Sie am häufigsten ausführen, z. B. das Überspringen einer Einleitung oder das Erstellen eines Screenshots, direkt auf der Player-Oberfläche hinzu, damit sie nicht in Menüs vergraben werden."],
      ["Erweiterte Wiedergabe", "Puffergröße, ein erzwungenes Seitenverhältnis und Bild-in-Bild sind für den seltenen Fall gedacht, dass automatisches Verhalten nicht Ihren Wünschen entspricht. Die meisten Menschen müssen sie nie berühren."],
      ["Ausnahmen pro Serie", "Nahezu jede Spielereinstellung kann für eine einzelne Serie überschrieben werden, ohne die Standardeinstellungen für alles andere zu ändern. Nützlich für eine Show mit seltsamem Ton."],
      ["Nach einer Sicherung der Einstellungen", "Benutzerdefinierte Schaltflächen und Player-Einstellungen verbleiben in Ihrer Sicherungsdatei, sodass bei der Wiederherstellung auf einem neuen Gerät Ihr Player-Layout mit übernommen wird."],
    ],
    facts: [
      "Die Hardware-Dekodierung ist die Standardeinstellung und für die meisten Dateien geeignet.",
      "Jede Gestenrichtung kann umgekehrt oder ausgeschaltet werden.",
      "Einstellungen können für eine einzelne Serie überschrieben werden.",
      "Spielereinstellungen sind in einem Backup enthalten.",
    ]
  },
  subtitles: {
    title: "Untertitel lesbar machen.",
    body: "Untertitel kommen von drei Orten: dem Stream, einer Datei auf Ihrem Gerät oder einer Quelle, die sie abruft. Auf dieser Seite geht es darum, einen Titel auszuwählen, sein Timing festzulegen und die Titel zu gestalten, die Watchtower selbst zeichnet.",
    subsections: [
      ["Einen Titel auswählen", "Wenn eine Episode mehrere Untertitelspuren enthält, werden diese im Untertitelblatt aufgeführt. Ihre Auswahl wird für diese Serie gespeichert, sodass Sie sie nur einmal auswählen können."],
      ["Das Timing korrigieren", "Eine Spur, die vor oder hinter dem Audio läuft, kann in kleinen Schritten verschoben werden, bis sie ausgerichtet ist. Der Offset wird gespeichert, sodass der Fix den Neustart der App überlebt."],
      ["Styling", "Für Textuntertitel gelten Schriftart, Größe, Farbe, Umriss und Hintergrund. Diese Einstellungen wirken sich nicht auf das Video aus und Sie können problemlos mitten in der Episode experimentieren."],
      ["Ihre eigenen Dateien", "Platzieren Sie eine Untertiteldatei neben einer lokalen Episode mit passendem Namen und der Player lädt sie automatisch, ohne dass eine Einstellung geändert werden muss."],
      ["In das Bild eingebrannte Untertitel", "Einige Untertitel bestehen eher aus Bildern als aus Text. Sie können nicht neu gestaltet, sondern nur neu positioniert oder in der Größe geändert werden, da der Stil Teil des Bildes selbst ist."],
      ["Wenn Untertitel nicht angezeigt werden", "Überprüfen Sie zuerst das Untertitelblatt: Die Quelle bietet möglicherweise keine an, oder der Dateiname stimmt möglicherweise nicht genau genug mit der Episode überein, um gepaart zu werden."],
    ],
    facts: [
      "Textuntertitel können neu gestaltet werden; Bilduntertitel können nicht.",
      "Timing-Offsets werden gespeichert und überstehen einen Neustart.",
      "Eine passende Datei neben einer lokalen Episode wird von selbst geladen.",
      "Die Auswahl der Untertitel wird pro Serie gespeichert.",
    ]
  },
  reader: {
    title: "Lesen von Mangas, Webtoons und Romanen.",
    body: "Der Leser beherrscht Seitenmangas, vertikale Webtoons und Textromane. Sie legen einmal einen Standardwert fest und überschreiben ihn für die Serien, die etwas anderes benötigen.",
    subsections: [
      ["Auswahl eines Lesemodus", "Der Seitenmodus eignet sich für gedruckte Mangas und lange Streifen eignen sich für Webtoons, die als ein großes Bild gezeichnet wurden. Legen Sie einen Standard fest und ändern Sie ihn pro Serie, wenn sich ein Titel andersherum besser liest."],
      ["Seiten umblättern", "Tippen Sie auf die Kanten, um sich vorwärts oder rückwärts zu bewegen, wischen Sie, um in einem langen Streifen zu scrollen, und ziehen Sie die Finger zusammen, um zu zoomen. Durch Tippen auf die Mitte wird das Menü geöffnet, ohne die Seite zu verlassen."],
      ["Machen Sie dort weiter, wo Sie aufgehört haben", "Watchtower merkt sich die Seite, die Sie in jedem Kapitel erreicht haben, sodass Sie beim erneuten Öffnen einer Serie genau dort landen, wo Sie aufgehört haben, und nicht am Anfang."],
      ["Breite Seiten und Spreads", "Doppelseiten und ungewöhnlich breite Scans können geteilt, gedreht oder skaliert werden, sodass sie auf einem Telefon nicht unlesbar sind."],
      ["Heruntergeladene Kapitel", "Heruntergeladene Kapitel werden sofort geöffnet und in der Kapitelliste markiert, was das Offline-Lesen praktisch macht."],
      ["Romane", "Textromane verwenden denselben Eintrag in Ihrer Bibliothek, werden jedoch in einem Textreader statt in einem Bildbetrachter geöffnet, der automatisch aus dem Inhaltstyp der Erweiterung ausgewählt wird."],
      ["Wenn eine Seite nicht geladen wird", "Gelegentlich erkennt die App ein Bild in einem Kapitel nicht. Das Verlassen des Readers und das erneute Öffnen des Kapitels löst das Problem normalerweise, und wenn das Problem weiterhin besteht, fehlt das Bild selbst in der Quelle und nicht in der App."],
      ["Zwei Seiten auf einmal", "Ein Dual-Page-Reader ist nicht verfügbar, da sich Scans selten darauf einigen, wo ein Seitenumbruch erfolgt. Das aktuelle Verhalten besteht darin, eine Seite nach der anderen zu lesen oder einen langen Streifen für Webtoons zu verwenden."],
    ],
    facts: [
      "Der lange Streifen eignet sich für vertikale Webtoons und ignoriert die Seitenbreite.",
      "Der Leser merkt sich die Seite, die Sie pro Kapitel erreicht haben.",
      "Der Zoom ist in einem langen Streifen ausgeschaltet, bis Sie ihn einschalten.",
      "Romane werden in einem Textreader geöffnet, nicht im Bildreader.",
      "Das erneute Öffnen eines Kapitels behebt eine Seite, die nicht geladen werden konnte.",
    ]
  },
  "reader-settings": {
    title: "Richten Sie das Lesen so ein, wie es Ihnen gefällt.",
    body: "Zu den Reader-Einstellungen gehören die Leserichtung, die Skalierung und der Zuschnitt der Seiten sowie die Bereiche des Bildschirms, in denen die Seite umgeblättert wird.",
    subsections: [
      ["Lektüre", "Legen Sie den Standardmodus fest, ob Seiten beim Umblättern animiert werden und welche Kapitel übersprungen werden sollen. Übersprungene Kapitel sind immer noch vorhanden, sie unterbrechen Sie einfach nicht."],
      ["Anzeige", "Rotationssperre, Hintergrundfarbe und Vollbild leben hier zusammen. Ein dunkler Hintergrund eignet sich zum Lesen in der Nacht und reduziert die Blendung zwischen den Seiten."],
      ["Seiten", "Wählen Sie, wie eine Seite den Bildschirm ausfüllt: Passen Sie sie an die Breite, Höhe oder den gesamten Bildschirm an oder zeigen Sie sie in Originalgröße an. Beim Randbeschneiden werden die Scanränder automatisch gekürzt."],
      ["Tippen Sie auf Zonen", "Wählen Sie die Stelle aus, an der durch Antippen die Seite vorwärts bzw. zurückgeblättert und das Menü geöffnet wird. Das gesamte Layout kann zum Lesen für Linkshänder gespiegelt werden."],
      ["Langer Streifen", "Seitliche Polsterung und separate Tippzonen machen es großen Webtoons bequem, auf einem breiten Bildschirm zu sitzen, wo ein Bild in voller Breite sonst zu klein wäre."],
      ["Ausnahmen pro Serie", "Jeder dieser Punkte kann für eine Serie überschrieben werden, was praktisch ist, wenn ein Titel ungewöhnlich gescannt wurde oder in die andere Richtung gelesen wird."],
    ],
    facts: [
      "Zu den Skalierungsoptionen gehören „Anpassungsbreite“, „Anpassungshöhe“, „Anpassungsbildschirm“ und „Originalgröße“.",
      "Durch das Zuschneiden von Rändern werden Scanränder für Sie entfernt.",
      "Tippzonen können für linkshändiges Lesen gespiegelt werden.",
      "Überspringregeln können pro Serie außer Kraft gesetzt werden.",
    ]
  },
  updates: {
    title: "Halten Sie Ihre Bibliothek auf dem neuesten Stand.",
    body: "Updates überprüfen Ihre Quellen auf neue Kapitel und Episoden. Gut gemacht, sie halten Sie auf dem Laufenden. Unvorsichtigerweise hämmern sie auf eine Quelle ein, bis sie alle blockiert.",
    subsections: [
      ["Globales Update", "Läuft durch Ihre gesamte Bibliothek und meldet, was neu ist. Beschränken Sie es auf die Kategorien, denen Sie tatsächlich folgen, damit langsame Serien nicht umsonst jeden Tag überprüft werden."],
      ["Was wird übersprungen", "Serien, die Sie abgeschlossen haben, Serien, die Sie noch nicht begonnen haben, und Serien ohne erwartete Veröffentlichung werden automatisch übersprungen. Das ist es, was eine große Bibliothek davon abhält, eine Flut von Anfragen zu erzeugen."],
      ["Benachrichtigungen", "Bei neuen Kapiteln und Episoden wird eine Benachrichtigung angezeigt, die Sie auf eine Kategorie eingrenzen oder ganz ausschalten können, ohne die Aktualisierungen auszuschalten."],
      ["Auffrischung einer Serie", "Öffnen Sie das Serienmenü und aktualisieren Sie es, wenn Sie es sofort überprüfen möchten, ohne alles andere zu aktualisieren."],
      ["Warum das wichtig ist", "Eine Quelle, die zu viele Anfragen erhält, kann mit dem Anti-Bot-Schutz die gesamte App blockieren. Durch die Beschränkung der Aktualisierungen auf das, was Sie verfolgen, werden die Quellen geschützt, auf die jeder angewiesen ist."],
      ["Wenn Updates scheinbar nicht mehr funktionieren", "Durch die Optimierung des Android-Akkus kann die Hintergrundarbeit unterbrochen werden. Befreien Sie Watchtower von den Batteriebeschränkungen, wenn Updates nur eintreffen, wenn Sie die App öffnen."],
      ["Wenn ein Update einen Fehler meldet", "Ein Update, das bei einer Serie fehlschlägt, liegt normalerweise an dieser Quelle und nicht an der App. Aktualisieren Sie die Serie manuell, aktualisieren Sie die Erweiterung und denken Sie daran, dass sich die Ratenbegrenzung nach einem großen Update-Lauf mit der Zeit und nicht bei Wiederholungsversuchen von selbst auflöst."],
    ],
    facts: [
      "Aktualisierungen können auf die von Ihnen ausgewählten Kategorien beschränkt werden.",
      "Abgeschlossene Serien werden standardmäßig übersprungen.",
      "Starker Update-Verkehr kann dazu führen, dass die App blockiert wird.",
      "Die Batterieoptimierung kann Hintergrundaktualisierungen verzögern.",
      "Ein fehlgeschlagenes Update einer Serie deutet auf diese Quelle hin, nicht auf die App.",
    ]
  },
  downloads: {
    title: "Schalten Sie Ihre Bibliothek offline.",
    body: "Durch Downloads werden Episoden und Kapitel auf Ihrem Gerät gespeichert, sodass Sie sie ohne Verbindung ansehen oder lesen können. Sie leben in einer Warteschlange mit klaren Grenzen.",
    subsections: [
      ["Einen Download starten", "Fügen Sie Kapitel oder Episoden aus einer Serie hinzu und sie werden in die Download-Warteschlange aufgenommen. Von der Warteschlange aus können Sie die nächste Bestellung neu anordnen oder etwas stornieren, das Sie nicht mehr benötigen."],
      ["Warum einzeln", "Watchtower lädt jeweils eine Serie von einer beliebigen Quelle herunter. Das Auslösen vieler Anfragen an einer Site ist genau das, was den Anti-Bot-Schutz auslöst, der Quellen blockiert."],
      ["Nur-Download-Modus", "Aktivieren Sie diese Option, um alles auszublenden, was Sie nicht gespeichert haben. Die App zeigt dann nur an, was sich auf Ihrem Gerät befindet, was auf einer Reise oder einer gemessenen Verbindung nützlich ist."],
      ["Wo Dateien gespeichert werden", "Downloads landen in einem Ordner, der nach der Quelle und dann nach der Serie benannt ist. Das Umbenennen eines Ordners beeinträchtigt die Erkennung, also lassen Sie ihn in Ruhe."],
      ["Wenn Downloads verschwinden", "Wenn gespeicherte Inhalte nicht mehr angezeigt werden, wurde der Speicherordner wahrscheinlich verschoben oder ist nicht mehr lesbar. Überprüfen Sie den Speicherort und erstellen Sie den Download-Index neu."],
      ["Was ein Backup nicht abdeckt", "Sicherungsdateien enthalten Ihre Bibliothek und Einstellungen, niemals Ihre heruntergeladenen Medien. Diese müssen separat bewegt werden."],
      ["Wenn ein Download teilweise fehlschlägt", "Ein gestoppter Download ist normalerweise eine unterbrochene Verbindung oder eine Quelle, die nicht mehr antwortet. Versuchen Sie es erneut aus der Warteschlange, da Teildateien beibehalten werden, und wechseln Sie zu WLAN, wenn das Netzwerk die Ursache ist. Anhaltende 403- oder 429-Antworten bedeuten, dass die Quelle Sie ablehnt und nicht, dass die Datei verschwunden ist."],
    ],
    facts: [
      "Absichtlich wird jeweils nur eine Serie pro Quelle heruntergeladen.",
      "Heruntergeladene Medien sind nicht in einem Backup enthalten.",
      "Der interne Speicher ist schneller und zuverlässiger als eine SD-Karte.",
      "Durch das Umbenennen des Download-Ordners wird die Erkennung unterbrochen.",
      "Bei einem gestoppten Download bleiben die Teildateien erhalten, daher wird er bei einem erneuten Versuch fortgesetzt.",
    ]
  },
  categories: {
    title: "Verwandeln Sie eine lange Bibliothek in ein paar Regale.",
    body: "Kategorien gruppieren Ihre Bibliothek nach Bundesstaat oder Geschmack und dienen gleichzeitig als Steuerung dafür, was automatisch aktualisiert und heruntergeladen wird.",
    subsections: [
      ["Kategorien erstellen", "Benennen Sie sie so, wie es für Sie sinnvoll ist, und ordnen Sie sie nach Ihren Wünschen an. Die meisten Menschen haben am Ende eine Handvoll davon, je nachdem, wie oft sie etwas verfolgen."],
      ["Serien einbauen", "Drücken Sie lange auf eine Serie, wählen Sie die Kategorieoption und kreuzen Sie alles an, was zutrifft. Eine Serie kann auf mehreren Regalen gleichzeitig stehen."],
      ["Verwenden Sie sie für Updates", "Richten Sie globale Updates und automatische Downloads auf bestimmte Kategorien aus. Nur die Serien, die Sie aktiv verfolgen, generieren dann Traffic."],
      ["Eine Serie herausnehmen", "Heben Sie die Auswahl einer Kategorie an derselben Stelle auf, an der Sie sie hinzugefügt haben. Die Serie bleibt in Ihrer Bibliothek, sie verlässt einfach das Regal."],
      ["Benennen, das bleibt", "Benennen Sie Kategorien nach Ihren Gewohnheiten und nicht nach Quellen. Dann führt die Migration einer Reihe zwischen Quellen nie zu einer Neuordnung Ihrer Bibliothek."],
      ["Halten Sie es einfach", "Kategorien funktionieren am besten, wenn es nur wenige davon gibt. Wenn Sie sich nicht erinnern können, wofür eine Kategorie gedacht ist, schadet sie wahrscheinlich mehr, als dass sie nützt."],
    ],
    facts: [
      "Eine Serie kann mehreren Kategorien gleichzeitig angehören.",
      "Das globale Update kann auf eine einzelne Kategorie verwiesen werden.",
      "Automatische Downloads können auf ausgewählte Kategorien beschränkt werden.",
      "Die Benennung von Kategorien nach Quellen ist in die Jahre gekommen.",
    ]
  },
  tracking: {
    title: "Zeichnen Sie automatisch auf, was Sie sehen.",
    body: "Das Tracking verbindet Watchtower mit den Diensten, die Ihren Verlauf speichern. Sie melden sich einmal an und der Fortschritt wird protokolliert, anstatt dass er manuell eingetippt wird.",
    subsections: [
      ["Welche Dienste werden unterstützt?", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori und Bangumi. Sie werden alle über die Tracking-Einstellungen eingerichtet und Sie können mehrere verbinden."],
      ["Anmelden", "Öffnen Sie die Tracking-Einstellungen und tippen Sie auf einen Dienst, um dessen Anmeldung zu starten. Kitsu fragt nach Ihrer E-Mail-Adresse und nicht nach einem Benutzernamen, was die Leute auffällt."],
      ["Eine Reihe verbinden", "Öffnen Sie eine Serie, gehen Sie zur Sendungsverfolgung und fügen Sie den Dienst hinzu. Watchtower sucht für Sie nach dem Titel und Sie können die Suchbegriffe bearbeiten, wenn sie mit dem falschen Eintrag übereinstimmen."],
      ["Wie viel zählt als gesehen", "Ein prozentualer Schwellenwert entscheidet darüber, wann eine Episode als gesehen markiert wird. Stellen Sie den Wert so hoch ein, dass beim Anhalten auf halbem Weg keine vollständige Episode aufgezeichnet wird."],
      ["Nur eine Richtung", "Der Fortschritt geht von Watchtower zum Dienst. Das Bearbeiten Ihrer Liste auf der Website ändert nichts an der App. Wählen Sie daher einen Ort aus, an dem Sie sie verwalten können."],
      ["Offline ansehen", "Fortschritte, die Sie ohne Verbindung erzielen, werden in die Warteschlange gestellt und hochgeladen, wenn Sie das nächste Mal online sind, sodass bei einem Flug Ihr Verlauf nicht verloren geht."],
      ["Wenn eine Anmeldung oder eine Synchronisierung fehlschlägt", "Ein Dienst, der die Anmeldung verweigert, ist in der Regel eine abgelaufene Sitzung oder ein Captcha auf der Website des Dienstes. Melden Sie sich also einmal über die Website des Dienstes an und versuchen Sie es erneut. Fortschritte, die nicht synchronisiert werden können, werden normalerweise in die Warteschlange gestellt und gehen nicht verloren und werden erneut versucht, wenn die Verbindung wiederhergestellt wird."],
      ["Passend zum falschen Titel", "Beim automatischen Abgleich kann der falsche Eintrag ausgewählt werden, wenn ein Titel nicht eindeutig ist. Bearbeiten Sie die Suchbegriffe für diese Serie im Tracking-Bereich, wählen Sie das richtige Ergebnis aus und bestätigen Sie dann, dass der Fortschritt, den es vermittelt, der gewünschte ist."],
    ],
    facts: [
      "Die Nachverfolgung erfolgt pro Serie und nicht für die gesamte Bibliothek.",
      "Fortschritt fließt nur nach außen, nie wieder nach innen.",
      "Ein Schwellenwert entscheidet, wann eine Episode als gesehen gilt.",
      "Offline-Fortschritts-Uploads, wenn Sie die Verbindung wiederherstellen.",
      "Bei einer fehlgeschlagenen Anmeldung handelt es sich in der Regel um eine abgelaufene Sitzung des Dienstes selbst.",
    ]
  },
  backups: {
    title: "Schützen Sie Ihre Bibliothek, bevor etwas schief geht.",
    body: "Ein Backup ist eine Datei, die Ihre Bibliothek, Ihren Fortschritt und Ihre Einstellungen enthält. Dies ist auch die einzige Möglichkeit, eine Bibliothek zwischen Geräten zu verschieben.",
    subsections: [
      ["Einen machen", "Öffnen Sie die Daten- und Speichereinstellungen, erstellen Sie ein Backup und speichern Sie es an einem Ort, auf den Sie von einem anderen Gerät aus zugreifen können. Tun Sie dies vor jedem Update, bei dem Sie sich nicht sicher sind."],
      ["Was ist drin?", "Jede Serie, der Sie folgen, die Kategorien, in denen sie angesiedelt sind, wie weit Sie gekommen sind, Ihre Tracking-Links, Ihr Verlauf, Ihre Erweiterungen und alle Ihre Einstellungen."],
      ["Was weggelassen wird", "Heruntergeladene Dateien, benutzerdefinierte Cover und die Geschichte von Serien, die nie zur Bibliothek hinzugefügt wurden. Diese können nicht aus einem Backup wiederhergestellt werden."],
      ["Es wird wiederhergestellt", "Importieren Sie die Datei auf dem neuen Gerät, melden Sie sich dann erneut bei Ihren Trackern an und installieren Sie Ihre Erweiterungen neu, damit alles sauber neu verknüpft werden kann."],
      ["Automatische Backups", "Legen Sie eine Häufigkeit fest, damit immer ein aktuelles Backup vorhanden ist, ohne dass Sie sich daran erinnern. Dies ist der beste Schutz vor einem fehlerhaften Update."],
      ["Umzug auf ein neues Gerät", "Sichern, auf dem neuen Gerät installieren, wiederherstellen, dann bei Trackern anmelden und Erweiterungen neu installieren. Downloads müssen separat kopiert werden."],
      ["Wenn eine Wiederherstellung fehlschlägt", "Bei einer Wiederherstellung, die teilweise abgebrochen wird, handelt es sich in der Regel um eine abgeschnittene oder veraltete Sicherungsdatei oder um einen Versionskonflikt zwischen der Sicherung und der App. Erstellen Sie die Sicherung vom Quellgerät neu, bestätigen Sie, dass die Datei vollständig kopiert wurde, und stellen Sie sie in einer App wieder her, die mindestens so neu ist wie die, mit der sie erstellt wurde."],
    ],
    facts: [
      "Ein Backup ist die einzige Möglichkeit, eine Bibliothek zwischen Geräten zu verschieben.",
      "Heruntergeladene Medien müssen separat verschoben werden.",
      "Benutzerdefinierte Cover sind nicht Teil eines Backups.",
      "Automatische Backups sind der sicherste Schutz vor einem fehlerhaften Update.",
      "Bei einer fehlgeschlagenen Wiederherstellung handelt es sich normalerweise um eine abgeschnittene oder veraltete Sicherungsdatei.",
    ]
  },
  storage: {
    title: "Wo Watchtower seine Dateien aufbewahrt.",
    body: "Backups, Downloads und lokale Quellen befinden sich alle an einem Speicherort. Die bewusste Auswahl verhindert, dass Downloads später verschwinden.",
    subsections: [
      ["Das Ordnerlayout", "Alles befindet sich in einem Ordner, den Sie auswählen: automatische Backups, heruntergeladene Kapitel und Episoden, Ihr lokaler Manga, Ihr lokaler Anime und die Konfiguration für externe Player. Die Kenntnis des Layouts erleichtert das Platzieren einer verirrten Datei."],
      ["Einen Standort auswählen", "Wählen Sie einen Ordner aus, den Sie auch in einem Jahr noch erreichen können. Vermeiden Sie das Stammverzeichnis eines Speichervolumes und vermeiden Sie es, Dateien anschließend aus der App heraus zu verschieben."],
      ["Android-Berechtigungen", "Modernes Android speichert Apps in ihren eigenen Verzeichnissen. Gewähren Sie Watchtower Zugriff auf den von Ihnen gewählten Speicherordner, sonst schlagen Downloads und lokale Quellen stillschweigend fehl."],
      ["Nach dem Verschieben von Dateien", "Verschieben Sie Dateien von außerhalb der App und aktualisieren Sie sie dann, damit Watchtower die Ordner erneut scannt. Andernfalls bleibt der neue Inhalt unsichtbar, bis etwas anderes einen Scan auslöst."],
      ["Halten Sie die Galerie sauber", "Eine .nomedia-Datei im Download-Ordner hält Cover und Episoden von der Fotogalerie Ihres Telefons fern."],
      ["Warum interner Speicher besser ist", "Downloads auf dem internen Speicher sind schneller und die Wahrscheinlichkeit, dass sie nicht mehr lesbar sind, ist weitaus geringer als auf einer Wechselkarte, die ausgehängt oder beschädigt werden kann."],
      ["Wenn die App den Ordner nicht erreichen kann", "Berechtigungsfehler und verschwindende Downloads sind beide darauf zurückzuführen, dass der Speicherordner verschoben wird oder nicht mehr lesbar ist. Vergewissern Sie sich, dass die App weiterhin Zugriff hat, überprüfen Sie den freien Speicherplatz und bevorzugen Sie den internen Speicher gegenüber einer entfernbaren Karte, die ausgehängt werden kann."],
    ],
    facts: [
      "Backups, Downloads und lokale Quellen teilen sich einen Speicherort.",
      "Android benötigt eine explizite Berechtigung für diesen Ordner.",
      "Eine .nomedia-Datei verbirgt heruntergeladene Medien aus der Galerie.",
      "Der interne Speicher ist zuverlässiger als eine SD-Karte.",
      "Ein verschobener oder nicht lesbarer Speicherordner verbirgt Downloads und Backups.",
    ]
  },
  settings: {
    title: "Die Einstellungen, die das Verhalten der App ändern.",
    body: "Über die eigenen Optionen jeder Funktion hinaus wirken sich eine Handvoll App-weiter Einstellungen auf Updates, Datenschutz, Installation und die Wiederherstellung aus, wenn etwas schief geht.",
    subsections: [
      ["Allgemein", "Thema, Sprache der Benutzeroberfläche und wie sich die Bibliothek standardmäßig verhält. Diese gelten überall gleichzeitig und sind daher die erste Anlaufstelle, wenn sich die App nicht wie Ihre anfühlt."],
      ["Privatsphäre", "Wenn Sie den Bildschirm im App-Umschalter ausblenden, werden in Ihrer Bibliothek keine Miniaturansichten angezeigt, und der Inkognitomodus stoppt die Aufzeichnung des Verlaufs, während Sie surfen. Inkognito verbirgt, was Sie angeschaut haben, nicht wie weit Sie gekommen sind."],
      ["Netzwerk", "Verschlüsseltes DNS kann einige grundlegende Blockierungen überwinden und ist einen Versuch wert, wenn eine Quelle in einem Netzwerk nicht geladen wird, in einem anderen jedoch funktioniert. Ein Proxy erledigt die gleiche Aufgabe für ein ganzes Netzwerk."],
      ["Erweiterungen installieren", "Android blockiert normalerweise Installationen von außerhalb eines Stores. Durch die Erteilung dieser Berechtigung können Erweiterungen installiert werden, und Shizuku ist eine Alternative für Geräte, bei denen dies umständlich ist."],
      ["Diagnose", "Absturzprotokolle, eine Logcat-Erfassung und Index-Neuerstellung sind hier live verfügbar. Hierhin gehen Sie, wenn sich etwas schlecht verhält und Sie Beweise statt Vermutungen wollen."],
      ["Bevor Sie ein Problem melden", "Notieren Sie sich Ihre App-Version, die fehlerhafte Quelle und die Bildschirmanzeige. Dadurch wird aus einem vagen Bericht etwas, das tatsächlich korrigiert werden kann."],
      ["Zurücksetzen eines festgefahrenen Zustands", "Durch das Leeren des Caches, das Löschen von Cookies und Webdaten sowie die Neuerstellung der Indizes wird jeweils eine andere Problemklasse behoben. Der Cache löscht veraltete Seitendaten, Cookies löschen eine blockierte Überprüfung und eine Indexneuerstellung scannt den Speicherordner erneut. Durch das Löschen der Datenbank werden Serien entfernt, die sich nicht in Ihrer Bibliothek befinden. Dies ist die übliche Lösung für ein leeres lokales Cover."],
      ["Ein letzter Ausweg, der Ihre Daten behält", "Wenn nichts anderes funktioniert, erstellen Sie ein neues Backup, installieren Sie die App neu und stellen Sie sie wieder her. Dadurch bleiben Ihre Bibliothek und Einstellungen erhalten, während alles, was in der Installation selbst beschädigt ist, ersetzt wird."],
    ],
    facts: [
      "Um Screenshots erstellen zu können, muss die Datenschutzeinstellung des App-Switchers deaktiviert sein.",
      "Inkognito stoppt die Verlaufsaufzeichnung, nicht den Fortschritt.",
      "Absturzprotokolle verbleiben auf Ihrem Gerät und werden niemals automatisch gesendet.",
      "Verschlüsseltes DNS behebt häufig eine Quelle, die nur in einem Netzwerk ausfällt.",
      "Cache, Cookies und Indizes lösen jeweils eine andere Problemklasse.",
      "Erstellen Sie vor der Neuinstallation ein Backup und stellen Sie es dann wieder her, um Ihre Bibliothek zu behalten.",
    ]
  },
  "extension-runtime": {
    title: "Wie Erweiterungen ausgeführt werden und wie sicher.",
    body: "Erweiterungen sind JavaScript und Watchtower führt sie in einer Sandbox aus, die ihnen das Netzwerk und nichts anderes bietet. Auf dieser Seite erfahren Sie, was das für Sie bedeutet.",
    subsections: [
      ["Was führt Ihre Erweiterungen aus?", "Watchtower verwendet eine kleine JavaScript-Engine, die in die App eingebettet ist. Es handelt sich auf jeder Plattform um die gleiche Engine, weshalb sich eine Quelle auf einem Telefon und einem Server identisch verhält."],
      ["Was eine Erweiterung leisten darf", "Es kann Webanfragen stellen, die empfangenen Seiten analysieren und einige seiner eigenen Einstellungen beibehalten. Das ist der gesamte Werkzeugkasten."],
      ["Wovon es ferngehalten wird", "Ihre Dateien, Ihre Bibliothek, Ihre Konten und die eigenen Bildschirme der App. Alles, was eine Erweiterung erzeugt, wird als einfache Daten zurückgegeben, damit die App sie rendern kann."],
      ["Warum eine langsame Quelle schleppt", "Eine Quelle, die langsam reagiert, verlangsamt ihre eigenen Bildschirme, da die App darauf wartet. Andere Quellen sind davon nicht betroffen, daher ist Langsamkeit ein Zeichen für eine schlechte Quelle und nicht für eine schwere App."],
      ["Was das für das Vertrauen bedeutet", "Die Sandbox begrenzt, was eine Erweiterung beschädigen kann, beurteilt jedoch nicht die Absicht. Es kann immer noch alles sehen, was Sie eingeben und was es abruft. Installieren Sie es von Personen, denen Sie vertrauen."],
      ["Überall der gleiche Motor", "Da die App und die Linux-Befehlszeile diese Laufzeit gemeinsam nutzen, funktioniert eine Erweiterung, die auf Ihrem Telefon funktioniert, ohne Änderungen auch auf einem Server."],
    ],
    facts: [
      "Erweiterungen erhalten Netzwerkzugriff und Seitenanalyse, sonst nichts.",
      "Sie können Ihre Dateien oder Ihre Bibliothek nicht direkt lesen.",
      "Eine langsame Quelle verlangsamt nur ihre eigenen Bildschirme.",
      "Die gleiche Sandbox läuft auf Mobilgeräten, Desktops und der Befehlszeile.",
    ]
  },
  "extension-contract": {
    title: "Was eine Quelle bieten muss.",
    body: "Damit eine Erweiterung funktioniert, muss sie eine Reihe festgelegter Fragen beantworten: Was ist beliebt, was ist neu, was gibt eine Suche zurück, was enthält eine Serie und wo befinden sich ihre Seiten und Streams?",
    subsections: [
      ["Auflistung und Suche", "Diese Aufrufe geben die durchsuchbaren Listen zurück: Was beliebt ist, was kürzlich veröffentlicht wurde und was eine Suche nach einem Begriff ergibt. Sie sind das Minimum, damit eine Quelle nutzbar ist."],
      ["Serien und Kapitel", "Bei einem Aufruf werden die Details einer Serie eingegeben, bei einem anderen werden die geordneten Kapitel oder Episoden zurückgegeben. Ohne diese kann eine Quelle durchsucht, aber nicht geöffnet werden."],
      ["Seiten und Video", "Beim Lesen liefert ein Aufruf die Bildadressen eines Kapitels zurück. Bei Videos gibt ein Anruf die verfügbaren Streams zusammen mit der Qualität und allen benötigten Headern zurück."],
      ["Optionale Extras", "Filter, quellenspezifische Einstellungen und benutzerdefinierte Bildverarbeitung sind optional. Eine Quelle ohne sie funktioniert immer noch; Es bietet einfach weniger Konfigurationsmöglichkeiten."],
      ["Warum der Inhaltstyp wichtig ist", "Der Typ, den eine Erweiterung deklariert, entscheidet darüber, ob ein Ergebnis im Manga-Reader, im Video-Player oder im Roman-Reader geöffnet wird. Wenn Sie etwas falsch machen, werden Inhalte auf den falschen Bildschirm gesendet."],
      ["Was ist nicht erforderlich", "Alles über Auflistung und Suche hinaus ist ein Bonus. Eine minimale Quelle, die nur auflistet und durchsucht, ist eine vollkommen gute Quelle."],
    ],
    facts: [
      "Allein das Auflisten und Suchen ergibt eine durchsuchbare Quelle.",
      "Details und Kapitelaufrufe sind es, die eine Serie eröffnen.",
      "Filter und Quelleneinstellungen sind optional.",
      "Der Inhaltstyp entscheidet darüber, welcher Reader oder Player geöffnet wird.",
    ]
  },
  "ui-schema": {
    title: "Lassen Sie eine Quelle ihren eigenen Startbildschirm entwerfen.",
    body: "Einige Quellen präsentieren eine reichhaltige Titelseite: Banner, Titelseitenreihen, einen vorgestellten Block. Anstatt für jeden einzelnen App-Code zu schreiben, kann eine Erweiterung das Layout selbst beschreiben.",
    subsections: [
      ["Wofür es ist", "Eine Quelle kann ihren Startbildschirm als Daten beschreiben: Zeilen, Karten und Banner, die jeweils auf den von der Quelle bereitgestellten Inhalt verweisen. Die App zeichnet es mit ihren normalen Widgets."],
      ["Warum es eine gute Idee ist", "Dies bedeutet, dass eine neue Website ohne eine neue App-Version eine maßgeschneiderte Startseite haben kann und die Seite immer noch nativ aussieht und nicht wie eine Webseite in einer Box."],
      ["Was kann beschrieben werden", "Listen, Reihen, Karten, Banner und Textblöcke sind die Bausteine. Das deckt in der Praxis das Layout fast aller Quell-Startbildschirme ab."],
      ["Wenn eine Quelle keine hat", "Wenn eine Erweiterung kein Layout beschreibt, erstellt Watchtower eines aus den Auflistungen der Quelle. Nichts geht kaputt; die Seite ist einfach schlichter."],
      ["Was es nicht kann", "Bei der Beschreibung handelt es sich um Daten, nicht um Code. Es kann keine Logik ausführen, auf Ihre Dateien zugreifen oder das Verhalten der App selbst ändern, weshalb es sicher akzeptiert werden kann."],
      ["Für Leute, die Quellen schreiben", "Betrachten Sie es als eine Layoutdatei und nicht als ein Programm. Sie sagen der App, was sie anzeigen soll, nicht wie sie es zeichnen soll."],
    ],
    facts: [
      "Eine Quelle kann ihren eigenen Startbildschirm als Daten beschreiben.",
      "Unbekannte Bausteine ​​werden ignoriert, anstatt die Seite zu unterbrechen.",
      "Ein Standardlayout wird verwendet, wenn eine Quelle keines bereitstellt.",
      "Die Beschreibung kann keinen Code ausführen oder Ihre Dateien erreichen.",
    ]
  },
  api: {
    title: "Fahren von Watchtower aus einem anderen Programm.",
    body: "Die App kann einen kleinen Webserver auf Ihrem eigenen Computer öffnen, sodass Skripte, externe Player und andere Geräte dieselben Quellen wie die App verwenden können.",
    subsections: [
      ["Was es ist", "Ein kleiner, in die App integrierter Webserver. Es verwendet dieselben Erweiterungen und dieselbe Bibliothek wie die Schnittstelle, sodass alles, was es zurückgibt, mit dem übereinstimmt, was Sie auf dem Bildschirm sehen."],
      ["Einschalten", "Es ist ausgeschaltet, bis Sie es bewusst aktivieren. Schalten Sie es in den erweiterten Einstellungen ein, notieren Sie sich den Port und richten Sie dann Ihr Tool auf diese Adresse."],
      ["Was Sie fragen können", "Ihre installierten Quellen, Ihre Bibliothekseinträge, eine Suche nach beliebigen Quellen und ein aufgelöster Videostream. Das reicht aus, um ein Media Center oder einen externen Player anzutreiben."],
      ["Warum Sie es vielleicht möchten", "Automatisierung, ein anderes Frontend oder die Nutzung der von Ihrem Telefon bereits eingerichteten Quellen durch ein anderes Gerät in Ihrem Netzwerk."],
      ["Behalten Sie es in Ihrem eigenen Netzwerk", "Der Server hat kein Passwort und ist für ein vertrauenswürdiges lokales Netzwerk gedacht. Stellen Sie es nicht dem Internet zur Verfügung, wo jeder Ihre Bibliothek lesen könnte."],
      ["Wie es mit der Befehlszeile zusammenhängt", "Die Linux-Befehlszeile macht denselben Server verfügbar, sodass ein für die App geschriebenes Skript ohne Änderungen auf einem Headless-Computer funktioniert."],
    ],
    facts: [
      "Der Server ist ausgeschaltet, bis Sie ihn in den Einstellungen aktivieren.",
      "Es lauscht standardmäßig auf Port 4567.",
      "Es verwendet dieselben Quellen und dieselben Bibliotheken wie die Schnittstelle.",
      "Es ist für ein vertrauenswürdiges lokales Netzwerk gedacht, nicht für das Internet.",
    ]
  },
  cli: {
    title: "Watchtower ohne Bildschirm ausführen.",
    body: "Auf der Linux-Befehlszeile wird dieselbe Engine wie die App ausgeführt, sodass ein Server oder ein geplanter Job ohne Zuschauen von jemandem abrufen, suchen und herunterladen kann.",
    subsections: [
      ["Wofür es ist", "Server, SSH-Sitzungen und automatisierte Jobs. Es handelt sich um die gleiche Erweiterungs-Engine wie die App mit einer Textoberfläche anstelle von Bildschirmen, sodass keine grafische Sitzung erforderlich ist."],
      ["Sich orientieren", "Beginnen Sie mit dem Befehl „help“ und führen Sie dann den Befehl „doctor“ aus, um sicherzustellen, dass die Laufzeitumgebung alles laden und erreichen kann, was sie benötigt, bevor Sie ihr einen Auftrag anvertrauen."],
      ["Arbeiten mit Erweiterungen", "Listen Sie auf, was ein Repository bietet, validieren Sie es und testen Sie eine Quelle anhand der Live-Site. Der Test läuft stufenweise ab, vom einfachen Laden der Quelle bis zum Durchführen der Such- und Detailaufrufe."],
      ["Direktes Aufrufen einer Quelle", "Sie können einen einzelnen Vorgang aufrufen, beispielsweise eine Suche, und JSON zurückerhalten. Das macht die Befehlszeile für die Skripterstellung und das Debuggen einer Quelle nützlich."],
      ["Bereitstellung über das Netzwerk", "Es kann denselben Webserver starten, den die App bereitstellt. Auf diese Weise kommuniziert ein Remote-Client mit einem Headless-Computer."],
      ["Was es noch nicht tut", "Bibliotheks-, Verlaufs- und Download-Warteschlangenbefehle sind nicht kopflos verfügbar, da die Befehlszeile die lokalen Datenbanken der App nicht öffnet. Die brauchen noch die App."],
    ],
    facts: [
      "Die Befehlszeile verwendet die Erweiterungs-Engine der App wieder.",
      "Der Doctor-Befehl überprüft die Laufzeit, bevor Sie sich darauf verlassen.",
      "Eine Quelle kann stufenweise getestet werden, vom Laden bis zur Suche.",
      "Für Bibliotheks- und Downloadbefehle ist weiterhin die App erforderlich.",
    ]
  },
  deployment: {
    title: "Ausführen von Watchtower auf Ihrem eigenen Server.",
    body: "Für einen Heimserver oder eine kleine Gruppe kann die Linux-Befehlszeile kontinuierlich ausgeführt werden und jedem Client in Ihrem Netzwerk dieselben Quellen bereitstellen.",
    subsections: [
      ["Was Sie bekommen", "Ein einzelner Ordner, der die Befehlszeile und die benötigten Laufzeitdateien enthält. Das Installationsskript kopiert es in ein von Ihnen gewähltes Präfix und richtet es für die Ausführung ein."],
      ["Installiere es", "Führen Sie das Installationsprogramm mit dem entpackten Ordner und dem gewünschten Präfix aus. Durch die Verwendung eines Präfixes in Ihrem Home-Verzeichnis wird vermieden, dass Sie später für alles Root benötigen."],
      ["Führen Sie es als Dienst aus", "Da es über HTTP bereitgestellt werden kann, können Sie es im Hintergrund laufen lassen und anderen Geräten in Ihrem Netzwerk erlauben, die von ihm konfigurierten Quellen zu verwenden."],
      ["Wozu es gut ist", "Ein Medienzentrum, ein geplanter Downloader oder ein Computer, auf dem die Quellen gespeichert sind, damit die anderen dies nicht tun müssen. Da es sich um dieselbe Engine handelt, verhalten sich die Quellen identisch."],
      ["Halten Sie es aktuell", "Aktualisieren Sie es, indem Sie einen neueren Build entpacken und das Installationsprogramm erneut ausführen. Ihre Konfiguration bleibt im Präfix erhalten und wird durch ein Upgrade nicht überschrieben."],
      ["Wenn etwas nicht läuft", "Genau dafür gibt es den Doctor-Befehl. Führen Sie es zuerst aus und es wird Ihnen sagen, ob die Laufzeit, das Netzwerk oder eine Quelle das Problem ist."],
    ],
    facts: [
      "Der Headless-Build besteht aus einem eigenständigen Ordner und einem Installationsprogramm.",
      "Durch die Installation in Ihrem Home-Verzeichnis ist kein Root erforderlich.",
      "Es kann über HTTP für andere Geräte in Ihrem Netzwerk bereitgestellt werden.",
      "Der Befehl „doctor“ diagnostiziert die meisten Startfehler.",
    ]
  },
  troubleshooting: {
    title: "Wenn etwas nicht funktioniert.",
    body: "Fast jedes Problem ist eines von mehreren Dingen: eine Quelle, die sich geändert hat, eine Blockierung einer Website, eine fehlende Berechtigung oder eine Erweiterung, die aktualisiert werden muss. Arbeiten Sie es in dieser Reihenfolge durch.",
    subsections: [
      ["Beginnen Sie damit, es einzugrenzen", "Bevor Sie eine Einstellung berühren, entscheiden Sie, ob das Problem an der Quelle, Ihrem Netzwerk oder Ihrem Gerät liegt. Eine Quelle fällt aus, während andere auf diese Quelle verweisen. Alles, was fehlschlägt, deutet auf die App oder die Verbindung hin."],
      ["Aktualisieren Sie zuerst alles", "Aktualisieren Sie Ihre Repositorys und installieren Sie alle Erweiterungsupdates. Suchen Sie dann nach einem App-Update. Ein großer Teil des plötzlichen Ausfalls ist auf eine geänderte Website und eine Erweiterung zurückzuführen, die bereits repariert, aber noch nicht installiert wurde."],
      ["Eine Quelle funktioniert nicht mehr", "Dies ist das häufigste und in der Regel am wenigsten schwerwiegende Problem. Die Website hat sich geändert, die Erweiterung benötigt ein Update und die Aktualisierung Ihres Repositorys ist die Lösung. Wenn noch kein Update vorhanden ist, hat der Autor der Erweiterung nicht aufgeholt."],
      ["Es wird überhaupt nichts geladen", "Wenn jede Quelle ausfällt, schauen Sie sich stattdessen das Netzwerk an. Probieren Sie mobile Daten, ein anderes WLAN-Netzwerk und verschlüsseltes DNS in den Einstellungen aus. Eine häufige Ursache ist ein einzelnes Netzwerk, das alles blockiert, oder ein Captive-Portal, bei dem man sich nicht angemeldet hat."],
      ["Öffnen einer Website, um einen Scheck zu bestehen", "Einige Websites führen eine Verifizierung durch, bevor sie antworten. Öffnen Sie die Quelle über „Durchsuchen“ und verwenden Sie den integrierten Browser, um die eigene Seite der Website zu laden. Führen Sie alle Überprüfungen manuell durch, schließen Sie sie dann und kehren Sie zur App zurück. Wenn Sie dies einmal tun, wird häufig die Sperre für diese Quelle gelöscht."],
      ["Wolkenflare und endloses Nachladen", "Eine Website hinter Cloudflare kann ihren Scheck ständig neu laden, anstatt Sie durchzulassen. Versuchen Sie erneut, die Site im integrierten Browser zu öffnen, ändern Sie Ihren Benutzeragenten in den erweiterten Einstellungen oder warten Sie, bis der Schutz der Site verringert wird. Einige Quellen sind absichtlich schwer über eine App zu nutzen."],
      ["Cookies und Webdaten löschen", "Dadurch wird der gespeicherte Browserstatus der App einschließlich aller Anmeldungen zurückgesetzt. Dies ist die richtige Lösung für eine steckengebliebene Prüfung und es lohnt sich, dies zu tun, bevor entschieden wird, dass eine Quelle tot ist. Sie müssen sich anschließend erneut anmelden, wenn die Quelle ein Konto benötigt."],
      ["Ändern Sie Ihren Benutzeragenten", "Der Benutzeragent ist die Zeichenfolge, die Ihr Gerät gegenüber einer Website identifiziert. Einige Websites behandeln ihn als Bot-Signal. Das Ersetzen des Standardwerts durch eine allgemeine Browserzeichenfolge und das anschließende Neustarten der App führt manchmal über eine Prüfung hinaus, die andernfalls eine Schleife auslöst."],
      ["Eine Erweiterung wird nicht installiert", "Android blockiert standardmäßig Installationen von außerhalb eines Stores. Erlauben Sie es für Ihren Dateimanager oder Browser. Wenn diese Option fehlt, verwenden Sie Shizuku als alternative Route. Ein Download, der teilweise abgebrochen wurde, erzeugt eine andere Meldung, also führen Sie eine Neuinstallation durch."],
      ["Der Inhalt wird an der falschen Stelle geöffnet", "Wenn im Videoplayer ein Manga oder im Reader eine Episode geöffnet wird, deklariert die Erweiterung den falschen Inhaltstyp. Das ist ein Fehler in der Erweiterung und nicht in Ihren Einstellungen. Melden Sie ihn also, anstatt zu versuchen, ihn lokal zu beheben."],
      ["Absturzprotokolle und weitere Details abrufen", "Erweiterte Einstellungen können Absturzprotokolle ausgeben, und eine Logcat-Erfassung von Ihrem Gerät zeigt detaillierter, was die App getan hat. Es lohnt sich, beides beizufügen, wenn Sie ein Problem melden, da sie aus einer vagen Beschreibung etwas machen, das nachvollziehbar ist."],
      ["Speicherung und langsames oder verzögertes Lesen", "Langsames Laden ist in der Regel eher auf die Website, Ihre Verbindung oder eine Geschwindigkeitsbegrenzung als auf die App zurückzuführen. Verzögerungen beim Lesen entstehen durch übergroße Bilder in einem Kapitel. Das Wechseln der Quelle, das Freigeben von Speicher oder das Abwarten einer Ratenbegrenzung sind praktische Lösungen."],
      ["Wenn es nicht nur Sie sind", "Wenn andere den gleichen Fehler sehen, liegt es an der Erweiterung oder der App und nicht an Ihrem Setup. Überprüfen Sie den Issue-Tracker des Projekts auf die Quelle, bevor Sie einen neuen Bericht öffnen, und geben Sie Ihre App-Version und den genauen Fehlertext an."],
    ],
    facts: [
      "Eine defekte Quelle ist fast immer die Quelle, nicht die App.",
      "Eine veraltete Verlängerung ist die häufigste Ursache für einen plötzlichen Bruch.",
      "Wenn jede Quelle ausfällt, verdächtigen Sie das Netzwerk vor der App.",
      "Beim Öffnen einer Website im integrierten Browser werden viele Verifizierungsprüfungen gelöscht.",
      "Durch das Löschen von Cookies und Webdaten werden eine blockierte Prüfung und alle Anmeldungen zurückgesetzt.",
      "Absturzprotokolle und Logcat machen einen Fehlerbericht nachvollziehbar.",
    ]
  },
  errors: {
    title: "Jede Fehlermeldung und was sie bedeutet.",
    body: "Watchtower zeigt den groben Fehler an, anstatt ihn zu verbergen, sodass die Nachricht selbst der schnellste Hinweis ist, den Sie haben. Suchen Sie unten nach Ihrem Fehler und probieren Sie den ersten Fix aus, bevor Sie etwas anderes ändern.",
    subsections: [
      ["403 Verboten", "Die Website hat entschieden, dass Ihre Anfrage automatisiert zu sein scheint und lehnt sie ab. In der Praxis handelt es sich dabei um einen Anti-Bot-Schutz. Aktualisieren Sie zuerst die Erweiterung und öffnen Sie dann einmal die Quelle im integrierten Browser, um alle auf der Website vorhandenen Prüfungen zu löschen. Wenn die Antwort immer noch abgelehnt wird, hat die Quelle möglicherweise ihren Schutz erhöht oder Ihre Adresse gesperrt."],
      ["404 Nicht gefunden", "Die von der Erweiterung erwartete Seite wurde verschoben oder entfernt. Dies ist fast immer eine veraltete Erweiterung. Aktualisieren Sie daher Ihr Repository und aktualisieren Sie es. Wenn es noch kein Update gibt, hat der Autor der Erweiterung die Seite nicht eingeholt."],
      ["429 Zu viele Anfragen", "Ihr Tarif wurde eingeschränkt, weil Sie zu schnell Anfragen gestellt haben. Warten ist die eigentliche Lösung, und die Verringerung der Häufigkeit von Updates und Downloads verhindert, dass es wieder auftritt. Ein sofortiger erneuter Versuch verlängert nur den Block."],
      ["500, 502 und andere 5xx-Fehler", "Die Website selbst versagt. Auf Ihrem Gerät gibt es nichts zu reparieren. Der richtige Schritt besteht darin, abzuwarten und es später noch einmal zu versuchen. Wenn Sie die Website in einem Browser überprüfen, können Sie feststellen, ob sie für alle zugänglich ist."],
      ["1006 und 1020, die Firewall-Codes", "1006 bedeutet normalerweise ein vorübergehendes IP-Verbot und 1020 bedeutet eine vom Websitebesitzer festgelegte Firewallregel, häufig um Besucher von außerhalb ihres Landes zu blockieren. Ein Netzwerkwechsel kann bei 1006 hilfreich sein; 1020 kann normalerweise nicht umgangen werden."],
      ["Cloudflare konnte nicht umgangen werden", "Die Website ist durch Cloudflare geschützt und die automatische Prüfung wurde nicht gelöscht. Öffnen Sie die Seite der Quelle im integrierten Browser, führen Sie die Überprüfung manuell durch und kehren Sie dann zur App zurück. Wenn die Seite endlos neu geladen wird, lesen Sie die Seite zur Fehlerbehebung."],
      ["Host kann nicht aufgelöst werden, Verbindung fehlgeschlagen, Zeitüberschreitung", "Dabei handelt es sich eher um Netzwerkprobleme als um Fehler in der Quelle. Überprüfen Sie, ob das Gerät über einen Internetzugang verfügt, versuchen Sie es mit einem anderen Netzwerk oder mobilen Daten und aktivieren Sie verschlüsseltes DNS in den Einstellungen. Ein gefangenes Wi-Fi-Portal ist eine häufige Ursache."],
      ["Die Zertifikatsvalidierung ist fehlgeschlagen", "Das Sicherheitszertifikat der Site konnte nicht validiert werden. Überprüfen Sie, ob Datum und Uhrzeit des Geräts korrekt sind, leeren Sie den Cache und die Cookies der App und versuchen Sie es mit einem anderen Netzwerk. Ein abgelaufenes Zertifikat auf der Website können Sie nicht reparieren."],
      ["Speicher- und SD-Kartenfehler", "Meldungen über eine Karte, einen Pfad oder einen nicht verfügbaren Ordner bedeuten, dass der Download-Speicherort verschoben wurde oder nicht mehr lesbar ist. Überprüfen Sie den freien Speicherplatz, stellen Sie sicher, dass die App weiterhin Zugriff auf diesen Ordner hat, und kehren Sie zum internen Speicher zurück, wenn die Karte weiterhin ausfällt."],
      ["App oder Erweiterung werden nicht installiert", "Ein von jemand anderem signiertes APK, ein abgeschnittener Download und die falsche Prozessorarchitektur führen jeweils zu einer anderen Installationsmeldung. Entfernen Sie die in Konflikt stehende Kopie, laden Sie die Datei erneut herunter und stellen Sie sicher, dass Android unbekannte Apps installieren darf."],
      ["Wenn der Fehler hier nicht aufgeführt ist", "Kopieren Sie die genaue Botschaft, anstatt sie zu paraphrasieren. Der Name des Vorgangs und die darin enthaltene URL verweisen normalerweise direkt auf den fehlgeschlagenen Schritt, und auf der Seite zur Fehlerbehebung wird er schrittweise eingegrenzt."],
    ],
    facts: [
      "403 und 429 bedeuten beide, dass die Website Sie aus unterschiedlichen Gründen ablehnt.",
      "Ein 404 ist fast immer eine Erweiterung, die aktualisiert werden muss.",
      "Ein 5xx-Fehler liegt an der Website, nicht an Ihrem Gerät.",
      "1006 ist ein vorübergehendes Verbot; 1020 ist eine Firewall-Regel, die Sie nicht umgehen können.",
      "Kopieren Sie die genaue Nachricht: Die darin enthaltene URL benennt den fehlgeschlagenen Schritt.",
      "Nicht übereinstimmende Signaturen bedeuten, dass eine anders signierte Kopie installiert wird.",
    ]
  },
  faq: {
    title: "Fragen, die oft auftauchen.",
    body: "Kurze Antworten auf die Fragen, die Leute vor und nach der Installation von Watchtower stellen, gruppiert nach dem Teil der App, den sie berühren.",
    subsections: [
      ["Warum ist es nicht in einem App Store erhältlich?", "Denn Watchtower installiert zur Laufzeit Erweiterungen, die Store-Richtlinien nicht zulassen. Das ist auch der Grund, warum jede Installation von einer APK erfolgt, der Sie vertrauen."],
      ["Gibt es eine iOS-Version?", "Der zugrunde liegende Code ist plattformübergreifend, der Versand auf iOS ist jedoch durch Plattformregeln eingeschränkt und wird nicht versprochen. Android ist die Plattform, die alles zuerst bekommt."],
      ["Funktioniert es ohne Internet?", "Alles, was Sie heruntergeladen haben, sowie lokale Dateien, funktioniert vollständig offline. Das Durchsuchen von Quellen und Suchen ist nicht erforderlich, da diese die Websites selbst benötigen."],
      ["Kann ich zwischen Geräten synchronisieren?", "Es gibt keine automatische Synchronisierung. Sie verschieben Ihre Bibliothek mit einer Sicherungsdatei und heruntergeladene Medien müssen separat kopiert werden."],
      ["Ist es legal und kostenlos?", "Watchtower ist kostenlos und Open Source und enthält keine eigenen Inhalte. Was Sie durch Erweiterungen hinzufügen, liegt in Ihrer Verantwortung, weshalb die App darauf achtet, diese nicht zu überprüfen."],
      ["Warum kann ich eine installierte Quelle nicht sehen?", "Zwei Filter verbergen Quellen, ohne sie zu löschen. Wenn die Erweiterung eine andere Sprache als die Ihres Geräts bereitstellt, aktivieren Sie diese Sprache im Quelllistenfilter. Wenn es sich um eine Quelle für Erwachsene handelt, aktivieren Sie die Option, die NSFW-Quellen in der Liste anzeigt."],
      ["Wie deinstalliere ich eine Erweiterung?", "Deinstallieren Sie es über den Erweiterungsbildschirm oder wie jede andere App in den Android-Einstellungen. Ihre Bibliothekseinträge bleiben erhalten und werden einfach als nicht verfügbar angezeigt, bis sie von einer anderen Quelle bereitgestellt werden können."],
      ["Warum werden meine Downloads nicht angezeigt?", "Downloads werden nach Ordner erkannt. Wenn der Speicherort verschoben, die SD-Karte entfernt oder die Quelle oder Serie auf der Website umbenannt wurde, kann die App den Ordner nicht zuordnen. Korrigieren Sie den Speicherort oder benennen Sie den Ordner entsprechend um und erstellen Sie dann den Download-Index neu."],
      ["Warum zeigt meine Fotogalerie Cover und Episoden?", "Normalerweise versteckt die App ihre Medien mit einer .nomedia-Datei vor der Systemgalerie. Wenn dies nicht der Fall ist, erstellen Sie selbst eines und legen Sie es im Download-Ordner oder im lokalen Quellordner ab, falls dies durchgesickert ist."],
      ["Warum ist das Lesen oder Laden langsam?", "Langsames Laden liegt an der Website, Ihrer Verbindung oder einer Geschwindigkeitsbegrenzung, nicht daran, dass die App schwer ist. Verzögerungen beim Lesen entstehen durch übergroße Bilder in einem Kapitel. Geben Sie also Speicherplatz frei oder wählen Sie eine Quelle mit kleineren Scans."],
      ["Warum werden einige Episoden nicht angezeigt?", "Abgesehen von Netzwerkproblemen kann es vorkommen, dass die App nicht erkennt, dass ein Video vorhanden ist. Wenn Sie den Player verlassen und die Episode erneut öffnen, wird sie normalerweise registriert."],
      ["Warum überspringt ein Bibliotheksupdate Einträge?", "Einträge mit unbeobachtetem oder ungelesenem Inhalt, Einträge, die Sie noch nicht begonnen haben, Einträge, die als abgeschlossen markiert sind, und Einträge, deren Veröffentlichung nicht erwartet wird, werden absichtlich übersprungen. Dadurch wird verhindert, dass eine große Bibliothek Quellen blockiert und die App blockiert."],
      ["Warum werden Bibliotheksaktualisierungen im Hintergrund gestoppt?", "Einige Android-Builds sparen aggressiv den Akku und unterbrechen die Hintergrundarbeit. Nehmen Sie Watchtower von der Batterieoptimierung aus, wenn Updates erst beim Öffnen der App eintreffen."],
      ["Warum ist das Erstellen eines Screenshots blockiert?", "Die Datenschutzeinstellung, die die App im Aufgabenwechsler verbirgt, blockiert auch Screenshots. Deaktivieren Sie diese Einstellung, wenn Sie den Bildschirm erfassen möchten."],
      ["Etwas ist kaputt, was nun?", "Aktualisieren Sie zuerst Ihre Erweiterungen, da dadurch die meisten Fehler behoben werden. Wenn das Problem weiterhin besteht, überprüfen Sie die Fehlerseite auf die genaue Meldung, die Sie sehen, und dann die Seite zur Fehlerbehebung, bevor Sie davon ausgehen, dass die App schuld ist."],
    ],
    facts: [
      "Watchtower wird nicht über App Stores vertrieben.",
      "Heruntergeladene Inhalte und lokale Dateien funktionieren vollständig offline.",
      "Es gibt keine automatische Synchronisierung zwischen Geräten.",
      "Eine versteckte Quelle ist normalerweise der Sprachfilter oder der NSFW-Schalter.",
      "Downloads werden anhand des Ordnernamens zugeordnet. Wenn Sie also einen Ordner umbenennen, wird er ausgeblendet.",
      "Durch das Aktualisieren von Erweiterungen werden die meisten plötzlichen Fehler behoben.",
    ]
  },
  contribute: {
    title: "Helfen, Watchtower besser zu machen.",
    body: "Die App, die Erweiterungen und diese Dokumentation sind alle geöffnet. Es gibt nützliche Arbeit für Leute, die Code schreiben, und für Leute, die das nicht tun.",
    subsections: [
      ["Möglichkeiten zu helfen", "Melden Sie Fehler mit genau der Nachricht, die Sie gesehen haben, verbessern Sie eine Quelle, schreiben Sie eine Erweiterung für eine Site, die niemand abgedeckt hat, oder übersetzen Sie diese Site in eine andere Sprache."],
      ["Arbeite an der App", "Klonen Sie das Repository, installieren Sie die Flutter- und Rust-Toolchains und führen Sie den Analysator aus, bevor Sie eine Pull-Anfrage öffnen. Go wird nur benötigt, wenn Sie den Torrent-Server wechseln."],
      ["Arbeiten an der Dokumentation", "Die Site ist ein eigenes Repository. Das Hinzufügen einer Sprache bedeutet das Hinzufügen einer Übersetzungsdatei; Das Layout und die Navigation erledigen bereits den Rest."],
      ["Übersetzen", "Die App und diese Website bieten beide viele Sprachen an, und eine neue ist zusätzlich verfügbar. Sie müssen das Design nie berühren, um Ihre eigene Sprache hinzuzufügen."],
      ["Ich melde einen guten Fehler", "Geben Sie Ihre App-Version, die von Ihnen verwendete Quelle, den genauen Fehlertext und an, ob andere Quellen noch funktionieren. Das reicht in der Regel aus, um den Fehler zu lokalisieren."],
      ["Vor einer großen Veränderung", "Öffnen Sie ein Problem oder fragen Sie zuerst auf Discord. Es erspart Ihnen, etwas zu bauen, das nicht zum Projektverlauf passt."],
    ],
    facts: [
      "Die Dokumentation ist ein von der App getrenntes Repository.",
      "Das Hinzufügen einer Sprache bedeutet das Hinzufügen einer Datei, nicht das Ändern des Layouts.",
      "Die Meldung des genauen Fehlertextes spart am meisten Zeit.",
      "Rust wird für die App-Arbeit benötigt; Gehen Sie nur für den Torrent-Server.",
    ]
  },

  history: {
    title: "Alles, was Sie bereits geöffnet haben.",
    body: "Der Verlauf zeichnet auf, was Sie gesehen und gelesen haben, sodass Sie zu etwas zurückkehren können, das Sie nicht beendet haben, ohne erneut danach suchen zu müssen.",
    subsections: [
      ["Was es aufzeichnet", "Wenn Sie eine Episode oder ein Kapitel öffnen, wird ein Eintrag mit der Zeit und Ihrem bisherigen Fortschritt hinzugefügt. Der Verlauf ist eine Aufzeichnung der Aktivitäten und keine zweite Bibliothek. Er füllt sich also von selbst, wenn Sie die App verwenden."],
      ["Filtern und Sortieren", "Grenzen Sie die Liste auf heute, diese Woche oder diesen Monat ein, wechseln Sie zwischen einer Liste und einem Raster und sortieren Sie nach Datum oder Titel. Diese verändern das Gezeigte und nichts anderes."],
      ["Zurück zu einer Serie", "Tippen Sie auf einen Eintrag, um die Serie dort wieder zu öffnen, wo Sie sie verlassen haben. Die Geschichte ist der schnellste Weg zurück zu etwas, das Sie einmal probiert und beiseite gelegt haben."],
      ["Inkognito und Privatsphäre", "Während der Inkognito-Modus aktiviert ist, wird nichts Neues aufgezeichnet, sodass nichts, was Sie öffnen, im Verlauf angezeigt wird. Durch Ausschalten wird die Aufnahme ab diesem Punkt fortgesetzt."],
      ["Verlauf löschen", "Sie können den Verlauf löschen, ohne Ihre Bibliothek oder Ihren gespeicherten Fortschritt zu berühren. Durch das Löschen wird nur die Aufzeichnung dessen entfernt, was Sie geöffnet haben."],
      ["Wenn die Geschichte falsch aussieht", "Ein Eintrag, der als „Ungesehen“ angezeigt wird, bedeutet normalerweise, dass die Quelle die Adresse der Episode geändert hat, sodass die App sie als neu behandelt. Durch Entfernen des verirrten Eintrags und Aktualisieren der Serie wird alles aufgeräumt."],
    ],
    facts: [
      "Der Verlauf zeichnet Aktivitäten auf, er ersetzt nicht Ihre Bibliothek.",
      "Filter schränken die Ansicht ein, ohne etwas zu löschen.",
      "Der Inkognito-Modus verhindert, dass neue Geschichte geschrieben wird.",
      "Durch das Löschen des Verlaufs bleibt Ihr Fortschritt unberührt.",
    ]
  },

  calendar: {
    title: "Was wird veröffentlicht und wann.",
    body: "Der Kalender zeigt kommende Kapitel und Episoden aus Ihrer Bibliothek an, sodass Sie auf einen Blick sehen können, was heute fällig ist und was später kommt.",
    subsections: [
      ["Die Monatsansicht", "Tage mit Veröffentlichungen werden markiert und durch Tippen auf einen Tag springen Sie zur Liste dieses Datums. Es beantwortet das, was diese Woche herauskommt, ohne eine einzige Serie zu eröffnen."],
      ["Der Wochenplan", "Der Zeitplan sieht eine Woche mit dem Cover jeder kommenden Veröffentlichung vor, was sich besser liest als ein dichtes Monatsraster auf einem Telefon."],
      ["Filtern nach Status", "Zeigen Sie nur die Status an, die Sie interessieren, damit abgeschlossene und pausierte Serien die Ansicht, die Sie zum Planen der Woche verwenden, nicht überladen."],
      ["Was die Daten bedeuten", "Ein Datum ist der Zeitpunkt, an dem die Quelle zuletzt gesagt hat, dass etwas erwartet wird, kein Versprechen. Quellen, die keine Daten veröffentlichen, werden einfach nicht angezeigt."],
      ["Zeigt beobachtete Einträge an", "Eine Option markiert, was Sie bereits im Zeitplan gesehen haben, sodass eine Wochenansicht gleichzeitig als Checkliste dient."],
      ["Wenn der Kalender leer ist", "Ein leerer Kalender bedeutet normalerweise, dass die Quellen, denen Sie folgen, keine Veröffentlichungstermine veröffentlichen. Das ist eine Einschränkung der Quelle, kein Fehler in der App."],
    ],
    facts: [
      "Veröffentlichungsdaten stammen aus den Quellen, nicht aus der App.",
      "Der Zeitplan kann nach Serienstatus gefiltert werden.",
      "Eine Option markiert Einträge, die Sie bereits gesehen haben.",
      "Eine Quelle ohne Datum wird überhaupt nicht angezeigt.",
    ]
  },

  "mass-migration": {
    title: "Viele Serien gleichzeitig verschieben.",
    body: "Wenn eine Quelle ausfällt, verschiebt die Massenmigration eine ganze Gruppe von Bibliothekseinträgen in einem Durchgang in eine funktionierende Quelle, anstatt sie einzeln zu bearbeiten.",
    subsections: [
      ["Wann sollte man es verwenden?", "Bei einer Massenmigration handelt es sich um eine Quelle, die nicht mehr funktioniert oder von der Sie sich entfernen möchten. Durch die Migration bleiben Ihr Fortschritt und Ihre Kategorien erhalten."],
      ["Quelle und Ziel auswählen", "Wählen Sie die Gruppe der zu verschiebenden Einträge und die Quelle aus, in die sie verschoben werden sollen. Die App sucht für jeden Titel selbstständig nach dem Ziel."],
      ["Überprüfung der Spiele", "Jede Übereinstimmung wird angezeigt, bevor sich etwas ändert, sodass Sie die guten akzeptieren und die falschen überspringen können. Die Zuordnung nach Titel ist nie perfekt."],
      ["Anwenden der Änderung", "Beim Anwenden wird jeder Eintrag so umgeschrieben, dass er auf die neue Quelle verweist, und Ihr Fortschritt wird übertragen. Serien ohne Übereinstimmung bleiben unberührt."],
      ["Lesen Sie die Zusammenfassung", "Der Lauf endet mit der Zählung dessen, was verschoben wurde, was übersprungen wurde und was fehlgeschlagen ist. Ein fehlgeschlagener Artikel ist normalerweise ein Titel, den das Ziel nicht trägt."],
      ["Wenn nichts passt", "Wenn die meisten Titel nicht übereinstimmen, ist das Ziel schlecht geeignet und eine andere Quelle ist die bessere Antwort. Durch das Anhalten geht nichts verloren, denn Änderungen erfolgen erst, wenn Sie sich bewerben."],
    ],
    facts: [
      "Bei der Massenmigration wird eine Gruppe von Einträgen in einem Durchgang verschoben.",
      "Jedes Spiel wird überprüft, bevor etwas geändert wird.",
      "Ihre Fortschritte und Kategorien werden übernommen.",
      "Es ändert sich nichts, bis Sie die Ergebnisse anwenden.",
    ]
  },

  statistics: {
    title: "Ihre Bibliothek in Zahlen.",
    body: "Statistiken fassen zusammen, was Sie gesehen und gelesen haben: Gesamtzahlen, aufgewendete Zeit, Statusaufschlüsselung und die Genres, zu denen Sie am häufigsten zurückkehren.",
    subsections: [
      ["Was wird gezählt", "Gesamtwerte pro Medientyp, die Anzahl der Kapitel oder Episoden, die aufgewendete Zeit und die Aufteilung Ihrer Bibliothek auf verschiedene Status."],
      ["Zeit und Aktivität", "Die Zeitkarte schätzt, wie viel Zeit Sie mit Schauen und Lesen verbracht haben, und das Aktivitätsdiagramm zeigt, wie sich diese Zeit auf die letzten Wochen verteilt."],
      ["Top-Genres", "Die Genres, mit denen Sie tatsächlich Zeit verbringen, sind oft nicht diejenigen, die Sie erraten würden. Dies ist eine gute Möglichkeit, eine neue Serie in einer Reihe zu finden, die Ihnen bereits gefällt."],
      ["Pro Medientyp", "Die Statistiken werden nach Medientyp aufgeteilt, sodass Anime- und Manga-Gesamtzahlen niemals miteinander vermischt werden."],
      ["Woher die Zahlen kommen", "Alles wird aus Ihrer eigenen Bibliothek und dem Verlauf auf dem Gerät berechnet. Es wird nirgends etwas hochgeladen."],
      ["Wenn es heißt, es liegen keine Daten vor", "Eine brandneue Installation hat noch nichts zusammenzufassen. Die Zahlen erscheinen, sobald Sie etwas gesehen oder gelesen haben und es aufgezeichnet wurde."],
    ],
    facts: [
      "Statistiken werden auf dem Gerät aus Ihren eigenen Daten berechnet.",
      "Die Summen werden für jeden Medientyp separat geführt.",
      "Das Aktivitätsdiagramm zeigt, wie sich das Lesen und Ansehen im Laufe der Zeit ausbreitet.",
      "Bei einer Neuinstallation werden keine Daten angezeigt, bis etwas aufgezeichnet wird.",
    ]
  },

  anime: {
    title: "Anime schauen, mit Überspringen des Intros.",
    body: "Anime wird im Videoplayer mit einem Extra geöffnet: Intro und Ende werden übersprungen, unterstützt von AniSkip, wenn ein Titel gefunden werden kann.",
    subsections: [
      ["Der Anime-Spieler", "Episoden werden im selben Player wie alles andere abgespielt, mit Qualität, Ton, Untertiteln und Geschwindigkeit in den üblichen Blättern."],
      ["Überspringen von Intros und Endings", "Wenn das Intro übersprungen ist, zählt ein Knopf während des Anfangs herunter und springt daran vorbei, und das Ende wird auf die gleiche Weise gehandhabt. Da es sich um eine Einstellung handelt, kann sie deaktiviert werden."],
      ["Warum ein Titel nicht zugeordnet werden kann", "Beim Überspringen müssen die Serie und die Episode identifiziert werden. Ein Titel, der nicht identifiziert werden kann, wird einfach ohne die Taste abgespielt, anstatt zu scheitern."],
      ["Das Zeitlimit für das Überspringen", "Ein kurzer Countdown gibt Ihnen Zeit zum Abbrechen, bevor der Sprung erfolgt. Die Länge ist konfigurierbar, wenn die Standardeinstellung überstürzt wirkt."],
      ["Anime entdecken", "Ein Entdeckungsbildschirm bietet empfohlene, beliebte, kommende, kürzlich aktualisierte und am besten bewertete Listen sowie Genrezeilen, sodass Sie etwas finden können, ohne eine Quelle öffnen zu müssen."],
      ["Wenn die Erkennung einen Fehler anzeigt", "Die Erkennungszeilen stammen von einem externen Dienst und nicht von Ihren Quellen. Wenn dieser Dienst nicht erreichbar ist, ist der Rest der App davon nicht betroffen und eine Quelle funktioniert weiterhin normal."],
    ],
    facts: [
      "Beim Überspringen von Intros müssen die Serie und die Episode identifiziert werden.",
      "Das Überspringen ist eine Einstellung und kann deaktiviert werden.",
      "Die Länge des Sprung-Countdowns ist konfigurierbar.",
      "Discovery nutzt einen externen Dienst; Quellen funktionieren trotzdem.",
    ]
  },

  music: {
    title: "Musik, mit eigener Bibliothek.",
    body: "Watchtower spielt Musik aus Musikerweiterungen und aus Ihrer eigenen Sammlung ab, mit Alben, Künstlern, Liedtexten und Scrobbeln an einem Ort.",
    subsections: [
      ["Woher die Musik kommt", "Musikerweiterungen stellen Titel und Sammlungen bereit, und eine lokale Bibliothek umfasst Dateien, die Sie bereits besitzen. Beide verhalten sich wie normale Quellen."],
      ["Alben und Künstler", "Musik wird sowohl nach Album und Interpret als auch nach Titel durchsucht, wodurch eine Musikbibliothek anstelle einer langen Dateiliste nutzbar ist."],
      ["Der Spieler", "Eine Warteschlange mit Zufallswiedergabe und Wiederholung, ein aktuelles Spielblatt und ein Cover. Die Wiedergabe wird fortgesetzt, während Sie sich in der App bewegen."],
      ["Text", "Titel, die Liedtexte enthalten, werden in einem Blatt angezeigt, und synchronisierte Liedtexte folgen der Position des Titels, an der die Quelle das Timing bereitstellt."],
      ["Scrobbeln", "Durch die Verbindung von Last.fm wird aufgezeichnet, was Sie mit Ihrem Profil abspielen, und das Tracking zeichnet auch auf, was Sie ansehen."],
      ["Wenn ein Titel nicht abgespielt wird", "Eine Musikquelle, die nicht mehr funktioniert, verhält sich wie jede andere defekte Quelle. Aktualisieren Sie die Erweiterung und gehen Sie davon aus, dass eine dienstbasierte Quelle nicht verfügbar ist, während dieser Dienst ausgefallen ist."],
    ],
    facts: [
      "Musik stammt aus Erweiterungen oder aus Dateien, die Sie bereits besitzen.",
      "Alben und Künstler sind erstklassig, nicht nur Titel.",
      "Das Scrobbeln von Last.fm ist verfügbar, wenn Sie es anschließen.",
      "Der Liedtext folgt dem Titel, wenn die Quelle das Timing vorgibt.",
    ]
  },

  novels: {
    title: "Romane lesen und sich vorlesen lassen.",
    body: "Romane werden in einem Text-Reader statt im Bild-Reader geöffnet, mit Themen, Fortschritt und optionaler Vorlesestimme.",
    subsections: [
      ["Wie Romane beginnen", "Eine Quelle, die neuartige Inhalte deklariert, wird automatisch im Textreader geöffnet, sodass Sie den richtigen Reader nie manuell auswählen müssen."],
      ["Lesekomfort", "Schriftgröße, Zeilenabstand und Thema sind anpassbar, da eine Textwand nicht das gleiche Leseerlebnis bietet wie eine Seite mit Bildern."],
      ["Erinnere dich an deinen Platz", "Der Roman-Reader verfolgt Ihre Position in jedem Kapitel und bringt Sie dorthin zurück, genau wie der Bild-Reader."],
      ["Vorlesen", "Text-to-Speech kann ein Kapitel mithilfe der auf Ihrem Gerät installierten Stimmen vorlesen, was beim Pendeln oder bei anderen Tätigkeiten nützlich ist."],
      ["Wenn ein Kapitel leer ist", "Ein Romankapitel, das leer beginnt, stammt normalerweise aus einer Quelle, die Text in einer Form zurückgibt, die der Leser nicht zeigen kann. Das Aktualisieren der Erweiterung ist der erste Versuch."],
      ["Romane versus Manga", "Ein Roman besteht aus Text und ein Manga aus Bildern. Daher muss eine Quelle den richtigen Typ angeben, damit der Inhalt korrekt geöffnet wird. Ein falscher Typ sendet es an den falschen Leser."],
    ],
    facts: [
      "Romane werden in einem Textreader geöffnet, ausgewählt nach Inhaltstyp.",
      "Schriftart, Abstand und Thema sind anpassbar.",
      "Beim Vorlesen werden die auf Ihrem Gerät installierten Stimmen verwendet.",
      "Ein leeres Kapitel bedeutet normalerweise, dass die Quelle unbrauchbaren Text zurückgegeben hat.",
    ]
  },

  games: {
    title: "Spiele als eine andere Art von Quelle.",
    body: "Watchtower kann Spiele über Spielerweiterungen und Plattformen auflisten und dabei die gleiche Suchfunktion verwenden, die Sie bereits kennen.",
    subsections: [
      ["Was für eine Spielquelle ist", "Eine Spieleerweiterung listet Titel auf die gleiche Weise auf wie eine Manga-Erweiterung Serien auflistet und öffnet dieselben Durchsuchungs- und Suchbildschirme."],
      ["Plattformen", "Spiele werden nach Plattform gruppiert, sodass ein Katalog navigierbar bleibt, wenn eine Quelle viele Systeme abdeckt."],
      ["Stöbern und suchen", "Durchsuchen Sie Fans in aktivierten Spielquellen genau wie bei den anderen Medientypen, sodass eine Abfrage alle abdeckt."],
      ["Spielerweiterungen installieren", "Sie werden aus denselben Repositorys wie alles andere installiert und erscheinen nach der Installation unter „Spiele“."],
      ["Wenn nichts aufgeführt ist", "Ein leerer Spielebildschirm bedeutet, dass keine Spielerweiterung installiert ist. Fügen Sie ein Repository hinzu, das eines bereitstellt, und aktualisieren Sie es dann."],
      ["Halten Sie es getrennt", "Spieleeinträge vermischen sich nicht mit Ihrem Lesen und Anschauen, sodass ein großer Spielekatalog Ihre Bibliothek nie überfüllt."],
    ],
    facts: [
      "Spielquellen werden aus denselben Repositorys installiert wie alles andere.",
      "Spiele sind nach Plattform gruppiert.",
      "Die Suche deckt alle aktivierten Spielquellen gleichzeitig ab.",
      "Spieleinträge bleiben von Ihrer Bibliothek getrennt.",
    ]
  },
};

export default de;
