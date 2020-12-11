describe("Searchs",()=>{
    it('Should be able to performe google search', () => {
        cy.visit('https://www.google.com.br');
        cy.get('[name="q"]')
            .type('Olá mundo')
            .type('{enter}');
    });
    it('Should be able to search base site', () => {
        cy.visit('/');
    });
});
