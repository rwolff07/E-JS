const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]
const cursos=["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"]
cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+(chave+1))
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    novoElemento.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target)
    })
// Remove o item ao clicar.
    caixa1.appendChild(novoElemento)
})