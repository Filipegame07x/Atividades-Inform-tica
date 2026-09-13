export interface QuestionOption {
  id: string;
  text: string;
}

export interface ObjectiveQuestion {
  id: number;
  question: string;
  options: QuestionOption[];
  correctOptionId: string;
  difficulty?: 'facil' | 'media' | 'dificil';
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
  iconType: 'word' | 'powerpoint' | 'chrome' | 'antivirus' | 'canva' | 'systems' | 'ai' | 'gmail' | 'drive' | 'meet' | 'anydesk' | 'excel';
  objectiveQuestions: ObjectiveQuestion[];
  discursiveQuestions: DiscursiveQuestion[];
}

export const activities: ActivityData[] = [
  // ===================================================================
  // NOVAS ATIVIDADES OFICIAIS (40 QUESTÕES CADA)
  // ===================================================================
{
  "id": "gmail",
  "title": "Gmail - Correio Eletrônico",
  "description": "Teste seus conhecimentos sobre o Gmail: redação de e-mails, anexos, organização com marcadores, pesquisa e segurança.",
  "password": "IEPOP",
  "iconType": "gmail",
  "objectiveQuestions": [
    {
      "id": 1,
      "question": "O que é o Gmail desenvolvido pelo Google?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um reprodutor digital para arquivos musicais"
        },
        {
          "id": "b",
          "text": "Um serviço online de correio eletrônico"
        },
        {
          "id": "c",
          "text": "Um editor profissional de vídeos caseiros"
        },
        {
          "id": "d",
          "text": "Um navegador moderno para páginas web"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 2,
      "question": "Qual a função do botão 'Escrever' (+)?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Excluir todas as mensagens da lixeira principal"
        },
        {
          "id": "b",
          "text": "Imprimir documentos em folhas de papel comum"
        },
        {
          "id": "c",
          "text": "Bloquear contatos suspeitos na conta pessoal"
        },
        {
          "id": "d",
          "text": "Iniciar a redação de um novo e-mail"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 3,
      "question": "O que encontramos dentro da 'Caixa de Entrada'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Novos e-mails recebidos de contatos"
        },
        {
          "id": "b",
          "text": "Vídeos salvos pelo histórico recente"
        },
        {
          "id": "c",
          "text": "Arquivos apagados do disco rígido"
        },
        {
          "id": "d",
          "text": "Programas prontos para serem instalados"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 4,
      "question": "Para que serve a pasta de 'Rascunhos'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Armazenar mensagens suspeitas com vírus perigosos"
        },
        {
          "id": "b",
          "text": "Exibir contatos bloqueados pelo usuário atual"
        },
        {
          "id": "c",
          "text": "Guardar e-mails iniciados e não enviados"
        },
        {
          "id": "d",
          "text": "Listar arquivos baixados da internet recentemente"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 5,
      "question": "Qual informação deve ser digitada no campo 'Para'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O resumo do conteúdo da mensagem"
        },
        {
          "id": "b",
          "text": "A senha secreta da sua conta"
        },
        {
          "id": "c",
          "text": "O endereço de e-mail do destinatário"
        },
        {
          "id": "d",
          "text": "O link de uma página externa"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 6,
      "question": "Para que serve o campo 'Assunto' da mensagem?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Resumir o tema principal do e-mail"
        },
        {
          "id": "b",
          "text": "Exibir a data atual no computador"
        },
        {
          "id": "c",
          "text": "Digitar a senha do remetente cadastrado"
        },
        {
          "id": "d",
          "text": "Inserir o número de telefone celular"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 7,
      "question": "Qual ícone é utilizado para anexar um arquivo?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Ícone de uma tesoura de cortar papel"
        },
        {
          "id": "b",
          "text": "Ícone de uma lupa para pesquisas rápidas"
        },
        {
          "id": "c",
          "text": "Ícone de uma lixeira de cor cinza"
        },
        {
          "id": "d",
          "text": "Ícone de um clipe metálico de papel"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 8,
      "question": "O que significa a ação de 'Responder' um e-mail?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Apagar permanentemente a mensagem lida"
        },
        {
          "id": "b",
          "text": "Enviar retorno direto para o remetente"
        },
        {
          "id": "c",
          "text": "Bloquear a conta da pessoa imediatamente"
        },
        {
          "id": "d",
          "text": "Salvar a conversa no pendrive conectado"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 9,
      "question": "O que a ferramenta 'Encaminhar' faz com a mensagem?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Envia o mesmo e-mail para terceiros"
        },
        {
          "id": "b",
          "text": "Traduz o conteúdo para outro idioma"
        },
        {
          "id": "c",
          "text": "Altera a fonte das letras digitadas"
        },
        {
          "id": "d",
          "text": "Remove as fotos salvas no computador"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 10,
      "question": "Para que serve marcar uma mensagem com 'Estrela'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Remover a mensagem para a lixeira comum"
        },
        {
          "id": "b",
          "text": "Bloquear o recebimento de novas notificações sonoras"
        },
        {
          "id": "c",
          "text": "Destacar e-mails de alta importância pessoal"
        },
        {
          "id": "d",
          "text": "Alterar a foto de perfil do remetente"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 11,
      "question": "O que é a pasta 'Spam' no Gmail?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Área para armazenar contatos favoritos salvos"
        },
        {
          "id": "b",
          "text": "Local para mensagens indesejadas ou suspeitas"
        },
        {
          "id": "c",
          "text": "Pasta com fotos enviadas pelos colegas"
        },
        {
          "id": "d",
          "text": "Espaço para recibos de compras aprovadas"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 12,
      "question": "Por quanto tempo os e-mails permanecem na Lixeira?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Por duas horas antes de serem apagados"
        },
        {
          "id": "b",
          "text": "Por dez anos guardados nos servidores seguros"
        },
        {
          "id": "c",
          "text": "Por cinco minutos até fechar o navegador"
        },
        {
          "id": "d",
          "text": "Por trinta dias até a exclusão automática"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 13,
      "question": "Como localizar um e-mail específico rapidamente?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Reiniciando o computador para atualizar o sistema"
        },
        {
          "id": "b",
          "text": "Apagando todas as mensagens recebidas da caixa"
        },
        {
          "id": "c",
          "text": "Mudando a senha da sua conta Google"
        },
        {
          "id": "d",
          "text": "Usando a barra de pesquisa no topo"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 14,
      "question": "O que significa um e-mail em 'Negrito' na lista?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Que a mensagem contém um vírus perigoso"
        },
        {
          "id": "b",
          "text": "Que a mensagem ainda não foi lida"
        },
        {
          "id": "c",
          "text": "Que o remetente cancelou o envio anterior"
        },
        {
          "id": "d",
          "text": "Que o arquivo anexo foi danificado totalmente"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 15,
      "question": "Onde ficam armazenados os e-mails enviados com sucesso?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Na pasta de Enviados do próprio Gmail"
        },
        {
          "id": "b",
          "text": "Na pasta de arquivos corrompidos da máquina"
        },
        {
          "id": "c",
          "text": "Na área de trabalho do sistema operacional"
        },
        {
          "id": "d",
          "text": "Na lixeira temporária do navegador de internet"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 16,
      "question": "Qual símbolo identifica os e-mails marcados como importantes?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um relógio vermelho de contagem regressiva ativa"
        },
        {
          "id": "b",
          "text": "Um triângulo de alerta de perigo iminente"
        },
        {
          "id": "c",
          "text": "Um marcador amarelo de formato tipo seta"
        },
        {
          "id": "d",
          "text": "Um ponto de exclamação de cor roxa"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 17,
      "question": "Como desconectar sua conta com segurança ao terminar?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Pressionando o botão físico de desligar monitor"
        },
        {
          "id": "b",
          "text": "Clicando na foto de perfil e em Sair"
        },
        {
          "id": "c",
          "text": "Desconectando o cabo de internet da parede"
        },
        {
          "id": "d",
          "text": "Excluindo o ícone do navegador da tela"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 18,
      "question": "O que fazer ao receber um e-mail com link suspeito?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não clicar no link e denunciar como spam"
        },
        {
          "id": "b",
          "text": "Clicar no link imediatamente para conferir prêmio"
        },
        {
          "id": "c",
          "text": "Encaminhar a mensagem para todos os amigos"
        },
        {
          "id": "d",
          "text": "Informar seus dados bancários para confirmar cadastro"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 19,
      "question": "Qual o formato correto de um endereço de e-mail?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "www.nomedousuario.com sem arroba no texto digitado"
        },
        {
          "id": "b",
          "text": "http://usuario.provedor contendo barras e pontuação de site"
        },
        {
          "id": "c",
          "text": "usuario@provedor.com com arroba separando nome e provedor"
        },
        {
          "id": "d",
          "text": "usuario#provedor.net usando símbolo de cerquilha no meio"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 20,
      "question": "O que acontece ao clicar no botão da lixeira?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Fecha a janela do navegador em execução"
        },
        {
          "id": "b",
          "text": "Salva uma cópia no disco do computador"
        },
        {
          "id": "c",
          "text": "Envia mensagem automática para todos os contatos"
        },
        {
          "id": "d",
          "text": "Move o e-mail selecionado para a lixeira"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 21,
      "question": "Qual a finalidade do campo 'Cc' no e-mail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Ocultar o remetente de todas as pessoas"
        },
        {
          "id": "b",
          "text": "Cancelar o envio após dez segundos contados"
        },
        {
          "id": "c",
          "text": "Enviar cópia visível para outros destinatários"
        },
        {
          "id": "d",
          "text": "Inserir senhas de segurança em arquivos anexados"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 22,
      "question": "O que acontece ao utilizar o campo 'Cco'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "A mensagem é enviada sem texto digitado"
        },
        {
          "id": "b",
          "text": "O e-mail é marcado como rascunho temporário"
        },
        {
          "id": "c",
          "text": "Todos os anexos são excluídos automaticamente antes"
        },
        {
          "id": "d",
          "text": "Os destinatários não veem quem recebeu cópia"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 23,
      "question": "Como funciona a função 'Desfazer Envio' no Gmail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Apaga a mensagem lida na caixa alheia"
        },
        {
          "id": "b",
          "text": "Cancela o envio durante alguns segundos configurados"
        },
        {
          "id": "c",
          "text": "Exclui o contato da sua agenda telefônica"
        },
        {
          "id": "d",
          "text": "Reescreve o texto com sinônimos mais elegantes"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 24,
      "question": "No Gmail, como são chamadas as etiquetas organizadoras?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Marcadores personalizados para classificar mensagens recebidas"
        },
        {
          "id": "b",
          "text": "Pastas de arquivos compactados do sistema"
        },
        {
          "id": "c",
          "text": "Tabelas com fórmulas numéricas do aplicativo"
        },
        {
          "id": "d",
          "text": "Janelas flutuantes de bate-papo de texto"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 25,
      "question": "Para que serve o recurso de 'Agendar Envio'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Programar data e hora futuras para envio"
        },
        {
          "id": "b",
          "text": "Despertar o usuário com um alarme sonoro"
        },
        {
          "id": "c",
          "text": "Imprimir relatórios automáticos no final do dia"
        },
        {
          "id": "d",
          "text": "Limpar a lixeira em horários pré-determinados"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 26,
      "question": "Qual o limite tradicional de anexo no Gmail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Até cinquenta gigabytes por mensagem enviada"
        },
        {
          "id": "b",
          "text": "Até vinte e cinco megabytes por envio"
        },
        {
          "id": "c",
          "text": "Até cem kilobytes apenas por documento"
        },
        {
          "id": "d",
          "text": "Sem nenhum tipo de limite de arquivo"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 27,
      "question": "Como enviar arquivos maiores que o limite permitido?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Dividindo o arquivo em mil partes minúsculas"
        },
        {
          "id": "b",
          "text": "Alterando a extensão do arquivo para texto"
        },
        {
          "id": "c",
          "text": "Enviando por correio tradicional em papel impresso"
        },
        {
          "id": "d",
          "text": "Compartilhando através de link do Google Drive"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 28,
      "question": "O que é a 'Assinatura' automática de e-mail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Documento oficial autenticado em cartório de notas"
        },
        {
          "id": "b",
          "text": "Comprovante de pagamento da mensalidade do serviço"
        },
        {
          "id": "c",
          "text": "Texto inserido automaticamente no final da mensagem"
        },
        {
          "id": "d",
          "text": "Código numérico enviado para validar o telefone"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 29,
      "question": "Para que serve o 'Modo Confidencial' no Gmail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Publicar o e-mail em redes sociais abertas"
        },
        {
          "id": "b",
          "text": "Gravar a voz do usuário enquanto escreve"
        },
        {
          "id": "c",
          "text": "Mudar o endereço de e-mail do remetente"
        },
        {
          "id": "d",
          "text": "Impedir cópia, impressão e definir prazo limite"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 30,
      "question": "Qual a utilidade da 'Resposta Automática de Férias'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Avisar automaticamente ausência para quem mandar e-mail"
        },
        {
          "id": "b",
          "text": "Comprar passagens de viagens aéreas com desconto"
        },
        {
          "id": "c",
          "text": "Desligar o roteador de internet da sua residência"
        },
        {
          "id": "d",
          "text": "Bloquear todas as chamadas telefônicas no celular"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 31,
      "question": "O que a ação de 'Arquivar' faz com a mensagem?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Apaga o e-mail definitivamente sem chance volta"
        },
        {
          "id": "b",
          "text": "Envia o texto para a impressora padrão"
        },
        {
          "id": "c",
          "text": "Tira da entrada mantendo salva em Todos"
        },
        {
          "id": "d",
          "text": "Altera o remetente original da conversa salva"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 32,
      "question": "Para que serve criar 'Filtros' automáticos no Gmail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Melhorar as cores e brilho das fotos"
        },
        {
          "id": "b",
          "text": "Organizar e marcar e-mails conforme regras definidas"
        },
        {
          "id": "c",
          "text": "Aumentar a velocidade física da internet contratada"
        },
        {
          "id": "d",
          "text": "Limpar o pó acumulado no teclado físico"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 33,
      "question": "Como o Gmail divide as abas na caixa padrão?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Em Jogos, Músicas e arquivos de Vídeos"
        },
        {
          "id": "b",
          "text": "Em Manhã, Tarde e período da Noite"
        },
        {
          "id": "c",
          "text": "Em Principal, Social e aba de Promoções"
        },
        {
          "id": "d",
          "text": "Em Curtas, Médias e mensagens muito Longas"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 34,
      "question": "Qual atalho padrão do teclado abre novo e-mail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla Escape três vezes seguidas"
        },
        {
          "id": "b",
          "text": "Pressionar a tecla C com atalhos ativados"
        },
        {
          "id": "c",
          "text": "Segurar a tecla Tab por dez segundos"
        },
        {
          "id": "d",
          "text": "Apertar a barra de espaço cinco vezes"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 35,
      "question": "Como bloquear um remetente indesejado no Gmail?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Nos três pontos da mensagem > Bloquear remetente"
        },
        {
          "id": "b",
          "text": "Desinstalando o navegador de internet do computador pessoal"
        },
        {
          "id": "c",
          "text": "Apagando a sua própria conta Google principal"
        },
        {
          "id": "d",
          "text": "Desligando a tomada de energia do aparelho"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 36,
      "question": "Qual operador de busca localiza mensagens com anexos?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "find:files escrito na caixa de mensagens enviadas"
        },
        {
          "id": "b",
          "text": "get:docs colocado no início do campo assunto"
        },
        {
          "id": "c",
          "text": "show:media colocado entre parênteses no texto digitado"
        },
        {
          "id": "d",
          "text": "has:attachment digitado na barra de pesquisa superior"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 37,
      "question": "O que a autenticação de dois fatores (2FA) garante?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Duplicação da velocidade de download de anexos"
        },
        {
          "id": "b",
          "text": "Segurança extra exigindo código além da senha"
        },
        {
          "id": "c",
          "text": "Acesso livre sem necessidade de lembrar senhas"
        },
        {
          "id": "d",
          "text": "Armazenamento ilimitado gratuito para vídeos em nuvem"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 38,
      "question": "Qual a diferença entre protocolos IMAP e POP3?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "IMAP envia cartas físicas e POP3 digitais"
        },
        {
          "id": "b",
          "text": "IMAP apaga senhas e POP3 cria cadastros"
        },
        {
          "id": "c",
          "text": "IMAP sincroniza tudo e POP3 baixa localmente"
        },
        {
          "id": "d",
          "text": "IMAP serve jogos e POP3 edita planilhas"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 39,
      "question": "Como buscar mensagens enviadas por alguém específico?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Usando to:nomedapessoa no final do documento escrito"
        },
        {
          "id": "b",
          "text": "Usando send:usuario na lista de contatos bloqueados"
        },
        {
          "id": "c",
          "text": "Usando mail:pessoa no rodapé de configurações avançadas"
        },
        {
          "id": "d",
          "text": "Usando from:nomedapessoa na caixa de busca superior"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 40,
      "question": "Como funciona o encaminhamento automático de e-mails?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Requer autorização com código de confirmação prévia"
        },
        {
          "id": "b",
          "text": "Transfere os e-mails sem nenhum aviso prévio"
        },
        {
          "id": "c",
          "text": "Apaga a conta original no primeiro envio"
        },
        {
          "id": "d",
          "text": "Exige pagamento mensal por cada cópia enviada"
        }
      ],
      "correctOptionId": "a"
    }
  ],
  "discursiveQuestions": []
},

{
  "id": "drive",
  "title": "Google Drive - Nuvem e Armazenamento",
  "description": "Teste seus conhecimentos sobre o Google Drive: pastas, upload de arquivos, níveis de compartilhamento, histórico e sincronização.",
  "password": "IEPOP",
  "iconType": "drive",
  "objectiveQuestions": [
    {
      "id": 1,
      "question": "O que é o Google Drive desenvolvido pelo Google?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um editor profissional para corte e montagem de vídeos"
        },
        {
          "id": "b",
          "text": "Um serviço online para armazenar arquivos em nuvem"
        },
        {
          "id": "c",
          "text": "Um reprodutor portátil para arquivos de áudio digital"
        },
        {
          "id": "d",
          "text": "Um antivírus focado na remoção de vírus do sistema"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 2,
      "question": "Para que serve o botão colorido 'Novo' (+)?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Excluir permanentemente todas as fotos salvas no computador"
        },
        {
          "id": "b",
          "text": "Desligar o monitor de vídeo do seu computador pessoal"
        },
        {
          "id": "c",
          "text": "Imprimir páginas de texto em folhas de papel comum"
        },
        {
          "id": "d",
          "text": "Criar novas pastas ou fazer envio de arquivos"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 3,
      "question": "Como criar uma pasta nova dentro do Drive?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Clicar no botão Novo e selecionar Nova Pasta"
        },
        {
          "id": "b",
          "text": "Reiniciar o computador para aplicar as novas alterações"
        },
        {
          "id": "c",
          "text": "Desinstalar o navegador de internet do seu computador"
        },
        {
          "id": "d",
          "text": "Apagar todas as mensagens da sua caixa de entrada"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 4,
      "question": "O que significa 'Fazer Upload de Arquivo'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Baixar arquivos da internet para o pendrive"
        },
        {
          "id": "b",
          "text": "Excluir documentos antigos gravados no disco rígido"
        },
        {
          "id": "c",
          "text": "Enviar arquivos do computador para a nuvem"
        },
        {
          "id": "d",
          "text": "Imprimir folhas de documentos em preto e branco"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 5,
      "question": "O que a opção 'Upload de Pastas' permite fazer?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Apagar diretórios do sistema operacional sem autorização"
        },
        {
          "id": "b",
          "text": "Criar senhas aleatórias para arquivos de texto"
        },
        {
          "id": "c",
          "text": "Enviar pastas inteiras de uma só vez"
        },
        {
          "id": "d",
          "text": "Formatar a memória interna do telefone celular"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 6,
      "question": "Quanto espaço gratuito padrão cada conta Google possui?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Quinze gigabytes de espaço total na nuvem"
        },
        {
          "id": "b",
          "text": "Dois megabytes apenas para documentos de texto"
        },
        {
          "id": "c",
          "text": "Quinhentos terabytes liberados sem cobrança nenhuma"
        },
        {
          "id": "d",
          "text": "Cem kilobytes para uso em dias úteis"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 7,
      "question": "O que encontramos na aba 'Compartilhados Comigo'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Vídeos excluídos da lixeira nos últimos dias"
        },
        {
          "id": "b",
          "text": "Programas bloqueados pelo antivírus do seu computador"
        },
        {
          "id": "c",
          "text": "Fotos tiradas pela câmera do telefone móvel"
        },
        {
          "id": "d",
          "text": "Arquivos que outras pessoas enviaram para você"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 8,
      "question": "Para que serve a aba 'Recentes' no menu?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Mostrar os e-mails excluídos da sua conta pessoal"
        },
        {
          "id": "b",
          "text": "Exibir arquivos abertos ou modificados recentemente pelo usuário"
        },
        {
          "id": "c",
          "text": "Listar contatos sem número de telefone celular cadastrado"
        },
        {
          "id": "d",
          "text": "Medir a velocidade da conexão de rede local ativa"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 9,
      "question": "Para que serve a aba 'Com Estrela'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Acessar documentos favoritos destacados pelo usuário facilmente"
        },
        {
          "id": "b",
          "text": "Apagar fotos borradas salvas na memória interna"
        },
        {
          "id": "c",
          "text": "Bloquear downloads vindos de fontes desconhecidas na rede"
        },
        {
          "id": "d",
          "text": "Alterar a foto de perfil da sua conta"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 10,
      "question": "O que acontece com itens enviados para Lixeira?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "São deletados imediatamente no primeiro segundo após clique"
        },
        {
          "id": "b",
          "text": "Ficam disponíveis para sempre sem nunca serem apagados"
        },
        {
          "id": "c",
          "text": "Permanecem guardados por trinta dias até exclusão"
        },
        {
          "id": "d",
          "text": "São transformados em arquivos executáveis de jogos modernos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 11,
      "question": "Como abrir um arquivo salvo no Drive?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Pressionando a tecla Esc dez vezes consecutivas"
        },
        {
          "id": "b",
          "text": "Dando dois cliques rápidos sobre o item"
        },
        {
          "id": "c",
          "text": "Desconectando o cabo de rede do roteador"
        },
        {
          "id": "d",
          "text": "Fechando o navegador com o mouse esquerdo"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 12,
      "question": "Como alterar o nome de um arquivo existente?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Desligando a energia elétrica da tomada da parede"
        },
        {
          "id": "b",
          "text": "Excluindo a pasta principal do sistema operacional Windows"
        },
        {
          "id": "c",
          "text": "Enviando uma mensagem para o suporte técnico oficial"
        },
        {
          "id": "d",
          "text": "Clicando com botão direito e escolhendo Renomear"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 13,
      "question": "Qual ícone é usado para excluir arquivos selecionados?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Ícone no formato de uma lupa azul"
        },
        {
          "id": "b",
          "text": "Ícone no formato de um sol amarelo"
        },
        {
          "id": "c",
          "text": "Ícone no formato de uma chave prateada"
        },
        {
          "id": "d",
          "text": "Ícone no formato de uma lixeira cinza"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 14,
      "question": "Para que serve a barra de busca superior?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Alterar a senha da conta Google do usuário"
        },
        {
          "id": "b",
          "text": "Pesquisar palavras e nomes de documentos arquivados"
        },
        {
          "id": "c",
          "text": "Calcular fórmulas matemáticas avançadas de física quântica"
        },
        {
          "id": "d",
          "text": "Aumentar a memória RAM do computador pessoal"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 15,
      "question": "O que significa a ação de 'Fazer Download'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Baixar o arquivo da nuvem para computador"
        },
        {
          "id": "b",
          "text": "Enviar o arquivo da máquina para internet"
        },
        {
          "id": "c",
          "text": "Remover todos os textos do arquivo selecionado"
        },
        {
          "id": "d",
          "text": "Imprimir cinco cópias coloridas em folha sulfite"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 16,
      "question": "Como alternar entre a exibição em grade ou lista?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Reiniciando o sistema operacional em modo de segurança"
        },
        {
          "id": "b",
          "text": "Apertando a barra de espaço quatro vezes seguidas"
        },
        {
          "id": "c",
          "text": "Clicando no botão de layout no canto superior"
        },
        {
          "id": "d",
          "text": "Segurando a tecla Shift por trinta segundos contados"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 17,
      "question": "Como mover um documento para dentro de uma pasta?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Digitando a palavra mover na caixa de pesquisa"
        },
        {
          "id": "b",
          "text": "Arrastando o arquivo com mouse até a pasta"
        },
        {
          "id": "c",
          "text": "Formatando a partição de inicialização do disco rígido"
        },
        {
          "id": "d",
          "text": "Abrindo o painel de controle do sistema operacional"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 18,
      "question": "Qual é o símbolo visual oficial do Drive?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um triângulo geométrico com três cores vibrantes diferentes"
        },
        {
          "id": "b",
          "text": "Um quadrado preto com uma letra X branca"
        },
        {
          "id": "c",
          "text": "Um círculo roxo com desenho de uma nota musical"
        },
        {
          "id": "d",
          "text": "Uma estrela dourada com cinco pontas perfeitamente alinhadas"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 19,
      "question": "É possível acessar o Drive em celulares e tablets?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não pois computadores de mesa são obrigatórios sempre"
        },
        {
          "id": "b",
          "text": "Apenas durante os finais de semana e feriados"
        },
        {
          "id": "c",
          "text": "Sim através do aplicativo oficial para sistemas móveis"
        },
        {
          "id": "d",
          "text": "Somente conectando um teclado físico com cabo USB"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 20,
      "question": "O que é indispensável para usar o Google Drive?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Comprar uma impressora colorida de alta velocidade profissional"
        },
        {
          "id": "b",
          "text": "Instalar placas aceleradoras de jogos de última geração"
        },
        {
          "id": "c",
          "text": "Possuir diploma universitário na área de engenharia de software"
        },
        {
          "id": "d",
          "text": "Ter uma conta Google e conexão à internet"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 21,
      "question": "Quais são os níveis básicos de permissão no compartilhamento?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Permissões de Administrador, Dono e função de Convidado"
        },
        {
          "id": "b",
          "text": "Permissões de Aluno, Professor e função de Diretor"
        },
        {
          "id": "c",
          "text": "Permissões de Leitor, Comentador e também de Editor"
        },
        {
          "id": "d",
          "text": "Permissões de Básico, Prata e plano de Ouro"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 22,
      "question": "O que a permissão de 'Leitor' autoriza fazer?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Apagar todas as páginas e renomear o arquivo"
        },
        {
          "id": "b",
          "text": "Excluir a conta Google do proprietário do documento"
        },
        {
          "id": "c",
          "text": "Alterar as fórmulas matemáticas de todas as células"
        },
        {
          "id": "d",
          "text": "Apenas visualizar e baixar o documento sem alterá-lo"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 23,
      "question": "O que a permissão de 'Editor' autoriza fazer?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Apenas visualizar o documento sem poder fazer download"
        },
        {
          "id": "b",
          "text": "Modificar, adicionar e excluir conteúdos do próprio documento"
        },
        {
          "id": "c",
          "text": "Bloquear o acesso da internet de outros participantes"
        },
        {
          "id": "d",
          "text": "Desligar os servidores centrais da empresa prestadora"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 24,
      "question": "Como compartilhar um arquivo através de um link?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Gerando link compartilhável nas configurações do próprio arquivo"
        },
        {
          "id": "b",
          "text": "Copiando o atalho da área de trabalho do PC"
        },
        {
          "id": "c",
          "text": "Formatando o disco rígido do computador em questão"
        },
        {
          "id": "d",
          "text": "Enviando uma carta registrada pelo correio tradicional brasileiro"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 25,
      "question": "O que faz a opção 'Qualquer pessoa com o link'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Permite acesso público a quem tiver o endereço"
        },
        {
          "id": "b",
          "text": "Exige aprovação do governo federal para visualização livre"
        },
        {
          "id": "c",
          "text": "Bloqueia o arquivo para todas as pessoas do mundo"
        },
        {
          "id": "d",
          "text": "Envia o arquivo para a lixeira do sistema"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 26,
      "question": "Para que serve o 'Histórico de Versões' de documentos?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Limpar o histórico de navegação do Google Chrome"
        },
        {
          "id": "b",
          "text": "Restaurar alterações anteriores feitas ao longo do tempo"
        },
        {
          "id": "c",
          "text": "Aumentar a resolução das imagens contidas no texto"
        },
        {
          "id": "d",
          "text": "Traduzir automaticamente o documento para cinquenta idiomas diferentes"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 27,
      "question": "O espaço de 15 GB é compartilhado com quais serviços?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Com Netflix, YouTube e serviços de música Spotify"
        },
        {
          "id": "b",
          "text": "Com Microsoft Word, PowerPoint e o programa Excel"
        },
        {
          "id": "c",
          "text": "Com jogos eletrônicos instalados na área de trabalho"
        },
        {
          "id": "d",
          "text": "Com Gmail, Google Fotos e com o próprio Drive"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 28,
      "question": "Para que serve o recurso de 'Adicionar Atalho'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Duplicar o arquivo consumindo o dobro do armazenamento"
        },
        {
          "id": "b",
          "text": "Apagar permanentemente o documento original de sua pasta"
        },
        {
          "id": "c",
          "text": "Criar caminho rápido sem duplicar espaço do arquivo"
        },
        {
          "id": "d",
          "text": "Proteger o computador contra invasões de vírus espiões"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 29,
      "question": "O que acontece ao esvaziar a Lixeira do Drive?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Devolve os documentos para suas pastas originais imediatamente"
        },
        {
          "id": "b",
          "text": "Envia cópias para os e-mails de todos contatos"
        },
        {
          "id": "c",
          "text": "Transforma os arquivos em planilhas numéricas do Excel"
        },
        {
          "id": "d",
          "text": "Exclui definitivamente todos os arquivos sem possibilidade retorno"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 30,
      "question": "Quais aplicativos funcionam integrados diretamente ao Google Drive?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Google Documentos, Google Planilhas e também Google Apresentações"
        },
        {
          "id": "b",
          "text": "Adobe Photoshop, Corel Draw e reprodutor de mídia VLC"
        },
        {
          "id": "c",
          "text": "Bloco de Notas, Paint clássico e Calculadora nativa"
        },
        {
          "id": "d",
          "text": "Jogos eletrônicos de computador e emuladores de videogame"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 31,
      "question": "Para que serve ativar o 'Acesso Offline' nos arquivos?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Esconder os arquivos de todas as pessoas cadastradas"
        },
        {
          "id": "b",
          "text": "Economizar bateria desligando totalmente a tela do computador"
        },
        {
          "id": "c",
          "text": "Trabalhar nos documentos mesmo sem conexão com internet"
        },
        {
          "id": "d",
          "text": "Impedir que novos arquivos sejam salvos na máquina"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 32,
      "question": "O que é 'Transferir Propriedade' de um arquivo compartilhado?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Vender o arquivo na internet por moedas digitais"
        },
        {
          "id": "b",
          "text": "Passar o controle total do arquivo para outro usuário"
        },
        {
          "id": "c",
          "text": "Apagar o arquivo da nuvem de modo irreversível"
        },
        {
          "id": "d",
          "text": "Enviar o arquivo impresso para o endereço residencial"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 33,
      "question": "Como filtrar a busca apenas por arquivos em formato PDF?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Digitando a palavra vírus na barra de pesquisa principal"
        },
        {
          "id": "b",
          "text": "Desconectando o mouse e usando apenas as setas direcionais"
        },
        {
          "id": "c",
          "text": "Selecionando o filtro específico de Tipo de Arquivo PDF"
        },
        {
          "id": "d",
          "text": "Apagando a extensão de todos os arquivos da pasta"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 34,
      "question": "Qual o papel do aplicativo Google Drive para Computador?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Aumentar a resolução dos jogos instalados na máquina"
        },
        {
          "id": "b",
          "text": "Sincronizar pastas do computador automaticamente com a nuvem"
        },
        {
          "id": "c",
          "text": "Limpar o pó acumulado dentro da placa mãe"
        },
        {
          "id": "d",
          "text": "Bloquear chamadas recebidas no aparelho de telefone celular"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 35,
      "question": "Como gerar uma cópia idêntica de um arquivo existente?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Clicando com botão direito e escolhendo Fazer Cópia"
        },
        {
          "id": "b",
          "text": "Desinstalando e instalando novamente o navegador Google Chrome"
        },
        {
          "id": "c",
          "text": "Formatando o pendrive conectado na porta USB frontal"
        },
        {
          "id": "d",
          "text": "Tirando uma foto da tela com câmera do celular"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 36,
      "question": "O que são 'Drives Compartilhados' no Google Workspace?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Disquetes magnéticos antigos usados para gravação de fotos"
        },
        {
          "id": "b",
          "text": "Cabos de alta velocidade para transferência entre celulares"
        },
        {
          "id": "c",
          "text": "Programas antivírus destinados a servidores de rede local"
        },
        {
          "id": "d",
          "text": "Espaços corporativos cujos arquivos pertencem à instituição"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 37,
      "question": "Qual o tamanho máximo aceito para upload de arquivo individual?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Até cem kilobytes para qualquer formato de arquivo"
        },
        {
          "id": "b",
          "text": "Até cinco terabytes para contas com suporte corporativo"
        },
        {
          "id": "c",
          "text": "Até vinte megabytes apenas para imagens e vídeos"
        },
        {
          "id": "d",
          "text": "Sem nenhum limite físico definido nos servidores centrais"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 38,
      "question": "Como impedir que visualizadores copiem, imprimam ou baixem arquivos?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Desligando o computador do usuário que está visualizando remotamente"
        },
        {
          "id": "b",
          "text": "Renomeando a extensão do arquivo para ponto exe criptografado"
        },
        {
          "id": "c",
          "text": "Desmarcando a opção nas configurações avançadas de compartilhamento"
        },
        {
          "id": "d",
          "text": "Bloqueando o endereço IP do roteador da sua cidade"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 39,
      "question": "Qual operador de busca encontra arquivos criados por você?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "find:user escrito no campo de rascunhos de e-mails"
        },
        {
          "id": "b",
          "text": "get:mine colocado entre colchetes no final do documento"
        },
        {
          "id": "c",
          "text": "show:files inserido na lixeira temporária do seu navegador"
        },
        {
          "id": "d",
          "text": "owner:me digitado diretamente na barra de pesquisa superior"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 40,
      "question": "Como recuperar arquivos apagados da lixeira de contas institucionais?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Através do painel do administrador em até 25 dias"
        },
        {
          "id": "b",
          "text": "Formatando o computador e reinstalando o sistema operacional Windows"
        },
        {
          "id": "c",
          "text": "Ligando para o provedor de internet e pedindo backup"
        },
        {
          "id": "d",
          "text": "Criando uma nova conta de e-mail com outro nome"
        }
      ],
      "correctOptionId": "a"
    }
  ],
  "discursiveQuestions": []
},

{
  "id": "meet",
  "title": "Google Meet - Videoconferências",
  "description": "Teste seus conhecimentos sobre o Google Meet: chamadas de vídeo, microfone e câmera, compartilhamento de tela e controles da reunião.",
  "password": "IEPOP",
  "iconType": "meet",
  "objectiveQuestions": [
    {
      "id": 1,
      "question": "O que é o Google Meet desenvolvido pelo Google?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um editor profissional para corte e montagem de fotos"
        },
        {
          "id": "b",
          "text": "Um serviço online de videoconferências e chamadas de vídeo"
        },
        {
          "id": "c",
          "text": "Um utilitário de segurança voltado para remover vírus perigosos"
        },
        {
          "id": "d",
          "text": "Um reprodutor portátil para escutar faixas de músicas digitais"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 2,
      "question": "Como iniciar uma nova reunião no Google Meet?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Desconectando o monitor de vídeo do seu computador"
        },
        {
          "id": "b",
          "text": "Excluindo a pasta de arquivos da sua lixeira"
        },
        {
          "id": "c",
          "text": "Formatando a memória principal do seu telefone celular"
        },
        {
          "id": "d",
          "text": "Clicando no botão azul chamado Nova Reunião"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 3,
      "question": "Como convidar colegas para entrar na sua chamada?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Compartilhando o link ou o código da reunião"
        },
        {
          "id": "b",
          "text": "Desinstalando o navegador de internet do computador pessoal"
        },
        {
          "id": "c",
          "text": "Alterando a senha secreta da sua conta Google"
        },
        {
          "id": "d",
          "text": "Desligando o roteador de sinal Wi-Fi da residência"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 4,
      "question": "Para que serve o ícone do microfone na tela?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Alterar a cor de fundo de todas as páginas"
        },
        {
          "id": "b",
          "text": "Desconectar todos os colegas da chamada ao mesmo tempo"
        },
        {
          "id": "c",
          "text": "Ligar ou silenciar a sua própria voz na reunião"
        },
        {
          "id": "d",
          "text": "Imprimir documentos em folhas brancas de papel sulfite padrão"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 5,
      "question": "Para que serve o ícone de filmadora na tela?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Formatar o disco rígido do computador em que está conectado"
        },
        {
          "id": "b",
          "text": "Apagar todas as mensagens salvas na caixa de entrada"
        },
        {
          "id": "c",
          "text": "Ligar ou desligar a transmissão da sua câmera de vídeo"
        },
        {
          "id": "d",
          "text": "Aumentar a quantidade de memória RAM física do seu equipamento"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 6,
      "question": "O que o botão vermelho com desenho de telefone faz?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Encerra a sua participação na chamada de vídeo atual"
        },
        {
          "id": "b",
          "text": "Aumenta o volume do som para a potência máxima"
        },
        {
          "id": "c",
          "text": "Envia convite para todas as pessoas da lista contatos"
        },
        {
          "id": "d",
          "text": "Grava a chamada na memória do aparelho de celular"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 7,
      "question": "Qual a função do botão 'Levantar a Mão'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Expulsar participantes que estiverem falando alto na sala virtual"
        },
        {
          "id": "b",
          "text": "Desligar a tela do monitor de vídeo do participante"
        },
        {
          "id": "c",
          "text": "Mudar o idioma padrão de todos os participantes presentes"
        },
        {
          "id": "d",
          "text": "Sinalizar educadamente que você deseja falar na reunião"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 8,
      "question": "Para que serve a janela de 'Chat' na chamada?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Apagar fotos e documentos salvos no disco do computador"
        },
        {
          "id": "b",
          "text": "Digitar mensagens de texto e compartilhar links com participantes"
        },
        {
          "id": "c",
          "text": "Medir a temperatura dos componentes internos da placa do PC"
        },
        {
          "id": "d",
          "text": "Alterar as senhas das redes sociais de outros colegas"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 9,
      "question": "O que a ferramenta 'Apresentar Agora' permite fazer?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Compartilhar a tela do seu computador com outros participantes"
        },
        {
          "id": "b",
          "text": "Excluir permanentemente o perfil de outros participantes da chamada"
        },
        {
          "id": "c",
          "text": "Diminuir a velocidade de conexão de outros computadores conectados"
        },
        {
          "id": "d",
          "text": "Limpar o histórico de páginas acessadas no seu navegador"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 10,
      "question": "Para que serve o botão de legendas automáticas (CC)?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Gravar arquivos de áudio em formato musical MP3 compacto"
        },
        {
          "id": "b",
          "text": "Desativar as caixas de som de todos os aparelhos"
        },
        {
          "id": "c",
          "text": "Exibir em texto na tela tudo o que falam"
        },
        {
          "id": "d",
          "text": "Traduzir o sistema operacional para língua russa ou japonesa"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 11,
      "question": "Para que serve o recurso de 'Efeitos Visuais'?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Aumentar a velocidade física de operação do processador principal"
        },
        {
          "id": "b",
          "text": "Desfocar ou trocar a imagem do fundo da câmera"
        },
        {
          "id": "c",
          "text": "Corrigir defeitos físicos na tela do monitor do computador"
        },
        {
          "id": "d",
          "text": "Desinstalar aplicativos indesejados da memória do telefone celular"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 12,
      "question": "O que é o código identificador de uma reunião?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "A senha bancária pessoal de quem criou a reunião"
        },
        {
          "id": "b",
          "text": "O número de série gravado na carcaça do computador"
        },
        {
          "id": "c",
          "text": "O endereço residencial de quem organizou a sala virtual"
        },
        {
          "id": "d",
          "text": "Uma combinação única de letras para entrar na sala"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 13,
      "question": "Como funciona a exibição visual em formato Mosaico?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Esconde todas as pessoas deixando a tela totalmente preta"
        },
        {
          "id": "b",
          "text": "Exibe apenas o relógio de contagem de tempo restante"
        },
        {
          "id": "c",
          "text": "Divide a chamada em três ligações telefônicas convencionais analógicas"
        },
        {
          "id": "d",
          "text": "Mostra vários participantes em pequenos retângulos na tela simultaneamente"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 14,
      "question": "O que significa 'Fixar' um participante na tela?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Impedir que a pessoa saia da chamada de vídeo"
        },
        {
          "id": "b",
          "text": "Manter o vídeo daquela pessoa em destaque contínuo principal"
        },
        {
          "id": "c",
          "text": "Apagar os arquivos salvos no computador daquele usuário específico"
        },
        {
          "id": "d",
          "text": "Cobrar taxa de inscrição pelo tempo permanecido na sala"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 15,
      "question": "Por que é recomendável utilizar fones de ouvido?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Para evitar eco e ruídos indesejados na transmissão sonora"
        },
        {
          "id": "b",
          "text": "Para aumentar a velocidade da internet em duas vezes"
        },
        {
          "id": "c",
          "text": "Para impedir que a câmera do computador pare de funcionar"
        },
        {
          "id": "d",
          "text": "Para desbloquear o acesso a salas virtuais pagas internacionalmente"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 16,
      "question": "Quem tem autoridade para aceitar novos participantes externos?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Qualquer pessoa que esteja passando na rua naquele momento"
        },
        {
          "id": "b",
          "text": "O provedor de energia elétrica da cidade do usuário"
        },
        {
          "id": "c",
          "text": "O anfitrião que organiza e gerencia a reunião ativa"
        },
        {
          "id": "d",
          "text": "Nenhum usuário pois a entrada é sempre proibida totalmente"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 17,
      "question": "O que podemos conferir na tela de preparação inicial?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Apagar todas as fotos armazenadas no computador da escola"
        },
        {
          "id": "b",
          "text": "Testar o funcionamento da câmera e do microfone conectado"
        },
        {
          "id": "c",
          "text": "Pagar boletos bancários através de código de barras digitado"
        },
        {
          "id": "d",
          "text": "Mudar as configurações físicas da rede elétrica da casa"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 18,
      "question": "É viável utilizar o Google Meet em celulares modernos?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Sim instalando o aplicativo oficial em aparelhos móveis compatíveis"
        },
        {
          "id": "b",
          "text": "Não pois computadores com gabinetes pesados são obrigatórios sempre"
        },
        {
          "id": "c",
          "text": "Apenas se o aparelho estiver conectado por cabos submarinos"
        },
        {
          "id": "d",
          "text": "Somente após realizar recarga financeira no cartão de crédito"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 19,
      "question": "Qual o símbolo característico do logotipo do Google Meet?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Uma tesoura verde para cortar papel vegetal de desenho"
        },
        {
          "id": "b",
          "text": "Um volante de automóvel de corrida para jogos eletrônicos"
        },
        {
          "id": "c",
          "text": "Uma câmera de vídeo desenhada com quatro cores diferentes"
        },
        {
          "id": "d",
          "text": "Uma nota musical preta sobre um fundo totalmente amarelo"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 20,
      "question": "O que é indispensável para entrar em videoconferências virtuais?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Uma placa de som profissional de estúdio de gravação"
        },
        {
          "id": "b",
          "text": "Três monitores de vídeo de alta resolução gráfica simultâneos"
        },
        {
          "id": "c",
          "text": "Assinatura mensal de televisão a cabo em canal fechado"
        },
        {
          "id": "d",
          "text": "Acesso à internet estável e um navegador ou aplicativo"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 21,
      "question": "Quais opções surgem ao clicar em Apresentar Agora?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Um Arquivo de Som, um E-mail ou Mensagem Direta"
        },
        {
          "id": "b",
          "text": "Um Contato Salvo, uma Foto ou Teclado Virtual Numérico"
        },
        {
          "id": "c",
          "text": "Uma Guia do Chrome, uma Janela ou Tela Inteira"
        },
        {
          "id": "d",
          "text": "Um Vírus Detectado, uma Lixeira ou Painel de Controle"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 22,
      "question": "Qual opção é recomendada para transmitir vídeos com áudio?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Gravar a tela com o celular e enviar por correio"
        },
        {
          "id": "b",
          "text": "Aproximar o microfone físico das caixas de som acústicas"
        },
        {
          "id": "c",
          "text": "Reiniciar o computador em modo texto preto e branco"
        },
        {
          "id": "d",
          "text": "Compartilhar uma Guia do navegador com áudio ativado junto"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 23,
      "question": "Para que servem os 'Controles do Organizador' na chamada?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Mudar a senha do e-mail de todos os convidados"
        },
        {
          "id": "b",
          "text": "Controlar quem pode enviar mensagens no chat e compartilhar tela"
        },
        {
          "id": "c",
          "text": "Desligar os aparelhos de ar-condicionado das residências dos colegas"
        },
        {
          "id": "d",
          "text": "Aumentar a memória do disco rígido de todos participantes"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 24,
      "question": "Qual a diferença entre Reunião Instantânea e Agendada?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Instantânea começa imediatamente e agendada tem data e hora"
        },
        {
          "id": "b",
          "text": "Instantânea exige pagamento em dinheiro e agendada é gratuita"
        },
        {
          "id": "c",
          "text": "Instantânea não permite som e agendada não permite vídeo"
        },
        {
          "id": "d",
          "text": "Instantânea apaga o computador e agendada grava no pendrive"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 25,
      "question": "O que o anfitrião pode fazer se alguém fizer barulho?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desativar o microfone do participante para manter o silêncio"
        },
        {
          "id": "b",
          "text": "Desligar a energia elétrica do bairro daquele participante específico"
        },
        {
          "id": "c",
          "text": "Formatar o telefone celular daquela pessoa sem pedir autorização"
        },
        {
          "id": "d",
          "text": "Mudar o nome de usuário daquela pessoa na chamada"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 26,
      "question": "Qual o limite de tempo em chamadas gratuitas em grupo?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Até vinte e quatro horas contínuas sem nenhuma limitação"
        },
        {
          "id": "b",
          "text": "Até sessenta minutos contados para três ou mais pessoas"
        },
        {
          "id": "c",
          "text": "Até dois minutos apenas e encerra a sala automaticamente"
        },
        {
          "id": "d",
          "text": "Sem nenhum tipo de tempo máximo estipulado pela empresa"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 27,
      "question": "Para que serve o recurso de 'Enquetes e Perguntas'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Sortear prêmios em dinheiro de verdade para os participantes"
        },
        {
          "id": "b",
          "text": "Excluir os contatos que responderem incorretamente as perguntas feitas"
        },
        {
          "id": "c",
          "text": "Aumentar a fatura de cobrança telefônica no fim do mês"
        },
        {
          "id": "d",
          "text": "Coletar votos rápidos e tirar dúvidas durante a apresentação"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 28,
      "question": "O que é o recurso de 'Lousa Interativa' (Jamboard)?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Um jogo de corrida tridimensional com gráficos de alta qualidade"
        },
        {
          "id": "b",
          "text": "Uma ferramenta voltada para escanear documentos impressos na mesa"
        },
        {
          "id": "c",
          "text": "Um espaço digital para anotações, desenhos e post-its colaborativos"
        },
        {
          "id": "d",
          "text": "Um reprodutor de vídeos salvos no formato de arquivo AVI"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 29,
      "question": "Como atua o recurso de 'Ajuste de Pouca Luz'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desliga as lâmpadas da casa onde a pessoa está trabalhando"
        },
        {
          "id": "b",
          "text": "Troca o idioma da conversa para inglês ou espanhol fluentemente"
        },
        {
          "id": "c",
          "text": "Bloqueia a entrada de luz solar pelas janelas do quarto"
        },
        {
          "id": "d",
          "text": "Aumenta o brilho da câmera se o ambiente estiver escuro"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 30,
      "question": "Quem possui autorização para Gravar reuniões no Google Meet?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Usuários com planos educacionais ou corporativos habilitados pelo administrador"
        },
        {
          "id": "b",
          "text": "Qualquer pessoa que acessar uma chamada pelo telefone celular público"
        },
        {
          "id": "c",
          "text": "Apenas crianças menores de dez anos devidamente matriculadas no colégio"
        },
        {
          "id": "d",
          "text": "Somente quem possuir uma câmera fotográfica analógica com filme colorido"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 31,
      "question": "Qual atalho padrão ativa ou silencia o microfone rapidamente?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla Enter cinquenta vezes sem parar"
        },
        {
          "id": "b",
          "text": "Segurar a barra de espaço com o pé esquerdo"
        },
        {
          "id": "c",
          "text": "Pressionar as teclas Ctrl mais a letra D juntas"
        },
        {
          "id": "d",
          "text": "Apertar a tecla Caps Lock por cinco minutos contínuos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 32,
      "question": "Qual atalho padrão liga ou desliga a câmera rapidamente?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla Esc vinte vezes em seguida"
        },
        {
          "id": "b",
          "text": "Pressionar as teclas Ctrl mais a letra E juntas"
        },
        {
          "id": "c",
          "text": "Segurar a tecla Alt enquanto desliga o computador"
        },
        {
          "id": "d",
          "text": "Apertar a tecla F1 até reiniciar todo o sistema"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 33,
      "question": "Como verificar a lista completa de pessoas na chamada?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desconectando o cabo de alimentação do monitor do computador"
        },
        {
          "id": "b",
          "text": "Digitando a lista de nomes manualmente em folha sulfite"
        },
        {
          "id": "c",
          "text": "Clicando no ícone com silhueta de pessoas no canto"
        },
        {
          "id": "d",
          "text": "Ligando para o suporte técnico internacional da empresa Google"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 34,
      "question": "Como o anfitrião pode retirar um intruso da reunião?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desligando a chave geral de energia de todo o prédio"
        },
        {
          "id": "b",
          "text": "Clicando nas opções do participante e selecionando Remover da chamada"
        },
        {
          "id": "c",
          "text": "Avisando por carta postal com aviso de recebimento assinado"
        },
        {
          "id": "d",
          "text": "Formatando o servidor central de telecomunicações do seu estado"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 35,
      "question": "O que acontece com as mensagens do chat após sair?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desaparecem e não ficam disponíveis em contas comuns gratuitas"
        },
        {
          "id": "b",
          "text": "São impressas e enviadas para o endereço dos participantes"
        },
        {
          "id": "c",
          "text": "Ficam salvas para sempre na área de trabalho local"
        },
        {
          "id": "d",
          "text": "São publicadas automaticamente no mural das redes sociais públicas"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 36,
      "question": "O que são as 'Salas Temáticas' (Breakout Rooms) no Meet?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Espaços virtuais para compra e venda de itens colecionáveis"
        },
        {
          "id": "b",
          "text": "Salas de aula físicas equipadas com carteiras e cadeiras estofadas"
        },
        {
          "id": "c",
          "text": "Canais de televisão aberta com transmissão de notícias e esportes"
        },
        {
          "id": "d",
          "text": "Divisões da chamada em grupos menores para discussões simultâneas separadas"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 37,
      "question": "Para que serve a 'Transmissão ao Vivo' (Live Stream)?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Ligar para telefones fixos sem cobrança de tarifas interurbanas"
        },
        {
          "id": "b",
          "text": "Transmitir a reunião para até cem mil espectadores institucionais"
        },
        {
          "id": "c",
          "text": "Gravar vídeos em fitas magnéticas antigas do padrão VHS"
        },
        {
          "id": "d",
          "text": "Instalar atualizações automáticas de segurança no Windows e Linux"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 38,
      "question": "Como opera o 'Cancelamento de Ruído' inteligente no Meet?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Desliga totalmente o sinal de som de todos os microfones"
        },
        {
          "id": "b",
          "text": "Coloca música clássica para tocar durante as falas dos professores"
        },
        {
          "id": "c",
          "text": "Filtra barulhos como digitação e latidos usando inteligência artificial"
        },
        {
          "id": "d",
          "text": "Reduz a velocidade da conexão de internet de quem fala"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 39,
      "question": "Qual informação consta no Relatório de Frequência escolar?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "A senha do e-mail e o extrato bancário dos responsáveis"
        },
        {
          "id": "b",
          "text": "As notas de todas as disciplinas do ano letivo passado"
        },
        {
          "id": "c",
          "text": "A velocidade da placa de vídeo do computador do estudante"
        },
        {
          "id": "d",
          "text": "Nome, e-mail e tempo exato de permanência do aluno"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 40,
      "question": "Como o Google Meet protege os dados das videochamadas?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Usando criptografia em trânsito e medidas avançadas contra invasões externas"
        },
        {
          "id": "b",
          "text": "Gravando as conversas e postando em sites de compartilhamento público"
        },
        {
          "id": "c",
          "text": "Desativando a proteção de dados para acelerar a transmissão das reuniões"
        },
        {
          "id": "d",
          "text": "Exigindo que os usuários mostrem seus documentos pessoais na tela"
        }
      ],
      "correctOptionId": "a"
    }
  ],
  "discursiveQuestions": []
},

{
  "id": "anydesk",
  "title": "AnyDesk - Acesso Remoto e Suporte",
  "description": "Teste seus conhecimentos sobre o AnyDesk: controle remoto, IDs de conexão, acesso não assistido, permissões e segurança.",
  "password": "IEPOP",
  "iconType": "anydesk",
  "objectiveQuestions": [
    {
      "id": 1,
      "question": "O que é o AnyDesk utilizado no suporte técnico?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um editor de textos para digitação de trabalhos escolares"
        },
        {
          "id": "b",
          "text": "Um programa para acesso remoto e controle de computadores"
        },
        {
          "id": "c",
          "text": "Um reprodutor portátil para escutar faixas de músicas digitais"
        },
        {
          "id": "d",
          "text": "Um jogo de corrida com pistas e carros velozes"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 2,
      "question": "Para que serve o AnyDesk na área da informática?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Imprimir documentos em folhas brancas de papel sulfite padrão"
        },
        {
          "id": "b",
          "text": "Limpar o pó acumulado dentro do gabinete da máquina"
        },
        {
          "id": "c",
          "text": "Aumentar a memória RAM física sem gastar nenhum dinheiro"
        },
        {
          "id": "d",
          "text": "Prestar suporte técnico controlando outro computador pela internet"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 3,
      "question": "O que é o código numérico que aparece na tela?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O ID de nove ou dez dígitos daquele computador"
        },
        {
          "id": "b",
          "text": "A senha secreta da conta de e-mail do usuário"
        },
        {
          "id": "c",
          "text": "O valor da fatura de energia elétrica da residência"
        },
        {
          "id": "d",
          "text": "A quantidade de arquivos salvos na lixeira do Windows"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 4,
      "question": "Onde você localiza o seu próprio código de endereço?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Atrás da etiqueta colada na carcaça do monitor ligado"
        },
        {
          "id": "b",
          "text": "Dentro da pasta de lixeira do seu correio eletrônico"
        },
        {
          "id": "c",
          "text": "No quadro verde chamado Este Dispositivo na tela inicial"
        },
        {
          "id": "d",
          "text": "No menu de configurações de som do seu computador"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 5,
      "question": "Onde você digita o código do computador que deseja acessar?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Na calculadora padrão do Windows usando os botões numéricos"
        },
        {
          "id": "b",
          "text": "No bloco de notas em uma linha de texto"
        },
        {
          "id": "c",
          "text": "Na barra superior no campo chamado Outro Dispositivo informado"
        },
        {
          "id": "d",
          "text": "No rodapé da página inicial do buscador da internet"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 6,
      "question": "Qual botão inicia a tentativa de conexão com outro aparelho?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O botão verde com a inscrição Conectar na tela"
        },
        {
          "id": "b",
          "text": "O botão físico de desligar o monitor do computador"
        },
        {
          "id": "c",
          "text": "A tecla Caps Lock localizada no teclado do computador"
        },
        {
          "id": "d",
          "text": "A barra de rolagem vertical da janela do navegador"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 7,
      "question": "O que o usuário remoto deve fazer para liberar a entrada?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Desconectar o cabo de energia elétrica da tomada da parede"
        },
        {
          "id": "b",
          "text": "Excluir permanentemente todos os arquivos de fotos do disco"
        },
        {
          "id": "c",
          "text": "Reiniciar o computador três vezes seguidas sem parar nada"
        },
        {
          "id": "d",
          "text": "Clicar no botão verde chamado Aceitar na janela aberta"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 8,
      "question": "O que acontece ao clicar no botão vermelho Recusar?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O computador da outra pessoa é formatado de modo irreversível"
        },
        {
          "id": "b",
          "text": "A solicitação de acesso remoto é cancelada imediatamente sem conexão"
        },
        {
          "id": "c",
          "text": "A velocidade da internet é duplicada pelo provedor de rede"
        },
        {
          "id": "d",
          "text": "Todos os e-mails da caixa de entrada são apagados"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 9,
      "question": "Como finalizar uma sessão de suporte remoto em andamento?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Clicando no botão vermelho Finalizar na barra do AnyDesk"
        },
        {
          "id": "b",
          "text": "Desinstalando todos os programas instalados na sua área de trabalho"
        },
        {
          "id": "c",
          "text": "Desligando o interruptor de luz do cômodo da sua casa"
        },
        {
          "id": "d",
          "text": "Tirando uma foto da tela com a câmera do celular"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 10,
      "question": "O que aparece na tela do técnico durante a conexão?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Uma tela totalmente preta sem exibir nenhum tipo de imagem"
        },
        {
          "id": "b",
          "text": "Um filme de ação com legendas automáticas em língua inglesa"
        },
        {
          "id": "c",
          "text": "A área de trabalho exata do computador que está conectado"
        },
        {
          "id": "d",
          "text": "O extrato da conta bancária de quem pediu o suporte"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 11,
      "question": "O técnico consegue movimentar a seta do mouse remotamente?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não pois o mouse só funciona no computador de origem"
        },
        {
          "id": "b",
          "text": "Sim movimentando o mouse normalmente sobre a janela da sessão"
        },
        {
          "id": "c",
          "text": "Apenas se o computador tiver dois teclados físicos conectados"
        },
        {
          "id": "d",
          "text": "Somente aos sábados e domingos no período da manhã"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 12,
      "question": "É possível digitar textos no computador remoto usando seu teclado?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não pois comandos de digitação são bloqueados em acessos remotos"
        },
        {
          "id": "b",
          "text": "Apenas digitando números de zero a nove pelo teclado numérico"
        },
        {
          "id": "c",
          "text": "Somente se ambos os computadores forem da mesma marca física"
        },
        {
          "id": "d",
          "text": "Sim enviando os caracteres digitados diretamente para a máquina remota"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 13,
      "question": "O que é indispensável para que o AnyDesk funcione corretamente?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Uma impressora a laser ligada na mesma tomada do equipamento"
        },
        {
          "id": "b",
          "text": "Dois monitores de alta definição conectados no mesmo cabo de vídeo"
        },
        {
          "id": "c",
          "text": "Assinatura paga de TV a cabo com pacote de filmes"
        },
        {
          "id": "d",
          "text": "Ambos os computadores estarem ligados e conectados à internet ativa"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 14,
      "question": "É obrigatório instalar o AnyDesk para conseguir utilizá-lo?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Sim sendo necessário reiniciar o computador cinco vezes para rodar"
        },
        {
          "id": "b",
          "text": "Não pois ele pode rodar de maneira portátil sem instalação"
        },
        {
          "id": "c",
          "text": "Apenas se o computador for do modelo antigo sem internet"
        },
        {
          "id": "d",
          "text": "Somente mediante pagamento de taxa mensal no cartão de crédito"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 15,
      "question": "Para que serve a janela de Chat dentro do AnyDesk?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Trocar mensagens escritas entre as duas pessoas durante o suporte"
        },
        {
          "id": "b",
          "text": "Apagar todas as mensagens de correio eletrônico da sua conta"
        },
        {
          "id": "c",
          "text": "Aumentar a velocidade física da ventoinha do gabinete do computador"
        },
        {
          "id": "d",
          "text": "Assistir a transmissões de televisão ao vivo pela rede local"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 16,
      "question": "Para que serve ativar o modo Tela Cheia no AnyDesk?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Desligar os autofalantes para economizar energia da rede elétrica doméstica"
        },
        {
          "id": "b",
          "text": "Bloquear a transmissão de áudio e vídeo de outros aparelhos"
        },
        {
          "id": "c",
          "text": "Ocupar todo o monitor proporcionando melhor visualização da máquina remota"
        },
        {
          "id": "d",
          "text": "Formatar a memória interna do telefone celular em poucos segundos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 17,
      "question": "Qual é o símbolo característico do logotipo do AnyDesk?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Uma tesoura verde para cortar folhas de papel de desenho"
        },
        {
          "id": "b",
          "text": "Dois losangos vermelhos sobrepostos sobre um fundo de cor clara"
        },
        {
          "id": "c",
          "text": "Um círculo azul com uma letra G maiúscula no centro"
        },
        {
          "id": "d",
          "text": "Uma estrela amarela brilhante com cinco pontas perfeitamente alinhadas"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 18,
      "question": "Por que não devemos passar o ID para pessoas estranhas?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Pois pessoas mal-intencionadas podem tentar invadir e roubar seus dados"
        },
        {
          "id": "b",
          "text": "Pois o monitor do computador pode queimar se alguém conectar"
        },
        {
          "id": "c",
          "text": "Pois a conta de energia elétrica pode vir mais cara"
        },
        {
          "id": "d",
          "text": "Pois o teclado físico pode parar de digitar letras maiúsculas"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 19,
      "question": "O que fazer se um desconhecido pedir para instalar o AnyDesk?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Passar o código e digitar suas senhas bancárias na tela"
        },
        {
          "id": "b",
          "text": "Deixar o computador ligado e sair de casa sem vigiar"
        },
        {
          "id": "c",
          "text": "Recusar e não passar o código pois costuma ser golpe"
        },
        {
          "id": "d",
          "text": "Fazer um pagamento em dinheiro para a pessoa desconhecida imediatamente"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 20,
      "question": "O AnyDesk funciona em telefones celulares e computadores?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não pois funciona exclusivamente em computadores da década de noventa"
        },
        {
          "id": "b",
          "text": "Apenas se o aparelho celular não possuir tela de toque"
        },
        {
          "id": "c",
          "text": "Somente conectado por cabos de telefone fixo na tomada de parede"
        },
        {
          "id": "d",
          "text": "Sim havendo versões para computadores e também para aparelhos celulares"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 21,
      "question": "O que é o recurso de 'Acesso Não Assistido' no AnyDesk?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Assistir a vídeos de aulas gravadas sem conexão de internet"
        },
        {
          "id": "b",
          "text": "Ligar para telefones celulares de graça em horários de pico"
        },
        {
          "id": "c",
          "text": "Conectar com senha fixa sem precisar de alguém para aceitar"
        },
        {
          "id": "d",
          "text": "Desligar o monitor do computador remotamente para economizar energia elétrica"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 22,
      "question": "Por que a senha do acesso não assistido deve ser segura?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Para fazer o computador ligar mais rápido durante as manhãs"
        },
        {
          "id": "b",
          "text": "Para diminuir a temperatura da placa-mãe do gabinete do computador"
        },
        {
          "id": "c",
          "text": "Para desbloquear canais de televisão aberta sem antena externa instalada"
        },
        {
          "id": "d",
          "text": "Para impedir que invasores acessem sua máquina a qualquer momento"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 23,
      "question": "Para que serve o modo de 'Transferência de Arquivos'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Apagar todas as fotos salvas na pasta de imagens pessoais"
        },
        {
          "id": "b",
          "text": "Copiar documentos entre os dois computadores através de duas janelas"
        },
        {
          "id": "c",
          "text": "Formatar a partição do sistema operacional sem pedir confirmação prévia"
        },
        {
          "id": "d",
          "text": "Enviar e-mails em massa para milhares de contatos desconhecidos"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 24,
      "question": "O que a permissão de 'Área de Transferência' permite fazer?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Copiar textos com Ctrl+C num PC e colar no outro"
        },
        {
          "id": "b",
          "text": "Mudar a foto de papel de parede dos dois computadores"
        },
        {
          "id": "c",
          "text": "Desconectar o sinal de internet de ambos aparelhos ao mesmo tempo"
        },
        {
          "id": "d",
          "text": "Gravar a conversa em áudio e postar em redes sociais"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 25,
      "question": "Para que serve a opção 'Bloquear Entrada do Usuário'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Impedir que o cliente mexa no mouse enquanto o técnico trabalha"
        },
        {
          "id": "b",
          "text": "Desligar o monitor do cliente e não ligar nunca mais"
        },
        {
          "id": "c",
          "text": "Apagar a conta de usuário do Windows sem deixar rastros"
        },
        {
          "id": "d",
          "text": "Bloquear as redes sociais do cliente durante o horário comercial"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 26,
      "question": "O que significa o botão de 'Solicitar Elevação' no AnyDesk?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Aumentar a altura física da mesa onde fica o computador"
        },
        {
          "id": "b",
          "text": "Pedir permissão de administrador para aceitar avisos do sistema Windows"
        },
        {
          "id": "c",
          "text": "Cobrar um valor financeiro mais alto pelo serviço prestado pelo técnico"
        },
        {
          "id": "d",
          "text": "Acelerar a velocidade de rotação do ventilador do processador principal"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 27,
      "question": "Qual a utilidade de ativar a 'Gravação de Sessão'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Tocar música clássica de fundo enquanto o suporte está trabalhando"
        },
        {
          "id": "b",
          "text": "Apagar os registros de log para esconder o trabalho do técnico"
        },
        {
          "id": "c",
          "text": "Aumentar o brilho da tela do computador em cem por cento"
        },
        {
          "id": "d",
          "text": "Registrar em vídeo tudo o que foi realizado durante o acesso"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 28,
      "question": "Como o AnyDesk permite adaptar o tamanho da tela remota?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Cortando metade da imagem para caber na tela do computador"
        },
        {
          "id": "b",
          "text": "Desligando as bordas do monitor com uma fita adesiva preta"
        },
        {
          "id": "c",
          "text": "Alternando entre tamanho original, esticado ou ajustado ao monitor local"
        },
        {
          "id": "d",
          "text": "Exibindo a tela do computador sempre em preto e branco"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 29,
      "question": "Para que serve a ação de 'Enviar Ctrl+Alt+Del'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Excluir permanentemente todas as janelas abertas no momento da conexão"
        },
        {
          "id": "b",
          "text": "Desligar o roteador de internet do provedor de acesso local"
        },
        {
          "id": "c",
          "text": "Formatar o disco rígido sem precisar de confirmação do usuário"
        },
        {
          "id": "d",
          "text": "Abrir a tela de segurança ou gerenciador do Windows remoto"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 30,
      "question": "O que a ferramenta 'Reiniciar Computador Remoto' faz?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Reinicia o sistema do cliente e reconecta o AnyDesk automaticamente"
        },
        {
          "id": "b",
          "text": "Desliga o computador do cliente e queima a fonte de alimentação"
        },
        {
          "id": "c",
          "text": "Exclui a conta do Windows do cliente de forma definitiva"
        },
        {
          "id": "d",
          "text": "Desinstala todos os jogos eletrônicos instalados na área de trabalho"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 31,
      "question": "Para que serve o recurso de 'Favoritos' ou Livro de Endereços?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Comprar computadores novos pela internet com desconto no preço final"
        },
        {
          "id": "b",
          "text": "Bloquear todos os contatos que enviarem mensagens pelo correio eletrônico"
        },
        {
          "id": "c",
          "text": "Salvar IDs frequentes com nomes personalizados para conexões futuras rápidas"
        },
        {
          "id": "d",
          "text": "Gravar listas de compras de supermercado com cálculo de impostos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 32,
      "question": "O que a opção 'Transmitir Áudio' realiza na sessão?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Liga o microfone do quarto do cliente sem que ele saiba"
        },
        {
          "id": "b",
          "text": "Permite ouvir os sons do computador remoto na sua caixa"
        },
        {
          "id": "c",
          "text": "Toca um alarme de incêndio no gabinete da máquina remota"
        },
        {
          "id": "d",
          "text": "Silencia todos os vídeos do YouTube acessados no computador cliente"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 33,
      "question": "Como ajustar a conexão para priorizar resposta rápida?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Desconectando o teclado e utilizando apenas os botões do mouse"
        },
        {
          "id": "b",
          "text": "Desinstalando o antivírus para deixar a internet duas vezes rápida"
        },
        {
          "id": "c",
          "text": "Selecionando a opção Melhor Reação nas configurações de exibição gráfica"
        },
        {
          "id": "d",
          "text": "Desligando a ventoinha de resfriamento do processador do computador pessoal"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 34,
      "question": "O que fazer se a transmissão de tela estiver muito lenta?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla F5 cinquenta vezes seguidas sem parar nada"
        },
        {
          "id": "b",
          "text": "Reduzir a qualidade de imagem para diminuir o consumo de rede"
        },
        {
          "id": "c",
          "text": "Apagar todas as fotos salvas na lixeira do seu computador"
        },
        {
          "id": "d",
          "text": "Trocar o mouse por um modelo com iluminação colorida RGB"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 35,
      "question": "O que costuma significar o aviso 'Aguardando Imagem'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Lentidão de rede ou tela de bloqueio com tela preta"
        },
        {
          "id": "b",
          "text": "Que a máquina remota foi destruída por um raio elétrico"
        },
        {
          "id": "c",
          "text": "Que o suporte técnico foi cancelado pela polícia da internet"
        },
        {
          "id": "d",
          "text": "Que a impressora do cliente está sem papel para imprimir"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 36,
      "question": "O que é a 'Lista de Permissões' (Whitelist) no AnyDesk?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Listar nomes de programas antivírus proibidos de rodar no computador"
        },
        {
          "id": "b",
          "text": "Listar preços de peças e componentes de informática para empresas"
        },
        {
          "id": "c",
          "text": "Listar telefones de emergência de hospitais da sua região metropolitana"
        },
        {
          "id": "d",
          "text": "Permitir conexões apenas de computadores com IDs autorizados previamente cadastrados"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 37,
      "question": "Qual porta padrão TCP o AnyDesk utiliza para conexões diretas?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Porta vinte e um utilizada exclusivamente para envio de arquivos"
        },
        {
          "id": "b",
          "text": "Porta sete mil e setenta TCP com conexões protegidas TLS"
        },
        {
          "id": "c",
          "text": "Porta oitenta usada para páginas antigas sem certificado de segurança"
        },
        {
          "id": "d",
          "text": "Porta vinte e cinco destinada ao envio de correio eletrônico"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 38,
      "question": "O que é um 'Alias' personalizado no programa AnyDesk?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Um vírus espião criado para capturar senhas digitadas no teclado"
        },
        {
          "id": "b",
          "text": "Um tipo de cabo de rede de alta velocidade óptica"
        },
        {
          "id": "c",
          "text": "Um nome amigável que substitui o número do seu ID"
        },
        {
          "id": "d",
          "text": "Um comando do sistema operacional para formatar discos de armazenamento"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 39,
      "question": "Qual padrão criptográfico garante a segurança das sessões AnyDesk?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Criptografia básica de quatro dígitos numéricos sem proteção de chaves"
        },
        {
          "id": "b",
          "text": "Nenhum tipo de criptografia pois todas as transmissões são totalmente abertas"
        },
        {
          "id": "c",
          "text": "Criptografia mecânica baseada em cartões de papel perfurado da época antiga"
        },
        {
          "id": "d",
          "text": "Criptografia RSA de 2048 bits e padrão AES de 256 bits"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 40,
      "question": "O que é uma 'Conexão Direta' (Direct Connection / P2P)?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Comunicação direta entre as duas máquinas sem passar pelos servidores centrais"
        },
        {
          "id": "b",
          "text": "Um cabo físico esticado entre duas cidades vizinhas para transmitir áudio"
        },
        {
          "id": "c",
          "text": "Uma ligação telefônica convencional transmitida por antenas parabólicas de televisão aberta"
        },
        {
          "id": "d",
          "text": "Um envio de cartas registradas pelo correio postal tradicional de documentos impressos"
        }
      ],
      "correctOptionId": "a"
    }
  ],
  "discursiveQuestions": []
},

{
  "id": "excel",
  "title": "Excel Básico - Planilhas e Fórmulas",
  "description": "Teste seus conhecimentos sobre o Excel: células, operadores matemáticos, fórmulas SOMA, MÉDIA, gráficos e formatação de valores.",
  "password": "IEPOP",
  "iconType": "excel",
  "objectiveQuestions": [
    {
      "id": 1,
      "question": "O que é o Microsoft Excel do pacote Office?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um editor profissional para corte e montagem de fotos"
        },
        {
          "id": "b",
          "text": "Um programa para criação de planilhas eletrônicas e cálculos"
        },
        {
          "id": "c",
          "text": "Um reprodutor portátil para escutar faixas de músicas digitais"
        },
        {
          "id": "d",
          "text": "Um navegador moderno para acessar páginas da internet mundial"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 2,
      "question": "O que é uma 'Célula' em uma planilha?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O botão usado para imprimir folhas de papel comum"
        },
        {
          "id": "b",
          "text": "A lixeira onde ficam guardados os arquivos excluídos"
        },
        {
          "id": "c",
          "text": "O cabo de energia conectado ao monitor do computador"
        },
        {
          "id": "d",
          "text": "O ponto de encontro entre uma linha e coluna"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 3,
      "question": "Como as Colunas são identificadas no topo da planilha?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Por letras maiúsculas do alfabeto como A, B e C"
        },
        {
          "id": "b",
          "text": "Por números inteiros positivos como 1, 2 e 3"
        },
        {
          "id": "c",
          "text": "Por nomes de cores primárias como azul e vermelho"
        },
        {
          "id": "d",
          "text": "Por desenhos de animais geométricos na barra de tarefas"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 4,
      "question": "Como as Linhas são identificadas no canto esquerdo?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Por letras maiúsculas do alfabeto como as letras A"
        },
        {
          "id": "b",
          "text": "Por nomes de cidades brasileiras em uma ordem alfabética"
        },
        {
          "id": "c",
          "text": "Por números inteiros positivos sequenciais como 1 e 2"
        },
        {
          "id": "d",
          "text": "Por símbolos de pontuação comuns como vírgulas e pontos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 5,
      "question": "Como é composto o endereço de uma célula específica?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Pelo número do CPF registrado na conta do usuário"
        },
        {
          "id": "b",
          "text": "Pelo endereço residencial cadastrado no perfil da escola"
        },
        {
          "id": "c",
          "text": "Pela letra da coluna seguida do número da linha"
        },
        {
          "id": "d",
          "text": "Pela quantidade de letras maiúsculas digitadas no texto"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 6,
      "question": "Qual símbolo é obrigatório para iniciar qualquer cálculo?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O sinal de igual colocado no início da fórmula"
        },
        {
          "id": "b",
          "text": "O ponto de interrogação escrito antes dos números digitados"
        },
        {
          "id": "c",
          "text": "A tecla de arroba inserida no final do texto"
        },
        {
          "id": "d",
          "text": "O símbolo de cerquilha repetido três vezes em seguida"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 7,
      "question": "Qual operador do teclado realiza a conta de Soma?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O ponto de exclamação usado para destacar frases importantes"
        },
        {
          "id": "b",
          "text": "A barra de espaço pressionada com o polegar direito"
        },
        {
          "id": "c",
          "text": "A tecla de parênteses esquerdo no topo das letras"
        },
        {
          "id": "d",
          "text": "O símbolo de mais tradicional localizado no teclado numérico"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 8,
      "question": "Qual operador do teclado realiza a conta de Subtração?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O símbolo de porcentagem inserido entre duas palavras escritas"
        },
        {
          "id": "b",
          "text": "O traço de menos localizado junto ao teclado numérico"
        },
        {
          "id": "c",
          "text": "A barra vertical dupla presente ao lado do enter"
        },
        {
          "id": "d",
          "text": "A tecla de vírgula usada para separar casas decimais"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 9,
      "question": "Qual operador matemático é usado para Multiplicação?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "O asterisco usado para realizar a multiplicação de valores"
        },
        {
          "id": "b",
          "text": "A letra X minúscula digitada no meio da célula"
        },
        {
          "id": "c",
          "text": "O ponto final colocado após a última palavra digitada"
        },
        {
          "id": "d",
          "text": "O sinal de menor que apontado para o lado"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 10,
      "question": "Qual operador matemático é usado para Divisão?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Dois pontos sobrepostos usados para marcar intervalos de células"
        },
        {
          "id": "b",
          "text": "O sinal de til colocado sobre uma letra vogal"
        },
        {
          "id": "c",
          "text": "A barra inclinada para direita usada para dividir números"
        },
        {
          "id": "d",
          "text": "A tecla de ponto e vírgula do teclado físico"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 11,
      "question": "Para que serve o botão de 'AutoSoma' (∑)?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Apagar todas as linhas com valores menores que dez"
        },
        {
          "id": "b",
          "text": "Calcular a soma de números selecionados em um clique"
        },
        {
          "id": "c",
          "text": "Trocar o idioma do documento para português de Portugal"
        },
        {
          "id": "d",
          "text": "Formatar o disco rígido do computador em que trabalha"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 12,
      "question": "Qual fórmula soma corretamente os valores de A1 até A5?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Somar de A1 até A5 em texto"
        },
        {
          "id": "b",
          "text": "+A1-A2-A3 com sinais de subtração totalmente incorretos"
        },
        {
          "id": "c",
          "text": "A1 mais A5 escrito entre aspas duplas"
        },
        {
          "id": "d",
          "text": "=SOMA(A1:A5) digitado dentro da célula de resultado"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 13,
      "question": "Qual fórmula calcula a média aritmética de B1 até B10?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "fazer a média de todos os números em português"
        },
        {
          "id": "b",
          "text": "B1 dividido por dez sem colocar sinal de igual"
        },
        {
          "id": "c",
          "text": "multiplicar B1 por B10 e somar cinco pontos"
        },
        {
          "id": "d",
          "text": "=MÉDIA(B1:B10) digitado na barra de fórmulas da planilha"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 14,
      "question": "Qual tecla do teclado confirma o dado digitado na célula?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "A tecla Esc pressionada para cancelar a edição feita"
        },
        {
          "id": "b",
          "text": "A tecla Enter pressionada para descer para a célula"
        },
        {
          "id": "c",
          "text": "A tecla Backspace usada para apagar os caracteres digitados"
        },
        {
          "id": "d",
          "text": "A tecla F1 acionada para abrir o menu ajuda"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 15,
      "question": "O que é a 'Alça de Preenchimento' no canto da célula?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um quadradinho verde para arrastar e copiar fórmulas facilmente"
        },
        {
          "id": "b",
          "text": "Um defeito visual na placa de vídeo do computador"
        },
        {
          "id": "c",
          "text": "Um botão voltado para desligar o monitor do aparelho"
        },
        {
          "id": "d",
          "text": "Uma ferramenta destinada a imprimir a folha de cálculo"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 16,
      "question": "Como formatar um número para o formato de moeda em reais?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Digitando a palavra dinheiro em maiúsculo ao lado do valor"
        },
        {
          "id": "b",
          "text": "Desenhando cédulas de papel usando a ferramenta do pincel"
        },
        {
          "id": "c",
          "text": "Aplicando o formato de Moeda ou Número de Contabilização"
        },
        {
          "id": "d",
          "text": "Mudando a cor do texto para amarelo ouro brilhante"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 17,
      "question": "Para que serve colocar 'Bordas' nas células da planilha?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Impedir que outras pessoas leiam os números da tabela"
        },
        {
          "id": "b",
          "text": "Deixar as divisões visíveis para impressão e leitura organizada"
        },
        {
          "id": "c",
          "text": "Apagar todas as fórmulas e deixar apenas os títulos"
        },
        {
          "id": "d",
          "text": "Aumentar a velocidade da conexão de rede do computador"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 18,
      "question": "O que o botão 'Mesclar e Centralizar' realiza?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Une várias células selecionadas em uma só centralizando texto"
        },
        {
          "id": "b",
          "text": "Exclui as linhas pares e divide as colunas ímpares"
        },
        {
          "id": "c",
          "text": "Transforma a planilha em um arquivo de apresentação PowerPoint"
        },
        {
          "id": "d",
          "text": "Copia os dados para a área de transferência do Windows"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 19,
      "question": "Qual a cor e o logotipo característico do Microsoft Excel?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Um ícone azul com uma letra W em fonte negrito"
        },
        {
          "id": "b",
          "text": "Um ícone vermelho com uma letra P maiúscula no meio"
        },
        {
          "id": "c",
          "text": "Um ícone verde contendo uma letra X destacada nele"
        },
        {
          "id": "d",
          "text": "Um círculo roxo sem nenhuma letra desenhada em seu interior"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 20,
      "question": "É possível gerar gráficos a partir dos números da tabela?",
      "difficulty": "facil",
      "options": [
        {
          "id": "a",
          "text": "Não pois o Excel é restrito apenas a textos pretos"
        },
        {
          "id": "b",
          "text": "Apenas se a planilha tiver mais de mil linhas cadastradas"
        },
        {
          "id": "c",
          "text": "Somente conectando uma câmera digital profissional no computador pessoal"
        },
        {
          "id": "d",
          "text": "Sim criando gráficos de colunas, barras, linhas e pizzas"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 21,
      "question": "Qual a diferença entre os dois pontos (:) e ponto e vírgula (;)?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Dois pontos serve para dividir e ponto e vírgula para multiplicar"
        },
        {
          "id": "b",
          "text": "Dois pontos apaga a fórmula e ponto e vírgula salva tudo"
        },
        {
          "id": "c",
          "text": "Dois pontos indica intervalo até e ponto e vírgula separa elementos"
        },
        {
          "id": "d",
          "text": "Dois pontos cria tabelas e ponto e vírgula formata textos"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 22,
      "question": "Qual função descobre o maior número dentro de uma lista?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "A função =MAIORAL() escrita em letras maiúsculas na barra"
        },
        {
          "id": "b",
          "text": "A função =TOP() acompanhada de um número entre parênteses"
        },
        {
          "id": "c",
          "text": "A função =GIGANTE() digitada antes dos valores da coluna"
        },
        {
          "id": "d",
          "text": "A função =MÁXIMO() aplicada no intervalo de células pretendido"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 23,
      "question": "Qual função descobre o menor número dentro de uma lista?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "A função =PEQUENO() acompanhada de colchetes no texto final"
        },
        {
          "id": "b",
          "text": "A função =MÍNIMO() aplicada no intervalo de células pretendido"
        },
        {
          "id": "c",
          "text": "A função =MENORZINHO() escrita com o sinal de menos"
        },
        {
          "id": "d",
          "text": "A função =BAIXO() colocada dentro de uma célula vazia"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 24,
      "question": "Para que serve a função =CONT.VALORES() na planilha?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Contar quantas células estão preenchidas no intervalo selecionado"
        },
        {
          "id": "b",
          "text": "Multiplicar todos os valores pelo número de linhas totais"
        },
        {
          "id": "c",
          "text": "Dividir o valor total pelo número de colunas existentes"
        },
        {
          "id": "d",
          "text": "Apagar os textos repetidos da tabela de forma automática"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 25,
      "question": "Para que serve a função =CONT.SE() no Microsoft Excel?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Contar células que atendem a um critério ou condição específica"
        },
        {
          "id": "b",
          "text": "Somar os números pares e subtrair todos os números ímpares"
        },
        {
          "id": "c",
          "text": "Imprimir a planilha se a impressora estiver com tinta preta"
        },
        {
          "id": "d",
          "text": "Trocar o formato de todas as letras para minúsculas imediatamente"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 26,
      "question": "Qual fórmula insere a data atual do computador na célula?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "A fórmula =CALENDÁRIO() acompanhada do ano atual em números"
        },
        {
          "id": "b",
          "text": "A fórmula =HOJE() sem colocar argumentos dentro dos parênteses"
        },
        {
          "id": "c",
          "text": "A palavra hoje digitada com a primeira letra maiúscula apenas"
        },
        {
          "id": "d",
          "text": "O comando =DATA.ATUAL() precedido de três pontos de interrogação"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 27,
      "question": "Para que serve a ferramenta de 'Formatação Condicional'?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Formatar o computador se a planilha apresentar erros de cálculo"
        },
        {
          "id": "b",
          "text": "Proteger o arquivo com uma senha criptografada de oito dígitos"
        },
        {
          "id": "c",
          "text": "Apagar linhas vazias para economizar papel na hora de imprimir"
        },
        {
          "id": "d",
          "text": "Destacar células com cores baseadas em regras de valores numéricos"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 28,
      "question": "Para que serve a opção 'Congelar Painéis' no Excel?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Diminuir a temperatura da placa-mãe do gabinete do computador"
        },
        {
          "id": "b",
          "text": "Impedir que qualquer pessoa altere as fórmulas da tabela criada"
        },
        {
          "id": "c",
          "text": "Manter linhas de cabeçalho visíveis enquanto rola a planilha"
        },
        {
          "id": "d",
          "text": "Desligar a tela do monitor para economizar energia da rede"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 29,
      "question": "Como organizar uma lista de nomes em ordem alfabética?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Recortando e colando cada nome manualmente em ordem com mouse"
        },
        {
          "id": "b",
          "text": "Excluindo os nomes iniciados com as últimas letras do alfabeto"
        },
        {
          "id": "c",
          "text": "Digitando a fórmula =ALFABETO() na primeira linha da coluna"
        },
        {
          "id": "d",
          "text": "Selecionando a coluna e clicando no botão Classificar de A-Z"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 30,
      "question": "Para que serve aplicar 'Filtros' nos cabeçalhos da tabela?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Exibir somente as linhas que atendem a opções selecionadas pelo usuário"
        },
        {
          "id": "b",
          "text": "Remover a poeira e sujeira acumuladas nas teclas do computador físico"
        },
        {
          "id": "c",
          "text": "Melhorar a qualidade das cores exibidas pelo monitor de vídeo conectado"
        },
        {
          "id": "d",
          "text": "Aumentar a velocidade física da conexão com a internet banda larga"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 31,
      "question": "Como ajustar automaticamente a largura ideal de uma coluna?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Reiniciando o sistema operacional em modo de segurança com rede habilitada"
        },
        {
          "id": "b",
          "text": "Formatando a partição onde o pacote de programas está instalado atualmente"
        },
        {
          "id": "c",
          "text": "Dando dois cliques rápidos na linha divisória entre duas colunas adjacentes"
        },
        {
          "id": "d",
          "text": "Segurando a tecla Shift enquanto bate na mesa do computador conectado"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 32,
      "question": "O que significa o símbolo ##### exibido dentro de uma célula?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Que o computador está infectado por vírus espiões altamente perigosos atualmente"
        },
        {
          "id": "b",
          "text": "Que a coluna está estreita demais para exibir o número completamente"
        },
        {
          "id": "c",
          "text": "Que a fórmula digitada cometeu uma infração grave nas regras matemáticas"
        },
        {
          "id": "d",
          "text": "Que a conta do usuário foi suspensa por falta de pagamento"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 33,
      "question": "Qual o atalho padrão de teclado para Salvar no Excel em português?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla Esc dez vezes seguidas sem parar nada"
        },
        {
          "id": "b",
          "text": "Apertar a barra de espaço cinco vezes com a mão esquerda"
        },
        {
          "id": "c",
          "text": "Pressionar as teclas Ctrl mais a letra B juntas no teclado"
        },
        {
          "id": "d",
          "text": "Segurar a tecla Tab por vinte segundos contados no relógio"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 34,
      "question": "Qual atalho desfaz a última ação realizada na planilha?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "Pressionar a tecla F12 acompanhada da tecla Shift do lado direito"
        },
        {
          "id": "b",
          "text": "Pressionar as teclas Ctrl mais a letra Z juntas no teclado"
        },
        {
          "id": "c",
          "text": "Desconectar o cabo de energia elétrica do gabinete do computador"
        },
        {
          "id": "d",
          "text": "Apertar a tecla Caps Lock três vezes seguidas com rapidez"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 35,
      "question": "O que é uma 'Pasta de Trabalho' no Microsoft Excel?",
      "difficulty": "media",
      "options": [
        {
          "id": "a",
          "text": "O arquivo completo do Excel que pode conter várias abas de planilhas"
        },
        {
          "id": "b",
          "text": "Uma pasta de papelão usada para guardar provas impressas da turma"
        },
        {
          "id": "c",
          "text": "Um compartimento interno onde fica localizado o disco rígido do computador"
        },
        {
          "id": "d",
          "text": "Um programa de segurança voltado para escanear arquivos recebidos pela internet"
        }
      ],
      "correctOptionId": "a"
    },
    {
      "id": 36,
      "question": "Para que serve o símbolo de cifrão ($) como em $A$1?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Converter o valor numérico para dólares americanos em tempo real"
        },
        {
          "id": "b",
          "text": "Cobrar taxa de licença toda vez que a planilha for aberta"
        },
        {
          "id": "c",
          "text": "Indicar que a célula contém um erro grave de fórmula matemática"
        },
        {
          "id": "d",
          "text": "Travar a célula criando referência absoluta que não muda ao arrastar"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 37,
      "question": "Como funciona a estrutura da função condicional =SE()?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "=SE(somar; subtrair; dividir) calculando todas as operações básicas"
        },
        {
          "id": "b",
          "text": "=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso) avaliando uma condição de cálculo"
        },
        {
          "id": "c",
          "text": "=SE(início; meio; fim) organizando os textos em ordem"
        },
        {
          "id": "d",
          "text": "=SE(nome; data; hora) registrando o momento de acesso"
        }
      ],
      "correctOptionId": "b"
    },
    {
      "id": 38,
      "question": "Para que serve a função =PROCV() no Microsoft Excel?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Proteger o computador contra ataques de vírus enviados por correio eletrônico"
        },
        {
          "id": "b",
          "text": "Aumentar a memória RAM física instalada na placa-mãe do gabinete"
        },
        {
          "id": "c",
          "text": "Procurar um valor na primeira coluna e retornar dados de outra"
        },
        {
          "id": "d",
          "text": "Imprimir a planilha em formato de cartaz para apresentações em feiras"
        }
      ],
      "correctOptionId": "c"
    },
    {
      "id": 39,
      "question": "O que indica a mensagem de erro #DIV/0! na planilha?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Que o arquivo de planilha está com o tamanho acima do limite"
        },
        {
          "id": "b",
          "text": "Que a impressora conectada está sem folha sulfite na bandeja de papel"
        },
        {
          "id": "c",
          "text": "Que a bateria do computador portátil precisa de recarga na tomada"
        },
        {
          "id": "d",
          "text": "Que a fórmula tentou efetuar uma divisão impossível pelo número zero"
        }
      ],
      "correctOptionId": "d"
    },
    {
      "id": 40,
      "question": "Para que serve o recurso de 'Validação de Dados'?",
      "difficulty": "dificil",
      "options": [
        {
          "id": "a",
          "text": "Restringir o tipo de dado aceito criando listas suspensas na célula"
        },
        {
          "id": "b",
          "text": "Validar se o aluno pagou a mensalidade do curso de informática"
        },
        {
          "id": "c",
          "text": "Testar se a conexão de internet possui velocidade para carregar vídeos"
        },
        {
          "id": "d",
          "text": "Enviar uma cópia da planilha para a Receita Federal do Brasil"
        }
      ],
      "correctOptionId": "a"
    }
  ],
  "discursiveQuestions": []
},

  // ===================================================================
  // MICROSOFT WORD
  // ===================================================================
  {
    id: 'word-1',
    title: 'Microsoft Word - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o Microsoft Word. O que é, para que serve e suas principais funções.',
    password: 'IEPOP',
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
    id: 'word-2',
    title: 'Microsoft Word - Nível 2',
    description: 'Teste seus conhecimentos intermediários no Word. Formatação avançada de parágrafos, margens, cabeçalhos, rodapés e atalhos de teclado.',
    password: 'IEPOP',
    iconType: 'word',
    objectiveQuestions: [
      { id: 1, question: "Qual atalho de teclado é usado para copiar um texto selecionado?", options: [ { id: "a", text: "Ctrl + X" }, { id: "b", text: "Ctrl + C" }, { id: "c", text: "Ctrl + V" }, { id: "d", text: "Ctrl + Z" } ], correctOptionId: "b" },
      { id: 2, question: "Qual atalho de teclado é usado para colar o texto copiado?", options: [ { id: "a", text: "Ctrl + V" }, { id: "b", text: "Ctrl + C" }, { id: "c", text: "Ctrl + S" }, { id: "d", text: "Ctrl + P" } ], correctOptionId: "a" },
      { id: 3, question: "Para desfazer a última ação realizada no documento, usamos o atalho:", options: [ { id: "a", text: "Ctrl + Y" }, { id: "b", text: "Ctrl + X" }, { id: "c", text: "Ctrl + Z" }, { id: "d", text: "Ctrl + A" } ], correctOptionId: "c" },
      { id: 4, question: "Em qual guia/aba do Word encontramos a opção de alterar as \"Margens\" da página?", options: [ { id: "a", text: "Página Inicial" }, { id: "b", text: "Inserir" }, { id: "c", text: "Layout" }, { id: "d", text: "Revisão" } ], correctOptionId: "c" },
      { id: 5, question: "A orientação de página que deixa a folha \"em pé\" é chamada de:", options: [ { id: "a", text: "Retrato" }, { id: "b", text: "Paisagem" }, { id: "c", text: "Horizontal" }, { id: "d", text: "Vertical" } ], correctOptionId: "a" },
      { id: 6, question: "A orientação de página que deixa a folha \"deitada\" é chamada de:", options: [ { id: "a", text: "Retrato" }, { id: "b", text: "Paisagem" }, { id: "c", text: "Horizontal" }, { id: "d", text: "Estendida" } ], correctOptionId: "b" },
      { id: 7, question: "Como podemos numerar automaticamente as páginas de um documento?", options: [ { id: "a", text: "Digitando o número manualmente em cada página" }, { id: "b", text: "Usando a opção \"Número de Página\" na guia Inserir" }, { id: "c", text: "Clicando em Salvar Como" }, { id: "d", text: "Mudando o tamanho da fonte" } ], correctOptionId: "b" },
      { id: 8, question: "O que é o \"Cabeçalho\" em um documento do Word?", options: [ { id: "a", text: "A parte inferior da folha" }, { id: "b", text: "A área de margem na parte superior da página" }, { id: "c", text: "O título principal do texto em negrito" }, { id: "d", text: "Uma tabela com linhas e colunas" } ], correctOptionId: "b" },
      { id: 9, question: "O que é o \"Rodapé\" em um documento do Word?", options: [ { id: "a", text: "A área de margem na parte inferior da página" }, { id: "b", text: "A primeira página do documento" }, { id: "c", text: "Uma lista com marcadores de bolinha" }, { id: "d", text: "O botão para fechar o Word" } ], correctOptionId: "a" },
      { id: 10, question: "Para destacar um texto importante com uma cor de fundo, usamos a ferramenta:", options: [ { id: "a", text: "Cor da Fonte" }, { id: "b", text: "Cor de Realce do Texto" }, { id: "c", text: "Negrito" }, { id: "d", text: "Efeitos de Texto" } ], correctOptionId: "b" },
      { id: 11, question: "Se quisermos criar uma lista com marcadores de números ou símbolos, usamos:", options: [ { id: "a", text: "Tabela" }, { id: "b", text: "Alinhamento Justificado" }, { id: "c", text: "Marcadores ou Numeração" }, { id: "d", text: "Estilos de Parágrafo" } ], correctOptionId: "c" },
      { id: 12, question: "Para justificar um texto (deixar alinhado nas margens esquerda e direita), usamos o botão:", options: [ { id: "a", text: "Centralizar" }, { id: "b", text: "Justificar" }, { id: "c", text: "Alinhar à direita" }, { id: "d", text: "Itálico" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Qual é a diferença entre as orientações \"Retrato\" e \"Paisagem\" no Word?" },
      { id: 14, question: "Descreva a utilidade dos cabeçalhos e rodapés em documentos longos, como trabalhos escolares." },
      { id: 15, question: "Explique para que servem os atalhos Ctrl+C, Ctrl+V e Ctrl+Z." },
      { id: 16, question: "Como a ferramenta de \"Marcadores\" (bolinhas ou números) ajuda na organização de um texto?" }
    ]
  },
  {
    id: 'word-3',
    title: 'Microsoft Word - Nível 3',
    description: 'Teste seus conhecimentos avançados no Word. Modelos (templates), mala direta, SmartArt, exportação em PDF, controle de alterações e senhas.',
    password: 'IEPOP',
    iconType: 'word',
    objectiveQuestions: [
      { id: 1, question: "O que são os \"Modelos\" (Templates) prontos do Microsoft Word?", options: [ { id: "a", text: "Versões antigas do programa" }, { id: "b", text: "Documentos pré-formatados para criar currículos, cartas ou relatórios" }, { id: "c", text: "Desenhos geométricos para colorir" }, { id: "d", text: "Extensões de arquivos de imagem" } ], correctOptionId: "b" },
      { id: 2, question: "Qual recurso do Word permite criar cartas ou e-mails personalizados para vários destinatários de uma vez?", options: [ { id: "a", text: "Mala Direta" }, { id: "b", text: "Localizar e Substituir" }, { id: "c", text: "Inserir Equação" }, { id: "d", text: "Dicionário de Sinônimos" } ], correctOptionId: "a" },
      { id: 3, question: "Para criar um sumário (índice) automático no Word, é recomendável aplicar:", options: [ { id: "a", text: "Negrito em todas as palavras" }, { id: "b", text: "Estilos de Título (como Título 1, Título 2) nos títulos do documento" }, { id: "c", text: "Espaçamento duplo entre linhas" }, { id: "d", text: "Margens largas" } ], correctOptionId: "b" },
      { id: 4, question: "O que é o recurso SmartArt no Microsoft Word?", options: [ { id: "a", text: "Um antivírus embutido no Word" }, { id: "b", text: "Ferramenta para criar diagramas visuais, listas e organogramas" }, { id: "c", text: "Um editor de fotos profissional" }, { id: "d", text: "Um site de pesquisa escolar" } ], correctOptionId: "b" },
      { id: 5, question: "Se quisermos exportar um documento do Word de forma que ninguém consiga editar facilmente, salvamos em:", options: [ { id: "a", text: ".docx" }, { id: "b", text: ".txt" }, { id: "c", text: ".pdf" }, { id: "d", text: ".html" } ], correctOptionId: "c" },
      { id: 6, question: "Qual recurso permite que várias pessoas trabalhem no mesmo documento e vejam as alterações feitas por cada uma?", options: [ { id: "a", text: "Controlar Alterações / Controle de Alterações" }, { id: "b", text: "Proteger com Senha" }, { id: "c", text: "Mala Direta" }, { id: "d", text: "Traduzir Texto" } ], correctOptionId: "a" },
      { id: 7, question: "Onde podemos ver informações como número de palavras, páginas e caracteres do documento?", options: [ { id: "a", text: "Na barra de status, no canto inferior esquerdo" }, { id: "b", text: "Na guia Exibir > Régua" }, { id: "c", text: "Na lixeira do Windows" }, { id: "d", text: "No painel de controle" } ], correctOptionId: "a" },
      { id: 8, question: "Como podemos proteger um documento do Word com uma senha de acesso?", options: [ { id: "a", text: "Renomeando o arquivo para \"Secreto\"" }, { id: "b", text: "Acessando Arquivo > Informações > Proteger Documento > Criptografar com Senha" }, { id: "c", text: "Excluindo o arquivo do computador" }, { id: "d", text: "Enviando o arquivo para o e-mail de um amigo" } ], correctOptionId: "b" },
      { id: 9, question: "Qual recurso usamos para substituir rapidamente uma palavra por outra em todo o documento?", options: [ { id: "a", text: "Revisão Ortográfica" }, { id: "b", text: "Localizar e Substituir" }, { id: "c", text: "Negrito" }, { id: "d", text: "Quebra de Página" } ], correctOptionId: "b" },
      { id: 10, question: "O que faz o comando \"Quebra de Página\"?", options: [ { id: "a", text: "Divide a página ao meio horizontalmente" }, { id: "b", text: "Envia o cursor imediatamente para o início da próxima página" }, { id: "c", text: "Fecha o programa Word" }, { id: "d", text: "Exclui a folha atual do documento" } ], correctOptionId: "b" },
      { id: 11, question: "Para inserir símbolos que não estão no teclado (como marcas registradas ou letras gregas), usamos a guia:", options: [ { id: "a", text: "Inserir > Símbolo" }, { id: "b", text: "Layout > Margens" }, { id: "c", text: "Página Inicial > Fonte" }, { id: "d", text: "Arquivo > Imprimir" } ], correctOptionId: "a" },
      { id: 12, question: "O espaçamento padrão entre linhas de um texto pode ser ajustado em qual grupo da guia Página Inicial?", options: [ { id: "a", text: "Fonte" }, { id: "b", text: "Parágrafo" }, { id: "c", text: "Edição" }, { id: "d", text: "Estilos" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a vantagem de usar os \"Modelos\" prontos do Word em vez de criar um documento do zero." },
      { id: 14, question: "Como o recurso de \"Localizar e Substituir\" pode economizar tempo em um texto muito longo?" },
      { id: 15, question: "Por que é útil salvar um trabalho escolar ou currículo em formato PDF antes de enviar para alguém?" },
      { id: 16, question: "Descreva o que é a ferramenta \"Mala Direta\" e dê um exemplo de quando ela é usada." }
    ]
  },

  // ===================================================================
  // MICROSOFT POWERPOINT
  // ===================================================================
  {
    id: 'powerpoint-1',
    title: 'Microsoft PowerPoint - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o PowerPoint. Aprenda sobre slides, apresentações e como salvar arquivos.',
    password: 'IEPOP',
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
    id: 'powerpoint-2',
    title: 'Microsoft PowerPoint - Nível 2',
    description: 'Teste seus conhecimentos intermediários no PowerPoint. Transições e animações de objetos, formatos de slide, inserção de áudio/vídeos e hiperlinks.',
    password: 'IEPOP',
    iconType: 'powerpoint',
    objectiveQuestions: [
      { id: 1, question: "Onde podemos alterar o tamanho ou a proporção dos slides (como Standard 4:3 ou Widescreen 16:9)?", options: [ { id: "a", text: "Guia Design > Tamanho do Slide" }, { id: "b", text: "Guia Transições > Duração" }, { id: "c", text: "Guia Inserir > Tabela" }, { id: "d", text: "Guia Arquivo > Imprimir" } ], correctOptionId: "a" },
      { id: 2, question: "Qual a diferença entre \"Transição\" e \"Animação\" no PowerPoint?", options: [ { id: "a", text: "Transição é o efeito entre slides; Animação é o efeito em elementos dentro do slide" }, { id: "b", text: "Não há diferença, são o mesmo recurso" }, { id: "c", text: "Transição é para áudio; Animação é para vídeo" }, { id: "d", text: "Transição apaga os slides; Animação cria novos slides" } ], correctOptionId: "a" },
      { id: 3, question: "Qual atalho de teclado inicia a apresentação de slides a partir do primeiro slide?", options: [ { id: "a", text: "F1" }, { id: "b", text: "F5" }, { id: "c", text: "Ctrl + P" }, { id: "d", text: "Espaço" } ], correctOptionId: "b" },
      { id: 4, question: "Qual atalho inicia a apresentação de slides a partir do slide que está selecionado atualmente?", options: [ { id: "a", text: "F5" }, { id: "b", text: "Shift + F5" }, { id: "c", text: "Alt + F5" }, { id: "d", text: "Ctrl + Enter" } ], correctOptionId: "b" },
      { id: 5, question: "Para que serve a caixa de texto em um slide do PowerPoint?", options: [ { id: "a", text: "Para digitar e organizar textos dentro do slide" }, { id: "b", text: "Para desenhar tabelas automaticamente" }, { id: "c", text: "Para salvar a apresentação online" }, { id: "d", text: "Para colocar senhas na apresentação" } ], correctOptionId: "a" },
      { id: 6, question: "Como podemos inserir um vídeo do YouTube ou do próprio computador na apresentação?", options: [ { id: "a", text: "Arrastando o link do navegador para a lixeira" }, { id: "b", text: "Indo na guia Inserir > Vídeo" }, { id: "c", text: "Mudando a extensão do arquivo para .mp3" }, { id: "d", text: "Clicando em Salvar Como" } ], correctOptionId: "b" },
      { id: 7, question: "O que é o recurso \"Design / Ideias de Design\" no PowerPoint?", options: [ { id: "a", text: "Um robô que apresenta os slides sozinho" }, { id: "b", text: "Uma ferramenta que sugere layouts bonitos de forma automática com base no seu conteúdo" }, { id: "c", text: "Um site para baixar jogos" }, { id: "d", text: "Um antivírus específico para apresentações" } ], correctOptionId: "b" },
      { id: 8, question: "Como podemos mudar a cor de fundo de um slide específico?", options: [ { id: "a", text: "Clicando com o botão direito no slide > Formatar Tela de Fundo" }, { id: "b", text: "Excluindo o slide e criando um novo" }, { id: "c", text: "Mudando o tamanho da letra" }, { id: "d", text: "Clicando em Inserir > Imagem" } ], correctOptionId: "a" },
      { id: 9, question: "Se quisermos colocar um som ou música de fundo em um slide, usamos a guia:", options: [ { id: "a", text: "Inserir > Áudio" }, { id: "b", text: "Transições > Efeito de Som" }, { id: "c", text: "Animações > Música" }, { id: "d", text: "Exibir > Zoom" } ], correctOptionId: "a" },
      { id: 10, question: "O que acontece se clicarmos na tecla \"ESC\" (Escape) durante uma apresentação de slides?", options: [ { id: "a", text: "Os slides avançam mais rápido" }, { id: "b", text: "A apresentação é encerrada e volta para o modo de edição" }, { id: "c", text: "A apresentação começa do primeiro slide" }, { id: "d", text: "Todos os slides são excluídos" } ], correctOptionId: "b" },
      { id: 11, question: "Para criar um link que leva o usuário para um site da internet ao clicar em um texto, usamos:", options: [ { id: "a", text: "Caixa de Texto" }, { id: "b", text: "Link / Hiperlink" }, { id: "c", text: "Transição" }, { id: "d", text: "Estilo de Tabela" } ], correctOptionId: "b" },
      { id: 12, question: "O que são os \"Temas\" na guia Design do PowerPoint?", options: [ { id: "a", text: "Configurações visuais prontas que mudam fontes, cores e fundos de todos os slides" }, { id: "b", text: "Lista de tópicos para escrever o texto" }, { id: "c", text: "Diferentes tipos de arquivos de áudio" }, { id: "d", text: "Jogos integrados no programa" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a diferença entre efeitos de \"Transição\" e efeitos de \"Animação\"." },
      { id: 14, question: "Por que usar caixas de texto é melhor do que escrever diretamente no slide sem divisão?" },
      { id: 15, question: "Como o recurso \"Ideias de Design\" ajuda quem não tem muita experiência em criar slides bonitos?" },
      { id: 16, question: "Cite uma situação prática em que seria útil usar um \"Hiperlink\" em uma apresentação de slides." }
    ]
  },
  {
    id: 'powerpoint-3',
    title: 'Microsoft PowerPoint - Nível 3',
    description: 'Teste seus conhecimentos avançados no PowerPoint. Slide Mestre, anotações do orador, exportação em vídeo, gatilhos de animação e modos de exibição.',
    password: 'IEPOP',
    iconType: 'powerpoint',
    objectiveQuestions: [
      { id: 1, question: "O que é o \"Slide Mestre\" no PowerPoint?", options: [ { id: "a", text: "O primeiro slide criado na apresentação" }, { id: "b", text: "Um slide modelo que define o padrão visual (fontes, cores, logos) para todos os outros slides" }, { id: "c", text: "O slide final com os agradecimentos" }, { id: "d", text: "O computador do professor que controla os outros" } ], correctOptionId: "b" },
      { id: 2, question: "Onde o apresentador pode digitar notas ou lembretes que só ele verá durante a apresentação?", options: [ { id: "a", text: "Na própria caixa de texto principal do slide" }, { id: "b", text: "Na área de \"Anotações\" abaixo de cada slide" }, { id: "c", text: "No cabeçalho do slide" }, { id: "d", text: "Na lixeira do programa" } ], correctOptionId: "b" },
      { id: 3, question: "Se quisermos exportar a nossa apresentação de slides como um vídeo que toca sozinho, salvamos no formato:", options: [ { id: "a", text: ".docx" }, { id: "b", text: ".mp4 ou .wmv" }, { id: "c", text: ".txt" }, { id: "d", text: ".zip" } ], correctOptionId: "b" },
      { id: 4, question: "O que é o recurso \"Testar Intervalos\" no PowerPoint?", options: [ { id: "a", text: "Um cronômetro para medir o tempo gasto em cada slide durante um ensaio" }, { id: "b", text: "Um teste para saber se o computador está rápido" }, { id: "c", text: "Um jogo de adivinhação de palavras" }, { id: "d", text: "Um verificador de links quebrados" } ], correctOptionId: "a" },
      { id: 5, question: "Como podemos criar uma animação que faz um objeto se mover em uma linha personalizada na tela?", options: [ { id: "a", text: "Arrastando o mouse com a apresentação fechada" }, { id: "b", text: "Usando o efeito de animação de \"Caminho de Animação\" ou \"Trajetória\"" }, { id: "c", text: "Clicando em Salvar Como" }, { id: "d", text: "Usando transições de slides" } ], correctOptionId: "b" },
      { id: 6, question: "Para organizar slides em blocos ou grupos temáticos na barra lateral, usamos o recurso de:", options: [ { id: "a", text: "Seções" }, { id: "b", text: "Tabelas" }, { id: "c", text: "Formas" }, { id: "d", text: "Comentários" } ], correctOptionId: "a" },
      { id: 7, question: "O que é a \"Visualização do Apresentador\"?", options: [ { id: "a", text: "A tela que a plateia vê no projetor" }, { id: "b", text: "Uma tela especial para quem está apresentando, que mostra o slide atual, o próximo e as anotações" }, { id: "c", text: "O modo de edição padrão do PowerPoint" }, { id: "d", text: "Um site para compartilhar slides online" } ], correctOptionId: "b" },
      { id: 8, question: "Como podemos alinhar perfeitamente vários objetos (como imagens ou formas) em um slide?", options: [ { id: "a", text: "Movendo um por um no olho" }, { id: "b", text: "Selecionando todos e usando a opção Organizar > Alinhar" }, { id: "c", text: "Aumentando o zoom para 500%" }, { id: "d", text: "Excluindo os objetos e inserindo novamente" } ], correctOptionId: "b" },
      { id: 9, question: "Se quisermos que um efeito aconteça somente quando clicarmos em um botão ou objeto específico no slide, configuramos um:", options: [ { id: "a", text: "Gatilho (Trigger)" }, { id: "b", text: "Hiperlink" }, { id: "c", text: "Slide Mestre" }, { id: "d", text: "Efeito de Saída" } ], correctOptionId: "a" },
      { id: 10, question: "O que significa \"Loop\" em uma apresentação de slides configurada para quiosque?", options: [ { id: "a", text: "A apresentação para após o último slide" }, { id: "b", text: "A apresentação reinicia automaticamente do primeiro slide após o último terminar" }, { id: "c", text: "Os slides são exibidos de trás para frente" }, { id: "d", text: "A apresentação é apagada automaticamente" } ], correctOptionId: "b" },
      { id: 11, question: "Em qual formato salvamos a apresentação para que ela abra diretamente no modo apresentação (sem mostrar o editor do PowerPoint)?", options: [ { id: "a", text: ".ppsx (Apresentação de Slides do PowerPoint)" }, { id: "b", text: ".potx (Modelo do PowerPoint)" }, { id: "c", text: ".pdf" }, { id: "d", text: ".rtf" } ], correctOptionId: "a" },
      { id: 12, question: "O painel de seleção lateral do PowerPoint serve para:", options: [ { id: "a", text: "Escolher cores para a apresentação" }, { id: "b", text: "Listar, ocultar e organizar a ordem das camadas de todos os objetos do slide atual" }, { id: "c", text: "Excluir arquivos do computador" }, { id: "d", text: "Pesquisar imagens no Google" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a utilidade do \"Slide Mestre\" e como ele facilita o trabalho em grandes apresentações." },
      { id: 14, question: "Qual é a vantagem de usar a \"Visualização do Apresentador\" durante uma palestra ou trabalho escolar?" },
      { id: 15, question: "Como as \"Anotações do Apresentador\" ajudam na hora de expor um trabalho?" },
      { id: 16, question: "Por que o formato `.ppsx` é melhor do que o `.pptx` quando você vai enviar sua apresentação final para ser exibida por outra pessoa?" }
    ]
  },

  // ===================================================================
  // GOOGLE CHROME
  // ===================================================================
  {
    id: 'chrome-1',
    title: 'Google Chrome - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre navegação na internet usando o Google Chrome.',
    password: 'IEPOP',
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
    id: 'chrome-2',
    title: 'Google Chrome - Nível 2',
    description: 'Teste seus conhecimentos intermediários no Chrome. Navegação anônima, gerenciamento de downloads, favoritos, extensões e atalhos úteis.',
    password: 'IEPOP',
    iconType: 'chrome',
    objectiveQuestions: [
      { id: 1, question: "Para que serve a \"Navegação Anônima\" (ou Janela Anônima) no Google Chrome?", options: [ { id: "a", text: "Para acessar a internet sem precisar de internet" }, { id: "b", text: "Para navegar sem salvar histórico, cookies ou dados de formulários no computador" }, { id: "c", text: "Para esconder o computador fisicamente de outras pessoas" }, { id: "d", text: "Para baixar arquivos de graça sem pagar" } ], correctOptionId: "b" },
      { id: 2, question: "Qual atalho de teclado abre uma nova janela anônima no Chrome?", options: [ { id: "a", text: "Ctrl + N" }, { id: "b", text: "Ctrl + Shift + N" }, { id: "c", text: "Ctrl + T" }, { id: "d", text: "Ctrl + H" } ], correctOptionId: "b" },
      { id: 3, question: "Qual atalho de teclado abre uma nova aba no navegador?", options: [ { id: "a", text: "Ctrl + N" }, { id: "b", text: "Ctrl + T" }, { id: "c", text: "Ctrl + W" }, { id: "d", text: "Ctrl + J" } ], correctOptionId: "b" },
      { id: 4, question: "O que acontece se você pressionar as teclas Ctrl + Shift + T no Chrome?", options: [ { id: "a", text: "Abre o histórico de downloads" }, { id: "b", text: "Reabre a última aba que foi fechada por engano" }, { id: "c", text: "Fecha o navegador completamente" }, { id: "d", text: "Limpa todos os dados de navegação" } ], correctOptionId: "b" },
      { id: 5, question: "O que são as \"Extensões\" no Google Chrome?", options: [ { id: "a", text: "Cabos para conectar o computador na internet" }, { id: "b", text: "Pequenos programas adicionais que adicionam novas funções e recursos ao navegador" }, { id: "c", text: "Vírus que aumentam a velocidade da tela" }, { id: "d", text: "Páginas de ajuda oficial do Google" } ], correctOptionId: "b" },
      { id: 6, question: "Onde ficam guardados os arquivos que você baixa da internet por padrão?", options: [ { id: "a", text: "Na pasta Documentos" }, { id: "b", text: "Na pasta Downloads" }, { id: "c", text: "Na Lixeira do Windows" }, { id: "d", text: "Na área de trabalho" } ], correctOptionId: "b" },
      { id: 7, question: "Como podemos exibir ou ocultar a \"Barra de Favoritos\" abaixo da barra de endereço?", options: [ { id: "a", text: "Ctrl + Shift + B" }, { id: "b", text: "Ctrl + Shift + Delete" }, { id: "c", text: "Ctrl + H" }, { id: "d", text: "Alt + F4" } ], correctOptionId: "a" },
      { id: 8, question: "Para limpar os dados de navegação (como histórico de sites visitados e cache), usamos o atalho:", options: [ { id: "a", text: "Ctrl + J" }, { id: "b", text: "Ctrl + Shift + Delete" }, { id: "c", text: "Ctrl + P" }, { id: "d", text: "Ctrl + F" } ], correctOptionId: "b" },
      { id: 9, question: "Qual atalho de teclado abre a página com o Histórico de navegação do Chrome?", options: [ { id: "a", text: "Ctrl + H" }, { id: "b", text: "Ctrl + J" }, { id: "c", text: "Ctrl + K" }, { id: "d", text: "Ctrl + D" } ], correctOptionId: "a" },
      { id: 10, question: "Qual atalho de teclado abre a página que mostra todos os seus Downloads recentes?", options: [ { id: "a", text: "Ctrl + H" }, { id: "b", text: "Ctrl + J" }, { id: "c", text: "Ctrl + D" }, { id: "d", text: "Ctrl + N" } ], correctOptionId: "b" },
      { id: 11, question: "Se quisermos buscar uma palavra específica dentro de uma página que estamos lendo, usamos o atalho:", options: [ { id: "a", text: "Ctrl + S" }, { id: "b", text: "Ctrl + F" }, { id: "c", text: "Ctrl + R" }, { id: "d", text: "Ctrl + A" } ], correctOptionId: "b" },
      { id: 12, question: "O que faz o botão com o ícone de uma estrela ao lado da barra de endereços?", options: [ { id: "a", text: "Fecha a aba atual" }, { id: "b", text: "Salva a página atual nos Favoritos" }, { id: "c", text: "Atualiza a página" }, { id: "d", text: "Ativa o antivírus" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique em quais situações é útil usar a \"Janela Anônima\" e o que ela NÃO protege (como rastreamento do site ou da escola)." },
      { id: 14, question: "Descreva a utilidade de instalar \"Extensões\" no Google Chrome e dê um exemplo de extensão que você conheça ou ache útil." },
      { id: 15, question: "Se você fechar uma aba sem querer, como pode reabri-la rapidamente? Explique o atalho." },
      { id: 16, question: "Por que é importante limpar o histórico de navegação e o cache de tempos em tempos?" }
    ]
  },
  {
    id: 'chrome-3',
    title: 'Google Chrome - Nível 3',
    description: 'Teste seus conhecimentos avançados no Chrome. Cookies, cache do navegador, perfis de usuário, sincronização em nuvem e ferramentas do desenvolvedor (F12).',
    password: 'IEPOP',
    iconType: 'chrome',
    objectiveQuestions: [
      { id: 1, question: "O que são os \"Cookies\" armazenados pelo Google Chrome?", options: [ { id: "a", text: "Vírus que roubam fotos do computador" }, { id: "b", text: "Arquivos criados pelos sites para salvar informações da sua visita e preferências" }, { id: "c", text: "Jogos escondidos no navegador" }, { id: "d", text: "Programas que estendem a tela do computador" } ], correctOptionId: "b" },
      { id: 2, question: "O que é o \"Cache\" do navegador e qual sua função?", options: [ { id: "a", text: "O dinheiro que pagamos para usar a internet" }, { id: "b", text: "Cópias temporárias de imagens e arquivos de páginas da web salvos para acelerar os carregamentos futuros" }, { id: "c", text: "Um vírus que trava o navegador" }, { id: "d", text: "A senha de acesso ao roteador" } ], correctOptionId: "b" },
      { id: 3, question: "Para que serve a ferramenta \"Inspecionar\" (Developer Tools) no Chrome?", options: [ { id: "a", text: "Para consertar o hardware do computador" }, { id: "b", text: "Para visualizar e testar o código HTML, CSS e JavaScript de uma página da web" }, { id: "c", text: "Para apagar vírus das páginas" }, { id: "d", text: "Para aumentar a velocidade da internet" } ], correctOptionId: "b" },
      { id: 4, question: "Como você pode gerenciar ou remover extensões instaladas no Chrome?", options: [ { id: "a", text: "Excluindo o ícone do Chrome da área de trabalho" }, { id: "b", text: "Clicando no ícone de quebra-cabeça > Gerenciar Extensões" }, { id: "c", text: "Desligando o modem de internet" }, { id: "d", text: "Formatando o sistema operacional" } ], correctOptionId: "b" },
      { id: 5, question: "O recurso \"Gerenciador de Senhas\" integrado ao Chrome serve para:", options: [ { id: "a", text: "Criar senhas que qualquer pessoa pode ver" }, { id: "b", text: "Salvar e preencher automaticamente as senhas de sites que você acessa" }, { id: "c", text: "Impedir que você entre nos sites" }, { id: "d", text: "Gerar senhas de Wi-Fi" } ], correctOptionId: "b" },
      { id: 6, question: "Como podemos criar diferentes perfis de usuário no Chrome?", options: [ { id: "a", text: "Comprando outro computador" }, { id: "b", text: "Clicando no ícone de perfil no canto superior direito > Adicionar perfil" }, { id: "c", text: "Instalando o antivírus" }, { id: "d", text: "Clicando com o botão direito na barra de tarefas" } ], correctOptionId: "b" },
      { id: 7, question: "O que acontece quando você ativa a \"Sincronização\" no Chrome com a sua conta Google?", options: [ { id: "a", text: "O computador trava" }, { id: "b", text: "Seus favoritos, histórico e senhas ficam disponíveis em outros dispositivos (celular, outro PC) que tenham sua conta" }, { id: "c", text: "Todos os seus dados são excluídos permanentemente" }, { id: "d", text: "A internet fica gratuita" } ], correctOptionId: "b" },
      { id: 8, question: "Qual protocolo na barra de endereços (representado por um cadeado fechado) indica que a conexão com o site é segura e criptografada?", options: [ { id: "a", text: "http://" }, { id: "b", text: "https://" }, { id: "c", text: "ftp://" }, { id: "d", text: "www://" } ], correctOptionId: "b" },
      { id: 9, question: "Se o Chrome estiver consumindo muita memória ou travando, qual ferramenta interna podemos usar para ver quais abas estão pesadas?", options: [ { id: "a", text: "Bloco de Notas" }, { id: "b", text: "Gerenciador de Tarefas do Chrome (Shift + Esc)" }, { id: "c", text: "Painel de Controle do Windows" }, { id: "d", text: "Lixeira" } ], correctOptionId: "b" },
      { id: 10, question: "Onde podemos alterar a pasta padrão onde os downloads de arquivos são salvos no Chrome?", options: [ { id: "a", text: "Configurações > Downloads > Localização" }, { id: "b", text: "Histórico > Downloads > Limpar Tudo" }, { id: "c", text: "Guia Inserir > Pasta" }, { id: "d", text: "Não é possível alterar essa pasta" } ], correctOptionId: "a" },
      { id: 11, question: "O que é o \"DNS\" no contexto de navegação na internet?", options: [ { id: "a", text: "Um tipo de cabo de rede" }, { id: "b", text: "O sistema que traduz nomes de sites (como google.com) em números de IP" }, { id: "c", text: "Uma extensão para ver filmes" }, { id: "d", text: "O antivírus da rede" } ], correctOptionId: "b" },
      { id: 12, question: "O recurso \"Verificação de Segurança\" (Safety Check) nas configurações do Chrome serve para:", options: [ { id: "a", text: "Medir a velocidade de download da internet" }, { id: "b", text: "Verificar senhas expostas, status do navegador, extensões nocivas e proteção de navegação" }, { id: "c", text: "Deixar o Chrome em modo noturno" }, { id: "d", text: "Limpar a lixeira do computador" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "Explique a diferença entre HTTP e HTTPS e por que o HTTPS é importante ao fazer compras online." },
      { id: 14, question: "Descreva a utilidade de criar diferentes \"Perfis de Usuário\" no mesmo navegador Chrome." },
      { id: 15, question: "O que são os cookies e por que alguns sites perguntam se você aceita ou não o uso deles?" },
      { id: 16, question: "Para que serve o Gerenciador de Senhas do Chrome e qual cuidado devemos ter ao salvar senhas em computadores públicos?" }
    ]
  },

  // ===================================================================
  // ANTIVÍRUS MALWAREBYTES
  // ===================================================================
  {
    id: 'antivirus-1',
    title: 'Antivírus Malwarebytes - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre segurança digital e uso do antivírus Malwarebytes.',
    password: 'IEPOP',
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
  },
  {
    id: 'antivirus-2',
    title: 'Antivírus Malwarebytes - Nível 2',
    description: 'Teste seus conhecimentos intermediários sobre segurança digital. Phishing, cavalos de troia, ransomware, uso de pendrives infectados, quarentena e firewalls.',
    password: 'IEPOP',
    iconType: 'antivirus',
    objectiveQuestions: [
      { id: 1, question: "O que faz a proteção em tempo real de um antivírus como o Malwarebytes Premium?", options: [ { id: "a", text: "Faz varreduras apenas quando você liga o computador" }, { id: "b", text: "Bloqueia vírus e malwares ativamente no momento em que tentam entrar no computador" }, { id: "c", text: "Limpa a poeira física das peças do computador" }, { id: "d", text: "Aumenta a velocidade dos jogos automaticamente" } ], correctOptionId: "b" },
      { id: 2, question: "Qual a principal diferença entre um vírus e um ransomware?", options: [ { id: "a", text: "O vírus espalha boatos e o ransomware é um jogo" }, { id: "b", text: "O ransomware sequestra e criptografa arquivos pessoais exigindo resgate; o vírus se espalha e danifica o sistema" }, { id: "c", text: "O vírus é seguro e o ransomware é prejudicial" }, { id: "d", text: "Não há diferença, são exatamente iguais" } ], correctOptionId: "b" },
      { id: 3, question: "O que é phishing na internet?", options: [ { id: "a", text: "Um tipo de jogo de pescaria online" }, { id: "b", text: "Mensagens ou sites falsos que se passam por bancos ou marcas famosas para roubar senhas e dados" }, { id: "c", text: "O download de músicas gratuitas" }, { id: "d", text: "O cabo que liga o modem ao computador" } ], correctOptionId: "b" },
      { id: 4, question: "Se você conectar um Pen Drive de um amigo no seu computador, qual é a atitude mais segura a tomar?", options: [ { id: "a", text: "Abrir e executar todos os arquivos imediatamente" }, { id: "b", text: "Clicar com o botão direito no Pen Drive e fazer uma verificação de vírus (Scan) antes de abrir" }, { id: "c", text: "Formatar o computador inteiro" }, { id: "d", text: "Copiar todo o conteúdo para a Área de Trabalho" } ], correctOptionId: "b" },
      { id: 5, question: "O que é um \"Cavalo de Troia\" (Trojan) na segurança digital?", options: [ { id: "a", text: "Um vírus que melhora a velocidade do Windows" }, { id: "b", text: "Um arquivo disfarçado de programa útil ou jogo, mas que esconde um malware por trás" }, { id: "c", text: "Uma apresentação de slides histórica do PowerPoint" }, { id: "d", text: "Uma extensão de navegador para ver mapas" } ], correctOptionId: "b" },
      { id: 6, question: "Por que o Malwarebytes pode solicitar que você reinicie o computador após remover uma ameaça?", options: [ { id: "a", text: "Para apagar todos os seus documentos pessoais" }, { id: "b", text: "Para garantir que arquivos infectados na memória do sistema sejam completamente removidos durante a inicialização" }, { id: "c", text: "Para instalar jogos recomendados pelo programa" }, { id: "d", text: "Para atualizar a versão do Windows automaticamente" } ], correctOptionId: "b" },
      { id: 7, question: "Além do antivírus, qual recurso do Windows ajuda a bloquear acessos não autorizados vindo da rede/internet?", options: [ { id: "a", text: "Bloco de Notas" }, { id: "b", text: "Firewall" }, { id: "c", text: "Paint" }, { id: "d", text: "Desfragmentador de Disco" } ], correctOptionId: "b" },
      { id: 8, question: "O que indica quando o Malwarebytes avisa que um programa foi adicionado à \"Quarentena\"?", options: [ { id: "a", text: "O programa foi excluído para sempre e não pode ser recuperado" }, { id: "b", text: "O programa suspeito foi isolado em uma pasta segura para não infectar o computador" }, { id: "c", text: "O programa foi atualizado para a versão mais recente" }, { id: "d", text: "O programa foi enviado para o e-mail do suporte" } ], correctOptionId: "b" },
      { id: 9, question: "Qual destas é a senha mais segura contra invasores?", options: [ { id: "a", text: "123456" }, { id: "b", text: "senha123" }, { id: "c", text: "G#9p!2xQ$d" }, { id: "d", text: "o_nome_do_usuario" } ], correctOptionId: "c" },
      { id: 10, question: "O que significa \"Adwares\"?", options: [ { id: "a", text: "Programas criados para apresentar anúncios publicitários indesejados e invasivos na tela" }, { id: "b", text: "Equipamentos físicos do computador" }, { id: "c", text: "Sites para enviar mensagens de voz" }, { id: "d", text: "Slides com efeitos em 3D" } ], correctOptionId: "a" },
      { id: 11, question: "Se o Malwarebytes está instalado na versão Free (Gratuita), qual ação você precisa fazer manualmente?", options: [ { id: "a", text: "Nada, ele faz tudo sozinho" }, { id: "b", text: "Abrir o programa e iniciar a verificação (Scan) de tempos em tempos manualmente" }, { id: "c", text: "Pagar uma taxa a cada verificação realizada" }, { id: "d", text: "Desinstalar o Windows para funcionar" } ], correctOptionId: "b" },
      { id: 12, question: "O que é um \"Spyware\"?", options: [ { id: "a", text: "Um jogo de espionagem" }, { id: "b", text: "Um malware projetado para monitorar e roubar informações do que você digita ou acessa" }, { id: "c", text: "Um programa para acelerar o download" }, { id: "d", text: "Um tipo de slide do PowerPoint" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "O que é o \"Ransomware\" e por que ele é considerado uma das ameaças mais perigosas atualmente?" },
      { id: 14, question: "Explique o que é \"Phishing\" e dê um exemplo de como um criminoso tenta enganar uma pessoa por e-mail ou WhatsApp." },
      { id: 15, question: "Qual a diferença entre a proteção de um Firewall e a de um Antivírus?" },
      { id: 16, question: "Por que não devemos usar a mesma senha para todas as nossas contas (e-mail, redes sociais, escola)?" }
    ]
  },
  {
    id: 'antivirus-3',
    title: 'Antivírus Malwarebytes - Nível 3',
    description: 'Teste seus conhecimentos avançados de segurança digital. Engenharia social, falsos positivos, exploits de dia zero, verificação heurística e keyloggers.',
    password: 'IEPOP',
    iconType: 'antivirus',
    objectiveQuestions: [
      { id: 1, question: "O que é um \"Falso Positivo\" no contexto de um antivírus?", options: [ { id: "a", text: "Um vírus real que o antivírus finge que não existe" }, { id: "b", text: "Um arquivo legítimo e seguro que o antivírus identifica incorretamente como uma ameaça" }, { id: "c", text: "O resultado de uma verificação rápida" }, { id: "d", text: "Um vírus que foi removido com sucesso" } ], correctOptionId: "b" },
      { id: 2, question: "Se você tem certeza de que um arquivo é seguro, mas o Malwarebytes continua bloqueando-o, o que você deve fazer?", options: [ { id: "a", text: "Desinstalar o antivírus para sempre" }, { id: "b", text: "Adicionar o arquivo à lista de \"Exclusões\" ou \"Ignorar\" nas configurações do antivírus" }, { id: "c", text: "Mudar o nome do arquivo para \"virus.exe\"" }, { id: "d", text: "Excluir o arquivo" } ], correctOptionId: "b" },
      { id: 3, question: "O que é a ferramenta \"Malwarebytes Browser Guard\"?", options: [ { id: "a", text: "Um navegador de internet próprio do Malwarebytes" }, { id: "b", text: "Uma extensão de navegador gratuita que bloqueia anúncios, rastreadores e sites de phishing" }, { id: "c", text: "Um jogo de segurança cibernética" }, { id: "d", text: "Um cabo de rede protegido contra poeira" } ], correctOptionId: "b" },
      { id: 4, question: "O que é um ataque do tipo \"Exploit\"?", options: [ { id: "a", text: "Uma mensagem de e-mail maliciosa" }, { id: "b", text: "Um ataque que se aproveita de falhas ou vulnerabilidades de segurança em programas desatualizados para invadir o sistema" }, { id: "c", text: "Um vírus que desliga o monitor do computador" }, { id: "d", text: "Um tipo de tabela no Word" } ], correctOptionId: "b" },
      { id: 5, question: "Qual atitude ajuda a proteger o computador contra ataques de \"Exploits\"?", options: [ { id: "a", text: "Deixar todos os programas na versão mais antiga" }, { id: "b", text: "Manter o Sistema Operacional e todos os softwares instalados sempre atualizados" }, { id: "c", text: "Desativar o antivírus durante o dia" }, { id: "d", text: "Excluir o histórico do navegador diariamente" } ], correctOptionId: "b" },
      { id: 6, question: "O que significa \"Assinatura de Vírus\" no banco de dados de um antivírus?", options: [ { id: "a", text: "O autógrafo do criador do programa" }, { id: "b", text: "Um código de identificação que permite ao antivírus reconhecer um vírus específico já conhecido" }, { id: "c", text: "A licença de compra do programa Malwarebytes" }, { id: "d", text: "A senha do usuário administrador" } ], correctOptionId: "b" },
      { id: 7, question: "O que é uma verificação heurística no antivírus?", options: [ { id: "a", text: "Uma análise rápida que só olha o nome dos arquivos" }, { id: "b", text: "Um método que analisa o comportamento e estrutura de um arquivo para detectar vírus novos ainda desconhecidos" }, { id: "c", text: "Uma limpeza física dos componentes internos" }, { id: "d", text: "O envio de arquivos suspeitos para a lixeira" } ], correctOptionId: "b" },
      { id: 8, question: "O que faz um \"Keylogger\"?", options: [ { id: "a", text: "Um programa que organiza arquivos de texto por ordem alfabética" }, { id: "b", text: "Um tipo de malware que registra e grava tudo o que o usuário digita no teclado para roubar senhas" }, { id: "c", text: "Uma tecla de atalho do PowerPoint" }, { id: "d", text: "Uma ferramenta de pesquisa do Google Chrome" } ], correctOptionId: "b" },
      { id: 9, question: "A \"Proteção Web\" do Malwarebytes serve para:", options: [ { id: "a", text: "Aumentar a velocidade do Wi-Fi" }, { id: "b", text: "Impedir que você acesse sites conhecidos por distribuir malwares ou golpes" }, { id: "c", text: "Baixar arquivos de música mais rápido" }, { id: "d", text: "Criar apresentações de slides online" } ], correctOptionId: "b" },
      { id: 10, question: "O que é a \"Engenharia Social\"?", options: [ { id: "a", text: "O desenvolvimento de novas redes sociais" }, { id: "b", text: "Técnicas de manipulação psicológica para fazer as pessoas revelarem senhas ou dados confidenciais" }, { id: "c", text: "A construção de computadores mais rápidos" }, { id: "d", text: "O curso superior para aprender a programar antivírus" } ], correctOptionId: "b" },
      { id: 11, question: "Se o Malwarebytes Premium alertar sobre um \"Bloqueio de IP\", isso significa que:", options: [ { id: "a", text: "Sua internet foi cancelada pelo provedor" }, { id: "b", text: "Um programa do seu PC tentou se conectar ou recebeu conexões de um servidor perigoso na web" }, { id: "c", text: "A senha do seu roteador está incorreta" }, { id: "d", text: "O monitor do computador vai quebrar em breve" } ], correctOptionId: "b" },
      { id: 12, question: "O que caracteriza uma ameaça do tipo \"Zero-Day\" (Dia Zero)?", options: [ { id: "a", text: "Um vírus que expira após 24 horas" }, { id: "b", text: "Uma vulnerabilidade de segurança recém-descoberta para a qual ainda não existe correção ou vacina" }, { id: "c", text: "Uma verificação que dura zero minutos" }, { id: "d", text: "O antivírus na versão gratuita" } ], correctOptionId: "b" }
    ],
    discursiveQuestions: [
      { id: 13, question: "O que é uma ameaça do tipo \"Zero-Day\" (Dia Zero) e por que ela é difícil de ser detectada por métodos tradicionais?" },
      { id: 14, question: "Explique o conceito de \"Heurística\" no funcionamento dos antivírus modernos." },
      { id: 15, question: "O que é um \"Falso Positivo\" e qual procedimento correto devemos fazer no Malwarebytes para usar o programa legítimo bloqueado?" },
      { id: 16, question: "Descreva como funciona um malware do tipo \"Keylogger\" e qual o principal perigo de ter um instalado no computador." }
    ]
  },

  // ===================================================================
  // CANVA
  // ===================================================================
  {
    id: 'canva-1',
    title: 'Canva - Nível 1',
    description: 'Teste seus conhecimentos básicos sobre o Canva: criação de conta, busca de templates, edição de textos, inserção de elementos e exportação de designs.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que é o Canva?", options: [ { id: "a", text: "Um editor de design gráfico fácil de usar que roda direto no navegador" }, { id: "b", text: "Um programa para programar robôs e automações" }, { id: "c", text: "Um sistema operacional para computadores de mesa" }, { id: "d", text: "Um antivírus focado em segurança de redes" } ], correctOptionId: "a" },
      { id: 2, question: "Qual é o principal benefício de usar o Canva para quem não é designer profissional?", options: [ { id: "a", text: "Oferecer milhares de modelos (templates) prontos e fáceis de editar" }, { id: "b", text: "Escrever textos automáticos no Word" }, { id: "c", text: "Editar códigos de programação em C++" }, { id: "d", text: "Aumentar o espaço de armazenamento do disco rígido" } ], correctOptionId: "a" },
      { id: 3, question: "Para começar a usar o Canva, o que é necessário fazer primeiro?", options: [ { id: "a", text: "Criar uma conta usando um e-mail ou conta Google/Facebook" }, { id: "b", text: "Comprar um computador superpotente gamer" }, { id: "c", text: "Fazer um curso de programação avançada" }, { id: "d", text: "Instalar o Linux no computador" } ], correctOptionId: "a" },
      { id: 4, question: "Para que serve a barra de pesquisa na página inicial do Canva?", options: [ { id: "a", text: "Para encontrar modelos prontos de designs como cartazes, logotipos ou posts" }, { id: "b", text: "Para pesquisar sites no Google" }, { id: "c", text: "Para buscar vírus no computador" }, { id: "d", text: "Para formatar o computador" } ], correctOptionId: "a" },
      { id: 5, question: "Se você quiser adicionar uma caixa de texto ao seu design, qual guia você deve usar no painel lateral?", options: [ { id: "a", text: "Texto" }, { id: "b", text: "Elementos" }, { id: "c", text: "Uploads" }, { id: "d", text: "Desenho" } ], correctOptionId: "a" },
      { id: 6, question: "Como você pode mudar a cor de um elemento ou texto selecionado no Canva?", options: [ { id: "a", text: "Clicando no quadrado colorido que aparece na barra de ferramentas superior" }, { id: "b", text: "Mudando a senha do seu usuário do Canva" }, { id: "c", text: "Reiniciando o navegador Google Chrome" }, { id: "d", text: "Clicando no botão de salvar do computador" } ], correctOptionId: "a" },
      { id: 7, question: "O que encontramos na guia \"Elementos\" do Canva?", options: [ { id: "a", text: "Figuras, formas geométricas, adesivos, linhas, fotos e gráficos" }, { id: "b", text: "Instaladores de programas de terceiros" }, { id: "c", text: "O histórico de navegação do seu Chrome" }, { id: "d", text: "Pastas de arquivos do seu Windows" } ], correctOptionId: "a" },
      { id: 8, question: "Para aumentar ou diminuir o tamanho de uma imagem no design sem distorcê-la, o correto é:", options: [ { id: "a", text: "Clicar e arrastar um dos círculos localizados nos cantos da imagem" }, { id: "b", text: "Esticar apenas a borda lateral direita com muita força" }, { id: "c", text: "Recortar a foto pela metade na guia Ajustar" }, { id: "d", text: "Excluir o elemento e inseri-lo de novo com o tamanho diferente" } ], correctOptionId: "a" },
      { id: 9, question: "Qual botão no canto superior direito usamos para baixar o nosso design finalizado?", options: [ { id: "a", text: "Compartilhar e depois a opção Baixar" }, { id: "b", text: "Criar novo modelo" }, { id: "c", text: "Apresentar em tela cheia" }, { id: "d", text: "Excluir design" } ], correctOptionId: "a" },
      { id: 10, question: "Qual formato é mais recomendado para exportar um design de imagem estática simples?", options: [ { id: "a", text: "PNG ou JPG" }, { id: "b", text: "MP3 ou WAV" }, { id: "c", text: "HTML ou CSS" }, { id: "d", text: "EXE ou MSI" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique com suas palavras o que é o Canva e cite pelo menos dois tipos de artes que podemos criar nele." },
      { id: 12, question: "O que são os \"modelos\" (templates) do Canva e como eles ajudam quem não tem experiência em criar designs?" },
      { id: 13, question: "Descreva o passo a passo para alterar a cor e o tamanho de um texto que você acabou de adicionar em um design no Canva." }
    ]
  },
  {
    id: 'canva-2',
    title: 'Canva - Nível 2',
    description: 'Teste seus conhecimentos intermediários sobre o Canva: uploads de mídias, agrupamento, controle de camadas, transparência, grades de design e colaboração.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que significa fazer um \"Upload\" no Canva?", options: [ { id: "a", text: "Enviar fotos, vídeos ou áudios do seu próprio dispositivo para usar nos seus designs" }, { id: "b", text: "Baixar o design pronto para a pasta de Downloads do seu PC" }, { id: "c", text: "Excluir imagens antigas salvas na sua conta" }, { id: "d", text: "Compartilhar o design publicamente nas redes sociais" } ], correctOptionId: "a" },
      { id: 2, question: "Como podemos agrupar dois ou mais elementos para que eles se movam ou sejam dimensionados juntos?", options: [ { id: "a", text: "Selecionando todos os elementos juntos e clicando no botão \"Agrupar\"" }, { id: "b", text: "Colocando todos na mesma cor de fundo" }, { id: "c", text: "Excluindo um dos elementos e colando por cima" }, { id: "d", text: "Dando dois cliques em cada um dos elementos rapidamente" } ], correctOptionId: "a" },
      { id: 3, question: "Se você inseriu uma imagem e ela cobriu um texto, qual recurso você usa para organizar as posições?", options: [ { id: "a", text: "Clicar em Posição e escolher Recuar ou Enviar para trás" }, { id: "b", text: "Apagar o texto e escrevê-lo na imagem antes de subir" }, { id: "c", text: "Diminuir a transparência da imagem para 0%" }, { id: "d", text: "Trocar a cor do texto para branco" } ], correctOptionId: "a" },
      { id: 4, question: "Para que serve o controle de \"Transparência\" (ícone quadriculado) no Canva?", options: [ { id: "a", text: "Para alterar a opacidade do elemento, tornando-o mais ou menos visível" }, { id: "b", text: "Para apagar a imagem de forma definitiva" }, { id: "c", text: "Para salvar a imagem in formato transparente PNG" }, { id: "d", text: "Para alterar a cor de preenchimento do texto" } ], correctOptionId: "a" },
      { id: 5, question: "Como funcionam as \"Grades\" (Grids) e \"Quadros\" (Frames) de fotos no Canva?", options: [ { id: "a", text: "Recortam e adaptam automaticamente as fotos arrastadas para dentro deles no formato correto" }, { id: "b", text: "Bloqueiam o design para que ninguém mais edite" }, { id: "c", text: "Adicionam molduras coloridas de neon ao redor do design" }, { id: "d", text: "Reduzem o tamanho do arquivo final automaticamente" } ], correctOptionId: "a" },
      { id: 6, question: "Qual atalho de teclado ou botão permite duplicar rapidamente um elemento selecionado?", options: [ { id: "a", text: "Ctrl + D (ou botão Duplicar)" }, { id: "b", text: "Ctrl + Z" }, { id: "c", text: "Ctrl + X" }, { id: "d", text: "Alt + F4" } ], correctOptionId: "a" },
      { id: 7, question: "Para aplicar efeitos de estilo em um texto (como Sombreado, Flutuante ou Contorno), usamos:", options: [ { id: "a", text: "Selecionar o texto e clicar em Efeitos na barra superior" }, { id: "b", text: "Ir na aba Desenhar e pintar à mão" }, { id: "c", text: "Mudar a fonte do texto para Arial Black" }, { id: "d", text: "Baixar o texto e reenviá-lo como imagem" } ], correctOptionId: "a" },
      { id: 8, question: "Como você compartilha um design para que outra pessoa possa editar em tempo real com você?", options: [ { id: "a", text: "Clica em Compartilhar, digita o e-mail dela ou ativa o link de colaboração com permissão de edição" }, { id: "b", text: "Salva o arquivo em PDF e envia pelo WhatsApp" }, { id: "c", text: "Tira um print screen da tela e envia por e-mail" }, { id: "d", text: "Baixa o arquivo como vídeo MP4" } ], correctOptionId: "a" },
      { id: 9, question: "Para reverter rapidamente uma alteração indesejada (como deletar algo sem querer), o atalho correto é:", options: [ { id: "a", text: "Ctrl + Z (Desfazer)" }, { id: "b", text: "Ctrl + C (Copiar)" }, { id: "c", text: "Ctrl + Y (Refazer)" }, { id: "d", text: "Ctrl + S (Salvar)" } ], correctOptionId: "a" },
      { id: 10, question: "Qual formato de arquivo do Canva é o mais indicado para impressão física profissional?", options: [ { id: "a", text: "PDF para impressão" }, { id: "b", text: "PNG em baixa resolução" }, { id: "c", text: "Vídeo MP4" }, { id: "d", text: "GIF animado" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique a diferença prática entre fazer um \"Upload\" no Canva e escolher um item da biblioteca de \"Elementos\"." },
      { id: 12, question: "Como a ferramenta \"Posição\" (enviar para trás/trazer para frente) ajuda a organizar as camadas de um design complexo?" },
      { id: 13, question: "Descreva uma situação na escola ou no trabalho em que seria útil usar a opção de compartilhar o design para edição colaborativa." }
    ]
  },
  {
    id: 'canva-3',
    title: 'Canva - Nível 3',
    description: 'Teste seus conhecimentos avançados no Canva Pro: Kits de Marca, removedor de fundo, animações, apresentações interativas e exportações avançadas.',
    password: 'IEPOP',
    iconType: 'canva',
    objectiveQuestions: [
      { id: 1, question: "O que é o \"Kit de Marca\" (Brand Kit) disponível no Canva Pro?", options: [ { id: "a", text: "Um painel para salvar fontes, logotipos e paletas de cores oficiais de uma marca ou instituição" }, { id: "b", text: "Uma pasta com jogos e passatempos criados por designers" }, { id: "c", text: "Um kit físico com canetas e papéis que o Canva envia para a sua casa" }, { id: "d", text: "Um antivírus integrado que protege os arquivos do Canva" } ], correctOptionId: "a" },
      { id: 2, question: "Como funciona a ferramenta \"Removedor de Fundo\" (Background Remover) no Canva Pro?", options: [ { id: "a", text: "Identifica e apaga automaticamente o fundo de fotos com inteligência artificial" }, { id: "b", text: "Muda a cor de fundo de todos os slides para preto" }, { id: "c", text: "Remove as páginas duplicadas do seu documento" }, { id: "d", text: "Exclui as imagens do seu computador" } ], correctOptionId: "a" },
      { id: 3, question: "Qual a diferença entre aplicar uma animação de \"Elemento\" e uma de \"Página\"?", options: [ { id: "a", text: "A de Elemento move apenas um objeto específico; a de Página aplica movimento a todos os elementos da página de uma só vez" }, { id: "b", text: "Não há diferença, ambas fazem a mesma coisa" }, { id: "c", text: "A de Elemento toca som; a de Página exibe legendas" }, { id: "d", text: "A de Página é gratuita e a de Elemento é paga" } ], correctOptionId: "a" },
      { id: 4, question: "Qual recurso do Canva Pro permite redimensionar um design pronto para vários formatos de forma inteligente e rápida?", options: [ { id: "a", text: "Redimensionamento Mágico (Magic Resizer)" }, { id: "b", text: "Recortar imagem automática" }, { id: "c", text: "Ajustar margens" }, { id: "d", text: "Duplicar página" } ], correctOptionId: "a" },
      { id: 5, question: "Como funciona a ferramenta Canva Live durante uma apresentação?", options: [ { id: "a", text: "Gera um link para que a audiência envie perguntas ou comentários em tempo real na tela do apresentador" }, { id: "b", text: "Transmite o design diretamente para a televisão da sala via antena" }, { id: "c", text: "Grava a tela do computador em formato de CD" }, { id: "d", text: "Muda o design do slide de forma aleatória" } ], correctOptionId: "a" },
      { id: 6, question: "A ferramenta de Planejador de Conteúdo (Content Planner) do Canva Pro serve para:", options: [ { id: "a", text: "Agendar a postagem automática de designs diretamente nas redes sociais" }, { id: "b", text: "Planejar as tarefas da escola com alarmes sonoros" }, { id: "c", text: "Fazer uma limpeza de arquivos no computador do usuário" }, { id: "d", text: "Organizar as fotos da sua galeria de uploads" } ], correctOptionId: "a" },
      { id: 7, question: "Ao baixar um arquivo em \"PDF para Impressão\", para que serve a opção de \"Marcas de corte e sangria\"?", options: [ { id: "a", text: "Indicar onde a guilhotina deve cortar o papel impresso, garantindo que o design não fique com bordas brancas" }, { id: "b", text: "Colocar marcas d'água de proteção contra cópias ilegais" }, { id: "c", text: "Reduzir o tamanho final do arquivo para caber no e-mail" }, { id: "d", text: "Adicionar numeração automática nas folhas da apresentação" } ], correctOptionId: "a" },
      { id: 8, question: "O que é o formato SVG no Canva e por que ele é recomendado para logotipos profissionais?", options: [ { id: "a", text: "É um formato de vetor que pode ser ampliado infinitamente sem perder a qualidade da imagem" }, { id: "b", text: "É um formato de arquivo de vídeo ultra-compactado" }, { id: "c", text: "É uma música instrumental padrão para apresentações" }, { id: "d", text: "É uma planilha de notas escolares criptografada" } ], correctOptionId: "a" },
      { id: 9, question: "Como a ferramenta de equipes (Canva Teams) melhora a produtividade corporativa?", options: [ { id: "a", text: "Permite criar pastas compartilhadas, templates de equipe e gerenciar permissões de cada usuário" }, { id: "b", text: "Gera relatórios de notas automáticas de alunos" }, { id: "c", text: "Bloqueia o acesso a sites de jogos durante o trabalho" }, { id: "d", text: "Envia mensagens de texto via SMS automáticas" } ], correctOptionId: "a" },
      { id: 10, question: "Se você criar um design que contém animações de texto e adesivos se movendo com música de fundo, o formato de download ideal é:", options: [ { id: "a", text: "Vídeo MP4" }, { id: "b", text: "PDF Padrão" }, { id: "c", text: "PNG estático" }, { id: "d", text: "SVG vetorial" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Descreva as vantagens de se ter um \"Kit de Marca\" (Brand Kit) configurado no Canva Pro quando se trabalha em equipe." },
      { id: 12, question: "Como funciona a ferramenta de \"Redimensionamento Mágico\" (Magic Switch/Resize) e qual economia de tempo ela gera para profissionais de marketing?" },
      { id: 13, question: "Explique a diferença entre salvar um design em formato \"PDF Padrão\" e \"PDF para Impressão\" e quando utilizar cada um." }
    ]
  },

  // ===================================================================
  // WINDOWS VS LINUX
  // ===================================================================
  {
    id: 'systems-1',
    title: 'Windows vs Linux - Nível 1',
    description: 'Aprenda os conceitos básicos de Sistemas Operacionais e as diferenças essenciais entre Microsoft Windows e Linux.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "O que é um Sistema Operacional (S.O.)?", options: [ { id: "a", text: "O software principal que gerencia o hardware e permite que outros programas rodem no computador" }, { id: "b", text: "Um programa exclusivo para acessar a internet no celular" }, { id: "c", text: "Um jogo de computador com gráficos em 3D" }, { id: "d", text: "Uma pasta onde guardamos documentos de texto do Word" } ], correctOptionId: "a" },
      { id: 2, question: "Qual empresa é a criadora e proprietária do sistema operacional Windows?", options: [ { id: "a", text: "Microsoft" }, { id: "b", text: "Google" }, { id: "c", text: "Apple" }, { id: "d", text: "Linux Foundation" } ], correctOptionId: "a" },
      { id: 3, question: "Qual das seguintes características define melhor o Linux em relação à sua licença e código-fonte?", options: [ { id: "a", text: "É um sistema de código aberto (Open Source) e gratuito para qualquer pessoa usar ou modificar" }, { id: "b", text: "É um sistema pago de uso exclusivo da Microsoft" }, { id: "c", text: "É um programa que só pode ser instalado em celulares da Apple" }, { id: "d", text: "É um sistema proibido para uso comercial" } ], correctOptionId: "a" },
      { id: 4, question: "O que é a Interface Gráfica de Usuário (GUI) presente tanto no Windows quanto no Linux?", options: [ { id: "a", text: "O uso de janelas, ícones, botões e mouse para facilitar o uso do computador" }, { id: "b", text: "A tela preta onde digitamos comandos de texto difíceis" }, { id: "c", text: "A placa física de circuitos dentro do gabinete" }, { id: "d", text: "O cabo de força que liga o computador na tomada" } ], correctOptionId: "a" },
      { id: 5, question: "Como o sistema Linux é distribuído para os usuários?", options: [ { id: "a", text: "Por meio de diferentes versões modificadas chamadas de \"Distribuições\" ou \"Distros\"" }, { id: "b", text: "Somente através de lojas físicas autorizadas da Apple" }, { id: "c", text: "Em um único CD vendido em bancas de jornal pela Microsoft" }, { id: "d", text: "Apenas para governos de alguns países de forma secreta" } ], correctOptionId: "a" },
      { id: 6, question: "Qual das seguintes alternativas é uma distribuição Linux muito popular e recomendada para iniciantes?", options: [ { id: "a", text: "Ubuntu" }, { id: "b", text: "Windows 11 Home" }, { id: "c", text: "Android Oreo" }, { id: "d", text: "macOS Sequoia" } ], correctOptionId: "a" },
      { id: 7, question: "Qual o formato de arquivo de instalação de programas mais tradicional no sistema Windows?", options: [ { id: "a", text: ".exe ou .msi" }, { id: "b", text: ".apk" }, { id: "c", text: ".pdf" }, { id: "d", text: ".docx" } ], correctOptionId: "a" },
      { id: 8, question: "No Windows, qual ferramenta padrão usamos para ver nossas pastas, documentos e organizar nossos arquivos?", options: [ { id: "a", text: "Explorador de Arquivos (antigo Windows Explorer)" }, { id: "b", text: "Painel de Controle" }, { id: "c", text: "Gerenciador de Tarefas" }, { id: "d", text: "Microsoft Word" } ], correctOptionId: "a" },
      { id: 9, question: "Qual é uma das principais diferenças comerciais entre o Windows e o Linux?", options: [ { id: "a", text: "O Windows exige uma licença paga para uso legal em cada computador, enquanto o Linux pode ser baixado e instalado gratuitamente" }, { id: "b", text: "O Linux só roda em computadores muito caros, e o Windows roda em qualquer um" }, { id: "c", text: "O Windows é proibido para empresas e o Linux é de uso apenas doméstico" }, { id: "d", text: "Não há diferença comercial alguma, ambos são pagos pelo mesmo preço" } ], correctOptionId: "a" },
      { id: 10, question: "Qual é o mascote oficial do Linux?", options: [ { id: "a", text: "Tux, um pinguim simpático" }, { id: "b", text: "Uma janela azul" }, { id: "c", text: "Um robô verde chamado Andy" }, { id: "d", text: "Uma maçã mordida" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Qual a diferença conceitual entre um software proprietário (como o Windows) e um de código aberto (como o Linux)?" },
      { id: 12, question: "O que são as distribuições Linux (ou distros)? Cite o nome de uma distro de Linux." },
      { id: 13, question: "Por que muitas pessoas que não entendem de informática preferem comprar computadores que já vêm com o sistema Windows instalado de fábrica?" }
    ]
  },
  {
    id: 'systems-2',
    title: 'Windows vs Linux - Nível 2',
    description: 'Compreenda os pontos fortes de cada sistema: por que o Windows domina os jogos e softwares de design, e por que o Linux domina a programação e os servidores.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "Por que o Windows é o sistema operacional mais recomendado e utilizado por jogadores de PC (gamers)?", options: [ { id: "a", text: "Pela enorme compatibilidade com drivers de placas de vídeo e suporte nativo ao DirectX da Microsoft" }, { id: "b", text: "Porque jogos de computador não rodam em sistemas com interface gráfica" }, { id: "c", text: "Porque o Windows é de graça para jogar jogos online" }, { id: "d", text: "Porque o Linux não suporta o uso de mouse e teclado" } ], correctOptionId: "a" },
      { id: 2, question: "Em qual das seguintes áreas o sistema operacional Linux é o mais utilizado e dominante no mundo?", options: [ { id: "a", text: "Servidores de internet, servidores de nuvem e supercomputadores" }, { id: "b", text: "Computadores de escritórios domésticos de contabilidade" }, { id: "c", text: "Estações de jogos de videogames de última geração" }, { id: "d", text: "Edição de documentos de texto escolares para impressão rápida" } ], correctOptionId: "a" },
      { id: 3, question: "O que é o \"Terminal\" (ou Linha de Comando) no Linux?", options: [ { id: "a", text: "Uma interface textual onde o usuário digita comandos diretamente para controlar o sistema de forma ágil e potente" }, { id: "b", text: "Um cabo que conecta a placa-mãe ao disco de HD" }, { id: "c", text: "Uma tela de aviso que diz que o computador está com vírus perigoso" }, { id: "d", text: "A lixeira do Linux onde ficam os arquivos apagados" } ], correctOptionId: "a" },
      { id: 4, question: "No terminal do Linux, qual comando básico usamos para listar o conteúdo da pasta atual?", options: [ { id: "a", text: "ls" }, { id: "b", text: "cd" }, { id: "c", text: "mkdir" }, { id: "d", text: "ping" } ], correctOptionId: "a" },
      { id: 5, question: "Para mudar de pasta (entrar ou sair de um diretório) no terminal do Linux, usamos o comando:", options: [ { id: "a", text: "cd" }, { id: "b", text: "ls" }, { id: "c", text: "rm" }, { id: "d", text: "exit" } ], correctOptionId: "a" },
      { id: 6, question: "Por que o Linux é considerado, no uso diário, mais seguro contra infecções por vírus e malwares que o Windows?", options: [ { id: "a", text: "Pelo sistema rigoroso de permissões de usuário e porque a maioria dos malwares comuns na web são criados especificamente para Windows" }, { id: "b", text: "Porque o Linux vem com o Malwarebytes instalado por padrão na versão paga" }, { id: "c", text: "Porque não é possível baixar arquivos da internet usando o Linux" }, { id: "d", text: "Porque o Linux apaga arquivos baixados a cada 10 minutos automaticamente" } ], correctOptionId: "a" },
      { id: 7, question: "Qual a situação do pacote Microsoft Office (Word, Excel) e softwares da Adobe (Photoshop) em relação ao Linux?", options: [ { id: "a", text: "Não possuem versões nativas oficiais desenvolvidas para Linux, exigindo alternativas ou uso de emulação" }, { id: "b", text: "São pré-instalados de graça em todas as distribuições de Linux" }, { id: "c", text: "São bloqueados pela Microsoft e nunca podem ser usados em computadores com Linux" }, { id: "d", text: "Foram desenvolvidos originalmente para o Linux e depois adaptados para o Windows" } ], correctOptionId: "a" },
      { id: 8, question: "No Windows, qual ferramenta nativa equivale à interface de linha de comando (terminal) do Linux?", options: [ { id: "a", text: "Prompt de Comando (CMD) ou PowerShell" }, { id: "b", text: "Painel de Controle" }, { id: "c", text: "Explorador de Arquivos" }, { id: "d", text: "Bloco de Notas" } ], correctOptionId: "a" },
      { id: 9, question: "O que significa dizer que o Linux é um sistema mais \"leve\" que o Windows?", options: [ { id: "a", text: "Consome menos memória RAM e processamento, funcionando muito bem em computadores antigos ou com menor capacidade física" }, { id: "b", text: "O arquivo instalador dele pesa apenas 1 kilobyte" }, { id: "c", text: "Ele não permite que o usuário salve arquivos pesados como vídeos e músicas" }, { id: "d", text: "Ele tem menos opções de acessibilidade na tela inicial" } ], correctOptionId: "a" },
      { id: 10, question: "Qual das seguintes características de interface é uma grande vantagem do Linux?", options: [ { id: "a", text: "Permite escolher e alterar a interface gráfica inteira (Ambiente Desktop como GNOME, KDE Plasma ou XFCE)" }, { id: "b", text: "Tem exatamente o mesmo menu iniciar em todas as suas distribuições sem exceção" }, { id: "c", text: "É idêntico ao Windows em todas as telas, mudando apenas a cor de fundo" }, { id: "d", text: "Não permite mudar o papel de parede para economizar energia da CPU" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Por que o Windows é o sistema preferido de desenvolvedores de jogos e de quem tem um computador gamer? Dê exemplos de tecnologias envolvidas." },
      { id: 12, question: "Por que os profissionais da área de desenvolvimento de sistemas (programadores) frequentemente preferem usar Linux no dia a dia?" },
      { id: 13, question: "Explique a diferença de compatibilidade de grandes softwares comerciais (como Photoshop ou Microsoft Office) entre o Windows e o Linux." }
    ]
  },
  {
    id: 'systems-3',
    title: 'Windows vs Linux - Nível 3',
    description: 'Teste seus conhecimentos avançados de administração: gerenciadores de pacotes, permissões de arquivos, WSL, sistemas de arquivos corporativos e segurança.',
    password: 'IEPOP',
    iconType: 'systems',
    objectiveQuestions: [
      { id: 1, question: "O que são gerenciadores de pacotes no Linux (como APT no Debian/Ubuntu ou DNF no Fedora)?", options: [ { id: "a", text: "Sistemas que baixam, instalam, atualizam e gerenciam programas automaticamente a partir de repositórios oficiais seguros via terminal" }, { id: "b", text: "Softwares de antivírus criados para detectar ransomware" }, { id: "c", text: "Utilitários que limpam a lixeira física e organizam pastas de arquivos" }, { id: "d", text: "Sistemas de backup em nuvem integrados ao Google Drive" } ], correctOptionId: "a" },
      { id: 2, question: "Como funciona o sistema de permissões de arquivos no Linux (comandos como chmod)?", options: [ { id: "a", text: "Define permissões de leitura (r), gravação (w) e execução (x) para o proprietário, grupo e outros usuários" }, { id: "b", text: "Criptografa o arquivo com uma senha que só o administrador root conhece" }, { id: "c", text: "Apaga os arquivos criados por usuários não autorizados a cada reinicialização do sistema" }, { id: "d", text: "Permite abrir arquivos sem ter que instalá-los na máquina" } ], correctOptionId: "a" },
      { id: 3, question: "Qual a grande vantagem financeira de usar Linux em servidores na nuvem (AWS, Azure) em vez de usar Windows Server?", options: [ { id: "a", text: "A ausência de custos de licenciamento por máquina instalada, além do menor consumo de RAM/CPU que reduz o custo de hardware virtual" }, { id: "b", text: "O Linux na nuvem dá desconto na energia elétrica da sede da empresa" }, { id: "c", text: "As empresas não pagam o tráfego de internet quando usam Linux" }, { id: "d", text: "O Windows Server não roda nos servidores de nuvem modernas" } ], correctOptionId: "a" },
      { id: 4, question: "Qual é o sistema de arquivos padrão do Windows moderno para organizar as tabelas de arquivos no HD ou SSD?", options: [ { id: "a", text: "NTFS" }, { id: "b", text: "Ext4" }, { id: "c", text: "FAT16" }, { id: "d", text: "APFS" } ], correctOptionId: "a" },
      { id: 5, question: "No Linux, qual é um dos sistemas de arquivos mais comuns e modernos utilizados em instalações padrões?", options: [ { id: "a", text: "Ext4" }, { id: "b", text: "NTFS" }, { id: "c", text: "APFS" }, { id: "d", text: "exFAT" } ], correctOptionId: "a" },
      { id: 6, question: "O que é o WSL (Windows Subsystem for Linux) integrado nas versões modernas do Windows 10 e 11?", options: [ { id: "a", text: "Uma ferramenta que permite rodar um ambiente Linux completo (linha de comando e utilitários) diretamente dentro do Windows, sem necessidade de máquina virtual pesada" }, { id: "b", text: "Um antivírus da Microsoft que verifica vírus de Linux" }, { id: "c", text: "Um adaptador físico para plugar HDs formatados in Linux no computador" }, { id: "d", text: "O novo nome da loja oficial do Windows (Microsoft Store)" } ], correctOptionId: "a" },
      { id: 7, question: "Em relação aos supercomputadores mais rápidos do planeta (TOP500), qual sistema operacional está presente na totalidade deles?", options: [ { id: "a", text: "Linux" }, { id: "b", text: "Windows Server" }, { id: "c", text: "macOS Enterprise" }, { id: "d", text: "Unix BSD proprietário" } ], correctOptionId: "a" },
      { id: 8, question: "Como funciona a administração de permissões em redes corporativas com Windows de forma centralizada?", options: [ { id: "a", text: "Através do Active Directory (AD) e de listas ACL (Access Control Lists) aplicadas ao sistema NTFS" }, { id: "b", text: "Alterando manualmente os arquivos de configuração em cada um dos computadores" }, { id: "c", text: "Através de chaves de permissão gravadas em pen drives dos funcionários" }, { id: "d", text: "Ao reconfigurar a senha de rede do Wi-Fi da empresa de hora em hora" } ], correctOptionId: "a" },
      { id: 9, question: "Qual a diferença entre a elevação de privilégios via terminal com o comando 'sudo' no Linux e no Windows?", options: [ { id: "a", text: "O 'sudo' concede poder de superusuário (root) temporariamente para aquele comando específico digitado, enquanto no Windows executamos um programa visual com privilégios de Administrador" }, { id: "b", text: "O 'sudo' desativa o antivírus do Linux por 1 hora, enquanto o Windows nunca desativa" }, { id: "c", text: "Não há diferença, pois o comando 'sudo' também é o padrão nativo de todas as versões antigas do Windows" }, { id: "d", text: "O 'sudo' exclui o arquivo de sistema do kernel de forma irreversível se usado incorretamente" } ], correctOptionId: "a" },
      { id: 10, question: "O que é o Kernel em termos técnicos de computação?", options: [ { id: "a", text: "O núcleo do sistema operacional que gerencia a comunicação direta entre os recursos de hardware (placas, memória) e os softwares" }, { id: "b", text: "O nome dado ao painel de configurações visuais da Área de Trabalho" }, { id: "c", text: "A lixeira física do sistema onde os dados ficam guardados antes de serem apagados" }, { id: "d", text: "A pasta que contém todos os documentos do Microsoft Office" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "Explique como funciona o controle de permissões de arquivos no Linux (leitura, escrita e execução) e como isso contribui para a segurança do sistema." },
      { id: 12, question: "O que é o WSL (Windows Subsystem for Linux) e de que forma ele facilita o fluxo de trabalho de desenvolvedores que utilizam o Windows?" },
      { id: 13, question: "Se você fosse abrir uma empresa com 500 servidores na nuvem para hospedar um site, qual sistema operacional escolheria para os servidores e por quê? Justifique sua resposta baseado em custos e estabilidade." }
    ]
  },

  // ===================================================================
  // CHATGPT E INTELIGÊNCIA ARTIFICIAL (IA)
  // ===================================================================
  {
    id: 'ai-1',
    title: 'ChatGPT e IA - Nível 1',
    description: 'Aprenda os conceitos básicos sobre o ChatGPT, o que são prompts de comando, outras IAs conhecidas como Gemini e Claude, e por que a tecnologia ficou tão popular.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "O que é o ChatGPT?", options: [ { id: "a", text: "Um assistente de Inteligência Artificial conversacional que responde a perguntas, cria textos e resolve dúvidas em formato de chat" }, { id: "b", text: "Um aplicativo de edição de fotos profissionais para celulares" }, { id: "c", text: "Um navegador de internet seguro da Microsoft" }, { id: "d", text: "Um jogo de computador multiplayer online" } ], correctOptionId: "a" },
      { id: 2, question: "Qual empresa é a criadora do ChatGPT?", options: [ { id: "a", text: "OpenAI" }, { id: "b", text: "Google" }, { id: "c", text: "Microsoft" }, { id: "d", text: "Apple" } ], correctOptionId: "a" },
      { id: 3, question: "O que é um \"Prompt\" no contexto do uso de Inteligências Artificiais?", options: [ { id: "a", text: "A mensagem, pergunta ou comando de texto enviado pelo usuário para a IA responder" }, { id: "b", text: "O código secreto usado para hackear sistemas e senhas de internet" }, { id: "c", text: "O tempo que a IA leva para processar a sua pergunta antes de responder" }, { id: "d", text: "Uma pasta secreta instalada nas configurações do Windows" } ], correctOptionId: "a" },
      { id: 4, question: "Como se chama a Inteligência Artificial conversacional muito conhecida criada pelo Google?", options: [ { id: "a", text: "Gemini" }, { id: "b", text: "Claude" }, { id: "c", text: "Cortana" }, { id: "d", text: "Siri" } ], correctOptionId: "a" },
      { id: 5, question: "Como se chama a Inteligência Artificial desenvolvida pela empresa Anthropic?", options: [ { id: "a", text: "Claude" }, { id: "b", text: "Gemini" }, { id: "c", text: "ChatGPT" }, { id: "d", text: "Alexa" } ], correctOptionId: "a" },
      { id: 6, question: "Por que o ChatGPT é a ferramenta de Inteligência Artificial generativa mais conhecida e comentada do mundo?", options: [ { id: "a", text: "Por ter sido a pioneira ao abrir o acesso público gratuito de forma amigável no final de 2022, criando um grande impacto inicial" }, { id: "b", text: "Porque é a única IA que consegue funcionar sem internet no computador" }, { id: "c", text: "Porque ela foi inventada antes do próprio computador existir" }, { id: "d", text: "Porque é de propriedade de todos os governos do mundo juntos" } ], correctOptionId: "a" },
      { id: 7, question: "Quais das seguintes tarefas o ChatGPT pode auxiliar o usuário a realizar?", options: [ { id: "a", text: "Escrever redações, traduzir idiomas, explicar matérias escolares e revisar códigos de computação" }, { id: "b", text: "Limpar o teclado do computador de poeira física" }, { id: "c", text: "Lavar a louça ou arrumar a casa de forma física" }, { id: "d", text: "Conectar computadores de forma física sem usar cabos de internet" } ], correctOptionId: "a" },
      { id: 8, question: "Para acessar o ChatGPT ou o Gemini, qual o requisito essencial de tecnologia no dispositivo do usuário?", options: [ { id: "a", text: "Uma conexão ativa com a internet para se conectar aos servidores da IA" }, { id: "b", text: "Ter uma placa de vídeo gamer de última geração instalada" }, { id: "c", text: "Ter instalado exclusivamente o sistema operacional Linux" }, { id: "d", text: "Possuir uma conta de programador paga mensalmente" } ], correctOptionId: "a" },
      { id: 9, question: "Como o ChatGPT consegue formular textos e responder perguntas?", options: [ { id: "a", text: "Calculando a probabilidade de qual palavra deve vir em seguida com base no treinamento de textos massivos" }, { id: "b", text: "Copiando e colando respostas exatas direto de sites do Google em tempo real" }, { id: "c", text: "Através de uma pessoa real do suporte que digita a resposta do outro lado da tela" }, { id: "d", text: "Adivinhando o que o usuário quer por meio da webcam" } ], correctOptionId: "a" },
      { id: 10, question: "Podemos confiar cegamente em todas as respostas dadas pelas IAs como o ChatGPT?", options: [ { id: "a", text: "Não, as IAs podem cometer erros de lógica ou inventar fatos (fenômeno chamado de alucinação)" }, { id: "b", text: "Sim, os computadores nunca cometem erros e as IAs sabem tudo com 100% de precisão" }, { id: "c", text: "Sim, porque todas as respostas são revisadas por cientistas antes de aparecerem na tela" }, { id: "d", text: "Não, porque elas sempre mentem de propósito em todas as perguntas" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que é o ChatGPT, quem o criou e qual a sua principal utilidade?" },
      { id: 12, question: "O que é um \"prompt\" de comando no uso de Inteligências Artificiais e qual a importância de ser claro ao escrevê-lo?" },
      { id: 13, question: "Por que o ChatGPT se tornou muito mais famoso e conhecido em comparação a outras ferramentas como o Claude ou o Gemini?" }
    ]
  },
  {
    id: 'ai-2',
    title: 'ChatGPT e IA - Nível 2',
    description: 'Compreenda a engenharia de prompt básica, o problema das alucinações das IAs e compare as forças do ChatGPT, Gemini e Claude.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "O que significa o termo \"Alucinação\" no contexto de modelos de Inteligência Artificial?", options: [ { id: "a", text: "Quando a IA gera respostas falsas, incorretas ou inventadas com aparência de serem fatos reais com total convicção" }, { id: "b", text: "Quando o site da IA fica offline por causa do alto tráfego" }, { id: "c", text: "Quando a IA responde com uma velocidade muito lenta por estar cansada" }, { id: "d", text: "Um vírus que entra no computador por meio do chat" } ], correctOptionId: "a" },
      { id: 2, question: "Qual é a melhor forma de estruturar um Prompt para obter respostas excelentes?", options: [ { id: "a", text: "Definir um papel para a IA (ex: aja como professor), fornecer contexto, o objetivo claro e o formato de saída desejado" }, { id: "b", text: "Digitar apenas palavras soltas na caixa de pesquisa" }, { id: "c", text: "Escrever a pergunta em letras maiúsculas e gritar" }, { id: "d", text: "Usar o menor número de palavras possível sem explicar os detalhes" } ], correctOptionId: "a" },
      { id: 3, question: "Qual das seguintes características costuma destacar o Claude (da Anthropic) frente a outros concorrentes?", options: [ { id: "a", text: "Uma escrita de texto mais natural, excelente raciocínio de lógica complexa, programação e suporte a grandes janelas de contexto" }, { id: "b", text: "Ser totalmente de graça e não precisar de internet para rodar" }, { id: "c", text: "Pertencer à Microsoft e vir pré-instalado em todos os computadores Windows" }, { id: "d", text: "Gerar imagens e vídeos de forma rápida direto na caixa de conversa" } ], correctOptionId: "a" },
      { id: 4, question: "Qual a grande vantagem de usar o Google Gemini integrado ao ecossistema Google?", options: [ { id: "a", text: "Conexão direta com ferramentas de produtividade como Google Docs, Workspace, YouTube e pesquisas web em tempo real" }, { id: "b", text: "Permitir editar planilhas do Excel no formato offline" }, { id: "c", text: "Funcionar como antivírus para o navegador Chrome" }, { id: "d", text: "Ser o único que consegue criar códigos de programação complexos" } ], correctOptionId: "a" },
      { id: 5, question: "O que define a Inteligência Artificial \"Generativa\"?", options: [ { id: "a", text: "Tecnologia de IA focada em gerar novos conteúdos originais (textos, imagens, áudios ou códigos) a partir de comandos humanos" }, { id: "b", text: "Uma geração de computadores com chips de alta velocidade" }, { id: "c", text: "Programas de computador antigos que foram esquecidos no mercado" }, { id: "d", text: "Sistemas de automação de robôs industriais em fábricas físicas" } ], correctOptionId: "a" },
      { id: 6, question: "O que é a \"Janela de Contexto\" (Context Window) de uma Inteligência Artificial?", options: [ { id: "a", text: "A quantidade máxima de dados (tokens) que o modelo pode processar de uma só vez entre a sua pergunta e o histórico do chat" }, { id: "b", text: "O tamanho da janela de visualização do site no seu monitor" }, { id: "c", text: "O tempo máximo que você pode conversar com a IA antes dela fechar o navegador" }, { id: "d", text: "A versão do Windows onde a IA está sendo rodada" } ], correctOptionId: "a" },
      { id: 7, question: "Qual cuidado o usuário deve ter ao utilizar informações obtidas por IA em pesquisas escolares ou profissionais?", options: [ { id: "a", text: "Checar os fatos em fontes confiáveis (livros, sites oficiais, artigos) antes de publicar ou usar no trabalho" }, { id: "b", text: "Nenhum cuidado, pois as IAs são programadas por governos e nunca erram" }, { id: "c", text: "Copiar e colar sem alterar nada, para garantir que as palavras fiquem bonitas" }, { id: "d", text: "Usar apenas o ChatGPT e nunca os concorrentes como o Gemini" } ], correctOptionId: "a" },
      { id: 8, question: "Quais destas ferramentas de Inteligência Artificial generativa são muito conhecidas por focar na criação de imagens realistas a partir de textos?", options: [ { id: "a", text: "Midjourney e DALL-E" }, { id: "b", text: "Word e PowerPoint" }, { id: "c", text: "Windows e Linux" }, { id: "d", text: "Malwarebytes e Chrome" } ], correctOptionId: "a" },
      { id: 9, question: "Por que não é aconselhável enviar dados pessoais confidenciais (como fotos íntimas, senhas ou dados bancários) nos chats de IA gratuitos?", options: [ { id: "a", text: "Porque as empresas que desenvolvem as IAs utilizam o histórico de chat dos planos gratuitos para treinar e refinar seus modelos" }, { id: "b", text: "Porque a IA pode gastar seus créditos de internet se ler dados confidenciais" }, { id: "c", text: "Porque o computador vai travar e formatar automaticamente devido a regras de segurança do Windows" }, { id: "d", text: "Porque as IAs só entendem textos públicos de notícias cotidianas" } ], correctOptionId: "a" },
      { id: 10, question: "O que significa o termo \"Fine-tuning\" (Ajuste Fino) de uma Inteligência Artificial?", options: [ { id: "a", text: "Treinar um modelo básico existente com dados específicos e novos para torná-lo um especialista em uma área" }, { id: "b", text: "Diminuir o volume do computador para que a IA fale mais baixo" }, { id: "c", text: "Mudar as configurações visuais do site do ChatGPT para o modo escuro" }, { id: "d", text: "Apagar todas as respostas corretas que a IA deu anteriormente" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que são as alucinações em sistemas de Inteligência Artificial e de que forma podemos nos proteger delas em trabalhos acadêmicos?" },
      { id: 12, question: "Se você precisasse escolher entre o ChatGPT, o Gemini e o Claude para integrar com seu e-mail e fazer resumos de vídeos do YouTube, qual escolheria e por quê?" },
      { id: 13, question: "Por que não devemos enviar dados confidenciais (como senhas, dados de documentos ou segredos de empresas) nas caixas de chat das IAs comuns?" }
    ]
  },
  {
    id: 'ai-3',
    title: 'ChatGPT e IA - Nível 3',
    description: 'Aprofunde-se na tecnologia por trás dos modelos de linguagem (LLMs): APIs, RAG, privacidade de dados, multimidia e a arquitetura dos Transformers.',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      { id: 1, question: "Qual a principal diferença técnica e de qualidade entre os modelos gratuitos (como GPT-4o-mini) e os modelos avançados (como o GPT-4o completo)?", options: [ { id: "a", text: "Modelos avançados contam com maior capacidade de processamento, raciocínio lógico em matemática/programação, melhor compreensão de imagens e menor índice de erros" }, { id: "b", text: "Os modelos avançados funcionam totalmente offline sem gastar internet do computador" }, { id: "c", text: "Os modelos gratuitos inventam mais mentiras de propósito apenas para obrigar o usuário a pagar o plano Premium" }, { id: "d", text: "Os modelos avançados alteram o hardware do computador para aumentar a capacidade da memória RAM do PC" } ], correctOptionId: "a" },
      { id: 2, question: "O que é a API de um modelo como o ChatGPT e qual sua importância para o mercado empresarial?", options: [ { id: "a", text: "Uma interface de programação que permite integrar a inteligência do modelo da OpenAI de forma automatizada dentro de aplicativos, sistemas e softwares de outras empresas" }, { id: "b", text: "Uma extensão de navegador usada para bloquear anúncios publicitários nos sites" }, { id: "c", text: "A tela de chat colorida que os usuários comuns acessam para digitar perguntas diariamente" }, { id: "d", text: "O protocolo que impede que as IAs criem códigos de programação errados" } ], correctOptionId: "a" },
      { id: 3, question: "O que indica o termo \"Data Cutoff\" (data limite de conhecimento) de uma Inteligência Artificial?", options: [ { id: "a", text: "A data final até a qual o modelo foi treinado e possui dados históricos em sua própria rede neural sem precisar buscar dados da web" }, { id: "b", text: "O horário em que o servidor do site entra em manutenção diária" }, { id: "c", text: "O limite de tempo que o usuário tem para digitar uma frase antes do sistema travar" }, { id: "d", text: "O limite de idade permitido por lei para criar uma conta no site da OpenAI" } ], correctOptionId: "a" },
      { id: 4, question: "O que é a técnica RAG (Retrieval-Augmented Generation) utilizada no desenvolvimento de sistemas corporativos com IA?", options: [ { id: "a", text: "Uma técnica onde a IA pesquisa primeiro em bancos de dados ou documentos externos para depois formular a resposta final, garantindo respostas exatas e sem alucinações" }, { id: "b", text: "Um antivírus especial que impede a invasão de hackers nos servidores da OpenAI" }, { id: "c", text: "A criação de novos robôs físicos que conseguem ler livros de papel em segundos" }, { id: "d", text: "A exclusão de dados antigos de conversas para economizar espaço de armazenamento" } ], correctOptionId: "a" },
      { id: 5, question: "Como grandes empresas lidam com as regras de privacidade (LGPD/GDPR) ao usarem modelos da OpenAI via API?", options: [ { id: "a", text: "Ao usar a API ou contas empresariais de nível corporativo, onde os termos garantem que a OpenAI não treinará seus modelos com os dados enviados" }, { id: "b", text: "Eles desligam os computadores dos funcionários antes de enviarem dados sigilosos" }, { id: "c", text: "Eles renomeiam os dados confidenciais para que fiquem com nomes falsos de receitas culinárias" }, { id: "d", text: "A OpenAI não permite o uso de IAs por empresas comerciais regulamentadas" } ], correctOptionId: "a" },
      { id: 6, question: "O que significa dizer que um modelo de Inteligência Artificial é \"Multimodal\"?", options: [ { id: "a", text: "Que ele consegue processar e gerar respostas mesclando diferentes mídias como texto, imagens, áudio e vídeo ao mesmo tempo" }, { id: "b", text: "Que ele pode ser acessado em múltiplos sistemas operacionais ao mesmo tempo" }, { id: "c", text: "Que ele possui várias janelas de chat abertas simultaneamente na tela" }, { id: "d", text: "Que ele usa diferentes tipos de moedas para cobrar a mensalidade do usuário" } ], correctOptionId: "a" },
      { id: 7, question: "O que é o RLHF (Reinforcement Learning from Human Feedback) no treinamento das Inteligências Artificiais?", options: [ { id: "a", text: "Uma técnica de aprendizado onde humanos dão notas e corrigem as respostas da IA para ensiná-la a ser mais útil, educada e segura" }, { id: "b", text: "Um curso para ensinar idosos a utilizarem o computador e celular com IAs" }, { id: "c", text: "A programação da IA para que ela corrija erros de digitação do teclado físico" }, { id: "d", text: "Um teste de estresse que aumenta o calor físico dos processadores in data centers" } ], correctOptionId: "a" },
      { id: 8, question: "O que caracteriza os chamados \"Agentes de IA\" (AI Agents)?", options: [ { id: "a", text: "Sistemas capazes de planejar, tomar decisões e executar sequências complexas de tarefas usando ferramentas digitais sem supervisão humana constante" }, { id: "b", text: "Pessoas humanas que trabalham vendendo licenças de software de IA" }, { id: "c", text: "Um modelo de IA que responde apenas por e-mail comercial uma vez por dia" }, { id: "d", text: "Os cabos que fazem a conexão dos servidores da internet" } ], correctOptionId: "a" },
      { id: 9, question: "Qual a função dos novos modelos focados em \"Raciocínio\" (como a família OpenAI o1 ou o modo Reason do Claude)?", options: [ { id: "a", text: "Executar um pensamento sistemático interno de passo a passo antes de formular a resposta para resolver problemas difíceis de exatas e programação" }, { id: "b", text: "Adivinhar os dados pessoais do usuário analisando o tom da sua voz no áudio" }, { id: "c", text: "Garantir que a IA nunca dê respostas negativas ou duras para o usuário" }, { id: "d", text: "Pesquisar de forma aleatória em fóruns de discussões da internet" } ], correctOptionId: "a" },
      { id: 10, question: "Qual arquitetura revolucionária de redes neurais, apresentada em 2017, possibilitou o boom atual de modelos de linguagem como o ChatGPT?", options: [ { id: "a", text: "Transformers" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: [
      { id: 11, question: "O que é um modelo de IA multimodal? Explique um caso de uso em que a combinação de diferentes tipos de mídia é essencial." },
      { id: 12, question: "Explique como funciona o fluxo de trabalho da tecnologia RAG (Retrieval-Augmented Generation) e de que forma ela soluciona o problema da desatualização de dados e alucinações em empresas." },
      { id: 13, question: "Aborde as discussões éticas e legais envolvendo o uso de dados protegidos por direitos autorais para o treinamento inicial de grandes redes de inteligência artificial (LLMs)." }
    ]
  },
  {
    id: 'desafio-completo',
    title: '🏆 Desafio Completo - Prova Geral (40 Questões)',
    description: 'Prova geral com 40 perguntas de nível fácil (sem nível 3), divididas igualmente em 5 módulos: Word, Google, ChatGPT, Antivírus Malwarebytes e Canva (8 questões cada).',
    password: 'IEPOP',
    iconType: 'ai',
    objectiveQuestions: [
      // MÓDULO 1: WORD (8 QUESTÕES)
      { id: 1, question: "[Word] O que é o Microsoft Word?", options: [ { id: "a", text: "Um programa de computador voltado para a criação e edição de documentos digitais" }, { id: "b", text: "Um editor profissional para corte e montagem de vídeos em alta resolução" }, { id: "c", text: "Um reprodutor de áudio para execução de arquivos digitais de música" }, { id: "d", text: "Um software cartográfico destinado ao desenho de mapas geográficos" } ], correctOptionId: "a" },
      { id: 2, question: "[Word] Qual botão no Word deixa o texto em Negrito (letras mais escuras)?", options: [ { id: "a", text: "Botão N (Negrito), que destaca os caracteres com traços mais grossos" }, { id: "b", text: "Botão I (Itálico), que alinha e inclina o texto ligeiramente à direita" }, { id: "c", text: "Botão S (Sublinhado), que desenha uma linha reta contínua abaixo das letras" }, { id: "d", text: "Botão X (Recortar), que remove o trecho selecionado enviando à memória" } ], correctOptionId: "a" },
      { id: 3, question: "[Word] Qual atalho do teclado é usado no Word em português para Salvar o documento?", options: [ { id: "a", text: "Atalho Ctrl + S (ou Ctrl + B no Word em português) para gravar as alterações" }, { id: "b", text: "Atalho Ctrl + P para enviar as páginas formatadas para a impressora conectada" }, { id: "c", text: "Atalho Ctrl + Z para cancelar e desfazer imediatamente a última açãofeita" }, { id: "d", text: "Atalho Alt + F4 para encerrar a janela do aplicativo em execução no sistema" } ], correctOptionId: "a" },
      { id: 4, question: "[Word] Para alterar o tamanho ou estilo da fonte do texto, em qual guia devemos ir?", options: [ { id: "a", text: "Guia Layout da Página, responsável pelas margens e orientação do papel" }, { id: "b", text: "Guia Página Inicial, onde ficam localizados os painéis de Fonte e Parágrafo" }, { id: "c", text: "Guia Exibir, onde ajustamos os modos de visualização e ferramentas de Zoom" }, { id: "d", text: "Guia Desenhar, que oferece pincéis e canetas para rabiscos à mão livre" } ], correctOptionId: "b" },
      { id: 5, question: "[Word] O que a opção 'Centralizar' faz com o texto selecionado?", options: [ { id: "a", text: "Alinha todas as linhas do texto exatamente junto à margem esquerda da folha" }, { id: "b", text: "Posiciona o texto selecionado perfeitamente no centro horizontal da folha" }, { id: "c", text: "Apaga o texto selecionado e limpa todo o conteúdo do parágrafo atual" }, { id: "d", text: "Transfoma automaticamente todas as letras do texto em caracteres maiúsculos" } ], correctOptionId: "b" },
      { id: 6, question: "[Word] Como inserimos uma imagem salva no computador dentro do documento?", options: [ { id: "a", text: "Acessando o menu Inserir > opção Imagens > Este Dispositivo no topo da tela" }, { id: "b", text: "Acessando o menu Arquivo > opção Imprimir para enviar o documento para o papel" }, { id: "c", text: "Acessando o menu Exibir > opção Zoom para aproximar a folha de trabalho" }, { id: "d", text: "Acessando o menu Estrutura > opção Cor da Página para mudar o fundo da folha" } ], correctOptionId: "a" },
      { id: 7, question: "[Word] Qual ferramenta do Word é usada para identificar e corrigir erros de digitação?", options: [ { id: "a", text: "Ferramenta de Mala Direta para envio automatizado de cartas personalizadas" }, { id: "b", text: "Verificação Ortográfica e Gramatical (tecla F7) que destaca termos incorretos" }, { id: "c", text: "Tabela Dinâmica para cruzamento e análise de grandes volumes de dados" }, { id: "d", text: "Quebra de Seção para separar diferentes formatos de páginas no mesmo arquivo" } ], correctOptionId: "b" },
      { id: 8, question: "[Word] Qual o objetivo de utilizar a ferramenta 'Cabeçalho e Rodapé' no Word?", options: [ { id: "a", text: "Inserir informações fixas como títulos e números nas margens superiores e inferiores" }, { id: "b", text: "Alterar a cor de fundo de todas as letras do documento para o modo escuro" }, { id: "c", text: "Criar equações matemáticas complexas e gráficos tridimensionais no texto" }, { id: "d", text: "Formatar o computador limpando os arquivos temporários armazenados no disco" } ], correctOptionId: "a" },

      // MÓDULO 2: GOOGLE (8 QUESTÕES)
      { id: 9, question: "[Google] O que é o Google Chrome?", options: [ { id: "a", text: "Um utilitário de segurança voltado para remover vírus e malwares do sistema" }, { id: "b", text: "Um navegador de internet moderno utilizado para acessar páginas e sites da web" }, { id: "c", text: "Um jogo eletrônico educativo de simulação instalado nativamente no Windows" }, { id: "d", text: "Um reprodutor multimídia utilizado para sintonizar rádios e arquivos de áudio" } ], correctOptionId: "b" },
      { id: 10, question: "[Google] No Google Chrome, para que serve o ícone de Estrela (Favoritos)?", options: [ { id: "a", text: "Para fechar imediatamente a aba do site que está aberta no navegador" }, { id: "b", text: "Para salvar o endereço do site e permitir acessá-lo rapidamente no futuro" }, { id: "c", text: "Para enviar a página aberta diretamente para a impressora do computador" }, { id: "d", text: "Para traduzir automaticamente o conteúdo do site para o idioma português" } ], correctOptionId: "b" },
      { id: 11, question: "[Google] O que é o Google Drive?", options: [ { id: "a", text: "Um serviço de armazenamento de arquivos em nuvem acessível de qualquer aparelho" }, { id: "b", text: "Um cabo físico especial utilizado para conectar a impressora ao computador" }, { id: "c", text: "Um jogo de corrida interativo desenvolvido para dispositivos móveis" }, { id: "d", text: "Um programa voltado exclusivamente para a edição de faixas de música" } ], correctOptionId: "a" },
      { id: 12, question: "[Google] Qual atalho do teclado abre uma Nova Aba no Google Chrome?", options: [ { id: "a", text: "Pressionar Ctrl + T no teclado para abrir uma nova guia limpa de navegação" }, { id: "b", text: "Pressionar Ctrl + W no teclado para encerrar a janela ativa do navegador" }, { id: "c", text: "Pressionar Ctrl + H no teclado para exibir o histórico recente de sites visitados" }, { id: "d", text: "Pressionar Ctrl + J no teclado para visualizar a lista de downloads realizados" } ], correctOptionId: "a" },
      { id: 13, question: "[Google] Para que serve a Barra de Endereço no navegador Google Chrome?", options: [ { id: "a", text: "Para digitar a URL de um site ou realizar pesquisas diretas na internet" }, { id: "b", text: "Para alterar as configurações de velocidade física da placa de rede" }, { id: "c", text: "Para desligar o monitor do computador sem perder os dados abertos" }, { id: "d", text: "Para formatar e apagar permanentemente todas as fotos do computador" } ], correctOptionId: "a" },
      { id: 14, question: "[Google] O que acontece ao navegar usando uma 'Janela Anônima' no Chrome?", options: [ { id: "a", text: "O navegador não salva o histórico de páginas visitadas nem os cookies no computador" }, { id: "b", text: "A velocidade da conexão com a internet é duplicada automaticamente pelo sistema" }, { id: "c", text: "O computador fica totalmente imune a qualquer tipo de queda no sinal de energia" }, { id: "d", text: "Todas as senhas gravadas na conta do usuário são apagadas de maneira definitiva" } ], correctOptionId: "a" },
      { id: 15, question: "[Google] Ao fazer uma busca no Google, para que serve o filtro 'Imagens'?", options: [ { id: "a", text: "Para filtrar e exibir exclusivamente resultados contendo vídeos do YouTube" }, { id: "b", text: "Para filtrar a busca mostrando somente fotos e figuras relacionadas ao tema" }, { id: "c", text: "Para listar softwares e jogos disponíveis para instalação imediata no PC" }, { id: "d", text: "Para exibir apenas matérias jornalísticas de grandes jornais de texto impresso" } ], correctOptionId: "b" },
      { id: 16, question: "[Google] O que é o serviço do Google Maps na internet?", options: [ { id: "a", text: "Um serviço de navegação por mapas para localizar endereços e rotas" }, { id: "b", text: "Um programa antivírus para detectar malware em redes Wi-Fi públicas" }, { id: "c", text: "Um editor de texto para formatar relatórios em pdf no computador" }, { id: "d", text: "Uma ferramenta para medir a frequência de operação do processador" } ], correctOptionId: "a" },

      // MÓDULO 3: CHATGPT (8 QUESTÕES)
      { id: 17, question: "[ChatGPT] O que é o ChatGPT?", options: [ { id: "a", text: "Um software antivírus que monitora portas de rede bloqueando códigos maliciosos" }, { id: "b", text: "Um assistente virtual de inteligência artificial interativo que responde perguntas" }, { id: "c", text: "Uma rede social voltada para compartilhamento de fotografias e vídeos curtos" }, { id: "d", text: "Um jogo de cartas e estratégia disputado online entre vários jogadores" } ], correctOptionId: "b" },
      { id: 18, question: "[ChatGPT] Como é chamada a mensagem ou comando que digitamos para a IA responder?", options: [ { id: "a", text: "Prompt (ou instrução de comando) que orienta a geração da resposta pela IA" }, { id: "b", text: "Vírus (ou código nocivo) que pode alterar o comportamento do sistema operacional" }, { id: "c", text: "Cookie (ou pequeno arquivo) que armazena dados de navegação no navegador" }, { id: "d", text: "Backup (ou cópia de segurança) criado para restaurar dados em emergências" } ], correctOptionId: "a" },
      { id: 19, question: "[ChatGPT] Como o ChatGPT pode ajudar você no dia a dia ou nos estudos?", options: [ { id: "a", text: "Explicando conceitos difíceis, resumindo textos e sugerindo ideias estruturadas" }, { id: "b", text: "Efetuando a limpeza física dos componentes de hardware e periféricos do gabinete" }, { id: "c", text: "Reparando problemas de hardware na placa de rede quando o sinal Wi-Fi cai" }, { id: "d", text: "Imprimindo folhas de papel sem consumir os cartuchos de tinta da impressora" } ], correctOptionId: "a" },
      { id: 20, question: "[ChatGPT] Qual cuidado devemos ter ao usar respostas geradas por IA em pesquisas?", options: [ { id: "a", text: "Nenhum cuidado especial, pois as redes neurais da IA nunca cometem erros de fato" }, { id: "b", text: "Conferir as informações geradas, pois a IA pode apresentar dados imprecisos ou falsos" }, { id: "c", text: "Evitar utilizar a IA para aprendizado, pois seu uso é proibido por legislações digitais" }, { id: "d", text: "Restringir o acesso aos sistemas de IA exclusivamente para professores credenciados" } ], correctOptionId: "b" },
      { id: 21, question: "[ChatGPT] Além do ChatGPT, qual destas é outra Inteligência Artificial muito famosa desenvolvida pelo Google?", options: [ { id: "a", text: "Google Gemini, o modelo de linguagem principal integrado aos serviços do Google" }, { id: "b", text: "Bloco de Notas, o editor simples de texto sem formatação presente no sistema" }, { id: "c", text: "Paint, a ferramenta básica de edição gráfica para desenhos do sistema Windows" }, { id: "d", text: "Calculadora, o aplicativo padrão para execução de operações matemáticas" } ], correctOptionId: "a" },
      { id: 22, question: "[ChatGPT] Para iniciar um assunto totalmente novo com o ChatGPT sem misturar com o chat anterior, devemos clicar em:", options: [ { id: "a", text: "Botão Novo Chat (+), que cria uma nova sessão zerada de conversa com a IA" }, { id: "b", text: "Menu Configurações > Excluir Conta para apagar todos os registros do usuário" }, { id: "c", text: "Botão Sair da Conta para desconectar o usuário da plataforma de IA" }, { id: "d", text: "Botão de desligar o monitor do computador para reiniciar o aplicativo" } ], correctOptionId: "a" },
      { id: 23, question: "[ChatGPT] O ChatGPT funciona com base em qual tipo de tecnologia moderna?", options: [ { id: "a", text: "Modelos de Inteligência Artificial e Processamento de Linguagem Natural avançados" }, { id: "b", text: "Sistemas de transmissão por ondas de rádio FM sem necessidade de computadores" }, { id: "c", text: "Circuitos analógicos manuais que dependem de intervenção humana constante" }, { id: "d", text: "Dispositivos magnéticos de fita cassette para gravação mecânica de dados" } ], correctOptionId: "a" },
      { id: 24, question: "[ChatGPT] O que significa o conceito de 'Alucinação' em sistemas de Inteligência Artificial?", options: [ { id: "a", text: "O momento em que a IA gera uma resposta incorreta ou inventada com tom de certeza" }, { id: "b", text: "O desligamento automático dos servidores da IA quando a temperatura interna sobe" }, { id: "c", text: "A conversão de um texto digitado em uma imagem tridimensional animada" }, { id: "d", text: "O bloqueio permanente da conta do usuário por falta de pagamento da mensalidade" } ], correctOptionId: "a" },

      // MÓDULO 4: ANTIVÍRUS MALWAREBYTES (8 QUESTÕES)
      { id: 25, question: "[Antivírus] O que é o Malwarebytes?", options: [ { id: "a", text: "Um aplicativo de criação de artes visuais voltado para edição de apresentações" }, { id: "b", text: "Um software de segurança e antivírus especializado na remoção de ameaças" }, { id: "c", text: "Uma plataforma de transmissão de vídeos e filmes sob demanda pela internet" }, { id: "d", text: "Um utilitário de edição de imagens com filtros profissionais para redes digitais" } ], correctOptionId: "b" },
      { id: 26, question: "[Antivírus] O que significa o termo 'Malware' na informática?", options: [ { id: "a", text: "Um tipo de programa de código aberto totalmente gratuito e altamente seguro" }, { id: "b", text: "Qualquer software malicioso desenvolvido para infectar ou roubar dados do PC" }, { id: "c", text: "Um modelo específico de teclado mecânico dotado de iluminação colorida RGB" }, { id: "d", text: "Um cabo de dados de alta performance usado em conexões de redes locais" } ], correctOptionId: "b" },
      { id: 27, question: "[Antivírus] O que a função 'Escanear' ou 'Verificação' (Scan) faz no Malwarebytes?", options: [ { id: "a", text: "Examina os arquivos e a memória do sistema procurando por vírus e ameaças" }, { id: "b", text: "Altera o papel de parede e as cores do tema da área de trabalho do computador" }, { id: "c", text: "Exclui definitivamente todas as fotos e documentos pessoais do armazenamento" }, { id: "d", text: "Realiza a instalação automática de jogos populares na biblioteca do usuário" } ], correctOptionId: "a" },
      { id: 28, question: "[Antivírus] O que é a 'Quarentena' no programa Malwarebytes?", options: [ { id: "a", text: "Um local isolado onde arquivos suspeitos são bloqueados sem infectar o sistema" }, { id: "b", text: "Um período determinado durante o qual o equipamento precisa ficar desligado" }, { id: "c", text: "Uma ferramenta que impede qualquer conexão com a internet durante 40 dias" }, { id: "d", text: "O repositório padrão onde o usuário deve salvar seus arquivos mais importantes" } ], correctOptionId: "a" },
      { id: 29, question: "[Antivírus] Qual é uma atitude fundamental de segurança para proteger o computador?", options: [ { id: "a", text: "Desativar todos os antivírus instalados e bloquear as atualizações do sistema" }, { id: "b", text: "Clicar em banners de propaganda que prometem prêmios valiosos pela internet" }, { id: "c", text: "Manter o antivírus atualizado e evitar baixar arquivos de fontes desconhecidas" }, { id: "d", text: "Enviar dados e senhas bancárias por e-mail quando solicitado por estranhos" } ], correctOptionId: "c" },
      { id: 30, question: "[Antivírus] O que é o golpe de 'Phishing'?", options: [ { id: "a", text: "Um jogo de simulação esportiva de pescaria muito popular nas redes sociais" }, { id: "b", text: "Uma fraude que usa mensagens ou sites falsos para enganar e roubar senhas" }, { id: "c", text: "Um defeito mecânico inesperado que ocorre nas teclas de teclados antigos" }, { id: "d", text: "Um modelo de gabinete de computador desenhado para refrigeração líquida" } ], correctOptionId: "b" },
      { id: 31, question: "[Antivírus] Qual a função da 'Proteção em Tempo Real' (Real-Time Protection)?", options: [ { id: "a", text: "Monitorar continuamente o sistema para barrar vírus no instante em que agem" }, { id: "b", text: "Exibir as horas e a previsão do tempo na barra de tarefas do Windows" }, { id: "c", text: "Ativar a webcam e o microfone do sistema de forma silenciosa e ininterrupta" }, { id: "d", text: "Reduzir o nível de ruído das ventoinhas de refrigeração interna do computador" } ], correctOptionId: "a" },
      { id: 32, question: "[Antivírus] O que é um 'Ransomware' e por que ele é uma das maiores ameaças digitais?", options: [ { id: "a", text: "Um vírus que criptografa os arquivos do usuário e exige resgate para devolvê-los" }, { id: "b", text: "Um programa que acelera a velocidade da internet limpando dados do navegador" }, { id: "c", text: "Um utilitário de hardware que aumenta a memória RAM física sem gastar dinheiro" }, { id: "d", text: "Uma atualização oficial lançada pela Microsoft para melhorar a barra de tarefas" } ], correctOptionId: "a" },

      // MÓDULO 5: CANVA (8 QUESTÕES)
      { id: 33, question: "[Canva] O que é o Canva?", options: [ { id: "a", text: "Um aplicativo de simulação esportiva voltado para campeonatos de futebol" }, { id: "b", text: "Uma plataforma online de design gráfico para criar cartazes e artes visuais" }, { id: "c", text: "Um utilitário de gravação de mídias físicas como discos de DVD e Blu-ray" }, { id: "d", text: "Um reprodutor multimídia para execução de listas de músicas no formato MP3" } ], correctOptionId: "b" },
      { id: 34, question: "[Canva] O que são os 'Templates' no Canva?", options: [ { id: "a", text: "Modelos visuais pré-prontos que podem ser editados com seus próprios textos e fotos" }, { id: "b", text: "Falhas no sistema que provocam o encerramento inesperado do navegador de internet" }, { id: "c", text: "Ferramentas administrativas voltadas para apagar o histórico de navegação do usuário" }, { id: "d", text: "Chaves de segurança necessárias para autenticar o login do usuário na plataforma" } ], correctOptionId: "a" },
      { id: 35, question: "[Canva] Como enviar uma foto do seu computador para usar no seu projeto dentro do Canva?", options: [ { id: "a", text: "Utilizando a guia 'Uploads' > botão 'Fazer upload de arquivos' no painel esquerdo" }, { id: "b", text: "Selecionando a opção 'Sair da Conta' localizada no menu superior de perfil" }, { id: "c", text: "Desligando e reiniciando o sistema operacional para recarregar o navegador" }, { id: "d", text: "Clicando na opção 'Excluir Projeto' na lixeira da conta do usuário" } ], correctOptionId: "a" },
      { id: 36, question: "[Canva] Para mudar a cor de um texto ou do fundo de um elemento no Canva, você deve usar:", options: [ { id: "a", text: "O ícone de quadrado de cor presente na barra de ferramentas superior do editor" }, { id: "b", text: "O botão físico de ligar e desligar localizado no gabinete do computador" }, { id: "c", text: "A tecla CAPS LOCK do teclado para alterar a intensidade das letras" }, { id: "d", text: "O cabo de alimentação que fornece energia elétrica para o monitor de vídeo" } ], correctOptionId: "a" },
      { id: 37, question: "[Canva] Como salvar ou baixar sua arte finalizada (em PNG, JPG ou PDF) para o computador?", options: [ { id: "a", text: "Clicando no botão 'Compartilhar' no canto superior > selecionando a opção 'Baixar'" }, { id: "b", text: "Capturando uma foto da tela do monitor através da câmera de um telefone celular" }, { id: "c", text: "Fechando a janela do navegador sem salvar nenhuma das alterações recentes" }, { id: "d", text: "Arrastando o ícone do monitor de vídeo para a lixeira da área de trabalho" } ], correctOptionId: "a" },
      { id: 38, question: "[Canva] Para adicionar adesivos, ícones, linhas e ilustrações no seu design, você usa a guia:", options: [ { id: "a", text: "Guia Elementos no painel esquerdo, que contém uma biblioteca de ilustrações" }, { id: "b", text: "Guia Vírus no painel superior, que testa a segurança dos arquivos da conta" }, { id: "c", text: "Guia Histórico de Navegação, que exibe os últimos sites acessados na web" }, { id: "d", text: "Guia Configurações de Rede, que ajusta a velocidade do Wi-Fi no computador" } ], correctOptionId: "a" },
      { id: 39, question: "[Canva] Qual é uma grande facilidade que o Canva oferece aos usuários?", options: [ { id: "a", text: "Funciona diretamente no navegador e salva o progresso na nuvem em tempo real" }, { id: "b", text: "Exige a instalação de diversos programas pesados no armazenamento interno do PC" }, { id: "c", text: "Restringe o uso da plataforma exclusivamente para profissionais com diploma universitário" }, { id: "d", text: "Impede que o usuário altere as frases ou imagens dos modelos pré-prontos selecionados" } ], correctOptionId: "a" },
      { id: 40, question: "[Canva] Qual o atalho rápido do teclado para duplicar um elemento selecionado no Canva?", options: [ { id: "a", text: "Pressionar Ctrl + D (ou segurar Alt e arrastar) para criar uma cópia idêntica" }, { id: "b", text: "Pressionar Ctrl + Shift + Esc para abrir o gerenciador de tarefas do sistema" }, { id: "c", text: "Pressionar F5 para atualizar a página e apagar as últimas alterações do projeto" }, { id: "d", text: "Pressionar a barra de espaço cinco vezes seguidas para deletar a imagem selecionada" } ], correctOptionId: "a" }
    ],
    discursiveQuestions: []
  }
];
