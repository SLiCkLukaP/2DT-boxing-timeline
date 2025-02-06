// script.js
document.querySelectorAll('.event').forEach(event => {
    event.addEventListener('click', () => {
      alert(`Event: ${event.dataset.event}\nYear: ${event.dataset.year}`);
    });
  });
  