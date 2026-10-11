// pt prose overlay, machine-translated from the English base and kept in
// sync with it. Code blocks and markers are inherited from en.js.

const pt = {
  "getting-started": {
    title: "Watchtower em dez minutos.",
    body: "Watchtower é um aplicativo para animes, séries, mangás, romances e música. Ele vem vazio de propósito: você escolhe as fontes e tudo o que assiste ou lê fica no seu aparelho.",
    subsections: [
      ["O que você precisa", "Um telefone ou tablet Android 8.0 ou mais recente para o aplicativo completo. Qualquer máquina Linux, macOS ou Windows pode executar a linha de comando headless, sem sessão gráfica. Uma coisa não é opcional: uma URL de repositório de origem, porque Watchtower não contém conteúdo próprio."],
      ["Adicione sua primeira fonte", "Abra Mais, Extensões e Repositórios. Cole um URL de repositório que termine em index.min.json e confirme. A lista de extensões é preenchida assim que o índice é carregado."],
      ["Instalar extensões", "Cada extensão ensina ao Watchtower um site. Toque em instalar ao lado daqueles que você deseja, permita a instalação de fontes desconhecidas se o Android solicitar e as fontes aparecerem em Navegar."],
      ["Construa sua biblioteca", "Abra uma fonte, encontre uma série e toque em Adicionar à biblioteca. A partir de então, o Watchtower rastreia seu progresso, verifica novos capítulos e mantém a entrada em um só lugar."],
      ["Escolha seus tipos de mídia", "Watchtower lida com mangá, anime, romances e música lado a lado. Cada tipo abre em seu próprio leitor ou player, escolhido automaticamente a partir do que a extensão declara."],
      ["Surpresas comuns na primeira execução", "Uma tela de navegação vazia significa que nenhuma extensão está instalada ainda, nem um aplicativo quebrado. Um repositório que não carrega geralmente é um URL obsoleto ou um portal de rede cativo."],
      ["Se a primeira tela parecer vazia", "Uma lista de navegação vazia significa que nenhuma extensão está instalada ainda, e não um aplicativo quebrado. Se um repositório não carregar, verifique se seu endereço termina em index.min.json e tente novamente em outra rede antes de presumir que ele desapareceu."],
    ],
    facts: [
      "Watchtower é fornecido sem conteúdo. As fontes são suas para escolher.",
      "As extensões são JavaScript comuns executadas em uma sandbox.",
      "Sua biblioteca fica no seu dispositivo, não em um servidor Watchtower.",
      "O Android 8.0+ é a base para o aplicativo móvel.",
      "Uma lista de navegação vazia significa que nenhuma extensão está instalada e não uma falha.",
    ]
  },
  installation: {
    title: "Instale a versão que corresponde ao seu dispositivo.",
    body: "Existem três maneiras de executar o Watchtower: o aplicativo Android, uma versão de desktop ou uma linha de comando Linux para servidores. Eles compartilham um mecanismo, portanto, uma fonte que funciona em um funciona em todos eles.",
    subsections: [
      ["Android", "O alvo principal e a única compilação que obtém todos os recursos primeiro. Baixe o APK de lançamento ou um APK de visualização se quiser testar os próximos trabalhos. Habilite a instalação de fontes desconhecidas quando o Android solicitar, porque o Watchtower não é distribuído por meio de uma loja."],
      ["Área de trabalho", "Existem compilações para Windows, Linux e macOS para assistir em uma tela maior. Crie-os a partir do código-fonte com o Flutter, já que os artefatos de lançamento são publicados primeiro para Android e para a CLI do Linux."],
      ["Linha de comando do Linux", "Um único binário sem janela. Ele executa o mesmo mecanismo de extensão, portanto pode buscar, pesquisar e fazer download em um servidor ou via SSH. O script do instalador copia ele e seus arquivos de tempo de execução em um prefixo escolhido."],
      ["Estável ou visualização", "As compilações de visualização rastreiam o código mais recente e quebram com mais frequência. Mantenha os backups automáticos ativados se você executar um e espere reinstalar a versão de lançamento se algo der errado."],
      ["Construindo a partir da fonte", "Você precisa do Flutter 3.38 ou mais recente, do Dart 3.10 ou mais recente e de um conjunto de ferramentas Rust. A versão 1.21 ou mais recente só será necessária se você quiser reconstruir o servidor torrent sozinho."],
      ["Mantenha-o atualizado", "Watchtower informa quando existe uma nova versão e você a instala da mesma forma que na primeira vez. Sua biblioteca e configurações permanecem intactas."],
      ["Se a instalação falhar", "As mensagens comuns do instalador são explicadas na página de erros. Uma incompatibilidade de assinatura significa que uma cópia assinada de forma diferente já está instalada e deve ser removida primeiro, um download corrompido precisa ser buscado novamente e uma incompatibilidade de arquitetura do processador significa que a compilação errada foi baixada."],
    ],
    facts: [
      "O Android é a única plataforma com versões de lançamento publicadas.",
      "O binário headless foi desenvolvido para Linux x86_64.",
      "Rust é necessário para construir a partir do código-fonte; Ir é opcional.",
      "As instalações de visualização e estáveis ​​compartilham os mesmos dados, portanto, a troca mantém sua biblioteca.",
      "Remova uma instalação conflitante antes de substituí-la por uma compilação assinada de forma diferente.",
    ]
  },
  "adding-sources": {
    title: "De onde vem o seu conteúdo.",
    body: "Watchtower tem dois tipos de fonte. As fontes online chegam como extensões de um repositório que você adiciona. Fontes offline são pastas no seu próprio dispositivo. A maioria das pessoas usa ambos.",
    subsections: [
      ["Adicionar um repositório", "Vá para Mais, Extensões, Repositórios e cole o URL do repositório. O aplicativo busca o índice e lista todas as extensões que ele contém. Você pode adicionar vários repositórios de uma só vez."],
      ["Instale o que você precisa", "Atualize a lista e toque em instalar ao lado de uma extensão. O Android pode pedir permissão para instalar aplicativos desconhecidos pela primeira vez. As extensões instaladas aparecem imediatamente no Navegar."],
      ["Mantenha as fontes atualizadas", "Atualize um repositório sempre que desejar versões de extensão mais recentes. Uma atualização substitui a extensão e mantém suas configurações, portanto não há nada para reconfigurar."],
      ["Use seus próprios arquivos", "Aponte Watchtower para uma pasta de mangá ou anime que você já possui e ela se tornará uma fonte normal. Nenhum repositório, nenhuma rede, nenhuma conta."],
      ["Confie apenas no que você sabe", "Um repositório pode servir qualquer coisa e uma extensão é executada com o mesmo acesso que o aplicativo. Trate um repositório desconhecido da mesma forma que trataria um instalador desconhecido."],
      ["Quando um repositório falha", "Um URL que não carrega geralmente expira, é bloqueado ou é copiado sem seu caminho de índice. Verifique se o endereço termina em index.min.json antes de assumir que o repositório desapareceu."],
      ["Quando um repositório se recusa a carregar", "Um repositório que falha ao carregar geralmente é um endereço expirado, um caminho que não termina em index.min.json ou uma rede que o bloqueia. Confirme o endereço e tente uma rede diferente antes de removê-lo."],
    ],
    facts: [
      "Um repositório é apenas um arquivo JSON hospedado em um servidor web.",
      "As atualizações mantêm suas preferências de origem.",
      "As pastas locais funcionam sem nenhuma rede.",
      "Watchtower não verifica nem aprova repositórios de terceiros.",
      "Um repositório que não carrega geralmente é um endereço errado ou expirado.",
    ]
  },
  library: {
    title: "Tudo o que você acompanha, em um só lugar.",
    body: "A biblioteca é o lar de tudo o que você guarda. Ele lembra onde você parou, agrupa séries em estantes e é o ponto de partida para atualizações e downloads.",
    subsections: [
      ["Adicionando e removendo", "Abra qualquer série e toque em Adicionar à biblioteca. Retire-o do mesmo lugar e a série deixa de ser atualizada sem perder seu histórico de leitura."],
      ["Categorias", "As categorias são as prateleiras da sua biblioteca. Uma série pode ter várias ao mesmo tempo, e é assim que você separa o que segue semanalmente do que poderá chegar algum dia."],
      ["Progresso", "Watchtower lembra o episódio ou capítulo exato que você alcançou, por entrada, e carrega esse progresso para um rastreador quando você tiver um conectado."],
      ["Filtros e classificação", "Oculte o que você terminou, mostre apenas o que foi baixado ou classifique por quando uma série foi lançada pela última vez. Os filtros são apenas de exibição e nunca excluem nada."],
      ["Vários dispositivos", "Não há sincronização integrada entre dispositivos. Mova sua biblioteca com um arquivo de backup e mantenha os downloads separados, pois eles não fazem parte de um backup."],
      ["Quando uma entrada quebra", "Se uma série abre vazia ou perde a capa, sua fonte muda abaixo dela. Atualize a entrada e migre-a para outra origem se o problema persistir."],
      ["Quando uma entrada não é atualizada ou aberta", "Se uma série não abrir, sua fonte foi alterada abaixo dela. Atualize a entrada primeiro e migre-a para outra fonte se o problema persistir. Uma atualização que não retorna nada significa que a extensão está desatualizada e não o aplicativo."],
    ],
    facts: [
      "As séries concluídas são deixadas de lado pelas atualizações em segundo plano.",
      "Uma série pode pertencer a mais de uma categoria.",
      "O progresso é monitorado por capítulo ou episódio, não por série.",
      "Remover uma série da biblioteca não exclui seu histórico.",
      "A atualização corrige a maioria das entradas quebradas; a migração corrige o resto.",
    ]
  },
  browse: {
    title: "Encontrar algo para assistir ou ler.",
    body: "Navegar é onde você explora o que uma fonte oferece e pesquisa todas elas de uma vez. É a maneira mais rápida de responder à pergunta de quem tem esse título.",
    subsections: [
      ["Navegando em uma fonte", "Abra uma fonte para ver suas listagens populares e mais recentes. A maioria das fontes também expõe filtros por gênero, ano ou status, que aparecem no topo da listagem."],
      ["Pesquisando em todos os lugares", "A ação de pesquisa consulta todas as fontes habilitadas em paralelo e agrupa os resultados por fonte, para que você possa ver rapidamente quem tem o título e quem não tem."],
      ["Quando um título não aparece", "As fontes geralmente indexam o título no idioma original em vez do inglês. Experimente o nome nativo, uma grafia romanizada ou um fragmento mais curto dele."],
      ["Movendo-se entre fontes", "Se uma fonte ficar lenta ou parar de funcionar, migre a entrada em vez de adicioná-la novamente. Watchtower corresponde à série na nova fonte e transmite seu progresso e categorias."],
      ["Filtrando por idioma", "As extensões são marcadas com o idioma que servem. Oculte aqueles que você não consegue ler para que os resultados da pesquisa e as listagens permaneçam relevantes."],
      ["Por que os resultados diferem", "Cada fonte indexa seu próprio catálogo, portanto um título pode ser completo em uma e parcial em outra. Comparar duas fontes antes de confirmar é normal."],
      ["Quando a pesquisa não retorna nada", "Uma pesquisa vazia geralmente é uma incompatibilidade de título, em vez de uma fonte quebrada. Experimente o nome do idioma original, uma grafia romanizada ou um fragmento mais curto, e lembre-se de que uma fonte que não responde não impede as outras."],
    ],
    facts: [
      "Pesquise fãs em todas as fontes habilitadas de uma só vez.",
      "Fontes sem uma lista popular ainda funcionam por meio de pesquisa.",
      "A migração move o seu progresso, não os arquivos baixados.",
      "As tags de idioma de extensão orientam o filtro de idioma.",
      "Uma pesquisa vazia geralmente é uma incompatibilidade de título, não uma fonte morta.",
    ]
  },
  extensions: {
    title: "As extensões são a forma como o Watchtower chega à web.",
    body: "Uma extensão é um pequeno programa que ensina ao Watchtower um site: como listá-lo, pesquisá-lo, lê-lo e reproduzi-lo. Tudo o que você navega vem por meio de uma extensão.",
    subsections: [
      ["O que é uma extensão", "É JavaScript, não um plugin que você compila. Ele sabe como solicitar a um site suas listagens, seus resultados de pesquisa, seus capítulos e seus fluxos de vídeo, e responde na forma que Watchtower entende."],
      ["Como eles chegam até você", "As extensões são agrupadas em repositórios. Você adiciona um repositório uma vez e cada extensão que ele contém torna-se instalável na tela de extensões."],
      ["Tipos de conteúdo", "Uma extensão declara para que serve: mangá, anime, novel, música ou jogo. Essa declaração decide qual leitor ou player abre quando você toca em um resultado."],
      ["Atualizações e remoção", "As extensões são atualizadas e mantêm suas configurações. A desinstalação remove apenas a extensão; as entradas da sua biblioteca sobrevivem e simplesmente esperam que uma fonte as sirva novamente."],
      ["Por que você deveria se importar com quem fez isso", "Uma extensão é executada dentro do Watchtower, mas pode acessar a rede e ler o que você fornece. Instale a partir de repositórios em que você confia e tenha cuidado com qualquer coisa que não lhe seja familiar."],
      ["Quando uma extensão para de funcionar", "Os sites mudam e uma fonte rompe com eles. Geralmente é uma extensão quebrada, não um aplicativo quebrado, e a correção chega como uma atualização."],
      ["Quando uma instalação ou atualização falha", "Uma instalação com falha quase sempre significa que o Android bloqueia aplicativos desconhecidos, e uma atualização com falha é um download que parou parcialmente. Permita instalações do seu gerenciador de arquivos ou navegador, tente novamente e reinstale do zero se o arquivo estiver truncado."],
    ],
    facts: [
      "As extensões são JavaScript, executadas em uma sandbox dentro do aplicativo.",
      "Uma extensão cobre um site.",
      "A instalação e a atualização nunca afetam sua biblioteca.",
      "Uma fonte que falha repentinamente geralmente é uma mudança no site.",
      "Uma instalação com falha geralmente é do Android, não da extensão.",
    ]
  },
  "extensions-catalogue": {
    title: "Escolhendo e mantendo suas fontes.",
    body: "A tela de extensões é o seu catálogo: o que está instalado, o que está disponível e o que está desatualizado. É aqui que você mantém sua lista de fontes saudável.",
    subsections: [
      ["Instalado e disponível", "As extensões instaladas funcionam imediatamente. Os disponíveis vêm de um repositório que você adicionou: atualize a lista e instale os que deseja com um único toque."],
      ["Atualizando uma extensão", "Quando existe uma versão mais recente, ela aparece em atualizações. Instalá-lo substitui a cópia antiga e mantém suas preferências, portanto, uma correção não custa nada."],
      ["Removendo uma extensão", "Desinstale-o na mesma tela. As entradas da sua biblioteca permanecem inalteradas e simplesmente aparecem como indisponíveis até que outra fonte, ou uma reinstalação, possa atendê-las."],
      ["Mantendo a lista legível", "As extensões são agrupadas por idioma. Filtre os idiomas que você não lê para que a lista mostre apenas as fontes que são realmente úteis para você."],
      ["Quando nada é instalado", "Uma falha na instalação quase sempre significa que o Android bloqueia aplicativos desconhecidos, não a extensão. Permita instalações do seu gerenciador de arquivos ou navegador e tente novamente."],
      ["Mantendo o catálogo atualizado", "Atualize seus repositórios de vez em quando. Novas extensões aparecem e as quebradas são consertadas, mas nada chega até você pedir."],
      ["Quando uma extensão desaparece", "Uma extensão instalada pode desaparecer se o Android a remover ou se estiver oculta pelo filtro de idioma ou pela alternância de conteúdo adulto. Verifique os filtros primeiro e, em seguida, reinstale-o a partir do repositório, se ele realmente tiver desaparecido."],
    ],
    facts: [
      "As atualizações preservam as configurações definidas em uma fonte.",
      "A desinstalação de uma extensão mantém as entradas da sua biblioteca.",
      "As extensões são agrupadas por idioma, não por repositório.",
      "Atualizar um repositório é como você vê extensões novas e atualizadas.",
      "Uma extensão ausente geralmente fica oculta por um filtro e não é desinstalada.",
    ]
  },
  "extensions-devkit": {
    title: "Construindo sua própria fonte.",
    body: "Se quiser adicionar um site que ninguém cobriu ainda, você mesmo pode escrever uma extensão. É necessário um arquivo descrevendo o site e um arquivo implementando as chamadas.",
    subsections: [
      ["O que você precisa escrever", "Dois arquivos: um manifesto que nomeia a extensão e declara seu idioma e tipo de conteúdo, e um arquivo de entrada com as chamadas que buscam listagens, pesquisas, detalhes, capítulos e páginas."],
      ["Comece a partir de uma fonte existente", "O caminho mais rápido é copiar uma extensão funcional para um site semelhante e alterar os URLs e a análise. A forma das chamadas permanece a mesma."],
      ["Testando sem o aplicativo", "A linha de comando pode executar uma única chamada e imprimir exatamente o que retornou. Isso é muito mais rápido do que instalar a extensão em um dispositivo sempre que você muda de linha."],
      ["O que seu código pode usar", "Solicitações, um analisador HTML e um analisador JSON. Não há acesso a arquivos, banco de dados e nenhuma maneira de acessar as telas do próprio aplicativo."],
      ["Quando a saída parece errada", "Se um campo estiver vazio, o analisador quase sempre é a causa e não o tempo de execução. Compare o que você retorna com o que o contrato de origem espera."],
      ["Antes de publicar", "Execute a extensão no site ativo, verifique a pesquisa, a listagem e as chamadas de página e confirme se o tipo de conteúdo está correto para que ele abra no leitor ou player correto."],
      ["Quando uma chamada não retorna nada", "Um resultado vazio é quase sempre um seletor que não corresponde mais ao site, e não uma falha de tempo de execução. Busque a página, compare seus seletores com a marcação atual e teste a chamada única na linha de comando antes de reconstruir o aplicativo."],
    ],
    facts: [
      "Uma fonte funcional precisa apenas de um manifesto e um arquivo de entrada.",
      "A linha de comando pode testar uma chamada isoladamente.",
      "As extensões podem alcançar a rede e analisar páginas, nada mais.",
      "O tipo de conteúdo que você declara decide qual leitor ou player abre.",
      "Um resultado vazio geralmente é um seletor que não corresponde mais.",
    ]
  },
  "extensions-publishing": {
    title: "Compartilhando uma fonte com outras pessoas.",
    body: "Depois que sua extensão funcionar, publicá-la significa colocá-la em um repositório que outras pessoas possam adicionar. Um repositório é um pequeno arquivo JSON mais os pacotes de extensão que ele lista.",
    subsections: [
      ["O que é um repositório", "Uma pasta de pacotes de extensão e um índice JSON que os lista. Hospede a pasta em qualquer lugar que sirva HTTPS e forneça às pessoas o endereço do arquivo de índice."],
      ["Publicando uma atualização", "Aumente o número da versão, reconstrua o pacote e atualize a versão no índice. Watchtower compara esse número, então uma versão inalterada é uma atualização que ninguém recebe."],
      ["Mantendo o nome estável", "O nome do pacote é a identidade da extensão. Altere-o e os usuários obterão uma segunda extensão separada, em vez de uma atualização da primeira."],
      ["Seja claro sobre a confiança", "As pessoas que instalam do seu repositório estão executando seu código com acesso do aplicativo. Diga quem você é e mantenha o repositório em algum lugar sob seu controle."],
      ["Mantendo uma fonte", "Os sites mudam sem aviso prévio, portanto, espere republicá-los. Fique atento a relatos de que uma fonte parou de funcionar e corrija-a antes que os usuários se afastem."],
      ["O endereço do índice é importante", "O endereço que você distribui deve apontar para index.min.json. Qualquer outro caminho deixa as pessoas olhando para um repositório que se recusa a carregar."],
      ["Quando os usuários não recebem sua atualização", "A causa comum é um número de versão no índice que não foi alterado ou um endereço de repositório apontando para algum lugar diferente do arquivo de índice. Aumente a versão, confirme o endereço e verifique se o arquivo pode ser acessado por HTTPS."],
    ],
    facts: [
      "Um repositório é uma pasta HTTPS mais um índice JSON.",
      "A versão no índice é o que informa aos usuários que existe uma atualização.",
      "Um nome de pacote estável é o que torna uma atualização uma atualização.",
      "Espere republicar sempre que o site de destino mudar.",
      "Uma atualização que ninguém recebe geralmente é um número de versão inalterado.",
    ]
  },
  "local-source": {
    title: "Lendo e reproduzindo seus próprios arquivos.",
    body: "Watchtower pode tratar uma pasta no seu dispositivo como uma fonte normal. Sua própria coleção se comporta exatamente como uma coleção online, completa com acompanhamento de progresso.",
    subsections: [
      ["Mangá e romances", "Coloque uma pasta por série dentro da pasta local e um arquivo por capítulo dentro dela. Os capítulos podem ser arquivos CBZ ou pastas de imagens simples, e o nome da pasta se torna o título da série."],
      ["Anime", "Coloque uma pasta por série dentro da pasta local do anime e um arquivo de vídeo por episódio dentro dela. Os episódios são ordenados por nome de arquivo, portanto numere-os."],
      ["Capas e detalhes", "Uma imagem de capa na pasta da série torna-se a miniatura. Um arquivo de detalhes ao lado pode adicionar autor, artista, descrição e gêneros quando o nome da pasta não for suficiente."],
      ["Adicionando novos arquivos", "Mova os arquivos de fora do aplicativo e atualize a fonte local para que o Watchtower verifique novamente a pasta. Os arquivos adicionados enquanto o aplicativo está fechado não serão notados até que você o faça."],
      ["Lendo off-line", "As fontes locais nunca tocam a rede, portanto funcionam em modo de voo e não podem ser bloqueadas ou com taxa limitada. Downloads e arquivos locais se comportam da mesma maneira quando estão no disco."],
      ["Escondendo arquivos da galeria", "Solte um arquivo .nomedia na pasta para que capas e episódios fiquem fora do aplicativo de fotos do seu telefone."],
      ["Quando as capas estão em branco ou faltam arquivos", "Uma capa em branco ou uma série que não abre quase sempre significa que a estrutura da pasta está errada. Verifique se há uma pasta por série e um arquivo por capítulo ou episódio, em seguida, remova a entrada, limpe o banco de dados em busca de itens fora da biblioteca e deixe a fonte local verificar novamente a pasta."],
    ],
    facts: [
      "Tanto os arquivos CBZ quanto as pastas de imagens simples são lidos como capítulos.",
      "A ordem dos episódios segue o nome do arquivo, então numere seus arquivos.",
      "Um arquivo .nomedia mantém a mídia local fora da galeria do sistema.",
      "As fontes locais funcionam sem nenhuma conexão de rede.",
      "Uma estrutura de pastas errada é a causa comum de uma capa em branco.",
    ]
  },
  "video-player": {
    title: "Assistindo a um episódio.",
    body: "O player cobre o vídeo com gestos e folhas, para que nada saia da tela enquanto você assiste. Qualidade, áudio, legendas e velocidade, tudo ao vivo a um toque de distância.",
    subsections: [
      ["Controles básicos", "Toque uma vez para abrir os controles, toque duas vezes em um lado para avançar ou retroceder e pressione e segure para acelerar. Aperte para ampliar quando o vídeo tiver espaço de sobra."],
      ["Qualidade e áudio", "Fontes que oferecem diversas resoluções ou faixas de áudio as expõem em folhas que deslizam para cima sem interromper a reprodução. Sua escolha é lembrada pela série."],
      ["Legendas", "As faixas de legenda vêm da fonte ou de um arquivo fornecido por você. Eles são escolhidos e ajustados na folha de legendas, e sua aparência é definida uma vez nas configurações."],
      ["Episódios e estatísticas", "Um painel lateral lista cada episódio para que você possa navegar, e outro mostra o que o player está realmente fazendo com o stream quando algo parece errado."],
      ["Quando o jogador interno luta", "Um codec raro ou um fluxo quebrado pode ser entregue a um reprodutor externo, como mpv ou VLC. Essa é a alternativa confiável, não um sinal de que o episódio seja inutilizável."],
      ["Salvando seu lugar", "O progresso é gravado continuamente enquanto você assiste, portanto, fechar o aplicativo ou perder energia não perde sua posição."],
      ["Quando um vídeo não é reproduzido", "Um stream que se recusa a iniciar geralmente é um codec que o player interno não consegue controlar ou um link que expirou. Mude primeiro para um player externo, como mpv ou VLC, e depois atualize a extensão se todos os episódios dessa fonte falharem."],
    ],
    facts: [
      "A reprodução usa um decodificador acelerado por hardware por padrão.",
      "Os gestos controlam o brilho, o volume e a busca.",
      "O progresso é salvo continuamente, não apenas quando você sai.",
      "Um player externo é a alternativa para codecs não suportados.",
      "Entregar um stream teimoso a um player externo é uma alternativa confiável.",
    ]
  },
  "player-settings": {
    title: "Moldar o jogador de acordo com seus hábitos.",
    body: "As configurações do player decidem como o vídeo é decodificado, o que os gestos fazem e quais botões ficam no player. Mude-os uma vez e cada episódio se seguirá.",
    subsections: [
      ["Decodificação", "A decodificação de hardware é mais rápida e leve com a bateria e serve para quase tudo. Mude para software quando um arquivo específico for reproduzido mal, pois a decodificação de software perdoa mais codecs incomuns."],
      ["Gestos", "Decida qual deslizar faz o quê: vertical para brilho e volume, horizontal para busca. Cada direção pode ser invertida se parecer invertida para você."],
      ["Botões personalizados", "Adicione as ações que você mais utiliza, como pular uma introdução ou fazer uma captura de tela, diretamente na superfície do player para que não fiquem enterradas nos menus."],
      ["Reprodução avançada", "O tamanho do buffer, uma proporção forçada e picture-in-picture estão aqui para os raros casos em que o comportamento automático não é o que você deseja. A maioria das pessoas nunca precisa tocá-los."],
      ["Exceções por série", "Quase todas as configurações do jogador podem ser substituídas para uma única série sem alterar os padrões de todo o resto. Útil para um programa com áudio estranho."],
      ["Depois de um backup das configurações", "Botões personalizados e preferências do player viajam em seu arquivo de backup, portanto, a restauração em um novo dispositivo traz consigo o layout do player."],
    ],
    facts: [
      "A decodificação de hardware é o padrão e é adequada para a maioria dos arquivos.",
      "Cada direção do gesto pode ser invertida ou desativada.",
      "As configurações podem ser substituídas para uma única série.",
      "As preferências do jogador estão incluídas em um backup.",
    ]
  },
  subtitles: {
    title: "Tornando as legendas legíveis.",
    body: "As legendas vêm de três lugares: o stream, um arquivo no seu dispositivo ou uma fonte que as busca. Esta página aborda a escolha de uma faixa, o ajuste de seu tempo e o estilo daquelas que o próprio Watchtower desenha.",
    subsections: [
      ["Escolhendo uma faixa", "Quando um episódio contém várias faixas de legendas, elas são listadas na folha de legendas. Sua escolha é lembrada para aquela série, então você escolhe apenas uma vez."],
      ["Corrigindo o tempo", "Uma faixa que corre à frente ou atrás do áudio pode ser ajustada em pequenos passos até ficar alinhada. A compensação é lembrada, portanto a correção sobrevive ao reiniciar o aplicativo."],
      ["Estilo", "Fonte, tamanho, cor, contorno e fundo se aplicam às legendas de texto. Essas configurações não afetam o vídeo e são seguras para experimentar no meio do episódio."],
      ["Seus próprios arquivos", "Coloque um arquivo de legenda ao lado de um episódio local com um nome correspondente e o player o carrega automaticamente, sem nenhuma configuração a ser alterada."],
      ["Legendas inseridas na imagem", "Algumas legendas são imagens em vez de texto. Eles não podem ser reestilizados, apenas reposicionados ou redimensionados, pois o estilo faz parte da própria imagem."],
      ["Quando as legendas não aparecem", "Verifique primeiro a folha de legendas: a fonte pode não oferecer nenhuma, ou o nome do arquivo pode não corresponder ao episódio o suficiente para ser emparelhado."],
    ],
    facts: [
      "As legendas de texto podem ser reestilizadas; legendas de imagens não podem.",
      "As compensações de tempo são salvas e sobrevivem a uma reinicialização.",
      "Um arquivo correspondente ao lado de um episódio local é carregado sozinho.",
      "As escolhas de legendas são lembradas por série.",
    ]
  },
  reader: {
    title: "Lendo mangás, webtoons e novels.",
    body: "O leitor lida com mangás paginados, webtoons verticais e novelas de texto. Você define um padrão uma vez e o substitui nas séries que precisam de algo diferente.",
    subsections: [
      ["Escolhendo um modo de leitura", "O modo paginado é adequado para mangás impressos, e a faixa longa é adequada para webtoons desenhados como uma imagem alta. Defina um padrão e altere-o por série quando um título for melhor lido no sentido contrário."],
      ["Virando páginas", "Toque nas bordas para avançar ou retroceder, deslize para rolar em uma faixa longa e aperte para ampliar. Tocar no centro abre o menu sem sair da página."],
      ["Continuando de onde você parou", "Watchtower lembra a página que você acessou em cada capítulo, portanto, reabrir uma série leva você exatamente onde parou, e não no início."],
      ["Páginas largas e spreads", "As páginas espelhadas de duas páginas e as digitalizações excepcionalmente largas podem ser divididas, giradas ou dimensionadas para que não fiquem ilegíveis em um telefone."],
      ["Capítulos baixados", "Os capítulos que você baixou abrem instantaneamente e são marcados na lista de capítulos, o que torna a leitura offline prática."],
      ["Romances", "Os romances de texto usam a mesma entrada em sua biblioteca, mas abrem em um leitor de texto em vez de um visualizador de imagens, escolhido automaticamente no tipo de conteúdo da extensão."],
      ["Quando uma página não carrega", "Ocasionalmente, o aplicativo não consegue reconhecer uma imagem em um capítulo. Sair do leitor e reabrir o capítulo geralmente resolve o problema e, se persistir, a imagem em si está faltando na fonte e não no aplicativo."],
      ["Duas páginas de uma vez", "Um leitor de página dupla não está disponível, porque as digitalizações raramente concordam sobre onde ocorre a quebra de página. Ler uma página por vez ou usar tiras longas para webtoons é o comportamento atual."],
    ],
    facts: [
      "A faixa longa é adequada para webtoons verticais e ignora a largura da página.",
      "O leitor se lembra da página que você alcançou por capítulo.",
      "O zoom fica desativado em faixa longa até você ativá-lo.",
      "Os romances abrem em um leitor de texto, não em um leitor de imagens.",
      "Reabrir um capítulo corrige uma página que não foi carregada.",
    ]
  },
  "reader-settings": {
    title: "Configurando a leitura do jeito que você gosta.",
    body: "As configurações do leitor abrangem a direção da leitura, como as páginas são dimensionadas e cortadas e quais partes da tela viram a página.",
    subsections: [
      ["Leitura", "Defina o modo padrão, se as páginas serão animadas à medida que giram e quais capítulos serão ignorados. Os capítulos ignorados ainda estão lá, eles simplesmente não o interrompem."],
      ["Mostrar", "Bloqueio de rotação, cor de fundo e tela cheia convivem aqui. Um fundo escuro é adequado para leitura à noite e reduz o brilho entre as páginas."],
      ["Páginas", "Escolha como uma página preenche a tela: ajuste a largura, a altura, a tela inteira ou mostre-a no tamanho original. O corte de bordas apara as margens digitalizadas automaticamente."],
      ["Toque em zonas", "Escolha onde tocar para avançar a página, voltar e abrir o menu. Todo o layout pode ser espelhado para leitura com a mão esquerda."],
      ["Tira longa", "O preenchimento lateral e as zonas de toque separadas tornam os webtoons altos confortáveis ​​em uma tela ampla, onde uma imagem de largura total seria muito pequena."],
      ["Exceções por série", "Qualquer um deles pode ser substituído por uma série, o que é útil para um título que foi digitalizado de maneira incomum ou lido na outra direção."],
    ],
    facts: [
      "As opções de escala incluem ajustar largura, ajustar altura, ajustar tela e tamanho original.",
      "O corte de bordas remove as margens de digitalização para você.",
      "As zonas de toque podem ser espelhadas para leitura com a mão esquerda.",
      "As regras para ignorar podem ser substituídas por série.",
    ]
  },
  updates: {
    title: "Mantendo sua biblioteca atualizada.",
    body: "As atualizações verificam suas fontes em busca de novos capítulos e episódios. Bem feito, eles mantêm você atualizado. Feitos de forma descuidada, eles martelam uma fonte até bloquear todos.",
    subsections: [
      ["Atualização global", "É executado em toda a sua biblioteca e relata o que há de novo. Restrinja-o às categorias que você realmente segue, para que as séries lentas não sejam verificadas todos os dias à toa."],
      ["O que é ignorado", "Séries que você terminou, séries que você não iniciou e séries sem lançamentos esperados são ignoradas automaticamente. É isso que impede uma grande biblioteca de gerar uma enxurrada de solicitações."],
      ["Notificações", "Novos capítulos e episódios geram uma notificação, que você pode restringir a uma categoria ou silenciar totalmente sem desativar as atualizações."],
      ["Atualizando uma série", "Abra o menu da série e atualize-o quando quiser verificar imediatamente, sem atualizar todo o resto."],
      ["Por que isso é importante", "Uma fonte que recebe muitas solicitações pode bloquear todo o aplicativo com proteção anti-bot. Limitar as atualizações ao que você segue protege as fontes das quais todos dependem."],
      ["Se as atualizações parecerem parar", "A otimização da bateria do Android pode suspender o trabalho em segundo plano. Isente o Watchtower das restrições de bateria se as atualizações só chegarem quando você abrir o aplicativo."],
      ["Quando uma atualização relata um erro", "Uma atualização que falha em uma série geralmente é essa fonte e não o aplicativo. Atualize a série manualmente, atualize a extensão e lembre-se de que a limitação de taxa após uma grande execução de atualização desaparece com o tempo, e não com novas tentativas."],
    ],
    facts: [
      "As atualizações podem ser limitadas às categorias que você escolher.",
      "As séries concluídas são ignoradas por padrão.",
      "O tráfego pesado de atualização pode gerar uma fonte para bloquear o aplicativo.",
      "A otimização da bateria pode atrasar as atualizações em segundo plano.",
      "Uma atualização com falha em uma série aponta para essa fonte, não para o aplicativo.",
    ]
  },
  downloads: {
    title: "Colocando sua biblioteca offline.",
    body: "Os downloads salvam episódios e capítulos em seu dispositivo para que você possa assistir ou ler sem conexão. Eles vivem em uma fila com limites claros.",
    subsections: [
      ["Iniciando um download", "Adicione capítulos ou episódios de uma série e eles entrarão na fila de download. Na fila você pode reordenar o que vem a seguir ou cancelar algo que não deseja mais."],
      ["Por que um de cada vez", "Watchtower baixa uma série por vez de qualquer fonte. Disparar muitas solicitações em um site é exatamente o que aciona a proteção anti-bot que bloqueia as fontes."],
      ["Modo somente downloads", "Ative esta opção para ocultar tudo o que você não salvou. O aplicativo mostra apenas o que está no seu dispositivo, o que é útil em uma viagem ou em uma conexão medida."],
      ["Onde os arquivos são armazenados", "Os downloads vão para uma pasta com o nome da fonte e depois da série. Renomear qualquer uma das pastas interrompe a detecção, então deixe-as em paz."],
      ["Quando os downloads desaparecem", "Se o conteúdo salvo parar de aparecer, a pasta de armazenamento provavelmente foi movida ou ficou ilegível. Verifique o local de armazenamento e reconstrua o índice de downloads."],
      ["O que um backup não cobre", "Os arquivos de backup carregam sua biblioteca e configurações, nunca a mídia baixada. Eles devem ser movidos separadamente."],
      ["Quando um download falha parcialmente", "Um download interrompido geralmente é uma conexão interrompida ou uma fonte que parou de responder. Tente novamente na fila, pois os arquivos parciais são mantidos, e mude para Wi-Fi se a causa for a rede. Respostas 403 ou 429 persistentes significam que a fonte está recusando você, e não que o arquivo desapareceu."],
    ],
    facts: [
      "Apenas uma série por fonte é baixada por vez, propositalmente.",
      "A mídia baixada não é incluída em um backup.",
      "O armazenamento interno é mais rápido e confiável que um cartão SD.",
      "Renomear a pasta de downloads interrompe a detecção.",
      "Um download interrompido mantém seus arquivos parciais, portanto, uma nova tentativa o retoma.",
    ]
  },
  categories: {
    title: "Transformando uma longa biblioteca em algumas prateleiras.",
    body: "As categorias agrupam sua biblioteca por estado ou gosto e funcionam como controle para o que é atualizado e baixado automaticamente.",
    subsections: [
      ["Criando categorias", "Nomeie-os como fizer sentido para você e ordene-os como quiser. A maioria das pessoas acaba com um punhado com base na frequência com que seguem algo."],
      ["Colocando séries neles", "Pressione longamente uma série, escolha a opção de categoria e marque tudo o que se aplica. Uma série pode ficar em várias prateleiras ao mesmo tempo."],
      ["Usando-os para atualizações", "Aponte atualizações globais e downloads automáticos em categorias específicas. Somente as séries que você segue ativamente geram tráfego."],
      ["Tirando uma série", "Desmarque uma categoria no mesmo local em que a adicionou. A série fica na sua biblioteca, só sai daquela estante."],
      ["Nomeação que dura", "Nomeie as categorias de acordo com seus hábitos, e não de acordo com as fontes. Então, migrar uma série entre fontes nunca reorganiza sua biblioteca."],
      ["Mantendo tudo simples", "As categorias funcionam melhor quando há poucas delas. Se você não consegue se lembrar para que serve uma categoria, provavelmente ela está fazendo mais mal do que bem."],
    ],
    facts: [
      "Uma série pode pertencer a várias categorias ao mesmo tempo.",
      "A atualização global pode ser apontada para uma única categoria.",
      "Os downloads automáticos podem ser limitados às categorias escolhidas.",
      "Nomear categorias de acordo com as fontes envelhece mal.",
    ]
  },
  tracking: {
    title: "Gravando o que você assiste, automaticamente.",
    body: "O rastreamento conecta o Watchtower aos serviços que mantêm seu histórico. Você faz login uma vez e o progresso é registrado conforme você avança, em vez de ser digitado manualmente.",
    subsections: [
      ["Quais serviços são suportados", "MyAnimeList, AniList, Kitsu, MangaUpdates, Shikimori e Bangumi. Eles são todos configurados nas configurações de rastreamento e você pode conectar mais de um."],
      ["Fazendo login", "Abra as configurações de rastreamento e toque em um serviço para iniciar seu login. Kitsu é aquele que pede seu endereço de e-mail em vez de um nome de usuário, o que chama a atenção das pessoas."],
      ["Conectando uma série", "Abra uma série, acesse rastreamento e adicione o serviço. Watchtower procura o título para você e você pode editar os termos de pesquisa quando eles corresponderem à entrada errada."],
      ["Quanto conta como assistido", "Um limite percentual decide quando um episódio é marcado como visto. Defina-o alto o suficiente para que parar no meio não grave um episódio completo."],
      ["Uma direção apenas", "O progresso vai do Watchtower ao serviço. Editar sua lista no site não altera nada no aplicativo, então escolha um local para gerenciá-la."],
      ["Assistindo off-line", "O progresso que você faz sem conexão é colocado na fila e carregado na próxima vez que você estiver on-line, para que um voo não perca seu histórico."],
      ["Quando um login ou sincronização falha", "Um serviço que se recusa a fazer login geralmente é uma sessão expirada ou um captcha no próprio site do serviço, portanto, faça login uma vez no site do serviço e tente novamente. O progresso que não será sincronizado normalmente é colocado na fila em vez de perdido e é repetido quando a conexão retorna."],
      ["Combinando o título errado", "A correspondência automática pode escolher a entrada errada quando um título é ambíguo. Edite os termos de pesquisa para essa série na seção de rastreamento e selecione o resultado correto e, em seguida, confirme se o progresso realizado é o desejado."],
    ],
    facts: [
      "O rastreamento é configurado por série, não para toda a biblioteca.",
      "O progresso apenas flui para fora, nunca para dentro.",
      "Um limite decide quando um episódio conta como assistido.",
      "O progresso off-line é carregado quando você se reconecta.",
      "Uma falha no login geralmente é uma sessão expirada no próprio serviço.",
    ]
  },
  backups: {
    title: "Protegendo sua biblioteca antes que algo dê errado.",
    body: "Um backup é um arquivo que contém sua biblioteca, seu progresso e suas configurações. É também a única maneira de mover uma biblioteca entre dispositivos.",
    subsections: [
      ["Fazendo um", "Abra as configurações de dados e armazenamento, escolha criar um backup e salve-o em algum lugar que você possa acessar de outro dispositivo. Faça isso antes de qualquer atualização sobre a qual você não tenha certeza."],
      ["O que há dentro", "Cada série que você segue, as categorias em que elas se enquadram, até onde você chegou, seus links de rastreamento, seu histórico, suas extensões e todas as suas configurações."],
      ["O que fica de fora", "Arquivos baixados, capas personalizadas e histórico de séries que nunca foram adicionadas à biblioteca. Eles não podem ser recuperados de um backup."],
      ["Restaurando", "Importe o arquivo para o novo dispositivo, faça login novamente em seus rastreadores e reinstale suas extensões para que tudo possa ser vinculado novamente de forma limpa."],
      ["Backups automáticos", "Defina uma frequência para que sempre exista um backup recente sem você se lembrar. Esta é a melhor proteção contra uma atualização incorreta."],
      ["Mudando para um novo dispositivo", "Faça backup, instale no novo dispositivo, restaure, faça login nos rastreadores e reinstale as extensões. Os downloads devem ser copiados separadamente."],
      ["Quando uma restauração falha", "Uma restauração que para no meio geralmente é um arquivo de backup truncado ou desatualizado ou uma incompatibilidade de versão entre o backup e o aplicativo. Recrie o backup do dispositivo de origem, confirme o arquivo copiado completamente e restaure em um aplicativo que seja pelo menos tão novo quanto aquele que o criou."],
    ],
    facts: [
      "Um backup é a única maneira de mover uma biblioteca entre dispositivos.",
      "A mídia baixada deve ser movida separadamente.",
      "As capas personalizadas não fazem parte de um backup.",
      "Os backups automáticos são a defesa mais segura contra uma atualização incorreta.",
      "Uma restauração com falha geralmente é um arquivo de backup truncado ou desatualizado.",
    ]
  },
  storage: {
    title: "Onde Watchtower mantém seus arquivos.",
    body: "Backups, downloads e fontes locais residem em um único local de armazenamento. Escolhê-lo deliberadamente é o que evita que os downloads desapareçam mais tarde.",
    subsections: [
      ["O layout da pasta", "Tudo fica em uma pasta que você escolhe: backups automáticos, capítulos e episódios baixados, seu mangá local, seu anime local e configuração para players externos. Conhecer o layout é o que facilita a localização de um arquivo perdido."],
      ["Escolhendo um local", "Escolha uma pasta que você ainda poderá acessar em um ano. Evite a raiz de um volume de armazenamento e evite mover arquivos do aplicativo posteriormente."],
      ["Permissões do Android", "O Android moderno mantém os aplicativos dentro de seus próprios diretórios. Conceda ao Watchtower acesso à pasta de armazenamento que você escolheu, ou os downloads e fontes locais falharão silenciosamente."],
      ["Depois de mover os arquivos para", "Mova os arquivos de fora do aplicativo e atualize-os, para que o Watchtower verifique novamente as pastas. Caso contrário, o novo conteúdo permanecerá invisível até que algo acione uma verificação."],
      ["Mantendo a galeria limpa", "Um arquivo .nomedia na pasta de downloads mantém capas e episódios fora da galeria de fotos do seu telefone."],
      ["Por que o armazenamento interno é melhor", "Os downloads no armazenamento interno são mais rápidos e têm muito menos probabilidade de se tornarem ilegíveis do que em um cartão removível, que pode ser desmontado ou corrompido."],
      ["Quando o aplicativo não consegue acessar a pasta", "Erros de permissão e downloads que desaparecem vêm da pasta de armazenamento que foi movida ou se tornou ilegível. Confirme se o aplicativo ainda tem acesso, verifique o espaço livre e prefira o armazenamento interno em vez de um cartão removível que pode ser desmontado."],
    ],
    facts: [
      "Backups, downloads e fontes locais compartilham um local de armazenamento.",
      "O Android precisa de permissão explícita para essa pasta.",
      "Um arquivo .nomedia oculta a mídia baixada da galeria.",
      "O armazenamento interno é mais confiável que um cartão SD.",
      "Uma pasta de armazenamento movida ou ilegível oculta downloads e backups.",
    ]
  },
  settings: {
    title: "As configurações que alteram o comportamento do aplicativo.",
    body: "Além das opções de cada recurso, várias configurações em todo o aplicativo afetam as atualizações, a privacidade, a instalação e como você se recupera quando algo dá errado.",
    subsections: [
      ["Em geral", "Tema, linguagem da interface e como a biblioteca se comporta por padrão. Eles se aplicam a todos os lugares ao mesmo tempo, portanto, são o primeiro lugar a procurar quando o aplicativo não parece ser seu."],
      ["Privacidade", "Ocultar a tela no alternador de aplicativos mantém sua biblioteca sem miniaturas e o modo de navegação anônima interrompe a gravação do histórico enquanto você navega. A navegação anônima esconde o que você olhou, não o quão longe você chegou."],
      ["Rede", "O DNS criptografado pode superar alguns bloqueios básicos e vale a pena tentar quando uma fonte não carrega em uma rede, mas funciona em outra. Um proxy faz o mesmo trabalho para toda uma rede."],
      ["Instalando extensões", "O Android normalmente bloqueia instalações de fora de uma loja. Conceder essa permissão é o que permite a instalação de extensões, e Shizuku é uma alternativa para dispositivos que tornam isso estranho."],
      ["Diagnóstico", "Logs de falhas, captura de logcat e reconstrução de índice estão disponíveis aqui. É aqui que você vai quando algo se comporta mal e você quer evidências em vez de suposições."],
      ["Antes de relatar um problema", "Anote a versão do seu aplicativo, a fonte que falhou e o que a tela mostrou. Isso transforma um relatório vago em algo que pode realmente ser corrigido."],
      ["Redefinindo um estado travado", "Limpar o cache, limpar cookies e dados da web e reconstruir os índices corrigem, cada um, uma classe diferente de problema. O cache limpa os dados desatualizados da página, os cookies limpam uma verificação travada e uma reconstrução do índice verifica novamente a pasta de armazenamento. Limpar o banco de dados remove séries que não estão em sua biblioteca, o que é a solução usual para uma capa local em branco."],
      ["Um último recurso que mantém seus dados", "Se nada mais funcionar, faça um novo backup, reinstale o aplicativo e restaure-o. Isso mantém sua biblioteca e configurações enquanto substitui qualquer coisa corrompida na própria instalação."],
    ],
    facts: [
      "A configuração de privacidade do alternador de aplicativos deve estar desativada para fazer capturas de tela.",
      "O modo anônimo interrompe a gravação do histórico, não o progresso.",
      "Os registros de falhas permanecem no seu dispositivo e nunca são enviados automaticamente.",
      "O DNS criptografado geralmente corrige uma fonte que falha em apenas uma rede.",
      "Cache, cookies e índices corrigem, cada um, uma classe diferente de problema.",
      "Faça backup antes de reinstalar e restaure para manter sua biblioteca.",
    ]
  },
  "extension-runtime": {
    title: "Como as extensões são executadas e com que segurança.",
    body: "As extensões são JavaScript e o Watchtower as executa em uma sandbox que fornece a rede e nada mais. Esta página explica o que isso significa para você.",
    subsections: [
      ["O que executa suas extensões", "Watchtower usa um pequeno mecanismo JavaScript incorporado no aplicativo. É o mesmo mecanismo em todas as plataformas, e é por isso que uma fonte se comporta de forma idêntica em um telefone e em um servidor."],
      ["O que uma extensão pode fazer", "Ele pode fazer solicitações na web, analisar as páginas que recebe e manter algumas de suas próprias configurações. Essa é toda a caixa de ferramentas."],
      ["Do que é mantido longe", "Seus arquivos, sua biblioteca, suas contas e as próprias telas do aplicativo. Tudo o que uma extensão produz é devolvido como dados simples para o aplicativo renderizar."],
      ["Por que uma fonte lenta se arrasta", "Uma fonte que responde lentamente torna suas próprias telas lentas, porque o aplicativo espera por ela. Outras fontes não são afetadas, portanto, a lentidão é um sinal de uma fonte ruim, não de um aplicativo pesado."],
      ["O que isso significa para a confiança", "A sandbox limita o que uma extensão pode quebrar, mas não julga a intenção. Ele ainda pode ver tudo o que você digita e tudo o que ele busca. Instale de pessoas em quem você confia."],
      ["O mesmo motor em todos os lugares", "Como o aplicativo e a linha de comando do Linux compartilham esse tempo de execução, uma extensão que funciona no seu telefone também funciona em um servidor, sem alterações."],
    ],
    facts: [
      "As extensões obtêm acesso à rede e análise de páginas, nada mais.",
      "Eles não podem ler seus arquivos ou sua biblioteca diretamente.",
      "Uma fonte lenta apenas retarda suas próprias telas.",
      "O mesmo sandbox é executado em dispositivos móveis, desktop e linha de comando.",
    ]
  },
  "extension-contract": {
    title: "O que uma fonte tem a fornecer.",
    body: "Para que uma extensão funcione, ela deve responder a um conjunto fixo de perguntas: o que é popular, o que é novo, o que uma pesquisa retorna, o que uma série contém e onde estão suas páginas e fluxos.",
    subsections: [
      ["Listagem e pesquisa", "Essas chamadas retornam as listas navegáveis: o que é popular, o que foi lançado recentemente e o que aparece na pesquisa por um termo. Eles são o mínimo para que uma fonte seja utilizável."],
      ["Séries e capítulos", "Uma chamada preenche os detalhes de uma série e outra retorna seus capítulos ou episódios ordenados. Sem estes, uma fonte pode ser pesquisada, mas não aberta."],
      ["Páginas e vídeo", "Para leitura, uma chamada retorna os endereços das imagens de um capítulo. Para vídeo, uma chamada retorna os streams disponíveis junto com a qualidade e os cabeçalhos necessários."],
      ["Extras opcionais", "Filtros, configurações específicas da fonte e tratamento personalizado de imagens são opcionais. Uma fonte sem eles ainda funciona; simplesmente oferece menos para configurar."],
      ["Por que o tipo de conteúdo é importante", "O tipo declarado por uma extensão decide se um resultado será aberto no leitor de mangá, no player de vídeo ou no leitor de romance. Errar envia o conteúdo para a tela errada."],
      ["O que não é necessário", "Tudo além da listagem e da pesquisa é um bônus. Uma fonte mínima que apenas lista e pesquisa é uma fonte perfeitamente boa."],
    ],
    facts: [
      "A listagem e a pesquisa por si só já constituem uma fonte navegável.",
      "Detalhes e chamadas de capítulo são o que permitem a abertura de uma série.",
      "Filtros e configurações de origem são opcionais.",
      "O tipo de conteúdo decide qual leitor ou player abre.",
    ]
  },
  "ui-schema": {
    title: "Permitir que uma fonte crie sua própria tela inicial.",
    body: "Algumas fontes apresentam uma página inicial rica: banners, fileiras de capas, um bloco de destaque. Em vez de escrever o código do aplicativo para cada um, uma extensão pode descrever o próprio layout.",
    subsections: [
      ["Para que serve", "Uma fonte pode descrever sua tela inicial como dados: linhas, cartões e banners, cada um apontando para o conteúdo fornecido pela fonte. O aplicativo desenha com seus widgets normais."],
      ["Por que é uma boa ideia", "Isso significa que um novo site pode ter uma página inicial personalizada sem o lançamento de um novo aplicativo, e a página ainda parece nativa, em vez de uma página da web em uma caixa."],
      ["O que pode ser descrito", "Listas, linhas, cartões, banners e blocos de texto são os blocos de construção. Isso cobre o layout de quase todas as telas iniciais de origem na prática."],
      ["Quando uma fonte não tem nenhuma", "Se uma extensão não descreve um layout, Watchtower cria um a partir das listagens da fonte. Nada quebra; a página é simplesmente mais simples."],
      ["O que não pode fazer", "A descrição são dados, não código. Ele não pode executar a lógica, acessar seus arquivos ou alterar o comportamento do próprio aplicativo, e é exatamente por isso que é seguro aceitá-lo."],
      ["Para pessoas que escrevem fontes", "Pense nisso como um arquivo de layout e não como um programa. Você está dizendo ao aplicativo o que mostrar, não como desenhar."],
    ],
    facts: [
      "Uma fonte pode descrever sua própria tela inicial como dados.",
      "Blocos de construção desconhecidos são ignorados em vez de quebrar a página.",
      "Um layout padrão é usado quando uma fonte não fornece nenhum.",
      "A descrição não pode executar código ou acessar seus arquivos.",
    ]
  },
  api: {
    title: "Dirigindo Watchtower de outro programa.",
    body: "O aplicativo pode abrir um pequeno servidor web em sua própria máquina, o que permite que scripts, players externos e outros dispositivos usem as mesmas fontes que o aplicativo.",
    subsections: [
      ["O que é isso", "Um pequeno servidor web integrado ao aplicativo. Ele usa as mesmas extensões e a mesma biblioteca da interface, portanto, tudo o que ele retorna corresponde ao que você vê na tela."],
      ["Ligando", "Está desligado até que você o habilite, deliberadamente. Ligue-o nas configurações avançadas, anote a porta e aponte sua ferramenta para esse endereço."],
      ["O que você pode perguntar", "Suas fontes instaladas, suas entradas de biblioteca, uma pesquisa em qualquer fonte e um fluxo de vídeo resolvido. Isso é suficiente para acionar um media center ou um player externo."],
      ["Por que você pode querer isso", "Automação, um front-end diferente ou permitir que outro dispositivo da sua rede use as fontes que seu telefone já configurou."],
      ["Mantenha-o em sua própria rede", "O servidor não possui senha e destina-se a uma rede local confiável. Não o exponha à internet, onde qualquer pessoa poderia ler sua biblioteca."],
      ["Como isso se relaciona com a linha de comando", "A linha de comando do Linux expõe o mesmo servidor, portanto, um script escrito no aplicativo funciona em uma máquina headless sem alterações."],
    ],
    facts: [
      "O servidor fica desligado até que você o habilite nas configurações.",
      "Ele escuta na porta 4567 por padrão.",
      "Ele usa as mesmas fontes e biblioteca da interface.",
      "Destina-se a uma rede local confiável, não à Internet.",
    ]
  },
  cli: {
    title: "Executando Watchtower sem tela.",
    body: "A linha de comando do Linux executa o mesmo mecanismo do aplicativo, para que um servidor ou um trabalho agendado possa buscar, pesquisar e fazer download sem que ninguém observe.",
    subsections: [
      ["Para que serve", "Servidores, sessões SSH e trabalhos automatizados. É o mesmo mecanismo de extensão do aplicativo com uma interface de texto em vez de telas, portanto não precisa de sessão gráfica."],
      ["Orientando-se", "Comece com o comando help e, em seguida, execute o comando doctor para confirmar se o tempo de execução pode carregar e alcançar tudo o que precisa antes de confiar nele para um trabalho."],
      ["Trabalhando com extensões", "Liste o que um repositório oferece, valide-o e teste uma fonte no site ativo. O teste é executado em etapas, desde o simples carregamento do código-fonte até o exercício de sua pesquisa e chamadas detalhadas."],
      ["Ligar diretamente para uma fonte", "Você pode invocar uma única operação, como uma pesquisa, e recuperar o JSON. É isso que torna a linha de comando útil para scripts e para depuração de uma fonte."],
      ["Servindo pela rede", "Ele pode iniciar o mesmo servidor web que o aplicativo expõe, que é como um cliente remoto se comunica com uma máquina sem cabeça."],
      ["O que ainda não faz", "Os comandos de biblioteca, histórico e fila de download não estão disponíveis sem comando, porque a linha de comando não abre os bancos de dados locais do aplicativo. Eles ainda precisam do aplicativo."],
    ],
    facts: [
      "A linha de comando reutiliza o mecanismo de extensão do aplicativo.",
      "O comando doctor verifica o tempo de execução antes de você confiar nele.",
      "Uma fonte pode ser testada em etapas, desde o carregamento até a pesquisa.",
      "Os comandos de biblioteca e download ainda exigem o aplicativo.",
    ]
  },
  deployment: {
    title: "Executando Watchtower em seu próprio servidor.",
    body: "Para um servidor doméstico ou um pequeno grupo, a linha de comando do Linux pode ser executada continuamente e servir as mesmas fontes para todos os clientes da sua rede.",
    subsections: [
      ["O que você ganha", "Uma única pasta contendo a linha de comando e os arquivos de tempo de execução necessários. O script do instalador o copia em um prefixo escolhido e o configura para execução."],
      ["Instalando", "Execute o instalador com a pasta que você descompactou e o prefixo desejado. Usar um prefixo em seu diretório inicial evita a necessidade de root para tudo posteriormente."],
      ["Executando-o como um serviço", "Como ele pode servir por HTTP, você pode mantê-lo funcionando em segundo plano e permitir que outros dispositivos na sua rede usem as fontes que ele configurou."],
      ["Para que serve", "Um centro de mídia, um downloader programado ou uma máquina que contém as fontes para que os outros não precisem fazer isso. É o mesmo mecanismo, portanto as fontes se comportam de forma idêntica."],
      ["Mantendo-o atualizado", "Atualize-o descompactando uma versão mais recente e executando o instalador novamente. Sua configuração reside no prefixo e não é substituída por uma atualização."],
      ["Se algo não funcionar", "O comando médico existe exatamente para isso. Execute-o primeiro e ele lhe dirá se o problema é o tempo de execução, a rede ou a fonte."],
    ],
    facts: [
      "A compilação headless é uma pasta independente mais um instalador.",
      "A instalação em seu diretório inicial evita a necessidade de root.",
      "Ele pode servir via HTTP para outros dispositivos na sua rede.",
      "O comando doctor diagnostica a maioria das falhas de inicialização.",
    ]
  },
  troubleshooting: {
    title: "Quando algo não está funcionando.",
    body: "Quase todo problema é uma de algumas coisas: uma fonte que foi alterada, um bloqueio de um site, uma permissão ausente ou uma extensão que precisa ser atualizada. Trabalhe nessa ordem.",
    subsections: [
      ["Comece restringindo", "Antes de alterar qualquer configuração, decida se o problema é a fonte, sua rede ou seu dispositivo. Uma fonte falha enquanto outras apontam para essa fonte; tudo falha no aplicativo ou na conexão."],
      ["Atualize tudo primeiro", "Atualize seus repositórios e instale quaisquer atualizações de extensão e, em seguida, verifique se há uma atualização de aplicativo. Uma grande parte das quebras repentinas é um site que mudou e uma extensão que já foi corrigida, mas ainda não instalada."],
      ["Uma fonte parou de funcionar", "Este é o problema mais comum e geralmente o menos sério. O site mudou, a extensão precisa de uma atualização e atualizar seu repositório é a solução. Se ainda não existir nenhuma atualização, o autor da extensão não a atualizou."],
      ["Nada carrega", "Se todas as fontes falharem, observe a rede. Experimente dados móveis, outra rede Wi-Fi e DNS criptografado nas configurações. Uma única rede bloqueando tudo ou um portal cativo ao qual não foi feito login é uma causa frequente."],
      ["Abrindo um site para passar em um cheque", "Alguns sites fazem uma verificação antes de responder. Abra o código-fonte em Navegar e use o navegador integrado para carregar a página do próprio site, conclua qualquer verificação manualmente, feche-o e retorne ao aplicativo. Fazer isso uma vez geralmente limpa o bloqueio dessa fonte."],
      ["Cloudflare e recarga infinita", "Um site por trás do Cloudflare pode continuar recarregando seu cheque em vez de deixar você passar. Tente abrir o site no navegador integrado novamente, alterando seu agente de usuário nas configurações avançadas ou aguardando que o site diminua sua proteção. Algumas fontes são deliberadamente difíceis de usar em um aplicativo."],
      ["Limpando cookies e dados da web", "Isso redefine o estado de navegação armazenado do aplicativo, incluindo todos os logins. É a solução correta para uma verificação travada e vale a pena fazer isso antes de decidir que uma fonte está morta. Você precisará fazer login novamente se a fonte precisar de uma conta."],
      ["Alterando seu agente de usuário", "O agente do usuário é a string que identifica seu dispositivo em um site, e alguns sites o tratam como um sinal de bot. Substituir o padrão por uma string comum do navegador e, em seguida, reiniciar o aplicativo, às vezes passa por uma verificação que, de outra forma, seria executada."],
      ["Uma extensão não será instalada", "O Android bloqueia instalações fora de uma loja por padrão. Permita-o para o seu gerenciador de arquivos ou navegador e, se essa opção estiver faltando, use o Shizuku como rota alternativa. Um download que parou parcialmente produz uma mensagem diferente, então reinstale do zero."],
      ["O conteúdo abre no lugar errado", "Se um mangá abrir no player de vídeo ou um episódio no leitor, a extensão declara o tipo de conteúdo errado. Isso é uma falha na extensão, não nas suas configurações, então relate-a em vez de tentar corrigi-la localmente."],
      ["Obtendo logs de falhas e mais detalhes", "As configurações avançadas podem despejar logs de falhas, e uma captura de logcat do seu dispositivo mostra o que o aplicativo estava fazendo com mais detalhes. Vale a pena anexar ambos quando você relata um problema, pois transformam uma descrição vaga em algo que pode ser rastreado."],
      ["Armazenamento e leitura lenta ou lenta", "O carregamento lento geralmente é o site, sua conexão ou um limite de taxa, e não o aplicativo. A leitura lenta vem de imagens grandes em um capítulo. Trocar de fonte, liberar memória ou aguardar um limite de taxa são as soluções práticas."],
      ["Quando não é só você", "Se outras pessoas virem a mesma falha, é a extensão ou o aplicativo, e não a sua configuração. Verifique a fonte no rastreador de problemas do projeto antes de abrir um novo relatório e inclua a versão do seu aplicativo e o texto exato do erro."],
    ],
    facts: [
      "Uma fonte quebrada quase sempre é a fonte, não o aplicativo.",
      "Uma extensão obsoleta é a causa mais comum de quebra repentina.",
      "Se todas as fontes falharem, suspeite da rede antes do aplicativo.",
      "Abrir um site no navegador integrado elimina muitas verificações.",
      "A limpeza de cookies e dados da web redefine uma verificação travada e todos os logins.",
      "Os registros de falhas e o logcat tornam um relatório de bug rastreável.",
    ]
  },
  errors: {
    title: "Cada mensagem de erro e o que isso significa.",
    body: "Watchtower mostra o erro bruto em vez de ocultá-lo, portanto a mensagem em si é a pista mais rápida que você tem. Encontre o seu abaixo e tente a primeira correção antes de alterar qualquer outra coisa.",
    subsections: [
      ["403 Proibido", "O site decidiu que sua solicitação parece automatizada e a recusa. Na prática, esta é uma proteção anti-bot. Atualize a extensão primeiro e, em seguida, abra o código-fonte no navegador integrado uma vez para limpar qualquer verificação que o site esteja realizando. Se ainda assim recusar, a fonte pode ter aumentado a sua proteção ou bloqueado o seu endereço."],
      ["404 Não encontrado", "A página que a extensão esperava foi movida ou removida. Esta é uma extensão obsoleta quase sempre, então atualize seu repositório e atualize-o. Se ainda não houver atualização, o autor da extensão não alcançou o site."],
      ["429 Muitas solicitações", "Sua taxa foi limitada por fazer solicitações muito rapidamente. Esperar é a solução real, e reduzir a frequência com que as atualizações e downloads são executados é o que impede sua recorrência. Tentar novamente imediatamente apenas estende o bloqueio."],
      ["500, 502 e outros erros 5xx", "O próprio site está falhando. Não há nada para consertar no seu dispositivo, e a atitude certa é esperar e tentar novamente mais tarde. Verificar o site em um navegador confirma se ele está fora do ar para todos."],
      ["1006 e 1020, os códigos de firewall", "1006 geralmente significa uma proibição temporária de IP e 1020 significa uma regra de firewall definida pelo proprietário do site, geralmente para bloquear visitantes de fora de seu país. Mudar de rede pode ajudar com 1006; 1020 geralmente não pode ser contornado."],
      ["Falha ao ignorar Cloudflare", "O site é protegido pela Cloudflare e a verificação automática não foi cancelada. Abra a página da fonte no navegador integrado, conclua qualquer verificação manualmente e retorne ao aplicativo. Se a página for recarregada indefinidamente, consulte a página de solução de problemas."],
      ["Não foi possível resolver o host, falha na conexão, tempo limite", "Estes são problemas de rede e não falhas na fonte. Verifique se o dispositivo tem acesso à Internet, tente outra rede ou dados móveis e ative o DNS criptografado nas configurações. Um portal Wi-Fi cativo é uma causa comum."],
      ["Falha na validação do certificado", "O certificado de segurança do site não pôde ser validado. Verifique se a data e a hora do dispositivo estão corretas, limpe o cache e os cookies do aplicativo e tente uma rede diferente. Um certificado expirado no site não é algo que você possa consertar."],
      ["Erros de armazenamento e cartão SD", "Mensagens sobre um cartão, caminho ou pasta indisponível significam que o local do download foi movido ou tornou-se ilegível. Verifique o espaço livre, confirme se o aplicativo ainda tem permissão para essa pasta e volte para o armazenamento interno se o cartão continuar falhando."],
      ["O aplicativo ou extensão não será instalado", "Um APK assinado por outra pessoa, um download truncado e a arquitetura de processador errada produzem, cada um, uma mensagem diferente do instalador. Remova a cópia conflitante e baixe o arquivo novamente e certifique-se de que o Android tenha permissão para instalar aplicativos desconhecidos."],
      ["Quando o erro não está listado aqui", "Copie a mensagem exata em vez de parafraseá-la. O nome da operação e o URL dentro dela geralmente apontam diretamente para a etapa com falha, e a página de solução de problemas ajuda a restringi-la."],
    ],
    facts: [
      "403 e 429 significam que o site está recusando você, por motivos diferentes.",
      "Um 404 é quase sempre uma extensão que precisa de atualização.",
      "Um erro 5xx é culpa do site, não do seu dispositivo.",
      "1006 é uma proibição temporária; 1020 é uma regra de firewall que você não pode ignorar.",
      "Copie a mensagem exata: o URL dentro dela nomeia a etapa com falha.",
      "Incompatibilidades de assinatura significam que uma cópia assinada de forma diferente está instalada.",
    ]
  },
  faq: {
    title: "Perguntas que surgem com frequência.",
    body: "Respostas curtas às perguntas que as pessoas perguntam antes e depois de instalar o Watchtower, agrupadas por parte do aplicativo em que tocam.",
    subsections: [
      ["Por que não está em uma loja de aplicativos?", "Porque o Watchtower instala extensões em tempo de execução, o que as políticas de armazenamento não permitem. É também por isso que cada instalação vem de um APK em que você confia."],
      ["Existe uma versão iOS?", "O código subjacente é multiplataforma, mas o envio no iOS é limitado pelas regras da plataforma e não é prometido. Android é a plataforma que recebe tudo primeiro."],
      ["Funciona sem internet?", "Tudo o que você baixou, além dos arquivos locais, funciona totalmente offline. Navegar nas fontes e pesquisar não, porque elas próprias precisam dos sites."],
      ["Posso sincronizar entre dispositivos?", "Não há sincronização automática. Você move sua biblioteca com um arquivo de backup e a mídia baixada deve ser copiada separadamente."],
      ["É legal e é gratuito?", "Watchtower é gratuito e de código aberto e não contém conteúdo próprio. O que você adiciona por meio de extensões é de sua responsabilidade, e é por isso que o aplicativo tem o cuidado de dizer que não as examina."],
      ["Por que não consigo ver uma fonte instalada?", "Dois filtros ocultam as fontes sem excluí-las. Se a extensão servir um idioma diferente do seu dispositivo, ative esse idioma no filtro da lista de fontes. Se for uma fonte adulta, habilite a opção que mostra as fontes NSFW na lista."],
      ["Como faço para desinstalar uma extensão?", "Desinstale-o na tela de extensões ou como qualquer outro aplicativo nas configurações do Android. As entradas da sua biblioteca permanecem inalteradas e simplesmente aparecem como indisponíveis até que outra fonte possa servi-las."],
      ["Por que meus downloads não estão aparecendo?", "Os downloads são detectados por pasta. Se o local de armazenamento foi movido, o cartão SD foi removido ou a fonte ou série foi renomeada no site, o aplicativo não poderá corresponder à pasta. Corrija o local ou renomeie a pasta para corresponder e reconstrua o índice de downloads."],
      ["Por que minha galeria de fotos mostra capas e episódios?", "O aplicativo normalmente oculta sua mídia da galeria do sistema com um arquivo .nomedia. Caso contrário, crie um você mesmo e solte-o na pasta de downloads ou na pasta de origem local, se for isso que vazou."],
      ["Por que a leitura ou o carregamento estão lentos?", "O carregamento lento é o site, sua conexão ou um limite de taxa, e não o peso do aplicativo. A leitura lenta vem de imagens grandes em um capítulo, então libere memória ou escolha uma fonte com digitalizações menores."],
      ["Por que alguns episódios não são exibidos?", "Além de problemas de rede, o aplicativo pode ocasionalmente não perceber a existência de um vídeo. Sair do player e abrir o episódio novamente geralmente registra isso."],
      ["Por que uma atualização de biblioteca está ignorando entradas?", "Entradas com conteúdo não assistido ou não lido, entradas que você não iniciou, entradas marcadas como concluídas e entradas sem lançamentos esperados são ignoradas propositalmente. Isso evita que uma grande biblioteca martele as fontes e bloqueie o aplicativo."],
      ["Por que as atualizações da biblioteca param em segundo plano?", "Algumas versões do Android economizam bateria de forma agressiva e suspendem o trabalho em segundo plano. Isentar o Watchtower da otimização da bateria se as atualizações só chegarem quando você abrir o aplicativo."],
      ["Por que a captura de tela está bloqueada?", "A configuração de privacidade que oculta o aplicativo no alternador de tarefas também bloqueia capturas de tela. Desative essa configuração se quiser capturar a tela."],
      ["Algo está quebrado, e agora?", "Atualize suas extensões primeiro, pois isso corrige a maioria das falhas. Se persistir, verifique a página de erros para ver a mensagem exata que você está vendo e, em seguida, a página de solução de problemas, antes de presumir que o aplicativo é o culpado."],
    ],
    facts: [
      "Watchtower não é distribuído em lojas de aplicativos.",
      "O conteúdo baixado e os arquivos locais funcionam totalmente offline.",
      "Não há sincronização automática entre dispositivos.",
      "Uma fonte oculta geralmente é o filtro de idioma ou a alternância NSFW.",
      "Os downloads são correspondidos pelo nome da pasta, portanto, renomear um deles o oculta.",
      "Atualizar extensões corrige a maioria das falhas repentinas.",
    ]
  },
  contribute: {
    title: "Ajudando a tornar o Watchtower melhor.",
    body: "O aplicativo, as extensões e esta documentação estão todos abertos. Existe um trabalho útil para pessoas que escrevem código e para pessoas que não o fazem.",
    subsections: [
      ["Maneiras de ajudar", "Relate bugs com a mensagem exata que você viu, melhore uma fonte, escreva uma extensão para um site que ninguém cobriu ou traduza esse site para outro idioma."],
      ["Trabalhando no aplicativo", "Clone o repositório, instale as cadeias de ferramentas Flutter e Rust e execute o analisador antes de abrir uma solicitação pull. Go só é necessário se você estiver alterando o servidor de torrent."],
      ["Trabalhando na documentação", "O site é seu próprio repositório. Adicionar um idioma significa adicionar um arquivo de tradução; o layout e a navegação já cuidam do resto."],
      ["Traduzindo", "O aplicativo e este site vêm em vários idiomas, e um novo é aditivo. Você nunca precisa tocar no design para adicionar seu próprio idioma."],
      ["Relatando um bom bug", "Inclua a versão do seu aplicativo, a fonte que você estava usando, o texto exato do erro e se outras fontes ainda funcionam. Isso geralmente é suficiente para localizar a falha."],
      ["Antes de uma grande mudança", "Abra um problema ou pergunte no Discord primeiro. Isso evita que você construa algo que não se ajusta ao rumo do projeto."],
    ],
    facts: [
      "A documentação é um repositório separado do aplicativo.",
      "Adicionar um idioma significa adicionar um arquivo, não alterar o layout.",
      "Relatar o texto exato do erro economiza muito tempo.",
      "A ferrugem é necessária para o funcionamento do aplicativo; Vá apenas para o servidor torrent.",
    ]
  },

  history: {
    title: "Tudo que você já abriu.",
    body: "O histórico registra o que você assistiu e leu, para que você possa voltar para algo que não terminou sem procurá-lo novamente.",
    subsections: [
      ["O que registra", "Abrir um episódio ou capítulo adiciona uma entrada com o tempo e o quão longe você chegou. O histórico é um registro de atividades, não uma segunda biblioteca, por isso ele é preenchido sozinho conforme você usa o aplicativo."],
      ["Filtrando e classificando", "Limite a lista para hoje, esta semana ou este mês, alterne entre uma lista e uma grade e classifique por data ou título. Isso muda o que é mostrado e nada mais."],
      ["Voltando a uma série", "Toque em uma entrada para reabrir a série onde você a deixou. A história é o caminho mais rápido de volta a algo que você experimentou uma vez e deixou de lado."],
      ["Incógnito e privacidade", "Enquanto o modo de navegação anônima está ativado, nada de novo é registrado, portanto, nada que você abre aparece no histórico. Desligá-lo retoma a gravação a partir desse ponto."],
      ["Limpando histórico", "Você pode limpar o histórico sem tocar na sua biblioteca ou no progresso salvo. Apagá-lo apenas remove o registro do que você abriu."],
      ["Quando a história parece errada", "Uma entrada exibida como não assistida geralmente significa que a fonte alterou o endereço do episódio, portanto, o aplicativo o trata como novo. Remover a entrada perdida e atualizar a série a arruma."],
    ],
    facts: [
      "O histórico registra atividades, ele não substitui sua biblioteca.",
      "Os filtros restringem a visualização sem excluir nada.",
      "O modo de navegação anônima impede que um novo histórico seja escrito.",
      "Limpar o histórico deixa seu progresso intacto.",
    ]
  },

  calendar: {
    title: "O que será lançado e quando.",
    body: "O calendário mostra os próximos capítulos e episódios da sua biblioteca, para que você possa ver rapidamente o que está previsto para hoje e o que está por vir.",
    subsections: [
      ["A visualização do mês", "Os dias com lançamentos são marcados e tocar em um dia salta para a lista dessa data. Ele responde o que saiu esta semana sem abrir uma única série."],
      ["A programação semanal", "A programação apresenta uma semana com a capa de cada lançamento futuro, que pode ser lida melhor do que uma densa grade mensal em um telefone."],
      ["Filtrando por status", "Mostre apenas os status de seu interesse, para que as séries concluídas e pausadas não sobrecarreguem a visualização que você usa para planejar a semana."],
      ["O que as datas significam", "Uma data é quando a fonte disse pela última vez que algo é esperado, não uma promessa. Fontes que não publicam datas simplesmente não aparecem."],
      ["Indicando entradas assistidas", "Uma opção marca o que você já viu na programação, de modo que a visualização semanal também funciona como uma lista de verificação."],
      ["Quando o calendário está vazio", "Um calendário vazio geralmente significa que as fontes que você segue não publicam datas de lançamento. Esse é um limite da fonte, não uma falha do aplicativo."],
    ],
    facts: [
      "As datas de lançamento vêm das fontes, não do aplicativo.",
      "A programação pode ser filtrada por status da série.",
      "Uma opção marca as entradas que você já assistiu.",
      "Uma fonte sem datas não aparecerá.",
    ]
  },

  "mass-migration": {
    title: "Movendo muitas séries ao mesmo tempo.",
    body: "Quando uma fonte morre, a migração em massa move um grupo inteiro de entradas da biblioteca para uma fonte funcional de uma só vez, em vez de editá-las uma por uma.",
    subsections: [
      ["Quando usar", "Uma fonte que parou de funcionar, ou da qual você deseja se afastar, é o caso da migração em massa. A migração mantém seu progresso e suas categorias."],
      ["Escolhendo origem e destino", "Escolha o grupo de entradas para mover e a fonte para onde movê-las. O aplicativo pesquisa o destino de cada título por conta própria."],
      ["Revendo as partidas", "Cada partida é mostrada antes de qualquer mudança, então você pode aceitar as boas e pular as erradas. A correspondência por título nunca é perfeita."],
      ["Aplicando a mudança", "A aplicação reescreve cada entrada para apontar para a nova fonte e transmite seu progresso. Séries sem correspondência ficam intocadas."],
      ["Lendo o resumo", "A execução termina com a contagem do que foi movido, do que foi ignorado e do que falhou. Um item com falha geralmente é um título que o destino não carrega."],
      ["Quando nada combina", "Se a maioria dos títulos não corresponder, o destino não se adapta e uma fonte diferente é a melhor resposta. Nada se perde ao parar, porque as mudanças só acontecem quando você aplica."],
    ],
    facts: [
      "A migração em massa move um grupo de entradas em uma única passagem.",
      "Cada partida é revisada antes que algo seja alterado.",
      "Seu progresso e categorias são transmitidos.",
      "Nada muda até que você aplique os resultados.",
    ]
  },

  statistics: {
    title: "Sua biblioteca em números.",
    body: "As estatísticas resumem o que você assistiu e leu: totais, tempo gasto, detalhamento de status e os gêneros aos quais você mais retorna.",
    subsections: [
      ["O que é contado", "Totais por tipo de mídia, número de capítulos ou episódios, tempo gasto e como sua biblioteca é dividida entre status."],
      ["Tempo e atividade", "O cartão de ponto estima quanto tempo você passou assistindo e lendo, e o gráfico de atividades mostra como isso está distribuído nas últimas semanas."],
      ["Principais gêneros", "Os gêneros nos quais você realmente dedica seu tempo, que muitas vezes não são aqueles que você imaginaria. É uma boa maneira de encontrar uma nova série em uma faixa que você já gosta."],
      ["Por tipo de mídia", "As estatísticas são divididas por tipo de mídia, portanto os totais de anime e mangá nunca são misturados."],
      ["De onde vêm os números", "Tudo é computado a partir de sua própria biblioteca e histórico no dispositivo. Nada é carregado em qualquer lugar."],
      ["Quando diz que não há dados", "Uma nova instalação ainda não tem nada para resumir. Os números aparecem depois que você assistiu ou leu algo e foi gravado."],
    ],
    facts: [
      "As estatísticas são calculadas no dispositivo, a partir dos seus próprios dados.",
      "Os totais são mantidos separados para cada tipo de mídia.",
      "O gráfico de atividades mostra como a leitura e a observação se espalham ao longo do tempo.",
      "Uma nova instalação não mostra dados até que algo seja gravado.",
    ]
  },

  anime: {
    title: "Assistindo anime, com introdução pulando.",
    body: "O anime abre no player de vídeo com um extra: salto de introdução e final, desenvolvido pelo AniSkip quando um título pode ser correspondido.",
    subsections: [
      ["O jogador de anime", "Os episódios são reproduzidos no mesmo player de todo o resto, com qualidade, áudio, legendas e velocidade nas planilhas habituais."],
      ["Pulando introduções e finais", "Com o salto da introdução ativado, um botão faz a contagem regressiva durante a abertura e passa por ela, e o final é tratado da mesma maneira. É uma configuração, portanto pode ser desativada."],
      ["Por que um título não pode ser correspondido", "Pular precisa identificar a série e o episódio. Um título que não pode ser identificado é simplesmente reproduzido sem o botão, em vez de falhar."],
      ["O tempo limite de pular", "Uma breve contagem regressiva lhe dá tempo para cancelar antes que o salto aconteça. Seu comprimento é configurável se o padrão parecer apressado."],
      ["Descobrindo animes", "Uma tela de descoberta oferece listas recomendadas, populares, futuras, atualizadas recentemente e com as melhores avaliações, além de linhas de gênero, para que você possa encontrar algo sem uma fonte aberta."],
      ["Quando a descoberta mostra um erro", "As linhas de descoberta vêm de um serviço externo e não de suas fontes. Quando esse serviço está inacessível, o restante do aplicativo não é afetado e a fonte ainda funciona normalmente."],
    ],
    facts: [
      "O salto da introdução exige que a série e o episódio sejam identificados.",
      "Ignorar é uma configuração e pode ser desativado.",
      "A duração da contagem regressiva de salto é configurável.",
      "O Discovery usa um serviço externo; as fontes funcionam independentemente.",
    ]
  },

  music: {
    title: "Música, com sua própria biblioteca.",
    body: "Watchtower reproduz músicas de extensões musicais e de sua própria coleção, com álbuns, artistas, letras e scrobbling em um só lugar.",
    subsections: [
      ["De onde vem a música", "As extensões de música fornecem faixas e coleções, e uma biblioteca local cobre os arquivos que você já possui. Ambos se comportam como fontes normais."],
      ["Álbuns e artistas", "A música é navegada por álbum e artista, bem como por faixa, o que torna uma biblioteca de música utilizável em vez de uma longa lista de arquivos."],
      ["O jogador", "Uma fila com reprodução aleatória e repetida, uma folha em reprodução e capa. A reprodução continua enquanto você navega pelo aplicativo."],
      ["Letra da música", "As faixas que contêm letras são exibidas em uma folha, e as letras sincronizadas seguem a posição da faixa onde a fonte fornece o tempo."],
      ["Rabiscando", "Conectar o Last.fm registra o que você reproduz em seu perfil, da mesma forma que o rastreamento registra o que você assiste."],
      ["Quando uma faixa não é reproduzida", "Uma fonte de música que parou de funcionar se comporta como qualquer outra fonte quebrada. Atualize a extensão e espere que uma fonte baseada em serviço fique indisponível enquanto esse serviço estiver inativo."],
    ],
    facts: [
      "A música vem de extensões ou de arquivos que você já possui.",
      "Álbuns e artistas são de primeira classe, não apenas faixas.",
      "O scrobbling do Last.fm está disponível quando você o conecta.",
      "As letras seguem a faixa quando a fonte fornece o tempo.",
    ]
  },

  novels: {
    title: "Ler romances e fazer com que eles leiam para você.",
    body: "Os romances abrem em um leitor de texto em vez de um leitor de imagens, com temas, progresso e uma voz opcional para leitura em voz alta.",
    subsections: [
      ["Como os romances abrem", "Uma fonte que declara conteúdo novo é aberta automaticamente no leitor de texto, para que você nunca precise escolher manualmente o leitor certo."],
      ["Conforto de leitura", "O tamanho da fonte, o espaçamento entre linhas e o tema são ajustáveis, porque uma parede de texto não oferece a mesma experiência de leitura que uma página de imagens."],
      ["Lembrando do seu lugar", "O leitor de romances rastreia sua posição em cada capítulo e o leva de volta a ele, da mesma forma que o leitor de imagens faz."],
      ["Lendo em voz alta", "O texto para fala pode ler um capítulo em voz alta usando as vozes instaladas no seu dispositivo, o que é útil no trajeto ou ao fazer outra coisa."],
      ["Quando um capítulo está vazio", "Um capítulo de romance que abre em branco geralmente vem de uma fonte que retornou um texto em um formato que o leitor não consegue mostrar. Atualizar a extensão é a primeira coisa a tentar."],
      ["Romances versus mangá", "Um romance é texto e um mangá são imagens, então a fonte deve declarar o tipo certo para que o conteúdo abra corretamente. Um tipo errado envia para o leitor errado."],
    ],
    facts: [
      "Os romances abrem em um leitor de texto, escolhido por tipo de conteúdo.",
      "Fonte, espaçamento e tema são ajustáveis.",
      "A leitura em voz alta usa as vozes instaladas no seu dispositivo.",
      "Um capítulo em branco geralmente significa que a fonte retornou um texto inutilizável.",
    ]
  },

  games: {
    title: "Jogos como outro tipo de fonte.",
    body: "Watchtower pode listar jogos por meio de extensões e plataformas de jogos, usando a mesma navegação e pesquisa que você já conhece.",
    subsections: [
      ["O que é uma fonte de jogo", "Uma extensão de jogo lista títulos da mesma forma que uma extensão de mangá lista séries e abre as mesmas telas de navegação e pesquisa."],
      ["Plataformas", "Os jogos são agrupados por plataforma, o que mantém um catálogo navegável quando uma fonte abrange vários sistemas."],
      ["Navegando e pesquisando", "Pesquise fãs em fontes de jogos habilitadas exatamente como faz com outros tipos de mídia, para que uma consulta cubra todos eles."],
      ["Instalando extensões de jogo", "Eles são instalados a partir dos mesmos repositórios de todo o resto e aparecem nos jogos, uma vez instalados."],
      ["Quando nada está listado", "Uma tela de jogos vazia significa que nenhuma extensão de jogo está instalada. Adicione um repositório que forneça um e atualize."],
      ["Mantendo-o separado", "As entradas de jogos não combinam com sua leitura e visualização, portanto, um grande catálogo de jogos nunca sobrecarrega sua biblioteca."],
    ],
    facts: [
      "As fontes do jogo são instaladas a partir dos mesmos repositórios que todo o resto.",
      "Os jogos são agrupados por plataforma.",
      "A pesquisa cobre todas as fontes de jogos habilitadas de uma só vez.",
      "As entradas do jogo permanecem separadas da sua biblioteca.",
    ]
  },
};

export default pt;
