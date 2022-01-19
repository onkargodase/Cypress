

describe('Read Wriete operation in Cypress', () => {

    it('verify the write function', () => {

        cy.writeFile('sample.txt', "this is the first example of write opration \n")
        cy.writeFile('sample.txt',"this is updated text",{flag: 'a+'})
    })

    // Read same file using read function

    it('verify the read function',()=>{

        cy.readFile('sample.txt').should('exist')
        cy.readFile('sample.txt').should('contains',"updated")
    })
})


