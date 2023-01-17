describe('Search elements',()=>{
    it('search for elements with multiple result',()=>{
        cy.visit('/')
        cy.fixture('home').then((homePage)=>{
            cy.get(homePage.username).type('{ctrl}standard_user')
            cy.get(homePage.password).type('secret_sauce')
            cy.contains('Login').should('be.visible') // Assert that el is visible
            cy.get(homePage.buttonLogin).click()
            //cy.wrap({ foo: 'bar' }).its('foo').should('eq', 'bar') // Assert the 'foo' property equals 'bar'
        })
    })
})