class Calculadora{
    constructor(frase){
        this.frase = frase;
    }
    get_frase(frase){
        return frase;
    }
    separar_palabras(frase){
        var palabras = frase.split(" ");
        return palabras;
    }
}

export default Calculadora;