const f=new Function("v1","v2","return v1+v2") //Função construtor. Lembrar de colocar "Function" com F maiúsculo quando estiver utilizando o "new".
// e os parâmetros devem estar em aspas, onde o último é a ação que será feita.
console.log(f(5,10))