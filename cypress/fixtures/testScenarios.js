export const testScenarios = [
  {
    protractorCommand: "browser.get()",
    snippetToMigrate: "browser.get('https://walmyr.dev')",
    migratedSnippet: "cy.visit('https://walmyr.dev')",
    cypressCommands: ['cy.visit()']
  },
  {
    protractorCommand: "element(by.css())",
    snippetToMigrate: "element(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "element(by.className())",
    snippetToMigrate: "element(by.className('sample-class'))",
    migratedSnippet: "cy.get('.sample-class')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "element(by.cssContainingText())",
    snippetToMigrate: "element(by.cssContainingText('selector', 'Sample content'))",
    migratedSnippet: "cy.get('selector').contains('Sample content')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    protractorCommand: ".sendKeys()",
    snippetToMigrate: "element(by.css('selector').sendKeys('ABC'))",
    migratedSnippet: "cy.get('selector').type('ABC')",
    cypressCommands: ['cy.get()', '.type()']
  },
  {
    protractorCommand: "element(by.id())",
    snippetToMigrate: "element(by.id('my-id'))",
    migratedSnippet: "cy.get('#my-id')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: ".isDisplayed()",
    snippetToMigrate: "expect(element(by.css('selector')).isDisplayed()).toBe(true)",
    migratedSnippet: "cy.get('selector').should('be.visible')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    protractorCommand: ".isPresent()",
    snippetToMigrate: "expect(element(by.css('selector')).isPresent()).toBe(true)",
    migratedSnippet: "cy.get('selector').should('exist')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    protractorCommand: "browser.getTitle()",
    snippetToMigrate: "browser.getTitle()",
    migratedSnippet: "cy.title()",
    cypressCommands: ['cy.title()']
  },
  {
    protractorCommand: "element(by.model())",
    snippetToMigrate: "element(by.model('sampleModel'))",
    migratedSnippet: "cy.get('[ng-model=\"sampleModel\"]')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "element(by.binding())",
    snippetToMigrate: "element(by.binding('sampleBinding'))",
    migratedSnippet: "cy.get('[ng-bind=\"sampleBinding\"]')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "element.all(by.css())",
    snippetToMigrate: "element.all(by.css('selector'))",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: ".first()",
    snippetToMigrate: "element.all(by.css('selector')).first()",
    migratedSnippet: "cy.get('selector').first()",
    cypressCommands: ['cy.get()', '.first()']
  },
  {
    protractorCommand: ".last()",
    snippetToMigrate: "element.all(by.css('selector')).last()",
    migratedSnippet: "cy.get('selector').last()",
    cypressCommands: ['cy.get()', '.last()']
  },
  {
    protractorCommand: "browser.getCurrentUrl()",
    snippetToMigrate: "browser.getCurrentUrl()",
    migratedSnippet: "cy.location('href')",
    cypressCommands: ['cy.location()']
  },
  {
    protractorCommand: ".takeScreenshot()",
    snippetToMigrate: "element(by.css('selector')).takeScreenshot()",
    migratedSnippet: "cy.get('selector').screenshot()",
    cypressCommands: ['cy.get()', 'cy.screenshot()']
  },
  {
    protractorCommand: ".count()",
    snippetToMigrate: "expect(element(by.css('ul li')).count()).toBe(3)",
    migratedSnippet: "cy.get('ul li').its('length').should('deepEqual', 3)",
    cypressCommands: ['cy.get()', 'its()', '.should()']
  },
  {
    protractorCommand: ".getText()",
    snippetToMigrate: "expect(element(by.css('selector')).getText()).toEqual('Inner text')",
    migratedSnippet: "cy.get('selector').should('have.text', 'Inner text')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    protractorCommand: ".isEnabled()",
    snippetToMigrate: "expect(element(by.css('selector')).isEnabled()).toBe(false)",
    migratedSnippet: "cy.get('selector').should('not.be.enabled')",
    cypressCommands: ['cy.get()', '.should()']
  },
  {
    protractorCommand: "element(by.buttonText())",
    snippetToMigrate: "element(by.buttonText('Save'))",
    migratedSnippet: "cy.get('button').contains('Save')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    protractorCommand: "element(by.partialButtonText())",
    snippetToMigrate: "element(by.partialButtonText('Creat'))",
    migratedSnippet: "cy.get('button').contains('Creat')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    protractorCommand: "element(by.linkText())",
    snippetToMigrate: "element(by.linkText('Google'))",
    migratedSnippet: "cy.get('a').contains('Google')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    protractorCommand: "element(by.partialLinkText())",
    snippetToMigrate: "element(by.partialLinkText('DuckDu'))",
    migratedSnippet: "cy.get('a').contains('DuckDu')",
    cypressCommands: ['cy.get()', 'cy.contains()']
  },
  {
    protractorCommand: "element(by.tagName())",
    snippetToMigrate: "element(by.tagName('header'))",
    migratedSnippet: "cy.get('header')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: ".click()",
    snippetToMigrate: "element(by.css('selector')).click()",
    migratedSnippet: "cy.get('selector').click()",
    cypressCommands: ['cy.get()', '.click()']
  },
  {
    protractorCommand: ".clear()",
    snippetToMigrate: "element(by.css('selector')).clear()",
    migratedSnippet: "cy.get('selector').clear()",
    cypressCommands: ['cy.get()', '.clear()']
  },
  {
    protractorCommand: "browser.refresh()",
    snippetToMigrate: "browser.refresh()",
    migratedSnippet: "cy.reload()",
    cypressCommands: ['cy.reload()']
  },
  {
    protractorCommand: "$()",
    snippetToMigrate: "$('selector')",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "$$()",
    snippetToMigrate: "$$('selector')",
    migratedSnippet: "cy.get('selector')",
    cypressCommands: ['cy.get()']
  },
  {
    protractorCommand: "element(by.css()).get()",
    snippetToMigrate: "element(by.css('selector')).get(1)",
    migratedSnippet: "cy.get('selector').eq(1)",
    cypressCommands: ['cy.get()', '.eq()']
  },
  {
    protractorCommand: ".submit()",
    snippetToMigrate: "element(by.css('form')).submit()",
    migratedSnippet: "cy.get('form').submit()",
    cypressCommands: ['cy.get()', '.submit()']
  }
]
