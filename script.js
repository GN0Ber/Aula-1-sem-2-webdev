/*
// Função normal
function exemplo(num){
    return num * num;
}
console.log(exemplo(20));

// Arror Function
let exemplo1=(num)=>{
    return num * num;
}
console.log(exemplo1(20));

// Arror Function
let exemplo2=(num)=>{return num*num}
console.log(exemplo2(20));
*/

function mudar(){
    let novo = document.getElementById("idNome")
    document.getElementById("titulo").required = true;
    document.getElementById("titulo").innerHTML = novo.value;
}

function inserir(){
    let numero = document.getElementById("posicao").value-1;
    let novo = document.getElementById("novo").value;

    document.getElementsByClassName("colocado")[numero].innerHTML = novo;
}

function mostrar(){
    let numero = document.getElementById("numero").value-1;
    let mes = document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes;
}

document.querySelector("#btnMsg").onclick=()=> alert("Olá Mundo")

document.querySelector("#btnMsg").addEventListener('mouseout', function(){
    alert("Olá Mundo Novo")
})