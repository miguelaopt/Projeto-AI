document.addEventListener("DOMContentLoaded", () => {
    // 1. Verificar Scripts Essenciais
    if(typeof beerDatabase === 'undefined') {
        console.error("ERRO: O ficheiro js/cervejas.js não foi carregado.");
        return;
    }

    // 2. Identificar a Cerveja
    const params = new URLSearchParams(window.location.search);
    const beerId = parseInt(params.get("id"));
    const beer = beerDatabase.find(b => b.id === beerId);

    if (beer) {
        function renderBeerDetail() {
            const lang = localStorage.getItem('royal_lang') || 'pt';

            // Dados Básicos
            document.title = `${beer.name} | Royal`;

            // Imagem (Usa a detailImg se existir, senão usa a normal)
            const finalImg = beer.detailImg || beer.img;
            document.getElementById("detail-img").src = finalImg;
            
            document.getElementById("detail-name").innerText = beer.name;
            document.getElementById("detail-style").innerText = beer.style;
            
            // --- CORREÇÃO AQUI: Atualizar o preço de cima ---
            document.getElementById("detail-price").innerText = beer.price;
            
            // Rating
            document.getElementById("detail-rating").innerText = `${beer.rating} ⭐`;
            
            // Tratamento Preço para cálculos (Converte "2,50€" em 2.50)
            const basePrice = parseFloat(beer.price.replace(',', '.').replace('€', ''));
            const initialPrice = !isNaN(basePrice) ? basePrice.toFixed(2) : "0.00";

            // Descrição e Texto Rico
            document.getElementById("detail-desc").innerHTML = beer.desc[lang] || beer.desc['pt'];

            // Sabores
            const flavorsContainer = document.getElementById("detail-flavors");
            if(flavorsContainer) {
                flavorsContainer.innerHTML = ''; 
                const flavorsList = beer.flavors[lang] || beer.flavors['pt']; 
                if(flavorsList) {
                    flavorsList.forEach(flavor => {
                        const span = document.createElement("span");
                        span.className = "flavor-tag";
                        span.innerText = flavor;
                        flavorsContainer.appendChild(span);
                    });
                }
            }

            // FAQ
            const faqContainer = document.getElementById("detail-faq");
            if(faqContainer) {
                faqContainer.innerHTML = ''; 
                const infoTitle = lang === 'pt' ? 'Informações Úteis' : 'Useful Info';
                
                if (beer.faq && beer.faq.length > 0) {
                    const title = document.createElement("h3");
                    title.innerText = infoTitle;
                    title.style.marginTop = "20px";
                    faqContainer.appendChild(title);

                    beer.faq.forEach(item => {
                        const div = document.createElement("div");
                        div.className = "faq-item";
                        const q = item.pergunta[lang] || item.pergunta['pt'];
                        const a = item.resposta[lang] || item.resposta['pt'];
                        div.innerHTML = `<span class="faq-question">${q}</span> <span class="faq-answer">${a}</span>`;
                        faqContainer.appendChild(div);
                    });
                }
            }

            // --- PAINEL DE COMPRA ---
            const infoContainer = document.querySelector(".product-info");
            
            const oldPanel = document.getElementById("buy-panel");
            if(oldPanel) oldPanel.remove();

            const buyPanel = document.createElement("div");
            buyPanel.id = "buy-panel";

            // Verificar favorito
            let isFav = false;
            if(typeof verificarFavorito === 'function') {
                isFav = verificarFavorito(beer.id);
            }
            const favIcon = isFav ? "❤️" : "🤍";

            const labelPack = lang === 'pt' ? 'Escolha o formato:' : 'Choose format:';
            
            buyPanel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div id="dynamic-price">${initialPrice}€</div>
                    <button id="fav-btn" onclick="toggleFavorito(${beer.id})" title="Favoritos">${favIcon}</button>
                </div>
                
                <label>${labelPack}</label>
                <select id="pack-select">
                    <option value="unidade">Unidade (Single)</option>
                    <option value="pack6">Pack 6 (-5%)</option>
                    <option value="pack12">Pack 12 (-10%)</option>
                    <option value="box24">Caixa 24 (-15%)</option>
                </select>

                <button id="add-cart-btn">
                    ${lang === 'pt' ? 'Adicionar ao Cesto' : 'Add to Cart'}
                </button>
            `;

            if(faqContainer) infoContainer.insertBefore(buyPanel, faqContainer);

            // Eventos do Painel
            const select = document.getElementById("pack-select");
            const priceDisplay = document.getElementById("dynamic-price");

            select.addEventListener("change", () => {
                if(typeof DISCOUNTS === 'undefined') return;
                const type = select.value;
                const qtd = PACK_QTD[type];
                const discount = DISCOUNTS[type];
                const finalPrice = (basePrice * qtd * (1 - discount)).toFixed(2);
                priceDisplay.innerText = `${finalPrice}€`;
            });

            document.getElementById("add-cart-btn").onclick = () => {
                const type = select.value;
                if(typeof adicionarAoCesto === 'function') {
                    adicionarAoCesto(beer.id, beer.name, beer.img, basePrice, type);
                } else {
                    alert("Erro: js/carrinho.js não carregado.");
                }
            };
        }
        
        renderBeerDetail();
        window.addEventListener('languageChange', renderBeerDetail);
    } else {
        document.querySelector(".product-wrapper").innerHTML = "<h2 style='color:white; text-align:center'>Produto não encontrado.</h2>";
    }
});