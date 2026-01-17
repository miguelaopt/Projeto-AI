document.addEventListener("DOMContentLoaded", () => {
    
    const baseBeers = [
        // ... (Mantém a tua lista de cervejas igual) ...
        { id: 1, name: "Heineken Original", style: "Lager", img: "/img/home/heineken.jpg", price: "2,50€" },
        { id: 2, name: "Sagres Original", style: "Lager (Pilsner)", img: "/img/home/sagres.png", price: "2,00€" },
        { id: 3, name: "Super Bock Original", style: "Lager (Pilsner)", img: "/img/home/super.jpg", price: "2,20€" },
        { id: 4, name: "Erdinger Weissbier", style: "Weissbier (Trigo)", img: "/img/home/erdinger.jpg", price: "3,50€" },
        { id: 5, name: "Baron Des Cédres IPA", style: "IPA (India Pale Ale)", img: "/img/home/baron.png", price: "3,80€" },
        { id: 6, name: "Corona Extra", style: "Lager", img: "/img/home/corona.png", price: "3,00€" },
        { id: 7, name: "Sagres Preta", style: "Dark Lager", img: "/img/home/preta_web.png", price: "2,20€" },
        { id: 8, name: "Super Bock Abadia", style: "Belgian Abbey Ale", img: "/img/home/abadia.jpg", price: "2,50€" },
        { id: 9, name: "Super Bock Stout", style: "Stout", img: "/img/home/stout.png", price: "2,40€" },
        { id: 10, name: "Sagres 0,0%", style: "Lager sem Álcool", img: "/img/home/sagres-00.jpg", price: "2,00€" },
        { id: 11, name: "Super Bock sem Glúten", style: "Lager sem Glúten", img: "/img/home/supersem.jpg", price: "2,50€" },
        { id: 12, name: "Praxis", style: "Lager", img: "/img/home/praxishome.jpg", price: "2,20€" }
    ];

    let allBeers = [...baseBeers]; 

    const gridContainer = document.getElementById("beer-grid-container");
    const searchBar = document.getElementById("searchBar");
    const styleFilter = document.getElementById("styleFilter");
    const glutenFilter = document.getElementById("glutenFilter");

    // 1. Povoar o Dropdown de Estilos
    const uniqueStyles = [...new Set(allBeers.map(b => b.style.split('(')[0].trim()))];
    uniqueStyles.sort().forEach(style => {
        const option = document.createElement("option");
        option.value = style;
        option.innerText = style;
        styleFilter.appendChild(option);
    });

    // 2. Obter tradução atual (função auxiliar)
    function getTrans(key) {
        const lang = localStorage.getItem('royal_lang') || 'pt';
        return (window.translations && window.translations[lang] && window.translations[lang][key]) 
               ? window.translations[lang][key] 
               : "";
    }

    // 3. Função de Renderização Atualizada
    function renderBeers(list) {
        gridContainer.innerHTML = "";
        
        if(list.length === 0) {
            // Usa a função de tradução para a mensagem de erro
            const msg = getTrans('no_beers_found') || "Nenhuma cerveja encontrada.";
            gridContainer.innerHTML = `
                <div style='width:100%; text-align:center; padding: 40px;'>
                    <h3 style='color:#777;'>${msg}</h3>
                </div>`;
            return;
        }

        list.forEach(beer => {
            const card = document.createElement("a");
            card.href = `detalhe.html?id=${beer.id}`; 
            card.className = "beer-card-link";
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

    // 4. Função Principal de Filtro
    function filterBeers() {
        const searchTerm = searchBar.value.toLowerCase();
        const selectedStyle = styleFilter.value.toLowerCase();
        const isGlutenFree = glutenFilter.checked;

        const filtered = allBeers.filter(beer => {
            const matchText = beer.name.toLowerCase().includes(searchTerm) || 
                              beer.style.toLowerCase().includes(searchTerm);
            const matchStyle = selectedStyle === "" || beer.style.toLowerCase().includes(selectedStyle);
            let matchGluten = true;
            if (isGlutenFree) {
                matchGluten = beer.style.toLowerCase().includes("sem glúten") || 
                              beer.name.toLowerCase().includes("sem glúten") ||
                              beer.name.toLowerCase().includes("gluten free");
            }
            return matchText && matchStyle && matchGluten;
        });

        renderBeers(filtered);
    }

    // 5. Atualizar textos dinâmicos (Placeholder e Mensagens) quando o idioma muda
    function updateDynamicTexts() {
        const placeholderText = getTrans('search_placeholder');
        if(placeholderText) searchBar.placeholder = placeholderText;
        
        // Re-executa o filtro para atualizar a mensagem de "Nenhum resultado" se estiver visível
        filterBeers();
    }

    // Listeners
    searchBar.addEventListener("keyup", filterBeers);
    styleFilter.addEventListener("change", filterBeers);
    glutenFilter.addEventListener("change", filterBeers);

    // Listener para mudança de idioma (Disparado pelo translation.js)
    window.addEventListener('languageChange', updateDynamicTexts);

    // Inicialização
    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat');

    if (category) {
        if (category === 'sem-alcool') {
            searchBar.value = "sem álcool";
        } else if (category === 'lager') {
            styleFilter.value = "Lager"; 
        } else if (category === 'ipa') {
            styleFilter.value = "IPA";
        }
    }
    
    // Executa uma vez para garantir que o placeholder está correto no arranque
    updateDynamicTexts();
});