window.addEventListener('load', function () {
    if($('.boxlayout').length) box_position();
}, false);
window.addEventListener('resize', function () {
    if($('.boxlayout').length) box_position();
}, false);
function box_position(){
    var top = window.innerHeight *.5 - $('.boxlayout')[0].offsetHeight *.5;
    if(top <= 1) top = 0;
    $('.boxlayout')[0].style.marginTop = top+'px';
}
