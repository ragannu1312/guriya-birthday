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
.gallery{
display:flex;
flex-wrap:wrap;
justify-content:center;
gap:15px;
margin-top:20px;
}

.gallery img{
width:180px;
height:220px;
object-fit:cover;
border-radius:15px;
box-shadow:0 0 15px rgba(255,20,147,0.5);
transition:0.4s;
}

.gallery img:hover{
transform:scale(1.08);
}

video{
margin:15px;
border-radius:15px;
box-shadow:0 0 15px rgba(0,0,0,.3);
max-width:90%;
}
