// Indonesian prose overlay. Code blocks and markers come from en.js.
const id = {
  overview: {
    title: "Peta lengkap aplikasi Watchtower.",
    body: "Watchtower menggabungkan klien Flutter, pustaka lokal, ekstensi JavaScript, binding native, dan server headless opsional dalam satu runtime yang bisa di-host sendiri.",
    subsections: [
      ["Apa itu Watchtower", "Hub media lintas platform untuk anime, manga, serial, musik, novel, dan game. Aplikasi ini mengindeks file lokal, melacak progres, mengunduh konten, dan menjalankan sumber komunitas melalui runtime JavaScript yang dapat diperluas."],
      ["Dua runtime, satu kontrak", "Aplikasi terpasang mengekspos server HTTP tertanam di port 4567. CLI headless memakai ulang mesin Flutter dan QuickJS yang sama sehingga CI, server, dan SSH bisa menjalankan sumber tanpa sesi grafis."],
      ["Untuk siapa panduan ini", "Untuk penulis sumber yang menulis ekstensi, pengguna yang menjalankan server headless, dan kontributor aplikasi Flutter. Setiap bagian menjelaskan apa yang wajib dan apa yang opsional."]
    ],
    facts: [
      "Klien Flutter lintas platform untuk anime, manga, musik, novel, game, dan pemutaran.",
      "Pengindeks lokal, pustaka, riwayat, favorit, kalender, dan pelacakan progres.",
      "Ekstensi QuickJS, unduhan, anti-bot, binding Rust, dan server torrent Go."
    ]
  },
  "app-map": {
    title: "Aplikasi yang terdiri dari permukaan yang bisa dikomposisi.",
    body: "Repositori memisahkan layar fitur, layanan data, dan runtime eksekusi. Peta ini mengikuti konten dari sumber hingga pemutaran dan pustaka lokal.",
    subsections: [
      ["Alur konten", "Ekstensi mengembalikan model bersama. Provider Riverpod memaginasi, layar mengubahnya menjadi kartu, dan Isar menyimpan riwayat, favorit, serta file terindeks."],
      ["Routing", "GoRouter menghubungkan onboarding, beranda, pencarian, detail, pemutaran, pustaka, pengaturan, dan modul khusus tanpa mengikat kontrak sumber."],
      ["Runtime", "Flutter memegang antarmuka, QuickJS/Dart menjalankan sumber, Rust dan Go memberi kemampuan native, dan CLI headless meniru runtime di sisi server."],
      ["Status dan penyimpanan", "Riverpod menggerakkan aplikasi utama, Isar adalah basis data utama, dan Hive menyimpan preferensi. Modul musik dan penjelajah file mempertahankan tumpukan lama mereka, terpisah dari kontrak sumber."]
    ],
    facts: [
      "Modul antarmuka dikelompokkan per domain media, bukan per penyedia.",
      "Layanan lintas fungsi menangani cache, unduhan, anti-bot, sinkronisasi, dan diagnostik.",
      "Layar dapat bekerja dengan sumber jarak jauh, file lokal, atau server headless."
    ]
  },
  "content-types": {
    title: "Manga, watch, musik: satu model bersama.",
    body: "ItemType mengklasifikasi keluarga sumber; isi konkret tetap di model manga, bab, halaman, video, dan trek. Jadi ekstensi watch bisa mencakup anime, film, atau serial tanpa renderer native baru.",
    subsections: [
      ["Manga", "Bab memakai getPageList(url) untuk menghasilkan halaman pembaca. Metadata berbagi nama, gambar, deskripsi, penulis, artis, dan genre."],
      ["watch: anime, film, serial", "Episode memakai getVideoList(url). Video membawa URL, kualitas, URL asli, header, subtitle, dan trek audio. Film/serial/anime adalah metadata konten, bukan runtime terpisah."],
      ["Musik dan novel", "Musik memakai ulang permukaan pencarian dan detail dengan trek, album, artis, dan playlist; novel memakai detail, bab, dan pembaca HTML/teks."],
      ["Game dan plugin", "Game menyediakan permukaan penemuan khusus. Plugin mewakili ekstensi utilitas atau pengunduh yang memakai manifes dan skema UI native."]
    ],
    facts: [
      "Kompatibilitas berasal dari kontrak data, bukan layar yang dikodekan per situs.",
      "Filter, preferensi, komentar, rekomendasi, dan daftar khusus bersifat opsional.",
      "itemType disimpan di Source dan memilih pustaka, pemutar, serta riwayat."
    ]
  },
  "extension-runtime": {
    title: "JavaScript berjalan di runtime terkendali.",
    body: "DartExtensionService memuat kode sumber, menyuntikkan MProvider, dan menjalankannya di QuickJS. Bridge menyediakan jaringan, DOM, ekstraktor, preferensi, dan model Flutter tanpa membuka aplikasi native.",
    subsections: [
      ["Pemuatan", "SourceCodeLanguage membedakan Dart, JavaScript, dan Mihon. Loader juga memasang atau menghapus ekstensi privat Android melalui kanal native."],
      ["Keamanan dan isolasi", "Panggilan sumber melewati bridge terkendali. Server headless menambahkan registri, cache, autentikasi, dan pembatasan laju sebelum eksekusi."],
      ["Siklus hidup", "Sumber ditemukan di katalog, dipasang atau diaktifkan, dijalankan sesuai permintaan, dan preferensi, cookie, cache, serta layout-nya dapat direset dari pengaturan ekstensi."],
      ["Penanganan kesalahan", "Panggilan bridge yang gagal mengembalikan error bertipe ke Dart alih-alih menjatuhkan isolate. Kegagalan dicatat dengan nama operasi dan URL penyebab, sehingga diagnostik menunjuk langkah tepat."]
    ],
    facts: [
      "QuickJS mengembalikan objek terserialisasi ke model Dart.",
      "Kode ekstensi dapat mendefinisikan header, filter, preferensi, dan daftar khusus.",
      "Kompatibilitas Mihon memungkinkan penggunaan ulang ekstensi manga yang ada."
    ]
  },
  "extension-types": {
    title: "Setiap keluarga ekstensi punya permukaannya.",
    body: "Jenis sumber memilih layar dan aksi yang tersedia. Mesin JS yang sama dibagikan, sementara hasil ditampilkan melalui pembaca manga, pemutar watch, audio, novel, game, atau plugin.",
    subsections: [
      ["Manga", "Sumber bab dan halaman dengan filter katalog, riwayat baca, dan impor lokal."],
      ["watch", "Sumber video untuk anime, film, dan serial: detail, episode, kualitas, subtitle, trek audio, dan ekstraktor pemutar."],
      ["Musik", "Katalog audio dan ekstensi metadata: album, artis, trek, pencarian, playlist, dan statistik."],
      ["Novel, game, plugin", "Novel memakai ulang pembaca teks/HTML; game punya layar penemuan; plugin utilitas mengikuti manifest.json dan ui/schema.json."]
    ],
    facts: [
      "watch adalah keluarga penggunaan: itemType-nya bisa anime atau sumber video lain yang kompatibel.",
      "Renderer generik memakai kartu, paginasi, dan layout yang sama untuk sumber kompatibel.",
      "Kemampuan opsional mencegah menampilkan aksi yang tidak diimplementasikan sumber."
    ]
  },
  "extension-contract": {
    title: "Kontrak JS, metode per metode.",
    body: "ExtensionService menetapkan minimum bersama. Metode opsional memperkaya pengalaman tanpa merusak sumber yang tidak mengimplementasikannya.",
    subsections: [
      ["Navigasi katalog", "getPopular, getLatestUpdates, dan search mengembalikan MPages dengan list dan hasNextPage. Filter berasal dari getFilterList dan preferensi disimpan per sumber."],
      ["Detail dan pemutaran", "getDetail mengembalikan MManga. Sumber manga mengekspos getPageList; sumber watch mengekspos getVideoList dan dapat memberi kualitas, header, subtitle, serta audio."],
      ["Perluasan kontrak", "getCustomList mengaktifkan bagian beranda yang dideklarasikan per id; rekomendasi, komentar, saran, akun, favorit, dan langganan tetap opsional dengan default kosong yang aman."],
      ["Semantik kegagalan", "Kembalikan MPages kosong alih-alih melempar pengecualian saat halaman tidak punya item. Saat permintaan benar-benar gagal, biarkan error naik agar antarmuka menampilkan coba lagi dan diagnostik mencatat penyebabnya."]
    ],
    facts: [
      "URL tetap menjadi pengenal navigasi antara katalog, detail, dan pemutaran.",
      "Header dan baseUrl disediakan sumber dan dapat disesuaikan.",
      "Error dicatat di Dart dan runtime headless untuk diagnostik."
    ]
  },
  "ui-schema": {
    title: "Manifes mendeskripsikan kontrak.",
    body: "Untuk ekstensi UI dan skrip ZeusDL, manifest.json mendeklarasikan identitas, izin, dan runtime. Skema lalu mendeskripsikan bidang, aksi, dan keluaran yang dirender native oleh Flutter.",
    subsections: [
      ["Bidang manifes", "manifest.json membawa identitas, versi, penulis, izin jaringan, dan kebutuhan biner. id adalah string reverse-DNS seperti en.example-tool."],
      ["Kontrak UI native", "Kontrak UI merender bidang URL/teks, pilihan, toggle, dan aksi tanpa WebView: pemuatan cepat dan berfungsi offline."],
      ["Protokol keluaran ZeusDL", "Skrip berkomunikasi lewat stdout dengan baris PROGRESS, STATUS, DONE, dan ERROR. Watchtower mengalirkannya ke log secara real time."],
      ["Error validasi", "Manifes yang gagal validasi skema ditolak sebelum pemasangan. Marketplace menampilkan bidang tepat yang gagal alih-alih pesan umum."]
    ],
    facts: [
      "manifest.json membawa identitas, versi, penulis, izin jaringan, dan kebutuhan biner.",
      "Kontrak UI merender bidang URL/teks, pilihan, toggle, dan aksi tanpa WebView.",
      "Skrip ZeusDL berkomunikasi lewat stdout dengan PROGRESS, STATUS, DONE, dan ERROR."
    ]
  },
  layouts: {
    title: "ui-layouts.json mengontrol urutan dan bentuk.",
    body: "Ekstensi dapat menerbitkan layout deklaratif. Watchtower mengunduhnya dari watchtower-extensions, mengurainya sebagai UiLayout, menyimpannya per sumber, dan membiarkan Flutter memetakan komponen ke widget native.",
    subsections: [
      ["Akar dan cache", "schemaVersion dan home.sections adalah minimum yang berguna. browse, detail, dan player opsional. LayoutDownloader membaca Source.uiLayout dari raw.githubusercontent.com, lalu LayoutRegistry menyimpan layouts/<source.id>.json."],
      ["Bagian beranda", "id mengidentifikasi getCustomList(id, page). component menerima spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed, dan masonry, plus presentasi kurasi dari registri komponen."],
      ["Parameter visual", "title, icon, dan accent membentuk header. columns, rows, cardStyle, gridOrder, dan scrollDirection adalah petunjuk render. seeAll membuka halaman penuh, paginated mengaktifkan pemuatan halaman, dan requiresAuth melindungi bagian untuk pengguna masuk."],
      ["browse, detail, player", "browse mendeskripsikan popular/latest/search dengan component, columns, cardStyle, results, dan filters. detail menerima hero, episodeList, dan showRecommendations. player menerima standard atau feed."],
      ["Layout tidak valid", "Komponen tak dikenal kembali ke renderer grid dan dicatat. File rusak membiarkan sumber pada beranda standar Popular/Latest/Search alih-alih merusak seluruh layar."]
    ],
    facts: [
      "Tanpa layout, sumber kembali ke beranda standar Popular/Latest/Search.",
      "Bridge toLegacyMap menjaga kompatibilitas layar beranda yang ada.",
      "Layout dimuat ulang setelah pemasangan atau pembaruan ekstensi dan dihapus saat dilepas."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen adalah permukaan yang bisa dikendalikan.",
    body: "Halaman Watch menyusun hero, riwayat, kategori, baris, dan katalog dari sumber saat ini. Layout JSON dapat mengganti daftar standar sambil mempertahankan interaksi native.",
    subsections: [
      ["Urutan dan hero", "Hero memakai lima item banner pertama (fallback popular), berganti tiap 7 detik, dan menargetkan rasio lanskap lebar × 0,62. Putar membuka detail, Info membuka sheet bawah, dan Daftar saya mengubah favorit Isar."],
      ["Riwayat", "Lanjutkan menonton membaca riwayat Isar sumber, menghapus duplikat per manga, membatasi 12 kartu, dan menampilkan thumbnail, episode/bab, serta progres."],
      ["Katalog dan pencarian", "Grid katalog memaginasi Popular atau daftar khusus. Pencarian memakai debounce 250 ms, saran mengambang, aksi mikrofon/X, dan hanya menetapkan hasil saat dikirim."],
      ["Performa", "App bar mengamati gulir dengan ValueNotifier; hero berada di dalam CustomScrollView sehingga konten tidak menutupinya dan gulir menghindari setState penuh."],
      ["Status kosong dan error", "Bagian kosong disembunyikan. Bagian gagal menampilkan kartu coba lagi dengan error mentah, dan blokir Cloudflare mengarah ke panel bypass alih-alih jalan buntu."]
    ],
    facts: [
      "Kategori adalah kartu 132×72 dengan gambar, gradien, dan bingkai.",
      "Bagian disembunyikan saat datanya kosong.",
      "Aksi sumber tetap konsisten di manga, anime, film, dan serial."
    ]
  },
  "home-widgets": {
    title: "Widget adalah adaptor data.",
    body: "WatchtowerHomeScreen adalah beranda global aplikasi. Ini menggabungkan feed AniList dan TMDB dengan pustaka lokal dan menggerakkan baris melalui tab media.",
    subsections: [
      ["Beranda media", "Tab Semua, Film, Serial, Musik, Anime, Asia, Anak, Barat, Afrika, TV Pendek, Sepak Bola, dan Game memilih bagian dan data hero yang terlihat."],
      ["Kartu", "DiscoveryCard punya varian standard, ranked, landscape, featured, saga, dan spotlight. EpisodeCard menambah thumbnail, judul episode, durasi, dan bilah progres untuk melanjutkan."],
      ["Data", "AniList memasok anime dan konten editorial; TMDB memasok film dan serial; pustaka dan provider lokal melengkapi daftar pengguna."],
      ["Watch versus beranda global", "WatchtowerHomeScreen adalah beranda global; WatchHomeScreen adalah beranda sumber/ekstensi. Yang pertama menggabungkan katalog, yang kedua merender kontrak sumber."]
    ],
    facts: [
      "Widget tidak tahu URL tiap penyedia: mereka mengonsumsi model ternormalisasi.",
      "Status skeleton, kosong, memuat, dan error adalah bagian dari permukaan beranda.",
      "Layout ekstensi terutama menyasar WatchHomeScreen dan layar browse/detail/player."
    ]
  },
  api: {
    title: "Dua runtime, satu API.",
    body: "Server Dart/shelf tertanam mendengarkan 4567 di dalam aplikasi. CLI headless memakai ulang operasi yang sama untuk CI, Docker, Railway, atau Render.",
    subsections: [
      ["Endpoint", "ping, penemuan sumber, katalog, detail, video, halaman, dan filter mencerminkan kontrak ExtensionService. Rute library, history, dan proxy melayani basis data lokal dan media."],
      ["Autentikasi", "GET /api/ping tetap publik dan mengembalikan versi server. Rute lain melewati autentikasi, pembatasan laju, dan registri ekstensi."],
      ["Respons error", "Kegagalan mengembalikan body JSON dengan operasi dan pesan alih-alih 500 kosong. Error sumber mempertahankan status HTTP sehingga klien membedakan blokir dari bug."],
      ["Filter NSFW", "Sumber NSFW disaring dari daftar dan diblokir dengan 403 pada akses langsung."]
    ],
    facts: [
      "GET /api/ping publik dan mengembalikan versi server.",
      "Rute lain melewati autentikasi, pembatasan laju, dan registri ekstensi.",
      "Sumber NSFW disaring dari daftar dan diblokir dengan 403 pada akses langsung."
    ]
  },
  downloads: {
    title: "Unduhan berjalan lewat mesin yang bisa dipilih.",
    body: "Watch, manga, dan novel punya tab unduhan sendiri. Mesin per media, konkurensi, dan aturan Wi-Fi menggerakkan antrean, dan setiap kartu menampilkan aksi cepat.",
    subsections: [
      ["Pemilihan mesin", "HYDRA adalah mesin HLS internal, ZEUS adalah ZeusDL, ARES adalah Aria2, dan Externe menyerahkan tautan ke ADM atau IDM. Memilih mesin salah untuk stream terlindungi adalah kegagalan umum."],
      ["Konkurensi", "Tiap tab mengatur koneksi bersamaan (1–20) dan item antrean bersamaan (1–10). Nilai tinggi mempercepat tetapi memakai lebih banyak bandwidth dan bisa memicu batas sumber."],
      ["Arsip dan pembersihan", "Bab manga dapat diarsipkan sebagai folder, CBZ, CBR, CB7, atau ZIP. Hapus otomatis setelah dibaca menghapus bab yang ditandai selesai, opsional termasuk yang ditandai."],
      ["Error unduhan", "Unduhan gagal menyimpan file parsial dan menawarkan Coba lagi. 403/429 biasanya batas laju atau blokir anti-bot; 5xx menunjuk ke sumber. Verifikasi tautan di browser sebelum mengubah pengaturan."]
    ],
    facts: [
      "Aturan hanya Wi-Fi dapat memblokir unduhan sampai jaringan Wi-Fi tersedia.",
      "Pembaruan pustaka pintar menambah episode atau bab baru secara otomatis.",
      "Antrean unduhan menampilkan hingga lima tombol aksi cepat per kartu."
    ]
  },
  trackers: {
    title: "Progres disinkronkan dengan layanan eksternal.",
    body: "Watchtower terhubung ke AniList, Kitsu, MyAnimeList, Simkl, dan Trakt agar progres tonton dan baca tetap sinkron antar perangkat.",
    subsections: [
      ["Tracker yang didukung", "AniList, Kitsu, MyAnimeList, Simkl, dan Trakt. Masing-masing punya alur masuk dan model status sendiri, dinormalisasi ke model Track bersama."],
      ["Menautkan dan sinkronisasi", "Entri pustaka dapat ditautkan ke entri tracker. Progres, status, dan skor dikirim saat pembaruan, dan pembaruan pintar dapat menarik episode atau bab berikutnya."],
      ["Error tracker", "Token kedaluwarsa, aplikasi dicabut, atau batas laju menghasilkan pesan berbeda. Autentikasi ulang dari Pengaturan › Pelacakan; entri yang salah dapat dilepas lalu ditautkan lagi."],
      ["Migrasi", "Alur migrasi massal memindahkan entri pustaka antar sumber sambil mempertahankan tautan tracker, sehingga progres tidak hilang saat sumber mati."]
    ],
    facts: [
      "Integrasi tracker berada di lib/services/trackers.",
      "Kelola tracker dari Pengaturan › Pelacakan.",
      "Migrasi massal mempertahankan tautan tracker saat sumber berubah."
    ]
  },
  "getting-started": {
    title: "Bangun aplikasi Flutter",
    body: "Pasang toolchain, ambil paket Dart, dan jalankan klien lintas platform.",
    subsections: [
      ["Prasyarat", "Flutter 3.38+ / Dart 3.10+, Rust untuk binding flutter_rust_bridge, Java 17 untuk Android, dan Go 1.21+ jika membangun ulang klien torrent."],
      ["Platform", "Windows, Linux, macOS, iOS, Android, dan Web adalah target proyek. Beberapa fitur native menurun dengan baik di Web."],
      ["Verifikasi pemasangan", "Jalankan analyzer sebelum perubahan pertama: dart format --output=none --set-exit-if-changed lib dan flutter analyze --no-pub. Perintah CLI doctor melaporkan apakah mesin native dan QuickJS tersedia."],
      ["Error build umum", "Toolchain Rust yang hilang merusak binding. SDK Flutter lama merusak resolusi pub. Java 17 yang hilang merusak build Android. Perbaiki toolchain sebelum mengubah kode."]
    ],
    facts: [
      "Prasyarat: Flutter 3.38+, Dart 3.10+, Rust dan Java 17 untuk Android.",
      "Proyek menyasar Windows, Linux, macOS, iOS, Android, dan Web.",
      "CLI headless dirilis dari workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Tertanam atau headless.",
    body: "CLI headless berjalan dengan atau tanpa Docker. Rute privat memakai X-Api-Key atau Authorization Bearer saat API_KEY aktif, sementara aplikasi mempertahankan mode tertanamnya.",
    subsections: [
      ["Docker", "Docker Compose adalah jalur yang disarankan untuk server yang dapat direproduksi. Image yang diterbitkan tersedia di GHCR."],
      ["Host lain", "Railway, Render, VPS, dan Docker murni didokumentasikan di repositori. Server mempertahankan kontrak sumber yang sama dengan aplikasi."],
      ["Variabel lingkungan", "API_KEY melindungi rute privat. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR, dan RATE_MAX_TOKENS mengontrol cache, persistensi, dan pembatasan laju."],
      ["Error penerapan", "Kontainer yang langsung keluar biasanya berarti API_KEY hilang atau konflik port. Periksa log, pastikan port bebas, dan verifikasi jalur repo ekstensi sebelum memulai ulang."]
    ],
    facts: [
      "Docker Compose adalah jalur yang disarankan untuk server yang dapat direproduksi; image ada di GHCR.",
      "Penerapan Railway, Render, VPS, dan Docker didokumentasikan di repositori.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR, dan RATE_MAX_TOKENS mengontrol perilaku server."
    ]
  },
  troubleshooting: {
    title: "Pemecahan masalah",
    body: "Ada masalah sumber atau aplikasi? Ikuti daftar periksa, baca error persisnya, lalu jalankan diagnostik sebelum mengubah pengaturan.",
    subsections: [
      ["Diagnostik utama", "Perbarui ekstensi dan aplikasi, segarkan item bermasalah, coba item lain dari sumber yang sama, buka situs di browser, ganti jaringan, bersihkan cache dan cookie, lalu mulai ulang aplikasi. Jika satu langkah memperbaiki, penyebabnya lokal."],
      ["Membaca error", "Watchtower menampilkan error mentah, bukan pesan umum. Salinlah: nama operasi dan URL gagal menunjuk langkah tepat. Diagnostik ekstensi mencatat popular, latest, detail, dan media secara terpisah."],
      ["Error HTTP", "403 Forbidden: anti-bot atau blokir IP. 404 Not Found: konten dihapus atau sumber mati. 429 Too Many Requests: batas laju sementara. 5xx: server sumber mati. 1006/1020: blokir IP atau aturan firewall."],
      ["Pribadi atau luas", "Jika hanya Anda terdampak, curigai Cloudflare, blokir IP, atau batas laju, dan kurangi unduhan dari sumber itu. Jika semua terdampak, periksa issue tracker ekstensi dan aplikasi."],
      ["Masalah pemasangan", "Ekstensi yang gagal dipasang biasanya gagal validasi skema atau mengunduh file rusak. Unduh ulang dan periksa id serta versi manifes."]
    ],
    facts: [
      "Perbarui ekstensi dulu: sebagian besar kerusakan diperbaiki oleh pembaruan ekstensi.",
      "Layar diagnostik memisahkan langkah popular, latest, detail, dan media.",
      "Tidak ada ETA untuk perbaikan ekstensi; sumber rusak kadang butuh kesabaran."
    ]
  },
  cloudflare: {
    title: "Cloudflare & anti-bot",
    body: "Sebagian sumber berada di belakang Cloudflare. Watchtower hanya melaporkan challenge saat respons membawa bukti nyata, dan menawarkan WebView bypass yang membuka URL gagal secara persis.",
    subsections: [
      ["Apa yang dianggap challenge", "403/503 biasa, timeout, atau kata challenge bukan Cloudflare. Watchtower memerlukan penanda CDN, halaman challenge interaktif, atau halaman blokir sebelum menampilkan antarmuka anti-bot."],
      ["Melewati challenge", "WebView bypass membuka URL gagal secara persis, bukan akar situs. Selesaikan CAPTCHA sekali, lalu coba lagi sumbernya."],
      ["Mengubah user agent", "User agent memengaruhi deteksi bot. Ubah nilai bawaan di pengaturan Lanjutan, mulai ulang aplikasi, lalu coba lagi. Coba beberapa browser dan sistem."],
      ["Cookie dan cache", "Membersihkan cookie mengatur ulang status masuk atau challenge. Membersihkan data WebView memberi awal bersih. Keduanya ada di pengaturan Lanjutan."],
      ["Jika masih gagal", "Sumber mungkin menaikkan perlindungannya. Tunggu, atau pindah ke sumber lain untuk konten yang sama."]
    ],
    facts: [
      "Cloudflare hanya dilaporkan saat ada bukti nyata dalam respons.",
      "WebView bypass membuka URL gagal, bukan akar situs.",
      "Kegagalan pribadi biasanya berarti blokir atau batas laju, bukan bug."
    ]
  },
  cli: {
    title: "CLI headless",
    body: "Build Linux berisi runtime ekstensi yang sama dengan aplikasi desktop dan berjalan tanpa X11 atau Wayland, untuk CI, server, dan SSH.",
    subsections: [
      ["Perintah", "doctor menyelidiki mesin native dan QuickJS. extensions list dan test memuat repo lokal. source menjalankan satu operasi ExtensionService. plugins validate memeriksa katalog plugin."],
      ["Mode uji", "load memeriksa bahwa sumber dimuat dan mengekspos filter, preferensi, serta header. smoke juga memanggil popular, latest, search, saran, detail, dan operasi media. deep menambah halaman dua dan probe HTTP."],
      ["Penyaringan", "Saring berdasarkan bahasa, NSFW/SFW, mesin, tag, kueri, id, atau jenis. Direktori bahasa seperti src/watch/fr lebih diutamakan daripada bidang lang lama di indeks."],
      ["Kode keluar dan error", "0 berarti sukses, 1 adalah pemeriksaan kesehatan, uji, atau validasi yang gagal, dan 2 adalah penggunaan tidak sah atau error operasi tak tertangani. Laporan dan stdout menyamarkan kredensial serta parameter URL bertanda tangan."],
      ["Batas yang diketahui", "Perintah library, history, progress, antrean unduhan, dan tracker belum tersedia: titik masuk headless tidak membuka penyimpanan Isar/Hive."]
    ],
    facts: [
      "doctor --json melaporkan apakah mesin native dan QuickJS tersedia.",
      "smoke menjalankan popular, latest, search, detail, dan operasi media.",
      "Output menyamarkan kredensial umum dan parameter URL bertanda tangan."
    ]
  }
};

export default id;
