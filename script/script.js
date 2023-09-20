const blocks = document.querySelectorAll(".block");
const dragable_items = document.querySelectorAll("img");

const dragStartHandler = (e) => {
  e.dataTransfer.setData("id", e.target.id);
  e.target.classList.add("dragging");
};
const dragOverHandler = (e) => {
  e.preventDefault();
  e.currentTarget.classList.add("hovered");
};
const dragLeaveHandler = (e) => {
  e.currentTarget.classList.remove("hovered");
};
const dropHandler = (e) => {
  e.preventDefault();
  let id = e.dataTransfer.getData("id");
  let dragableElement = document.getElementById(id);
  let parentDragableElement = dragableElement.parentNode;
  let replaceableElement = e.currentTarget.firstElementChild;
  dragableElement.classList.remove("dragging");
  e.currentTarget.classList.remove("hovered");
  if (replaceableElement.id !== id) {
    e.currentTarget.replaceChild(dragableElement, replaceableElement);
    parentDragableElement.appendChild(replaceableElement);
  }
};

dragable_items.forEach((item) => {
  item.addEventListener("dragstart", dragStartHandler);
});
blocks.forEach((block) => {
  block.addEventListener("dragover", dragOverHandler);
  block.addEventListener("dragleave", dragLeaveHandler);
  block.addEventListener("drop", dropHandler);
});
