const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]

const novoElemento=document.createElement("div")
novoElemento.setAttribute("id","c7")
novoElemento.setAttribute("class","curso c1")
novoElemento.innerHTML="React Native"

caixa1.appendChild(novoElemento)