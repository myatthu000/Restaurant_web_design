let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar ");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header a")

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach( sec =>{
      
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      // console.log(top)
      // console.log(height)
      // console.log(offset)
      // console.log(id)

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active')
        });
      };
    });

};


document.querySelector("#search-icon").onclick = () => {
    document.querySelector("#search-form").classList.toggle("active");
}
document.querySelector("#close").onclick = () => {
    document.querySelector("#search-form").classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    // slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0:{
        slidesPerView:1,
      },
      640: {
        slidesPerView: 2,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader,3000);
}
window.onload = fadeOut; 



// for review slider

// var swiper = 
// new Swiper(".review-slider", {
//     slidesPerView: 3,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     loop:true,

//     breakpoints: {
//         0:{
//             slidesPerView:1,
//         },
//       640: {
//         slidesPerView: 2,
//         // spaceBetween: 20,
//       },
//       768: {
//         slidesPerView: 2,
//         // spaceBetween: 40,
//       },
//       1024: {
//         slidesPerView: 3,
//         // spaceBetween: 50,
//       },
//     },
// });