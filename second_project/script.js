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
let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("googleMap"), {
    center: { lat: 50.12377, lng: 28.39105 },
    zoom: 10,
    mapId: '2f084b4895741534',
  });
  const marker = new google.maps.Marker({
    position: { lat: 50.12377, lng: 28.39105 },
    map: map,
    title: "Monticello",
    icon: {
      url: "https://i.postimg.cc/30jd33nS/Pin.png",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}
let sectionHeader =  document.querySelector(".section-header");
let burger = document.querySelector(".burger");
let nav = document.querySelector("nav")
let socials = document.querySelector(".socials")
let swiperWrapper = document.querySelector(".first_screen_slider_wrapper");
let buttonDetails = document.querySelectorAll(".details")
let readMore = document.querySelectorAll(".more")
let morePics = document.querySelector(".more_pics");
let viewMore = document.querySelector(".view_more");
let section = document.querySelectorAll("section")
let navLink =  document.querySelectorAll("nav ul li a")

window.addEventListener("scroll", function (){
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top > offset && top < offset + height){
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector ('header nav ul li a[href*=' + id + ']'.classList.add('active'));
      });
    }
  })
})
window.addEventListener("scroll", function(){
  if (this.window.scrollY > 80) {
    sectionHeader.classList.add('fixed');
  }else {
    sectionHeader.classList.remove('fixed');
  }
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
viewMore.addEventListener('click', function(){
  morePics.classList.toggle('visible');
  if(morePics.classList.contains('visible') == true){
    viewMore.innerHTML = 'SEE LESS';
  }else {
    viewMore.innerHTML = 'SEE MORE';
  }
})


