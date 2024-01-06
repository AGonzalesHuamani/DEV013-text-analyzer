const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const word = text.trim().split(/\s+/g).length;
    return word;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const character = text.length;
    return character
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //Use expresiones regulares W llama a todo lo q no es un caracter de palabra y la g es global osea todo .length cantidad 
    const excludingSpaces = text.replace(/\W/g, "").length;
    return excludingSpaces
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // con el metodo match estoy buscando solo nos numeros (exp regular)
    const number = text.match(/\b\d+(\.\d+)?\b/g)
    let numberCount = 0;
    if (number === null) {
      return 0
    } else {
      for (let i = 0; i < number.length; i++) {
        numberCount++;
      }
    }
    return numberCount
  },
  getNumberSum: (text) => {
    // //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const number = text.match(/\b\d+(\.\d+)?\b/g)
    let numberSum = 0;
    if (number === null) {
      return 0
    } else {
      for (let i = 0; i < number.length; i++) {
        const item = number[i]
        numberSum = numberSum + parseFloat(item);
      }
    }
    return numberSum;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const word = text.trim().split(/\s+/g)
    let suma = 0
    for (let i = 0; i < word.length; i++) {
      suma += word[i].length;
    }
    const getAverageWordLength = suma / word.length;
    return Math.round(getAverageWordLength*100)/100;
  },
 
};

export default analyzer;
