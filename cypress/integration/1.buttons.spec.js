describe('Buttons', () => {

    it('Button must be inactive when pressed', () => {
        cy.visit('/')

        cy.get('#panel_test_one div button[id="btn_one"]').click()
        cy.get('#panel_test_one div button[id="btn_one"]').should('not.be.visible')

        cy.get('#panel_test_one div button[id="btn_two"]').click()
        cy.get('#panel_test_one div button[id="btn_two"]').should('not.be.visible')

        cy.get('#panel_test_one div button[id="btn_link"]').click()
        cy.get('#panel_test_one div button[id="btn_link"]').should('not.be.visible')
    })
})