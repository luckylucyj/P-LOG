// let arr=[1,2,3,4];
// let index=0;
// document.body.addEventListener('click',function(){
//     console.log(arr[index]);
//     index++;
//     if(index===arr.length){
//         index=0;
//     }
// });

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 465) {
    document.querySelector("header").classList.add("scroll");
  } else {
    document.querySelector("header").classList.remove("scroll");
  }
});

const cursor = document.querySelector("cursor");
console.log(cursor);

const gml = document.querySelector(".h1-white"); //흰 글자
const ptb = document.querySelector(".h1-brown"); //갈색 글자

const main = document.querySelector("main"); // 메인1
console.log(main);

const prsec = document.querySelector(".pr-sec"); //그림만 있는 제일 부모의 div

const gridF = document.querySelectorAll(".grid-car-f");
console.log(gridF);
const gridC = document.querySelectorAll("grid-car");
const firstSectionImg = document.querySelectorAll(".grid-car-f figure");

const firstSectionColor = ["#5D9061", "#D26A51", "#ABA35A", "#5561C7"];
const firstText = [
  "Original green tea",
  "passionfruit&peach tea",
  "pineapple&mango tea",
  "blueberry&rasberry tea",
];
let index1 = 0;
let index2 = 1;
// const carousel = document.querySelector(".carousel");
// makeClone();

main.addEventListener("click", () => {
  console.log("hello");
  for (let i = 1; i < firstSectionColor.length; i++) {
    main.style.backgroundColor = firstSectionColor[i];
    // gml.innerText = firstText[i];
    console.log(firstSectionColor);
    console.log(i);
  }

//   let imgWidth = firstSectionImg[index].querySelector("img").width;
  //   간격은 조절해야 함
//   carousel.style.transform = `translate(${-imgWidth * index2}px,0%)`;
//   carousel.style.transition = "1s";
  //   for (let el of gridF) {
  //     el.style.opacity = 0;
  //   }
  //   let imgWidth = firstSectionImg[index].querySelector("img").width;
  //   //   간격은 조절해야 함
  //   main1.style.transform = `translate(${-imgWidth * index2}px,0%)`;
  //   main1.style.transition = "1s";

  //   main1[index].style.opacity = 1;
  //   main1.style.backgroundColor = firstSectionColor[index];
  //   if ((index2 === firstSectionImg.length) == 1) {
  //     setTimeout(function () {
  //       carousel.style.transition = "0s";
  //       carousel.style.transform = "translate(0%,0%)";
  //     }, 1000);
  //     index2 = 0;
  //   }
  //   index1++;
  //   index2++;
  //   if (index1 == sentences.length) {
  //     index = 0;
  //   }
  //   console.log(index, index2);
});

// 1st, 2nd 뒤에 추가- 두번째도 보이기 떄문이다.
// function makeClone1() {
//   let cloneSlideFirst = firstSectionImg[0].cloneNode(true);
//   let cloneSlideSecond = firstSectionImg[1].cloneNode(true);
//   carousel.append(cloneSlideFirst, cloneSlideSecond);
// }
