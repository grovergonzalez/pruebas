describe('Prueba de ingreso de frase', () => {
    it('debería permitir ingresar una frase en el campo de entrada', () => {
      const frase = 'Hola, mundo!';
      cy.visit('/');
      cy.get('#frase-input').type(frase);
      cy.get('#frase-input').should('have.value', frase);
    });
  });
  
  describe('Prueba de cálculo del resultado', () => {
    it('debería calcular y mostrar el resultado al hacer clic en el botón "Calcular"', () => {
      const frase = 'Hola, mundo!';
      const palabrasSeparadas = frase.split(/\W+/);
      const contadorPalabras = {
        'Hola': 1,
        'mundo': 1
      };
      cy.visit('/');
      cy.get('#frase-input').type(frase);
      cy.get('#calcular-btn').click();
      cy.get('#frase-resultado').should('contain.text', `Frase ingresada: ${frase}`);
      cy.get('#palabras-separadas-resultado').should('contain.text', `Palabras separadas: ${palabrasSeparadas.join(', ')}`);
      Object.keys(contadorPalabras).forEach(palabra => {
        const cantidad = contadorPalabras[palabra];
        cy.get('#contador-palabras-resultado').should('contain.text', `${palabra}: ${cantidad}`);
      });
    });
  });
  