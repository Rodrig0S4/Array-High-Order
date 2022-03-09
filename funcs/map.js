// Map

const {passengers} = require("../data");

// Não vai alterar meu objeto
// Vai retornar um objeto (Respeitando o tamanho do objeto original). 

// 1. Quantos anos eles tem?

const newPassengers = passengers.map(passenger => {
    return `${passenger.name} tem ${2019 - passenger.birthYear} anos`;
});

console.table(newPassengers);

// 2. Encontre o nome palíndromo.

const founds = passengers.map(passenger => {
    const reverseName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

    if(reverseName.toLowerCase() = passenger.name.toLowerCase())
    return `This is palindromo: ${passenger.name}`;
});

console.table(founds);