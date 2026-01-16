//Fichairo para listar todas as cervejas na pagina de cervejas
//Inclui logica de pesquisa e filtragem
//Inclui logica para mudar o idioma

document.addEventListener("DOMContentLoaded", () => {
    
    // Simulação de dados (Extendendo a base de dados para ter 12 itens)
    //podemos meter mais, 12 deve chegar para mostrar a funcionalidade
    const baseBeers = [
        { id: 1, name: "Heineken Original", style: "Lager ", img: "/img/home/heineken.jpg", price: "2,50€" },
        { id: 2, name: "Sagres Original", style: "Lager(Pilsner)", img: "/img/home/sagres.png", price: "2,00€" },
        { id: 3, name: "Super Bock Original", style: "Lager(Pilsner)", img: "/img/home/super.jpg", price: "2,20€" },
        { id: 4, name: "Erdinger Weissbier", style: "Weissbier(Cerveja de Trigo)", img: "/img/home/erdinger.jpg", price: "3,50€" },
        { id: 5, name: "Baron Des Cédres IPA", style: "IPA(India Pale Ale)", img: "/img/home/baron.png", price: "3,80€" },
        { id: 6, name: "Corona Extra", style: "Lager", img: "/img/home/corona.png", price: "3,00€" },
        { id: 7, name: "Sagres Preta", style: "Dark Lager", img: "/img/home/preta_web.png", price: "2,20€" },
        { id: 8, name: "Super Bock Abadia", style: "Belgian Abbey Ale", img: "/img/home/abadia.jpg", price: "2,50€" },
        { id: 9, name: "Super Bock Stout", style: "Stout", img: "/img/home/stout.png", price: "2,40€" },
        { id: 10, name: "Sagres 0,0%", style: "Lager sem Álcool", img: "/img/home/sagres-00.jpg", price: "2,00€" },
        { id: 11, name: "Super Bock sem Glúten", style: "Lager sem Glúten", img: "/img/home/supersem.jpg", price: "2,50€" },
        { id: 12, name: "Praxis", style: "Lager", img: "/img/home/praxishome.jpg", price: "2,20€" }
    ];

    // Gerar 12 cervejas
    let allBeers = [];
    while (allBeers.length < 12) {
        allBeers = allBeers.concat(baseBeers);
    }
    allBeers = allBeers.slice(0, 12); // Garante exatamente 12
    //se for para mudar o n de cervejas, mudar aqui

    // Adiciona IDs únicos virtuais para não dar erro na listagem
    allBeers = allBeers.map((beer, index) => ({ ...beer, uniqueId: index }));

    const gridContainer = document.getElementById("beer-grid-container");
    const searchBar = document.getElementById("searchBar");

    // Função para renderizar
    function renderBeers(list) {
        gridContainer.innerHTML = "";
        
        if(list.length === 0) {
            gridContainer.innerHTML = "<h3 style='color:#777; width:100%; text-align:center;'>Nenhuma cerveja encontrada.</h3>";
            return;
        }

        list.forEach(beer => {
            const card = document.createElement("a");
            // Mantemos o link para o detalhe original (usando o ID real do produto)
            card.href = `detalhe.html?id=${beer.id}`; 
            card.className = "beer-card-link";
            // Os cards sao iguais ao do home
            card.innerHTML = `
                <div class="beer-card">
                    <div class="card-image-container">
                        <img src="${beer.img}" alt="${beer.name}">
                    </div>
                    <div class="card-content">
                        <h3 class="beer-name">${beer.name}</h3>
                        <p class="beer-style">${beer.style}</p>
                        <div class="card-footer">
                            <span class="rating">4.5 <span>⭐</span></span>
                            <span class="price">${beer.price}</span>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // Renderizar inicial
    renderBeers(allBeers);

    // Funcionalidade de Pesquisa
    searchBar.addEventListener("keyup", (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allBeers.filter(beer => 
            beer.name.toLowerCase().includes(term) || 
            beer.style.toLowerCase().includes(term)
        );
        renderBeers(filtered);
    });
});