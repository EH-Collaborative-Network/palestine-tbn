

document.querySelector("#english-transcript-toggle").addEventListener("click", function(){
    document.querySelector("#english-transcript").classList.add("on");
})
document.querySelector("#spanish-transcript-toggle").addEventListener("click", function(){
    document.querySelector("#spanish-transcript").classList.add("on");
})
document.querySelector("#arabic-transcript-toggle").addEventListener("click", function(){
    document.querySelector("#arabic-transcript").classList.add("on");
})

let closings = document.querySelectorAll(".close-transcript");
closings.forEach((el, i) =>{
    el.addEventListener("click", function(){
        this.closest(".modal").classList.remove("on");
    })
})
