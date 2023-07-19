

function calcular(){
var salario = Number(document.getElementById("salario").value)
var filho = Number(document.getElementById("filho").value)
var empregado = document.getElementById("empregado").value
let familia = null 



if(salario <= 806.08 ) {
    familia = 41.37 * filho
}
else if(salario>= 806.81 && salario <= 1212.64){
    familia = 29.16 * filho
}
else{
    familia = 0
}
alert(empregado+", O salario familia e de R$ "+ familia)
}