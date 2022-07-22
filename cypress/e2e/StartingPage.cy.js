/// <reference types="cypress" />
import data from '../fixtures/mainlangs.json'

describe('StartingPage', function()
{

    it('Verify Title of the Page', function()
    {
        cy.visit('https://www.wikipedia.org')
        cy.title().should('eq','Wikipedia')
    })

    it('Verify Central Text Logo', function()
    {
        cy.get('.central-textlogo-wrapper > span').should('be.visible').should('have.text','\nWikipedia\n')
    })

    it('Verify Slogan', function()
    {
        cy.get('.central-textlogo-wrapper > strong').should('be.visible').should('have.text','The Free Encyclopedia')
    })

    it('Verify Central Image Logo', function()
    {
        cy.get('.central-featured-logo').should('be.visible')
    })

    it('Verify Main Languages', function()
    {
        cy.get('.central-featured > div').each((item, index) => {
            cy.wrap(item).should('contain.text', data.langs[index])
        }) 
    })
    
    it('Verify Search Bar', function()
    {
        cy.get('#searchInput').should('be.visible').type('random')
        cy.get('#searchLanguage').select('English')
        cy.get('button[type=submit]').should('be.visible').click()
        cy.go('back')
    })

    it('Verify More Languages', function()
    {
        cy.get('.lang-list-button').should('be.visible').click()
    })

    /*
    it('Verify Other Languages', function()
    {
        cy.get('a[href="https://meta.wikimedia.org/wiki/Special:MyLanguage/List_of_Wikipedias"]').should('be.visible').click()
        cy.title().should('eq','List of Wikipedias - Meta')
        cy.go('back')
    })
    */

    it('Verify Wiki Description', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div:nth-child(1) > div > div.footer-sidebar-icon.sprite.svg-Wikimedia-logo_black').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div:nth-child(1) > div > div.footer-sidebar-text.jsl10n').should('be.visible').should('have.text','\nWikipedia is hosted by the Wikimedia Foundation, a non-profit organization that also hosts a range of other projects.\n')
        cy.get('a[href="https://donate.wikimedia.org/?utm_medium=portal&utm_campaign=portalFooter&utm_source=portalFooter"]').should('be.visible')
    })

    it('Verify Download Wiki For Android or iOS', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.footer-sidebar.app-badges > div > div > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.footer-sidebar.app-badges > div > div > p').should('be.visible').should('have.text','\nSave your favorite articles to read offline, sync your reading lists across devices and customize your reading experience with the official Wikipedia app.\n')
        cy.get('a[href="https://en.wikipedia.org/wiki/List_of_Wikipedia_mobile_applications"]').should('be.visible').click()
        cy.title().should('eq','List of Wikipedia mobile applications - Wikipedia')
        cy.go('back')
        cy.get('a[href="https://play.google.com/store/apps/details?id=org.wikipedia&referrer=utm_source%3Dportal%26utm_medium%3Dbutton%26anid%3Dadmob"]').should('be.visible').should('have.text','\nGoogle Play Store\n')
        cy.get('a[href="https://itunes.apple.com/app/apple-store/id324715238?pt=208305&ct=portal&mt=8"]').should('be.visible').should('have.text','\nApple App Store\n')
    })

    it('Verify Wiki Commons', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Commons')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Freely usable photos & more')
    })

    it('Verify WikiVoyage', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(2) > a > div.other-project-icon').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(2) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikivoyage')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(2) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free travel guide')
    })

    it('Verify Wiktionary', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(3) > a > div.other-project-icon').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(3) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wiktionary')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(3) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free dictionary')
    })

    it('Verify Wikibooks', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(4) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(4) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikibooks')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(4) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free textbooks')
    })

    it('Verify Wikinews', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(5) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(5) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikinews')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(5) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free news source')
    })

    it('Verify Wikidata', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(6) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(6) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikidata')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(6) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free knowledge base')
    })

    it('Verify Wikiversity', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(7) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(7) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikiversity')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(7) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free course materials')
    })

    it('Verify Wikiquote', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(8) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(8) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikiquote')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(8) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free quote compendium')
    })

    it('Verify MediaWiki', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(9) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(9) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','MediaWiki')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(9) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free & open wiki application')
    })

    it('Verify Wiki Commons', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Commons')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(1) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Freely usable photos & more')
    })

    it('Verify Wikisource', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(10) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(10) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikisource')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(10) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free library')
    })

    it('Verify Wikispecies', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(11) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(11) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Wikispecies')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(11) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Free species directory')
    })

    it('Verify Meta-Wiki', function()
    {
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(12) > a > div.other-project-icon > div').should('be.visible')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(12) > a > div.other-project-text > span.other-project-title.jsl10n').should('be.visible').should('have.text','Meta-Wiki')
        cy.get('#www-wikipedia-org > div.footer > div.other-projects > div:nth-child(12) > a > div.other-project-text > span.other-project-tagline.jsl10n').should('be.visible').should('have.text','Community coordination & documentation')
    })

    it('Verify Site License', function()
    {
        cy.get('#www-wikipedia-org > p > small:nth-child(1)').should('be.visible').should('have.text','This page is available under the Creative Commons Attribution-ShareAlike License')
        cy.get('a[href="https://creativecommons.org/licenses/by-sa/3.0/"]').should('be.visible').should('have.text','Creative Commons Attribution-ShareAlike License')
        cy.get('a[href="https://meta.wikimedia.org/wiki/Terms_of_use"]').should('be.visible').should('have.text','Terms of Use')
        cy.get('a[href="https://meta.wikimedia.org/wiki/Privacy_policy"]').should('be.visible').should('have.text','Privacy Policy')
    })

})