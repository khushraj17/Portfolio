const professions = ['ML Engineer', 'Data scientist', 'Data analyst'];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function type() {
  const typingElement = document.getElementById('typing-text');
  if (!typingElement) return; 

  const current = professions[professionIndex];

  if (isDeleting) {
    charIndex = Math.max(0, charIndex - 1);
  } else {
    
    charIndex = Math.min(current.length, charIndex + 1);
  }

  typingElement.textContent = current.slice(0, charIndex);

  
  let delay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === current.length) {

    delay = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    professionIndex = (professionIndex + 1) % professions.length;
    delay = 500; 
  }

  setTimeout(type, delay);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 1000);
});




