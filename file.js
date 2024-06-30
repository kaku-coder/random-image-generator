let imgcontenor=document.querySelector(".image-contenor")
let button=document.querySelector(".btn")

button.addEventListener("click",()=>{
    imagenumer=10
    addnewimage()
})
function addnewimage(){
    for (let index = 0; index < imagenumer; index++) {
        let newimg=document.createElement("img")
        newimg.src=`https://picsum.photos/300?random={${Math.floor(Math.random()*1000)}}`;
        imgcontenor.appendChild(newimg)
        
    }


}