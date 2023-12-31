const cursor = document.querySelector(".cursor");
// 커서 바꾸기 시작
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
// 커서 바꾸기 끝남

// 픽스드 헤더 시작
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 465) {
    document.querySelector("header").classList.add("scroll");
  } else {
    document.querySelector("header").classList.remove("scroll");
  }
});
//픽스드 헤더 끝남

// 메인 1
const firstSectionColor = [
  "#5D9061",
  "#D26A51",
  "#ABA35A",
  "#5561C7",
  "#b2956d",
];

const firstText = [
  "Original green tea",
  "passionfruit & peach tea",
  "pineapple & mango tea",
  "blueberry & rasberry tea",
  "Blood Orange & Hibiscus Tea",
];

const secondText = [
  "A clean take on a classic",
  "Subtly sweet",
  "Perfectly playful",
  "Cool and refreshing",
  "Crisp and easy",
];

const main = document.querySelector("main"); // 메인1
const carousel = document.querySelector(".carousel");

const white = document.querySelector(".white");
const brown = document.querySelector(".brown");

let mobWhite=document.querySelector('main .sentences.show .visible .white');
let mobBrown=document.querySelector('main .sentences.show .visible .brown');



let index1 = 0;

// const slideCount = firstSectionImg.length;
// const slideWidth = document.querySelector("img").width;

// const slides = document.querySelector(".slides");

// main
// main 클릭하면 배경색이 순서대로 바뀐다.
// main 클릭하면 안의 캐러셀이 움직인다.

white.innerText = firstText[index1];
brown.innerText = secondText[index1];

mobWhite.innerText = firstText[index1];
mobBrown.innerText = secondText[index1];

console.log("------dfsdfsdf");

// swiper 설정 넣으니 잘됨
const sw = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 6, //slide 간의 gap(margin)
  loop: true,
  autoplay: {
    delay: 1000,
  },
  speed: 1000, //like transition

  navigation: {
    nextEl: ".swiper-button-next",
    // prevEl: ".swiper-button-prev",
  },
});

// swiper 설정
const setSwiper3 = {
  slidesPerView: 1.3,
  spaceBetween: 0,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
  },

  on: {
    // 다음페이지로 넘어가기 되면 실행하는 메소드
    slideChangeTransitionStart: function () {
  main.style.backgroundColor = firstSectionColor[index1];

      //글자 변경
      white.innerText = firstText[index1];
      brown.innerText = secondText[index1];

      mobWhite.innerText = firstText[index1];
      mobBrown.innerText = secondText[index1];

      index++;

      if (index1 === firstText.length) {
        index1 = 0;
      }
    },
  }
};

const swiper3 = new Swiper(".swiper3", setSwiper3);

// main 
main.addEventListener("click", () => {
  // index1++;
  // white.innerText = firstText[index1];
  // brown.innerText = secondText[index1];

  // main.style.backgroundColor = firstSectionColor[index1];

  // // first text 개수 만큼 변경을 하고 싶다면 .white의 갯수와 일치 해야합니다.
  

  // if (index1 === firstText.length) {
  //   index1 = 0;
  // }

  document.querySelector(".swiper3 .swiper-button-next").click();

});

  document.querySelector(".swiper3 .swiper-button-next").addEventListener('click',()=>{
    index1++;

    if (index1 === firstText.length) {
      index1 = 0;
    }

    console.log(index1);
    white.innerText = firstText[index1];
    brown.innerText = secondText[index1];

    mobWhite.innerText = firstText[index1];
    mobBrown.innerText = secondText[index1];

    main.style.backgroundColor = firstSectionColor[index1];
  });


  document.querySelector('header .flex.mobile li span').addEventListener('click',(event)=>{
    document.querySelector('.m-menu-wrap').classList.toggle('fade');
    document.querySelector('.m-menu').classList.toggle('fade');
    document.querySelector('.cursor').classList.toggle('fade');
    document.querySelector('.flex-r.whole').classList.toggle('fade');
    event.preventDefault();
  })
  
  document.querySelector('.m-menu .flex-r .close-icon span').addEventListener('click',(event)=>{
    document.querySelector('.m-menu-wrap').classList.toggle('fade');
    document.querySelector('.m-menu').classList.toggle('fade');
    document.querySelector('.cursor').classList.toggle('fade');
    document.querySelector('.flex-r.whole').classList.toggle('fade');
    event.preventDefault();
  })
  
  document.querySelector('.flex.header_none li ul li:first-child').addEventListener('click',(event)=>{
    document.querySelector('.m-menu-wrap').classList.toggle('fade');
    document.querySelector('.m-menu').classList.toggle('fade');
    document.querySelector('.cursor').classList.toggle('fade');
    document.querySelector('.flex-r.whole').classList.toggle('fade');
    event.preventDefault();
  })

  document.querySelector('.whole-h4').addEventListener('click',(event)=>{
    document.querySelector('.m-menu-wrap').classList.toggle('fade');
    document.querySelector('.m-menu').classList.toggle('fade');
    document.querySelector('.cursor').classList.toggle('fade');
    document.querySelector('.flex-r.whole').classList.toggle('fade');
    event.preventDefault();
  })