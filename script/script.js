const block1 = document.querySelector('.block_1');
const block2 = document.querySelector('.block_2');
const items = document.querySelectorAll('.item');


const dragStartHandler = (e)=>{
    e.dataTransfer.setData("id", e.target.id);
}
const dragOver_handler = (e)=>{
     e.preventDefault();
}
const drop_handler = (e)=>{
    let itemId = e.dataTransfer.getData("id");
    e.currentTarget.append(document.getElementById(itemId));
}
items.forEach(item=>{
    item.addEventListener("dragstart",dragStartHandler);
})
block1.addEventListener("dragover", dragOver_handler);
block2.addEventListener("dragover", dragOver_handler);
block1.addEventListener("drop", drop_handler);
block2.addEventListener("drop", drop_handler);