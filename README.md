# Cypress CSP Allow Bug

Running the app normally includes all 3 CSP headers (`script-src`, `default-src`, `style-src`):

![Expected](./img/csp-expected.png)

Running the app with `cypress open` and `experimentalCspAllowList=true` only includes `script-src`:

![Cypress](./img/csp-cypress.png)

Running the app with `cypress open` and `experimentalCspAllowList=['script-src', 'default-src']` includes all 3 CSP headers:

![Expected](./img/csp-expected.png)
