Cypress.Commands.add('typeOnLeftSideEditor', snippet => {
  cy.get('@leftSideEditor')
    .type(snippet)
})

Cypress.Commands.add('migrate', () => {
  cy.contains('button', 'Migrate to Cypress')
    .click()
})

Cypress.Commands.add('assertRightSideEditorCodeSnippet', snippet => {
  cy.get('@textAreas')
    .last()
    .scrollIntoView()
    .should($textArea => {
      expect($textArea[0].value).includes(snippet)
    })
})
