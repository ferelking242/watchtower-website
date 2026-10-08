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
  "getting-started": {
    title: "Tout ce qu’il faut pour lancer Watchtower.",
    body: "Watchtower est un hub multimédia multiplateforme pour animés, mangas, séries, musiques, romans et jeux. Cette page vous mène du téléchargement à votre première source jouable.",
    subsections: [
      ["Ce qu’il vous faut", "Un appareil Android 8.0 ou plus récent pour l’application complète, ou n’importe quel hôte Linux, macOS ou Windows pour la CLI headless. Une URL de dépôt de sources est requise avant que du contenu apparaisse."],
      ["Installer l’application", "Téléchargez le dernier APK depuis les versions du dépôt et ouvrez-le. Si votre appareil bloque l’installation latérale, autorisez d’abord l’installation depuis des sources inconnues pour votre gestionnaire de fichiers."],
      ["Ajouter votre première source", "Ouvrez Plus, allez dans Extensions et ajoutez une URL de dépôt qui se termine par index.min.json. Actualisez la liste, puis installez les extensions souhaitées."],
      ["Trouver quoi lire", "Allez dans Parcourir, choisissez une source installée et cherchez ou parcourez ses listes Populaire et Récent. Touchez un résultat et choisissez Ajouter à la bibliothèque."],
      ["Où aller ensuite", "Lisez Ajouter des sources pour les dépôts et dossiers locaux, Extensions pour le runtime, et Réglages du lecteur ou Réglages de lecture pour ajuster la lecture."]
    ],
    facts: [
      "Watchtower fonctionne sur Android, iOS, Windows, Linux, macOS et le web.",
      "Les sources sont des extensions JavaScript exécutées par un runtime QuickJS embarqué.",
      "Le même moteur alimente l’application et le serveur headless, donc les contrats correspondent."
    ]
  },
  installation: {
    title: "Installez sur la plateforme que vous utilisez vraiment.",
    body: "Watchtower est livré comme application Android, build de bureau et CLI Linux headless. Choisissez le canal qui correspond à votre usage.",
    subsections: [
      ["Application Android", "La cible principale. Téléchargez l’APK de version, ou un build preview pour les fonctionnalités à venir. Gardez les sauvegardes automatiques activées sur les builds preview."],
      ["CLI headless", "Un binaire Linux qui réutilise le même moteur Flutter et QuickJS sans session graphique. Idéal pour les serveurs, les sessions SSH et les tâches CI."],
      ["Compiler depuis les sources", "Clonez le dépôt, lancez flutter pub get, puis flutter build apk --release. Les chaînes d’outils Rust et Go sont nécessaires pour les bindings natifs et le serveur torrent."],
      ["Preview ou stable", "Les builds preview suivent main et montrent le travail non publié. Ils cassent plus souvent : traitez-les comme un canal de test, pas comme un usage quotidien."],
      ["Prérequis", "Flutter 3.38+, Dart 3.10+, une chaîne d’outils Rust et Go 1.22+ pour compiler tous les composants depuis les sources."]
    ],
    facts: [
      "Les APK release, profile et debug sont tous produits par la CI.",
      "Le binaire CLI est publié pour Linux à chaque version étiquetée.",
      "L’installation tierce doit être autorisée pour les extensions basées sur APK."
    ]
  },
  "adding-sources": {
    title: "Apportez votre propre contenu à Watchtower.",
    body: "Watchtower n’embarque aucun contenu. Vous l’ajoutez via des dépôts d’extensions pour les sources en ligne ou via des dossiers locaux pour vos propres fichiers.",
    subsections: [
      ["Dépôts externes", "Ouvrez Plus, puis Extensions, et touchez l’entrée des dépôts. Ajoutez une URL se terminant par index.min.json, puis actualisez la liste des extensions."],
      ["Installer des extensions", "Après actualisation, touchez le bouton de téléchargement à côté d’une extension. Certains appareils exigent aussi d’autoriser les installations tierces dans les réglages système."],
      ["Extensions manuelles", "Une extension peut aussi être installée depuis un fichier .apk. Ne le faites que pour des fichiers de confiance : une extension s’exécute avec tous les privilèges de l’application."],
      ["Dossiers locaux", "Pointez Watchtower vers un dossier manga ou animé local pour lire ou jouer des fichiers déjà présents, sans aucune source réseau."],
      ["Avertissement tiers", "Watchtower ne contrôle pas les dépôts tiers. Tout ce que vous y installez peut lire vos données et doit être traité comme du code non fiable."]
    ],
    facts: [
      "Les dépôts sont de simples index JSON servis en HTTP ou HTTPS.",
      "Les sources locales n’ont besoin d’aucun dépôt et fonctionnent hors ligne.",
      "Chaque extension s’exécute dans le même runtime QuickJS isolé."
    ]
  },
  library: {
    title: "Votre bibliothèque est le centre de l’application.",
    body: "La bibliothèque rassemble tout ce que vous suivez, suit votre progression et pilote les mises à jour, les téléchargements et le suivi.",
    subsections: [
      ["Ajouter des entrées", "Ouvrez une série et appuyez sur Ajouter à la bibliothèque. L’entrée hérite de sa source, de sa couverture et de sa description, et commence à suivre votre progression."],
      ["Organiser avec des catégories", "Utilisez les catégories pour diviser la bibliothèque par statut ou genre, puis ciblez les mises à jour globales sur une seule catégorie."],
      ["Suivi de progression", "Les épisodes vus et chapitres lus sont stockés localement et synchronisés vers un tracker lorsqu’il est connecté. La progression hors ligne est envoyée à la reconnexion."],
      ["Filtres et badges", "Le menu de filtre masque les entrées vues, non lues ou marquées, et les options d’affichage ajoutent des badges de téléchargement aux couvertures."],
      ["Plusieurs appareils", "Watchtower n’a pas de synchronisation intégrée. Déplacez la bibliothèque entre appareils avec un fichier de sauvegarde."]
    ],
    facts: [
      "Les entrées terminées sont ignorées par la mise à jour globale par défaut.",
      "Les catégories peuvent être exclues des mises à jour pour réduire la charge.",
      "Les données de bibliothèque vivent dans la base locale, pas sur un serveur."
    ]
  },
  browse: {
    title: "Trouvez une série dans toutes vos sources.",
    body: "Parcourir permet d’explorer le catalogue d’une source, de chercher globalement et de passer d’un fournisseur à l’autre sans quitter l’application.",
    subsections: [
      ["Parcourir une source", "Choisissez une source pour voir ses listes Populaire et Récent, ainsi que les filtres qu’elle expose comme le genre ou l’année."],
      ["Recherche globale", "L’action de recherche interroge toutes les sources activées à la fois. Les résultats sont groupés par source pour comparer la disponibilité."],
      ["Titre introuvable", "Beaucoup de sources utilisent des titres japonais romanisés. Essayez d’autres orthographes ou le titre natif avant de conclure qu’une série manque."],
      ["Migration de source", "Si une source meurt ou prend du retard, migrez l’entrée vers une autre source en conservant progression et catégories."],
      ["Filtres de langue", "Les extensions sont étiquetées par langue pour masquer les sources que vous ne pouvez pas lire."]
    ],
    facts: [
      "Populaire et Récent sont des capacités optionnelles d’une source.",
      "La recherche globale n’interroge que les sources activées.",
      "La migration ne déplace pas les épisodes ou chapitres téléchargés."
    ]
  },
  extensions: {
    title: "Les extensions sont le moteur de Watchtower.",
    body: "Une source est un petit programme JavaScript qui indique à Watchtower comment lister, chercher, lire et jouer le contenu d’un site web.",
    subsections: [
      ["Ce qu’est une extension", "Chaque extension cible un site et renvoie les modèles partagés que Watchtower comprend. L’interface est générique : un nouveau site ne demande aucun nouvel écran."],
      ["Dépôts et mises à jour", "Les dépôts distribuent les extensions et leurs versions. Actualisez la liste pour voir les mises à jour, puis installez-les sur place sans perdre de données."],
      ["Types d’éléments", "Une extension déclare un type d’élément comme manga, animé, musique, roman ou jeu. Ce type décide de la bibliothèque, du lecteur ou du player utilisé."],
      ["Confiance et sécurité", "Les extensions sont du code tiers. N’installez que depuis des dépôts de confiance, car une extension peut atteindre le réseau et votre stockage."],
      ["En écrire une", "Voir les pages Runtime d’extension et Contrat de source pour l’API, les points d’entrée et le schéma UI natif."]
    ],
    facts: [
      "Les extensions s’exécutent dans QuickJS, isolées de l’interface Flutter.",
      "Une extension correspond à un seul site, jamais à un groupe.",
      "Le manifeste déclare nom, version, langue et type d’élément."
    ]
  },
  "local-source": {
    title: "Lisez et jouez des fichiers qui ne touchent jamais le réseau.",
    body: "Une source locale transforme un dossier de votre appareil en source normale, pour que vos fichiers se comportent comme un catalogue en ligne.",
    subsections: [
      ["Manga local", "Placez un dossier par série dans le répertoire manga local. Les chapitres sont des archives CBZ ou des dossiers d’images, et la couverture vient d’un fichier dédié."],
      ["Animé local", "Placez un dossier par série dans le répertoire animé local et mettez-y les fichiers vidéo. L’ordre des épisodes suit le nom de fichier."],
      ["Métadonnées", "Un details.json à côté du dossier de série peut fournir auteur, artiste, description et genres quand le nom du dossier ne suffit pas."],
      ["Réindexer", "Après avoir déplacé des fichiers depuis l’extérieur, invalidez l’index des téléchargements ou rajoutez la source pour que Watchtower réanalyse le dossier."],
      ["Hors ligne par conception", "Les sources locales ne demandent jamais le réseau : elles fonctionnent en mode avion et ne déclenchent aucune protection anti-bot."]
    ],
    facts: [
      "Les archives CBZ et les dossiers d’images sont tous deux pris en charge.",
      "Les noms de fichiers déterminent la numérotation des chapitres et épisodes.",
      "Un fichier .nomedia garde les médias locaux hors de la galerie système."
    ]
  },
  "video-player": {
    title: "Une lecture qui s’adapte au média ouvert.",
    body: "Le lecteur vidéo expose qualité, piste audio, sous-titres et vitesse via des feuilles et des panneaux au-dessus de la surface vidéo.",
    subsections: [
      ["La surface de lecture", "Touchez pour révéler les commandes, double-touchez pour avancer, appuyez longuement pour changer la vitesse. Pincez pour zoomer si le format le permet."],
      ["Feuilles", "Les choix de qualité, d’audio et de sous-titres s’ouvrent en feuilles inférieures, la vidéo continuant derrière."],
      ["Panneaux", "Les panneaux latéraux exposent la liste des épisodes, les statistiques de lecture et les extras fournis par la source."],
      ["Sous-titres", "Les pistes viennent de la source ou d’un fichier externe. Style, décalage et taille sont gérés dans les réglages de sous-titres."],
      ["Lecteurs externes", "Un épisode peut être confié à un lecteur externe comme mpv ou VLC quand le décodeur interne ne gère pas un codec."]
    ],
    facts: [
      "Le lecteur interne s’appuie sur un décodeur accéléré par le matériel.",
      "Les gestes contrôlent luminosité, volume et déplacement.",
      "La progression est écrite en continu, pas seulement à la sortie."
    ]
  },
  "player-settings": {
    title: "Réglez le décodage, les gestes et les commandes.",
    body: "Les réglages du lecteur décident du décodage vidéo, du comportement des gestes et des boutons affichés sur la surface de lecture.",
    subsections: [
      ["Décodeur", "Le décodage matériel est plus rapide et plus léger, mais quelques codecs exigent le logiciel. Auto choisit l’option la plus sûre par flux."],
      ["Gestes", "Assignez les balayages verticaux à la luminosité et au volume, et les horizontaux au déplacement. Chaque axe peut être inversé."],
      ["Boutons personnalisés", "Ajoutez des boutons à l’overlay pour les actions fréquentes : passer l’intro, capture d’écran ou rotation."],
      ["Lecture avancée", "Taille du tampon, format d’image forcé et picture-in-picture se trouvent dans la section avancée et changent rarement."],
      ["Surcharges par série", "La plupart des réglages peuvent être surchargés pour une série sans toucher aux valeurs globales."]
    ],
    facts: [
      "Le décodage matériel est par défaut et convient à la plupart des appareils.",
      "Les axes des gestes peuvent être échangés ou désactivés individuellement.",
      "Les boutons personnalisés font partie de la sauvegarde des réglages."
    ]
  },
  subtitles: {
    title: "Rendez les sous-titres lisibles sur tout écran.",
    body: "Les réglages de sous-titres contrôlent la sélection de piste, la synchronisation et le style appliqué quand le lecteur affiche la piste lui-même.",
    subsections: [
      ["Choisir une piste", "Quand un flux porte plusieurs pistes, elles apparaissent dans la feuille des sous-titres. Le choix est mémorisé par série."],
      ["Synchronisation et décalage", "Décalez les sous-titres avant ou arrière par petits pas quand une piste est désynchronisée avec l’audio."],
      ["Style", "Police, taille, couleur, contour et fond s’appliquent aux formats texte rendus par le lecteur."],
      ["Fichiers externes", "Déposez un fichier de sous-titres correspondant à côté d’un épisode local et le lecteur le charge automatiquement."],
      ["Sous-titres bitmap", "Les sous-titres image portent leur propre style et ne peuvent pas être restylés ; seuls leur position et leur taille suivent les réglages."]
    ],
    facts: [
      "Les sous-titres texte sont restylables, les bitmap ne le sont pas.",
      "Les choix par série remplacent la valeur globale.",
      "Le décalage est conservé après redémarrage de l’application."
    ]
  },
  reader: {
    title: "Un lecteur conçu pour les longues sessions.",
    body: "Le lecteur gère le contenu paginé, vertical et en longue bande avec zones tactiles, zoom et suivi continu de progression.",
    subsections: [
      ["Choisir un mode", "Définissez une valeur globale et surchargez-la par série. La longue bande convient aux webtoons, le paginé aux mangas papier."],
      ["Navigation", "Les zones tactiles avancent ou reculent d’une page, le balayage fait défiler et le pincement zoome. Touchez le centre pour ouvrir le menu."],
      ["Progression", "La dernière page lue est stockée par chapitre, donc revenir à une série reprend où vous vous êtes arrêté."],
      ["Pages larges", "Les doubles pages peuvent être scindées, pivotées ou zoomées automatiquement pour éviter des pages minuscules sur téléphone."],
      ["Téléchargements", "Les chapitres téléchargés s’ouvrent instantanément et sont marqués dans la liste pour lire hors ligne."]
    ],
    facts: [
      "Le mode de lecture peut différer d’une série à l’autre.",
      "La progression est synchronisée avec un tracker si connecté.",
      "Les transitions de chapitre peuvent être affichées ou ignorées."
    ]
  },
  "reader-settings": {
    title: "Contrôlez l’affichage et le tournage des pages.",
    body: "Les réglages de lecture couvrent le sens de lecture, la mise à l’échelle, le recadrage et les zones tactiles de navigation.",
    subsections: [
      ["Lecture", "Définissez le mode par défaut, l’animation des transitions et les chapitres ignorés lorsqu’ils sont lus, filtrés ou en double."],
      ["Affichage", "Rotation, couleur de fond, plein écran et visibilité du numéro de page se trouvent dans le groupe affichage."],
      ["Pages", "Type de mise à l’échelle, recadrage des bords et position de zoom décident comment une page remplit l’écran."],
      ["Zones tactiles", "Choisissez une disposition de zones et inversez-la horizontalement, verticalement ou les deux pour la lecture gaucher."],
      ["Longue bande", "Marge latérale et zones tactiles distinctes rendent les webtoons lisibles sur écran large."]
    ],
    facts: [
      "La mise à l’échelle peut être ajustée à l’écran, à la largeur, à la hauteur ou à la taille réelle.",
      "Le recadrage des bords supprime automatiquement les marges de scan.",
      "Les règles d’ignorance peuvent être surchargées par série."
    ]
  },
  updates: {
    title: "Gardez la bibliothèque à jour sans surcharger les sources.",
    body: "Les mises à jour cherchent de nouveaux chapitres et épisodes, en respectant des règles qui évitent la charge inutile et les réponses anti-bot.",
    subsections: [
      ["Mise à jour globale", "Parcourt la bibliothèque selon un planning. Restreignez-la à une seule catégorie pour ne pas vérifier chaque jour les séries rares."],
      ["Ignorance intelligente", "Les entrées terminées, non commencées ou sans nouveauté attendue sont ignorées pour réduire les requêtes."],
      ["Notifications", "Les nouveaux chapitres et épisodes déclenchent une notification filtrable par catégorie et par raison d’ignorance."],
      ["Actualisation manuelle", "Une série seule peut être actualisée depuis son menu Plus à tout moment, sans toucher au reste."],
      ["Pourquoi ignorer", "Un trafic de mise à jour trop lourd peut déclencher des mesures anti-bot sur une source, la rendant inutilisable pour tous."]
    ],
    facts: [
      "Les mises à jour peuvent être limitées à une ou plusieurs catégories.",
      "Les entrées terminées sont exclues par défaut.",
      "L’optimisation de batterie peut bloquer les mises à jour en arrière-plan sur certaines surcouches Android."
    ]
  },
  downloads: {
    title: "Emportez votre bibliothèque hors ligne exprès.",
    body: "Les téléchargements mettent en file épisodes et chapitres pour un usage hors ligne, avec une file unique, des limites claires et un rangement prévisible.",
    subsections: [
      ["Mise en file", "Ajoutez chapitres ou épisodes depuis une série et gérez-les dans la file. Réordonnez en glissant, annulez via l’action Plus."],
      ["Parallélisme", "Une source est téléchargée à la fois pour éviter les bans d’IP, tandis que plusieurs sources différentes peuvent tourner en parallèle."],
      ["Téléchargements uniquement", "Activez le mode téléchargements uniquement pour masquer le contenu en streaming et vous fier au stockage local."],
      ["Rangement", "Les téléchargements vivent sous un dossier au nom de la source, puis un dossier de série. Renommer l’un casse la détection."],
      ["Dépannage", "Si les téléchargements disparaissent, vérifiez que l’emplacement est encore accessible et invalidez l’index des téléchargements."]
    ],
    facts: [
      "Une même source n’est jamais téléchargée en parallèle avec elle-même.",
      "Les téléchargements ne sont pas inclus dans un fichier de sauvegarde.",
      "Le stockage interne est plus performant que les cartes SD."
    ]
  },
  categories: {
    title: "Transformez une longue bibliothèque en rayons clairs.",
    body: "Les catégories regroupent les entrées par statut, genre ou envie, et servent aussi de sélecteur pour les mises à jour et téléchargements.",
    subsections: [
      ["Créer des catégories", "Nommez et ordonnez les catégories comme vous voulez. Une entrée peut appartenir à plusieurs à la fois."],
      ["Assigner des entrées", "Appuyez longuement sur une série, choisissez Définir les catégories et cochez toutes celles qui s’appliquent."],
      ["Piloter les mises à jour", "Ciblez la mise à jour globale et le téléchargement automatique sur des catégories précises pour ne générer du trafic qu’avec les séries actives."],
      ["Retirer des entrées", "Décochez une catégorie dans la même boîte de dialogue pour en retirer une entrée sans supprimer la série."],
      ["Conseil de nommage", "Nommez les catégories par état plutôt que par source, pour que migrer une série ne change jamais son rayon."]
    ],
    facts: [
      "Une entrée peut vivre dans plusieurs catégories.",
      "La mise à jour globale peut cibler une seule catégorie.",
      "Le téléchargement automatique peut être limité à certaines catégories."
    ]
  },
  tracking: {
    title: "Envoyez votre progression aux services que vous utilisez déjà.",
    body: "Le suivi relie la bibliothèque à des services en ligne pour enregistrer épisodes vus et chapitres lus sans saisie manuelle.",
    subsections: [
      ["Services pris en charge", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori et Bangumi peuvent tous être connectés depuis les réglages de suivi."],
      ["Se connecter", "Ouvrez les réglages de suivi et touchez un service pour lancer sa connexion. Kitsu attend votre adresse e-mail comme identifiant."],
      ["Configurer par série", "Ouvrez une série, touchez Suivi et ajoutez le service. La requête de recherche peut être modifiée si la correspondance automatique est fausse."],
      ["Sens unique par conception", "La progression va de Watchtower vers le tracker. Les changements faits sur le site ne sont pas rapatriés dans l’application."],
      ["Progression hors ligne", "La progression enregistrée hors ligne est mise en file et envoyée dès que l’appareil est connecté."]
    ],
    facts: [
      "Le suivi s’active par série, pas globalement.",
      "Un pourcentage de visionnage peut décider quand un épisode compte comme vu.",
      "Les dates de début sont définies automatiquement au début du suivi."
    ]
  },
  backups: {
    title: "Protégez la bibliothèque avant que ça tourne mal.",
    body: "Une sauvegarde capture votre bibliothèque, votre progression, vos catégories, vos liens de suivi et vos réglages dans un seul fichier portable.",
    subsections: [
      ["Créer une sauvegarde", "Ouvrez les réglages de données et stockage et choisissez Créer une sauvegarde. Choisissez un emplacement accessible depuis un autre appareil."],
      ["Ce qui est inclus", "Titres, catégories, progression, liens de suivi, historique, métadonnées de série, liste d’extensions et réglages sont tous stockés dans le fichier."],
      ["Ce qui est exclu", "Les fichiers téléchargés, les couvertures personnalisées et l’historique des séries hors bibliothèque ne font pas partie d’une sauvegarde."],
      ["Restaurer", "Connectez-vous à vos trackers et installez les extensions utilisées avant l’import, pour que la restauration relie tout proprement."],
      ["Sauvegardes automatiques", "Définissez une fréquence pour qu’un fichier récent existe toujours. C’est fortement recommandé sur les builds preview."]
    ],
    facts: [
      "Les sauvegardes déplacent la bibliothèque entre appareils, faute de synchronisation.",
      "Les téléchargements doivent être transférés séparément.",
      "Les sauvegardes automatiques sont la meilleure défense contre une mauvaise mise à jour."
    ]
  },
  storage: {
    title: "Sachez exactement où Watchtower écrit.",
    body: "Le stockage contient les sauvegardes, les téléchargements et les sources locales. Choisir l’emplacement volontairement évite pertes et erreurs de permission.",
    subsections: [
      ["Arborescence", "Sauvegardes, téléchargements, manga local, animé local et configuration du lecteur ont chacun leur dossier dans l’emplacement de stockage."],
      ["Choisir un emplacement", "Choisissez un dossier encore accessible plus tard. Évitez la racine d’un volume et évitez de déplacer les fichiers après coup."],
      ["Stockage cloisonné", "L’Android moderne limite les applications à leurs propres répertoires. Accordez l’accès au dossier de stockage pour que téléchargements et sources locales fonctionnent."],
      ["Revérifier les fichiers", "Après un déplacement externe, invalidez l’index des téléchargements pour que Watchtower réanalyse les dossiers."],
      ["Visibilité galerie", "Un fichier .nomedia dans le dossier des téléchargements garde couvertures et épisodes hors de la galerie système."]
    ],
    facts: [
      "Les noms de sauvegarde sont préfixés par application pour éviter les collisions.",
      "Le stockage interne est plus rapide et plus fiable que les cartes SD.",
      "Téléchargements et sources locales ne doivent pas partager un dossier."
    ]
  },
  settings: {
    title: "Les réglages qui comptent, et ce qu’ils changent.",
    body: "Au-delà des options par fonctionnalité, Watchtower a des réglages globaux pour les mises à jour, l’installation, la sécurité et les diagnostics.",
    subsections: [
      ["Général", "Thème, langue de l’interface et comportement par défaut de la bibliothèque se règlent ici une fois et s’appliquent partout."],
      ["Sécurité et confidentialité", "L’écran sécurisé bloque les captures d’écran, et le mode incognito suspend l’historique."],
      ["DNS over HTTPS", "La résolution DNS chiffrée peut contourner un blocage simple et se configure dans les réglages avancés."],
      ["Installateurs", "L’installateur hérité est un repli pour les systèmes restrictifs, tandis que Shizuku permet une installation élevée sur l’Android moderne."],
      ["Diagnostics", "Exportez les journaux de crash, capturez un logcat et reconstruisez les index quand quelque chose se comporte mal."]
    ],
    facts: [
      "L’écran sécurisé doit être désactivé pour les captures d’écran.",
      "Le mode incognito arrête l’historique, pas la progression.",
      "Les journaux de crash sont écrits localement et jamais envoyés automatiquement."
    ]
  },
  api: {
    title: "Un serveur HTTP à l’intérieur de l’application.",
    body: "L’application installée expose un serveur HTTP embarqué qui reproduit le runtime headless, pour piloter le même moteur depuis des scripts.",
    subsections: [
      ["Ce qu’est le serveur", "Un serveur HTTP basé sur Dart et shelf, embarqué dans l’application. Il partage le runtime d’extension et les modèles avec l’interface."],
      ["L’activer", "Le serveur est désactivé par défaut. Activez-le dans les réglages avancés et notez le port utilisé."],
      ["Points d’accès", "Les points d’accès sources, bibliothèque, recherche et flux exposent les mêmes opérations que l’interface."],
      ["Cas d’usage", "Automatisation, lecteurs externes, télécommande et vérifications CI peuvent tous parler à l’application en HTTP."],
      ["Sécurité", "Le serveur est destiné aux réseaux locaux ou de confiance. Ne l’exposez pas à Internet."]
    ],
    facts: [
      "Le port par défaut est 4567.",
      "La CLI headless réutilise la même couche serveur.",
      "Le serveur reste désactivé tant que vous ne l’activez pas."
    ]
  },
  cli: {
    title: "Lancez Watchtower sans écran.",
    body: "La CLI headless exécute le même moteur que l’application, pour que serveurs, sessions SSH et tâches CI récupèrent, cherchent et diffusent sans interface graphique.",
    subsections: [
      ["Ce que c’est", "Un binaire Linux compilé depuis le même moteur Flutter et QuickJS que l’application, avec une interface en ligne de commande."],
      ["Commandes courantes", "Lister les sources, chercher, mettre à jour la bibliothèque, mettre en file des téléchargements et démarrer le serveur HTTP depuis le terminal."],
      ["Mode serveur", "Le mode serve expose l’API HTTP embarquée, par laquelle les clients distants parlent à un hôte headless."],
      ["CI et automatisation", "Parce que c’est un binaire unique, la CLI s’intègre aux conteneurs et aux tâches planifiées sans appareil Android."],
      ["Parité avec l’application", "La CLI suit volontairement le comportement de l’application : une source qui marche sur mobile marche en headless."]
    ],
    facts: [
      "La CLI est publiée pour Linux à chaque version.",
      "Elle utilise les mêmes contrats de source que l’application.",
      "Le mode serveur relie la CLI aux clients distants."
    ]
  },
  deployment: {
    title: "Compilez une fois, livrez partout.",
    body: "Watchtower est compilé par la CI en application Android, paquet de bureau et binaire Linux headless depuis la même arborescence.",
    subsections: [
      ["Cibles de build", "APK Android, paquets de bureau et CLI headless sont tous produits depuis un seul dépôt et un seul pubspec."],
      ["Intégration continue", "Des workflows séparés compilent les APK release, profile et debug plus le binaire serveur headless à chaque changement."],
      ["Composants natifs", "Rust gère les bindings EPUB, image et TLS tandis que Go fournit le torrent et le streaming HTTP, tous câblés à la compilation."],
      ["Versionnage", "La version est injectée à la compilation et affichée dans l’interface, donc un build reste traçable jusqu’à un commit."],
      ["Checklist de version", "Incrémentez la version, lancez toute la matrice de build, vérifiez la CLI, puis étiquetez la version que la CI publiera."]
    ],
    facts: [
      "Quatre workflows CI couvrent les builds d’application et de CLI.",
      "Les composants Rust et Go sont compilés dans les binaires.",
      "Chaque version étiquetée publie la CLI pour Linux."
    ]
  },
  troubleshooting: {
    title: "Diagnostiquez une panne au lieu de deviner.",
    body: "La plupart des problèmes viennent de quelques causes : une source morte, un mur anti-bot, une permission de stockage ou une extension cassée. Traitez-les dans l’ordre.",
    subsections: [
      ["Diagnostic principal", "Décidez si la panne vient de la source, de l’appareil ou du compte. Une autre source qui marche désigne la source, pas l’application."],
      ["Lire une erreur", "Les codes HTTP 403 et 429 signifient souvent anti-bot, 404 une URL changée, et les délais un problème réseau ou de charge."],
      ["WebView et cookies", "Certaines sources exigent un passage WebView pour lever un défi. Effacer cookies et données WebView réinitialise une session bloquée."],
      ["Cloudflare et anti-bot", "Changer l’user agent, effacer les données WebView et attendre la fin d’un défi résolvent la plupart des boucles anti-bot."],
      ["Problèmes d’installation", "Signatures incompatibles, APK corrompus et architectures incompatibles produisent chacun une erreur d’installation distincte."]
    ],
    facts: [
      "Une source qui échoue seule est en général la source, pas l’application.",
      "403 et 429 signifient presque toujours une protection anti-bot.",
      "Les journaux de crash sont le chemin le plus rapide vers une erreur précise."
    ]
  },
  faq: {
    title: "Réponses courtes aux questions les plus fréquentes.",
    body: "Pourquoi l’application n’est pas sur un store, s’il existe un build iOS, comment les mises à jour se comportent et comment lire les journaux.",
    subsections: [
      ["Présence sur les stores", "Watchtower est distribué hors des stores car les extensions installables entrent en conflit avec leurs politiques de contenu."],
      ["iOS et bureau", "Le code Flutter vise de nombreuses plateformes, mais chacune a ses contraintes d’empaquetage et de politique."],
      ["Mises à jour et previews", "Un canal preview suit main et montre le travail à venir. Il casse plus souvent : gardez les sauvegardes automatiques activées."],
      ["Comportement de la bibliothèque", "La mise à jour globale ignore par conception les entrées terminées ou non commencées, et avertit avant les gros lots."],
      ["Journaux et rapports", "Les journaux de crash et les traces logcat sont les deux éléments à joindre pour signaler un problème."]
    ],
    facts: [
      "Watchtower n’est pas distribué via les stores d’applications.",
      "Les builds preview servent aux tests, pas à l’usage quotidien.",
      "Une sauvegarde rend toute mise à jour réversible."
    ]
  },
  contribute: {
    title: "Aidez à améliorer l’application, les sources ou la doc.",
    body: "Les contributions sont bienvenues sur l’application Flutter, le runtime d’extension, les composants natifs, la CLI et cette documentation.",
    subsections: [
      ["Comment aider", "Corrigez des bugs, ajoutez des sources, améliorez le runtime, écrivez la doc ou traduisez ce site dans une autre langue."],
      ["Environnement de dev", "Clonez le dépôt, installez les chaînes Flutter, Rust et Go, puis lancez flutter pub get et l’analyseur."],
      ["Pull requests", "Gardez des changements ciblés, expliquez la motivation et lancez l’analyse et les tests avant d’ouvrir une pull request."],
      ["Traductions", "L’interface et ce site livrent de nombreuses langues. En ajouter une revient à ajouter un fichier de locale, sans toucher à la mise en page."],
      ["Communauté", "Rejoignez le serveur Discord ou ouvrez une issue pour discuter d’une idée avant d’investir dans un gros changement."]
    ],
    facts: [
      "La doc est un dépôt séparé de l’application.",
      "Les traductions sont additives et ne changent jamais la mise en page.",
      "Lancer l’analyseur avant une pull request fait gagner du temps de relecture."
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
