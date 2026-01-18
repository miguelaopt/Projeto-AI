//script para a autenticaçao 


document.addEventListener("DOMContentLoaded", () => {
    verificarIdade();
    atualizarMenuUsuario();
});

// ver se é maior de idade
function verificarIdade() {
    const verified = localStorage.getItem("royal_age_verified");
    if (!verified) {
        // montar o popup 
        const overlay = document.createElement("div");
        overlay.className = "modal-overlay";
        // base do popup
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

        // botoes a funcionar
        document.getElementById("btn-yes").onclick = () => {
            localStorage.setItem("royal_age_verified", "true");
            overlay.remove(); // xau popup
        };
        
        document.getElementById("btn-no").onclick = () => {
            window.location.href = "https://www.google.com"; // manda para o google se nao for
        };
    }
}

// cenas de login e registo 
function registarUsuario(nome, email, password) {
    // ir buscar a lista ou criar array vazio se nao houver nada
    const users = JSON.parse(localStorage.getItem("royal_users") || "[]");
    if (users.find(u => u.email === email)) {
        return { success: false, msg: "Email já registado." };
    }
    // guarda o userw no array
    //problema que tem, guardar em local storage n é seguro, mas para este projeto serve
    users.push({ nome, email, password });
    localStorage.setItem("royal_users", JSON.stringify(users));
    return { success: true, msg: "Registo efetuado com sucesso! Faça login." };
}

function loginUsuario(email, password) {
    const users = JSON.parse(localStorage.getItem("royal_users") || "[]");
    // procura se o user existe e se a pass bate certo
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem("royal_session", JSON.stringify(user));
        return { success: true };
    }
    return { success: false, msg: "Credenciais inválidas." };
}

function logoutUsuario() {
    // limpa a sessao e recarrega
    localStorage.removeItem("royal_session");
    window.location.reload();
}

function atualizarMenuUsuario() {
    const session = JSON.parse(localStorage.getItem("royal_session"));
    const nav = document.querySelector("nav ul");
    const lang = localStorage.getItem('royal_lang') || 'pt';
    
    // ir buscar o texto certo ao translation.js
    const loginText = (typeof translations !== 'undefined') ? translations[lang]['login_btn'] : "Login / Registar";
    const welcomeText = (typeof translations !== 'undefined') ? translations[lang]['welcome_user'] : "Olá";

    // textos do dropdown
    const txtOrders = (typeof translations !== 'undefined') ? translations[lang]['menu_my_orders'] : "📦 Minhas Encomendas";
    const txtFavs = (typeof translations !== 'undefined') ? translations[lang]['menu_my_favs'] : "❤️ Meus Favoritos";
    const txtLogout = (typeof translations !== 'undefined') ? translations[lang]['menu_logout'] : "🚪 Sair";

    //apaga o botao antigo para nao duplicar
    let userLi = document.getElementById("user-menu-item");
    if(userLi) userLi.remove();

    userLi = document.createElement("li");
    userLi.id = "user-menu-item";
    
    // boneco generico
    const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

    if (session) {
        // menu com foto e dropdown se tiver logado
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
        // botao normal de login se nao tiver
        userLi.innerHTML = `<a href="login.html" class="login-btn-style" data-lang="login_btn">${loginText}</a>`;
    }
    
    nav.appendChild(userLi);
}

// se mudar a lingua, atualiza o menu logo
window.addEventListener('languageChange', atualizarMenuUsuario);