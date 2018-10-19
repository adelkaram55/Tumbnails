var slideshow = document.getElementById('container');
var thumbnails = document.getElementById('thumbnails');
var arr =["img_5terre_wide.jpg","img_lights_wide.jpg","img_mountains_wide.jpg","img_nature_wide.jpg","img_woods_wide.jpg"];
var currentSlideIndex = 0;




 for(var i = 0; i < arr.length; i++){

    thumbnails.innerHTML += "<div class='thumb' onclick ='get("+i+")'></div>";
    var thumb = document.getElementsByClassName('thumb')[i];
    thumb.style.backgroundImage += "url('assets/"+ arr[i] +"')";

}


function caption(){   
    var image = arr[currentSlideIndex];
    document.getElementById('caption').innerHTML =  "IMAGE:"+" "+ image;
    
    

}

function changephoto(){
    var image = arr[currentSlideIndex];
    slideshow.style.backgroundImage = "url('assets/"+image+"')";
}

function check(){
 

     if (currentSlideIndex < 0 ){
        currentSlideIndex = arr.length-1;
    }
   else if (currentSlideIndex > arr.length - 1 ){
        currentSlideIndex = 0;
    }
}

function next(){
    
    currentSlideIndex++;
    check();
    changephoto();
    caption();
    count();

   
}
function prev(){

    currentSlideIndex--;
    check();
    changephoto();
    caption();
    count();
   
 
}

function get(i){
    
    
    slideshow.style.backgroundImage = "url('assets/"+arr[i]+"')";
    document.getElementById('caption').innerHTML =  "IMAGE:"+" "+ arr[i];
    document.getElementById('count').innerHTML = [i];
    
   
}
function count(){
    
    document.getElementById('count').innerHTML = currentSlideIndex;

 
  
 
}

