// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent");
    const cookieAccept = document.getElementById("cookieAccept");
  
    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
      cookieConsent.style.display = "block";
    }
  
    cookieAccept.addEventListener("click", () => {
      localStorage.setItem("cookieConsent", "true");
      cookieConsent.style.display = "none";
    });
  
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const navList = document.querySelector(".nav-list");
  
    menuToggle.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  
    // Header Scroll Effect
    const header = document.querySelector(".header");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  
    // Hero Slider
    const heroSlides = document.querySelectorAll(".hero-slide");
    const heroDots = document.querySelectorAll(".hero-dot");
    const prevArrow = document.querySelector(".hero-arrow.prev");
    const nextArrow = document.querySelector(".hero-arrow.next");
    let currentSlide = 0;
    let slideInterval;
  
    function showSlide(index) {
      // Hide all slides
      heroSlides.forEach((slide) => slide.classList.remove("active"));
      // Remove active class from all dots
      heroDots.forEach((dot) => dot.classList.remove("active"));
  
      // Show the selected slide
      heroSlides[index].classList.add("active");
      heroDots[index].classList.add("active");
  
      currentSlide = index;
    }
  
    // Add click event to dots
    heroDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        resetSlideInterval();
      });
    });
  
    // Add click event to arrows
    prevArrow.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      showSlide(currentSlide);
      resetSlideInterval();
    });
  
    nextArrow.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(currentSlide);
      resetSlideInterval();
    });
  
    // Auto slide
    function startSlideInterval() {
      slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
      }, 5000);
    }
  
    function resetSlideInterval() {
      clearInterval(slideInterval);
      startSlideInterval();
    }
  
    startSlideInterval();
  
    // Testimonial Slider
    const testimonialItems = document.querySelectorAll(".testimonial-item");
    const testimonialDots = document.querySelectorAll(".testimonial-dots .dot");
    let currentTestimonial = 0;
    let testimonialInterval;
  
    function showTestimonial(index) {
      // Hide all testimonials
      testimonialItems.forEach((item) => item.classList.remove("active"));
      // Remove active class from all dots
      testimonialDots.forEach((dot) => dot.classList.remove("active"));
  
      // Show the selected testimonial
      testimonialItems[index].classList.add("active");
      testimonialDots[index].classList.add("active");
  
      currentTestimonial = index;
    }
  
    // Add click event to dots
    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index);
        resetTestimonialInterval();
      });
    });
  
    // Auto slide testimonials
    function startTestimonialInterval() {
      testimonialInterval = setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        showTestimonial(currentTestimonial);
      }, 5000);
    }
  
    function resetTestimonialInterval() {
      clearInterval(testimonialInterval);
      startTestimonialInterval();
    }
  
    startTestimonialInterval();
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
  
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth",
          });
  
          // Close mobile menu if open
          navList.classList.remove("active");
          menuToggle.classList.remove("active");
        }
      });
    });
  
    // Form submission
    const reservationForm = document.getElementById("reservationForm");
  
    if (reservationForm) {
      reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert("Rezervasyonunuz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.");
        reservationForm.reset();
      });
    }
  });
  