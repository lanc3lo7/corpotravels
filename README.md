# Corpotravels

Sitio web estático para Corpotravels (agencias de viajes corporativos).

## Estructura

```
.
├── index.html            Página principal
├── about.html            Sobre nosotros
├── services.html         Servicios
├── destinations.html     Destinos
├── team.html             Equipo
├── testimonials.html     Testimonios
├── faq.html              Preguntas frecuentes
├── contact.html          Contacto
├── comingsoon.html       Próximamente
├── 404.html              Página de error
├── server.js             Servidor estático local (Node, sin dependencias)
└── assets/
    ├── css/              Hojas de estilo (tema, bootstrap, slick, AOS)
    ├── js/               Scripts (jQuery, bootstrap, slick, AOS, custom)
    ├── font-awesome-lib/ Iconos y fuentes Font Awesome
    └── images/           Imágenes y logotipos
```

## Desarrollo local

Requiere Node.js. No tiene dependencias, así que no hace falta `npm install`.

```powershell
& 'C:\Program Files\nodejs\node.exe' server.js
```

Luego abre <http://127.0.0.1:8090/>.

> El puerto por defecto es **8090** porque el 8080 lo ocupa el proyecto `shinsei`
> (Vite dev server). Se puede sobreescribir: `node server.js <puerto>`.

El servidor sirve la raíz del proyecto, resuelve `/` hacia `index.html`, aplica los
`Content-Type` correctos y devuelve `404.html` para rutas inexistentes.

## Créditos y licencia

- Plantilla base: **Adventurist** — <https://html-templates.evonicmedia.com/adventurist/>
  © 2023 Evonicmedia. Todos los derechos reservados.
- Las imágenes de la sección de contacto `assets/images/contact/contact-hero-img.webp`
  es un marcador de posición pendiente de sustituir por material propio.
