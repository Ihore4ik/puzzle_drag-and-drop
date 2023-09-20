export const dragStartHandler = (e) => {
    e.dataTransfer.setData("id", e.target.id);
    e.target.classList.add("dragging");
  };

  export const dragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add("hovered");
  };
  export const dragLeaveHandler = (e) => {
    e.currentTarget.classList.remove("hovered");
  };
  export const dropHandler = (e) => {
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