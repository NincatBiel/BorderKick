//variaveis
let slideIndex = 0;
let euaslideIndex = 0;
let mexslideIndex = 0;

//funcion call
Mainslideworking();
EUAslideworking();
MEXslideworking();


// function for slides
function Mainslideworking(){
    let i;
    let slide = document.getElementsByClassName("slide");
    
    for (i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slide.length) {
        slideIndex = 1
    }
    slide[slideIndex-1].style.display = "block";
    setTimeout(Mainslideworking, 2000);
}

function EUAslideworking(){
    let i;
    let euaslide = document.getElementsByClassName("euaslide");

    for (i = 0; i < euaslide.length; i++){
        euaslide[i].style.display = "none";
    }
    euaslideIndex++;
    if (euaslideIndex > euaslide.length) {
        euaslideIndex = 1;
    }
    euaslide[euaslideIndex-1].style.display = "block";
    setTimeout (EUAslideworking, 2000);

}

function MEXslideworking(){
    let i;
    let mexslide = document.getElementsByClassName("mexslide");

    for (i = 0; i < mexslide.length; i++){
        mexslide[i].style.display = "none";
    }
    mexslideIndex++;
    if (mexslideIndex > mexslide.length) {
        mexslideIndex = 1;
    }
    mexslide[mexslideIndex-1].style.display = "block";
    setTimeout (MEXslideworking, 2000);

    console.log(mexslideIndex)
}