class PackageView{
    clickFirstPackagePlan(){
        cy.get('[data-testid="sim-package-item"]')
          .first()
          .contains('button', 'BUY NOW')
          .click()
    }
    verifyPackageTitle(title){
        cy.contains('[data-testid="sim-detail-operator-title"]', title)
          .should('be.visible')
    }
    verifyPackageDetails(key, value){
        cy.get('.sim-detail-info-list')
        .find(`p[data-testid="${key}-row"]`)
        .next()
        .should('contain', value)
    }
}

export default PackageView;
