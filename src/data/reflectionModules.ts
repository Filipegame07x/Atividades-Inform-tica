export interface ReflectionQuestion {
  id: string;
  prompt: string;
  placeholder: string;
}

export interface ReflectionModule {
  id: string;
  title: string;
  description: string;
  questions: ReflectionQuestion[];
}

const reflectionQuestions = (topic: string): ReflectionQuestion[] => [
  {
    id: 'learned',
    prompt: `O que você aprendeu sobre ${topic}?`,
    placeholder: 'Conte com suas palavras o que aprendeu nas aulas e atividades.',
  },
  {
    id: 'use',
    prompt: `Qual é a principal utilidade de ${topic} e em que situação você usaria?`,
    placeholder: 'Dê um exemplo de uso no dia a dia, nos estudos ou no trabalho.',
  },
  {
    id: 'helped',
    prompt: 'Qual recurso ou atividade mais ajudou você? O que achou melhor?',
    placeholder: 'Conte qual parte foi mais útil ou interessante para você.',
  },
];

export const reflectionModules: ReflectionModule[] = [
  {
    id: 'about',
    title: 'Sobre mim',
    description: 'Apresente-se antes de contar o que aprendeu.',
    questions: [
      { id: 'name', prompt: 'Qual é o seu nome completo?', placeholder: 'Digite seu nome completo.' },
      { id: 'about-me', prompt: 'Escreva um pouco sobre você.', placeholder: 'Fale sobre seus interesses, seus estudos e seus objetivos.' },
    ],
  },
  {
    id: 'word', title: 'Microsoft Word', description: 'Documentos, formatação e currículo.',
    questions: [
      { id: 'what-is', prompt: 'O que é o Microsoft Word?', placeholder: 'Explique de forma simples.' },
      { id: 'purpose', prompt: 'Para que o Word serve e que tipos de documentos podemos criar nele?', placeholder: 'Por exemplo: cartas, trabalhos, relatórios ou currículos.' },
      { id: 'learned', prompt: 'O que você aprendeu sobre o Word?', placeholder: 'Fale sobre digitação, formatação, tabelas, imagens ou outros recursos estudados.' },
      { id: 'favorite', prompt: 'Qual recurso do Word você achou melhor ou mais útil? Ele ajudou você em algo?', placeholder: 'Conte o que mais gostou e como esse recurso pode ajudar.' },
    ],
  },
  { id: 'powerpoint', title: 'Microsoft PowerPoint', description: 'Slides e apresentações.', questions: reflectionQuestions('o PowerPoint e as apresentações') },
  { id: 'chrome', title: 'Google Chrome', description: 'Navegação e pesquisa na internet.', questions: reflectionQuestions('o Google Chrome') },
  { id: 'windows-7', title: 'Windows 7', description: 'Sistema operacional e tarefas básicas.', questions: reflectionQuestions('o Windows 7') },
  { id: 'windows-10', title: 'Windows 10', description: 'Sistema operacional e organização do computador.', questions: reflectionQuestions('o Windows 10') },
  { id: 'windows-11', title: 'Windows 11', description: 'Sistema operacional e recursos atuais.', questions: reflectionQuestions('o Windows 11') },
  { id: 'chatgpt', title: 'ChatGPT', description: 'Inteligência artificial para estudo e criação.', questions: reflectionQuestions('o ChatGPT') },
  { id: 'gemini', title: 'Google Gemini', description: 'Inteligência artificial e pesquisa.', questions: reflectionQuestions('o Google Gemini') },
  { id: 'ilovepdf', title: 'iLovePDF', description: 'Ferramentas para trabalhar com arquivos PDF.', questions: reflectionQuestions('o iLovePDF') },
  { id: 'email', title: 'E-mail', description: 'Mensagens, anexos e comunicação digital.', questions: reflectionQuestions('o uso de e-mail') },
  { id: 'drive', title: 'Google Drive', description: 'Arquivos na nuvem e compartilhamento.', questions: reflectionQuestions('o Google Drive') },
  { id: 'meet', title: 'Google Meet', description: 'Reuniões e aulas por videochamada.', questions: reflectionQuestions('o Google Meet') },
  { id: 'anydesk', title: 'AnyDesk', description: 'Acesso remoto e suporte técnico.', questions: reflectionQuestions('o AnyDesk') },
  { id: 'malwarebytes', title: 'Malwarebytes', description: 'Verificação de ameaças e segurança digital.', questions: reflectionQuestions('o Malwarebytes e a segurança digital') },
  { id: 'canva', title: 'Canva', description: 'Criação de artes e materiais visuais.', questions: reflectionQuestions('o Canva') },
];
