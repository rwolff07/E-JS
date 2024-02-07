let n1=10
let n2=11
let res1=n1&n2
console.log(res1) //retorna 10 pela coincidencia de 1 nas mesmas casas dos números na representação binária

let n3=10
let n4=11
let res2=n3|n4
console.log(res2) //retorna 11 por ocorrer o 1 em pelo menos uma das casas dos números na representação binária

let n5=10
let n6=11
let res3=n5^n6
console.log(res3) //retorna 1 considera a ocorrência do 1 apenas uma vez nas casas dos números na representação binária

let n7=10
let res4=n7<<1
console.log(res4) //retorna 20, desloca os dígitos 1 casa à esquerda. O que indica o dobro do número na representação decimal.

let n8=10
let res5=n7>>1
console.log(res5) //retorna 5, desloca os dígitos 1 casa à direita. O que indica a metade do número na representação decimal.
