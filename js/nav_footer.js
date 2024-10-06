//헤더에 넣을거 없으면 헤더 태그 만들지 말기 > 헤더 생성 후 네비 넣는 작업 수행
//이미 헤더가 있고 컨텐츠가 있으면 자동으로 헤더 맨 위로 네비가 들어간다.
window.addEventListener("load", function () {
  this.fetch("/nav.html")
    .then((response) => response.text())
    .then((data) => {
      //dom을 조작할 수 있는 범위 객체를 생성한다.
      let range = document.createRange();
      // 범위 객체의 메서드를 통해서 문자열 형태의 data를 dom 노드로 변환시킨다.
      let fragment = range.createContextualFragment(data);
      // dom에 추가시킨다.
      let currentHeader = this.document.querySelector("header");
      if (currentHeader === null) {
        let header = this.document.createElement("header");
        header.appendChild(fragment);
        this.document.body.insertBefore(header, this.document.body.children[0]);
      } else {
        let HeaderFirstChild = currentHeader.children[0];
        currentHeader.insertBefore(fragment, HeaderFirstChild);
      }
      let nav = this.document.querySelector("nav");
      nav.classList.add("toggleMenu");
      // 버튼 제작
      let menuButton = document.createElement("button");
      menuButton.classList.add("menuButton", "button");
      // --------------- 버튼 아이콘제작 ---------------
      let menuButtonsvgElement = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      menuButtonsvgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      menuButtonsvgElement.classList.add("bi", "bi-list");
      menuButtonsvgElement.setAttribute("viewBox", "0 0 16 16");

      let menuButtonpathElement1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      menuButtonpathElement1.setAttribute("fill-rule", "evenodd");
      menuButtonpathElement1.setAttribute(
        "d",
        "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      );

      menuButtonsvgElement.appendChild(menuButtonpathElement1);
      menuButton.addEventListener("click", function () {
        nav.classList.toggle("toggleMenu");
      });
      // --------------- 버튼 아이콘 추가 ---------------
      menuButton.appendChild(menuButtonsvgElement);
      createButton();
      this.window.addEventListener("resize", function () {
        if (this.window.innerWidth < 768 && this.window.innerWidth < 1220) {
          createButton();
        }
      });

      function createButton() {
        nav.appendChild(menuButton);
      }
    });
  this.fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      let range = document.createRange();
      let fragment = range.createContextualFragment(data);
      this.document.body.appendChild(fragment);
    });
});
