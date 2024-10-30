// Scroll to Contact Section
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Form Submission with simple validation
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      // Simulate form submission process
      document.getElementById('formResponse').innerText = "Thank you, " + name + "! We'll get in touch with you soon.";
      document.getElementById('contactForm').reset(); // Clear the form
    } else {
      document.getElementById('formResponse').innerText = "Please fill out all fields.";
      document.getElementById('formResponse').style.color = "red";
    }
  });
// Smooth scrolling for the navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Scroll to Contact Section when button is clicked
  function scrollToContact() {
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Form validation and submission
  const form = document.querySelector('#contactForm');
  const responseMessage = document.querySelector('#formResponse');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get form values
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();
  
    // Basic validation
    if (name === '' || email === '' || message === '') {
      responseMessage.textContent = 'All fields are required!';
      responseMessage.style.color = 'red';
      return;
    }
  
    if (!validateEmail(email)) {
      responseMessage.textContent = 'Please enter a valid email address!';
      responseMessage.style.color = 'red';
      return;
    }
  
    // Simulate form submission (you can add actual form submission logic here)
    responseMessage.textContent = `Thank you, ${name}! Your message has been received. We will get back to you shortly.`;
    responseMessage.style.color = 'green';
  
    // Clear the form
    form.reset();
  });
  
  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Highlight the active section in the navbar while scrolling
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop;
  
    sections.forEach(section => {
      if (scrollPos >= section.offsetTop - 100 && scrollPos < section.offsetTop + section.offsetHeight) {
        const id = section.getAttribute('id');
        document.querySelectorAll('.navbar a').forEach(navLink => {
          navLink.classList.remove('active');
          if (navLink.getAttribute('href') === `#${id}`) {
            navLink.classList.add('active');
          }
        });
      }
    });
  });
// Theme toggle functionality
// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Set the theme based on localStorage or default to light
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    themeToggleBtn.textContent = ''; // Clear text
  } else {
    themeToggleBtn.textContent = ''; // Clear text
  }
}

themeToggleBtn.addEventListener('click', function () {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggleBtn.textContent = ''; // Clear text, sun icon will be set via CSS
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = ''; // Clear text, moon icon will be set via CSS
    localStorage.setItem('theme', 'dark');
  }
});
