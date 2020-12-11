describe('Buy', () => {
    it('should be able to buy a product', () => {
        const productName = 'Faded Short Sleeve T-shirts';

        cy.visit('/');

        cy.contains(productName)
            .trigger('mouseover')
            .parent()
            .siblings('div.button-container')
            .children('a')
            .first()
            .click();

        cy.get('.button-container')
            .children('a[href$="controller=order"]')
            .click();

        cy.get('.cart_navigation')
            .children(`a[href$='order&step=1']`)
            .click();

        cy.get('#email')
            .type('semana-agilizei@mail.com');
        cy.get('#passwd')
            .type('12345');

        cy.get('#SubmitLogin')
            .click();

        //cy.get("#addressesAreEquals");

        cy.get("button[name='processAddress']")
            .click();

        cy.get(`[type='checkbox']#cgv`).check();

        cy.get("button[name='processCarrier']")
            .click();

        cy.get(`.bankwire`).click();

        cy.get(`.cart_navigation`)
            .children(`button[type="submit"]`)
            .find("span")
            .contains("I confirm my order")
            .click();

        cy.get(`.cheque-indent`)
            .children("strong")
            .should('contain.text', 'Your order on My Store is complete.');

    });
})