const effect = document.querySelector("#effect")
const effectImage = document.querySelector("#effectimage")
const closeEffect = document.querySelector("#closeeffect")

document.querySelectorAll(".jseffect").forEach(fullview => {
    fullview.addEventListener("click", function () {
        effectImage.src = this.src; 
        effect.style.display = "flex"; 
    });
});

closeEffect.addEventListener("click", function(){
    effect.style.display = "none";
});

effect.addEventListener("click", function(event){
    if (event.target === effect){
        effect.style.display = "none";
    }
});

// https://www.youtube.com/watch?v=4SQXOA8Z-lo got the prompt from here