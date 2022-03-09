// Sort
const {shopCart} = require ('../data')
// Ordernar Elementos
// Ordenação segue a regra do unicode ASCII
// A-Z a-z
// Ademar, Zidane, allyne, 1, 2, 3, (números são consideradors string)


/* Sequencial
console.log (
    `ordenado:`,
    [2, 3, 1, 5].sort((valor_a, valor_b) => valor_a - valor_b)
);*/

/* De trás para frente
console.log (
    `ordenado:`,
    [2, 3, 1, 5].sort((valor_a, valor_b) => valor_b - valor_a)
);*/

// 1. Organize o carrinho do maior número de produtos para o menor.

const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);
//console.table(orderByTotalProducts);


// 2. Organize os passageiros por nome.
const orderByPassengerName = passengers.sort((pa, pb) => {
 if(pa.name.toLocaleLoweCase() < pb.name.toLocaleLoweCase()) return -1;
 if(pa.name.toLocaleLoweCase() > pb.name.toLocaleLoweCase()) return 1;
 return 0;
});

console.table(orderByPassengerName);