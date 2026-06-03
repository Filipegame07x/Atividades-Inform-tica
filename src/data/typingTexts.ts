export interface TypingText {
  id: number;
  theme: string;
  level: 1 | 2 | 3; // 1 = Fácil, 2 = Médio, 3 = Difícil
  text: string;
}

export const typingTexts: TypingText[] = [
  {
    id: 1,
    theme: 'Informática',
    level: 1,
    text: "O computador é um robô útil para o dia a dia. Com ele, podemos escrever textos simples, pesquisar no Google e desenhar. Também é muito fácil aprender a jogar, assistir vídeos educativos e conversar com os amigos."
  },
  {
    id: 2,
    theme: 'Natureza',
    level: 1,
    text: "As árvores e as flores deixam a nossa infância mais alegre. Você gosta de caminhar sob a sombra das plantas? O vento fresco traz um perfume doce das flores do campo, enchendo o dia de cores vivas e muita paz."
  },
  {
    id: 3,
    theme: 'Escola',
    level: 1,
    text: "Na escola, nós aprendemos muitas coisas novas todos os dias: ler, escrever, contar e usar o computador para estudar. Também brincamos no recreio, jogamos futebol e fazemos novas amizades que duram para sempre."
  },
  {
    id: 4,
    theme: 'Faculdade',
    level: 2,
    text: "A vida universitária exige muita dedicação dos estudantes. Em 2026, cerca de 85% dos alunos utilizam notebooks e internet banda larga para realizar pesquisas acadêmicas. Além disso, a entrega de projetos dentro do prazo estipulado pelos professores é fundamental para garantir a aprovação no semestre letivo."
  },
  {
    id: 5,
    theme: 'Tecnologia',
    level: 2,
    text: "Você sabia que existem mais de 5.000.000 de aplicativos para celulares? A tecnologia avança rápido e facilita a comunicação (via e-mail ou redes sociais). Hoje em dia, podemos realizar chamadas de vídeo em tempo real e compartilhar momentos importantes com qualquer pessoa do mundo, de forma quase instantânea."
  },
  {
    id: 6,
    theme: 'Profissões',
    level: 2,
    text: "Existem várias profissões importantes no mercado de trabalho atual: médicos, engenheiros, professores e programadores de sistemas. Qual é a sua favorita? Cada área profissional exige habilidades únicas, dedicação constante e muito estudo para resolver os desafios do cotidiano profissional."
  },
  {
    id: 7,
    theme: 'Meio ambiente',
    level: 2,
    text: "Cuidar do nosso planeta é dever de todos nós. Dedique atenção à reciclagem de materiais orgânicos — a Terra agradece! Pequenas atitudes diárias, como economizar água e evitar o uso excessivo de plástico, fazem uma enorme diferença na preservação da fauna e flora."
  },
  {
    id: 8,
    theme: 'Comunicação',
    level: 3,
    text: "* Atenção: o e-mail padrão do suporte é contato@empresa.com.br. Você concorda com os termos? [Sim/Não] R$ 50,00 + taxas de 10% (líquido). Para dúvidas adicionais, ligue para o telefone gratuito: 0800-777-4433 (de segunda a sexta, das 08:00 às 18:00)."
  },
  {
    id: 9,
    theme: 'Escritório',
    level: 3,
    text: "O relatório de vendas está salvo na pasta: C:\\Documentos\\Contratos_2026.docx. A meta do trimestre é: total = $15.000 & crescer #5% ao ano. Lembre-se de atualizar a planilha compartilhada no drive: Z:\\Financeiro\\Orcamento_V2.xlsx antes da próxima reunião semanal."
  },
  {
    id: 10,
    theme: 'Cotidiano',
    level: 3,
    text: "Hoje comprei pão por R$ 4,50; leite por R$ 6,20 e café por R$ 12,00. No total, gastei R$ 22,70. \"Que caro!\", exclamou a cliente. Logo em seguida, ela pagou com uma nota de R$ 50,00 e recebeu R$ 27,30 de troco em moedas de R$ 0,50 e R$ 0,10."
  }
];
