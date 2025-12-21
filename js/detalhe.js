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
            A Heineken Original é uma lager premium icónica... (o resto da sua descrição mantem-se igual) ...
            Ideal para acompanhar carnes grelhadas, hambúrgueres, pizzas, comida asiática leve, snacks salgados ou simplesmente para ser apreciada bem fresca em qualquer ocasião.
        `,
        flavors: ["Malte Suave", "Cereais", "Herbal", "Refrescante"],
        // 👇 NOVO: Array de perguntas frequentes / alergénios
        faq: [
            {
                pergunta: "Contém Glúten?",
                resposta: "<strong>Sim.</strong> A Heineken é produzida com malte de cevada, que contém glúten naturalmente. Não é adequada para celíacos."
            },
            {
                pergunta: "É adequada para Veganos?",
                resposta: "<strong>Sim.</strong> A Heineken não utiliza isinglass (cola de peixe) ou outros produtos de origem animal no processo de clarificação."
            },
            {
                pergunta: "Informação sobre Alergénios",
                resposta: "Contém: <strong>Cevada</strong>."
            }
        ]
    },
    // ... Mantenha as outras cervejas como estavam ...
    {
        id: 2,
        name: "Sagres Original",
        style: "Pilsner",
        price: "1,50€",
        rating: 4.2,
        img: "/img/sagres.png",
        desc: "A cerveja líder em Portugal...",
        flavors: ["Lúpulo", "Seca", "Equilibrada"]
        // Nota: Como não adicionei 'faq' aqui, a secção não vai aparecer na Sagres
    },
    // ... restante da base de dados ...
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
        beer.flavors.forEach(flavor => {
            const span = document.createElement("span");
            span.className = "flavor-tag";
            span.innerText = flavor;
            flavorsContainer.appendChild(span);
        });

        // 👇 LÓGICA NOVA: Alergénios e FAQ
        const faqContainer = document.getElementById("detail-faq");
        faqContainer.innerHTML = ''; // Limpar container

        if (beer.faq && beer.faq.length > 0) {
            // Adiciona título se houver perguntas
            faqContainer.innerHTML = '<hr class="section-divider" style="margin: 30px 0; width: 100%;"><h3>Informações Nutricionais</h3>';
            
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