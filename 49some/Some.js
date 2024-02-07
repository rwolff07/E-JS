const p_array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos_array=[21,24,19,20,18,18,22]
p_array.innerHTML="["+elementos_array+"]"

btnVerificar.addEventListener("click", (evt)=>{
    resultado.innerHTML="Array não conforme"
    const ret=elementos_array.some((e,i,a)=>{
        if(e<24){
            resultado.innerHTML="Array não conforme na posição: "+(i+1)
        }
        return e>=24
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})
//Com o SOME basta que um valor satisfaça a condição.