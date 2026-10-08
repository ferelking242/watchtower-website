// Portuguese (Brasil) prose overlay. Code blocks and markers come from en.js.
const pt = {
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
