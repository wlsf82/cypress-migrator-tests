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

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.visit('https://walmyr.dev')")
  })

  it("migrates Protractor's element(by.css())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.css('selector'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector')")
  })

  it("migrates Protractor's element(by.className())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.className('sample-class'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('.sample-class')")
  })

  it("migrates Protractor's element(by.cssContainingText())", () => {
    cy.get('@leftSideEditor')
      .type("element(by.cssContainingText('selector', 'Sample content'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector').contains('Sample content')")
  })

  it("migrates Protractor's .sendKeys", () => {
    cy.get('@leftSideEditor')
      .type("element(by.css('selector').sendKeys('ABC'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector').type('ABC')")
  })

  Cypress.Commands.add('migrate', () => {
    cy.contains('button', 'Migrate to Cypress')
      .click()
  })

  Cypress.Commands.add('assertRightSideEditorCodeSnippet', snippet => {
    cy.get('@rightSideEditor')
      .scrollIntoView()
      .should($textArea => {
        expect($textArea[0].value).includes(snippet)
      })
  })
})
