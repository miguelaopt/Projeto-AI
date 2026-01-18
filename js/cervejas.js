// BASE DE DADOS GLOBAL (isto devia ser SQL mas pronto) 
// se alguem quiser meter mais cervejas é aqui
// cada cerveja tem id unico (numero inteiro)
// nome, estilo, preco (string com euro), rating (numero 0-5), imagem (caminho relativo)
const beerDatabase = [
    {
        id: 1,
        name: "Heineken Original",
        style: "Lager",
        price: "2,50€",
        rating: 4.4,
        img: "/img/home/heineken.jpg",
        detailImg : "/img/heineken_original.png",
        desc: {
            pt: `<strong>Origem:</strong> Holanda <br><strong>Conteúdo alcoólico:</strong> 5,0% vol <br><strong>Temperatura ideal:</strong> 5-7 °C <br><br>A Heineken Original é uma lager premium icónica conhecida pela sua garrafa verde e estrela vermelha. Ideal para acompanhar carnes grelhadas ou snacks.`,
            en: `<strong>Origin:</strong> Netherlands <br><strong>Alcohol content:</strong> 5.0% vol <br><strong>Ideal temperature:</strong> 5-7 °C <br><br>Heineken Original is an iconic premium lager known for its green bottle and red star. Ideal to accompany grilled meats or snacks.`
        },
        flavors: {
            pt: ["Malte Suave", "Cereais","Notas Herbais de Lúpulo"],
            en: ["Soft Malt", "Cereals","Herbal Hop Notes"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 2,
        name: "Sagres Original",
        style: "Lager (Pilsner)",
        price: "2,00€",
        rating: 4.7,
        img: "/img/home/sagres.png",
        detailImg : "/img/sagres_original.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 5,0% vol <br><strong>Temperatura ideal:</strong> 5-7 °C <br><br>A Sagres é uma cerveja lager portuguesa de cor dourada clara e espuma branca persistente. Destaca-se pelo seu sabor fresco e equilibrado.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 5.0% vol <br><strong>Ideal temperature:</strong> 5-7 °C <br><br>Sagres is a Portuguese lager with a light golden color and persistent white foam. It stands out for its fresh and balanced flavor.`
        },
        flavors: {
            pt: ["Cereais", "Malte Suave", "Leve Amargor"],
            en: ["Cereals", "Soft Malt", "Light Bitterness"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 3,
        name: "Super Bock Original",
        style: "Lager (Pilsner)",
        price: "2,20€",
        rating: 4.9,
        img: "/img/home/super.jpg",
        detailImg : "/img/superbock.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 5,2% vol <br><strong>Temperatura ideal:</strong> 5-7 °C <br><br>Vencedora de dezenas de medalhas de ouro, é conhecida pelo seu sabor autêntico e excelência.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 5.2% vol <br><strong>Ideal temperature:</strong> 5-7 °C <br><br>Winner of dozens of gold medals, it is known for its authentic flavor and excellence.`
        },
        flavors: {
            pt: ["Encorpada", "Malte", "Frutada"],
            en: ["Full-bodied", "Malt", "Fruity"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 4,
        name: "Erdinger Weissbier",
        style: "Weissbier (Trigo)",
        price: "3,50€",
        rating: 4.9,
        img: "/img/home/erdinger.jpg",
        detailImg : "/img/erdinger_alk.png",
        desc: {
            pt: `<strong>Origem:</strong> Alemanha <br><strong>Conteúdo alcoólico:</strong> 5,3% vol <br><strong>Temperatura ideal:</strong> 6-8 °C <br><br>A Erdinger Weissbier é uma cerveja de trigo isotónica e regeneradora, perfeita para depois do desporto.`,
            en: `<strong>Origin:</strong> Germany <br><strong>Alcohol content:</strong> 5.3% vol <br><strong>Ideal temperature:</strong> 6-8 °C <br><br>Erdinger Weissbier is an isotonic and regenerating wheat beer, perfect for after sports.`
        },
        flavors: {
            pt: ["Pão", "Banana", "Cravinho", "Levedura"],
            en: ["Bread", "Banana", "Allspice", "Yeast"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 5,
        name: "Baron Des Cédres IPA",
        style: "IPA (India Pale Ale)",
        price: "3,80€",
        rating: 4.4,
        img: "/img/home/baron.png",
        detailImg : "/img/baronipa.png",
        desc: {
            pt: `<strong>Origem:</strong> Canadá <br><strong>Conteúdo alcoólico:</strong> 6,5% vol <br><strong>Temperatura ideal:</strong> 7-9 °C <br><br>A Baron Des Cédres IPA é uma West Coast IPA com amargor pronunciado e notas de pinho.`,
            en: `<strong>Origin:</strong> Canada <br><strong>Alcohol content:</strong> 6.5% vol <br><strong>Ideal temperature:</strong> 7-9 °C <br><br>Baron Des Cédres IPA is a West Coast IPA with pronounced bitterness and pine notes.`
        },
        flavors: {
            pt: ["Citrinos", "Frutas Tropicais", "Lupulada"],
            en: ["Citrus", "Tropical Fruits", "Hopped"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 6,
        name: "Corona Extra",
        style: "Lager",
        price: "3,00€",
        rating: 4.0,
        img: "/img/home/corona.png",
        detailImg : "/img/corona_extra.png",
        desc: {
            pt: `<strong>Origem:</strong> México <br><strong>Conteúdo alcoólico:</strong> 4,5% vol <br><strong>Temperatura ideal:</strong> 3-5 °C <br><br>Lager leve e muito refrescante, perfeita para dias quentes.`,
            en: `<strong>Origin:</strong> Mexico <br><strong>Alcohol content:</strong> 4.5% vol <br><strong>Ideal temperature:</strong> 3-5 °C <br><br>Light and very refreshing lager, perfect for hot days.`
        },
        flavors: {
            pt: ["Cereaias", "Milho", "Leve Doçura"],
            en: ["Cereals", "Corn", "Light Sweetness"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 7,
        name: "Sagres Preta",
        style: "Dark Lager",
        price: "2,20€",
        rating: 4.6,
        img: "/img/home/preta_web.png",
        detailImg : "/img/sagres_preta.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 4,3% vol <br><strong>Temperatura ideal:</strong> 6-8 °C <br><br>Lager escura de perfil suave e corpo médio, com notas de malte torrado e caramelo.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 4.3% vol <br><strong>Ideal temperature:</strong> 6-8 °C <br><br>Dark lager with a smooth profile and medium body, with notes of roasted malt and caramel.`
        },
        flavors: {
            pt: ["Caramelo", "Malte Torrado", "Notas de Café"],
            en: ["Caramel", "Roasted Malt", "Coffee Notes"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 8,
        name: "Super Bock Abadia",
        style: "Belgian Abbey Ale",
        price: "2,50€",
        rating: 4.7,
        img: "/img/home/abadia.jpg",
        detailImg : "/img/superbock_abadia.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 6% vol <br><strong>Temperatura ideal:</strong> 8-10°C <br><br>Cerveja de inspiração belga, com sabor encorpado e notas frutadas.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 6% vol <br><strong>Ideal temperature:</strong> 8-10°C <br><br>Belgian-inspired beer, with a full-bodied flavor and fruity notes.`
        },
        flavors: {
            pt: ["Fruta madura", "Especiarias", "Caramelo"],
            en: ["Ripe Fruit", "Spices", "Caramel"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 9,
        name: "Super Bock Stout",
        style: "Stout",
        price: "2,40€",
        rating: 4.8,
        img: "/img/home/stout.png",
        detailImg : "/img/superbock_stout.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 5% vol <br><strong>Temperatura ideal:</strong> 8-10 °C <br><br>Stout cremosa e equilibrada, com notas de café e chocolate.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 5% vol <br><strong>Ideal temperature:</strong> 8-10 °C <br><br>Creamy and balanced stout, with notes of coffee and chocolate.`
        },
        flavors: {
            pt: ["Café", "Chocolate", "Malte Torrado"],
            en: ["Coffee", "Chocolate", "Roasted Malt"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 10,
        name: "Sagres 0,0%",
        style: "Lager sem Álcool",
        price: "2,00€",
        rating: 3.9,
        img: "/img/home/sagres-00.jpg",
        detailImg : "/img/sagres0.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 0.0% vol <br><strong>Temperatura ideal:</strong> 4-6 °C <br><br>Sagres sem álcool mantém o sabor fresco e leve da Sagres original.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 0.0% vol <br><strong>Ideal temperature:</strong> 4-6 °C <br><br>Sagres non-alcoholic maintains the fresh and light flavor of the original Sagres.`
        },
        flavors: {
            pt: ["Malte suave", "Cereais", "Leve Amargor"],
            en: ["Soft Malt", "Cereals", "Light Bitterness"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 11,
        name: "Super Bock sem Glúten",
        style: "Lager sem Glúten",
        price: "2,50€",
        rating: 4.1,
        img: "/img/home/supersem.jpg",
        detailImg : "/img/superbock_semgluten.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br><strong>Conteúdo alcoólico:</strong> 5% vol <br><strong>Temperatura ideal:</strong> 5-7 °C <br><br>Cerveja lager especialmente desenvolvida para pessoas com intolerância ao glúten.`,
            en: `<strong>Origin:</strong> Portugal <br><strong>Alcohol content:</strong> 5% vol <br><strong>Ideal temperature:</strong> 5-7 °C <br><br>Lager beer specially developed for people with gluten intolerance.`
        },
        flavors: {
            pt: ["Malte suave", "Amargor Moderado"],
            en: ["Soft Malt", "Moderate Bitterness"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Não", en: "No" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    },
    {
        id: 12,
        name: "Praxis",
        style: "Lager",
        price: "2,20€",
        rating: 4.3,
        img: "/img/home/praxishome.jpg",
        detailImg : "/img/praxis.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal(Açores) <br><strong>Conteúdo alcoólico:</strong> 4.7% vol <br><strong>Temperatura ideal:</strong> 5-7 °C <br><br>Lager fresca e leve, produzida nos Açores com ingredientes selecionados.`,
            en: `<strong>Origin:</strong> Portugal(Açores) <br><strong>Alcohol content:</strong> 4.7% vol <br><strong>Ideal temperature:</strong> 5-7 °C <br><br>Fresh and light lager, produced in the Azores with selected ingredients.`
        },
        flavors: {
            pt: ["Malte leve", "Cereais"],
            en: ["Light Malt", "Cereals"]
        },
        faq: [
            { pergunta: { pt: "Contém Glúten?", en: "Contains Gluten?" }, resposta: { pt: "Sim", en: "Yes" } },
            { pergunta: { pt: "Vegan?", en: "Vegan?" }, resposta: { pt: "Sim", en: "Yes" } }
        ]
    }
];

//CODIGO DO CATALOGO (so corre se tiver na pagina certa)
document.addEventListener("DOMContentLoaded", () => {
    
    // verifica se o div existe senao sai
    const gridContainer = document.getElementById("beer-grid-container");
    if(!gridContainer) return; 

    let allBeers = beerDatabase; // copia a lista

    const searchBar = document.getElementById("searchBar");
    const styleFilter = document.getElementById("styleFilter");
    const glutenFilter = document.getElementById("glutenFilter");

    // Meter os estilos no dropdown sem repetir
    const uniqueStyles = [...new Set(allBeers.map(b => b.style.split('(')[0].trim()))];
    uniqueStyles.sort().forEach(style => {
        const option = document.createElement("option");
        option.value = style;
        option.innerText = style;
        styleFilter.appendChild(option);
    });

    // buscar traducao rapida
    function getTrans(key) {
        const lang = localStorage.getItem('royal_lang') || 'pt';
        return (window.translations && window.translations[lang] && window.translations[lang][key]) 
               ? window.translations[lang][key] 
               : "";
    }

    // desenhar os cartoes
    function renderBeers(list) {
        gridContainer.innerHTML = "";
        
        if(list.length === 0) {
            const msg = getTrans('no_beers_found') || "Nenhuma cerveja encontrada.";
            gridContainer.innerHTML = `
                <div style='width:100%; text-align:center; padding: 40px;'>
                    <h3 style='color:#777;'>${msg}</h3>
                </div>`;
            return;
        }
        // este e o design padrao do cartao
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
                            <span class="rating">${beer.rating} ⭐</span>
                            <span class="price">${beer.price}</span>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.appendChild(card);
        });
    }

    // logica de filtrar
    // meter aqui a logica de filtrar
    function filterBeers() {
        if(!searchBar) return;
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

    //mudar o texto do placeholder se mudar lingua
    function updateDynamicTexts() {
        const placeholderText = getTrans('search_placeholder');
        if(placeholderText && searchBar) searchBar.placeholder = placeholderText;
        filterBeers();
    }

    if(searchBar) searchBar.addEventListener("keyup", filterBeers);
    if(styleFilter) styleFilter.addEventListener("change", filterBeers);
    if(glutenFilter) glutenFilter.addEventListener("change", filterBeers);

    window.addEventListener('languageChange', updateDynamicTexts);

    // Ver se veio parametro da url (tipo ?cat=ipa)
    const params = new URLSearchParams(window.location.search);
    const category = params.get('cat');

    if (category && searchBar && styleFilter) {
        if (category === 'sem-alcool') {
            searchBar.value = "sem álcool";
        } else if (category === 'lager') {
            styleFilter.value = "Lager"; 
        } else if (category === 'ipa') {
            styleFilter.value = "IPA";
        }
    }
    
    updateDynamicTexts();
});

function verificarFavorito(id) {
    const favs = JSON.parse(localStorage.getItem("royal_favs") || "[]");
    return favs.includes(id);
}

// coracao do fav
function toggleFavorito(id) {
    let favs = JSON.parse(localStorage.getItem("royal_favs") || "[]");
    
    if (favs.includes(id)) {
        // remove se ja tiver la
        favs = favs.filter(fId => fId !== id);
    } else {
        // poe se nao tiver
        favs.push(id);
    }
    
    localStorage.setItem("royal_favs", JSON.stringify(favs));
    
    // mudar o icone logo
    const btn = document.getElementById("fav-btn");
    if(btn) {
        btn.innerText = favs.includes(id) ? "❤️" : "🤍";
    }
}