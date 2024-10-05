const swiperSlides = document.querySelectorAll(".mySwiper");

swiperSlides.forEach(function (element, index) {
  element.classList.add("swiper-" + index);
  let swiper = new Swiper(".swiper-" + index, {
    autoplay: {
      delay: 1,
      desableOnInteraction: false,
    },
    speed: 20e3,
    loop: true,
    slidesPerView: "auto",
    freemode: true,
  });
});

const total = $("#oning").offset().top;
let count = 0;
let lastScroll = 0;

$(window).scroll(() => {
  var pageTop = $(window).scrollTop();
  const totalheight = document.documentElement.scrollHeight; // 보이는 문서의 높이
  const viewportHeight = document.documentElement.clientHeight; //뷰포트의 높이
  var oning = window.scrollY;

  if (pageTop > lastScroll) {
    if (oning >= total && totalheight !== viewportHeight) {
      count = count + 2;
      $("#oning").css("top", count);
    }
  } else {
    count = count - 2;
    $("#oning").css("top", count);
  }

  lastScroll = pageTop;
});
