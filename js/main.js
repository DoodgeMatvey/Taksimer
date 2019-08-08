$('.block-work-text-first').click(function() {
    $(".block-work-main__image-f").attr('src','img/top-phone.png');
    $(".block-work-text-first").toggleClass('div-active');
    $(".block-work-text-second").removeClass('div-active');
    $(".block-work-text-third").removeClass('div-active');
});
$('.block-work-text-second').click(function() {
    $(".block-work-main__image-f").attr('src','http://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/IPod_touch_4G.png/440px-IPod_touch_4G.png');
    $(".block-work-text-second").toggleClass('div-active');
    $(".block-work-text-third").removeClass('div-active');
    $(".block-work-text-first").removeClass('div-active');
});
$('.block-work-text-third').click(function() {
    $(".block-work-main__image-f").attr('src','http://www.seller.shoponn.in/Item/Apple%20Smart%20Cover%20for%2010%205%20iPad%20Pro%202018%20Charcoal%20Gray%20C.jpg');
    $(".block-work-text-third").toggleClass('div-active');
    $(".block-work-text-second").removeClass('div-active');
    $(".block-work-text-first").removeClass('div-active');
});
$('.button2-modal').click(function() {
    $(".send").removeClass("d-block");
    $(".send").toggleClass("d-block");
    
});
// Modals
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
var exit = document.querySelector('.exit-img');
function openWin() {
    overflow.className = 'overflow';
    document.body.appendChild(overflow);
    var height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 +'px';
    modal.style.top = "50%";
}
overflow.onclick = function () {
    modal.style.top = "-100%";
    overflow.remove();
    document.body.style.overflow = "visible";

}
exit.onclick = function () {
    modal.style.top = "-100%";
    overflow.remove();
    document.body.style.overflow = "visible";
}