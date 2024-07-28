const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanElement = document.createElement("span");
    const size = Math.random() * 100;
    spanElement.style.left = xPos + "px";
    spanElement.style.top = yPos + "px";
    spanElement.style.width = size + "px";
    spanElement.style.height = size + "px";
    bodyElement.appendChild(spanElement);
    setTimeout(()=>{
        spanElement.remove();
    },3000)
});