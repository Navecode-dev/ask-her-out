window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('yes');
  
    button.style.left = "50%";
    button.style.top = "60%";
  
    button.addEventListener('mouseover', () => {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;
  
      const x = Math.random() * maxX;
      const y = Math.random() * maxY;
  
      button.style.left = x + "px";
      button.style.top = y + "px";
    });
  });
  
  /* LIGHT EFFECT FOLLOW CURSOR */
  document.addEventListener('mousemove', e => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
  });
  
  /* NO BUTTON */
  function noFunction() {
    window.location.href = "../Page 5/yes.html";
  }
  