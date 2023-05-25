//Explicando pro Typescript que o meu HTML Element é um Input:

let idadeField = document.getElementById("idade") as HTMLInputElement; // Usamos essa parte final pro Typescript entender que é um INPUT

console.log(idadeField.value); //Caso contrário eu não poderia usar VALUE aqui, pois constaria erro, só um INPUT tem value