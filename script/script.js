import { newElement, pathToImg, randomNumber } from "./functions.js";
import {
  dragStartHandler,
  dragOverHandler,
  dragLeaveHandler,
  dropHandler,
} from "./event_handlers.js";

const zone = document.querySelector(".zone_1");

const NUMBER_OF_ITEMS = 25;
const tempArray = [];

for (let i = 0; i < NUMBER_OF_ITEMS; i++) {
  zone.append(newElement("div", null, ["block"]));
}
const blocks = document.querySelectorAll(".block");

blocks.forEach((block) => {
  let isPushed = false;
  let tempIndex;
  while (!isPushed) {
    tempIndex = randomNumber(0, NUMBER_OF_ITEMS);
    if (!tempArray.includes(tempIndex)) {
      tempArray.push(tempIndex);
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

dragable_items.forEach((item) => {
  item.addEventListener("dragstart", dragStartHandler);
});
blocks.forEach((block) => {
  block.addEventListener("dragover", dragOverHandler);
  block.addEventListener("dragleave", dragLeaveHandler);
  block.addEventListener("drop", dropHandler);
});
