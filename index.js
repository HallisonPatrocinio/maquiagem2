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
    
    },
    {
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
    
    function mostrarSlide(index) {
        slides.forEach((foto, i) => {
            if (i === index) {
                foto.classList.add("ativo");
            } else {
                foto.classList.remove("ativo");
            }
        });
    }
    
    function mudarEsquerda() {
        inicialIndex = (inicialIndex - 1 + slides.length) % slides.length;
        mostrarSlide(inicialIndex);
    }
    
    function mudarDireita() {
        inicialIndex = (inicialIndex + 1) % slides.length;
        mostrarSlide(inicialIndex);
    }
    
    setaEsquerda.addEventListener("click", mudarEsquerda);
    setaDireita.addEventListener("click", mudarDireita);
    
    // Mostrar o slide inicial
    mostrarSlide(inicialIndex);
   


/////////////////evento ao click menu hamburguer///////////////
let menuHamburguer = document.querySelector(".svg-menu")
let opçoesMenu = document.querySelectorAll(".opçoes-menu-hamurguer")

function showMenu () {

opçoesMenu.forEach((itens)=>{
itens.classList.toggle("ativo")

function removerMenu(event) {


if (event.target.classList.contains('svg-menu') || event.target.classList.contains('opçoes-menu-hamurguer') || event.target.classList.contains('list-menu-hamburguer')) {

}

else {
    itens.classList.remove("ativo")

}


}
window.addEventListener("click",removerMenu)
}
)


}

menuHamburguer.addEventListener("click",showMenu)






