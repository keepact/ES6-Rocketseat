// REST

// const usuario = {
//    nome: 'Diego',
//    idade: 23,
//    empresa: 'Rockeseat'
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// const arr = [1, 2, 3, 4];

// const [ a, b, ...c ] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(a, b, c) {
//    return a + b + c;
//}

// function soma(...params) {
//    return params.reduce((total, next) => total + next);
// }

// function soma(a, b,...params) {
//    return params;
// }

// console.log(soma(1, 3, 4, 5, 6, 7, 8, 9));

// SPREAD

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [ ...arr1, ...arr2 ];

// console.log(arr3);

const usuario1 = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rockeseat',
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);
