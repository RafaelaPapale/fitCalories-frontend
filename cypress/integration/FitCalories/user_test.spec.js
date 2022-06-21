/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Caso de Teste: Registrar novo usuário', () => {

  it('Caso de Teste: Registrar um usuario com sucesso!', () => {
    cy.visit('http://localhost:5000/create');
    cy.get('#email').type(`renzo${Math.random()}@inatel.br`);
    cy.get('#nome').type("Renzo Paranaíba");
    cy.get('#senha').type("jumpofthecat");
    cy.get('#peso').type(70);
    cy.get('#idade').type(32);
    cy.get('#altura').type(1.73);
    cy.get('#botão-cadastrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Usuário criado com sucesso!');
  });

  it('Caso de Teste: Erro ao criar usuário que não adiciona todas as informações', () => {
    cy.visit('http://localhost:5000/create');
    cy.get('#email').type(`renzo${Math.random()}@inatel.br`);
    cy.get('#nome').type("Renzo Paranaíba");
    cy.get('#senha').type("jumpofthecat");
    cy.get('#botão-cadastrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Preencha todos os campos para prosseguir!');
  });

  it('Caso de Teste: Erro ao criar usuário', () => {
    cy.visit('http://localhost:5000/create');
    cy.get('#email').type(`renzo${Math.random()}@inatel.br`);
    cy.get('#nome').type("Renzo Paranaíba");
    cy.get('#senha').type("jumpofthecat");
    cy.get('#peso').type("setenta");
    cy.get('#idade').type(32);
    cy.get('#altura').type(1.73);
    cy.get('#botão-cadastrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Ops algo deu errado!');
  });
});