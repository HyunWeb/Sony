window.addEventListener("load", function () {
  let popup = this.document.querySelector("#popup");
  let popupclose = this.document.querySelector("#popup > button");
  let popupbutton = this.document.querySelectorAll(".box > button");

  // 팝업창 열기
  popupbutton.forEach((item) => {
    item.addEventListener("click", function () {
      popup.style.opacity = "";
      popup.style.visibility = "";
    });
  });
  // 팝업창 닫기
  popupclose.addEventListener("click", function () {
    popup.style.opacity = "0";
    popup.style.visibility = "hidden";
  });

  this.fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("로딩중 에러가 발생하였습니다", error));
});
