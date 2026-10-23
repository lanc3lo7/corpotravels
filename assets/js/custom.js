// ============= sidebar start ============= // 
const sidebarEvent = document.getElementById('sidebarEvent');
const sidebar = document.querySelector('.sidebar');
sidebarEvent.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-toggle');
});

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-toggle');
});
// ============= sidebar end ============= //

// ============= counter start ============= //
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        const n = e.extend({
            time: 400,
            delay: 10
        }, t);

        return this.each(function() {
            const t = e(this);
            const r = n;

            function incrementValue() {
                const nums = [];
                const duration = r.time / r.delay;
                let value = t.text();
                const hasCommas = /[0-9]+,[0-9]+/.test(value);
                value = value.replace(/,/g, "");
                const isNumber = /^[0-9]+$/.test(value);
                const isFloat = /^[0-9]+\.[0-9]+$/.test(value);
                const decimalPlaces = isFloat ? (value.split(".")[1] || []).length : 0;

                for (let i = duration; i >= 1; i--) {
                    let newValue = parseInt(value / duration * i);
                    if (isFloat) {
                        newValue = parseFloat(value / duration * i).toFixed(decimalPlaces);
                    }
                    if (hasCommas) {
                        while (/(\d+)(\d{3})/.test(newValue.toString())) {
                            newValue = newValue.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        }
                    }
                    nums.unshift(newValue);
                }

                t.data("counterup-nums", nums);
                t.text("0");

                function updateValue() {
                    t.text(t.data("counterup-nums").shift());
                    if (t.data("counterup-nums").length) {
                        setTimeout(updateValue, r.delay);
                    } else {
                        t.removeData("counterup-nums");
                    }
                }

                t.data("counterup-func", updateValue);
                setTimeout(t.data("counterup-func"), r.delay);
            }

            t.waypoint(incrementValue, {
                offset: "100%",
                triggerOnce: true
            });
        });
    };
})(jQuery);

jQuery(document).ready(function($) {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
});
// ============= counter end ============= //

// ============= button back to top start ============= //
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}
// ============= button back to top end ============= //


// ============= logoipsum slider section ============= //
$('.logoipsum-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    slidesToShow: 5,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

// ============= logoipsum slider section end ============= //

// ============= about validation start ============= //
const aboutForm = document.getElementById('about-form');
const aboutMessage = document.getElementById('about-message');
// Numero de WhatsApp de Corpotravels (+58 412 557-7363)
const CORPOTRAVELS_WHATSAPP = '584125577363';

if (aboutForm !== null) {
    aboutForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameField = aboutForm.querySelector('input[type="text"]');
        const dateField = aboutForm.querySelector('input[type="date"]');
        const destField = aboutForm.querySelector('select');

        const nombre = nameField ? nameField.value.trim() : '';

        let destino = '';
        if (destField && destField.selectedIndex > 0) {
            destino = destField.options[destField.selectedIndex].text.trim();
        }

        let fecha = dateField ? dateField.value.trim() : '';
        if (/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
            const p = fecha.split('-');
            fecha = p[2] + '/' + p[1] + '/' + p[0];
        }

        const lineas = ['Hola Corpotravels, quiero hacer una reserva:'];
        if (nombre) lineas.push('Nombre: ' + nombre);
        if (destino) lineas.push('Destino: ' + destino);
        if (fecha) lineas.push('Fecha de viaje: ' + fecha);
        lineas.push('', 'Quiero mas informacion, gracias.');

        const url = 'https://wa.me/' + CORPOTRAVELS_WHATSAPP +
            '?text=' + encodeURIComponent(lineas.join('\n'));

        // Mensaje de confirmacion en el propio formulario
        if (aboutMessage) {
            aboutMessage.innerHTML = 'Abriendo WhatsApp...';
            aboutMessage.style.display = 'block';
        }

        // Pestaña nueva; si el navegador la bloquea, navega en la misma
        const opened = window.open(url, '_blank', 'noopener');
        if (!opened) {
            window.location.href = url;
        }

        aboutForm.reset();
        setTimeout(function() {
            if (aboutMessage) aboutMessage.style.display = 'none';
        }, 4000);
    });
}
// ============= about validation end ============= //


// ============= contact form validation start ============= //
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
if (contactForm !== null) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactMessage.innerHTML = 'Form submitted successfully!';
        contactMessage.style.display = 'block';
        contactMessage.style.visibility = 'visible';
        contactForm.reset();
        setTimeout(function() {
            contactMessage.style.display = 'none';
        }, 3000);
    });
}
// ============= contact form validation end ============= //
