//o script do carrinho de compras

// descontos das cervejas
const DISCOUNTS = { 'unidade': 0, 'pack6': 0.05, 'pack12': 0.10, 'box24': 0.15 };
const PACK_NAMES = { 'unidade': 'Unidade', 'pack6': 'Pack 6', 'pack12': 'Pack 12', 'box24': 'Caixa 24' };
const PACK_QTD = { 'unidade': 1, 'pack6': 6, 'pack12': 12, 'box24': 24 };

document.addEventListener("DOMContentLoaded", () => {
    // 1. limpar lixo do storage se houver cenas estragadas
    validarELimparCesto();

    // 2. arrancar o contador
    atualizarContadorCesto();
    renderizarPopupCesto();

    // 3. abrir e fechar o cesto
    const cartBtn = document.getElementById("cart-btn");
    const cartDropdown = document.querySelector(".cart-dropdown");

    if (cartBtn && cartDropdown) {
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault(); 
            renderizarPopupCesto(); // atualiza sempre que abre
            cartDropdown.classList.toggle("show");
        });
        
        // fecha se clicar fora
        document.addEventListener("click", (e) => {
            if (!cartBtn.contains(e.target) && !cartDropdown.contains(e.target)) {
                cartDropdown.classList.remove("show");
            }
        });
    }

    // se tiver na pagina de checkout desenha a tabela
    if(document.getElementById("checkout-table-body")) {
        renderCheckout();
        configurarFormularioCheckout();
    }
});

// limpar erros antigos 
function validarELimparCesto() {
    try {
        let carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
        // guarda so o que tiver id e preco
        const carrinhoValido = carrinho.filter(item => item.cartId && item.name && item.unitPrice);
        
        if (carrinho.length !== carrinhoValido.length) {
            console.warn("Cesto corrigido: Itens inválidos foram removidos.");
            localStorage.setItem("royal_cart", JSON.stringify(carrinhoValido));
        }
    } catch (e) {
        // se tiver tudo estragado apaga tudo
        localStorage.removeItem("royal_cart");
    }
}

// funcoes globais para o html ver

window.adicionarAoCesto = function(id, nome, img, precoBase, tipoPack) {
    let carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    
    // verifica se veio tudo direito
    if (!id || !nome || !precoBase) {
        alert("Erro: Dados do produto inválidos.");
        return;
    }

    const label = PACK_NAMES[tipoPack] || tipoPack;
    const qtdItens = PACK_QTD[tipoPack] || 1;
    const desconto = DISCOUNTS[tipoPack] || 0;
    
    // troca virgula por ponto senao o js nao faz contas
    let precoNum = typeof precoBase === 'string' ? parseFloat(precoBase.replace(',', '.').replace('€', '')) : precoBase;
    
    const precoFinal = (precoNum * qtdItens * (1 - desconto)).toFixed(2);
    const cartItemId = `${id}-${tipoPack}`;
    
    const existingItem = carrinho.find(item => item.cartId === cartItemId);

    if (existingItem) {
        existingItem.qtd += 1;
    } else {
        carrinho.push({
            cartId: cartItemId,
            productId: id,
            name: nome,
            img: img, // se nao tiver img paciencia
            packType: tipoPack,
            packLabel: label,
            unitPrice: parseFloat(precoFinal),
            qtd: 1
        });
    }

    localStorage.setItem("royal_cart", JSON.stringify(carrinho));
    atualizarContadorCesto();
    renderizarPopupCesto();
    alert("Adicionado ao cesto!"); 
};

// para o remover do cesto
window.removerDoCesto = function(cartItemId) {
    let carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    const novoCarrinho = carrinho.filter(item => item.cartId !== cartItemId);
    
    localStorage.setItem("royal_cart", JSON.stringify(novoCarrinho));
    
    atualizarContadorCesto();
    renderizarPopupCesto();
    
    // atualiza tambem se tiver na pagina de checkout
    if(document.getElementById("checkout-table-body")) {
        renderCheckout();
    }
};

// atualiza o numero no icone do cesto
function atualizarContadorCesto() {
    const carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
    const totalCount = carrinho.reduce((acc, item) => acc + item.qtd, 0);
    const countEl = document.getElementById("cart-count");
    if(countEl) countEl.innerText = totalCount;
}
// desenha o popup do cesto
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
            const itemTotal = item.unitPrice * item.qtd;
            total += itemTotal;
            
            const li = document.createElement("li");
            li.className = "cart-item-row"; 
            
            // desenhar o item
            li.innerHTML = `
                <div class="cart-item-info">
                    <img src="${item.img || '/img/icon/cr_icon.png'}" class="cart-item-img" alt="img" onerror="this.src='https://placehold.co/40'">
                    <div>
                        <div style="font-size:0.9rem; font-weight:bold; color:white;">${item.name}</div>
                        <div style="font-size:0.8rem; color:#aaa;">${item.packLabel} x${item.qtd}</div>
                    </div>
                </div>
                <div style="text-align:right;">
                    <div style="color:var(--gold); font-weight:bold;">${itemTotal.toFixed(2)}€</div>
                    <button onclick="window.removerDoCesto('${item.cartId}')" class="cart-remove-btn" title="Remover">✕</button>
                </div>
            `;
            popup.appendChild(li);
        });
    }
    totalEl.innerText = total.toFixed(2) + "€";
}
// desenha a tabela de checkout
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

    // preenche a tabela
    carrinho.forEach(item => {
        const subtotal = item.unitPrice * item.qtd;
        total += subtotal;
        
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="checkout-product-cell">
                <img src="${item.img || ''}" width="40" style="border-radius:4px;"> 
                <span>${item.name}</span>
            </td>
            <td>${item.packLabel}</td>
            <td>${item.qtd}</td>
            <td>${subtotal.toFixed(2)}€</td>
            <td style="text-align:center;">
                <button onclick="window.removerDoCesto('${item.cartId}')" style="background:none; border:none; cursor:pointer; font-size:1.2rem; color:#ff4444;">✕</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    totalEl.innerText = total.toFixed(2) + "€";
}
// configura o formulario de checkout
function configurarFormularioCheckout() {
    const form = document.getElementById("checkout-form");
    if(!form) return;

    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const session = JSON.parse(localStorage.getItem("royal_session"));
        if(!session) {
            alert("Tem de fazer login para finalizar a encomenda.");
            window.location.href = "login.html";
            return;
        }

        const carrinho = JSON.parse(localStorage.getItem("royal_cart") || "[]");
        if(carrinho.length === 0) {
            alert("O cesto está vazio!");
            return;
        }

        // cria a encomenda
        const totalValue = document.getElementById("checkout-total").innerText;
        const novaEncomenda = {
            id: Date.now(),
            date: new Date().toISOString(),
            user: session.nome,
            email: session.email,
            items: carrinho,
            total: totalValue,
            shipping: {
                address: document.getElementById("checkout-address").value,
                postal: document.getElementById("checkout-postal").value
            }
        };

        const encomendas = JSON.parse(localStorage.getItem("royal_orders") || "[]");
        encomendas.push(novaEncomenda);
        localStorage.setItem("royal_orders", JSON.stringify(encomendas));

        // limpa o cesto e manda o user embora
        localStorage.removeItem("royal_cart");
        alert("Encomenda realizada com sucesso!");
        window.location.href = "encomenda.html";
    });
}