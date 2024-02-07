let n1=[10,20,30]
let n2=[11,22,33,44]
let n3=[...n1,...n2]
console.log("n3: "+n3)

const jogador1={nome:"Bruno",energia:100,vidas:3,magia:50}
const jogador2={nome:"Bruce",energia:100,vidas:3,velocidade:80}
const jogador3={...jogador1, ...jogador2}
console.log(jogador3)

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
let valores=[1,5,4,11,12]
console.log(soma(...valores)) //O spread (...) considera apenas os três primeiros números de "valores". Retorna a soma: 1+5+4=10