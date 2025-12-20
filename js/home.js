// 1. Dados (Mock Data)
const cervejasData = [
    {
        id: 1,
        nome: "Imperial Stout Aged",
        estilo: "Stout",
        nota: 4.9,
        preco: "R$ 45,90",
        img: "https://images.unsplash.com/photo-1625126596868-b76922df6653?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        nome: "Golden IPA",
        estilo: "India Pale Ale",
        nota: 4.5,
        preco: "R$ 22,50",
        img: "https://images.unsplash.com/photo-1571556950278-65476a394a4c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        nome: "Weissbier Classic",
        estilo: "Weiss / Trigo",
        nota: 4.7,
        preco: "R$ 18,90",
        img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        nome: "Red Ale Special",
        estilo: "Red Ale",
        nota: 4.2,
        preco: "R$ 28,00",
        img: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=800&auto=format&fit=crop"
    }
];

// 2. Componente Card (O "Tijolo" da construção)
const BeerCard = ({ beer }) => {
    return (
        <div className="beer-card">
            <div className="card-image-container">
                <img src={beer.img} alt={beer.nome} />
            </div>
            <div className="card-content">
                <h3 className="beer-name">{beer.nome}</h3>
                <p className="beer-style">{beer.estilo}</p>
                <div className="card-footer">
                    <span className="rating">
                        {beer.nota} <span>⭐</span>
                    </span>
                    <span className="price">{beer.preco}</span>
                </div>
            </div>
        </div>
    );
};

// 3. Componente Principal do React (O Grid)
const BeerApp = () => {
    return (
        <div className="beer-grid">
            {cervejasData.map((cerveja) => (
                <BeerCard key={cerveja.id} beer={cerveja} />
            ))}
        </div>
    );
};

// 4. Renderizando no HTML
// Seleciona a div com id 'react-root' do index.html
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<BeerApp />);