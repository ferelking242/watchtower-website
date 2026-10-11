// tr prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const tr = {
  "getting-started": {
    title: "Watchtower on dakika içinde.",
    body: "Watchtower anime, dizi, manga, roman ve müzik için tek bir uygulamadır. Bilerek boş olarak gönderilir: Kaynakları siz seçersiniz ve izlediğiniz veya okuduğunuz her şey cihazınızda kalır.",
    subsections: [
      ["İhtiyacınız olan şey", "Tam uygulama için Android 8.0 veya daha yeni bir telefon veya tablet. Herhangi bir Linux, macOS veya Windows makinesi, grafik oturumu olmadan başsız komut satırını çalıştırabilir. Bir şey isteğe bağlı değildir: kaynak depo URL'si, çünkü Watchtower kendine ait bir içerik içermez."],
      ["İlk kaynağınızı ekleyin", "Daha Fazla'yı, ardından Uzantılar'ı ve ardından Depolar'ı açın. index.min.json ile biten bir depo URL'si yapıştırın ve onaylayın. Dizin yüklenir yüklenmez uzantı listesi dolar."],
      ["Uzantıları yükle", "Her uzantı Watchtower'ya bir web sitesi öğretir. İstediklerinizin yanındaki yükle'ye dokunun, Android sorarsa bilinmeyen kaynaklardan yüklemeye izin verin ve kaynaklar Gözat'ta görünür."],
      ["Kitaplığınızı oluşturun", "Bir kaynak açın, bir dizi bulun ve Kitaplığa ekle'ye dokunun. O andan itibaren Watchtower ilerlemenizi takip eder, yeni bölümleri kontrol eder ve girişi tek bir yerde tutar."],
      ["Medya türlerinizi seçin", "Watchtower manga, anime, roman ve müziği yan yana ele alıyor. Her tür, uzantının bildirdiğinden otomatik olarak seçilen kendi okuyucusunda veya oynatıcısında açılır."],
      ["İlk çalıştırmada sık karşılaşılan sürprizler", "Boş bir Göz Atma ekranı, bozuk bir uygulamanın değil, henüz hiçbir uzantının yüklenmediği anlamına gelir. Yüklenmeyen bir depo genellikle eski bir URL veya sabit bir ağ portalıdır."],
      ["İlk ekran boş görünüyorsa", "Boş bir Gözatma listesi, bozuk bir uygulamanın değil, henüz hiçbir uzantının yüklenmediği anlamına gelir. Bir depo yüklenmezse adresinin index.min.json ile bitip bitmediğini kontrol edin ve gittiğini varsaymadan önce başka bir ağda tekrar deneyin."],
    ],
    facts: [
      "Watchtower hiçbir içerik olmadan gönderilir. Kaynaklar sizin seçiminizdir.",
      "Uzantılar, sanal alanda çalıştırılan sıradan JavaScript'lerdir.",
      "Kitaplığınız Watchtower sunucusunda değil cihazınızda bulunur.",
      "Android 8.0+, mobil uygulamanın temelidir.",
      "Boş bir Gözatma listesi, hiçbir uzantının yüklü olmadığı anlamına gelir, bu bir hata değildir.",
    ]
  },
  installation: {
    title: "Cihazınızla eşleşen yapıyı yükleyin.",
    body: "Watchtower'yu çalıştırmanın üç yolu vardır: Android uygulaması, masaüstü yapısı veya sunucular için Linux komut satırı. Tek bir motoru paylaşıyorlar, yani birinde çalışan bir kaynak hepsinde de çalışıyor.",
    subsections: [
      ["Android", "Ana hedef ve her özelliği ilk önce alan tek yapı. Gelecek çalışmaları test etmek istiyorsanız sürüm APK'sını veya önizleme APK'sını indirin. Watchtower bir mağaza aracılığıyla dağıtılmadığından, Android sorduğunda bilinmeyen kaynaklardan yüklemeyi etkinleştirin."],
      ["Masaüstü", "Daha büyük bir ekranda izlemek için Windows, Linux ve macOS sürümleri mevcuttur. Sürüm yapıları ilk olarak Android ve Linux CLI için yayınlandığından bunları Flutter ile kaynaktan oluşturun."],
      ["Linux komut satırı", "Penceresi olmayan tek bir ikili dosya. Aynı uzantı motorunu çalıştırdığından, bir sunucuda veya SSH üzerinden bilgi alabilir, arayabilir ve indirebilir. Yükleyici komut dosyası, onu ve çalışma zamanı dosyalarını seçtiğiniz bir öneke kopyalar."],
      ["Kararlı veya önizleme", "Önizleme yapıları en yeni kodu izler ve daha sık bozulur. Çalıştırıyorsanız otomatik yedeklemeleri açık tutun ve bir şeyler ters giderse sürüm yapısını yeniden yüklemeyi bekleyin."],
      ["Kaynaktan inşa etmek", "Flutter 3.38 veya daha yenisine, Dart 3.10 veya daha yenisine ve bir Rust araç zincirine ihtiyacınız var. Go 1.21 veya daha yenisi yalnızca torrent sunucusunu kendiniz yeniden oluşturmak istiyorsanız gereklidir."],
      ["Güncel tutun", "Watchtower yeni bir sürümün ne zaman mevcut olduğunu size bildirir ve onu ilk seferkiyle aynı şekilde yüklersiniz. Kitaplığınız ve ayarlarınız dokunulmadan taşınır."],
      ["Kurulum başarısız olursa", "Yaygın yükleyici mesajlarının her biri hatalar sayfasında açıklanmaktadır. İmza uyumsuzluğu, farklı imzalı bir kopyanın zaten yüklü olduğu ve önce kaldırılması gerektiği, bozuk bir indirmenin yeniden getirilmesi gerektiği ve işlemci mimarisinin uyumsuzluğu, yanlış yapının indirildiği anlamına gelir."],
    ],
    facts: [
      "Android, yayınlanmış sürüm derlemelerine sahip tek platformdur.",
      "Başsız ikili dosya Linux x86_64 için oluşturulmuştur.",
      "Kaynaktan inşa etmek için pas gereklidir; Git isteğe bağlıdır.",
      "Önizleme ve kararlı yüklemeler aynı verileri paylaştığından geçiş yapmak kitaplığınızı korur.",
      "Farklı imzalı bir yapıyla değiştirmeden önce çakışan yüklemeyi kaldırın.",
    ]
  },
  "adding-sources": {
    title: "İçeriğinizin nereden geldiği.",
    body: "Watchtower'un iki tür kaynağı vardır. Çevrimiçi kaynaklar, eklediğiniz bir veri havuzunun uzantıları olarak gelir. Çevrimdışı kaynaklar, kendi cihazınızdaki klasörlerdir. Çoğu kişi her ikisini de kullanır.",
    subsections: [
      ["Depo ekle", "Daha Fazla'ya, ardından Uzantılar'a, ardından Depolar'a gidin ve depo URL'sini yapıştırın. Uygulama, dizini getirir ve içerdiği her uzantıyı listeler. Aynı anda birden fazla depo ekleyebilirsiniz."],
      ["İhtiyacınız olanı yükleyin", "Listeyi yenileyin ve ardından bir uzantının yanındaki yükle'ye dokunun. Android, bilinmeyen uygulamaları ilk kez yüklemek için izin isteyebilir. Yüklü uzantılar Gözat'ta hemen görünür."],
      ["Kaynakları güncel tutun", "Daha yeni uzantı sürümlerini istediğinizde depoyu yenileyin. Bir güncelleme, uzantıyı yerinde değiştirir ve ayarlarını korur; böylece yeniden yapılandırılacak hiçbir şey kalmaz."],
      ["Kendi dosyalarınızı kullanın", "Watchtower'u zaten sahip olduğunuz bir manga veya anime klasörüne yönlendirin; normal bir kaynak haline gelir. Depo yok, ağ yok, hesap yok."],
      ["Yalnızca bildiklerinize güvenin", "Bir depo her şeye hizmet edebilir ve bir uzantı, uygulamayla aynı erişime sahip olarak çalışır. Bilinmeyen bir depoya, bilinmeyen bir yükleyiciye davrandığınız gibi davranın."],
      ["Bir depo başarısız olduğunda", "Yüklenmeyen bir URL'nin süresi genellikle dolar, engellenir veya dizin yolu olmadan kopyalanır. Deponun gittiğini varsaymadan önce adresin index.min.json ile bitip bitmediğini kontrol edin."],
      ["Bir depo yüklenmeyi reddettiğinde", "Yüklenemeyen bir depo genellikle süresi dolmuş bir adres, index.min.json ile bitmeyen bir yol veya onu engelleyen bir ağdır. Adresi doğrulayın ve kaldırmadan önce farklı bir ağ deneyin."],
    ],
    facts: [
      "Depo yalnızca bir web sunucusunda barındırılan bir JSON dosyasıdır.",
      "Güncellemeler kaynak tercihlerinizi korur.",
      "Yerel klasörler hiçbir ağ olmadan çalışır.",
      "Watchtower üçüncü taraf veri havuzlarını kontrol etmez veya onaylamaz.",
      "Yüklenmeyen bir depo genellikle yanlış veya süresi dolmuş bir adrestir.",
    ]
  },
  library: {
    title: "Takip ettiğiniz her şey tek bir yerde.",
    body: "Kütüphane sakladığınız her şeyin evidir. Nerede durduğunuzu hatırlar, serileri raflarda gruplandırır ve güncellemeler ile indirmeler için başlangıç ​​noktasıdır.",
    subsections: [
      ["Ekleme ve kaldırma", "Herhangi bir diziyi açın ve Kitaplığa ekle'ye dokunun. Aynı yerden kaldırdığınızda, okuma geçmişiniz kaybolmadan serinin güncellenmesi durdurulur."],
      ["Kategoriler", "Kategoriler kitaplığınızın raflarıdır. Bir dizi aynı anda birden fazla dizide yer alabilir; bu, haftalık olarak takip ettiklerinizi bir gün ulaşabileceklerinizden bu şekilde ayırırsınız."],
      ["İlerlemek", "Watchtower, giriş başına ulaştığınız bölümü veya bölümü tam olarak hatırlar ve bağlı olduğunuzda bu ilerlemeyi bir izleyiciye yükler."],
      ["Filtreler ve sıralama", "Bitirdiklerinizi gizleyin, yalnızca indirilenleri gösterin veya bir dizinin en son ne zaman yayınlandığına göre sıralayın. Filtreler yalnızca görüntülenir ve hiçbir şeyi silmez."],
      ["Çeşitli cihazlar", "Cihazlar arasında yerleşik senkronizasyon yoktur. Kitaplığınızı bir yedekleme dosyasıyla taşıyın ve indirilenleri ayrı tutun, çünkü bunlar bir yedeğin parçası değildir."],
      ["Bir giriş bozulduğunda", "Bir dizi boş açılırsa veya kapağını kaybederse, altındaki kaynak değişmiş demektir. Girişi yenileyin ve sorun devam ederse başka bir kaynağa taşıyın."],
      ["Bir giriş güncellenmediğinde veya açılmadığında", "Bir dizi açılmıyorsa altından kaynağı değişmiş demektir. Önce girişi yenileyin ve sorun devam ederse başka bir kaynağa taşıyın. Hiçbir şey döndürmeyen yenileme, uygulamanın değil, uzantının güncel olmadığı anlamına gelir."],
    ],
    facts: [
      "Tamamlanan seriler arka plan güncellemeleriyle yalnız kalıyor.",
      "Bir seri birden fazla kategoriye ait olabilir.",
      "İlerleme, dizi başına değil, bölüm veya bölüm başına izlenir.",
      "Bir diziyi kitaplıktan kaldırmak geçmişinizi silmez.",
      "Yenileme, bozuk girişlerin çoğunu düzeltir; geçiş geri kalanını düzeltir.",
    ]
  },
  browse: {
    title: "İzleyecek veya okuyacak bir şey bulmak.",
    body: "Göz atma, bir kaynağın neler sunduğunu keşfedeceğiniz ve hepsinde aynı anda arama yapacağınız yerdir. Bu unvanın kimde olduğu sorusuna cevap vermenin en hızlı yoludur.",
    subsections: [
      ["Bir kaynağa göz atma", "Popüler ve En Yeni ilanlarını görmek için bir kaynak açın. Çoğu kaynak, listenin en üstünde görünen tür, yıl veya duruma ilişkin filtreleri de gösterir."],
      ["Her yerde arama", "Arama eylemi, etkin olan her kaynağı paralel olarak sorgular ve sonuçları kaynağa göre gruplandırır; böylece kimin başlığa sahip olduğunu, kimin olmadığını bir bakışta görebilirsiniz."],
      ["Bir başlık görünmediğinde", "Kaynaklar genellikle İngilizce başlık yerine orijinal dildeki başlığı indeksler. Yerel adı, romanlaştırılmış yazımı veya bunun daha kısa bir kısmını deneyin."],
      ["Kaynaklar arasında geçiş yapma", "Bir kaynak yavaşlarsa veya çalışmayı durdurursa girişi yeniden eklemek yerine taşıyın. Watchtower seriyi yeni kaynakta eşleştirir ve ilerlemenizi ve kategorilerinizi taşır."],
      ["Dile göre filtreleme", "Uzantılar hizmet ettikleri dille etiketlenir. Arama sonuçlarının ve listelerin alakalı kalması için okuyamadıklarınızı gizleyin."],
      ["Sonuçlar neden farklı?", "Her kaynak kendi kataloğunu indeksler, dolayısıyla bir başlık birinde tam, diğerinde kısmi olabilir. İşlemden önce iki kaynağın karşılaştırılması normaldir."],
      ["Arama hiçbir şey döndürmediğinde", "Boş arama genellikle bozuk bir kaynaktan ziyade başlık uyuşmazlığından kaynaklanır. Orijinal dildeki adı, romanlaştırılmış yazımı veya daha kısa bir parçayı deneyin ve bir kaynağın yanıt vermemesinin diğerlerini durdurmayacağını unutmayın."],
    ],
    facts: [
      "Hayranları tüm etkin kaynaklarda aynı anda arayın.",
      "Popüler bir listeye sahip olmayan kaynaklar hâlâ arama yoluyla çalışmaktadır.",
      "Taşıma, indirilen dosyalarınızı değil, ilerlemenizi etkiler.",
      "Uzantı dili etiketleri dil filtresini yönlendirir.",
      "Boş bir arama genellikle başlık uyumsuzluğudur, ölü bir kaynak değildir.",
    ]
  },
  extensions: {
    title: "Uzantılar, Watchtower'un web'e ulaşma şeklidir.",
    body: "Uzantı, Watchtower'a bir web sitesini öğreten küçük bir programdır: nasıl listeleneceği, aranacağı, okunacağı ve oynatılacağı. Göz attığınız her şey bir uzantı aracılığıyla gelir.",
    subsections: [
      ["Bir uzantı nedir", "Bu, derlediğiniz bir eklenti değil, JavaScript'tir. Bir web sitesinden listelerini, arama sonuçlarını, bölümlerini ve video akışlarını nasıl isteyeceğini bilir ve Watchtower'un anlayacağı şekilde yanıt verir."],
      ["Size nasıl ulaşıyorlar?", "Uzantılar depolar halinde gruplandırılmıştır. Bir depoyu bir kez eklersiniz ve içerdiği her uzantı, uzantılar ekranından kurulabilir hale gelir."],
      ["İçerik türleri", "Bir uzantı neye hizmet ettiğini belirtir: manga, anime, roman, müzik veya oyun. Bu bildirim, bir sonuca dokunduğunuzda hangi okuyucunun veya oynatıcının açılacağını belirler."],
      ["Güncellemeler ve kaldırma", "Uzantılar yerinde güncellenir ve ayarları korunur. Birinin kaldırılması yalnızca uzantıyı kaldırır; Kitaplık girişleriniz hayatta kalır ve bir kaynağın bunları yeniden sunmasını beklemeniz yeterlidir."],
      ["Bunu kimin yaptığını neden umursamalısın?", "Watchtower içinde bir uzantı çalışır ancak ağa erişebilir ve verdiğiniz bilgileri okuyabilir. Güvendiğiniz depolardan yükleyin ve tanıdık olmayan her şeye karşı dikkatli olun."],
      ["Bir uzantı çalışmayı durdurduğunda", "Web siteleri değişir ve bir kaynak onlardan ayrılır. Bu genellikle bozuk bir uygulama değil, bozuk bir uzantıdır ve düzeltme, güncelleme olarak gelir."],
      ["Bir yükleme veya güncelleme başarısız olduğunda", "Başarısız bir yükleme neredeyse her zaman Android'in bilinmeyen uygulamaları engellemesidir ve başarısız bir güncelleme ise indirme işleminin yarıda durmasıdır. Dosya yöneticinizden veya tarayıcınızdan yükleme yapılmasına izin verin, ardından yeniden deneyin ve dosya kesilmişse sıfırdan yeniden yükleyin."],
    ],
    facts: [
      "Uzantılar JavaScript'tir ve uygulamanın içindeki bir sanal alanda çalıştırılır.",
      "Bir uzantı bir web sitesini kapsar.",
      "Kurulum ve güncelleme hiçbir zaman kitaplığınıza dokunmaz.",
      "Aniden başarısız olan bir kaynak genellikle bir web sitesi değişikliğidir.",
      "Başarısız bir yükleme genellikle uzantı değil Android'dir.",
    ]
  },
  "extensions-catalogue": {
    title: "Kaynaklarınızı seçme ve sürdürme.",
    body: "Uzantılar ekranı kataloğunuzdur: neyin yüklü olduğu, neyin mevcut olduğu ve neyin güncel olmadığı. Kaynak listenizi sağlıklı tutacağınız yer burasıdır.",
    subsections: [
      ["Kurulu ve kullanılabilir", "Yüklü uzantılar hemen çalışır. Mevcut olanlar eklediğiniz bir depodan gelir: listeyi yenileyin, ardından tek dokunuşla istediklerinizi yükleyin."],
      ["Bir uzantıyı güncelleme", "Daha yeni bir sürüm mevcut olduğunda, güncellemeler altında görünür. Bunu yüklemek, eski kopyanın yerini alır ve tercihlerini korur; böylece düzeltmenin size hiçbir maliyeti yoktur."],
      ["Bir uzantıyı kaldırma", "Aynı ekrandan kaldırın. Kitaplık girişleriniz aynı kalır ve başka bir kaynak veya yeniden yükleme onlara hizmet verene kadar kullanılamaz olarak gösterilir."],
      ["Listeyi okunabilir tutmak", "Uzantılar dile göre gruplandırılmıştır. Okumadığınız dilleri filtreleyerek listenin yalnızca sizin için gerçekten yararlı olan kaynakları göstermesini sağlayın."],
      ["Hiçbir şey yüklenmediğinde", "Başarısız bir yükleme, neredeyse her zaman Android'in uzantıyı değil, bilinmeyen uygulamaları engellemesidir. Dosya yöneticinizden veya tarayıcınızdan yükleme yapılmasına izin verin ve tekrar deneyin."],
      ["Kataloğun güncel tutulması", "Depolarınızı sık sık yenileyin. Yeni uzantılar belirir ve bozuk olanlar düzeltilir, ancak siz istemeden hiçbir şey gelmez."],
      ["Bir uzantı kaybolduğunda", "Yüklü bir uzantı, Android tarafından kaldırıldığında veya dil filtresi veya yetişkinlere yönelik içerik geçişi tarafından gizlendiğinde kaybolabilir. Önce filtreleri kontrol edin, ardından gerçekten gitmişse depodan yeniden yükleyin."],
    ],
    facts: [
      "Güncellemeler, bir kaynakta belirlediğiniz ayarları korur.",
      "Bir uzantının kaldırılması kitaplık girişlerinizi korur.",
      "Uzantılar depoya göre değil dile göre gruplandırılır.",
      "Bir depoyu yenilemek, yeni ve güncellenmiş uzantıları görme şeklinizdir.",
      "Eksik bir uzantı genellikle kaldırılmaz, bir filtre tarafından gizlenir.",
    ]
  },
  "extensions-devkit": {
    title: "Kendi kaynağınızı oluşturmak.",
    body: "Henüz kimsenin kapsamadığı bir web sitesi eklemek istiyorsanız, kendiniz bir uzantı yazabilirsiniz. Siteyi tanımlayan bir dosyaya ve çağrıları uygulayan bir dosyaya ihtiyacı vardır.",
    subsections: [
      ["Yazmanız gerekenler", "İki dosya: Uzantıyı adlandıran ve dilini ve içerik türünü bildiren bir bildirim ve listeleri, aramayı, ayrıntıları, bölümleri ve sayfaları getiren çağrıları içeren bir giriş dosyası."],
      ["Mevcut bir kaynaktan başlayın", "En hızlı yol, benzer bir site için çalışan bir uzantıyı kopyalamak ve URL'leri ve ayrıştırmayı değiştirmektir. Çağrıların şekli aynı kalır."],
      ["Uygulama olmadan test etme", "Komut satırı tek bir çağrı çalıştırabilir ve tam olarak geri gelenleri yazdırabilir. Bu, her hat değiştirdiğinizde cihaza uzantıyı yüklemekten çok daha hızlıdır."],
      ["Kodunuzun kullanabileceği şeyler", "İstekler, bir HTML ayrıştırıcısı ve bir JSON ayrıştırıcısı. Dosya erişimi yok, veri tabanı yok ve uygulamanın kendi ekranlarına ulaşmanın bir yolu yok."],
      ["Çıktı yanlış göründüğünde", "Bir alan boşsa, çalışma zamanından ziyade neredeyse her zaman neden ayrıştırıcıdır. Döndürdüklerinizi kaynak sözleşmenin beklentileriyle karşılaştırın."],
      ["Yayınlamadan önce", ""],
      ["Bir çağrı hiçbir şey döndürmediğinde", "Boş bir sonuç, çalışma zamanı hatasından ziyade neredeyse her zaman siteyle artık eşleşmeyen bir seçicidir. Sayfayı getirin, seçicilerinizi geçerli işaretlemeyle karşılaştırın ve uygulamayı yeniden oluşturmadan önce komut satırından tek çağrıyı test edin."],
    ],
    facts: [
      "Çalışan bir kaynağın yalnızca bir bildirime ve bir giriş dosyasına ihtiyacı vardır.",
      "Komut satırı bir çağrıyı tek başına test edebilir.",
      "Uzantılar ağa ulaşabilir ve sayfaları ayrıştırabilir, başka bir şey değil.",
      "Bildirdiğiniz içerik türü hangi okuyucunun veya oynatıcının açılacağını belirler.",
      "Boş bir sonuç genellikle artık eşleşmeyen bir seçicidir.",
    ]
  },
  "extensions-publishing": {
    title: "Bir kaynağın başkalarıyla paylaşılması.",
    body: "Uzantınız çalıştığında onu yayınlamak, onu başkalarının ekleyebileceği bir depoya koymak anlamına gelir. Depo, küçük bir JSON dosyası ve listelediği uzantı paketlerinden oluşur.",
    subsections: [
      ["Depo nedir", "Uzantı paketlerinden oluşan bir klasör ve bunları listeleyen bir JSON dizini. Klasörü HTTPS hizmeti veren herhangi bir yerde barındırın ve kişilere dizin dosyasının adresini verin."],
      ["Güncelleme yayınlama", "Sürüm numarasını yükseltin, paketi yeniden oluşturun ve dizindeki sürümü güncelleyin. Watchtower bu sayıyı karşılaştırır, dolayısıyla değişmeyen sürüm kimsenin alamayacağı bir güncellemedir."],
      ["İsmi sabit tutmak", "Paket adı uzantının kimliğidir. Bunu değiştirin ve kullanıcılar, birinciye güncelleme yerine ikinci, ayrı bir uzantıya sahip olsun."],
      ["Güven konusunda net olun", "Deponuzdan yükleme yapan kişiler, uygulamanın erişimiyle kodunuzu çalıştırıyor. Kim olduğunuzu söyleyin ve depoyu kontrol ettiğiniz bir yerde saklayın."],
      ["Bir kaynağın sürdürülmesi", "Web siteleri uyarı vermeden değişir, bu nedenle yeniden yayınlanmayı bekleyin. Bir kaynağın çalışmayı durdurduğuna dair raporları izleyin ve kullanıcılar uzaklaşmadan önce sorunu düzeltin."],
      ["Dizin adresi önemlidir", "Verdiğiniz adres index.min.json adresini göstermelidir. Başka herhangi bir yol, insanların yüklenmeyi reddeden bir depoya bakmasına neden olur."],
      ["Kullanıcılar güncellemenizi alamadığında", "Bunun genel nedeni, dizindeki değişmeyen sürüm numarası veya dizin dosyası dışında bir yere işaret eden depo adresidir. Sürümü yükseltin, adresi onaylayın ve dosyaya HTTPS üzerinden erişilebilir olup olmadığını kontrol edin."],
    ],
    facts: [
      "Depo, bir HTTPS klasörü artı bir JSON dizininden oluşur.",
      "Dizindeki sürüm, kullanıcılara bir güncellemenin mevcut olduğunu bildiren şeydir.",
      "Bir güncellemeyi güncelleme yapan şey, kararlı bir paket adıdır.",
      "Hedef web sitesi değiştiğinde yeniden yayınlamayı bekleyin.",
      "Kimsenin almadığı bir güncelleme genellikle değişmemiş bir sürüm numarasıdır.",
    ]
  },
  "local-source": {
    title: "Kendi dosyalarınızı okuma ve oynatma.",
    body: "Watchtower, cihazınızdaki bir klasörü normal bir kaynak olarak değerlendirebilir. Böylece kendi koleksiyonunuz tam olarak çevrimiçi bir koleksiyon gibi davranır ve ilerleme takibiyle tamamlanır.",
    subsections: [
      ["Manga ve romanlar", "Yerel klasörün içine dizi başına bir klasör ve onun içine bölüm başına bir dosya koyun. Bölümler CBZ arşivleri veya düz görüntü klasörleri olabilir ve klasör adı serinin başlığı olur."],
      ["anime", "Yerel anime klasörünün içine dizi başına bir klasör ve içine bölüm başına bir video dosyası koyun. Bölümler dosya adına göre sıralanmıştır, bu nedenle onları numaralandırın."],
      ["Kapaklar ve ayrıntılar", "Seri klasöründeki kapak resmi küçük resim haline gelir. Yanındaki bir detay dosyası, klasör adı yeterli olmadığında yazar, sanatçı, açıklama ve türleri ekleyebilir."],
      ["Yeni dosyalar ekleme", "Dosyaları uygulamanın dışından taşıyın, ardından Watchtower'un klasörü yeniden taraması için yerel kaynağı yenileyin. Uygulama kapalıyken eklenen dosyalar siz fark edene kadar fark edilmez."],
      ["Çevrimdışı okuma", "Yerel kaynaklar hiçbir zaman ağa dokunmaz, bu nedenle uçuş modunda çalışırlar ve engellenemez veya hız sınırlaması yapılamaz. İndirilenler ve yerel dosyalar diskte bir kez aynı şekilde davranır."],
      ["Dosyaları galeriden gizleme", "Kapakların ve bölümlerin telefonunuzun fotoğraf uygulamasının dışında kalması için klasöre bir .nomedia dosyası bırakın."],
      ["Kapaklar boş olduğunda veya dosyalar eksik olduğunda", "Boş bir kapak veya açılmayan bir seri neredeyse her zaman klasör yapısının yanlış olduğu anlamına gelir. Dizi başına bir klasör ve bölüm veya epizot başına bir dosya olduğundan emin olun, ardından girişi kaldırın, kitaplık dışındaki öğeler için veritabanını temizleyin ve yerel kaynağın klasörü yeniden taramasına izin verin."],
    ],
    facts: [
      "Hem CBZ arşivleri hem de düz görüntü klasörleri bölüm olarak okunur.",
      "Bölüm sırası dosya adını takip eder, dolayısıyla dosyalarınızı numaralandırın.",
      "Bir .nomedia dosyası, yerel medyayı sistem galerisinin dışında tutar.",
      "Yerel kaynaklar hiçbir ağ bağlantısı olmadan çalışır.",
      "Yanlış bir klasör yapısı, boş kapağın olağan nedenidir.",
    ]
  },
  "video-player": {
    title: "Bir bölümü izliyorum.",
    body: "Oynatıcı videoyu hareketlerle ve sayfalarla kaplar, böylece siz izlerken ekrandan hiçbir şey ayrılmaz. Kalite, ses, altyazılar ve hız, hepsi bir dokunuş uzağınızda.",
    subsections: [
      ["Temel kontroller", "Kontrolleri açmak için bir kez dokunun, ileri veya geri atlamak için bir tarafa iki kez dokunun ve hızlanmak için uzun basın. Videoda boş yer kaldığında yakınlaştırmak için parmaklarınızı sıkıştırın."],
      ["Kalite ve ses", "Çeşitli çözünürlükler veya ses parçaları sunan kaynaklar, bunları oynatmayı kesintiye uğratmadan yukarı kayan sayfalar halinde gösterir. Seçiminiz dizi için hatırlanıyor."],
      ["Altyazılar", "Altyazı parçaları kaynaktan veya sağladığınız bir dosyadan gelir. Altyazı sayfasından seçilip ayarlanır ve görünümleri ayarlarda bir kez ayarlanır."],
      ["Bölümler ve istatistikler", "Bir yan panel, etrafta dolaşabilmeniz için her bölümü listeler ve bir diğeri, bir şeyler ters gittiğinde oynatıcının akışta gerçekte ne yaptığını gösterir."],
      ["Dahili oyuncu mücadele ettiğinde", "Nadir bir codec bileşeni veya bozuk bir akış, mpv veya VLC gibi harici bir oynatıcıya aktarılabilir. Bu güvenilir bir geri dönüştür, bölümün kullanılamaz olduğunun bir işareti değildir."],
      ["Yeriniz kaydediliyor", "Siz izlerken ilerleme sürekli olarak yazılır, bu nedenle uygulamayı kapatmak veya gücü kaybetmek konumunuzu kaybetmez."],
      ["Bir video oynatılmadığında", "Başlamayı reddeden bir akış genellikle dahili oynatıcının işleyemediği bir codec bileşeni veya süresi dolmuş bir bağlantıdır. Önce mpv veya VLC gibi harici bir oynatıcıya geçin, ardından bu kaynaktan gelen her bölüm başarısız olursa uzantıyı güncelleyin."],
    ],
    facts: [
      "Oynatma, varsayılan olarak donanım hızlandırmalı bir kod çözücü kullanır.",
      "Hareketler parlaklığı, ses seviyesini ve aramayı yönetir.",
      "İlerleme durumu yalnızca çıkış yaptığınızda değil, sürekli olarak kaydedilir.",
      "Harici bir oynatıcı, desteklenmeyen codec bileşenlerinin geri dönüşüdür.",
      "İnatçı bir akışı harici bir oynatıcıya vermek güvenilir bir geri dönüştür.",
    ]
  },
  "player-settings": {
    title: "Oyuncuyu alışkanlıklarınıza göre şekillendirmek.",
    body: "Oynatıcı ayarları videonun kodunun nasıl çözüleceğine, hareketlerin ne yapacağına ve oynatıcıda hangi düğmelerin bulunacağına karar verir. Bunları bir kez değiştirin ve her bölüm takip eder.",
    subsections: [
      ["Kod çözme", "Donanımsal kod çözme, pille daha hızlı ve daha hafiftir ve neredeyse her şeye uygundur. Belirli bir dosya kötü oynatıldığında yazılıma geçin, çünkü yazılım kod çözme olağandışı codec bileşenlerini daha bağışlayıcıdır."],
      ["Hareketler", "Hangi kaydırmanın ne yapacağına karar verin: parlaklık ve hacim için dikey, arama için yatay. Size ters geliyorsa her yön tersine çevrilebilir."],
      ["Özel düğmeler", "Bir girişi atlamak veya ekran görüntüsü almak gibi en çok ulaştığınız eylemleri doğrudan oynatıcı yüzeyine ekleyin, böylece menülere gömülmeyi bırakın."],
      ["Gelişmiş oynatma", "Otomatik davranışın istediğiniz gibi olmadığı nadir durumlar için arabellek boyutu, zorunlu en boy oranı ve resim içinde resim burada. Çoğu insanın onlara dokunmasına asla gerek kalmaz."],
      ["Seri başına istisnalar", "Hemen hemen her oynatıcı ayarı, diğer her şeyin varsayılanlarını değiştirmeden tek bir seri için geçersiz kılınabilir. Garip sesli bir gösteri için kullanışlıdır."],
      ["Ayarların yedeğini aldıktan sonra", "Özel düğmeler ve oynatıcı tercihleri ​​yedekleme dosyanızda seyahat eder; dolayısıyla yeni bir cihaza geri yükleme, oynatıcı düzeninizi de beraberinde getirir."],
    ],
    facts: [
      "Donanım kod çözme varsayılandır ve çoğu dosyaya uygundur.",
      "Her hareket yönü ters çevrilebilir veya kapatılabilir.",
      "Tek bir seri için ayarlar geçersiz kılınabilir.",
      "Oyuncu tercihleri ​​yedeklemeye dahil edilir.",
    ]
  },
  subtitles: {
    title: "Altyazıların okunabilir hale getirilmesi.",
    body: "Altyazılar üç yerden gelir: akış, cihazınızdaki bir dosya veya bunları getiren bir kaynak. Bu sayfada bir parçanın seçilmesi, zamanlamasının düzeltilmesi ve Watchtower'un kendi çizdiği parçaların şekillendirilmesi anlatılmaktadır.",
    subsections: [
      ["Parça seçme", "Bir bölüm birden fazla altyazı parçası içerdiğinde, bunlar altyazı sayfasında listelenir. Seçiminiz o seri için hatırlanır, dolayısıyla yalnızca bir kez seçim yaparsınız."],
      ["Zamanlamanın sabitlenmesi", "Sesin önünde veya arkasında çalışan bir parça, hizalanana kadar küçük adımlarla itilebilir. Ofset hatırlanır, böylece uygulama yeniden başlatıldığında düzeltme devam eder."],
      ["Şekillendirme", "Yazı tipi, boyut, renk, taslak ve arka plan metin altyazılarına uygulanır. Bu ayarlar videoya dokunmaz ve bölümün ortasında deneme yapmak güvenlidir."],
      ["Kendi dosyalarınız", "Eşleşen ada sahip yerel bir bölümün yanına bir altyazı dosyası koyun; oynatıcı, hiçbir ayarı değiştirmeden bu dosyayı otomatik olarak yükler."],
      ["Görüntüye eklenen altyazılar", "Bazı altyazılar metin yerine resimlerden oluşur. Yeniden biçimlendirilemezler, yalnızca yeniden konumlandırılamaz veya yeniden boyutlandırılamazlar çünkü stil, görüntünün bir parçasıdır."],
      ["Altyazılar görünmediğinde", "Önce altyazı sayfasını kontrol edin: kaynak hiçbir şey sunmuyor olabilir veya dosya adı, bölümle eşleştirilecek kadar yakından eşleşmeyebilir."],
    ],
    facts: [
      "Metin altyazıları yeniden biçimlendirilebilir; resim altyazıları yapılamaz.",
      "Zamanlama sapmaları kaydedilir ve yeniden başlatmadan sonra hayatta kalır.",
      "Yerel bölümün yanındaki eşleşen dosya kendi kendine yüklenir.",
      "Altyazı seçenekleri dizi başına hatırlanır.",
    ]
  },
  reader: {
    title: "Manga, webtoon ve roman okumak.",
    body: "Okuyucu, sayfalı mangaları, dikey web çizgilerini ve metin romanlarını ele alır. Bir varsayılanı bir kez belirlersiniz ve farklı bir şeye ihtiyaç duyan seriler için onu geçersiz kılarsınız.",
    subsections: [
      ["Bir okuma modu seçme", "Sayfalı mod, basılı mangalara uygundur ve uzun şerit, tek bir uzun resim olarak çizilen webtoonlara uygundur. Bir varsayılan ayarlayın ve bir başlık diğer şekilde daha iyi okunduğunda bunu seri başına değiştirin."],
      ["Sayfaları çevirme", "İleri veya geri gitmek için kenarlara dokunun, uzun şeritte kaydırmak için kaydırın ve yakınlaştırmak için parmaklarınızı sıkıştırın. Ortaya dokunulduğunda sayfadan ayrılmadan menü açılır."],
      ["Kaldığınız yerden devam etmek", "Watchtower, her bölümde ulaştığınız sayfayı hatırlar; böylece bir seriyi yeniden açtığınızda, başlangıçta değil, tam olarak kaldığınız yerde kalırsınız."],
      ["Geniş sayfalar ve formalar", "İki sayfalık sayfalar ve alışılmadık derecede geniş taramalar, telefonda okunamayacak şekilde bölünebilir, döndürülebilir veya ölçeklendirilebilir."],
      ["İndirilen bölümler", "İndirdiğiniz bölümler anında açılır ve bölüm listesinde işaretlenir; bu da çevrimdışı okumayı pratik hale getirir."],
      ["Romanlar", "Metin romanları kitaplığınızdaki aynı girişi kullanır ancak uzantının içerik türünden otomatik olarak seçilen resim görüntüleyici yerine bir metin okuyucuda açılır."],
      ["Bir sayfa yüklenmediğinde", "Bazen uygulama bir bölümdeki resmi tanıyamaz. Okuyucudan ayrılmak ve bölümü yeniden açmak genellikle sorunu çözer ve devam ederse görüntünün kendisi uygulama yerine kaynakta eksik olur."],
      ["Aynı anda iki sayfa", "Çift sayfalı okuyucu mevcut değildir çünkü taramalar sayfa sonunun nerede olacağı konusunda nadiren anlaşırlar. Bir seferde bir sayfa okumak veya web çizgileri için uzun şerit kullanmak mevcut davranıştır."],
    ],
    facts: [
      "Uzun şerit dikey web çizgi filmlerine uygundur ve sayfa genişliğini göz ardı eder.",
      "Okuyucu bölüm başına ulaştığınız sayfayı hatırlar.",
      "Siz açılıncaya kadar yakınlaştırma uzun şeritte kapalıdır.",
      "Romanlar resim okuyucuda değil metin okuyucuda açılır.",
      "Bir bölümün yeniden açılması, yüklenemeyen sayfayı düzeltir.",
    ]
  },
  "reader-settings": {
    title: "Okumayı sevdiğiniz şekilde ayarlama.",
    body: "Okuyucu ayarları, okuma yönünü, sayfaların nasıl ölçeklendiğini ve kırpıldığını ve ekranın hangi bölümlerinin sayfayı çevirdiğini kapsar.",
    subsections: [
      ["Okuma", "Varsayılan modu, sayfalar çevrildikçe canlandırılıp canlandırılmayacağını ve hangi bölümlerin atlanacağını ayarlayın. Atlanan bölümler hala oradadır, sizi rahatsız etmezler."],
      ["Görüntülemek", "Döndürme kilidi, arka plan rengi ve tam ekran burada bir arada yaşıyor. Koyu bir arka plan geceleri okumaya uygundur ve sayfalar arasında parlamayı azaltır."],
      ["Sayfalar", "Bir sayfanın ekranı nasıl dolduracağını seçin: Genişliğe, yüksekliğe, tüm ekrana sığdırın veya orijinal boyutunda gösterin. Kenar kırpma, tarama kenar boşluklarını otomatik olarak kırpar."],
      ["Bölgelere dokunun", "Dokunmanın sayfayı ileri, geri döndürdüğü ve menüyü açtığı yeri seçin. Sol elle okumak için tüm düzen yansıtılabilir."],
      ["Uzun şerit", "Yan dolgu ve ayrı dokunma bölgeleri, aksi takdirde tam genişlikte bir görüntünün çok küçük olacağı uzun webtoonların geniş ekranda rahat olmasını sağlar."],
      ["Seri başına istisnalar", "Bunlardan herhangi biri bir seri için geçersiz kılınabilir; bu, olağandışı şekilde taranan veya diğer yönde okunan bir başlık için kullanışlıdır."],
    ],
    facts: [
      "Ölçek seçenekleri sığdırma genişliğini, sığdırma yüksekliğini, ekranı sığdırmayı ve orijinal boyutu içerir.",
      "Kenar kırpma, tarama kenar boşluklarını sizin için kaldırır.",
      "Dokunma bölgeleri sol elle okumak için yansıtılabilir.",
      "Atlama kuralları seri başına geçersiz kılınabilir.",
    ]
  },
  updates: {
    title: "Kütüphanenizi güncel tutmak.",
    body: "Güncellemeler, yeni bölümler ve bölümler için kaynaklarınızı kontrol eder. İyi yapılırsa sizi güncel tutarlar. Dikkatsizce yapılırsa, herkesi bloke edene kadar bir kaynağı çekiçlerler.",
    subsections: [
      ["Küresel güncelleme", "Kitaplığınızın tamamında çalışır ve yenilikleri bildirir. Yavaş serilerin her gün boşuna kontrol edilmemesi için bunu gerçekten takip ettiğiniz kategorilerle sınırlandırın."],
      ["Neler atlanır", "Bitirdiğiniz diziler, başlamadığınız diziler ve yayınlanması beklenmeyen diziler otomatik olarak atlanır. Büyük bir kütüphanenin bir istek seli oluşturmasını engelleyen şey budur."],
      ["Bildirimler", "Yeni bölümler ve bölümler, bir kategoriye daraltabileceğiniz veya güncellemeleri kapatmadan tamamen sessize alabileceğiniz bir bildirimi görüntüler."],
      ["Bir seri yenileniyor", "Seri menüsünü açın ve diğer her şeyin üzerinde bir güncelleme çalıştırmadan hemen kontrol etmek istediğinizde yenileyin."],
      ["Bu neden önemli?", "Çok fazla istek alan bir kaynak, anti-bot korumasıyla uygulamanın tamamını engelleyebilir. Güncellemeleri takip ettiğiniz içeriklerle sınırlandırmak, herkesin güvendiği kaynakları korur."],
      ["Güncellemeler durmuş gibi görünüyorsa", "Android pil optimizasyonu arka planda çalışmayı askıya alabilir. Güncellemeler yalnızca uygulamayı açtığınızda gelirse Watchtower'u pil kısıtlamalarından muaf tutun."],
      ["Bir güncelleme bir hata bildirdiğinde", "Bir seride başarısız olan bir güncelleme genellikle uygulamadan ziyade o kaynaktan kaynaklanır. Seriyi elle yenileyin, uzantıyı güncelleyin ve büyük bir güncelleme çalıştırmasının ardından hız sınırlamasının yeniden denemeler yerine zamanla kendini temizlediğini unutmayın."],
    ],
    facts: [
      "Güncellemeler seçtiğiniz kategorilerle sınırlı olabilir.",
      "Tamamlanan seriler varsayılan olarak atlanır.",
      "Yoğun güncelleme trafiği, uygulamayı engelleyecek bir kaynak bulabilir.",
      "Pil optimizasyonu arka plan güncellemelerini geciktirebilir.",
      "Bir serideki başarısız bir güncelleme, uygulamayı değil o kaynağı işaret eder.",
    ]
  },
  downloads: {
    title: "Kitaplığınızı çevrimdışına alma.",
    body: "İndirilenler, bölümleri ve bölümleri cihazınıza kaydeder, böylece bağlantı olmadan izleyebilir veya okuyabilirsiniz. Sınırları net olan tek bir kuyrukta yaşıyorlar.",
    subsections: [
      ["İndirmeyi başlatma", "Bir diziden bölümler veya bölümler eklediğinizde indirme sırasına katılırlar. Sıradan, bir sonraki işlemi yeniden sıralayabilir veya artık istemediğiniz bir şeyi iptal edebilirsiniz."],
      ["Neden birer birer", "Watchtower herhangi bir tek kaynaktan aynı anda bir dizi indirir. Bir sitede çok sayıda isteğin tetiklenmesi, kaynakların engellenmesine neden olan bot karşıtı korumayı tetikleyen şeydir."],
      ["Yalnızca indirme modu", "Kaydetmediğiniz herhangi bir şeyi gizlemek için bunu açın. Uygulama daha sonra yalnızca cihazınızda bulunanları gösterir; bu, yolculukta veya tarifeli bağlantıda kullanışlıdır."],
      ["Dosyaların saklandığı yer", "İndirilenler kaynağın ardından serinin adını taşıyan bir klasörün altına gelir. Her iki klasörü de yeniden adlandırmak algılamayı bozar, bu nedenle onları kendi hallerine bırakın."],
      ["İndirilenler kaybolduğunda", "Kaydedilen içeriğin gösterimi durursa, depolama klasörü muhtemelen taşınmıştır veya okunamaz hale gelmiştir. Depolama konumunu kontrol edin ve indirilenler dizinini yeniden oluşturun."],
      ["Yedekleme neleri kapsamaz", "Yedekleme dosyaları indirilen medyanızı değil, kitaplığınızı ve ayarlarınızı taşır. Bunların ayrı ayrı taşınması gerekiyor."],
      ["İndirme işlemi kısmen başarısız olduğunda", "Durdurulan indirme genellikle kopmuş bir bağlantı veya yanıt vermeyi durduran bir kaynaktır. Kısmi dosyalar tutulduğu için kuyruktan yeniden deneyin ve sorun ağdan kaynaklanıyorsa Wi-Fi'ye geçin. Kalıcı 403 veya 429 yanıtları, dosyanın kaybolduğu değil, kaynağın sizi reddettiği anlamına gelir."],
    ],
    facts: [
      "Her kaynak için aynı anda yalnızca bir dizi bilerek indirilir.",
      "İndirilen medya yedeklemeye dahil edilmez.",
      "Dahili depolama, SD karttan daha hızlı ve daha güvenilirdir.",
      "İndirilenler klasörünü yeniden adlandırmak algılamayı bozar.",
      "Durdurulan bir indirme, kısmi dosyalarını korur, bu nedenle yeniden denemek onu devam ettirir.",
    ]
  },
  categories: {
    title: "Uzun bir kütüphaneyi birkaç rafa dönüştürmek.",
    body: "Kategoriler kitaplığınızı duruma veya zevke göre gruplandırır ve nelerin otomatik olarak güncelleneceğini ve indirileceğini kontrol eder.",
    subsections: [
      ["Kategori oluşturma", "Onlara sizin için anlamlı olanı adlandırın ve istediğiniz gibi sipariş edin. Çoğu insan, bir şeyi ne sıklıkta takip ettiklerine bağlı olarak bir avuç dolusu takipçiyle sonuçlanır."],
      ["İçlerine dizi koymak", "Bir seriye uzun basın, kategori seçeneğini seçin ve geçerli olan her şeyi işaretleyin. Bir seri aynı anda birden fazla rafta yer alabilir."],
      ["Güncellemeler için bunları kullanma", "Genel güncellemeyi ve otomatik indirmeleri belirli kategorilere yönlendirin. Yalnızca aktif olarak takip ettiğiniz diziler trafik oluşturur."],
      ["Bir dizi çıkarmak", "Eklediğiniz yerdeki bir kategorinin seçimini kaldırın. Dizi kütüphanenizde kalır, o raftan çıkar."],
      ["Kalıcı isimlendirme", "Kategorileri kaynaklardan ziyade alışkanlıklarınıza göre adlandırın. Daha sonra bir diziyi kaynaklar arasında taşımak kitaplığınızı asla yeniden karıştırmaz."],
      ["Basit tutmak", "Kategoriler, sayıları az olduğunda en iyi sonucu verir. Bir kategorinin ne işe yaradığını hatırlayamıyorsanız muhtemelen yarardan çok zarar veriyordur."],
    ],
    facts: [
      "Bir seri aynı anda birden fazla kategoriye ait olabilir.",
      "Küresel güncelleme tek bir kategoriye işaret edilebilir.",
      "Otomatik indirmeler seçilen kategorilerle sınırlandırılabilir.",
      "Kaynakların eskimesinden sonra kategorilerin adlandırılması kötü bir şekilde eskimektedir.",
    ]
  },
  tracking: {
    title: "İzlediklerinizi otomatik olarak kaydediyor.",
    body: "İzleme, Watchtower'u geçmişinizi tutan hizmetlere bağlar. Bir kez oturum açarsınız ve elle yazmak yerine ilerlemeniz ilerledikçe kaydedilir.",
    subsections: [
      ["Hangi hizmetler destekleniyor", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori ve Bangumi. Hepsi izleme ayarlarından ayarlanır ve birden fazla bağlantı kurabilirsiniz."],
      ["Oturum aç", "İzleme ayarlarını açın ve oturum açma işlemini başlatmak için bir hizmete dokunun. Kitsu, kullanıcı adı yerine e-posta adresinizi soran ve insanları yakalayan kişidir."],
      ["Bir seriyi bağlama", "Bir seri açın, izlemeye gidin ve hizmeti ekleyin. Watchtower başlığı sizin için arar ve yanlış girişle eşleştiğinde arama terimlerini düzenleyebilirsiniz."],
      ["Ne kadar izlendiği sayılır", "Bir bölümün ne zaman görüldü olarak işaretleneceğine bir yüzde eşiği karar verir. Yarı yolda durmanın tam bir bölümü kaydetmemesini sağlayacak kadar yükseğe ayarlayın."],
      ["Yalnızca tek yön", "İlerleme Watchtower'dan hizmete aktarılır. Listenizi web sitesinde düzenlemek uygulamada hiçbir şeyi değiştirmez; bu nedenle listeyi yönetmek için bir yer seçin."],
      ["Çevrimdışı izliyorum", "Bağlantı olmadan kaydettiğiniz ilerleme sıraya alınır ve bir daha çevrimiçi olduğunuzda yüklenir, böylece uçuş geçmişiniz kaybolmaz."],
      ["Oturum açma veya senkronizasyon başarısız olduğunda", "Oturum açmayı reddeden bir hizmet genellikle süresi dolmuş bir oturumdur veya hizmetin kendi sitesindeki bir captcha'dır; bu nedenle hizmetin web sitesi üzerinden bir kez oturum açın ve tekrar deneyin. Senkronize edilmeyen ilerleme normalde kaybolmak yerine sıraya alınır ve bağlantı geri geldiğinde yeniden denenir."],
      ["Yanlış başlıkla eşleşiyor", "Otomatik eşleştirme, başlık belirsiz olduğunda yanlış girişi seçebilir. İzleme bölümünde söz konusu seriye ilişkin arama terimlerini düzenleyin ve doğru sonucu seçin, ardından taşıdığı ilerlemenin istediğiniz ilerleme olduğunu onaylayın."],
    ],
    facts: [
      "İzleme, kitaplığın tamamı için değil, dizi başına ayarlanır.",
      "İlerleme yalnızca dışarıya doğru akar, asla geri dönmez.",
      "Bir bölümün ne zaman izlendi sayılacağına eşik karar verir.",
      "Yeniden bağlandığınızda çevrimdışı ilerleme yüklenir.",
      "Başarısız bir oturum açma işlemi genellikle hizmetin kendisinde süresi dolmuş bir oturumdur.",
    ]
  },
  backups: {
    title: "Bir şeyler ters gitmeden önce kitaplığınızı koruyun.",
    body: "Yedekleme, kitaplığınızı, ilerlemenizi ve ayarlarınızı tutan tek bir dosyadır. Aynı zamanda bir kütüphaneyi cihazlar arasında taşımanın da tek yoludur.",
    subsections: [
      ["Bir tane yapmak", "Veri ve depolama ayarlarını açın, bir yedekleme oluşturmayı seçin ve bunu başka bir cihazdan ulaşabileceğiniz bir yere kaydedin. Emin olmadığınız herhangi bir güncellemeden önce bunu yapın."],
      ["İçinde ne var", "Takip ettiğiniz her dizi, hangi kategorilerde yer aldığı, ne kadar ilerlediğiniz, takip bağlantılarınız, geçmişiniz, uzantılarınız ve tüm ayarlarınız."],
      ["Ne kaldı", "İndirilen dosyalar, özel kapaklar ve kitaplığa hiç eklenmemiş serilerin geçmişi. Bunlar bir yedekten kurtarılamaz."],
      ["Geri yükleme", "Dosyayı yeni cihaza aktarın, ardından izleyicilerinizde tekrar oturum açın ve uzantılarınızı yeniden yükleyin, böylece her şey temiz bir şekilde yeniden bağlanabilsin."],
      ["Otomatik yedeklemeler", "Güncel bir yedeklemenin siz hatırlamadan her zaman mevcut olması için bir sıklık ayarlayın. Bu, kötü bir güncellemeye karşı en iyi korumadır."],
      ["Yeni bir cihaza geçme", "Yedekleyin, yeni cihaza yükleyin, geri yükleyin, ardından izleyicilerde oturum açın ve uzantıları yeniden yükleyin. İndirilenlerin ayrı ayrı kopyalanması gerekir."],
      ["Geri yükleme başarısız olduğunda", "Yarıda durdurulan bir geri yükleme genellikle kısaltılmış veya güncelliğini kaybetmiş bir yedekleme dosyasından ya da yedekleme ile uygulama arasındaki sürüm uyumsuzluğundan kaynaklanır. Yedeklemeyi kaynak cihazdan yeniden oluşturun, dosyanın tamamen kopyalandığını onaylayın ve en az onu oluşturan uygulama kadar yeni bir uygulamaya geri yükleyin."],
    ],
    facts: [
      "Bir kitaplığı cihazlar arasında taşımanın tek yolu yedeklemedir.",
      "İndirilen medyanın ayrı olarak taşınması gerekir.",
      "Özel kapaklar yedeklemenin parçası değildir.",
      "Otomatik yedeklemeler, hatalı bir güncellemeye karşı en güvenli savunmadır.",
      "Başarısız bir geri yükleme genellikle kısaltılmış veya güncelliğini kaybetmiş bir yedekleme dosyasıdır.",
    ]
  },
  storage: {
    title: "Watchtower'un dosyalarını sakladığı yer.",
    body: "Yedeklemeler, indirmeler ve yerel kaynakların tümü tek bir depolama konumunda bulunur. Bunu kasıtlı olarak seçmek, indirmelerin daha sonra kaybolmasını önleyen şeydir.",
    subsections: [
      ["Klasör düzeni", "Her şey seçtiğiniz tek bir klasör altında bulunur: otomatik yedeklemeler, indirilen bölümler ve bölümler, yerel manganız, yerel animeniz ve harici oynatıcılar için yapılandırma. Düzeni bilmek başıboş bir dosyayı yerleştirmeyi kolaylaştıran şeydir."],
      ["Bir yer seçme", "Bir yıl içinde hâlâ ulaşabileceğiniz bir klasör seçin. Depolama biriminin kökünden kaçının ve daha sonra dosyaları uygulamanın altından taşımaktan kaçının."],
      ["Android izinleri", "Modern Android, uygulamaları kendi dizinlerinde tutar. Watchtower'a seçtiğiniz depolama klasörüne erişim izni verin, aksi takdirde indirmeler ve yerel kaynaklar sessizce başarısız olur."],
      ["Dosyaları taşıdıktan sonra", "Dosyaları uygulamanın dışından taşıyın ve ardından yenileyin, böylece Watchtower klasörleri yeniden tarar. Aksi halde yeni içerik, başka bir şey taramayı tetikleyene kadar görünmez kalır."],
      ["Galeriyi temiz tutmak", "İndirilenler klasöründeki bir .nomedia dosyası, kapakları ve bölümleri telefonunuzun fotoğraf galerisinden uzak tutar."],
      ["Dahili depolama neden daha iyidir?", "Dahili depolama birimindeki indirmeler, bağlantısı kesilebilen veya bozulabilen çıkarılabilir bir karta kıyasla daha hızlıdır ve okunamaz hale gelme olasılığı çok daha düşüktür."],
      ["Uygulama klasöre ulaşamadığında", "İzin hataları ve kaybolan indirmeler, depolama klasörünün taşınmasından veya okunamaz hale gelmesinden kaynaklanır. Uygulamanın hâlâ erişime sahip olduğunu doğrulayın, boş alanı kontrol edin ve bağlantısı kesilebilen çıkarılabilir bir kart yerine dahili depolamayı tercih edin."],
    ],
    facts: [
      "Yedeklemeler, indirmeler ve yerel kaynaklar tek bir depolama konumunu paylaşır.",
      "Android'in bu klasör için açık izne ihtiyacı var.",
      "Bir .nomedia dosyası, indirilen medyayı galeriden gizler.",
      "Dahili depolama SD karttan daha güvenilirdir.",
      "Taşınmış veya okunamayan bir depolama klasörü, indirmeleri ve yedeklemeleri gizler.",
    ]
  },
  settings: {
    title: "Uygulamanın nasıl davranacağını değiştiren ayarlar.",
    body: "Her özelliğin kendi seçeneklerinin ötesinde, uygulama genelindeki bir dizi ayar; güncellemeleri, gizliliği, kurulumu ve bir şeyler ters gittiğinde nasıl kurtulacağınızı etkiler.",
    subsections: [
      ["Genel", "Tema, arayüz dili ve kütüphanenin varsayılan olarak nasıl davrandığı. Bunlar her yerde aynı anda geçerli olduğundan, uygulama size ait gibi gelmediğinde bakılacak ilk yer onlardır."],
      ["Mahremiyet", "Ekranı uygulama değiştiricide gizlemek kitaplığınızı küçük resimlerden uzak tutar ve gizli mod, siz göz atarken geçmişi kaydetmeyi durdurur. Gizli mod, ne kadar uzağa gittiğinizi değil, neye baktığınızı gizler."],
      ["Ağ", "Şifrelenmiş DNS bazı temel engellemeleri aşabilir ve bir kaynak bir ağda yüklenmeyip başka bir ağda çalıştığında denemeye değer. Proxy, tüm ağ için aynı işi yapar."],
      ["Uzantıları yükleme", "Android normalde mağazanın dışından yapılan yüklemeleri engeller. Bu iznin verilmesi, uzantıların yüklenmesine izin veren şeydir ve Shizuku, bunu zorlaştıran cihazlar için bir alternatiftir."],
      ["Teşhis", "Kilitlenme günlükleri, logcat yakalama ve dizin yeniden oluşturma burada yayında. Bir şeyler ters gittiğinde ve tahminlerden ziyade kanıt istediğinizde başvuracağınız yer burasıdır."],
      ["Bir sorunu bildirmeden önce", "Uygulama sürümünüzü, başarısız olan kaynağı ve ekranda gösterilenleri not edin. Bu, belirsiz bir raporu gerçekten düzeltilebilecek bir şeye dönüştürür."],
      ["Sıkışmış durumu sıfırlama", "Önbelleği temizlemek, çerezleri ve web verilerini temizlemek ve dizinleri yeniden oluşturmak, her biri farklı bir sorun sınıfını çözer. Önbellek, eski sayfa verilerini temizler, çerezler takılı kalmış doğrulamayı temizler ve dizin yeniden oluşturma işlemi, depolama klasörünü yeniden tarar. Veritabanının temizlenmesi, kitaplığınızda olmayan serileri kaldırır; bu, boş bir yerel kapak için olağan çözümdür."],
      ["Verilerinizi saklayan son çare", "Başka hiçbir şey işe yaramazsa, yeni bir yedekleme alın, ardından uygulamayı yeniden yükleyin ve geri yükleyin. Bu, kurulumun kendisinde bozuk olan her şeyi değiştirirken kitaplığınızı ve ayarlarınızı korur."],
    ],
    facts: [
      "Ekran görüntüsü alabilmek için uygulama değiştirici gizlilik ayarının kapalı olması gerekir.",
      "Gizli mod, ilerlemeyi değil geçmişin kaydedilmesini durdurur.",
      "Kilitlenme günlükleri cihazınızda kalır ve hiçbir zaman otomatik olarak gönderilmez.",
      "Şifrelenmiş DNS genellikle yalnızca tek bir ağda arızalanan bir kaynağı düzeltir.",
      "Önbellek, çerezler ve dizinlerin her biri farklı sınıftaki sorunları çözer.",
      "Yeniden yüklemeden önce yedekleyin, ardından kitaplığınızı korumak için geri yükleyin.",
    ]
  },
  "extension-runtime": {
    title: "Uzantıların nasıl çalıştırıldığı ve ne kadar güvenli olduğu.",
    body: "Uzantılar JavaScript'tir ve Watchtower bunları, onlara ağdan başka hiçbir şey sağlamayan bir sanal alanda çalıştırır. Bu sayfada bunun sizin için ne anlama geldiği açıklanmaktadır.",
    subsections: [
      ["Uzantılarınızı ne çalıştırır?", "Watchtower, uygulamaya gömülü küçük bir JavaScript motoru kullanır. Her platformda aynı motor olduğundan kaynak, telefonda ve sunucuda aynı şekilde davranır."],
      ["Bir uzantının ne yapmasına izin verilir?", "Web istekleri yapabilir, aldığı sayfaları ayrıştırabilir ve kendi ayarlarından birkaçını saklayabilir. Araç kutusunun tamamı budur."],
      ["Nelerden uzak tutulur", "Dosyalarınız, kitaplığınız, hesaplarınız ve uygulamanın kendi ekranları. Bir uzantının ürettiği her şey, uygulamanın işlemesi için düz veriler olarak geri gönderilir."],
      ["Yavaş bir kaynak neden sürüklenir?", "Yavaş yanıt veren bir kaynak, uygulama onu beklediği için kendi ekranlarını yavaşlatır. Diğer kaynaklar etkilenmediğinden yavaşlık, ağır bir uygulamanın değil, tek bir kötü kaynağın işaretidir."],
      ["Bunun güven açısından anlamı nedir?", "Korumalı alan, bir uzantının neleri bozabileceğini sınırlar ancak niyeti değerlendirmez. Hala yazdığınız her şeyi ve getirdiği her şeyi görebilir. Güvendiğiniz kişilerden yükleyin."],
      ["Her yerde aynı motor", "Uygulama ve Linux komut satırı bu çalışma zamanını paylaştığından, telefonunuzda çalışan bir uzantı hiçbir değişiklik olmadan sunucuda da çalışır."],
    ],
    facts: [
      "Uzantılar ağ erişimi ve sayfa ayrıştırma olanağından başka bir şey elde etmez.",
      "Dosyalarınızı veya kitaplığınızı doğrudan okuyamazlar.",
      "Yavaş bir kaynak yalnızca kendi ekranlarını yavaşlatır.",
      "Aynı sanal alan mobilde, masaüstünde ve komut satırında çalışır.",
    ]
  },
  "extension-contract": {
    title: "Bir kaynağın sağlaması gerekenler.",
    body: "Bir uzantının işe yaraması için sabit bir dizi soruyu yanıtlaması gerekir: Ne popülerdir, ne yenidir, bir aramanın sonuçları nelerdir, bir seri neleri içerir ve sayfalarının ve akışlarının nerededir.",
    subsections: [
      ["Listeleme ve arama", "Bu aramalar, göz atılabilir listeleri döndürür: popüler olan, yakın zamanda piyasaya sürülenler ve bir terim için yapılan aramada ortaya çıkanlar. Bir kaynağın kullanılabilir olması için gereken minimum değerlerdir."],
      ["Seriler ve bölümler", "Bir çağrı bir dizinin ayrıntılarını doldururken, bir diğeri sıralı bölümleri veya bölümleri döndürür. Bunlar olmadan kaynak aranabilir ancak açılamaz."],
      ["Sayfalar ve video", "Okumak için bir çağrı, bir bölümün resim adreslerini döndürür. Video için bir çağrı, kalite ve ihtiyaç duyulan başlıklarla birlikte mevcut akışları döndürür."],
      ["İsteğe bağlı ekstralar", "Filtreler, kaynağa özel ayarlar ve özel görüntü işleme isteğe bağlıdır. Bunlarsız bir kaynak hâlâ çalışıyor; sadece yapılandırmak için daha az şey sunar."],
      ["İçerik türü neden önemlidir?", "Bir uzantının bildirdiği tür, bir sonucun manga okuyucuda mı, video oynatıcıda mı yoksa roman okuyucuda mı açılacağına karar verir. Yanlış yapmak içeriğin yanlış ekrana gönderilmesine neden olur."],
      ["Ne gerekli değil", "Listeleme ve aramanın ötesindeki her şey bir bonustur. Yalnızca listeleyen ve arama yapan minimal bir kaynak mükemmel bir kaynaktır."],
    ],
    facts: [
      "Listeleme ve arama tek başına göz atılabilir bir kaynak haline gelir.",
      "Ayrıntılar ve bölüm çağrıları bir serinin açılmasını sağlayan şeylerdir.",
      "Filtreler ve kaynak ayarları isteğe bağlıdır.",
      "İçerik türü hangi okuyucunun veya oynatıcının açılacağını belirler.",
    ]
  },
  "ui-schema": {
    title: "Bir kaynağın kendi ana ekranını tasarlamasına izin vermek.",
    body: "Bazı kaynaklar zengin bir ön sayfa sunar: afişler, kapak sıraları, öne çıkan bir blok. Bir uzantı, her biri için uygulama kodu yazmak yerine bu düzeni kendisi tanımlayabilir.",
    subsections: [
      ["Ne için?", "Bir kaynak, ana ekranını veri olarak tanımlayabilir: her biri kaynağın sağladığı içeriğe işaret eden satırlar, kartlar ve afişler. Uygulama bunu normal widget'larıyla çiziyor."],
      ["Neden iyi bir fikir?", "Bu, yeni bir web sitesinin, yeni bir uygulama sürümü olmadan özelleştirilmiş bir ön sayfaya sahip olabileceği ve sayfanın, kutudaki bir web sayfası yerine hala yerel görüneceği anlamına gelir."],
      ["Ne tarif edilebilir", "Listeler, satırlar, kartlar, bannerlar ve metin blokları yapı taşlarıdır. Bu, pratikte hemen hemen her kaynak ana ekranının düzenini kapsar."],
      ["Bir kaynağın hiçbiri olmadığında", "Bir uzantı bir düzeni tanımlamıyorsa, Watchtower kaynağın listelerinden bir düzen oluşturur. Hiçbir şey kırılmaz; sayfa daha sade."],
      ["Ne yapamaz", "Açıklama kod değil veridir. Mantığı çalıştıramaz, dosyalarınıza ulaşamaz veya uygulamanın nasıl davrandığını değiştiremez; tam da bu nedenle kabul edilmesi güvenlidir."],
      ["Kaynak yazan kişiler için", "Bunu bir programdan ziyade düzen dosyası olarak düşünün. Uygulamaya nasıl çizileceğini değil, ne göstereceğini söylüyorsunuz."],
    ],
    facts: [
      "Bir kaynak kendi ana ekranını veri olarak tanımlayabilir.",
      "Bilinmeyen yapı taşları sayfayı bölmek yerine yok sayılıyor.",
      "Bir kaynak hiçbir düzen sağlamadığında varsayılan düzen kullanılır.",
      "Açıklama kodu çalıştıramaz veya dosyalarınıza ulaşamaz.",
    ]
  },
  api: {
    title: "Watchtower'u başka bir programdan kullanma.",
    body: "Uygulama, kendi makinenizde küçük bir web sunucusu açabilir; bu, komut dosyalarının, harici oynatıcıların ve diğer cihazların, uygulamanın kullandığı kaynakların aynısını kullanmasına olanak tanır.",
    subsections: [
      ["Bu ne", "Uygulamaya yerleşik küçük bir web sunucusu. Arayüzle aynı uzantıları ve aynı kitaplığı kullanır, böylece döndürdüğü her şey ekranda gördüklerinizle eşleşir."],
      ["Açma", "Siz kasıtlı olarak etkinleştirene kadar kapalıdır. Gelişmiş ayarlarda açın ve bağlantı noktasını not edin, ardından aracınızı bu adrese yönlendirin."],
      ["Ne sorabilirsin", "Yüklü kaynaklarınız, kitaplık girişleriniz, herhangi bir kaynakta arama ve çözümlenmiş bir video akışı. Bu, bir medya merkezini veya harici bir oynatıcıyı çalıştırmak için yeterlidir."],
      ["Neden bunu isteyebilirsin?", "Otomasyon, farklı bir ön uç veya ağınızdaki başka bir cihazın, telefonunuzun önceden kurmuş olduğu kaynakları kullanmasına izin vermek."],
      ["Kendi ağınızda tutun", "Sunucunun parolası yoktur ve güvenilir bir yerel ağ için tasarlanmıştır. Herkesin kütüphanenizi okuyabileceği internete maruz bırakmayın."],
      ["Komut satırıyla ilişkisi", "Linux komut satırı aynı sunucuyu açığa çıkarır, böylece uygulamaya karşı yazılan bir komut dosyası, hiçbir değişiklik olmadan başsız bir makinede çalışır."],
    ],
    facts: [
      "Ayarlarda etkinleştirene kadar sunucu kapalıdır.",
      "Varsayılan olarak 4567 numaralı bağlantı noktasını dinler.",
      "Arayüzle aynı kaynakları ve kütüphaneyi kullanır.",
      "İnternet için değil, güvenilir bir yerel ağ içindir.",
    ]
  },
  cli: {
    title: "Watchtower'yu ekran olmadan çalıştırma.",
    body: "Linux komut satırı, uygulamayla aynı motoru çalıştırır; böylece bir sunucu veya zamanlanmış bir iş, hiç kimse izlemeden getirilebilir, arayabilir ve indirilebilir.",
    subsections: [
      ["Ne için?", "Sunucular, SSH oturumları ve otomatikleştirilmiş işler. Ekranlar yerine metin arayüzüne sahip uygulamayla aynı uzantı motoru olduğundan grafik oturumuna ihtiyaç duymaz."],
      ["Odaklanmak", "Yardım komutuyla başlayın, ardından çalışma zamanının yüklenebildiğinden ve bir iş konusunda ona güvenmeden önce ihtiyaç duyduğu her şeye erişebildiğinden emin olmak için doktor komutunu çalıştırın."],
      ["Uzantılarla çalışma", "Bir veri havuzunun neler sunduğunu listeleyin, doğrulayın ve bir kaynağı canlı siteyle karşılaştırın. Test, kaynağın yüklenmesinden, arama ve ayrıntılı aramaların yapılmasına kadar aşamalar halinde gerçekleştirilir."],
      ["Bir kaynağı doğrudan çağırmak", "Arama gibi tek bir işlemi başlatabilir ve JSON'u geri alabilirsiniz. Komut satırını komut dosyası oluşturmak ve bir kaynakta hata ayıklamak için yararlı kılan şey budur."],
      ["Ağ üzerinden hizmet verme", "Uygulamanın sunduğu aynı web sunucusunu başlatabilir; bu, uzak bir istemcinin başsız bir makineyle konuşma şeklidir."],
      ["Henüz yapmadığı şey", "Komut satırı uygulamanın yerel veritabanlarını açmadığından kitaplık, geçmiş ve indirme kuyruğu komutları başsız olarak kullanılamaz. Bunların hâlâ uygulamaya ihtiyacı var."],
    ],
    facts: [
      "Komut satırı, uygulamanın uzantı motorunu yeniden kullanır.",
      "Doktor komutu, siz ona güvenmeden önce çalışma zamanını kontrol eder.",
      "Bir kaynak, yüklemeden aramaya kadar aşamalar halinde test edilebilir.",
      "Kitaplık ve indirme komutları hâlâ uygulamayı gerektiriyor.",
    ]
  },
  deployment: {
    title: "Watchtower'u kendi sunucunuzda çalıştırma.",
    body: "Bir ev sunucusu veya küçük bir grup için Linux komut satırı sürekli olarak çalışabilir ve ağınızdaki her istemciye aynı kaynakları sunabilir.",
    subsections: [
      ["Ne elde edeceksin", "Komut satırını ve ihtiyaç duyduğu çalışma zamanı dosyalarını tutan tek bir klasör. Yükleyici komut dosyası bunu seçtiğiniz bir öneke kopyalar ve çalışacak şekilde ayarlar."],
      ["Kurulum", "Yükleyiciyi paketinden çıkardığınız klasörle ve istediğiniz önekle çalıştırın. Ana dizininizin altında bir önek kullanmak, daha sonra yapılacak her şey için root'a ihtiyaç duymanızı önler."],
      ["Bunu bir hizmet olarak çalıştırmak", "HTTP üzerinden hizmet verebildiğinden, arka planda çalışmasını sağlayabilir ve ağınızdaki diğer cihazların, yapılandırdığı kaynakları kullanmasına izin verebilirsiniz."],
      ["Ne işe yarar", "Bir medya merkezi, programlı bir indirici veya diğerlerinin buna gerek duymaması için kaynakları tutan bir makine. Aynı motor olduğundan kaynaklar aynı şekilde davranır."],
      ["Güncel tutmak", "Daha yeni bir yapının paketini açıp yükleyiciyi tekrar çalıştırarak güncelleyin. Yapılandırmanız önekte bulunur ve yükseltme işlemi sırasında üzerine yazılmaz."],
      ["Eğer bir şey çalışmazsa", "Doctor komutu tam olarak bunun için var. Önce onu çalıştırın; size sorunun çalışma zamanından mı, ağdan mı yoksa kaynaktan mı kaynaklandığını söyleyecektir."],
    ],
    facts: [
      "Başsız yapı, bağımsız bir klasör artı bir yükleyiciden oluşur.",
      "Ana dizininizin altına kurmak root ihtiyacını ortadan kaldırır.",
      "Ağınızdaki diğer cihazlara HTTP üzerinden hizmet verebilir.",
      "Doktor komutu çoğu başlatma hatasının teşhisini yapar.",
    ]
  },
  troubleshooting: {
    title: "Bir şey çalışmıyorken.",
    body: "Hemen hemen her sorun birkaç şeyden biridir: değişen bir kaynak, bir web sitesinin engellenmesi, eksik bir izin veya güncellenmesi gereken bir uzantı. Bu sırayla çalışın.",
    subsections: [
      ["Daraltarak başlayın", "Herhangi bir ayara dokunmadan önce sorunun kaynakta mı, ağınızda mı yoksa cihazınızda mı olduğuna karar verin. Bir kaynak başarısız olurken diğerleri çalışırken o kaynağı işaret ediyor; Başarısız olan her şey uygulamayı veya bağlantıyı işaret ediyor."],
      ["Önce her şeyi güncelleyin", "Depolarınızı yenileyin ve tüm uzantı güncellemelerini yükleyin, ardından uygulama güncellemesi olup olmadığını kontrol edin. Ani bozulmaların büyük bir kısmı değişen bir web sitesi ve halihazırda düzeltilmiş ancak henüz kurulmamış bir uzantıdır."],
      ["Bir kaynak çalışmayı durdurdu", "Bu en yaygın sorundur ve genellikle en az ciddidir. Web sitesi değişti, uzantının güncellenmesi gerekiyor ve çözüm deponuzu yenilemek. Henüz bir güncelleme mevcut değilse, uzantı yazarı henüz konuyu yakalamamıştır."],
      ["Hiçbir şey yüklenmiyor", "Her kaynak arızalanırsa bunun yerine ağa bakın. Ayarlarda mobil verileri, başka bir Wi-Fi ağını ve şifrelenmiş DNS'yi deneyin. Her şeyi engelleyen tek bir ağ veya oturum açılmamış bir portal, sık görülen bir nedendir."],
      ["Çek geçmek için bir site açmak", "Bazı siteler yanıt vermeden önce bir doğrulama işlemi gerçekleştirir. Kaynağı Gözat'tan açın ve sitenin kendi sayfasını yüklemek için yerleşik tarayıcıyı kullanın, tüm kontrolü elle tamamlayın, ardından kapatın ve uygulamaya geri dönün. Bunu bir kez yapmak çoğu zaman söz konusu kaynağın bloğunu temizler."],
      ["Cloudflare ve sonsuz yeniden yükleme", "Cloudflare'in arkasındaki site, size izin vermek yerine çekini yeniden yüklemeye devam edebilir. Siteyi yerleşik tarayıcıda tekrar açmayı, gelişmiş ayarlarda kullanıcı aracınızı değiştirmeyi veya sitenin korumasını azaltmasını beklemeyi deneyin. Bazı kaynakların bir uygulamadan kullanılması kasıtlı olarak zordur."],
      ["Çerezleri ve web verilerini temizleme", "Bu, tüm oturum açma bilgileri de dahil olmak üzere uygulamanın depolanan tarama durumunu sıfırlar. Bu, sıkışmış bir kontrol için doğru düzeltmedir ve bir kaynağın öldüğüne karar vermeden önce bunu yapmaya değer. Kaynağın bir hesaba ihtiyacı varsa daha sonra tekrar oturum açmanız gerekecektir."],
      ["Kullanıcı aracınızı değiştirme", "Kullanıcı aracısı, cihazınızı bir web sitesine tanımlayan dizedir ve bazı siteler bunu bir bot sinyali olarak ele alır. Varsayılanı ortak bir tarayıcı dizesiyle değiştirmek ve ardından uygulamayı yeniden başlatmak, bazen aksi durumda döngüye giren bir kontrolün ötesine geçebiliyor."],
      ["Bir uzantı yüklenmeyecek", "Android, varsayılan olarak mağazanın dışından yapılan yüklemeleri engeller. Dosya yöneticiniz veya tarayıcınız için buna izin verin ve bu seçenek eksikse alternatif rota olarak Shizuku'yu kullanın. Yarıda durdurulan bir indirme işlemi farklı bir mesaja neden olur; bu nedenle sıfırdan yeniden yükleyin."],
      ["İçerik yanlış yerde açılıyor", "Video oynatıcıda bir manga veya okuyucuda bir bölüm açılırsa uzantı yanlış içerik türünü bildirir. Bu, ayarlarınızda değil, uzantıda bir hatadır; bu nedenle, sorunu yerel olarak düzeltmeye çalışmak yerine bildirin."],
      ["Kilitlenme günlüklerini ve daha fazla ayrıntıyı alma", "Gelişmiş ayarlar, kilitlenme günlüklerini dökebilir ve cihazınızdan alınan bir logcat yakalaması, uygulamanın ne yaptığını daha derinlemesine gösterir. Belirsiz bir açıklamayı izlenebilecek bir şeye dönüştürdükleri için, bir sorunu bildirirken her ikisini de eklemeye değer."],
      ["Depolama ve yavaş veya gecikmeli okuma", "Yavaş yükleme genellikle uygulamadan ziyade site, bağlantınız veya hız sınırından kaynaklanır. Gecikmeli okuma, bir bölümdeki büyük boyutlu resimlerden kaynaklanmaktadır. Kaynağı değiştirmek, belleği boşaltmak veya hız sınırını beklemek pratik çözümlerdir."],
      ["Sadece sen olmadığında", "Başkaları da aynı hatayı görüyorsa sorun kurulumunuzdan ziyade uzantı veya uygulamadır. Yeni bir rapor açmadan önce kaynak için projenin sorun izleyicisini kontrol edin ve uygulama sürümünüzü ve tam hata metnini ekleyin."],
    ],
    facts: [
      "Bozuk bir kaynak neredeyse her zaman uygulama değil kaynaktır.",
      "Eski bir uzantı, ani kırılmanın en yaygın nedenidir.",
      "Her kaynak arızalanırsa uygulamadan önce ağdan şüphelenin.",
      "Bir siteyi yerleşik tarayıcıda açmak birçok doğrulama kontrolünü temizler.",
      "Çerezleri ve web verilerini temizlemek, takılıp kalmış bir kontrolü ve tüm oturum açma işlemlerini sıfırlar.",
      "Kilitlenme günlükleri ve logcat, bir hata raporunu izlenebilir hale getirir.",
    ]
  },
  errors: {
    title: "Her hata mesajı ve ne anlama geldiği.",
    body: "Watchtower ham hatayı gizlemek yerine gösterir, dolayısıyla mesajın kendisi sahip olduğunuz en hızlı ipucudur. Aşağıda sizinkini bulun ve başka bir şeyi değiştirmeden önce ilk düzeltmeyi deneyin.",
    subsections: [
      ["403 Yasak", "Web sitesi, isteğinizin otomatik göründüğüne karar verdi ve reddediyor. Uygulamada bu, anti-bot korumasıdır. Önce uzantıyı güncelleyin, ardından sitenin tuttuğu tüm kontrolleri temizlemek için kaynağı yerleşik tarayıcıda bir kez açın. Hala reddediyorsa kaynak korumasını artırmış veya adresinizi engellemiş olabilir."],
      ["404 Bulunamadı", "Uzantının beklediği sayfa taşındı veya kaldırıldı. Bu neredeyse her zaman eski bir uzantıdır, bu nedenle deponuzu yenileyin ve güncelleyin. Henüz bir güncelleme yoksa, uzantı yazarı siteye yetişememiş demektir."],
      ["429 Çok fazla istek", "Talepleri çok hızlı yaptığınız için oranınız sınırlandırıldı. Beklemek asıl çözümdür ve güncellemelerin ve indirmelerin çalışma sıklığını azaltmak, tekrarlanmayı durduran şeydir. Hemen yeniden denemek yalnızca bloğu uzatır."],
      ["500, 502 ve diğer 5xx hataları", "Web sitesinin kendisi başarısız oluyor. Cihazınızda düzeltilecek hiçbir şey yoktur ve doğru hamle bekleyip daha sonra tekrar denemektir. Sitenin bir tarayıcıda kontrol edilmesi, sitenin herkes için kapalı olup olmadığını doğrular."],
      ["1006 ve 1020, güvenlik duvarı kodları", "1006 genellikle geçici bir IP yasağı anlamına gelir ve 1020, genellikle kendi ülkeleri dışından gelen ziyaretçileri engellemek için site sahibi tarafından belirlenen bir güvenlik duvarı kuralı anlamına gelir. Ağı değiştirmek 1006'ya yardımcı olabilir; 1020 genellikle çözülemez."],
      ["Cloudflare atlanamadı", "Site Cloudflare tarafından korunuyor ve otomatik kontrol gerçekleşmedi. Kaynağın sayfasını yerleşik tarayıcıda açın ve doğrulama işlemini elle tamamlayın, ardından uygulamaya geri dönün. Sayfa sürekli olarak yeniden yükleniyorsa sorun giderme sayfasına bakın."],
      ["Ana bilgisayar çözümlenemiyor, bağlantı başarısız oldu, zaman aşımı", "Bunlar kaynaktaki hatalardan ziyade ağ sorunlarıdır. Cihazın internet erişimi olup olmadığını kontrol edin, başka bir ağ veya mobil veri deneyin ve ayarlarda şifreli DNS'yi etkinleştirin. Sabit bir Wi-Fi portalı yaygın bir nedendir."],
      ["Sertifika doğrulaması başarısız oldu", "Sitenin güvenlik sertifikası doğrulanamadı. Cihaz tarih ve saatinin doğru olup olmadığını kontrol edin, uygulamanın önbelleğini ve çerezlerini temizleyin ve farklı bir ağ deneyin. Sitedeki süresi dolmuş bir sertifika düzeltebileceğiniz bir şey değildir."],
      ["Depolama ve SD kart hataları", "Bir kart, bir yol veya kullanılamayan bir klasörle ilgili mesajlar, indirme konumunun taşındığı veya okunamaz hale geldiği anlamına gelir. Boş alanı kontrol edin, uygulamanın bu klasöre hâlâ izin verdiğini doğrulayın ve kart arızalanmaya devam ederse dahili depolamaya geri dönün."],
      ["Uygulama veya uzantı yüklenmeyecek", "Başkası tarafından imzalanmış bir APK, kısaltılmış bir indirme ve yanlış işlemci mimarisinin her biri farklı bir yükleyici mesajı üretir. Çakışan kopyayı kaldırın, dosyayı tekrar indirin ve Android'in bilinmeyen uygulamaları yüklemesine izin verildiğinden emin olun."],
      ["Hata burada listelenmediğinde", "Başka kelimelerle ifade etmek yerine mesajın tamamını kopyalayın. İşlem adı ve içindeki URL genellikle doğrudan başarısız olan adıma işaret eder ve sorun giderme sayfası onu daraltarak adım adım ilerler."],
    ],
    facts: [
      "403 ve 429'un her ikisi de sitenin sizi farklı nedenlerle reddettiği anlamına gelir.",
      "404 neredeyse her zaman güncellenmesi gereken bir uzantıdır.",
      "5xx hatası, cihazınızın değil web sitesinin hatasıdır.",
      "1006 geçici bir yasaklamadır; 1020, atlayamayacağınız bir güvenlik duvarı kuralıdır.",
      "Mesajın tamamını kopyalayın: İçindeki URL, başarısız olan adımın adını verir.",
      "İmza uyuşmazlıkları, farklı imzalı bir kopyanın yüklendiği anlamına gelir.",
    ]
  },
  faq: {
    title: "Sıkça ortaya çıkan sorular.",
    body: "İnsanların Watchtower'yu yüklemeden önce ve yükledikten sonra sorduğu sorulara, uygulamanın dokundukları kısmına göre gruplandırılmış kısa yanıtlar.",
    subsections: [
      ["Neden bir uygulama mağazasında yok?", "Çünkü Watchtower, mağaza politikalarının izin vermediği uzantıları çalışma zamanında yükler. Her yüklemenin güvenmeyi seçtiğiniz bir APK'dan gelmesinin nedeni de budur."],
      ["iOS sürümü var mı?", "Temel kod platformlar arasıdır, ancak iOS'ta gönderim platform kurallarıyla sınırlıdır ve söz verilmemektedir. Android her şeyi ilk önce alan platformdur."],
      ["İnternet olmadan çalışıyor mu?", "İndirdiğiniz her şey ve yerel dosyalar tamamen çevrimdışı çalışır. Kaynaklara göz atmak ve arama yapmak bunu gerektirmez çünkü bunların web sitelerine ihtiyacı vardır."],
      ["Cihazlar arasında senkronizasyon yapabilir miyim?", "Otomatik senkronizasyon yoktur. Kitaplığınızı bir yedekleme dosyasıyla taşırsınız ve indirilen medyanın ayrı ayrı kopyalanması gerekir."],
      ["Yasal mı ve ücretsiz mi?", "Watchtower ücretsiz ve açık kaynaktır ve kendine ait hiçbir içerik içermez. Uzantılar aracılığıyla eklediğiniz şeyler sizin sorumluluğunuzdadır; bu nedenle uygulama, bunları incelemediğini söylerken dikkatli davranır."],
      ["Neden yüklü bir kaynağı göremiyorum?", "İki filtre, kaynakları silmeden gizler. Uzantı cihazınızın dili dışında bir dil sunuyorsa kaynak listesi filtresinde o dili açın. Yetişkinlere yönelik bir kaynaksa listede NSFW kaynaklarını gösteren seçeneği etkinleştirin."],
      ["Bir uzantıyı nasıl kaldırabilirim?", "Uzantılar ekranından veya Android ayarlarındaki diğer herhangi bir uygulama gibi kaldırın. Kitaplık girişleriniz aynı kalır ve başka bir kaynak onlara hizmet verene kadar kullanılamaz olarak gösterilir."],
      ["İndirdiklerim neden görünmüyor?", "İndirilenler klasöre göre algılanır. Depolama konumu taşınmışsa, SD kart çıkarılmışsa veya kaynak veya seri sitede yeniden adlandırılmışsa uygulama klasörle eşleşemez. Konumu düzeltin veya klasörü eşleşecek şekilde yeniden adlandırın, ardından indirilenler dizinini yeniden oluşturun."],
      ["Fotoğraf galerimde neden kapaklar ve bölümler gösteriliyor?", "Uygulama normalde medyasını bir .nomedia dosyasıyla sistem galerisinden gizler. Değilse, kendiniz bir tane oluşturun ve indirilenler klasörüne veya sızdırılan şey buysa yerel kaynak klasörüne bırakın."],
      ["Okuma veya yükleme neden yavaş?", "Yavaş yükleme, uygulamanın ağır olması değil, sitenin, bağlantınızın veya hız sınırının sonucudur. Gecikmeli okuma, bir bölümdeki büyük boyutlu resimlerden kaynaklanır; bu nedenle belleği boşaltın veya daha küçük taramalara sahip bir kaynak seçin."],
      ["Neden bazı bölümler görüntülenmiyor?", "Ağ sorunlarının yanı sıra, uygulama zaman zaman bir videonun mevcut olduğunu gözden kaçırabilir. Oynatıcıdan ayrılmak ve bölümü tekrar açmak genellikle onu kaydeder."],
      ["Bir kitaplık güncellemesi neden girişleri atlıyor?", "İzlenmemiş veya okunmamış içeriğe sahip girişler, henüz başlamadığınız girişler, tamamlandı olarak işaretlenmiş girişler ve yayınlanması beklenmeyen girişler bilerek atlanır. Bu, büyük bir kütüphanenin kaynakları etkilemesini ve uygulamanın engellenmesini önler."],
      ["Kütüphane güncellemeleri neden arka planda duruyor?", "Bazı Android sürümleri agresif bir şekilde pil tasarrufu sağlar ve arka planda çalışmayı askıya alır. Güncellemeler yalnızca uygulamayı açtığınızda gelirse Watchtower'yu pil optimizasyonundan muaf tutun."],
      ["Ekran görüntüsü alma neden engelleniyor?", "Uygulamayı görev değiştiricide gizleyen gizlilik ayarı, ekran görüntülerini de engeller. Ekranı yakalamak istiyorsanız bu ayarı kapatın."],
      ["Bir şeyler bozuldu, şimdi ne olacak?", "Çoğu kırılmayı düzelttiği için önce uzantılarınızı güncelleyin. Sorun devam ederse, uygulamanın hatalı olduğunu varsaymadan önce, tam olarak gördüğünüz mesajı görmek için hatalar sayfasını, ardından sorun giderme sayfasını kontrol edin."],
    ],
    facts: [
      "Watchtower, uygulama mağazaları aracılığıyla dağıtılmaz.",
      "İndirilen içerik ve yerel dosyalar tamamen çevrimdışı çalışır.",
      "Cihazlar arasında otomatik senkronizasyon yoktur.",
      "Gizli bir kaynak genellikle dil filtresi veya NSFW geçişidir.",
      "İndirilenler klasör adına göre eşleştirilir, dolayısıyla yeniden adlandırmak onu gizler.",
      "Uzantıları güncellemek çoğu ani kırılmayı düzeltir.",
    ]
  },
  contribute: {
    title: "Watchtower'un daha iyi olmasına yardımcı oluyoruz.",
    body: "Uygulama, uzantılar ve bu belgelerin tümü açıktır. Kod yazanlar için de yazmayanlar için de faydalı işler var.",
    subsections: [
      ["Yardım etmenin yolları", "Gördüğünüz mesajın aynısını içeren hataları bildirin, bir kaynağı iyileştirin, kimsenin kapsamadığı bir site için uzantı yazın veya bu siteyi başka bir dile çevirin."],
      ["Uygulama üzerinde çalışma", "Depoyu klonlayın, Flutter ve Rust araç zincirlerini yükleyin ve bir çekme isteği açmadan önce analizörü çalıştırın. Go yalnızca torrent sunucusunu değiştiriyorsanız gereklidir."],
      ["Dokümantasyon üzerinde çalışmak", "Site kendi deposudur. Dil eklemek, bir çeviri dosyası eklemek anlamına gelir; düzen ve gezinme zaten gerisini hallediyor."],
      ["Çeviri", "Hem uygulama hem de bu site birçok dil sunuyor ve yeni bir dil ekleniyor. Kendi dilinizi eklemek için asla tasarıma dokunmanıza gerek yok."],
      ["İyi bir hata bildirme", "Uygulama sürümünüzü, kullandığınız kaynağı, tam hata metnini ve diğer kaynakların hala çalışıp çalışmadığını ekleyin. Bu genellikle arızayı bulmak için yeterlidir."],
      ["Büyük bir değişiklikten önce", "Önce bir konu açın veya Discord'a sorun. Projenin gidişatına uymayan bir şey inşa etmekten sizi kurtarır."],
    ],
    facts: [
      "Belgeler uygulamadan ayrı bir depodur.",
      "Dil eklemek, düzeni değiştirmek değil, bir dosya eklemek anlamına gelir.",
      "Hata metninin tam olarak bildirilmesi en fazla zaman tasarrufu sağlar.",
      "Uygulama çalışması için pas gereklidir; Yalnızca torrent sunucusu için gidin.",
    ]
  },

  history: {
    title: "Zaten açtığınız her şey.",
    body: "Tarih, izlediklerinizi ve okuduklarınızı kaydeder; böylece bitirmediğiniz bir şeye, onu tekrar aramadan geri dönebilirsiniz.",
    subsections: [
      ["Neleri kaydeder", "Bir bölümü veya bölümü açtığınızda, zamanı ve ne kadar ilerlediğinizi gösteren bir giriş eklenir. Tarih, ikinci bir kitaplık değil, etkinliklerin bir kaydıdır; dolayısıyla siz uygulamayı kullandıkça kendi kendine dolar."],
      ["Filtreleme ve sıralama", "Listeyi bugüne, bu haftaya veya bu aya daraltın, liste ile tablo arasında geçiş yapın ve tarihe veya başlığa göre sıralayın. Bunlar gösterileni değiştirir, başka hiçbir şeyi değiştirmez."],
      ["Bir diziye geri dönüş", "Seriyi bıraktığınız yerden yeniden açmak için bir girişe dokunun. Tarih, bir kez örnek alıp bir kenara bıraktığınız bir şeye giden en hızlı yoldur."],
      ["Gizli mod ve gizlilik", "Gizli mod açıkken yeni hiçbir şey kaydedilmez, dolayısıyla açtığınız hiçbir şey geçmişte görünmez. Kapatıldığında kayıt bu noktadan devam eder."],
      ["Geçmişi temizleme", "Kitaplığınıza veya kayıtlı ilerlemenize dokunmadan geçmişi temizleyebilirsiniz. Bunu temizlemek yalnızca açtığınız şeyin kaydını kaldırır."],
      ["Tarih yanlış göründüğünde", "İzlenmemiş olarak görünen bir giriş genellikle kaynağın bölümün adresini değiştirdiği anlamına gelir; dolayısıyla uygulama bunu yeni olarak kabul eder. Başıboş girişi kaldırmak ve seriyi yenilemek onu toparlar."],
    ],
    facts: [
      "Geçmiş etkinliği kaydeder, kitaplığınızın yerini almaz.",
      "Filtreler hiçbir şeyi silmeden görünümü daraltır.",
      "Gizli mod, yeni geçmişin yazılmasını durdurur.",
      "Geçmişi temizlemek, ilerlemenize dokunulmaz.",
    ]
  },

  calendar: {
    title: "Ne yayınlanıyor ve ne zaman?",
    body: "Takvim, kitaplığınızdaki yaklaşan bölümleri ve bölümleri gösterir; böylece nelerin bugün biteceğini ve nelerin daha sonra geleceğini bir bakışta görebilirsiniz.",
    subsections: [
      ["Ay görünümü", "Yayınların olduğu günler işaretlenir ve bir güne dokunulduğunda o tarihin listesine atlanır. Tek bir dizi bile açmadan bu hafta çıkanlara cevap veriyor."],
      ["Haftalık program", "Program, telefondaki yoğun bir ay tablosundan daha iyi okunan, gelecek her sürümün kapağıyla birlikte bir haftayı ortaya koyuyor."],
      ["Duruma göre filtreleme", "Yalnızca önemsediğiniz durumları gösterin; böylece tamamlanmış ve duraklatılmış seriler, haftayı planlamak için kullandığınız görünümü karmaşıklaştırmaz."],
      ["Tarihler ne anlama geliyor?", "Tarih, kaynağın bir söz değil, bir şeyin beklendiğini en son söylediği zamandır. Tarih yayınlamayan kaynaklar görünmüyor."],
      ["İzlenen girişleri belirtme", "Bir seçenek, programda daha önce gördüklerinizi işaretler, böylece haftalık görünüm bir kontrol listesi işlevi görür."],
      ["Takvim boş olduğunda", "Boş bir takvim genellikle takip ettiğiniz kaynakların yayın tarihlerini yayınlamadığı anlamına gelir. Bu, uygulamanın bir hatası değil, kaynağın bir sınırıdır."],
    ],
    facts: [
      "Yayın tarihleri ​​uygulamadan değil kaynaklardan gelir.",
      "Program seri durumuna göre filtrelenebilir.",
      "Bir seçenek daha önce izlemiş olduğunuz girişleri işaretler.",
      "Tarihleri ​​olmayan bir kaynak hiçbir şekilde görünmeyecektir.",
    ]
  },

  "mass-migration": {
    title: "Birçok seriyi aynı anda taşıma.",
    body: "Bir kaynak öldüğünde toplu geçiş, tüm kitaplık girişlerini tek tek düzenlemek yerine, tek geçişte çalışan bir kaynağa taşır.",
    subsections: [
      ["Ne zaman kullanılmalı?", "Kitlesel göçte, çalışmayı bırakan veya uzaklaşmak istediğiniz bir kaynak söz konusudur. Taşıma işlemi ilerlemenizi ve kategorilerinizi korur."],
      ["Kaynak ve hedef seçimi", "Taşınacak giriş grubunu ve bunların taşınacağı kaynağı seçin. Uygulama, her bir başlık için hedefi kendi başına arar."],
      ["Maçların gözden geçirilmesi", "Her maç herhangi bir değişiklik yapılmadan önce gösterilir, böylece iyi olanları kabul edebilir ve yanlış olanları atlayabilirsiniz. Başlığa göre eşleştirme hiçbir zaman mükemmel değildir."],
      ["Değişikliğin uygulanması", "Uygulamak, her girişi yeni kaynağa işaret edecek şekilde yeniden yazar ve ilerlemenizi taşır. Maçı olmayan serilere dokunulmaz."],
      ["Özeti okuma", "Koşu, nelerin hareket ettiği, nelerin atlandığı ve nelerin başarısız olduğu sayılarak sona erer. Başarısız bir öğe genellikle hedefin taşımadığı bir başlıktır."],
      ["Hiçbir şey eşleşmediğinde", "Çoğu başlık eşleşmezse, hedef uygun değildir ve farklı bir kaynak daha iyi bir cevaptır. Durmakla hiçbir şey kaybedilmez, çünkü değişiklikler yalnızca başvurduğunuzda gerçekleşir."],
    ],
    facts: [
      "Toplu geçiş, bir grup girişi tek geçişte taşır.",
      "Her maç, herhangi bir değişiklik yapılmadan önce gözden geçirilir.",
      "İlerlemeniz ve kategorileriniz devam eder.",
      "Sonuçları uygulayana kadar hiçbir şey değişmez.",
    ]
  },

  statistics: {
    title: "Sayılarla kitaplığınız.",
    body: "İstatistikler izlediklerinizi ve okuduklarınızı özetler: toplamlar, harcanan süre, durum dökümü ve en çok geri döndüğünüz türler.",
    subsections: [
      ["Ne sayılır", "Medya türüne göre toplamlar, bölüm veya bölüm sayısı, harcanan süre ve kitaplığınızın durumlara göre nasıl bölündüğü."],
      ["Zaman ve etkinlik", "Zaman çizelgesi, izlemeye ve okumaya ne kadar zaman harcadığınızı tahmin eder ve etkinlik tablosu bu sürenin son haftalara nasıl yayıldığını gösterir."],
      ["En popüler türler", "Aslında üzerinde zaman harcadığınız türler, ki bunlar çoğu zaman tahmin edebileceğiniz türler değil. Zaten beğendiğiniz bir kulvarda yeni bir dizi bulmanın iyi bir yoludur."],
      ["Medya türüne göre", "İstatistikler medya türüne göre bölünür, dolayısıyla anime ve manga toplamları hiçbir zaman birbirine karıştırılmaz."],
      ["Rakamlar nereden geliyor?", "Her şey cihazdaki kendi kitaplığınızdan ve geçmişinizden hesaplanır. Hiçbir yere hiçbir şey yüklenmedi."],
      ["Veri yok diyorsa", "Yepyeni bir kurulumun henüz özetlenecek bir şeyi yok. Rakamlar, bir şeyi izlediğinizde veya okuduğunuzda ve kaydedildikten sonra görünür."],
    ],
    facts: [
      "İstatistikler cihazda kendi verilerinizden hesaplanır.",
      "Toplamlar her ortam türü için ayrı tutulur.",
      "Etkinlik şeması okuma ve izlemenin zaman içinde nasıl yayıldığını gösterir.",
      "Yeni bir yükleme, bir şey kaydedilene kadar hiçbir veri göstermez.",
    ]
  },

  anime: {
    title: "Giriş atlamayla anime izlemek.",
    body: "Anime, video oynatıcıda ekstra bir özellik ile açılır: bir başlık eşleştirilebildiğinde AniSkip tarafından desteklenen giriş ve bitiş atlamaları.",
    subsections: [
      ["anime oyuncusu", "Bölümler, diğer her şeyle aynı oynatıcıda, kalite, ses, altyazı ve normal sayfalardaki hız ile oynatılır."],
      ["Girişleri ve bitişleri atlama", "Giriş atlama açıkken, açılış sırasında bir düğme geri sayar ve onu geçer ve bitiş de aynı şekilde gerçekleştirilir. Bu bir ayardır, dolayısıyla kapatılabilir."],
      ["Bir başlık neden eşleştirilemiyor?", "Atlamanın diziyi ve bölümü tanımlaması gerekiyor. Tanımlanamayan bir başlık, başarısız olmak yerine, düğme olmadan basitçe oynatılır."],
      ["Atlama zaman aşımı", "Kısa bir geri sayım, atlama gerçekleşmeden önce iptal etmeniz için size zaman tanır. Varsayılanın aceleye geldiği düşünülüyorsa uzunluğu yapılandırılabilir."],
      ["Animeyi keşfetmek", "Bir keşif ekranı önerilen, popüler, yaklaşan, yakın zamanda güncellenen ve en çok beğenilen listelerin yanı sıra tür satırları sunar; böylece kaynak açık olmadan bir şeyler bulabilirsiniz."],
      ["Keşif bir hata gösterdiğinde", "Keşif satırları kaynaklarınız yerine harici bir hizmetten gelir. Bu hizmete erişilemediğinde uygulamanın geri kalanı etkilenmez ve bir kaynak normal şekilde çalışmaya devam eder."],
    ],
    facts: [
      "Giriş atlama, serinin ve bölümün tanımlanmasını gerektirir.",
      "Atlama bir ayardır ve kapatılabilir.",
      "Atlama geri sayım uzunluğu yapılandırılabilir.",
      "Discovery harici bir hizmet kullanır; kaynaklar ne olursa olsun çalışır.",
    ]
  },

  music: {
    title: "Kendi kütüphanenizle müzik.",
    body: "Watchtower, albümler, sanatçılar, şarkı sözleri ve skroplamalarla birlikte müzik uzantılarından ve kendi koleksiyonunuzdan müzikleri tek bir yerde çalar.",
    subsections: [
      ["Müziğin nereden geldiği", "Müzik uzantıları parçalar ve koleksiyonlar sağlar; yerel kitaplık ise zaten sahip olduğunuz dosyaları kapsar. Her ikisi de normal kaynaklar gibi davranır."],
      ["Albümler ve sanatçılar", "Müzik, albüm ve sanatçının yanı sıra parçaya göre de taranır; bu, müzik kitaplığını uzun bir dosya listesi yerine kullanılabilir kılan şeydir."],
      ["Oyuncu", "Karıştır ve tekrarla içeren bir sıra, şu anda oynatılan bir sayfa ve kapak resmi. Siz uygulamada dolaşırken oynatma devam eder."],
      ["Şarkı sözleri", "Şarkı sözlerini taşıyan parçalar bunları bir sayfada gösterir ve senkronize şarkı sözleri, kaynağın zamanlamayı sağladığı parçanın konumunu takip eder."],
      ["Skrobling", "Last.fm'e bağlanmak, dinlediklerinizi profilinize kaydeder, aynı şekilde izleme de izlediklerinizi kaydeder."],
      ["Bir parça çalınmadığında", "Çalışmayı bırakan bir müzik kaynağı, diğer bozuk kaynaklar gibi davranır. Uzantıyı güncelleyin ve hizmet kapalıyken hizmet tabanlı bir kaynağın kullanılamayacağını bekleyebilirsiniz."],
    ],
    facts: [
      "Müzik, uzantılardan veya zaten sahip olduğunuz dosyalardan gelir.",
      "Albümler ve sanatçılar birinci sınıftır, yalnızca parçalar değil.",
      "Last.fm'i bağladığınızda scrobbling kullanılabilir.",
      "Kaynak zamanlamayı sağladığında şarkı sözleri parçayı takip eder.",
    ]
  },

  novels: {
    title: "Roman okumak ve onların size okunmasını sağlamak.",
    body: "Romanlar, temalar, ilerleme ve isteğe bağlı yüksek sesle okuma sesiyle, resim okuyucu yerine bir metin okuyucuda açılır.",
    subsections: [
      ["Romanlar nasıl açılır?", "Metin okuyucuda yeni içerik bildiren bir kaynak otomatik olarak açılır, böylece hiçbir zaman doğru okuyucuyu tek tek seçmek zorunda kalmazsınız."],
      ["Okuma konforu", "Yazı tipi boyutu, satır aralığı ve tema ayarlanabilir çünkü bir metin duvarı, bir resim sayfasıyla aynı okuma deneyimi değildir."],
      ["Yerini hatırlamak", "Roman okuyucu, her bölümdeki konumunuzu izler ve resim okuyucunun yaptığı gibi sizi o bölüme geri döndürür."],
      ["Yüksek sesle okuma", "Metinden konuşmaya, cihazınızda yüklü sesleri kullanarak bir bölümü yüksek sesle okuyabilirsiniz; bu, işe gidip gelirken veya başka bir şey yaparken kullanışlıdır."],
      ["Bir bölüm boş olduğunda", "Boş açılan yeni bir bölüm genellikle metni okuyucunun gösteremeyeceği bir biçimde döndüren bir kaynaktan gelir. Uzantıyı güncellemek denenecek ilk şeydir."],
      ["Romanlar mangaya karşı", "Bir roman metindir ve bir manga da görüntülerdir; bu nedenle, içeriğin doğru şekilde açılabilmesi için kaynağın doğru türü beyan etmesi gerekir. Yanlış tür onu yanlış okuyucuya gönderir."],
    ],
    facts: [
      "Romanlar, içerik türüne göre seçilen bir metin okuyucuda açılır.",
      "Yazı tipi, aralık ve tema ayarlanabilir.",
      "Sesli okuma, cihazınızda yüklü olan sesleri kullanır.",
      "Boş bir bölüm genellikle kaynağın kullanılamaz metin döndürdüğü anlamına gelir.",
    ]
  },

  games: {
    title: "Başka bir kaynak türü olarak oyunlar.",
    body: "Watchtower, zaten bildiğiniz aynı göz atma ve arama yöntemini kullanarak, oyun uzantıları ve platformları aracılığıyla oyunları listeleyebilir.",
    subsections: [
      ["Oyun kaynağı nedir", "Bir oyun uzantısı, başlıkları bir manga uzantısının serileri listelediği gibi listeler ve aynı göz atma ve arama ekranlarını açar."],
      ["Platformlar", "Oyunlar platforma göre gruplandırılmıştır; bu, bir kaynak birçok sistemi kapsadığında kataloğun gezinilebilir olmasını sağlar."],
      ["Tarama ve arama", "Hayranları, diğer medya türlerinde olduğu gibi etkin oyun kaynaklarında arayın; böylece tek bir sorgu hepsini kapsar."],
      ["Oyun uzantılarını yükleme", "Diğer her şeyle aynı depolardan kurulurlar ve kurulduktan sonra oyunların altında görünürler."],
      ["Hiçbir şey listelenmediğinde", "Boş bir oyun ekranı, herhangi bir oyun uzantısının yüklü olmadığı anlamına gelir. Bunu sağlayan bir depo ekleyin ve ardından yenileyin."],
      ["Ayrı tutmak", "Oyun girişleri okuma ve izleme faaliyetlerinize karışmaz, bu nedenle büyük bir oyun kataloğu asla kitaplığınızı doldurmaz."],
    ],
    facts: [
      "Oyun kaynakları, diğer her şeyle aynı depolardan yüklenir.",
      "Oyunlar platforma göre gruplandırılmıştır.",
      "Arama, etkin olan tüm oyun kaynaklarını aynı anda kapsar.",
      "Oyun girişleri kitaplığınızdan ayrı kalır.",
    ]
  },
};

export default tr;
