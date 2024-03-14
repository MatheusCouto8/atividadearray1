//criando a lista de cores
let listaDeCores = ['1-azul', '2-vermelho', '3-rosa', '4-verde'];

//exibindo a lista
console.log("-_-_-Lista de cores-_-_-");
console.log(listaDeCores);

//reverse, ele inverte a ordem da array
listaDeCores.reverse()
console.log("-_-_-Lista revertida-_-_-");
console.log(listaDeCores);

//includes, mostra se tal item esta no array
let include = listaDeCores.includes("azul");
console.log(include);

//splice, remove elementos
listaDeCores.splice(1,1); //o primeiro parâmetro (1) define a posição onde o elemento será removido, 
//o segundo (1) mostra quantos elementos serão apagados
console.log("-_-_-Lista com elementos apagados-_-_-")
console.log(listaDeCores); 

//toString, transforma a array em uma string
let listacor = listaDeCores.toString();
console.log("---Lista em string---");
console.log(listacor);

//join, especifica um separador
let listadecor2 = listaDeCores.join (" / ");
console.log("---Lista com separador---");
console.log(listadecor2);