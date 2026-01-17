//Ficheiro serve para guardar as traduções do site
//Resto das traducoes estão dentro nos ficheiros js/html

//Colocar window translation para ser visivel para o contact e assim podemos mudar o idioma

window.translations = {
    pt: {
        // Menu
        menu_beers: "Cervejas",
        menu_contact: "Contacto",

        //Submenu
        submenu_all: "Ver Todas",
        submenu_lager: "Lager",
        submenu_ipa: "IPA & Ales",
        submenu_no_alcohol: "Sem Álcool",

        //Filtros
        filter_default_option: "Todos os Estilos",
        filter_gluten_label: "Sem Glúten",

        //Pagina da cerveja
        catalog_title: "O Nosso Catálogo",
        catalog_intro: "Explore a nossa seleção premium. Desde as Lagers clássicas às IPAs artesanais, temos o sabor perfeito para cada momento. Utilize a pesquisa abaixo para encontrar a sua favorita.",
        search_placeholder: "Pesquisar cerveja por nome...",
        filter_all_styles: "Todos os Estilos",
        no_beers_found: "Nenhuma cerveja encontrada com esses filtros.",
        
        // Slides
        slide1_title: "Descubra a SuperBock",
        slide1_desc: "Melhor cerveja de Portugal votada por especialistas",
        slide2_title: "Refresque-se com uma Sagres",
        slide2_desc: "Disponível também sem álcool para todos",
        slide3_title: "Os originais: Heineken Original",
        slide3_desc: "Brinde com amigos e celebre com a cerveja mais conhecida do mundo",

        // Secções
        section_highlights: "Destaques da Semana",
        section_about_title: "A Nossa Tradição",
        section_about_text1: "Desde 1998, a Cervejaria Royal dedica-se à apresentação de cervejas de excelência. Pode encontrar uma vasta seleção de cervejas nacionais e internacionais, cuidadosamente selecionadas para os verdadeiros apreciadores.",
        section_about_text2: "O nosso serviço é dedicado a proporcionar momentos inesquecíveis, seja para uma reunião casual com amigos ou uma celebração especial.",
        btn_factory: "Conheça a Fábrica",

        // Info Bar
        info_where_title: "📍 Onde Estamos",
        info_social_title: "📱 Redes Sociais",
        
        // Footer
        footer_copy: "2026 Cervejaria Royal. Tradição e Qualidade.",

        // Campos do Formulário React
        // os campos ja tao atualizados, mandar para la
        form_title: "Fale Connosco",
        form_name: "Nome Completo:",
        form_motive: "Motivo:",
        form_email: "Email:",      
        form_phone: "Telefone:",   
        form_msg: "A sua Mensagem:",
        form_btn: "Enviar Mensagem",

        //Pagina contacto
        back_to_menu: "← Voltar ao Menu Principal"
    },
    //Em ingles
    en: {
        // Menu
        menu_beers: "Beers",
        menu_contact: "Contact",

        //Submenu
        submenu_all: "View All",
        submenu_lager: "Lager & Pilsner",
        submenu_ipa: "IPA & Ales",
        submenu_no_alcohol: "Alcohol Free",

        //Filtros
        filter_default_option: "All Styles",
        filter_gluten_label: "Gluten Free",

        //Pagina da cerveja
        catalog_title: "Our Catalog",
        catalog_intro: "Explore our premium selection. From classic Lagers to craft IPAs, we have the perfect flavor for every moment. Use the search bar below to find your favorite.",
        search_placeholder: "Search beer by name...",
        filter_all_styles: "All Styles",
        no_beers_found: "No beers found with these filters.",

        // Slides
        slide1_title: "Discover SuperBock",
        slide1_desc: "Portugal's best beer voted by experts",
        slide2_title: "Refresh yourself with a Sagres",
        slide2_desc: "Also available alcohol-free for everyone",
        slide3_title: "The Originals: Heineken Original",
        slide3_desc: "Toast with friends and celebrate with the world's most famous beer",

        // Secções
        section_highlights: "Highlights of the Week",
        section_about_title: "Our Tradition",
        section_about_text1: "Since 1998, Royal Brewery has been dedicated to presenting excellent beers. You can find a vast selection of national and international beers, carefully selected for true connoisseurs.",
        section_about_text2: "Our service is dedicated to providing unforgettable moments, whether for a casual gathering with friends or a special celebration.",
        btn_factory: "Visit the Factory",

        // Info Bar
        info_where_title: "📍 Where We Are",
        info_social_title: "📱 Follow Us",

        // Footer
        footer_copy: "2026 Royal Brewery. Tradition and Quality.",

        // Campos do Formulário React
        // os campos ja tao atualizados, mandar para la
        form_title: "Contact Us",
        form_name: "Full Name:",
        form_motive: "Reason:",
        form_email: "Email:",    
        form_phone: "Phone:",    
        form_msg: "Your Message:",
        form_btn: "Send Message",

        //Pagina contacto
        back_to_menu: "← Back to Main Menu"
    }
};

// funçao base para mudar o idioma
// dps ver isto (ta feito)

function changeLanguage(lang) {
    // Guardar a preferência
    localStorage.setItem('royal_lang', lang);

    //para todos os elementos com data-lang, ativa a tradução correta
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (window.translations[lang][key]) {
            if(window.translations[lang][key].includes("<")) {
                el.innerHTML = window.translations[lang][key];
            } else {
                el.innerText = window.translations[lang][key];
            }
        }
    });

    // Atualiza os botoes visulamente
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.btnLang === lang) btn.classList.add('active');
    });

    //Segue para o react
    window.dispatchEvent(new Event('languageChange'));
}

// Carregar idioma ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('royal_lang') || 'pt';
    changeLanguage(savedLang);
});