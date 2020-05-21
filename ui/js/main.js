window.addEventListener('load', box_position, false);
window.addEventListener('resize', box_position, false);
function box_position(){
    // this function will fire on resizing the browser window and onload
    if($('.boxlayout').length){
        // center this element in the middle of the browser
        var top = window.innerHeight *.5 - $('.boxlayout')[0].offsetHeight *.5;
        if(top <= 1) top = 0;
        $('.boxlayout')[0].style.marginTop = top+'px';
    }
}
