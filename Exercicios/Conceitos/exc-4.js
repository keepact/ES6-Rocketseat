const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const { nome, endereco : { estado, cidade } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);


function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
   
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));