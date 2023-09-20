export const newElement = (element, obj, addClasses = []) => {
  let createdElement = document.createElement(element);
  for (let key in obj) {
    createdElement.setAttribute(key, obj[key]);
  }
  addClasses.forEach((clas) => createdElement.classList.add(clas));
  return createdElement;
};

export const pathToImg = (index) => {
  if (index < 10) {
    index = "0" + index;
  }
  return `./assets/cut_images_5/image_part_0${index}.jpg`;
};

export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min) + 1;
};
