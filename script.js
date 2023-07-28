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

// 커서 바꾸기 시작
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
});
// 커서 바꾸기 끝남

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
  "passionfruit&peach tea",
  "pineapple&mango tea",
  "blueberry&rasberry tea",
  "Blood Orange & Hibiscus Tea",
];

const secondText = [
  "A clean take on a classic",
  "Subtly sweet",
  "Perfectly playful",
  "Cool and refreshing",
  "Crisp and easy",
];

const firstSectionImg = [
  "Green tea packaging.png",
  "Passionfruit & Peach Tea packaging.png",
  "Pineapple & Mango packaging.png",
  "Blueberry & Raspberry packaging.png",
  "6f111ee96c01a436f6e3be2da3af301da516b4a8-800x1111.png",
];

const main = document.querySelector("main"); // 메인1
const carousel = document.querySelector(".carousel");

const white = document.querySelector(".white");
const brown = document.querySelector(".brown");
let index1 = 0;
let index2 = 1;

const slideCount = firstSectionImg.length;
const slideWidth = document.querySelector("img").width;
// console.log(slideWidth);

const slides = document.querySelector(".slides");

// main
// main 클릭하면 배경색이 순서대로 바뀐다.
// main 클릭하면 안의 캐러셀이 움직인다.

white.innerText = firstText[index1];
brown.innerText = secondText[index1];

console.log("------dfsdfsdf");

main.addEventListener("click", () => {
  white.innerText = firstText[index1];
  brown.innerText = secondText[index1];
  main.style.backgroundColor = firstSectionColor[index1];

  // slides.classList.add('animate');

  if (index1 === firstText.length - 1) {
    index1 = -1;
  }

  if (index2 === firstText.length) {
    index2 = 0;
  }
  // moveSlide();
  index1++;
  index2++;

  let value = -(slideWidth*index2);

  // function pos(){
  //   slides.style.transform= 'translateX(' + value/12 + '%)';
  // }
  // pos();

  if ((index2 === firstSectionImg.length) == 1) {
    setTimeout(function () {
      carousel.style.transition = "0s";
      slides.style.transform = "translate(0%,0%)";
      slides.style.transition='.5s';
      slides.classList.remove('animate');
    }, 500);
    index2 = 0;
  }

  console.log(index1);
});


// const sw = new Swiper(".swiper1", {
//   // direction:'vertical',
//   slidesPerView: 2,
//   spaceBetween: 0, //slide 간의 gap(margin)
//   loop: true,
//   autoplay: {
//     delay: 1000,
//   },
//   speed: 1000, //like transition

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// console.log(sw);

const sw=new Swiper(".swiper1",{
  // direction:'vertical',
  slidesPerView:3,
  spaceBetween: 6, //slide 간의 gap(margin)
  loop: true,
  autoplay:{
      delay: 1000,
  },
  speed: 1000, //like transition

  navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination:{
      el:'.swiper-pagination',
      clickable:true,
  },
  scrollbar:{
      el:'.swiper-scrollbar',
  },
});

const setSwiper2={
  slidePerView:2,
  loop: false,
  speed: 5000,
  navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  //반응형
  breakpoints:{
      // 768보다 클 때
      768:{
          slidesPerView:4,
      },
  }
};
const sw2=new Swiper('.swiper2', setSwiper2);


  // swiper 설정
  const setSwiper3 = {
    slidesPerView: 2, 
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
    },
  };
 const swiper3 = new Swiper('.swiper3', setSwiper3);
 
 //article 누르면 동시에 next button 누르도록
//  const article = document.querySelector('article');
//  article.addEventListener('click', () => {
//     document.querySelector('.swiper3 .swiper-button-next').click();
//  });