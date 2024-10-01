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


// Price Range Update
const priceRange = document.querySelectorAll(".price-range");
const priceValue = document.querySelectorAll(".price-value");

priceRange.forEach((range) => {
  range.addEventListener("input", (event) => {
    priceValue.forEach((value) => {
      value.textContent = event.target.value;
    });
  });
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
const filterModal = (openButtonSelector, modalOpenSelector, overlaySelector) => {
  const openButton = document.querySelector(openButtonSelector);
  const modalOpen = document.querySelector(modalOpenSelector);
  const overlay = document.querySelector(overlaySelector);
  const closeBtn = document.getElementById("close-filter");

  if (openButton && modalOpen && overlay) {
    openButton.addEventListener("click", () => {
      modalOpen.classList.toggle("translate-y-full");
      overlay.classList.toggle("opacity-50");
      overlay.classList.toggle("hidden");
    });
  } else {
    console.error('Open button, modal, or overlay not found.');
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modalOpen.classList.toggle("translate-y-full");
      overlay.classList.toggle("opacity-50");
      overlay.classList.toggle("hidden");
    });
  } else {
    console.error('Close button not found.');
  }
};
filterModal(".btn_filter", ".filter_mobile", ".overlay");



// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenuButtons = document.getElementById("hamburger-menu");
  const mobileMenuElements = document.getElementById("mobile-menu");
  const closeButtonElements = document.getElementById("close-menu");

  if (!hamburgerMenuButtons || !mobileMenuElements || !closeButtonElements) {
    console.log("One or more of the following selectors returned null: .hamburger-menu, .mobile-menu, .close-menu");
    return;
  }
  const toggleMenu = () => {
    mobileMenuElements.classList.toggle("-translate-x-full");
  };

  hamburgerMenuButtons.addEventListener("click", toggleMenu);
  closeButtonElements.addEventListener("click", toggleMenu);
});

const hamburgerBtn = document.getElementById("hamburger-menu-index");
const mobileMenu = document.getElementById("mobile-menu-index");
const closeButton = document.getElementById("close-menu-index");

const menuBtn = () => {
  mobileMenu.classList.toggle("-translate-x-full");
}

hamburgerBtn.addEventListener("click", menuBtn);
closeButton.addEventListener("click", menuBtn);
