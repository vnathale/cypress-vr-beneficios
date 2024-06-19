
/// <reference types="cypress" />

describe('Adicionar produto ao carrinho', () => {
  it('Realizar fluxo de add produto ao carrinho', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
    cy.visit('https://www.vr.com.br')
    
    cy.window().then((win) => {
      cy.stub(win, "open")
        .callsFake((url) => {
          return win.open.wrappedMethod.call(win, url, "_self");
        })
        .as("open");
    });
    cy.get('#buttonCompreOnline').click()
    cy.get("@open").should(
      "have.been.calledWithMatch",
      "https://loja.vr.com.br/"
    );    
    cy.get('.fas').click()

    //Adicionar Produto ao Carrinho com Sucesso 
    cy.get('#btn-selecionar-modalidade-avulso').click()
    cy.get('#produto-refeicao-quantidade').type("30") 
    cy.get('#produto-refeicao-valor').type("1000")
    cy.get('#btn-adicionar-carrinho-refeicao').click()
    cy.get('#btn-meu-carrinho > .fa-light').click()
    


      

  });
})