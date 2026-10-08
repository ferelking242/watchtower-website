// Turkish prose overlay. Code blocks and markers come from en.js.
const tr = {
  overview: {
    title: "Watchtower uygulamasının eksiksiz haritası.",
    body: "Watchtower; bir Flutter istemcisini, yerel kitaplıkları, JavaScript uzantılarını, yerel bağlamaları ve isteğe bağlı bir headless sunucuyu tek bir kendi kendine barındırılabilir çalışma zamanında birleştirir.",
    subsections: [
      ["Watchtower nedir", "Anime, manga, dizi, müzik, roman ve oyunlar için platformlar arası bir medya merkezi. Yerel dosyaları dizinler, ilerlemeyi izler, içerik indirir ve topluluk kaynaklarını genişletilebilir bir JavaScript çalışma zamanıyla çalıştırır."],
      ["İki çalışma zamanı, tek sözleşme", "Kurulu uygulama 4567 portunda gömülü bir HTTP sunucusu sunar. Headless CLI aynı Flutter ve QuickJS motorunu yeniden kullanır; böylece CI, sunucular ve SSH, grafik oturum olmadan kaynakları çalıştırır."],
      ["Bu kılavuz kimler için", "Uzantı yazan kaynak geliştiricileri, headless sunucuyu işletenler ve Flutter uygulamasına katkıda bulunanlar için. Her bölüm neyin zorunlu, neyin isteğe bağlı olduğunu belirtir."]
    ],
    facts: [
      "Anime, manga, müzik, roman, oyun ve oynatma için platformlar arası Flutter istemcisi.",
      "Yerel dizinleyici, kitaplık, geçmiş, favoriler, takvim ve ilerleme takibi.",
      "QuickJS uzantıları, indirmeler, anti-bot, Rust bağlamaları ve Go torrent sunucusu."
    ]
  },
  "app-map": {
    title: "Birleştirilebilir yüzeylerden oluşan bir uygulama.",
    body: "Depo; özellik ekranlarını, veri servislerini ve yürütme çalışma zamanlarını ayırır. Bu harita içeriği kaynaktan oynatmaya ve yerel kitaplığa kadar izler.",
    subsections: [
      ["İçerik akışı", "Bir uzantı paylaşılan modeller döndürür. Riverpod sağlayıcıları sayfalar, ekranlar kartlara dönüştürür ve Isar geçmişi, favorileri ve dizinlenmiş dosyaları saklar."],
      ["Yönlendirme", "GoRouter; onboarding, ana sayfa, arama, ayrıntılar, oynatma, kitaplıklar, ayarlar ve uzman modülleri kaynak sözleşmelerini bağlamadan birleştirir."],
      ["Çalışma zamanları", "Arayüzü Flutter yönetir, kaynakları QuickJS/Dart çalıştırır, Rust ve Go yerel yetenekler sağlar, headless CLI çalışma zamanını sunucu tarafında yansıtır."],
      ["Durum ve depolama", "Riverpod ana uygulamayı sürer, Isar birincil veritabanıdır, Hive tercihleri tutar. Müzik ve dosya tarayıcı modülleri kendi eski yığınlarını kaynak sözleşmelerinden yalıtılmış tutar."]
    ],
    facts: [
      "Arayüz modülleri sağlayıcıya göre değil medya alanına göre gruplanır.",
      "Kesit servisleri önbellek, indirmeler, anti-bot, eşitleme ve tanılamayı üstlenir.",
      "Ekranlar uzak bir kaynak, yerel bir dosya veya headless sunucuyla çalışır."
    ]
  },
  "content-types": {
    title: "Manga, watch, müzik: tek paylaşılan model.",
    body: "ItemType kaynak ailelerini sınıflar; somut içerik manga, bölüm, sayfa, video ve parça modellerinde kalır. Bu yüzden bir watch uzantısı yeni bir yerel işleyici olmadan anime, film veya dizi kapsar.",
    subsections: [
      ["Manga", "Bölümler okuyucu sayfalarını üretmek için getPageList(url) kullanır. Meta veriler ad, görsel, açıklama, yazar, çizer ve türleri paylaşır."],
      ["watch: anime, film, dizi", "Bölümler getVideoList(url) kullanır. Videolar URL, kalite, özgün URL, başlıklar, altyazılar ve ses parçaları taşır. Film/dizi/anime içerik meta verisidir, ayrı çalışma zamanları değildir."],
      ["Müzik ve roman", "Müzik; parça, albüm, sanatçı ve çalma listeleriyle arama ve ayrıntı yüzeylerini yeniden kullanır; romanlar ayrıntı, bölümler ve bir HTML/metin okuyucu kullanır."],
      ["Oyunlar ve eklentiler", "Game özel bir keşif yüzeyi sunar. Plugin, manifest ve yerel UI şemasını kullanan yardımcı veya indirici uzantıları temsil eder."]
    ],
    facts: [
      "Uyumluluk, her site için kodlanmış ekranlardan değil veri sözleşmelerinden gelir.",
      "Filtreler, tercihler, yorumlar, öneriler ve özel listeler isteğe bağlıdır.",
      "itemType Source üzerinde saklanır ve kitaplık, oynatıcı ile geçmişi seçer."
    ]
  },
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
  "extension-types": {
    title: "Her uzantı ailesinin kendi yüzeyi var.",
    body: "Kaynak türü kullanılabilir ekranları ve eylemleri seçer. Aynı JS motoru paylaşılırken sonuçlar manga okuyucu, watch oynatıcı, ses, roman, oyun veya eklenti yüzeyinde işlenir.",
    subsections: [
      ["Manga", "Bölüm ve sayfa kaynakları; katalog filtreleri, okuma geçmişi ve yerel içe aktarma ile."],
      ["watch", "Anime, film ve diziler için video kaynakları: ayrıntılar, bölümler, kalite, altyazılar, ses parçaları ve oynatıcı çıkarıcıları."],
      ["Müzik", "Ses kataloğu ve meta veri uzantıları: albümler, sanatçılar, parçalar, arama, çalma listeleri ve istatistikler."],
      ["Roman, oyun, eklenti", "Romanlar metin/HTML okuyucuyu yeniden kullanır; oyunların keşif ekranları vardır; yardımcı eklentiler manifest.json ve ui/schema.json izler."]
    ],
    facts: [
      "watch bir kullanım ailesidir: itemType anime veya başka uyumlu bir video kaynağı olabilir.",
      "Genel işleyici uyumlu kaynaklar için aynı kartları, sayfalamayı ve düzenleri kullanır.",
      "İsteğe bağlı yetenekler kaynağın uygulamadığı eylemi göstermeyi önler."
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
  layouts: {
    title: "ui-layouts.json sırayı ve biçimi yönetir.",
    body: "Bir uzantı bildirimsel düzen yayımlayabilir. Watchtower onu watchtower-extensions'tan indirir, UiLayout olarak ayrıştırır, kaynak başına önbelleğe alır ve Flutter bileşenleri yerel widget'lara eşler.",
    subsections: [
      ["Kök ve önbellek", "schemaVersion ve home.sections yararlı minimumdur. browse, detail ve player isteğe bağlıdır. LayoutDownloader, Source.uiLayout'u raw.githubusercontent.com'dan okur; LayoutRegistry layouts/<source.id>.json saklar."],
      ["Ana sayfa bölümleri", "id, getCustomList(id, page)'i tanımlar. component; spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed ve masonry ile bileşen kayıt defterindeki küratörlü sunumları kabul eder."],
      ["Görsel parametreler", "title, icon ve accent başlığı biçimlendirir. columns, rows, cardStyle, gridOrder ve scrollDirection işleme ipuçlarıdır. seeAll tam sayfayı açar, paginated sayfa yüklemeyi etkinleştirir, requiresAuth oturum açmış bölümü korur."],
      ["browse, detail, player", "browse; popular/latest/search'i component, columns, cardStyle, results ve filters ile tanımlar. detail; hero, episodeList ve showRecommendations kabul eder. player; standard veya feed kabul eder."],
      ["Geçersiz düzenler", "Bilinmeyen bileşen ızgara işleyiciye düşer ve kaydedilir. Bozuk dosya, tüm ekranı bozmak yerine kaynağı standart Popular/Latest/Search ana sayfasında bırakır."]
    ],
    facts: [
      "Düzen yoksa kaynak standart Popular/Latest/Search'e döner.",
      "toLegacyMap köprüsü mevcut ana sayfa ekranlarını uyumlu tutar.",
      "Düzen, uzantı kurulumu veya güncellemesinden sonra yeniden yüklenir ve kaldırılınca silinir."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen denetlenebilir bir yüzeydir.",
    body: "Watch sayfası; hero, geçmiş, kategoriler, satırlar ve kataloğu geçerli kaynaktan oluşturur. JSON düzenleri, yerel etkileşimleri koruyarak standart listeleri değiştirebilir.",
    subsections: [
      ["Sıra ve hero", "Hero ilk beş banner öğesini (popular yedek) kullanır, 7 saniyede bir döner ve genişlik × 0,62 yatay oranını hedefler. Oynat ayrıntıyı, Info alt sayfayı açar, Listem Isar favorisini değiştirir."],
      ["Geçmiş", "İzlemeye devam et, kaynağın Isar geçmişini okur, mangaya göre tekilleştirir, 12 kartla sınırlar ve küçük resim, bölüm ve ilerlemeyi gösterir."],
      ["Katalog ve arama", "Katalog ızgarası Popular veya özel listeyi sayfalar. Arama 250 ms debounce, yüzen öneriler, mikrofon/X eylemleri kullanır ve sonuçları yalnızca gönderimde kesinleştirir."],
      ["Performans", "Uygulama çubuğu kaydırmayı ValueNotifier ile izler; hero CustomScrollView içindedir, içerik onu kapatmaz ve kaydırma tam setState'ten kaçınır."],
      ["Boş ve hata durumları", "Boş bölüm gizlenir. Başarısız bölüm ham hatayla yeniden deneme kartı gösterir ve Cloudflare engeli çıkmaz sokak yerine atlama paneline yönlendirir."]
    ],
    facts: [
      "Kategoriler görsel, gradyan ve kenarlıklı 132×72 kartlardır.",
      "Verisi boş olan bölümler gizlenir.",
      "Kaynak eylemleri manga, anime, film ve diziler arasında tutarlıdır."
    ]
  },
  "home-widgets": {
    title: "Widget'lar veri bağdaştırıcılarıdır.",
    body: "WatchtowerHomeScreen uygulamanın genel ana sayfasıdır. AniList ve TMDB akışlarını yerel kitaplıkla birleştirir ve satırları medya sekmeleriyle sürer.",
    subsections: [
      ["Medya ana sayfası", "Tümü, Film, Dizi, Müzik, Anime, Asia, Çocuk, Batı, Afrika, Kısa TV, Futbol ve Oyunlar sekmeleri görünür bölümleri ve hero verisini seçer."],
      ["Kartlar", "DiscoveryCard; standard, ranked, landscape, featured, saga ve spotlight varyantlarına sahiptir. EpisodeCard küçük resim, bölüm adı, süre ve devam ilerleme çubuğu ekler."],
      ["Veri", "AniList anime ve editoryal içeriği besler; TMDB film ve dizileri besler; yerel kitaplık ve sağlayıcılar kullanıcı listelerini tamamlar."],
      ["Watch ile genel ana sayfa", "WatchtowerHomeScreen genel ana sayfadır; WatchHomeScreen bir kaynak/uzantı ana sayfasıdır. İlki katalogları toplar, ikincisi kaynak sözleşmesini işler."]
    ],
    facts: [
      "Widget'lar sağlayıcı URL'lerini bilmez: normalleştirilmiş modelleri tüketir.",
      "Skeleton, boş, yükleme ve hata durumları ana sayfa yüzeyinin parçasıdır.",
      "Uzantı düzenleri çoğunlukla WatchHomeScreen ile browse/detail/player ekranlarını hedefler."
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
  trackers: {
    title: "İlerleme harici servislerle eşitlenir.",
    body: "Watchtower; AniList, Kitsu, MyAnimeList, Simkl ve Trakt'a bağlanarak izleme ve okuma ilerlemesini cihazlar arası eşitler.",
    subsections: [
      ["Desteklenen izleyiciler", "AniList, Kitsu, MyAnimeList, Simkl ve Trakt. Her birinin kendi giriş akışı ve durum modeli vardır; ortak Track modeline normalleştirilir."],
      ["Bağlama ve eşitleme", "Bir kitaplık girdisi bir izleyici girdisine bağlanabilir. Güncellemede ilerleme, durum ve puan gönderilir; akıllı güncellemeler sonraki bölümü çekebilir."],
      ["İzleyici hataları", "Süresi geçmiş jeton, iptal edilmiş uygulama veya hız sınırı farklı mesaj üretir. Ayarlar › Takip'ten yeniden kimlik doğrulayın; yanlış girdi çözülüp yeniden bağlanabilir."],
      ["Taşıma", "Toplu taşıma akışı, kaynaklar arasında kitaplık girdilerini taşırken izleyici bağlantılarını korur; böylece kaynak ölse de ilerleme kaybolmaz."]
    ],
    facts: [
      "İzleyici entegrasyonları lib/services/trackers altındadır.",
      "İzleyicileri Ayarlar › Takip'ten yönetin.",
      "Toplu taşıma, kaynak değişiminde izleyici bağlantılarını korur."
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
  cloudflare: {
    title: "Cloudflare ve anti-bot",
    body: "Bazı kaynaklar Cloudflare arkasındadır. Watchtower yalnızca gerçek kanıt varsa challenge bildirir ve tam olarak başarısız URL'yi açan bir atlama WebView'i sunar.",
    subsections: [
      ["Neyin challenge sayıldığı", "Tek başına 403/503, zaman aşımı veya challenge kelimesi Cloudflare değildir. Watchtower anti-bot arayüzünü göstermeden önce CDN işaretleri, etkileşimli challenge sayfası veya engelleme sayfası ister."],
      ["Challenge'ı atlama", "Atlama WebView'i site kökünü değil, tam olarak başarısız URL'yi açar. CAPTCHA'yı bir kez çözün ve kaynağı yeniden deneyin."],
      ["User agent değiştirme", "User agent bot algılamayı etkiler. Gelişmiş ayarlarda varsayılanı değiştirin, uygulamayı yeniden başlatın ve deneyin. Farklı tarayıcı ve sistemleri deneyin."],
      ["Çerez ve önbellek", "Çerezleri temizlemek giriş veya challenge durumunu sıfırlar. WebView verisini temizlemek temiz bir başlangıç sağlar. İkisi de gelişmiş ayarlardadır."],
      ["Yine başarısız olursa", "Kaynak korumasını artırmış olabilir. Bekleyin veya aynı içerik için başka bir kaynağa geçin."]
    ],
    facts: [
      "Cloudflare yalnızca yanıtta gerçek kanıt varsa bildirilir.",
      "Atlama WebView'i başarısız URL'yi açar, site kökünü değil.",
      "Kişisel bir başarısızlık genelde hata değil engel veya hız sınırıdır."
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
