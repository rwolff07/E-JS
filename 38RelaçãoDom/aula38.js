const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]

console.log(caixa1.firstElementChild) //pega o primeiro elemento
console.log(caixa1.children[2]) //pega o terceiro elemento
console.log(caixa1.lastElementChild) //pega o último elemento
console.log(caixa1.children) //pega todos os elementos
console.log(document.getRootNode()) //Retorna o nó raiz, no caso, todo o Document.



