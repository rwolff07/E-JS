/* 
OPERADORES LÓGICOS
&&: and (e)
||: or (ou)
!: not (negação)
*/

let n1,n2,n3,n4

n1=10
n2=5
n3=15
n4=2

console.log((n1>n2)&&(n1>n3)) //retorna falso
console.log((n1>n2)&&(n1<n3)) //retorna verdadeiro
console.log((n1>n2)||(n1>n3)) //retorna verdadeiro
console.log((n1<n2)&&(n1>n3)) //retorna falso
console.log(!((n1<n2)&&(n1>n3))) //retorna verdadeiro, pois negou o falso
