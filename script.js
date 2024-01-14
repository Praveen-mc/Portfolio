// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Intersection Observer to trigger animations on scroll
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.5 });
  
  sections.forEach(section => {
    observer.observe(section);
  });

  AOS.init({
    once: true,
    offset: 50, // Adjust the offset as needed
  });

  function animateProject(element) {
    anime({
      targets: element,
      scale: 1.1,
      duration: 500,
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: false,
    });
  }
  
  function animateLink(element) {
    anime({
        targets: element,
        scale: 1.1,
        duration: 300,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: false,
    });
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('.transparent-header');
    var scrollY = window.scrollY;
    var opacity = scrollY / 200; // Adjust as needed

    header.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
  });

  function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send form data via email (You may use a server-side script for this)
    var mailtoLink = 'mailto:praveensb2002@gmail.com' +
                     '?subject=Contact Form Submission' +
                     '&body=Name: ' + name +
                     '%0D%0AEmail: ' + email +
                     '%0D%0AMessage: ' + message;

    // Open the default email client with the pre-filled data
    window.location.href = mailtoLink;
  }