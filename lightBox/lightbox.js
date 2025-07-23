// function to include html popup code 
function includePopupHTML(){
    let html = '<div id="vis-pop"><span id="close" onclick = "clossButton ()" ><img id="npop" src="lightBox/images/close.png" alt="closs"></span><img id="leftarrow" src="lightBox/images/left.png" alt="left"><img id="rightarrow" src="lightBox/images/right.png" alt="right"><img id="mainpopImage" src="assets/images/Flag_of_Pakistan.png" alt="Flag_of_Pakistan"></div>';


    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv,document.body.firstChild);
}

// includePopupHTML();
let img;
let current;
// function to initialize plugin 
function imagePopupinit(target){
    // select all images 
img = document.getElementsByClassName(target);

// console.log(img);
// add event listener on selected images 
for(let i=0; i<img.length;i++){
    // add pointer 
    img[i].style.cursor = 'pointer';

    // add event listner 
    img[i].addEventListener('click',function(){
        document.getElementById('mainpopImage').src = this.src;
        document.getElementById('vis-pop').style.display = 'block';
        checkarrow();
    });

}
    includePopupHTML();

    // next Button 
    document.getElementById('rightarrow').addEventListener('click',function(){
         nextImg ();        
    });
    // previous Button 
    document.getElementById('leftarrow').addEventListener('click',function(){
         prvImg ();        
    });
}


// close button 
function clossButton (){
    document.getElementById('mainpopImage').src = "";
    document.getElementById('vis-pop').style.display = 'none';

}

// get current image 
function getCurrentImage(){
    for( var i = 0; i< img.length; i++){
        if(img[i].src == document.getElementById('mainpopImage').src){
            current = i;
        }
    }
}


// next images 
function nextImg (){
    getCurrentImage();
    // it change the current image src withe next image source 
    current++;
    document.getElementById("mainpopImage").src = img[current].src;
    checkarrow();
}
// previous image 
function prvImg (){
    getCurrentImage();
    // change the current image src with previouse image
    current--;
    document.getElementById("mainpopImage").src = img[current].src;
    checkarrow();
}



// check arrow 
function checkarrow(){
    // get current image 
    getCurrentImage();
    // if the current image is first it remove previous image arrow and only show next image arrow
    if(current =="0"){
        document.getElementById('leftarrow').style.display = 'none';
        document.getElementById('rightarrow').style.display = 'block';
    }
    // if the current image is last it remove next image arrow and only show previous image arrow
    else if(current == img.length - 1){
         document.getElementById('rightarrow').style.display = 'none';
          document.getElementById('leftarrow').style.display = 'block';
// else it show both arrow image
    } else{
         document.getElementById('leftarrow').style.display = 'block';
         document.getElementById('rightarrow').style.display = 'block';
    }
}