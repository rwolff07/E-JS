const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]
const cursos=["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"]
cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+chave+1)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el
    caixa1.appendChild(novoElemento)
})