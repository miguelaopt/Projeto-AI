//Base de dados das cervejas
//Inclui todas as informações necessarias para o detalhe
//Em ingles e em portugues
//Inclui tambem logica para mudança de idioma
//Idiomas colocados separamente

const beerDatabase = [
    {
        id: 1,
        name: "Heineken Original",
        style: "Lager",
        price: "2,50€",
        rating: 4.4,
        img: "/img/heineken_1.jpg",
        desc: {
            pt: `<strong>Origem:</strong> Holanda <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            A Heineken Original é uma lager premium icónica conhecida pela sua garrafa verde e estrela vermelha. 
            Ideal para acompanhar carnes grelhadas ou snacks.`,
            en: `<strong>Origin:</strong> Netherlands <br>
            <strong>Alcohol content:</strong> 5.0% vol <br>
            <strong>Ideal temperature:</strong> 5-7 °C <br><br>
            Heineken Original is an iconic premium lager known for its green bottle and red star. 
            Ideal to accompany grilled meats or snacks.`
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
        style: "Lager(Pilsner)",
        price: "2,00€",
        rating: 4.7,
        img: "/img/sagres.png",
        desc: {
            pt: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            A Sagres é uma cerveja lager portuguesa de cor dourada clara e espuma branca persistente.
            Destaca-se pelo seu sabor fresco e equilibrado, sendo ideal para consumir bem fresca e acompanhar momentos de convívio e refeições leves.`,
            en: `
            <strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 5.0% vol <br><br>
            <strong>Ideal temperature:</strong> 5-7 °C <br><br>
            Sagres is a Portuguese lager with a light golden color and persistent white foam.
            It stands out for its fresh and balanced flavor, ideal to be consumed well chilled and to accompany moments of socializing and light meals.`
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
        style: "Lager(Pilsner)",
        price: "2,20€",
        rating: 4.9,
        img: "/img/superbock.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,2% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Vencedora de dezenas de medalhas de ouro, é conhecida pelo seu sabor autêntico.
            A cerveja autêntica de excelência para os teus momentos de convívio com os amigos, a
            verdadeira melhor cerveja de Portugal`,
            en: `<strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 5.2% vol <br><br>
            <strong>Ideal temperature:</strong> 5-7 °C <br><br>
            Winner of dozens of gold medals, it is known for its authentic flavor.
            The authentic and excellent beer for your moments of socializing with friends, the
            true best beer in Portugal`
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
        style: "Weissbier(Cerveja de Trigo)",
        price: "3,50€",
        rating: 4.9,
        img: "/img/erdinger_alk.png",
        desc: {
            pt: `<strong>Origem:</strong> Alemanha <br>
            <strong>Conteúdo alcoólico:</strong> 5,3% vol <br><br>
            <strong>Temperatura ideal:</strong> 6-8 °C <br><br>
            A Erdinger Weissbier é uma cerveja de trigo isótica e regeneradora, perfeita para depois do desporto.
            Cerveja de trigo tradicional alemã, não filtrada.`,
            en: `<strong>Origin:</strong> Germany <br>
            <strong>Alcohol content:</strong> 5.3% vol <br><br>
            <strong>Ideal temperature:</strong> 6-8 °C <br><br>
            Erdinger Weissbier is an isotonic and regenerating wheat beer, perfect for after sports.
            Traditional unfiltered German wheat beer.`
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
        style: "IPA(India Pale Ale)",
        price: "3,80€",
        rating: 4.4,
        img: "/img/baronipa.png",
        desc: {
            pt: `<strong>Origem:</strong> Canadá (Microcervejaria) <br>
            <strong>Conteúdo alcoólico:</strong> 6,5% vol <br><br>
            <strong>Temperatura ideal:</strong> 7-9 °C <br><br>
            A Baron Des Cédres IPA é uma West Coast IPA com amargor pronunciado e notas de pinho.
            Uma IPA aromática e refrescante, ideal para os amantes de cervejas lupuladas.`,
            en: `<strong>Origin:</strong> Canada (Microbrewery) <br>
            <strong>Alcohol content:</strong> 6.5% vol <br><br>
            <strong>Ideal temperature:</strong> 7-9 °C <br><br>
            Baron Des Cédres IPA is a West Coast IPA with pronounced bitterness and pine notes.
            An aromatic and refreshing IPA, ideal for hop beer lovers.`
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
        img: "/img/corona_extra.jpg",
        desc: {
            pt: `<strong>Origem:</strong> México <br>
            <strong>Conteúdo alcoólico:</strong> 4,5% vol <br><br>
            <strong>Temperatura ideal:</strong> 3-5 °C <br><br>
            Lager leve e muito refrescante, perfeita para dias quentes.
            Tradicionalmente servida com uma fatia de limão na boca da garrafa para realçar o sabor.`,
            en: `<strong>Origin:</strong> Mexico <br>
            <strong>Alcohol content:</strong> 4.5% vol <br><br>
            <strong>Ideal temperature:</strong> 3-5 °C <br><br>
            Light and very refreshing lager, perfect for hot days.
            Traditionally served with a slice of lime in the bottle neck to enhance the flavor.`
        },
        flavors: {
            pt: ["Cereaias", "Milho", "Leve Doçura", "Suave"],
            en: ["Cereals", "Corn", "Light Sweetness", "Smooth"]
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
        img: "/img/sagres_preta.jpg",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 4,3% vol <br><br>
            <strong>Temperatura ideal:</strong> 6-8 °C <br><br>
            Lager escura de perfil suave e corpo médio, com notas de malte torrado e caramelo.
            Ideal para acompanhar pratos de carne e sobremesas à base de chocolate.`,
            en: `<strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 4.3% vol <br><br>
            <strong>Ideal temperature:</strong> 6-8 °C <br><br>
            Dark lager with a smooth profile and medium body, with notes of roasted malt and caramel.
            Ideal to accompany meat dishes and chocolate-based desserts.`
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
        img: "/img/superbock_abadia.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 6% vol <br><br>
            <strong>Temperatura ideal:</strong> 8-10°C <br><br>
            Cerveja de inspiração belga, com sabor encorpado e notas frutadas e condimentadas.
            Não filtrada e complexa, ideal para momentos especiais.`,
            en: `<strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 6% vol <br><br>
            <strong>Ideal temperature:</strong> 8-10°C <br><br>
            Belgian-inspired beer, with a full-bodied flavor and fruity and spiced notes.
            Unfiltered and complex, ideal for special moments.`,
        },
        flavors: {
            pt: ["Fruta madura", "Especiarias", "Caramelo", "Malte intenso"],
            en: ["Ripe Fruit", "Spices", "Caramel", "Intense Malt"]
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
        img: "/img/superbock_stout.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5% vol <br><br>
            <strong>Temperatura ideal:</strong> 8-10 °C <br><br>
            Stout cremosa e equilibrada, com notas de café e chocolate.
            Ideal para acompanhar sobremesas ou como digestivo após as refeições.`,
            en: `<strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 5% vol <br><br>
            <strong>Ideal temperature:</strong> 8-10 °C <br><br>
            Creamy and balanced stout, with notes of coffee and chocolate.
            Ideal to accompany desserts or as a digestive after meals.`
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
        style: "Lager sem Alcoól",
        price: "2,00€",
        rating: 3.9,
        img: "/img/sagres_0.jpg",
        desc: {
            pt: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 0.0% vol <br><br>
            <strong>Temperatura ideal:</strong> 4-6 °C <br><br>
            Sagres sem álcool mantém o sabor fresco e leve da Sagres original.
            Ideal para quem procura uma opção sem álcool.`,
            en: `
            <strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 0.0% vol <br><br>
            <strong>Ideal temperature:</strong> 4-6 °C <br><br>
            Sagres non-alcoholic maintains the fresh and light flavor of the original Sagres.
            Ideal for those looking for a non-alcoholic option.`
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
        name: "Super Bock Sem Glúten",
        style: "Lager sem Glúten",
        price: "2,50€",
        rating: 4.1,
        img: "/img/superbock_sem_gluten.jpeg",
        desc: {
            pt: `<strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Cerveja lager especialmente desenvolvida para pessoas com intolerância ao glúten.
            Mantém o sabor autêntico da Super Bock original.`,
            en: `<strong>Origin:</strong> Portugal <br>
            <strong>Alcohol content:</strong> 5% vol <br><br>
            <strong>Ideal temperature:</strong> 5-7 °C <br><br>
            Lager beer specially developed for people with gluten intolerance.
            It maintains the authentic flavor of the original Super Bock.`
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
        img: "/img/praxis.png",
        desc: {
            pt: `<strong>Origem:</strong> Portugal(Açores) <br>
            <strong>Conteúdo alcoólico:</strong> 4.7% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Lager fresca e leve, produzida nos Açores com ingredientes selecionados.
            Ideal para acompanhar pratos de peixe e marisco.`,
            en: `<strong>Origin:</strong> Portugal(Açores) <br>
            <strong>Alcohol content:</strong> 4.7% vol <br><br>
            <strong>Ideal temperature:</strong> 5-7 °C <br><br>
            Fresh and light lager, produced in the Azores with selected ingredients.
            Ideal to accompany fish and seafood dishes.`
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

//Lógica para carregar e traduzir os detalhes
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const beerId = parseInt(params.get("id"));
    const beer = beerDatabase.find(b => b.id === beerId);

    if (beer) {
        // Função para desenhar a página
        function renderBeerDetail() {
            // Obter idioma atual
            const lang = localStorage.getItem('royal_lang') || 'pt';

            document.title = `${beer.name} | Royal`;
            document.getElementById("detail-img").src = beer.img;
            document.getElementById("detail-name").innerText = beer.name;
            document.getElementById("detail-style").innerText = beer.style;
            document.getElementById("detail-price").innerText = beer.price;
            document.getElementById("detail-rating").innerText = `${beer.rating} ⭐`;
            
            // Texto Descritivo (Escolhe PT ou EN)
            document.getElementById("detail-desc").innerHTML = beer.desc[lang] || beer.desc['pt'];

            // Sabores
            const flavorsContainer = document.getElementById("detail-flavors");
            flavorsContainer.innerHTML = ''; 
            const flavorsList = beer.flavors[lang] || beer.flavors['pt']; // Escolhe lista correta
            
            if(flavorsList) {
                flavorsList.forEach(flavor => {
                    const span = document.createElement("span");
                    span.className = "flavor-tag";
                    span.innerText = flavor;
                    flavorsContainer.appendChild(span);
                });
            }

            // FAQ
            const faqContainer = document.getElementById("detail-faq");
            faqContainer.innerHTML = ''; 
            const infoTitle = lang === 'pt' ? 'Informações Úteis' : 'Useful Info';

            if (beer.faq && beer.faq.length > 0) {
                faqContainer.innerHTML = `<hr class="section-divider" style="margin: 30px 0; width: 100%;"><h3>${infoTitle}</h3>`;
                beer.faq.forEach(item => {
                    const div = document.createElement("div");
                    div.className = "faq-item";
                    // Tenta ir buscar a tradução, se não existir usa PT
                    const q = item.pergunta[lang] || item.pergunta['pt'] || item.pergunta;
                    const a = item.resposta[lang] || item.resposta['pt'] || item.resposta;
                    
                    div.innerHTML = `
                        <span class="faq-question">${q}</span>
                        <span class="faq-answer">${a}</span>
                    `;
                    faqContainer.appendChild(div);
                });
            }
        }

        // 1. Renderizar ao carregar
        renderBeerDetail();

        // 2. Ouvir mudança de idioma e renderizar novamente
        window.addEventListener('languageChange', renderBeerDetail);

    } else {
        document.querySelector(".product-wrapper").innerHTML = "<h2 style='color:white'>Cerveja não encontrada.</h2>";
    }
});