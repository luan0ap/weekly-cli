const QUESTIONS = [
  {
    type: 'text',
    name: 'title',
    message: 'Informe o título da recomendação'
  },
  {
    type: 'text',
    name: 'url',
    message: 'Informe a URL da recomendação?'
  },
  {
    type: 'text',
    name: 'description',
    message: 'Faça uma breve descrição da sua recomendação'
  },
  {
    type: 'multiselect',
    name: 'category',
    message: 'Em qual categoria sua recomendação se encaixa?',
    choices: [
      {title: 'Artigos', value: 'Artigos'},
      {title: 'News', value: 'News'},
      {title: 'Videos', value: 'Videos'},
      {title: 'Eventos', value: 'Eventos'},
      {title: 'Tools', value: 'Tools'},
      {title: 'Outros', value: 'Outros'}
    ]
  }
];

const LABELS = {
  SUCCESS:
    '\n\nO conteúdo foi gerado e está no seu clipboard, basta pressionar CTRL+V ou CMD+V na issue. ;)\n\n'
};

const TEMPLATE = `**[title}](url)**
description
*category*`;

module.exports = {
  QUESTIONS,
  LABELS,
  TEMPLATE
};
