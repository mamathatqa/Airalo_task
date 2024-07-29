class HomePage{
    visitHomePage(){
        cy.visit(Cypress.env("baseUrl"))
    }

    verifyTitle(title){
        cy.title().should('eq', title)
    }

    search(key){
        cy.get('.inp-search')
          .type(key)
        cy.get('.countries-list')
          .contains('li', 'Local')
          .next()
          .should('contain',key)
          .click({ force:true })
    }
}

export default HomePage;
