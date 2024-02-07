const caixa1=document.querySelector("#caixa1")
const btn=[...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes()) //retorma verdadeiro pois verifica que há DIV filhos 
console.log(btn[0].hasChildNodes()) //mesmo que não tenha DIV filho, retorna verdadeiro pois considera o texto como filho

//assim, has.ChildNodes retorna verdadeiro para filhos pois considera DIV e o texto das DIVs, para
//contornar isso pode se utilizar if juntamente com Children.length

if (btn[0].children.length > 0){
    console.log("Possui filhos.")
}else{
    console.log("Não possui filhos.")
}

console.log(btn[0].children.length>0 ? "Possui filhos." : "Não possui filhos.")

console.log(caixa1.children[1].innerHTML="Teste") //Pega a div filho na posição 1 e troca o texto para "Teste".