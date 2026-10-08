// Italian prose overlay. Code blocks and markers come from en.js.
const it = {
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