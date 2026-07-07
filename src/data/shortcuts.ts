export interface ShortcutQuestion {
  id: number;
  question: string;
  keys: string[]; // key values from KeyboardEvent.key (converted to lowercase)
  display: string; // Visual name, e.g. "Ctrl + C"
  description: string; // Educational tips
}

export interface ShortcutCategory {
  id: string;
  name: string;
  description: string;
  questions: ShortcutQuestion[];
}

export const shortcutCategories: ShortcutCategory[] = [
  {
    id: 'word',
    name: 'Microsoft Word',
    description: 'Atalhos específicos do editor de texto Word. Atenção: Atalhos localizados em português (como salvar e negrito)!',
    questions: [
      {
        id: 1,
        question: "Como você coloca a palavra selecionada em NEGRITO no Word em português?",
        keys: ['control', 'n'],
        display: "Ctrl + N",
        description: "Deixa o texto mais escuro e destacado (Negrito). Diferente do inglês que usa Ctrl+B."
      },
      {
        id: 2,
        question: "Qual atalho serve para SALVAR o documento atual no Word em português?",
        keys: ['control', 'b'],
        display: "Ctrl + B",
        description: "Salva o documento de texto (Backup). No Windows geral/Chrome, o salvar é Ctrl+S."
      },
      {
        id: 3,
        question: "Como você faz para SELECIONAR TODO o texto do seu documento no Word?",
        keys: ['control', 't'],
        display: "Ctrl + T",
        description: "Seleciona todo o conteúdo do documento. No Chrome/Windows geral, o atalho é Ctrl+A."
      },
      {
        id: 4,
        question: "Qual atalho é usado para deixar o texto selecionado em SUBLINHADO (com uma linha embaixo)?",
        keys: ['control', 's'],
        display: "Ctrl + S",
        description: "Aplica uma linha abaixo do texto (Sublinhado). No inglês é Ctrl+U."
      },
      {
        id: 5,
        question: "Como você faz para colocar o texto selecionado em ITÁLICO (inclinado)?",
        keys: ['control', 'i'],
        display: "Ctrl + I",
        description: "Inclina as letras do texto (Itálico) para dar destaque a termos estrangeiros ou citações."
      },
      {
        id: 6,
        question: "Qual atalho é usado para CENTRALIZAR o texto ou parágrafo selecionado na página?",
        keys: ['control', 'e'],
        display: "Ctrl + E",
        description: "Alinha o parágrafo exatamente no centro horizontal do documento."
      },
      {
        id: 7,
        question: "Qual atalho é usado para JUSTIFICAR o texto (alinhar perfeitamente nas margens esquerda e direita)?",
        keys: ['control', 'j'],
        display: "Ctrl + J",
        description: "Alinha as duas margens do parágrafo, padrão muito exigido em trabalhos escolares e acadêmicos."
      },
      {
        id: 8,
        question: "Como você faz para copiar o texto selecionado no Word?",
        keys: ['control', 'c'],
        display: "Ctrl + C",
        description: "Copia o texto selecionado para a Área de Transferência sem apagá-lo do local original."
      },
      {
        id: 9,
        question: "Como você faz para colar o texto copiado no seu documento?",
        keys: ['control', 'v'],
        display: "Ctrl + V",
        description: "Insere no cursor o texto que foi copiado ou recortado anteriormente."
      },
      {
        id: 10,
        question: "Qual atalho você pressiona para desfazer a última digitação ou alteração no Word?",
        keys: ['control', 'z'],
        display: "Ctrl + Z",
        description: "Desfaz a última alteração efetuada. Pode ser pressionado várias vezes para voltar mais passos."
      }
    ]
  },
  {
    id: 'powerpoint',
    name: 'Microsoft PowerPoint',
    description: 'Atalhos essenciais para criação e controle de apresentações de slides.',
    questions: [
      {
        id: 1,
        question: "Como você insere um NOVO SLIDE na sua apresentação?",
        keys: ['control', 'm'],
        display: "Ctrl + M",
        description: "Insere um novo slide em branco logo após o slide selecionado atualmente."
      },
      {
        id: 2,
        question: "Qual tecla inicia a sua apresentação de slides a partir do primeiro slide?",
        keys: ['f5'],
        display: "F5",
        description: "Inicia a projeção dos slides em tela cheia desde o começo do arquivo."
      },
      {
        id: 3,
        question: "Como iniciar a apresentação de slides a partir do slide que está selecionado agora?",
        keys: ['shift', 'f5'],
        display: "Shift + F5",
        description: "Inicia a apresentação em tela cheia a partir do slide ativo, economizando tempo de teste."
      },
      {
        id: 4,
        question: "Qual tecla você pressiona para SAIR da apresentação em tela cheia e voltar para a edição?",
        keys: ['escape'],
        display: "Esc",
        description: "Encerra a exibição dos slides (Escape) e retorna para o modo de desenvolvimento."
      },
      {
        id: 5,
        question: "Como você faz para duplicar um objeto (imagem, forma) ou até mesmo um slide inteiro?",
        keys: ['control', 'd'],
        display: "Ctrl + D",
        description: "Duplica rapidamente o slide ou elemento selecionado na tela de edição."
      },
      {
        id: 6,
        question: "Qual atalho permite AGRUPAR vários objetos selecionados para que se movam como um só?",
        keys: ['control', 'g'],
        display: "Ctrl + G",
        description: "Junta elementos separados (fotos, formas, caixas de texto) em um único grupo (Group)."
      },
      {
        id: 7,
        question: "Qual atalho abre a tela para imprimir seus slides (ou salvá-los em formato PDF)?",
        keys: ['control', 'p'],
        display: "Ctrl + P",
        description: "Abre o menu de impressão da apresentação. Útil para imprimir folhetos para a plateia."
      },
      {
        id: 8,
        question: "Como você faz para copiar um objeto selecionado na sua apresentação?",
        keys: ['control', 'c'],
        display: "Ctrl + C",
        description: "Copia a imagem ou caixa de texto selecionada para duplicá-la depois."
      },
      {
        id: 9,
        question: "Como você insere o objeto que copiou de volta no slide?",
        keys: ['control', 'v'],
        display: "Ctrl + V",
        description: "Insere o objeto copiado no slide ativo."
      },
      {
        id: 10,
        question: "Qual atalho desfaz uma inserção ou movimento de objeto errado na apresentação?",
        keys: ['control', 'z'],
        display: "Ctrl + Z",
        description: "Desfaz o último movimento, rotação, exclusão ou digitação nos slides."
      }
    ]
  },
  {
    id: 'chrome',
    name: 'Google Chrome',
    description: 'Navegação de internet rápida: controle de abas, janelas, favoritos e histórico do navegador.',
    questions: [
      {
        id: 1,
        question: "Como abrir uma NOVA ABA (guia) de navegação no Chrome?",
        keys: ['control', 't'],
        display: "Ctrl + T",
        description: "Abre uma nova guia (Tab) para acessar outro site sem fechar o atual."
      },
      {
        id: 2,
        question: "Qual atalho fecha a aba que você está visualizando no momento?",
        keys: ['control', 'w'],
        display: "Ctrl + W",
        description: "Fecha instantaneamente a guia ativa do seu navegador."
      },
      {
        id: 3,
        question: "Se você fechar uma aba sem querer, qual atalho a reabre imediatamente?",
        keys: ['control', 'shift', 't'],
        display: "Ctrl + Shift + T",
        description: "Desfaz o fechamento da última aba. Pode ser usado consecutivamente para reabrir várias abas."
      },
      {
        id: 4,
        question: "Como você faz para adicionar a página web atual aos seus Favoritos?",
        keys: ['control', 'd'],
        display: "Ctrl + D",
        description: "Adiciona a página ativa aos favoritos do Chrome (Bookmark)."
      },
      {
        id: 5,
        question: "Qual atalho abre a janela com o seu Histórico completo de navegação?",
        keys: ['control', 'h'],
        display: "Ctrl + H",
        description: "Abre a lista cronológica de todas as páginas da internet acessadas anteriormente (History)."
      },
      {
        id: 6,
        question: "Qual atalho abre o painel contendo todos os seus Downloads recentes de arquivos?",
        keys: ['control', 'j'],
        display: "Ctrl + J",
        description: "Abre a lista de arquivos baixados na internet recentemente."
      },
      {
        id: 7,
        question: "Como abrir uma nova Janela Anônima para navegar de forma privada?",
        keys: ['control', 'shift', 'n'],
        display: "Ctrl + Shift + N",
        description: "Abre uma nova janela privada onde o histórico e cookies não são gravados no PC."
      },
      {
        id: 8,
        question: "Qual atalho abre a caixa de busca para encontrar uma palavra dentro do site que está lendo?",
        keys: ['control', 'f'],
        display: "Ctrl + F",
        description: "Abre a caixinha de pesquisa rápida por termos na página aberta (Find)."
      },
      {
        id: 9,
        question: "Qual tecla recarrega (atualiza) a página da internet para baixar novos conteúdos?",
        keys: ['f5'],
        display: "F5",
        description: "Atualiza o site ativo. Útil quando a página trava ou apresenta erros de carregamento."
      },
      {
        id: 10,
        question: "Como você abre uma Nova Janela de navegação normal do Chrome?",
        keys: ['control', 'n'],
        display: "Ctrl + N",
        description: "Abre uma janela de navegador totalmente nova."
      }
    ]
  },
  {
    id: 'systems',
    name: 'Windows e Geral',
    description: 'Acelere o uso do sistema operacional Windows: gerenciamento de janelas, busca e atalhos rápidos de produtividade.',
    questions: [
      {
        id: 1,
        question: "Como você minimiza todas as janelas abertas de uma vez para ver a Área de Trabalho (Desktop)?",
        keys: ['meta', 'd'],
        display: "Win + D",
        description: "Oculta todas as janelas, liberando a visão direta para a sua Área de Trabalho (Desktop)."
      },
      {
        id: 2,
        question: "Qual atalho abre o Explorador de Arquivos do Windows (Este Computador)?",
        keys: ['meta', 'e'],
        display: "Win + E",
        description: "Abre a ferramenta principal de visualização de pastas e discos rígidos (Explorer)."
      },
      {
        id: 3,
        question: "Como você bloqueia a tela do seu computador Windows de forma rápida ao sair de perto?",
        keys: ['meta', 'l'],
        display: "Win + L",
        description: "Bloqueia a tela do PC instantaneamente (Lock), exigindo a senha para retornar."
      },
      {
        id: 4,
        question: "Qual atalho serve para alternar de forma rápida entre as janelas e programas abertos na tela?",
        keys: ['alt', 'tab'],
        display: "Alt + Tab",
        description: "Permite navegar entre os aplicativos abertos sem usar o mouse."
      },
      {
        id: 5,
        question: "Como você fecha de forma imediata a janela ou programa ativo no momento?",
        keys: ['alt', 'f4'],
        display: "Alt + F4",
        description: "Fecha o aplicativo ativo. Se nenhum programa estiver aberto, exibe a tela de desligar o PC."
      },
      {
        id: 6,
        question: "Qual atalho abre diretamente o Gerenciador de Tarefas do Windows para fechar travamentos?",
        keys: ['control', 'shift', 'escape'],
        display: "Ctrl + Shift + Esc",
        description: "Abre o gerenciador de processos do sistema, ideal para fechar programas que travaram."
      },
      {
        id: 7,
        question: "Como abrir o histórico da Área de Transferência com tudo o que você copiou (textos, links, imagens)?",
        keys: ['meta', 'v'],
        display: "Win + V",
        description: "Abre o painel onde você pode recuperar e colar coisas copiadas anteriormente."
      },
      {
        id: 8,
        question: "Como abrir a tela de Configurações do Windows?",
        keys: ['meta', 'i'],
        display: "Win + I",
        description: "Abre a central de configurações do sistema operacional (Information/Settings)."
      },
      {
        id: 9,
        question: "Qual atalho abre a caixa de diálogo \"Executar\" para iniciar programas digitando comandos?",
        keys: ['meta', 'r'],
        display: "Win + R",
        description: "Abre a caixinha do Executar (Run). Muito utilizada para abrir o CMD digitando 'cmd'."
      },
      {
        id: 10,
        question: "Como abrir a barra de pesquisa rápida do Windows para procurar arquivos ou aplicativos?",
        keys: ['meta', 's'],
        display: "Win + S",
        description: "Abre a busca do Windows (Search) focada no menu iniciar."
      }
    ]
  }
];
