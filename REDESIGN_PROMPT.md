# Prompt de redesign — Atividades de Informática

Redesenhe a interface existente da plataforma Atividades de Informática, construída em React, TypeScript e Vite. Antes de alterar código, inspecione telas, componentes, fluxos, conteúdo e assets existentes.

## Objetivo visual
Transforme a interface escura atual em uma experiência clara, acolhedora e organizada, com sobriedade editorial e espaço em branco associados a produtos como Claude, sem copiar sua marca ou telas. Use fundo marfim muito claro, superfícies brancas, texto carvão, bordas discretas e um único acento terracota suave para ações e estados selecionados. Mantenha tipografia legível, hierarquia simples, largura confortável, espaçamento consistente e cartões planos com sombras mínimas.

Remova gradientes decorativos, brilhos, orbes, glassmorphism, bordas luminosas, paletas neon, ícones flutuantes e animações chamativas. Evite uma cor diferente por cartão. Preserve cores de marcas apenas nos logotipos originais e cores semânticas para acertos, erros e dificuldade. Não use emojis decorativos.

## Conteúdo e fluxos que devem continuar funcionando
- Navegação entre Provas Oficiais, Prática de Digitação, Atalhos de Teclado e Speed Quiz.
- As cinco provas atuais, seleção por senha, dados do aluno, prova e resultado.
- Exportação do relatório PDF e download do modelo DOCX.
- Textos de prática, atalhos por categoria e modos do Speed Quiz.
- Logos IEPOP e Nivano Studio; conteúdo em português brasileiro.

## Direção das telas
- Cabeçalho e navegação discretos, responsivos e compreensíveis; no celular, navegação horizontal sem quebrar os botões.
- Na página inicial, comunicar o propósito e organizar provas em cartões consistentes, com título, descrição, quantidade de questões e ação evidente.
- Aplicar o mesmo sistema visual à prática, formulários, prova, senha, resultado, atalhos e quiz.
- Manter relatórios com papel branco, tipografia escura e bom contraste para impressão.
- Garantir foco visível, alvos de toque confortáveis e respeito a prefers-reduced-motion.

## Restrições
Preserve dados, regras pedagógicas e comportamentos. Não remova funcionalidades nem invente conteúdo. Reutilize assets e componentes; prefira classes e tokens consistentes em vez de novos estilos inline. Faça mudanças focadas no frontend, confira desktop e celular e execute o build/lint existente antes de afirmar conclusão.