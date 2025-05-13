// Adicione APENAS esta função no final do arquivo
function initResponsiveElements() {
  // Ajuste dinâmico do starfield para mobile
  if (document.getElementById('starfield')) {
    const canvas = document.getElementById('starfield');
    let maxStars = 300;
    
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      maxStars = (window.innerWidth < 768) ? 150 : 300;
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Seu código original permanece intacto
  if (document.querySelector('.home-background')) {
    function animateWithRandomNumber(myClass, from, to) {
      TweenLite.fromTo(myClass, Math.floor((Math.random() * 20) + 1), { y: from }, { y: to,
        onComplete: animateWithRandomNumber,
        onCompleteParams: [myClass, from, to],
        ease: Linear.easeNone });
    }

    const itemsDown = [".light4", ".light5", ".light6", ".light7", ".light8", ".light11", ".light12", ".light13", ".light14", ".light15", ".light16"];
    itemsDown.forEach(e => animateWithRandomNumber(e, -1080, 1080));

    const itemsUp = [".light1", ".light2", ".light3",".light9", ".light10", ".light17"];
    itemsUp.forEach(e => animateWithRandomNumber(e, 1080, -1080));
  }
  
  // Inicializa os ajustes responsivos
  initResponsiveElements();
});