var i=0;
var images=[];
var time =2000;


images[0] = '/img/pic0.jpeg';
images[1] = '/img/pic1.jpeg';
images[2] = '/img/pic2.jpeg';
images[3] = '/img/pic3.jpeg';
images[4] = '/img/pic4.jpeg';
images[5] = '/img/pic5.jpeg';
images[6] = '/img/pic6.jpeg';
images[7] = '/img/pic7.jpeg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
i++;
    }
    else{
        i=0;
    }
    
setTimeout("changeImg()", time);

}


window.onload = changeImg;