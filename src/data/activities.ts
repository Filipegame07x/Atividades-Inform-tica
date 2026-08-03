export interface QuestionOption {
  id: string;
  text: string;
}

export interface ObjectiveQuestion {
  id: number;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
}

export interface DiscursiveQuestion {
  id: number;
  question: string;
}

export interface ActivityData {
  id: string;
  title: string;
  description: string;
  password: string;
  iconType: 'word' | 'powerpoint' | 'chrome' | 'antivirus' | 'canva' | 'systems' | 'ai';
  objectiveQuestions: ObjectiveQuestion[];
  discursiveQuestions: DiscursiveQuestion[];
}

export const activities: ActivityData[] = [
  // ===================================================================
  // MICROSOFT WORD
  // ===================================================================
  {
    id: 'word-1',
    title: 'Microsoft Word - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o Microsoft Word. O que é, para que serve e suas principais funções.',
    password: 'IEPOP',
    iconType: 'word',
    objectiveQuestions: [
      { id: 1, question: "O que é o Word?", options: [ { id: "a", text: "Um programa para editar vídeos" }, { id: "b", text: "Um programa para criar e editar textos" }, { id: "c", text: "Um programa para ouvir músicas" }, { id: "d", text: "Um programa para desenhar mapas" } ], correctOptionId: "b" },
      { id: 2, question: "Para que serve o Word?", options: [ { id: "a", text: "Para criar, editar e formatar documentos de texto" }, { id: "b", text: "Para fazer ligações telefônicas" }, { id: "c", text: "Para jogar online" }, { id: "d", text: "Para assistir filmes" } ], correctOptionId: "a" },
      { id: 3, question: "Se eu quiser centralizar o texto, qual função uso?", options: [ { id: "a", text: "Negrito" }, { id: "b", text: "Alinhar à esquerda" }, { id: "c", text: "Centralizar" }, { id: "d", text: "Copiar" } ], correctOptionId: "c" },
      { id: 4, question: "Qual botão deixa a letra mais escura e destacada?", options: [ { id: "a", text: "Itálico" }, { id: "b", text: "Negrito" }, { id: "c", text: "Sublinhado" }, { id: "d", text: "Recortar" } ], correctOptionId: "b" },
      { id: 5, question: "Qual função é usada para salvar um documento?", options: [ { id: "a", text: "Salvar" }, { id: "b", text: "Excluir" }, { id: "c", text: "Colar" }, { id: "d", text: "Imprimir" } ], correctOptionId: "a" },
      { id: 6, question: "Qual opção usamos para imprimir um documento?", options: [ { id: "a", text: "Arquivo > Imprimir" }, { id: "b", text: "Inserir > Tabela" }, { id: "c", text: "Página Inicial > Fonte" }, { id: "d", text: "Revisão > Ortografia" } ], correctOptionId: "a" },
      { id: 7, question: "O que a ferramenta “Copiar” faz?", options: [ { id: "a", text: "Apaga o texto" }, { id: "b", text: "Duplica o texto selecionado" }, { id: "c", text: "Muda a cor da página" }, { id: "d", text: "Fecha o programa" } ], correctOptionId: "b" },
      { id: 8, question: "O que a ferramenta “Colar” faz?", options: [ { id: "a", text: "Insere o que foi copiado ou recortado" }, { id: "b", text: "Apaga todo o documento" }, { id: "c", text: "Salva o arquivo" }, { id: "d", text: "Imprime a página" } ], correctOptionId: "a" },
      { id: 9, question: "Para mudar o tamanho da letra, usamos a opção:", options: [ { id: "a", text: "Fonte" }, { id: "b", text: "Zoom" }, { id: "c", text: "Régua" }, { id: "d", text: "Margem" } ], correctOptionId: "a" },
      { id: 10, question: "Qual opção permite colocar uma imagem no documento?", options: [ { id: "a", text: "Inserir imagem" }, { id: "b", text: "Salvar como" }, { id: "c", text: "Ortografia" }, { id: "d", text: "Alinhar texto" } ], correctOptionId: "a" },
      { id: 11, question: "O que é uma tabela no Word?", options: [ { id: "a", text: "Um espaço com linhas e colunas" }, { id: "b", text: "Um tipo de música" }, { id: "c", text: "Uma ferramenta para apagar arquivos" }, { id: "d", text: "Um comando para fechar o Word" } ], correctOptionId: "a" },
      { id: 12, question: "Qual recurso ajuda a encontrar erros nas palavras?", options: [ { id: "a", text: "Revisão ortográfica" }, { id: "b", text: "Imprimir" }, { id: "c", text: "Zoom" }, { id: "d", text: "Recortar" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique com suas palavras o que é o Word." },
      { id: 14, question: "Cite duas coisas que podemos fazer no Word." },
      { id: 15, question: "Escreva o passo que você usaria para centralizar um texto no Word." },
      { id: 16, question: "Por que é importante salvar um documento depois de escrever?" }
    ]
  },
  {
    id: 'word-2',
    title: 'Microsoft Word - Nível 2',
    description: 'Teste seus conhecimentos intermediários no Word. Formatação avançada de parágrafos, margens, cabeçalhos, rodapés e atalhos de teclado.',
    password: 'IEPOP',
    iconType: 'word',
    objectiveQuestions: [
      { id: 1, question: "Qual atalho de teclado é usado para copiar um texto selecionado?", options: [ { id: "a", text: "Ctrl + X" }, { id: "b", text: "Ctrl + C" }, { id: "c", text: "Ctrl + V" }, { id: "d", text: "Ctrl + Z" } ], correctOptionId: "b" },
      { id: 2, question: "Qual atalho de teclado é usado para colar o texto copiado?", options: [ { id: "a", text: "Ctrl + V" }, { id: "b", text: "Ctrl + C" }, { id: "c", text: "Ctrl + S" }, { id: "d", text: "Ctrl + P" } ], correctOptionId: "a" },
      { id: 3, question: "Para desfazer a última ação realizada no documento, usamos o atalho:", options: [ { id: "a", text: "Ctrl + Y" }, { id: "b", text: "Ctrl + X" }, { id: "c", text: "Ctrl + Z" }, { id: "d", text: "Ctrl + A" } ], correctOptionId: "c" },
      { id: 4, question: "Em qual guia/aba do Word encontramos a opção de alterar as \"Margens\" da página?", options: [ { id: "a", text: "Página Inicial" }, { id: "b", text: "Inserir" }, { id: "c", text: "Layout" }, { id: "d", text: "Revisão" } ], correctOptionId: "c" },
      { id: 5, question: "A orientação de página que deixa a folha \"em pé\" é chamada de:", options: [ { id: "a", text: "Retrato" }, { id: "b", text: "Paisagem" }, { id: "c", text: "Horizontal" }, { id: "d", text: "Vertical" } ], correctOptionId: "a" },
      { id: 6, question: "A orientação de página que deixa a folha \"deitada\" é chamada de:", options: [ { id: "a", text: "Retrato" }, { id: "b", text: "Paisagem" }, { id: "c", text: "Horizontal" }, { id: "d", text: "Estendida" } ], correctOptionId: "b" },
      { id: 7, question: "Como podemos numerar automaticamente as páginas de um documento?", options: [ { id: "a", text: "Digitando o número manualmente em cada página" }, { id: "b", text: "Usando a opção \"Número de Página\" na guia Inserir" }, { id: "c", text: "Clicando em Salvar Como" }, { id: "d", text: "Mudando o tamanho da fonte" } ], correctOptionId: "b" },
      { id: 8, question: "O que é o \"Cabeçalho\" em um documento do Word?", options: [ { id: "a", text: "A parte inferior da folha" }, { id: "b", text: "A área de margem na parte superior da página" }, { id: "c", text: "O título principal do texto em negrito" }, { id: "d", text: "Uma tabela com linhas e colunas" } ], correctOptionId: "b" },
      { id: 9, question: "O que é o \"Rodapé\" em um documento do Word?", options: [ { id: "a", text: "A área de margem na parte inferior da página" }, { id: "b", text: "A primeira página do documento" }, { id: "c", text: "Uma lista com marcadores de bolinha" }, { id: "d", text: "O botão para fechar o Word" } ], correctOptionId: "a" },
      { id: 10, question: "Para destacar um texto importante com uma cor de fundo, usamos a ferramenta:", options: [ { id: "a", text: "Cor da Fonte" }, { id: "b", text: "Cor de Realce do Texto" }, { id: "c", text: "Negrito" }, { id: "d", text: "Efeitos de Texto" } ], correctOptionId: "b" },
      { id: 11, question: "Se quisermos criar uma lista com marcadores de números ou símbolos, usamos:", options: [ { id: "a", text: "Tabela" }, { id: "b", text: "Alinhamento Justificado" }, { id: "c", text: "Marcadores ou Numeração" }, { id: "d", text: "Estilos de Parágrafo" } ], correctOptionId: "c" },
      { id: 12, question: "Para justificar um texto (deixar alinhado nas margens esquerda e direita), usamos o botão:", options: [ { id: "a", text: "Centralizar" }, { id: "b", text: "Justificar" }, { id: "c", text: "Alinhar à direita" }, { id: "d", text: "Itálico" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Qual é a diferença entre as orientações \"Retrato\" e \"Paisagem\" no Word?" },
      { id: 14, question: "Descreva a utilidade dos cabeçalhos e rodapés em documentos longos, como trabalhos escolares." },
      { id: 15, question: "Explique para que servem os atalhos Ctrl+C, Ctrl+V e Ctrl+Z." },
      { id: 16, question: "Como a ferramenta de \"Marcadores\" (bolinhas ou números) ajuda na organização de um texto?" }
    ]
  },
  {
    id: 'word-3',
    title: 'Microsoft Word - Nível 3',
    description: 'Teste seus conhecimentos avançados no Word. Modelos (templates), mala direta, SmartArt, exportação em PDF, controle de alterações e senhas.',
    password: 'IEPOP',
    iconType: 'word',
    objectiveQuestions: [
      { id: 1, question: "O que são os \"Modelos\" (Templates) prontos do Microsoft Word?", options: [ { id: "a", text: "Versões antigas do programa" }, { id: "b", text: "Documentos pré-formatados para criar currículos, cartas ou relatórios" }, { id: "c", text: "Desenhos geométricos para colorir" }, { id: "d", text: "Extensões de arquivos de imagem" } ], correctOptionId: "b" },
      { id: 2, question: "Qual recurso do Word permite criar cartas ou e-mails personalizados para vários destinatários de uma vez?", options: [ { id: "a", text: "Mala Direta" }, { id: "b", text: "Localizar e Substituir" }, { id: "c", text: "Inserir Equação" }, { id: "d", text: "Dicionário de Sinônimos" } ], correctOptionId: "a" },
      { id: 3, question: "Para criar um sumário (índice) automático no Word, é recomendável aplicar:", options: [ { id: "a", text: "Negrito em todas as palavras" }, { id: "b", text: "Estilos de Título (como Título 1, Título 2) nos títulos do documento" }, { id: "c", text: "Espaçamento duplo entre linhas" }, { id: "d", text: "Margens largas" } ], correctOptionId: "b" },
      { id: 4, question: "O que é o recurso SmartArt no Microsoft Word?", options: [ { id: "a", text: "Um antivírus embutido no Word" }, { id: "b", text: "Ferramenta para criar diagramas visuais, listas e organogramas" }, { id: "c", text: "Um editor de fotos profissional" }, { id: "d", text: "Um site de pesquisa escolar" } ], correctOptionId: "b" },
      { id: 5, question: "Se quisermos exportar um documento do Word de forma que ninguém consiga editar facilmente, salvamos em:", options: [ { id: "a", text: ".docx" }, { id: "b", text: ".txt" }, { id: "c", text: ".pdf" }, { id: "d", text: ".html" } ], correctOptionId: "c" },
      { id: 6, question: "Qual recurso permite que várias pessoas trabalhem no mesmo documento e vejam as alterações feitas por cada uma?", options: [ { id: "a", text: "Controlar Alterações / Controle de Alterações" }, { id: "b", text: "Proteger com Senha" }, { id: "c", text: "Mala Direta" }, { id: "d", text: "Traduzir Texto" } ], correctOptionId: "a" },
      { id: 7, question: "Onde podemos ver informações como número de palavras, páginas e caracteres do documento?", options: [ { id: "a", text: "Na barra de status, no canto inferior esquerdo" }, { id: "b", text: "Na guia Exibir > Régua" }, { id: "c", text: "Na lixeira do Windows" }, { id: "d", text: "No painel de controle" } ], correctOptionId: "a" },
      { id: 8, question: "Como podemos proteger um documento do Word com uma senha de acesso?", options: [ { id: "a", text: "Renomeando o arquivo para \"Secreto\"" }, { id: "b", text: "Acessando Arquivo > Informações > Proteger Documento > Criptografar com Senha" }, { id: "c", text: "Excluindo o arquivo do computador" }, { id: "d", text: "Enviando o arquivo para o e-mail de um amigo" } ], correctOptionId: "b" },
      { id: 9, question: "Qual recurso usamos para substituir rapidamente uma palavra por outra em todo o documento?", options: [ { id: "a", text: "Revisão Ortográfica" }, { id: "b", text: "Localizar e Substituir" }, { id: "c", text: "Negrito" }, { id: "d", text: "Quebra de Página" } ], correctOptionId: "b" },
      { id: 10, question: "O que faz o comando \"Quebra de Página\"?", options: [ { id: "a", text: "Divide a página ao meio horizontalmente" }, { id: "b", text: "Envia o cursor imediatamente para o início da próxima página" }, { id: "c", text: "Fecha o programa Word" }, { id: "d", text: "Exclui a folha atual do documento" } ], correctOptionId: "b" },
      { id: 11, question: "Para inserir símbolos que não estão no teclado (como marcas registradas ou letras gregas), usamos a guia:", options: [ { id: "a", text: "Inserir > Símbolo" }, { id: "b", text: "Layout > Margens" }, { id: "c", text: "Página Inicial > Fonte" }, { id: "d", text: "Arquivo > Imprimir" } ], correctOptionId: "a" },
      { id: 12, question: "O espaçamento padrão entre linhas de um texto pode ser ajustado em qual grupo da guia Página Inicial?", options: [ { id: "a", text: "Fonte" }, { id: "b", text: "Parágrafo" }, { id: "c", text: "Edição" }, { id: "d", text: "Estilos" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a vantagem de usar os \"Modelos\" prontos do Word em vez de criar um documento do zero." },
      { id: 14, question: "Como o recurso de \"Localizar e Substituir\" pode economizar tempo em um texto muito longo?" },
      { id: 15, question: "Por que é útil salvar um trabalho escolar ou currículo em formato PDF antes de enviar para alguém?" },
      { id: 16, question: "Descreva o que é a ferramenta \"Mala Direta\" e dê um exemplo de quando ela é usada." }
    ]
  },

  // ===================================================================
  // MICROSOFT POWERPOINT
  // ===================================================================
  {
    id: 'powerpoint-1',
    title: 'Microsoft PowerPoint - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o PowerPoint. Aprenda sobre slides, apresentações e como salvar arquivos.',
    password: 'IEPOP',
    iconType: 'powerpoint',
    objectiveQuestions: [
      { id: 1, question: "O que é o PowerPoint?", options: [ { id: "a", text: "Um programa para criar apresentações de slides" }, { id: "b", text: "Um programa para apagar vírus" }, { id: "c", text: "Um navegador de internet" }, { id: "d", text: "Um editor de fotos profissional" } ], correctOptionId: "a" },
      { id: 2, question: "Para que serve o PowerPoint?", options: [ { id: "a", text: "Para criar textos longos" }, { id: "b", text: "Para criar apresentações com slides" }, { id: "c", text: "Para acessar sites" }, { id: "d", text: "Para limpar o computador" } ], correctOptionId: "b" },
      { id: 3, question: "Como chamamos cada página de uma apresentação no PowerPoint?", options: [ { id: "a", text: "Planilha" }, { id: "b", text: "Slide" }, { id: "c", text: "Pasta" }, { id: "d", text: "Arquivo" } ], correctOptionId: "b" },
      { id: 4, question: "Qual opção usamos para colocar uma imagem no slide?", options: [ { id: "a", text: "Inserir imagem" }, { id: "b", text: "Salvar" }, { id: "c", text: "Recortar" }, { id: "d", text: "Imprimir" } ], correctOptionId: "a" },
      { id: 5, question: "O que é uma apresentação de slides?", options: [ { id: "a", text: "Um conjunto de slides organizados" }, { id: "b", text: "Uma pasta de músicas" }, { id: "c", text: "Um antivírus" }, { id: "d", text: "Um site de pesquisa" } ], correctOptionId: "a" },
      { id: 6, question: "Qual função usamos para iniciar a apresentação?", options: [ { id: "a", text: "Apresentação de Slides" }, { id: "b", text: "Página Inicial" }, { id: "c", text: "Revisão" }, { id: "d", text: "Excluir" } ], correctOptionId: "a" },
      { id: 7, question: "Para adicionar um novo slide, usamos a opção:", options: [ { id: "a", text: "Novo Slide" }, { id: "b", text: "Fechar" }, { id: "c", text: "Copiar" }, { id: "d", text: "Centralizar" } ], correctOptionId: "a" },
      { id: 8, question: "O que podemos inserir em um slide?", options: [ { id: "a", text: "Textos, imagens, formas e vídeos" }, { id: "b", text: "Apenas números" }, { id: "c", text: "Somente senhas" }, { id: "d", text: "Apenas pastas" } ], correctOptionId: "a" },
      { id: 9, question: "Qual recurso deixa a apresentação mais bonita ao mudar de um slide para outro?", options: [ { id: "a", text: "Transição" }, { id: "b", text: "Lixeira" }, { id: "c", text: "Antivírus" }, { id: "d", text: "Download" } ], correctOptionId: "a" },
      { id: 10, question: "O que são animações no PowerPoint?", options: [ { id: "a", text: "Efeitos aplicados em textos ou imagens" }, { id: "b", text: "Programas de segurança" }, { id: "c", text: "Arquivos excluídos" }, { id: "d", text: "Sites favoritos" } ], correctOptionId: "a" },
      { id: 11, question: "Para salvar uma apresentação, usamos:", options: [ { id: "a", text: "Arquivo > Salvar" }, { id: "b", text: "Inserir > Tabela" }, { id: "c", text: "Página Inicial > Fonte" }, { id: "d", text: "Revisão > Ortografia" } ], correctOptionId: "a" },
      { id: 12, question: "Qual é a extensão mais comum de arquivos do PowerPoint?", options: [ { id: "a", text: ".pptx" }, { id: "b", text: ".docx" }, { id: "c", text: ".xlsx" }, { id: "d", text: ".mp3" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique com suas palavras o que é o PowerPoint." },
      { id: 14, question: "Cite duas coisas que podemos colocar em um slide." },
      { id: 15, question: "Para que serve uma apresentação de slides?" },
      { id: 16, question: "Por que é importante organizar bem os slides de uma apresentação?" }
    ]
  },
  {
    id: 'powerpoint-2',
    title: 'Microsoft PowerPoint - Nível 2',
    description: 'Teste seus conhecimentos intermediários no PowerPoint. Transições e animações de objetos, formatos de slide, inserção de áudio/vídeos e hiperlinks.',
    password: 'IEPOP',
    iconType: 'powerpoint',
    objectiveQuestions: [
      { id: 1, question: "Onde podemos alterar o tamanho ou a proporção dos slides (como Standard 4:3 ou Widescreen 16:9)?", options: [ { id: "a", text: "Guia Design > Tamanho do Slide" }, { id: "b", text: "Guia Transições > Duração" }, { id: "c", text: "Guia Inserir > Tabela" }, { id: "d", text: "Guia Arquivo > Imprimir" } ], correctOptionId: "a" },
      { id: 2, question: "Qual a diferença entre \"Transição\" e \"Animação\" no PowerPoint?", options: [ { id: "a", text: "Transição é o efeito entre slides; Animação é o efeito em elementos dentro do slide" }, { id: "b", text: "Não há diferença, são o mesmo recurso" }, { id: "c", text: "Transição é para áudio; Animação é para vídeo" }, { id: "d", text: "Transição apaga os slides; Animação cria novos slides" } ], correctOptionId: "a" },
      { id: 3, question: "Qual atalho de teclado inicia a apresentação de slides a partir do primeiro slide?", options: [ { id: "a", text: "F1" }, { id: "b", text: "F5" }, { id: "c", text: "Ctrl + P" }, { id: "d", text: "Espaço" } ], correctOptionId: "b" },
      { id: 4, question: "Qual atalho inicia a apresentação de slides a partir do slide que está selecionado atualmente?", options: [ { id: "a", text: "F5" }, { id: "b", text: "Shift + F5" }, { id: "c", text: "Alt + F5" }, { id: "d", text: "Ctrl + Enter" } ], correctOptionId: "b" },
      { id: 5, question: "Para que serve a caixa de texto em um slide do PowerPoint?", options: [ { id: "a", text: "Para digitar e organizar textos dentro do slide" }, { id: "b", text: "Para desenhar tabelas automaticamente" }, { id: "c", text: "Para salvar a apresentação online" }, { id: "d", text: "Para colocar senhas na apresentação" } ], correctOptionId: "a" },
      { id: 6, question: "Como podemos inserir um vídeo do YouTube ou do próprio computador na apresentação?", options: [ { id: "a", text: "Arrastando o link do navegador para a lixeira" }, { id: "b", text: "Indo na guia Inserir > Vídeo" }, { id: "c", text: "Mudando a extensão do arquivo para .mp3" }, { id: "d", text: "Clicando em Salvar Como" } ], correctOptionId: "b" },
      { id: 7, question: "O que é o recurso \"Design / Ideias de Design\" no PowerPoint?", options: [ { id: "a", text: "Um robô que apresenta os slides sozinho" }, { id: "b", text: "Uma ferramenta que sugere layouts bonitos de forma automática com base no seu conteúdo" }, { id: "c", text: "Um site para baixar jogos" }, { id: "d", text: "Um antivírus específico para apresentações" } ], correctOptionId: "b" },
      { id: 8, question: "Como podemos mudar a cor de fundo de um slide específico?", options: [ { id: "a", text: "Clicando com o botão direito no slide > Formatar Tela de Fundo" }, { id: "b", text: "Excluindo o slide e criando um novo" }, { id: "c", text: "Mudando o tamanho da letra" }, { id: "d", text: "Clicando em Inserir > Imagem" } ], correctOptionId: "a" },
      { id: 9, question: "Se quisermos colocar um som ou música de fundo em um slide, usamos a guia:", options: [ { id: "a", text: "Inserir > Áudio" }, { id: "b", text: "Transições > Efeito de Som" }, { id: "c", text: "Animações > Música" }, { id: "d", text: "Exibir > Zoom" } ], correctOptionId: "a" },
      { id: 10, question: "O que acontece se clicarmos na tecla \"ESC\" (Escape) durante uma apresentação de slides?", options: [ { id: "a", text: "Os slides avançam mais rápido" }, { id: "b", text: "A apresentação é encerrada e volta para o modo de edição" }, { id: "c", text: "A apresentação começa do primeiro slide" }, { id: "d", text: "Todos os slides são excluídos" } ], correctOptionId: "b" },
      { id: 11, question: "Para criar um link que leva o usuário para um site da internet ao clicar em um texto, usamos:", options: [ { id: "a", text: "Caixa de Texto" }, { id: "b", text: "Link / Hiperlink" }, { id: "c", text: "Transição" }, { id: "d", text: "Estilo de Tabela" } ], correctOptionId: "b" },
      { id: 12, question: "O que são os \"Temas\" na guia Design do PowerPoint?", options: [ { id: "a", text: "Configurações visuais prontas que mudam fontes, cores e fundos de todos os slides" }, { id: "b", text: "Lista de tópicos para escrever o texto" }, { id: "c", text: "Diferentes tipos de arquivos de áudio" }, { id: "d", text: "Jogos integrados no programa" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a diferença entre efeitos de \"Transição\" e efeitos de \"Animação\"." },
      { id: 14, question: "Por que usar caixas de texto é melhor do que escrever diretamente no slide sem divisão?" },
      { id: 15, question: "Como o recurso \"Ideias de Design\" ajuda quem não tem muita experiência em criar slides bonitos?" },
      { id: 16, question: "Cite uma situação prática em que seria útil usar um \"Hiperlink\" em uma apresentação de slides." }
    ]
  },
  {
    id: 'powerpoint-3',
    title: 'Microsoft PowerPoint - Nível 3',
    description: 'Teste seus conhecimentos avançados no PowerPoint. Slide Mestre, anotações do orador, exportação em vídeo, gatilhos de animação e modos de exibição.',
    password: 'IEPOP',
    iconType: 'powerpoint',
    objectiveQuestions: [
      { id: 1, question: "O que é o \"Slide Mestre\" no PowerPoint?", options: [ { id: "a", text: "O primeiro slide criado na apresentação" }, { id: "b", text: "Um slide modelo que define o padrão visual (fontes, cores, logos) para todos os outros slides" }, { id: "c", text: "O slide final com os agradecimentos" }, { id: "d", text: "O computador do professor que controla os outros" } ], correctOptionId: "b" },
      { id: 2, question: "Onde o apresentador pode digitar notas ou lembretes que só ele verá durante a apresentação?", options: [ { id: "a", text: "Na própria caixa de texto principal do slide" }, { id: "b", text: "Na área de \"Anotações\" abaixo de cada slide" }, { id: "c", text: "No cabeçalho do slide" }, { id: "d", text: "Na lixeira do programa" } ], correctOptionId: "b" },
      { id: 3, question: "Se quisermos exportar a nossa apresentação de slides como um vídeo que toca sozinho, salvamos no formato:", options: [ { id: "a", text: ".docx" }, { id: "b", text: ".mp4 ou .wmv" }, { id: "c", text: ".txt" }, { id: "d", text: ".zip" } ], correctOptionId: "b" },
      { id: 4, question: "O que é o recurso \"Testar Intervalos\" no PowerPoint?", options: [ { id: "a", text: "Um cronômetro para medir o tempo gasto em cada slide durante um ensaio" }, { id: "b", text: "Um teste para saber se o computador está rápido" }, { id: "c", text: "Um jogo de adivinhação de palavras" }, { id: "d", text: "Um verificador de links quebrados" } ], correctOptionId: "a" },
      { id: 5, question: "Como podemos criar uma animação que faz um objeto se mover em uma linha personalizada na tela?", options: [ { id: "a", text: "Arrastando o mouse com a apresentação fechada" }, { id: "b", text: "Usando o efeito de animação de \"Caminho de Animação\" ou \"Trajetória\"" }, { id: "c", text: "Clicando em Salvar Como" }, { id: "d", text: "Usando transições de slides" } ], correctOptionId: "b" },
      { id: 6, question: "Para organizar slides em blocos ou grupos temáticos na barra lateral, usamos o recurso de:", options: [ { id: "a", text: "Seções" }, { id: "b", text: "Tabelas" }, { id: "c", text: "Formas" }, { id: "d", text: "Comentários" } ], correctOptionId: "a" },
      { id: 7, question: "O que é a \"Visualização do Apresentador\"?", options: [ { id: "a", text: "A tela que a plateia vê no projetor" }, { id: "b", text: "Uma tela especial para quem está apresentando, que mostra o slide atual, o próximo e as anotações" }, { id: "c", text: "O modo de edição padrão do PowerPoint" }, { id: "d", text: "Um site para compartilhar slides online" } ], correctOptionId: "b" },
      { id: 8, question: "Como podemos alinhar perfeitamente vários objetos (como imagens ou formas) em um slide?", options: [ { id: "a", text: "Movendo um por um no olho" }, { id: "b", text: "Selecionando todos e usando a opção Organizar > Alinhar" }, { id: "c", text: "Aumentando o zoom para 500%" }, { id: "d", text: "Excluindo os objetos e inserindo novamente" } ], correctOptionId: "b" },
      { id: 9, question: "Se quisermos que um efeito aconteça somente quando clicarmos em um botão ou objeto específico no slide, configuramos um:", options: [ { id: "a", text: "Gatilho (Trigger)" }, { id: "b", text: "Hiperlink" }, { id: "c", text: "Slide Mestre" }, { id: "d", text: "Efeito de Saída" } ], correctOptionId: "a" },
      { id: 10, question: "O que significa \"Loop\" em uma apresentação de slides configurada para quiosque?", options: [ { id: "a", text: "A apresentação para após o último slide" }, { id: "b", text: "A apresentação reinicia automaticamente do primeiro slide após o último terminar" }, { id: "c", text: "Os slides são exibidos de trás para frente" }, { id: "d", text: "A apresentação é apagada automaticamente" } ], correctOptionId: "b" },
      { id: 11, question: "Em qual formato salvamos a apresentação para que ela abra diretamente no modo apresentação (sem mostrar o editor do PowerPoint)?", options: [ { id: "a", text: ".ppsx (Apresentação de Slides do PowerPoint)" }, { id: "b", text: ".potx (Modelo do PowerPoint)" }, { id: "c", text: ".pdf" }, { id: "d", text: ".rtf" } ], correctOptionId: "a" },
      { id: 12, question: "O painel de seleção lateral do PowerPoint serve para:", options: [ { id: "a", text: "Escolher cores para a apresentação" }, { id: "b", text: "Listar, ocultar e organizar a ordem das camadas de todos os objetos do slide atual" }, { id: "c", text: "Excluir arquivos do computador" }, { id: "d", text: "Pesquisar imagens no Google" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a utilidade do \"Slide Mestre\" e como ele facilita o trabalho em grandes apresentações." },
      { id: 14, question: "Qual é a vantagem de usar a \"Visualização do Apresentador\" durante uma palestra ou trabalho escolar?" },
      { id: 15, question: "Como as \"Anotações do Apresentador\" ajudam na hora de expor um trabalho?" },
      { id: 16, question: "Por que o formato `.ppsx` é melhor do que o `.pptx` quando você vai enviar sua apresentação final para ser exibida por outra pessoa?" }
    ]
  },

  // ===================================================================
  // GOOGLE CHROME
  // ===================================================================
  {
    id: 'chrome-1',
    title: 'Google Chrome - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre navegação na internet usando o Google Chrome.',
    password: 'IEPOP',
    iconType: 'chrome',
    objectiveQuestions: [
      { id: 1, question: "O que é o Google Chrome?", options: [ { id: "a", text: "Um navegador de internet" }, { id: "b", text: "Um antivírus" }, { id: "c", text: "Um programa de apresentação" }, { id: "d", text: "Um editor de textos" } ], correctOptionId: "a" },
      { id: 2, question: "Para que serve o Google Chrome?", options: [ { id: "a", text: "Para acessar sites na internet" }, { id: "b", text: "Para criar slides" }, { id: "c", text: "Para formatar o computador" }, { id: "d", text: "Para remover vírus automaticamente" } ], correctOptionId: "a" },
      { id: 3, question: "Onde digitamos o endereço de um site no Google Chrome?", options: [ { id: "a", text: "Barra de endereço" }, { id: "b", text: "Lixeira" }, { id: "c", text: "Área de trabalho" }, { id: "d", text: "Pasta de downloads" } ], correctOptionId: "a" },
      { id: 4, question: "O que é uma aba no navegador?", options: [ { id: "a", text: "Uma página aberta dentro do navegador" }, { id: "b", text: "Um tipo de vírus" }, { id: "c", text: "Uma pasta do computador" }, { id: "d", text: "Um arquivo de texto" } ], correctOptionId: "a" },
      { id: 5, question: "Qual botão usamos para voltar para a página anterior?", options: [ { id: "a", text: "Voltar" }, { id: "b", text: "Salvar" }, { id: "c", text: "Imprimir" }, { id: "d", text: "Baixar" } ], correctOptionId: "a" },
      { id: 6, question: "O que significa fazer download?", options: [ { id: "a", text: "Baixar um arquivo da internet para o computador" }, { id: "b", text: "Apagar a internet" }, { id: "c", text: "Criar uma senha" }, { id: "d", text: "Fechar o navegador" } ], correctOptionId: "a" },
      { id: 7, question: "O que são favoritos no Google Chrome?", options: [ { id: "a", text: "Sites salvos para acessar mais facilmente" }, { id: "b", text: "Vírus encontrados no computador" }, { id: "c", text: "Arquivos apagados" }, { id: "d", text: "Slides de apresentação" } ], correctOptionId: "a" },
      { id: 8, question: "Para pesquisar algo na internet, podemos usar:", options: [ { id: "a", text: "A barra de endereço ou o Google" }, { id: "b", text: "Apenas a lixeira" }, { id: "c", text: "Somente o Paint" }, { id: "d", text: "Apenas o antivírus" } ], correctOptionId: "a" },
      { id: 9, question: "O que é histórico de navegação?", options: [ { id: "a", text: "Lista de sites acessados anteriormente" }, { id: "b", text: "Lista de vírus" }, { id: "c", text: "Lista de arquivos impressos" }, { id: "d", text: "Lista de slides apagados" } ], correctOptionId: "a" },
      { id: 10, question: "O que acontece quando fechamos uma aba?", options: [ { id: "a", text: "A página aberta naquela aba é fechada" }, { id: "b", text: "O computador desliga" }, { id: "c", text: "O antivírus é apagado" }, { id: "d", text: "A internet deixa de existir" } ], correctOptionId: "a" },
      { id: 11, question: "Qual símbolo geralmente representa atualizar uma página?", options: [ { id: "a", text: "Uma seta circular" }, { id: "b", text: "Uma tesoura" }, { id: "c", text: "Um lápis" }, { id: "d", text: "Uma impressora" } ], correctOptionId: "a" },
      { id: 12, question: "O que devemos evitar ao navegar na internet?", options: [ { id: "a", text: "Clicar em links suspeitos" }, { id: "b", text: "Acessar sites confiáveis" }, { id: "c", text: "Pesquisar com cuidado" }, { id: "d", text: "Usar senhas seguras" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique com suas palavras o que é o Google Chrome." },
      { id: 14, question: "Cite duas coisas que podemos fazer no Google Chrome." },
      { id: 15, question: "O que é uma aba no navegador?" },
      { id: 16, question: "Por que devemos ter cuidado ao clicar em links desconhecidos?" }
    ]
  },
  {
    id: 'chrome-2',
    title: 'Google Chrome - Nível 2',
    description: 'Teste seus conhecimentos intermediários no Chrome. Navegação anônima, gerenciamento de downloads, favoritos, extensões e atalhos úteis.',
    password: 'IEPOP',
    iconType: 'chrome',
    objectiveQuestions: [
      { id: 1, question: "Para que serve a \"Navegação Anônima\" (ou Janela Anônima) no Google Chrome?", options: [ { id: "a", text: "Para acessar a internet sem precisar de internet" }, { id: "b", text: "Para navegar sem salvar histórico, cookies ou dados de formulários no computador" }, { id: "c", text: "Para esconder o computador fisicamente de outras pessoas" }, { id: "d", text: "Para baixar arquivos de graça sem pagar" } ], correctOptionId: "b" },
      { id: 2, question: "Qual atalho de teclado abre uma nova janela anônima no Chrome?", options: [ { id: "a", text: "Ctrl + N" }, { id: "b", text: "Ctrl + Shift + N" }, { id: "c", text: "Ctrl + T" }, { id: "d", text: "Ctrl + H" } ], correctOptionId: "b" },
      { id: 3, question: "Qual atalho de teclado abre uma nova aba no navegador?", options: [ { id: "a", text: "Ctrl + N" }, { id: "b", text: "Ctrl + T" }, { id: "c", text: "Ctrl + W" }, { id: "d", text: "Ctrl + J" } ], correctOptionId: "b" },
      { id: 4, question: "O que acontece se você pressionar as teclas Ctrl + Shift + T no Chrome?", options: [ { id: "a", text: "Abre o histórico de downloads" }, { id: "b", text: "Reabre a última aba que foi fechada por engano" }, { id: "c", text: "Fecha o navegador completamente" }, { id: "d", text: "Limpa todos os dados de navegação" } ], correctOptionId: "b" },
      { id: 5, question: "O que são as \"Extensões\" no Google Chrome?", options: [ { id: "a", text: "Cabos para conectar o computador na internet" }, { id: "b", text: "Pequenos programas adicionais que adicionam novas funções e recursos ao navegador" }, { id: "c", text: "Vírus que aumentam a velocidade da tela" }, { id: "d", text: "Páginas de ajuda oficial do Google" } ], correctOptionId: "b" },
      { id: 6, question: "Onde ficam guardados os arquivos que você baixa da internet por padrão?", options: [ { id: "a", text: "Na pasta Documentos" }, { id: "b", text: "Na pasta Downloads" }, { id: "c", text: "Na Lixeira do Windows" }, { id: "d", text: "Na área de trabalho" } ], correctOptionId: "b" },
      { id: 7, question: "Como podemos exibir ou ocultar a \"Barra de Favoritos\" abaixo da barra de endereço?", options: [ { id: "a", text: "Ctrl + Shift + B" }, { id: "b", text: "Ctrl + Shift + Delete" }, { id: "c", text: "Ctrl + H" }, { id: "d", text: "Alt + F4" } ], correctOptionId: "a" },
      { id: 8, question: "Para limpar os dados de navegação (como histórico de sites visitados e cache), usamos o atalho:", options: [ { id: "a", text: "Ctrl + J" }, { id: "b", text: "Ctrl + Shift + Delete" }, { id: "c", text: "Ctrl + P" }, { id: "d", text: "Ctrl + F" } ], correctOptionId: "b" },
      { id: 9, question: "Qual atalho de teclado abre a página com o Histórico de navegação do Chrome?", options: [ { id: "a", text: "Ctrl + H" }, { id: "b", text: "Ctrl + J" }, { id: "c", text: "Ctrl + K" }, { id: "d", text: "Ctrl + D" } ], correctOptionId: "a" },
      { id: 10, question: "Qual atalho de teclado abre a página que mostra todos os seus Downloads recentes?", options: [ { id: "a", text: "Ctrl + H" }, { id: "b", text: "Ctrl + J" }, { id: "c", text: "Ctrl + D" }, { id: "d", text: "Ctrl + N" } ], correctOptionId: "b" },
      { id: 11, question: "Se quisermos buscar uma palavra específica dentro de uma página que estamos lendo, usamos o atalho:", options: [ { id: "a", text: "Ctrl + S" }, { id: "b", text: "Ctrl + F" }, { id: "c", text: "Ctrl + R" }, { id: "d", text: "Ctrl + A" } ], correctOptionId: "b" },
      { id: 12, question: "O que faz o botão com o ícone de uma estrela ao lado da barra de endereços?", options: [ { id: "a", text: "Fecha a aba atual" }, { id: "b", text: "Salva a página atual nos Favoritos" }, { id: "c", text: "Atualiza a página" }, { id: "d", text: "Ativa o antivírus" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique em quais situações é útil usar a \"Janela Anônima\" e o que ela NÃO protege (como rastreamento do site ou da escola)." },
      { id: 14, question: "Descreva a utilidade de instalar \"Extensões\" no Google Chrome e dê um exemplo de extensão que você conheça ou ache útil." },
      { id: 15, question: "Se você fechar uma aba sem querer, como pode reabri-la rapidamente? Explique o atalho." },
      { id: 16, question: "Por que é importante limpar o histórico de navegação e o cache de tempos em tempos?" }
    ]
  },
  {
    id: 'chrome-3',
    title: 'Google Chrome - Nível 3',
    description: 'Teste seus conhecimentos avançados no Chrome. Cookies, cache do navegador, perfis de usuário, sincronização em nuvem e ferramentas do desenvolvedor (F12).',
    password: 'IEPOP',
    iconType: 'chrome',
    objectiveQuestions: [
      { id: 1, question: "O que são os \"Cookies\" armazenados pelo Google Chrome?", options: [ { id: "a", text: "Vírus que roubam fotos do computador" }, { id: "b", text: "Arquivos criados pelos sites para salvar informações da sua visita e preferências" }, { id: "c", text: "Jogos escondidos no navegador" }, { id: "d", text: "Programas que estendem a tela do computador" } ], correctOptionId: "b" },
      { id: 2, question: "O que é o \"Cache\" do navegador e qual sua função?", options: [ { id: "a", text: "O dinheiro que pagamos para usar a internet" }, { id: "b", text: "Cópias temporárias de imagens e arquivos de páginas da web salvos para acelerar os carregamentos futuros" }, { id: "c", text: "Um vírus que trava o navegador" }, { id: "d", text: "A senha de acesso ao roteador" } ], correctOptionId: "b" },
      { id: 3, question: "Para que serve a ferramenta \"Inspecionar\" (Developer Tools) no Chrome?", options: [ { id: "a", text: "Para consertar o hardware do computador" }, { id: "b", text: "Para visualizar e testar o código HTML, CSS e JavaScript de uma página da web" }, { id: "c", text: "Para apagar vírus das páginas" }, { id: "d", text: "Para aumentar a velocidade da internet" } ], correctOptionId: "b" },
      { id: 4, question: "Como você pode gerenciar ou remover extensões instaladas no Chrome?", options: [ { id: "a", text: "Excluindo o ícone do Chrome da área de trabalho" }, { id: "b", text: "Clicando no ícone de quebra-cabeça > Gerenciar Extensões" }, { id: "c", text: "Desligando o modem de internet" }, { id: "d", text: "Formatando o sistema operacional" } ], correctOptionId: "b" },
      { id: 5, question: "O recurso \"Gerenciador de Senhas\" integrado ao Chrome serve para:", options: [ { id: "a", text: "Criar senhas que qualquer pessoa pode ver" }, { id: "b", text: "Salvar e preencher automaticamente as senhas de sites que você acessa" }, { id: "c", text: "Impedir que você entre nos sites" }, { id: "d", text: "Gerar senhas de Wi-Fi" } ], correctOptionId: "b" },
      { id: 6, question: "Como podemos criar diferentes perfis de usuário no Chrome?", options: [ { id: "a", text: "Comprando outro computador" }, { id: "b", text: "Clicando no ícone de perfil no canto superior direito > Adicionar perfil" }, { id: "c", text: "Instalando o antivírus" }, { id: "d", text: "Clicando com o botão direito na barra de tarefas" } ], correctOptionId: "b" },
      { id: 7, question: "O que acontece quando você ativa a \"Sincronização\" no Chrome com a sua conta Google?", options: [ { id: "a", text: "O computador trava" }, { id: "b", text: "Seus favoritos, histórico e senhas ficam disponíveis em outros dispositivos (celular, outro PC) que tenham sua conta" }, { id: "c", text: "Todos os seus dados são excluídos permanentemente" }, { id: "d", text: "A internet fica gratuita" } ], correctOptionId: "b" },
      { id: 8, question: "Qual protocolo na barra de endereços (representado por um cadeado fechado) indica que a conexão com o site é segura e criptografada?", options: [ { id: "a", text: "http://" }, { id: "b", text: "https://" }, { id: "c", text: "ftp://" }, { id: "d", text: "www://" } ], correctOptionId: "b" },
      { id: 9, question: "Se o Chrome estiver consumindo muita memória ou travando, qual ferramenta interna podemos usar para ver quais abas estão pesadas?", options: [ { id: "a", text: "Bloco de Notas" }, { id: "b", text: "Gerenciador de Tarefas do Chrome (Shift + Esc)" }, { id: "c", text: "Painel de Controle do Windows" }, { id: "d", text: "Lixeira" } ], correctOptionId: "b" },
      { id: 10, question: "Onde podemos alterar a pasta padrão onde os downloads de arquivos são salvos no Chrome?", options: [ { id: "a", text: "Configurações > Downloads > Localização" }, { id: "b", text: "Histórico > Downloads > Limpar Tudo" }, { id: "c", text: "Guia Inserir > Pasta" }, { id: "d", text: "Não é possível alterar essa pasta" } ], correctOptionId: "a" },
      { id: 11, question: "O que é o \"DNS\" no contexto de navegação na internet?", options: [ { id: "a", text: "Um tipo de cabo de rede" }, { id: "b", text: "O sistema que traduz nomes de sites (como google.com) em números de IP" }, { id: "c", text: "Uma extensão para ver filmes" }, { id: "d", text: "O antivírus da rede" } ], correctOptionId: "b" },
      { id: 12, question: "O recurso \"Verificação de Segurança\" (Safety Check) nas configurações do Chrome serve para:", options: [ { id: "a", text: "Medir a velocidade de download da internet" }, { id: "b", text: "Verificar senhas expostas, status do navegador, extensões nocivas e proteção de navegação" }, { id: "c", text: "Deixar o Chrome em modo noturno" }, { id: "d", text: "Limpar a lixeira do computador" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a diferença entre HTTP e HTTPS e por que o HTTPS é importante ao fazer compras online." },
      { id: 14, question: "Descreva a utilidade de criar diferentes \"Perfis de Usuário\" no mesmo navegador Chrome." },
      { id: 15, question: "O que são os cookies e por que alguns sites perguntam se você aceita ou não o uso deles?" },
      { id: 16, question: "Para que serve o Gerenciador de Senhas do Chrome e qual cuidado devemos ter ao salvar senhas em computadores públicos?" }
    ]
  },

  // ===================================================================
  // ANTIVÍRUS MALWAREBYTES
  // ===================================================================
  {
    id: 'antivirus-1',
    title: 'Antivírus Malwarebytes - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre segurança digital e uso do antivírus Malwarebytes.',
    password: 'IEPOP',
    iconType: 'antivirus',
    objectiveQuestions: [
      { id: 1, question: "O que é o Malwarebytes?", options: [ { id: "a", text: "Um programa de segurança contra ameaças digitais" }, { id: "b", text: "Um programa para criar slides" }, { id: "c", text: "Um navegador de internet" }, { id: "d", text: "Um editor de textos" } ], correctOptionId: "a" },
      { id: 2, question: "Para que serve um antivírus?", options: [ { id: "a", text: "Para ajudar a proteger o computador contra vírus e ameaças" }, { id: "b", text: "Para criar apresentações" }, { id: "c", text: "Para acessar sites" }, { id: "d", text: "Para desenhar imagens" } ], correctOptionId: "a" },
      { id: 3, question: "O que é malware?", options: [ { id: "a", text: "Um programa malicioso que pode prejudicar o computador" }, { id: "b", text: "Um tipo de slide" }, { id: "c", text: "Um documento de texto" }, { id: "d", text: "Uma página da internet" } ], correctOptionId: "a" },
      { id: 4, question: "O que o Malwarebytes pode ajudar a detectar?", options: [ { id: "a", text: "Vírus, malware e programas suspeitos" }, { id: "b", text: "Apenas fotos" }, { id: "c", text: "Apenas músicas" }, { id: "d", text: "Apenas arquivos de texto" } ], correctOptionId: "a" },
      { id: 5, question: "O que significa fazer uma verificação no antivírus?", options: [ { id: "a", text: "Procurar ameaças no computador" }, { id: "b", text: "Criar uma apresentação" }, { id: "c", text: "Acessar uma página da internet" }, { id: "d", text: "Imprimir documentos" } ], correctOptionId: "a" },
      { id: 6, question: "O que devemos fazer quando o antivírus encontra uma ameaça?", options: [ { id: "a", text: "Seguir as orientações do programa para remover ou colocar em quarentena" }, { id: "b", text: "Ignorar sempre" }, { id: "c", text: "Desligar o computador para sempre" }, { id: "d", text: "Apagar todos os arquivos sem verificar" } ], correctOptionId: "a" },
      { id: 7, question: "O que é quarentena em um antivírus?", options: [ { id: "a", text: "Um local onde arquivos suspeitos ficam isolados" }, { id: "b", text: "Uma pasta de músicas" }, { id: "c", text: "Um tipo de slide" }, { id: "d", text: "Uma ferramenta de desenho" } ], correctOptionId: "a" },
      { id: 8, question: "Por que é importante manter o antivírus atualizado?", options: [ { id: "a", text: "Para reconhecer ameaças mais recentes" }, { id: "b", text: "Para mudar a cor da tela" }, { id: "c", text: "Para aumentar o volume do computador" }, { id: "d", text: "Para abrir documentos do Word" } ], correctOptionId: "a" },
      { id: 9, question: "Qual atitude ajuda a proteger o computador?", options: [ { id: "a", text: "Não baixar arquivos de sites desconhecidos" }, { id: "b", text: "Clicar em todos os anúncios" }, { id: "c", text: "Instalar programas suspeitos" }, { id: "d", text: "Compartilhar senhas" } ], correctOptionId: "a" },
      { id: 10, question: "O que pode acontecer se o computador tiver vírus?", options: [ { id: "a", text: "Ele pode ficar lento ou ter arquivos prejudicados" }, { id: "b", text: "Ele cria slides sozinho" }, { id: "c", text: "Ele melhora a internet automaticamente" }, { id: "d", text: "Ele imprime documentos sozinho" } ], correctOptionId: "a" },
      { id: 11, question: "Qual é uma boa prática de segurança?", options: [ { id: "a", text: "Usar senhas fortes e evitar links suspeitos" }, { id: "b", text: "Compartilhar senha com todos" }, { id: "c", text: "Desativar todas as proteções" }, { id: "d", text: "Baixar qualquer arquivo da internet" } ], correctOptionId: "a" },
      { id: 12, question: "O Malwarebytes é usado principalmente para:", options: [ { id: "a", text: "Proteger e verificar o computador contra ameaças" }, { id: "b", text: "Criar textos escolares" }, { id: "c", text: "Montar planilhas" }, { id: "d", text: "Fazer apresentações de slides" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique com suas palavras o que é o Malwarebytes." },
      { id: 14, question: "Para que serve um antivírus no computador?" },
      { id: 15, question: "Cite duas atitudes que ajudam a evitar vírus no computador." },
      { id: 16, question: "Por que não devemos baixar arquivos de sites desconhecidos?" }
    ]
  },
  {
    id: 'antivirus-2',
    title: 'Antivírus Malwarebytes - Nível 2',
    description: 'Teste seus conhecimentos intermediários sobre segurança digital. Phishing, cavalos de troia, ransomware, uso de pendrives infectados, quarentena e firewalls.',
    password: 'IEPOP',
    iconType: 'antivirus',
    objectiveQuestions: [
      { id: 1, question: "O que faz a proteção em tempo real de um antivírus como o Malwarebytes Premium?", options: [ { id: "a", text: "Faz varreduras apenas quando você liga o computador" }, { id: "b", text: "Bloqueia vírus e malwares ativamente no momento em que tentam entrar no computador" }, { id: "c", text: "Limpa a poeira física das peças do computador" }, { id: "d", text: "Aumenta a velocidade dos jogos automaticamente" } ], correctOptionId: "b" },
      { id: 2, question: "Qual a principal diferença entre um vírus e um ransomware?", options: [ { id: "a", text: "O vírus espalha boatos e o ransomware é um jogo" }, { id: "b", text: "O ransomware sequestra e criptografa arquivos pessoais exigindo resgate; o vírus se espalha e danifica o sistema" }, { id: "c", text: "O vírus é seguro e o ransomware é prejudicial" }, { id: "d", text: "Não há diferença, são exatamente iguais" } ], correctOptionId: "b" },
      { id: 3, question: "O que é phishing na internet?", options: [ { id: "a", text: "Um tipo de jogo de pescaria online" }, { id: "b", text: "Mensagens ou sites falsos que se passam por bancos ou marcas famosas para roubar senhas e dados" }, { id: "c", text: "O download de músicas gratuitas" }, { id: "d", text: "O cabo que liga o modem ao computador" } ], correctOptionId: "b" },
      { id: 4, question: "Se você conectar um Pen Drive de um amigo no seu computador, qual é a atitude mais segura a tomar?", options: [ { id: "a", text: "Abrir e executar todos os arquivos imediatamente" }, { id: "b", text: "Clicar com o botão direito no Pen Drive e fazer uma verificação de vírus (Scan) antes de abrir" }, { id: "c", text: "Formatar o computador inteiro" }, { id: "d", text: "Copiar todo o conteúdo para a Área de Trabalho" } ], correctOptionId: "b" },
      { id: 5, question: "O que é um \"Cavalo de Troia\" (Trojan) na segurança digital?", options: [ { id: "a", text: "Um vírus que melhora a velocidade do Windows" }, { id: "b", text: "Um arquivo disfarçado de programa útil ou jogo, mas que esconde um malware por trás" }, { id: "c", text: "Uma apresentação de slides histórica do PowerPoint" }, { id: "d", text: "Uma extensão de navegador para ver mapas" } ], correctOptionId: "b" },
      { id: 6, question: "Por que o Malwarebytes pode solicitar que você reinicie o computador após remover uma ameaça?", options: [ { id: "a", text: "Para apagar todos os seus documentos pessoais" }, { id: "b", text: "Para garantir que arquivos infectados na memória do sistema sejam completamente removidos durante a inicialização" }, { id: "c", text: "Para instalar jogos recomendados pelo programa" }, { id: "d", text: "Para atualizar a versão do Windows automaticamente" } ], correctOptionId: "b" },
      { id: 7, question: "Além do antivírus, qual recurso do Windows ajuda a bloquear acessos não autorizados vindo da rede/internet?", options: [ { id: "a", text: "Bloco de Notas" }, { id: "b", text: "Firewall" }, { id: "c", text: "Paint" }, { id: "d", text: "Desfragmentador de Disco" } ], correctOptionId: "b" },
      { id: 8, question: "O que indica quando o Malwarebytes avisa que um programa foi adicionado à \"Quarentena\"?", options: [ { id: "a", text: "O programa foi excluído para sempre e não pode ser recuperado" }, { id: "b", text: "O programa suspeito foi isolado em uma pasta segura para não infectar o computador" }, { id: "c", text: "O programa foi atualizado para a versão mais recente" }, { id: "d", text: "O programa foi enviado para o e-mail do suporte" } ], correctOptionId: "b" },
      { id: 9, question: "Qual destas é a senha mais segura contra invasores?", options: [ { id: "a", text: "123456" }, { id: "b", text: "senha123" }, { id: "c", text: "G#9p!2xQ$d" }, { id: "d", text: "o_nome_do_usuario" } ], correctOptionId: "c" },
      { id: 10, question: "O que significa \"Adwares\"?", options: [ { id: "a", text: "Programas criados para apresentar anúncios publicitários indesejados e invasivos na tela" }, { id: "b", text: "Equipamentos físicos do computador" }, { id: "c", text: "Sites para enviar mensagens de voz" }, { id: "d", text: "Slides com efeitos em 3D" } ], correctOptionId: "a" },
      { id: 11, question: "Se o Malwarebytes está instalado na versão Free (Gratuita), qual ação você precisa fazer manualmente?", options: [ { id: "a", text: "Nada, ele faz tudo sozinho" }, { id: "b", text: "Abrir o programa e iniciar a verificação (Scan) de tempos em tempos manualmente" }, { id: "c", text: "Pagar uma taxa a cada verificação realizada" }, { id: "d", text: "Desinstalar o Windows para funcionar" } ], correctOptionId: "b" },
      { id: 12, question: "O que é um \"Spyware\"?", options: [ { id: "a", text: "Um jogo de espionagem" }, { id: "b", text: "Um malware projetado para monitorar e roubar informações do que você digita ou acessa" }, { id: "c", text: "Um programa para acelerar o download" }, { id: "d", text: "Um tipo de slide do PowerPoint" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "O que é o \"Ransomware\" e por que ele é considerado uma das ameaças mais perigosas atualmente?" },
      { id: 14, question: "Explique o que é \"Phishing\" e dê um exemplo de como um criminoso tenta enganar uma pessoa por e-mail ou WhatsApp." },
      { id: 15, question: "Qual a diferença entre a proteção de um Firewall e a de um Antivírus?" },
      { id: 16, question: "Por que não devemos usar a mesma senha para todas as nossas contas (e-mail, redes sociais, escola)?" }
    ]
  },
  {
    id: 'antivirus-3',
    title: 'Antivírus Malwarebytes - Nível 3',
    description: 'Teste seus conhecimentos avançados de segurança digital. Engenharia social, falsos positivos, exploits de dia zero, verificação heurística e keyloggers.',
    password: 'IEPOP',
    iconType: 'antivirus',
    objectiveQuestions: [
      { id: 1, question: "O que é um \"Falso Positivo\" no contexto de um antivírus?", options: [ { id: "a", text: "Um vírus real que o antivírus finge que não existe" }, { id: "b", text: "Um arquivo legítimo e seguro que o antivírus identifica incorretamente como uma ameaça" }, { id: "c", text: "O resultado de uma verificação rápida" }, { id: "d", text: "Um vírus que foi removido com sucesso" } ], correctOptionId: "b" },
      { id: 2, question: "Se você tem certeza de que um arquivo é seguro, mas o Malwarebytes continua bloqueando-o, o que você deve fazer?", options: [ { id: "a", text: "Desinstalar o antivírus para sempre" }, { id: "b", text: "Adicionar o arquivo à lista de \"Exclusões\" ou \"Ignorar\" nas configurações do antivírus" }, { id: "c", text: "Mudar o nome do arquivo para \"virus.exe\"" }, { id: "d", text: "Excluir o arquivo" } ], correctOptionId: "b" },
      { id: 3, question: "O que é a ferramenta \"Malwarebytes Browser Guard\"?", options: [ { id: "a", text: "Um navegador de internet próprio do Malwarebytes" }, { id: "b", text: "Uma extensão de navegador gratuita que bloqueia anúncios, rastreadores e sites de phishing" }, { id: "c", text: "Um jogo de segurança cibernética" }, { id: "d", text: "Um cabo de rede protegido contra poeira" } ], correctOptionId: "b" },
      { id: 4, question: "O que é um ataque do tipo \"Exploit\"?", options: [ { id: "a", text: "Uma mensagem de e-mail maliciosa" }, { id: "b", text: "Um ataque que se aproveita de falhas ou vulnerabilidades de segurança em programas desatualizados para invadir o sistema" }, { id: "c", text: "Um vírus que desliga o monitor do computador" }, { id: "d", text: "Um tipo de tabela no Word" } ], correctOptionId: "b" },
      { id: 5, question: "Qual atitude ajuda a proteger o computador contra ataques de \"Exploits\"?", options: [ { id: "a", text: "Deixar todos os programas na versão mais antiga" }, { id: "b", text: "Manter o Sistema Operacional e todos os softwares instalados sempre atualizados" }, { id: "c", text: "Desativar o antivírus durante o dia" }, { id: "d", text: "Excluir o histórico do navegador diariamente" } ], correctOptionId: "b" },
      { id: 6, question: "O que significa \"Assinatura de Vírus\" no banco de dados de um antivírus?", options: [ { id: "a", text: "O autógrafo do criador do programa" }, { id: "b", text: "Um código de identificação que permite ao antivírus reconhecer um vírus específico já conhecido" }, { id: "c", text: "A licença de compra do programa Malwarebytes" }, { id: "d", text: "A senha do usuário administrador" } ], correctOptionId: "b" },
      { id: 7, question: "O que é uma verificação heurística no antivírus?", options: [ { id: "a", text: "Uma análise rápida que só olha o nome dos arquivos" }, { id: "b", text: "Um método que analisa o comportamento e estrutura de um arquivo para detectar vírus novos ainda desconhecidos" }, { id: "c", text: "Uma limpeza física dos componentes internos" }, { id: "d", text: "O envio de arquivos suspeitos para a lixeira" } ], correctOptionId: "b" },
      { id: 8, question: "O que faz um \"Keylogger\"?", options: [ { id: "a", text: "Um programa que organiza arquivos de texto por ordem alfabética" }, { id: "b", text: "Um tipo de malware que registra e grava tudo o que o usuário digita no teclado para roubar senhas" }, { id: "c", text: "Uma tecla de atalho do PowerPoint" }, { id: "d", text: "Uma ferramenta de pesquisa do Google Chrome" } ], correctOptionId: "b" },
      { id: 9, question: "A \"Proteção Web\" do Malwarebytes serve para:", options: [ { id: "a", text: "Aumentar a velocidade do Wi-Fi" }, { id: "b", text: "Impedir que você acesse sites conhecidos por distribuir malwares ou golpes" }, { id: "c", text: "Baixar arquivos de música mais rápido" }, { id: "d", text: "Criar apresentações de slides online" } ], correctOptionId: "b" },
      { id: 10, question: "O que é a \"Engenharia Social\"?", options: [ { id: "a", text: "O desenvolvimento de novas redes sociais" }, { id: "b", text: "Técnicas de manipulação psicológica para fazer as pessoas revelarem senhas ou dados confidenciais" }, { id: "c", text: "A construção de computadores mais rápidos" }, { id: "d", text: "O curso superior para aprender a programar antivírus" } ], correctOptionId: "b" },
      { id: 11, question: "Se o Malwarebytes Premium alertar sobre um \"Bloqueio de IP\", isso significa que:", options: [ { id: "a", text: "Sua internet foi cancelada pelo provedor" }, { id: "b", text: "Um programa do seu PC tentou se conectar ou recebeu conexões de um servidor perigoso na web" }, { id: "c", text: "A senha do seu roteador está incorreta" }, { id: "d", text: "O monitor do computador vai quebrar em breve" } ], correctOptionId: "b" },
      { id: 12, question: "O que caracteriza uma ameaça do tipo \"Zero-Day\" (Dia Zero)?", options: [ { id: "a", text: "Um vírus que expira após 24 horas" }, { id: "b", text: "Uma vulnerabilidade de segurança recém-descoberta para a qual ainda não existe correção ou vacina" }, { id: "c", text: "Uma verificação que dura zero minutos" }, { id: "d", text: "O antivírus na versão gratuita" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "O que é uma ameaça do tipo \"Zero-Day\" (Dia Zero) e por que ela é difícil de ser detectada por métodos tradicionais?" },
      { id: 14, question: "Explique o conceito de \"Heurística\" no funcionamento dos antivírus modernos." },
      { id: 15, question: "O que é um \"Falso Positivo\" e qual procedimento correto devemos fazer no Malwarebytes para usar o programa legítimo bloqueado?" },
      { id: 16, question: "Descreva como funciona um malware do tipo \"Keylogger\" e qual o principal perigo de ter um instalado no computador." }
    ]
  },

  // ===================================================================
  // CANVA
  // ===================================================================
  {
    id: 'canva-1',
    title: 'Canva - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o Canva: criação de conta, busca de templates, edição de textos, inserção de elementos e exportação de designs.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que é o Canva?", options: [ { id: "a", text: "Um editor de design gráfico fácil de usar que roda direto no navegador" }, { id: "b", text: "Um programa para programar robôs e automações" }, { id: "c", text: "Um sistema operacional para computadores de mesa" }, { id: "d", text: "Um antivírus focado em segurança de redes" } ], correctOptionId: "a" },
      { id: 2, question: "Qual é o principal benefício de usar o Canva para quem não é designer profissional?", options: [ { id: "a", text: "Oferecer milhares de modelos (templates) prontos e fáceis de editar" }, { id: "b", text: "Escrever textos automáticos no Word" }, { id: "c", text: "Editar códigos de programação em C++" }, { id: "d", text: "Aumentar o espaço de armazenamento do disco rígido" } ], correctOptionId: "a" },
      { id: 3, question: "Para começar a usar o Canva, o que é necessário fazer primeiro?", options: [ { id: "a", text: "Criar uma conta usando um e-mail ou conta Google/Facebook" }, { id: "b", text: "Comprar um computador superpotente gamer" }, { id: "c", text: "Fazer um curso de programação avançada" }, { id: "d", text: "Instalar o Linux no computador" } ], correctOptionId: "a" },
      { id: 4, question: "Para que serve a barra de pesquisa na página inicial do Canva?", options: [ { id: "a", text: "Para encontrar modelos prontos de designs como cartazes, logotipos ou posts" }, { id: "b", text: "Para pesquisar sites no Google" }, { id: "c", text: "Para buscar vírus no computador" }, { id: "d", text: "Para formatar o computador" } ], correctOptionId: "a" },
      { id: 5, question: "Se você quiser adicionar uma caixa de texto ao seu design, qual guia você deve usar no painel lateral?", options: [ { id: "a", text: "Texto" }, { id: "b", text: "Elementos" }, { id: "c", text: "Uploads" }, { id: "d", text: "Desenho" } ], correctOptionId: "a" },
      { id: 6, question: "Como você pode mudar a cor de um elemento ou texto selecionado no Canva?", options: [ { id: "a", text: "Clicando no quadrado colorido que aparece na barra de ferramentas superior" }, { id: "b", text: "Mudando a senha do seu usuário do Canva" }, { id: "c", text: "Reiniciando o navegador Google Chrome" }, { id: "d", text: "Clicando no botão de salvar do computador" } ], correctOptionId: "a" },
      { id: 7, question: "O que encontramos na guia \"Elementos\" do Canva?", options: [ { id: "a", text: "Figuras, formas geométricas, adesivos, linhas, fotos e gráficos" }, { id: "b", text: "Instaladores de programas de terceiros" }, { id: "c", text: "O histórico de navegação do seu Chrome" }, { id: "d", text: "Pastas de arquivos do seu Windows" } ], correctOptionId: "a" },
      { id: 8, question: "Para aumentar ou diminuir o tamanho de uma imagem no design sem distorcê-la, o correto é:", options: [ { id: "a", text: "Clicar e arrastar um dos círculos localizados nos cantos da imagem" }, { id: "b", text: "Esticar apenas a borda lateral direita com muita força" }, { id: "c", text: "Recortar a foto pela metade na guia Ajustar" }, { id: "d", text: "Excluir o elemento e inseri-lo de novo com o tamanho diferente" } ], correctOptionId: "a" },
      { id: 9, question: "Qual botão no canto superior direito usamos para baixar o nosso design finalizado?", options: [ { id: "a", text: "Compartilhar e depois a opção Baixar" }, { id: "b", text: "Criar novo modelo" }, { id: "c", text: "Apresentar em tela cheia" }, { id: "d", text: "Excluir design" } ], correctOptionId: "a" },
      { id: 10, question: "Qual formato é mais recomendado para exportar um design de imagem estática simples?", options: [ { id: "a", text: "PNG ou JPG" }, { id: "b", text: "MP3 ou WAV" }, { id: "c", text: "HTML ou CSS" }, { id: "d", text: "EXE ou MSI" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique com suas palavras o que é o Canva e cite pelo menos dois tipos de artes que podemos criar nele." },
      { id: 12, question: "O que são os \"modelos\" (templates) do Canva e como eles ajudam quem não tem experiência em criar designs?" },
      { id: 13, question: "Descreva o passo a passo para alterar a cor e o tamanho de um texto que você acabou de adicionar em um design no Canva." }
    ]
  },
  {
    id: 'canva-2',
    title: 'Canva - Nível 2',
    description: 'Teste seus conhecimentos intermediários sobre o Canva: uploads de mídias, agrupamento, controle de camadas, transparência, grades de design e colaboração.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que significa fazer um \"Upload\" no Canva?", options: [ { id: "a", text: "Enviar fotos, vídeos ou áudios do seu próprio dispositivo para usar nos seus designs" }, { id: "b", text: "Baixar o design pronto para a pasta de Downloads do seu PC" }, { id: "c", text: "Excluir imagens antigas salvas na sua conta" }, { id: "d", text: "Compartilhar o design publicamente nas redes sociais" } ], correctOptionId: "a" },
      { id: 2, question: "Como podemos agrupar dois ou mais elementos para que eles se movam ou sejam dimensionados juntos?", options: [ { id: "a", text: "Selecionando todos os elementos juntos e clicando no botão \"Agrupar\"" }, { id: "b", text: "Colocando todos na mesma cor de fundo" }, { id: "c", text: "Excluindo um dos elementos e colando por cima" }, { id: "d", text: "Dando dois cliques em cada um dos elementos rapidamente" } ], correctOptionId: "a" },
      { id: 3, question: "Se você inseriu uma imagem e ela cobriu um texto, qual recurso você usa para organizar as posições?", options: [ { id: "a", text: "Clicar em Posição e escolher Recuar ou Enviar para trás" }, { id: "b", text: "Apagar o texto e escrevê-lo na imagem antes de subir" }, { id: "c", text: "Diminuir a transparência da imagem para 0%" }, { id: "d", text: "Trocar a cor do texto para branco" } ], correctOptionId: "a" },
      { id: 4, question: "Para que serve o controle de \"Transparência\" (ícone quadriculado) no Canva?", options: [ { id: "a", text: "Para alterar a opacidade do elemento, tornando-o mais ou menos visível" }, { id: "b", text: "Para apagar a imagem de forma definitiva" }, { id: "c", text: "Para salvar a imagem in formato transparente PNG" }, { id: "d", text: "Para alterar a cor de preenchimento do texto" } ], correctOptionId: "a" },
      { id: 5, question: "Como funcionam as \"Grades\" (Grids) e \"Quadros\" (Frames) de fotos no Canva?", options: [ { id: "a", text: "Recortam e adaptam automaticamente as fotos arrastadas para dentro deles no formato correto" }, { id: "b", text: "Bloqueiam o design para que ninguém mais edite" }, { id: "c", text: "Adicionam molduras coloridas de neon ao redor do design" }, { id: "d", text: "Reduzem o tamanho do arquivo final automaticamente" } ], correctOptionId: "a" },
      { id: 6, question: "Qual atalho de teclado ou botão permite duplicar rapidamente um elemento selecionado?", options: [ { id: "a", text: "Ctrl + D (ou botão Duplicar)" }, { id: "b", text: "Ctrl + Z" }, { id: "c", text: "Ctrl + X" }, { id: "d", text: "Alt + F4" } ], correctOptionId: "a" },
      { id: 7, question: "Para aplicar efeitos de estilo em um texto (como Sombreado, Flutuante ou Contorno), usamos:", options: [ { id: "a", text: "Selecionar o texto e clicar em Efeitos na barra superior" }, { id: "b", text: "Ir na aba Desenhar e pintar à mão" }, { id: "c", text: "Mudar a fonte do texto para Arial Black" }, { id: "d", text: "Baixar o texto e reenviá-lo como imagem" } ], correctOptionId: "a" },
      { id: 8, question: "Como você compartilha um design para que outra pessoa possa editar em tempo real com você?", options: [ { id: "a", text: "Clica em Compartilhar, digita o e-mail dela ou ativa o link de colaboração com permissão de edição" }, { id: "b", text: "Salva o arquivo em PDF e envia pelo WhatsApp" }, { id: "c", text: "Tira um print screen da tela e envia por e-mail" }, { id: "d", text: "Baixa o arquivo como vídeo MP4" } ], correctOptionId: "a" },
      { id: 9, question: "Para reverter rapidamente uma alteração indesejada (como deletar algo sem querer), o atalho correto é:", options: [ { id: "a", text: "Ctrl + Z (Desfazer)" }, { id: "b", text: "Ctrl + C (Copiar)" }, { id: "c", text: "Ctrl + Y (Refazer)" }, { id: "d", text: "Ctrl + S (Salvar)" } ], correctOptionId: "a" },
      { id: 10, question: "Qual formato de arquivo do Canva é o mais indicado para impressão física profissional?", options: [ { id: "a", text: "PDF para impressão" }, { id: "b", text: "PNG em baixa resolução" }, { id: "c", text: "Vídeo MP4" }, { id: "d", text: "GIF animado" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique a diferença prática entre fazer um \"Upload\" no Canva e escolher um item da biblioteca de \"Elementos\"." },
      { id: 12, question: "Como a ferramenta \"Posição\" (enviar para trás/trazer para frente) ajuda a organizar as camadas de um design complexo?" },
      { id: 13, question: "Descreva uma situação na escola ou no trabalho em que seria útil usar a opção de compartilhar o design para edição colaborativa." }
    ]
  },
  {
    id: 'canva-3',
    title: 'Canva - Nível 3',
    description: 'Teste seus conhecimentos avançados no Canva Pro: Kits de Marca, removedor de fundo, animações, apresentações interativas e exportações avançadas.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que é o \"Kit de Marca\" (Brand Kit) disponível no Canva Pro?", options: [ { id: "a", text: "Um painel para salvar fontes, logotipos e paletas de cores oficiais de uma marca ou instituição" }, { id: "b", text: "Uma pasta com jogos e passatempos criados por designers" }, { id: "c", text: "Um kit físico com canetas e papéis que o Canva envia para a sua casa" }, { id: "d", text: "Um antivírus integrado que protege os arquivos do Canva" } ], correctOptionId: "a" },
      { id: 2, question: "Como funciona a ferramenta \"Removedor de Fundo\" (Background Remover) no Canva Pro?", options: [ { id: "a", text: "Identifica e apaga automaticamente o fundo de fotos com inteligência artificial" }, { id: "b", text: "Muda a cor de fundo de todos os slides para preto" }, { id: "c", text: "Remove as páginas duplicadas do seu documento" }, { id: "d", text: "Exclui as imagens do seu computador" } ], correctOptionId: "a" },
      { id: 3, question: "Qual a diferença entre aplicar uma animação de \"Elemento\" e uma de \"Página\"?", options: [ { id: "a", text: "A de Elemento move apenas um objeto específico; a de Página aplica movimento a todos os elementos da página de uma só vez" }, { id: "b", text: "Não há diferença, ambas fazem a mesma coisa" }, { id: "c", text: "A de Elemento toca som; a de Página exibe legendas" }, { id: "d", text: "A de Página é gratuita e a de Elemento é paga" } ], correctOptionId: "a" },
      { id: 4, question: "Qual recurso do Canva Pro permite redimensionar um design pronto para vários formatos de forma inteligente e rápida?", options: [ { id: "a", text: "Redimensionamento Mágico (Magic Resizer)" }, { id: "b", text: "Recortar imagem automática" }, { id: "c", text: "Ajustar margens" }, { id: "d", text: "Duplicar página" } ], correctOptionId: "a" },
      { id: 5, question: "Como funciona a ferramenta Canva Live durante uma apresentação?", options: [ { id: "a", text: "Gera um link para que a audiência envie perguntas ou comentários em tempo real na tela do apresentador" }, { id: "b", text: "Transmite o design diretamente para a televisão da sala via antena" }, { id: "c", text: "Grava a tela do computador em formato de CD" }, { id: "d", text: "Muda o design do slide de forma aleatória" } ], correctOptionId: "a" },
      { id: 6, question: "A ferramenta de Planejador de Conteúdo (Content Planner) do Canva Pro serve para:", options: [ { id: "a", text: "Agendar a postagem automática de designs diretamente nas redes sociais" }, { id: "b", text: "Planejar as tarefas da escola com alarmes sonoros" }, { id: "c", text: "Fazer uma limpeza de arquivos no computador do usuário" }, { id: "d", text: "Organizar as fotos da sua galeria de uploads" } ], correctOptionId: "a" },
      { id: 7, question: "Ao baixar um arquivo em \"PDF para Impressão\", para que serve a opção de \"Marcas de corte e sangria\"?", options: [ { id: "a", text: "Indicar onde a guilhotina deve cortar o papel impresso, garantindo que o design não fique com bordas brancas" }, { id: "b", text: "Colocar marcas d'água de proteção contra cópias ilegais" }, { id: "c", text: "Reduzir o tamanho final do arquivo para caber no e-mail" }, { id: "d", text: "Adicionar numeração automática nas folhas da apresentação" } ], correctOptionId: "a" },
      { id: 8, question: "O que é o formato SVG no Canva e por que ele é recomendado para logotipos profissionais?", options: [ { id: "a", text: "É um formato de vetor que pode ser ampliado infinitamente sem perder a qualidade da imagem" }, { id: "b", text: "É um formato de arquivo de vídeo ultra-compactado" }, { id: "c", text: "É uma música instrumental padrão para apresentações" }, { id: "d", text: "É uma planilha de notas escolares criptografada" } ], correctOptionId: "a" },
      { id: 9, question: "Como a ferramenta de equipes (Canva Teams) melhora a produtividade corporativa?", options: [ { id: "a", text: "Permite criar pastas compartilhadas, templates de equipe e gerenciar permissões de cada usuário" }, { id: "b", text: "Gera relatórios de notas automáticas de alunos" }, { id: "c", text: "Bloqueia o acesso a sites de jogos durante o trabalho" }, { id: "d", text: "Envia mensagens de texto via SMS automáticas" } ], correctOptionId: "a" },
      { id: 10, question: "Se você criar um design que contém animações de texto e adesivos se movendo com música de fundo, o formato de download ideal é:", options: [ { id: "a", text: "Vídeo MP4" }, { id: "b", text: "PDF Padrão" }, { id: "c", text: "PNG estático" }, { id: "d", text: "SVG vetorial" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Descreva as vantagens de se ter um \"Kit de Marca\" (Brand Kit) configurado no Canva Pro quando se trabalha em equipe." },
      { id: 12, question: "Como funciona a ferramenta de \"Redimensionamento Mágico\" (Magic Switch/Resize) e qual economia de tempo ela gera para profissionais de marketing?" },
      { id: 13, question: "Explique a diferença entre salvar um design em formato \"PDF Padrão\" e \"PDF para Impressão\" e quando utilizar cada um." }
    ]
  },

  // ===================================================================
  // WINDOWS VS LINUX
  // ===================================================================
  {
    id: 'systems-1',
    title: 'Windows vs Linux - Nível 1',
    description: 'Aprenda os conceitos básicos de Sistemas Operacionais e as diferenças essenciais entre Microsoft Windows e Linux.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "O que é um Sistema Operacional (S.O.)?", options: [ { id: "a", text: "O software principal que gerencia o hardware e permite que outros programas rodem no computador" }, { id: "b", text: "Um programa exclusivo para acessar a internet no celular" }, { id: "c", text: "Um jogo de computador com gráficos em 3D" }, { id: "d", text: "Uma pasta onde guardamos documentos de texto do Word" } ], correctOptionId: "a" },
      { id: 2, question: "Qual empresa é a criadora e proprietária do sistema operacional Windows?", options: [ { id: "a", text: "Microsoft" }, { id: "b", text: "Google" }, { id: "c", text: "Apple" }, { id: "d", text: "Linux Foundation" } ], correctOptionId: "a" },
      { id: 3, question: "Qual das seguintes características define melhor o Linux em relação à sua licença e código-fonte?", options: [ { id: "a", text: "É um sistema de código aberto (Open Source) e gratuito para qualquer pessoa usar ou modificar" }, { id: "b", text: "É um sistema pago de uso exclusivo da Microsoft" }, { id: "c", text: "É um programa que só pode ser instalado em celulares da Apple" }, { id: "d", text: "É um sistema proibido para uso comercial" } ], correctOptionId: "a" },
      { id: 4, question: "O que é a Interface Gráfica de Usuário (GUI) presente tanto no Windows quanto no Linux?", options: [ { id: "a", text: "O uso de janelas, ícones, botões e mouse para facilitar o uso do computador" }, { id: "b", text: "A tela preta onde digitamos comandos de texto difíceis" }, { id: "c", text: "A placa física de circuitos dentro do gabinete" }, { id: "d", text: "O cabo de força que liga o computador na tomada" } ], correctOptionId: "a" },
      { id: 5, question: "Como o sistema Linux é distribuído para os usuários?", options: [ { id: "a", text: "Por meio de diferentes versões modificadas chamadas de \"Distribuições\" ou \"Distros\"" }, { id: "b", text: "Somente através de lojas físicas autorizadas da Apple" }, { id: "c", text: "Em um único CD vendido em bancas de jornal pela Microsoft" }, { id: "d", text: "Apenas para governos de alguns países de forma secreta" } ], correctOptionId: "a" },
      { id: 6, question: "Qual das seguintes alternativas é uma distribuição Linux muito popular e recomendada para iniciantes?", options: [ { id: "a", text: "Ubuntu" }, { id: "b", text: "Windows 11 Home" }, { id: "c", text: "Android Oreo" }, { id: "d", text: "macOS Sequoia" } ], correctOptionId: "a" },
      { id: 7, question: "Qual o formato de arquivo de instalação de programas mais tradicional no sistema Windows?", options: [ { id: "a", text: ".exe ou .msi" }, { id: "b", text: ".apk" }, { id: "c", text: ".pdf" }, { id: "d", text: ".docx" } ], correctOptionId: "a" },
      { id: 8, question: "No Windows, qual ferramenta padrão usamos para ver nossas pastas, documentos e organizar nossos arquivos?", options: [ { id: "a", text: "Explorador de Arquivos (antigo Windows Explorer)" }, { id: "b", text: "Painel de Controle" }, { id: "c", text: "Gerenciador de Tarefas" }, { id: "d", text: "Microsoft Word" } ], correctOptionId: "a" },
      { id: 9, question: "Qual é uma das principais diferenças comerciais entre o Windows e o Linux?", options: [ { id: "a", text: "O Windows exige uma licença paga para uso legal em cada computador, enquanto o Linux pode ser baixado e instalado gratuitamente" }, { id: "b", text: "O Linux só roda em computadores muito caros, e o Windows roda em qualquer um" }, { id: "c", text: "O Windows é proibido para empresas e o Linux é de uso apenas doméstico" }, { id: "d", text: "Não há diferença comercial alguma, ambos são pagos pelo mesmo preço" } ], correctOptionId: "a" },
      { id: 10, question: "Qual é o mascote oficial do Linux?", options: [ { id: "a", text: "Tux, um pinguim simpático" }, { id: "b", text: "Uma janela azul" }, { id: "c", text: "Um robô verde chamado Andy" }, { id: "d", text: "Uma maçã mordida" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Qual a diferença conceitual entre um software proprietário (como o Windows) e um de código aberto (como o Linux)?" },
      { id: 12, question: "O que são as distribuições Linux (ou distros)? Cite o nome de uma distro de Linux." },
      { id: 13, question: "Por que muitas pessoas que não entendem de informática preferem comprar computadores que já vêm com o sistema Windows instalado de fábrica?" }
    ]
  },
  {
    id: 'systems-2',
    title: 'Windows vs Linux - Nível 2',
    description: 'Compreenda os pontos fortes de cada sistema: por que o Windows domina os jogos e softwares de design, e por que o Linux domina a programação e os servidores.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "Por que o Windows é o sistema operacional mais recomendado e utilizado por jogadores de PC (gamers)?", options: [ { id: "a", text: "Pela enorme compatibilidade com drivers de placas de vídeo e suporte nativo ao DirectX da Microsoft" }, { id: "b", text: "Porque jogos de computador não rodam em sistemas com interface gráfica" }, { id: "c", text: "Porque o Windows é de graça para jogar jogos online" }, { id: "d", text: "Porque o Linux não suporta o uso de mouse e teclado" } ], correctOptionId: "a" },
      { id: 2, question: "Em qual das seguintes áreas o sistema operacional Linux é o mais utilizado e dominante no mundo?", options: [ { id: "a", text: "Servidores de internet, servidores de nuvem e supercomputadores" }, { id: "b", text: "Computadores de escritórios domésticos de contabilidade" }, { id: "c", text: "Estações de jogos de videogames de última geração" }, { id: "d", text: "Edição de documentos de texto escolares para impressão rápida" } ], correctOptionId: "a" },
      { id: 3, question: "O que é o \"Terminal\" (ou Linha de Comando) no Linux?", options: [ { id: "a", text: "Uma interface textual onde o usuário digita comandos diretamente para controlar o sistema de forma ágil e potente" }, { id: "b", text: "Um cabo que conecta a placa-mãe ao disco de HD" }, { id: "c", text: "Uma tela de aviso que diz que o computador está com vírus perigoso" }, { id: "d", text: "A lixeira do Linux onde ficam os arquivos apagados" } ], correctOptionId: "a" },
      { id: 4, question: "No terminal do Linux, qual comando básico usamos para listar o conteúdo da pasta atual?", options: [ { id: "a", text: "ls" }, { id: "b", text: "cd" }, { id: "c", text: "mkdir" }, { id: "d", text: "ping" } ], correctOptionId: "a" },
      { id: 5, question: "Para mudar de pasta (entrar ou sair de um diretório) no terminal do Linux, usamos o comando:", options: [ { id: "a", text: "cd" }, { id: "b", text: "ls" }, { id: "c", text: "rm" }, { id: "d", text: "exit" } ], correctOptionId: "a" },
      { id: 6, question: "Por que o Linux é considerado, no uso diário, mais seguro contra infecções por vírus e malwares que o Windows?", options: [ { id: "a", text: "Pelo sistema rigoroso de permissões de usuário e porque a maioria dos malwares comuns na web são criados especificamente para Windows" }, { id: "b", text: "Porque o Linux vem com o Malwarebytes instalado por padrão na versão paga" }, { id: "c", text: "Porque não é possível baixar arquivos da internet usando o Linux" }, { id: "d", text: "Porque o Linux apaga arquivos baixados a cada 10 minutos automaticamente" } ], correctOptionId: "a" },
      { id: 7, question: "Qual a situação do pacote Microsoft Office (Word, Excel) e softwares da Adobe (Photoshop) em relação ao Linux?", options: [ { id: "a", text: "Não possuem versões nativas oficiais desenvolvidas para Linux, exigindo alternativas ou uso de emulação" }, { id: "b", text: "São pré-instalados de graça em todas as distribuições de Linux" }, { id: "c", text: "São bloqueados pela Microsoft e nunca podem ser usados em computadores com Linux" }, { id: "d", text: "Foram desenvolvidos originalmente para o Linux e depois adaptados para o Windows" } ], correctOptionId: "a" },
      { id: 8, question: "No Windows, qual ferramenta nativa equivale à interface de linha de comando (terminal) do Linux?", options: [ { id: "a", text: "Prompt de Comando (CMD) ou PowerShell" }, { id: "b", text: "Painel de Controle" }, { id: "c", text: "Explorador de Arquivos" }, { id: "d", text: "Bloco de Notas" } ], correctOptionId: "a" },
      { id: 9, question: "O que significa dizer que o Linux é um sistema mais \"leve\" que o Windows?", options: [ { id: "a", text: "Consome menos memória RAM e processamento, funcionando muito bem em computadores antigos ou com menor capacidade física" }, { id: "b", text: "O arquivo instalador dele pesa apenas 1 kilobyte" }, { id: "c", text: "Ele não permite que o usuário salve arquivos pesados como vídeos e músicas" }, { id: "d", text: "Ele tem menos opções de acessibilidade na tela inicial" } ], correctOptionId: "a" },
      { id: 10, question: "Qual das seguintes características de interface é uma grande vantagem do Linux?", options: [ { id: "a", text: "Permite escolher e alterar a interface gráfica inteira (Ambiente Desktop como GNOME, KDE Plasma ou XFCE)" }, { id: "b", text: "Tem exatamente o mesmo menu iniciar em todas as suas distribuições sem exceção" }, { id: "c", text: "É idêntico ao Windows em todas as telas, mudando apenas a cor de fundo" }, { id: "d", text: "Não permite mudar o papel de parede para economizar energia da CPU" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Por que o Windows é o sistema preferido de desenvolvedores de jogos e de quem tem um computador gamer? Dê exemplos de tecnologias envolvidas." },
      { id: 12, question: "Por que os profissionais da área de desenvolvimento de sistemas (programadores) frequentemente preferem usar Linux no dia a dia?" },
      { id: 13, question: "Explique a diferença de compatibilidade de grandes softwares comerciais (como Photoshop ou Microsoft Office) entre o Windows e o Linux." }
    ]
  },
  {
    id: 'systems-3',
    title: 'Windows vs Linux - Nível 3',
    description: 'Teste seus conhecimentos avançados de administração: gerenciadores de pacotes, permissões de arquivos, WSL, sistemas de arquivos corporativos e segurança.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "O que são gerenciadores de pacotes no Linux (como APT no Debian/Ubuntu ou DNF no Fedora)?", options: [ { id: "a", text: "Sistemas que baixam, instalam, atualizam e gerenciam programas automaticamente a partir de repositórios oficiais seguros via terminal" }, { id: "b", text: "Softwares de antivírus criados para detectar ransomware" }, { id: "c", text: "Utilitários que limpam a lixeira física e organizam pastas de arquivos" }, { id: "d", text: "Sistemas de backup em nuvem integrados ao Google Drive" } ], correctOptionId: "a" },
      { id: 2, question: "Como funciona o sistema de permissões de arquivos no Linux (comandos como chmod)?", options: [ { id: "a", text: "Define permissões de leitura (r), gravação (w) e execução (x) para o proprietário, grupo e outros usuários" }, { id: "b", text: "Criptografa o arquivo com uma senha que só o administrador root conhece" }, { id: "c", text: "Apaga os arquivos criados por usuários não autorizados a cada reinicialização do sistema" }, { id: "d", text: "Permite abrir arquivos sem ter que instalá-los na máquina" } ], correctOptionId: "a" },
      { id: 3, question: "Qual a grande vantagem financeira de usar Linux em servidores na nuvem (AWS, Azure) em vez de usar Windows Server?", options: [ { id: "a", text: "A ausência de custos de licenciamento por máquina instalada, além do menor consumo de RAM/CPU que reduz o custo de hardware virtual" }, { id: "b", text: "O Linux na nuvem dá desconto na energia elétrica da sede da empresa" }, { id: "c", text: "As empresas não pagam o tráfego de internet quando usam Linux" }, { id: "d", text: "O Windows Server não roda nos servidores de nuvem modernas" } ], correctOptionId: "a" },
      { id: 4, question: "Qual é o sistema de arquivos padrão do Windows moderno para organizar as tabelas de arquivos no HD ou SSD?", options: [ { id: "a", text: "NTFS" }, { id: "b", text: "Ext4" }, { id: "c", text: "FAT16" }, { id: "d", text: "APFS" } ], correctOptionId: "a" },
      { id: 5, question: "No Linux, qual é um dos sistemas de arquivos mais comuns e modernos utilizados em instalações padrões?", options: [ { id: "a", text: "Ext4" }, { id: "b", text: "NTFS" }, { id: "c", text: "APFS" }, { id: "d", text: "exFAT" } ], correctOptionId: "a" },
      { id: 6, question: "O que é o WSL (Windows Subsystem for Linux) integrado nas versões modernas do Windows 10 e 11?", options: [ { id: "a", text: "Uma ferramenta que permite rodar um ambiente Linux completo (linha de comando e utilitários) diretamente dentro do Windows, sem necessidade de máquina virtual pesada" }, { id: "b", text: "Um antivírus da Microsoft que verifica vírus de Linux" }, { id: "c", text: "Um adaptador físico para plugar HDs formatados in Linux no computador" }, { id: "d", text: "O novo nome da loja oficial do Windows (Microsoft Store)" } ], correctOptionId: "a" },
      { id: 7, question: "Em relação aos supercomputadores mais rápidos do planeta (TOP500), qual sistema operacional está presente na totalidade deles?", options: [ { id: "a", text: "Linux" }, { id: "b", text: "Windows Server" }, { id: "c", text: "macOS Enterprise" }, { id: "d", text: "Unix BSD proprietário" } ], correctOptionId: "a" },
      { id: 8, question: "Como funciona a administração de permissões em redes corporativas com Windows de forma centralizada?", options: [ { id: "a", text: "Através do Active Directory (AD) e de listas ACL (Access Control Lists) aplicadas ao sistema NTFS" }, { id: "b", text: "Alterando manualmente os arquivos de configuração em cada um dos computadores" }, { id: "c", text: "Através de chaves de permissão gravadas em pen drives dos funcionários" }, { id: "d", text: "Ao reconfigurar a senha de rede do Wi-Fi da empresa de hora em hora" } ], correctOptionId: "a" },
      { id: 9, question: "Qual a diferença entre a elevação de privilégios via terminal com o comando 'sudo' no Linux e no Windows?", options: [ { id: "a", text: "O 'sudo' concede poder de superusuário (root) temporariamente para aquele comando específico digitado, enquanto no Windows executamos um programa visual com privilégios de Administrador" }, { id: "b", text: "O 'sudo' desativa o antivírus do Linux por 1 hora, enquanto o Windows nunca desativa" }, { id: "c", text: "Não há diferença, pois o comando 'sudo' também é o padrão nativo de todas as versões antigas do Windows" }, { id: "d", text: "O 'sudo' exclui o arquivo de sistema do kernel de forma irreversível se usado incorretamente" } ], correctOptionId: "a" },
      { id: 10, question: "O que é o Kernel em termos técnicos de computação?", options: [ { id: "a", text: "O núcleo do sistema operacional que gerencia a comunicação direta entre os recursos de hardware (placas, memória) e os softwares" }, { id: "b", text: "O nome dado ao painel de configurações visuais da Área de Trabalho" }, { id: "c", text: "A lixeira física do sistema onde os dados ficam guardados antes de serem apagados" }, { id: "d", text: "A pasta que contém todos os documentos do Microsoft Office" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique como funciona o controle de permissões de arquivos no Linux (leitura, escrita e execução) e como isso contribui para a segurança do sistema." },
      { id: 12, question: "O que é o WSL (Windows Subsystem for Linux) e de que forma ele facilita o fluxo de trabalho de desenvolvedores que utilizam o Windows?" },
      { id: 13, question: "Se você fosse abrir uma empresa com 500 servidores na nuvem para hospedar um site, qual sistema operacional escolheria para os servidores e por quê? Justifique sua resposta baseado em custos e estabilidade." }
    ]
  },

  // ===================================================================
  // CHATGPT E INTELIGÊNCIA ARTIFICIAL (IA)
  // ===================================================================
  {
    id: 'ai-1',
    title: 'ChatGPT e IA - Nível 1',
    description: 'Aprenda os conceitos básicos sobre o ChatGPT, o que são prompts de comando, outras IAs conhecidas como Gemini e Claude, e por que a tecnologia ficou tão popular.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "O que é o ChatGPT?", options: [ { id: "a", text: "Um assistente de Inteligência Artificial conversacional que responde a perguntas, cria textos e resolve dúvidas em formato de chat" }, { id: "b", text: "Um aplicativo de edição de fotos profissionais para celulares" }, { id: "c", text: "Um navegador de internet seguro da Microsoft" }, { id: "d", text: "Um jogo de computador multiplayer online" } ], correctOptionId: "a" },
      { id: 2, question: "Qual empresa é a criadora do ChatGPT?", options: [ { id: "a", text: "OpenAI" }, { id: "b", text: "Google" }, { id: "c", text: "Microsoft" }, { id: "d", text: "Apple" } ], correctOptionId: "a" },
      { id: 3, question: "O que é um \"Prompt\" no contexto do uso de Inteligências Artificiais?", options: [ { id: "a", text: "A mensagem, pergunta ou comando de texto enviado pelo usuário para a IA responder" }, { id: "b", text: "O código secreto usado para hackear sistemas e senhas de internet" }, { id: "c", text: "O tempo que a IA leva para processar a sua pergunta antes de responder" }, { id: "d", text: "Uma pasta secreta instalada nas configurações do Windows" } ], correctOptionId: "a" },
      { id: 4, question: "Como se chama a Inteligência Artificial conversacional muito conhecida criada pelo Google?", options: [ { id: "a", text: "Gemini" }, { id: "b", text: "Claude" }, { id: "c", text: "Cortana" }, { id: "d", text: "Siri" } ], correctOptionId: "a" },
      { id: 5, question: "Como se chama a Inteligência Artificial desenvolvida pela empresa Anthropic?", options: [ { id: "a", text: "Claude" }, { id: "b", text: "Gemini" }, { id: "c", text: "ChatGPT" }, { id: "d", text: "Alexa" } ], correctOptionId: "a" },
      { id: 6, question: "Por que o ChatGPT é a ferramenta de Inteligência Artificial generativa mais conhecida e comentada do mundo?", options: [ { id: "a", text: "Por ter sido a pioneira ao abrir o acesso público gratuito de forma amigável no final de 2022, criando um grande impacto inicial" }, { id: "b", text: "Porque é a única IA que consegue funcionar sem internet no computador" }, { id: "c", text: "Porque ela foi inventada antes do próprio computador existir" }, { id: "d", text: "Porque é de propriedade de todos os governos do mundo juntos" } ], correctOptionId: "a" },
      { id: 7, question: "Quais das seguintes tarefas o ChatGPT pode auxiliar o usuário a realizar?", options: [ { id: "a", text: "Escrever redações, traduzir idiomas, explicar matérias escolares e revisar códigos de computação" }, { id: "b", text: "Limpar o teclado do computador de poeira física" }, { id: "c", text: "Lavar a louça ou arrumar a casa de forma física" }, { id: "d", text: "Conectar computadores de forma física sem usar cabos de internet" } ], correctOptionId: "a" },
      { id: 8, question: "Para acessar o ChatGPT ou o Gemini, qual o requisito essencial de tecnologia no dispositivo do usuário?", options: [ { id: "a", text: "Uma conexão ativa com a internet para se conectar aos servidores da IA" }, { id: "b", text: "Ter uma placa de vídeo gamer de última geração instalada" }, { id: "c", text: "Ter instalado exclusivamente o sistema operacional Linux" }, { id: "d", text: "Possuir uma conta de programador paga mensalmente" } ], correctOptionId: "a" },
      { id: 9, question: "Como o ChatGPT consegue formular textos e responder perguntas?", options: [ { id: "a", text: "Calculando a probabilidade de qual palavra deve vir em seguida com base no treinamento de textos massivos" }, { id: "b", text: "Copiando e colando respostas exatas direto de sites do Google em tempo real" }, { id: "c", text: "Através de uma pessoa real do suporte que digita a resposta do outro lado da tela" }, { id: "d", text: "Adivinhando o que o usuário quer por meio da webcam" } ], correctOptionId: "a" },
      { id: 10, question: "Podemos confiar cegamente em todas as respostas dadas pelas IAs como o ChatGPT?", options: [ { id: "a", text: "Não, as IAs podem cometer erros de lógica ou inventar fatos (fenômeno chamado de alucinação)" }, { id: "b", text: "Sim, os computadores nunca cometem erros e as IAs sabem tudo com 100% de precisão" }, { id: "c", text: "Sim, porque todas as respostas são revisadas por cientistas antes de aparecerem na tela" }, { id: "d", text: "Não, porque elas sempre mentem de propósito em todas as perguntas" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que é o ChatGPT, quem o criou e qual a sua principal utilidade?" },
      { id: 12, question: "O que é um \"prompt\" de comando no uso de Inteligências Artificiais e qual a importância de ser claro ao escrevê-lo?" },
      { id: 13, question: "Por que o ChatGPT se tornou muito mais famoso e conhecido em comparação a outras ferramentas como o Claude ou o Gemini?" }
    ]
  },
  {
    id: 'ai-2',
    title: 'ChatGPT e IA - Nível 2',
    description: 'Compreenda a engenharia de prompt básica, o problema das alucinações das IAs e compare as forças do ChatGPT, Gemini e Claude.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "O que significa o termo \"Alucinação\" no contexto de modelos de Inteligência Artificial?", options: [ { id: "a", text: "Quando a IA gera respostas falsas, incorretas ou inventadas com aparência de serem fatos reais com total convicção" }, { id: "b", text: "Quando o site da IA fica offline por causa do alto tráfego" }, { id: "c", text: "Quando a IA responde com uma velocidade muito lenta por estar cansada" }, { id: "d", text: "Um vírus que entra no computador por meio do chat" } ], correctOptionId: "a" },
      { id: 2, question: "Qual é a melhor forma de estruturar um Prompt para obter respostas excelentes?", options: [ { id: "a", text: "Definir um papel para a IA (ex: aja como professor), fornecer contexto, o objetivo claro e o formato de saída desejado" }, { id: "b", text: "Digitar apenas palavras soltas na caixa de pesquisa" }, { id: "c", text: "Escrever a pergunta em letras maiúsculas e gritar" }, { id: "d", text: "Usar o menor número de palavras possível sem explicar os detalhes" } ], correctOptionId: "a" },
      { id: 3, question: "Qual das seguintes características costuma destacar o Claude (da Anthropic) frente a outros concorrentes?", options: [ { id: "a", text: "Uma escrita de texto mais natural, excelente raciocínio de lógica complexa, programação e suporte a grandes janelas de contexto" }, { id: "b", text: "Ser totalmente de graça e não precisar de internet para rodar" }, { id: "c", text: "Pertencer à Microsoft e vir pré-instalado em todos os computadores Windows" }, { id: "d", text: "Gerar imagens e vídeos de forma rápida direto na caixa de conversa" } ], correctOptionId: "a" },
      { id: 4, question: "Qual a grande vantagem de usar o Google Gemini integrado ao ecossistema Google?", options: [ { id: "a", text: "Conexão direta com ferramentas de produtividade como Google Docs, Workspace, YouTube e pesquisas web em tempo real" }, { id: "b", text: "Permitir editar planilhas do Excel no formato offline" }, { id: "c", text: "Funcionar como antivírus para o navegador Chrome" }, { id: "d", text: "Ser o único que consegue criar códigos de programação complexos" } ], correctOptionId: "a" },
      { id: 5, question: "O que define a Inteligência Artificial \"Generativa\"?", options: [ { id: "a", text: "Tecnologia de IA focada em gerar novos conteúdos originais (textos, imagens, áudios ou códigos) a partir de comandos humanos" }, { id: "b", text: "Uma geração de computadores com chips de alta velocidade" }, { id: "c", text: "Programas de computador antigos que foram esquecidos no mercado" }, { id: "d", text: "Sistemas de automação de robôs industriais em fábricas físicas" } ], correctOptionId: "a" },
      { id: 6, question: "O que é a \"Janela de Contexto\" (Context Window) de uma Inteligência Artificial?", options: [ { id: "a", text: "A quantidade máxima de dados (tokens) que o modelo pode processar de uma só vez entre a sua pergunta e o histórico do chat" }, { id: "b", text: "O tamanho da janela de visualização do site no seu monitor" }, { id: "c", text: "O tempo máximo que você pode conversar com a IA antes dela fechar o navegador" }, { id: "d", text: "A versão do Windows onde a IA está sendo rodada" } ], correctOptionId: "a" },
      { id: 7, question: "Qual cuidado o usuário deve ter ao utilizar informações obtidas por IA em pesquisas escolares ou profissionais?", options: [ { id: "a", text: "Checar os fatos em fontes confiáveis (livros, sites oficiais, artigos) antes de publicar ou usar no trabalho" }, { id: "b", text: "Nenhum cuidado, pois as IAs são programadas por governos e nunca erram" }, { id: "c", text: "Copiar e colar sem alterar nada, para garantir que as palavras fiquem bonitas" }, { id: "d", text: "Usar apenas o ChatGPT e nunca os concorrentes como o Gemini" } ], correctOptionId: "a" },
      { id: 8, question: "Quais destas ferramentas de Inteligência Artificial generativa são muito conhecidas por focar na criação de imagens realistas a partir de textos?", options: [ { id: "a", text: "Midjourney e DALL-E" }, { id: "b", text: "Word e PowerPoint" }, { id: "c", text: "Windows e Linux" }, { id: "d", text: "Malwarebytes e Chrome" } ], correctOptionId: "a" },
      { id: 9, question: "Por que não é aconselhável enviar dados pessoais confidenciais (como fotos íntimas, senhas ou dados bancários) nos chats de IA gratuitos?", options: [ { id: "a", text: "Porque as empresas que desenvolvem as IAs utilizam o histórico de chat dos planos gratuitos para treinar e refinar seus modelos" }, { id: "b", text: "Porque a IA pode gastar seus créditos de internet se ler dados confidenciais" }, { id: "c", text: "Porque o computador vai travar e formatar automaticamente devido a regras de segurança do Windows" }, { id: "d", text: "Porque as IAs só entendem textos públicos de notícias cotidianas" } ], correctOptionId: "a" },
      { id: 10, question: "O que significa o termo \"Fine-tuning\" (Ajuste Fino) de uma Inteligência Artificial?", options: [ { id: "a", text: "Treinar um modelo básico existente com dados específicos e novos para torná-lo um especialista em uma área" }, { id: "b", text: "Diminuir o volume do computador para que a IA fale mais baixo" }, { id: "c", text: "Mudar as configurações visuais do site do ChatGPT para o modo escuro" }, { id: "d", text: "Apagar todas as respostas corretas que a IA deu anteriormente" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que são as alucinações em sistemas de Inteligência Artificial e de que forma podemos nos proteger delas em trabalhos acadêmicos?" },
      { id: 12, question: "Se você precisasse escolher entre o ChatGPT, o Gemini e o Claude para integrar com seu e-mail e fazer resumos de vídeos do YouTube, qual escolheria e por quê?" },
      { id: 13, question: "Por que não devemos enviar dados confidenciais (como senhas, dados de documentos ou segredos de empresas) nas caixas de chat das IAs comuns?" }
    ]
  },
  {
    id: 'ai-3',
    title: 'ChatGPT e IA - Nível 3',
    description: 'Aprofunde-se na tecnologia por trás dos modelos de linguagem (LLMs): APIs, RAG, privacidade de dados, multimidia e a arquitetura dos Transformers.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "Qual a principal diferença técnica e de qualidade entre os modelos gratuitos (como GPT-4o-mini) e os modelos avançados (como o GPT-4o completo)?", options: [ { id: "a", text: "Modelos avançados contam com maior capacidade de processamento, raciocínio lógico em matemática/programação, melhor compreensão de imagens e menor índice de erros" }, { id: "b", text: "Os modelos avançados funcionam totalmente offline sem gastar internet do computador" }, { id: "c", text: "Os modelos gratuitos inventam mais mentiras de propósito apenas para obrigar o usuário a pagar o plano Premium" }, { id: "d", text: "Os modelos avançados alteram o hardware do computador para aumentar a capacidade da memória RAM do PC" } ], correctOptionId: "a" },
      { id: 2, question: "O que é a API de um modelo como o ChatGPT e qual sua importância para o mercado empresarial?", options: [ { id: "a", text: "Uma interface de programação que permite integrar a inteligência do modelo da OpenAI de forma automatizada dentro de aplicativos, sistemas e softwares de outras empresas" }, { id: "b", text: "Uma extensão de navegador usada para bloquear anúncios publicitários nos sites" }, { id: "c", text: "A tela de chat colorida que os usuários comuns acessam para digitar perguntas diariamente" }, { id: "d", text: "O protocolo que impede que as IAs criem códigos de programação errados" } ], correctOptionId: "a" },
      { id: 3, question: "O que indica o termo \"Data Cutoff\" (data limite de conhecimento) de uma Inteligência Artificial?", options: [ { id: "a", text: "A data final até a qual o modelo foi treinado e possui dados históricos em sua própria rede neural sem precisar buscar dados da web" }, { id: "b", text: "O horário em que o servidor do site entra em manutenção diária" }, { id: "c", text: "O limite de tempo que o usuário tem para digitar uma frase antes do sistema travar" }, { id: "d", text: "O limite de idade permitido por lei para criar uma conta no site da OpenAI" } ], correctOptionId: "a" },
      { id: 4, question: "O que é a técnica RAG (Retrieval-Augmented Generation) utilizada no desenvolvimento de sistemas corporativos com IA?", options: [ { id: "a", text: "Uma técnica onde a IA pesquisa primeiro em bancos de dados ou documentos externos para depois formular a resposta final, garantindo respostas exatas e sem alucinações" }, { id: "b", text: "Um antivírus especial que impede a invasão de hackers nos servidores da OpenAI" }, { id: "c", text: "A criação de novos robôs físicos que conseguem ler livros de papel em segundos" }, { id: "d", text: "A exclusão de dados antigos de conversas para economizar espaço de armazenamento" } ], correctOptionId: "a" },
      { id: 5, question: "Como grandes empresas lidam com as regras de privacidade (LGPD/GDPR) ao usarem modelos da OpenAI via API?", options: [ { id: "a", text: "Ao usar a API ou contas empresariais de nível corporativo, onde os termos garantem que a OpenAI não treinará seus modelos com os dados enviados" }, { id: "b", text: "Eles desligam os computadores dos funcionários antes de enviarem dados sigilosos" }, { id: "c", text: "Eles renomeiam os dados confidenciais para que fiquem com nomes falsos de receitas culinárias" }, { id: "d", text: "A OpenAI não permite o uso de IAs por empresas comerciais regulamentadas" } ], correctOptionId: "a" },
      { id: 6, question: "O que significa dizer que um modelo de Inteligência Artificial é \"Multimodal\"?", options: [ { id: "a", text: "Que ele consegue processar e gerar respostas mesclando diferentes mídias como texto, imagens, áudio e vídeo ao mesmo tempo" }, { id: "b", text: "Que ele pode ser acessado em múltiplos sistemas operacionais ao mesmo tempo" }, { id: "c", text: "Que ele possui várias janelas de chat abertas simultaneamente na tela" }, { id: "d", text: "Que ele usa diferentes tipos de moedas para cobrar a mensalidade do usuário" } ], correctOptionId: "a" },
      { id: 7, question: "O que é o RLHF (Reinforcement Learning from Human Feedback) no treinamento das Inteligências Artificiais?", options: [ { id: "a", text: "Uma técnica de aprendizado onde humanos dão notas e corrigem as respostas da IA para ensiná-la a ser mais útil, educada e segura" }, { id: "b", text: "Um curso para ensinar idosos a utilizarem o computador e celular com IAs" }, { id: "c", text: "A programação da IA para que ela corrija erros de digitação do teclado físico" }, { id: "d", text: "Um teste de estresse que aumenta o calor físico dos processadores in data centers" } ], correctOptionId: "a" },
      { id: 8, question: "O que caracteriza os chamados \"Agentes de IA\" (AI Agents)?", options: [ { id: "a", text: "Sistemas capazes de planejar, tomar decisões e executar sequências complexas de tarefas usando ferramentas digitais sem supervisão humana constante" }, { id: "b", text: "Pessoas humanas que trabalham vendendo licenças de software de IA" }, { id: "c", text: "Um modelo de IA que responde apenas por e-mail comercial uma vez por dia" }, { id: "d", text: "Os cabos que fazem a conexão dos servidores da internet" } ], correctOptionId: "a" },
      { id: 9, question: "Qual a função dos novos modelos focados em \"Raciocínio\" (como a família OpenAI o1 ou o modo Reason do Claude)?", options: [ { id: "a", text: "Executar um pensamento sistemático interno de passo a passo antes de formular a resposta para resolver problemas difíceis de exatas e programação" }, { id: "b", text: "Adivinhar os dados pessoais do usuário analisando o tom da sua voz no áudio" }, { id: "c", text: "Garantir que a IA nunca dê respostas negativas ou duras para o usuário" }, { id: "d", text: "Pesquisar de forma aleatória em fóruns de discussões da internet" } ], correctOptionId: "a" },
      { id: 10, question: "Qual arquitetura revolucionária de redes neurais, apresentada em 2017, possibilitou o boom atual de modelos de linguagem como o ChatGPT?", options: [ { id: "a", text: "Transformers" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que é um modelo de IA multimodal? Explique um caso de uso em que a combinação de diferentes tipos de mídia é essencial." },
      { id: 12, question: "Explique como funciona o fluxo de trabalho da tecnologia RAG (Retrieval-Augmented Generation) e de que forma ela soluciona o problema da desatualização de dados e alucinações em empresas." },
      { id: 13, question: "Aborde as discussões éticas e legais envolvendo o uso de dados protegidos por direitos autorais para o treinamento inicial de grandes redes de inteligência artificial (LLMs)." }
    ]
  },
  {
    id: 'desafio-completo',
    title: '🏆 Desafio Completo - Prova Geral (40 Questões)',
    description: 'Prova geral com 40 perguntas de nível fácil (sem nível 3), divididas igualmente em 5 módulos: Word, Google, ChatGPT, Antivírus Malwarebytes e Canva (8 questões cada).',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      // MÓDULO 1: WORD (8 QUESTÕES)
      { id: 1, question: "[Word] O que é o Microsoft Word?", options: [ { id: "a", text: "Um programa de computador voltado para a criação e edição de documentos digitais" }, { id: "b", text: "Um editor profissional para corte e montagem de vídeos em alta resolução" }, { id: "c", text: "Um reprodutor de áudio para execução de arquivos digitais de música" }, { id: "d", text: "Um software cartográfico destinado ao desenho de mapas geográficos" } ], correctOptionId: "a" },
      { id: 2, question: "[Word] Qual botão no Word deixa o texto em Negrito (letras mais escuras)?", options: [ { id: "a", text: "Botão N (Negrito), que destaca os caracteres com traços mais grossos" }, { id: "b", text: "Botão I (Itálico), que alinha e inclina o texto ligeiramente à direita" }, { id: "c", text: "Botão S (Sublinhado), que desenha uma linha reta contínua abaixo das letras" }, { id: "d", text: "Botão X (Recortar), que remove o trecho selecionado enviando à memória" } ], correctOptionId: "a" },
      { id: 3, question: "[Word] Qual atalho do teclado é usado no Word em português para Salvar o documento?", options: [ { id: "a", text: "Atalho Ctrl + S (ou Ctrl + B no Word em português) para gravar as alterações" }, { id: "b", text: "Atalho Ctrl + P para enviar as páginas formatadas para a impressora conectada" }, { id: "c", text: "Atalho Ctrl + Z para cancelar e desfazer imediatamente a última açãofeita" }, { id: "d", text: "Atalho Alt + F4 para encerrar a janela do aplicativo em execução no sistema" } ], correctOptionId: "a" },
      { id: 4, question: "[Word] Para alterar o tamanho ou estilo da fonte do texto, em qual guia devemos ir?", options: [ { id: "a", text: "Guia Layout da Página, responsável pelas margens e orientação do papel" }, { id: "b", text: "Guia Página Inicial, onde ficam localizados os painéis de Fonte e Parágrafo" }, { id: "c", text: "Guia Exibir, onde ajustamos os modos de visualização e ferramentas de Zoom" }, { id: "d", text: "Guia Desenhar, que oferece pincéis e canetas para rabiscos à mão livre" } ], correctOptionId: "b" },
      { id: 5, question: "[Word] O que a opção 'Centralizar' faz com o texto selecionado?", options: [ { id: "a", text: "Alinha todas as linhas do texto exatamente junto à margem esquerda da folha" }, { id: "b", text: "Posiciona o texto selecionado perfeitamente no centro horizontal da folha" }, { id: "c", text: "Apaga o texto selecionado e limpa todo o conteúdo do parágrafo atual" }, { id: "d", text: "Transfoma automaticamente todas as letras do texto em caracteres maiúsculos" } ], correctOptionId: "b" },
      { id: 6, question: "[Word] Como inserimos uma imagem salva no computador dentro do documento?", options: [ { id: "a", text: "Acessando o menu Inserir > opção Imagens > Este Dispositivo no topo da tela" }, { id: "b", text: "Acessando o menu Arquivo > opção Imprimir para enviar o documento para o papel" }, { id: "c", text: "Acessando o menu Exibir > opção Zoom para aproximar a folha de trabalho" }, { id: "d", text: "Acessando o menu Estrutura > opção Cor da Página para mudar o fundo da folha" } ], correctOptionId: "a" },
      { id: 7, question: "[Word] Qual ferramenta do Word é usada para identificar e corrigir erros de digitação?", options: [ { id: "a", text: "Ferramenta de Mala Direta para envio automatizado de cartas personalizadas" }, { id: "b", text: "Verificação Ortográfica e Gramatical (tecla F7) que destaca termos incorretos" }, { id: "c", text: "Tabela Dinâmica para cruzamento e análise de grandes volumes de dados" }, { id: "d", text: "Quebra de Seção para separar diferentes formatos de páginas no mesmo arquivo" } ], correctOptionId: "b" },
      { id: 8, question: "[Word] Qual o objetivo de utilizar a ferramenta 'Cabeçalho e Rodapé' no Word?", options: [ { id: "a", text: "Inserir informações fixas como títulos e números nas margens superiores e inferiores" }, { id: "b", text: "Alterar a cor de fundo de todas as letras do documento para o modo escuro" }, { id: "c", text: "Criar equações matemáticas complexas e gráficos tridimensionais no texto" }, { id: "d", text: "Formatar o computador limpando os arquivos temporários armazenados no disco" } ], correctOptionId: "a" },

      // MÓDULO 2: GOOGLE (8 QUESTÕES)
      { id: 9, question: "[Google] O que é o Google Chrome?", options: [ { id: "a", text: "Um utilitário de segurança voltado para remover vírus e malwares do sistema" }, { id: "b", text: "Um navegador de internet moderno utilizado para acessar páginas e sites da web" }, { id: "c", text: "Um jogo eletrônico educativo de simulação instalado nativamente no Windows" }, { id: "d", text: "Um reprodutor multimídia utilizado para sintonizar rádios e arquivos de áudio" } ], correctOptionId: "b" },
      { id: 10, question: "[Google] No Google Chrome, para que serve o ícone de Estrela (Favoritos)?", options: [ { id: "a", text: "Para fechar imediatamente a aba do site que está aberta no navegador" }, { id: "b", text: "Para salvar o endereço do site e permitir acessá-lo rapidamente no futuro" }, { id: "c", text: "Para enviar a página aberta diretamente para a impressora do computador" }, { id: "d", text: "Para traduzir automaticamente o conteúdo do site para o idioma português" } ], correctOptionId: "b" },
      { id: 11, question: "[Google] O que é o Google Drive?", options: [ { id: "a", text: "Um serviço de armazenamento de arquivos em nuvem acessível de qualquer aparelho" }, { id: "b", text: "Um cabo físico especial utilizado para conectar a impressora ao computador" }, { id: "c", text: "Um jogo de corrida interativo desenvolvido para dispositivos móveis" }, { id: "d", text: "Um programa voltado exclusivamente para a edição de faixas de música" } ], correctOptionId: "a" },
      { id: 12, question: "[Google] Qual atalho do teclado abre uma Nova Aba no Google Chrome?", options: [ { id: "a", text: "Pressionar Ctrl + T no teclado para abrir uma nova guia limpa de navegação" }, { id: "b", text: "Pressionar Ctrl + W no teclado para encerrar a janela ativa do navegador" }, { id: "c", text: "Pressionar Ctrl + H no teclado para exibir o histórico recente de sites visitados" }, { id: "d", text: "Pressionar Ctrl + J no teclado para visualizar a lista de downloads realizados" } ], correctOptionId: "a" },
      { id: 13, question: "[Google] O que é o Google Documentos (Google Docs)?", options: [ { id: "a", text: "Um aplicativo para envio de mensagens de texto via SMS em telefones celulares" }, { id: "b", text: "Um editor de texto online que permite a colaboração simultânea na internet" }, { id: "c", text: "Uma ferramenta de planilhas financeiras com fórmulas matemáticas avançadas" }, { id: "d", text: "Um reprodutor de mídia para transmissão de filmes e vídeos em alta definição" } ], correctOptionId: "b" },
      { id: 14, question: "[Google] O que acontece ao navegar usando uma 'Janela Anônima' no Chrome?", options: [ { id: "a", text: "O navegador não salva o histórico de páginas visitadas nem os cookies no computador" }, { id: "b", text: "A velocidade da conexão com a internet é duplicada automaticamente pelo sistema" }, { id: "c", text: "O computador fica totalmente imune a qualquer tipo de queda no sinal de energia" }, { id: "d", text: "Todas as senhas gravadas na conta do usuário são apagadas de maneira definitiva" } ], correctOptionId: "a" },
      { id: 15, question: "[Google] Ao fazer uma busca no Google, para que serve o filtro 'Imagens'?", options: [ { id: "a", text: "Para filtrar e exibir exclusivamente resultados contendo vídeos do YouTube" }, { id: "b", text: "Para filtrar a busca mostrando somente fotos e figuras relacionadas ao tema" }, { id: "c", text: "Para listar softwares e jogos disponíveis para instalação imediata no PC" }, { id: "d", text: "Para exibir apenas matérias jornalísticas de grandes jornais de texto impresso" } ], correctOptionId: "b" },
      { id: 16, question: "[Google] Para que serve a ferramenta 'Google Apresentações' (Google Slides)?", options: [ { id: "a", text: "Criar e exibir apresentações de slides com imagens, textos e transições visuais" }, { id: "b", text: "Gerenciar as senhas de acesso aos aplicativos bancários e cartões do usuário" }, { id: "c", text: "Editar códigos de programação complexos em linguagens como C++ e Java" }, { id: "d", text: "Medir a temperatura interna do processador e dos pentes de memória RAM" } ], correctOptionId: "a" },

      // MÓDULO 3: CHATGPT (8 QUESTÕES)
      { id: 17, question: "[ChatGPT] O que é o ChatGPT?", options: [ { id: "a", text: "Um software antivírus que monitora portas de rede bloqueando códigos maliciosos" }, { id: "b", text: "Um assistente virtual de inteligência artificial interativo que responde perguntas" }, { id: "c", text: "Uma rede social voltada para compartilhamento de fotografias e vídeos curtos" }, { id: "d", text: "Um jogo de cartas e estratégia disputado online entre vários jogadores" } ], correctOptionId: "b" },
      { id: 18, question: "[ChatGPT] Como é chamada a mensagem ou comando que digitamos para a IA responder?", options: [ { id: "a", text: "Prompt (ou instrução de comando) que orienta a geração da resposta pela IA" }, { id: "b", text: "Vírus (ou código nocivo) que pode alterar o comportamento do sistema operacional" }, { id: "c", text: "Cookie (ou pequeno arquivo) que armazena dados de navegação no navegador" }, { id: "d", text: "Backup (ou cópia de segurança) criado para restaurar dados em emergências" } ], correctOptionId: "a" },
      { id: 19, question: "[ChatGPT] Como o ChatGPT pode ajudar você no dia a dia ou nos estudos?", options: [ { id: "a", text: "Explicando conceitos difíceis, resumindo textos e sugerindo ideias estruturadas" }, { id: "b", text: "Efetuando a limpeza física dos componentes de hardware e periféricos do gabinete" }, { id: "c", text: "Reparando problemas de hardware na placa de rede quando o sinal Wi-Fi cai" }, { id: "d", text: "Imprimindo folhas de papel sem consumir os cartuchos de tinta da impressora" } ], correctOptionId: "a" },
      { id: 20, question: "[ChatGPT] Qual cuidado devemos ter ao usar respostas geradas por IA em pesquisas?", options: [ { id: "a", text: "Nenhum cuidado especial, pois as redes neurais da IA nunca cometem erros de fato" }, { id: "b", text: "Conferir as informações geradas, pois a IA pode apresentar dados imprecisos ou falsos" }, { id: "c", text: "Evitar utilizar a IA para aprendizado, pois seu uso é proibido por legislações digitais" }, { id: "d", text: "Restringir o acesso aos sistemas de IA exclusivamente para professores credenciados" } ], correctOptionId: "b" },
      { id: 21, question: "[ChatGPT] Além do ChatGPT, qual destas é outra Inteligência Artificial muito famosa desenvolvida pelo Google?", options: [ { id: "a", text: "Google Gemini, o modelo de linguagem principal integrado aos serviços do Google" }, { id: "b", text: "Bloco de Notas, o editor simples de texto sem formatação presente no sistema" }, { id: "c", text: "Paint, a ferramenta básica de edição gráfica para desenhos do sistema Windows" }, { id: "d", text: "Calculadora, o aplicativo padrão para execução de operações matemáticas" } ], correctOptionId: "a" },
      { id: 22, question: "[ChatGPT] Para iniciar um assunto totalmente novo com o ChatGPT sem misturar com o chat anterior, devemos clicar em:", options: [ { id: "a", text: "Botão Novo Chat (+), que cria uma nova sessão zerada de conversa com a IA" }, { id: "b", text: "Menu Configurações > Excluir Conta para apagar todos os registros do usuário" }, { id: "c", text: "Botão Sair da Conta para desconectar o usuário da plataforma de IA" }, { id: "d", text: "Botão de desligar o monitor do computador para reiniciar o aplicativo" } ], correctOptionId: "a" },
      { id: 23, question: "[ChatGPT] O ChatGPT funciona com base em qual tipo de tecnologia moderna?", options: [ { id: "a", text: "Modelos de Inteligência Artificial e Processamento de Linguagem Natural avançados" }, { id: "b", text: "Sistemas de transmissão por ondas de rádio FM sem necessidade de computadores" }, { id: "c", text: "Circuitos analógicos manuais que dependem de intervenção humana constante" }, { id: "d", text: "Dispositivos magnéticos de fita cassette para gravação mecânica de dados" } ], correctOptionId: "a" },
      { id: 24, question: "[ChatGPT] O que significa o conceito de 'Alucinação' em sistemas de Inteligência Artificial?", options: [ { id: "a", text: "O momento em que a IA gera uma resposta incorreta ou inventada com tom de certeza" }, { id: "b", text: "O desligamento automático dos servidores da IA quando a temperatura interna sobe" }, { id: "c", text: "A conversão de um texto digitado em uma imagem tridimensional animada" }, { id: "d", text: "O bloqueio permanente da conta do usuário por falta de pagamento da mensalidade" } ], correctOptionId: "a" },

      // MÓDULO 4: ANTIVÍRUS MALWAREBYTES (8 QUESTÕES)
      { id: 25, question: "[Antivírus] O que é o Malwarebytes?", options: [ { id: "a", text: "Um aplicativo de criação de artes visuais voltado para edição de apresentações" }, { id: "b", text: "Um software de segurança e antivírus especializado na remoção de ameaças" }, { id: "c", text: "Uma plataforma de transmissão de vídeos e filmes sob demanda pela internet" }, { id: "d", text: "Um utilitário de edição de imagens com filtros profissionais para redes digitais" } ], correctOptionId: "b" },
      { id: 26, question: "[Antivírus] O que significa o termo 'Malware' na informática?", options: [ { id: "a", text: "Um tipo de programa de código aberto totalmente gratuito e altamente seguro" }, { id: "b", text: "Qualquer software malicioso desenvolvido para infectar ou roubar dados do PC" }, { id: "c", text: "Um modelo específico de teclado mecânico dotado de iluminação colorida RGB" }, { id: "d", text: "Um cabo de dados de alta performance usado em conexões de redes locais" } ], correctOptionId: "b" },
      { id: 27, question: "[Antivírus] O que a função 'Escanear' ou 'Verificação' (Scan) faz no Malwarebytes?", options: [ { id: "a", text: "Examina os arquivos e a memória do sistema procurando por vírus e ameaças" }, { id: "b", text: "Altera o papel de parede e as cores do tema da área de trabalho do computador" }, { id: "c", text: "Exclui definitivamente todas as fotos e documentos pessoais do armazenamento" }, { id: "d", text: "Realiza a instalação automática de jogos populares na biblioteca do usuário" } ], correctOptionId: "a" },
      { id: 28, question: "[Antivírus] O que é a 'Quarentena' no programa Malwarebytes?", options: [ { id: "a", text: "Um local isolado onde arquivos suspeitos são bloqueados sem infectar o sistema" }, { id: "b", text: "Um período determinado durante o qual o equipamento precisa ficar desligado" }, { id: "c", text: "Uma ferramenta que impede qualquer conexão com a internet durante 40 dias" }, { id: "d", text: "O repositório padrão onde o usuário deve salvar seus arquivos mais importantes" } ], correctOptionId: "a" },
      { id: 29, question: "[Antivírus] Qual é uma atitude fundamental de segurança para proteger o computador?", options: [ { id: "a", text: "Desativar todos os antivírus instalados e bloquear as atualizações do sistema" }, { id: "b", text: "Clicar em banners de propaganda que prometem prêmios valiosos pela internet" }, { id: "c", text: "Manter o antivírus atualizado e evitar baixar arquivos de fontes desconhecidas" }, { id: "d", text: "Enviar dados e senhas bancárias por e-mail quando solicitado por estranhos" } ], correctOptionId: "c" },
      { id: 30, question: "[Antivírus] O que é o golpe de 'Phishing'?", options: [ { id: "a", text: "Um jogo de simulação esportiva de pescaria muito popular nas redes sociais" }, { id: "b", text: "Uma fraude que usa mensagens ou sites falsos para enganar e roubar senhas" }, { id: "c", text: "Um defeito mecânico inesperado que ocorre nas teclas de teclados antigos" }, { id: "d", text: "Um modelo de gabinete de computador desenhado para refrigeração líquida" } ], correctOptionId: "b" },
      { id: 31, question: "[Antivírus] Qual a função da 'Proteção em Tempo Real' (Real-Time Protection)?", options: [ { id: "a", text: "Monitorar continuamente o sistema para barrar vírus no instante em que agem" }, { id: "b", text: "Exibir as horas e a previsão do tempo na barra de tarefas do Windows" }, { id: "c", text: "Ativar a webcam e o microfone do sistema de forma silenciosa e ininterrupta" }, { id: "d", text: "Reduzir o nível de ruído das ventoinhas de refrigeração interna do computador" } ], correctOptionId: "a" },
      { id: 32, question: "[Antivírus] O que é um 'Ransomware' e por que ele é uma das maiores ameaças digitais?", options: [ { id: "a", text: "Um vírus que criptografa os arquivos do usuário e exige resgate para devolvê-los" }, { id: "b", text: "Um programa que acelera a velocidade da internet limpando dados do navegador" }, { id: "c", text: "Um utilitário de hardware que aumenta a memória RAM física sem gastar dinheiro" }, { id: "d", text: "Uma atualização oficial lançada pela Microsoft para melhorar a barra de tarefas" } ], correctOptionId: "a" },

      // MÓDULO 5: CANVA (8 QUESTÕES)
      { id: 33, question: "[Canva] O que é o Canva?", options: [ { id: "a", text: "Um aplicativo de simulação esportiva voltado para campeonatos de futebol" }, { id: "b", text: "Uma plataforma online de design gráfico para criar cartazes e artes visuais" }, { id: "c", text: "Um utilitário de gravação de mídias físicas como discos de DVD e Blu-ray" }, { id: "d", text: "Um reprodutor multimídia para execução de listas de músicas no formato MP3" } ], correctOptionId: "b" },
      { id: 34, question: "[Canva] O que são os 'Templates' no Canva?", options: [ { id: "a", text: "Modelos visuais pré-prontos que podem ser editados com seus próprios textos e fotos" }, { id: "b", text: "Falhas no sistema que provocam o encerramento inesperado do navegador de internet" }, { id: "c", text: "Ferramentas administrativas voltadas para apagar o histórico de navegação do usuário" }, { id: "d", text: "Chaves de segurança necessárias para autenticar o login do usuário na plataforma" } ], correctOptionId: "a" },
      { id: 35, question: "[Canva] Como enviar uma foto do seu computador para usar no seu projeto dentro do Canva?", options: [ { id: "a", text: "Utilizando a guia 'Uploads' > botão 'Fazer upload de arquivos' no painel esquerdo" }, { id: "b", text: "Selecionando a opção 'Sair da Conta' localizada no menu superior de perfil" }, { id: "c", text: "Desligando e reiniciando o sistema operacional para recarregar o navegador" }, { id: "d", text: "Clicando na opção 'Excluir Projeto' na lixeira da conta do usuário" } ], correctOptionId: "a" },
      { id: 36, question: "[Canva] Para mudar a cor de um texto ou do fundo de um elemento no Canva, você deve usar:", options: [ { id: "a", text: "O ícone de quadrado de cor presente na barra de ferramentas superior do editor" }, { id: "b", text: "O botão físico de ligar e desligar localizado no gabinete do computador" }, { id: "c", text: "A tecla CAPS LOCK do teclado para alterar a intensidade das letras" }, { id: "d", text: "O cabo de alimentação que fornece energia elétrica para o monitor de vídeo" } ], correctOptionId: "a" },
      { id: 37, question: "[Canva] Como salvar ou baixar sua arte finalizada (em PNG, JPG ou PDF) para o computador?", options: [ { id: "a", text: "Clicando no botão 'Compartilhar' no canto superior > selecionando a opção 'Baixar'" }, { id: "b", text: "Capturando uma foto da tela do monitor através da câmera de um telefone celular" }, { id: "c", text: "Fechando a janela do navegador sem salvar nenhuma das alterações recentes" }, { id: "d", text: "Arrastando o ícone do monitor de vídeo para a lixeira da área de trabalho" } ], correctOptionId: "a" },
      { id: 38, question: "[Canva] Para adicionar adesivos, ícones, linhas e ilustrações no seu design, você usa a guia:", options: [ { id: "a", text: "Guia Elementos no painel esquerdo, que contém uma biblioteca de ilustrações" }, { id: "b", text: "Guia Vírus no painel superior, que testa a segurança dos arquivos da conta" }, { id: "c", text: "Guia Histórico de Navegação, que exibe os últimos sites acessados na web" }, { id: "d", text: "Guia Configurações de Rede, que ajusta a velocidade do Wi-Fi no computador" } ], correctOptionId: "a" },
      { id: 39, question: "[Canva] Qual é uma grande facilidade que o Canva oferece aos usuários?", options: [ { id: "a", text: "Funciona diretamente no navegador e salva o progresso na nuvem em tempo real" }, { id: "b", text: "Exige a instalação de diversos programas pesados no armazenamento interno do PC" }, { id: "c", text: "Restringe o uso da plataforma exclusivamente para profissionais com diploma universitário" }, { id: "d", text: "Impede que o usuário altere as frases ou imagens dos modelos pré-prontos selecionados" } ], correctOptionId: "a" },
      { id: 40, question: "[Canva] Qual o atalho rápido do teclado para duplicar um elemento selecionado no Canva?", options: [ { id: "a", text: "Pressionar Ctrl + D (ou segurar Alt e arrastar) para criar uma cópia idêntica" }, { id: "b", text: "Pressionar Ctrl + Shift + Esc para abrir o gerenciador de tarefas do sistema" }, { id: "c", text: "Pressionar F5 para atualizar a página e apagar as últimas alterações do projeto" }, { id: "d", text: "Pressionar a barra de espaço cinco vezes seguidas para deletar a imagem selecionada" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: []
  }
];
