// Reduce
const {shopCart} = require ("../data");

// Reduzir a um valor único. 
// Retorna o que eu pedir para retornar.


// 1. Qual o valor total desse carrinho de compras?

const totalValue = shopCart.reduce( 
    (acc, item) => acc + item.quantity * item.unitPrice,
0
);


// 2. Quantidade total de produtos do carrinho.

const totalProducts = shopCart.reduce((totalProduct, product)=> {
    return totalProduct + product.quantity;
}, 0);

console.table(totalProducts);