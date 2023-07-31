const ratesUlLi = document.querySelectorAll("#rates-ul li");
const rates = document.getElementById(".rates");
const ratePoint = document.getElementById("your-rate");
const card = document.querySelector(".card");
const thank = document.querySelector(".thank-card");
const submit = document.querySelector(".card-btn");
let rate = null;

ratesUlLi.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const active = document.querySelector(".click");
    if (active) {
      active.classList.remove("click");
    }

    const card = e.target;
    card.classList.add("click");
    rate = e.target.innerText;
  });
});

submit.addEventListener("click", () => {
  if (rate) {
    ratePoint.innerText = rate;
    
    card.classList.add("hidden");
    thank.classList.remove("hidden");
  }
});
