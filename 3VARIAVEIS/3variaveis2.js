"use strict"

function teste(){
        if(true){
            var nome="Bruno"    
            console.log("Dentro do if do teste. " + nome) +nome
    }
    console.log("Fora do if do teste: "+nome)
}
 teste()
console.log("Fora da função teste: " +nome)
/*Usando "var" sai na tela a variável "Bruno" que está declarada dentro do IF do Teste e dentro da função Teste.
Por outro lado, não sai a variável "Bruno" que está fora da função Teste, pois não está declarada fora do escopo da função Teste. */