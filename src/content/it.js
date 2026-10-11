// it prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const it = {
  "getting-started": {
    title: "Watchtower tra dieci minuti.",
    body: "Watchtower è un'app per anime, serie, manga, romanzi e musica. Viene spedito vuoto apposta: scegli le fonti e tutto ciò che guardi o leggi rimane sul tuo dispositivo.",
    subsections: [
      ["Di cosa hai bisogno", "Un telefono o tablet Android 8.0 o successivo per l'app completa. Qualsiasi macchina Linux, macOS o Windows può invece eseguire la riga di comando headless, senza sessione grafica. Una cosa non è facoltativa: un URL del repository di origine, perché Watchtower non contiene contenuti propri."],
      ["Aggiungi la tua prima fonte", "Apri Altro, quindi Estensioni, quindi Repository. Incolla un URL del repository che termina con index.min.json e conferma. L'elenco delle estensioni si riempie non appena viene caricato l'indice."],
      ["Installa le estensioni", "Ogni estensione insegna a Watchtower un sito web. Tocca Installa accanto a quelli desiderati, consenti l'installazione da fonti sconosciute se Android lo richiede e le fonti verranno visualizzate in Sfoglia."],
      ["Costruisci la tua libreria", "Apri una fonte, trova una serie e tocca Aggiungi alla libreria. Da quel momento in poi Watchtower tiene traccia dei tuoi progressi, controlla la presenza di nuovi capitoli e conserva la voce in un unico posto."],
      ["Scegli i tuoi tipi di media", "Watchtower gestisce manga, anime, romanzi e musica fianco a fianco. Ogni tipo si apre nel proprio lettore o player, scelto automaticamente da ciò che dichiara l'estensione."],
      ["Sorprese comuni alla prima esecuzione", "Una schermata Sfoglia vuota significa che non è ancora installata alcuna estensione, non un'app danneggiata. Un repository che non viene caricato è solitamente un URL obsoleto o un portale di rete captive."],
      ["Se la prima schermata sembra vuota", "Un elenco di navigazione vuoto significa che non è ancora installata alcuna estensione, non un'app danneggiata. Se un repository non viene caricato, controlla che il suo indirizzo termini con index.min.json, quindi riprova su un'altra rete prima di dare per scontato che sia sparito."],
    ],
    facts: [
      "Watchtower viene fornito senza contenuto. Le fonti sono tue.",
      "Le estensioni sono normali JavaScript eseguiti in una sandbox.",
      "La tua biblioteca risiede sul tuo dispositivo, non su un server Watchtower.",
      "Android 8.0+ è la base per l'app mobile.",
      "Un elenco di ricerca vuoto indica che non è installata alcuna estensione, non si tratta di un errore.",
    ]
  },
  installation: {
    title: "Installa la build che corrisponde al tuo dispositivo.",
    body: "Esistono tre modi per eseguire Watchtower: l'app Android, una build desktop o una riga di comando Linux per i server. Condividono un motore, quindi una fonte che funziona in uno funziona in tutti.",
    subsections: [
      ["Androide", "L'obiettivo principale e l'unica build che ottiene per prima ogni funzionalità. Scarica l'APK di versione o un APK di anteprima se desideri testare il lavoro imminente. Abilita l'installazione da fonti sconosciute quando Android lo richiede, perché Watchtower non è distribuito tramite uno store."],
      ["Desktop", "Esistono build Windows, Linux e macOS per la visione su uno schermo più grande. Costruiscili dal codice sorgente con Flutter, poiché gli artefatti di rilascio vengono pubblicati prima per Android e Linux CLI."],
      ["Riga di comando di Linux", "Un singolo binario senza finestra. Funziona con lo stesso motore di estensione, quindi può recuperare, cercare e scaricare su un server o tramite SSH. Lo script di installazione lo copia insieme ai relativi file di runtime in un prefisso scelto."],
      ["Stabile o anteprima", "Le build di anteprima tengono traccia del codice più recente e si interrompono più spesso. Mantieni attivi i backup automatici se ne esegui uno e prevedi di reinstallare la build di rilascio se qualcosa va storto."],
      ["Costruire dalla fonte", "Sono necessari Flutter 3.38 o versione successiva, Dart 3.10 o versione successiva e una toolchain Rust. Go 1.21 o versione successiva è necessario solo se desideri ricostruire tu stesso il server torrent."],
      ["Tienilo aggiornato", "Watchtower ti dice quando esiste una nuova versione e tu la installi nello stesso modo della prima volta. La tua libreria e le tue impostazioni rimangono intatte."],
      ["Se l'installazione fallisce", "Ciascuno dei messaggi comuni del programma di installazione viene spiegato nella pagina degli errori. Una mancata corrispondenza della firma significa che una copia firmata in modo diverso è già installata e deve essere prima rimossa, un download danneggiato deve essere recuperato di nuovo e una mancata corrispondenza dell'architettura del processore significa che è stata scaricata la build sbagliata."],
    ],
    facts: [
      "Android è l'unica piattaforma con build di rilascio pubblicate.",
      "Il binario senza testa è creato per Linux x86_64.",
      "Rust è necessario per costruire dal sorgente; Andare è facoltativo.",
      "Le installazioni di anteprima e stabili condividono gli stessi dati, quindi il passaggio mantiene la tua libreria.",
      "Rimuovi un'installazione in conflitto prima di sostituirla con una build firmata in modo diverso.",
    ]
  },
  "adding-sources": {
    title: "Da dove provengono i tuoi contenuti.",
    body: "Watchtower ha due tipi di fonti. Le fonti online arrivano come estensioni da un repository che aggiungi. Le origini offline sono cartelle sul tuo dispositivo. La maggior parte delle persone li usa entrambi.",
    subsections: [
      ["Aggiungi un archivio", "Vai su Altro, quindi Estensioni, quindi Repository e incolla l'URL del repository. L'app recupera l'indice ed elenca tutte le estensioni in esso contenute. Puoi aggiungere più repository contemporaneamente."],
      ["Installa ciò di cui hai bisogno", "Aggiorna l'elenco, quindi tocca Installa accanto a un'estensione. Android potrebbe richiedere l'autorizzazione per installare app sconosciute la prima volta. Le estensioni installate vengono visualizzate immediatamente in Sfoglia."],
      ["Mantieni le fonti fresche", "Aggiorna un repository ogni volta che desideri versioni di estensioni più recenti. Un aggiornamento sostituisce l'estensione e ne mantiene le impostazioni, quindi non c'è nulla da riconfigurare."],
      ["Usa i tuoi file", "Punta Watchtower su una cartella di manga o anime che già possiedi e diventerà una fonte normale. Nessun repository, nessuna rete, nessun account."],
      ["Fidati solo di ciò che sai", "Un repository può servire qualsiasi cosa e un'estensione viene eseguita con lo stesso accesso dell'app. Tratta un repository sconosciuto nello stesso modo in cui tratteresti un programma di installazione sconosciuto."],
      ["Quando un repository fallisce", "Un URL che non viene caricato è solitamente scaduto, bloccato o copiato senza il percorso dell'indice. Controlla che l'indirizzo termini con index.min.json prima di dare per scontato che il repository sia scomparso."],
      ["Quando un repository si rifiuta di caricarsi", "Un repository che non si carica è solitamente un indirizzo scaduto, un percorso che non termina con index.min.json o una rete che lo blocca. Conferma l'indirizzo, quindi prova una rete diversa prima di rimuoverla."],
    ],
    facts: [
      "Un repository è solo un file JSON ospitato su un server web.",
      "Gli aggiornamenti mantengono le tue preferenze di origine.",
      "Le cartelle locali funzionano senza rete.",
      "Watchtower non controlla né approva repository di terze parti.",
      "Un repository che non si carica solitamente ha un indirizzo errato o scaduto.",
    ]
  },
  library: {
    title: "Tutto quello che segui, in un unico posto.",
    body: "La biblioteca è la casa di tutto ciò che conservi. Ricorda dove ti sei fermato, raggruppa le serie in scaffali ed è il punto di partenza per aggiornamenti e download.",
    subsections: [
      ["Aggiunta e rimozione", "Apri qualsiasi serie e tocca Aggiungi alla libreria. Rimuovilo dallo stesso posto e la serie smetterà di essere aggiornata senza perdere la cronologia di lettura."],
      ["Categorie", "Le categorie sono gli scaffali della tua libreria. Una serie può essere composta da più serie contemporaneamente, ed è così che separi ciò che segui settimanalmente da ciò a cui potresti arrivare un giorno."],
      ["Progressi", "Watchtower ricorda l'esatto episodio o capitolo che hai raggiunto, per voce, e carica i progressi su un tracker quando ne hai uno connesso."],
      ["Filtri e ordinamento", "Nascondi ciò che hai finito, mostra solo ciò che è stato scaricato o ordina in base all'ultima pubblicazione di una serie. I filtri sono di sola visualizzazione e non eliminano mai nulla."],
      ["Diversi dispositivi", "Non esiste una sincronizzazione integrata tra i dispositivi. Sposta la tua libreria con un file di backup e mantieni i download separati, poiché non fanno parte di un backup."],
      ["Quando una voce si interrompe", "Se una serie si apre vuota o perde la copertina, la sua fonte è cambiata sotto di essa. Aggiorna la voce e migrala su un'altra origine se il problema persiste."],
      ["Quando una voce non verrà aggiornata o aperta", "Se una serie non si apre, la sua origine è cambiata sotto di essa. Aggiorna prima la voce e, se il problema persiste, migrala su un'altra origine. Un aggiornamento che non restituisce nulla significa che non è aggiornata l'estensione e non l'app."],
    ],
    facts: [
      "Le serie completate vengono lasciate sole dagli aggiornamenti in background.",
      "Una serie può appartenere a più di una categoria.",
      "I progressi vengono monitorati per capitolo o episodio, non per serie.",
      "La rimozione di una serie dalla libreria non elimina la cronologia.",
      "L'aggiornamento risolve la maggior parte delle voci non funzionanti; la migrazione risolve il resto.",
    ]
  },
  browse: {
    title: "Trovare qualcosa da guardare o leggere.",
    body: "Sfoglia è il luogo in cui esplori ciò che offre una fonte e li effettui tutti contemporaneamente. È il modo più veloce per rispondere alla domanda su chi ha questo titolo.",
    subsections: [
      ["Esplorazione di una fonte", "Apri una fonte per visualizzare gli elenchi Popolari e Ultimi. La maggior parte delle fonti espongono anche filtri per genere, anno o stato, che appaiono nella parte superiore dell'elenco."],
      ["Cercando ovunque", "L'azione di ricerca interroga in parallelo ogni fonte abilitata e raggruppa i risultati per fonte, così puoi vedere a colpo d'occhio chi ha il titolo e chi no."],
      ["Quando un titolo non verrà visualizzato", "Le fonti spesso indicizzano il titolo in lingua originale piuttosto che quello in inglese. Prova il nome nativo, l'ortografia romanizzata o un suo frammento più breve."],
      ["Muoversi tra le fonti", "Se una fonte rallenta o smette di funzionare, migra la voce invece di aggiungerla nuovamente. Watchtower corrisponde alla serie sulla nuova fonte e trasporta i tuoi progressi e le tue categorie."],
      ["Filtraggio per lingua", "Le estensioni sono contrassegnate con la lingua che servono. Nascondi quelli che non puoi leggere in modo che i risultati della ricerca e gli elenchi rimangano pertinenti."],
      ["Perché i risultati differiscono", "Ciascuna fonte indicizza il proprio catalogo, quindi un titolo può essere completo in una e parziale in un'altra. Confrontare due fonti prima di impegnarsi è normale."],
      ["Quando la ricerca non restituisce nulla", "Una ricerca vuota è solitamente una mancata corrispondenza del titolo piuttosto che una fonte non funzionante. Prova il nome nella lingua originale, un'ortografia romanizzata o un frammento più breve e ricorda che una fonte che non risponde non ferma le altre."],
    ],
    facts: [
      "Cerca i fan in ogni fonte abilitata contemporaneamente.",
      "Le fonti senza un elenco popolare funzionano ancora tramite la ricerca.",
      "La migrazione sposta i tuoi progressi, non i file scaricati.",
      "I tag della lingua dell'estensione guidano il filtro della lingua.",
      "Una ricerca vuota è solitamente una mancata corrispondenza del titolo, non una fonte morta.",
    ]
  },
  extensions: {
    title: "Le estensioni sono il modo in cui Watchtower raggiunge il web.",
    body: "Un'estensione è un piccolo programma che insegna a Watchtower un sito web: come elencarlo, cercarlo, leggerlo e riprodurlo. Tutto ciò che navighi arriva tramite un'estensione.",
    subsections: [
      ["Cos'è un'estensione", "È JavaScript, non un plugin compilato. Sa come chiedere a un sito Web i suoi elenchi, i suoi risultati di ricerca, i suoi capitoli e i suoi flussi video e risponde nella forma comprensibile a Watchtower."],
      ["Come ti raggiungono", "Le estensioni sono raggruppate in repository. Aggiungi un repository una volta e ogni estensione che contiene diventa installabile dalla schermata delle estensioni."],
      ["Tipi di contenuto", "Un'estensione dichiara a cosa serve: manga, anime, romanzo, musica o gioco. Quella dichiarazione decide quale lettore o lettore si apre quando tocchi un risultato."],
      ["Aggiornamenti e rimozione", "Le estensioni si aggiornano e mantengono le loro impostazioni. La disinstallazione di uno rimuove solo l'estensione; le voci della tua libreria sopravvivono e aspettano semplicemente che una fonte le serva di nuovo."],
      ["Perché dovrebbe interessarti chi l'ha realizzato", "Un'estensione viene eseguita all'interno di Watchtower ma può raggiungere la rete e leggere ciò che gli dai. Installa da repository di cui ti fidi e sii cauto con tutto ciò che non ti è familiare."],
      ["Quando un'estensione smette di funzionare", "I siti web cambiano e una fonte rompe con loro. Di solito si tratta di un'estensione danneggiata, non di un'app danneggiata, e la correzione arriva come aggiornamento."],
      ["Quando un'installazione o un aggiornamento non riesce", "Un'installazione non riuscita è quasi sempre Android che blocca app sconosciute e un aggiornamento non riuscito è un download interrotto parzialmente. Consenti installazioni dal file manager o dal browser, quindi riprova e reinstalla da zero se il file è stato troncato."],
    ],
    facts: [
      "Le estensioni sono JavaScript, eseguite in una sandbox all'interno dell'app.",
      "Un'estensione copre un sito web.",
      "L'installazione e l'aggiornamento non toccano mai la tua libreria.",
      "Una fonte che improvvisamente fallisce è solitamente una modifica del sito web.",
      "Un'installazione non riuscita è solitamente Android, non l'estensione.",
    ]
  },
  "extensions-catalogue": {
    title: "Scegliere e mantenere le fonti.",
    body: "La schermata delle estensioni è il tuo catalogo: cosa è installato, cosa è disponibile e cosa non è aggiornato. Qui è dove mantieni sano il tuo elenco di fonti.",
    subsections: [
      ["Installato e disponibile", "Le estensioni installate funzionano immediatamente. Quelli disponibili provengono da un repository che hai aggiunto: aggiorna l'elenco, quindi installa quelli che desideri con un solo tocco."],
      ["Aggiornamento di un'estensione", "Quando esiste una versione più recente, viene visualizzata sotto gli aggiornamenti. L'installazione sostituisce la vecchia copia e mantiene le sue preferenze, quindi una correzione non ti costa nulla."],
      ["Rimozione di un'estensione", "Disinstallarlo dalla stessa schermata. Le voci della libreria rimangono inserite e vengono semplicemente visualizzate come non disponibili finché un'altra fonte o una reinstallazione non possono servirle."],
      ["Mantenere l'elenco leggibile", "Le estensioni sono raggruppate per lingua. Filtra le lingue che non leggi in modo che l'elenco mostri solo le fonti che ti sono effettivamente utili."],
      ["Quando non si installa nulla", "Un'installazione non riuscita è quasi sempre Android che blocca le app sconosciute, non l'estensione. Consenti installazioni dal file manager o dal browser, quindi riprova."],
      ["Mantenere aggiornato il catalogo", "Aggiorna i tuoi repository ogni tanto. Vengono visualizzate nuove estensioni e quelle danneggiate vengono riparate, ma non arriva nulla finché non lo chiedi."],
      ["Quando un'estensione scompare", "Un'estensione installata può scomparire se Android la rimuove o se viene nascosta dal filtro della lingua o dall'interruttore dei contenuti per adulti. Controlla prima i filtri, quindi reinstallalo dal repository se è davvero sparito."],
    ],
    facts: [
      "Gli aggiornamenti preservano le impostazioni configurate su una fonte.",
      "La disinstallazione di un'estensione mantiene le voci della libreria.",
      "Le estensioni sono raggruppate per lingua, non per repository.",
      "L'aggiornamento di un repository è il modo in cui vedi le estensioni nuove e aggiornate.",
      "Un'estensione mancante viene solitamente nascosta da un filtro, non disinstallata.",
    ]
  },
  "extensions-devkit": {
    title: "Costruisci la tua fonte.",
    body: "Se desideri aggiungere un sito web che nessuno ha ancora coperto, puoi scrivere tu stesso un'estensione. È necessario un file che descriva il sito e un file che implementi le chiamate.",
    subsections: [
      ["Cosa devi scrivere", "Due file: un manifest che nomina l'estensione e ne dichiara la lingua e il tipo di contenuto, e un file di ingresso con le chiamate che recuperano elenchi, ricerca, dettagli, capitoli e pagine."],
      ["Inizia da una fonte esistente", "Il percorso più veloce è copiare un'estensione funzionante per un sito simile e modificare gli URL e l'analisi. La forma delle chiamate rimane la stessa."],
      ["Test senza l'app", "La riga di comando può eseguire una singola chiamata e stampare esattamente ciò che è tornato indietro. È molto più veloce che installare l'estensione su un dispositivo ogni volta che cambi linea."],
      ["Cosa può utilizzare il tuo codice", "Richieste, un parser HTML e un parser JSON. Non è possibile accedere ai file, né al database e non c'è modo di raggiungere le schermate dell'app."],
      ["Quando l'output sembra sbagliato", "Se un campo è vuoto, la causa è quasi sempre il parser anziché il runtime. Confronta ciò che restituisci con ciò che si aspetta il contratto di origine."],
      ["Prima di pubblicare", "Esegui l'estensione sul sito live, controlla la ricerca, l'elenco e le chiamate alle pagine e conferma che il tipo di contenuto è corretto in modo che si apra nel lettore o nel player giusto."],
      ["Quando una chiamata non restituisce nulla", "Un risultato vuoto è quasi sempre un selettore che non corrisponde più al sito piuttosto che un errore di runtime. Recupera la pagina, confronta i tuoi selettori con il markup corrente e testa la singola chiamata dalla riga di comando prima di ricostruire l'app."],
    ],
    facts: [
      "Un'origine funzionante necessita solo di un manifest e di un file di voci.",
      "La riga di comando può testare una chiamata isolatamente.",
      "Le estensioni possono raggiungere la rete e analizzare le pagine, niente di più.",
      "Il tipo di contenuto che dichiari decide quale lettore o lettore si apre.",
      "Un risultato vuoto è solitamente un selettore che non corrisponde più.",
    ]
  },
  "extensions-publishing": {
    title: "Condividere una fonte con altre persone.",
    body: "Una volta che la tua estensione funziona, pubblicarla significa inserirla in un repository che altri possono aggiungere. Un repository è un piccolo file JSON più i pacchetti di estensioni che elenca.",
    subsections: [
      ["Cos'è un deposito", "Una cartella di pacchetti di estensioni e un indice JSON che li elenca. Ospita la cartella ovunque che serva HTTPS e fornisci alle persone l'indirizzo del file indice."],
      ["Pubblicazione di un aggiornamento", "Aumenta il numero di versione, ricostruisci il pacchetto e aggiorna la versione nell'indice. Watchtower confronta quel numero, quindi una versione invariata è un aggiornamento che nessuno riceve."],
      ["Mantenere il nome stabile", "Il nome del pacchetto è l'identità dell'estensione. Cambialo e gli utenti riceveranno una seconda estensione separata invece di un aggiornamento alla prima."],
      ["Sii chiaro riguardo alla fiducia", "Le persone che installano dal tuo repository eseguono il tuo codice con l'accesso dell'app. Dì chi sei e mantieni il repository da qualche parte sotto il tuo controllo."],
      ["Mantenere una fonte", "I siti Web cambiano senza preavviso, quindi aspettati di ripubblicarli. Controlla i rapporti secondo cui una fonte ha smesso di funzionare e risolvi il problema prima che gli utenti si allontanino."],
      ["L'indirizzo dell'indice è importante", "L'indirizzo che distribuisci deve puntare a index.min.json. Qualsiasi altro percorso lascia le persone a fissare un repository che si rifiuta di caricarsi."],
      ["Quando gli utenti non ricevono il tuo aggiornamento", "La causa più comune è un numero di versione nell'indice che non è cambiato oppure un indirizzo di repository che punta a una posizione diversa dal file di indice. Aumenta la versione, conferma l'indirizzo e verifica che il file sia raggiungibile tramite HTTPS."],
    ],
    facts: [
      "Un repository è una cartella HTTPS più un indice JSON.",
      "La versione nell'indice è ciò che indica agli utenti che esiste un aggiornamento.",
      "Un nome di pacchetto stabile è ciò che rende un aggiornamento un aggiornamento.",
      "Aspettatevi di ripubblicare ogni volta che cambia il sito web di destinazione.",
      "Un aggiornamento che nessuno riceve solitamente è un numero di versione invariato.",
    ]
  },
  "local-source": {
    title: "Leggere e riprodurre i propri file.",
    body: "Watchtower può trattare una cartella sul tuo dispositivo come una normale fonte. La tua collezione si comporta quindi esattamente come quella online, completa di monitoraggio dei progressi.",
    subsections: [
      ["Manga e romanzi", "Inserisci una cartella per serie nella cartella locale e un file per capitolo al suo interno. I capitoli possono essere archivi CBZ o semplici cartelle di immagini e il nome della cartella diventa il titolo della serie."],
      ["Anime", "Inserisci una cartella per serie nella cartella anime locale e un file video per episodio al suo interno. Gli episodi sono ordinati per nome file, quindi numerali."],
      ["Copertine e dettagli", "Un'immagine di copertina nella cartella della serie diventa la miniatura. Un file di dettagli accanto può aggiungere autore, artista, descrizione e generi quando il nome della cartella non è sufficiente."],
      ["Aggiunta di nuovi file", "Sposta i file dall'esterno dell'app, quindi aggiorna l'origine locale in modo che Watchtower effettui nuovamente la scansione della cartella. I file aggiunti mentre l'app è chiusa non vengono notati finché non lo fai tu."],
      ["Lettura offline", "Le fonti locali non entrano mai in contatto con la rete, quindi funzionano in modalità aereo e non possono essere bloccate o limitate in termini di velocità. I download e i file locali si comportano allo stesso modo una volta sul disco."],
      ["Nascondere i file dalla galleria", "Rilascia un file .nomedia nella cartella in modo che copertine ed episodi rimangano fuori dall'app fotografica del tuo telefono."],
      ["Quando le copertine sono vuote o mancano i file", "Una copertina vuota o una serie che non si apre quasi sempre significa che la struttura della cartella è sbagliata. Controlla che ci sia una cartella per serie e un file per capitolo o episodio, quindi rimuovi la voce, cancella il database per gli elementi esterni alla libreria e lascia che la fonte locale esegua nuovamente la scansione della cartella."],
    ],
    facts: [
      "Sia gli archivi CBZ che le cartelle di immagini semplici vengono letti come capitoli.",
      "L'ordine degli episodi segue il nome del file, quindi numera i file.",
      "Un file .nomedia mantiene i media locali fuori dalla galleria di sistema.",
      "Le fonti locali funzionano senza alcuna connessione di rete.",
      "Una struttura di cartelle errata è la causa più comune di una copertina vuota.",
    ]
  },
  "video-player": {
    title: "Guardando un episodio.",
    body: "Il lettore copre il video con gesti e fogli, quindi nulla lascia lo schermo mentre lo guardi. Qualità, audio, sottotitoli e velocità sono tutti a portata di tocco.",
    subsections: [
      ["Controlli di base", "Tocca una volta per visualizzare i controlli, tocca due volte un lato per saltare avanti o indietro e premi a lungo per accelerare. Pizzica per ingrandire quando il video ha spazio libero."],
      ["Qualità e audio", "Le fonti che offrono diverse risoluzioni o tracce audio le espongono in fogli che scorrono verso l'alto senza interrompere la riproduzione. La tua scelta sarà ricordata per la serie."],
      ["Sottotitoli", "Le tracce dei sottotitoli provengono dalla fonte o da un file fornito. Vengono scelti e regolati dalla scheda dei sottotitoli e il loro aspetto viene impostato una volta nelle impostazioni."],
      ["Episodi e statistiche", "Un pannello laterale elenca ogni episodio in modo che tu possa spostarti da un punto all'altro, e un altro mostra cosa sta effettivamente facendo il giocatore con lo streaming quando qualcosa sembra strano."],
      ["Quando il giocatore interno fatica", "Un codec raro o uno streaming interrotto possono essere consegnati a un lettore esterno come mpv o VLC. Questo è il ripiego affidabile, non un segno che l'episodio sia inutilizzabile."],
      ["Salvataggio del tuo posto", "I progressi vengono scritti continuamente mentre guardi, quindi chiudere l'app o perdere energia non fa perdere la posizione."],
      ["Quando un video non verrà riprodotto", "Uno streaming che rifiuta di avviarsi è spesso un codec che il lettore interno non è in grado di gestire o un collegamento scaduto. Passa prima a un lettore esterno come mpv o VLC, quindi aggiorna l'estensione se ogni episodio da quella fonte fallisce."],
    ],
    facts: [
      "Per impostazione predefinita, la riproduzione utilizza un decoder con accelerazione hardware.",
      "I gesti gestiscono la luminosità, il volume e la ricerca.",
      "I progressi vengono salvati continuamente, non solo quando esci.",
      "Un lettore esterno è il fallback per i codec non supportati.",
      "Consegnare un flusso ostinato a un giocatore esterno è il fallback affidabile.",
    ]
  },
  "player-settings": {
    title: "Modellare il giocatore attorno alle tue abitudini.",
    body: "Le impostazioni del lettore decidono come viene decodificato il video, cosa fanno i gesti e quali pulsanti si trovano sul lettore. Cambiateli una volta e ogni episodio segue.",
    subsections: [
      ["Decodifica", "La decodifica hardware è più veloce e leggera grazie alla batteria e si adatta a quasi tutto. Passa al software quando un particolare file viene riprodotto male, poiché la decodifica software è più tollerante nei confronti di codec insoliti."],
      ["Gesti", "Decidi quale scorrimento fa cosa: verticale per luminosità e volume, orizzontale per ricerca. Ogni direzione può essere invertita se ti sembra al contrario."],
      ["Pulsanti personalizzati", "Aggiungi le azioni che preferisci, come saltare un'introduzione o fare uno screenshot, direttamente sulla superficie del giocatore in modo che non siano più sepolte nei menu."],
      ["Riproduzione avanzata", "La dimensione del buffer, le proporzioni forzate e l'immagine nell'immagine sono qui per il raro caso in cui il comportamento automatico non è quello che desideri. La maggior parte delle persone non ha mai bisogno di toccarli."],
      ["Eccezioni per serie", "Quasi tutte le impostazioni del giocatore possono essere sovrascritte per una singola serie senza modificare le impostazioni predefinite per tutto il resto. Utile per uno spettacolo con audio strano."],
      ["Dopo un backup delle impostazioni", "I pulsanti personalizzati e le preferenze del lettore viaggiano nel tuo file di backup, quindi il ripristino su un nuovo dispositivo porta con sé il layout del lettore."],
    ],
    facts: [
      "La decodifica hardware è l'impostazione predefinita e si adatta alla maggior parte dei file.",
      "Ogni direzione del gesto può essere invertita o disattivata.",
      "Le impostazioni possono essere sovrascritte per una singola serie.",
      "Le preferenze del giocatore sono incluse in un backup.",
    ]
  },
  subtitles: {
    title: "Rendere leggibili i sottotitoli.",
    body: "I sottotitoli provengono da tre posizioni: lo streaming, un file sul tuo dispositivo o una fonte che li recupera. Questa pagina illustra la scelta di una traccia, la fissazione dei tempi e lo styling di quelli che Watchtower disegna da solo.",
    subsections: [
      ["Scelta di una traccia", "Quando un episodio contiene più tracce di sottotitoli, queste vengono elencate nella scheda dei sottotitoli. La tua scelta viene ricordata per quella serie, quindi scegli solo una volta."],
      ["Fissare i tempi", "Una traccia che scorre davanti o dietro l'audio può essere spostata a piccoli passi finché non si allinea. L'offset viene ricordato, quindi la correzione sopravvive al riavvio dell'app."],
      ["Stile", "Carattere, dimensione, colore, contorno e sfondo si applicano ai sottotitoli di testo. Queste impostazioni non influiscono sul video e puoi sperimentarle in tutta sicurezza a metà episodio."],
      ["I tuoi file", "Inserisci un file di sottotitoli accanto a un episodio locale con un nome corrispondente e il lettore lo caricherà automaticamente, senza alcuna impostazione da modificare."],
      ["Sottotitoli integrati nell'immagine", "Alcuni sottotitoli sono immagini anziché testo. Non possono essere modificati, ma solo riposizionati o ridimensionati, perché lo stile fa parte dell'immagine stessa."],
      ["Quando i sottotitoli non vengono visualizzati", "Controlla prima il foglio dei sottotitoli: la fonte potrebbe non offrirne nessuno oppure il nome del file potrebbe non corrispondere abbastanza all'episodio da poter essere accoppiato."],
    ],
    facts: [
      "I sottotitoli del testo possono essere rinnovati; i sottotitoli delle immagini non possono.",
      "Gli offset di temporizzazione vengono salvati e sopravvivono al riavvio.",
      "Un file corrispondente accanto a un episodio locale si carica da solo.",
      "Le scelte dei sottotitoli vengono ricordate per serie.",
    ]
  },
  reader: {
    title: "Lettura di manga, webtoons e romanzi.",
    body: "Il lettore gestisce manga a pagine, webtoon verticali e romanzi di testo. Imposti un valore predefinito una volta e lo sovrascrivi per le serie che necessitano di qualcosa di diverso.",
    subsections: [
      ["Scegliere una modalità di lettura", "La modalità paginata si adatta ai manga stampati e la striscia lunga si adatta ai webtoon disegnati come un'unica immagine alta. Imposta un valore predefinito e modificalo per serie quando un titolo si legge meglio nel contrario."],
      ["Girando le pagine", "Tocca i bordi per spostarti avanti o indietro, scorri per scorrere una lunga striscia e pizzica per ingrandire. Toccando il centro si apre il menu senza uscire dalla pagina."],
      ["Riprendendo da dove avevi interrotto", "Watchtower ricorda la pagina che hai raggiunto in ogni capitolo, quindi la riapertura di una serie ti riporta esattamente dove ti eri fermato anziché all'inizio."],
      ["Pagine e pagine larghe", "Le pagine doppie e le scansioni insolitamente ampie possono essere divise, ruotate o ridimensionate in modo che non siano illeggibili su un telefono."],
      ["Capitoli scaricati", "I capitoli scaricati si aprono immediatamente e vengono contrassegnati nell'elenco dei capitoli, il che rende pratica la lettura offline."],
      ["Romanzi", "I romanzi di testo utilizzano la stessa voce nella tua libreria ma si aprono in un lettore di testo invece che in un visualizzatore di immagini, scelto automaticamente dal tipo di contenuto dell'estensione."],
      ["Quando una pagina non verrà caricata", "Occasionalmente l'app non riesce a riconoscere un'immagine in un capitolo. Lasciare il lettore e riaprire il capitolo di solito risolve il problema e, se persiste, l'immagine stessa manca nella fonte anziché nell'app."],
      ["Due pagine contemporaneamente", "Non è disponibile un lettore a doppia pagina, perché le scansioni raramente concordano su dove cade l'interruzione di pagina. Leggere una pagina alla volta o utilizzare una lunga striscia per i webtoon è il comportamento attuale."],
    ],
    facts: [
      "La striscia lunga si adatta ai webtoon verticali e ignora la larghezza della pagina.",
      "Il lettore ricorda la pagina raggiunta per capitolo.",
      "Lo zoom è disattivato in una lunga striscia finché non lo attivi.",
      "I romanzi si aprono in un lettore di testo, non in un lettore di immagini.",
      "La riapertura di un capitolo risolve una pagina che non è stata caricata.",
    ]
  },
  "reader-settings": {
    title: "Impostare la lettura nel modo che preferisci.",
    body: "Le impostazioni del lettore riguardano la direzione di lettura, il modo in cui le pagine vengono ridimensionate e ritagliate e quali parti dello schermo girano pagina.",
    subsections: [
      ["Lettura", "Imposta la modalità predefinita, se le pagine si animano mentre girano e quali capitoli saltare. I capitoli saltati sono ancora lì, semplicemente non ti interrompono."],
      ["Display", "Blocco rotazione, colore di sfondo e schermo intero convivono qui. Uno sfondo scuro è adatto alla lettura notturna e riduce i riflessi tra le pagine."],
      ["Pagine", "Scegli come una pagina riempie lo schermo: adatta la larghezza, l'altezza, l'intero schermo o mostrala nelle sue dimensioni originali. Il ritaglio del bordo ritaglia automaticamente i margini di scansione."],
      ["Tocca le zone", "Scegli dove toccare per far avanzare la pagina, girarla indietro e aprire il menu. L'intero layout può essere specchiato per la lettura con la mano sinistra."],
      ["Striscia lunga", "L'imbottitura laterale e le zone di tocco separate rendono i webtoon alti comodi su uno schermo ampio, dove un'immagine a larghezza intera sarebbe altrimenti troppo piccola."],
      ["Eccezioni per serie", "Ognuno di questi può essere sovrascritto per una serie, il che è utile per un titolo che è stato scansionato in modo insolito o letto nella direzione opposta."],
    ],
    facts: [
      "Le opzioni di scala includono larghezza adatta, altezza adatta, schermo adatta e dimensione originale.",
      "Il ritaglio del bordo rimuove automaticamente i margini di scansione.",
      "Le zone di tocco possono essere specchiate per la lettura con la mano sinistra.",
      "Le regole di salto possono essere sovrascritte per serie.",
    ]
  },
  updates: {
    title: "Mantenere aggiornata la tua libreria.",
    body: "Gli aggiornamenti controllano le tue fonti per nuovi capitoli ed episodi. Fatti bene, ti tengono aggiornato. Fatto con noncuranza, martellano una fonte finché non blocca tutti.",
    subsections: [
      ["Aggiornamento globale", "Viene eseguito su tutta la libreria e segnala le novità. Limitalo alle categorie che segui effettivamente, in modo che le serie lente non vengano controllate ogni giorno per niente."],
      ["Cosa viene saltato", "Le serie che hai terminato, le serie che non hai iniziato e le serie per le quali non è prevista un'uscita vengono saltate automaticamente. Questo è ciò che impedisce a una grande biblioteca di generare un’ondata di richieste."],
      ["Notifiche", "Nuovi capitoli ed episodi generano una notifica, che puoi restringere a una categoria o disattivare completamente senza disattivare gli aggiornamenti."],
      ["Aggiornamento di una serie", "Apri il menu della serie e aggiornalo quando vuoi controllarlo immediatamente, senza eseguire un aggiornamento su tutto il resto."],
      ["Perché questo è importante", "Una fonte che riceve troppe richieste può bloccare l'intera app con protezione anti-bot. Limitare gli aggiornamenti a ciò che segui protegge le fonti da cui tutti dipendono."],
      ["Se gli aggiornamenti sembrano interrompersi", "L'ottimizzazione della batteria Android può sospendere il lavoro in background. Esenta Watchtower dalle restrizioni sulla batteria se gli aggiornamenti arrivano solo quando apri l'app."],
      ["Quando un aggiornamento segnala un errore", "Un aggiornamento che non riesce su una serie è solitamente dovuto a quella fonte piuttosto che all'app. Aggiorna manualmente la serie, aggiorna l'estensione e ricorda che la limitazione della velocità dopo un'esecuzione di aggiornamenti di grandi dimensioni si risolve con il tempo anziché con i nuovi tentativi."],
    ],
    facts: [
      "Gli aggiornamenti possono essere limitati alle categorie scelte.",
      "Le serie completate vengono saltate per impostazione predefinita.",
      "Il traffico di aggiornamenti intenso può ottenere una fonte per bloccare l'app.",
      "L'ottimizzazione della batteria può ritardare gli aggiornamenti in background.",
      "Un aggiornamento non riuscito su una serie punta a quella fonte, non all'app.",
    ]
  },
  downloads: {
    title: "Mettere la tua libreria offline.",
    body: "I download salvano episodi e capitoli sul tuo dispositivo così puoi guardarli o leggerli senza connessione. Vivono in una coda con limiti chiari.",
    subsections: [
      ["Avvio di un download", "Aggiungi capitoli o episodi di una serie e si uniranno alla coda di download. Dalla coda puoi riordinare ciò che verrà dopo o cancellare qualcosa che non desideri più."],
      ["Perché uno alla volta", "Watchtower scarica una serie alla volta da qualsiasi singola fonte. Inviare molte richieste a un sito è esattamente ciò che attiva la protezione anti-bot che blocca le fonti."],
      ["Modalità solo download", "Attivalo per nascondere tutto ciò che non hai salvato. L'app mostra quindi solo ciò che è presente sul tuo dispositivo, il che è utile durante un viaggio o una connessione a consumo."],
      ["Dove sono archiviati i file", "I download arrivano in una cartella che prende il nome dalla fonte, quindi dalla serie. Rinominare una delle cartelle interrompe il rilevamento, quindi lasciale stare."],
      ["Quando i download scompaiono", "Se il contenuto salvato smette di essere visualizzato, probabilmente la cartella di archiviazione è stata spostata o è diventata illeggibile. Controlla la posizione di archiviazione e ricostruisci l'indice dei download."],
      ["Ciò che un backup non copre", "I file di backup contengono la tua libreria e le tue impostazioni, mai i tuoi contenuti multimediali scaricati. Questi devono essere spostati separatamente."],
      ["Quando un download fallisce parzialmente", "Un download interrotto è solitamente una connessione interrotta o una fonte che ha smesso di rispondere. Riprovare dalla coda, poiché vengono conservati file parziali, e passare al Wi-Fi se la causa è la rete. Le risposte persistenti 403 o 429 significano che la fonte ti sta rifiutando, non che il file è sparito."],
    ],
    facts: [
      "Viene scaricata solo una serie per fonte alla volta, apposta.",
      "Il supporto scaricato non è incluso in un backup.",
      "La memoria interna è più veloce e affidabile di una scheda SD.",
      "La ridenominazione della cartella dei download interrompe il rilevamento.",
      "Un download interrotto conserva i file parziali, quindi riprovare lo riprende.",
    ]
  },
  categories: {
    title: "Trasformare una lunga libreria in pochi scaffali.",
    body: "Le categorie raggruppano la tua libreria per stato o gusto e fungono anche da controllo per ciò che viene aggiornato e scaricato automaticamente.",
    subsections: [
      ["Creazione di categorie", "Nominali come preferisci e ordinali come preferisci. La maggior parte delle persone finisce per averne una manciata in base alla frequenza con cui seguono qualcosa."],
      ["Mettendovi delle serie", "Premi a lungo una serie, scegli l'opzione della categoria e seleziona tutto ciò che si applica. Una serie può essere posizionata su più scaffali contemporaneamente."],
      ["Usarli per gli aggiornamenti", "Punta l'aggiornamento globale e i download automatici su categorie specifiche. Solo le serie che segui attivamente generano traffico."],
      ["Tirare fuori una serie", "Deseleziona una categoria nello stesso posto in cui l'hai aggiunta. La serie rimane nella tua libreria, lascia semplicemente quello scaffale."],
      ["Nomi che durano", "Assegna un nome alle categorie in base alle tue abitudini anziché alle fonti. Quindi la migrazione di una serie tra fonti non rimescola mai la tua libreria."],
      ["Mantenerlo semplice", "Le categorie funzionano meglio quando ce ne sono poche. Se non ricordi a cosa serve una categoria, probabilmente sta facendo più male che bene."],
    ],
    facts: [
      "Una serie può appartenere a più categorie contemporaneamente.",
      "L'aggiornamento globale può essere indirizzato a una singola categoria.",
      "I download automatici possono essere limitati alle categorie scelte.",
      "Denominare le categorie in base alle fonti invecchia male.",
    ]
  },
  tracking: {
    title: "Registra ciò che guardi, automaticamente.",
    body: "Il monitoraggio collega Watchtower ai servizi che conservano la tua cronologia. Accedi una volta e i progressi vengono registrati mentre procedi invece di essere digitati manualmente.",
    subsections: [
      ["Quali servizi sono supportati", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori e Bangumi. Sono tutti configurati dalle impostazioni di monitoraggio e puoi collegarne più di uno."],
      ["Accesso", "Apri le impostazioni di monitoraggio e tocca un servizio per avviarne l'accesso. Kitsu è quello che richiede il tuo indirizzo email anziché un nome utente, il che attira le persone."],
      ["Collegamento di una serie", "Apri una serie, vai al monitoraggio e aggiungi il servizio. Watchtower cerca il titolo per te e puoi modificare i termini di ricerca quando corrisponde alla voce sbagliata."],
      ["Quanto conta come guardato", "Una soglia percentuale decide quando un episodio viene contrassegnato come visto. Impostalo a un livello sufficientemente alto in modo che l'interruzione a metà non registri un episodio completo."],
      ["Una sola direzione", "Il progresso va da Watchtower al servizio. La modifica della tua lista sul sito web non cambia nulla nell'app, quindi scegli un posto per gestirla."],
      ["Guardare offline", "I progressi effettuati senza connessione vengono messi in coda e caricati la prossima volta che sei online, quindi un volo non perde la tua cronologia."],
      ["Quando un accesso o una sincronizzazione falliscono", "Un servizio che rifiuta di accedere è solitamente una sessione scaduta o un captcha sul sito del servizio, quindi accedi una volta tramite il sito Web del servizio e riprova. I progressi che non verranno sincronizzati vengono normalmente accodati anziché persi e vengono ritentati quando viene ripristinata la connessione."],
      ["Corrispondenza al titolo sbagliato", "La corrispondenza automatica può selezionare la voce sbagliata quando un titolo è ambiguo. Modifica i termini di ricerca per quella serie nella sezione di monitoraggio e seleziona il risultato corretto, quindi conferma che il progresso riportato è quello desiderato."],
    ],
    facts: [
      "Il monitoraggio viene impostato per serie, non per l'intera biblioteca.",
      "Il progresso scorre solo verso l’esterno, mai verso l’interno.",
      "Una soglia decide quando un episodio conta come visto.",
      "I progressi offline vengono caricati quando ti ricolleghi.",
      "Un accesso non riuscito è solitamente una sessione scaduta sul servizio stesso.",
    ]
  },
  backups: {
    title: "Proteggi la tua libreria prima che qualcosa vada storto.",
    body: "Un backup è un file che contiene la tua libreria, i tuoi progressi e le tue impostazioni. È anche l'unico modo per spostare una libreria tra dispositivi.",
    subsections: [
      ["Realizzarne uno", "Apri le impostazioni di dati e archiviazione, scegli di creare un backup e salvalo in un posto raggiungibile da un altro dispositivo. Fallo prima di qualsiasi aggiornamento di cui non sei sicuro."],
      ["Cosa c'è dentro", "Ogni serie che segui, le categorie in cui si trovano, quanto lontano sei arrivato, i tuoi link di monitoraggio, la tua cronologia, le tue estensioni e tutte le tue impostazioni."],
      ["Ciò che è rimasto fuori", "File scaricati, copertine personalizzate e cronologia di serie che non sono mai state aggiunte alla libreria. Quelli non sono recuperabili da un backup."],
      ["Ripristinarlo", "Importa il file sul nuovo dispositivo, quindi accedi nuovamente ai tuoi tracker e reinstalla le estensioni in modo che tutto possa essere ricollegato in modo pulito."],
      ["Backup automatici", "Imposta una frequenza in modo che esista sempre un backup recente senza che tu lo ricordi. Questa è la migliore protezione contro un aggiornamento errato."],
      ["Passaggio a un nuovo dispositivo", "Esegui il backup, installa sul nuovo dispositivo, ripristina, quindi accedi ai tracker e reinstalla le estensioni. I download devono essere copiati separatamente."],
      ["Quando un ripristino fallisce", "Un ripristino che si interrompe parzialmente è in genere un file di backup troncato o obsoleto oppure una mancata corrispondenza della versione tra il backup e l'app. Ricrea il backup dal dispositivo di origine, conferma il file copiato completamente e ripristina su un'app che sia nuova almeno quanto quella che lo ha creato."],
    ],
    facts: [
      "Un backup è l'unico modo per spostare una libreria tra dispositivi.",
      "I media scaricati devono essere spostati separatamente.",
      "Le copertine personalizzate non fanno parte di un backup.",
      "I backup automatici sono la difesa più sicura contro un aggiornamento errato.",
      "Un ripristino non riuscito è in genere un file di backup troncato o obsoleto.",
    ]
  },
  storage: {
    title: "Dove Watchtower conserva i suoi file.",
    body: "Backup, download e fonti locali risiedono tutti in un'unica posizione di archiviazione. Sceglierlo deliberatamente è ciò che impedisce ai download di svanire in seguito.",
    subsections: [
      ["Il layout della cartella", "Tutto si trova in una cartella a tua scelta: backup automatici, capitoli ed episodi scaricati, i tuoi manga locali, i tuoi anime locali e la configurazione per lettori esterni. Conoscere il layout è ciò che rende facile posizionare un file vagante."],
      ["Scelta di una posizione", "Scegli una cartella che sarai ancora in grado di raggiungere tra un anno. Evita la radice stessa di un volume di archiviazione ed evita di spostare successivamente i file dall'app."],
      ["Autorizzazioni Android", "Il moderno Android mantiene le app nelle proprie directory. Concedi a Watchtower l'accesso alla cartella di archiviazione che hai scelto, altrimenti i download e le fonti locali falliranno silenziosamente."],
      ["Dopo aver spostato i file in", "Sposta i file dall'esterno dell'app e quindi aggiorna, in modo che Watchtower effettui nuovamente la scansione delle cartelle. Altrimenti il ​​nuovo contenuto rimane invisibile finché qualcos'altro non attiva una scansione."],
      ["Mantenere pulita la galleria", "Un file .nomedia nella cartella dei download mantiene le copertine e gli episodi fuori dalla galleria fotografica del tuo telefono."],
      ["Perché la memoria interna è migliore", "I download sulla memoria interna sono più veloci e hanno molte meno probabilità di diventare illeggibili rispetto a quelli su una scheda rimovibile, che può essere smontata o danneggiata."],
      ["Quando l'app non riesce a raggiungere la cartella", "Gli errori di autorizzazione e i download che scompaiono provengono entrambi dallo spostamento della cartella di archiviazione o dal fatto che diventa illeggibile. Verifica che l'app abbia ancora accesso, controlla lo spazio libero e preferisci l'archiviazione interna rispetto a una scheda rimovibile che può essere smontata."],
    ],
    facts: [
      "Backup, download e origini locali condividono una posizione di archiviazione.",
      "Android necessita di un'autorizzazione esplicita per quella cartella.",
      "Un file .nomedia nasconde i media scaricati dalla galleria.",
      "La memoria interna è più affidabile di una scheda SD.",
      "Una cartella di archiviazione spostata o illeggibile nasconde download e backup.",
    ]
  },
  settings: {
    title: "Le impostazioni che modificano il comportamento dell'app.",
    body: "Oltre alle opzioni di ciascuna funzionalità, una manciata di impostazioni a livello di app influiscono sugli aggiornamenti, sulla privacy, sull'installazione e sul modo in cui si ripristina quando qualcosa va storto.",
    subsections: [
      ["Generale", "Tema, lingua dell'interfaccia e comportamento predefinito della libreria. Questi si applicano ovunque contemporaneamente, quindi sono il primo posto in cui cercare quando l'app non sembra la tua."],
      ["Privacy", "Nascondendo lo schermo nel commutatore di app mantieni la tua libreria fuori dalle miniature e la modalità di navigazione in incognito interrompe la registrazione della cronologia durante la navigazione. La navigazione in incognito nasconde ciò che hai guardato, non quanto lontano sei arrivato."],
      ["Rete", "Il DNS crittografato può superare alcuni blocchi di base e vale la pena provarlo quando una fonte non viene caricata su una rete ma funziona su un'altra. Un proxy fa lo stesso lavoro per un'intera rete."],
      ["Installazione delle estensioni", "Android normalmente blocca le installazioni dall'esterno di un negozio. La concessione di tale autorizzazione è ciò che consente l'installazione delle estensioni e Shizuku è un'alternativa per i dispositivi che lo rendono scomodo."],
      ["Diagnostica", "I registri degli arresti anomali, l'acquisizione del logcat e la ricostruzione dell'indice si trovano qui. Qui è dove vai quando qualcosa si comporta male e vuoi prove piuttosto che supposizioni."],
      ["Prima di segnalare un problema", "Prendi nota della versione dell'app, dell'origine che non ha funzionato e di ciò che è stato mostrato sullo schermo. Ciò trasforma un rapporto vago in qualcosa che può effettivamente essere risolto."],
      ["Ripristino di uno stato bloccato", "Svuotare la cache, cancellare cookie e dati web e ricostruire gli indici risolve ciascuno una diversa classe di problema. La cache cancella i dati della pagina non aggiornati, i cookie cancellano una verifica bloccata e una ricostruzione dell'indice esegue nuovamente la scansione della cartella di archiviazione. La cancellazione del database rimuove le serie che non sono nella tua libreria, che è la solita soluzione per una copertina locale vuota."],
      ["L'ultima risorsa che conserva i tuoi dati", "Se non funziona nient'altro, esegui un nuovo backup, quindi reinstalla l'app e ripristinala. Ciò mantiene la libreria e le impostazioni sostituendo tutto ciò che è danneggiato nell'installazione stessa."],
    ],
    facts: [
      "L'impostazione della privacy del commutatore di app deve essere disattivata per acquisire screenshot.",
      "La navigazione in incognito interrompe la registrazione della cronologia, non l'avanzamento.",
      "I registri degli arresti anomali rimangono sul tuo dispositivo e non vengono mai inviati automaticamente.",
      "Il DNS crittografato spesso risolve un'origine che fallisce solo su una rete.",
      "Cache, cookie e indici risolvono ciascuno una diversa classe di problemi.",
      "Esegui il backup prima della reinstallazione, quindi ripristina per conservare la tua libreria.",
    ]
  },
  "extension-runtime": {
    title: "Come vengono eseguite le estensioni e con quanta sicurezza.",
    body: "Le estensioni sono JavaScript e Watchtower le esegue in una sandbox che fornisce loro la rete e nient'altro. Questa pagina spiega cosa significa per te.",
    subsections: [
      ["Cosa gestisce le tue estensioni", "Watchtower utilizza un piccolo motore JavaScript incorporato nell'app. È lo stesso motore su ogni piattaforma, motivo per cui una fonte si comporta in modo identico su un telefono e su un server."],
      ["Cosa è consentita a una proroga", "Può effettuare richieste web, analizzare le pagine che riceve e mantenere alcune delle proprie impostazioni. Questa è l'intera cassetta degli attrezzi."],
      ["Da cosa viene tenuto lontano", "I tuoi file, la tua libreria, i tuoi account e le schermate dell'app. Tutto ciò che produce un'estensione viene restituito come dati semplici per il rendering dell'app."],
      ["Perché una fonte lenta si trascina", "Una fonte che risponde lentamente rallenta i propri schermi, perché l'app la aspetta. Le altre fonti non sono interessate, quindi la lentezza è un segno di una cattiva fonte, non di un'app pesante."],
      ["Cosa significa questo per la fiducia", "La sandbox limita ciò che un'estensione può interrompere, ma non giudica l'intento. Può ancora vedere tutto ciò che digiti e tutto ciò che recupera. Installa da persone di cui ti fidi."],
      ["Stesso motore ovunque", "Poiché l'app e la riga di comando di Linux condividono questo runtime, un'estensione che funziona sul tuo telefono funziona anche su un server, senza modifiche."],
    ],
    facts: [
      "Le estensioni ottengono l'accesso alla rete e l'analisi della pagina, nient'altro.",
      "Non possono leggere direttamente i tuoi file o la tua libreria.",
      "Una sorgente lenta rallenta solo i propri schermi.",
      "La stessa sandbox funziona su dispositivi mobili, desktop e sulla riga di comando.",
    ]
  },
  "extension-contract": {
    title: "Cosa deve fornire una fonte.",
    body: "Affinché un'estensione funzioni, deve rispondere a una serie fissa di domande: cosa è popolare, cosa c'è di nuovo, cosa restituisce una ricerca, cosa contiene una serie e dove si trovano le sue pagine e i suoi flussi.",
    subsections: [
      ["Elenco e ricerca", "Queste chiamate restituiscono gli elenchi sfogliabili: cosa è popolare, cosa è stato rilasciato di recente e cosa risulta dalla ricerca di un termine. Sono il minimo affinché una fonte sia utilizzabile."],
      ["Serie e capitoli", "Una chiamata inserisce i dettagli di una serie e un'altra restituisce i capitoli o gli episodi ordinati. Senza questi, una fonte può essere ricercata ma non aperta."],
      ["Pagine e video", "Per la lettura, una chiamata restituisce gli indirizzi delle immagini di un capitolo. Per i video, una chiamata restituisce i flussi disponibili insieme alla qualità e alle eventuali intestazioni necessarie."],
      ["Extra opzionali", "Filtri, impostazioni specifiche dell'origine e gestione personalizzata delle immagini sono facoltativi. Una fonte senza di essi funziona ancora; offre semplicemente meno da configurare."],
      ["Perché il tipo di contenuto è importante", "Il tipo dichiarato da un'estensione decide se un risultato si apre nel lettore manga, nel lettore video o nel lettore romanzi. Se si sbaglia, il contenuto viene inviato alla schermata sbagliata."],
      ["Cosa non è richiesto", "Tutto oltre l'elenco e la ricerca è un vantaggio. Una fonte minima che elenca e cerca solo è una fonte perfettamente buona."],
    ],
    facts: [
      "L'elenco e la ricerca da soli costituiscono una fonte consultabile.",
      "I dettagli e le chiamate ai capitoli sono ciò che consente l'apertura di una serie.",
      "I filtri e le impostazioni della sorgente sono facoltativi.",
      "Il tipo di contenuto decide quale lettore o lettore si apre.",
    ]
  },
  "ui-schema": {
    title: "Consentire a una sorgente di progettare la propria schermata iniziale.",
    body: "Alcune fonti presentano una prima pagina ricca: banner, file di copertine, un blocco in primo piano. Invece di scrivere il codice dell'app per ciascuna di esse, un'estensione può descrivere il layout stesso.",
    subsections: [
      ["A cosa serve", "Una fonte può descrivere la propria schermata iniziale come dati: righe, schede e banner, ciascuno dei quali punta al contenuto fornito dalla fonte. L'app lo disegna con i suoi normali widget."],
      ["Perché è una buona idea", "Ciò significa che un nuovo sito Web può avere una prima pagina personalizzata senza una nuova versione dell'app e la pagina appare ancora nativa anziché come una pagina Web in una scatola."],
      ["Cosa può essere descritto", "Elenchi, righe, schede, banner e blocchi di testo sono gli elementi costitutivi. Ciò copre in pratica il layout di quasi tutte le schermate iniziali della sorgente."],
      ["Quando una fonte non ne ha", "Se un'estensione non descrive un layout, Watchtower ne crea uno dagli elenchi della fonte. Niente si rompe; la pagina è semplicemente più semplice."],
      ["Cosa non può fare", "La descrizione è costituita da dati, non da codice. Non può eseguire la logica, raggiungere i tuoi file o modificare il comportamento dell'app stessa, motivo per cui è sicuro accettarlo."],
      ["Per le persone che scrivono fonti", "Consideratelo come un file di layout piuttosto che come un programma. Stai dicendo all'app cosa mostrare, non come disegnarlo."],
    ],
    facts: [
      "Una fonte può descrivere la propria schermata iniziale come dati.",
      "I blocchi predefiniti sconosciuti vengono ignorati anziché interrompere la pagina.",
      "Un layout predefinito viene utilizzato quando una fonte non ne fornisce alcuno.",
      "La descrizione non può eseguire codice o raggiungere i tuoi file.",
    ]
  },
  api: {
    title: "Guidare Watchtower da un altro programma.",
    body: "L'app può aprire un piccolo server web sul tuo computer, che consente a script, lettori esterni e altri dispositivi di utilizzare le stesse fonti dell'app.",
    subsections: [
      ["Di cosa si tratta", "Un piccolo server web integrato nell'app. Utilizza le stesse estensioni e la stessa libreria dell'interfaccia, quindi tutto ciò che restituisce corrisponde a ciò che vedi sullo schermo."],
      ["Accensione", "È spento finché non lo abiliti, deliberatamente. Accendilo nelle impostazioni avanzate e prendi nota della porta, quindi punta il tuo strumento a quell'indirizzo."],
      ["Cosa puoi chiedergli", "Le tue fonti installate, le voci della tua libreria, una ricerca su qualsiasi fonte e un flusso video risolto. Questo è sufficiente per pilotare un media center o un lettore esterno."],
      ["Perché potresti volerlo", "Automazione, un front-end diverso o consentire a un altro dispositivo sulla rete di utilizzare le fonti già configurate dal telefono."],
      ["Tienilo sulla tua rete", "Il server non ha password ed è pensato per una rete locale affidabile. Non esporlo a Internet, dove chiunque potrebbe leggere la tua biblioteca."],
      ["Come si relaziona alla riga di comando", "La riga di comando di Linux espone lo stesso server, quindi uno script scritto sull'app funziona su una macchina headless senza modifiche."],
    ],
    facts: [
      "Il server è spento finché non lo abiliti nelle impostazioni.",
      "Per impostazione predefinita è in ascolto sulla porta 4567.",
      "Utilizza le stesse fonti e libreria dell'interfaccia.",
      "È pensato per una rete locale affidabile, non per Internet.",
    ]
  },
  cli: {
    title: "Eseguire Watchtower senza schermo.",
    body: "La riga di comando di Linux esegue lo stesso motore dell'app, quindi un server o un lavoro pianificato può recuperare, cercare e scaricare senza che nessuno guardi.",
    subsections: [
      ["A cosa serve", "Server, sessioni SSH e lavori automatizzati. È lo stesso motore di estensione dell'app con un'interfaccia testuale anziché schermate, quindi non necessita di sessione grafica."],
      ["Orientarsi", "Inizia con il comando help, quindi esegui il comando doctor per confermare che il runtime può caricarsi e raggiungere tutto ciò di cui ha bisogno prima di affidargli un lavoro."],
      ["Lavorare con le estensioni", "Elenca ciò che offre un repository, convalidalo e testa una fonte rispetto al sito live. Il test viene eseguito in più fasi, dal semplice caricamento del sorgente all'esercizio della ricerca e delle chiamate di dettaglio."],
      ["Chiamare direttamente una fonte", "Puoi invocare una singola operazione, ad esempio una ricerca, e recuperare JSON. Questo è ciò che rende la riga di comando utile per lo scripting e per il debug di un sorgente."],
      ["Servire in rete", "Può avviare lo stesso server Web esposto dall'app, ovvero il modo in cui un client remoto comunica con una macchina headless."],
      ["Cosa non fa ancora", "I comandi di libreria, cronologia e coda di download non sono disponibili senza testa, perché la riga di comando non apre i database locali dell'app. Quelli hanno ancora bisogno dell'app."],
    ],
    facts: [
      "La riga di comando riutilizza il motore di estensione dell'app.",
      "Il comando doctor controlla il runtime prima che tu faccia affidamento su di esso.",
      "Una fonte può essere testata in più fasi, dal caricamento alla ricerca.",
      "I comandi di libreria e download richiedono ancora l'app.",
    ]
  },
  deployment: {
    title: "Esecuzione di Watchtower sul tuo server.",
    body: "Per un server domestico o un piccolo gruppo, la riga di comando di Linux può essere eseguita continuamente e fornire le stesse fonti a tutti i client della rete.",
    subsections: [
      ["Cosa ottieni", "Una singola cartella che contiene la riga di comando e i file di runtime necessari. Lo script di installazione lo copia in un prefisso scelto e lo configura per l'esecuzione."],
      ["Installandolo", "Esegui il programma di installazione con la cartella che hai decompresso e il prefisso desiderato. L'uso di un prefisso nella directory home evita di aver bisogno di root per tutto in seguito."],
      ["Eseguendolo come servizio", "Poiché può servire tramite HTTP, puoi mantenerlo in esecuzione in background e consentire ad altri dispositivi sulla tua rete di utilizzare le origini che ha configurato."],
      ["A cosa serve", "Un media center, un downloader programmato o una macchina che conserva i sorgenti in modo che gli altri non debbano farlo. È lo stesso motore, quindi le sorgenti si comportano in modo identico."],
      ["Mantenerlo aggiornato", "Aggiornalo decomprimendo una build più recente ed eseguendo nuovamente il programma di installazione. La tua configurazione risiede nel prefisso e non viene sovrascritta da un aggiornamento."],
      ["Se qualcosa non funzionerà", "Il comando del dottore esiste proprio per questo. Eseguilo prima e ti dirà se il problema è il runtime, la rete o una fonte."],
    ],
    facts: [
      "La build senza testa è una cartella autonoma più un programma di installazione.",
      "L'installazione nella directory home evita la necessità di root.",
      "Può servire tramite HTTP ad altri dispositivi sulla tua rete.",
      "Il comando doctor diagnostica la maggior parte degli errori di avvio.",
    ]
  },
  troubleshooting: {
    title: "Quando qualcosa non funziona.",
    body: "Quasi ogni problema è dovuto a alcune cose: una fonte che è cambiata, un blocco da un sito web, un'autorizzazione mancante o un'estensione che necessita di aggiornamento. Elaboralo in quest'ordine.",
    subsections: [
      ["Inizia restringendo il campo", "Prima di toccare qualsiasi impostazione, decidi se il problema è la fonte, la tua rete o il tuo dispositivo. Una fonte fallisce mentre altre lavorano punta a quella fonte; tutto ciò che non funziona punta all'app o alla connessione."],
      ["Aggiorna tutto prima", "Aggiorna i tuoi repository e installa eventuali aggiornamenti delle estensioni, quindi verifica la disponibilità di un aggiornamento dell'app. Una grande percentuale di rotture improvvise è dovuta a un sito Web che è stato modificato e a un'estensione che è già stata riparata ma non ancora installata."],
      ["Una fonte ha smesso di funzionare", "Questo è il problema più comune e solitamente il meno grave. Il sito Web è cambiato, l'estensione necessita di un aggiornamento e l'aggiornamento del repository è la soluzione. Se non esiste ancora alcun aggiornamento, l'autore dell'estensione non è stato aggiornato."],
      ["Non viene caricato nulla", "Se ogni fonte fallisce, guarda invece la rete. Prova i dati mobili, un'altra rete Wi-Fi e il DNS crittografato nelle impostazioni. Una causa frequente è una singola rete che blocca tutto o un captive Portal a cui non è stato effettuato l'accesso."],
      ["Apertura di un sito per superare un controllo", "Alcuni siti effettuano una verifica prima di rispondere. Apri il sorgente da Sfoglia e utilizza il browser integrato per caricare la pagina del sito, completa eventuali controlli manualmente, quindi chiudilo e torna all'app. Questa operazione una volta spesso cancella il blocco per quella fonte."],
      ["Cloudflare e ricarica infinita", "Un sito dietro Cloudflare può continuare a ricaricare il suo controllo invece di lasciarti passare. Prova ad aprire nuovamente il sito nel browser integrato, a modificare il tuo agente utente nelle impostazioni avanzate o ad attendere che il sito riduca la sua protezione. Alcune fonti sono deliberatamente difficili da utilizzare da un'app."],
      ["Cancellazione di cookie e dati web", "Ciò reimposta lo stato di navigazione memorizzato dell'app, inclusi eventuali accessi. È la soluzione corretta per un controllo bloccato e vale la pena farlo prima di decidere che una fonte è morta. Successivamente dovrai accedere nuovamente se la fonte necessita di un account."],
      ["Modifica del tuo agente utente", "L'agente utente è la stringa che identifica il tuo dispositivo su un sito Web e alcuni siti lo trattano come un segnale bot. Sostituendo l'impostazione predefinita con una stringa comune del browser, quindi riavviando l'app, a volte si supera un controllo che altrimenti va in loop."],
      ["Un'estensione non verrà installata", "Per impostazione predefinita, Android blocca le installazioni dall'esterno di un negozio. Consentilo per il tuo file manager o browser e, se tale opzione manca, utilizza Shizuku come percorso alternativo. Un download interrotto parzialmente produce un messaggio diverso, quindi reinstallalo da zero."],
      ["Il contenuto si apre nel posto sbagliato", "Se un manga si apre nel lettore video o un episodio nel lettore, l'estensione dichiara il tipo di contenuto sbagliato. Si tratta di un errore nell'estensione, non nelle tue impostazioni, quindi segnalalo invece di provare a risolverlo localmente."],
      ["Ottenere i registri degli arresti anomali e ulteriori dettagli", "Le impostazioni avanzate possono scaricare i registri degli arresti anomali e un'acquisizione logcat dal tuo dispositivo mostra cosa stava facendo l'app in modo più approfondito. Vale la pena allegarli entrambi quando si segnala un problema, poiché trasformano una descrizione vaga in qualcosa di tracciabile."],
      ["Archiviazione e lettura lenta o ritardata", "Il caricamento lento è solitamente dovuto al sito, alla tua connessione o a un limite di velocità piuttosto che all'app. La lettura ritardata deriva da immagini di grandi dimensioni in un capitolo. Cambiare sorgente, liberare memoria o attendere che venga superato un limite di velocità sono le soluzioni pratiche."],
      ["Quando non sei solo tu", "Se altre persone riscontrano lo stesso errore, il problema è dovuto all'estensione o all'app anziché alla tua configurazione. Controlla l'origine dei problemi del progetto prima di aprire un nuovo report e includi la versione dell'app e il testo esatto dell'errore."],
    ],
    facts: [
      "Una fonte non funzionante è quasi sempre la fonte, non l'app.",
      "Una prolunga stantia è la causa più comune di rottura improvvisa.",
      "Se ogni fonte fallisce, sospetta la rete prima dell'app.",
      "L'apertura di un sito nel browser integrato cancella molti controlli di verifica.",
      "La cancellazione di cookie e dati Web ripristina un controllo bloccato e tutti gli accessi.",
      "I registri di crash e logcat rendono tracciabile una segnalazione di bug.",
    ]
  },
  errors: {
    title: "Ogni messaggio di errore e cosa significa.",
    body: "Watchtower mostra l'errore non elaborato anziché nasconderlo, quindi il messaggio stesso è l'indizio più veloce che hai. Trova il tuo qui sotto e prova la prima soluzione prima di modificare qualsiasi altra cosa.",
    subsections: [
      ["403 Proibito", "Il sito web ha deciso che la tua richiesta sembra automatizzata e la sta rifiutando. In pratica si tratta di una protezione anti-bot. Aggiorna prima l'estensione, quindi apri una volta il sorgente nel browser integrato per cancellare eventuali controlli conservati dal sito. Se continua a rifiutare, la fonte potrebbe aver aumentato la protezione o bloccato il tuo indirizzo."],
      ["404 Non trovato", "La pagina prevista dall'estensione è stata spostata o rimossa. Questa è un'estensione obsoleta quasi ogni volta, quindi aggiorna il tuo repository e aggiornalo. Se non è ancora presente alcun aggiornamento, l'autore dell'estensione non ha raggiunto il sito."],
      ["429 Troppe richieste", "Ti è stata applicata una tariffa limitata perché hai effettuato richieste troppo velocemente. L'attesa è la vera soluzione e ridurre la frequenza con cui vengono eseguiti gli aggiornamenti e i download è ciò che impedisce che si ripetano. Un nuovo tentativo immediato non fa altro che estendere il blocco."],
      ["Errori 500, 502 e altri 5xx", "Il sito stesso sta fallendo. Non c'è nulla da risolvere sul tuo dispositivo e la mossa giusta è aspettare e riprovare più tardi. Controllare il sito in un browser conferma se è inattivo per tutti."],
      ["1006 e 1020, i codici firewall", "1006 di solito significa un divieto temporaneo dell'IP e 1020 significa una regola firewall impostata dal proprietario del sito, spesso per bloccare i visitatori provenienti dall'esterno del proprio paese. Cambiare rete può aiutare con 1006; 1020 di solito non è possibile aggirarlo."],
      ["Impossibile bypassare Cloudflare", "Il sito è protetto da Cloudflare e il controllo automatico non è stato cancellato. Apri la pagina della fonte nel browser integrato e completa manualmente eventuali verifiche, quindi torna all'app. Se la pagina si ricarica all'infinito, consulta la pagina di risoluzione dei problemi."],
      ["Impossibile risolvere l'host, connessione non riuscita, timeout", "Questi sono problemi di rete piuttosto che difetti nella fonte. Verifica che il dispositivo abbia accesso a Internet, prova un'altra rete o dati mobili e abilita il DNS crittografato nelle impostazioni. Un portale Wi-Fi captive è una causa comune."],
      ["La convalida del certificato non è riuscita", "Non è stato possibile convalidare il certificato di sicurezza del sito. Controlla che la data e l'ora del dispositivo siano corrette, svuota la cache e i cookie dell'app e prova una rete diversa. Un certificato scaduto sul sito non è qualcosa che puoi correggere."],
      ["Errori di archiviazione e scheda SD", "I messaggi relativi a una scheda, a un percorso o a una cartella non disponibile indicano che il percorso di download è stato spostato o è diventato illeggibile. Controlla lo spazio libero, conferma che l'app ha ancora l'autorizzazione per quella cartella e torna alla memoria interna se la scheda continua a non funzionare."],
      ["L'app o l'estensione non verranno installate", "Un APK firmato da qualcun altro, un download troncato e l'architettura del processore sbagliata producono ciascuno un messaggio di installazione diverso. Rimuovi la copia in conflitto, scarica nuovamente il file e assicurati che Android sia autorizzato a installare app sconosciute."],
      ["Quando l'errore non è elencato qui", "Copia il messaggio esatto invece di parafrasarlo. Il nome dell'operazione e l'URL al suo interno di solito puntano direttamente al passaggio non riuscito e la pagina di risoluzione dei problemi illustra il restringimento del campo."],
    ],
    facts: [
      "403 e 429 significano entrambi che il sito ti sta rifiutando, per motivi diversi.",
      "Un 404 è quasi sempre un'estensione che necessita di aggiornamento.",
      "Un errore 5xx è colpa del sito web, non del tuo dispositivo.",
      "1006 è un divieto temporaneo; 1020 è una regola del firewall che non puoi ignorare.",
      "Copia il messaggio esatto: l'URL al suo interno indica il passaggio non riuscito.",
      "Le mancate corrispondenze della firma indicano che è installata una copia firmata in modo diverso.",
    ]
  },
  faq: {
    title: "Domande che emergono spesso.",
    body: "Brevi risposte alle domande delle persone prima e dopo l'installazione di Watchtower, raggruppate in base alla parte dell'app che toccano.",
    subsections: [
      ["Perché non è su un app store?", "Perché Watchtower installa le estensioni in fase di esecuzione, cosa che i criteri di archiviazione non consentono. Questo è anche il motivo per cui ogni installazione proviene da un APK di cui scegli di fidarti."],
      ["Esiste una versione iOS?", "Il codice sottostante è multipiattaforma, ma la spedizione su iOS è vincolata dalle regole della piattaforma e non è promessa. Android è la piattaforma che riceve tutto per prima."],
      ["Funziona senza internet?", "Tutto ciò che hai scaricato, oltre ai file locali, funziona completamente offline. La navigazione nelle fonti e la ricerca no, perché queste hanno bisogno dei siti web stessi."],
      ["Posso sincronizzare tra dispositivi?", "Non esiste una sincronizzazione automatica. Sposti la tua libreria con un file di backup e i media scaricati devono essere copiati separatamente."],
      ["È legale ed è gratuito?", "Watchtower è gratuito e open source e non contiene contenuti propri. Ciò che aggiungi tramite le estensioni è tua responsabilità, motivo per cui l'app fa attenzione a dire che non le controlla."],
      ["Perché non riesco a vedere una fonte installata?", "Due filtri nascondono le fonti senza eliminarle. Se l'estensione supporta una lingua diversa da quella del tuo dispositivo, attiva quella lingua nel filtro dell'elenco delle fonti. Se si tratta di una fonte per adulti, abilita l'opzione che mostra le fonti NSFW nell'elenco."],
      ["Come faccio a disinstallare un'estensione?", "Disinstallalo dalla schermata delle estensioni o come qualsiasi altra app nelle impostazioni Android. Le voci della tua libreria rimangono inserite e vengono semplicemente visualizzate come non disponibili finché un'altra fonte non può servirle."],
      ["Perché i miei download non vengono visualizzati?", "I download vengono rilevati per cartella. Se la posizione di archiviazione è stata spostata, la scheda SD è stata rimossa o la fonte o la serie sono state rinominate sul sito, l'app non può corrispondere alla cartella. Correggi la posizione o rinomina la cartella in modo che corrisponda, quindi ricostruisci l'indice dei download."],
      ["Perché la mia galleria fotografica mostra copertine ed episodi?", "L'app normalmente nasconde i suoi contenuti multimediali dalla galleria di sistema con un file .nomedia. In caso contrario, creane uno tu stesso e rilascialo nella cartella dei download o nella cartella dei sorgenti locali se è quello che è trapelato."],
      ["Perché la lettura o il caricamento sono lenti?", "Il caricamento lento è dovuto al sito, alla tua connessione o a un limite di velocità, non al fatto che l'app sia pesante. La lettura ritardata deriva da immagini di grandi dimensioni in un capitolo, quindi libera memoria o scegli una fonte con scansioni più piccole."],
      ["Perché alcuni episodi non vengono visualizzati?", "A parte i problemi di rete, l'app può occasionalmente non rilevare l'esistenza di un video. Lasciando il lettore e riaprendo l'episodio di solito lo si registra."],
      ["Perché un aggiornamento della libreria salta le voci?", "Le voci con contenuti non guardati o non letti, le voci che non hai iniziato, le voci contrassegnate come completate e le voci senza versioni previste vengono saltate di proposito. Ciò impedisce a una grande libreria di martellare le fonti e bloccare l'app."],
      ["Perché gli aggiornamenti della libreria si interrompono in background?", "Alcune build Android risparmiano in modo aggressivo la batteria e sospendono il lavoro in background. Esenta Watchtower dall'ottimizzazione della batteria se gli aggiornamenti arrivano solo quando apri l'app."],
      ["Perché l'acquisizione di uno screenshot è bloccata?", "L'impostazione della privacy che nasconde l'app nel commutatore di attività blocca anche gli screenshot. Disattiva questa impostazione se desideri catturare lo schermo."],
      ["Qualcosa è rotto, e adesso?", "Aggiorna prima le tue estensioni, poiché ciò risolve la maggior parte delle rotture. Se il problema persiste, controlla la pagina degli errori per individuare il messaggio esatto visualizzato, quindi la pagina di risoluzione dei problemi, prima di presumere che l'app sia difettosa."],
    ],
    facts: [
      "Watchtower non è distribuito tramite app store.",
      "I contenuti scaricati e i file locali funzionano completamente offline.",
      "Non esiste una sincronizzazione automatica tra i dispositivi.",
      "Una fonte nascosta è solitamente il filtro della lingua o l'interruttore NSFW.",
      "I download vengono abbinati in base al nome della cartella, quindi rinominarne uno lo nasconde.",
      "L'aggiornamento delle estensioni risolve le rotture più improvvise.",
    ]
  },
  contribute: {
    title: "Contribuire a migliorare Watchtower.",
    body: "L'app, le estensioni e questa documentazione sono tutte aperte. C'è lavoro utile per le persone che scrivono codice e per le persone che non lo fanno.",
    subsections: [
      ["Modi per aiutare", "Segnala bug con il messaggio esatto che hai visto, migliora una fonte, scrivi un'estensione per un sito che nessuno ha trattato o traduci questo sito in un'altra lingua."],
      ["Lavorando sull'app", "Clona il repository, installa le toolchain Flutter e Rust ed esegui l'analizzatore prima di aprire una richiesta pull. Go è necessario solo se stai cambiando il server torrent."],
      ["Lavorando sulla documentazione", "Il sito è il proprio repository. Aggiungere una lingua significa aggiungere un file di traduzione; il layout e la navigazione gestiscono già il resto."],
      ["Tradurre", "L'app e questo sito forniscono entrambi molte lingue e una nuova è additiva. Non devi mai toccare il design per aggiungere la tua lingua."],
      ["Segnalazione di un bug utile", "Includi la versione dell'app, la fonte che stavi utilizzando, il testo esatto dell'errore e se altre fonti funzionano ancora. Di solito questo è sufficiente per individuare il guasto."],
      ["Prima di un grande cambiamento", "Apri un problema o chiedi prima su Discord. Ti evita di costruire qualcosa che non si adatta alla direzione del progetto."],
    ],
    facts: [
      "La documentazione è un repository separato dall'app.",
      "Aggiungere una lingua significa aggiungere un file, non modificare il layout.",
      "Segnalare il testo esatto dell'errore consente di risparmiare molto tempo.",
      "Rust è necessario per il funzionamento dell'app; Vai solo per il server torrent.",
    ]
  },

  history: {
    title: "Tutto quello che hai già aperto.",
    body: "La cronologia registra ciò che hai guardato e letto, così puoi tornare a qualcosa che non hai finito senza cercarlo di nuovo.",
    subsections: [
      ["Ciò che registra", "Aprendo un episodio o un capitolo viene aggiunta una voce con l'ora e il livello a cui sei arrivato. La cronologia è un registro delle attività, non una seconda libreria, quindi si riempie da sola mentre usi l'app."],
      ["Filtraggio e ordinamento", "Restringi l'elenco a oggi, questa settimana o questo mese, passa da un elenco a una griglia e ordina per data o titolo. Questi cambiano ciò che viene mostrato e nient'altro."],
      ["Tornare a una serie", "Tocca una voce per riaprire la serie da cui l'avevi lasciata. La storia è il percorso più veloce per tornare a qualcosa che hai provato una volta e messo da parte."],
      ["Incognito e privacy", "Mentre la modalità di navigazione in incognito è attiva, non viene registrato nulla di nuovo, quindi nulla di ciò che apri viene visualizzato nella cronologia. Spegnendolo si riprende la registrazione da quel punto."],
      ["Cancellazione della cronologia", "Puoi cancellare la cronologia senza toccare la libreria o i progressi salvati. Cancellandolo viene rimosso solo il record di ciò che hai aperto."],
      ["Quando la storia sembra sbagliata", "Una voce che appare come non guardata di solito significa che la fonte ha cambiato l'indirizzo dell'episodio, quindi l'app lo considera nuovo. Rimuovere la voce vagante e aggiornare la serie riordina il tutto."],
    ],
    facts: [
      "La cronologia registra l'attività, non sostituisce la tua libreria.",
      "I filtri restringono la visualizzazione senza eliminare nulla.",
      "La modalità di navigazione in incognito impedisce la scrittura della nuova cronologia.",
      "La cancellazione della cronologia lascia intatti i tuoi progressi.",
    ]
  },

  calendar: {
    title: "Cosa verrà rilasciato e quando.",
    body: "Il calendario mostra i prossimi capitoli ed episodi della tua libreria, così puoi vedere a colpo d'occhio cosa è in scadenza oggi e cosa arriverà più tardi.",
    subsections: [
      ["La vista mensile", "I giorni con rilasci vengono contrassegnati e toccando un giorno si passa all'elenco di quella data. Risponde a ciò che è uscito questa settimana senza aprire una sola serie."],
      ["Il programma settimanale", "Il programma prevede una settimana con la copertina di ogni prossima uscita, che si legge meglio di una fitta griglia mensile su un telefono."],
      ["Filtraggio per stato", "Mostra solo gli stati che ti interessano, così le serie completate e in pausa non ingombrano la visualizzazione che utilizzi per pianificare la settimana."],
      ["Cosa significano le date", "Una data è l'ultima volta in cui la fonte ha detto che ci si aspetta qualcosa, non una promessa. Le fonti che non pubblicano le date semplicemente non compaiono."],
      ["Indica le voci guardate", "Un'opzione contrassegna ciò che hai già visto nel programma, quindi la visualizzazione settimanale funge anche da elenco di controllo."],
      ["Quando il calendario è vuoto", "Un calendario vuoto di solito significa che le fonti che segui non pubblicano date di rilascio. Questo è un limite della fonte, non un difetto dell'app."],
    ],
    facts: [
      "Le date di rilascio provengono dalle fonti, non dall'app.",
      "Il programma può essere filtrato in base allo stato della serie.",
      "Un'opzione contrassegna le voci che hai già guardato.",
      "Una fonte senza date non apparirà affatto.",
    ]
  },

  "mass-migration": {
    title: "Spostamento di molte serie contemporaneamente.",
    body: "Quando una fonte muore, la migrazione di massa sposta un intero gruppo di voci della libreria in una fonte funzionante in un unico passaggio, invece di modificarle una per una.",
    subsections: [
      ["Quando usarlo", "Una fonte che ha smesso di funzionare, o da cui ci si vuole allontanare, è il caso della migrazione di massa. La migrazione mantiene i tuoi progressi e le tue categorie."],
      ["Scelta della fonte e della destinazione", "Scegli il gruppo di voci da spostare e l'origine in cui spostarle. L'app cerca autonomamente la destinazione di ciascun titolo."],
      ["Revisione delle partite", "Ogni partita viene mostrata prima che qualcosa cambi, così puoi accettare quelle buone e saltare quelle sbagliate. La corrispondenza per titolo non è mai perfetta."],
      ["Applicazione della modifica", "L'applicazione riscrive ogni voce in modo che punti alla nuova fonte e trasferisca i tuoi progressi. Le serie senza partita rimangono intatte."],
      ["Leggendo il riassunto", "La corsa termina con il conteggio di cosa è stato spostato, cosa è stato saltato e cosa ha fallito. Un articolo non riuscito è solitamente un titolo che la destinazione non porta."],
      ["Quando niente corrisponde", "Se la maggior parte dei titoli non corrisponde, la destinazione non è adatta e una fonte diversa è la risposta migliore. Non si perde nulla fermandosi, perché i cambiamenti avvengono solo quando ci si applica."],
    ],
    facts: [
      "La migrazione di massa sposta un gruppo di voci in un unico passaggio.",
      "Ogni partita viene rivista prima che qualcosa venga cambiato.",
      "I tuoi progressi e le tue categorie vengono mantenuti.",
      "Non cambia nulla finché non si applicano i risultati.",
    ]
  },

  statistics: {
    title: "La tua biblioteca in numeri.",
    body: "Le statistiche riassumono ciò che hai guardato e letto: totali, tempo trascorso, suddivisione dello stato e generi a cui torni più spesso.",
    subsections: [
      ["Ciò che conta", "Totali per tipo di media, numero di capitoli o episodi, tempo trascorso e modalità di suddivisione della libreria in base agli stati."],
      ["Tempo e attività", "La scheda del tempo stima il tempo che hai trascorso guardando e leggendo, mentre il grafico delle attività mostra come è stato distribuito nelle ultime settimane."],
      ["I migliori generi", "I generi su cui trascorri effettivamente il tempo, che spesso non sono quelli che indovineresti. È un buon modo per trovare una nuova serie in una corsia che già ti piace."],
      ["Per tipo di supporto", "Le statistiche sono suddivise per tipo di media, quindi i totali di anime e manga non vengono mai mescolati insieme."],
      ["Da dove vengono i numeri", "Tutto viene calcolato dalla tua libreria e dalla cronologia sul dispositivo. Non viene caricato nulla da nessuna parte."],
      ["Quando dice che non ci sono dati", "Una nuova installazione non ha ancora nulla da riassumere. Le cifre appaiono dopo aver guardato o letto qualcosa e questo è stato registrato."],
    ],
    facts: [
      "Le statistiche vengono calcolate sul dispositivo, a partire dai tuoi dati.",
      "I totali vengono mantenuti separati per ciascun tipo di supporto.",
      "Il grafico delle attività mostra come la lettura e la visione si distribuiscono nel tempo.",
      "Una nuova installazione non mostra dati finché non viene registrato qualcosa.",
    ]
  },

  anime: {
    title: "Guardare anime saltando l'introduzione.",
    body: "L'anime si apre nel lettore video con un extra: introduzione e finale saltati, gestito da AniSkip quando è possibile abbinare un titolo.",
    subsections: [
      ["Il giocatore dell'anime", "Gli episodi vengono riprodotti nello stesso player di tutto il resto, con qualità, audio, sottotitoli e velocità nei soliti fogli."],
      ["Saltare introduzioni e finali", "Con il salto dell'introduzione attivato, un pulsante esegue il conto alla rovescia durante l'apertura e la salta oltre, e il finale viene gestito allo stesso modo. È un'impostazione, quindi può essere disattivata."],
      ["Perché un titolo non può essere abbinato", "Saltare è necessario identificare la serie e l'episodio. Un titolo che non può essere identificato viene semplicemente riprodotto senza il pulsante, anziché fallire."],
      ["Il timeout di salto", "Un breve conto alla rovescia ti dà il tempo di annullare prima che avvenga il salto. La sua lunghezza è configurabile se l'impostazione predefinita sembra affrettata."],
      ["Alla scoperta dell'anime", "Una schermata di scoperta offre elenchi consigliati, popolari, imminenti, aggiornati di recente e più votati, oltre a righe di genere, in modo da poter trovare qualcosa senza una fonte aperta."],
      ["Quando il rilevamento mostra un errore", "Le righe di rilevamento provengono da un servizio esterno anziché dalle tue origini. Quando quel servizio non è raggiungibile, il resto dell'app non viene influenzato e una fonte funziona ancora normalmente."],
    ],
    facts: [
      "Per saltare l'introduzione è necessario identificare la serie e l'episodio.",
      "Saltare è un'impostazione e può essere disattivato.",
      "La durata del conto alla rovescia per i salti è configurabile.",
      "Discovery utilizza un servizio esterno; le fonti funzionano a prescindere.",
    ]
  },

  music: {
    title: "Musica, con la tua libreria.",
    body: "Watchtower riproduce musica da estensioni musicali e dalla tua raccolta, con album, artisti, testi e scrobbling in un unico posto.",
    subsections: [
      ["Da dove viene la musica", "Le estensioni musicali forniscono tracce e raccolte e una libreria locale copre i file che già possiedi. Entrambi si comportano come sorgenti normali."],
      ["Album e artisti", "La musica viene sfogliata per album, artista e traccia, il che è ciò che rende utilizzabile una libreria musicale anziché un lungo elenco di file."],
      ["Il giocatore", "Una coda con riproduzione casuale e ripetizione, un foglio in riproduzione e una copertina. La riproduzione continua mentre ti sposti nell'app."],
      ["Testi", "Le tracce che contengono testi li mostrano in un foglio e i testi sincronizzati seguono la posizione della traccia in cui la sorgente fornisce il tempo."],
      ["Scrobbling", "Collegando Last.fm registra ciò che riproduci sul tuo profilo, allo stesso modo il tracciamento registra ciò che guardi."],
      ["Quando una traccia non verrà riprodotta", "Una fonte musicale che ha smesso di funzionare si comporta come qualsiasi altra fonte rotta. Aggiorna l'estensione e aspettati che un'origine basata sul servizio non sia disponibile mentre il servizio è inattivo."],
    ],
    facts: [
      "La musica proviene da estensioni o da file che già possiedi.",
      "Gli album e gli artisti sono di prima classe, non solo le tracce.",
      "Lo scrobbling di Last.fm è disponibile quando lo colleghi.",
      "I testi seguono la traccia quando la sorgente fornisce il tempo.",
    ]
  },

  novels: {
    title: "Leggere romanzi e farteli leggere.",
    body: "I romanzi si aprono in un lettore di testo anziché in un lettore di immagini, con temi, progressi e una voce di lettura ad alta voce opzionale.",
    subsections: [
      ["Come si aprono i romanzi", "Una fonte che dichiara contenuti nuovi si apre automaticamente nel lettore di testo, quindi non devi mai scegliere manualmente il lettore giusto."],
      ["Comodità di lettura", "La dimensione del carattere, l'interlinea e il tema sono regolabili, perché un muro di testo non offre la stessa esperienza di lettura di una pagina di immagini."],
      ["Ricordando il tuo posto", "Il lettore di romanzi traccia la tua posizione in ogni capitolo e ti riporta ad esso, allo stesso modo del lettore di immagini."],
      ["Leggere ad alta voce", "La sintesi vocale può leggere un capitolo ad alta voce utilizzando le voci installate sul tuo dispositivo, il che è utile durante un tragitto giornaliero o mentre fai qualcos'altro."],
      ["Quando un capitolo è vuoto", "Un capitolo di un romanzo che si apre vuoto di solito proviene da una fonte che ha restituito il testo in una forma che il lettore non può mostrare. L'aggiornamento dell'estensione è la prima cosa da provare."],
      ["Romanzi contro manga", "Un romanzo è testo e un manga sono immagini, quindi una fonte deve dichiarare il tipo giusto affinché il contenuto si apra correttamente. Un tipo sbagliato lo invia al lettore sbagliato."],
    ],
    facts: [
      "I romanzi si aprono in un lettore di testo, scelto in base al tipo di contenuto.",
      "Carattere, spaziatura e tema sono regolabili.",
      "La lettura ad alta voce utilizza le voci installate sul tuo dispositivo.",
      "Un capitolo vuoto di solito significa che la fonte ha restituito testo inutilizzabile.",
    ]
  },

  games: {
    title: "I giochi come un altro tipo di fonte.",
    body: "Watchtower può elencare i giochi tramite estensioni e piattaforme di gioco, utilizzando la stessa navigazione e ricerca che già conosci.",
    subsections: [
      ["Cos'è una fonte di gioco", "Un'estensione di gioco elenca i titoli nello stesso modo in cui un'estensione manga elenca le serie e apre le stesse schermate di navigazione e ricerca."],
      ["Piattaforme", "I giochi sono raggruppati per piattaforma, il che mantiene navigabile il catalogo quando una fonte copre molti sistemi."],
      ["Navigazione e ricerca", "Cerca i fan tra le fonti di giochi abilitate esattamente come avviene per gli altri tipi di media, quindi una query li copre tutti."],
      ["Installazione delle estensioni del gioco", "Si installano dagli stessi repository di tutto il resto e compaiono sotto i giochi una volta installati."],
      ["Quando non è elencato nulla", "Una schermata di gioco vuota significa che non è installata alcuna estensione del gioco. Aggiungi un repository che ne fornisca uno, quindi aggiorna."],
      ["Tenendolo separato", "Le voci dei giochi non si mescolano con la tua lettura e visione, quindi un ampio catalogo di giochi non ingombra mai la tua libreria."],
    ],
    facts: [
      "Le fonti di gioco vengono installate dagli stessi repository di tutto il resto.",
      "I giochi sono raggruppati per piattaforma.",
      "La ricerca copre tutte le fonti di gioco abilitate contemporaneamente.",
      "Le voci dei giochi rimangono separate dalla tua libreria.",
    ]
  },
};

export default it;
