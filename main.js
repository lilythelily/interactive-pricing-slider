"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const slider = document.querySelector(".slider");
const pageView = document.querySelector(".view-counter");
const price = document.querySelector(".price-counter");
const viewArray = ["10K", "50K", "100K", "500K", "1M"];
const priceArray = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
const percentage = ["0%", "25%", "50%", "75%", "100%"];
const startColor = "hsl(174, 77%, 80%)";
const endColor = "hsl(224, 65%, 95%)";

// slider control

function updateView() {
  const currentIndex = parseInt(slider.value);
  const barPercentage = `${percentage[currentIndex]}`;
  pageView.innerHTML = `${viewArray[currentIndex]}`;
  price.innerHTML = `${priceArray[currentIndex]}`;
  slider.style.background = `linear-gradient(to right,
   ${startColor} 0%,
   ${startColor} ${barPercentage},
  ${endColor} ${barPercentage},
  ${endColor} 100%
)`;
  // apply the discount
  const basePrice = parseFloat(priceArray[currentIndex].replace("$", ""));
  const discount = basePrice * 0.25;
  const finalPrice = (basePrice - discount).toFixed(2);
  if (toggleBtn.classList.contains("toggle-year")) {
    price.innerHTML = `$${finalPrice}`;
  } else {
    price.innerHTML = `${priceArray[currentIndex]}`;
  }
}

//toggle button control

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("toggle-btn");
  toggleBtn.classList.toggle("toggle-year");
  updateView();
});

slider.oninput = updateView;

updateView();



