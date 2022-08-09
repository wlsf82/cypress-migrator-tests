describe('Cypress Migrator', () => {
  beforeEach(() => {
    cy.visit('https://migrator.cypress.io/')
    cy.get('.side-by-side.vs textarea')
      .as('textAreas')
      .first()
      .clear()
      .clear()
      .as('leftSideEditor')
  })

  it("migrates Protractor's browser.get()", () => {
    cy.typeOnLeftSideEditor("browser.get('https://walmyr.dev')")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.visit('https://walmyr.dev')")
  })

  it("migrates Protractor's element(by.css())", () => {
    cy.typeOnLeftSideEditor("element(by.css('selector'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector')")
  })

  it("migrates Protractor's element(by.className())", () => {
    cy.typeOnLeftSideEditor("element(by.className('sample-class'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('.sample-class')")
  })

  it("migrates Protractor's element(by.cssContainingText())", () => {
    cy.typeOnLeftSideEditor("element(by.cssContainingText('selector', 'Sample content'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector').contains('Sample content')")
  })

  it("migrates Protractor's .sendKeys", () => {
    cy.typeOnLeftSideEditor("element(by.css('selector').sendKeys('ABC'))")

    cy.migrate()

    cy.assertRightSideEditorCodeSnippet("cy.get('selector').type('ABC')")
  })
})
