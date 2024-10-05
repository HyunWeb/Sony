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

var div2 = document.getElementsByClassName("button");
var alt1 = [
  "1979년 최초의 Warkman. <br> 길거리를 다니면서 음악을 들을 수 있게 되다.",
  "1981년 CDP-101 <br> CD를 처음으로 사용한 오디오.",
  "1981년 개발된 WM-2 워크맨의 기초를 완성시킨 제품으로, 워크맨이라는 단어가 백과사전에 등록되게 만들었던 제품.",
  "1982년 MDR-E252 세계 최초의 인이어 헤드폰으로 출시됨. <br> 헤어밴드나 이어패드가 없는 세계 최초의 이어폰이라고 볼 수 있음.",
  "1983년 WM-20 <br> 카세트 테이프 만큼 소형화된 warkman",
];
var alt2 = [
  "1984년 말. D-50 최초의 휴대용 CD 플레이어. 제품 소개를 위해 춴가 이하의 가격으로 시장에 출시됨. 이 제품의 등장은 CD가 LP판을 대체하는데 큰 역할을 하였음.",
  "1985년 WM-101 <br> 앏고 작은 사이즈의 전지가 개발된 덕분에 제품의 경량화의 정점에 오름.",
  "1986년 작인 WM-109. <br> 볼륨 조절이 가능한 리모컨이 도입된 최초의 워크맨.",
  "1988년 WM-505 드디어 워크맨과 연결된 선이 사라지기 시작한 모델. 이때부터 제품의 무선화에 대한 기술 혁신이 시작됨.",
  "1987년 MDR-E484 <br> 최초의 인체 공학적 인이어 헤드폰 <br> 세라믹 복합 하우징과 어쿠스틱 트윈 터보 음향 회로를 장착한 덕분에 인이어 오디오 성능이 대폭 향상됨.",
];
var alt3 = [
  "1990년작 WM-805 <br> 리모콘 만으로 본체조작과 상태를 확인할 수 있는 LCD 창을 달아 사용자가 더욱더 편하게 사용할 수 있는 제품",
  "1991년작 D-515 <br> 해당 제품이 개발되기까지 빠른 이동시에는 듣기 어려운 단점이 있었음. ",
  "1994년작 WM-EX1 (15주년 제품) <br> 원터치 버튼을 통해 세로로 TAPE 을 꺼내는 새롭고 편리한 구조를 선보이며 워크맨 중 가장 많이 판매된 제품",
  "1995년 MDR-NC10 <br> 처음 개발된 노이즈 캔슬링 헤드폰, 외부의 소음을 70%까지 차단하는 데 성공함. 사용자의 귀에 편안할 수 있는 형태의 디자인이 처음으로 채택됨. ",
  "1998년작 WM-EX9 <br> 당시엔 불가능이라 여겨졌던 최대 재생 시간 100시간의 한계를 깨뜨림. 저전력 설계와 베터리 용량 및 축소에 큰 시간을 투자 영향이 큼.",
];
var alt4 = [
  "1999년 NW-MS7 <br> 전통적인 워크맨의 모습에서 벗어나, 처음 메모리가 사용되는 등, 이제는 워크맨이라는 이름이 붙여졌을 뿐, MP3라고 볼 수 있는 제품이 등장함.",
  "2000년 WM- EX2000 <br> 카세트 형 워크맨의 마지막 제품이 된 기종. <br> 제품이 개발된 시기로 봤을 때 회사의 얘착이 컸음을 알 수 있음.",
  "2000년 NW-E3 <br> 내장형 메모리를 탑재하고 AAA형 건전지가 구동함으로써 당시의 MP3가 가지고 있었던 재생 시간 문제를 잡기 위해 노력함.",
  "2012년 MDR-1R <br> 헤드폰을 만들기 시작한지 50년이 지나서, 개발된 모델로, 하이 레볼루션 급 사운드의 모든 디테일을 실현하려는 목표로 개발된 음악을 위한 헤드폰.",
  "2018년 IER-Z1R HD 하이브리드 드라이버 시스템과 정밀 위상 구조로 이뤄졌으며, 소니가 얻고자 했던 최적의 사운드를 자랑함.",
];

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");

img1.setAttribute("alt", `${alt1[0]}`);
img2.setAttribute("alt", `${alt1[1]}`);
img3.setAttribute("alt", `${alt1[2]}`);
img4.setAttribute("alt", `${alt1[3]}`);
img5.setAttribute("alt", `${alt1[4]}`);

var imgbox = $("#box1").children();

for (var i = 0; i < imgbox.length; i++) {
  imgbox.eq(i).attr("alt", `${alt1[i]}`);
}

var imgbox = $("#box2").children();
for (var i = 0; i < imgbox.length; i++) {
  imgbox.eq(i).attr("alt", `${alt2[i]}`);
}
var imgbox = $("#box3").children();
for (var i = 0; i < imgbox.length; i++) {
  imgbox.eq(i).attr("alt", `${alt3[i]}`);
}
var imgbox = $("#box4").children();
for (var i = 0; i < imgbox.length; i++) {
  imgbox.eq(i).attr("alt", `${alt4[i]}`);
}

function handldClick(event) {
  console.log(event.target.classList);
  if (event.target.classList[1] == "clicked") {
    alert("다른 버튼을 눌러주십시오");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
    button(event.target.value);
  }
}
function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handldClick);
  }
}

init();

function button(checkname) {
  if (checkname === "1970") {
    img1.setAttribute("alt", `${alt1[0]}`);
    img2.setAttribute("alt", `${alt1[1]}`);
    img3.setAttribute("alt", `${alt1[2]}`);
    img4.setAttribute("alt", `${alt1[3]}`);
    img5.setAttribute("alt", `${alt1[4]}`);
    img1.setAttribute("src", "./img/1970/type1.png");
    img2.setAttribute("src", "./img/1970/type2.png");
    img3.setAttribute("src", "./img/1970/type3.png");
    img4.setAttribute("src", "./img/1970/type4.png");
    img5.setAttribute("src", "./img/1970/type5.png");
  } else if (checkname === "1980") {
    img1.setAttribute("alt", `${alt2[0]}`);
    img2.setAttribute("alt", `${alt2[1]}`);
    img3.setAttribute("alt", `${alt2[2]}`);
    img4.setAttribute("alt", `${alt2[3]}`);
    img5.setAttribute("alt", `${alt2[4]}`);
    img1.setAttribute("src", "./img/1980/type1.png");
    img2.setAttribute("src", "./img/1980/type2.png");
    img3.setAttribute("src", "./img/1980/type3.png");
    img4.setAttribute("src", "./img/1980/type4.png");
    img5.setAttribute("src", "./img/1980/type5.png");
  } else if (checkname === "1990") {
    img1.setAttribute("alt", `${alt3[0]}`);
    img2.setAttribute("alt", `${alt3[1]}`);
    img3.setAttribute("alt", `${alt3[2]}`);
    img4.setAttribute("alt", `${alt3[3]}`);
    img5.setAttribute("alt", `${alt3[4]}`);
    img1.setAttribute("src", "./img/1990/type1.png");
    img2.setAttribute("src", "./img/1990/type2.png");
    img3.setAttribute("src", "./img/1990/type3.png");
    img4.setAttribute("src", "./img/1990/type4.png");
    img5.setAttribute("src", "./img/1990/type5.png");
  } else {
    img1.setAttribute("alt", `${alt4[0]}`);
    img2.setAttribute("alt", `${alt4[1]}`);
    img3.setAttribute("alt", `${alt4[2]}`);
    img4.setAttribute("alt", `${alt4[3]}`);
    img5.setAttribute("alt", `${alt4[4]}`);
    img1.setAttribute("src", "./img/2000/type1.png");
    img2.setAttribute("src", "./img/2000/type2.png");
    img3.setAttribute("src", "./img/2000/type3.png");
    img4.setAttribute("src", "./img/2000/type4.png");
    img5.setAttribute("src", "./img/2000/type5.png");
  }
}

$(document).ready(function (e) {
  $(document).on("click", "img", "#id", function () {
    var path = $(this).attr("src");
    var alt = $(this).attr("alt");
    showimage(path, alt);
  });
});

function showimage(path, alt) {
  $("#model").css("display", "block");
  $("#description1").attr("src", path);
  $("#description1").attr("alt", alt);
  $("#description2").html(alt);
}

const btn = document.querySelector("#btn-3");
btn.addEventListener("click", (e) => {
  $("#model").css("display", "none");
});

document.addEventListener("click", () => {
  $("#model").css("display", "none");
});
