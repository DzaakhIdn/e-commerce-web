// class Card {
//     constructor(cardEL){
//         this.cardEL = cardEL
//         this.image_wrapper = cardEL.querySelector('.card');
//         const cardHeight = this.cardEL.getBoundingClientRect().height
//         const imageWrapperHeight = this.image_wrapper.getBoundingClientRect().height
//         this.heightDiff = cardHeight - imageWrapperHeight
//         console.log("card kebuat")
//     }

//     update(){
//         const topOffsetCard = this.cardEL.getBoundingClientRect().top
//         const progres = topOffsetCard / window.innerHeight
//         const yPosition = progres * this.heightDiff
//         this.image_wrapper.style.transform = `translate(0, ${yPosition}px)`;
//         console.log('update')
//     }
// }

// function initCards(){
//     const cardEls = document.querySelectorAll('.cards, .cards-2');
//     const cards = Array.from(cardEls).map((cardEL) => new Card(cardEL));
//     function onscroll(){
//         cards.forEach(card => card.update())
//     }
//     window.addEventListener('scroll', onscroll)
// }

// initCards()

// Card

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

AOS.init();