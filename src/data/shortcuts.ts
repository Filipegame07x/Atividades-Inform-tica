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
  },
  {
    id: 'canva',
    name: 'Canva e Design',
    description: 'Mini game de produtividade no Canva: teclas de atalho para acelerar a criação de cartazes, apresentações e artes.',
    questions: [
      {
        id: 1,
        question: "Como você DUPLICA um elemento ou forma selecionada no Canva?",
        keys: ['control', 'd'],
        display: "Ctrl + D",
        description: "Duplica instantaneamente o elemento selecionado no seu design."
      },
      {
        id: 2,
        question: "Qual atalho junta vários elementos em um único GRUPO no Canva?",
        keys: ['control', 'g'],
        display: "Ctrl + G",
        description: "Agrupa os elementos selecionados para que se movam e redimensionem juntos."
      },
      {
        id: 3,
        question: "Como você DESAGRUPA elementos que estavam juntos no Canva?",
        keys: ['control', 'shift', 'g'],
        display: "Ctrl + Shift + G",
        description: "Separa os elementos do grupo selecionado."
      },
      {
        id: 4,
        question: "Qual atalho adiciona uma caixa de TEXTO rapidamente na sua arte do Canva?",
        keys: ['t'],
        display: "Tecla T",
        description: "Pressione apenas a letra T para inserir uma nova caixa de texto no centro do projeto."
      },
      {
        id: 5,
        question: "Qual atalho insere uma forma geométrica de RETÂNGULO na tela do Canva?",
        keys: ['r'],
        display: "Tecla R",
        description: "Pressione a letra R para desenhar um retângulo rápido no seu design."
      },
      {
        id: 6,
        question: "Qual atalho insere uma forma geométrica de CÍRCULO no seu projeto?",
        keys: ['c'],
        display: "Tecla C",
        description: "Pressione a letra C para adicionar um círculo perfeito na sua arte."
      },
      {
        id: 7,
        question: "Como você faz para desativar ou TRAVAR (Bloquear) um elemento para não movê-lo sem querer?",
        keys: ['alt', 'l'],
        display: "Alt + L",
        description: "Bloqueia (Lock) a posição do elemento na tela de edição."
      },
      {
        id: 8,
        question: "Como você seleciona TODOS os elementos da página no Canva?",
        keys: ['control', 'a'],
        display: "Ctrl + A",
        description: "Seleciona todos os componentes visuais da arte atual."
      },
      {
        id: 9,
        question: "Qual atalho copia um estilo de elemento ou texto no Canva?",
        keys: ['control', 'alt', 'c'],
        display: "Ctrl + Alt + C",
        description: "Copia o estilo de formatação (cor, fonte, tamanho) para aplicar em outro elemento."
      },
      {
        id: 10,
        question: "Qual atalho desfaz uma ação ou movimento errado no Canva?",
        keys: ['control', 'z'],
        display: "Ctrl + Z",
        description: "Desfaz o último ajuste de posição ou edição realizada."
      }
    ]
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT e IAs',
    description: 'Mini game de agilidade no ChatGPT, Gemini e Claude: atalhos para enviar prompts, quebrar linhas e gerenciar chats.',
    questions: [
      {
        id: 1,
        question: "Qual tecla você pressiona no ChatGPT para ENVIAR a sua pergunta/prompt?",
        keys: ['enter'],
        display: "Enter",
        description: "Envia o texto digitado na caixa para a Inteligência Artificial responder."
      },
      {
        id: 2,
        question: "Como você faz para QUEBRAR UMA LINHA (parágrafo) na caixa de prompt sem enviar a mensagem?",
        keys: ['shift', 'enter'],
        display: "Shift + Enter",
        description: "Pula para a próxima linha para que você possa estruturar um prompt longo sem enviá-lo antes da hora."
      },
      {
        id: 3,
        question: "Qual atalho abre um NOVO CHAT (Nova Conversa) rapidamente no ChatGPT?",
        keys: ['control', 'shift', 'o'],
        display: "Ctrl + Shift + O",
        description: "Inicia uma nova conversa limpa (Open new chat)."
      },
      {
        id: 4,
        question: "Qual atalho permite COPIAR a última resposta gerada pelo ChatGPT?",
        keys: ['control', 'shift', 'c'],
        display: "Ctrl + Shift + C",
        description: "Copia a resposta inteira da IA para a sua área de transferência."
      },
      {
        id: 5,
        question: "Qual atalho abre a barra de BUSCA/PESQUISA no histórico de conversas da IA?",
        keys: ['control', 'k'],
        display: "Ctrl + K",
        description: "Abre a busca rápida por tópicos antigos no histórico do chat."
      },
      {
        id: 6,
        question: "Qual tecla você pressiona para CANCELAR a geração de uma resposta da IA enquanto ela digita?",
        keys: ['escape'],
        display: "Esc",
        description: "Interrompe imediatamente o processamento de texto da IA."
      },
      {
        id: 7,
        question: "Como você seleciona todo o texto do prompt digitado na caixa de entrada?",
        keys: ['control', 'a'],
        display: "Ctrl + A",
        description: "Marca todo o texto da caixa para você apagar ou substituir facilmente."
      },
      {
        id: 8,
        question: "Como copiar um trecho do texto do chat no navegador?",
        keys: ['control', 'c'],
        display: "Ctrl + C",
        description: "Copia a seleção marcada na tela."
      },
      {
        id: 9,
        question: "Como colar o texto copiado de um trabalho dentro da caixa do ChatGPT?",
        keys: ['control', 'v'],
        display: "Ctrl + V",
        description: "Cole textos e informações na caixa de entrada do assistente virtual."
      },
      {
        id: 10,
        question: "Qual atalho recarrega a página da IA caso ocorra um erro de conexão?",
        keys: ['f5'],
        display: "F5",
        description: "Atualiza o site no navegador em caso de travamentos de rede."
      }
    ]
  },
  {
    id: 'security',
    name: 'Antivírus e Segurança',
    description: 'Mini game de atalhos de proteção digital: comandos rápidos para bloquear a tela, gerenciar tarefas e proteger dados.',
    questions: [
      {
        id: 1,
        question: "Como você BLOQUEIA A TELA do computador instantaneamente ao se ausentar da mesa?",
        keys: ['meta', 'l'],
        display: "Win + L",
        description: "Bloqueia o computador (Lock) para impedir que curiosos acessem seus dados."
      },
      {
        id: 2,
        question: "Qual atalho abre o GERENCIADOR DE TAREFAS para encerrar um programa suspeito ou travado?",
        keys: ['control', 'shift', 'escape'],
        display: "Ctrl + Shift + Esc",
        description: "Abre o gerenciador diretamente para diagnosticar o uso de CPU/RAM e finalizar vírus."
      },
      {
        id: 3,
        question: "Como você exclui um arquivo suspeito PERMANENTEMENTE sem passar pela lixeira?",
        keys: ['shift', 'delete'],
        display: "Shift + Delete",
        description: "Deleta o arquivo direto do disco rígido sem enviá-lo para a Lixeira do Windows."
      },
      {
        id: 4,
        question: "Como abrir uma JANELA ANÔNIMA privada no Google Chrome para não salvar histórico?",
        keys: ['control', 'shift', 'n'],
        display: "Ctrl + Shift + N",
        description: "Navega em modo privado onde cookies e histórico não são mantidos no computador."
      },
      {
        id: 5,
        question: "Qual atalho minimiza TODAS as janelas abertas de uma vez para esconder informações da tela?",
        keys: ['meta', 'd'],
        display: "Win + D",
        description: "Mostra diretamente a Área de Trabalho (Desktop), ocultando o que estava aberto."
      },
      {
        id: 6,
        question: "Qual atalho abre o histórico da Área de Transferência para conferir o que foi copiado?",
        keys: ['meta', 'v'],
        display: "Win + V",
        description: "Permite ver e gerenciar senhas e textos copiados no clipboard do Windows."
      },
      {
        id: 7,
        question: "Qual atalho FECHA imediatamente a janela do aplicativo ativo?",
        keys: ['alt', 'f4'],
        display: "Alt + F4",
        description: "Encerra o programa em execução imediatamente."
      },
      {
        id: 8,
        question: "Como abrir o menu de Configurações de Segurança do Windows?",
        keys: ['meta', 'i'],
        display: "Win + I",
        description: "Abre o painel de configurações para verificar o Windows Defender e atualizações."
      },
      {
        id: 9,
        question: "Como abrir a caixa do Executar para rodar verificações de sistema (como 'mrt' ou 'cmd')?",
        keys: ['meta', 'r'],
        display: "Win + R",
        description: "Abre o prompt de comando para executar ferramentas de remoção de malware."
      },
      {
        id: 10,
        question: "Qual atalho atualiza o antivírus ou recarrega a página de status do scanner?",
        keys: ['f5'],
        display: "F5",
        description: "Atualiza o estado atual das varreduras."
      }
    ]
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    description: 'Mini game de agilidade no Excel e Google Planilhas: teclas de atalho essenciais para formatação e seleção de células.',
    questions: [
      {
        id: 1,
        question: "Qual atalho insere a DATA ATUAL na célula selecionada da planilha?",
        keys: ['control', ';'],
        display: "Ctrl + ;",
        description: "Insere a data de hoje automaticamente na célula ativa."
      },
      {
        id: 2,
        question: "Como você entra no modo de EDIÇÃO de fórmula da célula selecionada?",
        keys: ['f2'],
        display: "F2",
        description: "Abre o conteúdo da célula para editar a fórmula sem apagar o texto."
      },
      {
        id: 3,
        question: "Qual atalho seleciona uma COLUNA INTEIRA na planilha?",
        keys: ['control', ' '],
        display: "Ctrl + Espaço",
        description: "Marca a coluna inteira do topo até a última linha."
      },
      {
        id: 4,
        question: "Qual atalho seleciona uma LINHA INTEIRA na planilha?",
        keys: ['shift', ' '],
        display: "Shift + Espaço",
        description: "Marca todas as células da linha selecionada."
      },
      {
        id: 5,
        question: "Como você aplica o formato de MOEDA (R$) aos valores numéricos da célula?",
        keys: ['control', 'shift', '$'],
        display: "Ctrl + Shift + $",
        description: "Converte números para o formato financeiro brasileiro (R$)."
      },
      {
        id: 6,
        question: "Como você aplica o formato de PORCENTAGEM (%) ao número da célula?",
        keys: ['control', 'shift', '%'],
        display: "Ctrl + Shift + %",
        description: "Formata o número da célula como porcentagem."
      },
      {
        id: 7,
        question: "Qual atalho seleciona TODAS as células da planilha ativa?",
        keys: ['control', 't'],
        display: "Ctrl + T",
        description: "Seleciona toda a tabela ou planilha de trabalho (Ctrl+A em versões em inglês)."
      },
      {
        id: 8,
        question: "Como desazer uma alteração ou fórmula digitada errada na planilha?",
        keys: ['control', 'z'],
        display: "Ctrl + Z",
        description: "Desfaz o último cálculo ou edição na célula."
      },
      {
        id: 9,
        question: "Como salvar o arquivo da planilha de trabalho?",
        keys: ['control', 'b'],
        display: "Ctrl + B",
        description: "Salva as alterações do arquivo Excel (ou Ctrl+S no Google Sheets)."
      },
      {
        id: 10,
        question: "Como abrir o menu para IMPRIMIR a planilha ou gerar um relatório em PDF?",
        keys: ['control', 'p'],
        display: "Ctrl + P",
        description: "Abre as opções de visualização de impressão."
      }
    ]
  },
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Mini game no Google Docs, Drive e Gmail: comandos para criar links, gerenciar abas e formatar trabalhos na nuvem.',
    questions: [
      {
        id: 1,
        question: "Como inserir um HIPERLINK em uma palavra selecionada no Google Docs?",
        keys: ['control', 'k'],
        display: "Ctrl + K",
        description: "Abre a caixinha para colar o endereço do site que você deseja vincular à palavra."
      },
      {
        id: 2,
        question: "Qual atalho exibe a CONTAGEM DE PALAVRAS no Google Documentos?",
        keys: ['control', 'shift', 'c'],
        display: "Ctrl + Shift + C",
        description: "Mostra o total de palavras, caracteres e páginas digitadas no trabalho."
      },
      {
        id: 3,
        question: "Como abrir uma NOVA ABA no navegador para pesquisar enquanto escreve no Docs?",
        keys: ['control', 't'],
        display: "Ctrl + T",
        description: "Abre uma nova guia para você fazer pesquisas na web."
      },
      {
        id: 4,
        question: "Qual atalho fecha a guia ativa do Google Drive ou Docs?",
        keys: ['control', 'w'],
        display: "Ctrl + W",
        description: "Fecha a aba do navegador com um toque."
      },
      {
        id: 5,
        question: "Se você fechar o Google Docs por engano, qual atalho traz a aba de volta?",
        keys: ['control', 'shift', 't'],
        display: "Ctrl + Shift + T",
        description: "Restaura a aba recém-fechada no navegador."
      },
      {
        id: 6,
        question: "Como LOCALIZAR E SUBSTITUIR uma palavra em todo o texto do Google Docs?",
        keys: ['control', 'h'],
        display: "Ctrl + H",
        description: "Abre a ferramenta de busca e substituição automática de palavras."
      },
      {
        id: 7,
        question: "Qual atalho salva a página do documento nos Favoritos do navegador?",
        keys: ['control', 'd'],
        display: "Ctrl + D",
        description: "Guarda o link nos Favoritos do Chrome para acesso futuro."
      },
      {
        id: 8,
        question: "Como abrir a caixa de BUSCA RÁPIDA no documento para achar uma frase?",
        keys: ['control', 'f'],
        display: "Ctrl + F",
        description: "Busca um termo específico dentro da página."
      },
      {
        id: 9,
        question: "Como SELECIONAR TODO o texto do seu documento do Google Docs?",
        keys: ['control', 'a'],
        display: "Ctrl + A",
        description: "Marca todo o texto no Google Docs (no Word em PT é Ctrl+T)."
      },
      {
        id: 10,
        question: "Como IMPRIMIR seu documento ou salvar como PDF no Google Docs?",
        keys: ['control', 'p'],
        display: "Ctrl + P",
        description: "Abre a tela de impressão do navegador."
      }
    ]
  }
];
