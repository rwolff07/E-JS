"use strict"

function teste(){
    if(true){
        let nome="Bruno"
        console.log("Dentro do if do teste. " + nome) +nome
    }
    console.log("Fora do if do teste: "+nome)
}
 teste()
console.log("Fora da função teste: " +nome)
/*Usando "let" sai na tela a variável "Bruno" que está declarada dentro do IF do Teste.
Por outro lado, não sai a variável "Bruno" que está fora da função IF do Teste e também a que está fora da função Teste.
Essa restrição de controle só é obtido usando o "let" */