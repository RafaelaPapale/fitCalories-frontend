/* eslint-disable no-undef */
/// <reference types="cypress"/>

describe('Caso de Teste: Login', () => {

  it('Caso de Teste: Logar um usuario com sucesso!', () => {
    var usuario = createUserFitCalories();
    cy.visit('http://localhost:5000/');
    cy.get('#email').type(usuario[0]);
    cy.get('#password').type(usuario[1]);
    cy.get('#botão-entrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Bem vindo de volta!');
  });

  it('Caso de Teste: Erro ao logar usuário que não adiciona todas as informações', () => {
    cy.visit('http://localhost:5000/');
    cy.get('#email').type("chrislima@inatel.br");
    cy.get('#botão-entrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Preencha corretamente todos os campos!');
  });

  it('Caso de Teste: Erro ao logar usuário que não existe!', () => {
    cy.visit('http://localhost:5000/');
    cy.get('#email').type("chrislima@inatel.br");
    cy.get('#password').type("c317-teste");
    cy.get('#botão-entrar').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should('contain.text', 'Ops algo deu errado!');
  });
});

function createUserFitCalories() {
  let nome = "Chris Lima";
  let email = `chrislima${Math.random()}@inatel.br`;
  let senha = "c317-testes";
  let peso = 75;
  let idade = 30;
  let altura = 1.70;
  let userInfo = [email, senha];


  cy.visit('http://localhost:5000/');
  cy.get('#botão-criar').click();
  cy.get('#email').type(email);
  cy.get('#nome').type(nome);
  cy.get('#senha').type(senha);
  cy.get('#peso').type(peso);
  cy.get('#idade').type(idade);
  cy.get('#altura').type(altura);
  cy.get('#botão-cadastrar').click();

  return userInfo;
}