// Local Storage에서 배열 가져오기
window.addEventListener("load", function () {
  let spArr = JSON.parse(localStorage.getItem("spArr"));
  let countOFItemElement = this.document.querySelector(
    ".shopHeader > div > p > span"
  );
  let deleteButton = this.document.querySelector(".shopHeader > div > button");
  let itemList = this.document.querySelector(".itemList");
  let totalPriceBox = this.document.querySelector(
    ".calculatePrice > strong > span"
  );
  let currentPriceBox = this.document.querySelector(
    ".calculatePrice > p > span"
  );
  let totalPriceButton = this.document.querySelector(
    ".resultPrice > button > span"
  );
  let resultPrice = this.document.querySelector(".resultPrice > button");
  let countOFItem = 0;
  let totalPrice = 0;
  let currentPrice = 0;
  let deliveryPrice = 2500;

  if (spArr && Array.isArray(spArr)) {
    spArr.forEach((data, index) => {
      if (index === 0) totalPrice += deliveryPrice;
      let liElement = this.document.createElement("li");
      let imgElement = this.document.createElement("img");
      let divElement = this.document.createElement("div");
      let bElement = this.document.createElement("b");
      let spanElement = this.document.createElement("span");
      let brElement = this.document.createElement("br");
      let buttonElement = this.document.createElement("button");
      let closespanElement = this.document.createElement("span");

      imgElement.src = `./img/${data.productsrc}.png`;
      imgElement.alt = `${data.productName}`;
      bElement.innerHTML = data.totalvalue;
      spanElement.innerHTML = `${data.currentBuyNumber}개`;
      divElement.innerHTML = `${data.productName}<br>`;
      closespanElement.innerHTML = "닫기버튼";
      buttonElement.innerHTML = "X";

      // 총 아이템 개수 합산
      countOFItem += +data.currentBuyNumber;
      countOFItemElement.innerHTML = countOFItem;

      // 현재 주문 금액 총합
      let price = changeToNumber(data.totalvalue);
      currentPrice += price;
      totalPrice += price;
      currentPriceBox.innerHTML = changeToString(currentPrice);
      totalPriceBox.innerHTML = changeToString(totalPrice);
      totalPriceButton.innerHTML = changeToString(totalPrice);

      liElement.appendChild(imgElement);
      divElement.appendChild(bElement);
      divElement.appendChild(brElement);
      divElement.appendChild(spanElement);
      buttonElement.appendChild(closespanElement);
      liElement.appendChild(buttonElement);
      liElement.appendChild(divElement);
      itemList.appendChild(liElement);
    });
  } else {
    console.log("로컬스토리지가 비어있습니다.");
  }
  // 전체 삭제
  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("spArr");
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    countOFItem = 0;
    countOFItemElement.innerHTML = countOFItem;
    currentPrice = 0;
    totalPrice = 0;
    currentPriceBox.innerHTML = changeToString(currentPrice);
    totalPriceBox.innerHTML = changeToString(totalPrice);
    totalPriceButton.innerHTML = changeToString(totalPrice);
  });

  // 개별 삭제
  let closeButtons = this.document.querySelectorAll(".itemList > li > button");
  // 로딩되면 모든 리스트의 버튼들에 핸들러를 추가.
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function (event) {
      // 클릭된 버튼이 속한 제품 이름을 탐색
      let deleteName = event.target.parentElement.firstChild.alt;
      let price = event.target.parentElement.querySelector("div > b").innerHTML;
      let count =
        event.target.parentElement.querySelector("div > span").innerHTML;
      // 제품이 속한 부모노드 li를 삭제
      event.target.parentElement.remove();
      // 로컬스토리지 정리 >> 지울 이름을 제외한 나머지만 다시 배열로 담는다.
      spArr = spArr.filter((item) => !(item.productName === deleteName));
      // 다시 로컬스토리지로 수정된 배열을 저장
      localStorage.setItem("spArr", JSON.stringify(spArr));

      // 배달비 포함한 금액
      let newTotalPrice = changeToString(
        changeToNumber(totalPriceBox.innerHTML) - changeToNumber(price)
      );
      // 배달비 제외 금액
      let newcurrentPrice = changeToString(
        changeToNumber(newTotalPrice) - deliveryPrice
      );
      currentPriceBox.innerHTML = newcurrentPrice;
      totalPriceBox.innerHTML = spArr.length ? newTotalPrice : 0 + "원";
      totalPriceButton.innerHTML = spArr.length ? newTotalPrice : 0 + "원";

      countOFItemElement.innerHTML =
        +countOFItemElement.innerHTML - splitnumstr(count);
    });
  }

  resultPrice.addEventListener("click", function () {
    if (!(totalPriceButton.innerHTML === "0원")) {
      alert("주문이 완료되었습니다.");
    } else {
      alert("장바구니가 비어있습니다.");
    }
  });

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
  function splitnumstr(data) {
    let arr = [...data];
    arr.pop();
    let result = arr.join("");
    return +result;
  }
});
