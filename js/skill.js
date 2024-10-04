window.addEventListener("load", function () {
  const boxes = document.querySelectorAll(".box");

  function handleScroll() {
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const boxBottom = box.getBoundingClientRect().bottom;
      const triggerPoint = window.innerHeight / 1.3;
      const hidePoint = window.innerHeight / 5;

      if (boxTop < triggerPoint) {
        box.classList.add("visible");
      }

      if (boxBottom < hidePoint || boxTop > window.innerHeight) {
        box.classList.remove("visible");
      }
    });
  }
  window.addEventListener("scroll", handleScroll);
});
