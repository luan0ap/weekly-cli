/* eslint-disable no-console */
const prompts = require('prompts');
const clipboardy = require('clipboardy');

// Application
const QUESTIONS = require('./constants').QUESTIONS;
const LABELS = require('./constants').LABELS;
const TEMPLATE = require('./constants').TEMPLATE;
const regex = /title|url|description|category/gi;

(async () => {
  const response = await prompts(QUESTIONS);
  const x = TEMPLATE.replace(regex, item => {
    return response[item];
  });
  clipboardy.writeSync(x);
  console.log(LABELS.SUCCESS);
})();
