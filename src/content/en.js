// Authoritative English documentation. Other locales overlay their prose on
// top of this base and inherit `code`, `marker` and `facts` unchanged, because
// code and short facts are language-independent.
//
// Voice: written for the person using Watchtower, not the person building it.
// The Development group at the end addresses extension authors and self-hosters,
// and is the only place that talks about internals.
const en = {
  "getting-started": {
    title: "Watchtower in ten minutes.",
    body: "Watchtower is one app for anime, series, manga, novels and music. It ships empty on purpose: you choose the sources, and everything you watch or read stays on your device.",
    marker: "01",
    code: `# The first run, in order
1. Install the app        Android APK, or a desktop build
2. Add a source repository   More → Extensions → Repositories
   Paste a source index URL, for example index/watch.json
3. Install the extensions you want, then refresh
4. Browse a source and tap "Add to library"
5. Play or read

# Watchtower never bundles content. No source means an empty library.`,
    subsections: [
      ["What you need", "An Android 8.0 or newer phone or tablet for the full app. Any Linux, macOS or Windows machine can run the headless command line instead, with no graphical session. One thing is not optional: a source repository URL, because Watchtower contains no content of its own."],
      ["Add your first source", "Open More, then Extensions, then Repositories. Paste a supported JSON index URL, such as the watch index in a repository, and confirm. The official extensions project publishes separate indexes for watch, manga, novels, music, games and other source types."],
      ["Install extensions", "Each extension teaches Watchtower one website. Tap install beside the ones you want, allow installation from unknown sources if Android asks, and the sources appear in Browse."],
      ["Build your library", "Open a source, find a series and tap Add to library. From then on Watchtower tracks your progress, checks for new chapters and keeps the entry in one place."],
      ["Pick your media types", "Watchtower handles manga, anime, novels and music side by side. Each type opens in its own reader or player, chosen automatically from what the extension declares."],
      ["Common first-run surprises", "An empty Browse screen means no extension is installed yet, not a broken app. A repository that will not load is usually a stale URL or a captive network portal."],
      ["If the first screen looks empty", "An empty Browse list means no extension is installed yet, not a broken app. If a repository will not load, check that the URL points to the correct source index and that it returns valid JSON, then try another network before assuming it is gone."],
      ["Choose the matching index", "Watchtower reads JSON arrays of source records. Use the index for the content type you want, for example index/watch.json or index/manga.json; index.min.json is not a required filename."],
    ],
    facts: [
      "Watchtower ships with no content. Sources are yours to choose.",
      "Extensions are ordinary JavaScript run in a sandbox.",
      "Your library lives on your device, not on a Watchtower server.",
      "Android 8.0+ is the floor for the mobile app.",
      "An empty Browse list means no extension is installed, not a failure.",
    ]
  },

  installation: {
    title: "Install the build that matches your device.",
    body: "There are three ways to run Watchtower: the Android app, a desktop build, or a Linux command line for servers. They share one engine, so a source that works in one works in all of them.",
    marker: "02",
    code: `# Android: install the APK
adb install watchtower-release.apk
# Or open the .apk file on the device and allow unknown sources

# Desktop: build from source
flutter pub get
flutter build windows    # or linux, or macos

# Linux server, no screen needed
7z x watchtower-linux-x64-headless.7z -o./watchtower-linux
sudo ./watchtower-linux/install-linux-headless.sh ./watchtower-linux`,
    subsections: [
      ["Android", "The main target, and the only build that gets every feature first. Download the release APK, or a preview APK if you want to test upcoming work. Enable installation from unknown sources when Android asks, because Watchtower is not distributed through a store."],
      ["Desktop", "Windows, Linux and macOS builds exist for watching on a bigger screen. Build them from source with Flutter, since release artifacts are published for Android and the Linux CLI first."],
      ["Linux command line", "A single binary with no window. It runs the same extension engine, so it can fetch, search and download on a server or over SSH. The installer script copies it and its runtime files into a prefix you choose."],
      ["Stable or preview", "Preview builds track the newest code and break more often. Keep automatic backups on if you run one, and expect to reinstall the release build if something goes wrong."],
      ["Building from source", "You need Flutter 3.38 or newer, Dart 3.10 or newer, and a Rust toolchain. Go 1.21 or newer is only needed if you want to rebuild the torrent server yourself."],
      ["Keep it updated", "Watchtower tells you when a new version exists, and you install it the same way as the first time. Your library and settings carry over untouched."],
      ["If the install fails", "The common installer messages are each explained on the errors page. A signature mismatch means a differently signed copy is already installed and has to be removed first, a corrupted download needs fetching again, and a mismatch of processor architecture means the wrong build was downloaded."]
    ],
    facts: [
      "Android is the only platform with published release builds.",
      "The headless binary is built for Linux x86_64.",
      "Rust is required to build from source; Go is optional.",
      "Preview and stable installs share the same data, so switching keeps your library.",
      "Remove a conflicting install before replacing it with a differently signed build."
    ]
  },

  "adding-sources": {
    title: "Where your content comes from.",
    body: "Watchtower has two kinds of source. Online sources arrive as extensions from a repository you add. Offline sources are folders on your own device. Most people use both.",
    marker: "03",
    code: `# A source index is a JSON array, for example index/watch.json
[
  {
    "name": "Example source",
    "id": 2000001170,
    "lang": "en",
    "baseUrl": "https://example.org",
    "iconUrl": "https://example.org/favicon.ico",
    "typeSource": "single",
    "itemType": 1,
    "version": "1.0.0",
    "sourceCodeUrl": "https://cdn.jsdelivr.net/gh/owner/repo@main/src/watch/en/example.js",
    "sourceCodeLanguage": 1,
    "isNsfw": false,
    "login": false,
    "forYou": false,
    "requiresAccount": false,
    "hasDRM": false
  }
]`,
    subsections: [
      ["Add a repository", "Go to More, then Extensions, then Repositories, and paste the repository URL. The app fetches the index and lists every extension it contains. You can add several repositories at once."],
      ["Install what you need", "Refresh the list, then tap install next to an extension. Android may ask for permission to install unknown apps the first time. Installed extensions show up immediately in Browse."],
      ["Keep sources fresh", "Refresh a repository whenever you want newer extension versions. An update replaces the extension in place and keeps its settings, so there is nothing to reconfigure."],
      ["Use your own files", "Point Watchtower at a folder of manga or anime you already own and it becomes a normal source. No repository, no network, no account."],
      ["Only trust what you know", "A repository can serve anything, and an extension runs with the same access as the app. Treat an unknown repository the way you would treat an unknown installer."],
      ["When a repository fails", "A URL that will not load is usually expired, blocked, or pointing to a file that is not a JSON array of source records. Open the exact index URL in a browser and check that it returns JSON."],
      ["Index file names", "There is no required .min.json suffix. Official repositories publish separate files such as index/watch.json and index/manga.json, and a custom repository may use another name if its URL serves the supported JSON format."],
      ["Match the content type", "The official extensions project publishes separate indexes for watch, manga, novels, music, games, plugins and subtitles. Choose the index that matches the sources you want to install."],
    ],
    facts: [
      "A repository is only a JSON file hosted on a web server.",
      "Updates keep your source preferences.",
      "Local folders work with no network at all.",
      "Watchtower does not check or approve third-party repositories.",
      "A repository that will not load is usually a wrong or expired address.",
    ]
  },

  library: {
    title: "Everything you follow, in one place.",
    body: "The library is the home of everything you keep. It remembers where you stopped, groups series into shelves, and is the starting point for updates and downloads.",
    marker: "04",
    code: `Library
├── Watching        new episodes and chapters land here
├── Plan to watch   queued, never updated in the background
├── Completed       skipped by updates by default
└── On hold         kept, but out of the way`,
    subsections: [
      ["Adding and removing", "Open any series and tap Add to library. Remove it from the same place, and the series stops being updated without losing your reading history."],
      ["Categories", "Categories are the shelves of your library. A series can sit on several at once, which is how you separate what you follow weekly from what you might get to someday."],
      ["Progress", "Watchtower remembers the exact episode or chapter you reached, per entry, and uploads that progress to a tracker when you have one connected."],
      ["Filters and sorting", "Hide what you have finished, show only what is downloaded, or sort by when a series last released. Filters are display-only and never delete anything."],
      ["Several devices", "There is no built-in sync between devices. Move your library with a backup file, and keep downloads separate, since they are not part of a backup."],
      ["When an entry breaks", "If a series opens empty or loses its cover, its source changed underneath it. Refresh the entry, and migrate it to another source if the problem persists."],
      ["When an entry will not update or open", "If a series will not open, its source changed underneath it. Refresh the entry first, and migrate it to another source if the problem persists. A refresh that returns nothing means the extension is out of date rather than the app."],
    ],
    facts: [
      "Completed series are left alone by background updates.",
      "A series can belong to more than one category.",
      "Progress is tracked per chapter or episode, not per series.",
      "Removing a series from the library does not delete your history.",
      "Refreshing fixes most broken entries; migration fixes the rest.",
    ]
  },

  browse: {
    title: "Finding something to watch or read.",
    body: "Browse is where you explore what a source offers and search across all of them at once. It is the fastest way to answer the question of who has this title.",
    marker: "05",
    code: `Browse
├── Sources      open one site and look around
├── Search       query every enabled source at once
├── Migrate      move a library entry to another source
└── Extensions   install and manage sources`,
    subsections: [
      ["Browsing a source", "Open a source to see its Popular and Latest listings. Most sources also expose filters for genre, year or status, which appear at the top of the listing."],
      ["Searching everywhere", "The search action queries every enabled source in parallel and groups the results by source, so you can see at a glance who has the title and who does not."],
      ["When a title will not show up", "Sources often index the original language title rather than the English one. Try the native name, a romanised spelling, or a shorter fragment of it."],
      ["Moving between sources", "If a source slows down or stops working, migrate the entry instead of re-adding it. Watchtower matches the series on the new source and carries your progress and categories across."],
      ["Filtering by language", "Extensions are tagged with the language they serve. Hide the ones you cannot read so search results and listings stay relevant."],
      ["Why results differ", "Each source indexes its own catalogue, so a title may be complete on one and partial on another. Comparing two sources before committing is normal."],
      ["When search returns nothing", "An empty search is usually a title mismatch rather than a broken source. Try the original-language name, a romanised spelling, or a shorter fragment, and remember that one source failing to answer does not stop the others."],
    ],
    facts: [
      "Search fans out to every enabled source at once.",
      "Sources without a popular list still work through search.",
      "Migration moves your progress, not your downloaded files.",
      "Extension language tags drive the language filter.",
      "An empty search is usually a title mismatch, not a dead source.",
    ]
  },

  extensions: {
    title: "Extensions are how Watchtower reaches the web.",
    body: "An extension is a small program that teaches Watchtower one website: how to list it, search it, read it and play it. Everything you browse comes through an extension.",
    marker: "06",
    code: `One extension  →  one website

Installed    ready to browse
Available    in a repository you added, not installed yet
Updates      a newer version exists

A repository  →  a list of extensions, hosted as one JSON file`,
    subsections: [
      ["What an extension is", "It is JavaScript, not a plugin you compile. It knows how to ask one website for its listings, its search results, its chapters and its video streams, and it answers in the shape Watchtower understands."],
      ["How they reach you", "Extensions are grouped into repositories. You add a repository once, and every extension it holds becomes installable from the extensions screen."],
      ["Types of content", "An extension declares what it serves: manga, anime, novel, music or game. That declaration decides which reader or player opens when you tap a result."],
      ["Updates and removal", "Extensions update in place and keep their settings. Uninstalling one removes the extension only; your library entries survive and simply wait for a source to serve them again."],
      ["Why you should care who made it", "An extension runs inside Watchtower but can reach the network and read what you give it. Install from repositories you trust, and be cautious with anything unfamiliar."],
      ["When an extension stops working", "Websites change, and a source breaks with them. That is usually a broken extension, not a broken app, and the fix arrives as an update."],
      ["When an install or update fails", "A failed install is nearly always Android blocking unknown apps, and a failed update is a download that stopped partway. Allow installs from your file manager or browser, then retry, and reinstall from scratch if the file was truncated."],
    ],
    facts: [
      "Extensions are JavaScript, run in a sandbox inside the app.",
      "One extension covers one website.",
      "Installing and updating never touches your library.",
      "A source that suddenly fails is usually a website change.",
      "A failed install is usually Android, not the extension.",
    ]
  },

  "extensions-catalogue": {
    title: "Choosing and maintaining your sources.",
    body: "The extensions screen is your catalogue: what is installed, what is available, and what is out of date. This is where you keep your source list healthy.",
    marker: "06a",
    code: `Extensions
├── Installed    ready to browse right now
├── Available    installable from a repository you added
└── Updates      a newer version is waiting

Grouped by language, filtered by what you can read.`,
    subsections: [
      ["Installed and available", "Installed extensions work immediately. Available ones come from a repository you have added: refresh the list, then install the ones you want with a single tap."],
      ["Updating an extension", "When a newer version exists it appears under updates. Installing it replaces the old copy in place and keeps its preferences, so a fix costs you nothing."],
      ["Removing an extension", "Uninstall it from the same screen. Your library entries stay put and simply show as unavailable until another source, or a reinstall, can serve them."],
      ["Keeping the list readable", "Extensions are grouped by language. Filter out the languages you do not read so the list shows only sources that are actually useful to you."],
      ["When nothing installs", "A failed install is almost always Android blocking unknown apps, not the extension. Allow installs from your file manager or browser, then try again."],
      ["Keeping the catalogue current", "Refresh your repositories every so often. New extensions appear and broken ones get fixes, but nothing arrives until you ask for it."],
      ["When an extension disappears", "An installed extension can vanish if Android removed it, or if it is hidden by the language filter or the adult-content toggle. Check the filters first, then reinstall it from the repository if it is genuinely gone."],
    ],
    facts: [
      "Updates preserve the settings you set on a source.",
      "Uninstalling an extension keeps your library entries.",
      "Extensions are grouped by language, not by repository.",
      "Refreshing a repository is how you see new and updated extensions.",
      "A missing extension is usually hidden by a filter, not uninstalled.",
    ]
  },

  "extensions-devkit": {
    title: "Build a source against the code that runs it.",
    body: "A Watchtower source is JavaScript with metadata embedded in the same source file. The marketplace index points to that file; an optional JSON sidecar describes its native home layout. There is no separate source manifest file or extension APK.",
    marker: "06b",
    code: `watchtower-extensions/
├── src/watch/en/example.js       implementation + watchtowerSources
├── index/watch.json              marketplace records (JSON array)
└── ui-layouts/example.json       optional native layout

# Validate repository files, then exercise the real source
node tools/validate-extensions.mjs
node tools/run_all_tests.mjs --files "src/watch/en/example.js" --deep --strict --out /tmp/example-report.json`,
    subsections: [
      ["Repository files", "Put the JavaScript source under src/<category>/<language>/<slug>.js. Its top-level watchtowerSources array contains the source metadata, and its DefaultExtension class implements the calls. Add one record to index/<category>.json. Add ui-layouts/<slug>.json only when the source needs custom native home sections, then point to it with uiLayout in the index record."],
      ["Source metadata and identity", "The source file declares name, lang, baseUrl, iconUrl, typeSource, itemType, version and pkgPath. The marketplace record supplies the stable numeric id, sourceCodeUrl, sourceCodeLanguage, appMinVerReq and catalogue capability flags. Keep the id stable after release; change version whenever the JavaScript changes."],
      ["Choose the correct category", "The source directory and index file must agree: watch uses index/watch.json and itemType 1, manga uses 0, novel uses 2, music uses 3, and game uses 4. The numeric value is the app's ItemType value, not an arbitrary label."],
      ["Implement the source contract", "Extend MProvider and implement the methods used by your content type. Listings return {list, hasNextPage}; details return the title and chapter or episode records; manga pages return image URLs; video sources return playable video records. Keep getSourcePreferences() present even when it returns an empty array."],
      ["Use the supported runtime", "The JavaScript runtime provides Client for HTTP requests and Document for HTML parsing, plus the extension's own settings and the shared helper methods. It is not a browser: source code returns data for Watchtower to render and must not try to draw app screens."],
      ["Connect custom home sections", "Each home.sections entry has a unique id and a registered component. Watchtower requests that id through getCustomList(id, page). Implement every id you declare, return the same paginated {list, hasNextPage} shape, and do not add decorative sections with no data provider."],
      ["Test static and live behavior", "Run node tools/validate-extensions.mjs for syntax, JSON, index, icon, itemType and version checks. Then run tools/run_all_tests.mjs against the changed source in deep strict mode. The app CLI also supports extensions test with load, smoke or deep mode."],
      ["Diagnose empty or repeated pages", "An empty list is usually a selector or response-shape mismatch. A page that repeats page one is a pagination bug and fails deep strict validation. Inspect the live HTML or API response, then test the individual source call again."],
    ],
    facts: [
      "The JavaScript implementation contains its watchtowerSources metadata.",
      "The marketplace index is a JSON array; its numeric id must remain stable.",
      "A custom native layout is optional and is linked through uiLayout.",
      "Home section ids are data-provider keys passed to getCustomList(id, page).",
      "The extension validator checks the index itemType against its catalogue file.",
    ]
  },

  "extensions-publishing": {
    title: "Publish source code, not an app package.",
    body: "A Watchtower extension release is a JavaScript source file and one entry in a JSON array. A custom native layout is a separate JSON file referenced from that entry. Users install the source from the repository index; there is no per-extension APK to build.",
    marker: "06c",
    code: `# index/watch.json (a JSON array, hosted over HTTPS)
[
  {
    "name": "Example source",
    "id": 2000001170,
    "lang": "en",
    "baseUrl": "https://example.org",
    "iconUrl": "https://raw.githubusercontent.com/owner/repo/main/assets/icons/example.png",
    "typeSource": "single",
    "itemType": 1,
    "version": "1.0.0",
    "sourceCodeUrl": "https://cdn.jsdelivr.net/gh/owner/repo@main/src/watch/en/example.js",
    "sourceCodeLanguage": 1,
    "appMinVerReq": "0.5.0",
    "isNsfw": false,
    "login": false,
    "forYou": false,
    "requiresAccount": false,
    "hasDRM": false,
    "uiLayout": "ui-layouts/example.json",
    "uiLayoutVersion": "1.0.0"
  }
]`,
    subsections: [
      ["Publish a JSON array", "Each index/<category>.json is an array of source records, not an object containing APK packages. Host the index and referenced source files over HTTPS, and give users the URL to the index they need."],
      ["Keep identity and version stable", "The numeric id identifies the installed source. Never recycle it for another site. Increment version for every JavaScript change so Watchtower can offer the update."],
      ["Publish the JavaScript URL", "sourceCodeUrl must resolve to the actual source file. The official repository uses jsDelivr URLs; raw GitHub URLs are also used for repository-hosted assets such as icons."],
      ["Publish a layout separately", "If uiLayout is present, its relative path must exist in the repository. Increment uiLayoutVersion when the JSON changes; Watchtower downloads and validates the sidecar separately from the JavaScript."],
      ["Set truthful capability flags", "Use isNsfw, login, requiresAccount, hasDRM, forYou, hasCloudflare, langs, videoQualities and related fields only when they describe real source behavior. A flag does not implement a missing method."],
      ["Choose a reachable index URL", "The extension manager requires a URL that returns the source-record JSON array directly, such as index/watch.json. The repository may publish a sibling repo.json descriptor with its name and per-type index URLs, but that descriptor is not itself the source array. The index filename does not need to end in .min.json."],
      ["Validate before publishing", "Run the repository validator and the source's live test. Check that itemType matches the index file, sourceCodeUrl exists, icons are repository-hosted, and every declared layout section is supported by getCustomList."],
      ["Explain the trust boundary", "Anyone who installs from your index runs your JavaScript inside Watchtower's extension runtime. Publish from an account you control, document adult or account requirements honestly, and respond when the target site changes."],
    ],
    facts: [
      "A category index is an HTTPS-hosted JSON array of source records.",
      "Stable numeric ids preserve installed-source identity.",
      "Bump the source version for JavaScript changes and uiLayoutVersion for layout changes.",
      "Use a reachable sourceCodeUrl and a repository-hosted icon.",
      "Capability flags describe behavior; they do not add that behavior.",
    ]
  },

  "local-source": {
    title: "Reading and playing your own files.",
    body: "Watchtower can treat a folder on your device as a normal source. Your own collection then behaves exactly like an online one, complete with progress tracking.",
    marker: "07",
    code: `local/                       manga and novels
└── Series title/
    ├── cover.jpg
    ├── Chapter 01.cbz
    └── Chapter 02.cbz

localanime/                  video
└── Anime title/
    ├── Episode 01.mp4
    └── Episode 02.mp4`,
    subsections: [
      ["Manga and novels", "Put one folder per series inside the local folder, and one file per chapter inside it. Chapters can be CBZ archives or plain image folders, and the folder name becomes the series title."],
      ["Anime", "Put one folder per series inside the local anime folder, and one video file per episode inside it. Episodes are ordered by filename, so number them."],
      ["Covers and details", "A cover image in the series folder becomes the thumbnail. A details file beside it can add author, artist, description and genres when the folder name is not enough."],
      ["Adding new files", "Move files in from outside the app, then refresh the local source so Watchtower rescans the folder. Files added while the app is closed are not noticed until you do."],
      ["Reading offline", "Local sources never touch the network, so they work in flight mode and cannot be blocked or rate-limited. Downloads and local files behave the same way once on disk."],
      ["Hiding files from the gallery", "Drop a .nomedia file in the folder so covers and episodes stay out of your phone's photo app."],
      ["When covers are blank or files are missing", "A blank cover or a series that will not open almost always means the folder structure is wrong. Check that there is one folder per series and one file per chapter or episode, then remove the entry, clear the database for items outside the library, and let the local source rescan the folder."]
    ],
    facts: [
      "Both CBZ archives and plain image folders are read as chapters.",
      "Episode order follows the filename, so number your files.",
      "A .nomedia file keeps local media out of the system gallery.",
      "Local sources work with no network connection at all.",
      "A wrong folder structure is the usual cause of a blank cover."
    ]
  },

  "video-player": {
    title: "Watching an episode.",
    body: "The player covers the video with gestures and sheets, so nothing leaves the screen while you are watching. Quality, audio, subtitles and speed all live one tap away.",
    marker: "08",
    code: `Tap          show or hide the controls
Double tap   seek forward or back
Long press   change playback speed
Pinch        zoom, when the video allows it

Sheets   quality · audio track · subtitles · speed
Panels   episode list · playback statistics`,
    subsections: [
      ["Basic controls", "Tap once to bring up the controls, double tap a side to jump forward or back, and long press to speed up. Pinch to zoom when the video has room to spare."],
      ["Quality and audio", "Sources that offer several resolutions or audio tracks expose them in sheets that slide up without interrupting playback. Your choice is remembered for the series."],
      ["Subtitles", "Subtitle tracks come from the source or from a file you supply. They are chosen and adjusted from the subtitle sheet, and their appearance is set once in settings."],
      ["Episodes and stats", "A side panel lists every episode so you can jump around, and another shows what the player is actually doing with the stream when something looks off."],
      ["When the internal player struggles", "A rare codec or a broken stream can be handed to an external player such as mpv or VLC. That is the reliable fallback, not a sign the episode is unusable."],
      ["Saving your place", "Progress is written continuously while you watch, so closing the app or losing power does not lose your position."],
      ["When a video will not play", "A stream that refuses to start is often a codec the internal player cannot handle or a link that expired. Switch to an external player such as mpv or VLC first, then update the extension if every episode from that source fails."],
    ],
    facts: [
      "Playback uses a hardware-accelerated decoder by default.",
      "Gestures handle brightness, volume and seeking.",
      "Progress is saved continuously, not only when you exit.",
      "An external player is the fallback for unsupported codecs.",
      "Handing a stubborn stream to an external player is the reliable fallback.",
    ]
  },

  "player-settings": {
    title: "Shaping the player around your habits.",
    body: "Player settings decide how video is decoded, what the gestures do, and which buttons sit on the player. Change them once and every episode follows.",
    marker: "09",
    code: `Decoder        hardware · software · automatic
Gestures       brightness · volume · seek
Subtitles      font · size · delay
Custom buttons the actions you use most
Advanced       buffer · aspect ratio · picture-in-picture`,
    subsections: [
      ["Decoding", "Hardware decoding is faster and lighter on the battery, and suits almost everything. Switch to software when a particular file plays badly, since software decoding is more forgiving of unusual codecs."],
      ["Gestures", "Decide which swipe does what: vertical for brightness and volume, horizontal for seeking. Each direction can be inverted if it feels backwards to you."],
      ["Custom buttons", "Add the actions you reach for most, such as skipping an intro or taking a screenshot, straight onto the player surface so they stop being buried in menus."],
      ["Advanced playback", "Buffer size, a forced aspect ratio and picture-in-picture are here for the rare case where automatic behaviour is not what you want. Most people never need to touch them."],
      ["Per-series exceptions", "Almost every player setting can be overridden for a single series without changing the defaults for everything else. Useful for one show with odd audio."],
      ["After a settings backup", "Custom buttons and player preferences travel in your backup file, so restoring on a new device brings your player layout with it."]
    ],
    facts: [
      "Hardware decoding is the default and suits most files.",
      "Each gesture direction can be inverted or turned off.",
      "Settings can be overridden for a single series.",
      "Player preferences are included in a backup."
    ]
  },

  subtitles: {
    title: "Making subtitles readable.",
    body: "Subtitles come from three places: the stream, a file on your device, or a source that fetches them. This page covers choosing a track, fixing its timing, and styling the ones Watchtower draws itself.",
    marker: "10",
    code: `# Where a subtitle can come from
1. a track bundled inside the stream
2. a file sitting next to the episode on disk
3. a track the source downloads for you
4. a file you pick by hand`,
    subsections: [
      ["Choosing a track", "When an episode carries several subtitle tracks they are listed in the subtitle sheet. Your choice is remembered for that series, so you only pick once."],
      ["Fixing the timing", "A track that runs ahead of or behind the audio can be nudged in small steps until it lines up. The offset is remembered, so the fix survives restarting the app."],
      ["Styling", "Font, size, colour, outline and background apply to text subtitles. These settings do not touch the video and are safe to experiment with mid-episode."],
      ["Your own files", "Put a subtitle file next to a local episode with a matching name and the player loads it automatically, with no setting to change."],
      ["Subtitles baked into the image", "Some subtitles are pictures rather than text. They cannot be restyled, only repositioned or resized, because the styling is part of the image itself."],
      ["When subtitles do not appear", "Check the subtitle sheet first: the source may offer none, or the file name may not match the episode closely enough to be paired."]
    ],
    facts: [
      "Text subtitles can be restyled; image subtitles cannot.",
      "Timing offsets are saved and survive a restart.",
      "A matching file beside a local episode loads on its own.",
      "Subtitle choices are remembered per series."
    ]
  },

  reader: {
    title: "Reading manga, webtoons and novels.",
    body: "The reader handles paged manga, vertical webtoons and text novels. You set a default once and override it for the series that need something different.",
    marker: "11",
    code: `Reader
├── Paged       right to left · left to right · vertical
└── Long strip  for webtoons: one continuous image

Tap the sides to turn a page. Tap the middle for the menu.`,
    subsections: [
      ["Choosing a reading mode", "Paged mode suits printed manga, and long strip suits webtoons that were drawn as one tall image. Set a default and change it per series when a title reads better the other way."],
      ["Turning pages", "Tap the edges to move forward or back, swipe to scroll in long strip, and pinch to zoom. Tapping the centre opens the menu without leaving the page."],
      ["Picking up where you left off", "Watchtower remembers the page you reached in each chapter, so reopening a series drops you exactly where you stopped rather than at the start."],
      ["Wide pages and spreads", "Two-page spreads and unusually wide scans can be split, rotated or scaled so they are not unreadable on a phone."],
      ["Downloaded chapters", "Chapters you downloaded open instantly and are marked in the chapter list, which is what makes reading offline practical."],
      ["Novels", "Text novels use the same entry in your library but open in a text reader instead of an image viewer, chosen automatically from the extension's content type."],
      ["When a page will not load", "Occasionally the app fails to recognise an image in a chapter. Leaving the reader and reopening the chapter usually resolves it, and if it persists the image itself is missing on the source rather than in the app."],
      ["Two pages at once", "A dual-page reader is not available, because scans rarely agree on where a page break falls. Reading one page at a time, or using long strip for webtoons, is the current behaviour."]
    ],
    facts: [
      "Long strip suits vertical webtoons and ignores page width.",
      "The reader remembers the page you reached per chapter.",
      "Zoom is off in long strip until you turn it on.",
      "Novels open in a text reader, not the image reader.",
      "Reopening a chapter fixes a page that failed to load."
    ]
  },

  "reader-settings": {
    title: "Setting up reading the way you like it.",
    body: "Reader settings cover reading direction, how pages are scaled and cropped, and which parts of the screen turn the page.",
    marker: "12",
    code: `Reading      mode · page transitions · what to skip
Display      rotation · background · fullscreen
Pages        scale · crop borders · zoom · split spreads
Long strip   side padding · tap zones`,
    subsections: [
      ["Reading", "Set the default mode, whether pages animate as they turn, and which chapters to skip. Skipped chapters are still there, they simply do not interrupt you."],
      ["Display", "Rotation lock, background colour and fullscreen live together here. A dark background suits reading at night and reduces glare between pages."],
      ["Pages", "Choose how a page fills the screen: fit the width, the height, the whole screen, or show it at its original size. Border cropping trims the scan margins automatically."],
      ["Tap zones", "Pick where tapping turns the page forward, turns it back, and opens the menu. The whole layout can be mirrored for reading left-handed."],
      ["Long strip", "Side padding and separate tap zones make tall webtoons comfortable on a wide screen, where a full-width image would otherwise be too small."],
      ["Per-series exceptions", "Any of these can be overridden for one series, which is handy for a title that was scanned unusually or reads in the other direction."]
    ],
    facts: [
      "Scale options include fit width, fit height, fit screen and original size.",
      "Border cropping removes scan margins for you.",
      "Tap zones can be mirrored for left-handed reading.",
      "Skip rules can be overridden per series."
    ]
  },

  updates: {
    title: "Keeping your library current.",
    body: "Updates check your sources for new chapters and episodes. Done well, they keep you current. Done carelessly, they hammer a source until it blocks everyone.",
    marker: "13",
    code: `# Two ways to update
Global update   the whole library, on a schedule
Manual refresh  one series, whenever you want

# Where to find it
More → Updates        check everything
Series → menu → Refresh   check just this one`,
    subsections: [
      ["Global update", "Runs across your whole library and reports what is new. Restrict it to the categories you actually follow so slow series are not checked every day for nothing."],
      ["What gets skipped", "Series you have finished, series you have not started, and series with no expected releases are skipped automatically. That is what keeps a large library from generating a flood of requests."],
      ["Notifications", "New chapters and episodes raise a notification, which you can narrow to a category or mute entirely without turning updates off."],
      ["Refreshing one series", "Open the series menu and refresh it when you want to check immediately, without running an update over everything else."],
      ["Why this matters", "A source that receives too many requests can block the whole app with anti-bot protection. Limiting updates to what you follow protects the sources everyone depends on."],
      ["If updates seem to stop", "Android battery optimisation can suspend background work. Exempt Watchtower from battery restrictions if updates only arrive when you open the app."],
      ["When an update reports an error", "An update that fails on one series is usually that source rather than the app. Refresh the series by hand, update the extension, and remember that rate limiting after a large update run clears itself with time rather than with retries."],
    ],
    facts: [
      "Updates can be limited to the categories you choose.",
      "Completed series are skipped by default.",
      "Heavy update traffic can get a source to block the app.",
      "Battery optimisation can delay background updates.",
      "A failed update on one series points at that source, not the app.",
    ]
  },

  downloads: {
    title: "Taking your library offline.",
    body: "Downloads save episodes and chapters to your device so you can watch or read with no connection. They live in one queue with clear limits.",
    marker: "14",
    code: `downloads/
└── Source name (LANG)/
    └── Series title/
        ├── Chapter 01.cbz
        └── Episode 01.mp4

One source downloads at a time; different sources run together.`,
    subsections: [
      ["Starting a download", "Add chapters or episodes from a series and they join the download queue. From the queue you can reorder what comes next or cancel something you no longer want."],
      ["Why one at a time", "Watchtower downloads one series at a time from any single source. Firing many requests at one site is exactly what triggers the anti-bot protection that gets sources blocked."],
      ["Downloads-only mode", "Turn this on to hide anything you have not saved. The app then shows only what is on your device, which is useful on a trip or a metered connection."],
      ["Where files are stored", "Downloads land under a folder named after the source, then the series. Renaming either folder breaks detection, so leave them alone."],
      ["When downloads disappear", "If saved content stops showing, the storage folder has probably moved or become unreadable. Check the storage location and rebuild the downloads index."],
      ["What a backup does not cover", "Backup files carry your library and settings, never your downloaded media. Those have to be moved across separately."],
      ["When a download fails partway", "A stopped download is usually a dropped connection or a source that stopped answering. Retry from the queue, since partial files are kept, and switch to Wi-Fi if the network is the cause. Persistent 403 or 429 responses mean the source is refusing you, not that the file is gone."],
    ],
    facts: [
      "Only one series per source downloads at a time, on purpose.",
      "Downloaded media is not included in a backup.",
      "Internal storage is faster and more reliable than an SD card.",
      "Renaming the downloads folder breaks detection.",
      "A stopped download keeps its partial files, so retrying resumes it.",
    ]
  },

  categories: {
    title: "Turning a long library into a few shelves.",
    body: "Categories group your library by state or taste, and they double as the control for what gets updated and downloaded automatically.",
    marker: "15",
    code: `Watching       updated daily
Plan to watch  never updated in the background
On hold        left alone
Completed      skipped automatically`,
    subsections: [
      ["Creating categories", "Name them whatever makes sense to you and order them however you like. Most people end up with a handful based on how often they follow something."],
      ["Putting series in them", "Long press a series, choose the category option, and tick everything that applies. A series can sit on several shelves at once."],
      ["Using them for updates", "Point global update and automatic downloads at specific categories. Only the series you are actively following then generate traffic."],
      ["Taking a series out", "Unselect a category in the same place you added it. The series stays in your library, it just leaves that shelf."],
      ["Naming that lasts", "Name categories after your habits rather than after sources. Then migrating a series between sources never reshuffles your library."],
      ["Keeping it simple", "Categories work best when there are few of them. If you cannot remember what a category is for, it is probably doing more harm than good."]
    ],
    facts: [
      "A series can belong to several categories at once.",
      "Global update can be pointed at a single category.",
      "Automatic downloads can be limited to chosen categories.",
      "Naming categories after sources ages badly."
    ]
  },

  tracking: {
    title: "Recording what you watch, automatically.",
    body: "Tracking connects Watchtower to the services that keep your history. You log in once, and progress is recorded as you go instead of being typed in by hand.",
    marker: "16",
    code: `MyAnimeList · AniList · Kitsu
MangaUpdates · Shikimori · Bangumi

Progress flows from Watchtower to the service.
Changes made on the website do not come back.`,
    subsections: [
      ["Which services are supported", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori and Bangumi. They are all set up from tracking settings, and you can connect more than one."],
      ["Logging in", "Open tracking settings and tap a service to start its login. Kitsu is the one that asks for your email address rather than a username, which catches people out."],
      ["Connecting a series", "Open a series, go to tracking, and add the service. Watchtower searches for the title for you, and you can edit the search terms when it matches the wrong entry."],
      ["How much counts as watched", "A percentage threshold decides when an episode is marked as seen. Set it high enough that stopping halfway does not record a full episode."],
      ["One direction only", "Progress goes from Watchtower to the service. Editing your list on the website does not change anything in the app, so pick one place to manage it."],
      ["Watching offline", "Progress you make without a connection is queued and uploaded the next time you are online, so a flight does not lose your history."],
      ["When a login or a sync fails", "A service that refuses to log in is usually an expired session or a captcha on the service's own site, so sign in once through the service's website and try again. Progress that will not sync is normally queued rather than lost, and is retried when the connection returns."],
      ["Matching the wrong title", "Automatic matching can pick the wrong entry when a title is ambiguous. Edit the search terms for that series in the tracking section and select the correct result, then confirm the progress it carries across is the one you want."]
    ],
    facts: [
      "Tracking is set up per series, not for the whole library.",
      "Progress only flows outward, never back in.",
      "A threshold decides when an episode counts as watched.",
      "Offline progress uploads when you reconnect.",
      "A failed login is usually an expired session on the service itself."
    ]
  },

  backups: {
    title: "Protecting your library before something goes wrong.",
    body: "A backup is one file holding your library, your progress and your settings. It is also the only way to move a library between devices.",
    marker: "17",
    code: `Included   series, categories, progress, tracking links,
           history, metadata, extensions, settings

Excluded   downloaded files, custom covers,
           history of series not in your library

Data and storage → Create backup`,
    subsections: [
      ["Making one", "Open data and storage settings, choose to create a backup, and save it somewhere you can reach from another device. Do this before any update you are unsure about."],
      ["What is inside", "Every series you follow, the categories they sit in, how far you got, your tracking links, your history, your extensions and all your settings."],
      ["What is left out", "Downloaded files, custom covers and the history of series that were never added to the library. Those are not recoverable from a backup."],
      ["Restoring it", "Import the file on the new device, then log back in to your trackers and reinstall your extensions so everything can be relinked cleanly."],
      ["Automatic backups", "Set a frequency so a recent backup always exists without you remembering. This is the single best protection against a bad update."],
      ["Moving to a new device", "Back up, install on the new device, restore, then log in to trackers and reinstall extensions. Downloads have to be copied across separately."],
      ["When a restore fails", "A restore that stops partway is usually a truncated or outdated backup file, or a version mismatch between the backup and the app. Re-create the backup from the source device, confirm the file copied completely, and restore onto an app that is at least as new as the one that made it."]
    ],
    facts: [
      "A backup is the only way to move a library between devices.",
      "Downloaded media must be moved separately.",
      "Custom covers are not part of a backup.",
      "Automatic backups are the safest defence against a bad update.",
      "A failed restore is usually a truncated or outdated backup file."
    ]
  },

  storage: {
    title: "Where Watchtower keeps its files.",
    body: "Backups, downloads and local sources all live under one storage location. Choosing it deliberately is what keeps downloads from vanishing later.",
    marker: "18",
    code: `[storage location]/
├── autobackup/     your automatic backups
├── downloads/      Source (LANG)/Series Title/
├── local/          manga and novels you own
├── localanime/     anime you own
└── mpv-config/     fonts and scripts for external players`,
    subsections: [
      ["The folder layout", "Everything sits under one folder you choose: automatic backups, downloaded chapters and episodes, your local manga, your local anime, and configuration for external players. Knowing the layout is what makes a stray file easy to place."],
      ["Choosing a location", "Pick a folder you will still be able to reach in a year. Avoid the very root of a storage volume, and avoid moving files out from under the app afterwards."],
      ["Android permissions", "Modern Android keeps apps inside their own directories. Grant Watchtower access to the storage folder you chose, or downloads and local sources will fail quietly."],
      ["After moving files in", "Move files in from outside the app and then refresh, so Watchtower rescans the folders. Otherwise the new content stays invisible until something else triggers a scan."],
      ["Keeping the gallery clean", "A .nomedia file in the downloads folder keeps covers and episodes out of your phone's photo gallery."],
      ["Why internal storage is better", "Downloads on internal storage are faster and far less likely to become unreadable than on a removable card, which can be unmounted or corrupted."],
      ["When the app cannot reach the folder", "Permission errors and disappearing downloads both come from the storage folder being moved or becoming unreadable. Confirm the app still has access, check free space, and prefer internal storage over a removable card that can be unmounted."],
    ],
    facts: [
      "Backups, downloads and local sources share one storage location.",
      "Android needs explicit permission for that folder.",
      "A .nomedia file hides downloaded media from the gallery.",
      "Internal storage is more reliable than an SD card.",
      "A moved or unreadable storage folder hides downloads and backups.",
    ]
  },

  settings: {
    title: "The settings that change how the app behaves.",
    body: "Beyond each feature's own options, a handful of app-wide settings affect updates, privacy, installation and how you recover when something goes wrong.",
    marker: "19",
    code: `General      theme · language · library behaviour
Privacy      hide the screen in the app switcher · incognito
Network      encrypted DNS · proxy
Install      unknown sources · Shizuku
Diagnostics  crash logs · logcat · rebuild indexes`,
    subsections: [
      ["General", "Theme, interface language and how the library behaves by default. These apply everywhere at once, so they are the first place to look when the app does not feel like yours."],
      ["Privacy", "Hiding the screen in the app switcher keeps your library out of thumbnails, and incognito mode stops recording history while you browse. Incognito hides what you looked at, not how far you got."],
      ["Network", "Encrypted DNS can get past some basic blocking and is worth trying when a source will not load on one network but works on another. A proxy does the same job for a whole network."],
      ["Installing extensions", "Android normally blocks installs from outside a store. Granting that permission is what lets extensions install, and Shizuku is an alternative for devices that make it awkward."],
      ["Diagnostics", "Crash logs, a logcat capture and index rebuilding live here. This is where you go when something misbehaves and you want evidence rather than guesses."],
      ["Before you report a problem", "Note your app version, the source that failed and what the screen showed. That turns a vague report into something that can actually be fixed."],
      ["Resetting a stuck state", "Clearing the cache, clearing cookies and web data, and rebuilding the indexes each fix a different class of problem. Cache clears stale page data, cookies clear a stuck verification, and an index rebuild re-scans the storage folder. Clearing the database removes series that are not in your library, which is the usual fix for a blank local cover."],
      ["A last resort that keeps your data", "If nothing else works, take a fresh backup, then reinstall the app and restore it. That keeps your library and settings while replacing anything corrupted in the install itself."]
    ],
    facts: [
      "The app-switcher privacy setting must be off to take screenshots.",
      "Incognito stops history recording, not progress.",
      "Crash logs stay on your device and are never sent automatically.",
      "Encrypted DNS often fixes a source that fails on one network only.",
      "Cache, cookies and indexes each fix a different class of problem.",
      "Back up before reinstalling, then restore to keep your library."
    ]
  },

  "extension-runtime": {
    title: "How extensions are run, and how safely.",
    body: "Extensions are JavaScript, and Watchtower runs them in a sandbox that gives them the network and nothing else. This page explains what that means for you.",
    marker: "20",
    code: `An extension can    reach the network, parse pages, read its own settings
An extension cannot read your files, touch your library, or draw the interface

The same sandbox runs on Android, on desktop and on the Linux command line.`,
    subsections: [
      ["What runs your extensions", "Watchtower uses a small JavaScript engine embedded in the app. It is the same engine on every platform, which is why a source behaves identically on a phone and on a server."],
      ["What an extension is allowed to do", "It can make web requests, parse the pages it receives and keep a few of its own settings. That is the entire toolbox."],
      ["What it is kept away from", "Your files, your library, your accounts and the app's own screens. Everything an extension produces is handed back as plain data for the app to render."],
      ["Why a slow source drags", "A source that responds slowly makes its own screens slow, because the app waits for it. Other sources are unaffected, so slowness is a sign of one bad source, not a heavy app."],
      ["What this means for trust", "The sandbox limits what an extension can break, but it does not judge intent. It can still see anything you type into it and anything it fetches. Install from people you trust."],
      ["Same engine everywhere", "Because the app and the Linux command line share this runtime, an extension that works on your phone works on a server too, with no changes."]
    ],
    facts: [
      "Extensions get network access and page parsing, nothing else.",
      "They cannot read your files or your library directly.",
      "One slow source only slows its own screens.",
      "The same sandbox runs on mobile, desktop and the command line."
    ]
  },

  "extension-development": {
    title: "The extension contract and native UI reference.",
    body: "This is the implementation reference for extension authors and agents. It follows the current Watchtower runtime, the live source indexes and the registered layout catalog. Treat these definitions as a map to the code, not as permission to invent unsupported APIs.",
    marker: "20a",
    code: `watchtower-extensions/
├── src/<category>/<lang>/<slug>.js   source metadata + implementation
├── index/<category>.json             marketplace records
└── ui-layouts/<slug>.json            optional native layout

# Source of truth
watchtower/lib/eval/model/m_provider.dart
watchtower/lib/models/ui_layout.dart
watchtower/lib/models/layout_component_registry.dart
watchtower/lib/models/gallery_component_catalog.dart`,
    subsections: [
      ["One implementation reference", "The three child pages below cover the source methods and result shapes, the native layout JSON contract, and every registered gallery card id. Read them together when adding a source that provides a custom home."],
      ["What belongs in each repository file", "JavaScript and watchtowerSources metadata live together under src/. The index record gives Watchtower the stable source id and download URLs. The optional ui-layout file is linked from that record and does not contain executable code."],
      ["Runtime boundaries", "Extensions fetch and parse remote content, then return plain data. Watchtower owns navigation, cards, playback and reading. A layout selects registered components; it cannot supply arbitrary widgets or Dart code."],
      ["Use the registry as the authority", "Method signatures are defined by MProvider and the JavaScript bridge. Layout ids and contexts are defined by LayoutComponentRegistry and GalleryComponentCatalog. If a name is absent there, do not claim it is supported."],
      ["Keep manifests and indexes in sync", "The source metadata version and the matching index version must agree. A layout change also needs a uiLayoutVersion bump. The repository validator checks syntax, indexes, icons, itemType values, layout ids and version consistency."],
      ["Recommended change loop", "Copy the closest working source, implement the site-specific requests, validate the source and sidecar, run the live harness, then publish a small commit. Recheck the source against the current site whenever its markup or endpoint changes."],
    ],
    facts: [
      "A source is JavaScript plus an index record, not a separate APK manifest.",
      "The layout JSON is optional, declarative and validated against registered ids.",
      "The three child pages document related parts of one extension-development section.",
      "The core registry is authoritative when this page and implementation differ.",
    ]
  },

  "extension-contract": {
    title: "Methods, manifests and result shapes.",
    body: "A source is a JavaScript class extending MProvider, plus a metadata object embedded in the same file and a record in the marketplace index. The method contract is typed by the app even though extensions themselves are JavaScript.",
    marker: "21",
    code: `const watchtowerSources = [{
  "name": "Example source",
  "lang": "en",
  "baseUrl": "https://example.org",
  "apiUrl": "",
  "iconUrl": "https://example.org/favicon.ico",
  "typeSource": "single",
  "itemType": 1,
  "version": "1.0.0",
  "login": false,
  "forYou": false,
  "pkgPath": "watch/en/example.js",
  "requiresAccount": false,
  "hasDRM": false,
  "isNsfw": false,
  "hasCloudflare": false,
  "notes": ""
}];

class DefaultExtension extends MProvider {
  get supportsLatest() { return true; }
  async getPopular(page) { return { list: [], hasNextPage: false }; }
  async getLatestUpdates(page) { return { list: [], hasNextPage: false }; }
  async search(query, page, filters) { return { list: [], hasNextPage: false }; }
  async getDetail(url) { return { name: "", chapters: [] }; }
  async getPageList(url) { return []; }
  async getVideoList(url) { return []; }
  getFilterList() { return []; }
  getSourcePreferences() { return []; }
}`,
    subsections: [
      ["Two metadata layers", "watchtowerSources is an array in the JavaScript file and describes the implementation. index/<category>.json is a JSON array consumed by the marketplace and carries the stable numeric id, sourceCodeUrl, iconUrl, version and capability metadata. Do not confuse either with ui-layouts/<slug>.json."],
      ["Catalogue fields and types", "Current index records use name (string), id (integer), lang (string), baseUrl/iconUrl/sourceCodeUrl (URLs), typeSource (string), itemType/sourceCodeLanguage (integers), version/appMinVerReq (version strings), and boolean flags isNsfw, hasCloudflare, login, forYou, requiresAccount and hasDRM, plus notes (string). Optional active fields include apiUrl/loginUrl/description/upstream (strings), langs/subCategories/contentSubtype/videoQualities (string arrays), supportsComments/isAggregator/touchToPreview/account/favorites (booleans), paywall (string), and uiLayout/uiLayoutVersion (strings). Some records retain the legacy isManga flag; itemType is the catalogue classification. The runtime model also accepts subscription/premium booleans and aliases such as supportsAccount."],
      ["Item types and language", "itemType is the app enum: 0 manga, 1 watch/anime, 2 novel, 3 music, 4 game. The index file must match that value. lang is the primary language code; use langs when the source publishes multiple supported languages. Use multi or all only when that is genuinely accurate."],
      ["Listings and pagination", "getPopular(page), getLatestUpdates(page) and search(query, page, filters) return {list: [items], hasNextPage: boolean}. Page numbers start at 1. supportsLatest tells the app whether Latest is meaningful; still implement the method and return an empty list when the site truly has no latest feed."],
      ["Item and detail shape", "List items use name and link, with optional imageUrl, previewUrl, description, author, artist, collectionId, genre and status. getDetail(url) returns the same identity plus chapters or episodes. Each chapter/episode uses name and url, with optional dateUpload, thumbnailUrl, description and duration."],
      ["Reading and playback", "getPageList(url) returns an ordered array of image URLs for a readable chapter. getVideoList(url) returns video objects with url, quality and originalUrl; headers, subtitles and audio tracks are supported by the video model. Return playable URLs, not page URLs, when the site exposes a stream."],
      ["Filters, settings and custom sections", "getFilterList() returns source filters and getSourcePreferences() returns settings; both may be empty arrays. getCustomList(id, page) is required for each id declared in a home layout. The runtime also exposes optional recommendations, comments and account-related methods; only advertise the matching index flags when implemented."],
      ["Transport and parser helpers", "Use new Client().get(url, headers) or the supported HTTP verbs, then parse the response with Document(html), select(selector), selectFirst(selector), text and attr. A failed request should surface as an error with useful context; do not turn every failure into a successful empty page."],
      ["Optional bridge methods", "The bridge also exposes getHtmlContent(name, url), cleanHtmlContent(html), getHeaders(url), getRecommendations(url), getComments(url), getAccount(), getFavorites(), getSubscription() and getPremiumStatus(). These are optional capabilities with runtime-specific defaults; override only what the source supports. supportsLatest must be explicitly supplied by the source."],
    ],
    facts: [
      "The source metadata is embedded in watchtowerSources; the marketplace id lives in the index.",
      "Every list call returns list plus hasNextPage.",
      "itemType is fixed by the catalogue file: watch 1, manga 0, novel 2, music 3, game 4.",
      "Home sections call getCustomList(id, page); each declared id needs a data implementation.",
      "Optional flags must describe methods and behavior that actually exist.",
    ]
  },

  "ui-schema": {
    title: "The native layout JSON contract.",
    body: "A source may ship a declarative JSON layout alongside its JavaScript. The app downloads it from the path in the marketplace record, validates it, and renders registered native components. This replaces the old imagined card/list tree; the current schema is versioned and section ids are data-provider keys.",
    marker: "22",
    code: `{
  "schemaVersion": 1,
  "home": {
    "sections": [
      {
        "id": "trending",
        "component": "spotlight",
        "title": "Trending",
        "icon": "trending_up",
        "accent": "primary",
        "seeAll": true,
        "paginated": true
      },
      {
        "id": "hd",
        "component": "carousel",
        "title": "HD"
      }
    ]
  },
  "browse": {
    "popular": { "component": "grid", "columns": 3, "cardStyle": "thumbnail" },
    "latest":  { "component": "grid", "columns": 3, "cardStyle": "thumbnail" },
    "search": {
      "results": { "component": "grid", "columns": 3, "cardStyle": "thumbnail" },
      "filters": "chips"
    }
  },
  "detail": {
    "hero": "backdrop",
    "episodeList": "compact",
    "showRecommendations": true
  },
  "player": { "mode": "standard" }
}`,
    subsections: [
      ["How it is linked", "Add uiLayout with a repository-relative path such as ui-layouts/example.json to the index record. Add uiLayoutVersion and increment it when the sidecar changes. The downloader fetches from the extension repository's raw main branch; the layout is stored separately from source code."],
      ["Root schema", "schemaVersion must be a number of at least 1 and home must be an object. home.sections is an ordered array. browse, detail and player are optional overrides. If no layout is declared, Watchtower uses its standard Popular, Latest and Search screens."],
      ["Home section object", "Every section needs a unique non-empty id and a registered component. title, icon and accent control its heading and appearance. seeAll, paginated and requiresAuth are booleans. The id is passed to getCustomList(id, page), so it must map to real source data."],
      ["Presentation properties", "The schema supports columns, rows, cardStyle, cardComponent, episodeComponent, chapterComponent, gridOrder, scrollDirection, monthSelector and params. These are hints consumed by native renderers; property support depends on the chosen component and media context."],
      ["Browse, detail and player", "browse can override popular and latest presentation and search results/filters. detail accepts hero and episodeList presentation values plus showRecommendations. player accepts mode standard or feed. These keys do not create new source capabilities."],
      ["Validation and failure behavior", "The runtime rejects malformed JSON, duplicate or empty ids, missing components and components unknown to the current registry. An invalid layout is not an ignored widget tree. Validate the JSON before publishing and never copy an id from an old mockup without checking the registry."],
      ["Sections need providers", "For each home section, implement getCustomList(id, page) and return the standard paginated list object. Do not assume Popular or Latest will be substituted automatically for an unknown custom id."],
      ["Version and cache behavior", "The layout is cached locally. Bump uiLayoutVersion to deliver a layout-only update, or bump the source version when the JavaScript changes. Keep both the index version and embedded watchtowerSources version synchronized."],
    ],
    facts: [
      "A layout is JSON linked by uiLayout; it is not executable extension code.",
      "Each home section id dispatches to getCustomList(id, page).",
      "Unknown component ids and malformed sections fail validation.",
      "The current root supports home, browse, detail and player layout blocks.",
    ]
  },

  "layout-components": {
    title: "Every registered card and home component.",
    body: "The identifiers below come from the live Dart registry, not from an old mockup or a hand-written estimate. The home component registry provides the section renderers; the gallery catalog adds 199 stable card ids. Compatibility-only entries remain registered for old layouts even when they are not offered in the picker.",
    marker: "22a",
    code: `# ACCUEIL & LECTURE (9)
home-hero-banner, home-spotlight-rail, home-genre-tile, home-popular-rail, home-read-rail, home-language-grid, home-my-list, home-airecommender, home-mini-player
# CARTES RICHES (12)
movie-details, movie-detail, expanded-movie, expandable-movie, interactive-movie, hover-movie, movie-quick-view, media-quick-view, movie-preview, media-preview, movie-details-modal, media-details-modal
# CATALOGUE & DISCOVERY (13)
poster, poster-card-compact, landscape, ranked-card, discovery, animated-discovery, ranked-discovery, landscape-discovery, featured-discovery, saga-discovery, spotlight-discovery, tag, app-genre-tile
# CLASSEMENTS & TOP 10 (10)
top-movies, top-series, top-anime, top-by-genre, top-by-country, global-ranking, top-rated-ranking, trending-ranking, top-by-decade, must-watch
# COLLECTIONS & FRANCHISES (24)
collection, movie-collection, franchise, saga, studio, network, genre, actor, director, character, related-media, similar-media, trending, popular, top-rated, ranked-media, numbered, featured, spotlight-card, recommendation, carousel-card, universe, category-card, cast
# EXTENSIONS WATCH (6)
media-ranked, media-landscape, media-grid, media-hero, collection-rail, media-banner-rail
# FILMS & SÉRIES · SECTIONS (11)
landscape-showcase, landscape-playlist, landscape-genre-row, genre-grid-section, poster-rail, ranked-rail, landscape-rail, featured-movie-rail, watch-providers-rail, tmdb-hero-carousel, tmdb-featured-stack
# MANGA & LECTURE (79)
manga-chapter, manga-chapter-release, manga-chapter-list, manga-chapter-group, manga-latest-release, manga-release-timeline, manga-chapter-volume, manga-chapter-badge, manga-chapter-range, manga-chapter-timeline, manga-new-chapter, manga-chapter-progress, manga-chapter-next, manga-chapter-search, manga-volume, manga-volume-list, manga-volume-preview, manga-special-edition, manga-format, manga-edition-language, manga-collection-tracker, manga-upcoming-volume, manga-genres, manga-demographics, manga-themes, manga-universe-showcase, manga-tags, manga-languages, manga-publishers, manga-language-news, manga-reader, manga-page, manga-page-preview, manga-page-strip, manga-double-page, manga-reading-mode, manga-reading-direction, manga-reader-settings, manga-page-progress, manga-reading-progress, manga-chapter-navigation, manga-quick-access, manga-reader-floating, manga-reader-chapter-list, manga-reader-history, manga-relation-type, manga-universe-timeline, manga-linked-series, manga-relation-list, manga-same-universe, manga-universe-chronology, manga-franchise-universes, manga-character-relations, manga-universe-map, manga-status, manga-serialization, manga-frequency, manga-global-stats, manga-popularity, manga-followers, manga-item-stats, manga-stats-grid, manga-category-ranking, manga-reports, manga-featured, manga-resume, manga-spotlight, manga-genre, manga-update-row, manga-banner, manga-top3, manga-latest-update, manga-ranking, manga-vote, manga-collection-showcase, manga-trending-list, manga-scan-group, manga-card, manga-list-tile
# SECTIONS RÉUTILISABLES (1)
three-column-swipe
# STREAMING & PROGRESSION (15)
continue-watching, continue-watching-item, resume-watching, recently-watched, watch-again, now-playing, up-next, next-episode, episode, season, series-episode, watch-progress, progress-media, progress-media-card-percent, progress-media-card-chip
# ÉPISODES & SAISONS (19)
compact-episode, episode-thumbnail, episode-preview, episode-list-item, season-detail, featured-episode, next-episode-hero, latest-episode, season-selector, series-episode-list, episode-progress, media-progress, up-next-compact, season-episode, series-banner, episode-carousel, season-banner, episode-list, series-grid`,
    subsections: [
      ["How to read the catalog", "The code panel groups all 199 GalleryComponentCatalog ids by their current source category. These stable kebab-case ids are what go in layout JSON. The ids and descriptions live in watchtower/lib/models/gallery_component_catalog.dart; the home renderer and legacy section definitions live in watchtower/lib/models/layout_component_registry.dart."],
      ["Home section renderers", "For home.sections[].component, the registered base renderers are spotlight (alias carousel), banner, hero, ranked, newHot (alias new_hot), rankedWide, showcase, creatorRow, landscapeStacked, backdropWide, studioExplorer, universeExplorer, collectionTimeline, grid, catalogue, discoverGrid, category, categoryPills, doubleFeature, editorialSplit, masonry, feed, collectionCards and playlistCarousel. Compatibility ids compactRow (alias compact), historyRow, metadataPoster and statusPoster remain accepted but are not new picker choices."],
      ["Specialized card slots", "A home grid can select the mangaFeaturedCard or mangaChapterCard for manga items; homeEpisodeCard is the episode-card option; chapterCard belongs to chapter context. These are not interchangeable with the home section component. Context support is checked separately."],
      ["Common properties", "A section may set title, icon, accent, seeAll, paginated, requiresAuth and monthSelector. Grid sections additionally use columns, rows, cardStyle, gridOrder and scrollDirection. Gallery-backed ids can read their family-specific values from params; only use keys supported by that component family."],
      ["The 199 gallery ids", "The complete list is grouped by the catalog's own categories in the code panel. It includes rich media, discovery, rankings, collections, watch cards, manga and reading cards, streaming/progress cards, episodes and reusable sections. The source catalog carries each id's label, category, description, renderer family and selectable state."],
      ["Compatibility and picker state", "An id marked selectable: false still resolves so existing layouts can keep rendering, but the visual picker will not recommend it for a new layout. Do not delete compatibility ids or repurpose an id whose meaning is already stored in user JSON."],
      ["Use only registered names", "LayoutRegistry validates every home component against LayoutComponentRegistry. A typo or a component copied from a web mockup is an error, not a graceful no-op. Run the extension validator and confirm the id in the core registry before publishing."],
    ],
    facts: [
      "The catalog currently contains 199 stable gallery component ids.",
      "Home section renderers and specialized card slots are different contexts.",
      "Compatibility-only ids remain valid but are not offered for new selection.",
      "Unknown home component ids fail layout validation.",
    ]
  },

  api: {
    title: "Driving Watchtower from another program.",
    body: "The app can open a small web server on your own machine, which lets scripts, external players and other devices use the same sources the app does.",
    marker: "23",
    code: `# Turn it on first, in settings
Settings → Advanced → Enable the server
# It then answers on port 4567
http://localhost:4567

GET  /sources     the sources you have installed
GET  /library     the entries in your library
POST /search      search a source
GET  /stream      resolve a video stream`,
    subsections: [
      ["What it is", "A small web server built into the app. It uses the same extensions and the same library as the interface, so anything it returns matches what you see on screen."],
      ["Turning it on", "It is off until you enable it, deliberately. Switch it on in advanced settings and note the port, then point your tool at that address."],
      ["What you can ask it", "Your installed sources, your library entries, a search against any source, and a resolved video stream. That is enough to drive a media centre or an external player."],
      ["Why you might want it", "Automation, a different front end, or letting another device on your network use the sources your phone has already set up."],
      ["Keep it on your own network", "The server has no password and is meant for a trusted local network. Do not expose it to the internet, where anyone could read your library."],
      ["How it relates to the command line", "The Linux command line exposes the same server, so a script written against the app works against a headless machine with no changes."]
    ],
    facts: [
      "The server is off until you enable it in settings.",
      "It listens on port 4567 by default.",
      "It uses the same sources and library as the interface.",
      "It is meant for a trusted local network, not the internet."
    ]
  },

  cli: {
    title: "Running Watchtower without a screen.",
    body: "The Linux command line runs the same engine as the app, so a server or a scheduled job can fetch, search and download without anyone watching.",
    marker: "24",
    code: `watchtower --cli help
watchtower --cli doctor --json
watchtower --cli extensions list --repo ./my-repo
watchtower --cli extensions test --repo ./my-repo --mode smoke
watchtower --cli source 1900000002 search --query "space opera" --json`,
    subsections: [
      ["What it is for", "Servers, SSH sessions and automated jobs. It is the same extension engine as the app with a text interface instead of screens, so it needs no graphical session."],
      ["Getting oriented", "Start with the help command, then run the doctor command to confirm the runtime can load and reach everything it needs before you trust it with a job."],
      ["Working with extensions", "List what a repository offers, validate it, and test a source against the live site. The test runs in stages, from simply loading the source to exercising its search and detail calls."],
      ["Calling a source directly", "You can invoke a single operation, such as a search, and get JSON back. That is what makes the command line useful for scripting and for debugging a source."],
      ["Serving over the network", "It can start the same web server the app exposes, which is how a remote client talks to a headless machine."],
      ["What it does not do yet", "Library, history and download-queue commands are not available headless, because the command line does not open the app's local databases. Those still need the app."]
    ],
    facts: [
      "The command line reuses the app's extension engine.",
      "The doctor command checks the runtime before you rely on it.",
      "A source can be tested in stages, from loading to search.",
      "Library and download commands still require the app."
    ]
  },

  deployment: {
    title: "Running Watchtower on your own server.",
    body: "For a home server or a small group, the Linux command line can run continuously and serve the same sources to every client on your network.",
    marker: "25",
    code: `# Unpack and install, choosing your own prefix
7z x watchtower-linux-x64-headless.7z -o./watchtower-linux
./watchtower-linux/install-linux-headless.sh ./watchtower-linux \\
  --prefix "$HOME/.local/share/watchtower"

# Then run it as a service and point clients at the port it serves`,
    subsections: [
      ["What you get", "A single folder holding the command line and the runtime files it needs. The installer script copies it into a prefix you choose and sets it up to run."],
      ["Installing it", "Run the installer with the folder you unpacked and the prefix you want. Using a prefix under your home directory avoids needing root for everything afterwards."],
      ["Running it as a service", "Because it can serve over HTTP, you can keep it running in the background and let other devices on your network use the sources it has configured."],
      ["What it is good for", "A media centre, a scheduled downloader, or one machine holding the sources so the others do not have to. It is the same engine, so sources behave identically."],
      ["Keeping it current", "Update it by unpacking a newer build and running the installer again. Your configuration lives in the prefix and is not overwritten by an upgrade."],
      ["If something will not run", "The doctor command exists for exactly this. Run it first and it will tell you whether the runtime, the network or a source is the problem."]
    ],
    facts: [
      "The headless build is a self-contained folder plus an installer.",
      "Installing under your home directory avoids needing root.",
      "It can serve over HTTP to other devices on your network.",
      "The doctor command diagnoses most startup failures."
    ]
  },

  troubleshooting: {
    title: "When something is not working.",
    body: "Almost every problem is one of a few things: a source that changed, a block from a website, a missing permission, or an extension that needs updating. Work through it in that order.",
    marker: "26",
    code: `# Narrow it down before changing anything
Does the site load in a browser?     if no, it is the source
Does another source work right now?  if yes, it is one source
Does the app work on mobile data?    if yes, it is your network

Then:  update the extension → open the site in the built-in browser
       → clear cookies and web data → check permissions`,
    subsections: [
      ["Start by narrowing it down", "Before touching any setting, decide whether the problem is the source, your network or your device. One source failing while others work points at that source; everything failing points at the app or the connection."],
      ["Update everything first", "Refresh your repositories and install any extension updates, then check for an app update. A large share of sudden breakage is a website that changed and an extension that has already been fixed but not yet installed."],
      ["A source stopped working", "This is the most common problem and usually the least serious. The website changed, the extension needs an update, and refreshing your repository is the fix. If no update exists yet, the extension author has not caught up."],
      ["Nothing loads at all", "If every source fails, look at the network instead. Try mobile data, another Wi-Fi network, and encrypted DNS in settings. A single network blocking everything, or a captive portal that has not been signed in to, is a frequent cause."],
      ["Opening a site to pass a check", "Some sites put up a verification before they answer. Open the source from Browse and use the built-in browser to load the site's own page, complete any check by hand, then close it and return to the app. Doing this once often clears the block for that source."],
      ["Cloudflare and endless reloading", "A site behind Cloudflare can keep reloading its check instead of letting you through. Try opening the site in the built-in browser again, changing your user agent in advanced settings, or waiting for the site to lower its protection. Some sources are deliberately hard to use from an app."],
      ["Clearing cookies and web data", "This resets the app's stored browsing state, including any logins. It is the correct fix for a check that is stuck, and it is worth doing before deciding a source is dead. You will need to sign in again afterwards if the source needs an account."],
      ["Changing your user agent", "The user agent is the string that identifies your device to a website, and some sites treat it as a bot signal. Replacing the default with a common browser string, then restarting the app, sometimes gets past a check that otherwise loops."],
      ["An extension will not install", "Android blocks installs from outside a store by default. Allow it for your file manager or browser, and if that option is missing, use Shizuku as an alternative route. A download that stopped partway produces a different message, so reinstall from scratch."],
      ["Content opens in the wrong place", "If a manga opens in the video player, or an episode in the reader, the extension declares the wrong content type. That is a fault in the extension, not in your settings, so report it rather than trying to fix it locally."],
      ["Getting crash logs and more detail", "Advanced settings can dump crash logs, and a logcat capture from your device shows what the app was doing in more depth. Both are worth attaching when you report a problem, since they turn a vague description into something that can be traced."],
      ["Storage and slow or laggy reading", "Slow loading is usually the site, your connection, or a rate limit rather than the app. Laggy reading comes from oversized images in a chapter. Switching source, freeing memory, or waiting out a rate limit are the practical fixes."],
      ["When it is not just you", "If other people see the same failure, it is the extension or the app rather than your setup. Check the project's issue tracker for the source before opening a new report, and include your app version and the exact error text."]
    ],
    facts: [
      "One broken source is almost always the source, not the app.",
      "A stale extension is the most common cause of sudden breakage.",
      "If every source fails, suspect the network before the app.",
      "Opening a site in the built-in browser clears many verification checks.",
      "Clearing cookies and web data resets a stuck check and any logins.",
      "Crash logs and logcat make a bug report traceable."
    ]
  },

  errors: {
    title: "Every error message, and what it means.",
    body: "Watchtower shows the raw error rather than hiding it, so the message itself is the fastest clue you have. Find yours below and try the first fix before changing anything else.",
    marker: "27",
    code: `403  Forbidden        the site is refusing automated requests
404  Not found        the page moved; the extension is out of date
429  Too many         you have been rate limited, wait before retrying
5xx  Server error     the site itself is broken, nothing to fix locally
1006 / 1020          an IP ban or a firewall rule set by the site owner
Failed to bypass Cloudflare   the anti-bot check could not be cleared
Unable to resolve host / connection failed / timeout   a network problem
CertPathValidatorException / chain validation failed   a bad certificate
Signature mismatch   an APK signed by someone else is already installed`,
    subsections: [
      ["403 Forbidden", "The website has decided your request looks automated and is refusing it. In practice this is anti-bot protection. Update the extension first, then open the source in the built-in browser once to clear any check the site is holding. If it still refuses, the source may have raised its protection or blocked your address."],
      ["404 Not found", "The page the extension expected has moved or been removed. This is a stale extension almost every time, so refresh your repository and update it. If there is no update yet, the extension author has not caught up with the site."],
      ["429 Too many requests", "You have been rate limited for making requests too quickly. Waiting is the actual fix, and reducing how often updates and downloads run is what stops it recurring. Retrying immediately only extends the block."],
      ["500, 502 and other 5xx errors", "The website itself is failing. There is nothing to fix on your device, and the right move is to wait and try again later. Checking the site in a browser confirms whether it is down for everyone."],
      ["1006 and 1020, the firewall codes", "1006 usually means a temporary IP ban, and 1020 means a firewall rule set by the site owner, often to block visitors from outside their country. Changing network can help with 1006; 1020 usually cannot be worked around."],
      ["Failed to bypass Cloudflare", "The site is protected by Cloudflare and the automatic check did not clear. Open the source's page in the built-in browser and complete any verification by hand, then return to the app. If the page reloads endlessly, see the troubleshooting page."],
      ["Unable to resolve host, connection failed, timeout", "These are network problems rather than faults in the source. Check that the device has internet access, try another network or mobile data, and enable encrypted DNS in settings. A captive Wi-Fi portal is a common cause."],
      ["Certificate validation failed", "The site's security certificate could not be validated. Check that the device date and time are correct, clear the app's cache and cookies, and try a different network. An expired certificate on the site is not something you can fix."],
      ["Storage and SD card errors", "Messages about a card, a path or an unavailable folder mean the download location has moved or become unreadable. Check free space, confirm the app still has permission to that folder, and switch back to internal storage if the card keeps failing."],
      ["App or extension will not install", "An APK signed by someone else, a truncated download and the wrong processor architecture each produce a different installer message. Remove the conflicting copy and download the file again, and make sure Android is allowed to install unknown apps."],
      ["When the error is not listed here", "Copy the exact message rather than paraphrasing it. The operation name and the URL inside it usually point straight at the failing step, and the troubleshooting page walks through narrowing it down."]
    ],
    facts: [
      "403 and 429 both mean the site is refusing you, for different reasons.",
      "A 404 is nearly always an extension that needs updating.",
      "A 5xx error is the website's fault, not your device's.",
      "1006 is a temporary ban; 1020 is a firewall rule you cannot bypass.",
      "Copy the exact message: the URL inside it names the failing step.",
      "Signature mismatches mean a differently signed copy is installed."
    ]
  },

  faq: {
    title: "Questions that come up often.",
    body: "Short answers to the things people ask before and after installing Watchtower, grouped by the part of the app they touch.",
    marker: "28",
    code: `Is it on a store?        No. Installable extensions conflict with store rules.
Is there an iOS build?   The code supports it; shipping it is not promised.
Does it work offline?    Downloads and local files do, browsing does not.
Does it sync?            No. Move your library with a backup file.
Is it free?              Yes, and the source is open under Apache 2.0.

Missing sources?   check the language filter and the NSFW toggle
Missing downloads? check the storage folder and rebuild the index`,
    subsections: [
      ["Why is it not on an app store?", "Because Watchtower installs extensions at runtime, which store policies do not allow. That is also why every install comes from an APK you choose to trust."],
      ["Is there an iOS version?", "The underlying code is cross-platform, but shipping on iOS is constrained by platform rules and is not promised. Android is the platform that gets everything first."],
      ["Does it work without internet?", "Anything you downloaded, plus local files, works completely offline. Browsing sources and searching do not, because those need the websites themselves."],
      ["Can I sync between devices?", "There is no automatic sync. You move your library with a backup file, and downloaded media has to be copied across separately."],
      ["Is it legal and is it free?", "Watchtower is free and open source, and contains no content of its own. What you add through extensions is your responsibility, which is why the app is careful to say it does not vet them."],
      ["Why can I not see an installed source?", "Two filters hide sources without deleting them. If the extension serves a language other than your device's, turn that language on in the source list filter. If it is an adult source, enable the option that shows NSFW sources in the list."],
      ["How do I uninstall an extension?", "Uninstall it from the extensions screen, or like any other app in Android settings. Your library entries stay put and simply show as unavailable until another source can serve them."],
      ["Why are my downloads not showing?", "Downloads are detected by folder. If the storage location moved, the SD card was removed, or the source or series was renamed on the site, the app cannot match the folder. Fix the location or rename the folder to match, then rebuild the downloads index."],
      ["Why does my photo gallery show covers and episodes?", "The app normally hides its media from the system gallery with a .nomedia file. If it did not, create one yourself and drop it in the downloads folder, or in the local source folder if that is what leaked."],
      ["Why is reading or loading slow?", "Slow loading is the site, your connection, or a rate limit, not the app being heavy. Laggy reading comes from oversized images in a chapter, so free up memory or pick a source with smaller scans."],
      ["Why are some episodes not displayed?", "Aside from network problems, the app can occasionally miss that a video exists. Leaving the player and opening the episode again usually registers it."],
      ["Why is a library update skipping entries?", "Entries with unwatched or unread content, entries you have not started, entries marked completed, and entries with no expected releases are skipped on purpose. That keeps a large library from hammering sources and getting the app blocked."],
      ["Why do library updates stop in the background?", "Some Android builds aggressively save battery and suspend background work. Exempt Watchtower from battery optimisation if updates only arrive when you open the app."],
      ["Why is taking a screenshot blocked?", "The privacy setting that hides the app in the task switcher also blocks screenshots. Turn that setting off if you want to capture the screen."],
      ["Something is broken, what now?", "Update your extensions first, since that fixes most breakage. If it persists, check the errors page for the exact message you are seeing, then the troubleshooting page, before assuming the app is at fault."]
    ],
    facts: [
      "Watchtower is not distributed through app stores.",
      "Downloaded content and local files work fully offline.",
      "There is no automatic sync between devices.",
      "A hidden source is usually the language filter or the NSFW toggle.",
      "Downloads are matched by folder name, so renaming one hides it.",
      "Updating extensions fixes most sudden breakage."
    ]
  },

  contribute: {
    title: "Helping make Watchtower better.",
    body: "The app, the extensions and this documentation are all open. There is useful work for people who write code and for people who do not.",
    marker: "29",
    code: `# Work on the app
git clone https://github.com/ferelking242/watchtower
cd watchtower && flutter pub get

# Work on this documentation
git clone https://github.com/ferelking242/watchtower-website`,
    subsections: [
      ["Ways to help", "Report bugs with the exact message you saw, improve a source, write an extension for a site nobody has covered, or translate this site into another language."],
      ["Working on the app", "Clone the repository, install the Flutter and Rust toolchains, and run the analyzer before you open a pull request. Go is only needed if you are changing the torrent server."],
      ["Working on the documentation", "The site is its own repository. Adding a language means adding one translation file; the layout and navigation already handle the rest."],
      ["Translating", "The app and this site both ship many languages, and a new one is additive. You never have to touch the design to add your own language."],
      ["Reporting a good bug", "Include your app version, the source you were using, the exact error text and whether other sources still work. That is usually enough to locate the fault."],
      ["Before a large change", "Open an issue or ask on Discord first. It saves you building something that does not fit how the project is heading."]
    ],
    facts: [
      "The documentation is a separate repository from the app.",
      "Adding a language means adding one file, not changing the layout.",
      "Reporting the exact error text saves the most time.",
      "Rust is needed for app work; Go only for the torrent server."
    ]
  },

  history: {
    title: "Everything you have already opened.",
    body: "History records what you watched and read, so you can jump back to something you did not finish without hunting for it again.",
    marker: "30",
    code: `History
├── Anime    what you watched, newest first
├── Manga    what you read
└── Filters  today · this week · this month

View   list or grid      Sort   by date or title`,
    subsections: [
      ["What it records", "Opening an episode or a chapter adds an entry with the time and how far you got. History is a record of activity, not a second library, so it fills up on its own as you use the app."],
      ["Filtering and sorting", "Narrow the list to today, this week or this month, switch between a list and a grid, and sort by date or title. These change what is shown and nothing else."],
      ["Getting back to a series", "Tap an entry to reopen the series where you left it. History is the fastest route back to something you sampled once and set aside."],
      ["Incognito and privacy", "While incognito mode is on, nothing new is recorded, so nothing you open appears in history. Turning it off resumes recording from that point."],
      ["Clearing history", "You can clear history without touching your library or your saved progress. Clearing it only removes the record of what you opened."],
      ["When history looks wrong", "An entry that shows as unwatched usually means the source changed the episode's address, so the app treats it as new. Removing the stray entry and refreshing the series tidies it up."],
    ],
    facts: [
      "History records activity, it does not replace your library.",
      "Filters narrow the view without deleting anything.",
      "Incognito mode stops new history from being written.",
      "Clearing history leaves your progress untouched.",
    ]
  },

  calendar: {
    title: "What is releasing, and when.",
    body: "The calendar shows upcoming chapters and episodes from your library, so you can see at a glance what is due today and what is coming later.",
    marker: "31",
    code: `Calendar      a month view of upcoming releases
Schedule      a week view with your statuses

Statuses   watching · planning · completed · paused
Options    week starts Monday · indicate watched`,
    subsections: [
      ["The month view", "Days with releases are marked, and tapping a day jumps to that date's list. It answers what is out this week without opening a single series."],
      ["The weekly schedule", "The schedule lays out a week with the cover of each upcoming release, which reads better than a dense month grid on a phone."],
      ["Filtering by status", "Show only the statuses you care about, so completed and paused series do not clutter a view you use to plan the week."],
      ["What the dates mean", "A date is when the source last said something is expected, not a promise. Sources that do not publish dates simply do not appear."],
      ["Indicating watched entries", "An option marks what you have already seen on the schedule, so a week view doubles as a checklist."],
      ["When the calendar is empty", "An empty calendar usually means the sources you follow do not publish release dates. That is a limit of the source, not a fault in the app."],
    ],
    facts: [
      "Release dates come from the sources, not from the app.",
      "The schedule can be filtered by series status.",
      "An option marks entries you have already watched.",
      "A source without dates will not appear at all.",
    ]
  },

  "mass-migration": {
    title: "Moving many series at once.",
    body: "When a source dies, mass migration moves a whole group of library entries to a working source in one pass, instead of editing them one by one.",
    marker: "32",
    code: `1. choose the broken source
2. pick the destination source
3. review each match
4. apply, then read the summary`,
    subsections: [
      ["When to use it", "A source that has stopped working, or one you want to move away from, is the case for mass migration. Migrating keeps your progress and your categories."],
      ["Choosing source and destination", "Pick the group of entries to move and the source to move them to. The app searches the destination for each title on its own."],
      ["Reviewing the matches", "Every match is shown before anything changes, so you can accept the good ones and skip the wrong ones. Matching by title is never perfect."],
      ["Applying the change", "Applying rewrites each entry to point at the new source and carries your progress across. Series with no match are left untouched."],
      ["Reading the summary", "The run ends with counts of what moved, what was skipped and what failed. A failed item is usually a title the destination does not carry."],
      ["When nothing matches", "If most titles fail to match, the destination is a poor fit and a different source is the better answer. Nothing is lost by stopping, because changes only happen when you apply."],
    ],
    facts: [
      "Mass migration moves a group of entries in one pass.",
      "Every match is reviewed before anything is changed.",
      "Your progress and categories carry across.",
      "Nothing changes until you apply the results.",
    ]
  },

  statistics: {
    title: "Your library in numbers.",
    body: "Statistics summarise what you have watched and read: totals, time spent, status breakdown and the genres you return to most.",
    marker: "33",
    code: `Overview     entries · chapters · hours
Breakdown    watching · completed · on hold · dropped
Charts       activity over time · top genres · downloads`,
    subsections: [
      ["What is counted", "Totals per media type, the number of chapters or episodes, the time spent, and how your library splits across statuses."],
      ["Time and activity", "The time card estimates how long you have spent watching and reading, and the activity chart shows how that is spread over recent weeks."],
      ["Top genres", "The genres you actually spend time on, which is often not the ones you would guess. It is a good way to find a new series in a lane you already like."],
      ["Per media type", "Statistics are split by media type, so anime and manga totals are never mixed together."],
      ["Where the numbers come from", "Everything is computed from your own library and history on the device. Nothing is uploaded anywhere."],
      ["When it says there is no data", "A brand new install has nothing to summarise yet. The figures appear once you have watched or read something and it has been recorded."],
    ],
    facts: [
      "Statistics are computed on the device, from your own data.",
      "Totals are kept separate for each media type.",
      "The activity chart shows how reading and watching spread over time.",
      "A new install shows no data until something is recorded.",
    ]
  },

  anime: {
    title: "Watching anime, with intro skipping.",
    body: "Anime opens in the video player with one extra: intro and ending skipping, powered by AniSkip when a title can be matched.",
    marker: "34",
    code: `Player      the same controls as any video
AniSkip     skip opening and ending automatically
Discovery   recommended, popular and by genre`,
    subsections: [
      ["The anime player", "Episodes play in the same player as everything else, with quality, audio, subtitles and speed in the usual sheets."],
      ["Skipping intros and endings", "With intro skipping on, a button counts down during the opening and jumps past it, and the ending is handled the same way. It is a setting, so it can be turned off."],
      ["Why a title cannot be matched", "Skipping needs to identify the series and episode. A title that cannot be identified is simply played without the button, rather than failing."],
      ["The skip timeout", "A short countdown gives you time to cancel before the jump happens. Its length is configurable if the default feels rushed."],
      ["Discovering anime", "A discovery screen offers recommended, popular, upcoming, recently updated and top rated lists, plus genre rows, so you can find something without a source open."],
      ["When discovery shows an error", "The discovery rows come from an external service rather than your sources. When that service is unreachable the rest of the app is unaffected, and a source still works normally."],
    ],
    facts: [
      "Intro skipping needs the series and episode to be identified.",
      "Skipping is a setting and can be turned off.",
      "The skip countdown length is configurable.",
      "Discovery uses an external service; sources work regardless.",
    ]
  },

  music: {
    title: "Music, with your own library.",
    body: "Watchtower plays music from music extensions and from your own collection, with albums, artists, lyrics and scrobbling in one place.",
    marker: "35",
    code: `Music
├── Home       recent and recommended
├── Library    albums and artists you keep
├── Player     queue, shuffle, repeat
└── Lyrics     synced when the track has them

Connect      Last.fm scrobbling`,
    subsections: [
      ["Where the music comes from", "Music extensions provide tracks and collections, and a local library covers files you already own. Both behave like normal sources."],
      ["Albums and artists", "Music is browsed by album and artist as well as by track, which is what makes a music library usable rather than a long list of files."],
      ["The player", "A queue with shuffle and repeat, a now-playing sheet, and cover art. Playback continues while you move around the app."],
      ["Lyrics", "Tracks that carry lyrics show them in a sheet, and synced lyrics follow the position of the track where the source provides timing."],
      ["Scrobbling", "Connecting Last.fm records what you play to your profile, in the same way tracking records what you watch."],
      ["When a track will not play", "A music source that has stopped working behaves like any other broken source. Update the extension, and expect a service-based source to be unavailable while that service is down."],
    ],
    facts: [
      "Music comes from extensions or from files you already own.",
      "Albums and artists are first-class, not just tracks.",
      "Last.fm scrobbling is available when you connect it.",
      "Lyrics follow the track when the source provides timing.",
    ]
  },

  novels: {
    title: "Reading novels, and having them read to you.",
    body: "Novels open in a text reader rather than the image reader, with themes, progress and an optional read-aloud voice.",
    marker: "36",
    code: `Novel reader
├── text, not page images
├── themes and font controls
├── progress per chapter
└── read aloud (text to speech)`,
    subsections: [
      ["How novels open", "A source that declares novel content opens in the text reader automatically, so you never have to choose the right reader by hand."],
      ["Reading comfort", "Font size, line spacing and theme are adjustable, because a wall of text is not the same reading experience as a page of images."],
      ["Remembering your place", "The novel reader tracks your position in each chapter and returns you to it, the same way the image reader does."],
      ["Reading aloud", "Text to speech can read a chapter aloud using the voices installed on your device, which is useful on a commute or while doing something else."],
      ["When a chapter is empty", "A novel chapter that opens blank usually comes from a source that returned text in a shape the reader cannot show. Updating the extension is the first thing to try."],
      ["Novels versus manga", "A novel is text and a manga is images, so a source has to declare the right type for the content to open correctly. A wrong type sends it to the wrong reader."],
    ],
    facts: [
      "Novels open in a text reader, chosen by content type.",
      "Font, spacing and theme are adjustable.",
      "Read-aloud uses the voices installed on your device.",
      "A blank chapter usually means the source returned unusable text.",
    ]
  },

  games: {
    title: "Games as another kind of source.",
    body: "Watchtower can list games through game extensions and platforms, using the same browse and search you already know.",
    marker: "37",
    code: `Games
├── Extensions   game sources you have added
├── Platforms    grouped by platform
└── Browse       the same search as other media`,
    subsections: [
      ["What a game source is", "A game extension lists titles the same way a manga extension lists series, and opens the same browse and search screens."],
      ["Platforms", "Games are grouped by platform, which keeps a catalogue navigable when a source covers many systems."],
      ["Browsing and searching", "Search fans out across enabled game sources exactly as it does for the other media types, so one query covers all of them."],
      ["Installing game extensions", "They install from the same repositories as everything else, and appear under games once installed."],
      ["When nothing is listed", "An empty games screen means no game extension is installed. Add a repository that provides one, then refresh."],
      ["Keeping it separate", "Game entries do not mix with your reading and watching, so a large games catalogue never clutters your library."],
    ],
    facts: [
      "Game sources install from the same repositories as everything else.",
      "Games are grouped by platform.",
      "Search covers every enabled game source at once.",
      "Game entries stay separate from your library.",
    ]
  },
};

export default en;
