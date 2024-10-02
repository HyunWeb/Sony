window.addEventListener("load", function () {
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
  let buyNumber = 1;
  let productPrice = 0;

  minButton.addEventListener("click", function () {
    if (countValue.innerHTML <= 1) return;
    countValue.innerHTML = --buyNumber;
    totalMonyBox.innerHTML = changeToString(productPrice * buyNumber);
  });
  plusButton.addEventListener("click", function (event) {
    countValue.innerHTML = ++buyNumber;
    totalMonyBox.innerHTML = changeToString(productPrice * buyNumber);
  });

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

      // 팝업 창 내용 변경하기
      popupbutton.forEach((item, index) => {
        item.addEventListener("click", function () {
          //팝업 띄우기
          popup.style.opacity = "0.93";
          popup.style.visibility = "visible";
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
