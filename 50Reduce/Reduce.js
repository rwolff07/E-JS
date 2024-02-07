const p_array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos_array=[1,2,3,4,5]
let ant=[]
let atua=[]
let dobro=[]
p_array.innerHTML="["+elementos_array+"]"

btnReduzir.addEventListener("click", (evt)=>{
    resultado.innerHTML=elementos_array.reduce((anterior, atual,posicao,array)=>{
        ant.push(anterior)
        atua.push(atual)
        dobro.push(atual*2)
        return atual+anterior
    })
    resultado.innerHTML+="</br>Valor anterior: "+ant+"</br>Valor atual: "+atua+"</br>Valor do dobro: "+dobro
})
//Permite operar o elemento anterior com o atual em sequencia, operando todos os elementos do array(matriz)
// Note que o resultado do return é o somatório dos elementos do array