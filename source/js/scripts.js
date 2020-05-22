// const swiperSertificates = () => {
//   new Swiper('.reviews-gallery__swiper', {
//     slidesPerView: 1,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     }
//   });
// };
//
// swiperSertificates();

var swiper = new Swiper('.reviews-popup__swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    click: function () {
      let popup = document.querySelector('.swiper-container2');
      popup.classList.add('show');
      swiper2.init();
      swiper2.slideReset();
    },
  }
});

var swiper2 = new Swiper('.swiper-container2', {
  init: false,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },

  on: {
    init: function () {
      swiper2.slideTo(swiper.clickedIndex);
    },
  }
});


