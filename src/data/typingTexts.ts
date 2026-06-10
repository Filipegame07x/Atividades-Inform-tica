export interface TypingText {
  id: number;
  theme: string;
  level: 1 | 2 | 3; // 1 = Fácil, 2 = Médio, 3 = Difícil
  text: string;
}

export interface TypingTextCategory {
  id: number;
  theme: string;
  level: 1 | 2 | 3;
  texts: string[];
}

export const typingTexts: TypingTextCategory[] = [
  {
    id: 1,
    theme: 'Informática',
    level: 1,
    texts: [
      "O computador é um robô útil para o dia a dia.\nCom ele, podemos escrever textos simples, pesquisar no Google e desenhar.\nTambém é muito fácil aprender a jogar, assistir vídeos educativos e conversar com os amigos.\nSempre mantenha a tela limpa e sente-se em uma posição confortável.\nIsso ajuda a cuidar da saúde enquanto você usa a tecnologia para se divertir.",
      "O mouse e o teclado são nossas principais ferramentas para usar o computador.\nCom um clique, abrimos programas e começamos a trabalhar.\nLembre-se de sempre manter os equipamentos limpos e em bom estado.\nExistem mouses com e sem fio, dependendo da sua preferência.\nDigitar corretamente acelera o trabalho e ajuda na escola.",
      "A internet mudou a forma como aprendemos.\nPodemos acessar enciclopédias inteiras em segundos, ler notícias do mundo todo e buscar imagens incríveis para nossos trabalhos escolares.\nA conexão rápida nos permite falar com pessoas que estão muito longe.\nAlém disso, é possível fazer cursos online de qualquer lugar do mundo.\nAproveite a rede com cuidado e sempre respeite os colegas virtuais.",
      "Aprender a digitar rápido ajuda muito nas tarefas diárias.\nAs teclas têm letras, números e símbolos variados.\nCom treino constante, logo você consegue digitar sem precisar olhar para o teclado.\nUse os dois lados do teclado para dividir o esforço das mãos.\nA prática diária transforma você em um mestre da digitação em pouco tempo."
    ]
  },
  {
    id: 2,
    theme: 'Natureza',
    level: 1,
    texts: [
      "As árvores e as flores deixam a nossa infância mais alegre.\nVocê gosta de caminhar sob a sombra das plantas?\nO vento fresco traz um perfume doce das flores do campo, enchendo o dia de cores vivas e muita paz.\nAs borboletas também aparecem para enfeitar ainda mais a paisagem.\nPassar um tempo ao ar livre faz muito bem para a mente e para o corpo.",
      "Os animais da floresta vivem em harmonia com as plantas.\nO sol brilhante aquece as folhas enquanto os pássaros cantam nas árvores.\nÉ muito importante cuidar da natureza ao nosso redor.\nNão devemos jogar lixo no chão, pois isso prejudica os bichinhos.\nPlantar uma nova árvore é um presente para o nosso futuro verde.",
      "A água dos rios é cristalina e gelada.\nOs peixes nadam felizes procurando alimento.\nProteger a água é garantir a vida de todos os seres vivos no planeta azul em que vivemos.\nA chuva traz água fresca para encher os rios novamente.\nCada gota conta, por isso devemos evitar o desperdício em casa.",
      "O céu estrelado da noite é um espetáculo maravilhoso.\nA lua ilumina os caminhos escuros da floresta silenciosa.\nAs corujas observam tudo de cima dos grandes galhos das árvores antigas.\nOuvir os sons da natureza nos traz calmaria e muita tranquilidade.\nQuando o sol nasce, os pássaros começam um novo show."
    ]
  },
  {
    id: 3,
    theme: 'Escola',
    level: 1,
    texts: [
      "Na escola, nós aprendemos muitas coisas novas todos os dias:\nler, escrever, contar e usar o computador para estudar.\nTambém brincamos no recreio, jogamos futebol e fazemos novas amizades que duram para sempre.\nA professora explica a lição com muita paciência e desenha no quadro.\nTerminar as tarefas com capricho é motivo de grande orgulho.",
      "A biblioteca da escola está sempre cheia de livros incríveis.\nEu gosto de ler histórias em quadrinhos e aventuras de heróis.\nO sinal toca e todos correm de volta para a sala de aula animadamente.\nOs livros nos levam para lugares mágicos sem precisarmos sair do lugar.\nSempre devolva o livro no prazo para que outro amigo possa ler também.",
      "Os cadernos organizados facilitam o estudo em casa.\nO professor explicou a lição com muita paciência.\nEstudar com os amigos torna tudo mais divertido e mais fácil de compreender.\nFazer resumos coloridos ajuda a lembrar da matéria no dia da prova.\nO lanche da tarde recarrega as energias para o restante do dia.",
      "O laboratório de informática é o lugar favorito dos alunos.\nCada estudante senta de frente para um monitor brilhante.\nO professor ensina a salvar os documentos e criar pastas coloridas no sistema.\nClicar, arrastar e digitar são habilidades valiosas para o futuro.\nA cada aula, descobrimos um novo programa ou jogo educativo legal."
    ]
  },
  {
    id: 4,
    theme: 'Faculdade',
    level: 2,
    texts: [
      "A vida universitária exige muita dedicação dos estudantes.\nEm 2026, cerca de 85% dos alunos utilizam notebooks e internet banda larga para realizar pesquisas acadêmicas.\nAlém disso, a entrega de projetos dentro do prazo estipulado pelos professores é fundamental para garantir a aprovação no semestre letivo.\nManter a assiduidade e o foco durante as aulas longas pode ser um grande desafio.\nAs amizades feitas na faculdade muitas vezes se tornam importantes parcerias no mercado de trabalho.",
      "A apresentação do trabalho de conclusão de curso gera nervosismo na maioria dos formandos.\nOs slides devem ser objetivos, claros e conter referências bibliográficas adequadas (segundo as normas da ABNT).\nRevisar o texto antes da entrega final evita descontos desnecessários na nota.\nTreinar a fala em frente ao espelho ajuda a melhorar a postura e a confiança.\nResponder às perguntas da banca com firmeza e educação demonstra domínio sobre o assunto estudado.",
      "O campus universitário oferece excelentes oportunidades extracurriculares: grupos de pesquisa, monitorias e campeonatos esportivos.\nParticipar ativamente dessas atividades enriquece o currículo do futuro profissional e expande sua rede de contatos para o mercado de trabalho.\nA biblioteca central costuma ficar aberta até altas horas para quem precisa estudar para provas finais.\nÉ comum ver alunos dividindo anotações e resolvendo listas de exercícios no gramado ou nas mesas da lanchonete.",
      "O planejamento financeiro é importante durante a faculdade, pois o custo com apostilas, livros e alimentação pode ser alto.\nOrganizar uma planilha de gastos mensais ajuda a não estourar o orçamento do mês e a guardar um pouco de dinheiro para emergências.\nAlguns estudantes buscam estágios remunerados para ganhar experiência e independência financeira.\nEquilibrar o tempo entre o estágio e as aulas requer disciplina e muita força de vontade para não deixar as notas caírem."
    ]
  },
  {
    id: 5,
    theme: 'Tecnologia',
    level: 2,
    texts: [
      "Você sabia que existem mais de 5.000.000 de aplicativos para celulares?\nA tecnologia avança rápido e facilita a comunicação (via e-mail ou redes sociais).\nHoje em dia, podemos realizar chamadas de vídeo em tempo real e compartilhar momentos importantes com qualquer pessoa do mundo, de forma quase instantânea.\nCom o advento do 5G, a velocidade de download atingiu níveis impressionantes em várias cidades globais.\nNo entanto, é crucial saber o momento certo de desconectar para cuidar da saúde mental.",
      "A inteligência artificial está presente em nossos assistentes virtuais e recomendações de filmes.\nOs algoritmos processam grandes quantidades de dados para entender nossos gostos e preferências.\nA segurança digital, porém, é um ponto que exige senhas fortes e atualizações constantes.\nEspecialistas alertam para os riscos do roubo de dados por hackers mal-intencionados na internet.\nPor isso, nunca compartilhe informações bancárias ou dados pessoais em sites que não possuem cadeado de segurança.",
      "A programação de computadores é como aprender um novo idioma focado em lógica.\nExistem diversas linguagens populares, como JavaScript, Python e C++.\nEscrever códigos eficientes exige prática contínua, leitura atenta da documentação oficial e muita resolução de problemas.\nA cada nova atualização tecnológica, bibliotecas e frameworks surgem para facilitar o trabalho do desenvolvedor.\nA comunidade online costuma ser muito acolhedora e pronta para ajudar iniciantes a tirarem suas dúvidas em fóruns especializados.",
      "Os óculos de realidade virtual estão transformando a maneira como jogamos e estudamos.\nPodemos visitar museus históricos sem sair de casa e realizar simulações de treinamento seguras.\nO futuro da tecnologia nos trará surpresas ainda mais fascinantes nas próximas décadas.\nCarros autônomos e entregas por drones já são uma realidade em certos países desenvolvidos.\nA automação promete revolucionar indústrias inteiras, criando novas vagas de emprego enquanto torna algumas atividades antigas obsoletas."
    ]
  },
  {
    id: 6,
    theme: 'Profissões',
    level: 2,
    texts: [
      "Existem várias profissões importantes no mercado de trabalho atual: médicos, engenheiros, professores e programadores de sistemas.\nQual é a sua favorita?\nCada área profissional exige habilidades únicas, dedicação constante e muito estudo para resolver os desafios do cotidiano profissional.\nA escolha da carreira deve levar em conta tanto a aptidão pessoal quanto as tendências econômicas futuras.\nMesmo com a evolução das máquinas, a empatia e a criatividade humana continuam sendo talentos insubstituíveis.",
      "O trabalho de um arquiteto envolve desenhar plantas e criar projetos em softwares de modelagem 3D.\nA precisão dos cálculos e a criatividade são elementos indissociáveis nessa carreira.\nAlém disso, o respeito às leis de zoneamento urbano é obrigatório em todas as obras.\nAs maquetes eletrônicas ajudam o cliente a visualizar a futura casa antes mesmo de o primeiro tijolo ser colocado.\nA preocupação com materiais sustentáveis vem ganhando destaque nos projetos mais modernos da atualidade.",
      "Um especialista em marketing digital analisa métricas de campanhas publicitárias nas redes sociais.\nSeu objetivo é aumentar a visibilidade da marca e converter cliques em vendas efetivas.\nO uso de ferramentas de análise de dados garante resultados muito mais expressivos e mensuráveis.\nSaber criar um texto persuasivo (copywriting) é uma das armas mais poderosas desse profissional no dia a dia.\nUma boa estratégia digital pode fazer uma pequena empresa competir de igual para igual com grandes corporações.",
      "A rotina de um advogado exige muita leitura de processos judiciais e atualização constante sobre as novas leis vigentes.\nEscrever petições com clareza argumentativa é uma competência imprescindível para convencer o juiz e defender os interesses de seus clientes no tribunal.\nAlém disso, as audiências de conciliação exigem habilidade de negociação e controle emocional.\nLidar com prazos extremamente curtos é o maior motivo de estresse nos grandes escritórios de advocacia do país.\nPor trás de cada processo de sucesso, há horas intermináveis de jurisprudências pesquisadas e analisadas com cautela."
    ]
  },
  {
    id: 7,
    theme: 'Meio ambiente',
    level: 2,
    texts: [
      "Cuidar do nosso planeta é dever de todos nós.\nDedique atenção à reciclagem de materiais orgânicos — a Terra agradece!\nPequenas atitudes diárias, como economizar água e evitar o uso excessivo de plástico, fazem uma enorme diferença na preservação da fauna e flora.\nCom a poluição dos oceanos aumentando a cada dia, tartarugas e baleias correm sérios riscos de extinção.\nEducar as crianças sobre a importância do consumo consciente é a chave para uma sociedade sustentável e saudável.",
      "As mudanças climáticas têm provocado fenômenos meteorológicos intensos ao redor do globo.\nA adoção de energias renováveis (como a solar e a eólica) é uma das alternativas mais viáveis para reduzir a emissão de gases de efeito estufa.\nO desmatamento ilegal precisa ser combatido com rigor e multas pesadas para quem destrói áreas de preservação ambiental.\nÉ nosso dever como cidadãos cobrar políticas públicas eficientes e voltadas para a energia limpa em nossas cidades.\nA conscientização coletiva mudará a direção em que a humanidade caminha para o futuro sustentável.",
      "Florestas tropicais, como a Amazônia, possuem a maior biodiversidade do mundo e são essenciais para o equilíbrio climático.\nMuitas espécies raras de aves e anfíbios habitam a região.\nPreservar seus habitats significa garantir a sustentabilidade dos recursos naturais para as próximas gerações.\nAs árvores gigantes absorvem toneladas de carbono da atmosfera, funcionado como o pulmão verde do nosso continente.\nCombater os focos de incêndio florestal nas épocas de seca exige ações conjuntas entre o governo e a população civil.",
      "O descarte incorreto de lixo eletrônico gera um impacto ambiental gravíssimo devido aos metais pesados presentes nas placas.\nProcure postos de coleta especializados quando for jogar fora pilhas, baterias de celular e peças antigas de computador para evitar a contaminação do solo.\nA contaminação dos lençóis freáticos pode causar danos irreparáveis à saúde da comunidade local que depende dessa água.\nAlgumas empresas já oferecem descontos na compra de aparelhos novos se você devolver o seu equipamento usado e obsoleto.\nA economia circular visa justamente aproveitar ao máximo cada componente e diminuir a geração de resíduos no mundo moderno."
    ]
  },
  {
    id: 8,
    theme: 'Comunicação',
    level: 3,
    texts: [
      "* Atenção: o e-mail padrão do suporte é contato@empresa.com.br.\nVocê concorda com os termos? [Sim/Não] R$ 50,00 + taxas de 10% (líquido).\nPara dúvidas adicionais, ligue para o telefone gratuito: 0800-777-4433 (de segunda a sexta, das 08:00 às 18:00).\nLembramos que as mensagens recebidas via WhatsApp (+55 11 91234-5678) são respondidas em até 24 horas úteis!\nAgradecemos pela sua compreensão e preferência contínua; nosso objetivo é entregar o melhor atendimento possível.",
      "Caro(a) cliente, o boleto bancário no valor de R$ 1.450,75 vence no dia 15/10/2026.\nEm caso de atraso, será cobrada multa de 2% ao mês e juros diários (pro-rata).\nCaso o pagamento já tenha sido efetuado, por favor, desconsidere este aviso automático emitido pelo nosso sistema Financeiro_V3.1.\nSe você deseja parcelar a sua dívida, utilize o aplicativo do banco ou envie um SMS com a palavra \"ACORDO\" para 2844.\nNossos consultores financeiros estão sempre à disposição para renegociar os valores (sujeito à análise de crédito do seu perfil).",
      "O evento corporativo \"InovaTech 2026\" será transmitido via streaming na plataforma Zoom (Link: https://zoom.us/inova-2026).\nA senha de acesso (PIN) é: @Inova#26.\nPor favor, mantenha o microfone mutado durante a palestra magna e utilize o chat lateral para enviar perguntas aos palestrantes convidados.\nNa sessão da tarde (14h00 - 17h30), haverá sorteios de brindes e a apresentação dos resultados financeiros do terceiro trimestre (Q3/2026).\nNão se esqueça de preencher o formulário de feedback ao final do evento para receber o seu certificado de participação digital.",
      "Sr. João das Neves (CPF: 123.456.789-00), informamos que o seu pedido #987654-A foi despachado via transportadora Expresso-Rápido.\nO código de rastreio (Tracking Code) é: TRK-9988-BR!\nA previsão de entrega é entre os dias 20/05/26 e 25/05/26, horário comercial (das 9h às 18h).\nÉ necessário que um responsável maior de 18 anos esteja no local portando documento com foto para assinar o canhoto da nota fiscal (NF-e).\nEm caso de ausência, faremos mais duas tentativas de entrega antes que o pacote retorne ao nosso centro de distribuição central."
    ]
  },
  {
    id: 9,
    theme: 'Escritório',
    level: 3,
    texts: [
      "O relatório de vendas está salvo na pasta: C:\\Documentos\\Contratos_2026.docx.\nA meta do trimestre é: total = $15.000 & crescer #5% ao ano.\nLembre-se de atualizar a planilha compartilhada no drive: Z:\\Financeiro\\Orcamento_V2.xlsx antes da próxima reunião semanal.\nOs diretores pediram urgência na apresentação dos gráficos de lucros e perdas (DRE) para os investidores internacionais!\nSe precisar da senha do sistema ERP, contate o setor de TI através do chamado #7451-TI e informe o seu ID corporativo (RH-1029).",
      "Solicito a compra de 15 mouses ópticos sem fio (marca LogiTech, modelo M280) e 5 teclados ergonômicos (Padrão ABNT2).\nO orçamento máximo aprovado pela diretoria é de R$ 2.300,00 (dois mil e trezentos reais).\nFavor enviar a nota fiscal eletrônica (NF-e) para o e-mail: compras@escritorio-adm.com.\nA entrega dos equipamentos deve ocorrer impreterivelmente até o dia 30/11/2026, visto que contratamos novos estagiários para o setor de atendimento.\nO pagamento será feito à vista, via transferência bancária PIX (Chave CNPJ: 12.345.678/0001-99), assim que a mercadoria for recebida e conferida.",
      "A tabela dinâmica do Excel apresentou erro na fórmula: =SOMA(B2:B50) * 1,05.\nO gerente de projetos (Sr. Carlos Almeida) recomendou revisar os cálculos das despesas operacionais (OPEX) e investimentos de capital (CAPEX).\nA apresentação em PowerPoint (.pptx) precisa refletir esses novos dados gráficos antes de ser impressa na multifuncional do 3º andar.\nAlém disso, certifique-se de que o logotipo da empresa está formatado corretamente no cabeçalho das páginas e que as cores correspondem ao manual da marca.\nA diretoria executiva se reunirá exatamente às 09:15 da manhã; não são tolerados atrasos sem justificativa por escrito.",
      "A pauta da reunião de amanhã (às 14:30) inclui os seguintes tópicos: 1) Balanço Patrimonial (Q3-2026); 2) Redução de custos variáveis em 15%; e 3) Avaliação de desempenho da equipe de TI.\nPor favor, confirmem a presença enviando um 'OK' no grupo corporativo do WhatsApp ou via Slack!\nO uso da sala de conferências A-01 já foi agendado pelo sistema da recepção, e o projetor multimídia testado pela equipe de infraestrutura.\nPara quem for participar remotamente (via Microsoft Teams), o link seguro será enviado pelo Outlook cinco minutos antes do início previsto da call."
    ]
  },
  {
    id: 10,
    theme: 'Cotidiano',
    level: 3,
    texts: [
      "Hoje comprei pão por R$ 4,50; leite por R$ 6,20 e café por R$ 12,00. No total, gastei R$ 22,70.\n\"Que caro!\", exclamou a cliente.\nLogo em seguida, ela pagou com uma nota de R$ 50,00 e recebeu R$ 27,30 de troco em moedas de R$ 0,50 e R$ 0,10.\nNo caixa ao lado, um rapaz tentava pagar sua conta com o cartão de débito, mas o terminal apresentava a mensagem: \"Transação não autorizada - Saldo insuficiente!\".\nCenas como essas são bastante comuns na rotina agitada do supermercado central da cidade, especialmente durante o início e fim do mês.",
      "O voo JJ3045 com destino a São Paulo (CGH) foi reagendado para as 14:30.\nA temperatura na chegada será de 24°C (com 60% de probabilidade de chuva moderada).\nPassageiros com prioridade (gestantes, idosos e PCD) devem se dirigir ao Portão 9A para embarque imediato, munidos de RG ou CNH originais.\nNão se esqueçam de despachar as bagagens com mais de 10kg no balcão da companhia aérea antes de passar pelos detectores de metal da Polícia Federal.\nDesejamos a todos uma excelente viagem e informamos que o serviço de bordo será suspenso devido à forte turbulência prevista.",
      "Receita de Bolo de Cenoura: 3 cenouras médias (descascadas e picadas), 4 ovos, 1 xícara de óleo de soja e 2 xícaras de açúcar refinado.\nBata tudo no liquidificador até formar uma mistura homogênea.\nAsse em forno pré-aquecido a 180°C por cerca de 45 minutos. Rende de 10 a 12 porções!\nEnquanto o bolo assa, prepare a cobertura de chocolate usando: 1 colher de sopa de manteiga, 3 colheres de chocolate em pó e meia xícara de leite.\nDeixe ferver por cinco minutos até engrossar e despeje sobre o bolo ainda quente (o resultado é simplesmente delicioso).",
      "A partida de futebol entre o Brasil e a Argentina terminou empatada em 2 x 2.\nO juiz concedeu 5 minutos de acréscimo no 2º tempo (aos 45' + 5').\nO estádio estava lotado, com um público pagante de 65.432 espectadores e renda estimada em R$ 3.500.800,00. Um espetáculo emocionante!\nA polícia militar registrou pequenos conflitos do lado de fora dos portões sul (setor B), mas os ânimos foram rapidamente acalmados após a intervenção da tropa de choque.\nNo dia seguinte, a imprensa esportiva destacou a brilhante atuação do goleiro titular que defendeu um pênalti perigoso aos 38 minutos do primeiro tempo."
    ]
  }
];
