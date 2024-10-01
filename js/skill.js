window.addEventListener("load", function () {
  const boxes = document.querySelectorAll(".box");

  function handleScroll() {
    boxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.2;

      if (boxTop < triggerPoint) {
        box.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
});
