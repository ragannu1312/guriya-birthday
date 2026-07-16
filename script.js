function startSurprise() {

document.querySelector(".hero").style.display="none";

document.getElementById("message").style.display="block";
    
    launchRocket();
}

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

function launchRocket(){

const rocket=document.getElementById("rocket");

rocket.style.display="block";

rocket.classList.add("launch");

setTimeout(()=>{

rocket.style.display="none";

rocket.classList.remove("launch");

firework();

},2500);

}
function showBirthdayText(){

const txt=document.getElementById("birthdayText");

txt.classList.add("showText");

setTimeout(()=>{

txt.classList.remove("showText");

},8000);

}
