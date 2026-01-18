const translations = {
    pt: {
        // Menu
        menu_beers: "Cervejas ▾",
        submenu_all: "Ver Todas",
        submenu_lager: "Lagers & Pilsners",
        submenu_ipa: "IPAs & Ales",
        submenu_no_alcohol: "Sem Álcool",
        menu_contact: "Contacto",
        
        // Auth & User
        login_btn: "Login / Registar",
        welcome_user: "Olá",
        menu_my_orders: "📦 Minhas Encomendas",
        menu_my_favs: "❤️ Meus Favoritos",
        menu_logout: "🚪 Sair",

        // Checkout & Carrinho
        cart_title: "O teu Cesto",
        cart_empty: "O cesto está vazio.",
        cart_total: "Total:",
        checkout_btn: "Finalizar Compra",
        checkout_title: "Finalizar Encomenda",
        order_summary: "Resumo do Pedido",
        shipping_data: "Dados de Envio",
        address_label: "Morada Completa",
        postal_label: "Código Postal",
        card_label: "Cartão (Simulado)",
        pay_btn: "Pagar e Encomendar",
        
        // Encomendas
        orders_title: "Minhas Encomendas",
        order_id: "Encomenda",
        order_date: "Data",
        order_items: "Itens",
        view_details: "Ver Detalhes",
        no_orders: "Ainda não fez nenhuma encomenda.",
        
        // Favoritos
        favs_title: "Meus Favoritos ❤️",
        no_favs: "Ainda não tem favoritos.",

        // Catálogo (Existente)
        catalog_title: "O Nosso Catálogo",
        catalog_intro: "Explore a nossa seleção premium. Desde as Lagers clássicas às IPAs artesanais...",
        search_placeholder: "Pesquisar cerveja por nome...",
        filter_all_styles: "Todos os Estilos",
        filter_gluten_label: "Sem Glúten",
        no_beers_found: "Nenhuma cerveja encontrada.",
        footer_copy: "2026 Cervejaria Royal. Tradição e Qualidade."
    },
    en: {
        // Menu
        menu_beers: "Beers ▾",
        submenu_all: "View All",
        submenu_lager: "Lagers & Pilsners",
        submenu_ipa: "IPAs & Ales",
        submenu_no_alcohol: "Non-Alcoholic",
        menu_contact: "Contact",

        // Auth & User
        login_btn: "Login / Register",
        welcome_user: "Hi",
        menu_my_orders: "📦 My Orders",
        menu_my_favs: "❤️ My Favorites",
        menu_logout: "🚪 Logout",

        // Checkout & Cart
        cart_title: "Your Cart",
        cart_empty: "Cart is empty.",
        cart_total: "Total:",
        checkout_btn: "Checkout",
        checkout_title: "Complete Order",
        order_summary: "Order Summary",
        shipping_data: "Shipping Info",
        address_label: "Full Address",
        postal_label: "Postal Code",
        card_label: "Card Number (Mock)",
        pay_btn: "Pay and Order",

        // Orders
        orders_title: "My Orders",
        order_id: "Order",
        order_date: "Date",
        order_items: "Items",
        view_details: "View Details",
        no_orders: "You haven't placed any orders yet.",

        // Favorites
        favs_title: "My Favorites ❤️",
        no_favs: "No favorites yet.",

        // Catalog
        catalog_title: "Our Catalog",
        catalog_intro: "Explore our premium selection. From classic Lagers to craft IPAs...",
        search_placeholder: "Search beer by name...",
        filter_all_styles: "All Styles",
        filter_gluten_label: "Gluten Free",
        no_beers_found: "No beers found.",
        footer_copy: "2026 Royal Brewery. Tradition and Quality."
    }
};

// Função Global de Mudança de Idioma
function changeLanguage(lang) {
    localStorage.setItem('royal_lang', lang);

    // 1. Atualizar textos com data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // 2. Atualizar Placeholders
    const searchInput = document.getElementById('searchBar');
    if (searchInput) searchInput.placeholder = translations[lang]['search_placeholder'];

    const addressInput = document.getElementById('checkout-address');
    if (addressInput) addressInput.placeholder = translations[lang]['address_label'];
    
    const postalInput = document.getElementById('checkout-postal');
    if (postalInput) postalInput.placeholder = translations[lang]['postal_label'];

    const cardInput = document.getElementById('checkout-card');
    if (cardInput) cardInput.placeholder = translations[lang]['card_label'];

    // 3. Atualizar Botão de Login (Dinâmico)
    // Dispara evento para o auth.js apanhar
    window.dispatchEvent(new Event('languageChange'));
}

// Aplicar ao carregar
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('royal_lang') || 'pt';
    changeLanguage(lang);
});