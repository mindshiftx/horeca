import 'aos/dist/aos.css';
// import 'swiper/swiper-bundle.min.css'; // Old import
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Styles for Navigation module
import 'swiper/css/pagination'; // Styles for Pagination module
// Autoplay module typically doesn't require its own CSS import
import AOS from 'aos';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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