window.addEventListener('scroll', function(){
    const  header = document.querySelector('.main-header');

    if(window.scrollY > 50){
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
})

document.querySelectorAll('.btn-filtro').forEach(boton => {
    boton.addEventListener('click', () => {
        // Cambiar estado activo de los botones
        document.querySelector('.btn-filtro.active').classList.remove('active');
        boton.classList.add('active');

        const categoria = boton.getAttribute('data-filter');
        const productos = document.querySelectorAll('.producto-card');

        productos.forEach(producto => {
            if (categoria === 'todos' || producto.getAttribute('data-category') === categoria) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});