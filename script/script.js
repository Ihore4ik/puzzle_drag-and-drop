const NUMBER_OF_ITEMS = 25;

const pathToImg = (index) => {
  if (index < 10) {
    index = "0" + index;
  }
  return `./assets/cut_images_5/image_part_0${index}.jpg`;
};
const newElement = (element, obj, addClasses = []) => {
  let createdElement = document.createElement(element);
  for (let key in obj) {
    createdElement.setAttribute(key, obj[key]);
  }
  addClasses.forEach((clas) => createdElement.classList.add(clas));
  return createdElement;
};
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
};
const zone = document.querySelector(".zone_1");
for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  zone.append(newElement("div", null, ["block"]));
}
const blocks = document.querySelectorAll(".block");
let temp = [];
blocks.forEach((block, index) => {
  let isPushed = false;
  let tempIndex;
  while(!isPushed){
    tempIndex = randomNumber(0, NUMBER_OF_ITEMS);
    if( !temp.includes(tempIndex)){
      temp.push(tempIndex);
      let imgTemp = newElement("img", {
        src: pathToImg(tempIndex),
        id: tempIndex,
        dragable: true,
      });
      block.append(imgTemp);
      isPushed = true;
    }
  }
  });
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
