let block;
function toggleModal(event=null) {
  if (!block) {
    block = event.target.closest(".block");
  } else {
    block = null;
  }
  const modal = document.querySelector(".my-backdrop");
  modal.classList.toggle("show");
}
function deleteBlock() {
  block.remove();
  toggleModal();
}
let addBlock = document.querySelector('.add-block');
let addDropdown = document.querySelector('.add-dropdown');
addBlock.onclick = function() {
addDropdown.classList.toggle("show");
}