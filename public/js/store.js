$(function () {
    $('#fullpage').fullpage({
        verticalCentered: false
    });
});

function toPage(page){
    $.fn.fullpage.moveTo(page);    
}

function pageUp() {
    $.fn.fullpage.moveSectionUp();
}