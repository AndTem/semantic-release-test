const { createConfig } = require('@astral/commitlint-config');

module.exports = createConfig({
  ticketPrefix: 'TEST',
  scopes: ['ui', 'Button']
});
