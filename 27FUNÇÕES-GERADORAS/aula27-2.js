function* perguntas(){
    const nome=yield "Qual é o seu nome?"
    const esporte=yield "Qual é o seu esporte favorito?"
    const carro=yield "Qual é a cor do seu carro?"
    return "Seu nome é "+nome+", seu esporte favorito é "+esporte+" e a cor do seu carro é "+carro
}
const itc=perguntas()
console.log(itc.next().value)
console.log(itc.next("Bruno").value)
console.log(itc.next("vôlei").value)
console.log(itc.next("branco").value)