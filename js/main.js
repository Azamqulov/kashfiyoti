// Intersection Observer for animations

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Animate elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(element => {
    element.classList.add('aos-init');
    observer.observe(element);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Bülten aboneliğiniz için teşekkürler! ${email} adresine onay e-postası gönderdik.`);
    e.target.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const coffeeArt = document.querySelector('.coffee-art');
    
    if (heroContent && coffeeArt) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        coffeeArt.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Gallery image hover effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Price counter animation
const prices = document.querySelectorAll('.price');
prices.forEach(price => {
    const finalPrice = parseFloat(price.textContent.replace(/[^0-9.-]+/g, ''));
    let currentPrice = 0;
    const duration = 1000;
    const steps = 20;
    const increment = finalPrice / steps;
    
    function updatePrice() {
        if (currentPrice < finalPrice) {
            currentPrice += increment;
            if (currentPrice > finalPrice) currentPrice = finalPrice;
            price.textContent = `${Math.floor(currentPrice)}₺`;
            requestAnimationFrame(updatePrice);
        }
    }
    
    observer.observe(price);
    price.addEventListener('animationstart', updatePrice);
});

// Add scroll-based navbar transparency
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")
  
    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
      cookieConsent.style.display = "block"
    }
  
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true")
      cookieConsent.style.display = "none"
    })
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle")
    const navList = document.querySelector(".nav-list")
  
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
      menuToggle.classList.toggle("active")
    })
})  