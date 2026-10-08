// Korean prose overlay. Code blocks and markers come from en.js.
const ko = {
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
