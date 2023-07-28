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
const slideWidth = document.querySelector(".ar img").width;
console.log(slideWidth);

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
  console.log(value);

  function pos(){
    slides.style.transform= 'translateX(' + value/15 + '%)';
  }
  pos();
});

// debugger;

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
