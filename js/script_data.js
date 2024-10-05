import { cumtomAlert } from "./alert.js";
window.addEventListener("load", function () {
  let spArr = [];
  if (this.localStorage.getItem("spArr")) {
    spArr = JSON.parse(localStorage.getItem("spArr"));
  }
  let popup = this.document.querySelector("#popup");
  let popupclose = this.document.querySelector("#popup > button");
  let popupbutton = this.document.querySelectorAll(".box > button");
  let imgContainer = this.document.querySelector(".imgContainer");
  let product = this.document.querySelector("#product");
  let minButton = this.document.querySelectorAll("#countButtonBox > button")[0];
  let plusButton = this.document.querySelectorAll(
    "#countButtonBox > button"
  )[1];
  let countValue = this.document.querySelector("#countButtonBox > span");
  let totalMonyBox = this.document.querySelectorAll(
    "form > div:last-of-type > span"
  )[0];
  let spButton = this.document.querySelector(".formButton");
  let buyNumber = 1;
  let productPrice = 0;
  let currentPrice;
  let currentID;
  const optionName = {
    earphone_pink: "WF-1000XM5 스모키 핑크",
    earphone_platinum_silver: "WF-1000XM5 플래티넘 실버",
    earphone_black: "WF-1000XM5 블랙",
    headphone_platinum_silver: "WH-1000XM5 플래티넘 실버",
    headphone_smokey_pink: "WH-1000XM5 스모키 핑크",
    headphone_black: "WH-1000XM5 블랙",
    headphone_midnight_blue: "WH-1000XM5 미드나잇 블루",
    speaker_blue: "SRS-XB100 블루",
    speaker_black: "SRS-XB100 블랙",
    speaker_light_Grey: "SRS-XB100 라이트 그레이",
    speaker_Orange: "SRS-XB100 오렌지",
  };

  // 장바구니 담기
  spButton.addEventListener("click", function () {
    if (!product.value) {
      cumtomAlert("제품이 선택되지 않았습니다.", "warning");
      return;
    }
    const productsrc = product.value;
    const currentBuyNumber = buyNumber;
    let matchState = "no match";
    let spObject = {
      id: currentID,
      productsrc: productsrc,
      productName: optionName[productsrc],
      currentBuyNumber: currentBuyNumber,
      totalvalue: totalMonyBox.innerHTML,
      price: currentPrice,
    };

    for (let i = 0; i < spArr.length; i++) {
      if (spObject.productName === spArr[i].productName) {
        spArr[i].currentBuyNumber += spObject.currentBuyNumber;
        spArr[i].totalvalue = changeToString(
          changeToNumber(spArr[i].totalvalue) +
            changeToNumber(spObject.totalvalue)
        );
        matchState = "match";
        break; // 순회 중단
      }
    }
    if (matchState === "no match") spArr.push(spObject);
    console.log(spArr);
    // 배열을 문자열로 변환하여 Local Storage에 저장
    localStorage.setItem("spArr", JSON.stringify(spArr));
    cumtomAlert("물건이 장바구니에 담겼습니다.", "success");
  });
  // 플러스 마이너스 버튼
  minButton.addEventListener("click", function () {
    if (countValue.innerHTML <= 1) return;
    countValue.innerHTML = --buyNumber;
    totalMonyBox.innerHTML = changeToString(productPrice * buyNumber);
  });
  plusButton.addEventListener("click", function (event) {
    countValue.innerHTML = ++buyNumber;
    totalMonyBox.innerHTML = changeToString(productPrice * buyNumber);
  });

  // 옵션탭 사진 교체
  product.addEventListener("change", function () {
    imgContainer.children[0].src = `/img/${product.value}.png`;
  });

  // 팝업창 닫기
  popupclose.addEventListener("click", function () {
    popup.style.opacity = "";
    popup.style.visibility = "";
  });

  this.fetch("/js/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      let productPopup = this.document.querySelector(".productPopup");
      let formElement = this.document.querySelector(".productPopup > form");

      // 자세히 보기 버튼 연결
      popupbutton.forEach((item, index) => {
        item.addEventListener("click", function () {
          // 팝업창을 띄운다.
          popup.style.opacity = "1";
          popup.style.visibility = "visible";
          // 처음엔 갯수가 1개다.
          buyNumber = 1;
          countValue.innerHTML = buyNumber;

          // 기존에 적용된 데이터가 있을 시 전부 제거
          if (imgContainer.children[0]) {
            imgContainer.removeChild(imgContainer.children[0]);
            for (let i = 0; i < 4; i++) {
              productPopup.removeChild(productPopup.children[0]);
            }
          }
          while (product.children[1]) {
            product.removeChild(product.children[1]);
          }

          // 아이디와 일치하는 데이터만 올린다.
          data.forEach((data) => {
            if (index + 1 === data.id) {
              const imgElement = document.createElement("img");
              const bElement = document.createElement("b");
              const h3Element = document.createElement("h3");
              const pElement = document.createElement("p");
              const strongElement = document.createElement("strong");

              imgElement.src = data.src;
              imgElement.alt = data.alt;
              bElement.innerHTML = data.tag;
              h3Element.innerHTML = data.name;
              pElement.innerHTML = data.ment;
              strongElement.innerHTML = data.price;
              currentPrice = +data.pnumber;
              currentID = data.id;
              imgContainer.appendChild(imgElement);
              productPopup.insertBefore(bElement, formElement);
              productPopup.insertBefore(h3Element, formElement);
              productPopup.insertBefore(pElement, formElement);
              productPopup.insertBefore(strongElement, formElement);
              totalMonyBox.innerHTML = data.price;
              productPrice = changeToNumber(data.price);
              data.product.forEach((item) => {
                const optionElement = document.createElement("option");
                optionElement.value = item.value;
                optionElement.innerHTML = item.label;
                product.appendChild(optionElement);
              });
            }
          });
        });
      });
    })
    .catch((error) => console.error("로딩중 에러가 발생하였습니다", error));

  // 398,000원 <=> 398000 서로 교환해주는 함수다.
  function changeToNumber(str) {
    let arr = [...str];
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (+arr[i] || arr[i] === "0") {
        result += arr[i];
      }
    }
    return +result;
  }

  function changeToString(num) {
    let str = num.toLocaleString();
    return str + "원";
  }
});
