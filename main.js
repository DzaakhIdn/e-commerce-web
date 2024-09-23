let filterBtn = document.querySelectorAll(".product_type .product_item");
let filterableCards = document.querySelectorAll(".product-card .card_container");

const filterCards = e => {
    document.querySelector(".aktive").classList.remove("aktive");
    e.target.classList.add("aktive")
    
    filterableCards.forEach(card => {
        card.classList.add("hide");

        if(card.dataset.item === e.target.dataset.item || e.target.dataset.item === "all"){
            card.classList.remove("hide")
        }
    })
}

filterBtn.forEach(button => button.addEventListener("click", filterCards))

// AOS.init();

// Price Range Update
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
priceRange.addEventListener("input", () => {
  priceValue.innerText = priceRange.value;
});

// Dropdown Toggle (For Sort by)
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    this.querySelector(".dropdown-content").classList.toggle("hidden");
  });
});

// Horizontal Scrolling for Products
const productContainer = document.querySelector(".scrollable-x");
if (productContainer) {
  productContainer.addEventListener("wheel", (event) => {
    if (event.deltaY > 0 || event.deltaY < 0) {
      event.preventDefault();
      productContainer.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      });
    }
  });
}

// Button Filter
