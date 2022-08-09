describe('Cypress Migrator', () => {
  beforeEach(() => {
    cy.visit('https://migrator.cypress.io/')
    cy.get('.side-by-side.vs textarea')
      .as('textAreas')
      .first()
      .clear()
      .clear()
      .as('leftSideEditor')
    cy.get('@textAreas')
      .last()
      .as('rightSideEditor')
  })

  it("migrates Protractor's browser.get()", () => {
    cy.get('@leftSideEditor')
      .type("browser.get('https://walmyr.dev')")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.visit('https://walmyr.dev')")
      })
  })

  it("migrates Protractor's element(by.css())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.css('selector'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.get('selector')")
      })
  })

  it("migrates Protractor's element(by.className())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.className('sample-class'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.get('.sample-class')")
      })
  })

  it("migrates Protractor's element(by.cssContainingText())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.cssContainingText('selector', 'Sample content'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value)
          .includes("cy.get('selector').contains('Sample content')")
      })
  })

  it("migrates Protractor's .sendKeys", () => {
    cy.get('@leftSideEditor')
      .type("element(by.css('selector').sendKeys('ABC'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value)
          .includes("cy.get('selector').type('ABC')")
      })
  })
})
