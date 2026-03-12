import { createIcons, Menu, X, Phone, ArrowRight, PenTool, Flower2, Sparkles, HeartHandshake, Scissors, Eye, Smile, Droplet, Gem, Wind, Star, MapPin, Mail, Clock, CheckCircle, Facebook, Instagram, Youtube, Send, ChevronDown, MessageCircle, GraduationCap } from 'lucide';
import { initLenis } from './lenis-setup.js';
import { initAnimations } from './animations.js';
import '../css/input.css';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = initLenis();

    // 2. Initialize Lucide Icons
    const icons = { Menu, X, Phone, ArrowRight, PenTool, Flower2, Sparkles, HeartHandshake, Scissors, Eye, Smile, Droplet, Gem, Wind, Star, MapPin, Mail, Clock, CheckCircle, Facebook, Instagram, Youtube, Send, ChevronDown, MessageCircle, GraduationCap };
    createIcons({ icons });

    // Helper to refresh icons when adding new DOM elements
    const refreshIcons = () => createIcons({ icons });

    // 3. Initialize Animations (Motion One)
    initAnimations();

    // 4. Header & Mobile Nav Logic
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = mobileNav.querySelectorAll('a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        const isActive = mobileNav.classList.contains('active');
        mobileToggle.innerHTML = isActive ? `<i data-lucide="x"></i>` : `<i data-lucide="menu"></i>`;
        refreshIcons();
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
            refreshIcons();
        });
    });

    // Anchor smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement, { offset: -80 });
            }
        });
    });

    // 5. Lightbox functionality
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (galleryItems.length > 0 && lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                lightboxImg.src = item.src;
                lightbox.classList.add('active');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => { lightboxImg.src = ''; }, 300);
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    // 6. Booking form logic with Motion One
    const bookingForm = document.getElementById('appointment-form');
    const successMsg = document.getElementById('success-msg');

    if (bookingForm && successMsg) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const { animate } = await import('motion');
            
            animate(bookingForm, { opacity: 0, y: -20 }, { duration: 0.4, easing: "ease-in-out" }).finished.then(() => {
                bookingForm.style.display = 'none';
                successMsg.style.display = 'flex';
                animate(successMsg, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.6, easing: "ease-out" });
            });
        });
    }

    // Newsletter mock submit
    const newsletterForm = document.getElementById('newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const btn = newsletterForm.querySelector('button');
            const btnOriginalHtml = btn.innerHTML;
            
            btn.innerHTML = `<i data-lucide="check-circle"></i>`;
            refreshIcons();
            btn.style.backgroundColor = '#4caf50';
            input.value = '';
            
            setTimeout(() => {
                btn.innerHTML = btnOriginalHtml;
                btn.style.backgroundColor = '';
                refreshIcons();
            }, 3000);
        });
    }
});
