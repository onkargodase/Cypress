

describe('verify the Login functionality',()=>{


    it('test login with valid credentials',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')

        // Every test case should end with assertion


    })

    it('test login with invalid credentials',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin1233')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('be.visible')


    })



})

describe('verify thecy Login functionality',function(){



})