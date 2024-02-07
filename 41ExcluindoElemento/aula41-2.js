const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]
const cursos=["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL"]
cursos.map((el,chave)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+(chave+1))
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=el

    const btn_lixo=document.createElement("img")
    btn_lixo.setAttribute("src","./lixo.png")
    btn_lixo.setAttribute("class","btn_lixo")
    btn_lixo.addEventListener("click",(evt)=>{
        caixa1.removeChild(evt.target.parentNode)
    })
    novoElemento.appendChild(btn_lixo)
    caixa1.appendChild(novoElemento)
})