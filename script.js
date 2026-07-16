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
