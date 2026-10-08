// Chinese prose overlay. Code blocks and markers come from en.js.
const zh = {
  overview: {
    title: "Watchtower 应用的完整地图。",
    body: "Watchtower 将 Flutter 客户端、本地库、JavaScript 扩展、原生绑定和可选的无头服务器整合到一个可自托管的运行时中。",
    subsections: [
      ["Watchtower 是什么", "面向动漫、漫画、剧集、音乐、小说和游戏的跨平台媒体中心。它索引本地文件、跟踪进度、下载内容，并通过可扩展的 JavaScript 运行时执行社区源。"],
      ["两个运行时，一份契约", "已安装的应用在 4567 端口提供内置 HTTP 服务器。无头 CLI 复用同一套 Flutter 与 QuickJS 引擎，使 CI、服务器和 SSH 无需图形会话即可运行源。"],
      ["本指南面向谁", "编写扩展的源作者、运行无头服务器的自托管者，以及 Flutter 应用的贡献者。每节都说明哪些是必需、哪些是可选的。"]
    ],
    facts: [
      "面向动漫、漫画、音乐、小说、游戏和播放的跨平台 Flutter 客户端。",
      "本地索引器、库、历史、收藏、日历和进度跟踪。",
      "QuickJS 扩展、下载、反爬、Rust 绑定和 Go 种子服务器。"
    ]
  },
  "app-map": {
    title: "由可组合界面构成的应用。",
    body: "仓库将功能界面、数据服务和执行运行时分离。这张地图跟随内容从源到播放和本地库的路径。",
    subsections: [
      ["内容流", "扩展返回共享模型。Riverpod 提供者分页，界面将其变为卡片，Isar 保存历史、收藏和已索引文件。"],
      ["路由", "GoRouter 连接引导、首页、搜索、详情、播放、库、设置和专用模块，同时不耦合源契约。"],
      ["运行时", "Flutter 负责界面，QuickJS/Dart 执行源，Rust 和 Go 提供原生能力，无头 CLI 在服务端复现运行时。"],
      ["状态与存储", "Riverpod 驱动主应用，Isar 是主数据库，Hive 保存偏好。音乐和文件浏览器模块保留各自的旧栈，与源契约隔离。"]
    ],
    facts: [
      "界面模块按媒体领域分组，而非按提供者。",
      "横切服务处理缓存、下载、反爬、同步和诊断。",
      "界面可用于远程源、本地文件或无头服务器。"
    ]
  },
  "content-types": {
    title: "漫画、watch、音乐：一个共享模型。",
    body: "ItemType 对源族分类；具体内容留在漫画、章节、页面、视频和曲目模型中。因此 watch 扩展无需新的原生渲染器即可覆盖动漫、电影或剧集。",
    subsections: [
      ["漫画", "章节使用 getPageList(url) 生成阅读器页面。元数据共享名称、图片、描述、作者、画师和类型。"],
      ["watch：动漫、电影、剧集", "剧集使用 getVideoList(url)。视频携带 URL、清晰度、原始 URL、请求头、字幕和音轨。电影/剧集/动漫是内容元数据，而非独立运行时。"],
      ["音乐与小说", "音乐以曲目、专辑、艺人和歌单复用搜索与详情界面；小说使用详情、章节和 HTML/文本阅读器。"],
      ["游戏与插件", "Game 提供专用发现界面。Plugin 表示使用清单和原生 UI 架构的实用或下载扩展。"]
    ],
    facts: [
      "兼容性来自数据契约，而非为每个站点编写的界面。",
      "筛选、偏好、评论、推荐和自定义列表都是可选的。",
      "itemType 保存在 Source 上，用于选择库、播放器和历史行为。"
    ]
  },
  "extension-runtime": {
    title: "JavaScript 在受控运行时中执行。",
    body: "DartExtensionService 加载源码、注入 MProvider 并在 QuickJS 中执行。桥接层提供网络、DOM、提取器、偏好和 Flutter 模型，同时不暴露原生应用。",
    subsections: [
      ["加载", "SourceCodeLanguage 区分 Dart、JavaScript 和 Mihon。加载器还会通过原生通道安装或移除 Android 私有扩展。"],
      ["安全与隔离", "源调用经过受控桥接。无头服务器在执行前加入注册表、缓存、认证和限速。"],
      ["生命周期", "源在目录中被发现、安装或启用、按需执行，其偏好、Cookie、缓存和布局可在扩展设置中重置。"],
      ["错误处理", "失败的桥接调用向 Dart 返回类型化错误，而不是让 isolate 崩溃。失败会连同操作名和出错 URL 记录，使诊断能定位到确切步骤。"]
    ],
    facts: [
      "QuickJS 将序列化对象返回给 Dart 模型。",
      "扩展代码可定义请求头、筛选、偏好和自定义列表。",
      "Mihon 兼容允许复用现有的漫画扩展。"
    ]
  },
  "extension-types": {
    title: "每个扩展族都有自己的界面。",
    body: "源类型决定可用的界面和操作。同一套 JS 引擎被共享，而结果由漫画阅读器、watch 播放器、音频、小说、游戏或插件界面呈现。",
    subsections: [
      ["漫画", "章节和页面源，带目录筛选、阅读历史和本地导入。"],
      ["watch", "面向动漫、电影和剧集的视频源：详情、剧集、清晰度、字幕、音轨和播放器提取器。"],
      ["音乐", "音频目录和元数据扩展：专辑、艺人、曲目、搜索、歌单和统计。"],
      ["小说、游戏、插件", "小说复用文本/HTML 阅读器；游戏有发现界面；实用插件遵循 manifest.json 和 ui/schema.json。"]
    ],
    facts: [
      "watch 是使用族：其 itemType 可以是动漫或其他兼容视频源。",
      "通用渲染器对兼容源使用相同的卡片、分页和布局。",
      "可选能力避免显示源未实现的操作。"
    ]
  },
  "extension-contract": {
    title: "JS 契约，逐方法说明。",
    body: "ExtensionService 定义共享的最小集。可选方法丰富体验，同时不破坏未实现它们的源。",
    subsections: [
      ["目录导航", "getPopular、getLatestUpdates 和 search 返回带 list 和 hasNextPage 的 MPages。筛选来自 getFilterList，偏好按源持久化。"],
      ["详情与播放", "getDetail 返回 MManga。漫画源提供 getPageList；watch 源提供 getVideoList，并可给出清晰度、请求头、字幕和音频。"],
      ["契约扩展", "getCustomList 启用按 id 声明的首页区块；推荐、评论、建议、账户、收藏和订阅保持可选，并带安全的空默认值。"],
      ["失败语义", "当页面没有条目时，返回空的 MPages 而不是抛异常。当请求确实失败时，让错误上抛，使界面显示重试、诊断记录原因。"]
    ],
    facts: [
      "URL 仍是目录、详情和播放之间的导航标识。",
      "请求头和 baseUrl 由源提供，可自定义。",
      "错误会记录在 Dart 和无头运行时中，便于诊断。"
    ]
  },
  "ui-schema": {
    title: "清单描述契约。",
    body: "对于 UI 扩展和 ZeusDL 脚本，manifest.json 声明身份、权限和运行时。随后架构描述由 Flutter 原生渲染的字段、操作和输出。",
    subsections: [
      ["清单字段", "manifest.json 携带身份、版本、作者、网络权限和二进制要求。id 是类似 en.example-tool 的反向域名串。"],
      ["原生 UI 契约", "UI 契约无需 WebView 即可渲染 URL/文本字段、选择器、开关和操作，加载更快并可离线使用。"],
      ["ZeusDL 输出协议", "脚本通过 stdout 以 PROGRESS、STATUS、DONE 和 ERROR 行通信。Watchtower 实时流式写入输出日志。"],
      ["校验错误", "未通过架构校验的清单会在安装前被拒绝。市场会显示确切的失败字段，而不是通用消息。"]
    ],
    facts: [
      "manifest.json 携带身份、版本、作者、网络权限和二进制要求。",
      "UI 契约无需 WebView 即可渲染 URL/文本字段、选择器、开关和操作。",
      "ZeusDL 脚本通过 stdout 以 PROGRESS、STATUS、DONE 和 ERROR 通信。"
    ]
  },
  layouts: {
    title: "ui-layouts.json 控制顺序与形态。",
    body: "扩展可以发布声明式布局。Watchtower 从 watchtower-extensions 下载，解析为 UiLayout，按源缓存，并让 Flutter 将组件映射为原生控件。",
    subsections: [
      ["根与缓存", "schemaVersion 和 home.sections 是有用的最小集。browse、detail 和 player 是可选的。LayoutDownloader 从 raw.githubusercontent.com 读取 Source.uiLayout，随后 LayoutRegistry 保存 layouts/<source.id>.json。"],
      ["首页区块", "id 标识 getCustomList(id, page)。component 接受 spotlight/carousel、banner/hero、ranked、newHot、compactRow、categoryPills、creatorRow、grid、feed 和 masonry，以及组件注册表中的精选呈现。"],
      ["视觉参数", "title、icon 和 accent 塑造头部。columns、rows、cardStyle、gridOrder 和 scrollDirection 是渲染提示。seeAll 打开整页，paginated 启用分页加载，requiresAuth 保护登录区块。"],
      ["browse、detail、player", "browse 以 component、columns、cardStyle、results 和 filters 描述 popular/latest/search。detail 接受 hero、episodeList 和 showRecommendations。player 接受 standard 或 feed。"],
      ["无效布局", "未知组件回退到网格渲染器并记录日志。格式错误的文件会让源停留在标准 Popular/Latest/Search 首页，而不是让整个界面崩溃。"]
    ],
    facts: [
      "没有布局时，源回退到标准 Popular/Latest/Search。",
      "toLegacyMap 桥接保持现有首页界面兼容。",
      "布局在扩展安装或更新后重新加载，在卸载时移除。"
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen 是可控界面。",
    body: "Watch 页面从当前源组合主视觉、历史、分类、行和目录。JSON 布局可替换标准列表，同时保留原生交互。",
    subsections: [
      ["顺序与主视觉", "主视觉使用前五个 banner 条目（以 popular 兜底），每 7 秒轮换，目标为宽度 × 0,62 的横向比例。播放打开详情，Info 打开底部面板，我的列表切换 Isar 收藏。"],
      ["历史", "继续观看读取源的 Isar 历史，按漫画去重，限制 12 张卡片，并显示缩略图、剧集/章节和进度。"],
      ["目录与搜索", "目录网格对 Popular 或自定义列表分页。搜索使用 250 毫秒防抖、浮动建议、麦克风/X 操作，仅在提交时确定结果。"],
      ["性能", "应用栏通过 ValueNotifier 观察滚动；主视觉位于 CustomScrollView 内，内容不会覆盖它，滚动也避免整体 setState。"],
      ["空态与错误态", "空区块会被隐藏。失败区块显示带原始错误的重试卡片，Cloudflare 拦截会导向绕过面板而非死胡同。"]
    ],
    facts: [
      "分类是 132×72 的卡片，带图片、渐变和边框。",
      "数据为空时区块会被隐藏。",
      "源操作在漫画、动漫、电影和剧集之间保持一致。"
    ]
  },
  "home-widgets": {
    title: "组件是数据适配器。",
    body: "WatchtowerHomeScreen 是应用的全局首页。它将 AniList 和 TMDB 源与本地库结合，并通过媒体标签驱动各行。",
    subsections: [
      ["媒体首页", "全部、电影、剧集、音乐、动漫、Asia、儿童、欧美、非洲、短剧、足球和游戏标签决定可见区块和主视觉数据。"],
      ["卡片", "DiscoveryCard 有 standard、ranked、landscape、featured、saga 和 spotlight 变体。EpisodeCard 增加缩略图、剧集标题、时长和续播进度条。"],
      ["数据", "AniList 提供动漫和编辑内容；TMDB 提供电影和剧集；本地库和提供者补全用户列表。"],
      ["Watch 与全局首页", "WatchtowerHomeScreen 是全局首页；WatchHomeScreen 是源/扩展首页。前者聚合目录，后者渲染源契约。"]
    ],
    facts: [
      "组件不知道各提供者的 URL：它们消费规范化模型。",
      "骨架、空、加载和错误态都是首页界面的一部分。",
      "扩展布局主要面向 WatchHomeScreen 和 browse/detail/player 界面。"
    ]
  },
  api: {
    title: "两个运行时，一个 API。",
    body: "内置 Dart/shelf 服务器在应用内监听 4567。无头 CLI 为 CI、Docker、Railway 或 Render 复用相同操作。",
    subsections: [
      ["端点", "ping、源发现、目录、详情、视频、页面和筛选反映 ExtensionService 契约。library、history 和 proxy 路由提供本地数据库和媒体。"],
      ["认证", "GET /api/ping 保持公开并返回服务器版本。其他路由经过认证、限速和扩展注册表。"],
      ["错误响应", "失败时返回包含操作和消息的 JSON，而不是空 500。源错误保留 HTTP 状态，使客户端能区分拦截与缺陷。"],
      ["NSFW 过滤", "NSFW 源从列表中过滤，直接访问以 403 拦截。"]
    ],
    facts: [
      "GET /api/ping 公开并返回服务器版本。",
      "其他路由经过认证、限速和扩展注册表。",
      "NSFW 源从列表中过滤，直接访问以 403 拦截。"
    ]
  },
  downloads: {
    title: "下载通过可选引擎运行。",
    body: "Watch、漫画和小说各有自己的下载标签。按媒体选择的引擎、并发和 Wi-Fi 规则驱动队列，每张卡片都提供快捷操作。",
    subsections: [
      ["引擎选择", "HYDRA 是内置 HLS 引擎，ZEUS 是 ZeusDL，ARES 是 Aria2，Externe 将链接交给 ADM 或 IDM。为受保护的流选择错误引擎是常见故障。"],
      ["并发", "每个标签设置同时连接数（1–20）和同时队列项（1–10）。更高值更快，但会消耗更多带宽并可能触发源限速。"],
      ["归档与清理", "漫画章节可归档为文件夹、CBZ、CBR、CB7 或 ZIP。读后自动删除会移除标记为已读的章节，可选包含已加书签的章节。"],
      ["下载错误", "失败的下载保留部分文件并提供重试。403/429 通常表示限速或反爬拦截；5xx 指向源。更改设置前请在浏览器中验证链接。"]
    ],
    facts: [
      "仅 Wi-Fi 规则会阻止下载，直到有 Wi-Fi 网络可用。",
      "启用智能更新后会自动加入新剧集或章节。",
      "下载队列每张卡片最多显示五个快捷操作按钮。"
    ]
  },
  trackers: {
    title: "进度与外部服务同步。",
    body: "Watchtower 连接 AniList、Kitsu、MyAnimeList、Simkl 和 Trakt，使观看和阅读进度在设备间保持同步。",
    subsections: [
      ["支持的追踪器", "AniList、Kitsu、MyAnimeList、Simkl 和 Trakt。各自有登录流程和状态模型，统一为共享的 Track 模型。"],
      ["关联与同步", "库条目可关联到追踪器条目。更新时推送进度、状态和评分，智能更新可拉取下一集或下一章。"],
      ["追踪器错误", "令牌过期、应用被撤销或限速各产生不同消息。请在设置 › 追踪中重新认证；错误条目可解除关联后重新关联。"],
      ["迁移", "批量迁移流程在源之间移动库条目并保留追踪器关联，使源失效时不会丢失进度。"]
    ],
    facts: [
      "追踪器集成位于 lib/services/trackers。",
      "在设置 › 追踪中管理追踪器。",
      "批量迁移在更换源时保留追踪器关联。"
    ]
  },
  "getting-started": {
    title: "构建 Flutter 应用",
    body: "安装工具链、获取 Dart 包并启动跨平台客户端。",
    subsections: [
      ["前置条件", "Flutter 3.38+ / Dart 3.10+，flutter_rust_bridge 绑定需要 Rust，Android 需要 Java 17，若重建种子客户端则需要 Go 1.21+。"],
      ["平台", "项目面向 Windows、Linux、macOS、iOS、Android 和 Web。部分原生功能在 Web 上会优雅降级。"],
      ["验证安装", "首次修改前运行分析器：dart format --output=none --set-exit-if-changed lib 和 flutter analyze --no-pub。CLI doctor 命令会报告原生引擎和 QuickJS 是否可用。"],
      ["常见构建错误", "缺少 Rust 工具链会导致绑定失败。过旧的 Flutter SDK 会导致 pub 解析失败。缺少 Java 17 会导致 Android 构建失败。先修复工具链再改代码。"]
    ],
    facts: [
      "前置条件：Flutter 3.38+、Dart 3.10+、Android 需要 Rust 和 Java 17。",
      "项目面向 Windows、Linux、macOS、iOS、Android 和 Web。",
      "无头 CLI 由 Build Linux Headless CLI 工作流发布。"
    ]
  },
  deployment: {
    title: "内置或无头。",
    body: "无头 CLI 可在有无 Docker 的情况下运行。启用 API_KEY 时，私有路由使用 X-Api-Key 或 Authorization Bearer，应用保留其内置模式。",
    subsections: [
      ["Docker", "Docker Compose 是可复现服务器的推荐方式。已发布的镜像位于 GHCR。"],
      ["其他主机", "Railway、Render、VPS 和纯 Docker 已在仓库中记录。服务器与应用保持相同的源契约。"],
      ["环境变量", "API_KEY 保护私有路由。CACHE_TTL_MS、CACHE_DIR、PREFS_DIR 和 RATE_MAX_TOKENS 控制缓存、持久化和限速。"],
      ["部署错误", "立即退出的容器通常是缺少 API_KEY 或端口冲突。检查日志、确认端口空闲并核对扩展仓库路径后再重启。"]
    ],
    facts: [
      "Docker Compose 是可复现服务器的推荐方式；镜像位于 GHCR。",
      "Railway、Render、VPS 和 Docker 部署已在仓库中记录。",
      "CACHE_TTL_MS、CACHE_DIR、PREFS_DIR 和 RATE_MAX_TOKENS 控制服务器行为。"
    ]
  },
  troubleshooting: {
    title: "故障排除",
    body: "遇到源或应用问题？按清单排查，阅读确切错误，然后在更改设置前运行诊断。",
    subsections: [
      ["初步诊断", "更新扩展和应用、刷新出问题的条目、尝试同一源的另一个条目、在浏览器中打开站点、更换网络、清除缓存和 Cookie，然后重启应用。若某步解决，原因在本地。"],
      ["阅读错误", "Watchtower 显示原始错误而非通用消息。复制它：操作名和出错 URL 指向确切步骤。扩展诊断分别记录 popular、latest、detail 和 media 阶段。"],
      ["HTTP 错误", "403 Forbidden：反爬或 IP 封禁。404 Not Found：内容被移除或源失效。429 Too Many Requests：临时限速。5xx：源服务器故障。1006/1020：IP 封禁或防火墙规则。"],
      ["个人或普遍", "若只有你受影响，怀疑 Cloudflare、IP 封禁或限速，并减少该源的下载。若所有人受影响，查看扩展和应用的 issue 追踪器。"],
      ["安装问题", "安装失败的扩展通常未通过架构校验或下载了损坏文件。重新下载并核对清单 id 和版本。"]
    ],
    facts: [
      "先更新扩展：大多数损坏可通过扩展更新修复。",
      "诊断界面区分 popular、latest、detail 和 media 阶段。",
      "扩展修复没有 ETA；失效的源有时需要耐心等待。"
    ]
  },
  cloudflare: {
    title: "Cloudflare 与反爬",
    body: "部分源位于 Cloudflare 之后。Watchtower 仅在响应带有真实证据时才报告 challenge，并提供打开确切出错 URL 的绕过 WebView。",
    subsections: [
      ["什么算 challenge", "单纯的 403/503、超时或 challenge 一词都不是 Cloudflare。Watchtower 需要 CDN 标记、交互式 challenge 页面或拦截页面才显示反爬界面。"],
      ["绕过 challenge", "绕过 WebView 打开确切的出错 URL，而不是站点根。解决一次 CAPTCHA 后重试源。"],
      ["更改 user agent", "user agent 会影响机器人检测。在高级设置中更改默认值，重启应用并重试。尝试多种浏览器和系统。"],
      ["Cookie 与缓存", "清除 Cookie 会重置登录或 challenge 状态。清除 WebView 数据则从头开始。两者都在高级设置中。"],
      ["仍然失败", "源可能加强了保护。等待，或为同一内容切换到其他源。"]
    ],
    facts: [
      "仅当响应带有真实证据时才报告 Cloudflare。",
      "绕过 WebView 打开出错 URL，而不是站点根。",
      "个人失败通常表示拦截或限速，而非缺陷。"
    ]
  },
  cli: {
    title: "无头 CLI",
    body: "Linux 构建包含与桌面应用相同的扩展运行时，无需 X11 或 Wayland 即可运行，适用于 CI、服务器和 SSH。",
    subsections: [
      ["命令", "doctor 探测原生引擎和 QuickJS。extensions list 和 test 加载本地仓库。source 执行单个 ExtensionService 操作。plugins validate 检查插件目录。"],
      ["测试模式", "load 检查源能否加载并暴露筛选、偏好和请求头。smoke 还会调用 popular、latest、search、建议、详情和媒体操作。deep 增加第二页和 HTTP 探测。"],
      ["筛选", "按语言、NSFW/SFW、引擎、标签、查询、id 或类型筛选。像 src/watch/fr 这样的语言目录优先于索引中过期的 lang 字段。"],
      ["退出码与错误", "0 表示成功，1 表示健康、测试或校验检查失败，2 表示用法无效或未处理的操作错误。报告和 stdout 会隐藏凭据和签名 URL 参数。"],
      ["已知限制", "library、history、progress、下载队列和追踪器命令尚不可用：无头入口不会打开 Isar/Hive 存储。"]
    ],
    facts: [
      "doctor --json 报告原生引擎和 QuickJS 是否可用。",
      "smoke 执行 popular、latest、search、详情和媒体操作。",
      "输出会隐藏常见凭据和签名 URL 参数。"
    ]
  }
};

export default zh;
