// Portuguese (Brasil) prose overlay. Code blocks and markers come from en.js.
const pt = {
  overview: {
    title: "Um mapa completo do aplicativo Watchtower.",
    body: "O Watchtower reúne um cliente Flutter, bibliotecas locais, extensões JavaScript, bindings nativos e um servidor headless opcional em um único runtime auto-hospedável.",
    subsections: [
      ["O que é o Watchtower", "Um hub de mídia multiplataforma para animes, mangás, séries, músicas, romances e jogos. Ele indexa arquivos locais, acompanha o progresso, baixa conteúdo e executa fontes da comunidade por um runtime JavaScript extensível."],
      ["Dois runtimes, um contrato", "O app instalado expõe um servidor HTTP embarcado na porta 4567. A CLI headless reutiliza o mesmo motor Flutter e QuickJS para rodar fontes em CI, servidores e SSH sem sessão gráfica."],
      ["Para quem é este guia", "Para autores de fontes que escrevem extensões, auto-hospedadores que rodam o servidor headless e contribuidores do cliente Flutter. Cada seção indica o que é obrigatório e o que é opcional."]
    ],
    facts: [
      "Cliente Flutter multiplataforma para anime, mangá, música, romances, jogos e reprodução.",
      "Indexador local, biblioteca, histórico, favoritos, calendário e acompanhamento de progresso.",
      "Extensões QuickJS, downloads, anti-bot, bindings Rust e o servidor torrent em Go."
    ]
  },
  "app-map": {
    title: "Um aplicativo feito de superfícies componíveis.",
    body: "O repositório separa telas de recursos, serviços de dados e runtimes de execução. Este mapa segue o conteúdo de uma fonte até a reprodução e a biblioteca local.",
    subsections: [
      ["Fluxo do conteúdo", "Uma extensão devolve modelos compartilhados. Os providers do Riverpod paginam, as telas viram cartões e o Isar guarda histórico, favoritos e arquivos indexados."],
      ["Roteamento", "O GoRouter liga onboarding, início, busca, detalhes, reprodução, bibliotecas, ajustes e módulos especializados sem acoplar os contratos de fonte."],
      ["Runtimes", "O Flutter cuida da interface, QuickJS/Dart executa as fontes, Rust e Go fornecem recursos nativos e a CLI headless replica o runtime no servidor."],
      ["Estado e armazenamento", "O Riverpod comanda o app principal, o Isar é o banco principal e o Hive guarda preferências. Os módulos de música e explorador de arquivos mantêm suas pilhas legadas, isoladas dos contratos de fonte."]
    ],
    facts: [
      "Os módulos de interface são agrupados por domínio de mídia, não por provedor.",
      "Serviços transversais cuidam de cache, downloads, anti-bot, sincronização e diagnóstico.",
      "As telas funcionam com uma fonte remota, um arquivo local ou o servidor headless."
    ]
  },
  "content-types": {
    title: "Mangá, watch, música: um modelo compartilhado.",
    body: "ItemType classifica as famílias de fontes; o conteúdo concreto fica nos modelos de mangá, capítulo, página, vídeo e faixa. Uma extensão watch cobre anime, filme ou série sem um novo renderer nativo.",
    subsections: [
      ["Mangá", "Os capítulos usam getPageList(url) para gerar as páginas do leitor. Os metadados compartilham nome, imagem, descrição, autor, artista e gêneros."],
      ["Watch: anime, filme, série", "Os episódios usam getVideoList(url). Os vídeos carregam URL, qualidade, URL original, cabeçalhos, legendas e faixas de áudio. Filme/série/anime são metadados de conteúdo, não runtimes separados."],
      ["Música e romance", "A música reutiliza as superfícies de busca e detalhe com faixas, álbuns, artistas e playlists; os romances usam detalhe, capítulos e um leitor HTML/texto."],
      ["Jogos e plugins", "Game oferece uma superfície de descoberta própria. Plugin representa extensões utilitárias ou de download que usam o manifesto e o esquema de UI nativa."]
    ],
    facts: [
      "A compatibilidade vem de contratos de dados, não de uma tela codificada por site.",
      "Filtros, preferências, comentários, recomendações e listas personalizadas são opcionais.",
      "O campo itemType fica em Source e escolhe biblioteca, player e histórico."
    ]
  },
  "extension-runtime": {
    title: "O JavaScript roda em um runtime controlado.",
    body: "DartExtensionService carrega o código, injeta MProvider e o executa no QuickJS. Os bridges expõem rede, DOM, extratores, preferências e modelos Flutter sem expor o app nativo.",
    subsections: [
      ["Carregamento", "SourceCodeLanguage distingue Dart, JavaScript e Mihon. O loader também instala ou remove extensões privadas do Android pelo canal nativo."],
      ["Segurança e isolamento", "As chamadas de fonte passam por bridges controlados. O servidor headless adiciona registro, cache, autenticação e limitação de taxa antes da execução."],
      ["Ciclo de vida", "Uma fonte é descoberta no catálogo, instalada ou ativada, executada sob demanda, e suas preferências, cookies, cache e layout podem ser redefinidos nos ajustes."],
      ["Tratamento de erros", "Uma chamada de bridge com falha devolve um erro tipado ao Dart em vez de derrubar o isolate. As falhas são registradas com a operação e a URL culpada, para o diagnóstico apontar o passo exato."]
    ],
    facts: [
      "O QuickJS devolve objetos serializados aos modelos Dart.",
      "O código da extensão pode definir cabeçalhos, filtros, preferências e listas personalizadas.",
      "A compatibilidade Mihon permite reutilizar extensões de mangá existentes."
    ]
  },
  "extension-types": {
    title: "Cada família de extensão tem sua superfície.",
    body: "O tipo de fonte escolhe as telas e ações disponíveis. O mesmo motor JS é compartilhado, mas os resultados são renderizados no leitor de mangá, no player watch, no áudio, no romance, no jogo ou no plugin.",
    subsections: [
      ["Mangá", "Fontes de capítulos e páginas com filtros de catálogo, histórico de leitura e importação local."],
      ["Watch", "Fontes de vídeo para anime, filmes e séries: detalhes, episódios, qualidade, legendas, faixas de áudio e extratores de player."],
      ["Música", "Fontes de catálogo de áudio e extensões de metadados: álbuns, artistas, faixas, busca, playlists e estatísticas."],
      ["Romance, jogo, plugin", "Romances reutilizam o leitor texto/HTML; jogos têm telas de descoberta; plugins utilitários seguem manifest.json e ui/schema.json."]
    ],
    facts: [
      "Watch é uma família de uso: seu itemType pode ser anime ou outra fonte de vídeo compatível.",
      "O renderer genérico usa os mesmos cartões, paginação e layouts para fontes compatíveis.",
      "Capacidades opcionais evitam mostrar uma ação que a fonte não implementa."
    ]
  },
  "extension-contract": {
    title: "O contrato JS, método por método.",
    body: "ExtensionService define o mínimo compartilhado. Métodos opcionais enriquecem a experiência sem quebrar uma fonte que não os implementa.",
    subsections: [
      ["Navegação do catálogo", "getPopular, getLatestUpdates e search devolvem MPages com list e hasNextPage. Os filtros vêm de getFilterList e as preferências são salvas por fonte."],
      ["Detalhe e reprodução", "getDetail devolve MManga. Uma fonte de mangá expõe getPageList; uma fonte watch expõe getVideoList e pode dar qualidade, cabeçalhos, legendas e áudio."],
      ["Extensões do contrato", "getCustomList habilita seções de início declaradas por id; recomendações, comentários, sugestões, conta, favoritos e assinatura seguem opcionais com padrões vazios seguros."],
      ["Semântica de falha", "Devolva um MPages vazio em vez de lançar exceção quando uma página não tem itens. Quando uma requisição realmente falha, deixe o erro subir para a interface mostrar tentar novamente e o diagnóstico registrar a causa."]
    ],
    facts: [
      "As URLs continuam sendo identificadores de navegação entre catálogo, detalhe e reprodução.",
      "Cabeçalhos e baseUrl vêm da fonte e podem ser personalizados.",
      "Erros são registrados no Dart e no runtime headless para diagnóstico."
    ]
  },
  "ui-schema": {
    title: "O manifesto descreve o contrato.",
    body: "Para extensões de UI e scripts ZeusDL, o manifest.json declara identidade, permissões e runtime. O esquema descreve campos, ações e saída renderizados nativamente pelo Flutter.",
    subsections: [
      ["Campos do manifesto", "O manifest.json traz identidade, versão, autor, permissões de rede e requisitos binários. O id é uma string reverse-DNS como en.example-tool."],
      ["Contrato de UI nativa", "O contrato de UI renderiza campos URL/texto, seletores, toggles e ações sem WebView: carregamento rápido e funcionamento offline."],
      ["Protocolo de saída ZeusDL", "Os scripts se comunicam por stdout com linhas PROGRESS, STATUS, DONE e ERROR. O Watchtower as transmite ao log em tempo real."],
      ["Erros de validação", "Um manifesto que falha na validação de esquema é rejeitado antes de instalar. O marketplace mostra o campo exato que falhou em vez de uma mensagem genérica."]
    ],
    facts: [
      "O manifest.json traz identidade, versão, autor, permissões de rede e requisitos binários.",
      "O contrato de UI renderiza campos URL/texto, seletores, toggles e ações sem WebView.",
      "Scripts ZeusDL se comunicam por stdout com PROGRESS, STATUS, DONE e ERROR."
    ]
  },
  layouts: {
    title: "O ui-layouts.json controla ordem e forma.",
    body: "Uma extensão pode publicar um layout declarativo. O Watchtower baixa de watchtower-extensions, interpreta como UiLayout, guarda em cache por fonte e deixa o Flutter mapear componentes para widgets nativos.",
    subsections: [
      ["Raiz e cache", "schemaVersion e home.sections são o mínimo útil. browse, detail e player são opcionais. O LayoutDownloader lê Source.uiLayout de raw.githubusercontent.com e o LayoutRegistry salva layouts/<source.id>.json."],
      ["Seções de início", "id identifica getCustomList(id, page). component aceita spotlight/carousel, banner/hero, ranked, newHot, compactRow, categoryPills, creatorRow, grid, feed e masonry, além das apresentações curadas do registro de componentes."],
      ["Parâmetros visuais", "title, icon e accent moldam o cabeçalho. columns, rows, cardStyle, gridOrder e scrollDirection são dicas de render. seeAll abre a página completa, paginated ativa a paginação e requiresAuth protege uma seção logada."],
      ["Browse, detail, player", "Browse descreve popular/latest/search com component, columns, cardStyle, results e filters. Detail aceita hero, episodeList e showRecommendations. Player aceita standard ou feed."],
      ["Layouts inválidos", "Um componente desconhecido cai no renderer de grade e é registrado. Um arquivo malformado deixa a fonte no início padrão Popular/Latest/Search em vez de quebrar a tela inteira."]
    ],
    facts: [
      "Sem layout, a fonte volta ao início padrão Popular/Latest/Search.",
      "O bridge toLegacyMap mantém compatíveis as telas de início existentes.",
      "Um layout recarrega após instalar ou atualizar a extensão e é removido ao desinstalar."
    ]
  },
  "watch-home": {
    title: "WatchHomeScreen é uma superfície controlável.",
    body: "A página Watch compõe hero, histórico, categorias, linhas e catálogo a partir da fonte atual. Layouts JSON podem substituir as listas padrão mantendo as interações nativas.",
    subsections: [
      ["Ordem e hero", "O hero usa os cinco primeiros itens banner (com popular como reserva), gira a cada 7 segundos e mira um ratio paisagem largura × 0,62. Reproduzir abre o detalhe, Info abre a folha inferior e Minha lista alterna o favorito no Isar."],
      ["Histórico", "Continuar assistindo lê o histórico Isar da fonte, deduplica por mangá, limita a 12 cartões e mostra miniatura, episódio/capítulo e progresso."],
      ["Catálogo e busca", "A grade do catálogo pagina Popular ou uma lista personalizada. A busca usa debounce de 250 ms, sugestões flutuantes, ações de microfone/X e só confirma resultados ao enviar."],
      ["Desempenho", "A app bar observa o scroll com ValueNotifier; o hero vive dentro do CustomScrollView, então o conteúdo não o cobre e o scroll evita um setState completo."],
      ["Estados vazios e de erro", "Uma seção vazia é ocultada. Uma seção com falha mostra um cartão de tentar novamente com o erro bruto, e um bloqueio Cloudflare leva ao painel de bypass em vez de um beco sem saída."]
    ],
    facts: [
      "As categorias são cartões 132×72 com imagem, gradiente e borda.",
      "As seções são ocultadas quando os dados estão vazios.",
      "As ações de fonte são consistentes entre mangá, anime, filmes e séries."
    ]
  },
  "home-widgets": {
    title: "Os widgets são adaptadores de dados.",
    body: "WatchtowerHomeScreen é o início global do app. Combina os feeds AniList e TMDB com a biblioteca local e comanda as linhas por abas de mídia.",
    subsections: [
      ["Início de mídia", "As abas Tudo, Filme, Série, Música, Anime, Asia, Infantil, Ocidental, África, TV curta, Futebol e Jogos escolhem as seções e o hero visíveis."],
      ["Cartões", "DiscoveryCard tem variantes standard, ranked, landscape, featured, saga e spotlight. EpisodeCard adiciona miniatura, título do episódio, duração e barra de progresso para retomar."],
      ["Dados", "AniList alimenta anime e conteúdo editorial; TMDB alimenta filmes e séries; a biblioteca e os providers locais completam as listas do usuário."],
      ["Watch versus início global", "WatchtowerHomeScreen é o início global; WatchHomeScreen é o início de uma fonte/extensão. O primeiro agrega catálogos, o segundo renderiza o contrato de uma fonte."]
    ],
    facts: [
      "Os widgets não conhecem as URLs de cada provedor: consomem modelos normalizados.",
      "Estados skeleton, vazio, carregando e erro fazem parte da superfície de início.",
      "Layouts de extensão miram sobretudo WatchHomeScreen e as telas browse/detail/player."
    ]
  },
  api: {
    title: "Dois runtimes, uma API.",
    body: "O servidor embarcado Dart/shelf escuta na 4567 dentro do app. A CLI headless reutiliza as mesmas operações para CI, Docker, Railway ou Render.",
    subsections: [
      ["Endpoints", "Ping, descoberta de fontes, catálogo, detalhe, vídeo, páginas e filtros espelham o contrato ExtensionService. As rotas library, history e proxy servem o banco local e a mídia."],
      ["Autenticação", "GET /api/ping segue público e devolve a versão do servidor. As demais rotas passam por autenticação, limitação de taxa e o registro de extensões."],
      ["Respostas de erro", "Uma falha devolve um corpo JSON com a operação e a mensagem em vez de um 500 vazio. Um erro de fonte mantém o status HTTP, o que distingue um bloqueio de um bug."],
      ["Filtro NSFW", "Fontes NSFW são filtradas das listas e bloqueadas com 403 no acesso direto."]
    ],
    facts: [
      "GET /api/ping é público e devolve a versão do servidor.",
      "As demais rotas passam por autenticação, limitação de taxa e o registro de extensões.",
      "Fontes NSFW são filtradas das listas e bloqueadas com 403 no acesso direto."
    ]
  },
  downloads: {
    title: "Os downloads usam motores selecionáveis.",
    body: "Watch, mangá e romance têm sua própria aba de downloads. Um motor por mídia, concorrência e regras de Wi-Fi controlam a fila, e cada cartão expõe ações rápidas.",
    subsections: [
      ["Escolha do motor", "HYDRA é o motor HLS interno, ZEUS é o ZeusDL, ARES é o Aria2 e Externe entrega o link ao ADM ou IDM. Escolher o motor errado para um stream protegido é uma falha comum."],
      ["Concorrência", "Cada aba ajusta conexões simultâneas (1–20) e itens simultâneos na fila (1–10). Valores altos aceleram, mas gastam mais banda e podem acionar limites da fonte."],
      ["Arquivo e limpeza", "Capítulos de mangá podem ser arquivados como pasta, CBZ, CBR, CB7 ou ZIP. O apagamento automático após ler remove um capítulo marcado como lido, opcionalmente incluindo os marcados."],
      ["Erros de download", "Um download com falha mantém os arquivos parciais e oferece Tentar novamente. 403/429 costumam ser limite de taxa ou bloqueio anti-bot; 5xx aponta para a fonte. Verifique o link no navegador antes de mudar ajustes."]
    ],
    facts: [
      "Regras de somente Wi-Fi podem bloquear um download até haver rede Wi-Fi.",
      "Atualizações inteligentes adicionam novos episódios ou capítulos automaticamente.",
      "A fila de downloads mostra até cinco botões de ação rápida por cartão."
    ]
  },
  trackers: {
    title: "O progresso sincroniza com serviços externos.",
    body: "O Watchtower conecta a AniList, Kitsu, MyAnimeList, Simkl e Trakt para manter o progresso de leitura e exibição sincronizado entre dispositivos.",
    subsections: [
      ["Trackers suportados", "AniList, Kitsu, MyAnimeList, Simkl e Trakt. Cada um tem seu fluxo de login e modelo de status, normalizados em um modelo Track comum."],
      ["Vínculo e sincronização", "Uma entrada da biblioteca pode ser vinculada a uma entrada de tracker. Progresso, status e nota são enviados na atualização, e as atualizações inteligentes podem puxar o próximo episódio ou capítulo."],
      ["Erros de tracker", "Token expirado, app revogado ou limite de taxa geram mensagens distintas. Reautentique em Ajustes › Rastreamento; uma entrada errada pode ser desvinculada e revinculada."],
      ["Migração", "O fluxo de migração em massa move entradas entre fontes preservando os vínculos de tracker, para não perder progresso quando uma fonte morre."]
    ],
    facts: [
      "As integrações de tracker ficam em lib/services/trackers.",
      "Gerencie os trackers em Ajustes › Rastreamento.",
      "A migração em massa preserva os vínculos de tracker ao trocar de fonte."
    ]
  },
  "getting-started": {
    title: "Compilar o app Flutter",
    body: "Instale as toolchains, busque os pacotes Dart e inicie o cliente multiplataforma.",
    subsections: [
      ["Requisitos", "Flutter 3.38+ / Dart 3.10+, Rust para os bindings flutter_rust_bridge, Java 17 para Android e Go 1.21+ se você reconstruir o cliente torrent."],
      ["Plataformas", "Windows, Linux, macOS, iOS, Android e Web são alvos do projeto. Alguns recursos nativos degradam com elegância na Web."],
      ["Verificar a instalação", "Rode o analisador antes da primeira mudança: dart format --output=none --set-exit-if-changed lib e flutter analyze --no-pub. O comando CLI doctor informa se o motor nativo e o QuickJS estão disponíveis."],
      ["Erros de build comuns", "Uma toolchain Rust ausente quebra os bindings. Um SDK Flutter antigo quebra a resolução do pub. Um Java 17 ausente quebra o build Android. Corrija a toolchain antes de mexer no código."]
    ],
    facts: [
      "Requisitos: Flutter 3.38+, Dart 3.10+, Rust e Java 17 para Android.",
      "O projeto mira Windows, Linux, macOS, iOS, Android e Web.",
      "A CLI headless sai do workflow Build Linux Headless CLI."
    ]
  },
  deployment: {
    title: "Embarcado ou headless.",
    body: "A CLI headless roda com ou sem Docker. Rotas privadas usam X-Api-Key ou Authorization Bearer quando API_KEY está ativa, enquanto o app mantém seu modo embarcado.",
    subsections: [
      ["Docker", "O Docker Compose é o caminho recomendado para um servidor reprodutível. A imagem publicada está no GHCR."],
      ["Outros hosts", "Railway, Render, VPS e Docker puro estão documentados no repositório. O servidor mantém o mesmo contrato de fonte do app."],
      ["Variáveis de ambiente", "API_KEY protege as rotas privadas. CACHE_TTL_MS, CACHE_DIR, PREFS_DIR e RATE_MAX_TOKENS controlam cache, persistência e limitação de taxa."],
      ["Erros de implantação", "Um contêiner que sai imediatamente costuma ser falta de API_KEY ou conflito de porta. Veja os logs, confirme que a porta está livre e verifique o caminho do repo de extensões antes de reiniciar."]
    ],
    facts: [
      "Docker Compose é o caminho recomendado para um servidor reprodutível; a imagem está no GHCR.",
      "Implantações em Railway, Render, VPS e Docker estão documentadas no repositório.",
      "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR e RATE_MAX_TOKENS controlam o servidor."
    ]
  },
  troubleshooting: {
    title: "Solução de problemas",
    body: "Problema em uma fonte ou no app? Siga a lista, leia o erro exato e rode um diagnóstico antes de mudar ajustes.",
    subsections: [
      ["Diagnóstico primário", "Atualize extensões e app, atualize o item com falha, teste outro item da mesma fonte, abra o site no navegador, troque de rede, limpe cache e cookies e reinicie o app. Se um passo resolver, a causa é local."],
      ["Ler o erro", "O Watchtower mostra o erro bruto, não uma mensagem genérica. Copie-o: o nome da operação e a URL com falha apontam o passo exato. O diagnóstico de extensão registra popular, latest, detail e media separadamente."],
      ["Erros HTTP", "403 Forbidden: anti-bot ou bloqueio de IP. 404 Not Found: conteúdo removido ou fonte morta. 429 Too Many Requests: limite temporário. 5xx: servidor da fonte fora do ar. 1006/1020: bloqueio de IP ou regra de firewall."],
      ["Pessoal ou generalizado", "Se só você é afetado, suspeite de Cloudflare, bloqueio de IP ou limite de taxa, e reduza downloads dessa fonte. Se todos são afetados, veja os trackers de issues da extensão e do app."],
      ["Problemas de instalação", "Uma extensão que não instala costuma falhar na validação de esquema ou baixar um arquivo corrompido. Baixe de novo e confira o id e a versão do manifesto."]
    ],
    facts: [
      "Atualize as extensões primeiro: a maioria das quebras se resolve com uma atualização.",
      "A tela de diagnóstico separa os passos popular, latest, detail e media.",
      "Sem ETA para correções de extensão; uma fonte quebrada pode exigir paciência."
    ]
  },
  cloudflare: {
    title: "Cloudflare e anti-bot",
    body: "Algumas fontes ficam atrás do Cloudflare. O Watchtower só reporta um challenge quando a resposta traz evidência real, e oferece uma WebView de bypass que abre a URL exata que falhou.",
    subsections: [
      ["O que conta como challenge", "Um 403/503 simples, um timeout ou a palavra challenge não são Cloudflare. O Watchtower exige marcadores de CDN, uma página de challenge interativa ou uma página de bloqueio antes de mostrar a interface anti-bot."],
      ["Contornar um challenge", "A WebView de bypass abre a URL exata que falhou, nunca a raiz do site. Resolva o CAPTCHA uma vez e tente a fonte de novo."],
      ["Trocar o user agent", "O user agent influencia a detecção de bots. Troque o padrão em Ajustes avançados, reinicie o app e tente. Teste vários navegadores e sistemas."],
      ["Cookies e cache", "Limpar cookies reinicia um login ou um estado de challenge. Limpar os dados da WebView deixa tudo limpo. Ambos ficam em Ajustes avançados."],
      ["Se ainda falhar", "A fonte pode ter aumentado a proteção. Espere, ou troque para outra fonte do mesmo conteúdo."]
    ],
    facts: [
      "Cloudflare só é reportado quando há evidência real na resposta.",
      "A WebView de bypass abre a URL que falhou, não a raiz do site.",
      "Uma falha pessoal costuma ser bloqueio ou limite de taxa, não um bug."
    ]
  },
  cli: {
    title: "CLI headless",
    body: "A build de Linux contém o mesmo runtime de extensões do app de desktop e roda sem X11 ou Wayland, para CI, servidores e SSH.",
    subsections: [
      ["Comandos", "doctor sonda o motor nativo e o QuickJS. extensions list e test carregam um repo local. source executa uma operação de ExtensionService. plugins validate inspeciona o catálogo de plugins."],
      ["Modos de teste", "load verifica que uma fonte carrega e expõe filtros, preferências e cabeçalhos. smoke também chama popular, latest, search, sugestões, detalhes e a operação de mídia. deep adiciona a página dois e sondas HTTP."],
      ["Filtragem", "Filtre por idioma, NSFW/SFW, motor, tag, consulta, ids ou tipo. Um diretório de idioma como src/watch/fr tem precedência sobre um campo lang desatualizado no índice."],
      ["Códigos de saída e erros", "0 é sucesso, 1 é uma verificação de saúde, teste ou validação falha, e 2 é uso inválido ou erro de operação não tratado. Relatórios e stdout ocultam credenciais e parâmetros de URL assinados."],
      ["Limites conhecidos", "Comandos de library, history, progress, fila de downloads e tracker ainda não estão disponíveis: o ponto de entrada headless não abre os stores Isar/Hive."]
    ],
    facts: [
      "doctor --json informa se o motor nativo e o QuickJS estão disponíveis.",
      "smoke executa popular, latest, search, detalhes e a operação de mídia.",
      "A saída oculta credenciais comuns e parâmetros de URL assinados."
    ]
  }
};

export default pt;
