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

export const objectiveQuestions: ObjectiveQuestion[] = [
  {
    id: 1,
    question: "O que é o Word?",
    options: [
      { id: "a", text: "Um programa para editar vídeos" },
      { id: "b", text: "Um programa para criar e editar textos" },
      { id: "c", text: "Um programa para ouvir músicas" },
      { id: "d", text: "Um programa para desenhar mapas" }
    ],
    correctOptionId: "b"
  },
  {
    id: 2,
    question: "Para que serve o Word?",
    options: [
      { id: "a", text: "Para criar, editar e formatar documentos de texto" },
      { id: "b", text: "Para fazer ligações telefônicas" },
      { id: "c", text: "Para jogar online" },
      { id: "d", text: "Para assistir filmes" }
    ],
    correctOptionId: "a"
  },
  {
    id: 3,
    question: "Se eu quiser centralizar o texto, qual função uso?",
    options: [
      { id: "a", text: "Negrito" },
      { id: "b", text: "Alinhar à esquerda" },
      { id: "c", text: "Centralizar" },
      { id: "d", text: "Copiar" }
    ],
    correctOptionId: "c"
  },
  {
    id: 4,
    question: "Qual botão deixa a letra mais escura e destacada?",
    options: [
      { id: "a", text: "Itálico" },
      { id: "b", text: "Negrito" },
      { id: "c", text: "Sublinhado" },
      { id: "d", text: "Recortar" }
    ],
    correctOptionId: "b"
  },
  {
    id: 5,
    question: "Qual função é usada para salvar um documento?",
    options: [
      { id: "a", text: "Salvar" },
      { id: "b", text: "Excluir" },
      { id: "c", text: "Colar" },
      { id: "d", text: "Imprimir" }
    ],
    correctOptionId: "a"
  },
  {
    id: 6,
    question: "Qual opção usamos para imprimir um documento?",
    options: [
      { id: "a", text: "Arquivo > Imprimir" },
      { id: "b", text: "Inserir > Tabela" },
      { id: "c", text: "Página Inicial > Fonte" },
      { id: "d", text: "Revisão > Ortografia" }
    ],
    correctOptionId: "a"
  },
  {
    id: 7,
    question: "O que a ferramenta “Copiar” faz?",
    options: [
      { id: "a", text: "Apaga o texto" },
      { id: "b", text: "Duplica o texto selecionado" },
      { id: "c", text: "Muda a cor da página" },
      { id: "d", text: "Fecha o programa" }
    ],
    correctOptionId: "b"
  },
  {
    id: 8,
    question: "O que a ferramenta “Colar” faz?",
    options: [
      { id: "a", text: "Insere o que foi copiado ou recortado" },
      { id: "b", text: "Apaga todo o documento" },
      { id: "c", text: "Salva o arquivo" },
      { id: "d", text: "Imprime a página" }
    ],
    correctOptionId: "a"
  },
  {
    id: 9,
    question: "Para mudar o tamanho da letra, usamos a opção:",
    options: [
      { id: "a", text: "Fonte" },
      { id: "b", text: "Zoom" },
      { id: "c", text: "Régua" },
      { id: "d", text: "Margem" }
    ],
    correctOptionId: "a"
  },
  {
    id: 10,
    question: "Qual opção permite colocar uma imagem no documento?",
    options: [
      { id: "a", text: "Inserir imagem" },
      { id: "b", text: "Salvar como" },
      { id: "c", text: "Ortografia" },
      { id: "d", text: "Alinhar texto" }
    ],
    correctOptionId: "a"
  },
  {
    id: 11,
    question: "O que é uma tabela no Word?",
    options: [
      { id: "a", text: "Um espaço com linhas e colunas" },
      { id: "b", text: "Um tipo de música" },
      { id: "c", text: "Uma ferramenta para apagar arquivos" },
      { id: "d", text: "Um comando para fechar o Word" }
    ],
    correctOptionId: "a"
  },
  {
    id: 12,
    question: "Qual recurso ajuda a encontrar erros nas palavras?",
    options: [
      { id: "a", text: "Revisão ortográfica" },
      { id: "b", text: "Imprimir" },
      { id: "c", text: "Zoom" },
      { id: "d", text: "Recortar" }
    ],
    correctOptionId: "a"
  }
];

export const discursiveQuestions: DiscursiveQuestion[] = [
  { id: 13, question: "Explique com suas palavras o que é o Word." },
  { id: 14, question: "Cite duas coisas que podemos fazer no Word." },
  { id: 15, question: "Escreva o passo que você usaria para centralizar um texto no Word." },
  { id: 16, question: "Por que é importante salvar um documento depois de escrever?" }
];
