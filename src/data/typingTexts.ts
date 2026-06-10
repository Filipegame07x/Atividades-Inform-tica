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
      "O computador é um robô útil para o dia a dia. Com ele, podemos escrever textos simples, pesquisar no Google e desenhar. Também é muito fácil aprender a jogar, assistir vídeos educativos e conversar com os amigos.",
      "O mouse e o teclado são nossas principais ferramentas para usar o computador. Com um clique, abrimos programas e começamos a trabalhar. Lembre-se de sempre manter os equipamentos limpos e em bom estado.",
      "A internet mudou a forma como aprendemos. Podemos acessar enciclopédias inteiras em segundos, ler notícias do mundo todo e buscar imagens incríveis para nossos trabalhos escolares.",
      "Aprender a digitar rápido ajuda muito nas tarefas diárias. As teclas têm letras, números e símbolos variados. Com treino constante, logo você consegue digitar sem precisar olhar para o teclado."
    ]
  },
  {
    id: 2,
    theme: 'Natureza',
    level: 1,
    texts: [
      "As árvores e as flores deixam a nossa infância mais alegre. Você gosta de caminhar sob a sombra das plantas? O vento fresco traz um perfume doce das flores do campo, enchendo o dia de cores vivas e muita paz.",
      "Os animais da floresta vivem em harmonia com as plantas. O sol brilhante aquece as folhas enquanto os pássaros cantam nas árvores. É muito importante cuidar da natureza ao nosso redor.",
      "A água dos rios é cristalina e gelada. Os peixes nadam felizes procurando alimento. Proteger a água é garantir a vida de todos os seres vivos no planeta azul em que vivemos.",
      "O céu estrelado da noite é um espetáculo maravilhoso. A lua ilumina os caminhos escuros da floresta silenciosa. As corujas observam tudo de cima dos grandes galhos das árvores antigas."
    ]
  },
  {
    id: 3,
    theme: 'Escola',
    level: 1,
    texts: [
      "Na escola, nós aprendemos muitas coisas novas todos os dias: ler, escrever, contar e usar o computador para estudar. Também brincamos no recreio, jogamos futebol e fazemos novas amizades que duram para sempre.",
      "A biblioteca da escola está sempre cheia de livros incríveis. Eu gosto de ler histórias em quadrinhos e aventuras de heróis. O sinal toca e todos correm de volta para a sala de aula animadamente.",
      "Os cadernos organizados facilitam o estudo em casa. O professor explicou a lição com muita paciência. Estudar com os amigos torna tudo mais divertido e mais fácil de compreender.",
      "O laboratório de informática é o lugar favorito dos alunos. Cada estudante senta de frente para um monitor brilhante. O professor ensina a salvar os documentos e criar pastas coloridas no sistema."
    ]
  },
  {
    id: 4,
    theme: 'Faculdade',
    level: 2,
    texts: [
      "A vida universitária exige muita dedicação dos estudantes. Em 2026, cerca de 85% dos alunos utilizam notebooks e internet banda larga para realizar pesquisas acadêmicas. Além disso, a entrega de projetos dentro do prazo estipulado pelos professores é fundamental para garantir a aprovação no semestre letivo.",
      "A apresentação do trabalho de conclusão de curso gera nervosismo na maioria dos formandos. Os slides devem ser objetivos, claros e conter referências bibliográficas adequadas (segundo as normas da ABNT). Revisar o texto antes da entrega final evita descontos desnecessários na nota.",
      "O campus universitário oferece excelentes oportunidades extracurriculares: grupos de pesquisa, monitorias e campeonatos esportivos. Participar ativamente dessas atividades enriquece o currículo do futuro profissional e expande sua rede de contatos para o mercado de trabalho.",
      "O planejamento financeiro é importante durante a faculdade, pois o custo com apostilas, livros e alimentação pode ser alto. Organizar uma planilha de gastos mensais ajuda a não estourar o orçamento do mês e a guardar um pouco de dinheiro para emergências."
    ]
  },
  {
    id: 5,
    theme: 'Tecnologia',
    level: 2,
    texts: [
      "Você sabia que existem mais de 5.000.000 de aplicativos para celulares? A tecnologia avança rápido e facilita a comunicação (via e-mail ou redes sociais). Hoje em dia, podemos realizar chamadas de vídeo em tempo real e compartilhar momentos importantes com qualquer pessoa do mundo, de forma quase instantânea.",
      "A inteligência artificial está presente em nossos assistentes virtuais e recomendações de filmes. Os algoritmos processam grandes quantidades de dados para entender nossos gostos e preferências. A segurança digital, porém, é um ponto que exige senhas fortes e atualizações constantes.",
      "A programação de computadores é como aprender um novo idioma focado em lógica. Existem diversas linguagens populares, como JavaScript, Python e C++. Escrever códigos eficientes exige prática contínua, leitura atenta da documentação oficial e muita resolução de problemas.",
      "Os óculos de realidade virtual estão transformando a maneira como jogamos e estudamos. Podemos visitar museus históricos sem sair de casa e realizar simulações de treinamento seguras. O futuro da tecnologia nos trará surpresas ainda mais fascinantes nas próximas décadas."
    ]
  },
  {
    id: 6,
    theme: 'Profissões',
    level: 2,
    texts: [
      "Existem várias profissões importantes no mercado de trabalho atual: médicos, engenheiros, professores e programadores de sistemas. Qual é a sua favorita? Cada área profissional exige habilidades únicas, dedicação constante e muito estudo para resolver os desafios do cotidiano profissional.",
      "O trabalho de um arquiteto envolve desenhar plantas e criar projetos em softwares de modelagem 3D. A precisão dos cálculos e a criatividade são elementos indissociáveis nessa carreira. Além disso, o respeito às leis de zoneamento urbano é obrigatório em todas as obras.",
      "Um especialista em marketing digital analisa métricas de campanhas publicitárias nas redes sociais. Seu objetivo é aumentar a visibilidade da marca e converter cliques em vendas efetivas. O uso de ferramentas de análise de dados garante resultados muito mais expressivos e mensuráveis.",
      "A rotina de um advogado exige muita leitura de processos judiciais e atualização constante sobre as novas leis vigentes. Escrever petições com clareza argumentativa é uma competência imprescindível para convencer o juiz e defender os interesses de seus clientes no tribunal."
    ]
  },
  {
    id: 7,
    theme: 'Meio ambiente',
    level: 2,
    texts: [
      "Cuidar do nosso planeta é dever de todos nós. Dedique atenção à reciclagem de materiais orgânicos — a Terra agradece! Pequenas atitudes diárias, como economizar água e evitar o uso excessivo de plástico, fazem uma enorme diferença na preservação da fauna e flora.",
      "As mudanças climáticas têm provocado fenômenos meteorológicos intensos ao redor do globo. A adoção de energias renováveis (como a solar e a eólica) é uma das alternativas mais viáveis para reduzir a emissão de gases de efeito estufa. O desmatamento ilegal precisa ser combatido com rigor.",
      "Florestas tropicais, como a Amazônia, possuem a maior biodiversidade do mundo e são essenciais para o equilíbrio climático. Muitas espécies raras de aves e anfíbios habitam a região. Preservar seus habitats significa garantir a sustentabilidade dos recursos naturais para as próximas gerações.",
      "O descarte incorreto de lixo eletrônico gera um impacto ambiental gravíssimo devido aos metais pesados presentes nas placas. Procure postos de coleta especializados quando for jogar fora pilhas, baterias de celular e peças antigas de computador para evitar a contaminação do solo."
    ]
  },
  {
    id: 8,
    theme: 'Comunicação',
    level: 3,
    texts: [
      "* Atenção: o e-mail padrão do suporte é contato@empresa.com.br. Você concorda com os termos? [Sim/Não] R$ 50,00 + taxas de 10% (líquido). Para dúvidas adicionais, ligue para o telefone gratuito: 0800-777-4433 (de segunda a sexta, das 08:00 às 18:00).",
      "Caro(a) cliente, o boleto bancário no valor de R$ 1.450,75 vence no dia 15/10/2026. Em caso de atraso, será cobrada multa de 2% ao mês e juros diários (pro-rata). Caso o pagamento já tenha sido efetuado, por favor, desconsidere este aviso automático emitido pelo nosso sistema Financeiro_V3.1.",
      "O evento corporativo \"InovaTech 2026\" será transmitido via streaming na plataforma Zoom (Link: https://zoom.us/inova-2026). A senha de acesso (PIN) é: @Inova#26. Por favor, mantenha o microfone mutado durante a palestra magna e utilize o chat lateral para enviar perguntas aos palestrantes convidados.",
      "Sr. João das Neves (CPF: 123.456.789-00), informamos que o seu pedido #987654-A foi despachado via transportadora Expresso-Rápido. O código de rastreio (Tracking Code) é: TRK-9988-BR! A previsão de entrega é entre os dias 20/05/26 e 25/05/26, horário comercial (das 9h às 18h)."
    ]
  },
  {
    id: 9,
    theme: 'Escritório',
    level: 3,
    texts: [
      "O relatório de vendas está salvo na pasta: C:\\Documentos\\Contratos_2026.docx. A meta do trimestre é: total = $15.000 & crescer #5% ao ano. Lembre-se de atualizar a planilha compartilhada no drive: Z:\\Financeiro\\Orcamento_V2.xlsx antes da próxima reunião semanal.",
      "Solicito a compra de 15 mouses ópticos sem fio (marca LogiTech, modelo M280) e 5 teclados ergonômicos (Padrão ABNT2). O orçamento máximo aprovado pela diretoria é de R$ 2.300,00 (dois mil e trezentos reais). Favor enviar a nota fiscal eletrônica (NF-e) para o e-mail: compras@escritorio-adm.com.",
      "A tabela dinâmica do Excel apresentou erro na fórmula: =SOMA(B2:B50) * 1,05. O gerente de projetos (Sr. Carlos Almeida) recomendou revisar os cálculos das despesas operacionais (OPEX) e investimentos de capital (CAPEX). A apresentação em PowerPoint (.pptx) precisa refletir esses novos dados gráficos.",
      "A pauta da reunião de amanhã (às 14:30) inclui os seguintes tópicos: 1) Balanço Patrimonial (Q3-2026); 2) Redução de custos variáveis em 15%; e 3) Avaliação de desempenho da equipe de TI. Por favor, confirmem a presença enviando um 'OK' no grupo corporativo do WhatsApp ou via Slack!"
    ]
  },
  {
    id: 10,
    theme: 'Cotidiano',
    level: 3,
    texts: [
      "Hoje comprei pão por R$ 4,50; leite por R$ 6,20 e café por R$ 12,00. No total, gastei R$ 22,70. \"Que caro!\", exclamou a cliente. Logo em seguida, ela pagou com uma nota de R$ 50,00 e recebeu R$ 27,30 de troco em moedas de R$ 0,50 e R$ 0,10.",
      "O voo JJ3045 com destino a São Paulo (CGH) foi reagendado para as 14:30. A temperatura na chegada será de 24°C (com 60% de probabilidade de chuva moderada). Passageiros com prioridade (gestantes, idosos e PCD) devem se dirigir ao Portão 9A para embarque imediato, munidos de RG ou CNH originais.",
      "Receita de Bolo de Cenoura: 3 cenouras médias (descascadas e picadas), 4 ovos, 1 xícara de óleo de soja e 2 xícaras de açúcar refinado. Bata tudo no liquidificador até formar uma mistura homogênea. Asse em forno pré-aquecido a 180°C por cerca de 45 minutos. Rende de 10 a 12 porções!",
      "A partida de futebol entre o Brasil e a Argentina terminou empatada em 2 x 2. O juiz concedeu 5 minutos de acréscimo no 2º tempo (aos 45' + 5'). O estádio estava lotado, com um público pagante de 65.432 espectadores e renda estimada em R$ 3.500.800,00. Um espetáculo emocionante!"
    ]
  }
];
