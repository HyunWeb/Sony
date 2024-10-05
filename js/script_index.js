window.addEventListener("load", function () {
  let headphone = this.document.querySelector("#headPhone");
  let earphone = this.document.querySelector("#earphone");
  let speaker = this.document.querySelector("#speaker");
  let bestSellerTitle = this.document.querySelector("#bestseller > h2 > span");
  let skillTextBox = this.document.querySelectorAll("#textBox > p > span");
  let skillTitle = this.document.querySelector(
    "#skillSection > div > h2 > span"
  );
  let skillimage = this.document.querySelector("#skillSection > img");
  let companyTitle = this.document.querySelector(
    "#companySection > div > h2 > span"
  );
  let companyTextBox = this.document.querySelectorAll("#speechBox > p > span");

  window.addEventListener("wheel", function (event) {
    let data = document.documentElement.scrollTop;
    let earphoneData = earphone.getBoundingClientRect();
    let bestSellerData = bestSellerTitle.getBoundingClientRect();
    let skillTitleData = skillTitle.getBoundingClientRect();
    let skillimageData = skillimage.getBoundingClientRect();
    let companyTitleData = companyTitle.getBoundingClientRect();
    if (this.window.innerWidth < 768) {
      MBcontrolHeadphone(data, event);
      MBcontrolOtherProduct(bestSellerData);
      MBcontrolskillSection(skillTitleData, skillimageData);
      MBcontrolcompanySection(companyTitleData, companyTextBox);
    } else if (this.window.innerWidth >= 768 && this.window.innerWidth < 1024) {
      TBcontrolHeadphone(data, event);
      TBcontrolOtherProduct(bestSellerData);
      TBcontrolskillSection(skillTitleData, skillimageData);
      TBcontrolcompanySection(companyTitleData, companyTextBox);
    } else {
      controlHeadphone(data, event);
      controlOtherProduct(earphoneData, bestSellerData);
      controlskillSection(skillTitleData);
      controlcompanySection(companyTitleData, companyTextBox);
    }
  });

  function TBcontrolHeadphone(data, event) {
    if (event.deltaY > 0 && data > 50) {
      headphone.style.bottom = "-87%";
      headphone.style.transform = "translate(-50%, 0) scale(1)";
      earphone.style.transform = "";
      speaker.style.transform = "";
    } else if (event.deltaY < 0 && data < 800) {
      headphone.style.bottom = "";
      headphone.style.transform = "";
    }
  }
  function MBcontrolHeadphone(data, event) {
    if (event.deltaY > 0 && data > 50) {
      headphone.style.bottom = "-82%";
      headphone.style.transform = "translate(-50%, 0) scale(1)";
      earphone.style.transform = "";
      speaker.style.transform = "";
    } else if (event.deltaY < 0 && data < 800) {
      headphone.style.bottom = "";
      headphone.style.transform = "";
    }
  }
  function controlHeadphone(data, event) {
    if (event.deltaY > 0 && data > 50) {
      headphone.style.bottom = "-62%";
      headphone.style.transform = "translate(-50%, 0) scale(1)";
    } else if (event.deltaY < 0 && data < 800) {
      headphone.style.bottom = "";
      headphone.style.transform = "";
    }
  }

  function TBcontrolOtherProduct(bestSellerData) {
    if (
      bestSellerData.top <= this.window.innerHeight &&
      bestSellerData.bottom > 0
    ) {
      bestSellerTitle.style.top = "0";
    } else {
      bestSellerTitle.style.top = "";
    }
  }
  function MBcontrolOtherProduct(bestSellerData) {
    if (
      bestSellerData.top <= this.window.innerHeight &&
      bestSellerData.bottom > 0
    ) {
      bestSellerTitle.style.top = "0";
    } else {
      bestSellerTitle.style.top = "";
    }
  }
  function controlOtherProduct(earphoneData, bestSellerData) {
    if (
      bestSellerData.top <= this.window.innerHeight &&
      bestSellerData.bottom > 0
    ) {
      bestSellerTitle.style.top = "0";
    } else {
      bestSellerTitle.style.top = "";
    }
    if (
      earphoneData.top <= this.window.innerHeight &&
      earphoneData.bottom > 0
    ) {
      earphone.style.transform = "translate(0, 0) scale(1)";
      speaker.style.transform = "translate(0, 0) scale(1)";
    } else {
      earphone.style.transform = "";
      speaker.style.transform = "";
    }
  }

  function TBcontrolskillSection(skillTitleData, skillimageData) {
    if (
      skillTitleData.top <= this.window.innerHeight &&
      skillTitleData.bottom > 0
    ) {
      skillTitle.style.top = "5px";
      skillimage.style.transform = "translate(0, 0)";
    } else {
      skillTitle.style.top = "";
      skillimage.style.transform = "";
    }

    if (
      skillimageData.top <= this.window.innerHeight &&
      skillimageData.bottom > 0
    ) {
      skillimage.style.transform = "translate(0, 0)";
    } else {
      skillimage.style.transform = "";
    }

    for (let i = 0; i < skillTextBox.length; i++) {
      let skillTextBoxData = skillTextBox[i].getBoundingClientRect();
      if (
        skillTextBoxData.top <= this.window.innerHeight &&
        skillTextBoxData.bottom > 0
      ) {
        skillTextBox[i].style.top = "0";
      } else {
        skillTextBox[i].style.top = "";
      }
    }
  }
  function MBcontrolskillSection(skillTitleData, skillimageData) {
    if (
      skillTitleData.top <= this.window.innerHeight &&
      skillTitleData.bottom > 0
    ) {
      skillTitle.style.top = "5px";
      skillimage.style.transform = "translate(0, 0)";
    } else {
      skillTitle.style.top = "";
      skillimage.style.transform = "";
    }

    if (
      skillimageData.top <= this.window.innerHeight &&
      skillimageData.bottom > 0
    ) {
      skillimage.style.transform = "translate(0, 0)";
    } else {
      skillimage.style.transform = "";
    }

    for (let i = 0; i < skillTextBox.length; i++) {
      let skillTextBoxData = skillTextBox[i].getBoundingClientRect();
      if (
        skillTextBoxData.top <= this.window.innerHeight &&
        skillTextBoxData.bottom > 0
      ) {
        skillTextBox[i].style.top = "0";
      } else {
        skillTextBox[i].style.top = "";
      }
    }
  }
  function controlskillSection(skillTitleData) {
    if (
      skillTitleData.top <= this.window.innerHeight &&
      skillTitleData.bottom > 0
    ) {
      skillTitle.style.top = "5px";
      skillimage.style.transform = "translate(0, 0)";
    } else {
      skillTitle.style.top = "";
      skillimage.style.transform = "";
    }

    for (let i = 0; i < skillTextBox.length; i++) {
      let skillTextBoxData = skillTextBox[i].getBoundingClientRect();
      if (
        skillTextBoxData.top <= this.window.innerHeight &&
        skillTextBoxData.bottom > 0
      ) {
        skillTextBox[i].style.top = "0";
      } else {
        skillTextBox[i].style.top = "";
      }
    }
  }
  function TBcontrolcompanySection(companyTitleData, companyTextBox) {
    if (
      companyTitleData.top <= this.window.innerHeight &&
      companyTitleData.bottom > 0
    ) {
      companyTitle.style.top = "5px";
    } else {
      companyTitle.style.top = "";
    }

    for (let i = 0; i < companyTextBox.length; i++) {
      let companyTextBoxData = companyTextBox[i].getBoundingClientRect();
      if (
        companyTextBoxData.top <= this.window.innerHeight &&
        companyTextBoxData.bottom > 0
      ) {
        companyTextBox[i].style.top = "0";
      } else {
        companyTextBox[i].style.top = "";
      }
    }
  }
  function MBcontrolcompanySection(companyTitleData, companyTextBox) {
    if (
      companyTitleData.top <= this.window.innerHeight &&
      companyTitleData.bottom > 0
    ) {
      companyTitle.style.top = "5px";
    } else {
      companyTitle.style.top = "";
    }

    for (let i = 0; i < companyTextBox.length; i++) {
      let companyTextBoxData = companyTextBox[i].getBoundingClientRect();
      if (
        companyTextBoxData.top <= this.window.innerHeight &&
        companyTextBoxData.bottom > 0
      ) {
        companyTextBox[i].style.top = "0";
      } else {
        companyTextBox[i].style.top = "";
      }
    }
  }
  function controlcompanySection(companyTitleData, companyTextBox) {
    if (
      companyTitleData.top <= this.window.innerHeight &&
      companyTitleData.bottom > 0
    ) {
      companyTitle.style.top = "5px";
    } else {
      companyTitle.style.top = "";
    }

    for (let i = 0; i < companyTextBox.length; i++) {
      let companyTextBoxData = companyTextBox[i].getBoundingClientRect();
      if (
        companyTextBoxData.top <= this.window.innerHeight &&
        companyTextBoxData.bottom > 0
      ) {
        companyTextBox[i].style.top = "0";
      } else {
        companyTextBox[i].style.top = "";
      }
    }
  }

  window.addEventListener("resize", function (event) {
    headphone.style.bottom = "";
    headphone.style.transform = "";
  });
});
