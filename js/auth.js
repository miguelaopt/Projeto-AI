// js/auth.js

document.addEventListener("DOMContentLoaded", () => {
    verificarIdade();
    atualizarMenuUsuario();
});

// --- VERIFICAÇÃO DE IDADE ---
function verificarIdade() {
    const verified = localStorage.getItem("royal_age_verified");
    if (!verified) {
        // Criação limpa usando classes CSS
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        
        overlay.innerHTML = `
            <div class="modal-box">
                <h2 class="modal-title">Verificação de Idade</h2>
                <p>Bem-vindo à Cervejaria Royal.</p>
                <p>Deve ter mais de 18 anos para aceder a este site.</p>
                
                <div class="modal-buttons">
                    <button id="btn-yes" class="btn-age-yes">Tenho +18</button>
                    <button id="btn-no" class="btn-age-no">Sair</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Lógica dos botões
        document.getElementById("btn-yes").onclick = () => {
            localStorage.setItem("royal_age_verified", "true");
            overlay.remove(); // Remove o modal do HTML
        };
        
        document.getElementById("btn-no").onclick = () => {
            window.location.href = "https://www.google.com";
        };
    }
}

// --- SISTEMA DE LOGIN ---
function registarUsuario(nome, email, password) {
    const users = JSON.parse(localStorage.getItem("royal_users") || "[]");
    if (users.find(u => u.email === email)) {
        return { success: false, msg: "Email já registado." };
    }
    users.push({ nome, email, password });
    localStorage.setItem("royal_users", JSON.stringify(users));
    return { success: true, msg: "Registo efetuado com sucesso! Faça login." };
}

function loginUsuario(email, password) {
    const users = JSON.parse(localStorage.getItem("royal_users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("royal_session", JSON.stringify(user));
        return { success: true };
    }
    return { success: false, msg: "Credenciais inválidas." };
}

function logoutUsuario() {
    localStorage.removeItem("royal_session");
    window.location.reload();
}

function atualizarMenuUsuario() {
    const session = JSON.parse(localStorage.getItem("royal_session"));
    const nav = document.querySelector("nav ul");
    const lang = localStorage.getItem('royal_lang') || 'pt';
    
    // Texto traduzido para o botão login
    const loginText = (typeof translations !== 'undefined') ? translations[lang]['login_btn'] : "Login / Registar";
    const welcomeText = (typeof translations !== 'undefined') ? translations[lang]['welcome_user'] : "Olá";

    // Textos do menu
    const txtOrders = (typeof translations !== 'undefined') ? translations[lang]['menu_my_orders'] : "📦 Minhas Encomendas";
    const txtFavs = (typeof translations !== 'undefined') ? translations[lang]['menu_my_favs'] : "❤️ Meus Favoritos";
    const txtLogout = (typeof translations !== 'undefined') ? translations[lang]['menu_logout'] : "🚪 Sair";

    let userLi = document.getElementById("user-menu-item");
    if(userLi) userLi.remove();

    userLi = document.createElement("li");
    userLi.id = "user-menu-item";
    
    const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    if (session) {
        userLi.innerHTML = `
            <div class="user-menu-trigger">
                <img src="${defaultAvatar}" class="user-avatar" alt="Perfil">
                <a href="#" style="color:var(--gold); font-weight:bold;">${welcomeText}, ${session.nome.split(' ')[0]} ▾</a>
            </div>
            <ul class="submenu">
                <li><a href="favoritos.html">${txtFavs}</a></li>
                <li><a href="encomenda.html">${txtOrders}</a></li>
                <li><a href="#" onclick="logoutUsuario()">${txtLogout}</a></li>
            </ul>`;
    } else {
        // Adicionei data-lang para o translation.js conseguir encontrar, mas também defino o texto inicial
        userLi.innerHTML = `<a href="login.html" class="login-btn-style" data-lang="login_btn">${loginText}</a>`;
    }
    
    nav.appendChild(userLi);
}

// Ouvir a mudança de idioma para atualizar o menu instantaneamente
window.addEventListener('languageChange', atualizarMenuUsuario);