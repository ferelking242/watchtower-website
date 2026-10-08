// Japanese prose overlay. Code blocks and markers come from en.js.
const ja = {
  "extension-runtime": {
    title: "JavaScript は制御されたランタイムで動きます。",
    body: "DartExtensionService がソースコードを読み込み、MProvider を注入し、QuickJS で実行します。ブリッジはネットワーク、DOM、抽出器、設定、Flutter モデルを、ネイティブアプリを露出せず提供します。",
    subsections: [
      ["読み込み", "SourceCodeLanguage は Dart、JavaScript、Mihon を区別します。ローダーはネイティブチャネル経由で Android のプライベート拡張も導入・削除します。"],
      ["安全性と分離", "ソース呼び出しは制御されたブリッジを通ります。ヘッドレスサーバーは実行前にレジストリ、キャッシュ、認証、レート制限を追加します。"],
      ["ライフサイクル", "ソースはカタログで発見され、導入または有効化され、必要時に実行され、設定・Cookie・キャッシュ・レイアウトは拡張設定からリセットできます。"],
      ["エラー処理", "失敗したブリッジ呼び出しは isolate を落とさず、型付きエラーを Dart に返します。失敗は操作名と問題の URL とともに記録され、診断が正確なステップを示します。"]
    ],
    facts: [
      "QuickJS はシリアライズしたオブジェクトを Dart モデルに返します。",
      "拡張コードはヘッダー、フィルタ、設定、カスタムリストを定義できます。",
      "Mihon 互換により既存のマンガ拡張を再利用できます。"
    ]
  },
  "extension-contract": {
    title: "JS 契約をメソッドごとに。",
    body: "ExtensionService が共有の最小を定義します。任意メソッドは、実装しないソースを壊さずに体験を豊かにします。",
    subsections: [
      ["カタログ操作", "getPopular、getLatestUpdates、search は list と hasNextPage を持つ MPages を返します。フィルタは getFilterList から来て、設定はソースごとに保存されます。"],
      ["詳細と再生", "getDetail は MManga を返します。マンガソースは getPageList、watch ソースは getVideoList を公開し、品質、ヘッダー、字幕、音声を提供できます。"],
      ["契約の拡張", "getCustomList は id で宣言したホームセクションを有効にします。レコメンド、コメント、候補、アカウント、お気に入り、サブスクは安全な空の既定値で任意のままです。"],
      ["失敗の意味", "ページに項目がない場合は例外ではなく空の MPages を返します。本当に失敗した場合はエラーを伝播させ、UI が再試行を出し、診断が原因を記録できるようにします。"]
    ],
    facts: [
      "URL はカタログ、詳細、再生の間のナビゲーション識別子のままです。",
      "ヘッダーと baseUrl はソースが提供し、カスタマイズできます。",
      "エラーは Dart とヘッドレスランタイムの両方に診断用に記録されます。"
    ]
  },
  "ui-schema": {
    title: "マニフェストが契約を記述します。",
    body: "UI 拡張と ZeusDL スクリプトでは、manifest.json が識別子、権限、ランタイムを宣言します。次にスキーマが Flutter でネイティブに描画されるフィールド、アクション、出力を記述します。",
    subsections: [
      ["マニフェスト項目", "manifest.json は識別子、バージョン、作者、ネットワーク権限、バイナリ要件を持ちます。id は en.example-tool のような reverse-DNS 文字列です。"],
      ["ネイティブ UI 契約", "UI 契約は URL/テキスト欄、セレクト、トグル、アクションを WebView なしで描画し、高速な読み込みとオフライン動作を実現します。"],
      ["ZeusDL 出力プロトコル", "スクリプトは stdout で PROGRESS、STATUS、DONE、ERROR 行を通信します。Watchtower はそれをリアルタイムでログに流します。"],
      ["検証エラー", "スキーマ検証に失敗したマニフェストは導入前に拒否されます。マーケットプレイスは一般的なメッセージではなく失敗した正確なフィールドを示します。"]
    ],
    facts: [
      "manifest.json は識別子、バージョン、作者、ネットワーク権限、バイナリ要件を持ちます。",
      "UI 契約は URL/テキスト欄、セレクト、トグル、アクションを WebView なしで描画します。",
      "ZeusDL スクリプトは stdout で PROGRESS、STATUS、DONE、ERROR を通信します。"
    ]
  },
  api: {
    title: "2 つのランタイム、1 つの API。",
    body: "組み込み Dart/shelf サーバーはアプリ内で 4567 を待ち受けます。ヘッドレス CLI は CI、Docker、Railway、Render で同じ操作を再利用します。",
    subsections: [
      ["エンドポイント", "ping、ソース探索、カタログ、詳細、ビデオ、ページ、フィルタは ExtensionService 契約を反映します。library、history、proxy はローカル DB とメディアを提供します。"],
      ["認証", "GET /api/ping は公開のままでサーバーバージョンを返します。他のルートは認証、レート制限、拡張レジストリを通ります。"],
      ["エラー応答", "失敗時は空の 500 ではなく、操作とメッセージを含む JSON を返します。ソースエラーは HTTP ステータスを保つため、クライアントはブロックとバグを区別できます。"],
      ["NSFW フィルタ", "NSFW ソースは一覧から除外され、直接アクセスでは 403 でブロックされます。"]
    ],
    facts: [
      "GET /api/ping は公開でサーバーバージョンを返します。",
      "他のルートは認証、レート制限、拡張レジストリを通ります。",
      "NSFW ソースは一覧から除外され、直接アクセスでは 403 でブロックされます。"
    ]
  },
  downloads: {
    title: "ダウンロードは選択可能なエンジンで動きます。",
    body: "Watch、マンガ、小説にそれぞれダウンロードタブがあります。メディアごとのエンジン、同時実行、Wi-Fi ルールがキューを駆動し、各カードがクイック操作を提供します。",
    subsections: [
      ["エンジン選択", "HYDRA は内部 HLS、ZEUS は ZeusDL、ARES は Aria2、Externe は ADM や IDM にリンクを渡します。保護されたストリームに誤ったエンジンを選ぶのはよくある失敗です。"],
      ["同時実行", "各タブで同時接続 (1–20) と同時キューの項目数 (1–10) を設定します。値を上げると速くなりますが、帯域を消費しソースの制限を招くことがあります。"],
      ["アーカイブと整理", "マンガのチャプターはフォルダ、CBZ、CBR、CB7、ZIP に保存できます。読了後の自動削除は既読にしたチャプターを削除し、任意でブックマーク付きも対象にします。"],
      ["ダウンロードのエラー", "失敗したダウンロードは部分ファイルを保持し、再試行を提供します。403/429 は多くの場合レート制限か anti-bot ブロック、5xx はソース側です。設定変更前にブラウザでリンクを確認してください。"]
    ],
    facts: [
      "Wi-Fi のみのルールは Wi-Fi が使えるまでダウンロードを止めます。",
      "スマート更新は新しいエピソードやチャプターを自動で追加します。",
      "ダウンロードキューはカードごとに最大 5 つのクイック操作ボタンを表示します。"
    ]
  },
  "getting-started": {
    title: "Flutter アプリをビルドする",
    body: "ツールチェーンを導入し、Dart パッケージを取得し、クロスプラットフォームクライアントを起動します。",
    subsections: [
      ["前提条件", "Flutter 3.38+ / Dart 3.10+、flutter_rust_bridge バインディング用の Rust、Android 用の Java 17、トーレントクライアントを再ビルドする場合は Go 1.21+。"],
      ["プラットフォーム", "Windows、Linux、macOS、iOS、Android、Web が対象です。一部のネイティブ機能は Web で緩やかに低下します。"],
      ["インストール確認", "最初の変更前にアナライザを実行します: dart format --output=none --set-exit-if-changed lib と flutter analyze --no-pub。CLI の doctor がネイティブエンジンと QuickJS の有無を報告します。"],
      ["よくあるビルドエラー", "Rust ツールチェーンの欠如はバインディングを壊します。古い Flutter SDK は pub 解決を壊します。Java 17 の欠如は Android ビルドを壊します。コード編集前にツールチェーンを直してください。"]
    ],
    facts: [
      "前提: Flutter 3.38+、Dart 3.10+、Android には Rust と Java 17。",
      "プロジェクトは Windows、Linux、macOS、iOS、Android、Web を対象にします。",
      "ヘッドレス CLI は Build Linux Headless CLI ワークフローから出荷されます。"
    ]
  },
  deployment: {
    title: "組み込みかヘッドレスか。",
    body: "ヘッドレス CLI は Docker の有無にかかわらず動きます。API_KEY 有効時は私有ルートが X-Api-Key または Authorization Bearer を使い、アプリは組み込みモードを保ちます。",
    subsections: [
      ["Docker", "再現可能なサーバーには Docker Compose が推奨です。公開イメージは GHCR にあります。"],
      ["他のホスト", "Railway、Render、VPS、素の Docker はリポジトリで文書化されています。サーバーはアプリと同じソース契約を保ちます。"],
      ["環境変数", "API_KEY は私有ルートを保護します。CACHE_TTL_MS、CACHE_DIR、PREFS_DIR、RATE_MAX_TOKENS がキャッシュ、永続化、レート制限を制御します。"],
      ["デプロイのエラー", "すぐ終了するコンテナは API_KEY の欠如かポート競合が原因です。ログを確認し、ポートが空き、拡張リポジトリのパスが正しいことを確かめてから再起動してください。"]
    ],
    facts: [
      "再現可能なサーバーには Docker Compose が推奨で、イメージは GHCR にあります。",
      "Railway、Render、VPS、Docker のデプロイはリポジトリで文書化されています。",
      "CACHE_TTL_MS、CACHE_DIR、PREFS_DIR、RATE_MAX_TOKENS がサーバー挙動を制御します。"
    ]
  },
  troubleshooting: {
    title: "トラブルシューティング",
    body: "ソースやアプリの問題ですか？チェックリストを進め、正確なエラーを読み、設定変更の前に診断を実行してください。",
    subsections: [
      ["一次診断", "拡張とアプリを更新し、問題の項目を再読み込みし、同じソースの別項目を試し、ブラウザでサイトを開き、ネットワークを変え、キャッシュと Cookie を消し、アプリを再起動します。どれかで直れば原因はローカルです。"],
      ["エラーを読む", "Watchtower は一般的なメッセージではなく生のエラーを表示します。コピーしてください: 操作名と問題の URL が正確なステップを示します。拡張診断は popular、latest、detail、media を別々に記録します。"],
      ["HTTP エラー", "403 Forbidden: anti-bot か IP バン。404 Not Found: 削除済みコンテンツか死んだソース。429 Too Many Requests: 一時的なレート制限。5xx: ソースサーバーの停止。1006/1020: IP バンかファイアウォール規則。"],
      ["個人か広範か", "自分だけなら Cloudflare、IP バン、レート制限を疑い、そのソースからのダウンロードを減らします。全員なら拡張とアプリの issue トラッカーを確認します。"],
      ["インストール問題", "インストールできない拡張はスキーマ検証に失敗するか壊れたファイルを取得しています。再ダウンロードし、マニフェストの id とバージョンを確認してください。"]
    ],
    facts: [
      "まず拡張を更新: ほとんどの破損は拡張更新で直ります。",
      "診断画面は popular、latest、detail、media のステップを分けます。",
      "拡張修正の ETA はありません。壊れたソースには忍耐が必要なこともあります。"
    ]
  },
  cli: {
    title: "ヘッドレス CLI",
    body: "Linux ビルドはデスクトップアプリと同じ拡張ランタイムを含み、X11 や Wayland なしで動きます。CI、サーバー、SSH 向けです。",
    subsections: [
      ["コマンド", "doctor はネイティブエンジンと QuickJS を調べます。extensions list と test はローカルリポジトリを読み込みます。source は 1 つの ExtensionService 操作を実行します。plugins validate はプラグインカタログを調べます。"],
      ["テストモード", "load はソースが読み込まれ、フィルタ、設定、ヘッダーを公開することを確認します。smoke はさらに popular、latest、search、候補、詳細、メディア操作を呼びます。deep は 2 ページ目と HTTP プローブを追加します。"],
      ["フィルタ", "言語、NSFW/SFW、エンジン、タグ、クエリ、ID、種別で絞り込みます。src/watch/fr のような言語ディレクトリは索引の古い lang フィールドより優先されます。"],
      ["終了コードとエラー", "0 は成功、1 はヘルス・テスト・検証チェックの失敗、2 は不正な使用または未処理の操作エラーです。レポートと stdout は資格情報と署名付き URL パラメータを伏せます。"],
      ["既知の制限", "library、history、progress、ダウンロードキュー、トラッカーのコマンドはまだ利用できません: ヘッドレス入口は Isar/Hive ストアを開きません。"]
    ],
    facts: [
      "doctor --json はネイティブエンジンと QuickJS の有無を報告します。",
      "smoke は popular、latest、search、詳細、メディア操作を実行します。",
      "出力は一般的な資格情報と署名付き URL パラメータを伏せます。"
    ]
  }
};

export default ja;
