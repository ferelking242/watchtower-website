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
      ["Les surprises du premier lancement", "Un écran Parcourir vide signifie qu'aucune extension n'est encore installée, pas que l'application est cassée. Un dépôt qui refuse de se charger vient presque toujours d'une adresse périmée ou d'un portail Wi-Fi qui bloque."]
    ],
    facts: [
      "Watchtower ne contient aucun contenu. Les sources sont à vous de choisir.",
      "Les extensions sont du JavaScript ordinaire exécuté dans un bac à sable.",
      "Votre bibliothèque vit sur votre appareil, pas sur un serveur Watchtower.",
      "Android 8.0+ est le minimum pour l'application mobile.",
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
      ["Garder l'application à jour", "Watchtower vous prévient quand une nouvelle version existe, et vous l'installez comme la première fois. Votre bibliothèque et vos réglages sont conservés tels quels."]
    ],
    facts: [
      "Android est la seule plateforme avec des versions publiées.",
      "Le binaire sans écran est compilé pour Linux x86_64.",
      "Rust est nécessaire pour compiler depuis les sources ; Go est facultatif.",
      "Les versions d'aperçu et stable partagent les mêmes données, donc passer de l'une à l'autre garde votre bibliothèque.",
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
      ["Quand un dépôt échoue", "Une adresse qui ne se charge pas est généralement expirée, bloquée, ou copiée sans son chemin d'index. Vérifiez qu'elle se termine par index.min.json avant de conclure que le dépôt a disparu."]
    ],
    facts: [
      "Un dépôt n'est qu'un fichier JSON hébergé sur un serveur web.",
      "Les mises à jour conservent vos préférences de source.",
      "Les dossiers locaux fonctionnent sans aucun réseau.",
      "Watchtower ne vérifie ni n'approuve les dépôts tiers.",
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
      ["Quand une entrée se casse", "Si une série s'ouvre vide ou perd sa couverture, sa source a changé sous vos pieds. Rafraîchissez l'entrée, puis migrez-la vers une autre source si le problème persiste."]
    ],
    facts: [
      "Les séries terminées sont laissées tranquilles par les mises à jour de fond.",
      "Une série peut appartenir à plusieurs catégories.",
      "La progression est suivie par chapitre ou épisode, pas par série.",
      "Retirer une série de la bibliothèque ne supprime pas votre historique.",
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
      ["Pourquoi les résultats diffèrent", "Chaque source indexe son propre catalogue : un titre peut être complet chez l'une et partiel chez l'autre. Comparer deux sources avant de choisir est normal."]
    ],
    facts: [
      "La recherche interroge toutes les sources activées d'un coup.",
      "Les sources sans liste de populaires fonctionnent quand même via la recherche.",
      "La migration déplace votre progression, pas vos fichiers téléchargés.",
      "Les étiquettes de langue des extensions alimentent le filtre par langue.",
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
      ["Quand une extension cesse de marcher", "Les sites changent, et une source casse avec eux. C'est presque toujours une extension cassée, pas une application cassée, et le correctif arrive sous forme de mise à jour."]
    ],
    facts: [
      "Les extensions sont du JavaScript, exécuté dans un bac à sable dans l'application.",
      "Une extension couvre un seul site.",
      "Installer et mettre à jour ne touche jamais à votre bibliothèque.",
      "Une source qui casse soudainement vient presque toujours d'un changement du site.",
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
      ["Garder le catalogue à jour", "Rafraîchissez vos dépôts de temps en temps. De nouvelles extensions apparaissent et les cassées reçoivent des correctifs, mais rien n'arrive tant que vous ne le demandez pas."]
    ],
    facts: [
      "Les mises à jour préservent les réglages que vous avez définis sur une source.",
      "Désinstaller une extension garde vos entrées de bibliothèque.",
      "Les extensions sont regroupées par langue, pas par dépôt.",
      "Rafraîchir un dépôt est ce qui fait apparaître les extensions nouvelles et mises à jour.",
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
      ["Avant de publier", "Testez l'extension contre le site réel, vérifiez les appels de recherche, de liste et de pages, et confirmez que le type de contenu est correct pour qu'elle s'ouvre dans le bon lecteur."]
    ],
    facts: [
      "Une source fonctionnelle ne nécessite qu'un manifeste et un fichier d'entrée.",
      "La ligne de commande peut tester un seul appel isolément.",
      "Les extensions peuvent atteindre le réseau et analyser des pages, rien de plus.",
      "Le type de contenu que vous déclarez décide quel lecteur s'ouvre.",
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
      ["L'adresse de l'index compte", "L'adresse que vous diffusez doit pointer vers index.min.json. Tout autre chemin laisse les gens devant un dépôt qui refuse de se charger."]
    ],
    facts: [
      "Un dépôt est un dossier HTTPS plus un index JSON.",
      "La version dans l'index est ce qui signale aux utilisateurs qu'une mise à jour existe.",
      "Un nom de paquet stable est ce qui fait qu'une mise à jour est une mise à jour.",
      "Attendez-vous à republier chaque fois que le site ciblé change.",
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
      ["Masquer les fichiers de la galerie", "Déposez un fichier .nomedia dans le dossier pour que les couvertures et les épisodes restent hors de l'application Photos."]
    ],
    facts: [
      "Les archives CBZ comme les simples dossiers d'images sont lus comme des chapitres.",
      "L'ordre des épisodes suit le nom de fichier, donc numérotez vos fichiers.",
      "Un fichier .nomedia garde les médias locaux hors de la galerie système.",
      "Les sources locales fonctionnent sans aucune connexion réseau.",
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
      ["Sauvegarder votre position", "La progression est écrite en continu pendant la lecture, donc fermer l'application ou perdre le courant ne fait pas perdre votre position."]
    ],
    facts: [
      "La lecture utilise un décodeur accéléré par le matériel par défaut.",
      "Les gestes gèrent la luminosité, le volume et le déplacement.",
      "La progression est enregistrée en continu, pas seulement à la sortie.",
      "Un lecteur externe est la solution de repli pour les codecs non pris en charge.",
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
      ["Romans", "Les romans textuels utilisent la même entrée de bibliothèque mais s'ouvrent dans un lecteur de texte plutôt qu'un lecteur d'images, choisi automatiquement selon le type déclaré par l'extension."]
    ],
    facts: [
      "La bande continue convient aux webtoons verticaux et ignore la largeur de page.",
      "Le lecteur retient la page atteinte par chapitre.",
      "Le zoom est désactivé en bande continue tant que vous ne l'activez pas.",
      "Les romans s'ouvrent dans un lecteur de texte, pas dans le lecteur d'images.",
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
      ["Si les mises à jour semblent s'arrêter", "L'optimisation de batterie d'Android peut suspendre le travail en arrière-plan. Exemptez Watchtower des restrictions de batterie si les mises à jour n'arrivent qu'à l'ouverture."]
    ],
    facts: [
      "Les mises à jour peuvent être limitées aux catégories que vous choisissez.",
      "Les séries terminées sont ignorées par défaut.",
      "Un trafic de mise à jour trop lourd peut pousser une source à bloquer l'application.",
      "L'optimisation de batterie peut retarder les mises à jour de fond.",
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
      ["Ce qu'une sauvegarde ne couvre pas", "Les fichiers de sauvegarde contiennent votre bibliothèque et vos réglages, jamais vos médias téléchargés. Ceux-là doivent être déplacés séparément."]
    ],
    facts: [
      "Une seule série par source se télécharge à la fois, exprès.",
      "Les médias téléchargés ne sont pas inclus dans une sauvegarde.",
      "Le stockage interne est plus rapide et plus fiable qu'une carte SD.",
      "Renommer le dossier de téléchargement casse la détection.",
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
      ["Regarder hors ligne", "La progression faite sans connexion est mise en attente et envoyée dès que vous êtes en ligne, donc un vol ne fait pas perdre votre historique."]
    ],
    facts: [
      "Le suivi se configure par série, pas pour toute la bibliothèque.",
      "La progression ne circule que vers l'extérieur, jamais en retour.",
      "Un seuil décide quand un épisode compte comme vu.",
      "La progression hors ligne s'envoie à la reconnexion.",
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
      ["Passer à un nouvel appareil", "Sauvegardez, installez sur le nouvel appareil, restaurez, puis reconnectez-vous aux services de suivi et réinstallez les extensions. Les téléchargements doivent être copiés séparément."]
    ],
    facts: [
      "Une sauvegarde est le seul moyen de déplacer une bibliothèque entre appareils.",
      "Les médias téléchargés doivent être déplacés séparément.",
      "Les couvertures personnalisées ne font pas partie d'une sauvegarde.",
      "Les sauvegardes automatiques sont la meilleure protection contre une mauvaise mise à jour.",
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
      ["Pourquoi le stockage interne est préférable", "Les téléchargements sur le stockage interne sont plus rapides et bien moins susceptibles de devenir illisibles que sur une carte amovible, qui peut être démontée ou corrompue."]
    ],
    facts: [
      "Sauvegardes, téléchargements et sources locales partagent un seul emplacement.",
      "Android a besoin d'une autorisation explicite pour ce dossier.",
      "Un fichier .nomedia cache les médias téléchargés de la galerie.",
      "Le stockage interne est plus fiable qu'une carte SD.",
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
      ["Avant de signaler un problème", "Notez votre version de l'application, la source qui a échoué et ce que l'écran affichait. Cela transforme un signalement vague en quelque chose de réellement réparable."]
    ],
    facts: [
      "Le réglage de confidentialité du sélecteur d'applications doit être désactivé pour les captures d'écran.",
      "L'incognito arrête l'historique, pas la progression.",
      "Les journaux de plantage restent sur votre appareil et ne sont jamais envoyés automatiquement.",
      "Le DNS chiffré corrige souvent une source qui échoue sur un seul réseau.",
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
      ["Une source a cessé de marcher", "C'est le problème le plus courant et souvent le moins grave. Le site a changé, l'extension a besoin d'une mise à jour, et rafraîchir votre dépôt est la solution. S'il n'y a pas encore de mise à jour, l'auteur de l'extension n'a pas encore suivi."],
      ["Rien ne se charge du tout", "Si toutes les sources échouent, regardez plutôt le réseau. Essayez les données mobiles, un autre réseau Wi-Fi, et le DNS chiffré dans les réglages. Un réseau unique qui bloque tout est une cause fréquente."],
      ["Un site demande sans cesse une vérification", "Certains sites imposent un contrôle avant de répondre. Ouvrir la page de la source dans le navigateur intégré une fois suffit généralement ; vider les données web de l'application réinitialise un contrôle bloqué."],
      ["Une extension refuse de s'installer", "Android bloque par défaut les installations hors magasin. Autorisez-le pour votre gestionnaire de fichiers ou votre navigateur, et si l'option manque, utilisez Shizuku comme autre voie."],
      ["Le contenu s'ouvre au mauvais endroit", "Si un manga s'ouvre dans le lecteur vidéo, ou un épisode dans le lecteur de mangas, l'extension déclare le mauvais type de contenu. C'est un défaut de l'extension, pas de vos réglages."]
    ],
    facts: [
      "Une source cassée est presque toujours la source, pas l'application.",
      "Une extension périmée est la cause la plus fréquente d'une panne soudaine.",
      "Si toutes les sources échouent, soupçonnez le réseau avant l'application.",
      "Installer des extensions nécessite l'autorisation Android pour les applications inconnues.",
    ],
  },

  errors: {
    title: "Ce que signifient les messages d'erreur.",
    body: "Watchtower affiche une poignée d'erreurs bien plus souvent que les autres. Voici ce que chacune vous dit réellement, et la première chose à essayer.",
    subsections: [
      ["403 Forbidden", "Le site a décidé que votre requête semblait automatisée et la refuse. En pratique, c'est de la protection anti-robot. Essayez d'abord de mettre à jour l'extension, puis ouvrez la source dans le navigateur intégré pour lever le contrôle que le site garde."],
      ["429 Too many requests", "Vous avez été limité pour avoir fait des requêtes trop vite. Attendre est la vraie solution, et réduire la fréquence des mises à jour est ce qui empêche le problème de revenir. Réessayer immédiatement ne fait que prolonger le blocage."],
      ["404 Not found", "La page attendue par l'extension a bougé ou disparu. C'est presque toujours une extension périmée, donc rafraîchissez votre dépôt et mettez-la à jour."],
      ["Une erreur 500 ou autre erreur serveur", "Le site lui-même est en panne. Il n'y a rien à corriger sur votre appareil, et la bonne décision est d'attendre et de réessayer plus tard."],
      ["Un délai dépassé ou une requête qui bloque", "Soit votre connexion est mauvaise, soit la source est surchargée. Vérifiez que le site se charge dans un navigateur, puis essayez un autre réseau avant d'accuser l'extension."],
      ["Erreurs d'installation", "Un APK signé par quelqu'un d'autre, un téléchargement tronqué et la mauvaise architecture de processeur produisent chacun un message d'installation différent. Supprimer l'application en conflit et retélécharger le fichier résout les deux premiers."]
    ],
    facts: [
      "403 et 429 signifient tous deux que le site vous refuse, pour des raisons différentes.",
      "Un 404 est presque toujours une extension à mettre à jour.",
      "Une erreur 5xx est la faute du site web, pas de votre appareil.",
      "Une signature incompatible signifie qu'une copie signée différemment est installée.",
    ],
  },

  faq: {
    title: "Les questions qui reviennent souvent.",
    body: "Des réponses courtes aux questions que les gens posent avant et après avoir installé Watchtower.",
    subsections: [
      ["Pourquoi n'est-elle pas sur un magasin d'applications ?", "Parce que Watchtower installe des extensions à l'exécution, ce que les politiques des magasins n'autorisent pas. C'est aussi pourquoi chaque installation vient d'un APK auquel vous choisissez de faire confiance."],
      ["Existe-t-il une version iOS ?", "Le code sous-jacent est multiplateforme, mais publier sur iOS est contraint par les règles de la plateforme et n'est pas promis. Android est la plateforme qui reçoit tout en premier."],
      ["Fonctionne-t-elle sans Internet ?", "Tout ce que vous avez téléchargé, plus les fichiers locaux, fonctionne entièrement hors ligne. Parcourir les sources et chercher, non, car cela nécessite les sites eux-mêmes."],
      ["Puis-je synchroniser entre appareils ?", "Il n'y a pas de synchronisation automatique. Vous déplacez votre bibliothèque avec un fichier de sauvegarde, et les médias téléchargés doivent être copiés séparément."],
      ["Est-ce légal et est-ce gratuit ?", "Watchtower est gratuit et open source, et ne contient aucun contenu. Ce que vous ajoutez via les extensions relève de votre responsabilité, ce qui explique pourquoi l'application insiste sur le fait qu'elle ne les contrôle pas."],
      ["Quelque chose est cassé, et maintenant ?", "Mettez d'abord à jour vos extensions, car cela corrige la plupart des pannes. Si cela persiste, consultez la page des erreurs pour le message que vous voyez avant de supposer que l'application est fautive."]
    ],
    facts: [
      "Watchtower n'est pas distribué via les magasins d'applications.",
      "Le contenu téléchargé et les fichiers locaux fonctionnent entièrement hors ligne.",
      "Il n'y a pas de synchronisation automatique entre appareils.",
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
  }
};

export default fr;
