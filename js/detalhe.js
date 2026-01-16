/* js/detalhe.js */

// Base de Dados de Cervejas

const beerDatabase = [
    {
        id: 1,
        name: "Heineken Original",
        style: "Lager",
        price: "2,50€",
        rating: 4.4,
        img: "/img/heineken_1.jpg",
        desc: `
            <strong>Origem:</strong> Holanda <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            A Heineken Original é uma lager premium icónica conhecida pela sua garrafa verde e estrela vermelha. 
            Ideal para acompanhar carnes grelhadas ou snacks.
        `,
        flavors: ["Malte Suave", "Cereais","Notas Herbais de Lúpulo"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 2,
        name: "Sagres Original",
        style: "Lager(Pilsner)",
        price: "2,00€",
        rating: 4.7,
        img: "/img/sagres.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,0% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            A Sagres é uma cerveja lager portuguesa de cor dourada clara e espuma branca persistente.
            Destaca-se pelo seu sabor fresco e equilibrado, sendo ideal para consumir bem fresca e acompanhar momentos de convívio e refeições leves.
        `,
        flavors: ["Cereais", "Malte Suave", "Leve Amargor"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 3,
        name: "Super Bock Original",
        style: "Lager(Pilsner)",
        price: "2,20€",
        rating: 4.9,
        img: "/img/superbock.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5,2% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Vencedora de dezenas de medalhas de ouro, é conhecida pelo seu sabor autêntico.
            A cerveja autêntica de excelência para os teus momentos de convívio com os amigos, a
            verdadeira melhor cerveja de Portugal"
        `,
        flavors: ["Encorpada", "Malte", "Frutada"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 4,
        name: "Erdinger Weissbier",
        style: "Weissbier(Cerveja de Trigo)",
        price: "3,50€",
        rating: 4.9,
        img: "/img/erdinger_alk.png",
        desc: `
            <strong>Origem:</strong> Alemanha <br>
            <strong>Conteúdo alcoólico:</strong> 5,3% vol <br><br>
            <strong>Temperatura ideal:</strong> 6-8 °C <br><br>
            A Erdinger Weissbier é uma cerveja de trigo isótica e regeneradora, perfeita para depois do desporto.
            Cerveja de trigo tradicional alemã, não filtrada.
        `,
        flavors: ["Pão", "Banana", "Cravinho", "Levedura"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 5,
        name: "Baron Des Cédres IPA",
        style: "IPA(India Pale Ale)",
        price: "3,80€",
        rating: 4.4,
        img: "/img/baronipa.png",
        desc: `
            <strong>Origem:</strong> Canadá (Microcervejaria) <br>
            <strong>Conteúdo alcoólico:</strong> 6,5% vol <br><br>
            <strong>Temperatura ideal:</strong> 7-9 °C <br><br>
            A Baron Des Cédres IPA é uma West Coast IPA com amargor pronunciado e notas de pinho.
            Uma IPA aromática e refrescante, ideal para os amantes de cervejas lupuladas.
        `,
        flavors: ["Citrinos", "Frutas Tropicais", "Lupulada",],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 6,
        name: "Corona Extra",
        style: "Lager",
        price: "3,00€",
        rating: 4.0,
        img: "/img/corona_extra.jpg",
        desc: `
            <strong>Origem:</strong> México <br>
            <strong>Conteúdo alcoólico:</strong> 4,5% vol <br><br>
            <strong>Temperatura ideal:</strong> 3-5 °C <br><br>
            Lager leve e muito refrescante, perfeita para dias quentes.
            Tradicionalmente servida com uma fatia de limão na boca da garrafa para realçar o sabor.
        `,
        flavors: ["Cereias", "Milho", "Leve Doçura", "Suave"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 7,
        name: "Sagres Preta",
        style: "Dark Lager",
        price: "2,20€",
        rating: 4.6,
        img: "/img/sagres_preta.jpg",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 4,3% vol <br><br>
            <strong>Temperatura ideal:</strong> 6-8 °C <br><br>
            Lager escura de perfil suave e corpo médio, com notas de malte torrado e caramelo.
            Ideal para acompanhar pratos de carne e sobremesas à base de chocolate.
        `,
        flavors: ["Caramelo", "Malte Torrado", "Notas de Café",],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 8,
        name: "Super Bock Abadia",
        style: "Belgian Abbey Ale",
        price: "2,50€",
        rating: 4.7,
        img: "/img/superbock_abadia.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 6% vol <br><br>
            <strong>Temperatura ideal:</strong> 8-10°C <br><br>
            Cerveja de inspiração belga, com sabor encorpado e notas frutadas e condimentadas.
            Não filtrada e complexa, ideal para momentos especiais.
        `,
        flavors: ["Fruta madura", "Especiarias", "Caramelo", "Malte intenso"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 9,
        name: "Super Bock Stout",
        style: "Stout",
        price: "2,40€",
        rating: 4.8,
        img: "/img/superbock_stout.png",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5% vol <br><br>
            <strong>Temperatura ideal:</strong> 8-10 °C <br><br>
            Stout cremosa e equilibrada, com notas de café e chocolate.
            Ideal para acompanhar sobremesas ou como digestivo após as refeições.
        `,
        flavors: ["Café", "Chocolate", "Malte Torrado"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 10,
        name: "Sagres 0,0%",
        style: "Lager sem Alcoól",
        price: "2,00€",
        rating: 3.9,
        img: "/img/sagres_0.jpg",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 0.0% vol <br><br>
            <strong>Temperatura ideal:</strong> 4-6 °C <br><br>
            Sagres sem álcool mantém o sabor fresco e leve da Sagres original.
            Ideal para quem procura uma opção sem álcool.
        `,
        flavors: ["Malte suave", "Cereais", "Leve Amargor"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 11,
        name: "Super Bock Sem Glúten",
        style: "Lager sem Glúten",
        price: "2,50€",
        rating: 4.1,
        img: "/img/superbock_sem_gluten.jpeg",
        desc: `
            <strong>Origem:</strong> Portugal <br>
            <strong>Conteúdo alcoólico:</strong> 5% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Cerveja lager especialmente desenvolvida para pessoas com intolerância ao glúten.
            Mantém o sabor autêntico da Super Bock original.
        `,
        flavors: ["Malte suave", "Amargor Moderado"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Nao</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
    },
    {
        id: 12,
        name: "Praxis",
        style: "Lager",
        price: "2,20€",
        rating: 4.3,
        img: "/img/praxis.png",
        desc: `
            <strong>Origem:</strong> Portugal(Açores) <br>
            <strong>Conteúdo alcoólico:</strong> 4.7% vol <br><br>
            <strong>Temperatura ideal:</strong> 5-7 °C <br><br>
            Lager fresca e leve, produzida nos Açores com ingredientes selecionados.
            Ideal para acompanhar pratos de peixe e marisco.
        `,
        flavors: ["Malte leve", "Cereais"],
        faq: [
            { pergunta: "Contém Glúten?", resposta: "<strong>Sim</strong>" },
            { pergunta: "Vegan?", resposta: "<strong>Sim</strong>" }
        ]
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