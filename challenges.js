const { childrenAge, mailList, shopCart } = require('../data')

/**
 * Adicione o ano de nascimento das crianças para cada elemento do array.
 */

/*const children = childrenAge.map((child) => {
 return {
     age: child,
     birthYear: 2019 - child
 };
});

console.table(children);*/

const children = childrenAge.reduce((list, age) => {
    list.push({
        age,
        birthYear: 2019 - age
    });
    return [...list];

}, []);

/*console.table(children);*/

/**
 * Crie um array somente com os domínios da lista de e-mail.
 */

const domains = mailList.map(mail => {
    const mailArray = mail.split("@");
    return mailArray[1];
});

/*console.table(domains);*/

/**
 * Encontre o maior preço dos produtos abaixo de R$100,00.
 */

const bellow100 = shopCart
    .filter(product => product.unitPrice <= 100)
    /*.sort((a, b) => b - a)[0];*/
    .reduce((lastProduct, currentProduct) => {
        if (lastProduct.unitPrice > currentProduct.unitPrice) return lastProduct

        return currentProduct;

    },
        { unitPrice: 0 }
    );

console.table(bellow100);