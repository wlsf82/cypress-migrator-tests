export const testScenarios = [
  {
    title: "browser.get()",
    snippetToMigrate: "browser.get('https://walmyr.dev')",
    migratedSnippet: "cy.visit('https://walmyr.dev')",
    cypressCommands: ['cy.visit()']
  },
  {
    title: "element(by.css())",
    snippetToMigrate: "element(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    title: "element(by.className())",
    snippetToMigrate: "element(by.className('sample-class'))",
    migratedSnippet: "cy.get('.sample-class')",
    cypressCommands: ['cy.get()']
  },
  {
    title: "element(by.cssContainingText())",
    snippetToMigrate: "element(by.cssContainingText('selector', 'Sample content'))",
    migratedSnippet: "cy.get('selector').contains('Sample content')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    title: ".sendKeys()",
    snippetToMigrate: "element(by.css('selector').sendKeys('ABC'))",
    migratedSnippet: "cy.get('selector').type('ABC')",
    cypressCommands: ['cy.get()', '.type()']
  },
  {
    title: "element(by.id())",
    snippetToMigrate: "element(by.id('my-id'))",
    migratedSnippet: "cy.get('#my-id')",
    cypressCommands: ['cy.get()']
  },
  {
    title: ".isDisplayed()",
    snippetToMigrate: "expect(element(by.css('selector')).isDisplayed()).toBe(true)",
    migratedSnippet: "cy.get('selector').should('be.visible')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    title: ".isPresent()",
    snippetToMigrate: "expect(element(by.css('selector')).isPresent()).toBe(true)",
    migratedSnippet: "cy.get('selector').should('exist')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    title: "browser.getTitle()",
    snippetToMigrate: "browser.getTitle()",
    migratedSnippet: "cy.title()",
    cypressCommands: ['cy.title()']
  },
  {
    title: "element(by.model())",
    snippetToMigrate: "element(by.model('sampleModel'))",
    migratedSnippet: "cy.get('[ng-model=\"sampleModel\"]')",
    cypressCommands: ['cy.get()']
  },
  {
    title: "element(by.binding())",
    snippetToMigrate: "element(by.binding('sampleBinding'))",
    migratedSnippet: "cy.get('[ng-bind=\"sampleBinding\"]')",
    cypressCommands: ['cy.get()']
  },
  {
    title: "element.all(by.css())",
    snippetToMigrate: "element.all(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    title: ".first()",
    snippetToMigrate: "element.all(by.css('selector')).first()",
    migratedSnippet: "cy.get('selector').first()",
    cypressCommands: ['cy.get()', '.first()']
  },
  {
    title: ".last()",
    snippetToMigrate: "element.all(by.css('selector')).last()",
    migratedSnippet: "cy.get('selector').last()",
    cypressCommands: ['cy.get()', '.last()']
  },
  {
    title: "browser.getCurrentUrl()",
    snippetToMigrate: "browser.getCurrentUrl()",
    migratedSnippet: "cy.location('href')",
    cypressCommands: ['cy.location()']
  },
  {
    title: ".takeScreenshot()",
    snippetToMigrate: "element(by.css('selector')).takeScreenshot()",
    migratedSnippet: "cy.get('selector').screenshot()",
    cypressCommands: ['cy.get()', 'cy.screenshot()']
  },
  {
    title: ".count()",
    snippetToMigrate: "expect(element(by.css('ul li')).count()).toBe(3)",
    migratedSnippet: "cy.get('ul li').its('length').should('deepEqual', 3)",
    cypressCommands: ['cy.get()', 'its()', '.should()']
  },
  {
    title: ".getText()",
    snippetToMigrate: "expect(element(by.css('selector')).getText()).toEqual('Inner text')",
    migratedSnippet: "cy.get('selector').should('have.text', 'Inner text')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    title: ".isEnabled()",
    snippetToMigrate: "expect(element(by.css('selector')).isEnabled()).toBe(false)",
    migratedSnippet: "cy.get('selector').should('not.be.enabled')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    title: "element(by.buttonText())",
    snippetToMigrate: "element(by.buttonText('Save'))",
    migratedSnippet: "cy.get('button').contains('Save')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    title: "element(by.partialButtonText())",
    snippetToMigrate: "element(by.partialButtonText('Creat'))",
    migratedSnippet: "cy.get('button').contains('Creat')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    title: "element(by.linkText())",
    snippetToMigrate: "element(by.linkText('Google'))",
    migratedSnippet: "cy.get('a').contains('Google')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    title: "element(by.partialLinkText())",
    snippetToMigrate: "element(by.partialLinkText('DuckDu'))",
    migratedSnippet: "cy.get('a').contains('DuckDu')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    title: "element(by.tagName())",
    snippetToMigrate: "element(by.tagName('header'))",
    migratedSnippet: "cy.get('header')",
    cypressCommands: ['cy.get()']
  },
  {
    title: ".click()",
    snippetToMigrate: "element(by.css('selector')).click()",
    migratedSnippet: "cy.get('selector').click()",
    cypressCommands: ['cy.get()', '.click()']
  },
  {
    title: ".clear()",
    snippetToMigrate: "element(by.css('selector')).clear()",
    migratedSnippet: "cy.get('selector').clear()",
    cypressCommands: ['cy.get()', '.clear()']
  }
]
