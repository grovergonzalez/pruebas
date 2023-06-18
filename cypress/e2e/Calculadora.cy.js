describe('Pruebas del formulario', () => {
    it('debería permitir ingresar una frase y mostrarla', () => {
        cy.visit('/')
        const frase = 'Hola, mundo!' // Puedes modificar esta frase según tus necesidades
        cy.get('#frase').type(frase) // Ingresa la frase en el campo de entrada
        cy.get('#frase').should('have.value', frase) // Verifica que el valor del campo de entrada coincida con la frase ingresada
        cy.get("#Calcular-button").click();
        cy.get("#resultado-div").should("contain", "Hola, mundo");
    })
  })
  