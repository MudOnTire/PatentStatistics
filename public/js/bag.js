$(function () {
    $('#fullpage').fullpage();
    $('.page-arrow').on('click touch', function () {
        $.fn.fullpage.moveSectionDown();
    });
});

function toPage(page){
    $.fn.fullpage.moveTo(page);    
}

function pageUp() {
    $.fn.fullpage.moveSectionUp();
}