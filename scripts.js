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
  