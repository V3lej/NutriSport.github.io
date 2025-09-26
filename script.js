document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Lógica para los Acordeones (Características y FAQ)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.closest('.accordion-item');
            
            // Toggle 'active' class
            item.classList.toggle('active');

            // Adjust icon
            const icon = this.querySelector('.icon');
            if (item.classList.contains('active')) {
                icon.innerHTML = '&#x2212;'; // Cambia a menos (-)
            } else {
                icon.innerHTML = '&#x2B;'; // Cambia a más (+)
            }
        });
    });

    // 2. Lógica para los Tooltips (Contacto y Mi Cuenta en la barra superior/footer)
    // Selecciona todos los elementos que tienen las clases para disparar tooltips
    const allTooltipTriggers = document.querySelectorAll('.contact-trigger, .cuenta-trigger');

    if (allTooltipTriggers.length > 0) {
        
        allTooltipTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.stopPropagation(); // Evita que el clic se propague y cierre el tooltip inmediatamente

                // Cierra otros tooltips antes de abrir el actual (Mejora la experiencia en móvil)
                allTooltipTriggers.forEach(otherTrigger => {
                    if (otherTrigger !== this && otherTrigger.classList.contains('active')) {
                         otherTrigger.classList.remove('active');
                    }
                });
                
                // Muestra/Oculta el tooltip actual
                this.classList.toggle('active');
            });
        });

        // Oculta todos los tooltips al hacer clic en cualquier otra parte del documento
        document.addEventListener('click', function() {
            allTooltipTriggers.forEach(trigger => {
                trigger.classList.remove('active');
            });
        });
    }
});