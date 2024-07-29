import HomePage from '../support/pageObjects/HomePage.js';
import PackageView from '../support/pageObjects/PackageView.js';
import data  from '../fixtures/packageDetails.json';

const homePage = new HomePage()
const packageview = new PackageView()


describe('Japan', () => {
  it('should verify the first package for esim', () => {
    homePage.visitHomePage()
    homePage.verifyTitle('Buy eSIMs for international travel - Airalo')

    cy.closeModal('#ten-million-users-modal___BV_modal_body_', '.airalo-icon-close-round-filled')
    cy.closeModal('#onetrust-banner-sdk', '#onetrust-accept-btn-handler')
    homePage.search("Japan")

    cy.closeModal('.wzrk-alert', '#wzrk-cancel')
    packageview.clickFirstPackagePlan()
    cy.get('.package-detail', { timeout: 10000 }).scrollIntoView()

    packageview.verifyPackageTitle('Moshi Moshi')
    
    data.plan.details.forEach(ele => {
      packageview.verifyPackageDetails(ele.type, ele.value)
    })
  })
})