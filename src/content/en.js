// Authoritative English documentation content. Other languages overlay their
// prose on top of this base and inherit `code` blocks unchanged, because code
// is language-independent.
const en = {
  "getting-started": {
    title: "Everything you need to get Watchtower running.",
    body: "Watchtower is a cross-platform media hub for anime, manga, series, music, novels and games. This page walks you from download to your first playable source.",
    marker: "01",
    code: `# 1. Install the app
#    Android: download the APK and open it
#    Desktop/CI: build the headless CLI

# 2. Add a source repository
#    More → Extensions → Add repository
#    Paste a URL ending in index.min.json

# 3. Install extensions, then add series
#    Browse → pick a source → search → Add to library

# 4. Start watching or reading
watchtower --serve --port 4567`,
    subsections: [
      ["What you need", "An Android 8.0 or newer device for the full app, or any Linux, macOS or Windows host for the headless CLI. A source repository URL is required before any content appears."],
      ["Install the app", "Download the latest APK from the repository releases and open it. If your device blocks sideloading, enable installation from unknown sources for your file manager first."],
      ["Add your first source", "Open More, go to Extensions, and add a repository URL that ends in index.min.json. Refresh the list, then install the extensions you want."],
      ["Find something to play", "Go to Browse, pick an installed source, and search or browse its Popular and Latest listings. Tap a result and choose Add to library to keep it."],
      ["Where to go next", "Read Adding sources for repositories and local folders, Extensions for the runtime, and Player settings or Reader settings to tune playback."]
    ],
    facts: [
      "Watchtower runs on Android, iOS, Windows, Linux, macOS and the web.",
      "Sources are JavaScript extensions executed by an embedded QuickJS runtime.",
      "The same engine powers the app and the headless server, so contracts match."
    ]
  },

  installation: {
    title: "Install on the platform you actually use.",
    body: "Watchtower ships as an Android app, a desktop build and a headless Linux CLI. Pick the channel that matches how you want to run it.",
    marker: "02",
    code: `# Android
adb install watchtower-release.apk

# Headless CLI (Linux, x86_64)
curl -LO https://github.com/ferelking242/watchtower/releases/latest/download/watchtower-linux-x64
chmod +x watchtower-linux-x64
./watchtower-linux-x64 --version

# From source
flutter pub get
flutter build apk --release`,
    subsections: [
      ["Android app", "The primary target. Download the release APK, or a preview build for upcoming features. Keep automatic backups enabled on preview builds."],
      ["Headless CLI", "A Linux binary that reuses the same Flutter and QuickJS engine without a graphical session. Ideal for servers, SSH sessions and CI jobs."],
      ["Build from source", "Clone the repository, run flutter pub get, then flutter build apk --release. Rust and Go toolchains are needed for native bindings and the torrent server."],
      ["Preview versus stable", "Preview builds track main and showcase unreleased work. They break more often, so treat them as a testing channel rather than a daily driver."],
      ["Requirements", "Flutter 3.38+, Dart 3.10+, a Rust toolchain and Go 1.22+ when building every component from source."]
    ],
    facts: [
      "Release, profile and debug APKs are all produced by CI.",
      "The CLI binary is published for Linux on every tagged release.",
      "Third-party installation must be allowed for APK-based extensions."
    ]
  },

  "adding-sources": {
    title: "Bring your own content to Watchtower.",
    body: "Watchtower does not bundle content. You add it through extension repositories for online sources or through local folders for files you already own.",
    marker: "03",
    code: `# Repository index shape
{
  "name": "My repository",
  "extensions": [
    {
      "name": "Example source",
      "pkg": "eu.kanade.tachiyomi.extension.all.example",
      "version": "1.4.2",
      "apk": "example-v1.4.2.apk"
    }
  ]
}`,
    subsections: [
      ["External repositories", "Open More, then Extensions, and tap the repositories entry. Add a URL ending in index.min.json, then refresh the extension list."],
      ["Installing extensions", "After a refresh, tap the download button beside an extension. Some devices also need third-party installation enabled in system settings."],
      ["Manual extensions", "An extension can also be installed from an .apk file. Only do this for files you trust: an extension runs with the full privileges of the app."],
      ["Local folders", "Point Watchtower at a local manga or anime folder to read or play files you already have, with no network source involved."],
      ["Third-party warning", "Watchtower does not vet third-party repositories. Anything you install there can read your data and should be treated as untrusted code."]
    ],
    facts: [
      "Repositories are plain JSON indexes served over HTTP or HTTPS.",
      "Local sources need no repository and work fully offline.",
      "Every extension runs inside the same sandboxed QuickJS runtime."
    ]
  },

  library: {
    title: "Your library is the centre of the app.",
    body: "The library collects everything you follow, tracks your progress and drives updates, downloads and tracking in one place.",
    marker: "04",
    code: `Library
├── Watching/
├── Plan to watch/
├── Completed/
└── On hold/`,
    subsections: [
      ["Adding entries", "Open a series and press Add to library. The entry inherits its source, cover and description, and starts tracking your progress."],
      ["Organising with categories", "Use categories to split the library by status or genre, then point global updates at a single category instead of everything."],
      ["Progress tracking", "Watched episodes and read chapters are stored locally and synced to a tracker when one is connected. Offline progress uploads when you reconnect."],
      ["Filters and badges", "The filter menu hides watched, unread or bookmarked entries, and display options add download badges to covers."],
      ["Multiple devices", "Watchtower has no built-in sync. Move your library between devices with a backup file instead."]
    ],
    facts: [
      "Completed entries are skipped by global update by default.",
      "Categories can be excluded from updates to reduce source load.",
      "Library data lives in the local database, not on a server."
    ]
  },

  browse: {
    title: "Find a series across every source you have.",
    body: "Browse is where you explore a source catalogue, search globally and jump between providers without leaving the app.",
    marker: "05",
    code: `Browse
├── Sources/
├── Extensions/
├── Migrate/
└── Search`,
    subsections: [
      ["Browsing a source", "Pick a source to see its Popular and Latest listings, plus any filters the source exposes such as genre or year."],
      ["Global search", "The search action queries every enabled source at once. Results are grouped by source so you can compare availability."],
      ["Trouble finding a title", "Many sources use romanised Japanese titles. Try alternate spellings or the native title before assuming a series is missing."],
      ["Source migration", "If a source dies or falls behind, migrate the entry to another source while keeping your progress and categories."],
      ["Language filters", "Extensions are tagged with a language so you can hide sources you cannot read."]
    ],
    facts: [
      "A source that exposes neither Popular nor Latest still works through search.",
      "Global search fans out to every enabled source at once.",
      "Migration rewrites the entry's source, not the files on disk."
    ]
  },

  extensions: {
    title: "Extensions are the engine of Watchtower.",
    body: "A source is a small JavaScript program that tells Watchtower how to list, search, read and play content from one website.",
    marker: "06",
    code: `// Minimal source shape
class Example extends Source {
  get popularManga() { return this.request("/popular") }
  get latestUpdates() { return this.request("/latest") }
  get searchManga() { return this.request("/search?q=" + query) }
  mangaDetails(manga) { return this.parseDetails(manga) }
  chapterList(manga) { return this.parseChapters(manga) }
  pageList(chapter) { return this.parsePages(chapter) }
}`,
    subsections: [
      ["What an extension is", "Each extension targets one website and returns the shared models Watchtower understands. The UI is generic, so a new site needs no new screens."],
      ["Repositories and updates", "Repositories distribute extensions and their versions. Refresh the list to see updates, then install them in place without losing data."],
      ["Item types", "An extension declares an item type such as manga, anime, music, novel or game. That type decides which library, reader or player is used."],
      ["Trust and safety", "Extensions are third-party code. Install only from repositories you trust, because an extension can reach the network and your device storage."],
      ["Writing one", "A working source needs the listing and search entry points only. Filters, preferences and the native UI schema are optional layers you can add later."]
    ],
    facts: [
      "Extensions run in QuickJS, isolated from the Flutter UI.",
      "One extension maps to one website, never a group of them.",
      "The manifest declares name, version, language and item type."
    ]
  },

  "extensions-catalogue": {
    title: "The catalogue is where you pick a source.",
    body: "The extensions screen lists everything installable, groups it by language and shows what is out of date.",
    marker: "06a",
    code: `Extensions
├── Installed    ready to browse
├── Available    in a repository, not installed yet
└── Updates      newer version than yours`,
    subsections: [
      ["Installed and available", "Installed extensions can be browsed immediately. Available ones appear after you add a repository and refresh, and install in a single tap."],
      ["Updating safely", "An update replaces the extension package in place and keeps its preferences, so a fix never costs you your settings."],
      ["Removing an extension", "Uninstalling removes the extension only. Library entries it supplied stay, but open as unavailable until a source provides them again."],
      ["Language grouping", "Extensions are tagged by language. Filters let you hide the ones you cannot read so the list stays short."],
      ["When nothing installs", "A blocked install is almost always the system installer, not the extension. Allow installation from unknown sources and try again."]
    ],
    facts: [
      "An update never clears source preferences.",
      "Removing an extension keeps the library entries it created.",
      "The list is grouped by language, not by repository."
    ]
  },

  "extensions-devkit": {
    title: "Write a source and run it before you ship it.",
    body: "The dev kit is the loop for building an extension: scaffold it, run it against the live site, and inspect what the parser actually returned.",
    marker: "06b",
    code: `# Scaffold, run, inspect
my-source/
├── index.js       entry points
├── manifest.json  name, version, language, item type
└── ui-layouts.json  optional home page schema

# Inspect a call without the app
watchtower --eval my-source --call popularManga --page 1`,
    subsections: [
      ["Scaffolding", "Start from a manifest and an entry file. The manifest declares identity and item type; the entry file implements the listing and search calls."],
      ["Running a call", "The CLI can invoke a single entry point and print the raw result, so you can debug a parser without rebuilding the app."],
      ["Parsing helpers", "Requests, an HTML parser and a JSON parser are injected into the sandbox. There is no file system, no database and no direct UI access."],
      ["Inspecting output", "Compare the returned model against what the source contract expects. A missing field is usually the parser, not the runtime."],
      ["Iterating", "Reload the extension after each change. The app keeps a hot path for development builds so you do not reinstall between edits."]
    ],
    facts: [
      "The CLI can call one entry point and print its result.",
      "The sandbox exposes HTTP and parsers, nothing more.",
      "A manifest declares item type, which picks the reader or player."
    ]
  },

  "extensions-publishing": {
    title: "Ship a source through a repository.",
    body: "Publishing means putting a signed extension package in a repository index that users can add to the app.",
    marker: "06c",
    code: `# Repository index (index.min.json)
{
  "name": "My repository",
  "extensions": [
    { "name": "Example", "pkg": "eu.kanade.example",
      "version": "1.4.2", "apk": "example-v1.4.2.apk" }
  ]
}`,
    subsections: [
      ["Packaging", "Build the extension into a package, bump its version and keep the package name stable so updates land as updates rather than duplicates."],
      ["The index", "A repository is a JSON index listing each package, its version and its file. Host it over HTTPS so the app can fetch it."],
      ["Versioning", "The version in the index is what the app compares. Bump it on every release or users will never see the update."],
      ["Trust and signing", "Users are warned that third-party repositories run with the app's privileges. Sign your packages and publish from a place you control."],
      ["Maintenance", "A source breaks when its website changes. Expect to republish, and keep an eye on issue reports so you hear about breakage early."]
    ],
    facts: [
      "The index file must end in index.min.json for the app to accept it.",
      "A stable package name is what makes an update an update.",
      "A source breaks whenever the site it targets changes."
    ]
  },

  "local-source": {
    title: "Read and play files that never touch the network.",
    body: "A local source turns a folder on your device into a normal source, so your own files behave exactly like an online catalogue.",
    marker: "07",
    code: `local/
└── Series title/
    ├── cover.jpg
    ├── Chapter 01.cbz
    └── Chapter 02.cbz

localanime/
└── Anime title/
    ├── Episode 01.mp4
    └── Episode 02.mp4`,
    subsections: [
      ["Local manga", "Place one folder per series under the local manga directory. Chapters are either CBZ archives or image folders, and covers are read from a cover file."],
      ["Local anime", "Place one folder per series under the local anime directory and put episode video files inside. Episode order follows the filename."],
      ["Metadata", "A details.json beside the series folder can supply author, artist, description and genres when the folder name alone is not enough."],
      ["Refreshing the index", "After moving files from outside the app, invalidate the downloads index or re-add the source so Watchtower rescans the folder."],
      ["Offline by design", "Local sources never request the network, so they work in flight mode and never trip anti-bot protection."]
    ],
    facts: [
      "CBZ archives and plain image folders are both supported.",
      "Filenames determine chapter and episode numbering.",
      "A .nomedia file keeps local media out of the system gallery."
    ]
  },

  "video-player": {
    title: "Playback that adapts to the media you open.",
    body: "The video player exposes quality, audio track, subtitle and speed controls through sheets and panels that sit above the video surface.",
    marker: "08",
    code: `Player
├── Sheets/    Quality · Audio · Subtitles · Speed
└── Panels/    Episodes · Notes · Stats`,
    subsections: [
      ["The player surface", "Tap to reveal controls, double tap to seek, and long press to change speed. Pinch to zoom when the aspect ratio allows it."],
      ["Sheets", "Quality, audio and subtitle choices open as bottom sheets so the video keeps playing behind them."],
      ["Panels", "Side panels expose the episode list, playback statistics and any source-provided extras without leaving playback."],
      ["Subtitles", "Subtitle tracks come from the source or from an external file. Styling, delay and font size are handled in Subtitle settings."],
      ["External players", "An episode can be handed to an external player such as mpv or VLC when the internal decoder cannot handle a codec."]
    ],
    facts: [
      "The internal player is backed by a hardware-accelerated decoder.",
      "Gestures control brightness, volume and seeking.",
      "Watching progress is written continuously, not only on exit."
    ]
  },

  "player-settings": {
    title: "Tune decoding, gestures and controls.",
    body: "Player settings decide how video is decoded, how gestures behave and which buttons appear on the player surface.",
    marker: "09",
    code: `Player settings
├── Decoder/          hardware · software · auto
├── Gestures/         brightness · volume · seek
├── Subtitles/        font · size · delay
├── Custom buttons/
└── Advanced/         buffer · aspect ratio · PiP`,
    subsections: [
      ["Decoder", "Hardware decoding is faster and lighter, but a few codecs need software decoding. Auto picks the safer option per stream."],
      ["Gestures", "Assign vertical swipes to brightness and volume and horizontal swipes to seeking. Each axis can be inverted."],
      ["Custom buttons", "Add buttons to the overlay for actions you use often, such as skip intro, screenshot or rotate."],
      ["Advanced playback", "Buffer size, aspect ratio override and picture-in-picture live under the advanced section and rarely need changing."],
      ["Per-series overrides", "Most settings can be overridden for a single series without touching the global defaults."]
    ],
    facts: [
      "Hardware decoding is the default and suits most devices.",
      "Gesture axes can be swapped or disabled individually.",
      "Custom buttons are stored as part of your settings backup."
    ]
  },

  subtitles: {
    title: "Make subtitles readable on any screen.",
    body: "Subtitle settings control track selection, timing, and the styling applied when the player renders a track itself.",
    marker: "10",
    code: `# External subtitle lookup order
1. track bundled with the stream
2. file next to the episode on disk
3. subtitle downloaded by the source
4. manual file you pick yourself`,
    subsections: [
      ["Selecting a track", "When a stream carries multiple subtitle tracks they appear in the subtitle sheet. The choice is remembered per series."],
      ["Timing and offset", "Nudge subtitles forward or backward in small steps when a track is out of sync with the audio."],
      ["Styling", "Font, size, colour, outline and background are applied to text-based subtitle formats rendered by the player."],
      ["External files", "Drop a matching subtitle file beside a local episode and the player loads it automatically."],
      ["Bitmap subtitles", "Image-based subtitles carry their own styling and cannot be restyled; only their position and size respond to settings."]
    ],
    facts: [
      "Text subtitles can be restyled, bitmap subtitles cannot.",
      "Per-series subtitle choices override the global default.",
      "Subtitle delay is stored so it survives app restarts."
    ]
  },

  reader: {
    title: "A reader built for long sessions.",
    body: "The reader handles paged, vertical and long-strip content with tap zones, zoom and continuous progress tracking.",
    marker: "11",
    code: `Reader
├── Paged/     rtl · ltr · vertical
└── Long strip/  tight · with gaps`,
    subsections: [
      ["Choosing a mode", "Set a global default and override it per series. Long strip suits webtoons, paged suits print manga."],
      ["Navigation", "Tap zones move a page forward or back, swipe scrolls, and pinch zooms. Tap the centre to open the reader menu."],
      ["Progress", "The last read page is stored per chapter, so returning to a series resumes where you stopped."],
      ["Wide pages", "Wide spreads can be split, rotated or zoomed automatically to avoid tiny pages on a phone."],
      ["Downloads", "Downloaded chapters open instantly and are marked in the chapter list so you can read offline."]
    ],
    facts: [
      "Long strip ignores page width, which suits vertical webtoons.",
      "The reader keeps the last page per chapter, not per series.",
      "Pinch zoom is disabled in long strip unless you enable it."
    ]
  },

  "reader-settings": {
    title: "Control how pages are displayed and turned.",
    body: "Reader settings cover reading direction, page scaling, cropping and the tap zones used for navigation.",
    marker: "12",
    code: `Reader settings
├── Reading/      mode · transitions · skip rules
├── Display/      rotation · background · fullscreen
├── Pages/        scale · crop · zoom · split
└── Long strip/   padding · tap zones`,
    subsections: [
      ["Reading", "Set the default mode, whether transitions animate, and which chapters are skipped when they are read, filtered or duplicated."],
      ["Display", "Rotation, background colour, fullscreen and page number visibility all live in the display group."],
      ["Pages", "Scale type, border cropping and zoom start position decide how a single page fills the screen."],
      ["Tap zones", "Choose a tap-zone layout and invert it horizontally, vertically or both for left-handed reading."],
      ["Long strip", "Side padding and separate tap zones let webtoons read well on wide screens."]
    ],
    facts: [
      "Scale type can be fit screen, fit width, fit height or original size.",
      "Crop borders trims scan margins automatically.",
      "Skip rules can be overridden per series."
    ]
  },

  updates: {
    title: "Keep your library current without hammering sources.",
    body: "Updates check your sources for new chapters and episodes, respecting rules that avoid unnecessary load and anti-bot responses.",
    marker: "13",
    code: `# Update targets
Library → Global update
├── Categories     limit to "Watching"
├── Frequency      how often to check
└── Notifications  new chapter / episode alerts

# Manual
Series → Overflow → Refresh`,
    subsections: [
      ["Global update", "Runs across the library on a schedule. Restrict it to a single category so infrequent series are not checked daily."],
      ["Smart skipping", "Entries that are completed, not started, or not expected to have new releases are skipped to reduce requests."],
      ["Notifications", "New chapters and episodes raise a notification that can be filtered by category and by skip reason."],
      ["Manual refresh", "A single series can be refreshed from its overflow menu at any time without touching the rest of the library."],
      ["Why skipping matters", "Heavy update traffic can trigger anti-bot measures on a source, making it unusable for everyone."]
    ],
    facts: [
      "Updates can be limited to one or more categories.",
      "Completed entries are excluded by default.",
      "Battery optimisation can block background updates on some Android skins."
    ]
  },

  downloads: {
    title: "Take your library offline on purpose.",
    body: "Downloads queue episodes and chapters for offline use, with a single queue, clear limits and a predictable storage layout.",
    marker: "14",
    code: `downloads/
└── Source name (LANG)/
    └── Series title/
        ├── Chapter 01.cbz
        └── Episode 01.mp4`,
    subsections: [
      ["Queueing", "Add chapters or episodes from a series and manage them in the download queue. Reorder by dragging, cancel with the overflow action."],
      ["Parallelism", "One source is downloaded at a time to avoid IP bans, while several different sources can run in parallel."],
      ["Downloads only", "Enable download only mode to hide streamed content and rely entirely on what is stored on the device."],
      ["Storage layout", "Downloads live under a source-named folder, then a series folder. Renaming either folder breaks detection."],
      ["Troubleshooting", "If downloads vanish, check that the storage location is still reachable and invalidate the downloads index."]
    ],
    facts: [
      "A single source is never downloaded in parallel with itself.",
      "Downloads are not included in a backup file.",
      "Internal storage performs better than external SD cards."
    ]
  },

  categories: {
    title: "Turn a long library into a few clear shelves.",
    body: "Categories group entries by status, genre or mood, and double as the selector for which part of the library updates and downloads.",
    marker: "15",
    code: `Watching        → global update every day
Plan to watch   → never updated
On hold         → excluded from global update
Completed       → skipped by default`,
    subsections: [
      ["Creating categories", "Name and order categories however you like. An entry can belong to several at once."],
      ["Assigning entries", "Long press a series, choose Set categories, and tick every category that applies."],
      ["Driving updates", "Point global update and auto-download at specific categories so only active series generate traffic."],
      ["Removing entries", "Deselect a category in the same dialog to remove an entry from it without deleting the series."],
      ["Naming advice", "Name categories by state rather than by source, so migrating a series between sources never changes its shelf."]
    ],
    facts: [
      "An entry can live in multiple categories.",
      "Global update can target a single category.",
      "Auto-download can be limited to chosen categories."
    ]
  },

  tracking: {
    title: "Send your progress to the services you already use.",
    body: "Tracking connects the library to online services so watched episodes and read chapters are recorded without manual entry.",
    marker: "16",
    code: `MyAnimeList   AniList     Kitsu
MangaUpdates  Shikimori   Bangumi`,
    subsections: [
      ["Supported services", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori and Bangumi can all be connected from tracking settings."],
      ["Logging in", "Open tracking settings and tap a service to start its login flow. Kitsu expects your email address as the username."],
      ["Per-series setup", "Open a series, tap Tracking and add the service. The search query can be edited when the automatic match is wrong."],
      ["One-way by design", "Progress flows from Watchtower to the tracker. Changes made on the website are not pulled back into the app."],
      ["Offline progress", "Progress recorded offline is queued and uploaded the next time the device is online."]
    ],
    facts: [
      "Tracking is enabled per series, not globally.",
      "A watch percentage can decide when an episode counts as seen.",
      "Start dates are set automatically when tracking begins."
    ]
  },

  backups: {
    title: "Protect the library before something goes wrong.",
    body: "A backup captures your library, progress, categories, tracking links and settings in a single portable file.",
    marker: "17",
    code: `# Create a backup
Data and storage → Create backup → choose a location

# What is included
titles, categories, read/watched state, tracking links,
history, series metadata, extensions, settings

# What is not included
downloads, custom covers, history of non-library titles`,
    subsections: [
      ["Creating a backup", "Open data and storage settings and choose Create backup. Pick a location you can reach from another device."],
      ["What is included", "Titles, categories, progress, tracking links, history, series metadata, extension list and settings are all stored in the file."],
      ["What is excluded", "Downloaded files, custom covers and the history of series that are not in the library are not part of a backup."],
      ["Restoring", "Log in to your trackers and install the extensions you used before importing, so the restore can relink everything cleanly."],
      ["Automatic backups", "Set a backup frequency so a recent file always exists. This is strongly recommended on preview builds."]
    ],
    facts: [
      "Backups move the library between devices since there is no sync.",
      "Downloads must be transferred separately.",
      "Auto backups are the safest defence against a bad update."
    ]
  },

  storage: {
    title: "Know exactly where Watchtower writes.",
    body: "Storage holds backups, downloads and local sources. Choosing the location deliberately avoids lost downloads and permission errors.",
    marker: "18",
    code: `[storage location]/
├── autobackup/
├── downloads/    Source (LANG)/Series/
├── local/        manga you own
├── localanime/   anime you own
└── mpv-config/   fonts · scripts`,
    subsections: [
      ["Folder layout", "Backups, downloads, local manga, local anime and player configuration each get their own folder inside the storage location."],
      ["Choosing a location", "Pick a folder you can still reach later. Avoid the root of a volume and avoid moving files outside the app afterwards."],
      ["Scoped storage", "Modern Android restricts apps to their own directories. Grant access to the storage folder so downloads and local sources work."],
      ["Rechecking files", "After moving files from outside the app, invalidate the downloads index so Watchtower rescans the folders."],
      ["Gallery visibility", "A .nomedia file in the downloads folder keeps covers and episodes out of the system gallery."]
    ],
    facts: [
      "Backup file names are prefixed per app to avoid collisions.",
      "Internal storage is faster and more reliable than SD cards.",
      "Downloads and local sources must not share a folder."
    ]
  },

  settings: {
    title: "The settings that matter, and what they change.",
    body: "Beyond per-feature options, Watchtower has app-wide settings for updates, installation, security and diagnostics.",
    marker: "19",
    code: `Settings
├── General/      theme · language · library
├── Security/     secure screen · incognito
├── Advanced/     DNS over HTTPS · installer · logs
└── Diagnostics/  crash logs · logcat · reindex`,
    subsections: [
      ["General", "Theme, interface language and default library behaviour are set once here and apply everywhere."],
      ["Security and privacy", "Secure screen blocks screenshots, and incognito mode pauses history recording."],
      ["DNS over HTTPS", "Encrypted DNS resolution can bypass basic blocking and is configured in advanced settings."],
      ["Installers", "The legacy installer is a fallback for restrictive systems, while Shizuku enables elevated installation on modern Android."],
      ["Diagnostics", "Dump crash logs, capture a logcat trace and rebuild indexes when something behaves unexpectedly."]
    ],
    facts: [
      "Secure screen must be off before screenshots work.",
      "Incognito mode stops history, not progress.",
      "Crash logs are written locally and never uploaded automatically."
    ]
  },

  "extension-runtime": {
    title: "QuickJS executes sources, Flutter renders them.",
    body: "The extension runtime evaluates JavaScript, exposes a small host API and converts source output into the models the UI already understands.",
    marker: "20",
    code: `lib/eval/         QuickJS bridge and host API
lib/extension/    catalogue, install and lifecycle
lib/models/       shared manga, video, track, page models
lib/remote/       embedded HTTP server

// Host API surface
request(url, headers)  parseHtml(html)  parseJson(text)
getPreference(key)     setPreference(k, v)  toast(msg)`,
    subsections: [
      ["Runtime responsibilities", "The runtime loads an extension, injects the host API and calls the entry points the manifest declares, all off the UI thread."],
      ["Host API", "Extensions get HTTP requests, HTML and JSON parsers, preference storage and simple UI helpers, and nothing else."],
      ["Model conversion", "Source output is normalised into shared models so a new website never requires a new screen."],
      ["Lifecycle", "Extensions are installed, updated and removed as packages, with their preferences preserved across updates."],
      ["Isolation", "An extension cannot touch Flutter state directly. Everything crosses the bridge as plain data."]
    ],
    facts: [
      "QuickJS keeps the runtime small and embeddable on every platform.",
      "The same runtime is used by the app and the headless CLI.",
      "Extensions never receive raw database or file access."
    ]
  },

  "extension-contract": {
    title: "The methods a source must implement.",
    body: "A source contract defines the entry points Watchtower calls, from listing and searching to details, chapters, pages and video streams.",
    marker: "21",
    code: `// Listing and search
popularManga(page)      latestUpdates(page)      searchManga(query, filters)
// Details and content
mangaDetails(manga)     chapterList(manga)       pageList(chapter)
// Video
videoList(episode)      videoUrl(video)
// Optional
filters                 preferences              imageRequest(url)`,
    subsections: [
      ["Listing and search", "Popular, latest and search entry points return paginated lists of the shared manga or media model."],
      ["Details and chapters", "A details call fills metadata, and a chapter or episode call returns the ordered list a user can open."],
      ["Pages and video", "Manga returns page image URLs, while video returns streams with quality, headers and subtitle information."],
      ["Optional capabilities", "Filters, source preferences and custom image requests are optional and only used when an extension declares them."],
      ["Item type", "The declared item type selects the library, reader or player the content opens in, so one contract serves several media."]
    ],
    facts: [
      "Only listing and search are required for a browsable source.",
      "Filters and preferences are optional capabilities.",
      "Item type is persisted so history and library know how to open it."
    ]
  },

  "ui-schema": {
    title: "Describe native UI from a source.",
    body: "The native UI schema lets an extension describe cards, lists and layouts declaratively, so rich source home pages need no Flutter code.",
    marker: "22",
    code: `{
  "type": "list",
  "items": [
    { "type": "card", "title": "Trending", "image": "$cover", "onTap": "open" },
    { "type": "row", "items": ["$items"] }
  ]
}`,
    subsections: [
      ["Why a schema", "Declarative UI keeps source-specific layout out of the Flutter codebase while still rendering with native widgets."],
      ["Components", "Lists, rows, cards, banners and text blocks are the building blocks a source can emit."],
      ["Data binding", "Schema nodes bind to values returned by the source, so a change in data does not require a change in layout."],
      ["Layouts", "A ui-layouts.json file can describe whole source home pages, mixing schema blocks and content sections."],
      ["Fallback", "When a source provides no schema, Watchtower renders its own default layout from the standard models."]
    ],
    facts: [
      "The schema is data, not code, so it can be validated.",
      "Unknown node types are ignored rather than fatal.",
      "Default layouts apply when no schema is supplied."
    ]
  },

  api: {
    title: "An HTTP server inside the app.",
    body: "The installed app exposes an embedded HTTP server that mirrors the headless runtime, so scripts and tools can drive the same engine.",
    marker: "23",
    code: `# Start the embedded server
Settings → Advanced → Enable server
# Default endpoint
http://localhost:4567

# Example calls
GET /sources            list installed sources
GET /library            library entries
POST /search            query a source
GET /stream?episode=... resolve a video stream`,
    subsections: [
      ["What the server is", "A Dart and shelf based HTTP server embedded in the app. It shares the extension runtime and models with the UI."],
      ["Enabling it", "The server is off by default. Turn it on in advanced settings and note the port it binds to."],
      ["Endpoints", "Sources, library, search and stream endpoints expose the same operations the UI performs."],
      ["Use cases", "Automation, external players, remote control and CI checks can all talk to the app over HTTP."],
      ["Security", "The server is meant for local or trusted networks. Do not expose it to the open internet."]
    ],
    facts: [
      "The default port is 4567.",
      "The headless CLI reuses the same server layer.",
      "The server is disabled until you enable it."
    ]
  },

  cli: {
    title: "Run Watchtower without a screen.",
    body: "The headless CLI runs the same engine as the app so servers, SSH sessions and CI jobs can fetch, search and stream without a GUI.",
    marker: "24",
    code: `watchtower --list-sources
watchtower --search "query" --source example
watchtower --serve --port 4567
watchtower --update-library --category watching
watchtower --download --series "Title" --latest 5`,
    subsections: [
      ["What it is", "A Linux binary built from the same Flutter and QuickJS engine as the app, with a command-line front end."],
      ["Common commands", "List sources, search, update the library, queue downloads and start the HTTP server directly from the terminal."],
      ["Server mode", "Serve mode exposes the embedded HTTP API, which is how remote clients talk to a headless host."],
      ["CI and automation", "Because it is a single binary, the CLI drops into containers and scheduled jobs without an Android device."],
      ["Parity with the app", "The CLI intentionally follows the app's behaviour, so a source that works on mobile works headless."]
    ],
    facts: [
      "The CLI is published for Linux on every release.",
      "It uses the same source contracts as the app.",
      "Server mode is the bridge between the CLI and remote clients."
    ]
  },

  deployment: {
    title: "Build once, ship everywhere.",
    body: "Watchtower is built by CI into an Android app, a desktop bundle and a headless Linux binary from the same source tree.",
    marker: "25",
    code: `# Local builds
flutter build apk --release
flutter build linux --release
dart run build_runner build

# CI workflows
build-release.yml    APK
build-server.yml     headless Linux CLI
build-profile.yml    profile APK
build-debug.yml      debug APK`,
    subsections: [
      ["Build targets", "Android APKs, desktop bundles and the headless CLI are all produced from one repository and one pubspec."],
      ["Continuous integration", "Separate workflows build release, profile and debug APKs plus the headless server binary on each change."],
      ["Native components", "Rust handles EPUB, image and TLS bindings while Go provides torrent and HTTP streaming, all wired in at build time."],
      ["Versioning", "The app version is injected at build time and shown in the interface, so a build is always traceable to a commit."],
      ["Release checklist", "Bump the version, run the full build matrix, verify the CLI, then tag the release that CI will publish."]
    ],
    facts: [
      "Four CI workflows cover app and CLI builds.",
      "Rust and Go components are compiled into the binaries.",
      "Every tagged release publishes the CLI for Linux."
    ]
  },

  troubleshooting: {
    title: "Diagnose a failure instead of guessing.",
    body: "Most problems are one of a handful of causes: a dead source, an anti-bot wall, a storage permission or a broken extension. Work through them in order.",
    marker: "26",
    code: `# Narrow the fault before touching settings
browser  → does the source load at all?
second   → does another source work now?
logs     → Settings → Advanced → Dump crash logs`,
    subsections: [
      ["Primary diagnosis", "Decide whether the failure is source-side, device-side or account-side. One working source points at the source, not the app."],
      ["Reading an error", "HTTP 403 and 429 usually mean anti-bot, 404 means a changed URL, and timeouts mean network or source load."],
      ["WebView and cookies", "Some sources need a WebView pass to clear a challenge. Clearing cookies and WebView data resets a stuck login."],
      ["Cloudflare and anti-bot", "Changing the user agent, clearing WebView data and waiting out a challenge resolve most anti-bot loops."],
      ["Installation problems", "Signature mismatches, corrupted APKs and architecture mismatches each produce a distinct installer error."]
    ],
    facts: [
      "One failing source is usually the source, not the app.",
      "403 and 429 almost always mean anti-bot protection.",
      "Crash logs are the fastest way to a specific error."
    ]
  },

  faq: {
    title: "Short answers to the questions that come up most.",
    body: "Why the app is not on a store, whether there is an iOS build, how updates behave and how to read logs.",
    marker: "27",
    code: `Q: Is Watchtower on Google Play?
A: No. APK-based extensions conflict with store policy.

Q: Is there an iOS build?
A: The codebase is cross-platform, but shipping iOS
   is constrained by platform rules and is not promised.

Q: Can Watchtower read light novels?
A: Text-based novels are supported as their own item type.`,
    subsections: [
      ["Store availability", "Watchtower is distributed outside app stores because installable extensions conflict with store content policies."],
      ["iOS and desktop", "The Flutter codebase targets many platforms, but each platform has its own packaging and policy constraints."],
      ["Updates and previews", "A preview channel tracks main and shows upcoming work. It is more prone to bugs, so keep auto backups on."],
      ["Library behaviour", "Global update skips completed and unstarted entries by design, and large bulk updates are warned about."],
      ["Logs and reports", "Crash logs and logcat traces are the two artefacts to attach when reporting a problem."]
    ],
    facts: [
      "Watchtower is not distributed through app stores.",
      "Preview builds are for testing, not daily use.",
      "A backup makes any upgrade reversible."
    ]
  },

  contribute: {
    title: "Help improve the app, the sources or the docs.",
    body: "Contributions are welcome across the Flutter app, the extension runtime, native components, the CLI and this documentation.",
    marker: "28",
    code: `# Get the source
git clone https://github.com/ferelking242/watchtower
cd watchtower
flutter pub get

# Run checks before opening a pull request
flutter analyze
flutter test

# Docs live in a separate repository
git clone https://github.com/ferelking242/watchtower-website`,
    subsections: [
      ["Ways to help", "Fix bugs, add sources, improve the runtime, write docs or translate this site into another language."],
      ["Development setup", "Clone the repository, install the Flutter, Rust and Go toolchains, then run flutter pub get and the analyzer."],
      ["Pull requests", "Keep changes focused, explain the motivation, and run analyze and the test suite before opening a pull request."],
      ["Translations", "The interface and this website both ship many languages. Adding one means adding a locale file, not touching the layout."],
      ["Community", "Join the Discord server or open an issue to discuss an idea before investing in a large change."]
    ],
    facts: [
      "The docs are a separate repository from the app.",
      "Translations are additive and never change layout.",
      "Running the analyzer before a pull request saves review time."
    ]
  }
};

export default en;
