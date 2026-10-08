// Italian prose overlay. Code blocks and markers come from en.js.
const it = {
  overview: {
    title: "Una mappa completa dell’app Watchtower.",
    body: "Watchtower unisce un client Flutter, librerie locali, estensioni JavaScript, binding nativi e un server headless opzionale in un unico runtime auto-ospitabile.",
    subsections: [
      ["Cos’è Watchtower", "Un hub multimediale multipiattaforma per anime, manga, serie, musica, romanzi e giochi. Indicizza file locali, segue i progressi, scarica contenuti ed esegue sorgenti della community tramite un runtime JavaScript estendibile."],
      ["Due runtime, un contratto", "L’app installata espone un server HTTP incorporato sulla porta 4567. La CLI headless riusa lo stesso motore Flutter e QuickJS per eseguire sorgenti in CI, server e SSH senza sessione grafica."],
      ["A chi è rivolta questa guida", "Agli autori di sorgenti che scrivono estensioni, a chi ospita il server headless e ai contributori del client Flutter. Ogni sezione indica cosa è obbligatorio e cosa è opzionale."]
    ],
    facts: [
      "Client Flutter multipiattaforma per anime, manga, musica, romanzi, giochi e riproduzione.",
      "Indicizzatore locale, libreria, cronologia, preferiti, calendario e tracciamento dei progressi.",
      "Estensioni QuickJS, download, anti-bot, binding Rust e il server torrent in Go."
    ]
  },
  "app-map": {
    title: "Un’app fatta di superfici componibili.",
    body: "Il repository separa schermate, servizi dati e runtime di esecuzione. Questa mappa segue il contenuto da una sorgente alla riproduzione e alla libreria locale.",
    subsections: [
      ["Flusso del contenuto", "Un’estensione restituisce modelli condivisi. I provider Riverpod li paginano, le schermate li trasformano in schede e Isar salva cronologia, preferiti e file indicizzati."],
      ["Routing", "GoRouter collega onboarding, home, ricerca, dettagli, riproduzione, librerie, impostazioni e moduli specialistici senza accoppiare i contratti delle sorgenti."],
      ["Runtime", "Flutter possiede l’interfaccia, QuickJS/Dart esegue le sorgenti, Rust e Go forniscono capacità native e la CLI headless replica il runtime lato server."],
      ["Stato e archiviazione", "Riverpod guida l’app principale, Isar è il database primario e Hive conserva le preferenze. I moduli musica e file browser mantengono le loro pile legacy, isolate dai contratti delle sorgenti."]
    ],
    facts: [
      "I moduli UI sono raggruppati per dominio multimediale, non per provider.",
      "I servizi trasversali gestiscono cache, download, anti-bot, sincronizzazione e diagnostica.",
      "Le schermate funzionano con una sorgente remota, un file locale o il server headless."
    ]
  },
  "content-types": {
    title: "Manga, watch, musica: un modello condiviso.",
    body: "ItemType classifica le famiglie di sorgenti; il contenuto concreto resta nei modelli manga, capitolo, pagina, video e traccia. Un’estensione watch copre quindi anime, film o serie senza un nuovo renderer nativo.",
    subsections: [
      ["Manga", "I capitoli usano getPageList(url) per produrre le pagine del lettore. I metadati condividono nome, immagine, descrizione, autore, artista e generi."],
      ["Watch: anime, film, serie", "Gli episodi usano getVideoList(url). I video portano URL, qualità, URL originale, header, sottotitoli e tracce audio. Film/serie/anime sono metadati di contenuto, non runtime separati."],
      ["Musica e romanzo", "La musica riusa le superfici di ricerca e dettaglio con tracce, album, artisti e playlist; i romanzi usano dettaglio, capitoli e un lettore HTML/testo."],
      ["Giochi e plugin", "Game offre una superficie di scoperta dedicata. Plugin rappresenta estensioni di utilità o download che usano manifest e schema UI nativo."]
    ],
    facts: [
      "La compatibilità deriva da contratti di dati, non da una schermata codificata per sito.",
      "Filtri, preferenze, commenti, consigli e liste personalizzate sono opzionali.",
      "Il campo itemType è salvato in Source e sceglie libreria, player e cronologia."
    ]
  },
  "extension-runtime": {
    title: "Il JavaScript gira in un runtime controllato.",
    body: "DartExtensionService carica il codice, inietta MProvider e lo esegue in QuickJS. I bridge espongono rete, DOM, estrattori, preferenze e modelli Flutter senza esporre l’app nativa.",
    subsections: [
      ["Caricamento", "SourceCodeLanguage distingue Dart, JavaScript e Mihon. Il loader installa o rimuove anche estensioni private Android tramite il canale nativo."],
      ["Sicurezza e isolamento", "Le chiamate alle sorgenti passano per bridge controllati. Il server headless aggiunge registro, cache, autenticazione e rate limiting prima dell’esecuzione."],
      ["Ciclo di vita", "Una sorgente viene scoperta nel catalogo, installata o attivata, eseguita su richiesta, e preferenze, cookie, cache e layout si possono reimpostare dalle sue impostazioni."],
      ["Gestione degli errori", "Una chiamata di bridge fallita restituisce un errore tipizzato a Dart invece di far cadere l’isolate. I fallimenti sono registrati con l’operazione e l’URL colpevole, così la diagnostica indica il passo esatto."]
    ],
    facts: [
      "QuickJS restituisce oggetti serializzati ai modelli Dart.",
      "Il codice dell’estensione può definire header, filtri, preferenze e liste personalizzate.",
      "La compatibilità Mihon consente di riusare estensioni manga esistenti."
    ]
  },
  "extension-types": {
    title: "Ogni famiglia di estensioni ha la sua superficie.",
    body: "Il tipo di sorgente sceglie schermate e azioni disponibili. Lo stesso motore JS è condiviso, mentre i risultati vengono renderizzati nel lettore manga, nel player watch, nell’audio, nel romanzo, nel gioco o nel plugin.",
    subsections: [
      ["Manga", "Sorgenti di capitoli e pagine con filtri di catalogo, cronologia di lettura e importazione locale."],
      ["Watch", "Sorgenti video per anime, film e serie: dettagli, episodi, qualità, sottotitoli, tracce audio ed estrattori di player."],
      ["Musica", "Sorgenti di catalogo audio ed estensioni di metadati: album, artisti, tracce, ricerca, playlist e statistiche."],
      ["Romanzo, gioco, plugin", "I romanzi riusano il lettore testo/HTML; i giochi hanno schermate di scoperta; i plugin di utilità seguono manifest.json e ui/schema.json."]
    ],
    facts: [
      "Watch è una famiglia d’uso: il suo itemType può essere anime o un’altra sorgente video compatibile.",
      "Il renderer generico usa le stesse schede, paginazione e layout per le sorgenti compatibili.",
      "Le capacità opzionali evitano di mostrare un’azione che la sorgente non implementa."
    ]
  },
  "extension-contract": {
    title: "Il contratto JS, metodo per metodo.",
    body: "ExtensionService definisce il minimo condiviso. I metodi opzionali arricchiscono l’esperienza senza rompere una sorgente che non li implementa.",
    subsections: [
      ["Navigazione del catalogo", "getPopular, getLatestUpdates e search restituiscono MPages con list e hasNextPage. I filtri vengono da getFilterList e le preferenze sono salvate per sorgente."],
      ["Dettaglio e riproduzione", "getDetail restituisce MManga. Una sorgente manga espone getPageList; una sorgente watch espone getVideoList e può fornire qualità, header, sottotitoli e audio."],
      ["Estensioni del contratto", "getCustomList abilita sezioni home dichiarate per id; consigli, commenti, suggerimenti, account, preferiti e abbonamento restano opzionali con default vuoti sicuri."],
      ["Semantica dei fallimenti", "Restituisci un MPages vuoto invece di lanciare un’eccezione quando una pagina non ha elementi. Quando una richiesta fallisce davvero, lascia salire l’errore così l’interfaccia mostra un retry e la diagnostica registra la causa."]
    ],
    facts: [
      "Gli URL restano identificatori di navigazione tra catalogo, dettaglio e riproduzione.",
      "Header e baseUrl sono forniti dalla sorgente e si possono personalizzare.",
      "Gli errori sono registrati in Dart e nel runtime headless per la diagnostica."
    ]
  },
  "ui-schema": {
    title: "Il manifest descrive il contratto.",
    body: "Per estensioni UI e script ZeusDL, manifest.json dichiara identità, permessi e runtime. Lo schema descrive campi, azioni e output renderizzati nativamente da Flutter.",
    subsections: [
      ["Campi del manifest", "manifest.json porta identità, versione, autore, permessi di rete e requisiti binari. L’id è una stringa reverse-DNS come en.example-tool."],
      ["Contratto UI nativo", "Il contratto UI renderizza campi URL/testo, selettori, toggle e azioni senza WebView: caricamento rapido e funzionamento offline."],
      ["Protocollo di output ZeusDL", "Gli script comunicano via stdout con righe PROGRESS, STATUS, DONE e ERROR. Watchtower le trasmette al log in tempo reale."],
      ["Errori di validazione", "Un manifest che non supera la validazione dello schema è rifiutato prima dell’installazione. Il marketplace mostra il campo esatto che ha fallito invece di un messaggio generico."]
    ],
    facts: [
      "manifest.json porta identità, versione, autore, permessi di rete e requisiti binari.",
      "Il contratto UI renderizza campi URL/testo, selettori, toggle e azioni senza WebView.",
      "Gli script ZeusDL comunicano via stdout con PROGRESS, STATUS, DONE ed ERROR."
    ]
  },
  layouts: {
    title: "ui-layouts.json controlla ordine e forma.",
    body: "Un’estensione può pubblicare un layout dichiarativo. Watchtower lo scarica da watchtower-extensions, lo interpreta come UiLayout, lo mette in cache per sorgente e lascia che Flutter mappi i componenti su widget nativi.",
    subsections: [
      ["Radice e cache", "schemaVersion e home.sections sono il minimo utile. browse, detail e player sono opzionali. LayoutDownloader legge Source.uiLayout da raw.githubusercontent.com, poi LayoutRegistry salva layouts/<source.id>.json."],
      ["Sezioni home", "id identifica getCustomList(id, page). component accetta spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed e masonry, più le presentazioni curate del registro componenti."],
      ["Parametri visivi", "title, icon e accent danno forma all’intestazione. columns, rows, cardStyle, gridOrder e scrollDirection sono suggerimenti di rendering. seeAll apre la pagina completa, paginated attiva il caricamento a pagine e requiresAuth protegge una sezione con login."],
      ["Browse, detail, player", "Browse descrive popular/latest/search con component, columns, cardStyle, results e filters. Detail accetta hero, episodeList e showRecommendations. Player accetta standard o feed."],
      ["Layout non validi", "Un componente sconosciuto ricade sul renderer a griglia ed è registrato. Un file malformato lascia la sorgente sulla home standard Popular/Latest/Search invece di rompere l’intera schermata."]
    ],
    facts: [
      "Senza layout, la sorgente torna alla home standard Popular/Latest/Search.",
      "Il bridge toLegacyMap mantiene compatibili le schermate home esistenti.",
      "Un layout si ricarica dopo installazione o aggiornamento e si rimuove alla disinstallazione."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen è una superficie controllabile.",
    body: "La pagina Watch compone hero, cronologia, categorie, righe e catalogo dalla sorgente corrente. I layout JSON possono sostituire le liste standard mantenendo le interazioni native.",
    subsections: [
      ["Ordine e hero", "L’hero usa i primi cinque elementi banner (con popular come riserva), ruota ogni 7 secondi e punta a un rapporto orizzontale larghezza × 0,62. Riproduci apre il dettaglio, Info apre il bottom sheet e La mia lista alterna il preferito Isar."],
      ["Cronologia", "Continua a guardare legge la cronologia Isar della sorgente, deduplica per manga, limita a 12 schede e mostra miniatura, episodio/capitolo e progresso."],
      ["Catalogo e ricerca", "La griglia del catalogo pagina Popular o una lista personalizzata. La ricerca usa debounce di 250 ms, suggerimenti flottanti, azioni microfono/X e conferma i risultati solo all’invio."],
      ["Prestazioni", "La app bar osserva lo scroll con ValueNotifier; l’hero vive nel CustomScrollView, quindi il contenuto non lo copre e lo scroll evita un setState completo."],
      ["Stati vuoti e di errore", "Una sezione vuota viene nascosta. Una sezione fallita mostra una scheda di retry con l’errore grezzo, e un blocco Cloudflare porta al pannello di bypass invece di un vicolo cieco."]
    ],
    facts: [
      "Le categorie sono schede 132×72 con immagine, gradiente e bordo.",
      "Le sezioni vengono nascoste quando i dati sono vuoti.",
      "Le azioni delle sorgenti restano coerenti tra manga, anime, film e serie."
    ]
  },
  "home-widgets": {
    title: "I widget sono adattatori di dati.",
    body: "WatchtowerHomeScreen è la home globale dell’app. Combina i feed AniList e TMDB con la libreria locale e guida le righe tramite tab multimediali.",
    subsections: [
      ["Home multimediale", "I tab Tutto, Film, Serie, Musica, Anime, Asia, Bambini, Occidentale, Africa, TV breve, Calcio e Giochi scelgono sezioni ed hero visibili."],
      ["Schede", "DiscoveryCard ha varianti standard, ranked, landscape, featured, saga e spotlight. EpisodeCard aggiunge miniatura, titolo episodio, durata e barra di progresso per riprendere."],
      ["Dati", "AniList alimenta anime e contenuti editoriali; TMDB alimenta film e serie; libreria locale e provider completano le liste utente."],
      ["Watch contro home globale", "WatchtowerHomeScreen è la home globale; WatchHomeScreen è la home di una sorgente/estensione. La prima aggrega cataloghi, la seconda renderizza il contratto di una sorgente."]
    ],
    facts: [
      "I widget non conoscono gli URL dei provider: consumano modelli normalizzati.",
      "Gli stati skeleton, vuoto, caricamento ed errore fanno parte della superficie home.",
      "I layout delle estensioni mirano soprattutto a WatchHomeScreen e alle schermate browse/detail/player."
    ]
  },
  api: {
    title: "Due runtime, una API.",
    body: "Il server incorporato Dart/shelf ascolta su 4567 nell’app. La CLI headless riusa le stesse operazioni per CI, Docker, Railway o Render.",
    subsections: [
      ["Endpoint", "Ping, scoperta sorgenti, catalogo, dettaglio, video, pagine e filtri rispecchiano il contratto ExtensionService. Le rotte library, history e proxy servono il database locale e i media."],
      ["Autenticazione", "GET /api/ping resta pubblico e restituisce la versione del server. Le altre rotte passano per autenticazione, rate limiting e registro delle estensioni."],
      ["Risposte di errore", "Un fallimento restituisce un corpo JSON con operazione e messaggio invece di un 500 vuoto. Un errore di sorgente mantiene lo stato HTTP, così il client distingue un blocco da un bug."],
      ["Filtro NSFW", "Le sorgenti NSFW sono filtrate dagli elenchi e bloccate con 403 in accesso diretto."]
    ],
    facts: [
      "GET /api/ping è pubblico e restituisce la versione del server.",
      "Le altre rotte passano per autenticazione, rate limiting e registro delle estensioni.",
      "Le sorgenti NSFW sono filtrate dagli elenchi e bloccate con 403 in accesso diretto."
    ]
  },
  downloads: {
    title: "I download usano motori selezionabili.",
    body: "Watch, manga e romanzo hanno ciascuno il proprio tab download. Un motore per media, la concorrenza e le regole Wi-Fi guidano la coda, e ogni scheda espone azioni rapide.",
    subsections: [
      ["Scelta del motore", "HYDRA è il motore HLS interno, ZEUS è ZeusDL, ARES è Aria2 ed Esterno passa il link ad ADM o IDM. Scegliere il motore sbagliato per uno stream protetto è un errore comune."],
      ["Concorrenza", "Ogni tab imposta connessioni simultanee (1–20) ed elementi in coda simultanei (1–10). Valori alti accelerano ma consumano più banda e possono attivare i limiti della sorgente."],
      ["Archivio e pulizia", "I capitoli manga si archiviano come cartella, CBZ, CBR, CB7 o ZIP. L’eliminazione automatica dopo la lettura rimuove un capitolo marcato come letto, opzionalmente inclusi quelli con segnalibro."],
      ["Errori di download", "Un download fallito conserva i file parziali e offre Riprova. 403/429 indicano spesso un rate limit o un blocco anti-bot; 5xx punta alla sorgente. Verifica il link nel browser prima di cambiare impostazioni."]
    ],
    facts: [
      "Le regole solo Wi-Fi possono bloccare un download finché non c’è una rete Wi-Fi.",
      "Gli aggiornamenti intelligenti aggiungono automaticamente nuovi episodi o capitoli.",
      "La coda di download mostra fino a cinque pulsanti di azione rapida per scheda."
    ]
  },
  trackers: {
    title: "I progressi si sincronizzano con servizi esterni.",
    body: "Watchtower si collega ad AniList, Kitsu, MyAnimeList, Simkl e Trakt per mantenere i progressi di visione e lettura sincronizzati tra dispositivi.",
    subsections: [
      ["Tracker supportati", "AniList, Kitsu, MyAnimeList, Simkl e Trakt. Ognuno ha il suo flusso di login e modello di stato, normalizzati in un modello Track condiviso."],
      ["Collegamento e sincronizzazione", "Una voce di libreria può essere collegata a una voce del tracker. Progressi, stato e voto sono inviati all’aggiornamento, e gli aggiornamenti intelligenti possono recuperare il prossimo episodio o capitolo."],
      ["Errori dei tracker", "Token scaduto, app revocata o rate limit producono messaggi distinti. Riautenticati da Impostazioni › Tracciamento; una voce errata si può scollegare e ricollegare."],
      ["Migrazione", "Il flusso di migrazione di massa sposta le voci di libreria tra sorgenti preservando i collegamenti ai tracker, per non perdere i progressi quando una sorgente muore."]
    ],
    facts: [
      "Le integrazioni dei tracker sono in lib/services/trackers.",
      "Gestisci i tracker da Impostazioni › Tracciamento.",
      "La migrazione di massa preserva i collegamenti ai tracker al cambio di sorgente."
    ]
  },
  "getting-started": {
    title: "Compilare l’app Flutter",
    body: "Installa le toolchain, scarica i pacchetti Dart e avvia il client multipiattaforma.",
    subsections: [
      ["Requisiti", "Flutter 3.38+ / Dart 3.10+, Rust per i binding flutter_rust_bridge, Java 17 per Android e Go 1.21+ se ricompili il client torrent."],
      ["Piattaforme", "Windows, Linux, macOS, iOS, Android e Web sono obiettivi del progetto. Alcune funzioni native degradano con eleganza sul Web."],
      ["Verificare l’installazione", "Esegui l’analizzatore prima della prima modifica: dart format --output=none --set-exit-if-changed lib e flutter analyze --no-pub. Il comando CLI doctor indica se il motore nativo e QuickJS sono disponibili."],
      ["Errori di build comuni", "Una toolchain Rust mancante rompe i binding. Un SDK Flutter vecchio rompe la risoluzione pub. Un Java 17 mancante rompe la build Android. Sistema la toolchain prima di toccare il codice."]
    ],
    facts: [
      "Requisiti: Flutter 3.38+, Dart 3.10+, Rust e Java 17 per Android.",
      "Il progetto punta a Windows, Linux, macOS, iOS, Android e Web.",
      "La CLI headless esce dal workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Incorporato o headless.",
    body: "La CLI headless gira con o senza Docker. Le rotte private usano X-Api-Key o Authorization Bearer quando API_KEY è attiva, mentre l’app mantiene la sua modalità incorporata.",
    subsections: [
      ["Docker", "Docker Compose è la via consigliata per un server riproducibile. L’immagine pubblicata è su GHCR."],
      ["Altri host", "Railway, Render, un VPS e Docker puro sono documentati nel repository. Il server mantiene lo stesso contratto di sorgente dell’app."],
      ["Variabili d’ambiente", "API_KEY protegge le rotte private. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR e RATE_MAX_TOKENS controllano cache, persistenza e rate limiting."],
      ["Errori di deploy", "Un container che esce subito di solito ha API_KEY mancante o un conflitto di porta. Controlla i log, verifica che la porta sia libera e il percorso del repo estensioni prima di riavviare."]
    ],
    facts: [
      "Docker Compose è la via consigliata per un server riproducibile; l’immagine è su GHCR.",
      "I deploy su Railway, Render, VPS e Docker sono documentati nel repository.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR e RATE_MAX_TOKENS controllano il server."
    ]
  },
  troubleshooting: {
    title: "Risoluzione dei problemi",
    body: "Un problema con una sorgente o con l’app? Segui la checklist, leggi l’errore esatto e lancia una diagnostica prima di cambiare impostazioni.",
    subsections: [
      ["Diagnosi primaria", "Aggiorna estensioni e app, ricarica l’elemento che fallisce, prova un altro elemento della stessa sorgente, apri il sito nel browser, cambia rete, svuota cache e cookie e riavvia l’app. Se un passo risolve, la causa è locale."],
      ["Leggere l’errore", "Watchtower mostra l’errore grezzo, non un messaggio generico. Copialo: nome dell’operazione e URL che fallisce indicano il passo esatto. La diagnostica delle estensioni registra popular, latest, detail e media separatamente."],
      ["Errori HTTP", "403 Forbidden: anti-bot o ban dell’IP. 404 Not Found: contenuto rimosso o sorgente morta. 429 Too Many Requests: rate limit temporaneo. 5xx: il server della sorgente è giù. 1006/1020: ban dell’IP o regola firewall."],
      ["Personale o diffuso", "Se riguarda solo te, sospetta Cloudflare, un ban dell’IP o un rate limit, e riduci i download da quella sorgente. Se riguarda tutti, controlla gli issue tracker di estensione e app."],
      ["Problemi di installazione", "Un’estensione che non si installa spesso fallisce la validazione dello schema o scarica un file corrotto. Riscaricala e verifica id e versione del manifest."]
    ],
    facts: [
      "Aggiorna prima le estensioni: la maggior parte delle rotture si risolve con un aggiornamento.",
      "La schermata di diagnostica separa i passi popular, latest, detail e media.",
      "Nessun ETA per le correzioni delle estensioni; una sorgente rotta può richiedere pazienza."
    ]
  },
  cloudflare: {
    title: "Cloudflare e anti-bot",
    body: "Alcune sorgenti stanno dietro Cloudflare. Watchtower segnala una challenge solo quando la risposta porta prove reali, e offre una WebView di bypass che apre l’URL esatto che ha fallito.",
    subsections: [
      ["Cosa conta come challenge", "Un semplice 403/503, un timeout o la parola challenge non sono Cloudflare. Watchtower richiede marcatori CDN, una pagina di challenge interattiva o una pagina di blocco prima di mostrare l’interfaccia anti-bot."],
      ["Superare una challenge", "La WebView di bypass apre l’URL esatto che ha fallito, mai la radice del sito. Risolvi il CAPTCHA una volta e riprova la sorgente."],
      ["Cambiare user agent", "Lo user agent influenza il rilevamento dei bot. Cambia il valore predefinito nelle impostazioni Avanzate, riavvia l’app e riprova. Prova più browser e sistemi."],
      ["Cookie e cache", "Svuotare i cookie reimposta un login o uno stato di challenge. Svuotare i dati WebView riparte da zero. Entrambi sono nelle impostazioni Avanzate."],
      ["Se fallisce ancora", "La sorgente potrebbe aver alzato la protezione. Aspetta, o passa a un’altra sorgente per lo stesso contenuto."]
    ],
    facts: [
      "Cloudflare è segnalato solo con prove reali nella risposta.",
      "La WebView di bypass apre l’URL che ha fallito, non la radice del sito.",
      "Un fallimento personale di solito è un blocco o un rate limit, non un bug."
    ]
  },
  cli: {
    title: "CLI headless",
    body: "La build Linux contiene lo stesso runtime delle estensioni dell’app desktop e gira senza X11 o Wayland, per CI, server e SSH.",
    subsections: [
      ["Comandi", "doctor sonda il motore nativo e QuickJS. extensions list e test caricano un repo locale. source esegue una singola operazione ExtensionService. plugins validate ispeziona il catalogo plugin."],
      ["Modalità di test", "load verifica che una sorgente si carichi ed esponga filtri, preferenze e header. smoke chiama anche popular, latest, search, suggerimenti, dettagli e l’operazione media. deep aggiunge la pagina due e probe HTTP."],
      ["Filtri", "Filtra per lingua, NSFW/SFW, motore, tag, query, id o tipo. Una directory di lingua come src/watch/fr prevale su un campo lang obsoleto nell’indice."],
      ["Codici di uscita ed errori", "0 è successo, 1 è un controllo di salute, test o validazione fallito, e 2 è uso non valido o errore di operazione non gestito. Report e stdout oscurano credenziali e parametri URL firmati."],
      ["Limiti noti", "I comandi library, history, progress, coda di download e tracker non sono ancora disponibili: l’entry point headless non apre gli store Isar/Hive."]
    ],
    facts: [
      "doctor --json indica se motore nativo e QuickJS sono disponibili.",
      "smoke esegue popular, latest, search, dettagli e l’operazione media.",
      "L’output oscura credenziali comuni e parametri URL firmati."
    ]
  }
};

export default it;