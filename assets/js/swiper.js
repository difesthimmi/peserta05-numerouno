const getGape = (full = true) => {
    if (window.innerWidth <= 768 && (full)) {
        if (window.innerWidth <= 430) return 15
        else return 30;
    }
    else return 60;
};

const getCenter = () => window.innerWidth <= 430 ? true : false;

const serviceSwiper = new Swiper(".serviceSwiper", {
    slidesPerView: "auto",
    spaceBetween: getGape(),
    centeredSlides: true,
    // lazy: true,
    loop: true,
    grabCursor: true,
});

const psikologSwiper = new Swiper(".psikologSwiper", {
    slidesPerView: "auto",
    spaceBetween: getGape(false),
    lazy: true,
    centeredSlides: getCenter(),
    // loop: true,
    grabCursor: true,
    // freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },
});

const aboutSwiper = new Swiper(".aboutSwiper", {
    effect: "cards",
    lazy: true,
    grabCursor: true,
})
