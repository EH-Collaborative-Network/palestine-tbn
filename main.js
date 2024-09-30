document.querySelector("footer h4 > span").addEventListener("click", function(){
    if(document.querySelector("footer").classList.contains("on")){
        document.querySelector("footer").classList.remove("on")
    }else{
        document.querySelector("footer").classList.add("on")
    }
})

document.querySelector("footer svg").addEventListener("click", function(){
    if(document.querySelector("footer").classList.contains("on")){
        document.querySelector("footer").classList.remove("on")
    }else{
        document.querySelector("footer").classList.add("on")
    }
})


/* background video */
function resizeBG(){

   let hpvideo = document.querySelector("#hp-video");
    if( hpvideo ) {

        /* 1080 1920 1.7 check ratio */
        let ww = window.innerWidth;
        let wh = window.innerHeight;


        if(window.innerWidth > window.innerHeight){
            if((wh * 1.7) < ww){
                hpvideo.style.height = (ww * 0.5625) + 'px';

            }

        }
    } 
}
window.addEventListener("resize", resizeBG);

window.onload = resizeBG()
resizeBG()








/* jump scroll */
let jump = document.querySelector(".main-up");
jump.addEventListener('click',function(){
    window.scrollTo({left:0, top: window.outerHeight - 100,  behavior: 'smooth'});
})
/* LANGUAGE TOGGLE * */

let langButton = document.querySelector("#language-toggle");

document.addEventListener("DOMContentLoaded", function(){
	const lang = localStorage.getItem('lang');
	
	if(lang == "عَرَبِيّ"){
        langButton.innerHTML = "english"
        langButton.classList.add("eng")
        document.body.classList.add("arabic")
        document.body.classList.remove("english")
	}else{
        langButton.innerHTML = "عَرَبِيّ"
        langButton.classList.remove("eng")
        document.body.classList.add("english")
        document.body.classList.remove("arabic")
    }
	
});

langButton.addEventListener("click",function(){
    if(this.innerHTML == "عَرَبِيّ"){
        localStorage.setItem('lang', "عَرَبِيّ");
        langButton.innerHTML = "Switch to English"
        langButton.classList.add("eng")
        document.body.classList.add("arabic")
        document.body.classList.remove("english")
    }else{
        localStorage.setItem('lang', "English");
        langButton.innerHTML = "عَرَبِيّ"
        langButton.classList.remove("eng")
        document.body.classList.add("english")
        document.body.classList.remove("arabic")
    }
})
/*LIGHTBOX */
let imgs = document.querySelectorAll(".work img");
let lb = document.querySelector('#lightbox');
imgs.forEach((el) => {
    el.addEventListener("click",function(){
        lb.innerHTML = ""
        let newEl = this.cloneNode(true)
        lb.appendChild(newEl)
        lb.classList.add('on')
    })
})
lb.addEventListener("click", function(){
    this.classList.remove("on")
    this.innerHTML = ""
})


/* background video */
function resizeBG(){

    let hpvideo = document.querySelector("#hp-video");
     if( hpvideo ) {
 
         /* 1080 1920 1.7 check ratio */
         let ww = window.innerWidth;
         let wh = window.innerHeight;
 
 
         if(window.innerWidth > window.innerHeight){
             if((wh * 1.7) < ww){
                 hpvideo.style.height = (ww * 0.5625) + 'px';
 
             }
 
         }
     } 
 }
 window.addEventListener("resize", resizeBG);
 
 window.onload = resizeBG()
 resizeBG()
 
 