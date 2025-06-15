function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}




// Smooth Scroll to Contact Section
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Optional: Hero Background Image Slideshow
let currentSlide = 0;
const slides = [
    'images/hero-background1.jpg',
    'images/hero-background2.jpg',
    'images/hero-background3.jpg'
];

function changeSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.querySelector('.hero').style.backgroundImage = `url(${slides[currentSlide]})`;
}

setInterval(changeSlide, 5000); // Change every 5 seconds




// Service Item Hover Animation (Optional)
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
    });
});

// Read More/Read Less Feature
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceDescription = button.previousElementSibling;
        serviceDescription.classList.toggle('expanded');
        if (serviceDescription.classList.contains('expanded')) {
            button.textContent = "Read Less";
        } else {
            button.textContent = "Read More";
        }
    });
});


// Optional: Testimonial Form Validation
document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('reviewer-name').value;
    const rating = document.getElementById('reviewer-rating').value;
    const comment = document.getElementById('reviewer-comment').value;

    // Create a new review element
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('testimonial-item');
    reviewItem.innerHTML = `
        <img src="images/default-client.jpg" alt="New Client">
        <blockquote>
            <p>"${comment}"</p>
            <footer>— ${name} (${rating} Stars)</footer>
        </blockquote>
    `;

    // Append the new review to the testimonials section
    document.querySelector('.testimonial-container').appendChild(reviewItem);

    // Reset the form
    document.getElementById('review-form').reset();
});


// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add event listeners to toggle visibility of answers
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle visibility
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});


// Optional JavaScript for form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Example of handling form submission - replace with actual logic
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    this.reset();
  });

  

  // Optional JavaScript for form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Example of handling form submission - replace with actual logic
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    this.reset();
  });

  

 // Scroll to Top Button
document.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Update Copyright Year
  document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
   


