// Placeholder for interactive functionality
// Example: You can add animations, scroll effects, or section transitions here later.

console.log("Portfolio webpage loaded successfully.");

// Fade-in scroll animation
const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, {
  threshold: 0.1
});

fadeElems.forEach(el => observer.observe(el));
