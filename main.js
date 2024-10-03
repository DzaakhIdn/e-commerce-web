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

const purchaseButtons = document.querySelectorAll(".card_container");

purchaseButtons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Button clicked");
    console.log("Redirecting to products.html");
    window.location.href = "./../assets/pages/products.html";
  });
});


const productCardContainers = document.querySelectorAll(".products_catalog .card_container");

productCardContainers.forEach(container => {
  container.addEventListener("click", () => {
    window.location.href = "products.html";
  });
});

// JavaScript untuk mengatur kuantitas dan menghitung total harga
document.addEventListener('DOMContentLoaded', () => {
  const incrementButtons = document.querySelectorAll('.increment');
  const decrementButtons = document.querySelectorAll('.decrement');
  const qtyInputs = document.querySelectorAll('.qty');
  const subtotalElement = document.getElementById('subtotal');
  const discountElement = document.getElementById('discount');
  const totalElement = document.getElementById('total');
  const promoCodeInput = document.getElementById('promoCode');
  const applyPromoButton = document.getElementById('applyPromo');

  let subtotal = 565; // Harga awal produk
  let discount = 0;
  let total = subtotal;

  function updateTotal() {
      total = subtotal - discount;
      subtotalElement.textContent = subtotal.toLocaleString('id-ID');
      discountElement.textContent = discount.toLocaleString('id-ID');
      totalElement.textContent = total.toLocaleString('id-ID');
  }

  incrementButtons.forEach(button => {
      button.addEventListener('click', () => {
          const qtyInput = button.previousElementSibling;
          let qty = parseInt(qtyInput.value);
          qtyInput.value = qty + 1;
          subtotal += 565; // Tambah harga produk per item
          updateTotal();
      });
  });

  decrementButtons.forEach(button => {
      button.addEventListener('click', () => {
          const qtyInput = button.nextElementSibling;
          let qty = parseInt(qtyInput.value);
          if (qty > 1) {
              qtyInput.value = qty - 1;
              subtotal -= 565; // Kurangi harga produk per item
              updateTotal();
          }
      });
  });

  applyPromoButton.addEventListener('click', () => {
      const promoCode = promoCodeInput.value.trim();
      if (promoCode === 'DISKON10') {
          discount = subtotal * 0.10; // Diskon 10%
          updateTotal();
      } else {
          alert('Kode promo tidak valid');
      }
  });
});