let dados = document.querySelectorAll(".clear");
let btnLimpar = document.querySelector("#botao-claro");

function limpar() {
dados.forEach((itens)=>{
itens.value = null

})

}

btnLimpar.addEventListener("click",limpar)



let cep = document.querySelector("#cep")

console.log(cep.value)




 fetch (`https://viacep.com.br/ws/01001000/json/`).then(r=>r.json()).then(info=>{


 })
