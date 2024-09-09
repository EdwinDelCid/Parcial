document.addEventListener("DOMContentLoaded", function() {
    var nombreRestaurante = document.getElementById("nombreRestaurante");
    var bienvenidaModal = new bootstrap.Modal(document.getElementById("bienvenidaModal"));

    nombreRestaurante.addEventListener("click", function() {
        bienvenidaModal.show();
    });
});

function showCombo(comboName) {
    const detalles = {
        "Combo 1": "Hamburguesa artesanal con papas fritas, bebida de soda a elección.",
        "Combo 2": "Dos shawarma rellenos con pollo y vegetales frescos, acompañados de una bebida.",
        "Combo 3": "Sushi Crunchy acompañado de calamar, cangrejo y bebida incluida."
    };

    let mensaje = `Has seleccionado el ${comboName}. ${detalles[comboName]} ¡Disfruta de tu comida!`;
    
    let resultado = window.confirm(mensaje + "\n¿Te gustaría realizar tu compra?");
    
    if (resultado) {
        alert("¡Gracias por tu compra! Procesaremos tu pedido.");
    } else {
        alert("Tu pedido no ha sido procesado.");
    }
}

    $(document).ready(function() {
        // Al hacer scroll, si la sección "Acerca de Nosotros" es visible, se activa la animación
        $(window).scroll(function() {
            var acercaDe = $('#acerca-de');
            var windowBottom = $(this).scrollTop() + $(this).height();
            var acercaDeTop = acercaDe.offset().top;

            // Cuando la sección es visible, añade la clase 'fadeIn'
            if (windowBottom > acercaDeTop) {
                acercaDe.addClass('animate__animated animate__fadeIn');
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        // Agregar el evento al botón
        document.getElementById('menu-button').addEventListener('click', function() {
            Swal.fire({
                title: 'Nuestro Menú de Lujo',
                html: `
                    <div style="text-align: left;">
                        <h4>Entradas</h4>
                        <ul>
                            <li>Ensalada de la casa - $4.99</li>
                            <li>Sopa de mariscos - $6.50</li>
                        </ul>
                        <h4>Platos principales</h4>
                        <ul>
                            <li>Salmón a la parrilla - $12.99</li>
                            <li>Filete de res con salsa de champiñones - $18.99</li>
                        </ul>
                        <h4>Postres</h4>
                        <ul>
                            <li>Cheesecake de frutos rojos - $5.99</li>
                            <li>Tiramisú - $6.50</li>
                        </ul>
                    </div>`,
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#ffc107',
                backdrop: true
            });
        });
    });
