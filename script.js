// JavaScript for Portfolio Website

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // Adjust for header height
        behavior: 'smooth'
      });
    }
  });
});

// Responsive mobile menu toggle
const nav = document.querySelector('nav ul');
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;'; // Hamburger menu icon
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Contact form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = contactForm.querySelector('input[name="name"]');
  const email = contactForm.querySelector('input[name="email"]');
  const message = contactForm.querySelector('textarea[name="message"]');

  if (!name.value.trim()) {
    alert('Please enter your name.');
    name.focus();
    return;
  }

  if (!email.value.trim() || !validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    email.focus();
    return;
  }

  if (!message.value.trim()) {
    alert('Please enter your message.');
    message.focus();
    return;
  }

  alert('Thank you for reaching out! Your message has been sent.');
  contactForm.reset(); // Reset the form after submission
});

// Email validation helper function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

// Scroll animations on sections (optional feature)
const sections = document.querySelectorAll('.section');
const observerOptions = {
  root: null,
  threshold: 0.1
};

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add('hidden'); // Add a hidden class initially
  sectionObserver.observe(section);
});
