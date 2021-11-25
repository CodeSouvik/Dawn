const { expect } = require("chai");
const { verify } = require("crypto");

describe("Product Page", function(){

    it("loads the product page", function(){

        cy.visit('https://devecommercestore.myshopify.com/password');
        cy.get('#password').type('souvik');
        cy.get('[type="submit"]').click();
        cy.visit('https://devecommercestore.myshopify.com/products/fastrack-watch').url().should('include','/products/');
    }),

    it("Adds Product to the page", function(){

        cy.get('[name="plus"]').click();
        cy.get('.product-form__submit').click();
        cy.wait(2000);
    });
})