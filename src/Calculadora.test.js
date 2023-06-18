import Calculadora from "./Calculadora";

const newfrase = new Calculadora("juan esta de vacaciones");
describe("Calcular cuantas veces aparece una palabra en una frase", () => {
    it("deberia retornar una frase", () => {
      expect(newfrase.frase).toEqual("juan esta de vacaciones");
    });
    it("deberia retornar la frase como parámetro", () => {
        expect(newfrase.get_frase(newfrase)).toEqual({"frase": "juan esta de vacaciones"});
    });
    var frasec = "Esto es una frase";
    it("deberia retornar la frase de palabras separada por espacios en un array ", () => {
        expect(newfrase.separar_palabras(frasec)).toEqual(["Esto", "es", "una", "frase"]);
    });
  });