export const testScenarios = [
  {
    title: "migrates Protractor's browser.get()",
    snippetToBeMigrated: "browser.get('https://walmyr.dev')",
    migratedSnippet: "cy.visit('https://walmyr.dev')",
    cypressCommand: 'cy.visit()'
  },
  {
    title: "migrates Protractor's element(by.css())",
    snippetToBeMigrated: "element(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommand: 'cy.get()'
  },
  {
    title: "migrates Protractor's element(by.className())",
    snippetToBeMigrated: "element(by.className('sample-class'))",
    migratedSnippet: "cy.get('.sample-class')",
    cypressCommand: 'cy.get()'
  },
  {
    title: "migrates Protractor's element(by.cssContainingText())",
    snippetToBeMigrated: "element(by.cssContainingText('selector', 'Sample content'))",
    migratedSnippet: "cy.get('selector').contains('Sample content')",
    cypressCommand: 'cy.contains()'
  },
  {
    title: "migrates Protractor's .sendKeys",
    snippetToBeMigrated: "element(by.css('selector').sendKeys('ABC'))",
    migratedSnippet: "cy.get('selector').type('ABC')",
    cypressCommand: '.type()'
  }
]
