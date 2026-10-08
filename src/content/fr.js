// French prose overlay. Code blocks and markers are inherited from en.js.
const fr = {
  overview: {
    title: "La carte complète de l’application Watchtower.",
    body: "Watchtower réunit un client Flutter, des bibliothèques locales, des extensions JavaScript, des bindings natifs et un serveur headless optionnel dans un seul runtime auto-hébergeable.",
    subsections: [
      ["Ce qu’est Watchtower", "Un hub multimédia multiplateforme pour animés, mangas, séries, musiques, romans et jeux. Il indexe les fichiers locaux, suit la progression, télécharge les contenus et exécute des sources communautaires via un runtime JavaScript extensible."],
      ["Deux runtimes, un contrat", "L’application installée expose un serveur HTTP embarqué sur le port 4567. La CLI headless réutilise le même moteur Flutter et QuickJS pour exécuter des sources en CI, sur serveur ou en SSH sans session graphique."],
      ["À qui s’adresse ce guide", "Aux auteurs de sources qui écrivent des extensions, aux auto-hébergeurs qui lancent le serveur headless et aux contributeurs du client Flutter. Chaque section précise ce qui est requis et ce qui est optionnel."]
    ],
    facts: [
      "Client Flutter multiplateforme pour animés, mangas, musiques, romans, jeux et lecture.",
      "Indexeur local, bibliothèque, historique, favoris, calendrier et suivi de progression.",
      "Extensions QuickJS, téléchargements, anti-bot, bindings Rust et serveur torrent Go."
    ]
  },
  "app-map": {
    title: "Une application en surfaces composables.",
    body: "Le dépôt sépare les écrans métier, les services de données et les runtimes d’exécution. Cette carte suit le trajet d’un contenu, de la source jusqu’au lecteur et à la bibliothèque locale.",
    subsections: [
      ["Flux d’un contenu", "Une extension renvoie des modèles communs. Les providers Riverpod les paginent, les écrans les transforment en cartes et Isar conserve l’historique, les favoris et les fichiers indexés."],
      ["Routage", "GoRouter relie onboarding, accueil, recherche, détails, lecture, bibliothèques, réglages et modules spécialisés sans coupler les contrats de source."],
      ["Runtimes", "Flutter porte l’interface, QuickJS/Dart exécute les sources, Rust et Go fournissent les capacités natives, et la CLI headless reproduit le runtime côté serveur."],
      ["État et stockage", "Riverpod pilote l’application principale, Isar est la base principale et Hive conserve les préférences. Les modules musique et explorateur de fichiers gardent leurs piles héritées, isolées des contrats de source."]
    ],
    facts: [
      "Les modules d’interface sont regroupés par domaine média plutôt que par fournisseur.",
      "Les services transverses gèrent cache, téléchargements, anti-bot, synchronisation et diagnostic.",
      "Les écrans peuvent fonctionner avec une source distante, un fichier local ou le serveur headless."
    ]
  },
  "content-types": {
    title: "Manga, watch, musique : un modèle commun.",
    body: "ItemType classe les familles de sources ; le contenu précis reste porté par les modèles manga, chapitre, page, vidéo et piste. Une extension watch peut donc couvrir animé, film ou série sans créer un nouveau renderer natif.",
    subsections: [
      ["Manga", "Les chapitres utilisent getPageList(url) pour produire les pages du lecteur. Les métadonnées partagent nom, image, description, auteur, artiste et genres."],
      ["Watch : animé, film, série", "Les épisodes utilisent getVideoList(url). Les vidéos portent URL, qualité, URL d’origine, headers, sous-titres et pistes audio. Film/série/animé sont des métadonnées de contenu, pas des runtimes séparés."],
      ["Musique et roman", "La musique réutilise les surfaces de recherche et de détail avec des pistes, albums, artistes et playlists ; le roman s’appuie sur le détail, les chapitres et un lecteur HTML/texte."],
      ["Jeux et plugins", "Game fournit une surface de découverte dédiée. Plugin représente les extensions utilitaires ou de téléchargement qui utilisent le manifeste et le schéma UI natif."]
    ],
    facts: [
      "La compatibilité se fait par contrat de données, pas par écran codé pour chaque site.",
      "Les filtres, préférences, commentaires, recommandations et listes personnalisées sont optionnels.",
      "Le champ itemType est persisté dans Source et permet de choisir bibliothèque, lecteur et historique."
    ]
  },
  "extension-runtime": {
    title: "Le JavaScript vit dans un runtime contrôlé.",
    body: "DartExtensionService charge le code source, injecte MProvider et l’exécute dans QuickJS. Les bridges donnent accès au réseau, au DOM, aux extracteurs, aux préférences et aux modèles Flutter sans exposer l’application native.",
    subsections: [
      ["Chargement", "SourceCodeLanguage distingue Dart, JavaScript et Mihon. Le loader installe ou retire aussi les extensions privées Android via le canal natif prévu."],
      ["Sécurité et isolation", "Les appels de source passent par des bridges contrôlés. Le serveur headless ajoute registre, cache, authentification et limitation de débit avant l’exécution."],
      ["Cycle de vie", "Une source est découverte dans le catalogue, installée ou activée, exécutée à la demande, puis ses préférences, cookies, cache et layout peuvent être réinitialisés depuis ses réglages."],
      ["Gestion des erreurs", "Un appel de bridge en échec renvoie une erreur typée à Dart au lieu de faire planter l’isolate. Les échecs sont journalisés avec le nom de l’opération et l’URL fautive, pour qu’un diagnostic pointe l’étape exacte."]
    ],
    facts: [
      "QuickJS renvoie des objets sérialisés vers les modèles Dart.",
      "Le code d’extension peut définir headers, filtres, préférences et listes personnalisées.",
      "La compatibilité Mihon permet de réutiliser certaines extensions manga existantes."
    ]
  },
  "extension-types": {
    title: "Chaque famille d’extension a sa surface.",
    body: "Le type de source choisit les écrans et les actions disponibles. Le même moteur JS reste partagé, mais les résultats sont rendus par le lecteur manga, le player watch, l’audio, le roman, le jeu ou le plugin.",
    subsections: [
      ["Manga", "Sources de chapitres et pages, filtres de catalogue, historique de lecture et import local."],
      ["Watch", "Sources vidéo pour animés, films et séries : détails, épisodes, qualité, sous-titres, pistes audio et extracteurs de lecteurs."],
      ["Musique", "Sources de catalogue audio et extensions de métadonnées : albums, artistes, pistes, recherche, playlists et statistiques."],
      ["Novel, game, plugin", "Les romans réutilisent le lecteur texte/HTML ; les jeux ont des écrans de découverte ; les plugins utilitaires suivent manifest.json et ui/schema.json."]
    ],
    facts: [
      "Watch est une famille d’usage : son itemType peut être animé ou une autre source vidéo compatible.",
      "Le renderer générique utilise les mêmes cartes, pagination et layouts pour toutes les sources compatibles.",
      "Les capabilities optionnelles évitent d’afficher une action absente de la source."
    ]
  },
  "extension-contract": {
    title: "Le contrat JS, méthode par méthode.",
    body: "ExtensionService définit le minimum commun. Les méthodes optionnelles enrichissent l’expérience sans casser une source qui ne les déclare pas.",
    subsections: [
      ["Navigation catalogue", "getPopular, getLatestUpdates et search renvoient MPages avec list et hasNextPage. Les filtres viennent de getFilterList et les préférences sont persistées par source."],
      ["Détail et lecture", "getDetail fournit MManga. Une source manga expose getPageList ; une source watch expose getVideoList et peut fournir qualité, headers, sous-titres et audio."],
      ["Extensions de contrat", "getCustomList permet les sections home déclarées par id ; recommandations, commentaires, suggestions, compte, favoris et abonnement restent optionnels avec des valeurs vides sûres."],
      ["Sémantique d’échec", "Renvoyez un MPages vide plutôt que de lever une exception quand une page n’a pas d’éléments. Quand une requête échoue vraiment, laissez l’erreur remonter pour que l’interface propose un réessai et que le diagnostic enregistre la cause."]
    ],
    facts: [
      "Les URLs restent les identifiants de navigation entre catalogue, détail et lecture.",
      "Les headers et le baseUrl sont fournis par la source et peuvent être personnalisés.",
      "Les erreurs sont journalisées côté Dart et côté runtime headless pour le diagnostic."
    ]
  },
  "ui-schema": {
    title: "Le manifeste décrit le contrat.",
    body: "Pour les extensions UI et les scripts ZeusDL, manifest.json déclare l’identité, les permissions et le runtime. Le schéma décrit ensuite les champs, actions et sorties rendus nativement par Flutter.",
    subsections: [
      ["Champs du manifeste", "manifest.json porte l’identité, la version, l’auteur, les permissions réseau et les exigences binaires. L’id est une chaîne reverse-DNS comme en.example-tool."],
      ["Contrat UI natif", "Le contrat UI rend des champs URL/texte, sélecteurs, toggles et actions sans WebView : temps de chargement réduits et fonctionnement hors-ligne."],
      ["Protocole de sortie ZeusDL", "Les scripts communiquent par stdout avec les lignes PROGRESS, STATUS, DONE et ERROR. Watchtower les diffuse en temps réel dans le journal de sortie."],
      ["Erreurs de validation", "Un manifeste qui échoue à la validation de schéma est refusé avant installation. Le marketplace affiche le champ exact en cause plutôt qu’un message générique."]
    ],
    facts: [
      "manifest.json porte l’identité, la version, l’auteur, les permissions réseau et les exigences binaires.",
      "Le contrat UI rend des champs URL/texte, sélecteurs, toggles et actions sans WebView.",
      "Les scripts ZeusDL communiquent par stdout avec PROGRESS, STATUS, DONE et ERROR."
    ]
  },
  layouts: {
    title: "ui-layouts.json pilote l’ordre et la forme.",
    body: "Une extension peut publier un layout déclaratif. Watchtower le télécharge depuis watchtower-extensions, le valide en UiLayout, le met en cache par source et laisse Flutter mapper les composants vers des widgets natifs.",
    subsections: [
      ["Racine et cache", "schemaVersion et home.sections sont obligatoires dans un layout utile. browse, detail et player sont optionnels. LayoutDownloader lit Source.uiLayout depuis raw.githubusercontent.com puis LayoutRegistry sauvegarde layouts/<source.id>.json."],
      ["Sections home", "id identifie getCustomList(id, page). component accepte spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed et masonry, plus les présentations curées du registre de composants."],
      ["Paramètres visuels", "title, icon et accent structurent l’en-tête. columns, rows, cardStyle, gridOrder et scrollDirection sont des hints de rendu. seeAll active la page complète, paginated active le chargement par pages et requiresAuth protège une section connectée."],
      ["Browse, detail, player", "Browse décrit popular/latest/search avec component, columns, cardStyle, results et filters. Detail accepte hero, episodeList et showRecommendations. Player accepte standard ou feed."],
      ["Layouts invalides", "Un composant inconnu retombe sur le renderer grille et est journalisé. Un fichier mal formé laisse la source sur son home standard Popular/Latest/Search au lieu de casser tout l’écran."]
    ],
    facts: [
      "Un layout absent revient au home standard Popular/Latest/Search.",
      "Le bridge toLegacyMap conserve la compatibilité avec les écrans home existants.",
      "Un layout est rechargé après installation ou mise à jour d’une extension et supprimé à sa désinstallation."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen est une surface pilotable.",
    body: "La page Watch compose hero, historique, catégories, rangées et catalogue à partir de la source courante. Les layouts JSON peuvent remplacer les listes standard tout en gardant les interactions natives.",
    subsections: [
      ["Ordre et hero", "Le hero utilise les cinq premiers items banner (fallback popular), tourne toutes les 7 secondes et vise un ratio paysage width × 0,62. Lecture ouvre le détail, Info ouvre la bottom sheet et Ma liste bascule le favori Isar."],
      ["Historique", "La rangée Continue watching lit l’historique Isar de la source, déduplique par manga, limite à 12 cartes et montre miniature, épisode/chapitre et progression."],
      ["Catalogue et recherche", "La grille catalogue est paginée avec Popular ou une custom list. La recherche utilise un debounce de 250 ms, des suggestions flottantes, micro/X et ne lance les résultats qu’au submit."],
      ["Performance", "L’app bar observe le scroll avec ValueNotifier ; le hero est dans le CustomScrollView, donc le contenu ne passe pas au-dessus et le scroll n’entraîne pas un setState complet."],
      ["États vides et erreurs", "Une section vide est masquée. Une section en échec affiche une carte de réessai avec l’erreur brute, et un blocage Cloudflare renvoie vers le panneau de contournement plutôt qu’à une impasse."]
    ],
    facts: [
      "Les catégories sont des cartes 132×72 avec image, dégradé et bordure.",
      "Les sections sont masquées si leurs données sont vides.",
      "Les actions de source restent cohérentes entre manga, animé, films et séries."
    ]
  },
  "home-widgets": {
    title: "Les widgets sont des adaptateurs de données.",
    body: "WatchtowerHomeScreen est l’accueil global de l’application. Il combine les flux AniList et TMDB avec la bibliothèque locale et pilote ses rangées par onglets média.",
    subsections: [
      ["Accueil média", "Les onglets Tout, Film, Série, Musique, Anime, Asia, Enfant, Occidental, Africa, TV courte, Football et Jeux choisissent les sections et le hero visibles."],
      ["Cartes", "DiscoveryCard possède des variantes standard, ranked, landscape, featured, saga et spotlight. EpisodeCard ajoute miniature, titre épisode, durée et barre de progression pour reprendre."],
      ["Données", "AniList alimente animés et contenus éditoriaux ; TMDB alimente films et séries ; la bibliothèque et les providers locaux complètent les listes utilisateur."],
      ["Différence avec Watch", "WatchtowerHomeScreen est l’accueil global ; WatchHomeScreen est l’accueil d’une extension/source. Le premier agrège des catalogues, le second rend le contrat d’une source."]
    ],
    facts: [
      "Les widgets ne connaissent pas les URLs de chaque fournisseur : ils consomment des modèles normalisés.",
      "Les états skeleton, vide, chargement et erreur font partie de la surface d’accueil.",
      "Les layouts d’extension ciblent surtout WatchHomeScreen et les écrans browse/detail/player."
    ]
  },
  api: {
    title: "Deux runtimes, une API.",
    body: "Le serveur embarqué Dart/shelf écoute sur 4567 dans l’application. La CLI headless réutilise les mêmes opérations pour la CI, Docker, Railway ou Render.",
    subsections: [
      ["Points d’entrée", "Ping, découverte de sources, catalogue, détail, vidéo, pages et filtres reprennent le contrat ExtensionService. Les routes library, history et proxy servent la base locale et les médias."],
      ["Authentification", "GET /api/ping reste public et renvoie la version du serveur. Les autres routes passent par l’authentification, la limitation de débit et le registre d’extensions."],
      ["Réponses d’erreur", "Un échec renvoie un corps JSON avec l’opération et le message au lieu d’un 500 vide. Une erreur de source garde son statut HTTP, ce qui distingue un blocage d’un bug."],
      ["Filtrage NSFW", "Les sources NSFW sont filtrées des listes et bloquées avec un 403 en accès direct."]
    ],
    facts: [
      "GET /api/ping reste public et renvoie la version du serveur.",
      "Les autres routes passent par l’authentification, la limitation de débit et le registre d’extensions.",
      "Les sources NSFW sont filtrées des listes et bloquées avec 403 en accès direct."
    ]
  },
  downloads: {
    title: "Les téléchargements passent par des moteurs au choix.",
    body: "Watch, manga et roman ont chacun leur onglet de téléchargement. Un moteur par média, la concurrence et les règles Wi-Fi pilotent la file, et chaque carte expose des actions rapides.",
    subsections: [
      ["Choix du moteur", "HYDRA est le moteur HLS interne, ZEUS est ZeusDL, ARES est Aria2 et Externe transmet le lien à ADM ou IDM. Choisir le mauvais moteur pour un flux protégé est une cause d’échec fréquente."],
      ["Concurrence", "Chaque onglet règle les connexions simultanées (1–20) et les éléments simultanés de la file (1–10). Des valeurs élevées accélèrent mais consomment plus de bande passante et peuvent déclencher les limites de la source."],
      ["Archive et nettoyage", "Les chapitres manga s’archivent en dossier, CBZ, CBR, CB7 ou ZIP. La suppression automatique après lecture retire un chapitre une fois marqué lu, y compris les chapitres marqués en option."],
      ["Erreurs de téléchargement", "Un téléchargement échoué conserve ses fichiers partiels et propose Réessayer. 403/429 signifient souvent une limite de débit ou un blocage anti-bot ; 5xx pointe la source. Vérifiez le lien dans un navigateur avant de changer les réglages."]
    ],
    facts: [
      "Les règles Wi-Fi uniquement peuvent bloquer un téléchargement jusqu’à disponibilité d’un réseau Wi-Fi.",
      "Les mises à jour intelligentes de bibliothèque ajoutent automatiquement les nouveaux épisodes ou chapitres.",
      "La file de téléchargement affiche jusqu’à cinq boutons d’action rapide par carte."
    ]
  },
  trackers: {
    title: "La progression se synchronise avec des services externes.",
    body: "Watchtower se connecte à AniList, Kitsu, MyAnimeList, Simkl et Trakt pour garder la progression de lecture et de visionnage synchronisée entre appareils.",
    subsections: [
      ["Trackers pris en charge", "AniList, Kitsu, MyAnimeList, Simkl et Trakt. Chacun a son flux de connexion et son modèle de statut, normalisés vers un modèle Track commun."],
      ["Liaison et synchro", "Une entrée de bibliothèque peut être liée à une entrée de tracker. Progression, statut et note sont poussés à la mise à jour, et les mises à jour intelligentes peuvent récupérer l’épisode ou chapitre suivant."],
      ["Erreurs de tracker", "Un jeton expiré, une application révoquée ou une limite de débit produisent chacun un message distinct. Reconnectez-vous depuis Réglages › Suivi ; une entrée erronée peut être déliée puis reliée."],
      ["Migration", "Le flux de migration de masse déplace les entrées de bibliothèque entre sources en conservant les liens de tracker, pour ne pas perdre la progression quand une source meurt."]
    ],
    facts: [
      "Les intégrations de tracker sont dans lib/services/trackers.",
      "Gérez les trackers depuis Réglages › Suivi.",
      "La migration de masse conserve les liens de tracker lors d’un changement de source."
    ]
  },
  "getting-started": {
    title: "Compiler l’application Flutter",
    body: "Installez les toolchains, récupérez les paquets Dart et lancez le client multiplateforme.",
    subsections: [
      ["Prérequis", "Flutter 3.38+ / Dart 3.10+, Rust pour les bindings flutter_rust_bridge, Java 17 pour Android et Go 1.21+ si vous reconstruisez le client torrent."],
      ["Plateformes", "Windows, Linux, macOS, iOS, Android et Web sont tous visés. Certaines fonctions natives se dégradent proprement sur Web."],
      ["Vérifier l’installation", "Lancez l’analyseur avant votre première modification : dart format --output=none --set-exit-if-changed lib et flutter analyze --no-pub. La commande CLI doctor indique si le moteur natif et QuickJS sont disponibles."],
      ["Erreurs de build courantes", "Une toolchain Rust manquante casse l’étape de binding. Un SDK Flutter ancien casse la résolution pub. Un Java 17 absent casse le build Android. Corrigez la toolchain avant de modifier le code."]
    ],
    facts: [
      "Prérequis : Flutter 3.38+, Dart 3.10+, Rust et Java 17 pour Android.",
      "Le projet cible Windows, Linux, macOS, iOS, Android et Web.",
      "La CLI headless est publiée par le workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Embarqué ou headless.",
    body: "La CLI headless tourne avec ou sans Docker. Les routes privées utilisent X-Api-Key ou Authorization Bearer quand API_KEY est activée, tandis que l’application garde son mode embarqué.",
    subsections: [
      ["Docker", "Docker Compose est le chemin recommandé pour un serveur reproductible. L’image publiée est disponible sur GHCR."],
      ["Autres hôtes", "Railway, Render, un VPS et Docker nu sont documentés dans le dépôt. Le serveur conserve le même contrat de source que l’application."],
      ["Variables d’environnement", "API_KEY protège les routes privées. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR et RATE_MAX_TOKENS contrôlent cache, persistance et limitation de débit."],
      ["Erreurs de déploiement", "Un conteneur qui s’arrête immédiatement manque souvent d’API_KEY ou rencontre un conflit de port. Consultez les logs, vérifiez que le port est libre et le chemin du dépôt d’extensions avant de redémarrer."]
    ],
    facts: [
      "Docker Compose est le chemin recommandé pour un serveur reproductible ; l’image est sur GHCR.",
      "Les déploiements Railway, Render, VPS et Docker sont documentés dans le dépôt.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR et RATE_MAX_TOKENS contrôlent le comportement du serveur."
    ]
  },
  troubleshooting: {
    title: "Dépannage",
    body: "Un problème de source ou d’application ? Suivez la checklist, lisez l’erreur exacte, puis lancez un diagnostic avant de changer les réglages.",
    subsections: [
      ["Diagnostic primaire", "Mettez à jour les extensions et l’application, rafraîchissez l’élément en cause, essayez un autre élément de la même source, ouvrez le site dans un navigateur, changez de réseau, videz cache et cookies, puis redémarrez l’application. Si une étape corrige le problème, la cause est locale."],
      ["Lire l’erreur", "Watchtower affiche l’erreur brute, pas un message générique. Copiez-la : le nom de l’opération et l’URL fautive indiquent l’étape exacte. Le diagnostic d’extension enregistre séparément les étapes popular, latest, detail et media."],
      ["Erreurs HTTP", "403 Forbidden : anti-bot ou bannissement d’IP. 404 Not Found : contenu retiré ou source morte. 429 Too Many Requests : limite temporaire. 5xx : serveur de la source en panne. 1006/1020 : bannissement d’IP ou règle de pare-feu."],
      ["Personnel ou généralisé", "Si vous êtes seul touché, soupçonnez Cloudflare, un bannissement d’IP ou une limite de débit, et réduisez les téléchargements depuis cette source. Si tout le monde est touché, consultez les trackers d’issues de l’extension et de l’application."],
      ["Problèmes d’installation", "Une extension qui refuse de s’installer échoue souvent à la validation de schéma ou télécharge un fichier corrompu. Retéléchargez-la et vérifiez l’id et la version du manifeste."]
    ],
    facts: [
      "Mettez à jour les extensions d’abord : la plupart des pannes se règlent par une mise à jour d’extension.",
      "L’écran de diagnostic sépare les étapes popular, latest, detail et media.",
      "Aucun ETA pour les corrections d’extension ; une source cassée peut simplement demander de la patience."
    ]
  },
  cloudflare: {
    title: "Cloudflare & anti-bot",
    body: "Certaines sources sont derrière Cloudflare. Watchtower ne signale un challenge que si la réponse porte une vraie preuve, et propose une WebView de contournement qui ouvre l’URL exacte en échec.",
    subsections: [
      ["Ce qui compte comme un challenge", "Un simple 403/503, un timeout ou le mot challenge n’est pas Cloudflare. Watchtower exige des marqueurs CDN, une page de challenge interactive ou une page de blocage avant d’afficher l’interface anti-bot."],
      ["Contourner un challenge", "La WebView de contournement ouvre l’URL exacte en échec, jamais la racine du site. Résolvez le CAPTCHA une fois, puis relancez la source."],
      ["Changer le user agent", "Le user agent influence la détection des bots. Changez la valeur par défaut dans les réglages Avancés, redémarrez l’application et réessayez. Testez plusieurs navigateurs et systèmes."],
      ["Cookies et cache", "Vider les cookies réinitialise une connexion ou un état de challenge. Vider les données WebView repart de zéro. Les deux sont dans les réglages Avancés."],
      ["Si ça échoue encore", "La source a peut-être renforcé sa protection. Attendez, ou passez à une autre source pour le même contenu."]
    ],
    facts: [
      "Cloudflare n’est signalé qu’en présence d’une vraie preuve dans la réponse.",
      "La WebView de contournement ouvre l’URL en échec, pas la racine du site.",
      "Un échec personnel signifie souvent un blocage ou une limite de débit, pas un bug."
    ]
  },
  cli: {
    title: "CLI headless",
    body: "Le build Linux contient le même runtime d’extensions que l’application de bureau et tourne sans X11 ni Wayland, pour la CI, les serveurs et le SSH.",
    subsections: [
      ["Commandes", "doctor sonde le moteur natif et QuickJS. extensions list et test chargent un dépôt local. source exécute une opération ExtensionService. plugins validate inspecte le catalogue de plugins."],
      ["Modes de test", "load vérifie qu’une source se charge et expose filtres, préférences et headers. smoke appelle aussi popular, latest, search, suggestions, détails et l’opération média. deep ajoute la page deux et des sondes HTTP."],
      ["Filtrage", "Filtrez par langue, NSFW/SFW, moteur, tag, requête, ids ou type. Un dossier de langue comme src/watch/fr prime sur un champ lang obsolète dans l’index."],
      ["Codes de sortie et erreurs", "0 est un succès, 1 un échec de santé, de test ou de validation, et 2 un usage invalide ou une erreur d’opération non gérée. Rapports et stdout masquent les identifiants et les paramètres d’URL signés."],
      ["Limites connues", "Les commandes library, history, progress, file de téléchargement et tracker ne sont pas encore disponibles : le point d’entrée headless n’ouvre pas les stores Isar/Hive."]
    ],
    facts: [
      "doctor --json indique si le moteur natif et QuickJS sont disponibles.",
      "smoke exécute popular, latest, search, détails et l’opération média.",
      "La sortie masque les identifiants courants et les paramètres d’URL signés."
    ]
  }
};

export default fr;
