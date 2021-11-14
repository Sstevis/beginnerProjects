const smallClasses = document.querySelectorAll(".small");

const changeClass = smallClasses.forEach((item) => {
  item.addEventListener("click", () => {
    removeBigClass();
    item.classList.add("big");
  });
});

const removeBigClass = () => {
  smallClasses.forEach((item) => {
    item.classList.remove("big");
  });
};
