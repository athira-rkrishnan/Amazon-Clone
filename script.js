/* For opening and closing Dropdown Content */

function openDropContent() {
   document.getElementById("drop-content").classList.toggle("showDropContent");
}

window.onclick = function(event) {
    if(!event.target.matches(".dropbtn1")) {
        let dropContents = document.getElementsByClassName("dropdown-content1");
        for(let i = 0; i < dropContents.length; i++) {
            let openDropdown = dropContents[i];
            if(openDropdown.classList.contains("showDropContent")) {
               openDropdown.classList.remove("showDropContent");
            }
        }
    }
}

/* Side Navigation Bar */

function openSidebar() {
  document.getElementById("sideNav").style.display = "block";
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");
  document.getElementById("black").style.display = "block";
}

function closeSidebar() {
  document.getElementById("sideNav").style.display = "none";
  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");
  document.getElementById("black").style.display = "none";
}

function closeNav() {
  document.getElementById("sideNav").style.display = "none";
  document.getElementById("black").style.display = "none";
  document.body.classList.remove("no-scroll");
  document.documentElement.classList.remove("no-scroll");
}


/* Image Slider Logic */

let imgSlideIndex = 1;
showSlides(imgSlideIndex);

function showSlides(index) {
    let imgSlides = document.getElementsByClassName("slides");
    if(index > imgSlides.length) {
        imgSlideIndex = 1;
    }
    if(index < 1) {
        imgSlideIndex = imgSlides.length;
    }
    for(let i = 0; i < imgSlides.length; i++) {
        imgSlides[i].style.display = "none";
    }
    imgSlides[imgSlideIndex - 1].style.display = "block";
}
function pnSlides(index) {
    showSlides(imgSlideIndex += index);
}

/* Image Carousel Sliders using Swiper */
/* Row 3 Image Slider */
const swiper1 = new Swiper('#swiper1', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: false,
  centeredSlidesBounds: true,
  loopFillGroupBlank: false,
  slidesPerView: 'auto',
  slidesOffsetAfter: 0,
  watchOverflow: true,
  spaceBetween: 10,

  /*
  freeMode: false,
  resistance: false,*/
   
  navigation: {
    prevEl: '#prev1',
    nextEl: '#next1',
  },
   
});

/* Row 4 Image Slider */
const swiper2 = new Swiper('#swiper2', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev2',
    nextEl: '#next2',
  },
   
});


/* Row 6 Image Slider */
const swiper3 = new Swiper('#swiper3', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev3',
    nextEl: '#next3', 
  },
   
});

/* Row 7 Image Slider */
const swiper4 = new Swiper('#swiper4', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev4',
    nextEl: '#next4',
  },
   
});

/* Row 9 Image Slider */
const swiper5 = new Swiper('#swiper5', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev5',
    nextEl: '#next5',
  },
   
});

/* Row 10 Image Slider */
const swiper6 = new Swiper('#swiper6', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev6',
    nextEl: '#next6',
  },
   
});

/* Row 12 Image Slider */
const swiper7 = new Swiper('#swiper7', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  
  spaceBetween: 1,
  watchOverflow: true,
  freeMode: false,
  resistance: false,
   
  navigation: {
    prevEl: '#prev7',
    nextEl: '#next7',
  },
   
});











