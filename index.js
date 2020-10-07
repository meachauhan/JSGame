const cards = document.querySelectorAll(".card"); //Gives List
cards.forEach((card) => card.addEventListener("click", flip));
//variables
var isFlipped = false;
var firstCard;
var secondCard;
function flip() {
  // console.log("card flip");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}
function checkIt() {
  // console.log("Checking");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    sucess();
  } else {
    fail();
  }
}
function sucess() {
  // console.log("Sucess");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}
function fail() {
  // console.log("FAlied");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}
function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}
//TODO : Suffle
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });
})();
