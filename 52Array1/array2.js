const caixa=document.querySelector("#caixa")

let cores=["Azul","Branco","Preto","Vermelho"]
let cursos=["HTML","CSS","JavaCript",cores] //Dentro do array "cursos" foi inserido o array "cores"

console.log(cursos[3][1]) //Pega o quarto elemento do array "cursos", que é o array "cores" e de "cores" pega o segundo elemento(1), no caso "Branco"

cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})