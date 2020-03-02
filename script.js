var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector('.right-slide');
var prevSlide=document.querySelector('.left-slide');
var totalSlider=slides.length;
var index=0;

nextSlide.onclick=function(){
    next('next');
}
prevSlide.onclick=function(){
    next('prev');
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlider){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlider-1;
        }
        else{
            index--;
        }
    }
    for(i=0;i<totalSlider;i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}