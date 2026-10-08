// Turkish prose overlay. Code blocks and markers come from en.js.
const tr = {
  "extension-runtime": {
    title: "JavaScript kontrollü bir çalışma zamanında çalışır.",
    body: "DartExtensionService kaynak kodunu yükler, MProvider enjekte eder ve QuickJS içinde çalıştırır. Köprüler ağ, DOM, çıkarıcılar, tercihler ve Flutter modellerini yerel uygulamayı açığa çıkarmadan sunar.",
    subsections: [
      ["Yükleme", "SourceCodeLanguage Dart, JavaScript ve Mihon'u ayırır. Yükleyici ayrıca yerel kanal üzerinden Android özel uzantılarını kurar veya kaldırır."],
      ["Güvenlik ve yalıtım", "Kaynak çağrıları kontrollü köprülerden geçer. Headless sunucu, yürütmeden önce kayıt, önbellek, kimlik doğrulama ve hız sınırı ekler."],
      ["Yaşam döngüsü", "Bir kaynak katalogda keşfedilir, kurulur veya etkinleştirilir, istek üzerine çalıştırılır ve tercihleri, çerezleri, önbelleği ve düzeni uzantı ayarlarından sıfırlanabilir."],
      ["Hata yönetimi", "Başarısız bir köprü çağrısı isolate'i düşürmek yerine Dart'a tipli hata döndürür. Hatalar işlem adı ve sorunlu URL ile kaydedilir, böylece tanı tam adımı gösterir."]
    ],
    facts: [
      "QuickJS serileştirilmiş nesneleri Dart modellerine döndürür.",
      "Uzantı kodu başlıkları, filtreleri, tercihleri ve özel listeleri tanımlayabilir.",
      "Mihon uyumluluğu mevcut manga uzantılarının yeniden kullanılmasını sağlar."
    ]
  },
  "extension-contract": {
    title: "JS sözleşmesi, metot metot.",
    body: "ExtensionService paylaşılan minimumu tanımlar. İsteğe bağlı metotlar, uygulamayan bir kaynağı bozmadan deneyimi zenginleştirir.",
    subsections: [
      ["Katalog gezinme", "getPopular, getLatestUpdates ve search; list ve hasNextPage içeren MPages döndürür. Filtreler getFilterList'ten gelir, tercihler kaynak başına saklanır."],
      ["Ayrıntı ve oynatma", "getDetail MManga döndürür. Manga kaynağı getPageList; watch kaynağı getVideoList sunar ve kalite, başlık, altyazı ve ses verebilir."],
      ["Sözleşme uzantıları", "getCustomList, id ile bildirilen ana sayfa bölümlerini etkinleştirir; öneriler, yorumlar, öneri listeleri, hesap, favoriler ve abonelik güvenli boş varsayılanlarla isteğe bağlı kalır."],
      ["Hata anlamı", "Bir sayfada öğe yoksa istisna atmak yerine boş MPages döndürün. İstek gerçekten başarısızsa hatanın yükselmesine izin verin; arayüz yeniden deneme gösterir, tanı nedeni kaydeder."]
    ],
    facts: [
      "URL'ler katalog, ayrıntı ve oynatma arasında gezinme tanımlayıcısı olarak kalır.",
      "Başlıklar ve baseUrl kaynak tarafından sağlanır ve özelleştirilebilir.",
      "Hatalar tanı için Dart'ta ve headless çalışma zamanında kaydedilir."
    ]
  },
  "ui-schema": {
    title: "Manifest sözleşmeyi tanımlar.",
    body: "UI uzantıları ve ZeusDL betikleri için manifest.json kimliği, izinleri ve çalışma zamanını bildirir. Ardından şema, Flutter'ın yerel olarak işlediği alanları, eylemleri ve çıktıyı tanımlar.",
    subsections: [
      ["Manifest alanları", "manifest.json; kimlik, sürüm, yazar, ağ izinleri ve ikili gereksinimleri taşır. id, en.example-tool gibi bir reverse-DNS dizesidir."],
      ["Yerel UI sözleşmesi", "UI sözleşmesi URL/metin alanlarını, seçimleri, anahtarları ve eylemleri WebView olmadan işler; hızlı yükleme ve çevrimdışı çalışma sağlar."],
      ["ZeusDL çıktı protokolü", "Betikler stdout üzerinden PROGRESS, STATUS, DONE ve ERROR satırlarıyla iletişir. Watchtower bunları günlüğe gerçek zamanlı aktarır."],
      ["Doğrulama hataları", "Şema doğrulamasından geçmeyen manifest kurulmadan reddedilir. Pazaryeri genel bir mesaj yerine başarısız alanı gösterir."]
    ],
    facts: [
      "manifest.json; kimlik, sürüm, yazar, ağ izinleri ve ikili gereksinimleri taşır.",
      "UI sözleşmesi URL/metin alanlarını, seçimleri, anahtarları ve eylemleri WebView olmadan işler.",
      "ZeusDL betikleri stdout üzerinden PROGRESS, STATUS, DONE ve ERROR ile iletişir."
    ]
  },
  api: {
    title: "İki çalışma zamanı, tek API.",
    body: "Gömülü Dart/shelf sunucusu uygulama içinde 4567'yi dinler. Headless CLI, CI, Docker, Railway veya Render için aynı işlemleri yeniden kullanır.",
    subsections: [
      ["Uç noktalar", "ping, kaynak keşfi, katalog, ayrıntı, video, sayfa ve filtre rotaları ExtensionService sözleşmesini yansıtır. library, history ve proxy rotaları yerel veritabanı ve medyayı sunar."],
      ["Kimlik doğrulama", "GET /api/ping genel kalır ve sunucu sürümünü döndürür. Diğer rotalar kimlik doğrulama, hız sınırı ve uzantı kayıt defterinden geçer."],
      ["Hata yanıtları", "Başarısızlık boş 500 yerine işlem ve mesaj içeren JSON döndürür. Kaynak hatası HTTP durumunu korur; istemci engellemeyi hatadan ayırır."],
      ["NSFW filtresi", "NSFW kaynakları listelerden filtrelenir ve doğrudan erişimde 403 ile engellenir."]
    ],
    facts: [
      "GET /api/ping geneldir ve sunucu sürümünü döndürür.",
      "Diğer rotalar kimlik doğrulama, hız sınırı ve uzantı kayıt defterinden geçer.",
      "NSFW kaynakları listelerden filtrelenir ve doğrudan erişimde 403 ile engellenir."
    ]
  },
  downloads: {
    title: "İndirmeler seçilebilir motorlarla çalışır.",
    body: "Watch, manga ve romanın kendi indirme sekmesi vardır. Medya başına motor, eşzamanlılık ve Wi-Fi kuralları kuyruğu sürer; her kart hızlı eylemler sunar.",
    subsections: [
      ["Motor seçimi", "HYDRA dahili HLS motorudur, ZEUS ZeusDL'dir, ARES Aria2'dir ve Externe bağlantıyı ADM veya IDM'ye verir. Korumalı bir akış için yanlış motor yaygın bir hatadır."],
      ["Eşzamanlılık", "Her sekme eşzamanlı bağlantı (1–20) ve eşzamanlı kuyruk öğesi (1–10) ayarlar. Yüksek değerler hızlandırır ama daha çok bant tüketir ve kaynak sınırlarını tetikleyebilir."],
      ["Arşiv ve temizlik", "Manga bölümleri klasör, CBZ, CBR, CB7 veya ZIP olarak arşivlenebilir. Okunduktan sonra otomatik silme, okundu işaretlenen bölümü kaldırır; isteğe bağlı olarak işaretlileri de kapsar."],
      ["İndirme hataları", "Başarısız indirme kısmi dosyaları korur ve Yeniden dene sunar. 403/429 genelde hız sınırı veya anti-bot engeli; 5xx kaynağa işaret eder. Ayarları değiştirmeden önce bağlantıyı tarayıcıda doğrulayın."]
    ],
    facts: [
      "Yalnızca Wi-Fi kuralları, Wi-Fi ağı olana kadar indirmeyi engelleyebilir.",
      "Akıllı kitaplık güncellemeleri yeni bölümleri otomatik ekler.",
      "İndirme kuyruğu kart başına en fazla beş hızlı eylem düğmesi gösterir."
    ]
  },
  "getting-started": {
    title: "Flutter uygulamasını derleyin",
    body: "Araç zincirlerini kurun, Dart paketlerini alın ve platformlar arası istemciyi başlatın.",
    subsections: [
      ["Ön koşullar", "Flutter 3.38+ / Dart 3.10+, flutter_rust_bridge bağlamaları için Rust, Android için Java 17 ve torrent istemcisini yeniden derlerseniz Go 1.21+."],
      ["Platformlar", "Windows, Linux, macOS, iOS, Android ve Web projenin hedefleridir. Bazı yerel özellikler Web'de düzgün biçimde azalır."],
      ["Kurulumu doğrula", "İlk değişiklikten önce çözümleyiciyi çalıştırın: dart format --output=none --set-exit-if-changed lib ve flutter analyze --no-pub. CLI doctor komutu yerel motor ve QuickJS'in kullanılabilirliğini bildirir."],
      ["Yaygın derleme hataları", "Eksik Rust araç zinciri bağlamaları bozar. Eski Flutter SDK pub çözümlemesini bozar. Eksik Java 17 Android derlemesini bozar. Kodu düzenlemeden önce araç zincirini düzeltin."]
    ],
    facts: [
      "Ön koşullar: Flutter 3.38+, Dart 3.10+, Android için Rust ve Java 17.",
      "Proje; Windows, Linux, macOS, iOS, Android ve Web'i hedefler.",
      "Headless CLI, Build Linux Headless CLI iş akışından yayımlanır."
    ]
  },
  deployment: {
    title: "Gömülü veya headless.",
    body: "Headless CLI, Docker ile veya Docker olmadan çalışır. API_KEY etkinleştirildiğinde özel rotalar X-Api-Key veya Authorization Bearer kullanır; uygulama gömülü modunu korur.",
    subsections: [
      ["Docker", "Yeniden üretilebilir sunucu için Docker Compose önerilir. Yayımlanan imaj GHCR'dadır."],
      ["Diğer ana makineler", "Railway, Render, VPS ve çıplak Docker depoda belgelenmiştir. Sunucu, uygulamayla aynı kaynak sözleşmesini korur."],
      ["Ortam değişkenleri", "API_KEY özel rotaları korur. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR ve RATE_MAX_TOKENS önbelleği, kalıcılığı ve hız sınırını yönetir."],
      ["Dağıtım hataları", "Hemen çıkan bir konteyner genelde eksik API_KEY veya port çakışmasıdır. Günlükleri kontrol edin, portun boş olduğunu ve uzantı deposu yolunu doğrulayıp yeniden başlatın."]
    ],
    facts: [
      "Yeniden üretilebilir sunucu için Docker Compose önerilir; imaj GHCR'dadır.",
      "Railway, Render, VPS ve Docker dağıtımları depoda belgelenmiştir.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR ve RATE_MAX_TOKENS sunucuyu yönetir."
    ]
  },
  troubleshooting: {
    title: "Sorun giderme",
    body: "Bir kaynak veya uygulama sorunu mu var? Kontrol listesini izleyin, tam hatayı okuyun ve ayarları değiştirmeden önce tanı çalıştırın.",
    subsections: [
      ["Birincil tanı", "Uzantıları ve uygulamayı güncelleyin, sorunlu öğeyi yenileyin, aynı kaynaktan başka bir öğe deneyin, siteyi tarayıcıda açın, ağı değiştirin, önbellek ve çerezleri temizleyin, uygulamayı yeniden başlatın. Bir adım çözerse neden yereldir."],
      ["Hatayı okuma", "Watchtower genel mesaj yerine ham hatayı gösterir. Kopyalayın: işlem adı ve sorunlu URL tam adımı gösterir. Uzantı tanısı popular, latest, detail ve media aşamalarını ayrı kaydeder."],
      ["HTTP hataları", "403 Forbidden: anti-bot veya IP yasağı. 404 Not Found: kaldırılmış içerik veya ölü kaynak. 429 Too Many Requests: geçici hız sınırı. 5xx: kaynak sunucusu çevrimdışı. 1006/1020: IP yasağı veya güvenlik duvarı kuralı."],
      ["Kişisel veya yaygın", "Yalnızca siz etkileniyorsanız Cloudflare, IP yasağı veya hız sınırından şüphelenin ve o kaynaktan indirmeleri azaltın. Herkes etkileniyorsa uzantı ve uygulama sorun izleyicilerine bakın."],
      ["Kurulum sorunları", "Kurulamayan bir uzantı genelde şema doğrulamasından geçmez veya bozuk dosya indirir. Yeniden indirin ve manifest id ve sürümünü kontrol edin."]
    ],
    facts: [
      "Önce uzantıları güncelleyin: çoğu bozulma uzantı güncellemesiyle düzelir.",
      "Tanı ekranı popular, latest, detail ve media aşamalarını ayırır.",
      "Uzantı düzeltmeleri için ETA yoktur; bozuk bir kaynak sabır gerektirebilir."
    ]
  },
  cli: {
    title: "Headless CLI",
    body: "Linux derlemesi, masaüstü uygulamasıyla aynı uzantı çalışma zamanını içerir ve X11 veya Wayland olmadan çalışır; CI, sunucular ve SSH için.",
    subsections: [
      ["Komutlar", "doctor yerel motoru ve QuickJS'i yoklar. extensions list ve test yerel bir depoyu yükler. source tek bir ExtensionService işlemi çalıştırır. plugins validate eklenti kataloğunu inceler."],
      ["Test modları", "load bir kaynağın yüklenip filtre, tercih ve başlıkları sunduğunu kontrol eder. smoke ayrıca popular, latest, search, öneriler, ayrıntılar ve medya işlemini çağırır. deep ikinci sayfa ve HTTP yoklamalarını ekler."],
      ["Filtreleme", "Dil, NSFW/SFW, motor, etiket, sorgu, id veya türe göre filtreleyin. src/watch/fr gibi dil dizini, dizindeki eski lang alanına göre önceliklidir."],
      ["Çıkış kodları ve hatalar", "0 başarı, 1 başarısız sağlık/test/doğrulama kontrolü, 2 geçersiz kullanım veya işlenmeyen işlem hatasıdır. Raporlar ve stdout kimlik bilgilerini ve imzalı URL parametrelerini gizler."],
      ["Bilinen sınırlar", "library, history, progress, indirme kuyruğu ve izleyici komutları henüz yok: headless giriş noktası Isar/Hive depolarını açmaz."]
    ],
    facts: [
      "doctor --json yerel motor ve QuickJS'in kullanılabilirliğini bildirir.",
      "smoke; popular, latest, search, ayrıntılar ve medya işlemini çalıştırır.",
      "Çıktı yaygın kimlik bilgilerini ve imzalı URL parametrelerini gizler."
    ]
  }
};

export default tr;
