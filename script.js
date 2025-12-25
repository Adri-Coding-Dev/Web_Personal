document.addEventListener('DOMContentLoaded', function() {
            // ============================================
            // 1. ANIMACIÓN DE NIEVE NAVIDEÑA
            // ============================================
            const snowCanvas = document.getElementById('snowCanvas');
            const ctx = snowCanvas.getContext('2d');
            
            // Configurar tamaño del canvas
            function resizeCanvas() {
                snowCanvas.width = window.innerWidth;
                snowCanvas.height = window.innerHeight;
            }
            
            // Clase para los copos de nieve
            class Snowflake {
                constructor() {
                    this.x = Math.random() * snowCanvas.width;
                    this.y = Math.random() * snowCanvas.height * -1;
                    this.size = Math.random() * 4 + 1;
                    this.speed = Math.random() * 2 + 1;
                    this.opacity = Math.random() * 0.5 + 0.3;
                    this.wind = Math.random() * 0.5 - 0.25;
                }
                
                update() {
                    this.y += this.speed;
                    this.x += this.wind;
                    
                    // Si el copo sale de la pantalla, reiniciarlo arriba
                    if (this.y > snowCanvas.height) {
                        this.y = -10;
                        this.x = Math.random() * snowCanvas.width;
                    }
                    
                    // Si el copo sale por los lados, ajustar posición
                    if (this.x > snowCanvas.width + 10) {
                        this.x = -10;
                    } else if (this.x < -10) {
                        this.x = snowCanvas.width + 10;
                    }
                }
                
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                    ctx.fill();
                }
            }
            
            // Crear copos de nieve
            const snowflakes = [];
            const snowflakeCount = 150;
            
            function initSnow() {
                resizeCanvas();
                snowflakes.length = 0;
                
                for (let i = 0; i < snowflakeCount; i++) {
                    snowflakes.push(new Snowflake());
                }
            }
            
            // Animación de nieve
            function animateSnow() {
                ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
                
                for (const flake of snowflakes) {
                    flake.update();
                    flake.draw();
                }
                
                requestAnimationFrame(animateSnow);
            }
            
            // Inicializar animación de nieve
            initSnow();
            animateSnow();
            
            // Redimensionar canvas cuando cambia el tamaño de la ventana
            window.addEventListener('resize', initSnow);
            
            // ============================================
            // 2. CONFIGURACIÓN DE PARTÍCULAS PARA EL HERO
            // ============================================
            tsParticles.load("hero-particles", {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: ["#00d9ff", "#9d4edd", "#ff2e63"] },
                    shape: { type: "circle" },
                    opacity: { value: 0.7, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00d9ff",
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    }
                },
                retina_detect: true
            });

            // ============================================
            // 3. ANIMACIONES GSAP Y SCROLLTRIGGER
            // ============================================
            // Animación de entrada para el hero
            gsap.to('.hero-title', {
                duration: 1.2,
                y: 0,
                opacity: 1,
                delay: 0.3,
                ease: 'power3.out'
            });
            
            gsap.to('.hero-subtitle', {
                duration: 1.2,
                y: 0,
                opacity: 1,
                delay: 0.5,
                ease: 'power3.out'
            });
            
            gsap.to('.hero-buttons', {
                duration: 1.2,
                y: 0,
                opacity: 1,
                delay: 0.7,
                ease: 'power3.out'
            });

            // Configurar ScrollTrigger para animaciones de scroll
            gsap.registerPlugin(ScrollTrigger);

            // Animaciones para elementos de la sección About
            gsap.to('.section-title', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                x: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.to('.section-subtitle', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 65%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });
            
            gsap.to('.about-text', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 60%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: 'power3.out'
            });
            
            gsap.to('.tech-grid', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top 50%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out'
            });

            // Animaciones para elementos de la sección Portfolio
            gsap.to('.portfolio-title', {
                scrollTrigger: {
                    trigger: '#portfolio',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.to('.portfolio-subtitle', {
                scrollTrigger: {
                    trigger: '#portfolio',
                    start: 'top 65%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });

            // Animaciones para elementos de la sección Books
            gsap.to('.books-title', {
                scrollTrigger: {
                    trigger: '#books',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.to('.books-subtitle', {
                scrollTrigger: {
                    trigger: '#books',
                    start: 'top 65%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });
            
            // Animación para la tarjeta única del libro
            gsap.to('.single-book-card', {
                scrollTrigger: {
                    trigger: '#books',
                    start: 'top 60%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                delay: 0.2,
                ease: 'power3.out'
            });

            // Animaciones para elementos de la sección Social
            gsap.to('.social-title', {
                scrollTrigger: {
                    trigger: '#social',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.to('.social-subtitle', {
                scrollTrigger: {
                    trigger: '#social',
                    start: 'top 65%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });

            // Animaciones para elementos de la sección Contacto
            gsap.to('.contact-title', {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
            
            gsap.to('.contact-subtitle', {
                scrollTrigger: {
                    trigger: '#contact',
                    start: 'top 65%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none'
                },
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1,
                ease: 'power3.out'
            });

            // ============================================
            // 4. CONTROL DE VISIBILIDAD DE TARJETAS
            // ============================================
            const projectCards = document.querySelectorAll('.project-card');
            const socialCards = document.querySelectorAll('.social-card');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            projectCards.forEach(card => observer.observe(card));
            socialCards.forEach(card => observer.observe(card));

            // ============================================
            // 5. CONTROL DE LA NAVEGACIÓN Y SCROLL
            // ============================================
            const mainNav = document.getElementById('mainNav');
            const navLinks = document.querySelectorAll('.nav-link');
            const sectionDots = document.querySelectorAll('.section-dot');
            const scrollTopBtn = document.getElementById('scrollTop');
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const navMenu = document.getElementById('navMenu');
            let lastScrollTop = 0;
            let isScrolling = false;

            // Función para actualizar la navegación activa
            function updateActiveSection() {
                const sections = document.querySelectorAll('.section');
                const scrollPos = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        // Actualizar enlaces de navegación
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                        
                        // Actualizar puntos de sección
                        sectionDots.forEach(dot => {
                            dot.classList.remove('active');
                            if (dot.getAttribute('data-target') === sectionId) {
                                dot.classList.add('active');
                            }
                        });
                    }
                });
            }

            // Función para manejar el scroll
            function handleScroll() {
                if (isScrolling) return;
                
                isScrolling = true;
                
                // Actualizar indicador de progreso
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById('scrollProgress').style.width = scrolled + "%";
                
                // Mostrar/ocultar botón de scroll to top
                if (window.scrollY > 500) {
                    scrollTopBtn.classList.add('active');
                } else {
                    scrollTopBtn.classList.remove('active');
                }
                
                // Ocultar/mostrar navegación al hacer scroll
                const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                
                if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
                    // Scroll hacia abajo
                    mainNav.classList.add('hidden');
                } else {
                    // Scroll hacia arriba
                    mainNav.classList.remove('hidden');
                }
                
                lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
                
                // Actualizar sección activa
                updateActiveSection();
                
                // Permitir el siguiente scroll después de un breve retraso
                setTimeout(() => {
                    isScrolling = false;
                }, 100);
            }

            // Configurar evento de scroll
            window.addEventListener('scroll', handleScroll, { passive: true });

            // Configurar botón de scroll to top
            scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            // Configurar enlaces de navegación para scroll suave
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        // Cerrar menú móvil si está abierto
                        navMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        
                        // Scroll suave a la sección
                        window.scrollTo({
                            top: targetSection.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Configurar puntos de sección para scroll suave
            sectionDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const targetId = dot.getAttribute('data-target');
                    const targetSection = document.querySelector(`#${targetId}`);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Configurar menú móvil
            mobileMenuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });

            // ============================================
            // 6. EFECTOS DE PARTÍCULAS EN BOTONES
            // ============================================
            // Efecto de partículas al hacer clic en botones
            document.querySelectorAll('.btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    createButtonParticles(e.clientX, e.clientY, this);
                });
            });

            // Función para crear partículas en botones
            function createButtonParticles(x, y, button) {
                const color = window.getComputedStyle(button).backgroundImage;
                let particleColor = '#00d9ff';
                
                if (color.includes('var(--primary-color)')) particleColor = '#00d9ff';
                if (color.includes('var(--secondary-color)')) particleColor = '#9d4edd';
                
                for (let i = 0; i < 10; i++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `
                        position: fixed;
                        width: ${Math.random() * 8 + 4}px;
                        height: ${Math.random() * 8 + 4}px;
                        background: ${particleColor};
                        border-radius: 50%;
                        pointer-events: none;
                        z-index: 9999;
                        left: ${x}px;
                        top: ${y}px;
                        animation: buttonParticle 0.8s forwards;
                    `;
                    document.body.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 800);
                }
                
                // Añadir animación CSS si no existe
                if (!document.querySelector('#buttonParticleAnimation')) {
                    const style = document.createElement('style');
                    style.id = 'buttonParticleAnimation';
                    style.textContent = `
                        @keyframes buttonParticle {
                            0% { transform: translate(0, 0) scale(1); opacity: 1; }
                            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0); opacity: 0; }
                        }
                    `;
                    document.head.appendChild(style);
                }
            }

            // ============================================
            // 7. EFECTO TILT EN TARJETAS
            // ============================================
            // Efecto de tilt en tarjetas de proyecto al mover el ratón
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateY = ((x - centerX) / centerX) * 5;
                    const rotateX = ((centerY - y) / centerY) * 5;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(0)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
                });
            });

            // Efecto de tilt en la tarjeta del libro
            const bookCard = document.querySelector('.single-book-card');
            if (bookCard) {
                bookCard.addEventListener('mousemove', (e) => {
                    const rect = bookCard.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateY = ((x - centerX) / centerX) * 3;
                    const rotateX = ((centerY - y) / centerY) * 3;
                    
                    bookCard.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                });
                
                bookCard.addEventListener('mouseleave', () => {
                    bookCard.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
                });
            }

            // ============================================
            // 8. CONTROL DEL MODAL DE PDF
            // ============================================
            const pdfModal = document.getElementById('pdfModal');
            const pdfModalClose = document.getElementById('pdfModalClose');
            const readPdfBtn = document.getElementById('readPdfBtn');
            const downloadPdfBtn = document.getElementById('downloadPdfBtn');
            const realDownloadBtn = document.getElementById('realDownloadBtn');

            // Función para abrir el modal
            function openPdfModal() {
                pdfModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            // Función para cerrar el modal
            function closePdfModal() {
                pdfModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Botón "Leer Documento"
            if (readPdfBtn) {
                readPdfBtn.addEventListener('click', openPdfModal);
            }

            // Botón para cerrar el modal
            if (pdfModalClose) {
                pdfModalClose.addEventListener('click', closePdfModal);
            }

            // Cerrar modal al hacer clic fuera del contenido
            pdfModal.addEventListener('click', (e) => {
                if (e.target === pdfModal) {
                    closePdfModal();
                }
            });

            // Cerrar modal con tecla ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && pdfModal.classList.contains('active')) {
                    closePdfModal();
                }
            });

            // Función para descargar el PDF
            function downloadPdf() {
                // Crear un enlace temporal
                const link = document.createElement('a');
                
                // En una implementación real, aquí iría la URL del PDF
                link.href = 'main.pdf';
                link.download = 'Programacion Lineal en Java.pdf';
                
                // Simular clic en el enlace
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Mostrar notificación de descarga
                showDownloadNotification();
            }

            // Botón "Descargar" en la tarjeta
            if (downloadPdfBtn) {
                downloadPdfBtn.addEventListener('click', downloadPdf);
            }

            // Botón "Descargar PDF completo" dentro del modal
            if (realDownloadBtn) {
                realDownloadBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    downloadPdf();
                });
            }

            // Función para mostrar notificación de descarga
            function showDownloadNotification() {
                // Crear elemento de notificación
                const notification = document.createElement('div');
                notification.innerHTML = `
                    <div style="
                        position: fixed;
                        bottom: 30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: var(--success-color);
                        color: white;
                        padding: 15px 30px;
                        border-radius: 10px;
                        box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                        z-index: 100001;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-weight: 600;
                        animation: fadeInUp 0.5s ease;
                    ">
                        <i class="fas fa-check-circle"></i>
                        ¡PDF descargado correctamente!
                    </div>
                `;
                
                // Añadir estilos para la animación
                const style = document.createElement('style');
                style.textContent = `
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                        to { opacity: 1; transform: translateX(-50%) translateY(0); }
                    }
                `;
                document.head.appendChild(style);
                
                document.body.appendChild(notification);
                
                // Remover notificación después de 3 segundos
                setTimeout(() => {
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateX(-50%) translateY(-20px)';
                    notification.style.transition = 'all 0.5s ease';
                    
                    setTimeout(() => {
                        if (notification.parentNode) {
                            notification.parentNode.removeChild(notification);
                        }
                        if (style.parentNode) {
                            style.parentNode.removeChild(style);
                        }
                    }, 500);
                }, 3000);
            }

            // ============================================
            // 9. FORMULARIO DE CONTACTO CON PHP
            // ============================================
            const contactForm = document.getElementById('contactForm');
            const submitBtn = document.getElementById('submitBtn');
            const formMessage = document.getElementById('formMessage');
            
            if (contactForm) {
                contactForm.addEventListener('submit', async function(e) {
                    e.preventDefault();
                    
                    // Deshabilitar botón para evitar múltiples envíos
                    submitBtn.disabled = true;
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
                    
                    // Obtener datos del formulario
                    const formData = new FormData(this);
                    const data = {
                        name: formData.get('name'),
                        email: formData.get('email'),
                        message: formData.get('message')
                    };
                    
                    // Validación simple del lado del cliente
                    if (!data.name || !data.email || !data.message) {
                        showFormMessage('Por favor, completa todos los campos.', 'error');
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
                        return;
                    }
                    
                    if (!isValidEmail(data.email)) {
                        showFormMessage('Por favor, introduce un correo electrónico válido.', 'error');
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
                        return;
                    }
                    
                    try {
                        // En un entorno real, aquí se enviaría al servidor PHP
                        // Simulamos una petición con un retraso
                        await simulateFormSubmission(data);
                        
                        // Mostrar mensaje de éxito
                        showFormMessage('¡Mensaje enviado con éxito! Te responderé lo antes posible.', 'success');
                        
                        // Limpiar formulario
                        contactForm.reset();
                        
                    } catch (error) {
                        // Mostrar mensaje de error
                        showFormMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.', 'error');
                    } finally {
                        // Restaurar botón
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
                    }
                });
            }
            
            // Función para validar email
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            
            // Función para mostrar mensajes del formulario
            function showFormMessage(message, type) {
                formMessage.textContent = message;
                formMessage.className = 'form-message ' + type;
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    formMessage.style.opacity = '0';
                    formMessage.style.transition = 'opacity 0.5s ease';
                    
                    setTimeout(() => {
                        formMessage.className = 'form-message';
                        formMessage.style.opacity = '1';
                    }, 500);
                }, 5000);
            }
            
            // Función para simular el envío del formulario
            function simulateFormSubmission(data) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        // Simular un 90% de éxito
                        if (Math.random() > 0.1) {
                            console.log('Formulario enviado:', data);
                            console.log('Correo enviado a: adricoding647@gmail.com');
                            resolve();
                        } else {
                            reject(new Error('Error de simulación'));
                        }
                    }, 1500);
                });
            }
            
            // Código PHP simulado (comentado para mostrar cómo sería)
            /*
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $name = htmlspecialchars($_POST['name']);
                $email = htmlspecialchars($_POST['email']);
                $message = htmlspecialchars($_POST['message']);
                
                $to = "adricoding647@gmail.com";
                $subject = "Nuevo mensaje de contacto desde DevCreator";
                $body = "Nombre: $name\n";
                $body .= "Email: $email\n\n";
                $body .= "Mensaje:\n$message\n";
                
                $headers = "From: $email\r\n";
                $headers .= "Reply-To: $email\r\n";
                
                if (mail($to, $subject, $body, $headers)) {
                    echo json_encode(["success" => true, "message" => "Mensaje enviado con éxito"]);
                } else {
                    echo json_encode(["success" => false, "message" => "Error al enviar el mensaje"]);
                }
            }
            ?>
            */

            // ============================================
            // 10. INICIALIZACIÓN FINAL
            // ============================================
            // Actualizar sección activa al cargar la página
            updateActiveSection();
            
            // Configurar animación inicial
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 100);
        });