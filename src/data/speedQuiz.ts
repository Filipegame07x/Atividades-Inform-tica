export interface SpeedQuizQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  category: 'word' | 'google' | 'canva' | 'ai' | 'security' | 'windows' | 'hardware';
}

export const speedQuizQuestions: SpeedQuizQuestion[] = [
  // VERDADEIRAS (20 questões)
  {
    id: 1,
    statement: "O atalho Ctrl + C serve para COPIAR um texto ou arquivo selecionado.",
    isTrue: true,
    explanation: "Ctrl + C armazena a seleção na Área de Transferência sem remover o original.",
    category: 'windows'
  },
  {
    id: 2,
    statement: "O ChatGPT é um modelo de Inteligência Artificial generativa criado pela empresa OpenAI.",
    isTrue: true,
    explanation: "Lançado no final de 2022 pela OpenAI, o ChatGPT revolucionou a IA conversacional.",
    category: 'ai'
  },
  {
    id: 3,
    statement: "No Canva, pressionar a letra 'R' no teclado adiciona um Retângulo instantaneamente no projeto.",
    isTrue: true,
    explanation: "As teclas de atalho rápido do Canva (R para retângulo, C para círculo, T para texto) aceleram o design.",
    category: 'canva'
  },
  {
    id: 4,
    statement: "Phishing é um golpe digital onde criminosos usam mensagens e sites falsos para roubar senhas.",
    isTrue: true,
    explanation: "O Phishing 'pesca' dados da vítima através de links enganosos imitando bancos ou redes sociais.",
    category: 'security'
  },
  {
    id: 5,
    statement: "No Google Docs, várias pessoas podem editar o mesmo documento simultaneamente na nuvem.",
    isTrue: true,
    explanation: "A colaboração em tempo real é uma das principais vantagens do Google Workspace.",
    category: 'google'
  },
  {
    id: 6,
    statement: "No Microsoft Word, o atalho Ctrl + N deixa o texto selecionado em Negrito.",
    isTrue: true,
    explanation: "Ctrl + N aplica a formatação Negrito ao texto selecionado no Word em português.",
    category: 'word'
  },
  {
    id: 7,
    statement: "O atalho Win + L bloqueia imediatamente a tela do seu computador com senha.",
    isTrue: true,
    explanation: "Win + L (Lock) protege sua sessão quando você se ausenta da mesa.",
    category: 'windows'
  },
  {
    id: 8,
    statement: "No Windows 11, o atalho Win + Shift + S abre a Ferramenta de Captura de Tela (Print seletivo).",
    isTrue: true,
    explanation: "Permite selecionar um retângulo, forma livre ou janela inteira para fotografar e copiar.",
    category: 'windows'
  },
  {
    id: 9,
    statement: "O Google Gemini é a Inteligência Artificial desenvolvida pelo Google.",
    isTrue: true,
    explanation: "O Gemini é o modelo principal do Google, integrado ao Docs, Gmail, YouTube e busca.",
    category: 'ai'
  },
  {
    id: 10,
    statement: "Um Firewall é uma barreira de segurança que monitora o tráfego de rede para bloquear acessos suspeitos.",
    isTrue: true,
    explanation: "O Firewall funciona como uma 'porta de segurança' inspecionando o que entra e sai da internet.",
    category: 'security'
  },
  {
    id: 11,
    statement: "No Google Docs, o atalho Ctrl + K serve para criar um Hiperlink em uma palavra.",
    isTrue: true,
    explanation: "Ctrl + K abre a caixa para vincular uma URL a um texto selecionado.",
    category: 'google'
  },
  {
    id: 12,
    statement: "O Claude é uma Inteligência Artificial avançada desenvolvida pela empresa Anthropic.",
    isTrue: true,
    explanation: "O Claude se destaca em raciocínio, escrita natural e programação.",
    category: 'ai'
  },
  {
    id: 13,
    statement: "No Word, o atalho Ctrl + Z desfaz a última ação realizada no documento.",
    isTrue: true,
    explanation: "Ctrl + Z é o atalho universal para desfazer erros de digitação ou formatação.",
    category: 'word'
  },
  {
    id: 14,
    statement: "No Canva, pressionar a letra 'T' adiciona uma caixa de texto ao design.",
    isTrue: true,
    explanation: "Pressionar T insere rapidamente uma caixa de texto editável no centro do projeto.",
    category: 'canva'
  },
  {
    id: 15,
    statement: "A 'Quarentena' do antivírus é o local onde arquivos infectados ficam isolados sem prejudicar o PC.",
    isTrue: true,
    explanation: "Na quarentena, o vírus não pode ser executado nem infectar outros arquivos.",
    category: 'security'
  },
  {
    id: 16,
    statement: "O atalho Alt + F4 serve para fechar o aplicativo ou janela em execução no Windows.",
    isTrue: true,
    explanation: "Alt + F4 é o atalho clássico para fechar janelas e encerrar programas.",
    category: 'windows'
  },
  {
    id: 17,
    statement: "No Google Docs, o atalho Ctrl + Shift + C exibe a contagem de palavras e caracteres.",
    isTrue: true,
    explanation: "Ctrl + Shift + C abre o painel estatístico de contagem do documento.",
    category: 'google'
  },
  {
    id: 18,
    statement: "O processador (CPU) é considerado o 'cérebro' do computador por executar os cálculos e comandos.",
    isTrue: true,
    explanation: "A CPU (Unidade Central de Processamento) processa todas as instruções de programas e sistema.",
    category: 'hardware'
  },
  {
    id: 19,
    statement: "No Word, o atalho Ctrl + A seleciona todo o conteúdo do documento atual.",
    isTrue: true,
    explanation: "Ctrl + A (All/Tudo) marca todo o texto e imagens presentes no documento no Word em português.",
    category: 'word'
  },
  {
    id: 20,
    statement: "O SSD é um dispositivo de armazenamento mais rápido e silencioso que o HD tradicional.",
    isTrue: true,
    explanation: "Por não possuir partes mecânicas móveis, o SSD lê e grava dados muito mais rapidamente que o HD.",
    category: 'hardware'
  },

  // FALSAS (20 questões)
  {
    id: 21,
    statement: "O atalho Ctrl + V remove o texto original e o cola em outro lugar.",
    isTrue: false,
    explanation: "Quem remove o texto original é o comando Recortar (Ctrl + X). O Ctrl + V apenas cola.",
    category: 'windows'
  },
  {
    id: 22,
    statement: "A memória RAM guarda todas as suas fotos e documentos permanentemente após desligar o PC.",
    isTrue: false,
    explanation: "A memória RAM é volátil (temporária). O armazenamento permanente é feito no SSD ou HD.",
    category: 'hardware'
  },
  {
    id: 23,
    statement: "O antivírus Malwarebytes serve para formatar o computador quando está com poeira.",
    isTrue: false,
    explanation: "O Malwarebytes é um software de segurança digital que detecta e remove malwares e vírus.",
    category: 'security'
  },
  {
    id: 24,
    statement: "As Inteligências Artificiais nunca cometem erros e todas as suas respostas são 100% verdadeiras.",
    isTrue: false,
    explanation: "As IAs podem 'alucinar', ou seja, gerar respostas falsas com aparência de verdade. Sempre verifique as fontes!",
    category: 'ai'
  },
  {
    id: 25,
    statement: "Uma 'Janela Anônima' no navegador impede que os sites vejam seu endereço IP físico.",
    isTrue: false,
    explanation: "A guia anônima apenas não salva histórico e cookies no seu PC. Para ocultar o IP, usa-se uma VPN.",
    category: 'security'
  },
  {
    id: 26,
    statement: "No ChatGPT, pressionar Shift + Enter envia a mensagem imediatamente.",
    isTrue: false,
    explanation: "Pressionar apenas Enter envia a mensagem. Shift + Enter quebra uma linha sem enviar.",
    category: 'ai'
  },
  {
    id: 27,
    statement: "No Canva, o atalho Ctrl + G serve para apagar o projeto inteiro.",
    isTrue: false,
    explanation: "Ctrl + G serve para Agrupar elementos selecionados na arte.",
    category: 'canva'
  },
  {
    id: 28,
    statement: "O termo 'Hardware' refere-se aos programas e sistemas operacionais do computador.",
    isTrue: false,
    explanation: "Hardware é a parte física (peças/placas). A parte lógica de programas chama-se Software.",
    category: 'hardware'
  },
  {
    id: 29,
    statement: "Ao deletar um arquivo com Shift + Delete no Windows, ele vai direto para a Lixeira.",
    isTrue: false,
    explanation: "Shift + Delete apaga o arquivo permanentemente do disco, sem passar pela Lixeira.",
    category: 'windows'
  },
  {
    id: 30,
    statement: "O cabo HDMI transmite apenas áudio, sendo necessário outro cabo separado para o vídeo.",
    isTrue: false,
    explanation: "O cabo HDMI transmite simultaneamente vídeo em alta definição e áudio digital em um único cabo.",
    category: 'hardware'
  },
  {
    id: 31,
    statement: "No Word, pressionar F7 abre a calculadora integrada do programa.",
    isTrue: false,
    explanation: "A tecla F7 ativa a Verificação Ortográfica e Gramatical no Word.",
    category: 'word'
  },
  {
    id: 32,
    statement: "No Canva, pressionar a letra 'C' insere um triângulo no design.",
    isTrue: false,
    explanation: "Pressionar a letra 'C' adiciona um Círculo ao projeto no Canva.",
    category: 'canva'
  },
  {
    id: 33,
    statement: "O atalho Ctrl + P no Windows serve para pausar o funcionamento do computador.",
    isTrue: false,
    explanation: "Ctrl + P abre a janela de Impressão (Print) do documento ou página.",
    category: 'windows'
  },
  {
    id: 34,
    statement: "Uma senha como '123456' é altamente segura contra ataques de hackers.",
    isTrue: false,
    explanation: "'123456' é uma das senhas mais fracas e mais fáceis de serem descobertas no mundo.",
    category: 'security'
  },
  {
    id: 35,
    statement: "O Google Drive permite armazenar apenas arquivos de texto de até 1 MB.",
    isTrue: false,
    explanation: "O Google Drive armazena fotos, vídeos, PDFs e diversos formatos, oferecendo 15 GB gratuitos.",
    category: 'google'
  },
  {
    id: 36,
    statement: "Redes Wi-Fi públicas e sem senha são 100% seguras para acessar contas bancárias.",
    isTrue: false,
    explanation: "Redes Wi-Fi públicas podem ser interceptadas por hackers. Evite acessar dados sensíveis nelas.",
    category: 'security'
  },
  {
    id: 37,
    statement: "No Canva, a aba 'Uploads' serve para excluir os arquivos salvos no seu computador.",
    isTrue: false,
    explanation: "A aba 'Uploads' permite enviar arquivos e imagens do seu computador para utilizar na arte.",
    category: 'canva'
  },
  {
    id: 38,
    statement: "No Word, o comando 'Salvar Como' sempre apaga o arquivo original sem pedir confirmação.",
    isTrue: false,
    explanation: "'Salvar Como' cria uma cópia nova com outro nome ou local, mantendo o original intacto.",
    category: 'word'
  },
  {
    id: 39,
    statement: "No Google Docs, a opção 'Baixar como PDF' converte o arquivo em um aplicativo instalável.",
    isTrue: false,
    explanation: "A opção converte o documento em um arquivo PDF para leitura e impressão universais.",
    category: 'google'
  },
  {
    id: 40,
    statement: "O sistema operacional Windows não precisa receber atualizações de segurança.",
    isTrue: false,
    explanation: "As atualizações do Windows Update corrigem falhas de segurança cruciais contra novos vírus.",
    category: 'security'
  }
];
