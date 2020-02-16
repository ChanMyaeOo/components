const modalBtn = document.querySelector(".modal-button");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", e => {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", e => {
  modalBg.classList.remove("bg-active");
});
