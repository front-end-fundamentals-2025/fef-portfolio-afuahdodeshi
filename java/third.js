// calling all the things i want to have an effect on
const effect = document.querySelector("#effect")
const effectImage = document.querySelector("#effectimage")
const closeEffect = document.querySelector("#closeeffect")
// selecting the class
document.querySelectorAll(".jseffect").forEach(fullview => {
    fullview.addEventListener("click", function () {
        // capturing the images sources in html
        effectImage.src = this.src; 
        // manipulating css style effect into js as an effect
        effect.style.display = "flex"; 
    });
});


closeEffect.addEventListener("click", function(){
    effect.style.display = "none";
});

// if statement for the closing of the image
effect.addEventListener("click", function(event){
    if (event.target === effect){
        effect.style.display = "none";
    }
});

// https://www.youtube.com/watch?v=4SQXOA8Z-lo got the prompt from here