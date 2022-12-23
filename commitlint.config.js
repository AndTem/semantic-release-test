const { createConfig } = require('@astral/commitlint-config');

const TYPE_ENUM = [
  'feat',
  'bug',
  'wip',
  'refactor',
  'doc',
  'build',
  'chore',
  'revert',
  'style',
  'next'
];

module.exports = createConfig({
  ticketPrefix: 'TEST',
  typeEnum: TYPE_ENUM,
  scopes: ['ui', 'Button']
});
