describe('buttons and fields', () => {
    
    it('Validate buttons and fields', () => {
        cy.visit('/')

        cy.get('#form_group #first_name').type('Yan Ferrer')
        cy.get('#panel_test_one div button[id="btn_one"]').click()

        cy.get('#panel_test_one [id="opt_three"]').click()
        cy.get('#panel_test_one #select_box').select('option_two')

        cy.get('#panel_body_three img[alt="selenium"]').should('to.be.visible')
    })
})