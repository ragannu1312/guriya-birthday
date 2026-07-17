function startSurprise() {

document.querySelector(".hero").style.display="none";

document.getElementById("message").style.display="block";
    document.getElementById("letter").innerHTML = "";
i = 0;
typeWriter();
    
    launchRocket();

    showBirthdayText();

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
function showBirthdayText()
{

const txt=document.getElementById("birthdayText");

txt.classList.add("showText");

setTimeout(()=>{

txt.classList.remove("showText");

},8000);

}
function updateCountdown(){

const target=new Date("August 7, 2026 00:00:00").getTime();

const now=new Date().getTime();

const distance=target-now;

const days=Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML=
"⏳ Birthday Countdown : "+days+" Days ❤️";

}

updateCountdown();
setInterval(updateCountdown,1000);
const message = `Kabhi socha nahi tha ki meri zindagi me koi aisa bhi aayega...

Jo khoon ka rishta na hote hue bhi meri duniya ban jayega.

Log kehte hain sirf khoon ke rishte hi apne hote hain...

Lekin tumne mujhe sikha diya ki dil se bane rishte sabse khoobsurat hote hain.

Tum meri sagi behen nahi ho...
Lekin meri har khushi, har dua aur har muskaan me tum shamil ho.

Happy 20th Birthday Meri Guriya ❤️

Main hamesha tumhare saath rahunga.`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("letter").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}
