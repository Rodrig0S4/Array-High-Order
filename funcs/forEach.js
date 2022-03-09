//ForEach

// Não é Imutavel 
// Não retorna por si só um novo objeto

const { passengers } = require ("../data");

//1. Adicione a idade (age) para cada pessoa

passengers.forEach (passenger => {
    passenger.age = 2019 = passenger.birthYear;
});

console.table(passengers);