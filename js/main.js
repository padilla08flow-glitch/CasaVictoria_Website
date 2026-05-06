
// main.js

function renderizarProductos(lista) {
    const contenedor = document.querySelector('.grid-colecciones');
    if (!contenedor) return; // Seguridad por si no estamos en la página de filtrado

    contenedor.innerHTML = ""; 

    lista.forEach(prod => {
        const card = `
            <article class="producto-card" data-category="${prod.cat}">
                <div class="img-container">
                    <img src="../assets/img/colecciones/${prod.img}" alt="${prod.nombre}">
                    <span class="categoria-tag">${prod.cat.charAt(0).toUpperCase() + prod.cat.slice(1)}</span>
                </div>
                <div class="info-producto">
                    <h3>${prod.nombre}</h3>
                    <p>${prod.descripcion || 'Artesanía oaxaqueña hecha a mano'}</p>
                    <span class="precio">$${prod.precio.toLocaleString()} MXN</span>
                </div>
            </article>
        `;
        contenedor.innerHTML += card;
    });
}

//filtrado
document.querySelectorAll('.btn-filtro').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelector('.btn-filtro.active').classList.remove('active');
        boton.classList.add('active');

        const categoria = boton.getAttribute('data-filter');

        if (categoria === 'todos') {
            renderizarProductos(productos);
        } else {
            const filtrados = productos.filter(p => p.cat === categoria);
            renderizarProductos(filtrados);
        }
    });
});

// 3. sroll del Header 
window.addEventListener('scroll', function(){
    const header = document.querySelector('.main-header');
    if (header) {
        if(window.scrollY > 50){
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
});

// 4. Inicialización
document.addEventListener('DOMContentLoaded', () => {
    if (typeof productos !== 'undefined') {
        renderizarProductos(productos);
    }
});