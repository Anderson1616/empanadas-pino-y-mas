document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de categoría
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    // Agregar evento click a cada botón
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            
            // Obtener la categoría a mostrar
            const category = this.getAttribute('data-category');
            
            // Ocultar todas las categorías del menú
            document.querySelectorAll('.menu-category').forEach(cat => {
                cat.classList.remove('active');
            });
            
            // Mostrar la categoría seleccionada
            document.getElementById(category).classList.add('active');
        });
    });

    // Mostrar la primera categoría al cargar
    if (categoryBtns.length > 0) {
        categoryBtns[0].click();
    }
});
