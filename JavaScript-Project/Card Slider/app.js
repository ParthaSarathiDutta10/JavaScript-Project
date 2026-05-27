const scrollContainer = document.querySelector('.slider-track');
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");



let isAnimating = false;

function scrollRight() {
  if (isAnimating) return;
  isAnimating = true;

  scrollContainer.style.transition = "transform 0.4s ease";
  scrollContainer.style.transform = "translateX(-25rem)"; 

  setTimeout(() => {
    scrollContainer.style.transition = "none";
    scrollContainer.style.transform = "translateX(0)";
    
    const firstCard = scrollContainer.querySelector("ul");
    scrollContainer.appendChild(firstCard);
    
    isAnimating = false;
  }, 400);
}




function scrollLeft() {
  
  if (isAnimating) return;
  isAnimating = true;

  const cards = scrollContainer.querySelectorAll("ul");
  const lastCard = cards[cards.length - 1];
  scrollContainer.insertBefore(lastCard, cards[0]);

  scrollContainer.style.transition = "none";
  scrollContainer.style.transform = "translateX(-24rem)";
  requestAnimationFrame(() => {
    scrollContainer.style.transition = "transform 0.4s ease";
    scrollContainer.style.transform = "translateX(0)";
  });

  setTimeout(() => {
    isAnimating = false;
  }, 400);
}

if (nextBtn) nextBtn.addEventListener("click", scrollRight);
if (backBtn) backBtn.addEventListener("click", scrollLeft);




