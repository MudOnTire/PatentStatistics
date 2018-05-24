$(function () {
    $('#fullpage').fullpage();
    $('.page-arrow').on('click touch', function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('.jump-link').on('click', function () {
        $.fn.fullpage.moveTo(1);
    });
});

function pageUp() {
    $.fn.fullpage.moveSectionUp();
}

function updateIframeHeight(height){
    $('#collegeFrame').height(height);
}