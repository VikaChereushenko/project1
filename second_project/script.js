let swiper = new Swiper('.first_screen_slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.first_screen_slider_pagination',
    },
    navigation: {
      nextEl: '.first_screen_slider_next',
    },
  });
let newsSwiper = new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.news-slider-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.news-slider-next',
      prevEl: '.news-slider-prev',
    },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1225: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});
Fancybox.bind('[data-fancybox="gallery"]',{
  Carousel: {
    infinite: true,
  },
});
let header =  document.querySelector("header");
let burger = document.querySelector(".burger");
let nav = document.querySelector("nav")
let socials = document.querySelector(".socials")
let swiperWrapper = document.querySelector(".first_screen_slider_wrapper");
let buttonDetails = document.querySelectorAll(".details")
let readMore = document.querySelectorAll(".more")

window.addEventListener("scroll", function(){
header.classList.add('fixed');
})
burger.addEventListener("click", function(){
  nav.classList.toggle('active');
  socials.classList.toggle('active');
  swiperWrapper.classList.toggle('responsive');
})
for (let i = 0; i < buttonDetails.length; i++){
  buttonDetails[i].addEventListener("click", function(){
    for(let i = 0; i < readMore.length; i++)
    readMore[i].classList.toggle('visible');
    if(readMore[i].classList.contains('visible') == true){
      buttonDetails[i].innerHTML = 'FEWER DETAILS';
    }else {
      buttonDetails[i].innerHTML = 'MORE DETAILS';
    }
  })
}

