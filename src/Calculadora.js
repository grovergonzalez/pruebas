class Calculadora{
    constructor(frase){
        this.frase = frase;
    }
    get_frase(frase){
        return frase;
    }
    separar_palabras(frase){
        const  palabras = frase.split(/\W+/);
        return palabras;
    }
    contar_palabras_iguales(frase) {
        const palabras = this.separar_palabras(frase);
        const contador = {};
        
        for (let i = 0; i < palabras.length; i++) {
            if (contador.hasOwnProperty(palabras[i])) 
            {
                contador[palabras[i]]++;
            } else {
                contador[palabras[i]] = 1;
            }
        }
        return contador;
    }
}

export default Calculadora;