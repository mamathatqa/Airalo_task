// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('closeModal', (modal, btn) => {
    cy.get(modal, { timeout: 10000 }).should('be.visible')
    cy.get(btn).click()
})

Cypress.Commands.add('getAuthToken', () => {
    const options={
        method: 'POST',
        // form: true,
        url: `${Cypress.env("apiUrl")}/v2/token`,
        body: {
          grant_type: 'client_credentials',
          client_id: Cypress.env("client_id"),
          client_secret: Cypress.env("client_secret")
        }
    }
    cy.request(options).then((res) => {
        return res
    })
})

Cypress.Commands.add('submitOrderViaAPI', (authToken, orderData) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env("apiUrl")}/v2/orders`,
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: orderData
    }).then((response) => {
      return response
    });
});

Cypress.Commands.add('GetOrdersListViaAPI', (authToken, orderFilters) => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env("apiUrl")}/v2/sims`,
      qs: orderFilters,
      headers: {
        Accept:'application/json',
        Authorization: `Bearer ${authToken}`
      }
    }).then((response) => {
      return response
    });
});

Cypress.Commands.add('getFormattedDate', () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });