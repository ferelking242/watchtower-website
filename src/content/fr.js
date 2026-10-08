// French prose overlay. Code blocks and markers are inherited from en.js.
const fr = {
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
  "extensions-catalogue": {
    title: "Le catalogue est là où vous choisissez une source.",
    body: "L’écran des extensions liste tout ce qui s’installe, le groupe par langue et montre ce qui est obsolète.",
    subsections: [
      ["Installées et disponibles", "Les extensions installées se parcourent immédiatement. Les disponibles apparaissent après l’ajout d’un dépôt et une actualisation, et s’installent en un geste."],
      ["Mettre à jour sans risque", "Une mise à jour remplace le paquet sur place et conserve ses préférences : un correctif ne coûte jamais vos réglages."],
      ["Supprimer une extension", "La désinstallation retire l’extension seule. Les entrées qu’elle fournissait restent, mais s’ouvrent comme indisponibles jusqu’à ce qu’une source les reprenne."],
      ["Groupement par langue", "Les extensions sont étiquetées par langue. Les filtres masquent celles que vous ne pouvez pas lire pour garder une liste courte."],
      ["Quand rien ne s’installe", "Une installation bloquée vient presque toujours de l’installateur système, pas de l’extension. Autorisez les sources inconnues et réessayez."]
    ],
    facts: [
      "Une mise à jour n’efface jamais les préférences d’une source.",
      "Retirer une extension garde les entrées de bibliothèque qu’elle a créées.",
      "La liste est groupée par langue, pas par dépôt."
    ]
  },

  "extensions-devkit": {
    title: "Écrivez une source et testez-la avant de publier.",
    body: "Le kit de dev est la boucle pour construire une extension : l’échafauder, l’exécuter sur le site réel et inspecter ce que le parseur a vraiment renvoyé.",
    subsections: [
      ["Échafaudage", "Partez d’un manifeste et d’un fichier d’entrée. Le manifeste déclare l’identité et le type d’élément ; le fichier d’entrée implémente les appels de liste et de recherche."],
      ["Exécuter un appel", "La CLI peut invoquer un point d’entrée et afficher le résultat brut, pour déboguer un parseur sans reconstruire l’application."],
      ["Aides au parsing", "Requêtes, parseur HTML et parseur JSON sont injectés dans le bac à sable. Pas de système de fichiers, pas de base de données, pas d’accès direct à l’interface."],
      ["Inspecter la sortie", "Comparez le modèle renvoyé à ce qu’attend le contrat de source. Un champ manquant vient en général du parseur, pas du runtime."],
      ["Itérer", "Rechargez l’extension après chaque changement. L’application garde un chemin rapide pour les builds de dev : pas de réinstallation entre deux édits."]
    ],
    facts: [
      "La CLI peut appeler un point d’entrée et afficher son résultat.",
      "Le bac à sable expose HTTP et les parseurs, rien de plus.",
      "Le manifeste déclare le type d’élément, qui choisit le lecteur ou le player."
    ]
  },

  "extensions-publishing": {
    title: "Publiez une source via un dépôt.",
    body: "Publier signifie placer un paquet d’extension signé dans un index de dépôt que les utilisateurs peuvent ajouter à l’application.",
    subsections: [
      ["Empaquetage", "Compilez l’extension en paquet, incrémentez sa version et gardez un nom de paquet stable pour que les mises à jour arrivent comme telles, pas comme des doublons."],
      ["L’index", "Un dépôt est un index JSON listant chaque paquet, sa version et son fichier. Hébergez-le en HTTPS pour que l’application puisse le récupérer."],
      ["Versionnage", "C’est la version de l’index que compare l’application. Incrémentez-la à chaque publication, sinon les utilisateurs ne verront jamais la mise à jour."],
      ["Confiance et signature", "Les utilisateurs sont avertis que les dépôts tiers s’exécutent avec les privilèges de l’application. Signez vos paquets et publiez depuis un endroit que vous contrôlez."],
      ["Maintenance", "Une source casse quand son site change. Attendez-vous à republier, et surveillez les rapports de problème pour être prévenu tôt."]
    ],
    facts: [
      "L’index doit se terminer par index.min.json pour être accepté.",
      "Un nom de paquet stable, c’est ce qui fait qu’une mise à jour en est une.",
      "Une source casse dès que le site qu’elle cible change."
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
};

export default fr;
