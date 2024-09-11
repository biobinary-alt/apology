document.getElementById("apologyButton").addEventListener("click", function() {
    document.getElementById("response").innerText = "Makasih banget, aku janji gak bakalan ngulanginya lagi 😊";
  });
  
  document.getElementById("noForgiveButton").addEventListener("mouseover", function() {
    moveCardRandomly(document.getElementById("apologyCard"));
  });
  
function moveCardRandomly(card) {
    
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    const offsetX = card.offsetWidth / 2.0;
    const offsetY = card.offsetHeight / 2.0;
  
    const minX = -(containerWidth / 2.0) + offsetX;
    const maxX = (containerWidth / 2.0) - offsetX;
    const minY = -(containerHeight / 2.0) + offsetY;
    const maxY = (containerHeight / 2.0) - offsetY;
  
    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;
  
    card.style.transform = `translate(${randomX}px, ${randomY}px)`;

}
  