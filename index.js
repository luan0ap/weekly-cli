#! /usr/bin/env node
/* eslint-disable no-console */
const prompts = require('prompts');
const clipboardy = require('clipboardy');

// Application
const QUESTIONS = require('./constants').QUESTIONS;
const LABELS = require('./constants').LABELS;
const TEMPLATE = require('./constants').TEMPLATE;
const regex = /title|url|description|category/gi;

const onCancel = () => {
  console.log(LABELS.END);
  return false;
};

(async () => {
  const response = await prompts(QUESTIONS, {onCancel});
  const hasAllResponses = Object.keys(response).length === 4;

  if (hasAllResponses) {
    const recommendation = TEMPLATE.replace(regex, item => {
      return response[item];
    });
    clipboardy.writeSync(recommendation);
    console.log(LABELS.SUCCESS);
  }
})();
