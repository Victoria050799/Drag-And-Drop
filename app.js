const item = document.querySelector('.item');
const placeholders= document.querySelectorAll('.placeholder');
 for (const placeholder of placeholders){
    placeholder.addEventListener("dragover",dragover);
    placeholder.addEventListener("dragenter",dragenter);
    placeholder.addEventListener("dragleave",dragleave);
    placeholder.addEventListener("drop",dragdrop);
 }

 item.addEventListener("dragstart",dragstart);
 item.addEventListener("dragend", dragend);
 
 function dragstart(event){
    event.target.classList.add("hold");
    setTimeout(()=> event.target.classList.add("hide"),0);
 }

 const colors =[
   "linear-gradient(90deg,#84fab0 0%,#8fd3f4 100%)",
   "linear-gradient(90deg,#209cff 0%,#68e0cf 100%)",
   "linear-gradient(130deg,#be85e4 20%,#229efd 179.25%)",
]

function getRandomColor(){
   return colors[Math.floor(Math.random()* colors.length)];
}

 function dragend(event){
    event.target.classList.remove("hold","hide");
    item.style.background= getRandomColor();
   
 }

 function dragover(event){
    event.preventDefault();
 }

 function dragenter(event){
    event.target.classList.add("hovered");
    event.target.classList.remove("item");
 }
 
 function dragleave(event){
    event.target.classList.remove("hovered");
 }

 function dragdrop(event){
    event.target.classList.remove("hovered");
    event.target.append(item);
 }