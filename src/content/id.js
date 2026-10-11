// id prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const id = {
  "getting-started": {
    title: "Watchtower dalam sepuluh menit.",
    body: "Watchtower adalah salah satu aplikasi untuk anime, serial, manga, novel, dan musik. Ini sengaja dikirimkan dalam keadaan kosong: Anda memilih sumbernya, dan semua yang Anda tonton atau baca tetap ada di perangkat Anda.",
    subsections: [
      ["Apa yang Anda butuhkan", "Ponsel atau tablet Android 8.0 atau lebih baru untuk aplikasi lengkap. Mesin Linux, macOS, atau Windows apa pun dapat menjalankan baris perintah tanpa kepala, tanpa sesi grafis. Ada satu hal yang tidak opsional: URL repositori sumber, karena Watchtower tidak berisi kontennya sendiri."],
      ["Tambahkan sumber pertama Anda", "Buka Lainnya, lalu Ekstensi, lalu Repositori. Tempelkan URL repositori yang diakhiri dengan index.min.json dan konfirmasi. Daftar ekstensi terisi segera setelah indeks dimuat."],
      ["Pasang ekstensi", "Setiap ekstensi mengajarkan Watchtower satu situs web. Ketuk instal di samping yang Anda inginkan, izinkan instalasi dari sumber tidak dikenal jika Android memintanya, dan sumbernya muncul di Telusuri."],
      ["Bangun perpustakaan Anda", "Buka sumber, temukan serial, lalu ketuk Tambahkan ke perpustakaan. Sejak saat itu Watchtower melacak kemajuan Anda, memeriksa bab baru dan menyimpan entri di satu tempat."],
      ["Pilih jenis media Anda", "Watchtower menangani manga, anime, novel, dan musik secara berdampingan. Setiap jenis terbuka di pembaca atau pemutarnya sendiri, dipilih secara otomatis dari apa yang dideklarasikan oleh ekstensi."],
      ["Kejutan yang umum terjadi pada percobaan pertama", "Layar Telusuri yang kosong berarti belum ada ekstensi yang dipasang, bukan aplikasi yang rusak. Repositori yang tidak dapat dimuat biasanya berupa URL usang atau portal jaringan captive."],
      ["Jika layar pertama terlihat kosong", "Daftar Telusuri yang kosong berarti belum ada ekstensi yang dipasang, bukan aplikasi yang rusak. Jika repositori tidak dapat dimuat, periksa apakah alamatnya diakhiri dengan index.min.json, lalu coba lagi di jaringan lain sebelum berasumsi bahwa repositori tersebut hilang."],
    ],
    facts: [
      "Watchtower dikirimkan tanpa konten. Sumber ada di tangan Anda untuk dipilih.",
      "Ekstensi adalah JavaScript biasa yang dijalankan di kotak pasir.",
      "Perpustakaan Anda ada di perangkat Anda, bukan di server Watchtower.",
      "Android 8.0+ adalah dasar untuk aplikasi seluler.",
      "Daftar Telusuri yang kosong berarti tidak ada ekstensi yang dipasang, bukan kegagalan.",
    ]
  },
  installation: {
    title: "Instal build yang cocok dengan perangkat Anda.",
    body: "Ada tiga cara untuk menjalankan Watchtower: aplikasi Android, versi desktop, atau baris perintah Linux untuk server. Mereka berbagi satu mesin, jadi sumber yang berfungsi di satu mesin juga berfungsi di semua mesin.",
    subsections: [
      ["Android", "Target utama, dan satu-satunya build yang mendapatkan setiap fitur terlebih dahulu. Unduh APK rilis, atau APK pratinjau jika Anda ingin menguji pekerjaan yang akan datang. Aktifkan instalasi dari sumber tidak dikenal ketika Android memintanya, karena Watchtower tidak didistribusikan melalui toko."],
      ["Desktop", "Versi Windows, Linux, dan macOS tersedia untuk ditonton di layar yang lebih besar. Bangun dari sumber dengan Flutter, karena artefak rilis dipublikasikan untuk Android dan Linux CLI terlebih dahulu."],
      ["Baris perintah Linux", "Biner tunggal tanpa jendela. Ini menjalankan mesin ekstensi yang sama, sehingga dapat mengambil, mencari dan mengunduh di server atau melalui SSH. Skrip penginstal menyalinnya dan file runtime-nya ke awalan yang Anda pilih."],
      ["Stabil atau pratinjau", "Pembuatan pratinjau melacak kode terbaru dan lebih sering memecahkannya. Tetap aktifkan pencadangan otomatis jika Anda menjalankannya, dan perkirakan untuk menginstal ulang versi rilis jika terjadi kesalahan."],
      ["Membangun dari sumber", "Anda memerlukan Flutter 3.38 atau lebih baru, Dart 3.10 atau lebih baru, dan toolchain Rust. Go 1.21 atau yang lebih baru hanya diperlukan jika Anda ingin membangun kembali server torrent sendiri."],
      ["Terus perbarui", "Watchtower memberi tahu Anda ketika ada versi baru, dan Anda menginstalnya dengan cara yang sama seperti pertama kali. Perpustakaan dan pengaturan Anda tidak tersentuh."],
      ["Jika instalasi gagal", "Pesan umum penginstal masing-masing dijelaskan di halaman kesalahan. Ketidakcocokan tanda tangan berarti salinan yang ditandatangani secara berbeda telah diinstal dan harus dihapus terlebih dahulu, unduhan yang rusak perlu diambil lagi, dan ketidakcocokan arsitektur prosesor berarti build yang diunduh salah."],
    ],
    facts: [
      "Android adalah satu-satunya platform dengan versi rilis yang dipublikasikan.",
      "Biner tanpa kepala dibuat untuk Linux x86_64.",
      "Karat diperlukan untuk membangun dari sumbernya; Pergi adalah opsional.",
      "Pratinjau dan penginstalan stabil berbagi data yang sama, sehingga peralihan tetap mempertahankan perpustakaan Anda.",
      "Hapus instalasi yang bertentangan sebelum menggantinya dengan build bertanda tangan berbeda.",
    ]
  },
  "adding-sources": {
    title: "Dari mana konten Anda berasal.",
    body: "Watchtower memiliki dua jenis sumber. Sumber online hadir sebagai ekstensi dari repositori yang Anda tambahkan. Sumber offline adalah folder di perangkat Anda sendiri. Kebanyakan orang menggunakan keduanya.",
    subsections: [
      ["Tambahkan repositori", "Buka Lainnya, lalu Ekstensi, lalu Repositori, dan tempelkan URL repositori. Aplikasi mengambil indeks dan mencantumkan setiap ekstensi yang ada di dalamnya. Anda dapat menambahkan beberapa repositori sekaligus."],
      ["Instal apa yang Anda butuhkan", "Refresh daftar, lalu ketuk instal di sebelah ekstensi. Android mungkin meminta izin untuk memasang aplikasi yang tidak dikenal untuk pertama kalinya. Ekstensi yang terpasang langsung muncul di Telusuri."],
      ["Jaga agar sumber tetap segar", "Refresh repositori kapan pun Anda menginginkan versi ekstensi yang lebih baru. Pembaruan menggantikan ekstensi yang ada dan mempertahankan pengaturannya, jadi tidak ada yang perlu dikonfigurasi ulang."],
      ["Gunakan file Anda sendiri", "Arahkan Watchtower ke folder manga atau anime yang sudah Anda miliki dan folder tersebut menjadi sumber normal. Tanpa repositori, tanpa jaringan, tanpa akun."],
      ["Percayalah hanya pada apa yang Anda ketahui", "Repositori dapat melayani apa saja, dan ekstensi berjalan dengan akses yang sama seperti aplikasi. Perlakukan repositori yang tidak dikenal seperti Anda memperlakukan penginstal yang tidak dikenal."],
      ["Ketika repositori gagal", "URL yang tidak dapat dimuat biasanya sudah kedaluwarsa, diblokir, atau disalin tanpa jalur indeksnya. Periksa apakah alamatnya diakhiri dengan index.min.json sebelum berasumsi bahwa repositori telah hilang."],
      ["Ketika repositori menolak untuk memuat", "Repositori yang gagal dimuat biasanya merupakan alamat yang kedaluwarsa, jalur yang tidak diakhiri dengan index.min.json, atau jaringan yang memblokirnya. Konfirmasikan alamatnya, lalu coba jaringan lain sebelum menghapusnya."],
    ],
    facts: [
      "Repositori hanyalah file JSON yang dihosting di server web.",
      "Pembaruan menjaga preferensi sumber Anda.",
      "Folder lokal berfungsi tanpa jaringan sama sekali.",
      "Watchtower tidak memeriksa atau menyetujui repositori pihak ketiga.",
      "Repositori yang tidak dapat dimuat biasanya alamatnya salah atau kedaluwarsa.",
    ]
  },
  library: {
    title: "Semua yang Anda ikuti, di satu tempat.",
    body: "Perpustakaan adalah rumah dari semua yang Anda simpan. Ia mengingat di mana Anda berhenti, mengelompokkan seri ke dalam rak, dan merupakan titik awal untuk pembaruan dan pengunduhan.",
    subsections: [
      ["Menambah dan menghapus", "Buka seri apa pun dan ketuk Tambahkan ke perpustakaan. Hapus dari tempat yang sama, dan serial tersebut berhenti diperbarui tanpa kehilangan riwayat bacaan Anda."],
      ["Kategori", "Kategori adalah rak perpustakaan Anda. Sebuah serial dapat berisi beberapa serial sekaligus, yaitu cara Anda memisahkan apa yang Anda ikuti setiap minggu dari apa yang mungkin Anda dapatkan suatu hari nanti."],
      ["Kemajuan", "Watchtower mengingat episode atau bab persis yang Anda buka, per entri, dan unggahan yang diteruskan ke pelacak saat Anda menghubungkannya."],
      ["Filter dan penyortiran", "Sembunyikan apa yang telah Anda selesaikan, tampilkan hanya apa yang diunduh, atau urutkan berdasarkan kapan seri terakhir dirilis. Filter hanya untuk tampilan dan tidak pernah menghapus apa pun."],
      ["Beberapa perangkat", "Tidak ada sinkronisasi bawaan antar perangkat. Pindahkan perpustakaan Anda dengan file cadangan, dan pisahkan unduhan, karena unduhan bukan bagian dari cadangan."],
      ["Ketika sebuah entri rusak", "Jika suatu rangkaian terbuka dalam keadaan kosong atau kehilangan penutupnya, sumbernya berubah di bawahnya. Refresh entri, dan migrasikan ke sumber lain jika masalah terus berlanjut."],
      ["Ketika sebuah entri tidak diperbarui atau dibuka", "Jika suatu rangkaian tidak dapat dibuka, sumbernya diubah di bawahnya. Refresh entri terlebih dahulu, dan migrasikan ke sumber lain jika masalah terus berlanjut. Penyegaran yang tidak menghasilkan apa pun berarti ekstensi sudah kedaluwarsa, bukan aplikasinya."],
    ],
    facts: [
      "Seri yang sudah selesai dibiarkan begitu saja oleh pembaruan latar belakang.",
      "Sebuah serial dapat dimiliki lebih dari satu kategori.",
      "Kemajuan dilacak per bab atau episode, bukan per seri.",
      "Menghapus serial dari perpustakaan tidak menghapus riwayat Anda.",
      "Menyegarkan memperbaiki sebagian besar entri yang rusak; migrasi memperbaiki sisanya.",
    ]
  },
  browse: {
    title: "Menemukan sesuatu untuk ditonton atau dibaca.",
    body: "Telusuri adalah tempat Anda menjelajahi apa yang ditawarkan suatu sumber dan mencari semuanya sekaligus. Ini adalah cara tercepat untuk menjawab pertanyaan siapa yang menyandang gelar ini.",
    subsections: [
      ["Menjelajahi sumber", "Buka sumber untuk melihat daftar Populer dan Terbarunya. Sebagian besar sumber juga menampilkan filter berdasarkan genre, tahun, atau status, yang muncul di bagian atas daftar."],
      ["Mencari kemana-mana", "Tindakan pencarian menanyakan setiap sumber yang diaktifkan secara paralel dan mengelompokkan hasilnya berdasarkan sumber, sehingga Anda dapat melihat sekilas siapa yang memiliki judul dan siapa yang tidak."],
      ["Ketika judul tidak muncul", "Sumber sering kali mengindeks judul dalam bahasa asli, bukan dalam bahasa Inggris. Cobalah nama asli, ejaan romanisasi, atau bagian yang lebih pendek."],
      ["Berpindah antar sumber", "Jika sumber melambat atau berhenti berfungsi, migrasikan entri tersebut alih-alih menambahkannya kembali. Watchtower mencocokkan seri di sumber baru dan menyampaikan kemajuan serta kategori Anda."],
      ["Memfilter berdasarkan bahasa", "Ekstensi ditandai dengan bahasa yang mereka layani. Sembunyikan yang tidak dapat Anda baca agar hasil pencarian dan daftar tetap relevan."],
      ["Mengapa hasilnya berbeda", "Setiap sumber mengindeks katalognya sendiri, sehingga suatu judul mungkin lengkap di satu sumber dan sebagian di sumber lain. Membandingkan dua sumber sebelum melakukan adalah hal yang normal."],
      ["Ketika pencarian tidak menghasilkan apa-apa", "Pencarian kosong biasanya merupakan ketidakcocokan judul, bukan sumber yang rusak. Cobalah nama dalam bahasa asli, ejaan romawi, atau fragmen yang lebih pendek, dan ingatlah bahwa satu sumber yang gagal menjawab tidak menghentikan sumber lainnya."],
    ],
    facts: [
      "Cari penggemar ke setiap sumber yang diaktifkan sekaligus.",
      "Sumber tanpa daftar populer masih berfungsi melalui pencarian.",
      "Migrasi memindahkan kemajuan Anda, bukan file yang Anda unduh.",
      "Tag bahasa ekstensi menggerakkan filter bahasa.",
      "Pencarian kosong biasanya merupakan ketidakcocokan judul, bukan sumber mati.",
    ]
  },
  extensions: {
    title: "Ekstensi adalah cara Watchtower menjangkau web.",
    body: "Ekstensi adalah program kecil yang mengajarkan Watchtower satu situs web: cara membuat daftar, mencari, membaca, dan memutarnya. Segala sesuatu yang Anda jelajahi hadir melalui ekstensi.",
    subsections: [
      ["Apa itu ekstensi", "Ini adalah JavaScript, bukan plugin yang Anda kompilasi. Ia tahu cara menanyakan daftar situs web, hasil pencariannya, bab-babnya, dan aliran videonya, dan ia menjawab dalam bentuk yang dipahami Watchtower."],
      ["Bagaimana mereka menghubungi Anda", "Ekstensi dikelompokkan ke dalam repositori. Anda menambahkan repositori satu kali, dan setiap ekstensi yang dimilikinya dapat diinstal dari layar ekstensi."],
      ["Jenis konten", "Sebuah ekstensi menyatakan apa yang disajikannya: manga, anime, novel, musik, atau game. Deklarasi tersebut menentukan pembaca atau pemutar mana yang terbuka saat Anda mengetuk hasil."],
      ["Pembaruan dan penghapusan", "Ekstensi diperbarui dan mempertahankan pengaturannya. Mencopot pemasangannya hanya akan menghapus ekstensinya; entri perpustakaan Anda bertahan dan cukup menunggu sumber menyajikannya lagi."],
      ["Mengapa Anda harus peduli siapa yang membuatnya", "Sebuah ekstensi berjalan di dalam Watchtower tetapi dapat menjangkau jaringan dan membaca apa yang Anda berikan. Instal dari repositori yang Anda percayai, dan berhati-hatilah dengan apa pun yang asing."],
      ["Ketika ekstensi berhenti berfungsi", "Situs web berubah, dan sumbernya terputus. Biasanya itu adalah ekstensi yang rusak, bukan aplikasi yang rusak, dan perbaikannya datang sebagai pembaruan."],
      ["Ketika instalasi atau pembaruan gagal", "Penginstalan yang gagal hampir selalu berarti Android memblokir aplikasi yang tidak dikenal, dan pembaruan yang gagal adalah pengunduhan yang terhenti di tengah jalan. Izinkan penginstalan dari pengelola file atau browser Anda, lalu coba lagi, dan instal ulang dari awal jika file terpotong."],
    ],
    facts: [
      "Ekstensi adalah JavaScript, dijalankan di kotak pasir di dalam aplikasi.",
      "Satu ekstensi mencakup satu situs web.",
      "Menginstal dan memperbarui tidak pernah menyentuh perpustakaan Anda.",
      "Sumber yang tiba-tiba gagal biasanya adalah perubahan website.",
      "Instalasi yang gagal biasanya adalah Android, bukan ekstensinya.",
    ]
  },
  "extensions-catalogue": {
    title: "Memilih dan memelihara sumber Anda.",
    body: "Layar ekstensi adalah katalog Anda: apa yang terpasang, apa yang tersedia, dan apa yang kedaluwarsa. Di sinilah Anda menjaga daftar sumber Anda tetap sehat.",
    subsections: [
      ["Terpasang dan tersedia", "Ekstensi yang dipasang langsung berfungsi. Yang tersedia berasal dari repositori yang telah Anda tambahkan: segarkan daftar, lalu instal yang Anda inginkan dengan satu ketukan."],
      ["Memperbarui ekstensi", "Ketika ada versi yang lebih baru, versi tersebut muncul di bawah pembaruan. Menginstalnya akan menggantikan salinan lama dan mempertahankan preferensinya, jadi perbaikan tidak memerlukan biaya apa pun."],
      ["Menghapus ekstensi", "Copot pemasangannya dari layar yang sama. Entri perpustakaan Anda tetap ada dan hanya ditampilkan sebagai tidak tersedia sampai sumber lain, atau instalasi ulang, dapat menyajikannya."],
      ["Menjaga agar daftar tetap dapat dibaca", "Ekstensi dikelompokkan berdasarkan bahasa. Saring bahasa yang tidak Anda baca sehingga daftar hanya menampilkan sumber yang benar-benar berguna bagi Anda."],
      ["Ketika tidak ada yang menginstal", "Penginstalan yang gagal hampir selalu menyebabkan Android memblokir aplikasi yang tidak dikenal, bukan ekstensinya. Izinkan pemasangan dari pengelola file atau browser Anda, lalu coba lagi."],
      ["Menjaga katalog tetap terkini", "Segarkan repositori Anda sesering mungkin. Ekstensi baru muncul dan ekstensi yang rusak diperbaiki, tetapi tidak ada hasil sampai Anda memintanya."],
      ["Ketika ekstensi menghilang", "Ekstensi yang terpasang dapat hilang jika Android menghapusnya, atau jika disembunyikan oleh filter bahasa atau tombol konten dewasa. Periksa filternya terlebih dahulu, lalu instal ulang dari repositori jika benar-benar hilang."],
    ],
    facts: [
      "Pembaruan mempertahankan pengaturan yang Anda tetapkan pada sumber.",
      "Mencopot pemasangan ekstensi akan menyimpan entri perpustakaan Anda.",
      "Ekstensi dikelompokkan berdasarkan bahasa, bukan berdasarkan repositori.",
      "Menyegarkan repositori adalah cara Anda melihat ekstensi baru dan diperbarui.",
      "Ekstensi yang hilang biasanya disembunyikan oleh filter, bukan dicopot pemasangannya.",
    ]
  },
  "extensions-devkit": {
    title: "Membangun sumber Anda sendiri.",
    body: "Jika Anda ingin menambahkan situs web yang belum tercakup oleh siapa pun, Anda dapat menulis ekstensi sendiri. Dibutuhkan satu file yang menjelaskan situs dan satu file yang mengimplementasikan panggilan.",
    subsections: [
      ["Apa yang perlu Anda tulis", "Dua file: manifes yang memberi nama ekstensi dan mendeklarasikan bahasa serta tipe kontennya, dan file entri dengan panggilan yang mengambil daftar, pencarian, detail, bab, dan halaman."],
      ["Mulailah dari sumber yang ada", "Rute tercepat adalah menyalin ekstensi yang berfungsi untuk situs serupa dan mengubah URL serta penguraiannya. Bentuk panggilannya tetap sama."],
      ["Pengujian tanpa aplikasi", "Baris perintah dapat menjalankan satu panggilan dan mencetak dengan tepat apa yang dikembalikan. Itu jauh lebih cepat daripada memasang ekstensi pada perangkat setiap kali Anda mengganti saluran."],
      ["Apa yang dapat digunakan kode Anda", "Permintaan, parser HTML dan parser JSON. Tidak ada akses file, tidak ada database, dan tidak ada cara untuk mengakses layar aplikasi itu sendiri."],
      ["Ketika keluaran terlihat salah", "Jika suatu field kosong, parser hampir selalu menjadi penyebab, bukan runtime. Bandingkan apa yang Anda kembalikan dengan apa yang diharapkan oleh kontrak sumber."],
      ["Sebelum Anda mempublikasikan", "Jalankan ekstensi pada situs langsung, periksa pencarian, daftar, dan panggilan halaman, dan konfirmasikan jenis konten sudah benar sehingga terbuka di pembaca atau pemutar yang tepat."],
      ["Saat panggilan tidak menghasilkan apa-apa", "Hasil yang kosong hampir selalu merupakan pemilih yang tidak lagi cocok dengan situsnya, bukan kesalahan runtime. Ambil halamannya, bandingkan pemilih Anda dengan markup saat ini, dan uji satu panggilan dari baris perintah sebelum membangun kembali aplikasi."],
    ],
    facts: [
      "Sumber yang berfungsi hanya memerlukan manifes dan file entri.",
      "Baris perintah dapat menguji satu panggilan secara terpisah.",
      "Ekstensi dapat menjangkau jaringan dan mengurai halaman, tidak lebih.",
      "Tipe konten yang Anda deklarasikan menentukan pembaca atau pemutar mana yang dibuka.",
      "Hasil yang kosong biasanya merupakan pemilih yang tidak cocok lagi.",
    ]
  },
  "extensions-publishing": {
    title: "Berbagi sumber dengan orang lain.",
    body: "Setelah ekstensi Anda berfungsi, memublikasikannya berarti memasukkannya ke dalam repositori yang dapat ditambahkan orang lain. Repositori adalah file JSON kecil ditambah paket ekstensi yang dicantumkannya.",
    subsections: [
      ["Apa itu repositori", "Folder paket ekstensi dan satu indeks JSON yang mencantumkannya. Host folder di mana saja yang melayani HTTPS, dan berikan alamat file indeks kepada orang-orang."],
      ["Menerbitkan pembaruan", "Naikkan nomor versi, bangun kembali paket, dan perbarui versi di indeks. Watchtower membandingkan angka tersebut, jadi versi yang tidak diubah adalah pembaruan yang tidak diterima oleh siapa pun."],
      ["Menjaga nama tetap stabil", "Nama paket adalah identitas ekstensi. Ubahlah dan pengguna akan mendapatkan ekstensi kedua yang terpisah, bukan pembaruan ke ekstensi pertama."],
      ["Perjelas tentang kepercayaan", "Orang yang menginstal dari repositori Anda menjalankan kode Anda dengan akses aplikasi. Katakan siapa Anda, dan simpan repositori di tempat yang Anda kendalikan."],
      ["Mempertahankan sumber", "Situs web berubah tanpa peringatan, jadi harap dipublikasikan ulang. Perhatikan laporan bahwa sumber berhenti berfungsi dan perbaiki sebelum pengguna meninggalkannya."],
      ["Alamat indeks penting", "Alamat yang Anda berikan harus mengarah ke index.min.json. Jalur lain mana pun membuat orang menatap repositori yang menolak memuat."],
      ["Ketika pengguna tidak mendapatkan pembaruan Anda", "Penyebab biasanya adalah nomor versi dalam indeks yang tidak berubah, atau alamat repositori yang menunjuk ke tempat lain selain file indeks. Naikkan versinya, konfirmasi alamatnya, dan periksa apakah file dapat dijangkau melalui HTTPS."],
    ],
    facts: [
      "Repositori adalah folder HTTPS ditambah satu indeks JSON.",
      "Versi dalam indeks inilah yang memberi tahu pengguna bahwa ada pembaruan.",
      "Nama paket yang stabil adalah apa yang membuat pembaruan menjadi pembaruan.",
      "Berharap untuk menerbitkan ulang setiap kali situs web target berubah.",
      "Pembaruan yang tidak diterima oleh siapa pun biasanya berupa nomor versi yang tidak berubah.",
    ]
  },
  "local-source": {
    title: "Membaca dan memutar file Anda sendiri.",
    body: "Watchtower dapat memperlakukan folder di perangkat Anda sebagai sumber normal. Koleksi Anda sendiri kemudian berperilaku persis seperti koleksi online, lengkap dengan pelacakan kemajuan.",
    subsections: [
      ["Manga dan novel", "Letakkan satu folder per seri di dalam folder lokal, dan satu file per bab di dalamnya. Bab dapat berupa arsip CBZ atau folder gambar biasa, dan nama folder menjadi judul seri."],
      ["anime", "Letakkan satu folder per seri di dalam folder anime lokal, dan satu file video per episode di dalamnya. Episode diurutkan berdasarkan nama file, jadi beri nomor."],
      ["Sampul dan detailnya", "Gambar sampul dalam folder seri menjadi thumbnail. File detail di sampingnya dapat menambahkan penulis, artis, deskripsi, dan genre jika nama folder tidak cukup."],
      ["Menambahkan file baru", "Pindahkan file dari luar aplikasi, lalu segarkan sumber lokal sehingga Watchtower memindai ulang folder tersebut. File yang ditambahkan saat aplikasi ditutup tidak akan diketahui sampai Anda melakukannya."],
      ["Membaca offline", "Sumber lokal tidak pernah menyentuh jaringan, sehingga mereka bekerja dalam mode penerbangan dan tidak dapat diblokir atau dibatasi tarifnya. Unduhan dan file lokal berperilaku sama saat berada di disk."],
      ["Menyembunyikan file dari galeri", "Letakkan file .nomedia di folder sehingga sampul dan episode tidak dimasukkan ke aplikasi foto ponsel Anda."],
      ["Ketika sampul kosong atau file hilang", "Sampul kosong atau seri yang tidak dapat dibuka hampir selalu berarti struktur foldernya salah. Periksa apakah ada satu folder per seri dan satu file per bab atau episode, lalu hapus entri, hapus database untuk item di luar perpustakaan, dan biarkan sumber lokal memindai ulang folder tersebut."],
    ],
    facts: [
      "Arsip CBZ dan folder gambar biasa dibaca sebagai bab.",
      "Urutan episode mengikuti nama file, jadi beri nomor pada file Anda.",
      "File .nomedia membuat media lokal tidak masuk ke galeri sistem.",
      "Sumber lokal berfungsi tanpa koneksi jaringan sama sekali.",
      "Struktur folder yang salah adalah penyebab umum sampul kosong.",
    ]
  },
  "video-player": {
    title: "Menonton sebuah episode.",
    body: "Pemutar menutupi video dengan gerakan dan lembaran, sehingga tidak ada yang keluar dari layar saat Anda menonton. Kualitas, audio, subtitle, dan kecepatan semuanya tinggal satu ketukan saja.",
    subsections: [
      ["Kontrol dasar", "Ketuk sekali untuk memunculkan kontrol, ketuk dua kali salah satu sisi untuk melompat maju atau mundur, dan tekan lama untuk mempercepat. Cubit untuk memperbesar ketika video mempunyai ruang tersisa."],
      ["Kualitas dan audio", "Sumber yang menawarkan beberapa resolusi atau trek audio menampilkannya dalam lembaran yang dapat digeser ke atas tanpa mengganggu pemutaran. Pilihan Anda dikenang untuk serial ini."],
      ["Subtitle", "Trek subtitle berasal dari sumbernya atau dari file yang Anda berikan. Mereka dipilih dan disesuaikan dari lembar subtitle, dan tampilannya diatur satu kali dalam pengaturan."],
      ["Episode dan statistik", "Panel samping mencantumkan setiap episode sehingga Anda dapat melompat-lompat, dan panel samping lainnya menunjukkan apa yang sebenarnya dilakukan pemain dengan streaming ketika ada sesuatu yang tidak beres."],
      ["Saat pemain internal kesulitan", "Codec yang langka atau aliran yang rusak dapat diserahkan ke pemutar eksternal seperti mpv atau VLC. Itu adalah fallback yang dapat diandalkan, bukan pertanda bahwa episode tersebut tidak dapat digunakan."],
      ["Menyimpan tempat Anda", "Kemajuan ditulis terus menerus saat Anda menonton, jadi menutup aplikasi atau kehilangan daya tidak akan kehilangan posisi Anda."],
      ["Saat video tidak dapat diputar", "Streaming yang menolak untuk memulai sering kali merupakan codec yang tidak dapat ditangani oleh pemutar internal atau tautan yang kedaluwarsa. Beralih ke pemutar eksternal seperti mpv atau VLC terlebih dahulu, lalu perbarui ekstensi jika setiap episode dari sumber tersebut gagal."],
    ],
    facts: [
      "Pemutaran menggunakan dekoder yang dipercepat perangkat keras secara default.",
      "Gerakan menangani kecerahan, volume, dan pencarian.",
      "Kemajuan disimpan terus menerus, tidak hanya saat Anda keluar.",
      "Pemain eksternal adalah cadangan untuk codec yang tidak didukung.",
      "Menyerahkan aliran yang membandel ke pemain eksternal adalah pengganti yang andal.",
    ]
  },
  "player-settings": {
    title: "Membentuk pemain berdasarkan kebiasaan Anda.",
    body: "Pengaturan pemutar menentukan bagaimana video didekodekan, apa yang dilakukan gerakan, dan tombol mana yang ada di pemutar. Ubah sekali dan setiap episode akan menyusul.",
    subsections: [
      ["Penguraian kode", "Penguraian kode perangkat keras lebih cepat dan lebih ringan pada baterai, dan cocok untuk hampir semua hal. Beralih ke perangkat lunak ketika file tertentu diputar dengan buruk, karena decoding perangkat lunak lebih memaafkan codec yang tidak biasa."],
      ["Gerakan", "Putuskan gesekan mana yang melakukan apa: vertikal untuk kecerahan dan volume, horizontal untuk mencari. Setiap arah dapat dibalik jika terasa terbalik bagi Anda."],
      ["Tombol khusus", "Tambahkan tindakan yang paling sering Anda lakukan, seperti melewatkan intro atau mengambil tangkapan layar, langsung ke permukaan pemutar sehingga tindakan tersebut tidak lagi terkubur dalam menu."],
      ["Pemutaran lanjutan", "Ukuran buffer, rasio aspek yang dipaksakan, dan gambar-dalam-gambar ada di sini untuk kasus yang jarang terjadi di mana perilaku otomatis tidak sesuai dengan keinginan Anda. Kebanyakan orang tidak perlu menyentuhnya."],
      ["Pengecualian per seri", "Hampir setiap pengaturan pemain dapat diganti untuk satu seri tanpa mengubah default untuk seri lainnya. Berguna untuk satu pertunjukan dengan audio yang aneh."],
      ["Setelah cadangan pengaturan", "Tombol khusus dan preferensi pemutar ada di file cadangan Anda, jadi memulihkan di perangkat baru akan membawa serta tata letak pemutar Anda."],
    ],
    facts: [
      "Penguraian kode perangkat keras adalah default dan cocok untuk sebagian besar file.",
      "Setiap arah gerakan dapat dibalik atau dimatikan.",
      "Pengaturan dapat diganti untuk satu rangkaian.",
      "Preferensi pemain disertakan dalam cadangan.",
    ]
  },
  subtitles: {
    title: "Membuat subtitle dapat dibaca.",
    body: "Subtitle berasal dari tiga tempat: streaming, file di perangkat Anda, atau sumber yang mengambilnya. Halaman ini mencakup pemilihan trek, menetapkan waktunya, dan menata gaya trek yang digambar sendiri oleh Watchtower.",
    subsections: [
      ["Memilih trek", "Jika sebuah episode memuat beberapa trek subtitle, lagu-lagu tersebut akan dicantumkan di lembar subtitle. Pilihan Anda diingat untuk seri itu, jadi Anda hanya memilih satu kali."],
      ["Memperbaiki waktunya", "Trek yang berjalan di depan atau di belakang audio dapat didorong sedikit demi sedikit hingga sejajar. Offsetnya diingat, sehingga perbaikan tetap bertahan saat aplikasi dimulai ulang."],
      ["Penataan gaya", "Font, ukuran, warna, garis besar dan latar belakang berlaku untuk subtitle teks. Pengaturan ini tidak mempengaruhi video dan aman untuk bereksperimen dengan pertengahan episode."],
      ["File Anda sendiri", "Letakkan file subtitle di sebelah episode lokal dengan nama yang cocok dan pemutar akan memuatnya secara otomatis, tanpa mengubah pengaturan."],
      ["Subtitle dimasukkan ke dalam gambar", "Beberapa subtitle berupa gambar, bukan teks. Mereka tidak dapat dibenahi, hanya diposisikan ulang atau diubah ukurannya, karena penataan gaya adalah bagian dari gambar itu sendiri."],
      ["Ketika subtitle tidak muncul", "Periksa lembar subtitle terlebih dahulu: sumber mungkin tidak menawarkan apa pun, atau nama file mungkin tidak cukup cocok dengan episode untuk dipasangkan."],
    ],
    facts: [
      "Subtitle teks dapat diubah gayanya; subtitle gambar tidak bisa.",
      "Offset waktu disimpan dan bertahan saat restart.",
      "File yang cocok di samping episode lokal dimuat dengan sendirinya.",
      "Pilihan subtitle diingat per seri.",
    ]
  },
  reader: {
    title: "Membaca manga, webtoon, dan novel.",
    body: "Pembaca menangani manga berhalaman, webtoon vertikal, dan novel teks. Anda menetapkan default satu kali dan menggantinya untuk seri yang memerlukan sesuatu yang berbeda.",
    subsections: [
      ["Memilih mode membaca", "Mode paged sesuai dengan manga yang dicetak, dan strip panjang sesuai dengan webtoon yang digambar sebagai satu gambar tinggi. Tetapkan default dan ubah per seri ketika judul dibaca lebih baik jika sebaliknya."],
      ["Membalik halaman", "Ketuk tepinya untuk bergerak maju atau mundur, geser untuk menggulir dalam garis panjang, dan cubit untuk memperbesar. Mengetuk bagian tengah akan membuka menu tanpa meninggalkan halaman."],
      ["Melanjutkan dari bagian terakhir yang Anda tinggalkan", "Watchtower mengingat halaman yang Anda buka di setiap bab, jadi membuka kembali sebuah serial akan membawa Anda tepat di tempat Anda berhenti, bukan di awal."],
      ["Halaman lebar dan menyebar", "Spread dua halaman dan pindaian yang sangat lebar dapat dibagi, diputar, atau diskalakan sehingga tidak terbaca di ponsel."],
      ["Bab yang diunduh", "Bab yang Anda unduh langsung terbuka dan ditandai dalam daftar bab, itulah yang membuat membaca secara offline menjadi praktis."],
      ["Novel", "Novel teks menggunakan entri yang sama di perpustakaan Anda tetapi dibuka di pembaca teks, bukan penampil gambar, yang dipilih secara otomatis dari tipe konten ekstensi."],
      ["Ketika halaman tidak dapat dimuat", "Terkadang aplikasi gagal mengenali gambar dalam sebuah bab. Meninggalkan pembaca dan membuka kembali bab biasanya menyelesaikannya, dan jika terus berlanjut, gambar itu sendiri tidak ada di sumbernya, bukan di aplikasi."],
      ["Dua halaman sekaligus", "Pembaca dua halaman tidak tersedia, karena pemindaian jarang menyetujui di mana hentian halaman berada. Membaca satu halaman dalam satu waktu, atau menggunakan strip panjang untuk webtoon, adalah perilaku saat ini."],
    ],
    facts: [
      "Strip panjang sesuai dengan webtoon vertikal dan mengabaikan lebar halaman.",
      "Pembaca mengingat halaman yang Anda buka per bab.",
      "Zoom dinonaktifkan dalam garis panjang hingga Anda menyalakannya.",
      "Novel dibuka di pembaca teks, bukan pembaca gambar.",
      "Membuka kembali bab akan memperbaiki halaman yang gagal dimuat.",
    ]
  },
  "reader-settings": {
    title: "Menyiapkan membaca sesuai keinginan Anda.",
    body: "Pengaturan pembaca mencakup arah membaca, bagaimana halaman diskalakan dan dipotong, dan bagian layar mana yang membalik halaman.",
    subsections: [
      ["Membaca", "Atur mode default, apakah halaman dianimasikan saat diputar, dan bab mana yang harus dilewati. Bab yang dilewati masih ada, tidak mengganggu Anda."],
      ["Menampilkan", "Kunci rotasi, warna latar belakang, dan layar penuh hidup bersama di sini. Latar belakang gelap cocok untuk membaca di malam hari dan mengurangi silau antar halaman."],
      ["Halaman", "Pilih cara halaman memenuhi layar: menyesuaikan lebar, tinggi, keseluruhan layar, atau menampilkannya dalam ukuran aslinya. Pemotongan batas memangkas margin pemindaian secara otomatis."],
      ["Ketuk zona", "Pilih di mana ketukan akan memajukan halaman, membalikkannya, dan membuka menu. Seluruh tata letak dapat dicerminkan untuk dibaca oleh orang kidal."],
      ["Strip panjang", "Bantalan samping dan zona tap terpisah membuat webtoon tinggi nyaman ditampilkan di layar lebar, karena jika tidak, gambar dengan lebar penuh akan terlalu kecil."],
      ["Pengecualian per seri", "Semua ini dapat ditimpa untuk satu seri, yang berguna untuk judul yang dipindai secara tidak biasa atau dibaca ke arah lain."],
    ],
    facts: [
      "Opsi skala mencakup lebar pas, tinggi pas, layar pas, dan ukuran asli.",
      "Pemotongan batas menghilangkan margin pemindaian untuk Anda.",
      "Zona ketuk dapat dicerminkan untuk pembacaan tangan kiri.",
      "Aturan lewati dapat diganti per seri.",
    ]
  },
  updates: {
    title: "Menjaga perpustakaan Anda tetap terkini.",
    body: "Pembaruan memeriksa sumber Anda untuk bab dan episode baru. Selesai dengan baik, mereka terus memberi Anda informasi terkini. Dilakukan secara sembarangan, mereka memalu sebuah sumber hingga menghalangi semua orang.",
    subsections: [
      ["Pembaruan global", "Berjalan di seluruh perpustakaan Anda dan melaporkan apa yang baru. Batasi pada kategori yang benar-benar Anda ikuti sehingga serial lambat tidak diperiksa setiap hari tanpa imbalan."],
      ["Apa yang dilewati", "Seri yang telah Anda selesaikan, seri yang belum Anda mulai, dan seri yang tidak ada rilis yang diharapkan akan dilewati secara otomatis. Hal inilah yang membuat perpustakaan besar tidak menghasilkan banyak permintaan."],
      ["Pemberitahuan", "Bab dan episode baru memunculkan pemberitahuan, yang dapat Anda persempit ke kategori atau nonaktifkan sepenuhnya tanpa mematikan pembaruan."],
      ["Menyegarkan satu seri", "Buka menu seri dan segarkan saat Anda ingin segera memeriksanya, tanpa menjalankan pembaruan pada yang lainnya."],
      ["Mengapa ini penting", "Sumber yang menerima terlalu banyak permintaan dapat memblokir seluruh aplikasi dengan perlindungan anti-bot. Membatasi pembaruan pada apa yang Anda ikuti akan melindungi sumber tempat semua orang bergantung."],
      ["Jika pembaruan sepertinya berhenti", "Pengoptimalan baterai Android dapat menghentikan pekerjaan di latar belakang. Bebaskan Watchtower dari pembatasan baterai jika pembaruan hanya tersedia saat Anda membuka aplikasi."],
      ["Saat pembaruan melaporkan kesalahan", "Pembaruan yang gagal pada satu seri biasanya berasal dari sumbernya, bukan aplikasinya. Segarkan seri secara manual, perbarui ekstensi, dan ingat bahwa pembatasan laju setelah pembaruan besar dijalankan akan hilang dengan sendirinya seiring berjalannya waktu, bukan dengan percobaan ulang."],
    ],
    facts: [
      "Pembaruan dapat dibatasi pada kategori yang Anda pilih.",
      "Seri yang sudah selesai dilewati secara default.",
      "Lalu lintas pembaruan yang padat dapat menyebabkan sumber memblokir aplikasi.",
      "Pengoptimalan baterai dapat menunda pembaruan latar belakang.",
      "Pembaruan yang gagal pada satu seri mengarah ke sumber tersebut, bukan aplikasinya.",
    ]
  },
  downloads: {
    title: "Menjadikan perpustakaan Anda offline.",
    body: "Unduhan menyimpan episode dan bab ke perangkat Anda sehingga Anda dapat menonton atau membaca tanpa koneksi internet. Mereka hidup dalam satu antrian dengan batasan yang jelas.",
    subsections: [
      ["Memulai pengunduhan", "Tambahkan bab atau episode dari sebuah serial dan mereka bergabung dalam antrean unduhan. Dari antrian Anda dapat menyusun ulang apa yang berikutnya atau membatalkan sesuatu yang tidak Anda inginkan lagi."],
      ["Mengapa satu per satu", "Watchtower mengunduh serial satu per satu dari sumber mana pun. Mengaktifkan banyak permintaan di satu situs inilah yang memicu perlindungan anti-bot yang membuat sumber diblokir."],
      ["Mode hanya unduhan", "Aktifkan ini untuk menyembunyikan apa pun yang belum Anda simpan. Aplikasi kemudian hanya menampilkan apa yang ada di perangkat Anda, yang berguna dalam perjalanan atau koneksi terukur."],
      ["Tempat file disimpan", "Unduhan mendarat di bawah folder yang diberi nama berdasarkan sumbernya, lalu serinya. Mengganti nama salah satu folder akan merusak deteksi, jadi biarkan saja."],
      ["Saat unduhan hilang", "Jika konten yang disimpan berhenti ditampilkan, folder penyimpanan mungkin telah berpindah atau menjadi tidak dapat dibaca. Periksa lokasi penyimpanan dan bangun kembali indeks unduhan."],
      ["Apa yang tidak dicakup oleh cadangan", "File cadangan membawa perpustakaan dan pengaturan Anda, bukan media yang Anda unduh. Itu harus dipindahkan secara terpisah."],
      ["Ketika pengunduhan gagal di tengah jalan", "Pengunduhan yang terhenti biasanya disebabkan oleh koneksi yang terputus atau sumber yang berhenti menjawab. Coba lagi dari antrean, karena sebagian file disimpan, dan alihkan ke Wi-Fi jika penyebabnya adalah jaringan. Respons 403 atau 429 yang terus-menerus berarti sumbernya menolak Anda, bukan berarti file tersebut hilang."],
    ],
    facts: [
      "Hanya satu seri per sumber yang diunduh pada satu waktu, dengan sengaja.",
      "Media yang diunduh tidak disertakan dalam cadangan.",
      "Penyimpanan internal lebih cepat dan lebih andal dibandingkan kartu SD.",
      "Mengganti nama folder unduhan akan merusak deteksi.",
      "Pengunduhan yang dihentikan akan menyimpan sebagian filenya, jadi mencoba lagi akan melanjutkannya.",
    ]
  },
  categories: {
    title: "Mengubah perpustakaan yang panjang menjadi beberapa rak.",
    body: "Kategori mengelompokkan perpustakaan Anda berdasarkan negara bagian atau selera, dan kategori tersebut berfungsi ganda sebagai kontrol atas apa yang diperbarui dan diunduh secara otomatis.",
    subsections: [
      ["Membuat kategori", "Beri nama sesuai keinginan Anda dan pesan sesuai keinginan Anda. Kebanyakan orang mendapatkan beberapa hal berdasarkan seberapa sering mereka mengikuti sesuatu."],
      ["Menempatkan seri di dalamnya", "Tekan lama sebuah rangkaian, pilih opsi kategori, dan centang semua yang sesuai. Satu seri bisa diletakkan di beberapa rak sekaligus."],
      ["Menggunakannya untuk pembaruan", "Arahkan pembaruan global dan pengunduhan otomatis pada kategori tertentu. Hanya serial yang Anda ikuti secara aktif yang kemudian menghasilkan lalu lintas."],
      ["Mengambil seri", "Batalkan pilihan kategori di tempat yang sama saat Anda menambahkannya. Serial ini tetap ada di perpustakaan Anda, hanya meninggalkan rak itu."],
      ["Penamaan yang bertahan lama", "Beri nama kategori berdasarkan kebiasaan Anda, bukan berdasarkan sumber. Kemudian memigrasikan rangkaian antar sumber tidak akan pernah mengacak ulang perpustakaan Anda."],
      ["Tetap sederhana", "Kategori berfungsi paling baik jika jumlahnya sedikit. Jika Anda tidak dapat mengingat kegunaan suatu kategori, mungkin kategori tersebut lebih banyak merugikan daripada menguntungkan."],
    ],
    facts: [
      "Sebuah serial dapat termasuk dalam beberapa kategori sekaligus.",
      "Pembaruan global dapat diarahkan pada satu kategori.",
      "Pengunduhan otomatis dapat dibatasi pada kategori yang dipilih.",
      "Memberi nama kategori berdasarkan sumbernya menua dengan buruk.",
    ]
  },
  tracking: {
    title: "Merekam apa yang Anda tonton, secara otomatis.",
    body: "Pelacakan menghubungkan Watchtower ke layanan yang menyimpan riwayat Anda. Anda masuk sekali, dan kemajuan dicatat seiring berjalannya waktu alih-alih diketik dengan tangan.",
    subsections: [
      ["Layanan mana yang didukung", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori dan Bangumi. Semuanya diatur dari pengaturan pelacakan, dan Anda dapat menghubungkan lebih dari satu."],
      ["Masuk", "Buka pengaturan pelacakan dan ketuk layanan untuk memulai loginnya. Kitsu adalah orang yang meminta alamat email Anda dan bukan nama pengguna, sehingga membuat orang tertarik."],
      ["Menghubungkan seri", "Buka seri, buka pelacakan, dan tambahkan layanan. Watchtower mencari judul untuk Anda, dan Anda dapat mengedit istilah pencarian jika cocok dengan entri yang salah."],
      ["Berapa banyak yang dihitung sebagai ditonton", "Ambang persentase menentukan kapan sebuah episode ditandai sebagai terlihat. Setel cukup tinggi sehingga berhenti di tengah jalan tidak akan merekam satu episode penuh."],
      ["Satu arah saja", "Kemajuan mulai dari Watchtower hingga layanan. Mengedit daftar Anda di situs web tidak mengubah apa pun di aplikasi, jadi pilihlah satu tempat untuk mengelolanya."],
      ["Menonton offline", "Kemajuan yang Anda buat tanpa koneksi akan dimasukkan ke antrean dan diunggah saat Anda online lagi, sehingga penerbangan tidak kehilangan riwayat Anda."],
      ["Ketika login atau sinkronisasi gagal", "Layanan yang menolak untuk masuk biasanya merupakan sesi yang kedaluwarsa atau captcha di situs layanan itu sendiri, jadi masuklah sekali melalui situs web layanan dan coba lagi. Kemajuan yang tidak disinkronkan biasanya dimasukkan dalam antrean, bukannya hilang, dan dicoba lagi saat koneksi kembali."],
      ["Cocok dengan judul yang salah", "Pencocokan otomatis dapat memilih entri yang salah ketika judulnya ambigu. Edit istilah pencarian untuk rangkaian tersebut di bagian pelacakan dan pilih hasil yang benar, lalu konfirmasikan kemajuan yang dicapai sesuai dengan yang Anda inginkan."],
    ],
    facts: [
      "Pelacakan diatur per seri, bukan untuk keseluruhan perpustakaan.",
      "Kemajuan hanya mengalir ke luar, tidak pernah kembali ke dalam.",
      "Ambang batas menentukan kapan sebuah episode dihitung sebagai ditonton.",
      "Kemajuan offline diunggah saat Anda terhubung kembali.",
      "Login yang gagal biasanya merupakan sesi yang telah kedaluwarsa pada layanan itu sendiri.",
    ]
  },
  backups: {
    title: "Melindungi perpustakaan Anda sebelum terjadi kesalahan.",
    body: "Cadangan adalah satu file yang menyimpan perpustakaan Anda, kemajuan Anda, dan pengaturan Anda. Ini juga satu-satunya cara untuk memindahkan perpustakaan antar perangkat.",
    subsections: [
      ["Membuat satu", "Buka pengaturan data dan penyimpanan, pilih untuk membuat cadangan, dan simpan di tempat yang dapat Anda jangkau dari perangkat lain. Lakukan ini sebelum pembaruan apa pun yang Anda tidak yakin."],
      ["Apa yang ada di dalamnya", "Setiap seri yang Anda ikuti, kategori yang diikutinya, seberapa jauh pencapaian Anda, tautan pelacakan, riwayat Anda, ekstensi Anda, dan semua pengaturan Anda."],
      ["Apa yang tertinggal", "File yang diunduh, sampul khusus, dan riwayat seri yang tidak pernah ditambahkan ke perpustakaan. Itu tidak dapat dipulihkan dari cadangan."],
      ["Memulihkannya", "Impor file di perangkat baru, lalu masuk kembali ke pelacak Anda dan instal ulang ekstensi Anda sehingga semuanya dapat ditautkan kembali dengan bersih."],
      ["Pencadangan otomatis", "Tetapkan frekuensi sehingga cadangan terbaru selalu ada tanpa Anda ingat. Ini adalah satu-satunya perlindungan terbaik terhadap pembaruan yang buruk."],
      ["Pindah ke perangkat baru", "Cadangkan, instal di perangkat baru, pulihkan, lalu masuk ke pelacak dan instal ulang ekstensi. Unduhan harus disalin secara terpisah."],
      ["Ketika pemulihan gagal", "Pemulihan yang terhenti di tengah jalan biasanya berupa file cadangan yang terpotong atau ketinggalan jaman, atau ketidakcocokan versi antara cadangan dan aplikasi. Buat ulang cadangan dari perangkat sumber, konfirmasikan file disalin sepenuhnya, dan pulihkan ke aplikasi yang setidaknya sama baru dengan aplikasi yang membuatnya."],
    ],
    facts: [
      "Cadangan adalah satu-satunya cara untuk memindahkan perpustakaan antar perangkat.",
      "Media yang diunduh harus dipindahkan secara terpisah.",
      "Sampul khusus bukan bagian dari cadangan.",
      "Pencadangan otomatis adalah pertahanan teraman terhadap pembaruan yang buruk.",
      "Pemulihan yang gagal biasanya berupa file cadangan yang terpotong atau ketinggalan jaman.",
    ]
  },
  storage: {
    title: "Tempat Watchtower menyimpan filenya.",
    body: "Cadangan, unduhan, dan sumber lokal semuanya berada di satu lokasi penyimpanan. Memilihnya dengan sengaja itulah yang membuat unduhan tidak hilang nantinya.",
    subsections: [
      ["Tata letak folder", "Semuanya berada dalam satu folder yang Anda pilih: pencadangan otomatis, bab dan episode yang diunduh, manga lokal Anda, anime lokal Anda, dan konfigurasi untuk pemutar eksternal. Mengetahui tata letaknya membuat file nyasar mudah ditempatkan."],
      ["Memilih lokasi", "Pilih folder yang masih dapat Anda jangkau dalam satu tahun. Hindari volume penyimpanan yang paling mendasar, dan hindari memindahkan file dari bawah aplikasi setelahnya."],
      ["izin Android", "Android modern menyimpan aplikasi di dalam direktorinya sendiri. Berikan Watchtower akses ke folder penyimpanan yang Anda pilih, atau unduhan dan sumber lokal akan gagal secara diam-diam."],
      ["Setelah memindahkan file masuk", "Pindahkan file dari luar aplikasi lalu segarkan, sehingga Watchtower memindai ulang folder tersebut. Jika tidak, konten baru akan tetap tidak terlihat hingga ada hal lain yang memicu pemindaian."],
      ["Menjaga galeri tetap bersih", "File .nomedia di folder unduhan membuat sampul dan episode tidak masuk ke galeri foto ponsel Anda."],
      ["Mengapa penyimpanan internal lebih baik", "Pengunduhan pada penyimpanan internal lebih cepat dan kecil kemungkinannya menjadi tidak terbaca dibandingkan pada kartu yang dapat dilepas, yang dapat dilepas atau rusak."],
      ["Ketika aplikasi tidak dapat menjangkau folder tersebut", "Kesalahan izin dan hilangnya unduhan berasal dari folder penyimpanan yang dipindahkan atau menjadi tidak dapat dibaca. Konfirmasikan bahwa aplikasi masih memiliki akses, periksa ruang kosong, dan pilih penyimpanan internal daripada kartu yang dapat dilepas yang dapat dilepas."],
    ],
    facts: [
      "Cadangan, unduhan, dan sumber lokal berbagi satu lokasi penyimpanan.",
      "Android memerlukan izin eksplisit untuk folder itu.",
      "File .nomedia menyembunyikan media yang diunduh dari galeri.",
      "Penyimpanan internal lebih andal dibandingkan kartu SD.",
      "Folder penyimpanan yang dipindahkan atau tidak dapat dibaca menyembunyikan unduhan dan cadangan.",
    ]
  },
  settings: {
    title: "Setelan yang mengubah perilaku aplikasi.",
    body: "Di luar opsi masing-masing fitur, beberapa pengaturan di seluruh aplikasi memengaruhi pembaruan, privasi, instalasi, dan cara Anda memulihkan ketika terjadi kesalahan.",
    subsections: [
      ["Umum", "Tema, bahasa antarmuka, dan cara perpustakaan berperilaku secara default. Ini berlaku di mana saja sekaligus, jadi ini adalah tempat pertama yang harus dilihat ketika aplikasinya tidak terasa seperti milik Anda."],
      ["Pribadi", "Menyembunyikan layar di pengalih aplikasi membuat perpustakaan Anda tidak berisi thumbnail, dan mode penyamaran berhenti merekam riwayat saat Anda menjelajah. Penyamaran menyembunyikan apa yang Anda lihat, bukan seberapa jauh jarak yang Anda capai."],
      ["Jaringan", "DNS terenkripsi dapat melewati beberapa pemblokiran dasar dan patut dicoba ketika sumber tidak dapat dimuat di satu jaringan tetapi berfungsi di jaringan lain. Proksi melakukan pekerjaan yang sama untuk seluruh jaringan."],
      ["Memasang ekstensi", "Android biasanya memblokir pemasangan dari luar toko. Memberikan izin itulah yang memungkinkan ekstensi dipasang, dan Shizuku adalah alternatif untuk perangkat yang membuatnya canggung."],
      ["Diagnostik", "Log kerusakan, pengambilan logcat, dan pembuatan ulang indeks ada di sini. Di sinilah Anda pergi ketika ada sesuatu yang tidak beres dan Anda menginginkan bukti daripada dugaan."],
      ["Sebelum Anda melaporkan masalah", "Catat versi aplikasi Anda, sumber yang gagal, dan tampilan layar. Hal ini mengubah laporan yang tidak jelas menjadi sesuatu yang sebenarnya bisa diperbaiki."],
      ["Menyetel ulang keadaan macet", "Menghapus cache, menghapus cookie dan data web, serta membangun kembali indeks, masing-masing memperbaiki kelas masalah yang berbeda. Cache menghapus data halaman lama, cookie menghapus verifikasi yang macet, dan pembangunan kembali indeks memindai ulang folder penyimpanan. Menghapus database akan menghapus seri yang tidak ada di perpustakaan Anda, yang merupakan perbaikan biasa untuk sampul lokal kosong."],
      ["Pilihan terakhir yang menyimpan data Anda", "Jika tidak ada yang berhasil, ambil cadangan baru, lalu instal ulang aplikasi dan pulihkan. Itu menjaga perpustakaan dan pengaturan Anda sambil mengganti apa pun yang rusak dalam instalasi itu sendiri."],
    ],
    facts: [
      "Pengaturan privasi pengalih aplikasi harus dinonaktifkan untuk mengambil tangkapan layar.",
      "Penyamaran menghentikan pencatatan riwayat, bukan kemajuan.",
      "Log kerusakan tetap ada di perangkat Anda dan tidak pernah dikirim secara otomatis.",
      "DNS terenkripsi sering kali memperbaiki sumber yang gagal pada satu jaringan saja.",
      "Cache, cookie, dan indeks masing-masing memperbaiki kelas masalah yang berbeda.",
      "Cadangkan sebelum menginstal ulang, lalu pulihkan untuk menjaga perpustakaan Anda.",
    ]
  },
  "extension-runtime": {
    title: "Bagaimana ekstensi dijalankan dan seberapa amannya.",
    body: "Ekstensi adalah JavaScript, dan Watchtower menjalankannya di kotak pasir yang memberi mereka jaringan dan tidak ada yang lain. Halaman ini menjelaskan apa artinya bagi Anda.",
    subsections: [
      ["Apa yang menjalankan ekstensi Anda", "Watchtower menggunakan mesin JavaScript kecil yang tertanam di aplikasi. Ini adalah mesin yang sama di setiap platform, itulah sebabnya sumber berperilaku sama di telepon dan di server."],
      ["Ekstensi apa yang boleh dilakukan", "Itu dapat membuat permintaan web, mengurai halaman yang diterimanya dan menyimpan beberapa pengaturannya sendiri. Itu adalah keseluruhan kotak peralatan."],
      ["Apa yang dijauhinya", "File Anda, perpustakaan Anda, akun Anda, dan layar aplikasi itu sendiri. Segala sesuatu yang dihasilkan oleh ekstensi diserahkan kembali sebagai data biasa untuk dirender oleh aplikasi."],
      ["Mengapa sumber yang lambat terseret", "Sumber yang merespons dengan lambat membuat layarnya sendiri menjadi lambat, karena aplikasi menunggunya. Sumber lain tidak terpengaruh, jadi kelambatan adalah tanda dari sumber yang buruk, bukan aplikasi yang berat."],
      ["Apa artinya ini bagi kepercayaan", "Sandbox membatasi apa yang dapat dirusak oleh suatu ekstensi, namun tidak menilai niatnya. Ia masih dapat melihat apa pun yang Anda ketikkan dan apa pun yang diambilnya. Instal dari orang yang Anda percayai."],
      ["Mesin yang sama di mana-mana", "Karena aplikasi dan baris perintah Linux berbagi runtime ini, ekstensi yang berfungsi di ponsel Anda juga berfungsi di server, tanpa perubahan."],
    ],
    facts: [
      "Ekstensi mendapatkan akses jaringan dan penguraian halaman, tidak lebih.",
      "Mereka tidak dapat membaca file atau perpustakaan Anda secara langsung.",
      "Satu sumber yang lambat hanya memperlambat layarnya sendiri.",
      "Kotak pasir yang sama berjalan di perangkat seluler, desktop, dan baris perintah.",
    ]
  },
  "extension-contract": {
    title: "Apa yang harus disediakan oleh sumber.",
    body: "Agar sebuah ekstensi berfungsi, ia harus menjawab serangkaian pertanyaan tetap: apa yang populer, apa yang baru, apa yang dihasilkan penelusuran, apa isi serialnya, dan di mana halaman dan alirannya berada.",
    subsections: [
      ["Daftar dan cari", "Panggilan ini mengembalikan daftar yang dapat dijelajahi: apa yang populer, apa yang dirilis baru-baru ini, dan apa yang muncul dalam penelusuran istilah. Ini adalah jumlah minimum agar suatu sumber dapat digunakan."],
      ["Seri dan bab", "Satu panggilan mengisi detail sebuah serial, dan panggilan lainnya mengembalikan bab atau episode yang diurutkan. Tanpa ini, suatu sumber dapat dicari tetapi tidak dapat dibuka."],
      ["Halaman dan video", "Untuk membaca, panggilan mengembalikan alamat gambar suatu bab. Untuk video, panggilan mengembalikan streaming yang tersedia beserta kualitas dan header apa pun yang diperlukan."],
      ["Ekstra opsional", "Filter, pengaturan khusus sumber, dan penanganan gambar khusus bersifat opsional. Sumber tanpa mereka masih berfungsi; itu hanya menawarkan lebih sedikit untuk dikonfigurasi."],
      ["Mengapa tipe konten penting", "Jenis yang dideklarasikan oleh ekstensi menentukan apakah suatu hasil akan terbuka di pembaca manga, pemutar video, atau pembaca novel. Melakukan kesalahan akan mengirimkan konten ke layar yang salah."],
      ["Apa yang tidak diperlukan", "Segala sesuatu selain daftar dan pencarian adalah bonus. Sumber minimal yang hanya mencantumkan dan mencari adalah sumber yang sangat bagus."],
    ],
    facts: [
      "Daftar dan pencarian saja membuat sumber dapat dijelajahi.",
      "Detail dan panggilan bab inilah yang membuat sebuah seri terbuka.",
      "Filter dan pengaturan sumber bersifat opsional.",
      "Tipe konten menentukan pembaca atau pemutar mana yang dibuka.",
    ]
  },
  "ui-schema": {
    title: "Membiarkan sumber mendesain layar beranda sendiri.",
    body: "Beberapa sumber menyajikan halaman depan yang kaya: spanduk, deretan sampul, blok unggulan. Daripada menulis kode aplikasi untuk masing-masing aplikasi, ekstensi dapat mendeskripsikan tata letak itu sendiri.",
    subsections: [
      ["Untuk apa", "Sumber dapat mendeskripsikan layar beranda sebagai data: baris, kartu, dan spanduk, masing-masing menunjuk pada konten yang disediakan sumber. Aplikasi ini menggambarnya dengan widget normalnya."],
      ["Mengapa ini merupakan ide yang bagus", "Artinya, situs web baru dapat memiliki halaman depan yang disesuaikan tanpa rilis aplikasi baru, dan halaman tersebut tetap terlihat asli, bukan seperti halaman web di dalam kotak."],
      ["Apa yang bisa dijelaskan", "Daftar, baris, kartu, spanduk, dan blok teks adalah blok penyusunnya. Itu mencakup tata letak hampir semua layar beranda sumber dalam praktiknya."],
      ["Ketika suatu sumber tidak memilikinya", "Jika ekstensi tidak menjelaskan tata letak, Watchtower membuat ekstensi dari daftar sumber. Tidak ada yang rusak; halamannya lebih jelas."],
      ["Apa yang tidak bisa dilakukannya", "Deskripsinya adalah data, bukan kode. Itu tidak dapat menjalankan logika, menjangkau file Anda, atau mengubah perilaku aplikasi itu sendiri, itulah sebabnya aman untuk diterima."],
      ["Untuk orang-orang yang menulis sumber", "Anggap saja sebagai file tata letak, bukan program. Anda memberi tahu aplikasi apa yang ingin ditampilkan, bukan cara menggambarnya."],
    ],
    facts: [
      "Sumber dapat menggambarkan layar berandanya sebagai data.",
      "Blok penyusun yang tidak diketahui akan diabaikan daripada merusak halaman.",
      "Tata letak default digunakan ketika sumber tidak menyediakannya.",
      "Deskripsi tidak dapat menjalankan kode atau menjangkau file Anda.",
    ]
  },
  api: {
    title: "Mengemudi Watchtower dari program lain.",
    body: "Aplikasi ini dapat membuka server web kecil di mesin Anda sendiri, yang memungkinkan skrip, pemutar eksternal, dan perangkat lain menggunakan sumber yang sama dengan yang digunakan aplikasi.",
    subsections: [
      ["Apa itu", "Server web kecil yang terpasang di dalam aplikasi. Ia menggunakan ekstensi yang sama dan pustaka yang sama dengan antarmukanya, jadi apa pun yang dikembalikannya cocok dengan apa yang Anda lihat di layar."],
      ["Menyalakannya", "Ini mati sampai Anda mengaktifkannya dengan sengaja. Aktifkan di pengaturan lanjutan dan catat portnya, lalu arahkan alat Anda ke alamat itu."],
      ["Apa yang bisa Anda tanyakan padanya", "Sumber yang Anda instal, entri perpustakaan Anda, pencarian terhadap sumber apa pun, dan aliran video yang terselesaikan. Itu cukup untuk menggerakkan pusat media atau pemutar eksternal."],
      ["Mengapa Anda mungkin menginginkannya", "Otomatisasi, front end yang berbeda, atau membiarkan perangkat lain di jaringan Anda menggunakan sumber yang telah disiapkan oleh ponsel Anda."],
      ["Simpan di jaringan Anda sendiri", "Server tidak memiliki kata sandi dan ditujukan untuk jaringan lokal tepercaya. Jangan memaparkannya ke internet, di mana siapa pun dapat membaca perpustakaan Anda."],
      ["Bagaimana kaitannya dengan baris perintah", "Baris perintah Linux mengekspos server yang sama, sehingga skrip yang ditulis pada aplikasi berfungsi pada mesin tanpa kepala tanpa perubahan."],
    ],
    facts: [
      "Server mati sampai Anda mengaktifkannya di pengaturan.",
      "Ia mendengarkan pada port 4567 secara default.",
      "Ia menggunakan sumber dan perpustakaan yang sama dengan antarmuka.",
      "Ini dimaksudkan untuk jaringan lokal tepercaya, bukan internet.",
    ]
  },
  cli: {
    title: "Menjalankan Watchtower tanpa layar.",
    body: "Baris perintah Linux menjalankan mesin yang sama dengan aplikasi, sehingga server atau pekerjaan terjadwal dapat mengambil, mencari, dan mengunduh tanpa ada yang mengawasi.",
    subsections: [
      ["Untuk apa", "Server, sesi SSH, dan pekerjaan otomatis. Ini adalah mesin ekstensi yang sama dengan aplikasi dengan antarmuka teks, bukan layar, sehingga tidak memerlukan sesi grafis."],
      ["Menjadi berorientasi", "Mulailah dengan perintah bantuan, lalu jalankan perintah dokter untuk memastikan runtime dapat memuat dan mencapai semua yang diperlukan sebelum Anda mempercayakannya pada suatu pekerjaan."],
      ["Bekerja dengan ekstensi", "Buat daftar apa yang ditawarkan repositori, validasi, dan uji sumber terhadap situs langsung. Pengujian berjalan secara bertahap, mulai dari memuat sumber hingga melakukan pencarian dan panggilan detailnya."],
      ["Menelepon sumber secara langsung", "Anda dapat menjalankan satu operasi, seperti pencarian, dan mendapatkan kembali JSON. Itulah yang membuat baris perintah berguna untuk pembuatan skrip dan untuk men-debug sumber."],
      ["Melayani melalui jaringan", "Itu dapat memulai server web yang sama dengan yang diekspos oleh aplikasi, yaitu cara klien jarak jauh berbicara dengan mesin tanpa kepala."],
      ["Apa yang belum dilakukannya", "Perintah perpustakaan, riwayat, dan antrean unduhan tidak tersedia tanpa kepala, karena baris perintah tidak membuka database lokal aplikasi. Mereka masih membutuhkan aplikasinya."],
    ],
    facts: [
      "Baris perintah menggunakan kembali mesin ekstensi aplikasi.",
      "Perintah dokter memeriksa runtime sebelum Anda mengandalkannya.",
      "Sebuah sumber dapat diuji secara bertahap, mulai dari memuat hingga mencari.",
      "Perintah perpustakaan dan unduh masih memerlukan aplikasi.",
    ]
  },
  deployment: {
    title: "Menjalankan Watchtower di server Anda sendiri.",
    body: "Untuk server rumah atau grup kecil, baris perintah Linux dapat berjalan terus menerus dan menyajikan sumber yang sama ke setiap klien di jaringan Anda.",
    subsections: [
      ["Apa yang Anda dapatkan", "Satu folder yang menampung baris perintah dan file runtime yang diperlukan. Skrip penginstal menyalinnya ke awalan yang Anda pilih dan menyiapkannya untuk dijalankan."],
      ["Menginstalnya", "Jalankan penginstal dengan folder yang Anda buka kemasannya dan awalan yang Anda inginkan. Menggunakan awalan di bawah direktori home Anda menghindari kebutuhan root untuk semuanya setelahnya."],
      ["Menjalankannya sebagai layanan", "Karena dapat melayani melalui HTTP, Anda dapat tetap menjalankannya di latar belakang dan membiarkan perangkat lain di jaringan Anda menggunakan sumber yang telah dikonfigurasi."],
      ["Apa gunanya", "Pusat media, pengunduh terjadwal, atau satu mesin yang menyimpan sumber sehingga mesin lain tidak perlu menyimpannya. Ini adalah mesin yang sama, jadi sumber berperilaku sama."],
      ["Menjaganya tetap terkini", "Perbarui dengan membongkar versi yang lebih baru dan menjalankan penginstal lagi. Konfigurasi Anda ada di awalan dan tidak ditimpa oleh peningkatan."],
      ["Jika sesuatu tidak berjalan", "Perintah dokter ada untuk hal ini. Jalankan terlebih dahulu dan ia akan memberi tahu Anda apakah runtime, jaringan, atau sumber masalahnya."],
    ],
    facts: [
      "Build tanpa kepala adalah folder mandiri plus penginstal.",
      "Menginstal di bawah direktori home Anda menghindari kebutuhan root.",
      "Itu dapat melayani melalui HTTP ke perangkat lain di jaringan Anda.",
      "Perintah dokter mendiagnosis sebagian besar kegagalan startup.",
    ]
  },
  troubleshooting: {
    title: "Ketika ada sesuatu yang tidak berfungsi.",
    body: "Hampir setiap masalah disebabkan oleh salah satu dari beberapa hal: sumber yang berubah, pemblokiran dari situs web, izin yang hilang, atau ekstensi yang perlu diperbarui. Kerjakan dalam urutan itu.",
    subsections: [
      ["Mulailah dengan mempersempitnya", "Sebelum menyentuh pengaturan apa pun, putuskan apakah masalahnya adalah sumbernya, jaringan Anda, atau perangkat Anda. Satu sumber gagal sementara yang lain menunjuk ke sumber itu; semua titik kegagalan pada aplikasi atau koneksi."],
      ["Perbarui semuanya terlebih dahulu", "Segarkan repositori Anda dan instal pembaruan ekstensi apa pun, lalu periksa pembaruan aplikasi. Sebagian besar kerusakan mendadak terjadi pada situs web yang berubah dan ekstensi yang telah diperbaiki tetapi belum dipasang."],
      ["Sebuah sumber berhenti bekerja", "Ini adalah masalah yang paling umum dan biasanya paling tidak serius. Situs web berubah, ekstensi memerlukan pembaruan, dan menyegarkan repositori Anda adalah solusinya. Jika belum ada pembaruan, pembuat ekstensi belum menyusul."],
      ["Tidak ada yang memuat sama sekali", "Jika setiap sumber gagal, lihat jaringannya saja. Coba data seluler, jaringan Wi-Fi lain, dan DNS terenkripsi di pengaturan. Satu jaringan memblokir semuanya, atau portal captive yang belum digunakan untuk masuk, sering menjadi penyebab."],
      ["Membuka situs untuk melewati cek", "Beberapa situs memasang verifikasi sebelum menjawab. Buka sumber dari Telusuri dan gunakan browser bawaan untuk memuat halaman situs itu sendiri, selesaikan pemeriksaan apa pun dengan tangan, lalu tutup dan kembali ke aplikasi. Melakukan hal ini sekali sering kali akan menghapus blok untuk sumber tersebut."],
      ["Cloudflare dan pemuatan ulang tanpa akhir", "Situs di belakang Cloudflare dapat terus memuat ulang pemeriksaannya alih-alih membiarkan Anda lewat. Coba buka kembali situs tersebut di browser bawaan, ubah agen pengguna Anda di pengaturan lanjutan, atau tunggu hingga situs menurunkan perlindungannya. Beberapa sumber sengaja dibuat sulit untuk digunakan dari suatu aplikasi."],
      ["Menghapus cookie dan data web", "Tindakan ini akan menyetel ulang status penjelajahan aplikasi yang disimpan, termasuk login apa pun. Ini adalah perbaikan yang tepat untuk pemeriksaan yang macet, dan ini layak dilakukan sebelum memutuskan sumbernya mati. Anda harus masuk lagi setelahnya jika sumber memerlukan akun."],
      ["Mengubah agen pengguna Anda", "Agen pengguna adalah string yang mengidentifikasi perangkat Anda ke situs web, dan beberapa situs memperlakukannya sebagai sinyal bot. Mengganti default dengan string browser umum, lalu memulai ulang aplikasi, terkadang melewati pemeriksaan yang sebaliknya akan berulang."],
      ["Ekstensi tidak akan dipasang", "Android memblokir pemasangan dari luar toko secara default. Izinkan untuk pengelola file atau browser Anda, dan jika opsi itu tidak ada, gunakan Shizuku sebagai rute alternatif. Pengunduhan yang terhenti di tengah jalan menghasilkan pesan yang berbeda, jadi instal ulang dari awal."],
      ["Konten terbuka di tempat yang salah", "Jika manga dibuka di pemutar video, atau episode di pembaca, ekstensi menyatakan jenis konten yang salah. Itu adalah kesalahan pada ekstensi, bukan pada pengaturan Anda, jadi laporkan daripada mencoba memperbaikinya secara lokal."],
      ["Mendapatkan log kerusakan dan detail lebih lanjut", "Setelan lanjutan dapat membuang log kerusakan, dan tangkapan logcat dari perangkat Anda menunjukkan apa yang sedang dilakukan aplikasi secara lebih mendalam. Keduanya layak dilampirkan ketika Anda melaporkan suatu masalah, karena keduanya mengubah deskripsi yang samar-samar menjadi sesuatu yang dapat dilacak."],
      ["Penyimpanan dan pembacaan lambat atau lamban", "Pemuatan yang lambat biasanya terjadi pada situs, koneksi Anda, atau batas kecepatan, bukan aplikasinya. Pembacaan yang lamban disebabkan oleh gambar yang terlalu besar dalam satu bab. Beralih sumber, mengosongkan memori, atau menunggu batas kecepatan adalah perbaikan praktisnya."],
      ["Ketika itu bukan hanya kamu", "Jika orang lain melihat kegagalan yang sama, itu adalah ekstensi atau aplikasinya, bukan penyiapan Anda. Periksa pelacak masalah proyek untuk mengetahui sumbernya sebelum membuka laporan baru, dan sertakan versi aplikasi Anda dan teks kesalahan yang sebenarnya."],
    ],
    facts: [
      "Satu sumber yang rusak hampir selalu merupakan sumbernya, bukan aplikasinya.",
      "Ekstensi yang basi adalah penyebab paling umum dari kerusakan mendadak.",
      "Jika setiap sumber gagal, curigai jaringan sebelum aplikasi.",
      "Membuka situs di browser internal akan menghapus banyak pemeriksaan verifikasi.",
      "Menghapus cookie dan data web akan menyetel ulang cek yang macet dan login apa pun.",
      "Log kerusakan dan logcat membuat laporan bug dapat dilacak.",
    ]
  },
  errors: {
    title: "Setiap pesan kesalahan, dan artinya.",
    body: "Watchtower menampilkan kesalahan mentah, bukan menyembunyikannya, jadi pesan itu sendiri adalah petunjuk tercepat yang Anda miliki. Temukan milik Anda di bawah dan coba perbaikan pertama sebelum mengubah apa pun.",
    subsections: [
      ["403 Dilarang", "Situs web telah memutuskan permintaan Anda terlihat otomatis dan menolaknya. Dalam praktiknya, ini adalah perlindungan anti-bot. Perbarui ekstensi terlebih dahulu, lalu buka sumbernya di browser bawaan satu kali untuk menghapus semua pemeriksaan yang dilakukan situs. Jika masih menolak, sumber tersebut mungkin telah meningkatkan perlindungannya atau memblokir alamat Anda."],
      ["404 Tidak ditemukan", "Halaman yang diharapkan ekstensinya telah dipindahkan atau dihapus. Ini adalah ekstensi yang basi hampir setiap saat, jadi segarkan repositori Anda dan perbarui. Jika belum ada pembaruan, pembuat ekstensi belum mengetahui situsnya."],
      ["429 Terlalu banyak permintaan", "Anda telah dibatasi tarifnya karena membuat permintaan terlalu cepat. Menunggu adalah perbaikan yang sebenarnya, dan mengurangi seberapa sering pembaruan dan pengunduhan dijalankan akan menghentikannya berulang. Mencoba kembali dengan segera hanya akan memperluas blok."],
      ["500, 502 dan kesalahan 5xx lainnya", "Situs webnya sendiri gagal. Tidak ada yang perlu diperbaiki pada perangkat Anda, dan langkah yang tepat adalah menunggu dan mencoba lagi nanti. Memeriksa situs di browser mengonfirmasi apakah situs tersebut tidak aktif untuk semua orang."],
      ["1006 dan 1020, kode firewall", "1006 biasanya berarti larangan IP sementara, dan 1020 berarti aturan firewall yang ditetapkan oleh pemilik situs, sering kali untuk memblokir pengunjung dari luar negaranya. Mengubah jaringan dapat membantu dengan 1006; 1020 biasanya tidak dapat diatasi."],
      ["Gagal melewati Cloudflare", "Situs ini dilindungi oleh Cloudflare dan pemeriksaan otomatis tidak berhasil. Buka halaman sumber di browser internal dan selesaikan verifikasi apa pun secara manual, lalu kembali ke aplikasi. Jika halaman dimuat ulang tanpa henti, lihat halaman pemecahan masalah."],
      ["Tidak dapat menyelesaikan host, koneksi gagal, batas waktu habis", "Ini adalah masalah jaringan, bukan kesalahan pada sumbernya. Periksa apakah perangkat memiliki akses internet, coba jaringan atau data seluler lain, dan aktifkan DNS terenkripsi di pengaturan. Portal Wi-Fi terikat adalah penyebab umum."],
      ["Validasi sertifikat gagal", "Sertifikat keamanan situs tidak dapat divalidasi. Periksa apakah tanggal dan waktu perangkat sudah benar, hapus cache dan cookie aplikasi, dan coba jaringan lain. Sertifikat yang kedaluwarsa di situs bukanlah sesuatu yang dapat Anda perbaiki."],
      ["Kesalahan penyimpanan dan kartu SD", "Pesan tentang kartu, jalur, atau folder tidak tersedia berarti lokasi pengunduhan telah berpindah atau tidak dapat dibaca. Periksa ruang kosong, konfirmasikan bahwa aplikasi masih memiliki izin untuk folder tersebut, dan beralih kembali ke penyimpanan internal jika kartu terus gagal."],
      ["Aplikasi atau ekstensi tidak akan dipasang", "APK yang ditandatangani oleh orang lain, unduhan yang terpotong, dan arsitektur prosesor yang salah masing-masing menghasilkan pesan penginstal yang berbeda. Hapus salinan konflik dan unduh kembali file tersebut, dan pastikan Android diizinkan untuk memasang aplikasi yang tidak dikenal."],
      ["Ketika kesalahan tidak tercantum di sini", "Salin pesan yang sebenarnya daripada memparafrasekannya. Nama operasi dan URL di dalamnya biasanya mengarah langsung ke langkah yang gagal, dan halaman pemecahan masalah akan mempersempitnya."],
    ],
    facts: [
      "403 dan 429 keduanya berarti situs tersebut menolak Anda, karena alasan yang berbeda.",
      "404 hampir selalu merupakan ekstensi yang perlu diperbarui.",
      "Kesalahan 5xx adalah kesalahan situs web, bukan kesalahan perangkat Anda.",
      "1006 adalah larangan sementara; 1020 adalah aturan firewall yang tidak dapat Anda lewati.",
      "Salin pesan yang sebenarnya: URL di dalamnya menyebutkan langkah yang gagal.",
      "Ketidakcocokan tanda tangan berarti salinan yang ditandatangani berbeda dipasang.",
    ]
  },
  faq: {
    title: "Pertanyaan yang sering muncul.",
    body: "Jawaban singkat atas pertanyaan orang sebelum dan sesudah menginstal Watchtower, dikelompokkan berdasarkan bagian aplikasi yang mereka sentuh.",
    subsections: [
      ["Mengapa tidak ada di app store?", "Karena Watchtower memasang ekstensi saat runtime, kebijakan toko tidak mengizinkannya. Itu juga sebabnya setiap pemasangan berasal dari APK yang Anda percayai."],
      ["Apakah ada versi iOS?", "Kode dasarnya adalah lintas platform, namun pengiriman di iOS dibatasi oleh aturan platform dan tidak dijanjikan. Android adalah platform yang mengutamakan segalanya."],
      ["Apakah ini berfungsi tanpa internet?", "Apa pun yang Anda unduh, ditambah file lokal, berfungsi sepenuhnya offline. Menjelajahi sumber dan mencari tidak diperlukan, karena mereka memerlukan situs web itu sendiri."],
      ["Bisakah saya melakukan sinkronisasi antar perangkat?", "Tidak ada sinkronisasi otomatis. Anda memindahkan perpustakaan Anda dengan file cadangan, dan media yang diunduh harus disalin secara terpisah."],
      ["Apakah legal dan gratis?", "Watchtower gratis dan bersumber terbuka, dan tidak mengandung konten tersendiri. Apa yang Anda tambahkan melalui ekstensi adalah tanggung jawab Anda, itulah sebabnya aplikasi berhati-hati untuk mengatakan bahwa itu tidak memeriksanya."],
      ["Mengapa saya tidak dapat melihat sumber yang diinstal?", "Dua filter menyembunyikan sumber tanpa menghapusnya. Jika ekstensi menggunakan bahasa selain bahasa perangkat Anda, aktifkan bahasa tersebut di filter daftar sumber. Jika ini adalah sumber dewasa, aktifkan opsi yang menampilkan sumber NSFW dalam daftar."],
      ["Bagaimana cara mencopot pemasangan ekstensi?", "Copot pemasangannya dari layar ekstensi, atau seperti aplikasi lain di pengaturan Android. Entri perpustakaan Anda tetap ada dan ditampilkan sebagai tidak tersedia hingga sumber lain dapat menyajikannya."],
      ["Mengapa unduhan saya tidak muncul?", "Unduhan terdeteksi berdasarkan folder. Jika lokasi penyimpanan dipindahkan, kartu SD dilepas, atau sumber atau seri diubah namanya di situs, aplikasi tidak dapat mencocokkan folder tersebut. Perbaiki lokasi atau ganti nama folder agar sesuai, lalu bangun kembali indeks unduhan."],
      ["Mengapa galeri foto saya menampilkan sampul dan episode?", "Aplikasi biasanya menyembunyikan medianya dari galeri sistem dengan file .nomedia. Jika tidak, buat sendiri dan letakkan di folder unduhan, atau di folder sumber lokal jika itu yang bocor."],
      ["Mengapa membaca atau memuat lambat?", "Pemuatan yang lambat disebabkan oleh situs, koneksi Anda, atau batas kecepatannya, bukan aplikasinya yang berat. Pembacaan yang lamban disebabkan oleh gambar yang terlalu besar dalam satu bab, jadi kosongkan memori atau pilih sumber dengan pindaian yang lebih kecil."],
      ["Mengapa beberapa episode tidak ditampilkan?", "Selain masalah jaringan, aplikasi terkadang melewatkan keberadaan video. Meninggalkan pemutar dan membuka episode lagi biasanya akan mendaftarkannya."],
      ["Mengapa pembaruan perpustakaan melewatkan entri?", "Entri dengan konten yang belum ditonton atau dibaca, entri yang belum Anda mulai, entri yang ditandai selesai, dan entri yang tidak diharapkan rilisnya sengaja dilewati. Hal ini mencegah perpustakaan besar membobol sumber dan memblokir aplikasi."],
      ["Mengapa pembaruan perpustakaan berhenti di latar belakang?", "Beberapa build Android secara agresif menghemat baterai dan menunda pekerjaan di latar belakang. Kecualikan Watchtower dari pengoptimalan baterai jika pembaruan hanya muncul saat Anda membuka aplikasi."],
      ["Mengapa pengambilan tangkapan layar diblokir?", "Pengaturan privasi yang menyembunyikan aplikasi di pengalih tugas juga memblokir tangkapan layar. Matikan pengaturan itu jika Anda ingin menangkap layar."],
      ["Ada yang rusak, bagaimana sekarang?", "Perbarui ekstensi Anda terlebih dahulu, karena ini akan memperbaiki sebagian besar kerusakan. Jika masalah terus berlanjut, periksa halaman kesalahan untuk melihat pesan persis yang Anda lihat, lalu halaman pemecahan masalah, sebelum berasumsi bahwa aplikasi tersebut salah."],
    ],
    facts: [
      "Watchtower tidak didistribusikan melalui toko aplikasi.",
      "Konten yang diunduh dan file lokal berfungsi sepenuhnya offline.",
      "Tidak ada sinkronisasi otomatis antar perangkat.",
      "Sumber tersembunyi biasanya berupa filter bahasa atau tombol NSFW.",
      "Unduhan dicocokkan dengan nama folder, jadi mengganti nama akan menyembunyikannya.",
      "Memperbarui ekstensi memperbaiki kerusakan yang paling tiba-tiba.",
    ]
  },
  contribute: {
    title: "Membantu menjadikan Watchtower lebih baik.",
    body: "Aplikasi, ekstensi, dan dokumentasi ini semuanya terbuka. Ada pekerjaan yang bermanfaat bagi orang yang menulis kode dan bagi orang yang tidak.",
    subsections: [
      ["Cara untuk membantu", "Laporkan bug dengan pesan yang sama persis dengan yang Anda lihat, perbaiki sumbernya, tulis ekstensi untuk situs yang belum diliput oleh siapa pun, atau terjemahkan situs ini ke bahasa lain."],
      ["Bekerja pada aplikasi", "Kloning repositori, instal toolchain Flutter dan Rust, dan jalankan penganalisis sebelum Anda membuka permintaan pull. Go hanya diperlukan jika Anda mengganti server torrent."],
      ["Mengerjakan dokumentasi", "Situs ini adalah gudangnya sendiri. Menambah bahasa berarti menambah satu file terjemahan; tata letak dan navigasi sudah menangani sisanya."],
      ["Menerjemahkan", "Aplikasi dan situs ini menyediakan banyak bahasa, dan yang baru bersifat tambahan. Anda tidak perlu menyentuh desain untuk menambahkan bahasa Anda sendiri."],
      ["Melaporkan bug yang bagus", "Sertakan versi aplikasi Anda, sumber yang Anda gunakan, teks kesalahan sebenarnya, dan apakah sumber lain masih berfungsi. Itu biasanya cukup untuk menemukan kesalahannya."],
      ["Sebelum perubahan besar", "Buka terbitan atau tanyakan di Discord terlebih dahulu. Ini menyelamatkan Anda dari membangun sesuatu yang tidak sesuai dengan arah proyek."],
    ],
    facts: [
      "Dokumentasi adalah repositori terpisah dari aplikasi.",
      "Menambah bahasa berarti menambah satu file, bukan mengubah layout.",
      "Melaporkan teks kesalahan yang tepat akan menghemat waktu paling banyak.",
      "Karat diperlukan agar aplikasi berfungsi; Gunakan hanya untuk server torrent.",
    ]
  },

  history: {
    title: "Segala sesuatu yang telah Anda buka.",
    body: "Sejarah mencatat apa yang Anda tonton dan baca, sehingga Anda dapat kembali ke sesuatu yang belum Anda selesaikan tanpa memburunya lagi.",
    subsections: [
      ["Apa yang dicatatnya", "Membuka sebuah episode atau bab menambahkan entri dengan waktu dan seberapa jauh yang Anda capai. Riwayat adalah catatan aktivitas, bukan perpustakaan kedua, sehingga akan terisi dengan sendirinya saat Anda menggunakan aplikasi."],
      ["Memfilter dan menyortir", "Persempit daftar menjadi hari ini, minggu ini, atau bulan ini, beralih antara daftar dan kisi, dan urutkan berdasarkan tanggal atau judul. Ini mengubah apa yang ditampilkan dan tidak ada yang lain."],
      ["Kembali ke seri", "Ketuk entri untuk membuka kembali rangkaian di mana Anda meninggalkannya. Sejarah adalah jalan tercepat untuk kembali ke sesuatu yang pernah Anda cicipi dan sisihkan."],
      ["Penyamaran dan privasi", "Saat mode penyamaran aktif, tidak ada hal baru yang direkam, jadi tidak ada hal baru yang Anda buka yang muncul di riwayat. Mematikannya akan melanjutkan perekaman sejak saat itu."],
      ["Menghapus riwayat", "Anda dapat menghapus riwayat tanpa menyentuh perpustakaan atau kemajuan yang Anda simpan. Menghapusnya hanya menghapus catatan dari apa yang Anda buka."],
      ["Ketika sejarah terlihat salah", "Entri yang ditampilkan sebagai belum ditonton biasanya berarti sumbernya mengubah alamat episode, sehingga aplikasi memperlakukannya seperti baru. Menghapus entri yang menyimpang dan menyegarkan seri akan merapikannya."],
    ],
    facts: [
      "Riwayat mencatat aktivitas, itu tidak menggantikan perpustakaan Anda.",
      "Filter mempersempit tampilan tanpa menghapus apa pun.",
      "Mode penyamaran menghentikan penulisan riwayat baru.",
      "Menghapus riwayat membuat kemajuan Anda tidak tersentuh.",
    ]
  },

  calendar: {
    title: "Apa yang dirilis, dan kapan.",
    body: "Kalender menampilkan bab dan episode mendatang dari perpustakaan Anda, sehingga Anda dapat melihat sekilas apa yang harus diselesaikan hari ini dan apa yang akan datang nanti.",
    subsections: [
      ["Tampilan bulan", "Hari dengan rilis ditandai, dan mengetuk hari akan melompat ke daftar tanggal tersebut. Ini menjawab apa yang keluar minggu ini tanpa membuka satu seri pun."],
      ["Jadwal mingguan", "Jadwalnya menampilkan satu minggu dengan sampul setiap rilis mendatang, yang terbaca lebih baik daripada kisi-kisi bulan yang padat di telepon."],
      ["Memfilter berdasarkan status", "Hanya tampilkan status yang Anda minati, sehingga rangkaian yang sudah selesai dan dijeda tidak mengacaukan tampilan yang Anda gunakan untuk merencanakan minggu ini."],
      ["Apa arti tanggalnya", "Tanggal adalah saat terakhir kali sumber mengatakan sesuatu yang diharapkan, bukan janji. Sumber yang tidak mempublikasikan tanggalnya tidak akan muncul."],
      ["Menunjukkan entri yang ditonton", "Sebuah opsi menandai apa yang telah Anda lihat di jadwal, sehingga tampilan minggu berfungsi ganda sebagai daftar periksa."],
      ["Saat kalender kosong", "Kalender kosong biasanya berarti sumber yang Anda ikuti tidak mempublikasikan tanggal rilis. Itu adalah batasan sumbernya, bukan kesalahan pada aplikasi."],
    ],
    facts: [
      "Tanggal rilis berasal dari sumbernya, bukan dari aplikasi.",
      "Jadwal dapat disaring berdasarkan status seri.",
      "Sebuah opsi menandai entri yang telah Anda tonton.",
      "Sumber tanpa tanggal tidak akan muncul sama sekali.",
    ]
  },

  "mass-migration": {
    title: "Memindahkan banyak seri sekaligus.",
    body: "Ketika sebuah sumber mati, migrasi massal memindahkan seluruh grup entri perpustakaan ke sumber yang berfungsi dalam satu proses, alih-alih mengeditnya satu per satu.",
    subsections: [
      ["Kapan menggunakannya", "Sumber yang sudah berhenti berfungsi, atau sumber yang ingin Anda tinggalkan, merupakan contoh migrasi massal. Migrasi menjaga kemajuan dan kategori Anda."],
      ["Memilih sumber dan tujuan", "Pilih grup entri yang akan dipindahkan dan sumber tujuan pemindahannya. Aplikasi ini mencari tujuan untuk setiap judulnya sendiri."],
      ["Meninjau pertandingan", "Setiap pertandingan ditampilkan sebelum ada perubahan, sehingga Anda dapat menerima pertandingan yang baik dan melewatkan pertandingan yang salah. Mencocokkan berdasarkan judul tidak pernah sempurna."],
      ["Menerapkan perubahan", "Menerapkan penulisan ulang setiap entri untuk menunjuk pada sumber baru dan membawa kemajuan Anda. Seri tanpa kecocokan tidak akan tersentuh."],
      ["Membaca ringkasannya", "Pelarian diakhiri dengan penghitungan apa yang dipindahkan, apa yang dilewati, dan apa yang gagal. Barang yang gagal biasanya merupakan judul yang tidak dibawa oleh tujuan."],
      ["Ketika tidak ada yang cocok", "Jika sebagian besar judul gagal untuk dicocokkan, maka tujuannya tidak sesuai dan sumber lain adalah jawaban yang lebih baik. Tidak ada ruginya jika kita berhenti, karena perubahan hanya terjadi ketika kita menerapkannya."],
    ],
    facts: [
      "Migrasi massal memindahkan sekelompok entri dalam satu jalur.",
      "Setiap pertandingan ditinjau sebelum ada yang diubah.",
      "Kemajuan dan kategori Anda terbawa.",
      "Tidak ada yang berubah sampai Anda menerapkan hasilnya.",
    ]
  },

  statistics: {
    title: "Perpustakaan Anda dalam jumlah.",
    body: "Statistik meringkas apa yang telah Anda tonton dan baca: total, waktu yang dihabiskan, rincian status, dan genre yang paling sering Anda tonton.",
    subsections: [
      ["Apa yang dihitung", "Total per jenis media, jumlah bab atau episode, waktu yang dihabiskan, dan cara perpustakaan Anda dibagi berdasarkan status."],
      ["Waktu dan aktivitas", "Kartu waktu memperkirakan berapa lama Anda menghabiskan waktu menonton dan membaca, dan bagan aktivitas menunjukkan penyebarannya selama beberapa minggu terakhir."],
      ["Genre teratas", "Genre yang sebenarnya Anda habiskan waktu, yang seringkali tidak Anda duga. Ini adalah cara yang baik untuk menemukan seri baru di jalur yang Anda sukai."],
      ["Per jenis media", "Statistik dibagi berdasarkan jenis media, sehingga total anime dan manga tidak pernah tercampur."],
      ["Dari mana angka-angka itu berasal", "Semuanya dihitung dari perpustakaan dan riwayat Anda sendiri di perangkat. Tidak ada yang diunggah di mana pun."],
      ["Ketika dikatakan tidak ada data", "Instalasi baru belum dapat diringkas. Angka-angka tersebut muncul setelah Anda menonton atau membaca sesuatu dan telah direkam."],
    ],
    facts: [
      "Statistik dihitung pada perangkat, dari data Anda sendiri.",
      "Total disimpan terpisah untuk setiap jenis media.",
      "Bagan aktivitas menunjukkan bagaimana membaca dan menonton tersebar seiring waktu.",
      "Instalasi baru tidak menampilkan data sampai ada sesuatu yang direkam.",
    ]
  },

  anime: {
    title: "Menonton anime, dengan intro skipping.",
    body: "Anime dibuka di pemutar video dengan satu tambahan: intro dan akhir yang dilewati, didukung oleh AniSkip ketika sebuah judul dapat dicocokkan.",
    subsections: [
      ["Pemain anime", "Episode diputar di pemutar yang sama seperti yang lainnya, dengan kualitas, audio, subtitle, dan kecepatan di lembaran biasa."],
      ["Melewatkan intro dan akhir", "Dengan melewatkan intro, sebuah tombol menghitung mundur selama pembukaan dan melewatinya, dan bagian akhir ditangani dengan cara yang sama. Itu pengaturannya, jadi bisa dimatikan."],
      ["Mengapa sebuah judul tidak bisa ditandingi", "Melewatkan perlu mengidentifikasi serial dan episode. Judul yang tidak dapat diidentifikasi hanya dimainkan tanpa tombol, bukannya gagal."],
      ["Batas waktu lewati", "Hitung mundur singkat memberi Anda waktu untuk membatalkan sebelum lompatan terjadi. Panjangnya dapat dikonfigurasi jika defaultnya terasa terburu-buru."],
      ["Menemukan anime", "Layar penemuan menawarkan daftar yang direkomendasikan, populer, mendatang, baru-baru ini diperbarui, dan berperingkat teratas, ditambah baris genre, sehingga Anda dapat menemukan sesuatu tanpa sumber terbuka."],
      ["Saat penemuan menunjukkan kesalahan", "Baris penemuan berasal dari layanan eksternal, bukan sumber Anda. Jika layanan tersebut tidak dapat dijangkau, seluruh aplikasi tidak akan terpengaruh, dan sumber masih berfungsi normal."],
    ],
    facts: [
      "Melewatkan intro memerlukan identifikasi serial dan episode.",
      "Melewati adalah pengaturan dan dapat dimatikan.",
      "Panjang hitung mundur lewati dapat dikonfigurasi.",
      "Discovery menggunakan layanan eksternal; sumber tetap berfungsi.",
    ]
  },

  music: {
    title: "Musik, dengan perpustakaan Anda sendiri.",
    body: "Watchtower memutar musik dari ekstensi musik dan dari koleksi Anda sendiri, dengan album, artis, lirik, dan scrobbling di satu tempat.",
    subsections: [
      ["Dari mana musik itu berasal", "Ekstensi musik menyediakan trek dan koleksi, dan perpustakaan lokal mencakup file yang sudah Anda miliki. Keduanya berperilaku seperti sumber normal."],
      ["Album dan artis", "Musik dijelajahi berdasarkan album dan artis serta trek, yang membuat perpustakaan musik dapat digunakan daripada daftar file yang panjang."],
      ["Pemain", "Antrian dengan acak dan ulangi, sheet yang sedang diputar, dan cover art. Pemutaran berlanjut saat Anda berpindah-pindah aplikasi."],
      ["Lirik", "Trek yang memuat lirik menampilkannya dalam satu lembar, dan lirik yang disinkronkan mengikuti posisi trek yang sumbernya memberikan pengaturan waktunya."],
      ["Menggosok", "Menghubungkan Last.fm mencatat apa yang Anda mainkan ke profil Anda, dengan cara yang sama melacak mencatat apa yang Anda tonton."],
      ["Saat trek tidak dapat diputar", "Sumber musik yang berhenti berfungsi berperilaku seperti sumber rusak lainnya. Perbarui ekstensi, dan perkirakan sumber berbasis layanan tidak tersedia saat layanan tersebut tidak aktif."],
    ],
    facts: [
      "Musik berasal dari ekstensi atau dari file yang Anda miliki.",
      "Album dan artis adalah kelas satu, bukan hanya lagu.",
      "Scrobbling Last.fm tersedia saat Anda menghubungkannya.",
      "Lirik mengikuti trek ketika sumber memberikan waktunya.",
    ]
  },

  novels: {
    title: "Membaca novel, dan meminta mereka membacakannya untuk Anda.",
    body: "Novel dibuka dalam pembaca teks, bukan pembaca gambar, dengan tema, kemajuan, dan suara opsional untuk dibaca dengan lantang.",
    subsections: [
      ["Bagaimana novel dibuka", "Sumber yang menyatakan konten baru akan terbuka di pembaca teks secara otomatis, jadi Anda tidak perlu memilih pembaca yang tepat secara manual."],
      ["Kenyamanan membaca", "Ukuran font, spasi baris, dan tema dapat disesuaikan, karena dinding teks tidak memberikan pengalaman membaca yang sama seperti halaman gambar."],
      ["Mengingat tempatmu", "Pembaca novel melacak posisi Anda di setiap bab dan mengembalikan Anda ke sana, seperti yang dilakukan pembaca gambar."],
      ["Membaca dengan suara keras", "Text to Speech dapat membacakan satu bab dengan lantang menggunakan suara yang diinstal pada perangkat Anda, yang berguna saat bepergian atau saat melakukan hal lain."],
      ["Ketika sebuah bab kosong", "Bab novel yang terbuka kosong biasanya berasal dari sumber yang mengembalikan teks dalam bentuk yang tidak dapat diperlihatkan oleh pembaca. Memperbarui ekstensi adalah hal pertama yang harus dicoba."],
      ["Novel versus manga", "Novel adalah teks dan manga adalah gambar, jadi sumber harus menyatakan jenis yang tepat agar konten dapat dibuka dengan benar. Jenis yang salah mengirimkannya ke pembaca yang salah."],
    ],
    facts: [
      "Novel dibuka di pembaca teks, dipilih berdasarkan tipe konten.",
      "Font, spasi, dan tema dapat disesuaikan.",
      "Baca dengan lantang menggunakan suara yang terpasang di perangkat Anda.",
      "Bab kosong biasanya berarti sumber mengembalikan teks yang tidak dapat digunakan.",
    ]
  },

  games: {
    title: "Game sebagai sumber lain.",
    body: "Watchtower dapat membuat daftar game melalui ekstensi dan platform game, menggunakan penelusuran dan pencarian yang sama yang sudah Anda ketahui.",
    subsections: [
      ["Apa itu sumber permainan", "Ekstensi game mencantumkan judul dengan cara yang sama seperti ekstensi manga mencantumkan seri, dan membuka layar penelusuran dan pencarian yang sama."],
      ["Platform", "Game dikelompokkan berdasarkan platform, yang membuat katalog tetap dapat dinavigasi ketika sumbernya mencakup banyak sistem."],
      ["Menjelajah dan mencari", "Telusuri penggemar di seluruh sumber game yang diaktifkan persis seperti yang dilakukan untuk jenis media lainnya, sehingga satu kueri mencakup semuanya."],
      ["Memasang ekstensi game", "Mereka menginstal dari repositori yang sama dengan yang lainnya, dan muncul di bawah game setelah diinstal."],
      ["Ketika tidak ada yang terdaftar", "Layar game yang kosong berarti tidak ada ekstensi game yang dipasang. Tambahkan repositori yang menyediakannya, lalu segarkan."],
      ["Memisahkannya", "Entri game tidak tercampur dengan bacaan dan tontonan Anda, jadi katalog game yang besar tidak akan pernah mengacaukan perpustakaan Anda."],
    ],
    facts: [
      "Sumber game dipasang dari repositori yang sama dengan yang lainnya.",
      "Game dikelompokkan berdasarkan platform.",
      "Pencarian mencakup setiap sumber game yang diaktifkan sekaligus.",
      "Entri game tetap terpisah dari perpustakaan Anda.",
    ]
  },
};

export default id;
