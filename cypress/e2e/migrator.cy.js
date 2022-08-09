describe('Cypress Migrator', () => {
  it("migrates Protractor's browser.get()", () => {
    cy.visit('https://migrator.cypress.io/')

    cy.get('.side-by-side.vs textarea')
      .first()
      .clear()
      .clear()
      .type("browser.get('https://walmyr.dev')")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('.side-by-side.vs textarea')
      .last()
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.visit('https://walmyr.dev')")
      })
  })

  it("migrates Protractor's element(by.css())", () => {
    cy.visit('https://migrator.cypress.io/')

    cy.get('.side-by-side.vs textarea')
      .first()
      .clear()
      .clear()
      .type("element(by.css('selector'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('.side-by-side.vs textarea')
      .last()
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.get('selector')")
      })
  })

  it("migrates Protractor's element(by.className())", () => {
    cy.visit('https://migrator.cypress.io/')

    cy.get('.side-by-side.vs textarea')
      .first()
      .clear()
      .clear()
      .type("element(by.className('sample-class'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('.side-by-side.vs textarea')
      .last()
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes("cy.get('.sample-class')")
      })
  })

  it("migrates Protractor's element(by.cssContainingText())", () => {
    cy.visit('https://migrator.cypress.io/')

    cy.get('.side-by-side.vs textarea')
      .first()
      .clear()
      .clear()
      .type("element(by.cssContainingText('selector', 'Sample content'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('.side-by-side.vs textarea')
      .last()
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value)
          .includes("cy.get('selector').contains('Sample content')")
      })
  })

  it("migrates Protractor's .sendKeys", () => {
    cy.visit('https://migrator.cypress.io/')

    cy.get('.side-by-side.vs textarea')
      .first()
      .clear()
      .clear()
      .type("element(by.css('selector').sendKeys('ABC'))")

    cy.contains('button', 'Migrate to Cypress')
      .click()

    cy.get('.side-by-side.vs textarea')
      .last()
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value)
          .includes("cy.get('selector').type('ABC')")
      })
  })
})
