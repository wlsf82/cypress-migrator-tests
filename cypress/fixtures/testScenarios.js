export const testScenarios = [
  {
    title: "migrates Protractor's browser.get()",
    snippetToBeMigrated: "browser.get('https://walmyr.dev')",
    migratedSnippet: "cy.visit('https://walmyr.dev')"
  },
  {
    title: "migrates Protractor's element(by.css())",
    snippetToBeMigrated: "element(by.css('selector'))",
    migratedSnippet: "cy.get('selector')"
  },
  {
    title: "migrates Protractor's element(by.className())",
    snippetToBeMigrated: "element(by.className('sample-class'))",
    migratedSnippet: "cy.get('.sample-class')"
  },
  {
    title: "migrates Protractor's element(by.cssContainingText())",
    snippetToBeMigrated: "element(by.cssContainingText('selector', 'Sample content'))",
    migratedSnippet: "cy.get('selector').contains('Sample content')"
  },
  {
    title: "migrates Protractor's .sendKeys",
    snippetToBeMigrated: "element(by.css('selector').sendKeys('ABC'))",
    migratedSnippet: "cy.get('selector').type('ABC')"
  }
]
