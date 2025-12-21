/* js/translations.js */

const translations = {
    pt: {
        // Menu
        menu_beers: "Cervejas",
        menu_countries: "Países",
        menu_styles: "Estilos",
        menu_rankings: "Rankings",
        menu_login: "Login",
        
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
        info_hours_title: "🕒 Horários",
        info_hours_desc: "Seg - Sex: 16h - 23h<br>Sáb - Dom: 14h - 02h",
        info_res_title: "📞 Reservas",
        
        // Footer
        footer_copy: "&copy; 2024 Cervejaria Royal. Tradição e Qualidade.",

        // Campos do Formulário React
        form_title: "Fale Connosco",
        form_name: "Nome Completo:",
        form_motive: "Motivo:",
        form_msg: "A sua Mensagem:",
        form_btn: "Enviar Mensagem"
    },
    en: {
        // Menu
        menu_beers: "Beers",
        menu_countries: "Countries",
        menu_styles: "Styles",
        menu_rankings: "Rankings",
        menu_login: "Login",

        // Slides
        slide1_title: "Discover SuperBock",
        slide1_desc: "Portugal's best beer voted by experts",
        slide2_title: "Refresh yourself with a Sagres",
        slide2_desc: "Also available alcohol-free for everyone",
        slide3_title: "The Originals: Heineken Original",
        slide3_desc: "Toast with friends and celebrate with the world's most famous beer",

        // Sections
        section_highlights: "Highlights of the Week",
        section_about_title: "Our Tradition",
        section_about_text1: "Since 1998, Royal Brewery has been dedicated to presenting excellent beers. You can find a vast selection of national and international beers, carefully selected for true connoisseurs.",
        section_about_text2: "Our service is dedicated to providing unforgettable moments, whether for a casual gathering with friends or a special celebration.",
        btn_factory: "Visit the Factory",

        // Info Bar
        info_where_title: "📍 Where We Are",
        info_hours_title: "🕒 Opening Hours",
        info_hours_desc: "Mon - Fri: 4pm - 11pm<br>Sat - Sun: 2pm - 2am",
        info_res_title: "📞 Reservations",

        // Footer
        footer_copy: "&copy; 2024 Royal Brewery. Tradition and Quality.",

        // React Form Fields
        form_title: "Contact Us",
        form_name: "Full Name:",
        form_motive: "Reason:",
        form_msg: "Your Message:",
        form_btn: "Send Message"
    }
};

function changeLanguage(lang) {
    // 1. Guardar a preferência
    localStorage.setItem('royal_lang', lang);

    // 2. Atualizar todos os elementos com o atributo 'data-lang'
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (translations[lang][key]) {
            // Se tiver HTML (como o <br>), usa innerHTML, senão innerText
            if(translations[lang][key].includes("<")) {
                el.innerHTML = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // 3. Atualizar Botões (Visual)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.btnLang === lang) btn.classList.add('active');
    });

    // 4. Disparar evento para o React saber que mudou
    window.dispatchEvent(new Event('languageChange'));
}

// Carregar idioma ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('royal_lang') || 'pt';
    changeLanguage(savedLang);
});