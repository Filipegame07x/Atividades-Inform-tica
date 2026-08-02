export interface SpeedQuizQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  category: 'word' | 'excel' | 'google' | 'canva' | 'ai' | 'security' | 'windows' | 'hardware';
}

export const speedQuizQuestions: SpeedQuizQuestion[] = [
  {
    id: 1,
    statement: "O atalho Ctrl + C serve para COPIAR um texto ou arquivo selecionado.",
    isTrue: true,
    explanation: "Ctrl + C armazena a seleção na Área de Transferência sem remover o original.",
    category: 'windows'
  },
  {
    id: 2,
    statement: "O atalho Ctrl + V remove o texto original e o cola em outro lugar.",
    isTrue: false,
    explanation: "Quem remove o texto original é o comando Recortar (Ctrl + X). O Ctrl + V apenas cola.",
    category: 'windows'
  },
  {
    id: 3,
    statement: "A memória RAM guarda todas as suas fotos e documentos permanentemente após desligar o PC.",
    isTrue: false,
    explanation: "A memória RAM é volátil (temporária). O armazenamento permanente é feito no SSD ou HD.",
    category: 'hardware'
  },
  {
    id: 4,
    statement: "O ChatGPT é um modelo de Inteligência Artificial generativa criado pela empresa OpenAI.",
    isTrue: true,
    explanation: "Lançado no final de 2022 pela OpenAI, o ChatGPT revolucionou a IA conversacional.",
    category: 'ai'
  },
  {
    id: 5,
    statement: "No Canva, pressionar a letra 'R' no teclado adiciona um Retângulo instantaneamente no projeto.",
    isTrue: true,
    explanation: "As teclas de atalho rápido do Canva (R para retângulo, C para círculo, T para texto) aceleram o design.",
    category: 'canva'
  },
  {
    id: 6,
    statement: "O antivírus Malwarebytes serve para formatar o computador quando está com poeira.",
    isTrue: false,
    explanation: "O Malwarebytes é um software de segurança digital que detecta e remove malwares e vírus.",
    category: 'security'
  },
  {
    id: 7,
    statement: "No Microsoft Excel, a fórmula =SOMA(A1:A5) multiplica os valores de A1 até A5.",
    isTrue: false,
    explanation: "A função =SOMA adiciona (soma) os valores. Para multiplicar, usa-se =MULT ou o operador *.",
    category: 'excel'
  },
  {
    id: 8,
    statement: "Phishing é um golpe digital onde criminosos usam mensagens e sites falsos para roubar senhas.",
    isTrue: true,
    explanation: "O Phishing 'pesca' dados da vítima através de links enganosos imitando bancos ou redes sociais.",
    category: 'security'
  },
  {
    id: 9,
    statement: "No Google Docs, várias pessoas podem editar o mesmo documento simultaneamente na nuvem.",
    isTrue: true,
    explanation: "A colaboração em tempo real é uma das principais vantagens do Google Workspace.",
    category: 'google'
  },
  {
    id: 10,
    statement: "As Inteligências Artificiais nunca cometem erros e todas as suas respostas são 100% verdadeiras.",
    isTrue: false,
    explanation: "As IAs podem 'alucinar', ou seja, gerar respostas falsas com aparência de verdade. Sempre verifique as fontes!",
    category: 'ai'
  },
  {
    id: 11,
    statement: "No Microsoft Word, o atalho Ctrl + N deixa o texto selecionado em Negrito.",
    isTrue: true,
    explanation: "Ctrl + N aplica a formatação Negrito ao texto selecionado no Word em português.",
    category: 'word'
  },
  {
    id: 12,
    statement: "O atalho Win + L bloqueia imediatamente a tela do seu computador com senha.",
    isTrue: true,
    explanation: "Win + L (Lock) protege sua sessão quando você se ausenta da mesa.",
    category: 'windows'
  },
  {
    id: 13,
    statement: "Uma 'Janela Anônima' no navegador impede que os sites vejam seu endereço IP físico.",
    isTrue: false,
    explanation: "A guia anônima apenas não salva histórico e cookies no seu PC. Para ocultar o IP, usa-se uma VPN.",
    category: 'security'
  },
  {
    id: 14,
    statement: "No ChatGPT, pressionar Shift + Enter envia a mensagem imediatamente.",
    isTrue: false,
    explanation: "Pressionar apenas Enter envia a mensagem. Shift + Enter quebra uma linha sem enviar.",
    category: 'ai'
  },
  {
    id: 15,
    statement: "No Windows 11, o atalho Win + Shift + S abre a Ferramenta de Captura de Tela (Print seletivo).",
    isTrue: true,
    explanation: "Permite selecionar um retângulo, forma livre ou janela inteira para fotografar e copiar.",
    category: 'windows'
  },
  {
    id: 16,
    statement: "O Google Gemini é a Inteligência Artificial desenvolvida pelo Google.",
    isTrue: true,
    explanation: "O Gemini é o modelo principal do Google, integrado ao Docs, Gmail, YouTube e busca.",
    category: 'ai'
  },
  {
    id: 17,
    statement: "No Canva, o atalho Ctrl + G serve para apagar o projeto inteiro.",
    isTrue: false,
    explanation: "Ctrl + G serve para Agrupar elementos selecionados na arte.",
    category: 'canva'
  },
  {
    id: 18,
    statement: "No Excel, a tecla F2 entra no modo de edição da célula ativa sem apagar a fórmula.",
    isTrue: true,
    explanation: "F2 abre a célula para alteração sem sobrescrever o conteúdo existente.",
    category: 'excel'
  },
  {
    id: 19,
    statement: "Um Firewall é uma barreira de segurança que monitora o tráfego de rede para bloquear acessos suspeitos.",
    isTrue: true,
    explanation: "O Firewall funciona como uma 'porta de segurança' inspecionando o que entra e sai da internet.",
    category: 'security'
  },
  {
    id: 20,
    statement: "No Google Docs, o atalho Ctrl + K serve para criar um Hiperlink em uma palavra.",
    isTrue: true,
    explanation: "Ctrl + K abre a caixa para vincular uma URL a um texto selecionado.",
    category: 'google'
  },
  {
    id: 21,
    statement: "O termo 'Hardware' refere-se aos programas e sistemas operacionais do computador.",
    isTrue: false,
    explanation: "Hardware é a parte física (peças/placas). A parte lógica de programas chama-se Software.",
    category: 'hardware'
  },
  {
    id: 22,
    statement: "O Claude é uma Inteligência Artificial avançada desenvolvida pela empresa Anthropic.",
    isTrue: true,
    explanation: "O Claude se destaca em raciocínio, escrita natural e programação.",
    category: 'ai'
  },
  {
    id: 23,
    statement: "No Word, o atalho Ctrl + Z desfaz a última ação realizada no documento.",
    isTrue: true,
    explanation: "Ctrl + Z é o atalho universal para desfazer erros de digitação ou formatação.",
    category: 'word'
  },
  {
    id: 24,
    statement: "Ao deletar um arquivo com Shift + Delete no Windows, ele vai direto para a Lixeira.",
    isTrue: false,
    explanation: "Shift + Delete apaga o arquivo permanentemente do disco, sem passar pela Lixeira.",
    category: 'windows'
  },
  {
    id: 25,
    statement: "No Canva, pressionar a letra 'T' adiciona uma caixa de texto ao design.",
    isTrue: true,
    explanation: "Pressionar T insere rapidamente uma caixa de texto editável no centro do projeto.",
    category: 'canva'
  },
  {
    id: 26,
    statement: "A 'Quarentena' do antivírus é o local onde arquivos infectados ficam isolados sem prejudicar o PC.",
    isTrue: true,
    explanation: "Na quarentena, o vírus não pode ser executado nem infectar outros arquivos.",
    category: 'security'
  },
  {
    id: 27,
    statement: "No Excel, o atalho Ctrl + Espaço seleciona a linha inteira da planilha.",
    isTrue: false,
    explanation: "Ctrl + Espaço seleciona a coluna inteira. Para selecionar a linha inteira usa-se Shift + Espaço.",
    category: 'excel'
  },
  {
    id: 28,
    statement: "O atalho Alt + F4 serve para fechar o aplicativo ou janela em execução no Windows.",
    isTrue: true,
    explanation: "Alt + F4 é o atalho clássico para fechar janelas e encerrar programas.",
    category: 'windows'
  },
  {
    id: 29,
    statement: "No Google Docs, o atalho Ctrl + Shift + C exibe a contagem de palavras e caracteres.",
    isTrue: true,
    explanation: "Ctrl + Shift + C abre o painel estatístico de contagem do documento.",
    category: 'google'
  },
  {
    id: 30,
    statement: "O processador (CPU) é considerado o 'cérebro' do computador por executar os cálculos e comandos.",
    isTrue: true,
    explanation: "A CPU (Unidade Central de Processamento) processa todas as instruções de programas e sistema.",
    category: 'hardware'
  }
];
