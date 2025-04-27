function addToCart() {
  let span = document.getElementById("itemsInCart"); // نجيب الـ span
  let currentNumber = parseInt(span.innerText);   // ناخد الرقم اللي جواه ونحوله لرقم حقيقي (مش نص)
  currentNumber += 1;                             // نزود 1
  span.innerText = currentNumber;                 // نرجع نحط الرقم الجديد في الـ span
}
function completePurchase() {
  alert("Thank you for your purchase!");
  let span = document.getElementById("itemsInCart");
  span.innerText = "0";
}

window.onload = function () {
  let buttons = document.getElementsByClassName("category-button");
  let sections = document.getElementsByClassName("menu-category");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      let target = this.getAttribute("data-category");

      for (let j = 0; j < sections.length; j++) {
        sections[j].style.display = "none";
      }

      for (let j = 0; j < sections.length; j++) {
        if (sections[j].getAttribute("data-category") === target) {
          sections[j].style.display = "block";
        }
      }
    };
  }
};
