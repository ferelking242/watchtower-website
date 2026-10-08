// Indonesian prose overlay. Code blocks and markers come from en.js.
const id = {
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
