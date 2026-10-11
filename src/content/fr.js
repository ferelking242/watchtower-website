// French prose overlay, kept in sync with en.js as the reference translation.
// Code blocks and markers are inherited from English.
const fr = {
  "getting-started": {
    title: "Watchtower en dix minutes.",
    body: "Watchtower réunit animés, séries, mangas, romans et musique dans une seule application. Elle arrive vide, volontairement : vous choisissez les sources, et tout ce que vous regardez ou lisez reste sur votre appareil.",
    subsections: [
      ["Ce qu'il vous faut", "Un téléphone ou une tablette sous Android 8.0 ou plus récent pour l'application complète. N'importe quelle machine Linux, macOS ou Windows peut faire tourner la ligne de commande à la place, sans session graphique. Une chose n'est pas facultative : une adresse de dépôt de sources, car Watchtower ne contient aucun contenu."],
      ["Ajouter votre première source", "Ouvrez Plus, puis Extensions, puis Dépôts. Collez une adresse de dépôt qui se termine par index.min.json et validez. La liste des extensions se remplit dès que l'index est chargé."],
      ["Installer les extensions", "Chaque extension apprend à Watchtower un site précis. Touchez installer à côté de celles qui vous intéressent, autorisez l'installation de sources inconnues si Android le demande, et les sources apparaissent dans Parcourir."],
      ["Construire votre bibliothèque", "Ouvrez une source, trouvez une série et touchez Ajouter à la bibliothèque. À partir de là, Watchtower suit votre progression, cherche les nouveaux chapitres et garde l'entrée au même endroit."],
      ["Choisir vos types de média", "Watchtower gère mangas, animés, romans et musique côte à côte. Chaque type s'ouvre dans son propre lecteur, choisi automatiquement selon ce que l'extension déclare."],
      ["Les surprises du premier lancement", "Un écran Parcourir vide signifie qu'aucune extension n'est encore installée, pas que l'application est cassée. Un dépôt qui refuse de se charger vient presque toujours d'une adresse périmée ou d'un portail Wi-Fi qui bloque."],
      ["Si le premier écran semble vide", "Une liste Parcourir vide signifie qu'aucune extension n'est encore installée, pas que l'application est cassée. Si un dépôt refuse de se charger, vérifiez que son adresse se termine par index.min.json, puis réessayez sur un autre réseau avant de le croire disparu."],
    ],
    facts: [
      "Watchtower ne contient aucun contenu. Les sources sont à vous de choisir.",
      "Les extensions sont du JavaScript ordinaire exécuté dans un bac à sable.",
      "Votre bibliothèque vit sur votre appareil, pas sur un serveur Watchtower.",
      "Android 8.0+ est le minimum pour l'application mobile.",
      "Une liste Parcourir vide signifie qu'aucune extension n'est installée, pas un échec.",
    ],
  },

  installation: {
    title: "Installez la version adaptée à votre appareil.",
    body: "Il y a trois façons de faire tourner Watchtower : l'application Android, une version de bureau, ou une ligne de commande Linux pour les serveurs. Elles partagent le même moteur, donc une source qui fonctionne dans l'une fonctionne dans les autres.",
    subsections: [
      ["Android", "La cible principale, et la seule version qui reçoit toutes les fonctions en premier. Téléchargez l'APK de version stable, ou un APK d'aperçu pour tester le travail en cours. Autorisez l'installation de sources inconnues quand Android le demande, car Watchtower n'est pas distribué sur les magasins d'applications."],
      ["Bureau", "Des versions Windows, Linux et macOS existent pour regarder sur un plus grand écran. Compilez-les depuis les sources avec Flutter, car les fichiers publiés concernent d'abord Android et la ligne de commande Linux."],
      ["Ligne de commande Linux", "Un seul binaire, sans fenêtre. Il utilise le même moteur d'extensions, donc il peut chercher, parcourir et télécharger sur un serveur ou en SSH. Le script d'installation le copie avec ses fichiers dans le dossier de votre choix."],
      ["Stable ou aperçu", "Les versions d'aperçu suivent le code le plus récent et cassent plus souvent. Gardez les sauvegardes automatiques activées si vous en utilisez une, et prévoyez de réinstaller la version stable en cas de problème."],
      ["Compiler depuis les sources", "Il vous faut Flutter 3.38 ou plus récent, Dart 3.10 ou plus récent, et une chaîne d'outils Rust. Go 1.21 ou plus récent n'est nécessaire que si vous voulez recompiler le serveur torrent vous-même."],
      ["Garder l'application à jour", "Watchtower vous prévient quand une nouvelle version existe, et vous l'installez comme la première fois. Votre bibliothèque et vos réglages sont conservés tels quels."],
      ["Si l'installation échoue", "Les messages d'installation courants sont expliqués sur la page des erreurs. Une signature incompatible signifie qu'une copie signée différemment est déjà installée et doit d'abord être supprimée, un téléchargement corrompu doit être récupéré à nouveau, et une incompatibilité d'architecture de processeur signifie que la mauvaise version a été téléchargée."],
    ],
    facts: [
      "Android est la seule plateforme avec des versions publiées.",
      "Le binaire sans écran est compilé pour Linux x86_64.",
      "Rust est nécessaire pour compiler depuis les sources ; Go est facultatif.",
      "Les versions d'aperçu et stable partagent les mêmes données, donc passer de l'une à l'autre garde votre bibliothèque.",
      "Supprimez une installation en conflit avant de la remplacer par une version signée différemment.",
    ],
  },

  "adding-sources": {
    title: "D'où vient votre contenu.",
    body: "Watchtower connaît deux sortes de sources. Les sources en ligne arrivent sous forme d'extensions depuis un dépôt que vous ajoutez. Les sources hors ligne sont des dossiers de votre appareil. La plupart des gens utilisent les deux.",
    subsections: [
      ["Ajouter un dépôt", "Allez dans Plus, puis Extensions, puis Dépôts, et collez l'adresse du dépôt. L'application récupère l'index et liste toutes les extensions qu'il contient. Vous pouvez en ajouter plusieurs à la fois."],
      ["Installer ce dont vous avez besoin", "Rafraîchissez la liste, puis touchez installer à côté d'une extension. Android peut demander la permission d'installer des applications inconnues la première fois. Les extensions installées apparaissent aussitôt dans Parcourir."],
      ["Garder les sources à jour", "Rafraîchissez un dépôt quand vous voulez des versions plus récentes. Une mise à jour remplace l'extension sur place et conserve ses réglages, donc il n'y a rien à reconfigurer."],
      ["Utiliser vos propres fichiers", "Indiquez à Watchtower un dossier de mangas ou d'animés que vous possédez déjà, et il devient une source normale. Sans dépôt, sans réseau, sans compte."],
      ["Ne faites confiance qu'à ce que vous connaissez", "Un dépôt peut diffuser n'importe quoi, et une extension s'exécute avec les mêmes accès que l'application. Traitez un dépôt inconnu comme un programme d'installation inconnu."],
      ["Quand un dépôt échoue", "Une adresse qui ne se charge pas est généralement expirée, bloquée, ou copiée sans son chemin d'index. Vérifiez qu'elle se termine par index.min.json avant de conclure que le dépôt a disparu."],
      ["Quand un dépôt refuse de se charger", "Un dépôt qui ne se charge pas vient généralement d'une adresse expirée, d'un chemin qui ne se termine pas par index.min.json, ou d'un réseau qui le bloque. Confirmez l'adresse, puis essayez un autre réseau avant de le supprimer."],
    ],
    facts: [
      "Un dépôt n'est qu'un fichier JSON hébergé sur un serveur web.",
      "Les mises à jour conservent vos préférences de source.",
      "Les dossiers locaux fonctionnent sans aucun réseau.",
      "Watchtower ne vérifie ni n'approuve les dépôts tiers.",
      "Un dépôt qui ne se charge pas vient généralement d'une adresse erronée ou expirée.",
    ],
  },

  library: {
    title: "Tout ce que vous suivez, au même endroit.",
    body: "La bibliothèque est la maison de tout ce que vous gardez. Elle retient où vous vous êtes arrêté, range les séries en étagères, et sert de point de départ aux mises à jour et aux téléchargements.",
    subsections: [
      ["Ajouter et retirer", "Ouvrez une série et touchez Ajouter à la bibliothèque. Retirez-la au même endroit : la série cesse d'être mise à jour sans perdre votre historique de lecture."],
      ["Les catégories", "Les catégories sont les étagères de votre bibliothèque. Une série peut figurer sur plusieurs à la fois, ce qui permet de séparer ce que vous suivez chaque semaine de ce que vous gardez pour plus tard."],
      ["La progression", "Watchtower retient l'épisode ou le chapitre exact où vous êtes arrivé, entrée par entrée, et envoie cette progression à un service de suivi si vous en avez connecté un."],
      ["Filtres et tri", "Masquez ce que vous avez terminé, n'affichez que ce qui est téléchargé, ou triez par date de sortie. Les filtres ne font qu'affecter l'affichage et ne suppriment jamais rien."],
      ["Plusieurs appareils", "Il n'y a pas de synchronisation intégrée entre appareils. Déplacez votre bibliothèque avec un fichier de sauvegarde, et gardez les téléchargements à part, car ils n'en font pas partie."],
      ["Quand une entrée se casse", "Si une série s'ouvre vide ou perd sa couverture, sa source a changé sous vos pieds. Rafraîchissez l'entrée, puis migrez-la vers une autre source si le problème persiste."],
      ["Quand une entrée ne se met pas à jour ou ne s'ouvre pas", "Si une série ne s'ouvre pas, sa source a changé en dessous. Rafraîchissez d'abord l'entrée, et migrez-la vers une autre source si le problème persiste. Un rafraîchissement qui ne renvoie rien signifie que l'extension est périmée, pas l'application."],
    ],
    facts: [
      "Les séries terminées sont laissées tranquilles par les mises à jour de fond.",
      "Une série peut appartenir à plusieurs catégories.",
      "La progression est suivie par chapitre ou épisode, pas par série.",
      "Retirer une série de la bibliothèque ne supprime pas votre historique.",
      "Rafraîchir corrige la plupart des entrées cassées ; la migration corrige le reste.",
    ],
  },

  browse: {
    title: "Trouver quoi regarder ou lire.",
    body: "Parcourir, c'est explorer ce qu'une source propose et chercher dans toutes en même temps. C'est le moyen le plus rapide de répondre à la question de savoir qui possède ce titre.",
    subsections: [
      ["Parcourir une source", "Ouvrez une source pour voir ses listes Populaires et Récentes. La plupart exposent aussi des filtres par genre, année ou statut, en haut de la liste."],
      ["Chercher partout", "La recherche interroge toutes les sources activées en parallèle et regroupe les résultats par source, ce qui montre d'un coup d'œil qui a le titre et qui ne l'a pas."],
      ["Quand un titre n'apparaît pas", "Les sources indexent souvent le titre dans sa langue d'origine plutôt qu'en français. Essayez le titre natif, une autre romanisation, ou un simple fragment."],
      ["Passer d'une source à l'autre", "Si une source ralentit ou cesse de fonctionner, migrez l'entrée au lieu de la rajouter. Watchtower retrouve la série sur la nouvelle source et transporte votre progression et vos catégories."],
      ["Filtrer par langue", "Les extensions sont étiquetées selon la langue qu'elles servent. Masquez celles que vous ne lisez pas pour garder des résultats pertinents."],
      ["Pourquoi les résultats diffèrent", "Chaque source indexe son propre catalogue : un titre peut être complet chez l'une et partiel chez l'autre. Comparer deux sources avant de choisir est normal."],
      ["Quand la recherche ne renvoie rien", "Une recherche vide vient généralement d'un titre qui ne correspond pas, pas d'une source cassée. Essayez le nom dans la langue d'origine, une graphie romanisée ou un fragment plus court, et rappelez-vous qu'une source qui ne répond pas n'empêche pas les autres."],
    ],
    facts: [
      "La recherche interroge toutes les sources activées d'un coup.",
      "Les sources sans liste de populaires fonctionnent quand même via la recherche.",
      "La migration déplace votre progression, pas vos fichiers téléchargés.",
      "Les étiquettes de langue des extensions alimentent le filtre par langue.",
      "Une recherche vide vient généralement d'un titre qui ne correspond pas, pas d'une source morte.",
    ],
  },

  extensions: {
    title: "Les extensions sont la porte de Watchtower vers le web.",
    body: "Une extension est un petit programme qui apprend à Watchtower un site : comment le lister, le chercher, le lire et le diffuser. Tout ce que vous parcourez passe par une extension.",
    subsections: [
      ["Ce qu'est une extension", "C'est du JavaScript, pas un module à compiler. Elle sait demander à un site ses listes, ses résultats de recherche, ses chapitres et ses flux vidéo, et elle répond dans la forme que Watchtower comprend."],
      ["Comment elles vous parviennent", "Les extensions sont regroupées dans des dépôts. Vous ajoutez un dépôt une fois, et chaque extension qu'il contient devient installable depuis l'écran des extensions."],
      ["Les types de contenu", "Une extension déclare ce qu'elle sert : manga, animé, roman, musique ou jeu. Cette déclaration décide quel lecteur s'ouvre quand vous touchez un résultat."],
      ["Mises à jour et désinstallation", "Les extensions se mettent à jour sur place et gardent leurs réglages. En désinstaller une ne retire que l'extension ; vos entrées de bibliothèque survivent et attendent simplement une source qui les serve à nouveau."],
      ["Pourquoi l'auteur compte", "Une extension s'exécute dans Watchtower mais peut accéder au réseau et lire ce que vous lui donnez. Installez depuis des dépôts de confiance, et méfiez-vous de tout ce qui est inconnu."],
      ["Quand une extension cesse de marcher", "Les sites changent, et une source casse avec eux. C'est presque toujours une extension cassée, pas une application cassée, et le correctif arrive sous forme de mise à jour."],
      ["Quand une installation ou une mise à jour échoue", "Une installation qui échoue vient presque toujours d'Android qui bloque les applications inconnues, et une mise à jour qui échoue d'un téléchargement interrompu. Autorisez les installations depuis votre gestionnaire de fichiers ou votre navigateur, puis réessayez, et réinstallez depuis zéro si le fichier était tronqué."],
    ],
    facts: [
      "Les extensions sont du JavaScript, exécuté dans un bac à sable dans l'application.",
      "Une extension couvre un seul site.",
      "Installer et mettre à jour ne touche jamais à votre bibliothèque.",
      "Une source qui casse soudainement vient presque toujours d'un changement du site.",
      "Une installation qui échoue vient généralement d'Android, pas de l'extension.",
    ],
  },

  "extensions-catalogue": {
    title: "Choisir et entretenir vos sources.",
    body: "L'écran des extensions est votre catalogue : ce qui est installé, ce qui est disponible, et ce qui est périmé. C'est ici que vous gardez votre liste de sources saine.",
    subsections: [
      ["Installées et disponibles", "Les extensions installées fonctionnent immédiatement. Les disponibles viennent d'un dépôt que vous avez ajouté : rafraîchissez la liste, puis installez celles que vous voulez d'un seul geste."],
      ["Mettre à jour une extension", "Quand une version plus récente existe, elle apparaît dans les mises à jour. L'installer remplace l'ancienne copie sur place et conserve ses préférences, donc un correctif ne vous coûte rien."],
      ["Retirer une extension", "Désinstallez-la depuis le même écran. Vos entrées de bibliothèque restent en place et s'affichent simplement comme indisponibles jusqu'à ce qu'une autre source, ou une réinstallation, puisse les servir."],
      ["Garder la liste lisible", "Les extensions sont regroupées par langue. Filtrez celles que vous ne lisez pas pour ne voir que les sources réellement utiles."],
      ["Quand rien ne s'installe", "Une installation qui échoue est presque toujours Android qui bloque les applications inconnues, pas l'extension. Autorisez les installations depuis votre gestionnaire de fichiers ou votre navigateur, puis réessayez."],
      ["Garder le catalogue à jour", "Rafraîchissez vos dépôts de temps en temps. De nouvelles extensions apparaissent et les cassées reçoivent des correctifs, mais rien n'arrive tant que vous ne le demandez pas."],
      ["Quand une extension disparaît", "Une extension installée peut disparaître si Android l'a supprimée, ou si elle est masquée par le filtre de langue ou le bouton de contenu adulte. Vérifiez d'abord les filtres, puis réinstallez-la depuis le dépôt si elle a vraiment disparu."],
    ],
    facts: [
      "Les mises à jour préservent les réglages que vous avez définis sur une source.",
      "Désinstaller une extension garde vos entrées de bibliothèque.",
      "Les extensions sont regroupées par langue, pas par dépôt.",
      "Rafraîchir un dépôt est ce qui fait apparaître les extensions nouvelles et mises à jour.",
      "Une extension manquante est généralement masquée par un filtre, pas désinstallée.",
    ],
  },

  "extensions-devkit": {
    title: "Créer votre propre source.",
    body: "Si vous voulez ajouter un site que personne n'a encore couvert, vous pouvez écrire une extension vous-même. Il faut un fichier qui décrit le site et un fichier qui implémente les appels.",
    subsections: [
      ["Ce qu'il faut écrire", "Deux fichiers : un manifeste qui nomme l'extension et déclare sa langue et son type de contenu, et un fichier d'entrée avec les appels qui récupèrent les listes, la recherche, les détails, les chapitres et les pages."],
      ["Partir d'une source existante", "Le chemin le plus rapide est de copier une extension qui fonctionne pour un site similaire et d'en changer les adresses et l'analyse. La forme des appels reste identique."],
      ["Tester sans l'application", "La ligne de commande peut exécuter un seul appel et afficher exactement ce qui est revenu. C'est bien plus rapide que d'installer l'extension sur un appareil à chaque ligne modifiée."],
      ["Ce que votre code peut utiliser", "Des requêtes réseau, un analyseur HTML et un analyseur JSON. Pas d'accès aux fichiers, pas de base de données, et aucun moyen d'atteindre les écrans de l'application."],
      ["Quand le résultat semble faux", "Si un champ est vide, c'est presque toujours l'analyse et non le moteur d'exécution. Comparez ce que vous renvoyez à ce que le contrat de source attend."],
      ["Avant de publier", "Testez l'extension contre le site réel, vérifiez les appels de recherche, de liste et de pages, et confirmez que le type de contenu est correct pour qu'elle s'ouvre dans le bon lecteur."],
      ["Quand un appel ne renvoie rien", "Un résultat vide vient presque toujours d'un sélecteur qui ne correspond plus au site, plutôt que d'un défaut du moteur. Récupérez la page, comparez vos sélecteurs au balisage actuel, et testez l'appel seul depuis la ligne de commande avant de recompiler l'application."],
    ],
    facts: [
      "Une source fonctionnelle ne nécessite qu'un manifeste et un fichier d'entrée.",
      "La ligne de commande peut tester un seul appel isolément.",
      "Les extensions peuvent atteindre le réseau et analyser des pages, rien de plus.",
      "Le type de contenu que vous déclarez décide quel lecteur s'ouvre.",
      "Un résultat vide vient généralement d'un sélecteur qui ne correspond plus.",
    ],
  },

  "extensions-publishing": {
    title: "Partager une source avec d'autres.",
    body: "Une fois votre extension fonctionnelle, la publier signifie la placer dans un dépôt que d'autres peuvent ajouter. Un dépôt, c'est un petit fichier JSON et les paquets d'extensions qu'il liste.",
    subsections: [
      ["Ce qu'est un dépôt", "Un dossier de paquets d'extensions et un index JSON qui les liste. Hébergez le dossier n'importe où en HTTPS, et donnez aux gens l'adresse du fichier d'index."],
      ["Publier une mise à jour", "Augmentez le numéro de version, reconstruisez le paquet, et mettez à jour la version dans l'index. Watchtower compare ce numéro, donc une version inchangée est une mise à jour que personne ne reçoit."],
      ["Garder un nom stable", "Le nom du paquet est l'identité de l'extension. Le changer fait obtenir aux utilisateurs une seconde extension distincte au lieu d'une mise à jour de la première."],
      ["Être clair sur la confiance", "Les personnes qui installent depuis votre dépôt exécutent votre code avec les accès de l'application. Dites qui vous êtes, et gardez le dépôt à un endroit que vous contrôlez."],
      ["Entretenir une source", "Les sites changent sans prévenir, donc attendez-vous à republier. Surveillez les signalements de source cassée et corrigez avant que les utilisateurs ne s'éloignent."],
      ["L'adresse de l'index compte", "L'adresse que vous diffusez doit pointer vers index.min.json. Tout autre chemin laisse les gens devant un dépôt qui refuse de se charger."],
      ["Quand les utilisateurs ne reçoivent pas votre mise à jour", "La cause habituelle est un numéro de version dans l'index qui n'a pas changé, ou une adresse de dépôt qui pointe ailleurs que vers le fichier d'index. Augmentez la version, confirmez l'adresse, et vérifiez que le fichier est accessible en HTTPS."],
    ],
    facts: [
      "Un dépôt est un dossier HTTPS plus un index JSON.",
      "La version dans l'index est ce qui signale aux utilisateurs qu'une mise à jour existe.",
      "Un nom de paquet stable est ce qui fait qu'une mise à jour est une mise à jour.",
      "Attendez-vous à republier chaque fois que le site ciblé change.",
      "Une mise à jour que personne ne reçoit vient généralement d'un numéro de version inchangé.",
    ],
  },

  "local-source": {
    title: "Lire et diffuser vos propres fichiers.",
    body: "Watchtower peut traiter un dossier de votre appareil comme une source normale. Votre propre collection se comporte alors exactement comme un catalogue en ligne, suivi de progression compris.",
    subsections: [
      ["Mangas et romans", "Placez un dossier par série dans le dossier local, et un fichier par chapitre à l'intérieur. Les chapitres peuvent être des archives CBZ ou de simples dossiers d'images, et le nom du dossier devient le titre de la série."],
      ["Animés", "Placez un dossier par série dans le dossier d'animés local, et un fichier vidéo par épisode à l'intérieur. Les épisodes sont ordonnés par nom de fichier, donc numérotez-les."],
      ["Couvertures et détails", "Une image de couverture dans le dossier de la série devient la vignette. Un fichier de détails à côté peut ajouter auteur, artiste, description et genres quand le nom du dossier ne suffit pas."],
      ["Ajouter de nouveaux fichiers", "Déplacez des fichiers depuis l'extérieur de l'application, puis rafraîchissez la source locale pour que Watchtower réanalyse le dossier. Les fichiers ajoutés application fermée ne sont pas vus avant."],
      ["Lire hors ligne", "Les sources locales ne touchent jamais au réseau : elles fonctionnent en mode avion et ne peuvent être ni bloquées ni limitées. Les téléchargements se comportent pareil une fois sur le disque."],
      ["Masquer les fichiers de la galerie", "Déposez un fichier .nomedia dans le dossier pour que les couvertures et les épisodes restent hors de l'application Photos."],
      ["Quand les couvertures sont vides ou des fichiers manquent", "Une couverture vide ou une série qui ne s'ouvre pas signifie presque toujours que la structure des dossiers est incorrecte. Vérifiez qu'il y a un dossier par série et un fichier par chapitre ou épisode, puis retirez l'entrée, videz la base de données pour les éléments hors bibliothèque, et laissez la source locale réanalyser le dossier."],
    ],
    facts: [
      "Les archives CBZ comme les simples dossiers d'images sont lus comme des chapitres.",
      "L'ordre des épisodes suit le nom de fichier, donc numérotez vos fichiers.",
      "Un fichier .nomedia garde les médias locaux hors de la galerie système.",
      "Les sources locales fonctionnent sans aucune connexion réseau.",
      "Une structure de dossiers incorrecte est la cause habituelle d'une couverture vide.",
    ],
  },

  "video-player": {
    title: "Regarder un épisode.",
    body: "Le lecteur couvre la vidéo de gestes et de panneaux, donc rien ne quitte l'écran pendant que vous regardez. Qualité, audio, sous-titres et vitesse sont à un geste.",
    subsections: [
      ["Commandes de base", "Touchez une fois pour afficher les commandes, double-touchez un côté pour avancer ou reculer, et appuyez longuement pour accélérer. Pincez pour zoomer quand la vidéo a de la marge."],
      ["Qualité et audio", "Les sources qui proposent plusieurs résolutions ou pistes audio les exposent dans des panneaux qui montent sans interrompre la lecture. Votre choix est retenu pour la série."],
      ["Sous-titres", "Les pistes de sous-titres viennent de la source ou d'un fichier que vous fournissez. Elles se choisissent et s'ajustent depuis le panneau des sous-titres, et leur apparence se règle une fois dans les réglages."],
      ["Épisodes et statistiques", "Un panneau latéral liste tous les épisodes pour naviguer, et un autre montre ce que le lecteur fait réellement du flux quand quelque chose semble anormal."],
      ["Quand le lecteur interne peine", "Un codec rare ou un flux cassé peut être confié à un lecteur externe comme mpv ou VLC. C'est la solution de repli fiable, pas le signe que l'épisode est inutilisable."],
      ["Sauvegarder votre position", "La progression est écrite en continu pendant la lecture, donc fermer l'application ou perdre le courant ne fait pas perdre votre position."],
      ["Quand une vidéo ne se lance pas", "Un flux qui refuse de démarrer vient souvent d'un codec que le lecteur interne ne gère pas ou d'un lien expiré. Passez d'abord à un lecteur externe comme mpv ou VLC, puis mettez à jour l'extension si tous les épisodes de cette source échouent."],
    ],
    facts: [
      "La lecture utilise un décodeur accéléré par le matériel par défaut.",
      "Les gestes gèrent la luminosité, le volume et le déplacement.",
      "La progression est enregistrée en continu, pas seulement à la sortie.",
      "Un lecteur externe est la solution de repli pour les codecs non pris en charge.",
      "Confier un flux récalcitrant à un lecteur externe est la solution de repli fiable.",
    ],
  },

  "player-settings": {
    title: "Adapter le lecteur à vos habitudes.",
    body: "Les réglages du lecteur décident comment la vidéo est décodée, ce que font les gestes, et quels boutons apparaissent sur l'écran. Changez-les une fois et chaque épisode suit.",
    subsections: [
      ["Décodage", "Le décodage matériel est plus rapide et plus léger pour la batterie, et convient à presque tout. Passez au décodage logiciel quand un fichier précis se lit mal, car il tolère mieux les codecs inhabituels."],
      ["Gestes", "Décidez quel balayage fait quoi : vertical pour la luminosité et le volume, horizontal pour avancer et reculer. Chaque direction peut être inversée si elle vous paraît à l'envers."],
      ["Boutons personnalisés", "Ajoutez les actions que vous utilisez le plus, comme passer un générique ou prendre une capture, directement sur le lecteur pour qu'elles cessent d'être enfouies dans les menus."],
      ["Lecture avancée", "Taille du tampon, format d'image forcé et incrustation vidéo sont là pour le cas rare où le comportement automatique ne convient pas. La plupart des gens n'y touchent jamais."],
      ["Exceptions par série", "Presque tous les réglages du lecteur peuvent être remplacés pour une seule série sans changer les valeurs par défaut. Utile pour une série à l'audio particulier."],
      ["Après une sauvegarde des réglages", "Les boutons personnalisés et les préférences du lecteur voyagent dans votre fichier de sauvegarde, donc une restauration sur un nouvel appareil ramène votre disposition."]
    ],
    facts: [
      "Le décodage matériel est la valeur par défaut et convient à la plupart des fichiers.",
      "Chaque direction de geste peut être inversée ou désactivée.",
      "Les réglages peuvent être remplacés pour une seule série.",
      "Les préférences du lecteur sont incluses dans une sauvegarde.",
    ],
  },

  subtitles: {
    title: "Rendre les sous-titres lisibles.",
    body: "Les sous-titres viennent de trois endroits : le flux, un fichier sur votre appareil, ou une source qui les récupère. Cette page couvre le choix d'une piste, la correction du minutage, et le style de ceux que Watchtower dessine lui-même.",
    subsections: [
      ["Choisir une piste", "Quand un épisode porte plusieurs pistes de sous-titres, elles sont listées dans le panneau des sous-titres. Votre choix est retenu pour cette série, donc vous ne choisissez qu'une fois."],
      ["Corriger le minutage", "Une piste en avance ou en retard sur l'audio se décale par petits pas jusqu'à s'aligner. Le décalage est retenu, donc la correction survit au redémarrage de l'application."],
      ["Style", "Police, taille, couleur, contour et arrière-plan s'appliquent aux sous-titres textuels. Ces réglages ne touchent pas à la vidéo et peuvent être essayés en plein épisode sans risque."],
      ["Vos propres fichiers", "Placez un fichier de sous-titres à côté d'un épisode local avec un nom correspondant, et le lecteur le charge automatiquement, sans rien à régler."],
      ["Sous-titres incrustés dans l'image", "Certains sous-titres sont des images plutôt que du texte. Ils ne peuvent pas être restylés, seulement repositionnés ou redimensionnés, car le style fait partie de l'image."],
      ["Quand les sous-titres n'apparaissent pas", "Vérifiez d'abord le panneau des sous-titres : la source peut n'en proposer aucun, ou le nom du fichier peut ne pas correspondre assez à l'épisode pour être associé."]
    ],
    facts: [
      "Les sous-titres textuels peuvent être restylés ; les sous-titres image non.",
      "Les décalages de minutage sont enregistrés et survivent à un redémarrage.",
      "Un fichier correspondant à côté d'un épisode local se charge tout seul.",
      "Les choix de sous-titres sont retenus par série.",
    ],
  },

  reader: {
    title: "Lire mangas, webtoons et romans.",
    body: "Le lecteur gère les mangas en pages, les webtoons verticaux et les romans textuels. Vous réglez une valeur par défaut une fois et la remplacez pour les séries qui ont besoin d'autre chose.",
    subsections: [
      ["Choisir un mode de lecture", "Le mode page convient au manga imprimé, et le mode bande continue aux webtoons dessinés en une seule grande image. Réglez une valeur par défaut et changez-la par série quand un titre se lit mieux autrement."],
      ["Tourner les pages", "Touchez les bords pour avancer ou reculer, balayez pour faire défiler en bande continue, et pincez pour zoomer. Toucher le centre ouvre le menu sans quitter la page."],
      ["Reprendre où vous étiez", "Watchtower retient la page atteinte dans chaque chapitre, donc rouvrir une série vous replace exactement où vous vous êtes arrêté plutôt qu'au début."],
      ["Pages larges et doubles", "Les doubles pages et les scans anormalement larges peuvent être scindés, pivotés ou mis à l'échelle pour rester lisibles sur un téléphone."],
      ["Chapitres téléchargés", "Les chapitres téléchargés s'ouvrent instantanément et sont signalés dans la liste des chapitres, ce qui rend la lecture hors ligne vraiment pratique."],
      ["Romans", "Les romans textuels utilisent la même entrée de bibliothèque mais s'ouvrent dans un lecteur de texte plutôt qu'un lecteur d'images, choisi automatiquement selon le type déclaré par l'extension."],
      ["Quand une page ne se charge pas", "Il arrive que l'application ne reconnaisse pas une image d'un chapitre. Quitter le lecteur et rouvrir le chapitre suffit généralement, et si cela persiste, c'est l'image elle-même qui manque sur la source plutôt que dans l'application."],
      ["Deux pages à la fois", "Un lecteur à double page n'est pas disponible, car les scans s'accordent rarement sur l'emplacement d'un saut de page. Lire une page à la fois, ou utiliser le long strip pour les webtoons, est le comportement actuel."],
    ],
    facts: [
      "La bande continue convient aux webtoons verticaux et ignore la largeur de page.",
      "Le lecteur retient la page atteinte par chapitre.",
      "Le zoom est désactivé en bande continue tant que vous ne l'activez pas.",
      "Les romans s'ouvrent dans un lecteur de texte, pas dans le lecteur d'images.",
      "Rouvrir un chapitre corrige une page qui n'a pas pu se charger.",
    ],
  },

  "reader-settings": {
    title: "Régler la lecture à votre goût.",
    body: "Les réglages du lecteur couvrent le sens de lecture, la mise à l'échelle et le recadrage des pages, et les zones de l'écran qui tournent la page.",
    subsections: [
      ["Lecture", "Réglez le mode par défaut, si les pages s'animent en tournant, et quels chapitres ignorer. Les chapitres ignorés sont toujours là, ils ne vous interrompent simplement pas."],
      ["Affichage", "Verrouillage de rotation, couleur de fond et plein écran sont réunis ici. Un fond sombre convient à la lecture de nuit et réduit l'éblouissement entre les pages."],
      ["Pages", "Choisissez comment une page remplit l'écran : la largeur, la hauteur, tout l'écran, ou sa taille d'origine. Le recadrage des bordures retire automatiquement les marges de scan."],
      ["Zones tactiles", "Choisissez où toucher tourne la page en avant, en arrière, et ouvre le menu. Toute la disposition peut être inversée pour lire de la main gauche."],
      ["Bande continue", "Une marge latérale et des zones tactiles distinctes rendent les webtoons verticaux confortables sur un écran large, où une image pleine largeur serait trop petite."],
      ["Exceptions par série", "Chacun de ces réglages peut être remplacé pour une série, ce qui aide pour un titre scanné de façon inhabituelle ou se lisant dans l'autre sens."]
    ],
    facts: [
      "Les options de mise à l'échelle incluent largeur, hauteur, écran et taille d'origine.",
      "Le recadrage des bordures retire les marges de scan pour vous.",
      "Les zones tactiles peuvent être inversées pour lire de la main gauche.",
      "Les règles d'exclusion peuvent être remplacées par série.",
    ],
  },

  updates: {
    title: "Garder votre bibliothèque à jour.",
    body: "Les mises à jour vérifient vos sources pour de nouveaux chapitres et épisodes. Bien faites, elles vous tiennent à jour. Mal faites, elles martèlent une source jusqu'à ce qu'elle bloque tout le monde.",
    subsections: [
      ["Mise à jour globale", "Parcourt toute votre bibliothèque et signale ce qui est nouveau. Limitez-la aux catégories que vous suivez vraiment, pour ne pas vérifier chaque jour des séries lentes."],
      ["Ce qui est ignoré", "Les séries terminées, celles que vous n'avez pas commencées, et celles sans sortie attendue sont ignorées automatiquement. C'est ce qui empêche une grande bibliothèque de générer un déluge de requêtes."],
      ["Notifications", "Les nouveaux chapitres et épisodes déclenchent une notification, que vous pouvez limiter à une catégorie ou couper entièrement sans désactiver les mises à jour."],
      ["Rafraîchir une seule série", "Ouvrez le menu de la série et rafraîchissez-la quand vous voulez vérifier tout de suite, sans lancer une mise à jour sur tout le reste."],
      ["Pourquoi c'est important", "Une source qui reçoit trop de requêtes peut bloquer toute l'application par protection anti-robot. Limiter les mises à jour à ce que vous suivez protège les sources dont tout le monde dépend."],
      ["Si les mises à jour semblent s'arrêter", "L'optimisation de batterie d'Android peut suspendre le travail en arrière-plan. Exemptez Watchtower des restrictions de batterie si les mises à jour n'arrivent qu'à l'ouverture."],
      ["Quand une mise à jour signale une erreur", "Une mise à jour qui échoue sur une série vient généralement de cette source plutôt que de l'application. Rafraîchissez la série à la main, mettez l'extension à jour, et rappelez-vous qu'une limitation de débit après une grande mise à jour se dissipe avec le temps plutôt qu'avec des tentatives répétées."],
    ],
    facts: [
      "Les mises à jour peuvent être limitées aux catégories que vous choisissez.",
      "Les séries terminées sont ignorées par défaut.",
      "Un trafic de mise à jour trop lourd peut pousser une source à bloquer l'application.",
      "L'optimisation de batterie peut retarder les mises à jour de fond.",
      "Une mise à jour qui échoue sur une série désigne cette source, pas l'application.",
    ],
  },

  downloads: {
    title: "Emporter votre bibliothèque hors ligne.",
    body: "Les téléchargements enregistrent épisodes et chapitres sur votre appareil pour regarder ou lire sans connexion. Ils vivent dans une seule file d'attente, avec des limites claires.",
    subsections: [
      ["Lancer un téléchargement", "Ajoutez chapitres ou épisodes depuis une série et ils rejoignent la file de téléchargement. Depuis la file, vous pouvez réordonner la suite ou annuler ce que vous ne voulez plus."],
      ["Pourquoi un à la fois", "Watchtower télécharge une série à la fois depuis une même source. Envoyer beaucoup de requêtes à un seul site est exactement ce qui déclenche la protection anti-robot qui fait bloquer les sources."],
      ["Mode téléchargements uniquement", "Activez-le pour masquer tout ce que vous n'avez pas enregistré. L'application ne montre alors que ce qui est sur votre appareil, ce qui est utile en voyage ou en connexion limitée."],
      ["Où sont stockés les fichiers", "Les téléchargements atterrissent dans un dossier nommé d'après la source, puis la série. Renommer l'un ou l'autre casse la détection, donc laissez-les tranquilles."],
      ["Quand les téléchargements disparaissent", "Si le contenu enregistré cesse d'apparaître, le dossier de stockage a probablement bougé ou est devenu illisible. Vérifiez l'emplacement de stockage et reconstruisez l'index des téléchargements."],
      ["Ce qu'une sauvegarde ne couvre pas", "Les fichiers de sauvegarde contiennent votre bibliothèque et vos réglages, jamais vos médias téléchargés. Ceux-là doivent être déplacés séparément."],
      ["Quand un téléchargement échoue en cours de route", "Un téléchargement interrompu vient généralement d'une connexion perdue ou d'une source qui ne répond plus. Réessayez depuis la file, car les fichiers partiels sont conservés, et passez au Wi-Fi si le réseau est la cause. Des réponses 403 ou 429 persistantes signifient que la source vous refuse, pas que le fichier a disparu."],
    ],
    facts: [
      "Une seule série par source se télécharge à la fois, exprès.",
      "Les médias téléchargés ne sont pas inclus dans une sauvegarde.",
      "Le stockage interne est plus rapide et plus fiable qu'une carte SD.",
      "Renommer le dossier de téléchargement casse la détection.",
      "Un téléchargement interrompu conserve ses fichiers partiels, donc réessayer le reprend.",
    ],
  },

  categories: {
    title: "Transformer une longue bibliothèque en quelques étagères.",
    body: "Les catégories regroupent votre bibliothèque par état ou par goût, et servent aussi de contrôle pour ce qui est mis à jour et téléchargé automatiquement.",
    subsections: [
      ["Créer des catégories", "Nommez-les comme cela vous parle et ordonnez-les à votre guise. La plupart des gens finissent avec une poignée de catégories selon la fréquence à laquelle ils suivent quelque chose."],
      ["Y placer des séries", "Appuyez longuement sur une série, choisissez l'option de catégorie, et cochez tout ce qui s'applique. Une série peut figurer sur plusieurs étagères à la fois."],
      ["S'en servir pour les mises à jour", "Pointez la mise à jour globale et les téléchargements automatiques vers des catégories précises. Seules les séries que vous suivez activement génèrent alors du trafic."],
      ["Retirer une série", "Décochez une catégorie au même endroit où vous l'avez ajoutée. La série reste dans votre bibliothèque, elle quitte simplement cette étagère."],
      ["Un nom qui dure", "Nommez les catégories d'après vos habitudes plutôt que d'après les sources. Migrer une série entre sources ne réorganise alors jamais votre bibliothèque."],
      ["Rester simple", "Les catégories marchent mieux quand il y en a peu. Si vous ne vous souvenez plus à quoi sert une catégorie, elle fait probablement plus de mal que de bien."]
    ],
    facts: [
      "Une série peut appartenir à plusieurs catégories à la fois.",
      "La mise à jour globale peut cibler une seule catégorie.",
      "Les téléchargements automatiques peuvent être limités aux catégories choisies.",
      "Nommer les catégories d'après les sources vieillit mal.",
    ],
  },

  tracking: {
    title: "Enregistrer ce que vous regardez, automatiquement.",
    body: "Le suivi connecte Watchtower aux services qui gardent votre historique. Vous vous connectez une fois, et la progression est enregistrée au fur et à mesure au lieu d'être saisie à la main.",
    subsections: [
      ["Quels services sont pris en charge", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori et Bangumi. Ils se configurent tous depuis les réglages de suivi, et vous pouvez en connecter plusieurs."],
      ["Se connecter", "Ouvrez les réglages de suivi et touchez un service pour lancer sa connexion. Kitsu est celui qui demande votre adresse e-mail plutôt qu'un identifiant, ce qui surprend souvent."],
      ["Connecter une série", "Ouvrez une série, allez dans le suivi, et ajoutez le service. Watchtower cherche le titre pour vous, et vous pouvez modifier les termes de recherche quand il trouve la mauvaise entrée."],
      ["Quand un épisode compte comme vu", "Un seuil en pourcentage décide quand un épisode est marqué comme vu. Réglez-le assez haut pour qu'un arrêt à mi-chemin n'enregistre pas un épisode entier."],
      ["Un seul sens", "La progression va de Watchtower vers le service. Modifier votre liste sur le site ne change rien dans l'application, donc choisissez un seul endroit pour gérer cela."],
      ["Regarder hors ligne", "La progression faite sans connexion est mise en attente et envoyée dès que vous êtes en ligne, donc un vol ne fait pas perdre votre historique."],
      ["Quand une connexion ou une synchronisation échoue", "Un service qui refuse la connexion vient généralement d'une session expirée ou d'un captcha sur le site du service, donc connectez-vous une fois via le site du service et réessayez. Une progression qui ne se synchronise pas est généralement mise en file plutôt que perdue, et renvoyée au retour de la connexion."],
      ["Correspondance avec le mauvais titre", "La correspondance automatique peut choisir la mauvaise entrée quand un titre est ambigu. Modifiez les termes de recherche de cette série dans la section de suivi et sélectionnez le bon résultat, puis confirmez que la progression reprise est bien celle voulue."],
    ],
    facts: [
      "Le suivi se configure par série, pas pour toute la bibliothèque.",
      "La progression ne circule que vers l'extérieur, jamais en retour.",
      "Un seuil décide quand un épisode compte comme vu.",
      "La progression hors ligne s'envoie à la reconnexion.",
      "Une connexion échouée vient généralement d'une session expirée sur le service lui-même.",
    ],
  },

  backups: {
    title: "Protéger votre bibliothèque avant que quelque chose casse.",
    body: "Une sauvegarde est un seul fichier contenant votre bibliothèque, votre progression et vos réglages. C'est aussi le seul moyen de déplacer une bibliothèque entre appareils.",
    subsections: [
      ["En créer une", "Ouvrez les réglages de données et de stockage, choisissez de créer une sauvegarde, et enregistrez-la quelque part accessible depuis un autre appareil. Faites-le avant toute mise à jour dont vous doutez."],
      ["Ce qu'elle contient", "Chaque série que vous suivez, les catégories où elles figurent, où vous en êtes, vos liens de suivi, votre historique, vos extensions et tous vos réglages."],
      ["Ce qui est exclu", "Les fichiers téléchargés, les couvertures personnalisées et l'historique des séries jamais ajoutées à la bibliothèque. Ceux-là ne sont pas récupérables depuis une sauvegarde."],
      ["La restaurer", "Importez le fichier sur le nouvel appareil, puis reconnectez-vous à vos services de suivi et réinstallez vos extensions pour que tout soit relié proprement."],
      ["Sauvegardes automatiques", "Réglez une fréquence pour qu'une sauvegarde récente existe toujours sans que vous y pensiez. C'est la meilleure protection contre une mauvaise mise à jour."],
      ["Passer à un nouvel appareil", "Sauvegardez, installez sur le nouvel appareil, restaurez, puis reconnectez-vous aux services de suivi et réinstallez les extensions. Les téléchargements doivent être copiés séparément."],
      ["Quand une restauration échoue", "Une restauration qui s'arrête en cours de route vient généralement d'un fichier de sauvegarde tronqué ou obsolète, ou d'une incompatibilité de version entre la sauvegarde et l'application. Recréez la sauvegarde depuis l'appareil source, confirmez que le fichier a été copié en entier, et restaurez sur une application au moins aussi récente que celle qui l'a créée."],
    ],
    facts: [
      "Une sauvegarde est le seul moyen de déplacer une bibliothèque entre appareils.",
      "Les médias téléchargés doivent être déplacés séparément.",
      "Les couvertures personnalisées ne font pas partie d'une sauvegarde.",
      "Les sauvegardes automatiques sont la meilleure protection contre une mauvaise mise à jour.",
      "Une restauration échouée vient généralement d'un fichier de sauvegarde tronqué ou obsolète.",
    ],
  },

  storage: {
    title: "Où Watchtower range ses fichiers.",
    body: "Sauvegardes, téléchargements et sources locales vivent tous sous un même emplacement de stockage. Le choisir délibérément, c'est ce qui évite que des téléchargements disparaissent plus tard.",
    subsections: [
      ["La disposition des dossiers", "Tout se trouve sous un dossier que vous choisissez : sauvegardes automatiques, chapitres et épisodes téléchargés, vos mangas locaux, vos animés locaux, et la configuration des lecteurs externes. Connaître cette disposition rend un fichier égaré facile à replacer."],
      ["Choisir un emplacement", "Prenez un dossier auquel vous aurez encore accès dans un an. Évitez la racine d'un volume de stockage, et évitez de déplacer des fichiers hors de l'application ensuite."],
      ["Autorisations Android", "Android moderne garde les applications dans leurs propres dossiers. Accordez à Watchtower l'accès au dossier de stockage choisi, sinon les téléchargements et les sources locales échoueront silencieusement."],
      ["Après avoir déplacé des fichiers", "Déplacez des fichiers depuis l'extérieur puis rafraîchissez, pour que Watchtower réanalyse les dossiers. Sinon le nouveau contenu reste invisible jusqu'à ce qu'autre chose déclenche une analyse."],
      ["Garder la galerie propre", "Un fichier .nomedia dans le dossier de téléchargement garde les couvertures et les épisodes hors de la galerie de votre téléphone."],
      ["Pourquoi le stockage interne est préférable", "Les téléchargements sur le stockage interne sont plus rapides et bien moins susceptibles de devenir illisibles que sur une carte amovible, qui peut être démontée ou corrompue."],
      ["Quand l'application ne peut pas atteindre le dossier", "Les erreurs de permission et les téléchargements qui disparaissent viennent tous deux du fait que le dossier de stockage a bougé ou est devenu illisible. Confirmez que l'application y a toujours accès, vérifiez l'espace libre, et préférez le stockage interne à une carte amovible qui peut être démontée."],
    ],
    facts: [
      "Sauvegardes, téléchargements et sources locales partagent un seul emplacement.",
      "Android a besoin d'une autorisation explicite pour ce dossier.",
      "Un fichier .nomedia cache les médias téléchargés de la galerie.",
      "Le stockage interne est plus fiable qu'une carte SD.",
      "Un dossier de stockage déplacé ou illisible masque les téléchargements et les sauvegardes.",
    ],
  },

  settings: {
    title: "Les réglages qui changent le comportement de l'application.",
    body: "Au-delà des options propres à chaque fonction, une poignée de réglages globaux touchent les mises à jour, la vie privée, l'installation et la façon de vous remettre d'un problème.",
    subsections: [
      ["Général", "Thème, langue de l'interface et comportement par défaut de la bibliothèque. Ils s'appliquent partout d'un coup, donc c'est le premier endroit à regarder quand l'application ne vous ressemble pas."],
      ["Vie privée", "Masquer l'écran dans le sélecteur d'applications garde votre bibliothèque hors des vignettes, et le mode incognito arrête l'enregistrement de l'historique pendant que vous parcourez. L'incognito cache ce que vous avez regardé, pas où vous en êtes."],
      ["Réseau", "Le DNS chiffré peut contourner certains blocages simples et vaut la peine d'être essayé quand une source refuse de se charger sur un réseau mais fonctionne sur un autre. Un proxy fait le même travail pour tout un réseau."],
      ["Installer des extensions", "Android bloque normalement les installations hors magasin. Accorder cette permission est ce qui permet d'installer les extensions, et Shizuku est une alternative pour les appareils qui compliquent la chose."],
      ["Diagnostic", "Journaux de plantage, capture logcat et reconstruction des index sont ici. C'est là qu'on va quand quelque chose se comporte mal et qu'on veut des preuves plutôt que des suppositions."],
      ["Avant de signaler un problème", "Notez votre version de l'application, la source qui a échoué et ce que l'écran affichait. Cela transforme un signalement vague en quelque chose de réellement réparable."],
      ["Réinitialiser un état bloqué", "Vider le cache, vider les cookies et les données web, et reconstruire les index corrigent chacun une catégorie de problème différente. Le cache efface des données de page périmées, les cookies lèvent une vérification bloquée, et une reconstruction d'index réanalyse le dossier de stockage. Vider la base de données supprime les séries qui ne sont pas dans votre bibliothèque, ce qui est la solution habituelle pour une couverture locale vide."],
      ["Un dernier recours qui préserve vos données", "Si rien d'autre ne fonctionne, faites une sauvegarde fraîche, puis réinstallez l'application et restaurez-la. Cela conserve votre bibliothèque et vos réglages tout en remplaçant ce qui était corrompu dans l'installation elle-même."],
    ],
    facts: [
      "Le réglage de confidentialité du sélecteur d'applications doit être désactivé pour les captures d'écran.",
      "L'incognito arrête l'historique, pas la progression.",
      "Les journaux de plantage restent sur votre appareil et ne sont jamais envoyés automatiquement.",
      "Le DNS chiffré corrige souvent une source qui échoue sur un seul réseau.",
      "Cache, cookies et index corrigent chacun une catégorie de problème.",
      "Sauvegardez avant de réinstaller, puis restaurez pour garder votre bibliothèque.",
    ],
  },

  "extension-runtime": {
    title: "Comment les extensions sont exécutées, et en sécurité.",
    body: "Les extensions sont du JavaScript, et Watchtower les exécute dans un bac à sable qui leur donne le réseau et rien d'autre. Cette page explique ce que cela signifie pour vous.",
    subsections: [
      ["Ce qui exécute vos extensions", "Watchtower utilise un petit moteur JavaScript intégré à l'application. C'est le même moteur sur chaque plateforme, ce qui explique qu'une source se comporte à l'identique sur un téléphone et sur un serveur."],
      ["Ce qu'une extension a le droit de faire", "Elle peut faire des requêtes web, analyser les pages qu'elle reçoit et garder quelques réglages à elle. C'est toute sa boîte à outils."],
      ["Ce dont elle est tenue à l'écart", "Vos fichiers, votre bibliothèque, vos comptes et les écrans de l'application. Tout ce qu'une extension produit est renvoyé comme de simples données que l'application affiche."],
      ["Pourquoi une source lente ralentit", "Une source qui répond lentement rend ses propres écrans lents, parce que l'application attend après elle. Les autres sources ne sont pas touchées : la lenteur signale donc une source défectueuse, pas une application lourde."],
      ["Ce que cela signifie pour la confiance", "Le bac à sable limite ce qu'une extension peut casser, mais il ne juge pas les intentions. Elle peut toujours voir ce que vous y saisissez et ce qu'elle récupère. Installez depuis des gens de confiance."],
      ["Le même moteur partout", "Comme l'application et la ligne de commande Linux partagent ce moteur, une extension qui fonctionne sur votre téléphone fonctionne aussi sur un serveur, sans modification."]
    ],
    facts: [
      "Les extensions obtiennent l'accès au réseau et l'analyse de pages, rien d'autre.",
      "Elles ne peuvent pas lire vos fichiers ni votre bibliothèque directement.",
      "Une source lente ne ralentit que ses propres écrans.",
      "Le même bac à sable tourne sur mobile, bureau et ligne de commande.",
    ],
  },

  "extension-contract": {
    title: "Ce qu'une source doit fournir.",
    body: "Pour qu'une extension fonctionne, elle doit répondre à un ensemble fixe de questions : ce qui est populaire, ce qui est nouveau, ce que renvoie une recherche, ce que contient une série, et où sont ses pages et ses flux.",
    subsections: [
      ["Listes et recherche", "Ces appels renvoient les listes parcourables : ce qui est populaire, ce qui est sorti récemment, et ce que donne une recherche. C'est le minimum pour qu'une source soit utilisable."],
      ["Série et chapitres", "Un appel remplit les détails d'une série, et un autre renvoie ses chapitres ou épisodes ordonnés. Sans eux, une source est cherchable mais ne s'ouvre pas."],
      ["Pages et vidéo", "Pour la lecture, un appel renvoie les adresses des images d'un chapitre. Pour la vidéo, un appel renvoie les flux disponibles avec leur qualité et les en-têtes nécessaires."],
      ["Extras facultatifs", "Les filtres, les réglages propres à une source et la gestion d'images personnalisée sont facultatifs. Une source sans eux fonctionne quand même ; elle offre simplement moins à configurer."],
      ["Pourquoi le type de contenu compte", "Le type déclaré par une extension décide si un résultat s'ouvre dans le lecteur de mangas, le lecteur vidéo ou le lecteur de romans. Se tromper envoie le contenu sur le mauvais écran."],
      ["Ce qui n'est pas obligatoire", "Tout ce qui dépasse les listes et la recherche est un bonus. Une source minimale qui ne fait que lister et chercher est une source parfaitement valable."]
    ],
    facts: [
      "Les listes et la recherche suffisent à rendre une source parcourable.",
      "Les appels de détails et de chapitres sont ce qui permet d'ouvrir une série.",
      "Les filtres et les réglages de source sont facultatifs.",
      "Le type de contenu décide quel lecteur s'ouvre.",
    ],
  },

  "ui-schema": {
    title: "Laisser une source dessiner son propre écran d'accueil.",
    body: "Certaines sources présentent une page d'accueil riche : bannières, rangées de couvertures, bloc mis en avant. Plutôt que d'écrire du code d'application pour chacune, une extension peut décrire elle-même cette disposition.",
    subsections: [
      ["À quoi cela sert", "Une source peut décrire son écran d'accueil sous forme de données : rangées, cartes et bannières, chacune pointant vers du contenu qu'elle fournit. L'application le dessine avec ses widgets habituels."],
      ["Pourquoi c'est une bonne idée", "Cela permet à un nouveau site d'avoir une page d'accueil sur mesure sans nouvelle version de l'application, et la page reste native au lieu de ressembler à une page web dans une boîte."],
      ["Ce qui peut être décrit", "Listes, rangées, cartes, bannières et blocs de texte sont les briques de base. Cela couvre la disposition de presque toutes les pages d'accueil de source en pratique."],
      ["Quand une source n'en a pas", "Si une extension ne décrit pas de disposition, Watchtower en construit une à partir de ses listes. Rien ne casse ; la page est simplement plus sobre."],
      ["Ce que cela ne peut pas faire", "La description est une donnée, pas du code. Elle ne peut pas exécuter de logique, atteindre vos fichiers ou modifier le comportement de l'application, ce qui est exactement pourquoi il est sûr de l'accepter."],
      ["Pour ceux qui écrivent des sources", "Voyez cela comme un fichier de disposition plutôt qu'un programme. Vous dites à l'application quoi montrer, pas comment le dessiner."]
    ],
    facts: [
      "Une source peut décrire son propre écran d'accueil sous forme de données.",
      "Les briques inconnues sont ignorées plutôt que de casser la page.",
      "Une disposition par défaut est utilisée quand une source n'en fournit aucune.",
      "La description ne peut pas exécuter de code ni atteindre vos fichiers.",
    ],
  },

  api: {
    title: "Piloter Watchtower depuis un autre programme.",
    body: "L'application peut ouvrir un petit serveur web sur votre propre machine, ce qui permet à des scripts, des lecteurs externes et d'autres appareils d'utiliser les mêmes sources que l'application.",
    subsections: [
      ["Ce que c'est", "Un petit serveur web intégré à l'application. Il utilise les mêmes extensions et la même bibliothèque que l'interface, donc tout ce qu'il renvoie correspond à ce que vous voyez à l'écran."],
      ["L'activer", "Il est désactivé jusqu'à ce que vous l'activiez, volontairement. Activez-le dans les réglages avancés, notez le port, puis pointez votre outil vers cette adresse."],
      ["Ce que vous pouvez lui demander", "Vos sources installées, vos entrées de bibliothèque, une recherche sur n'importe quelle source, et un flux vidéo résolu. C'est assez pour piloter un centre multimédia ou un lecteur externe."],
      ["Pourquoi cela peut servir", "L'automatisation, une autre interface, ou laisser un autre appareil de votre réseau utiliser les sources déjà configurées sur votre téléphone."],
      ["Gardez-le sur votre réseau", "Le serveur n'a pas de mot de passe et est prévu pour un réseau local de confiance. Ne l'exposez pas à Internet, où n'importe qui pourrait lire votre bibliothèque."],
      ["Son lien avec la ligne de commande", "La ligne de commande Linux expose le même serveur, donc un script écrit pour l'application fonctionne sur une machine sans écran sans modification."]
    ],
    facts: [
      "Le serveur est désactivé tant que vous ne l'activez pas dans les réglages.",
      "Il écoute sur le port 4567 par défaut.",
      "Il utilise les mêmes sources et la même bibliothèque que l'interface.",
      "Il est prévu pour un réseau local de confiance, pas pour Internet.",
    ],
  },

  cli: {
    title: "Faire tourner Watchtower sans écran.",
    body: "La ligne de commande Linux utilise le même moteur que l'application, donc un serveur ou une tâche planifiée peut chercher, parcourir et télécharger sans que personne ne regarde.",
    subsections: [
      ["À quoi cela sert", "Aux serveurs, aux sessions SSH et aux tâches automatisées. C'est le même moteur d'extensions que l'application avec une interface texte au lieu d'écrans, donc elle n'a besoin d'aucune session graphique."],
      ["S'orienter", "Commencez par la commande d'aide, puis lancez la commande de diagnostic pour confirmer que le moteur peut tout charger et atteindre avant de lui confier une tâche."],
      ["Travailler avec les extensions", "Listez ce qu'un dépôt propose, validez-le, et testez une source contre le site réel. Le test se déroule par étapes, du simple chargement de la source à l'exercice de sa recherche et de ses appels de détails."],
      ["Appeler une source directement", "Vous pouvez invoquer une seule opération, comme une recherche, et obtenir du JSON en retour. C'est ce qui rend la ligne de commande utile pour les scripts et le débogage d'une source."],
      ["Servir sur le réseau", "Elle peut démarrer le même serveur web que l'application expose, ce qui permet à un client distant de parler à une machine sans écran."],
      ["Ce qu'elle ne fait pas encore", "Les commandes de bibliothèque, d'historique et de file de téléchargement ne sont pas disponibles en mode sans écran, car la ligne de commande n'ouvre pas les bases de données locales de l'application. Cela nécessite encore l'application."]
    ],
    facts: [
      "La ligne de commande réutilise le moteur d'extensions de l'application.",
      "La commande de diagnostic vérifie le moteur avant que vous vous y fiiez.",
      "Une source peut être testée par étapes, du chargement à la recherche.",
      "Les commandes de bibliothèque et de téléchargement nécessitent encore l'application.",
    ],
  },

  deployment: {
    title: "Faire tourner Watchtower sur votre propre serveur.",
    body: "Pour un serveur domestique ou un petit groupe, la ligne de commande Linux peut tourner en continu et servir les mêmes sources à chaque client de votre réseau.",
    subsections: [
      ["Ce que vous obtenez", "Un seul dossier contenant la ligne de commande et les fichiers dont elle a besoin. Le script d'installation la copie dans un préfixe que vous choisissez et la prépare à fonctionner."],
      ["L'installer", "Lancez l'installateur avec le dossier décompressé et le préfixe souhaité. Utiliser un préfixe sous votre dossier personnel évite d'avoir besoin des droits root ensuite."],
      ["L'exécuter comme service", "Comme elle peut servir en HTTP, vous pouvez la garder en arrière-plan et laisser d'autres appareils de votre réseau utiliser les sources qu'elle a configurées."],
      ["À quoi c'est utile", "Un centre multimédia, un téléchargeur planifié, ou une seule machine qui détient les sources pour que les autres n'aient pas à le faire. C'est le même moteur, donc les sources se comportent à l'identique."],
      ["La garder à jour", "Mettez-la à jour en décompressant une version plus récente et en relançant l'installateur. Votre configuration vit dans le préfixe et n'est pas écrasée par une mise à niveau."],
      ["Si quelque chose refuse de démarrer", "La commande de diagnostic existe exactement pour cela. Lancez-la d'abord : elle vous dira si le problème vient du moteur, du réseau ou d'une source."]
    ],
    facts: [
      "La version sans écran est un dossier autonome plus un installateur.",
      "Installer sous votre dossier personnel évite d'avoir besoin des droits root.",
      "Elle peut servir en HTTP à d'autres appareils de votre réseau.",
      "La commande de diagnostic diagnostique la plupart des échecs au démarrage.",
    ],
  },

  troubleshooting: {
    title: "Quand quelque chose ne fonctionne pas.",
    body: "Presque tous les problèmes relèvent de quelques causes : une source qui a changé, un blocage d'un site, une permission manquante, ou une extension à mettre à jour. Procédez dans cet ordre.",
    subsections: [
      ["Commencer par cerner le problème", "Avant de toucher à un réglage, déterminez si le problème vient de la source, de votre réseau ou de votre appareil. Une source qui échoue alors que les autres marchent désigne cette source ; tout qui échoue désigne l'application ou la connexion."],
      ["Tout mettre à jour d'abord", "Rafraîchissez vos dépôts et installez les mises à jour d'extensions, puis vérifiez s'il existe une mise à jour de l'application. Une grande partie des pannes soudaines vient d'un site qui a changé et d'une extension déjà corrigée mais pas encore installée."],
      ["Une source a cessé de marcher", "C'est le problème le plus courant et souvent le moins grave. Le site a changé, l'extension a besoin d'une mise à jour, et rafraîchir votre dépôt est la solution. S'il n'y a pas encore de mise à jour, l'auteur de l'extension n'a pas encore suivi."],
      ["Rien ne se charge du tout", "Si toutes les sources échouent, regardez plutôt le réseau. Essayez les données mobiles, un autre réseau Wi-Fi, et le DNS chiffré dans les réglages. Un réseau unique qui bloque tout, ou un portail captif non validé, est une cause fréquente."],
      ["Ouvrir un site pour passer un contrôle", "Certains sites imposent une vérification avant de répondre. Ouvrez la source depuis Parcourir et utilisez le navigateur intégré pour charger la page du site, complétez le contrôle à la main, puis fermez et revenez à l'application. Le faire une fois débloque souvent la source."],
      ["Cloudflare et les rechargements sans fin", "Un site derrière Cloudflare peut recharger son contrôle sans vous laisser passer. Rouvrez le site dans le navigateur intégré, changez votre user agent dans les réglages avancés, ou attendez que le site baisse sa protection. Certaines sources sont volontairement difficiles à utiliser depuis une application."],
      ["Vider les cookies et les données web", "Cela réinitialise l'état de navigation stocké par l'application, y compris les connexions. C'est la bonne solution pour un contrôle bloqué, et cela vaut la peine avant de conclure qu'une source est morte. Il faudra vous reconnecter ensuite si la source demande un compte."],
      ["Changer votre user agent", "Le user agent est la chaîne qui identifie votre appareil auprès d'un site, et certains sites y voient un signal de robot. Remplacer la valeur par défaut par une chaîne de navigateur courante, puis redémarrer l'application, franchit parfois un contrôle qui boucle autrement."],
      ["Une extension refuse de s'installer", "Android bloque par défaut les installations hors magasin. Autorisez-le pour votre gestionnaire de fichiers ou votre navigateur, et si l'option manque, utilisez Shizuku comme autre voie. Un téléchargement interrompu produit un autre message, donc réinstallez depuis zéro."],
      ["Le contenu s'ouvre au mauvais endroit", "Si un manga s'ouvre dans le lecteur vidéo, ou un épisode dans le lecteur de mangas, l'extension déclare le mauvais type de contenu. C'est un défaut de l'extension, pas de vos réglages, donc signalez-le au lieu d'essayer de le corriger localement."],
      ["Obtenir les journaux de plantage et plus de détails", "Les réglages avancés permettent d'exporter les journaux de plantage, et une capture logcat montre plus en détail ce que faisait l'application. Les deux valent la peine d'être joints à un signalement, car ils transforment une description vague en quelque chose de traçable."],
      ["Stockage, lenteur et lecture saccadée", "Un chargement lent vient généralement du site, de votre connexion ou d'une limitation de débit, pas de l'application. Une lecture saccadée vient d'images trop grandes dans un chapitre. Changer de source, libérer de la mémoire ou attendre la fin d'une limitation sont les solutions pratiques."],
      ["Quand vous n'êtes pas le seul concerné", "Si d'autres personnes constatent la même panne, c'est l'extension ou l'application, pas votre configuration. Consultez le suivi des problèmes du projet pour la source avant d'ouvrir un nouveau signalement, et indiquez votre version de l'application et le texte exact de l'erreur."]
    ],
    facts: [
      "Une source cassée est presque toujours la source, pas l'application.",
      "Une extension périmée est la cause la plus fréquente d'une panne soudaine.",
      "Si toutes les sources échouent, soupçonnez le réseau avant l'application.",
      "Ouvrir un site dans le navigateur intégré lève de nombreux contrôles de vérification.",
      "Vider les cookies et les données web réinitialise un contrôle bloqué et les connexions.",
      "Les journaux de plantage et le logcat rendent un signalement exploitable.",
    ],
  },

  errors: {
    title: "Chaque message d'erreur, et ce qu'il signifie.",
    body: "Watchtower affiche l'erreur brute plutôt que de la masquer, donc le message lui-même est votre meilleur indice. Trouvez le vôtre ci-dessous et essayez la première solution avant de changer quoi que ce soit d'autre.",
    subsections: [
      ["403 Forbidden", "Le site a décidé que votre requête semblait automatisée et la refuse. En pratique, c'est de la protection anti-robot. Mettez d'abord à jour l'extension, puis ouvrez la source dans le navigateur intégré une fois pour lever le contrôle que le site garde. S'il refuse encore, la source a peut-être renforcé sa protection ou bloqué votre adresse."],
      ["404 Not found", "La page attendue par l'extension a bougé ou disparu. C'est presque toujours une extension périmée, donc rafraîchissez votre dépôt et mettez-la à jour. S'il n'y a pas encore de mise à jour, l'auteur de l'extension n'a pas encore suivi le site."],
      ["429 Too many requests", "Vous avez été limité pour avoir fait des requêtes trop vite. Attendre est la vraie solution, et réduire la fréquence des mises à jour et des téléchargements est ce qui empêche le problème de revenir. Réessayer immédiatement ne fait que prolonger le blocage."],
      ["Erreurs 500, 502 et autres 5xx", "Le site lui-même est en panne. Il n'y a rien à corriger sur votre appareil, et la bonne décision est d'attendre et de réessayer plus tard. Vérifier le site dans un navigateur confirme s'il est en panne pour tout le monde."],
      ["1006 et 1020, les codes de pare-feu", "1006 signifie généralement un bannissement d'IP temporaire, et 1020 une règle de pare-feu posée par le propriétaire du site, souvent pour bloquer les visiteurs hors de son pays. Changer de réseau aide parfois pour 1006 ; 1020 ne peut généralement pas être contourné."],
      ["Échec du contournement de Cloudflare", "Le site est protégé par Cloudflare et la vérification automatique n'est pas passée. Ouvrez la page de la source dans le navigateur intégré et complétez la vérification à la main, puis revenez à l'application. Si la page se recharge sans fin, consultez la page de dépannage."],
      ["Impossible de résoudre l'hôte, connexion échouée, délai dépassé", "Ce sont des problèmes de réseau plutôt que des défauts de la source. Vérifiez que l'appareil a accès à Internet, essayez un autre réseau ou les données mobiles, et activez le DNS chiffré dans les réglages. Un portail Wi-Fi captif est une cause fréquente."],
      ["Échec de validation du certificat", "Le certificat de sécurité du site n'a pas pu être validé. Vérifiez que la date et l'heure de l'appareil sont correctes, videz le cache et les cookies de l'application, et essayez un autre réseau. Un certificat expiré côté site n'est pas quelque chose que vous pouvez corriger."],
      ["Erreurs de stockage et de carte SD", "Les messages à propos d'une carte, d'un chemin ou d'un dossier indisponible signifient que l'emplacement de téléchargement a bougé ou est devenu illisible. Vérifiez l'espace libre, confirmez que l'application a toujours l'accès à ce dossier, et revenez au stockage interne si la carte échoue sans arrêt."],
      ["L'application ou l'extension refuse de s'installer", "Un APK signé par quelqu'un d'autre, un téléchargement tronqué et la mauvaise architecture de processeur produisent chacun un message d'installation différent. Supprimez la copie en conflit et retéléchargez le fichier, et assurez-vous qu'Android est autorisé à installer des applications inconnues."],
      ["Quand l'erreur n'est pas listée ici", "Copiez le message exact plutôt que de le paraphraser. Le nom de l'opération et l'URL qu'il contient désignent presque toujours l'étape qui échoue, et la page de dépannage explique comment cerner le problème."]
    ],
    facts: [
      "403 et 429 signifient tous deux que le site vous refuse, pour des raisons différentes.",
      "Un 404 est presque toujours une extension à mettre à jour.",
      "Une erreur 5xx est la faute du site web, pas de votre appareil.",
      "1006 est un bannissement temporaire ; 1020 est une règle de pare-feu incontournable.",
      "Copiez le message exact : l'URL qu'il contient nomme l'étape qui échoue.",
      "Une signature incompatible signifie qu'une copie signée différemment est installée.",
    ],
  },

  faq: {
    title: "Les questions qui reviennent souvent.",
    body: "Des réponses courtes aux questions que les gens posent avant et après avoir installé Watchtower, regroupées par partie de l'application.",
    subsections: [
      ["Pourquoi n'est-elle pas sur un magasin d'applications ?", "Parce que Watchtower installe des extensions à l'exécution, ce que les politiques des magasins n'autorisent pas. C'est aussi pourquoi chaque installation vient d'un APK auquel vous choisissez de faire confiance."],
      ["Existe-t-il une version iOS ?", "Le code sous-jacent est multiplateforme, mais publier sur iOS est contraint par les règles de la plateforme et n'est pas promis. Android est la plateforme qui reçoit tout en premier."],
      ["Fonctionne-t-elle sans Internet ?", "Tout ce que vous avez téléchargé, plus les fichiers locaux, fonctionne entièrement hors ligne. Parcourir les sources et chercher, non, car cela nécessite les sites eux-mêmes."],
      ["Puis-je synchroniser entre appareils ?", "Il n'y a pas de synchronisation automatique. Vous déplacez votre bibliothèque avec un fichier de sauvegarde, et les médias téléchargés doivent être copiés séparément."],
      ["Est-ce légal et est-ce gratuit ?", "Watchtower est gratuit et open source, et ne contient aucun contenu. Ce que vous ajoutez via les extensions relève de votre responsabilité, ce qui explique pourquoi l'application insiste sur le fait qu'elle ne les contrôle pas."],
      ["Pourquoi une source installée n'apparaît-elle pas ?", "Deux filtres masquent des sources sans les supprimer. Si l'extension sert une langue différente de celle de votre appareil, activez cette langue dans le filtre de la liste des sources. S'il s'agit d'une source adulte, activez l'option qui affiche les sources NSFW dans la liste."],
      ["Comment désinstaller une extension ?", "Désinstallez-la depuis l'écran des extensions, ou comme n'importe quelle autre application dans les réglages Android. Vos entrées de bibliothèque restent en place et apparaissent simplement comme indisponibles jusqu'à ce qu'une autre source puisse les servir."],
      ["Pourquoi mes téléchargements n'apparaissent-ils pas ?", "Les téléchargements sont détectés par dossier. Si l'emplacement de stockage a bougé, si la carte SD a été retirée, ou si la source ou la série a été renommée sur le site, l'application ne peut pas faire correspondre le dossier. Corrigez l'emplacement ou renommez le dossier, puis reconstruisez l'index des téléchargements."],
      ["Pourquoi ma galerie photo montre-t-elle des couvertures et des épisodes ?", "L'application masque normalement ses médias de la galerie système avec un fichier .nomedia. Si ce n'est pas le cas, créez-en un vous-même et placez-le dans le dossier des téléchargements, ou dans le dossier de la source locale si c'est ce qui a fui."],
      ["Pourquoi la lecture ou le chargement est-il lent ?", "Un chargement lent vient du site, de votre connexion ou d'une limitation de débit, pas d'une application trop lourde. Une lecture saccadée vient d'images trop grandes dans un chapitre, donc libérez de la mémoire ou choisissez une source aux scans plus légers."],
      ["Pourquoi certains épisodes ne s'affichent-ils pas ?", "Hormis les problèmes de réseau, l'application peut parfois manquer qu'une vidéo existe. Quitter le lecteur et rouvrir l'épisode suffit généralement à l'enregistrer."],
      ["Pourquoi une mise à jour de bibliothèque saute-t-elle des entrées ?", "Les entrées avec du contenu non vu ou non lu, celles que vous n'avez pas commencées, celles marquées terminées et celles sans sortie attendue sont sautées volontairement. Cela évite qu'une grande bibliothèque surcharge les sources et fasse bloquer l'application."],
      ["Pourquoi les mises à jour s'arrêtent-elles en arrière-plan ?", "Certaines versions d'Android économisent agressivement la batterie et suspendent le travail en arrière-plan. Exemptez Watchtower de l'optimisation de batterie si les mises à jour n'arrivent qu'à l'ouverture de l'application."],
      ["Pourquoi la capture d'écran est-elle bloquée ?", "Le réglage de confidentialité qui masque l'application dans le sélecteur de tâches bloque aussi les captures d'écran. Désactivez ce réglage si vous voulez capturer l'écran."],
      ["Quelque chose est cassé, et maintenant ?", "Mettez d'abord à jour vos extensions, car cela corrige la plupart des pannes. Si cela persiste, consultez la page des erreurs pour le message exact que vous voyez, puis la page de dépannage, avant de supposer que l'application est fautive."]
    ],
    facts: [
      "Watchtower n'est pas distribué via les magasins d'applications.",
      "Le contenu téléchargé et les fichiers locaux fonctionnent entièrement hors ligne.",
      "Il n'y a pas de synchronisation automatique entre appareils.",
      "Une source masquée vient souvent du filtre de langue ou du bouton NSFW.",
      "Les téléchargements sont reconnus par nom de dossier, donc renommer en masque un.",
      "Mettre à jour les extensions corrige la plupart des pannes soudaines.",
    ],
  },

  contribute: {
    title: "Aider à améliorer Watchtower.",
    body: "L'application, les extensions et cette documentation sont toutes ouvertes. Il y a du travail utile pour ceux qui écrivent du code comme pour ceux qui n'en écrivent pas.",
    subsections: [
      ["Comment aider", "Signalez les bogues avec le message exact que vous avez vu, améliorez une source, écrivez une extension pour un site que personne n'a couvert, ou traduisez ce site dans une autre langue."],
      ["Travailler sur l'application", "Clonez le dépôt, installez les chaînes d'outils Flutter et Rust, et lancez l'analyseur avant d'ouvrir une demande de fusion. Go n'est nécessaire que si vous modifiez le serveur torrent."],
      ["Travailler sur la documentation", "Le site est son propre dépôt. Ajouter une langue signifie ajouter un fichier de traduction ; la disposition et la navigation gèrent déjà le reste."],
      ["Traduire", "L'application et ce site existent dans de nombreuses langues, et une nouvelle est purement additive. Vous n'avez jamais à toucher au design pour ajouter votre langue."],
      ["Signaler un bon bogue", "Indiquez votre version de l'application, la source utilisée, le texte exact de l'erreur et si les autres sources fonctionnent encore. C'est généralement assez pour localiser la panne."],
      ["Avant un grand changement", "Ouvrez un ticket ou demandez sur Discord d'abord. Cela vous évite de construire quelque chose qui ne correspond pas à la direction du projet."]
    ],
    facts: [
      "La documentation est un dépôt séparé de l'application.",
      "Ajouter une langue signifie ajouter un fichier, pas changer la disposition.",
      "Signaler le texte exact de l'erreur fait gagner le plus de temps.",
      "Rust est nécessaire pour travailler sur l'application ; Go seulement pour le serveur torrent.",
    ],
  },

  history: {
    title: "Tout ce que vous avez déjà ouvert.",
    body: "L'historique enregistre ce que vous avez regardé et lu, afin que vous puissiez revenir à quelque chose que vous n'avez pas terminé sans le rechercher à nouveau.",
    subsections: [
      ["Ce qu'il enregistre", "L'ouverture d'un épisode ou d'un chapitre ajoute une entrée avec l'heure et le chemin parcouru. L'historique est un enregistrement d'activité, pas une seconde bibliothèque, il se remplit donc tout seul à mesure que vous utilisez l'application."],
      ["Filtrage et tri", "Affinez la liste à aujourd'hui, cette semaine ou ce mois-ci, basculez entre une liste et une grille et triez par date ou par titre. Ceux-ci changent ce qui est affiché et rien d'autre."],
      ["Revenir à une série", "Appuyez sur une entrée pour rouvrir la série là où vous l'avez laissée. L’histoire est le chemin le plus rapide pour revenir à quelque chose que vous avez échantillonné une fois et mis de côté."],
      ["Incognito et confidentialité", "Lorsque le mode navigation privée est activé, rien de nouveau n'est enregistré, donc rien de ce que vous ouvrez n'apparaît dans l'historique. Le désactiver reprend l’enregistrement à partir de ce point."],
      ["Effacer l'historique", "Vous pouvez effacer l'historique sans toucher à votre bibliothèque ou à votre progression enregistrée. L'effacer supprime uniquement l'enregistrement de ce que vous avez ouvert."],
      ["Quand l'histoire semble fausse", "Une entrée qui apparaît comme non regardée signifie généralement que la source a changé l'adresse de l'épisode, donc l'application le traite comme nouveau. Supprimer l'entrée parasite et actualiser la série la met de l'ordre."],
    ],
    facts: [
      "L'historique enregistre l'activité, il ne remplace pas votre bibliothèque.",
      "Les filtres réduisent la vue sans rien supprimer.",
      "Le mode navigation privée empêche l’écriture d’un nouvel historique.",
      "Effacer l’historique laisse votre progression intacte.",
    ]
  },

  calendar: {
    title: "Qu'est-ce qui est publié et quand.",
    body: "Le calendrier affiche les chapitres et épisodes à venir de votre bibliothèque, afin que vous puissiez voir en un coup d'œil ce qui est attendu aujourd'hui et ce qui arrive plus tard.",
    subsections: [
      ["La vue mensuelle", "Les jours de sortie sont marqués et appuyer sur un jour permet d'accéder à la liste de cette date. Il répond à ce qui sort cette semaine sans ouvrir une seule série."],
      ["Le planning hebdomadaire", "Le calendrier prévoit une semaine avec la couverture de chaque version à venir, qui se lit mieux qu'une grille mensuelle dense sur un téléphone."],
      ["Filtrage par statut", "Affichez uniquement les statuts qui vous intéressent, afin que les séries terminées et en pause n'encombrent pas la vue que vous utilisez pour planifier la semaine."],
      ["Que signifient les dates", "Une date est la date à laquelle la source a dit pour la dernière fois que quelque chose était attendu, pas une promesse. Les sources qui ne publient pas de dates n’apparaissent tout simplement pas."],
      ["Indiquer les entrées surveillées", "Une option marque ce que vous avez déjà vu sur le planning, donc une vue hebdomadaire sert également de liste de contrôle."],
      ["Quand le calendrier est vide", "Un calendrier vide signifie généralement que les sources que vous suivez ne publient pas de dates de sortie. Il s'agit d'une limite de la source et non d'un défaut de l'application."],
    ],
    facts: [
      "Les dates de sortie proviennent des sources et non de l'application.",
      "Le calendrier peut être filtré par statut de série.",
      "Une option marque les entrées que vous avez déjà regardées.",
      "Une source sans dates n'apparaîtra pas du tout.",
    ]
  },

  "mass-migration": {
    title: "Déplacer plusieurs séries à la fois.",
    body: "Lorsqu'une source disparaît, la migration de masse déplace tout un groupe d'entrées de bibliothèque vers une source de travail en un seul passage, au lieu de les modifier une par une.",
    subsections: [
      ["Quand l'utiliser", "Une source qui a cessé de fonctionner ou dont vous souhaitez vous éloigner est le cas d’une migration massive. La migration conserve votre progression et vos catégories."],
      ["Choisir la source et la destination", "Choisissez le groupe d'entrées à déplacer et la source vers laquelle les déplacer. L'application recherche individuellement la destination de chaque titre."],
      ["Revue des matchs", "Chaque match est affiché avant que quoi que ce soit ne change, vous pouvez donc accepter les bons et ignorer les mauvais. La correspondance par titre n’est jamais parfaite."],
      ["Appliquer le changement", "L'application réécrit chaque entrée pour pointer vers la nouvelle source et poursuit votre progression. Les séries sans match restent intactes."],
      ["Lire le résumé", "L'exécution se termine par le décompte de ce qui a bougé, de ce qui a été ignoré et de ce qui a échoué. Un élément échoué est généralement un titre que la destination ne porte pas."],
      ["Quand rien ne correspond", "Si la plupart des titres ne correspondent pas, la destination ne convient pas et une source différente est la meilleure réponse. Rien n’est perdu en s’arrêtant, car les changements ne se produisent que lorsque vous postulez."],
    ],
    facts: [
      "La migration de masse déplace un groupe d'entrées en un seul passage.",
      "Chaque match est examiné avant que quoi que ce soit ne soit modifié.",
      "Vos progrès et vos catégories se perpétuent.",
      "Rien ne change jusqu'à ce que vous appliquiez les résultats.",
    ]
  },

  statistics: {
    title: "Votre bibliothèque en chiffres.",
    body: "Les statistiques résument ce que vous avez regardé et lu : totaux, temps passé, répartition des statuts et genres auxquels vous revenez le plus.",
    subsections: [
      ["Ce qui est compté", "Totaux par type de média, nombre de chapitres ou d'épisodes, temps passé et répartition de votre bibliothèque entre les statuts."],
      ["Temps et activité", "La carte de pointage estime le temps que vous avez passé à regarder et à lire, et le graphique d'activité montre comment cela s'est réparti au cours des dernières semaines."],
      ["Genres populaires", "Les genres sur lesquels vous passez réellement du temps, qui ne sont souvent pas ceux que vous devineriez. C'est un bon moyen de trouver une nouvelle série dans une voie que vous aimez déjà."],
      ["Par type de média", "Les statistiques sont divisées par type de média, de sorte que les totaux des anime et des mangas ne sont jamais mélangés."],
      ["D'où viennent les chiffres", "Tout est calculé à partir de votre propre bibliothèque et de votre historique sur l'appareil. Rien n'est téléchargé nulle part."],
      ["Quand il dit qu'il n'y a pas de données", "Une toute nouvelle installation n’a encore rien à résumer. Les chiffres apparaissent une fois que vous avez regardé ou lu quelque chose et que cela a été enregistré."],
    ],
    facts: [
      "Les statistiques sont calculées sur l'appareil, à partir de vos propres données.",
      "Les totaux sont conservés séparément pour chaque type de média.",
      "Le tableau d’activité montre la répartition de la lecture et du visionnage au fil du temps.",
      "Une nouvelle installation n'affiche aucune donnée jusqu'à ce que quelque chose soit enregistré.",
    ]
  },

  anime: {
    title: "Regarder un anime, avec saut d'intro.",
    body: "L'anime s'ouvre dans le lecteur vidéo avec un extra : le saut d'intro et de fin, optimisé par AniSkip lorsqu'un titre peut être associé.",
    subsections: [
      ["Le joueur d'anime", "Les épisodes sont lus dans le même lecteur que tout le reste, avec la qualité, l'audio, les sous-titres et la vitesse dans les feuilles habituelles."],
      ["Sauter les intros et les fins", "Avec l'intro sautée, un bouton compte à rebours pendant l'ouverture et passe au-delà, et la fin est gérée de la même manière. Il s'agit d'un paramètre, il peut donc être désactivé."],
      ["Pourquoi un titre ne peut pas être égalé", "Sauter doit identifier la série et l'épisode. Un titre qui ne peut pas être identifié est simplement joué sans le bouton, plutôt que d'échouer."],
      ["Le délai d'expiration du saut", "Un court compte à rebours vous donne le temps d'annuler avant que le saut n'ait lieu. Sa longueur est configurable si la valeur par défaut semble précipitée."],
      ["À la découverte des dessins animés", "Un écran de découverte propose des listes recommandées, populaires, à venir, récemment mises à jour et les mieux notées, ainsi que des lignes de genre, afin que vous puissiez trouver quelque chose sans ouvrir la source."],
      ["Lorsque la découverte affiche une erreur", "Les lignes de découverte proviennent d'un service externe plutôt que de vos sources. Lorsque ce service est inaccessible, le reste de l'application n'est pas affecté et une source fonctionne toujours normalement."],
    ],
    facts: [
      "Le saut d'intro nécessite que la série et l'épisode soient identifiés.",
      "Le saut est un paramètre et peut être désactivé.",
      "La durée du compte à rebours est configurable.",
      "Discovery utilise un service externe ; les sources fonctionnent malgré tout.",
    ]
  },

  music: {
    title: "Musique, avec votre propre bibliothèque.",
    body: "Watchtower joue de la musique à partir d'extensions musicales et de votre propre collection, avec des albums, des artistes, des paroles et des scrobblings en un seul endroit.",
    subsections: [
      ["D'où vient la musique", "Les extensions musicales fournissent des pistes et des collections, et une bibliothèque locale couvre les fichiers que vous possédez déjà. Les deux se comportent comme des sources normales."],
      ["Albums et artistes", "La musique est parcourue par album et artiste ainsi que par piste, ce qui rend une bibliothèque musicale utilisable plutôt qu'une longue liste de fichiers."],
      ["Le joueur", "Une file d'attente avec lecture aléatoire et répétition, une feuille en cours de lecture et une pochette. La lecture continue pendant que vous vous déplacez dans l'application."],
      ["Paroles", "Les pistes contenant des paroles les affichent dans une feuille et les paroles synchronisées suivent la position de la piste où la source fournit le timing."],
      ["Scrobbler", "La connexion de Last.fm enregistre ce que vous écoutez sur votre profil, de la même manière que le suivi enregistre ce que vous regardez."],
      ["Lorsqu'une piste ne sera pas lue", "Une source musicale qui ne fonctionne plus se comporte comme n’importe quelle autre source en panne. Mettez à jour l'extension et attendez-vous à ce qu'une source basée sur un service soit indisponible lorsque ce service est en panne."],
    ],
    facts: [
      "La musique provient d'extensions ou de fichiers que vous possédez déjà.",
      "Les albums et les artistes sont de première classe, pas seulement les morceaux.",
      "Le scrobbling Last.fm est disponible lorsque vous le connectez.",
      "Les paroles suivent la piste lorsque la source fournit le timing.",
    ]
  },

  novels: {
    title: "Lire des romans et se les faire lire.",
    body: "Les romans s'ouvrent dans un lecteur de texte plutôt que dans un lecteur d'images, avec des thèmes, une progression et une lecture vocale facultative.",
    subsections: [
      ["Comment s'ouvrent les romans", "Une source qui déclare un contenu nouveau s'ouvre automatiquement dans le lecteur de texte, vous n'avez donc jamais besoin de choisir manuellement le bon lecteur."],
      ["Confort de lecture", "La taille de la police, l’espacement des lignes et le thème sont réglables, car un mur de texte n’est pas la même expérience de lecture qu’une page d’images."],
      ["Se souvenir de ta place", "Le lecteur de roman suit votre position dans chaque chapitre et vous y renvoie, de la même manière que le lecteur d'images."],
      ["Lire à haute voix", "La synthèse vocale permet de lire un chapitre à haute voix à l'aide des voix installées sur votre appareil, ce qui est utile lors d'un trajet ou en faisant autre chose."],
      ["Quand un chapitre est vide", "Un chapitre de roman qui s'ouvre en blanc provient généralement d'une source qui a renvoyé un texte sous une forme que le lecteur ne peut pas montrer. La mise à jour de l'extension est la première chose à essayer."],
      ["Romans contre mangas", "Un roman est du texte et un manga est des images, une source doit donc déclarer le bon type pour que le contenu s'ouvre correctement. Un mauvais type l’envoie au mauvais lecteur."],
    ],
    facts: [
      "Les romans s'ouvrent dans un lecteur de texte, choisis par type de contenu.",
      "La police, l'espacement et le thème sont réglables.",
      "La lecture à haute voix utilise les voix installées sur votre appareil.",
      "Un chapitre vide signifie généralement que la source a renvoyé un texte inutilisable.",
    ]
  },

  games: {
    title: "Les jeux comme un autre type de source.",
    body: "Watchtower peut répertorier les jeux via des extensions de jeu et des plates-formes, en utilisant la même navigation et la même recherche que vous connaissez déjà.",
    subsections: [
      ["Qu'est-ce qu'une source de jeu", "Une extension de jeu répertorie les titres de la même manière qu'une extension de manga répertorie les séries et ouvre les mêmes écrans de navigation et de recherche."],
      ["Plateformes", "Les jeux sont regroupés par plateforme, ce qui permet de conserver un catalogue navigable lorsqu'une source couvre plusieurs systèmes."],
      ["Navigation et recherche", "Recherchez les fans parmi les sources de jeu activées exactement comme pour les autres types de médias, donc une seule requête les couvre tous."],
      ["Installation d'extensions de jeu", "Ils s'installent à partir des mêmes référentiels que tout le reste et apparaissent sous les jeux une fois installés."],
      ["Quand rien n'est répertorié", "Un écran de jeux vide signifie qu’aucune extension de jeu n’est installée. Ajoutez un référentiel qui en fournit un, puis actualisez."],
      ["Le garder séparé", "Les entrées de jeux ne se mélangent pas avec votre lecture et votre visionnage, donc un grand catalogue de jeux n'encombre jamais votre bibliothèque."],
    ],
    facts: [
      "Les sources du jeu s'installent à partir des mêmes référentiels que tout le reste.",
      "Les jeux sont regroupés par plateforme.",
      "La recherche couvre toutes les sources de jeu activées à la fois.",
      "Les entrées de jeu restent séparées de votre bibliothèque.",
    ]
  },
};

export default fr;
