// Chinese prose overlay. Code blocks and markers come from en.js.
const zh = {
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
