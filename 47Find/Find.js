const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=["CSS","Html","Java","PHP"]
p_array.innerHTML="["+elementos_array+"]"

btnPesquisar.addEventListener("click", (evt)=>{
    const ret=elementos_array.find((e,i,p)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML="Valor pesquisado: "+e+" na posisção: "+(i+1)
            return e
        }
    resultado.innerHTML="Valor não encontrado."
    })
})
//toUpperCase faz ser indiferente utilizar maiúscula ou minuscula a palavra pesquisada
