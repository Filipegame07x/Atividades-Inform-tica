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
  iconType: 'word' | 'powerpoint' | 'chrome' | 'antivirus';
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
    password: 'IEPOPWORD1',
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
    password: 'IEPOPWORD2',
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
    password: 'IEPOPWORD3',
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
    password: 'IEPOPPOWER1',
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
    password: 'IEPOPPOWER2',
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
    password: 'IEPOPPOWER3',
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
    password: 'IEPOPCHROME1',
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
    password: 'IEPOPCHROME2',
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
    password: 'IEPOPCHROME3',
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
    password: 'IEPOPMALWARE1',
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
    password: 'IEPOPALWARE2',
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
    password: 'IEPOPMALWARE3',
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
  }
];
