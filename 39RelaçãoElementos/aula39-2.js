const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

console.log(c1_2)
console.log(c1_2.parentNode) //pega o pai de c1_2
console.log(c1_2.parentNode.parentNode) //pega o avô de c1_2
console.log(c1_2.parentNode.parentNode.children[3]) //pega o filho de posição de 3 de caixa1
