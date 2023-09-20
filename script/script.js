const blocks = document.querySelectorAll(".block");
const dragable_items = document.querySelectorAll("img");
// const dragable_items = document.querySelectorAll(".item");

const dragStartHandler = (e) => {
  e.dataTransfer.setData("id", e.target.id);
};
const dragOverHandler = (e) => {
  e.preventDefault();
};
const dropHandler = (e) => {
  e.preventDefault();
  let id = e.dataTransfer.getData("id");
  let dragableElement = document.getElementById(id);
  let parentDragableElement = dragableElement.parentNode;
  let replaceableElement = e.currentTarget.firstElementChild;

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
  block.addEventListener("drop", dropHandler);
});
