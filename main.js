
document.addEventListener('DOMContentLoaded', function() {
    
    var btnDark = document.getElementById('btn-dark');

    
    btnDark.addEventListener('click', function() {
       
        document.body.classList.toggle('dark-mode-content');

        
        var cuadros = document.querySelectorAll('.cuadro');
        cuadros.forEach(function(cuadro) {
            cuadro.classList.toggle('dark-mode-cuadro');
        });

        
        btnDark.classList.toggle('dark-btn');

       
        var modoActual = document.body.classList.contains('dark-mode-content') ? 'Claro' : 'Oscuro';
        btnDark.textContent = modoActual;
    });
});


