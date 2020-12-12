describe('Buy', () => {
    it('should be able to buy a product', () => {
        cy.login();

        const productName = 'Faded Short Sleeve T-shirts';

        cy.visit('/');

        cy.contains(productName)
            .trigger('mouseover')
            .parent()
            .siblings('div.button-container')
            .children('a')
            .first()
            .click();

        // Validate , if this the same product added to cart.
        cy.get(`.icon-ok`)
            .parent()
            .should('contain.text', 'Product successfully added to your shopping cart');
        cy.get("#layer_cart_product_title").should('contain.text', productName);


        cy.get('.button-container')
            .children('a[href$="controller=order"]')
            .click();

        cy.get('.cart_navigation')
            .children(`a[href$='order&step=1']`)
            .click();

        // cy.get('#email')
        //     .type('semana-agilizei@mail.com');
        // cy.get('#passwd')
        //     .type('12345');

        // cy.get('#SubmitLogin')
        //     .click();

        //2) Ensure that home address is equal to bill address
        // Should(Assert| attr | value).

        cy.get(`[type='checkbox']#addressesAreEquals`)
            .should('have.attr', 'checked', 'checked')
            .should('have.attr', 'name', 'same');



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


        // Invoke - used to invoke a JS function to perform some logic. 
        // [x] 1. select all text to performe filters and extract information.
        // [x] 2. filter to get order id, using regex
        // [x] 3. save this  ID into a file 
        // [x] 4. get ID back
        cy.get(`div.box`).invoke('text').then((text) => {
            const result = text.match(/([A-Z][A-Z]+\w{7,})/g);
            const orderID = result ? result[0] : '';

            // command to write values.
            cy.writeFile('cypress/fixtures/order.json', { id: `${orderID}` });
        });

        cy.get(`.cart_navigation a[href$='history']`)
            .click();
        // read file and get values from it.
        cy.readFile('cypress/fixtures/order.json').then(order => {
            cy.get('tr.first_item .history_link a').should('contain.text', order.id)
        });





    });
})