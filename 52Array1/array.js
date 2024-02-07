const caixa=document.querySelector("#caixa")

let cursos=["HTML","CSS","JavaCript"]

console.log(cursos[1]) //Olhando o console estará impresso: CSS.
cursos[0]="C++" //Troquei no array o elemento "HTML" por "C++"
cursos.push("Python")
cursos.push("PHP") //O push acrescenta o elemento no final do array.
cursos.pop() //Retira o último elemento do array, no caso o "PHP" que havia sido acrescentado por último.
cursos.unshift("PHP") //O unshift acrescenta elemento, no caso o PHP, no inicio do array.
cursos.shift() //Retira do inicio o elemento, no caso o PHP
cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p) 
})