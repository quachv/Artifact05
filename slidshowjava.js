var myImages =["images/module01.PNG", "images/artifact01.PNG", "images/module02.PNG","images/artifact02.PNG","images/artifact03.PNG"];
var captionImages =["Module 1 - This is a sample HTML assignment using basic HTML link images with links","Artifact 1 - This is a sample HTML assignment to create different headings for a resume","Module 2 - This is a sample assignment using HTML to create tables","Artifact 2 - This is a sample assignment using HTML to create tables to reproduce a chessboard","Artifact 3 - This is a sample assignment using HTML to ask for user inputs and then using Java to produce a rhombus"];

var index=0; 

function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}

setInterval(autoSlide,2000); // Next