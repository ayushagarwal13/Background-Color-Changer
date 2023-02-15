const button=document.querySelector("button");
const body=document.querySelector("body");
const color=['blue','green','pink','yellow','orange','purple']

body.style.backgroundColor='#F4C430';

button.addEventListener('click',changeB)
function changeB(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex];
}