export const testScenarios = [
  {
    title: "browser.get()",
    snippetToMigrate: "browser.get('https://walmyr.dev')",
    migratedSnippet: "cy.visit('https://walmyr.dev')",
    cypressCommand: 'cy.visit()'
  },
  {
    title: "element(by.css())",
    snippetToMigrate: "element(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommand: 'cy.get()'
  },
  {
    title: "element(by.className())",
    snippetToMigrate: "element(by.className('sample-class'))",
    migratedSnippet: "cy.get('.sample-class')",
    cypressCommand: 'cy.get()'
  },
  {
    title: "element(by.cssContainingText())",
    snippetToMigrate: "element(by.cssContainingText('selector', 'Sample content'))",
    migratedSnippet: "cy.get('selector').contains('Sample content')",
    cypressCommand: 'cy.contains()'
  },
  {
    title: ".sendKeys",
    snippetToMigrate: "element(by.css('selector').sendKeys('ABC'))",
    migratedSnippet: "cy.get('selector').type('ABC')",
    cypressCommand: '.type()'
  }
]
