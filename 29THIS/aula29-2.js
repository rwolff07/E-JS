function aluno(nome,nota){
    this.nome=nome
    this.nota=nota
    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(nome)
            console.log(nota)
        },2000) //2000 no setTimeout indica um retardo de 2 segundos
    }

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000) //2000 no setTimeout indica um retardo de 2 segundos

    }
}
const al1=new aluno('Reni', 100)
al1.dados_anonimos()
al1.dados_arrow()