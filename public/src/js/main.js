import '../assets/css/style.css';
import 'aos/dist/aos.css';
// import 'swiper/swiper-bundle.min.css'; // Old import
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Styles for Navigation module
import 'swiper/css/pagination'; // Styles for Pagination module
// Autoplay module typically doesn't require its own CSS import
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Initialize Swiper for the featured products carousel
const featuredProductsSwiper = new Swiper('.featured-products-swiper', {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
mobileMenuLinks?.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Header background change on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('bg-white', 'shadow-md');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-white', 'shadow-md');
    header.classList.add('bg-transparent');
  }
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const company = document.getElementById('company').value;
  const email = document.getElementById('email').value;
  const countryCode = document.getElementById('country-code').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;
  
  // Here you would typically send the form data to a server
  // For demonstration purposes, we'll just log the data and show a success message
  console.log({
    name,
    company,
    email,
    phone: `${countryCode}${phone}`,
    message
  });
  
  // Show success message
  alert('Thank you for your inquiry! We will get back to you shortly.');
  
  // Reset the form
  contactForm.reset();
});

// Initialize Swiper for the tab slider on services.html
const tabSliderElement = document.querySelector('.tab-slider');
if (tabSliderElement) {
  const tabSlider = new Swiper('.tab-slider', {
    modules: [Navigation, Pagination, EffectCoverflow],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
      rotate: 60, // Increased rotation for more tilt
      stretch: 0, // Kept stretch at 0
      depth: 200, // Increased depth for more perspective
      modifier: 1.5, // Increased modifier to exaggerate the effect
      slideShadows: true, // Keep slide shadows enabled
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '#nextSlide',
      prevEl: '#prevSlide',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const sunIconMobile = document.getElementById('sunIconMobile');
const moonIconMobile = document.getElementById('moonIconMobile');
const htmlElement = document.documentElement; // Changed from body to html element

const applyTheme = (theme) => {
  if (theme === 'dark') {
    htmlElement.classList.add('dark'); // Changed from body.classList.add('dark-mode')
    moonIcon?.classList.remove('hidden');
    sunIcon?.classList.add('hidden');
    moonIconMobile?.classList.remove('hidden');
    sunIconMobile?.classList.add('hidden');
  } else {
    htmlElement.classList.remove('dark'); // Changed from body.classList.remove('dark-mode')
    sunIcon?.classList.remove('hidden');
    moonIcon?.classList.add('hidden');
    sunIconMobile?.classList.remove('hidden');
    moonIconMobile?.classList.add('hidden');
  }
};

const toggleTheme = () => {
  const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
};

darkModeToggle?.addEventListener('click', toggleTheme);
darkModeToggleMobile?.addEventListener('click', toggleTheme);

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
applyTheme(savedTheme || preferredTheme);

// Update year in footer
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Cursor Light Script
const cursorLight = document.getElementById('cursor-light');
if (cursorLight) {
  document.addEventListener('mousemove', function(e) {
    cursorLight.style.left = e.clientX + 'px';
    cursorLight.style.top = e.clientY + 'px';
  });
  document.addEventListener('mouseenter', function() {
    cursorLight.style.opacity = '1';
  });
  document.addEventListener('mouseleave', function() {
    cursorLight.style.opacity = '0';
  });
}