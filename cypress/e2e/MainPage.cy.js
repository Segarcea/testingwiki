/// <reference types="cypress" />
import data from '../fixtures/leftpanel.json'

describe('StartingPage', function()
{

    it('Verify Title of the Page', function()
    {
        cy.visit('https://www.wikipedia.org')
        cy.get('#js-link-box-en').click()
        cy.title().should('eq','Wikipedia, the free encyclopedia')
    })

    it('Verify Wiki Logo', function()
    {
        cy.get('.mw-wiki-logo').should('have.attr','href')
        cy.get('.mw-wiki-logo').should('have.attr','title')
        cy.get('.mw-wiki-logo').should('be.visible').invoke('attr','href').should('eq','/wiki/Main_Page')
        cy.get('.mw-wiki-logo').should('be.visible').invoke('attr','title').should('eq','Visit the main page')
    })

    it('Verify Left Panel', function()
    {
        cy.get('#p-navigation').invoke('attr','role').should('eq','navigation')
        cy.get('#p-navigation > h3 > span').should('have.text','Navigation')
        cy.get('#p-navigation > div > ul > li > a').each((item, index) => {
            cy.wrap(item).should('contain.text', data.navigation[index])
            cy.wrap(item).invoke('attr','href').should('eq', data.navigation_url[index])
        }) 
        
        cy.get('#p-interaction').invoke('attr','role').should('eq','navigation')
        cy.get('#p-interaction > h3 > span').should('have.text','Contribute')
        cy.get('#p-interaction > div > ul > li > a').each((item, index) => {
            cy.wrap(item).should('contain.text', data.contribute[index])
            cy.wrap(item).invoke('attr','href').should('eq', data.contribute_url[index])
        }) 

        cy.get('#p-tb').invoke('attr','role').should('eq','navigation')
        cy.get('#p-tb > h3 > span').should('have.text','Tools')
        cy.get('#p-tb > div > ul > li > a').each((item, index) => {
            cy.wrap(item).should('contain.text', data.tools[index])
            cy.wrap(item).invoke('attr','href').should('eq', data.tools_url[index])
        }) 

        cy.get('#p-coll-print_export').invoke('attr','role').should('eq','navigation')
        cy.get('#p-coll-print_export > h3 > span').should('have.text','Print/export')
        cy.get('#p-coll-print_export > div > ul > li > a').each((item, index) => {
            cy.wrap(item).should('contain.text', data.prntexp[index])
            cy.wrap(item).invoke('attr','href').should('eq', data.prntexp_url[index])
        }) 

        cy.get('#p-wikibase-otherprojects').invoke('attr','role').should('eq','navigation')
        cy.get('#p-wikibase-otherprojects > h3 > span').should('have.text','In other projects')
        cy.get('#p-wikibase-otherprojects > div > ul > li > a').each((item, index) => {
            cy.wrap(item).should('contain.text', data.otherproj[index])
            cy.wrap(item).invoke('attr','href').should('eq', data.otherproj_url[index])
        }) 
    })

    it('Verify Not Logged in Topbar', function()
    {
        cy.get('#pt-anonuserpage > span').should('have.text','Not logged in').invoke('attr','title').should('eq','The user page for the IP address you are editing as')
        
        cy.get('#pt-anontalk > a').should('have.text','Talk').invoke('attr','href').should('eq','/wiki/Special:MyTalk')
        cy.get('#pt-anontalk > a').invoke('attr','title').should('eq','Discussion about edits from this IP address [alt-shift-n]')
        
        cy.get('#pt-anoncontribs > a').should('have.text','Contributions').invoke('attr','href').should('eq','/wiki/Special:MyContributions')
        cy.get('#pt-anoncontribs > a').invoke('attr','title').should('eq','A list of edits made from this IP address [alt-shift-y]')
        
        cy.get('#pt-createaccount > a').should('have.text','Create account').invoke('attr','href').should('eq','/w/index.php?title=Special:CreateAccount&returnto=Main+Page')
        cy.get('#pt-createaccount > a').invoke('attr','title').should('eq','You are encouraged to create an account and log in; however, it is not mandatory')
        
        cy.get('#pt-login > a').should('have.text','Log in').invoke('attr','href').should('eq','/w/index.php?title=Special:UserLogin&returnto=Main+Page')
        cy.get('#pt-login > a').invoke('attr','title').should('eq',"You're encouraged to log in; however, it's not mandatory. [alt-shift-o]")
    })

    it('Verify Top Tabs', function()
    {
        cy.get('#ca-talk > a').should('have.text','Talk').invoke('attr','title').should('eq','Discuss improvements to the content page [alt-shift-t]')
        cy.get('#ca-talk > a').invoke('attr','href').should('eq','/wiki/Talk:Main_Page')
        cy.get('#ca-talk > a').click()
        cy.title().should('eq','Talk:Main Page - Wikipedia')

        cy.get('#ca-nstab-main > a').should('have.text','Main Page').invoke('attr','title').should('eq','View the content page [alt-shift-c]')
        cy.get('#ca-nstab-main > a').invoke('attr','href').should('eq','/wiki/Main_Page')
        cy.get('#ca-nstab-main > a').click()
        cy.title().should('eq','Wikipedia, the free encyclopedia')
    })

    it('Verify Search Bar', function()
    {
        cy.get('#searchInput').should('be.visible').type('random')
        cy.get('#searchButton').should('be.visible').click()
        cy.title().should('eq','Randomness - Wikipedia')
        cy.go('back')
        cy.title().should('eq','Wikipedia, the free encyclopedia')
    })

    it('Verify Top Bars', function()
    {
        cy.get('#Welcome_to_Wikipedia').should('have.text','Welcome to Wikipedia')
        cy.get('#Welcome_to_Wikipedia > a').should('have.text','Wikipedia').invoke('attr','href').should('eq','/wiki/Wikipedia')

        cy.get('#mp-free').should('have.text','the free encyclopedia that anyone can edit.')
        cy.get('a[href="/wiki/Free_content"]').should('have.text','free').invoke('attr','href').should('eq','/wiki/Free_content')
        cy.get('a[href="/wiki/Encyclopedia"]').should('have.text','encyclopedia').invoke('attr','href').should('eq','/wiki/Encyclopedia')
        cy.get('a[href="/wiki/Help:Introduction_to_Wikipedia"]').should('have.text','anyone can edit').invoke('attr','href').should('eq','/wiki/Help:Introduction_to_Wikipedia')

        cy.get('a[href="/wiki/Special:Statistics"]').invoke('attr','href').should('eq','/wiki/Special:Statistics')
        cy.get('a[href="/wiki/English_language"]').should('have.text','EnglishEnglish').invoke('attr','href').should('eq','/wiki/English_language')
    })

    it('Verify Subsections', function()
    {
        cy.get('#mp-tfa-h2 > span[class="mw-headline"]').should('have.text',"From today's featured article")
        cy.get('#mp-dyk-h2 > span').should('have.text',"Did you know ...")
        cy.get("#In_the_news").should('have.text',"In the news")
        cy.get("#On_this_day").should('have.text',"On this day")
        cy.get('#mp-tfp-h2 > span[class="mw-headline"]').should('have.text',"Today's featured picture")
        cy.get("#Other_areas_of_Wikipedia").should('have.text',"Other areas of Wikipedia")
        cy.get('#mp-sister > span[class="mw-headline"]').should('have.text',"Wikipedia's sister projects")
        cy.get("#Wikipedia_languages").should('have.text',"Wikipedia languages")
    })

})