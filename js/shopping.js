import { cumtomAlert } from "./alert.js";
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
      let countdivElement = this.document.createElement("div");
      let minusbuttonElement = this.document.createElement("button");
      let plusbuttonElement = this.document.createElement("button");
      let checkbox = this.document.createElement("input");

      minusbuttonElement.innerHTML = "-";
      minusbuttonElement.classList.add("countButton", "minusBT");
      plusbuttonElement.innerHTML = "+";
      plusbuttonElement.classList.add("countButton", "plusBT");

      imgElement.src = `./img/${data.productsrc}.png`;
      imgElement.alt = `${data.productName}`;
      bElement.innerHTML = data.totalvalue;
      spanElement.innerHTML = data.currentBuyNumber;
      spanElement.classList.add("spanElement");
      divElement.innerHTML = `${data.productName}<br>`;
      countdivElement.style.display = "flex";
      countdivElement.style.marginTop = "10px";
      closespanElement.innerHTML = "닫기버튼";
      buttonElement.innerHTML = "X";
      liElement.classList.add(`${index}`);
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox");
      checkbox.value = `${index}`;

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

      liElement.appendChild(checkbox);
      liElement.appendChild(imgElement);
      divElement.appendChild(bElement);
      divElement.appendChild(brElement);
      countdivElement.appendChild(minusbuttonElement);
      countdivElement.appendChild(spanElement);
      countdivElement.appendChild(plusbuttonElement);
      divElement.appendChild(countdivElement);
      buttonElement.appendChild(closespanElement);
      liElement.appendChild(buttonElement);
      liElement.appendChild(divElement);
      itemList.appendChild(liElement);
    });
  } else {
    console.log("로컬스토리지가 비어있습니다.");
  }

  let minusButtons = this.document.querySelectorAll(".minusBT");
  let plusButtons = this.document.querySelectorAll(".plusBT");
  for (let i = 0; i < plusButtons.length; i++) {
    // 개수 감소 버튼
    minusButtons[i].addEventListener("click", function (event) {
      let currentCount =
        event.target.parentElement.querySelector("span").innerHTML;
      if (currentCount <= 1) return;

      currentCount = --event.target.parentElement.querySelector("span")
        .innerHTML;
      recountValue(event, currentCount);
      insertInnerHTML();
    });
    // 개수 추가 버튼
    plusButtons[i].addEventListener("click", function (event) {
      let currentCount = ++event.target.parentElement.querySelector("span")
        .innerHTML;
      recountValue(event, currentCount);
      insertInnerHTML();
    });
  }

  // 전체 삭제
  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("spArr");
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }
    spArr = [];
    insertInnerHTML(0);
  });

  // 개별 삭제
  let closeButtons = this.document.querySelectorAll(".itemList > li > button");
  // 로딩되면 모든 리스트의 버튼들에 핸들러를 추가.
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function (event) {
      console.log(spArr);
      // 클릭된 버튼이 속한 제품 이름을 탐색
      let deleteName = event.target.parentElement.querySelector("img").alt;
      // 제품이 속한 부모노드 li를 삭제
      event.target.parentElement.remove();
      // 로컬스토리지 정리 >> 지울 이름을 제외한 나머지만 다시 배열로 담는다.
      spArr = spArr.filter((item) => !(item.productName === deleteName));
      console.log(spArr, deleteName);
      // 다시 로컬스토리지로 수정된 배열을 저장
      localStorage.setItem("spArr", JSON.stringify(spArr));

      insertInnerHTML();
    });
  }

  resultPrice.addEventListener("click", function () {
    if (!(totalPriceButton.innerHTML === "0원")) {
      cumtomAlert("주문이 완료되었습니다.", "success");
    } else {
      cumtomAlert("장바구니가 비어있습니다.", "warning");
    }
  });
  let selectDel = this.document.querySelector(".selectDel");

  selectDel.addEventListener("click", function () {
    let checkboxes = document.querySelectorAll(".checkbox");
    let delindex = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkboxes[i].parentElement.remove();
        delindex.push(i);
      }
    }
    spArr = spArr.filter((item, index) => !delindex.includes(index));
    for (let i = 0; i < itemList.children.length; i++) {
      let value = itemList.children[i].classList[0];
      itemList.children[i].classList.replace(value, i);
    }
    localStorage.setItem("spArr", JSON.stringify(spArr));

    insertInnerHTML();
  });

  function insertInnerHTML(data) {
    let result = calculateTotalPrice(data);
    currentPriceBox.innerHTML = result[0];
    totalPriceBox.innerHTML = result[1];
    totalPriceButton.innerHTML = result[1];
    countOFItemElement.innerHTML = result[2];
  }

  function calculateTotalPrice(data) {
    // 배열을 돌면서 전체 값만 새로 계산
    let result = 0;
    let deliveryPrice = 2500;
    let countOFItem = 0;
    for (let i = 0; i < spArr.length; i++) {
      countOFItem += spArr[i].currentBuyNumber;
      if (!(data === 0)) {
        data = changeToNumber(spArr[i].totalvalue);
      }
      let num = data;
      result += num;
    }
    let deliveryprice = result === 0 ? 0 : result + deliveryPrice;
    return [changeToString(result), changeToString(deliveryprice), countOFItem];
  }

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
  function recountValue(event, currentCount) {
    let index =
      event.target.parentElement.parentElement.parentElement.classList.value;
    let prices = event.target.parentElement.parentElement.querySelector("b");
    prices.innerHTML = changeToString(spArr[index].price * currentCount);
    spArr[index].totalvalue = prices.innerHTML;
    spArr[index].currentBuyNumber = currentCount;
    localStorage.setItem("spArr", JSON.stringify(spArr));
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
