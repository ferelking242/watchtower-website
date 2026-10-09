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
   Paste a URL ending in index.min.json
3. Install the extensions you want, then refresh
4. Browse a source and tap "Add to library"
5. Play or read

# Watchtower never bundles content. No source means an empty library.`,
    subsections: [
      ["What you need", "An Android 8.0 or newer phone or tablet for the full app. Any Linux, macOS or Windows machine can run the headless command line instead, with no graphical session. One thing is not optional: a source repository URL, because Watchtower contains no content of its own."],
      ["Add your first source", "Open More, then Extensions, then Repositories. Paste a repository URL that ends in index.min.json and confirm. The extension list fills in as soon as the index loads."],
      ["Install extensions", "Each extension teaches Watchtower one website. Tap install beside the ones you want, allow installation from unknown sources if Android asks, and the sources appear in Browse."],
      ["Build your library", "Open a source, find a series and tap Add to library. From then on Watchtower tracks your progress, checks for new chapters and keeps the entry in one place."],
      ["Pick your media types", "Watchtower handles manga, anime, novels and music side by side. Each type opens in its own reader or player, chosen automatically from what the extension declares."],
      ["Common first-run surprises", "An empty Browse screen means no extension is installed yet, not a broken app. A repository that will not load is usually a stale URL or a captive network portal."]
    ],
    facts: [
      "Watchtower ships with no content. Sources are yours to choose.",
      "Extensions are ordinary JavaScript run in a sandbox.",
      "Your library lives on your device, not on a Watchtower server.",
      "Android 8.0+ is the floor for the mobile app."
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
      ["Keep it updated", "Watchtower tells you when a new version exists, and you install it the same way as the first time. Your library and settings carry over untouched."]
    ],
    facts: [
      "Android is the only platform with published release builds.",
      "The headless binary is built for Linux x86_64.",
      "Rust is required to build from source; Go is optional.",
      "Preview and stable installs share the same data, so switching keeps your library."
    ]
  },

  "adding-sources": {
    title: "Where your content comes from.",
    body: "Watchtower has two kinds of source. Online sources arrive as extensions from a repository you add. Offline sources are folders on your own device. Most people use both.",
    marker: "03",
    code: `# A repository is a JSON index. Its address must end in index.min.json
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
      ["Add a repository", "Go to More, then Extensions, then Repositories, and paste the repository URL. The app fetches the index and lists every extension it contains. You can add several repositories at once."],
      ["Install what you need", "Refresh the list, then tap install next to an extension. Android may ask for permission to install unknown apps the first time. Installed extensions show up immediately in Browse."],
      ["Keep sources fresh", "Refresh a repository whenever you want newer extension versions. An update replaces the extension in place and keeps its settings, so there is nothing to reconfigure."],
      ["Use your own files", "Point Watchtower at a folder of manga or anime you already own and it becomes a normal source. No repository, no network, no account."],
      ["Only trust what you know", "A repository can serve anything, and an extension runs with the same access as the app. Treat an unknown repository the way you would treat an unknown installer."],
      ["When a repository fails", "A URL that will not load is usually expired, blocked, or copied without its index path. Check that the address ends in index.min.json before assuming the repository is gone."]
    ],
    facts: [
      "A repository is only a JSON file hosted on a web server.",
      "Updates keep your source preferences.",
      "Local folders work with no network at all.",
      "Watchtower does not check or approve third-party repositories."
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
      ["When an entry breaks", "If a series opens empty or loses its cover, its source changed underneath it. Refresh the entry, and migrate it to another source if the problem persists."]
    ],
    facts: [
      "Completed series are left alone by background updates.",
      "A series can belong to more than one category.",
      "Progress is tracked per chapter or episode, not per series.",
      "Removing a series from the library does not delete your history."
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
      ["Why results differ", "Each source indexes its own catalogue, so a title may be complete on one and partial on another. Comparing two sources before committing is normal."]
    ],
    facts: [
      "Search fans out to every enabled source at once.",
      "Sources without a popular list still work through search.",
      "Migration moves your progress, not your downloaded files.",
      "Extension language tags drive the language filter."
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
      ["When an extension stops working", "Websites change, and a source breaks with them. That is usually a broken extension, not a broken app, and the fix arrives as an update."]
    ],
    facts: [
      "Extensions are JavaScript, run in a sandbox inside the app.",
      "One extension covers one website.",
      "Installing and updating never touches your library.",
      "A source that suddenly fails is usually a website change."
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
      ["Keeping the catalogue current", "Refresh your repositories every so often. New extensions appear and broken ones get fixes, but nothing arrives until you ask for it."]
    ],
    facts: [
      "Updates preserve the settings you set on a source.",
      "Uninstalling an extension keeps your library entries.",
      "Extensions are grouped by language, not by repository.",
      "Refreshing a repository is how you see new and updated extensions."
    ]
  },

  "extensions-devkit": {
    title: "Building your own source.",
    body: "If you want to add a website nobody has covered yet, you can write an extension yourself. It needs one file describing the site and one file implementing the calls.",
    marker: "06b",
    code: `# The smallest working source
my-source/
├── index.js          the calls Watchtower makes
└── manifest.json     name, version, language, content type

# Run one call and see the raw result, without rebuilding the app
watchtower --cli extensions test --repo ./my-repo --mode smoke`,
    subsections: [
      ["What you need to write", "Two files: a manifest that names the extension and declares its language and content type, and an entry file with the calls that fetch listings, search, details, chapters and pages."],
      ["Start from an existing source", "The fastest route is to copy a working extension for a similar site and change the URLs and the parsing. The shape of the calls stays the same."],
      ["Testing without the app", "The command line can run a single call and print exactly what came back. That is much faster than installing the extension on a device every time you change a line."],
      ["What your code can use", "Requests, an HTML parser and a JSON parser. There is no file access, no database and no way to reach the app's own screens."],
      ["When output looks wrong", "If a field is empty, the parser is almost always the cause rather than the runtime. Compare what you return against what the source contract expects."],
      ["Before you publish", "Run the extension against the live site, check the search, listing and page calls, and confirm the content type is correct so it opens in the right reader or player."]
    ],
    facts: [
      "A working source needs only a manifest and an entry file.",
      "The command line can test one call in isolation.",
      "Extensions can reach the network and parse pages, nothing more.",
      "The content type you declare decides which reader or player opens."
    ]
  },

  "extensions-publishing": {
    title: "Sharing a source with other people.",
    body: "Once your extension works, publishing it means putting it in a repository that others can add. A repository is a small JSON file plus the extension packages it lists.",
    marker: "06c",
    code: `# The repository index, hosted over HTTPS
{
  "name": "My repository",
  "extensions": [
    { "name": "Example", "pkg": "eu.kanade.example",
      "version": "1.4.2", "apk": "example-v1.4.2.apk" }
  ]
}`,
    subsections: [
      ["What a repository is", "A folder of extension packages and one JSON index that lists them. Host the folder anywhere that serves HTTPS, and give people the address of the index file."],
      ["Publishing an update", "Raise the version number, rebuild the package, and update the version in the index. Watchtower compares that number, so an unchanged version is an update nobody receives."],
      ["Keeping the name stable", "The package name is the extension's identity. Change it and users get a second, separate extension instead of an update to the first."],
      ["Be clear about trust", "People installing from your repository are running your code with the app's access. Say who you are, and keep the repository somewhere you control."],
      ["Maintaining a source", "Websites change without warning, so expect to republish. Watch for reports that a source stopped working and fix it before users drift away."],
      ["The index address matters", "The address you hand out must point at index.min.json. Any other path leaves people staring at a repository that refuses to load."]
    ],
    facts: [
      "A repository is an HTTPS folder plus one JSON index.",
      "The version in the index is what tells users an update exists.",
      "A stable package name is what makes an update an update.",
      "Expect to republish whenever the target website changes."
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
      ["Hiding files from the gallery", "Drop a .nomedia file in the folder so covers and episodes stay out of your phone's photo app."]
    ],
    facts: [
      "Both CBZ archives and plain image folders are read as chapters.",
      "Episode order follows the filename, so number your files.",
      "A .nomedia file keeps local media out of the system gallery.",
      "Local sources work with no network connection at all."
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
      ["Saving your place", "Progress is written continuously while you watch, so closing the app or losing power does not lose your position."]
    ],
    facts: [
      "Playback uses a hardware-accelerated decoder by default.",
      "Gestures handle brightness, volume and seeking.",
      "Progress is saved continuously, not only when you exit.",
      "An external player is the fallback for unsupported codecs."
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
      ["Novels", "Text novels use the same entry in your library but open in a text reader instead of an image viewer, chosen automatically from the extension's content type."]
    ],
    facts: [
      "Long strip suits vertical webtoons and ignores page width.",
      "The reader remembers the page you reached per chapter.",
      "Zoom is off in long strip until you turn it on.",
      "Novels open in a text reader, not the image reader."
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
      ["If updates seem to stop", "Android battery optimisation can suspend background work. Exempt Watchtower from battery restrictions if updates only arrive when you open the app."]
    ],
    facts: [
      "Updates can be limited to the categories you choose.",
      "Completed series are skipped by default.",
      "Heavy update traffic can get a source to block the app.",
      "Battery optimisation can delay background updates."
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
      ["What a backup does not cover", "Backup files carry your library and settings, never your downloaded media. Those have to be moved across separately."]
    ],
    facts: [
      "Only one series per source downloads at a time, on purpose.",
      "Downloaded media is not included in a backup.",
      "Internal storage is faster and more reliable than an SD card.",
      "Renaming the downloads folder breaks detection."
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
      ["Watching offline", "Progress you make without a connection is queued and uploaded the next time you are online, so a flight does not lose your history."]
    ],
    facts: [
      "Tracking is set up per series, not for the whole library.",
      "Progress only flows outward, never back in.",
      "A threshold decides when an episode counts as watched.",
      "Offline progress uploads when you reconnect."
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
      ["Moving to a new device", "Back up, install on the new device, restore, then log in to trackers and reinstall extensions. Downloads have to be copied across separately."]
    ],
    facts: [
      "A backup is the only way to move a library between devices.",
      "Downloaded media must be moved separately.",
      "Custom covers are not part of a backup.",
      "Automatic backups are the safest defence against a bad update."
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
      ["Why internal storage is better", "Downloads on internal storage are faster and far less likely to become unreadable than on a removable card, which can be unmounted or corrupted."]
    ],
    facts: [
      "Backups, downloads and local sources share one storage location.",
      "Android needs explicit permission for that folder.",
      "A .nomedia file hides downloaded media from the gallery.",
      "Internal storage is more reliable than an SD card."
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
      ["Before you report a problem", "Note your app version, the source that failed and what the screen showed. That turns a vague report into something that can actually be fixed."]
    ],
    facts: [
      "The app-switcher privacy setting must be off to take screenshots.",
      "Incognito stops history recording, not progress.",
      "Crash logs stay on your device and are never sent automatically.",
      "Encrypted DNS often fixes a source that fails on one network only."
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

  "extension-contract": {
    title: "What a source has to provide.",
    body: "For an extension to work, it must answer a fixed set of questions: what is popular, what is new, what a search returns, what a series contains, and where its pages and streams are.",
    marker: "21",
    code: `Listing     popular      latest      search
Details     series details      chapters
Content     page images      video streams
Optional    filters      source settings`,
    subsections: [
      ["Listing and search", "These calls return the browsable lists: what is popular, what was released recently, and what a search for a term turns up. They are the minimum for a source to be usable."],
      ["Series and chapters", "One call fills in the details of a series, and another returns its ordered chapters or episodes. Without these, a source can be searched but not opened."],
      ["Pages and video", "For reading, a call returns the image addresses of a chapter. For video, a call returns the available streams along with the quality and any headers they need."],
      ["Optional extras", "Filters, source-specific settings and custom image handling are optional. A source without them still works; it simply offers less to configure."],
      ["Why content type matters", "The type an extension declares decides whether a result opens in the manga reader, the video player or the novel reader. Getting it wrong sends content to the wrong screen."],
      ["What is not required", "Everything beyond listing and search is a bonus. A minimal source that only lists and searches is a perfectly good source."]
    ],
    facts: [
      "Listing and search alone make a browsable source.",
      "Details and chapter calls are what let a series open.",
      "Filters and source settings are optional.",
      "Content type decides which reader or player opens."
    ]
  },

  "ui-schema": {
    title: "Letting a source design its own home screen.",
    body: "Some sources present a rich front page: banners, rows of covers, a featured block. Instead of writing app code for each one, an extension can describe that layout itself.",
    marker: "22",
    code: `{
  "type": "list",
  "items": [
    { "type": "card", "title": "Trending", "image": "$cover" },
    { "type": "row",  "items": ["$latest"] }
  ]
}`,
    subsections: [
      ["What it is for", "A source can describe its home screen as data: rows, cards and banners, each pointing at content the source provides. The app draws it with its normal widgets."],
      ["Why it is a good idea", "It means a new website can have a tailored front page without a new app release, and the page still looks native rather than like a web page in a box."],
      ["What can be described", "Lists, rows, cards, banners and text blocks are the building blocks. That covers the layout of almost every source home screen in practice."],
      ["When a source has none", "If an extension does not describe a layout, Watchtower builds one from the source's listings. Nothing breaks; the page is simply plainer."],
      ["What it cannot do", "The description is data, not code. It cannot run logic, reach your files or change how the app itself behaves, which is exactly why it is safe to accept."],
      ["For people writing sources", "Think of it as a layout file rather than a program. You are telling the app what to show, not how to draw it."]
    ],
    facts: [
      "A source can describe its own home screen as data.",
      "Unknown building blocks are ignored rather than breaking the page.",
      "A default layout is used when a source provides none.",
      "The description cannot run code or reach your files."
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

Then:  update the extension → clear the app's web data → check permissions`,
    subsections: [
      ["Start by narrowing it down", "Before touching any setting, decide whether the problem is the source, your network or your device. One source failing while others work points at that source; everything failing points at the app or the connection."],
      ["A source stopped working", "This is the most common problem and usually the least serious. The website changed, the extension needs an update, and refreshing your repository is the fix. If no update exists yet, the extension author has not caught up."],
      ["Nothing loads at all", "If every source fails, look at the network instead. Try mobile data, another Wi-Fi network, and encrypted DNS in settings. A single network blocking everything is a frequent cause."],
      ["A site keeps asking for verification", "Some sites put up a check before they will answer. Opening the source's own page in the built-in browser once usually clears it; clearing the app's stored web data resets a check that is stuck."],
      ["An extension will not install", "Android blocks installs from outside a store by default. Allow it for your file manager or browser, and if that option is missing, use Shizuku as an alternative route."],
      ["Content opens in the wrong place", "If a manga opens in the video player, or an episode in the reader, the extension declares the wrong content type. That is a fault in the extension, not in your settings."]
    ],
    facts: [
      "One broken source is almost always the source, not the app.",
      "A stale extension is the most common cause of sudden breakage.",
      "If every source fails, suspect the network before the app.",
      "Installing extensions needs Android's permission for unknown apps."
    ]
  },

  errors: {
    title: "What the error messages mean.",
    body: "Watchtower surfaces a handful of errors far more often than any others. Here is what each one is actually telling you, and the first thing worth trying.",
    marker: "27",
    code: `403  Forbidden        the site is refusing automated requests
429  Too many         you have been rate limited, wait
404  Not found        the page moved; the extension is out of date
5xx  Server error     the site itself is broken, nothing to fix locally
Timeout              the network or the source is too slow
Signature mismatch   an APK signed by someone else is already installed`,
    subsections: [
      ["403 Forbidden", "The website has decided your request looks automated and is refusing it. In practice this is anti-bot protection. Try updating the extension first, then opening the source in the built-in browser to clear any check the site is holding."],
      ["429 Too many requests", "You have been rate limited for making requests too quickly. Waiting is the actual fix, and reducing how often updates run is what stops it recurring. Retrying immediately only extends the block."],
      ["404 Not found", "The page the extension expected has moved or been removed. This is a stale extension almost every time, so refresh your repository and update it."],
      ["A 500 or other server error", "The website itself is failing. There is nothing to fix on your device, and the right move is to wait and try again later."],
      ["A timeout or a request that hangs", "Either your connection is poor or the source is overloaded. Confirm the site loads in a browser, then try a different network before blaming the extension."],
      ["Installation errors", "An APK signed by someone else, a truncated download and the wrong processor architecture each produce a different installer message. Removing the conflicting app and downloading the file again resolves the first two."]
    ],
    facts: [
      "403 and 429 both mean the site is refusing you, for different reasons.",
      "A 404 is nearly always an extension that needs updating.",
      "A 5xx error is the website's fault, not your device's.",
      "Signature mismatches mean a differently signed copy is installed."
    ]
  },

  faq: {
    title: "Questions that come up often.",
    body: "Short answers to the things people ask before and after installing Watchtower.",
    marker: "28",
    code: `Is it on a store?        No. Installable extensions conflict with store rules.
Is there an iOS build?   The code supports it; shipping it is not promised.
Does it work offline?    Downloads and local files do, browsing does not.
Does it sync?            No. Move your library with a backup file.
Is it free?              Yes, and the source is open under Apache 2.0.`,
    subsections: [
      ["Why is it not on an app store?", "Because Watchtower installs extensions at runtime, which store policies do not allow. That is also why every install comes from an APK you choose to trust."],
      ["Is there an iOS version?", "The underlying code is cross-platform, but shipping on iOS is constrained by platform rules and is not promised. Android is the platform that gets everything first."],
      ["Does it work without internet?", "Anything you downloaded, plus local files, works completely offline. Browsing sources and searching do not, because those need the websites themselves."],
      ["Can I sync between devices?", "There is no automatic sync. You move your library with a backup file, and downloaded media has to be copied across separately."],
      ["Is it legal and is it free?", "Watchtower is free and open source, and contains no content of its own. What you add through extensions is your responsibility, which is why the app is careful to say it does not vet them."],
      ["Something is broken, what now?", "Update your extensions first, since that fixes most breakage. If it persists, check the errors page for the message you are seeing before assuming the app is at fault."]
    ],
    facts: [
      "Watchtower is not distributed through app stores.",
      "Downloaded content and local files work fully offline.",
      "There is no automatic sync between devices.",
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
  }
};

export default en;
