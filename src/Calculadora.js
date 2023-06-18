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
}

export default Calculadora;