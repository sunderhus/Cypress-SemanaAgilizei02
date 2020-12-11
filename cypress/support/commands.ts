
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Must be declared global to be detected by typescript (allows import/export)
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      login():void
    }
  }
}

/**
 * Background login
 * @example cy.login();
 */

 Cypress.Commands.add('login',()=>{
   cy.setCookie('PrestaShop-a30a9934ef476d11b6cc3c983616e364','R6xmma6F4U6edNQuu67M0nG6Gqpd%2B1Q%2Fo0rNk2bZJo0GWHoN%2FlDzJaOY9lnduCjyZ5BR2gALa83wC4z7AViSv2rAPgVLzHV0DvuaBDowoK3OWwbttZ72tLOobT84AweGOuc%2FCLoltnvAN1Ks3tuDpqV4LGyhO9rXC3qa4%2B4wFkGxvCUGY7p%2BcCWGSNfslZsJEQY3b1v4LBrAbzRmZ5%2B8IEe2sFXJnR8oox0eQ3ZeFNxQVM9wwf2UjlEkubf%2FxWK2mIlYcAvqIywXjLcLJEv7S0BPv%2F6Mh85UnLgZmswAQmsA4aj6MNtQHyYrWnkTvDxnHqG1eQr%2FrU3LZ7QwlhbncuSKy6A%2F%2B4qdxAnMq%2BRn5EqZWymDsZGe4OFbLp42otyvGkPjMOX2Ixf3QgQ%2Ft4XKCYJNrBeRt5G20I0wR74WFis%3D000312');
 });


// Convert this to a module instead of script (allows import/export)
export {}

