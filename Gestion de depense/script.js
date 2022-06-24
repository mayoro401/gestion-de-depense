// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const modalBtn1 = document.querySelector("#modal-btn1");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
modalBtn1.addEventListener("click", openModal1);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open----> ouvrir le modal
function openModal() {
  modal.style.display = "block";
}
function openModal1() {
  modalRevenu.style.display = "block";
}

// Close--->fermer le modal
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
//fermer la modal si l'utilisteur clique n'importe ou sur la page
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
