// Korean prose overlay. Code blocks and markers come from en.js.
const ko = {
  overview: {
    title: "Watchtower 앱의 전체 지도.",
    body: "Watchtower는 Flutter 클라이언트, 로컬 라이브러리, JavaScript 확장, 네이티브 바인딩, 선택적 헤드리스 서버를 하나의 자체 호스팅 런타임으로 묶습니다.",
    subsections: [
      ["Watchtower란", "애니, 만화, 시리즈, 음악, 소설, 게임을 위한 크로스 플랫폼 미디어 허브입니다. 로컬 파일을 색인하고 진행률을 추적하며 콘텐츠를 내려받고, 확장 가능한 JavaScript 런타임으로 커뮤니티 소스를 실행합니다."],
      ["두 런타임, 하나의 계약", "설치된 앱은 포트 4567에서 내장 HTTP 서버를 노출합니다. 헤드리스 CLI는 같은 Flutter와 QuickJS 엔진을 재사용해 CI, 서버, SSH에서 그래픽 세션 없이 소스를 실행합니다."],
      ["이 가이드의 대상", "확장을 작성하는 소스 저자, 헤드리스 서버를 운영하는 셀프 호스터, Flutter 앱 기여자. 각 섹션은 필수와 선택을 명시합니다."]
    ],
    facts: [
      "애니, 만화, 음악, 소설, 게임, 재생을 위한 크로스 플랫폼 Flutter 클라이언트.",
      "로컬 색인, 라이브러리, 기록, 즐겨찾기, 캘린더, 진행률 추적.",
      "QuickJS 확장, 다운로드, anti-bot, Rust 바인딩, Go 토렌트 서버."
    ]
  },
  "app-map": {
    title: "조합 가능한 표면으로 이루어진 앱.",
    body: "저장소는 기능 화면, 데이터 서비스, 실행 런타임을 분리합니다. 이 지도는 콘텐츠가 소스에서 재생과 로컬 라이브러리로 가는 흐름을 따릅니다.",
    subsections: [
      ["콘텐츠 흐름", "확장이 공유 모델을 반환합니다. Riverpod 프로바이더가 페이지를 나누고, 화면이 카드로 바꾸며, Isar가 기록, 즐겨찾기, 색인된 파일을 저장합니다."],
      ["라우팅", "GoRouter가 온보딩, 홈, 검색, 상세, 재생, 라이브러리, 설정, 전문 모듈을 소스 계약과 결합하지 않고 연결합니다."],
      ["런타임", "Flutter가 UI를, QuickJS/Dart가 소스를, Rust와 Go가 네이티브 기능을 담당하고, 헤드리스 CLI가 서버 측 런타임을 재현합니다."],
      ["상태와 저장소", "Riverpod가 메인 앱을 구동하고 Isar가 기본 DB, Hive가 설정을 보관합니다. 음악과 파일 브라우저 모듈은 자체 레거시 스택을 소스 계약과 분리해 유지합니다."]
    ],
    facts: [
      "UI 모듈은 프로바이더가 아니라 미디어 영역별로 묶입니다.",
      "횡단 서비스가 캐시, 다운로드, anti-bot, 동기화, 진단을 담당합니다.",
      "화면은 원격 소스, 로컬 파일, 헤드리스 서버와 함께 작동합니다."
    ]
  },
  "content-types": {
    title: "만화, watch, 음악: 하나의 공유 모델.",
    body: "ItemType이 소스 계열을 분류하고 구체적 내용은 만화, 챕터, 페이지, 비디오, 트랙 모델에 남습니다. 따라서 watch 확장은 새 네이티브 렌더러 없이 애니, 영화, 시리즈를 다룹니다.",
    subsections: [
      ["만화", "챕터는 getPageList(url)로 리더 페이지를 만듭니다. 메타데이터는 이름, 이미지, 설명, 저자, 작가, 장르를 공유합니다."],
      ["watch: 애니, 영화, 시리즈", "에피소드는 getVideoList(url)를 씁니다. 비디오는 URL, 화질, 원본 URL, 헤더, 자막, 오디오 트랙을 담습니다. 영화/시리즈/애니는 콘텐츠 메타데이터이며 별도 런타임이 아닙니다."],
      ["음악과 소설", "음악은 검색과 상세 표면을 트랙, 앨범, 아티스트, 재생목록으로 재사용하고, 소설은 상세, 챕터, HTML/텍스트 리더를 씁니다."],
      ["게임과 플러그인", "Game은 전용 탐색 표면을 제공합니다. Plugin은 매니페스트와 네이티브 UI 스키마를 쓰는 유틸리티 또는 다운로더 확장입니다."]
    ],
    facts: [
      "호환성은 사이트별 화면이 아니라 데이터 계약에서 나옵니다.",
      "필터, 설정, 댓글, 추천, 사용자 목록은 선택 사항입니다.",
      "itemType은 Source에 저장되어 라이브러리, 플레이어, 기록을 선택합니다."
    ]
  },
  "extension-runtime": {
    title: "JavaScript는 통제된 런타임에서 실행됩니다.",
    body: "DartExtensionService가 소스 코드를 읽고 MProvider를 주입해 QuickJS에서 실행합니다. 브리지가 네트워크, DOM, 추출기, 설정, Flutter 모델을 네이티브 앱을 노출하지 않고 제공합니다.",
    subsections: [
      ["로딩", "SourceCodeLanguage가 Dart, JavaScript, Mihon을 구분합니다. 로더는 네이티브 채널로 Android 비공개 확장도 설치하거나 제거합니다."],
      ["보안과 격리", "소스 호출은 통제된 브리지를 통과합니다. 헤드리스 서버는 실행 전에 레지스트리, 캐시, 인증, 속도 제한을 추가합니다."],
      ["수명 주기", "소스는 카탈로그에서 발견되어 설치 또는 활성화되고 필요 시 실행되며, 설정, 쿠키, 캐시, 레이아웃은 확장 설정에서 초기화할 수 있습니다."],
      ["오류 처리", "실패한 브리지 호출은 isolate를 떨어뜨리지 않고 타입이 있는 오류를 Dart로 반환합니다. 실패는 작업 이름과 문제 URL과 함께 기록되어 진단이 정확한 단계를 가리킵니다."]
    ],
    facts: [
      "QuickJS는 직렬화된 객체를 Dart 모델로 반환합니다.",
      "확장 코드는 헤더, 필터, 설정, 사용자 목록을 정의할 수 있습니다.",
      "Mihon 호환으로 기존 만화 확장을 재사용할 수 있습니다."
    ]
  },
  "extension-types": {
    title: "확장 계열마다 표면이 있습니다.",
    body: "소스 유형이 사용 가능한 화면과 동작을 선택합니다. 같은 JS 엔진을 공유하되 결과는 만화 리더, watch 플레이어, 오디오, 소설, 게임, 플러그인 표면에 그려집니다.",
    subsections: [
      ["만화", "챕터와 페이지 소스, 카탈로그 필터, 읽기 기록, 로컬 가져오기."],
      ["watch", "애니, 영화, 시리즈용 비디오 소스: 상세, 에피소드, 화질, 자막, 오디오 트랙, 플레이어 추출기."],
      ["음악", "오디오 카탈로그와 메타데이터 확장: 앨범, 아티스트, 트랙, 검색, 재생목록, 통계."],
      ["소설, 게임, 플러그인", "소설은 텍스트/HTML 리더를 재사용하고, 게임은 탐색 화면을 가지며, 유틸리티 플러그인은 manifest.json과 ui/schema.json을 따릅니다."]
    ],
    facts: [
      "watch는 사용 계열이며 itemType은 애니 또는 다른 호환 비디오 소스일 수 있습니다.",
      "범용 렌더러는 호환 소스에 같은 카드, 페이지 나눔, 레이아웃을 씁니다.",
      "선택적 기능은 소스가 구현하지 않은 동작을 표시하지 않습니다."
    ]
  },
  "extension-contract": {
    title: "JS 계약, 메서드별로.",
    body: "ExtensionService가 공통 최소를 정의합니다. 선택적 메서드는 구현하지 않은 소스를 깨뜨리지 않고 경험을 풍부하게 합니다.",
    subsections: [
      ["카탈로그 탐색", "getPopular, getLatestUpdates, search는 list와 hasNextPage를 가진 MPages를 반환합니다. 필터는 getFilterList에서 오고 설정은 소스별로 저장됩니다."],
      ["상세와 재생", "getDetail은 MManga를 반환합니다. 만화 소스는 getPageList를, watch 소스는 getVideoList를 노출하며 화질, 헤더, 자막, 오디오를 제공할 수 있습니다."],
      ["계약 확장", "getCustomList는 id로 선언한 홈 섹션을 활성화합니다. 추천, 댓글, 제안, 계정, 즐겨찾기, 구독은 안전한 빈 기본값으로 선택 사항입니다."],
      ["실패 의미", "페이지에 항목이 없으면 예외 대신 빈 MPages를 반환합니다. 요청이 실제로 실패하면 오류를 전파해 UI가 재시도하고 진단이 원인을 기록하도록 합니다."]
    ],
    facts: [
      "URL은 카탈로그, 상세, 재생 사이의 탐색 식별자로 남습니다.",
      "헤더와 baseUrl은 소스가 제공하며 사용자 지정할 수 있습니다.",
      "오류는 Dart와 헤드리스 런타임 모두에 진단용으로 기록됩니다."
    ]
  },
  "ui-schema": {
    title: "매니페스트가 계약을 설명합니다.",
    body: "UI 확장과 ZeusDL 스크립트에서 manifest.json이 식별자, 권한, 런타임을 선언합니다. 그다음 스키마가 Flutter가 네이티브로 그리는 필드, 동작, 출력을 설명합니다.",
    subsections: [
      ["매니페스트 필드", "manifest.json은 식별자, 버전, 저자, 네트워크 권한, 바이너리 요구사항을 담습니다. id는 en.example-tool 같은 reverse-DNS 문자열입니다."],
      ["네이티브 UI 계약", "UI 계약은 URL/텍스트 필드, 셀렉트, 토글, 동작을 WebView 없이 그려 빠른 로딩과 오프라인 동작을 제공합니다."],
      ["ZeusDL 출력 프로토콜", "스크립트는 stdout으로 PROGRESS, STATUS, DONE, ERROR 줄을 주고받습니다. Watchtower가 이를 실시간으로 로그에 스트리밍합니다."],
      ["검증 오류", "스키마 검증에 실패한 매니페스트는 설치 전에 거부됩니다. 마켓플레이스는 일반 메시지 대신 실패한 정확한 필드를 보여줍니다."]
    ],
    facts: [
      "manifest.json은 식별자, 버전, 저자, 네트워크 권한, 바이너리 요구사항을 담습니다.",
      "UI 계약은 URL/텍스트 필드, 셀렉트, 토글, 동작을 WebView 없이 그립니다.",
      "ZeusDL 스크립트는 stdout으로 PROGRESS, STATUS, DONE, ERROR를 주고받습니다."
    ]
  },
  layouts: {
    title: "ui-layouts.json이 순서와 형태를 제어합니다.",
    body: "확장은 선언적 레이아웃을 게시할 수 있습니다. Watchtower가 watchtower-extensions에서 내려받아 UiLayout으로 해석하고 소스별로 캐시하며 Flutter가 컴포넌트를 네이티브 위젯에 매핑합니다.",
    subsections: [
      ["루트와 캐시", "schemaVersion과 home.sections가 유용한 최소입니다. browse, detail, player는 선택입니다. LayoutDownloader가 raw.githubusercontent.com에서 Source.uiLayout을 읽고 LayoutRegistry가 layouts/<source.id>.json을 저장합니다."],
      ["홈 섹션", "id가 getCustomList(id, page)를 식별합니다. component는 spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed, masonry와 컴포넌트 레지스트리의 큐레이션 표현을 받습니다."],
      ["시각 파라미터", "title, icon, accent가 헤더를 만듭니다. columns, rows, cardStyle, gridOrder, scrollDirection은 렌더 힌트입니다. seeAll은 전체 페이지를, paginated는 페이지 로딩을, requiresAuth는 로그인 섹션을 보호합니다."],
      ["browse, detail, player", "browse는 popular/latest/search를 component, columns, cardStyle, results, filters로 설명합니다. detail은 hero, episodeList, showRecommendations를, player는 standard 또는 feed를 받습니다."],
      ["잘못된 레이아웃", "알 수 없는 컴포넌트는 그리드 렌더러로 폴백하고 기록됩니다. 손상된 파일은 화면 전체를 깨뜨리지 않고 소스를 표준 Popular/Latest/Search 홈에 남깁니다."]
    ],
    facts: [
      "레이아웃이 없으면 소스는 표준 Popular/Latest/Search로 돌아갑니다.",
      "toLegacyMap 브리지가 기존 홈 화면 호환을 유지합니다.",
      "레이아웃은 확장 설치나 업데이트 후 다시 로드되고 제거 시 삭제됩니다."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen은 제어 가능한 표면입니다.",
    body: "Watch 페이지는 현재 소스에서 hero, 기록, 카테고리, 행, 카탈로그를 구성합니다. JSON 레이아웃이 네이티브 상호작용을 유지하며 표준 목록을 대체할 수 있습니다.",
    subsections: [
      ["순서와 hero", "hero는 처음 다섯 banner 항목(popular 대체)을 쓰고 7초마다 바뀌며 가로 비율 너비 × 0,62를 목표로 합니다. 재생은 상세, Info는 하단 시트, 내 목록은 Isar 즐겨찾기를 전환합니다."],
      ["기록", "이어 보기는 소스의 Isar 기록을 읽고 만화별로 중복을 제거하며 12개로 제한하고 썸네일, 에피소드/챕터, 진행률을 보여줍니다."],
      ["카탈로그와 검색", "카탈로그 그리드는 Popular 또는 사용자 목록을 페이지로 나눕니다. 검색은 250 ms 디바운스, 떠 있는 제안, 마이크/X를 쓰고 제출할 때만 결과를 확정합니다."],
      ["성능", "앱 바는 ValueNotifier로 스크롤을 관찰하고 hero는 CustomScrollView 안에 있어 콘텐츠가 겹치지 않으며 스크롤이 전체 setState를 피합니다."],
      ["빈 상태와 오류", "빈 섹션은 숨겨집니다. 실패한 섹션은 원시 오류가 있는 재시도 카드를 보여주고 Cloudflare 차단은 막다른 길 대신 우회 패널로 보냅니다."]
    ],
    facts: [
      "카테고리는 이미지, 그라디언트, 테두리가 있는 132×72 카드입니다.",
      "데이터가 비면 섹션이 숨겨집니다.",
      "소스 동작은 만화, 애니, 영화, 시리즈에서 일관됩니다."
    ]
  },
  "home-widgets": {
    title: "위젯은 데이터 어댑터입니다.",
    body: "WatchtowerHomeScreen은 앱의 전역 홈입니다. AniList와 TMDB 피드를 로컬 라이브러리와 결합하고 미디어 탭으로 행을 구동합니다.",
    subsections: [
      ["미디어 홈", "전체, 영화, 시리즈, 음악, 애니, Asia, 키즈, 서구, 아프리카, 단편 TV, 축구, 게임 탭이 표시할 섹션과 hero를 고릅니다."],
      ["카드", "DiscoveryCard는 standard, ranked, landscape, featured, saga, spotlight 변형이 있습니다. EpisodeCard는 썸네일, 에피소드 제목, 길이, 이어보기 진행 막대를 더합니다."],
      ["데이터", "AniList는 애니와 편집 콘텐츠를, TMDB는 영화와 시리즈를 공급하고 로컬 라이브러리와 프로바이더가 사용자 목록을 채웁니다."],
      ["Watch 대 전역 홈", "WatchtowerHomeScreen은 전역 홈이고 WatchHomeScreen은 소스/확장 홈입니다. 전자는 카탈로그를 모으고 후자는 소스 계약을 그립니다."]
    ],
    facts: [
      "위젯은 각 프로바이더의 URL을 모르고 정규화된 모델을 소비합니다.",
      "skeleton, 빈, 로딩, 오류 상태도 홈 표면의 일부입니다.",
      "확장 레이아웃은 주로 WatchHomeScreen과 browse/detail/player를 대상으로 합니다."
    ]
  },
  api: {
    title: "두 런타임, 하나의 API.",
    body: "내장 Dart/shelf 서버는 앱 안에서 4567을 수신합니다. 헤드리스 CLI는 CI, Docker, Railway, Render에서 같은 작업을 재사용합니다.",
    subsections: [
      ["엔드포인트", "ping, 소스 탐색, 카탈로그, 상세, 비디오, 페이지, 필터가 ExtensionService 계약을 반영합니다. library, history, proxy는 로컬 DB와 미디어를 제공합니다."],
      ["인증", "GET /api/ping은 공개로 남아 서버 버전을 반환합니다. 나머지 경로는 인증, 속도 제한, 확장 레지스트리를 통과합니다."],
      ["오류 응답", "실패 시 빈 500 대신 작업과 메시지를 담은 JSON을 반환합니다. 소스 오류는 HTTP 상태를 유지해 클라이언트가 차단과 버그를 구분합니다."],
      ["NSFW 필터", "NSFW 소스는 목록에서 걸러지고 직접 접근 시 403으로 차단됩니다."]
    ],
    facts: [
      "GET /api/ping은 공개이며 서버 버전을 반환합니다.",
      "나머지 경로는 인증, 속도 제한, 확장 레지스트리를 통과합니다.",
      "NSFW 소스는 목록에서 걸러지고 직접 접근 시 403으로 차단됩니다."
    ]
  },
  downloads: {
    title: "다운로드는 선택 가능한 엔진으로 실행됩니다.",
    body: "Watch, 만화, 소설에 각각 다운로드 탭이 있습니다. 미디어별 엔진, 동시성, Wi-Fi 규칙이 큐를 구동하고 각 카드가 빠른 동작을 제공합니다.",
    subsections: [
      ["엔진 선택", "HYDRA는 내부 HLS, ZEUS는 ZeusDL, ARES는 Aria2, Externe은 ADM이나 IDM으로 링크를 넘깁니다. 보호된 스트림에 잘못된 엔진을 고르는 것은 흔한 실패입니다."],
      ["동시성", "각 탭에서 동시 연결(1–20)과 동시 큐 항목(1–10)을 설정합니다. 값을 높이면 빨라지지만 대역폭을 더 쓰고 소스 제한을 부를 수 있습니다."],
      ["보관과 정리", "만화 챕터는 폴더, CBZ, CBR, CB7, ZIP으로 보관할 수 있습니다. 읽은 뒤 자동 삭제는 읽음 표시된 챕터를 지우며 선택적으로 북마크된 것도 포함합니다."],
      ["다운로드 오류", "실패한 다운로드는 부분 파일을 남기고 재시도를 제공합니다. 403/429는 대개 속도 제한이나 anti-bot 차단, 5xx는 소스 문제입니다. 설정을 바꾸기 전에 브라우저에서 링크를 확인하세요."]
    ],
    facts: [
      "Wi-Fi 전용 규칙은 Wi-Fi가 될 때까지 다운로드를 막을 수 있습니다.",
      "스마트 업데이트는 새 에피소드나 챕터를 자동으로 추가합니다.",
      "다운로드 큐는 카드당 최대 다섯 개의 빠른 동작 버튼을 보여줍니다."
    ]
  },
  trackers: {
    title: "진행률이 외부 서비스와 동기화됩니다.",
    body: "Watchtower는 AniList, Kitsu, MyAnimeList, Simkl, Trakt에 연결해 시청과 읽기 진행률을 기기 간에 동기화합니다.",
    subsections: [
      ["지원 트래커", "AniList, Kitsu, MyAnimeList, Simkl, Trakt. 각자 로그인과 상태 모델을 가지며 공통 Track 모델로 정규화됩니다."],
      ["연결과 동기화", "라이브러리 항목을 트래커 항목에 연결할 수 있습니다. 업데이트 시 진행률, 상태, 점수가 전송되고 스마트 업데이트가 다음 에피소드나 챕터를 가져올 수 있습니다."],
      ["트래커 오류", "만료된 토큰, 취소된 앱, 속도 제한은 각각 다른 메시지를 냅니다. 설정 › 트래킹에서 다시 인증하고 잘못된 항목은 연결 해제 후 다시 연결할 수 있습니다."],
      ["마이그레이션", "대량 마이그레이션 흐름은 소스 간에 라이브러리 항목을 옮기며 트래커 연결을 유지해 소스가 죽어도 진행률을 잃지 않습니다."]
    ],
    facts: [
      "트래커 통합은 lib/services/trackers에 있습니다.",
      "트래커는 설정 › 트래킹에서 관리합니다.",
      "대량 마이그레이션은 소스 변경 시 트래커 연결을 유지합니다."
    ]
  },
  "getting-started": {
    title: "Flutter 앱 빌드",
    body: "툴체인을 설치하고 Dart 패키지를 받아 크로스 플랫폼 클라이언트를 실행합니다.",
    subsections: [
      ["요구사항", "Flutter 3.38+ / Dart 3.10+, flutter_rust_bridge 바인딩용 Rust, Android용 Java 17, 토렌트 클라이언트를 다시 빌드하면 Go 1.21+."],
      ["플랫폼", "Windows, Linux, macOS, iOS, Android, Web이 대상입니다. 일부 네이티브 기능은 Web에서 완만하게 저하됩니다."],
      ["설치 확인", "첫 변경 전에 분석기를 실행하세요: dart format --output=none --set-exit-if-changed lib 와 flutter analyze --no-pub. CLI doctor가 네이티브 엔진과 QuickJS 사용 가능 여부를 알려줍니다."],
      ["흔한 빌드 오류", "Rust 툴체인이 없으면 바인딩이 깨집니다. 오래된 Flutter SDK는 pub 해석을 깨뜨립니다. Java 17이 없으면 Android 빌드가 깨집니다. 코드를 고치기 전에 툴체인을 고치세요."]
    ],
    facts: [
      "요구사항: Flutter 3.38+, Dart 3.10+, Android에는 Rust와 Java 17.",
      "프로젝트는 Windows, Linux, macOS, iOS, Android, Web을 대상으로 합니다.",
      "헤드리스 CLI는 Build Linux Headless CLI 워크플로에서 나옵니다."
    ]
  },
  deployment: {
    title: "내장 또는 헤드리스.",
    body: "헤드리스 CLI는 Docker 유무와 관계없이 실행됩니다. API_KEY가 켜지면 비공개 경로가 X-Api-Key 또는 Authorization Bearer를 쓰고 앱은 내장 모드를 유지합니다.",
    subsections: [
      ["Docker", "재현 가능한 서버에는 Docker Compose가 권장됩니다. 공개 이미지는 GHCR에 있습니다."],
      ["다른 호스트", "Railway, Render, VPS, 순수 Docker는 저장소에 문서화되어 있습니다. 서버는 앱과 같은 소스 계약을 유지합니다."],
      ["환경 변수", "API_KEY가 비공개 경로를 보호합니다. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR, RATE_MAX_TOKENS가 캐시, 영속성, 속도 제한을 제어합니다."],
      ["배포 오류", "즉시 종료되는 컨테이너는 대개 API_KEY 누락이나 포트 충돌입니다. 로그를 확인하고 포트가 비었는지, 확장 저장소 경로가 맞는지 확인한 뒤 재시작하세요."]
    ],
    facts: [
      "재현 가능한 서버에는 Docker Compose가 권장되며 이미지는 GHCR에 있습니다.",
      "Railway, Render, VPS, Docker 배포는 저장소에 문서화되어 있습니다.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR, RATE_MAX_TOKENS가 서버 동작을 제어합니다."
    ]
  },
  troubleshooting: {
    title: "문제 해결",
    body: "소스나 앱에 문제가 있나요? 체크리스트를 따라가고 정확한 오류를 읽은 뒤 설정을 바꾸기 전에 진단을 실행하세요.",
    subsections: [
      ["1차 진단", "확장과 앱을 업데이트하고, 문제 항목을 새로 고치고, 같은 소스의 다른 항목을 시도하고, 브라우저로 사이트를 열고, 네트워크를 바꾸고, 캐시와 쿠키를 지우고, 앱을 재시작합니다. 한 단계로 해결되면 원인은 로컬입니다."],
      ["오류 읽기", "Watchtower는 일반 메시지가 아니라 원시 오류를 보여줍니다. 복사하세요: 작업 이름과 문제 URL이 정확한 단계를 가리킵니다. 확장 진단은 popular, latest, detail, media를 따로 기록합니다."],
      ["HTTP 오류", "403 Forbidden: anti-bot 또는 IP 차단. 404 Not Found: 삭제된 콘텐츠나 죽은 소스. 429 Too Many Requests: 일시적 속도 제한. 5xx: 소스 서버 중단. 1006/1020: IP 차단 또는 방화벽 규칙."],
      ["개인 또는 광범위", "나만 겪으면 Cloudflare, IP 차단, 속도 제한을 의심하고 그 소스에서 다운로드를 줄이세요. 모두 겪으면 확장과 앱 이슈 트래커를 확인하세요."],
      ["설치 문제", "설치되지 않는 확장은 대개 스키마 검증에 실패하거나 손상된 파일을 받습니다. 다시 내려받고 매니페스트 id와 버전을 확인하세요."]
    ],
    facts: [
      "먼저 확장을 업데이트하세요: 대부분의 손상은 확장 업데이트로 고쳐집니다.",
      "진단 화면은 popular, latest, detail, media 단계를 분리합니다.",
      "확장 수정 ETA는 없습니다. 망가진 소스는 인내가 필요할 수 있습니다."
    ]
  },
  cloudflare: {
    title: "Cloudflare와 anti-bot",
    body: "일부 소스는 Cloudflare 뒤에 있습니다. Watchtower는 실제 증거가 있을 때만 challenge를 보고하고, 정확히 실패한 URL을 여는 우회 WebView를 제공합니다.",
    subsections: [
      ["challenge로 보는 기준", "단순한 403/503, 타임아웃, challenge라는 단어만으로는 Cloudflare가 아닙니다. Watchtower는 CDN 마커, 대화형 challenge 페이지, 차단 페이지가 있어야 anti-bot UI를 표시합니다."],
      ["challenge 우회", "우회 WebView는 사이트 루트가 아니라 정확히 실패한 URL을 엽니다. CAPTCHA를 한 번 풀고 소스를 다시 시도하세요."],
      ["user agent 변경", "user agent는 봇 감지에 영향을 줍니다. 고급 설정에서 기본값을 바꾸고 앱을 재시작한 뒤 다시 시도하세요. 여러 브라우저와 OS를 시도해 보세요."],
      ["쿠키와 캐시", "쿠키를 지우면 로그인이나 challenge 상태가 초기화됩니다. WebView 데이터를 지우면 깨끗해집니다. 둘 다 고급 설정에 있습니다."],
      ["그래도 실패하면", "소스가 보호를 강화했을 수 있습니다. 기다리거나 같은 콘텐츠의 다른 소스로 바꾸세요."]
    ],
    facts: [
      "Cloudflare는 응답에 실제 증거가 있을 때만 보고됩니다.",
      "우회 WebView는 실패한 URL을 열고 사이트 루트는 열지 않습니다.",
      "개인적 실패는 대개 버그가 아니라 차단이나 속도 제한입니다."
    ]
  },
  cli: {
    title: "헤드리스 CLI",
    body: "Linux 빌드는 데스크톱 앱과 같은 확장 런타임을 담고 X11이나 Wayland 없이 실행되며 CI, 서버, SSH에 적합합니다.",
    subsections: [
      ["명령", "doctor는 네이티브 엔진과 QuickJS를 점검합니다. extensions list와 test는 로컬 저장소를 읽습니다. source는 단일 ExtensionService 작업을 실행합니다. plugins validate는 플러그인 카탈로그를 검사합니다."],
      ["테스트 모드", "load는 소스가 로드되고 필터, 설정, 헤더를 노출하는지 확인합니다. smoke는 popular, latest, search, 제안, 상세, 미디어 작업도 호출합니다. deep는 2페이지와 HTTP 프로브를 추가합니다."],
      ["필터", "언어, NSFW/SFW, 엔진, 태그, 쿼리, id, 유형으로 거릅니다. src/watch/fr 같은 언어 디렉터리가 색인의 오래된 lang 필드보다 우선합니다."],
      ["종료 코드와 오류", "0은 성공, 1은 상태·테스트·검증 실패, 2는 잘못된 사용이나 처리되지 않은 작업 오류입니다. 보고서와 stdout은 자격 증명과 서명된 URL 파라미터를 가립니다."],
      ["알려진 한계", "library, history, progress, 다운로드 큐, 트래커 명령은 아직 없습니다: 헤드리스 진입점은 Isar/Hive 저장소를 열지 않습니다."]
    ],
    facts: [
      "doctor --json은 네이티브 엔진과 QuickJS 사용 가능 여부를 알려줍니다.",
      "smoke는 popular, latest, search, 상세, 미디어 작업을 실행합니다.",
      "출력은 흔한 자격 증명과 서명된 URL 파라미터를 가립니다."
    ]
  }
};

export default ko;
