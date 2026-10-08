// Authoritative English documentation content. Other languages overlay their
// prose on top of this base and inherit `code` blocks unchanged, because code
// is language-independent.
const en = {
  overview: {
    title: "A complete map of the Watchtower app.",
    body: "Watchtower combines a Flutter client, local libraries, JavaScript extensions, native bindings and an optional headless server in one self-hostable runtime.",
    marker: "01",
    code: `watchtower/
├── lib/modules/       media, library, calendar, game, tracking
├── lib/local_indexer/ local files, metadata and search
├── lib/eval/          QuickJS extension runtime
├── lib/extension/     extension catalogue and lifecycle
├── lib/remote/        embedded Dart/shelf server
├── lib/cli/           headless command-line runtime
├── rust/              native EPUB, image and TLS bindings
└── go/                torrent + HTTP streaming`,
    subsections: [
      ["What Watchtower is", "A cross-platform media hub for anime, manga, series, music, novels and games. It indexes local files, tracks progress, downloads content and runs community sources through an extensible JavaScript runtime."],
      ["Two runtimes, one contract", "The installed app exposes an embedded HTTP server on port 4567. The headless CLI reuses the same Flutter and QuickJS engine so CI, servers and SSH sessions can run sources without a graphical session."],
      ["Who this guide is for", "Source authors who write extensions, self-hosters who run the headless server, and contributors who work on the Flutter app. Every section states what is required and what is optional."]
    ],
    facts: [
      "Cross-platform Flutter client for anime, manga, music, novels, games and playback.",
      "Local indexer, library, history, favorites, calendar and progress tracking.",
      "QuickJS extensions, downloads, anti-bot, Rust bindings and the Go torrent server."
    ]
  },
  "app-map": {
    title: "An application made of composable surfaces.",
    body: "The repository separates feature screens, data services and execution runtimes. This map follows content from a source to playback and the local library.",
    marker: "02",
    code: `lib/
├── modules/
│   ├── home/          Watchtower home, discovery, search
│   ├── watch/         source home, catalogue, reader/player
│   ├── anime/         anime player and subtitle controls
│   ├── manga/         manga reader and chapters
│   ├── music/         library, playlists, player and stats
│   ├── novel/         novel reader
│   ├── calendar/      upcoming schedule
│   ├── game/          game discovery
│   ├── tracker_library/ tracking integrations
│   └── mass_migration/ library migration flow
├── local_indexer/      filesystem → normalized media
├── eval/               JS/Dart extension bridge
├── remote/             embedded HTTP server
├── cli/                headless commands
├── router/             GoRouter routes
└── services/           downloads, sync, torrent, diagnostics`,
    subsections: [
      ["Content flow", "An extension returns shared models. Riverpod providers paginate them, screens turn them into cards, and Isar stores history, favorites and indexed files."],
      ["Routing", "GoRouter connects onboarding, home, search, details, playback, libraries, settings and specialist modules without coupling source contracts."],
      ["Runtimes", "Flutter owns the UI, QuickJS/Dart executes sources, Rust and Go provide native capabilities, and the headless CLI mirrors the runtime server-side."],
      ["State and storage", "Riverpod drives the main app, Isar is the primary database, and Hive keeps preferences. The music and file-browser modules carry their own legacy stacks and stay isolated from source contracts."]
    ],
    facts: [
      "UI modules are grouped by media domain rather than by provider.",
      "Cross-cutting services handle cache, downloads, anti-bot, sync and diagnostics.",
      "Screens can work with a remote source, a local file or the headless server."
    ]
  },
  "content-types": {
    title: "Manga, watch, music: one shared model.",
    body: "ItemType classifies source families; the concrete payload stays in manga, chapter, page, video and track models. A watch extension can therefore cover anime, films or series without a new native renderer.",
    marker: "03",
    code: `ItemType
├── manga    chapters → page list → reader
├── anime    episodes → video list → player
├── novel    chapters → HTML/text reader
├── music    tracks → audio player → playlists
├── game     discovery/detail surface
└── plugin   utility or downloader surface

MManga: name, link, imageUrl, description,
        author, artist, genre, chapters[]
MChapter: name, url, dateUpload, thumbnailUrl,
          description, duration, downloadSize`,
    subsections: [
      ["Manga", "Chapters use getPageList(url) to produce reader pages. Metadata shares name, image, description, author, artist and genres."],
      ["Watch: anime, film, series", "Episodes use getVideoList(url). Videos carry URL, quality, original URL, headers, subtitles and audio tracks. Film/series/anime are content metadata, not separate runtimes."],
      ["Music and novel", "Music reuses search and detail surfaces with tracks, albums, artists and playlists; novels use detail, chapters and an HTML/text reader."],
      ["Games and plugins", "Game provides a dedicated discovery surface. Plugin represents utility or downloader extensions using the manifest and native UI schema."]
    ],
    facts: [
      "Compatibility comes from data contracts, not a screen coded for every site.",
      "Filters, preferences, comments, recommendations and custom lists are optional.",
      "The itemType field is persisted on Source and selects library, player and history behavior."
    ]
  },
  "extension-runtime": {
    title: "JavaScript runs inside a controlled runtime.",
    body: "DartExtensionService loads source code, injects MProvider and executes it in QuickJS. Bridges expose network, DOM, extractors, preferences and Flutter models without exposing the native app.",
    marker: "04",
    code: `ExtensionService
├── sourceBaseUrl / headers
├── getPopular(page)
├── getLatestUpdates(page)
├── search(query, page, filters)
├── getDetail(url)
├── getPageList(url)
├── getVideoList(url)
└── optional custom lists / comments / suggestions

QuickJS bridges
HTTP · DOM selector · extractors · preferences
Dart models: MSource · MPages · MManga · MChapter · MVideo`,
    subsections: [
      ["Loading", "SourceCodeLanguage distinguishes Dart, JavaScript and Mihon. The loader also installs or removes Android private extensions through the native channel."],
      ["Security and isolation", "Source calls pass through controlled bridges. The headless server adds a registry, cache, authentication and rate limiting before execution."],
      ["Lifecycle", "A source is discovered in the catalogue, installed or enabled, executed on demand, and its preferences, cookies, cache and layout can be reset from extension settings."],
      ["Error handling", "A failing bridge call returns a typed error to Dart instead of crashing the isolate. Failures are logged with the operation name and the offending URL so a diagnostic run can point at the exact step."]
    ],
    facts: [
      "QuickJS returns serialized objects to Dart models.",
      "Extension code can define headers, filters, preferences and custom lists.",
      "Mihon compatibility allows reuse of existing manga extensions."
    ]
  },
  "extension-types": {
    title: "Each extension family has its surface.",
    body: "The source type selects available screens and actions. The same JS engine is shared, while results render through the manga reader, watch player, audio, novel, game or plugin surface.",
    marker: "05",
    code: `MANGA  → popular/latest/search
          → detail → chapters → pages → reader
WATCH  → popular/latest/search
          → detail → episodes → videos → player
MUSIC  → catalogue/search → album/artist
          → tracks → audio queue
NOVEL  → detail → chapters → text/HTML reader
GAME   → discovery/detail modules
PLUGIN → manifest + native UI / downloader`,
    subsections: [
      ["Manga", "Chapter and page sources with catalogue filters, reading history and local import."],
      ["Watch", "Video sources for anime, films and series: details, episodes, quality, subtitles, audio tracks and player extractors."],
      ["Music", "Audio catalogue and metadata extensions: albums, artists, tracks, search, playlists and statistics."],
      ["Novel, game, plugin", "Novels reuse the text/HTML reader; games have discovery screens; utility plugins follow manifest.json and ui/schema.json."]
    ],
    facts: [
      "Watch is a usage family: its itemType can be anime or another compatible video source.",
      "The generic renderer uses the same cards, pagination and layouts for compatible sources.",
      "Optional capabilities prevent showing an action a source does not implement."
    ]
  },
  "extension-contract": {
    title: "The JS contract, method by method.",
    body: "ExtensionService defines the shared minimum. Optional methods enrich the experience without breaking a source that does not implement them.",
    marker: "06",
    code: `required
getPopular(page) -> MPages
getDetail(url) -> MManga
getPageList(url) -> PageUrl[]
getVideoList(url) -> Video[]

capabilities
supportsLatest
getLatestUpdates(page)
search(query, page, filters)
getFilterList()
getSourcePreferences()
getCustomList(id, page)
getRecommendations(url)
getComments(url)
getSuggestions(query)
getAccount() / getFavorites() / getSubscription()`,
    subsections: [
      ["Catalogue navigation", "getPopular, getLatestUpdates and search return MPages with list and hasNextPage. Filters come from getFilterList and preferences are persisted per source."],
      ["Detail and playback", "getDetail returns MManga. A manga source exposes getPageList; a watch source exposes getVideoList and can provide quality, headers, subtitles and audio."],
      ["Contract extensions", "getCustomList enables home sections declared by id; recommendations, comments, suggestions, account, favorites and subscription remain optional with safe empty defaults."],
      ["Failure semantics", "Return an empty MPages rather than throwing when a page has no items. When a request truly fails, let the error propagate so the UI can show a retry and the diagnosis can record the cause."]
    ],
    facts: [
      "URLs remain navigation identifiers between catalogue, detail and playback.",
      "Headers and baseUrl are provided by the source and can be customized.",
      "Errors are logged in Dart and in the headless runtime for diagnostics."
    ]
  },
  "ui-schema": {
    title: "The manifest describes the contract.",
    body: "For UI extensions and ZeusDL scripts, manifest.json declares identity, permissions and runtime. The schema then describes fields, actions and output rendered natively by Flutter.",
    marker: "07",
    code: `// manifest.json
{
  "id": "en.example-tool",
  "version": "1.0.0",
  "runtimeTypes": ["downloader"],
  "commandScopes": ["download"],
  "networkAccess": ["example.com"],
  "ui": "native"
}

// UI contract
{
  "inputs": [{ "id": "url", "type": "url_field" }],
  "actions": [{ "id": "download", "style": "primary" }],
  "output": { "type": "log" }
}`,
    subsections: [
      ["Manifest fields", "manifest.json carries identity, version, author, network permissions and binary requirements. The id is a reverse-DNS string such as en.example-tool."],
      ["Native UI contract", "The UI contract renders URL/text fields, selects, toggles and actions without a WebView, so load times stay fast and the result works offline."],
      ["ZeusDL output protocol", "Scripts communicate over stdout with PROGRESS, STATUS, DONE and ERROR lines. Watchtower streams them into the output log in real time."],
      ["Validation errors", "A manifest that fails schema validation is rejected before install. The marketplace shows the exact field that failed instead of a generic message."]
    ],
    facts: [
      "manifest.json carries identity, version, author, network permissions and binary requirements.",
      "The UI contract renders URL/text fields, selects, toggles and actions without a WebView.",
      "ZeusDL scripts communicate over stdout with PROGRESS, STATUS, DONE and ERROR."
    ]
  },
  layouts: {
    title: "ui-layouts.json controls order and shape.",
    body: "An extension can publish a declarative layout. Watchtower downloads it from watchtower-extensions, parses it as UiLayout, caches it per source and lets Flutter map components to native widgets.",
    marker: "08",
    code: `{
  "schemaVersion": 1,
  "home": {
    "sections": [{
      "id": "popular",
      "component": "carousel",
      "title": "Popular",
      "icon": "star",
      "accent": "primary",
      "columns": 2,
      "cardStyle": "poster",
      "seeAll": true,
      "paginated": true,
      "requiresAuth": false
    }]
  },
  "browse": { "popular": {}, "latest": {}, "search": {} },
  "detail": { "hero": "backdrop", "episodeList": "grouped", "showRecommendations": true },
  "player": { "mode": "standard" }
}`,
    subsections: [
      ["Root and cache", "schemaVersion and home.sections are the useful minimum. browse, detail and player are optional. LayoutDownloader reads Source.uiLayout from raw.githubusercontent.com, then LayoutRegistry stores layouts/<source.id>.json."],
      ["Home sections", "id identifies getCustomList(id, page). component accepts spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed and masonry, plus the curated presentations declared in the component registry."],
      ["Visual parameters", "title, icon and accent shape the header. columns, rows, cardStyle, gridOrder and scrollDirection are rendering hints. seeAll enables a full page, paginated enables page loading and requiresAuth gates a signed-in section."],
      ["Browse, detail, player", "Browse describes popular/latest/search with component, columns, cardStyle, results and filters. Detail accepts hero, episodeList and showRecommendations. Player accepts standard or feed."],
      ["Invalid layouts", "An unknown component falls back to the grid renderer and is logged. A malformed file leaves the source on its standard Popular/Latest/Search home instead of failing the whole screen."]
    ],
    facts: [
      "Without a layout, the source falls back to standard Popular/Latest/Search.",
      "The toLegacyMap bridge keeps existing home screens compatible.",
      "A layout reloads after extension install or update and is removed on uninstall."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen is a controllable surface.",
    body: "The Watch page composes hero, history, categories, rows and catalogue from the current source. JSON layouts can replace standard lists while keeping native interactions.",
    marker: "09",
    code: `WatchHomeScreen
CustomScrollView
├── Hero / banner
├── Continue watching (Isar history)
├── Category cards
├── Popular / Latest / custom rows
├── New & Hot
└── Catalogue grid

Interactions
refresh · pagination · search · favorites
detail sheet · reader/player · see all`,
    subsections: [
      ["Order and hero", "The hero uses the first five banner items (popular fallback), rotates every 7 seconds and targets a width × 0.62 landscape ratio. Play opens detail, Info opens the bottom sheet and My list toggles the Isar favorite."],
      ["History", "Continue watching reads the source's Isar history, deduplicates by manga, limits to 12 cards and shows thumbnail, episode/chapter and progress."],
      ["Catalogue and search", "The catalogue grid paginates Popular or a custom list. Search uses a 250 ms debounce, floating suggestions, mic/X actions and only commits results on submit."],
      ["Performance", "The app bar observes scroll with ValueNotifier; the hero lives inside CustomScrollView so content cannot overlap it and scrolling avoids a full setState rebuild."],
      ["Empty and error states", "An empty section is hidden. A failed section shows a retry card with the raw error, and a Cloudflare block routes to the bypass panel instead of a dead end."]
    ],
    facts: [
      "Categories are 132×72 cards with image, gradient and border.",
      "Sections are hidden when their data is empty.",
      "Source actions stay consistent across manga, anime, films and series."
    ]
  },
  "home-widgets": {
    title: "Widgets are data adapters.",
    body: "WatchtowerHomeScreen is the global app home. It combines AniList and TMDB feeds with the local library and drives rows through media tabs.",
    marker: "10",
    code: `lib/modules/home/widgets/
├── hero_carousel.dart      spotlight + pagination
├── discovery_card.dart     poster, landscape, ranked, saga
├── episode_card.dart       progress + resume action
├── category_row.dart       media category navigation
├── tmdb_cards.dart         film / series discovery
├── home_header.dart        account + search entry
└── skeleton_home.dart      loading placeholders

_HomeTab
tout · film · serie · musique · anime · asia
enfant · occidental · africa · tvCourt
football · jeux`,
    subsections: [
      ["Media home", "The Tout, Film, Series, Music, Anime, Asia, Kids, Western, Africa, Short TV, Football and Games tabs select visible sections and hero data."],
      ["Cards", "DiscoveryCard has standard, ranked, landscape, featured, saga and spotlight variants. EpisodeCard adds thumbnail, episode title, duration and progress bar for resume."],
      ["Data", "AniList feeds anime and editorial content; TMDB feeds films and series; the local library and providers complete user lists."],
      ["Watch versus global home", "WatchtowerHomeScreen is the global home; WatchHomeScreen is a source/extension home. The first aggregates catalogues, the second renders a source contract."]
    ],
    facts: [
      "Widgets do not know each provider's URLs: they consume normalized models.",
      "Skeleton, empty, loading and error states are part of the home surface.",
      "Extension layouts primarily target WatchHomeScreen and browse/detail/player screens."
    ]
  },
  api: {
    title: "Two runtimes, one API.",
    body: "The embedded Dart/shelf server listens on 4567 inside the app. The headless CLI reuses the same operations for CI, Docker, Railway or Render.",
    marker: "11",
    code: `GET /api/ping
GET /api/sources
GET /api/sources/:id
GET /api/sources/:id/popular?page=1
GET /api/sources/:id/latest?page=1
GET /api/sources/:id/search?q=query&page=1
GET /api/sources/:id/detail?url=...
GET /api/sources/:id/videos?url=...
GET /api/sources/:id/pages?url=...
GET /api/sources/:id/filters
GET /api/library
GET /api/history
GET /api/proxy?url=...`,
    subsections: [
      ["Endpoints", "Ping, source discovery, catalogue, detail, video, page and filter routes mirror the ExtensionService contract. Library, history and proxy routes serve the local database and media."],
      ["Authentication", "GET /api/ping stays public and returns the server version. Other routes pass through authentication, rate limiting and the extension registry."],
      ["Error responses", "Failures return a JSON body with the operation and message instead of an empty 500. A source error keeps its HTTP status so the client can distinguish a block from a bug."],
      ["NSFW filtering", "NSFW sources are filtered from listings and blocked with 403 on direct access."]
    ],
    facts: [
      "GET /api/ping is public and returns the server version.",
      "Other routes pass through authentication, rate limiting and the extension registry.",
      "NSFW sources are filtered from listings and blocked with 403 on direct access."
    ]
  },
  downloads: {
    title: "Downloads run through selectable engines.",
    body: "Watch, manga and novel each have their own download tab. A per-media engine, concurrency and Wi-Fi rules drive the queue, and every card exposes quick actions.",
    marker: "12",
    code: `Engines
HYDRA  internal HLS downloader
ZEUS   ZeusDL multi-thread
ARES   Aria2 external protocol
Externe hand off to ADM / IDM

Folders
/storage/emulated/0/Watchtower/
  video|music|manga|novels/
    downloads/     final files
    plugins/.cache/zeus/  temp`,
    subsections: [
      ["Engine selection", "HYDRA is the internal HLS engine, ZEUS is ZeusDL, ARES is Aria2 and Externe hands the link to ADM or IDM. Choosing the wrong engine for a protected stream is a common failure."],
      ["Concurrency", "Each tab sets simultaneous connections (1–20) and simultaneous queue items (1–10). Higher values speed up downloads but consume more bandwidth and can trigger source rate limits."],
      ["Archive and cleanup", "Manga chapters can be archived as folder, CBZ, CBR, CB7 or ZIP. Auto-delete after reading removes a chapter once it is marked read, optionally including bookmarked chapters."],
      ["Download errors", "A failed download keeps its partial files and offers Retry. 403/429 usually mean a rate limit or anti-bot block; 5xx points at the source. Verify the link in a browser before changing settings."]
    ],
    facts: [
      "Wi-Fi-only rules can block a download until a Wi-Fi network is available.",
      "Smart library updates add new episodes or chapters automatically when enabled.",
      "The download queue shows up to five quick-action buttons per card."
    ]
  },
  trackers: {
    title: "Progress syncs with external services.",
    body: "Watchtower connects to AniList, Kitsu, MyAnimeList, Simkl and Trakt so watch and read progress stays in sync across devices.",
    marker: "13",
    code: `lib/services/trackers/
├── anilist.dart
├── kitsu.dart
├── myanimelist.dart
├── simkl.dart
└── trakt_tv.dart

Settings › Tracking
login · link series · auto-update
status mapping · score format`,
    subsections: [
      ["Supported trackers", "AniList, Kitsu, MyAnimeList, Simkl and Trakt. Each has its own login flow and status model, normalized to a shared Track model."],
      ["Linking and syncing", "A library entry can be linked to a tracker entry. Progress, status and score are pushed on update, and smart updates can pull the next episode or chapter."],
      ["Tracker errors", "An expired token, a revoked app or a rate limit each produce a distinct message. Re-authenticate from Settings › Tracking; a mismatched entry can be unlinked and re-linked."],
      ["Migration", "The mass migration flow moves library entries between sources while preserving tracker links, so a dead source does not lose progress."]
    ],
    facts: [
      "Tracker integrations live under lib/services/trackers.",
      "Manage trackers from Settings › Tracking.",
      "Mass migration preserves tracker links when a source changes."
    ]
  },
  "getting-started": {
    title: "Build the Flutter app",
    body: "Install the toolchains, fetch Dart packages, and launch the cross-platform client.",
    marker: "14",
    code: `git clone https://github.com/ferelking242/watchtower.git
cd watchtower
flutter pub get
flutter run

# Android release
flutter build apk --release --target-platform android-arm64

# Headless Linux CLI
./watchtower --cli doctor --json`,
    subsections: [
      ["Prerequisites", "Flutter 3.38+ / Dart 3.10+, Rust for the flutter_rust_bridge bindings, Java 17 for Android, and Go 1.21+ if you rebuild the torrent client."],
      ["Platforms", "Windows, Linux, macOS, iOS, Android and Web are all targeted by the project. Some native features degrade gracefully on Web."],
      ["Verify the install", "Run the analyzer before your first change: dart format --output=none --set-exit-if-changed lib and flutter analyze --no-pub. The CLI doctor command reports whether the native engine and QuickJS are available."],
      ["Common build errors", "A missing Rust toolchain fails the binding step. An old Flutter SDK fails the pub resolution. A missing Java 17 fails the Android build. Fix the toolchain before editing app code."]
    ],
    facts: [
      "Prerequisites: Flutter 3.38+, Dart 3.10+, Rust and Java 17 for Android.",
      "The project targets Windows, Linux, macOS, iOS, Android and Web.",
      "The headless CLI ships from the Build Linux Headless CLI workflow."
    ]
  },
  deployment: {
    title: "Embedded or headless.",
    body: "The headless CLI runs with or without Docker. Private routes use X-Api-Key or Authorization Bearer when API_KEY is enabled, while the app keeps its embedded mode.",
    marker: "15",
    code: `# Docker
docker compose up -d

# Local headless
./watchtower --cli help
./watchtower --cli extensions test \\
  --repo ./watchtower-extensions \\
  --mode smoke --report extensions.json

API_KEY=mysecretkey PORT=4567 ./watchtower --cli serve`,
    subsections: [
      ["Docker", "Docker Compose is the recommended path for a reproducible server. The published image is available on GHCR."],
      ["Other hosts", "Railway, Render, a VPS and bare Docker are documented in the repository. The server keeps the same source contract as the app."],
      ["Environment variables", "API_KEY protects private routes. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR and RATE_MAX_TOKENS control caching, persistence and rate limiting."],
      ["Deployment errors", "A container that exits immediately is usually a missing API_KEY or a port conflict. Check the logs, confirm the port is free, and verify the extension repo path before restarting."]
    ],
    facts: [
      "Docker Compose is the recommended path for a reproducible server; the image is on GHCR.",
      "Railway, Render, VPS and Docker deployments are documented in the repository.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR and RATE_MAX_TOKENS control server behavior."
    ]
  },
  troubleshooting: {
    title: "Troubleshooting",
    body: "Facing a source or app issue? Work through the checklist, read the exact error, then run a diagnosis before changing settings.",
    marker: "16",
    code: `Primary checklist
1. Update extensions
2. Update the app
3. Refresh the series / episode
4. Try another item from the same source
5. Open the site in a browser or WebView
6. Change network (Wi-Fi · mobile · VPN)
7. Clear cache and cookies
8. Restart the app`,
    subsections: [
      ["Primary diagnosis", "Update extensions and the app, refresh the failing item, try a different item from the same source, open the site in a browser, change network, clear cache and cookies, then restart the app. If a step fixes it, the cause is local."],
      ["Reading the error", "Watchtower shows the raw error, not a generic message. Copy it: the operation name and the failing URL point at the exact step. Extension diagnostics record popular, latest, detail and media stages separately."],
      ["HTTP errors", "403 Forbidden: anti-bot or IP ban. 404 Not Found: removed content or a dead source. 429 Too Many Requests: a temporary rate limit. 5xx: the source server is down. 1006/1020: an IP ban or firewall rule."],
      ["Personalized versus widespread", "If only you are affected, suspect Cloudflare, an IP ban or a rate limit, and reduce downloads from that source. If everyone is affected, check the extension and app issue trackers."],
      ["Installation issues", "An extension that fails to install usually fails schema validation or downloads a corrupt file. Re-download it and check the manifest id and version."]
    ],
    facts: [
      "Update extensions first: most breakages are fixed by an extension update.",
      "The diagnosis screen separates popular, latest, detail and media stages.",
      "No ETA for extension fixes; a broken source may simply need patience."
    ]
  },
  cloudflare: {
    title: "Cloudflare & anti-bot",
    body: "Some sources sit behind Cloudflare. Watchtower only reports a challenge when the response carries real evidence, and offers a bypass WebView that opens the exact failing URL.",
    marker: "17",
    code: `Evidence required
cf-ray · cf-mitigated · server: cloudflare
challenge-platform · cf-chl
“Just a moment…” · “Verify you are human”

Not Cloudflare by itself
a bare 403 / 503 · a timeout · “challenge”

Fix order
WebView → user agent → cookies → network`,
    subsections: [
      ["What counts as a challenge", "A bare 403/503, a timeout or the word challenge is not Cloudflare. Watchtower requires CDN markers, an interactive challenge page or a block page before showing the anti-bot UI."],
      ["Bypassing a challenge", "The bypass WebView opens the exact URL that failed, never the site root. Solve the CAPTCHA once, then retry the source."],
      ["Changing the user agent", "A user agent string affects bot detection. Change the default in Advanced settings, restart the app and retry. Try several browsers and operating systems."],
      ["Cookies and cache", "Clearing cookies resets a login or challenge state. Clearing WebView data gives a clean slate. Both live in Advanced settings."],
      ["When it still fails", "The source may have raised its protection. Wait, or switch to another source for the same content."]
    ],
    facts: [
      "Cloudflare is reported only when there is real evidence in the response.",
      "The bypass WebView opens the failing URL, not the site root.",
      "A personalized failure usually means a block or rate limit, not a bug."
    ]
  },
  cli: {
    title: "Headless CLI",
    body: "The Linux build contains the same extension runtime as the desktop app and runs without X11 or Wayland, for CI, servers and SSH.",
    marker: "18",
    code: `./watchtower --cli doctor --json
./watchtower --cli extensions list --repo ./watchtower-extensions
./watchtower --cli extensions test \\
  --repo ./watchtower-extensions \\
  --type watch --lang fr --include-unindexed \\
  --mode smoke --report extensions.json
./watchtower --cli source 1900000002 inspect --json
./watchtower --cli plugins validate --repo ./watchtower-extensions --json`,
    subsections: [
      ["Commands", "doctor probes the native engine and QuickJS. extensions list and test load a local repo. source runs a single ExtensionService operation. plugins validate inspects the plugin catalogue."],
      ["Test modes", "load checks that a source loads and exposes filters, preferences and headers. smoke also calls popular, latest, search, suggestions, details and the media operation. deep adds page two and HTTP probes."],
      ["Filtering", "Filter by language, NSFW/SFW, engine, tag, query, ids or type. A language directory such as src/watch/fr takes precedence over a stale lang field in the index."],
      ["Exit codes and errors", "0 is success, 1 is a failed health, test or validation check, and 2 is invalid usage or an unhandled operation error. Reports and stdout redact credentials and signed URL parameters."],
      ["Known limits", "Library, history, progress, download queue and tracker commands are not available yet: the headless entry point does not open the Isar/Hive stores."]
    ],
    facts: [
      "doctor --json reports whether the native engine and QuickJS are available.",
      "smoke runs popular, latest, search, details and the media operation.",
      "Output redacts common credentials and signed URL parameters."
    ]
  }
};

export default en;
