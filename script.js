// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const overlay = document.querySelector('.overlay');
  const body = document.body;

  // Hamburger menu
  if (hamburger && overlay) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      overlay.classList.toggle('active');
      
      if (overlay.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    });

    const overlayLinks = document.querySelectorAll('.overlay-links a, .overlay-btn');
    overlayLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = 'auto';
      });
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = 'auto';
      }
    });
  }

  // FAQ Accordion Functionality
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });

  // Video fade-in functionality
  const phoneVideo = document.getElementById('phoneVideo');
  
  if (phoneVideo) {
    phoneVideo.preload = 'auto';
    
    const showVideo = function() {
      phoneVideo.classList.add('loaded');
      phoneVideo.removeEventListener('loadeddata', showVideo);
      phoneVideo.removeEventListener('canplay', showVideo);
      phoneVideo.removeEventListener('canplaythrough', showVideo);
    };

    phoneVideo.addEventListener('loadeddata', showVideo);
    phoneVideo.addEventListener('canplay', showVideo);
    phoneVideo.addEventListener('canplaythrough', showVideo);

    setTimeout(() => {
      phoneVideo.classList.add('loaded');
    }, 3000);

    phoneVideo.addEventListener('error', function() {
      this.classList.add('loaded');
    });

    phoneVideo.play().catch(error => {
      console.log('Autoplay blocked:', error);
    });
  }
});