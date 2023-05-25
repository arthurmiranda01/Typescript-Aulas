// Types em Funções

let LetterToUpperCase = function(name:string):string { //Especificando que tenho que receber uma string1 e retornar uma string2
    let firtLetter = name.charAt(0).toUpperCase();
    return firtLetter+name.substring(1);
}

LetterToUpperCase('arthur');

