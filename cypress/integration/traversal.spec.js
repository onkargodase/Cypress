

//Travarsal method in cypress


// test case scenario
describe('travarsal methos in cypress', () => {


    // test case name
    it('to get children of DOM elements, use the .children() command', () => {

        //get all children  .children()
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)


    })


    it('To get the first DOM element within elements, use the .first() command.', () => {

        // gives first element of list .first()
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })

    //to get the last element. .last()

    it('To get the last DOM element within elements, use the .last() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text', 'Sugar')

    })

    //to get next sibling .next()

    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id = "coffee"]').next().should('have.attr', 'id', 'tea')

    })

       //to get the element fron specific index .eq()
    it.only('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(4).should('have.text','Sugar')

    })





})




