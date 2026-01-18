// js/carrinho.js

// Mantém as tuas constantes de desconto no topo
const DISCOUNTS = { 'unidade': 0, 'pack6': 0.05, 'pack12': 0.10, 'box24': 0.15 };
const PACK_NAMES = { 'unidade': 'Unidade', 'pack6': 'Pack 6', 'pack12': 'Pack 12', 'box24': 'Caixa 24' };
const PACK_QTD = { 'unidade': 1, 'pack6': 6, 'pack12': 12, 'box24': 24 };

document.addEventListener("DOMContentLoaded", () => {
    atualizarContadorCesto();
    renderizarPopupCesto();

    // Lógica do Clique no Carrinho
    const cartBtn = document.getElementById("cart-btn");
    const cartDropdown = document.querySelector(".cart-dropdown");

    if (cartBtn && cartDropdown) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            cartDropdown.classList.toggle("show");
        });
        document.addEventListener("click", (e) => {
            if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
                cartDropdown.classList.remove("show");
            }
        });
    }

    // Se estivermos na página de checkout, renderiza a tabela
    if(document.getElementById("checkout-table-body")) {
        renderCheckout();
    }
});

function adicionarAoCesto(id, nome, img, precoBase, tipoPack) {
    let carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    
    const qtdItens = PACK_QTD[tipoPack];
    const desconto = DISCOUNTS[tipoPack];
    const precoFinal = (precoBase * qtdItens * (1 - desconto)).toFixed(2);
    const cartItemId = `${id}-${tipoPack}`;
    
    const existingItem = carrinho.find(item => item.cartId === cartItemId);

    if (existingItem) {
        existingItem.qtd += 1;
    } else {
        carrinho.push({
            cartId: cartItemId,
            productId: id,
            name: nome,
            img: img,
            packType: tipoPack,
            packLabel: PACK_NAMES[tipoPack],
            unitPrice: parseFloat(precoFinal),
            qtd: 1
        });
    }

    localStorage.setItem("royal_cart", JSON.stringify(carrinho));
    atualizarContadorCesto();
    renderizarPopupCesto();
    alert("Adicionado ao cesto!");
}

// --- FUNÇÃO DE REMOVER ---
function removerDoCesto(cartItemId) {
    let carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    
    // Filtra para remover o item
    carrinho = carrinho.filter(item => item.cartId !== cartItemId);
    
    localStorage.setItem("royal_cart", JSON.stringify(carrinho));
    
    // Atualiza tudo
    atualizarContadorCesto();
    renderizarPopupCesto();
    if(typeof renderCheckout === 'function' && document.getElementById("checkout-table-body")) {
        renderCheckout();
    }
}

function atualizarContadorCesto() {
    const carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    const totalCount = carrinho.reduce((acc, item) => acc + item.qtd, 0);
    const countEl = document.getElementById("cart-count");
    if(countEl) countEl.innerText = totalCount;
}

function renderizarPopupCesto() {
    const popup = document.getElementById("cart-items-list");
    const totalEl = document.getElementById("cart-total-value");
    if(!popup || !totalEl) return;

    const carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    popup.innerHTML = "";
    
    let total = 0;

    if (carrinho.length === 0) {
        popup.innerHTML = "<li style='padding:20px; text-align:center; color:#777;'>O cesto está vazio.</li>";
    } else {
        carrinho.forEach(item => {
            total += item.unitPrice * item.qtd;
            const li = document.createElement("li");
            li.className = "cart-item-row"; 
            
            // Adicionei o botão de remover onclick="removerDoCesto(...)"
            li.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.img}" class="cart-item-img">
                    <div>
                        <div style="font-size:0.9rem; font-weight:bold; color:white;">${item.name}</div>
                        <div style="font-size:0.8rem; color:#aaa;">${item.packLabel} x${item.qtd}</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="color:var(--gold); font-weight:bold;">${(item.unitPrice * item.qtd).toFixed(2)}€</div>
                    <button onclick="removerDoCesto('${item.cartId}')" class="cart-remove-btn" title="Remover">✕</button>
                </div>
            `;
            popup.appendChild(li);
        });
    }
    totalEl.innerText = total.toFixed(2) + "€";
}

// Renderiza a Tabela do Checkout
function renderCheckout() {
    const tbody = document.getElementById("checkout-table-body");
    const totalEl = document.getElementById("checkout-total");
    if(!tbody || !totalEl) return;

    const carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    tbody.innerHTML = "";
    let total = 0;

    if(carrinho.length === 0) {
        tbody.innerHTML = "<tr><td colspan='5' style='padding:20px; text-align:center;'>O teu cesto está vazio.</td></tr>";
        totalEl.innerText = "0.00€";
        return;
    }

    carrinho.forEach(item => {
        const subtotal = item.unitPrice * item.qtd;
        total += subtotal;
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="checkout-product-cell">
                <img src="${item.img}" width="40"> 
                <span>${item.name}</span>
            </td>
            <td>${item.packLabel}</td>
            <td>${item.qtd}</td>
            <td>${subtotal.toFixed(2)}€</td>
            <td style="text-align:center;">
                <button onclick="removerDoCesto('${item.cartId}')" style="background:none; border:none; cursor:pointer; font-size:1.2rem; color:#ff4444;">✕</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    totalEl.innerText = total.toFixed(2) + "€";
}

function limparCesto() {
    localStorage.removeItem("royal_cart");
    atualizarContadorCesto();
    renderizarPopupCesto();
}