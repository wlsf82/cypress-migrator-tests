import { testScenarios } from '../fixtures/testScenarios'

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

  testScenarios.forEach(scenario => {
    const { title, snippetToBeMigrated, migratedSnippet } = scenario

    it(title, () => {
      cy.typeOnLeftSideEditor(snippetToBeMigrated)
      cy.migrate()
      cy.assertRightSideEditorCodeSnippet(migratedSnippet)
    })
  })
})
