import { animate, inView, stagger } from "motion";

export function initAnimations() {
    // Hero animation sequence & slider
    animate('.hero-bg img.active', { scale: [1.1, 1] }, { duration: 2, easing: "ease-out" });
    animate(
        '.fade-element', 
        { y: [40, 0], opacity: [0, 1] }, 
        { delay: stagger(0.15, { startDelay: 0.3 }), duration: 1.2, easing: "ease-out" }
    );

    // Hero Slider Initialization (every 5 seconds)
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            // Fade out current
            animate(slides[currentSlide], { opacity: 0 }, { duration: 1, easing: "ease-in-out" });
            slides[currentSlide].classList.remove('active');
            
            // Next index
            currentSlide = (currentSlide + 1) % slides.length;
            
            // Fade in next and gently scale
            slides[currentSlide].classList.add('active');
            animate(slides[currentSlide], { opacity: [0, 1], scale: [1.05, 1] }, { duration: 1.5, easing: "ease-out" });
        }, 5000); // 5 seconds interval
    }

    // Fade-up sections when in view (stagger children for more liveliness)
    inView(".fade-up", (info) => {
        // Parent must be visible since input.css applies opacity: 0 to .fade-up
        info.target.style.opacity = 1;
        info.target.style.transform = "none";
        
        const children = Array.from(info.target.children);
        if (children.length > 0) {
            children.forEach(c => c.style.opacity = 0);
            animate(children, { y: [40, 0], opacity: [0, 1] }, { delay: stagger(0.15), duration: 0.8, easing: "ease-out" });
        } else {
            animate(info.target, { y: [40, 0], opacity: [0, 1] }, { duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });

    // Staggered About cards
    inView(".about-grid", (info) => {
        const cards = info.target.querySelectorAll('.stagger-card');
        if (cards.length) {
            animate(cards, { y: [40, 0], opacity: [0, 1] }, { delay: stagger(0.15), duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });

    // Staggered Service cards
    inView(".services-grid", (info) => {
        const cards = info.target.querySelectorAll('.stagger-service');
        if (cards.length) {
            animate(cards, { y: [30, 0], opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });

    // Staggered Classes cards
    inView(".classes-grid", (info) => {
        const cards = info.target.querySelectorAll('.stagger-class');
        if (cards.length) {
            animate(cards, { scale: [0.95, 1], opacity: [0, 1] }, { delay: stagger(0.15), duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });

    // Staggered Gallery items
    inView(".gallery-grid", (info) => {
        const items = info.target.querySelectorAll('.gallery-item');
        if (items.length) {
            animate(items, { scale: [0.95, 1], opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });

    // Staggered Testimonial cards
    inView(".testimonials-grid", (info) => {
        const testies = info.target.querySelectorAll('.stagger-testi');
        if (testies.length) {
            animate(testies, { y: [40, 0], opacity: [0, 1] }, { delay: stagger(0.15), duration: 0.8, easing: "ease-out" });
        }
    }, { margin: "0px 0px -15% 0px" });
}
