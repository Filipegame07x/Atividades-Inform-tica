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
  {
    id: 'word',
    title: 'Microsoft Word',
    description: 'Teste seus conhecimentos sobre o Microsoft Word. O que é, para que serve e suas principais funções.',
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
    id: 'powerpoint',
    title: 'Microsoft PowerPoint',
    description: 'Teste seus conhecimentos sobre o PowerPoint. Aprenda sobre slides, animações e apresentações.',
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
    id: 'chrome',
    title: 'Google Chrome',
    description: 'Teste seus conhecimentos sobre navegação na internet usando o Google Chrome.',
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
    id: 'antivirus',
    title: 'Antivírus Malwarebytes',
    description: 'Teste seus conhecimentos sobre segurança digital e uso do antivírus Malwarebytes.',
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
  }
];
