// Dom
/*
var demo = document.getElementById("demo");
var imgs = document.getElementsByClassName("img-fluid");
var imgs = document.getElementsByTagName("img");
var inputs = document.getElementsByName("gender");
var demo = document.querySelector(".item");
var demo = document.querySelectorAll(".item");

demo.innerHTML = "esraa ibrahim";

test.style.color = "red";
test.style.backgroundColor = "black";
test.style.position = "relative";
test.style.left = "200px"; 
test.style.borderRadius = "50%"; // images

var imgTest = document.getElementById("images");
imgTest.src = "images/portfolio-1.jpg";
imgTest.alt = "esraa";

var link = document.querySelector("a")
link.href = "https://www.google.com";
link.target = "_black";
*/



// var demo = document.getElementById("demo");
// demo.addEventListener("click", function()
// {
//     sayHi("esraa")
// })

// function sayHi(name)
// {
//     alert("hesham" + name);
// }




// var img = document.querySelector("img");

// document.addEventListener("click",function(eventInfo){
//     img.style.left = eventInfo.pageX;
//     img.style.top = eventInfo.pageY;
// });
//-------------------------------------------------------------------
// element
// event
// action
var imgs              = Array.from(document.querySelectorAll(".img-fluid"));
var lightBoxContainer = document.getElementById("lightboxContainer");
var lightBoxItem      = document.getElementById("lightboxItem");
var closeIcon         = document.getElementById("close");
var nextIcon          = document.getElementById("next");
var previousIcon      = document.getElementById("previous");   
var currentIndex      = 0;        



for(var i=0; i<imgs.length; i++)
{
    imgs[i].addEventListener("click",function(e)
    {
        lightBoxContainer.style.display = "flex"; 
        currentIndex = imgs.indexOf(e.target);
        var imgSrc = e.target.src;
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    })
}



closeIcon.addEventListener("click",closeSlider)
function closeSlider()
{
    lightBoxContainer.style.display = "none"; 
}

nextIcon.addEventListener("click",getNextSlide)
function getNextSlide()
{
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}

previousIcon.addEventListener("click",getPreviousSlide)
function getPreviousSlide()
{
    currentIndex--;
    if(currentIndex<0){
        currentIndex = imgs.length-1
    }
    var imgSrc = imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
    
}

// event keybourd
document.addEventListener("keydown",function(e)
{
    if(e.key=="Escape"){
        closeSlider()
    }
    else if(e.key=="ArrowRight"){
        getNextSlide()
    }
    else if(e.key=="ArrowLeft"){
        getPreviousSlide()
    } 
})












