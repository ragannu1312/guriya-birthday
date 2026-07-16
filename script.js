function startSurprise() {

document.querySelector(".hero").style.display="none";

document.getElementById("message").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

document.body.style.background="linear-gradient(135deg,#ff4b91,#ff9ed2,#fff0b3)";

alert("🎉 Happy Birthday Meri Guriya ❤️");

}
// Gallery animation
const photos = document.querySelectorAll(".gallery img");

photos.forEach((img)=>{
    img.addEventListener("click",()=>{
        img.style.transform="scale(1.2)";
        setTimeout(()=>{
            img.style.transform="scale(1)";
        },500);
    });
});
function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,300);
#fireworks{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    pointer-events:none;
    z-index:999;
}
