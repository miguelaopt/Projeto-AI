/* js/detalhe.js */

// Base de Dados de Cervejas
const beerDatabase = [
    {
        id: 1,
        name: "Heineken Original",
        style: "Lager Premium",
        price: "2,50€",
        rating: 4.4,
        img: "/img/heineken_1.jpg",
        desc: `
            <strong>Origem:</strong> Holanda <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br>
            <strong>Temperatura ideal:</strong> 3–5 °C <br><br>
            A Heineken Original é uma lager premium icónica conhecida pela sua garrafa verde e estrela vermelha. 
            Ideal para acompanhar carnes grelhadas ou snacks.
        `,
        flavors: ["Malte Suave", "Cereais", "Herbal", "Refrescante"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim.</strong> Contém malte de cevada." },
            { pergunta: "Vegan?", resposta: "<strong>Sim.</strong>" }
        ]
    },
    {
        id: 2,
        name: "Sagres Original",
        style: "Lager",
        price: "1,50€",
        rating: 4.2,
        img: "/img/sagres.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br><br>
            A Sagres é uma cerveja lager portuguesa de cor dourada clara e espuma branca persistente.
             Destaca-se pelo seu sabor fresco e equilibrado, sendo ideal para consumir bem fresca e acompanhar momentos de convívio e refeições leves.
        `,
        flavors: ["Lúpulo", "Seca", "Malte"]
    },
    {
        id: 3,
        name: "Super Bock",
        style: "Lager",
        price: "1,50€",
        rating: 4.9,
        img: "/img/superbock.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,2% vol <br><br>
            [Insira aqui a descrição da Super Bock]. Vencedora de dezenas de medalhas de ouro, é conhecida pelo seu sabor autêntico.
        `,
        flavors: ["Encorpada", "Malte", "Frutada"],
        faq: []
    },
    {
        id: 4,
        name: "Erdinger Weissbier Alkoholfrei",
        style: "Wheat Ale (Sem Álcool)",
        price: "2,50€",
        rating: 4.1,
        img: "/img/erdinger_alk.png",
        desc: `
            <strong>Origem:</strong> Alemanha <br>
            <strong>Conteúdo alcoólico:</strong> < 0,5% vol <br><br>
            [Insira aqui a descrição da Erdinger]. Uma cerveja de trigo isótica e regeneradora, perfeita para depois do desporto.
        `,
        flavors: ["Trigo", "Banana", "Cravinho", "Cítrico"],
        faq: []
    },
    {
        id: 5,
        name: "Baron Des Cédres IPA",
        style: "West Coast IPA",
        price: "6,00€",
        rating: 4.6,
        img: "/img/baronipa.png",
        desc: `
            <strong>Origem:</strong> Canadá (Microcervejaria) <br>
            <strong>Conteúdo alcoólico:</strong> 7,0% vol <br><br>
            [Insira aqui a descrição da Baron IPA]. Uma West Coast IPA com amargor pronunciado e notas de pinho.
        `,
        flavors: ["Pinho", "Resinoso", "Amargo", "Toranja"],
        faq: []
    },
    {
        id: 6,
        name: "Hofbräu München",
        style: "Lager Hell",
        price: "2,60€",
        rating: 4.3,
        img: "/img/hofbrau_og.jpg",
        desc: `
            <strong>Origem:</strong> Alemanha <br>
            <strong>Conteúdo alcoólico:</strong> 5,1% vol <br><br>
            [Insira aqui a descrição da Hofbräu]. A cerveja oficial de Munique, com séculos de tradição bávara.
        `,
        flavors: ["Pão", "Mel", "Floral", "Suave"],
        faq: []
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const beerId = parseInt(params.get("id"));
    const beer = beerDatabase.find(b => b.id === beerId);

    if (beer) {
        document.title = `${beer.name} | Royal`;
        
        document.getElementById("detail-img").src = beer.img;
        document.getElementById("detail-name").innerText = beer.name;
        document.getElementById("detail-style").innerText = beer.style;
        document.getElementById("detail-price").innerText = beer.price;
        document.getElementById("detail-rating").innerText = `${beer.rating} ⭐`;
        document.getElementById("detail-desc").innerHTML = beer.desc;

        // Sabores
        const flavorsContainer = document.getElementById("detail-flavors");
        flavorsContainer.innerHTML = ''; 
        if(beer.flavors) {
            beer.flavors.forEach(flavor => {
                const span = document.createElement("span");
                span.className = "flavor-tag";
                span.innerText = flavor;
                flavorsContainer.appendChild(span);
            });
        }

        // Alergénios e FAQ
        const faqContainer = document.getElementById("detail-faq");
        faqContainer.innerHTML = ''; 

        if (beer.faq && beer.faq.length > 0) {
            faqContainer.innerHTML = '<hr class="section-divider" style="margin: 30px 0; width: 100%;"><h3>Informações Úteis</h3>';
            beer.faq.forEach(item => {
                const div = document.createElement("div");
                div.className = "faq-item";
                div.innerHTML = `
                    <span class="faq-question">${item.pergunta}</span>
                    <span class="faq-answer">${item.resposta}</span>
                `;
                faqContainer.appendChild(div);
            });
        }

    } else {
        document.querySelector(".product-wrapper").innerHTML = "<h2>Cerveja não encontrada. <a href='home.html'>Voltar</a></h2>";
    }
});