// ====== NAVIGATION & HAMBURGER MENU ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ====== SMOOTH SCROLL & ACTIVE LINK ======
document.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('.slide-section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====== INTERSECTION OBSERVER FOR ANIMATIONS ======
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate all elements with animation classes in this section
            const animatedElements = entry.target.querySelectorAll('.slide-in-up, .slide-in-left, .slide-in-right, .slide-in-header, .slide-in-content, .slide-in-image');
            
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 100);
            });
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all slide sections
document.querySelectorAll('.slide-section').forEach(section => {
    observer.observe(section);
});

// ====== FORM SUBMISSION ======
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Simple validation
        let isValid = true;
        inputs.forEach(input => {
            if (input.value.trim() === '' && input.hasAttribute('required')) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }
        });

        if (isValid) {
            // Show success message
            const btn = contactForm.querySelector('.btn-primary');
            const originalText = btn.textContent;
            btn.textContent = '✓ Pesan Terkirim!';
            btn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
            
            // Reset form
            contactForm.reset();
            
            // Restore button after 3 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 3000);
        }
    });
}

// ====== SCROLL ANIMATIONS FOR MULTIPLE ELEMENTS ======
const createScrollAnimation = () => {
    const elements = document.querySelectorAll('.slide-in-up, .slide-in-left, .slide-in-right, .slide-in-header, .slide-in-content, .slide-in-image');
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => {
        animationObserver.observe(el);
    });
};

// Call animation setup
createScrollAnimation();

// ====== SKILL ITEMS HOVER EFFECT ======
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        skillItems.forEach(skill => {
            if (skill !== item) {
                skill.style.opacity = '0.5';
                skill.style.transform = 'scale(0.95)';
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        skillItems.forEach(skill => {
            skill.style.opacity = '1';
            skill.style.transform = 'scale(1)';
        });
    });
});

// ====== PROJECT CARDS ANIMATION ======
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// ====== TESTIMONIAL CARDS AUTO-SCROLL (Optional) ======
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');

if (testimonialCards.length > 3) {
    // Simple testimonial rotation (only if more than 3 cards)
    setInterval(() => {
        testimonialCards.forEach(card => {
            card.style.transform = '';
            card.style.opacity = '0.6';
        });
        
        const activeIndex = currentTestimonial % testimonialCards.length;
        testimonialCards[activeIndex].style.opacity = '1';
        currentTestimonial++;
    }, 5000);
}

// ====== SMOOTH SCROLL BEHAVIOR ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ====== PAGE LOAD ANIMATION ======
window.addEventListener('load', () => {
    // Trigger animations on page load
    const navbar = document.querySelector('.navbar');
    navbar.style.animation = 'slideInDown 0.5s ease-out';
    
    // Stagger section animations on load
    const sections = document.querySelectorAll('.slide-section');
    sections.forEach((section, index) => {
        const content = section.querySelectorAll('.slide-in-up, .slide-in-left, .slide-in-right, .slide-in-header, .slide-in-content, .slide-in-image');
        content.forEach((el, elIndex) => {
            el.style.animationDelay = `${(index * 0.2) + (elIndex * 0.05)}s`;
        });
    });
});

// ====== PARALLAX EFFECT ======
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage && scrollY < window.innerHeight) {
        heroImage.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// ====== SCROLL TO TOP BUTTON (Optional) ======
const createScrollToTop = () => {
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 10px 25px rgba(99, 102, 241, 0.3);
        font-size: 20px;
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollToTop();

// ====== DYNAMICALLY UPDATE ACTIVE NAV LINK ======
window.addEventListener('hashchange', () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`a[href="${window.location.hash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});

// ====== MOUSE FOLLOW EFFECT (Optional Light Effect) ======
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        const rect = shape.getBoundingClientRect();
        const shapeX = rect.left + rect.width / 2;
        const shapeY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
            Math.pow(e.clientX - shapeX, 2) + 
            Math.pow(e.clientY - shapeY, 2)
        );
        
        if (distance < 300) {
            const angle = Math.atan2(e.clientY - shapeY, e.clientX - shapeX);
            const moveX = Math.cos(angle) * 20;
            const moveY = Math.sin(angle) * 20;
            
            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});

// ====== UTILITY: Add animation classes to elements ======
const addAnimationClass = (selector, animationClass, delay = 0) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add(animationClass);
        }, delay + (index * 100));
    });
};

// ====== INITIALIZE ANIMATIONS ON READY ======
document.addEventListener('DOMContentLoaded', () => {
    // Check if elements are already in viewport on load
    const sections = document.querySelectorAll('.slide-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            const elements = section.querySelectorAll('.slide-in-up, .slide-in-left, .slide-in-right, .slide-in-header, .slide-in-content, .slide-in-image');
            elements.forEach(el => {
                el.style.opacity = '1';
            });
        }
    });
});

// ====== PERFORMANCE: Throttle scroll events ======
let ticking = false;

const throttledScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Your scroll-based code here
            ticking = false;
        });
        ticking = true;
    }
};

window.addEventListener('scroll', throttledScroll);

console.log('Portfolio website loaded successfully! 🚀');
