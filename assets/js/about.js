var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });