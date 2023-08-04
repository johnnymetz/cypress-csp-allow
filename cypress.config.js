const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:3000/',
  },
  video: false,
  // https://docs.cypress.io/guides/references/experiments#Experimental-CSP-Allow-List
  experimentalCspAllowList: true,
});
