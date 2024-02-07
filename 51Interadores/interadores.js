const valores=[10,8,9,2]
const it_valores=valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next()) //Com o next ele pega o próximo elemento da lista, quando chegar no final teremos o "Done" como "True"





// SÃO COLEÇÕES INTERÁVEIS
//Arrays
//Strings
//Sets
//Map - Existe o método map e a coleção mnap
