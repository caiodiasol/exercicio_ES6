//criando array do objeto anlunos com os atributos: nome e nota;
const alunos = [
    { nome: 'Paulo', nota: 7},
    { nome: 'Ricardo', nota: 5},
    { nome: 'Vanessa', nota: 9},
    { nome: 'Maria', nota: 6},
    { nome: 'Carlos', nota: 7},
    { nome: 'Lunna', nota: 9},
    { nome: 'Jamile', nota: 5},
    { nome: 'Joana', nota: 4},
    { nome: 'Francine', nota: 9},
    { nome: 'Ana Paula', nota: 9},
    { nome: 'Vitoria', nota: 9},
];

//criando funcao para verificar em alunos os que tiveram média >= 6
const verificandoAlunosAprovados = (alunos) => 
    alunos.filter(alunos => alunos.nota >= 6);

const exibindoAlunosAprovados = verificandoAlunosAprovados(alunos);

console.log("Essa é a lista dos alunos que foram aprovados:");
console.log(exibindoAlunosAprovados);



