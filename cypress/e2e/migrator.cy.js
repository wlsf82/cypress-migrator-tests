import { testScenarios } from '../fixtures/testScenarios'

describe('Cypress Migrator', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.side-by-side.vs textarea')
      .as('textAreas')
      .first()
      .press('selectAll')
      .clear()
      .then($textArea => {
        if ($textArea[0].value.length) {
          cy.log('clearing again...')
          cy.wrap($textArea).clear()
        }
      })
      .as('leftSideEditor')
  })

  testScenarios.forEach(scenario => {
    const {
      protractorCommand,
      snippetToMigrate,
      migratedSnippet,
      cypressCommands
    } = scenario

    it(`migrates Protractor's ${protractorCommand} command into Cypress's ${cypressCommands[cypressCommands.length - 1]} command`, () => {
      cy.get('@leftSideEditor').type(snippetToMigrate)

      cy.contains('button', 'Migrate to Cypress').click()

      cy.get('@textAreas')
        .last()
        .scrollIntoView()
        .should($textArea => {
          expect($textArea[0].value).includes(migratedSnippet)
        })
      cypressCommands.forEach((cmd, index) => {
        const transformedCyCmd = cypressCommands[index]
          .replace('cy', '')
          .replace('.', '')
          .replace('()', '')
        cy.get('[data-test="api-details"]')
          .should('contain', cmd)
          .find('a')
          .eq(index)
          .should('have.attr', 'href', `https://on.cypress.io/${transformedCyCmd}`)
      })
    })
  })
})
