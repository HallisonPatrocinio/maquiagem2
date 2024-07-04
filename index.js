let produtos = [{
    prod:1,
    Nome: 'Ramona',
    Descrição:'Batom vermelho',
    Preço: 25.90,
    imagem:'img/batom.webp'
    
    },
    {
        prod:2,
        Nome: 'Ramona',
        Descrição:'Batom vermelho',
        Preço: 25.90,
      imagem:'img/batom.webp'
    },
    
    {
        prod:3,
        Nome: 'Ramona',
        Descrição:'Batom vermelho',
        Preço: 25.90,
          imagem:'img/batom.webp'
    
    }
    ]
    
    produtos.forEach((produto)=>{

 
      produto.Preço = produto.Preço.toFixed(2).replace(".",",")

    })
    
    for (lista of produtos) {
    const infosLista = ` 
    <div class = "borda-produtos"

    <div class = "caracteristicas-produto">
    <img class="fotos-produtos" src="${lista.imagem}" alt="">
    <h1 class = "titulo-produto">${lista.Nome}</h1>
    <p>Batom vermelho</p>
    <span> R$ ${lista.Preço}</span>
    
    </div>
    </div>
    `
    
    document.querySelector(".produtos").innerHTML+=infosLista
    }
    //////////carrossel//////////////
    
    let slides = document.querySelectorAll(".carousel-slide img");
    let setaEsquerda = document.querySelector(".prevBtn");
    let setaDireita = document.querySelector(".nextBtn");
    
    let inicialIndex = 0;
    
    function nextslide() {
        slides.forEach((img, index) => {

            console.log(index)
            if (index === inicialIndex) {
                img.classList.add("ativo");
            } else {
                img.classList.remove("ativo");
            }
        });
    
        // Atualiza o inicialIndex para o próximo slide
        inicialIndex = (inicialIndex + 1) % slides.length;
    }
    
    setaEsquerda.addEventListener("click", nextslide);


    

/////////////////evento ao click menu hamburguer///////////////
let menuHamburguer = document.querySelector(".svg-menu")
let opçoesMenu = document.querySelectorAll(".opçoes-menu-hamurguer")




function showMenu () {
opçoesMenu.forEach((itens)=>{
itens.classList.toggle("ativo")

})


}


menuHamburguer.addEventListener("click",showMenu)