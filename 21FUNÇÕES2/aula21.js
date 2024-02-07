function canal(){
    let n1=8
    let n2=6
    let res=n1*n2
    if(res%2==0){
        return "Par"
    }else{
        return "Ímpar"
    }
}
let res=canal()
console.log(res)