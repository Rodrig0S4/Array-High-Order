/* Filter 
Criar um novo array function (element, index, array){} */

const { childrenAge, mailList } = require('../data')

/*1. Crianças entre 2 - 11 anos.*/

/*Imutabilidade*/
const childrenFiltered = childrenAge.filter(element => 
    element >= 2 && element <= 11 
     
);

console.table(childrenFiltered);


/*2. Emails rocketseat.com.br */


const filteredMails = mailList.filter(mail => mail.includes("@rocketseat.com"));

console.table(filteredRocketseatMails);

